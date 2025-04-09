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
import '../global';

/*====> Animations <====*/
PhenixElements.prototype.animations = function (options?:{
    animation?:string, //===> Animation Name
    duration?:number,  //===> Animation Duration
    delay?:number,     //===> Animation Delay
    animateCSS?:boolean|string[]|string, //===> Animations Library
    directionFix?:boolean, //===> Directions Resolver
    flow?:string,    //====> From Top to Bottom [start] Reverse [end] Or Any of [both]
    into?:number,    //====> Increase Target Position By [number]
    offset?:number,  //====> Decrease Target Position By [number]
    threshold?:number, //====> How much of the element must be visible (0-1)
    lazyloading?:boolean, //====> to Animate Element after Another
    lazygroup?:any,      //====> Define the group fo each lazyloading group
    lazyStagger?:number, //====> Delay between lazy group items (ms)
    lazyFactor?:number,  //====> Multiplier for stagger calculation (default: 0.5)
    lazyOrder?:string,   //====> Animation order: 'sequential' (default), 'reverse', or 'random'
    removeOnExit?:boolean, //===> Remove animation when element exits viewport
    directionalAnimate?:boolean, //===> Use direction-based animations
    useObserver?:boolean,
}) {
    //====> Load Animation CSS Files <====//
    this.loadAnimationCSS(options?.animateCSS || 'all');

    //====> Process Elements <====//
    this.forEach((element:any) => {
        //====> if its the Main Document Return Nothing <====//
        if (element === window.document) return;

        //====> Get Options Data <====//
        const animation = element.getAttribute('data-animation') || options?.animation || 'fadeIn';
        const duration = parseInt(element.getAttribute('data-duration')) || options?.duration || 700;
        const delay = parseInt(element.getAttribute('data-delay')) || options?.delay || 0;
        const offset = parseInt(element.getAttribute('data-offset')) || options?.offset || 0;
        const flow = element.getAttribute('data-flow') || options?.flow || null;
        const into = parseInt(element.getAttribute('data-into')) || options?.into || 0;
        const threshold = parseFloat(element.getAttribute('data-threshold')) || options?.threshold || 0.1;
        const lazygroup = element.getAttribute('data-lazy-group') || options?.lazygroup || false;
        const lazyStagger = parseInt(element.getAttribute('data-lazy-stagger')) || options?.lazyStagger || 0;
        const lazyFactor = parseFloat(element.getAttribute('data-lazy-factor')) || options?.lazyFactor || 0.5;
        const lazyOrder = element.getAttribute('data-lazy-order') || options?.lazyOrder || 'sequential';
        const directionFix = options?.directionFix ?? true;
        const removeOnExit = options?.removeOnExit ?? false;
        const directionalAnimate = options?.directionalAnimate ?? false;
        const useObserver = options?.useObserver ?? false;

        //====> Directions Resolve <====//
        let currentAnimation = animation;
        if (directionFix) {
            //====> Get Direction <====//
            const pageDir = Phenix(document).direction();

            //====> Fix Directions <====//
            if (currentAnimation.includes('Start')) {
                currentAnimation = currentAnimation.replace('Start', pageDir === 'ltr' ? 'Left' : 'Right');
            } else if (currentAnimation.includes('End')) {
                currentAnimation = currentAnimation.replace('End', pageDir === 'ltr' ? 'Right' : 'Left');
            }
        }

        //====> Store Animation Name <====//
        const baseAnimation = currentAnimation;

        //====> Hide the Element <====//
        element.classList.add('visibility-hidden', 'animated');
        element.style.setProperty('--animation-delay', `${delay}ms`);
        element.style.setProperty('--animation-name', currentAnimation);
        element.style.setProperty('--animation-duration', `${duration}ms`);

        //====> Animate Method <====//
        const animate = () => {
            //====> Show the Element <====//
            Phenix(element).removeClass('visibility-hidden');
            
            //====> Slider Fallback <====//
            if (Phenix(element).ancestor('.px-slider')) return;
            
            //====> Direction-based animations <====//
            if (directionalAnimate && element._phenixDirection) {
                const direction = element._phenixDirection;
                
                //===> Update Animation Based on Direction <===//
                if ((direction === 'down' && baseAnimation.includes('Up')) || 
                    (direction === 'up' && baseAnimation.includes('Down')) || 
                    (direction === 'up' && baseAnimation.includes('In'))) {
                    currentAnimation = baseAnimation;
                    element.style.setProperty('--animation-name', currentAnimation);
                }
            }
            
            //====> Use requestAnimationFrame for better performance <====//
            requestAnimationFrame(() => {
                //====> Animations Classes <====//
                element.classList.add('view-active', currentAnimation);
            });
        };

        //====> Reset Animation <====//
        const resetAnimation = () => {
            if (removeOnExit) {
                element.classList.remove('view-active', currentAnimation);
            }
        };

        //====> Event handler for IntersectionObserver events <====//
        const inViewChangeHandler = (event) => {
            if (event.detail.inView) animate();
            else if (removeOnExit) resetAnimation();
        };
        
        //====> Add and Store Event Listener <====//
        element.addEventListener('phenixInViewChange', inViewChangeHandler);
        element._phenixInViewHandler = inViewChangeHandler;

        //====> Lazyloading Group <====//
        if (lazygroup) {
            //====> Get Animated Children <====//
            const animatedChildren = Array.from(element.querySelectorAll('[data-animation]'));
            
            //====> Skip if None <====//
            if (animatedChildren.length === 0) return;
            
            //====> Animation Order <====//
            let animationOrder = [...animatedChildren];
            
            //====> Handle Order Strategy <====//
            if (lazyOrder === 'reverse') {
                animationOrder.reverse();
            } else if (lazyOrder === 'random') {
                //===> Fisher-Yates Shuffle <===//
                for (let i = animationOrder.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [animationOrder[i], animationOrder[j]] = [animationOrder[j], animationOrder[i]];
                }
            }
            
            //====> Calculate Stagger Delay <====//
            const baseStagger = lazyStagger > 0 ? lazyStagger : duration * lazyFactor;
            
            //====> Apply Delays to Elements <====//
            animationOrder.forEach((item, index) => {
                //===> Calculate Item Delay <===//
                const itemDelay = delay + (index * baseStagger);
                
                //===> Set Delay Attributes <===//
                (item as HTMLElement).setAttribute('data-delay', String(itemDelay));
                (item as HTMLElement).style.setProperty('--animation-delay', `${itemDelay}ms`);
                
                //===> Store Sequence Index <===//
                (item as HTMLElement).setAttribute('data-sequence-index', String(index));
            });
            
            //====> Store Sequence Data <====//
            element._lazyAnimationSequence = {
                items: animationOrder,
                order: lazyOrder,
                stagger: baseStagger
            };
        }

        //====> Get Loading Screen <====//
        const loadingScreen = document.querySelector(".px-page-loader");
        
        //====> Start Animation Process <====//
        const startAnimations = () => {
            //====> Use Observer When Required <====//
            if (useObserver || threshold > 0.1) {
                //===> Create an inView observer with threshold <===//
                Phenix(element).inView({
                    offset, into, flow, threshold, useObserver: true
                });
                
                //===> Check if already in view <===//
                if (element._phenixInViewState) animate();
            } else {
                //====> Use simpler check for better performance <====//
                if (Phenix(element).inView({offset, into, flow})) {
                    animate();
                } else {
                    //===> Add scroll listener for faster response <===//
                    const scrollCheck = () => {
                        if (Phenix(element).inView({offset, into, flow})) {
                            animate();
                            window.removeEventListener('scroll', scrollCheck);
                        }
                    };
                    window.addEventListener('scroll', scrollCheck, {passive: true});
                }
            }
        };

        //====> Check for Loading Screen <====//
        if (loadingScreen) {
            //===> Use MutationObserver to detect when loading screen is hidden <===//
            const observer = new MutationObserver(() => {
                if (Phenix(loadingScreen).getCSS('display') === 'none') {
                    startAnimations();
                    observer.disconnect();
                }
            });
            
            observer.observe(loadingScreen, { attributes: true, attributeFilter: ['style', 'class'] });
            
            //===> Fallback timeout <===//
            setTimeout(startAnimations, 3000);
        } else {
            startAnimations();
        }
    });

    //====> Animations Loader <====//
    this.loadAnimationCSS = (thirdParty?: boolean|string[]|string) => {
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

    //====> Cleanup Method <====//
    this.cleanupAnimations = () => {
        this.forEach((element: any) => {
            //===> Clean Event Listener <===//
            if (element._phenixInViewHandler) {
                element.removeEventListener('phenixInViewChange', element._phenixInViewHandler);
                delete element._phenixInViewHandler;
            }
            
            //===> Clean Animation Sequence <===//
            if (element._lazyAnimationSequence) {
                delete element._lazyAnimationSequence;
            }
            
            //===> Clean IntersectionObserver <===//
            Phenix(element).cleanupInView();
        });
        
        //====> Return Phenix Elements <====//
        return this;
    };

    //====> Return Phenix Elements <====//
    return this;
}