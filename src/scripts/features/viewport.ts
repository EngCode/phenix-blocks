/**====> Reference By Comment <====
 * ===> 01 - ViewPort Detector
 * ===> 02 - Get Viewport Dimensions
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> ViewPort Detector <====*/
PhenixElements.prototype.inView = function (options?:{
    flow?:string,    //====> From Top to Bottom [start] Reverse [end] Or Any of [both]
    into?:number,    //====> Increase Target Position By [number]
    offset?:number,  //====> Decrease Target Position By [number]
    callback?:Function, //====> Callback when element is in view
}, flowOn?:string) {
    //===> Check if the Element Available ===//
    if (!this[0]) return false;

    //====> Define Data <====//
    const element = this[0];
    const flow = flowOn || options?.flow;

    //====> Clean up any existing observer <====//
    if (element._phenixObserver) {
        element._phenixObserver.disconnect();
        delete element._phenixObserver;
    }

    //====> Configure observer options <====//
    const observerOptions = { 
        threshold: 0.1,
        rootMargin: options?.offset ? `${options.offset}px 0px 0px 0px` : '0px'
    };

    //====> Create observer <====//
    const observer = new IntersectionObserver(entries => {
        const entry = entries[0];
        
        //====> Apply flow-specific logic <====//
        let isVisible = entry.isIntersecting;
        if (flow === 'start') {
            isVisible = entry.boundingClientRect.top < window.innerHeight;
        } else if (flow === 'end') {
            isVisible = entry.boundingClientRect.bottom > 0;
        } else if (options?.into && isVisible) {
            isVisible = entry.boundingClientRect.bottom > options.into;
        }
        
        //====> Execute callback if visible <====//
        if (isVisible) {
            if (options?.callback) options.callback(element);
            observer.unobserve(element);
            delete element._phenixObserver;
        }
    }, observerOptions);
    
    //====> Store and start observer <====//
    element._phenixObserver = observer;
    observer.observe(element);
    
    //====> Allow method chaining <====//
    return this;
}

//=====> Get Viewport Dimensions <=====//
PhenixElements.prototype.viewport = function (property:string) {
    //====> Get Element Data <====//
    let element = document.documentElement,
        width   = Math.max(element.clientWidth || 0, window.innerWidth || 0),
        height  = Math.max(element.clientHeight || 0, window.innerHeight || 0);

    //====> Get Width <====//
    if (property === 'width') return width;
    //====> Get Height <====//
    else if (property === 'height') return height;
    //====> Get Both <====//
    else return {width: width, height: height}
}