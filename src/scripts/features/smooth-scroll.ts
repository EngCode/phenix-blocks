/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Smoth-Scroll
 * ===> 03 - Sticky Elements
 * ===> 04 - Scroll-Spy
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> Smooth-Scroll <====*/
PhenixElements.prototype.smothScroll = function (options?:{
    target?:string,   //===> Target to Scroll to
    offset?:number,   //===> Decrease Target Position By [number]
    into?:number,     //===> Increase Target Position By [number]
    duration?:number, //===> Scroll Animation Duration
    delay?:number,    //===> Delay Before Scroll
}) {
    //====> Loop Through Phenix Elements <====//
    this.on('click', event => {
        //====> Prevent Default Click Behavior <====//
        event.preventDefault();

        //====> Element Data <====//
        let element:HTMLElement = event.target,
            target:HTMLElement  = document.querySelector(element.getAttribute('href')?.length > 1 ? element.getAttribute('href') : element.getAttribute('data-target') ? element.getAttribute('data-target') : options.target ? options?.target : 'div:first-of-type'),
            start:number  = null,
            into:number   = parseInt(element.getAttribute('data-into')) || options?.into || 0,
            offset:number = parseInt(element.getAttribute('data-offset')) || options?.offset || 0,
            viewPos:number  = Math.round(window.pageYOffset || window.scrollY),
            duration:number = parseInt(element.getAttribute('data-duration')) || options?.duration || 700,
            delay:number = parseInt(element.getAttribute('data-delay')) || options?.delay || 0,
            posTest = target?.getBoundingClientRect(),
            position:number = posTest ? Math.round(posTest?.top) : 0,
            numCheck = (n) => {return 1/(n*0)===1/0},
            //====> Animations Timing Function <====//
            timeFunc:any  = (time, current, target, duration) => {
                //===> Time / Duration / 2 <===//
                time /= duration / 2;
                //===> if Time Ends <===//
                if (time < 1) return target / 2 * time * time + current;
                //===> Otherwise <===//
                else {
                    time--;
                    return -target / 2 * (time * (time - 2) - 1) + current;
                }
            };

        //====> Offset Calc <====//
        if (into && into > 0) position = position + into;
        if (offset && offset > 0) position = position - offset;
        
        //====> Scroll Animation <====//
        function activator(currentTime) {
            //====> Update Start Time <====//
            if (start === null) start = currentTime;

            //====> Update Time <====//
            let timeElapsed = currentTime - start,
                scrollAnimate = timeFunc(timeElapsed, viewPos, position, duration);

            //====> Start Scrolling <====//
            window.scrollTo(0, scrollAnimate);

            //====> not the End ? get the next frame <====//
            if (timeElapsed < duration) requestAnimationFrame(activator);

            //====> the End ? Update View Position <====//
            else {
                viewPos = Math.round(window.pageYOffset);
                //===> Hash URL Update <===//
                let loc:any = window;
                loc.location.href = element.getAttribute('href') || element.getAttribute('data-target') || options?.target;
            }
        }

        //====> Activate Scrolling <====//
        if(delay > 0) {
            //====> Delay Scroll <====//
            setTimeout(() => requestAnimationFrame(activator), delay);
        } else requestAnimationFrame(activator);
    });

    //====> Return Phenix Elements <====//
    return this;
}