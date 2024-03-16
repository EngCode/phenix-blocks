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
    animateCSS?:boolean, //===> Animations Library
    directionFix?:boolean, //===> Directions Resolver
    flow:string,    //====> From Top to Bottom [start] Reverse [end] Or Any of [both]
    into:number,    //====> Increase Target Position By [number]
    offset:number,  //====> Decrease Target Position By [number]
    lazyloading:boolean, //====> to Animate Element after Another
    lazygroup:any,      //====> Define the group fo each lazyloading group
}) {
    //====> Loop Through Phenix Elements <====//
    let viewPort_Handler = this.forEach((element:any, index) => {
        //====> if its the Main Document Return Nothing <====//
        if (element === window.document) return;

        //====> Get Options Data <====//
        let animation = element.getAttribute('data-animation') || options?.animation || 'fadeIn',
            duration  = parseInt(element.getAttribute('data-duration')) || options?.duration || 700,
            offset = parseInt(element.getAttribute('data-offset')) || options?.offset || false,
            flow = parseInt(element.getAttribute('data-flow')) || options?.flow || false,
            into = parseInt(element.getAttribute('data-into')) || options?.into || false,
            delay = parseInt(element.getAttribute('data-delay')) || options?.delay || 0,
            lazygroup = element.getAttribute('data-lazy-group') || options?.lazygroup || false,
            directionFix = options?.directionFix || true;

        //====> Directions Resolve <====//
        if (directionFix) {
            //====> Get Direction <====//
            let pageDir = Phenix(document).direction();

            //====> Fix Directions <====//
            if (animation.includes('Start')) {
                animation = animation.replace('Start', pageDir === 'ltr' ? 'Left' : 'Right');
            } else if (animation.includes('End')) {
                animation = animation.replace('End',  pageDir === 'ltr' ? 'Right' : 'Left');
            }
        }

        //====> Hide the Element <====//
        element.classList.add('visibility-hidden', 'animated');
        //====> Set Duration <====//
        // if (!element.getAttribute('data-duration')) element.setAttribute('data-duration', duration);

        //===> Set the Animation Name as CSS Variable <====//
        element.style.setProperty('--animation-delay', delay);
        element.style.setProperty('--animation-name', animation);
        element.style.setProperty('--animation-duration', duration);

        //====> if the Element in view Show it <====//
        let isInView = () => {
            //====> Animations CSS <====//
            if (delay) element.style.animationDelay = `${delay}ms`;
            if (duration) element.style.animationDuration = `${duration}ms`;

            //====> Animate Method <====//
            let animate = () => {
                //====> Show the Element <====//
                Phenix(element).removeClass('visibility-hidden');
                //====> Slider Fallback <====//
                if (Phenix(element).ancestor('.px-slider')) return;
                //====> Animations Classes <====//
                element.classList.add('view-active', animation);
            }

            //====> Animate if it is in ViewPort <====//
            if (Phenix(element).inView({offset:offset, into: into, flow: flow})) animate();

            //===> When is out of view Reset <===//
            // else element.classList.remove('view-active', animation);
        };

        //====> Lazyloading Group <====//
        if (lazygroup) {
            //===> Define Delay <===//
            let current_delay = 0;

            //===> Loop over the Animated Children <===//
            element.querySelectorAll('[data-animation]').forEach((item, index) => {
                current_delay += duration/2;
                item.setAttribute('data-delay', current_delay/3);
                element.style.setProperty('--animation-delay', current_delay/3);
            });
        }

        //====> Check for Loading Screen <====//
        const startAnimations = () => {
            //====> First View <====//
            isInView();
            //====> Scrolling Spy <====//
            Phenix(window).on('scroll', isInView);
        }

        //====> Get Loading Screen <====//
        let loadingScreen:any = document.querySelector(".px-page-loader");

        //====> Check for Loading Screen <====//
        if (loadingScreen) {
            //====> Search for Loading Screen <====//
            let loadingScreenChecker = setInterval(() => {
                //===> When the Loading Screen is Hidden <===//
                if (Phenix(loadingScreen).getCSS('display') === 'none') {
                    //===> Start Animations <====//
                    startAnimations();
                    //====> Clear Interval <====//
                    clearInterval(loadingScreenChecker);
                }
            }, 500);
        } else startAnimations();
    });

    //====> Animations Loader <====//
    let thirdParty:any = options?.animateCSS || 'all';

    //====> Loading Handler <====//
    let animation_loader = (package_name, id) => {
        if (document.querySelector(`#px-animations${id}`)) return;

        //===> Create Script Element <===//
        let animations_loader = document.createElement("link"),
            package_url =  `${Phenix(document).getURL().phenixCSS}animations/${package_name}.css`;

        //===> Set Attributes <===//
        animations_loader.setAttribute('id', `px-animations${id}`);
        animations_loader.setAttribute('rel', 'stylesheet');
        animations_loader.setAttribute('class', 'px-css-file');
        animations_loader.setAttribute('media', 'screen and (min-width: 2500px)');

        //===> Set Source <===//
        animations_loader.setAttribute("href", package_url);

        //===> Append Script <===//
        document.head.appendChild(animations_loader);

        //====> When Loaded Run <====//
        animations_loader.addEventListener("load", () => {
            viewPort_Handler;
            animations_loader.setAttribute('media', 'all');
        });

        //====> When Error Re-Load <====//
        animations_loader.addEventListener("error", () => animations_loader.setAttribute("href", package_url));
    }
    
    //====> Load All Animations <====//
    if (thirdParty.includes('all')) {
        animation_loader('all', '');
    }

    //====> Load Packages one by one <====//
    else {
        if (thirdParty === Array) thirdParty.push('utilities');
        thirdParty.forEach(animate_package => animation_loader(animate_package, `-${animate_package}`));
    }

    //====> Return Phenix Elements <====//
    return this;
}