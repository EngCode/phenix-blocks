/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Animations
 * ===> 03 - Get Options Data
 * ===> 04 - Animations Loader
 * ===> 05 - Directions Resolve
 * ===> 06 - Hide the Element
 * ===> 07 - Animate Method
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> Animations <====*/
PhenixElements.prototype.animations = function (options?:{
    animation?:string, //===> Animation Name
    duration?:number,  //===> Animation Duration
    delay?:number,     //===> Animation Delay
    animateCSS?:boolean|string[]|string, //===> Animations Library
    flow?:string,    //====> From Top to Bottom [start] Reverse [end] Or Any of [both]
    into?:number,    //====> Increase Target Position By [number]
    offset?:number,  //====> Decrease Target Position By [number]
    lazyloading?:boolean, //====> to Animate Element after Another
    lazygroup?:any,      //====> Define the group fo each lazyloading group
    stagger?:number,     //====> Define the stagger for the lazyloading group
    scrollDriven?:boolean, //====> Enable Scroll Driven Animations
    drivenEnd?:number|string, //====> Define the end of the driven progress
    exit?:string,        //====> Exit Animation
}) {
    //====> Animations Loader <====//
    const loadAnimationCSS = (thirdParty?: boolean|string[]|string) => {
        //===> Default to 'all' if undefined <===//
        const animationsToLoad = thirdParty === undefined ? 'all' : thirdParty;
        
        //====> Load Animation CSS Files <====//
        if (animationsToLoad === 'all') {
            Phenix(document).import('px-animations', 'css', `${Phenix(document).getURL().phenixCSS}animations/all.css`, () => {}, false);
        } else if (Array.isArray(animationsToLoad)) {
            //===> Ensure utilities is included <===//
            const animationsList = animationsToLoad.includes('utilities') ? animationsToLoad : [...animationsToLoad, 'utilities'];
            
            //===> Load each package <===//
            animationsList.forEach(pkg => {
                Phenix(document).import(`px-animations-${pkg}`, 'css', `${Phenix(document).getURL().phenixCSS}animations/${pkg}.css`, () => {}, false);
            });
        } else if (typeof animationsToLoad === 'string' && animationsToLoad !== 'all') {
            //===> Load the specified package and utilities <===//
            Phenix(document).import(`px-animations-${animationsToLoad}`, 'css', `${Phenix(document).getURL().phenixCSS}animations/${animationsToLoad}.css`, () => {}, false);
            Phenix(document).import('px-animations-utilities', 'css', `${Phenix(document).getURL().phenixCSS}animations/utilities.css`, () => {}, false);
        }
        
        //====> Return Phenix Elements <====//
        return this;
    };

    //====> Load Animation CSS Files <====//
    loadAnimationCSS(options?.animateCSS || 'all');

    //====> Process Elements <====//
    this.forEach((element:any) => {
        //====> if its the Main Document Return Nothing <====//
        if (element === window.document) return;

        //====> Get Options Data <====//
        const pageDir = Phenix(document).direction();
        const animation = element.getAttribute('data-animation') || options?.animation || 'fadeIn';
        const duration = parseInt(element.getAttribute('data-duration')) || options?.duration || 700;
        const delay = parseInt(element.getAttribute('data-delay')) || options?.delay || 0;
        const lazygroup = element.getAttribute('data-lazy-group') || options?.lazygroup || false;

        //====> Directions Resolve <====//
        let currentAnimation = animation;

        //====> Fix Directions <====//
        if (currentAnimation.includes('Start')) {
            currentAnimation = currentAnimation.replace('Start', pageDir === 'ltr' ? 'Left' : 'Right');
        } else if (currentAnimation.includes('End')) {
            currentAnimation = currentAnimation.replace('End', pageDir === 'ltr' ? 'Right' : 'Left');
        }

        //====> Hide the Element <====//
        element.classList.add('visibility-hidden', 'animated');
        element.style.setProperty('--animation-delay', `${delay}ms`);
        element.style.setProperty('--animation-name', currentAnimation);
        element.style.setProperty('--animation-duration', `${duration}ms`);

        //====> Setup Stagger for Sequence of Animations <====//
        if (lazygroup) {
            //====> Get Base Stagger <====//
            const baseStagger = parseInt(element.getAttribute('data-stagger')) || options?.stagger || 100;
            
            //====> Track Animation Order <====//
            let animationOrder = 0;

            //====> Create Intersection Observer <====//
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target as HTMLElement;
                        //====> Calculate Delay <====//
                        const delay = animationOrder * baseStagger;
                        //====> Set Delay <====//
                        element.style.setProperty('--animation-delay', `${delay}ms`);
                        //====> Increment Order <====//
                        animationOrder++;
                        //====> Stop Observing <====//
                        observer.unobserve(element);
                    }
                });
            }, {threshold: 0.1});

            //====> Observe Elements <====//
            element.querySelectorAll('[data-animation]').forEach(item => {
                observer.observe(item);
            });
        }

        //====> Handle Animation Setup <====//
        if (element.getAttribute('data-scrollDriven') || options?.scrollDriven) {
            //====> Get Animation Options <====//
            const completeAt = element.getAttribute('data-drivenEnd') || options?.drivenEnd || 'center';
            const exitAnimation = element.getAttribute('data-exit') || options?.exit;

            //====> Show the Element <====//
            Phenix(element).removeClass('visibility-hidden');
            element.classList.add('view-active', currentAnimation);

            //====> Create Scroll Progress Handler <====//
            const handleScrollProgress = () => {
                //====> Get Element Dimensions <====//
                const rect = element.getBoundingClientRect();
                const viewHeight = window.innerHeight;

                //====> Define Progress and Points <====//
                let progress, exitProgress;
                const completionPoint = (() => {
                    if (completeAt === 'center') return viewHeight / 2;
                    if (completeAt === 'top') return 0;
                    if (completeAt === 'bottom') return viewHeight;
                    return (viewHeight * (parseInt(completeAt as string) || 50)) / 100;
                })();

                //====> Calculate Progress <====//
                if (rect.top >= viewHeight || rect.bottom <= 0) {
                    progress = 0;
                    exitProgress = rect.top >= viewHeight ? 0 : 1;
                } else {
                    const startDistance = viewHeight - rect.top;
                    const totalDistance = viewHeight + rect.height;
                    progress = startDistance / totalDistance;
                    progress = progress * (viewHeight / completionPoint);
                    progress = Math.min(Math.max(progress, 0), 1);

                    //====> Calculate Exit Progress <====//
                    if (exitAnimation) {
                        exitProgress = rect.bottom < viewHeight 
                            ? (viewHeight - rect.bottom) / rect.height
                            : 0;
                        exitProgress = Math.min(Math.max(exitProgress, 0), 1);
                    }
                }

                //====> Update Progress Properties <====//
                element.style.setProperty('--animation-progress', progress.toString());
                if (exitAnimation) {
                    element.style.setProperty('--exit-progress', exitProgress.toString());
                    if (exitProgress > 0) element.classList.add(exitAnimation);
                }
            };

            //====> Setup and Cleanup <====//
            element.classList.add('scroll-progress');
            window.addEventListener('scroll', handleScrollProgress, { passive: true });
            handleScrollProgress();

            //====> Cleanup Observer <====//
            const observer = new MutationObserver((mutations, obs) => {
                if (!document.contains(element)) {
                    window.removeEventListener('scroll', handleScrollProgress);
                    obs.disconnect();
                }
            });
            observer.observe(document, { childList: true, subtree: true });
        } 
        //====> Handle Regular Animations <====//
        else {
            //====> Get Exit Animation <====//
            const exitAnimation = element.getAttribute('data-exit') || options?.exit;

            //====> Get Position Customization Options <====//
            const offset = parseInt(element.getAttribute('data-offset')) || options?.offset || 0;
            const into = parseInt(element.getAttribute('data-into')) || options?.into || 0;

            //====> Calculate Root Margin <====//
            const topMargin = into - offset;
            const rootMargin = `${topMargin}px 0px ${offset}px 0px`;

            //====> Create Intersection Observer <====//
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const element = entry.target as HTMLElement;
                    
                    if (entry.isIntersecting) {
                        //====> Entry Animation <====//
                        if (!element.classList.contains('view-active')) {
                            Phenix(element).removeClass('visibility-hidden');
                            element.classList.add('view-active', currentAnimation);
                            //====> Remove Exit Animation if Exists <====//
                            if (exitAnimation) element.classList.remove(exitAnimation);
                        }
                    } else if (exitAnimation) {
                        //====> Exit Animation <====//
                        const isScrollingDown = entry.boundingClientRect.top < 0;
                        if (isScrollingDown) {
                            element.classList.remove(currentAnimation);
                            element.classList.add(exitAnimation);
                        }
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin
            });

            //====> Start Observing <====//
            observer.observe(element);
        }
    });

    //====> Return Phenix Elements <====//
    return this;
}