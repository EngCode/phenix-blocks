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
    directionFix?:boolean, //===> Directions Resolver
    flow?:string,    //====> From Top to Bottom [start] Reverse [end] Or Any of [both]
    into?:number,    //====> Increase Target Position By [number]
    offset?:number,  //====> Decrease Target Position By [number]
    lazyloading?:boolean, //====> to Animate Element after Another
    lazygroup?:any,      //====> Define the group fo each lazyloading group
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
        const lazygroup = element.getAttribute('data-lazy-group') || options?.lazygroup || false;
        const directionFix = options?.directionFix !== false;

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
            //====> Animations Classes <====//
            element.classList.add('view-active', currentAnimation);
        };

        //====> Lazyloading Group <====//
        if (lazygroup) {
            //===> Define Delay <===//
            let currentDelay = 0;

            //===> Loop over the Animated Children <===//
            element.querySelectorAll('[data-animation]').forEach((item, index) => {
                currentDelay += duration/2;
                const staggerDelay = currentDelay/3;
                item.setAttribute('data-delay', String(staggerDelay));
                item.style.setProperty('--animation-delay', `${staggerDelay}ms`);
            });
        }

        //====> Create IntersectionObserver <====//
        const observerOptions = {
            threshold: 0.1,
            rootMargin: offset ? `${offset}px 0px 0px 0px` : '0px'
        };

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                animate();
                observer.unobserve(element);
            }
        }, observerOptions);

        //====> Start Animation Process <====//
        const startAnimations = () => {
            observer.observe(element);
        };

        //====> Get Loading Screen <====//
        const loadingScreen = document.querySelector(".px-page-loader");
        
        //====> Check for Loading Screen <====//
        if (loadingScreen) {
            //===> Use MutationObserver instead of interval <===//
            const loadingObserver = new MutationObserver(() => {
                if (Phenix(loadingScreen).getCSS('display') === 'none') {
                    startAnimations();
                    loadingObserver.disconnect();
                }
            });
            
            loadingObserver.observe(loadingScreen, { 
                attributes: true, 
                attributeFilter: ['style', 'class'] 
            });
            
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

    //====> Return Phenix Elements <====//
    return this;
}