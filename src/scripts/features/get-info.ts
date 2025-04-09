/**====> Reference By Comment <====
 * ===> 01 - Phenix Object
 * ===> 02 - Get Information Class
 * ===> 03 - Page Direction
 * ===> 04 - Get Element Height
 * ===> 05 - ViewPort Detector
 * ===> 06 - Get CSS Properties
 * ===> 07 - Get Viewport Dimensions
 * ===> 00 - ....
 * ===> 00 - ....
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

// Import global declarations
import '../global';

/*====> Page Direction <====*/
PhenixElements.prototype.direction = function (property?:string) {
    //====> Default Direction <====//
    let direction  = getComputedStyle(document.body).direction,
        directionStart = 'left',
        directionEnd   = 'right';

    //====> Change Direction if RTL <====//
    if (direction === 'rtl') {
        directionStart = 'right';
        directionEnd = 'left';
    }

    //====> Return Property Value <====//
    if (property == "start") return directionStart;
    else if (property == "end") return directionEnd;
    else return direction;
}

/*====> Get Element Height <====*/
PhenixElements.prototype.height = function () {
    //====> Define Target Data <====//
    let element:any = this[0],
        display = getComputedStyle(element).display,
        style = element.style,
        inlineDisplay = style.display;

    //====> for Getting Hidden Element Height <====//
    if (display == 'none') {
        style.display = 'block';
        style.visibility = 'hidden';
    }

    //====> Define Height Data <====//
    let height = element.scrollHeight,
        padding = parseInt(getComputedStyle(element).padding, 10) || 0;

    //====> Reset the Hidden Element <====//
    if (display === 'none') {
        //===> Reset Display <===//
        inlineDisplay ? style.display = display : style.display = null;
        //===> Reset Visibility <===//
        style.visibility = null;
    }

    return (height + padding);
}

/*====> Get CSS Properties <====*/
PhenixElements.prototype.getCSS = function(property?:string, pseudo?:string) {
    //====> Define the Target <====//
    let element:any = this[0];

    //====> Get the Target Style <====//
    let styles = getComputedStyle(element, pseudo);

    //====> If Property is Targeted <====//
    if (property) styles = styles[property];

    //====> Return Information <====//
    return styles;
}

//====> Type extensions for window properties <====//
// Extend window with custom properties
interface Window {
    _phenixViewportCache?: {
        width: number;  // Cache viewport width
        height: number; // Cache viewport height
    };
    _phenixLastWidth?: number;  // Track width changes
    _phenixLastHeight?: number; // Track height changes
}

/*====> ViewPort Detector <====*/
PhenixElements.prototype.inView = function (options?:{
    flow?:string,    //====> From Top to Bottom [start] Reverse [end] Or Any of [both]
    into?:number,    //====> Increase Target Position By [number]
    offset?:number,  //====> Decrease Target Position By [number]
    threshold?:number, //====> How much of the element should be visible (0-1)
    useObserver?:boolean, //====> Use IntersectionObserver when available (default: false)
}, flowOn?:string) {
    //====> Check if the Element Available <====//
    if (!this[0]) return false;
    
    //====> Define Data <====//
    const element = this[0];
    
    //====> Fast path for simple checks (most common case) <====//
    if (!options) {
        //====> Use cached state if available <====//
        if (element._phenixInViewState !== undefined) return element._phenixInViewState;
        
        //====> Fast viewport check <====//
        const rect = element.getBoundingClientRect();
        return (
            //====> Element's top edge is above the bottom of viewport <====//
            rect.top <= window.innerHeight && 
            //====> Element's bottom edge is below the top of viewport <====//
            rect.bottom >= 0 && 
            //====> Element's left edge is before the right edge of viewport <====//
            rect.left <= window.innerWidth && 
            //====> Element's right edge is after the left edge of viewport <====//
            rect.right >= 0
        );
    }
    
    //====> Get options <====//
    const flow = flowOn || options.flow;
    const useObserver = options.useObserver || false;
    
    //====> Simple check function <====//
    const isInViewport = () => {
        const rect = element.getBoundingClientRect();
        let inView = (
            //====> Element's top edge is above the bottom of viewport <====//
            rect.top <= window.innerHeight && 
            //====> Element's bottom edge is below the top of viewport <====//
            rect.bottom >= 0 && 
            //====> Element's left edge is before the right edge of viewport <====//
            rect.left <= window.innerWidth && 
            //====> Element's right edge is after the left edge of viewport <====//
            rect.right >= 0
        );
        
        //====> Apply flow direction if specified <====//
        if (flow === 'start') inView = inView && rect.top <= window.innerHeight;
        else if (flow === 'end') inView = inView && rect.bottom >= 0;
        
        //====> Apply offset/into if specified <====//
        if (options.offset) inView = inView && (rect.top <= window.innerHeight - options.offset);
        else if (options.into) inView = inView && (rect.bottom >= options.into);
        
        return inView;
    };
    
    //====> Use simple check if not using observer or threshold <====//
    if (!useObserver && (!options.threshold || options.threshold <= 0)) {
        //====> Use cached state if available <====//
        if (element._phenixInViewState !== undefined) return element._phenixInViewState;
        return isInViewport();
    }
    
    //====> From here on, we're using IntersectionObserver <====//
    
    //====> Clean up existing observer if any <====//
    if (element._phenixObserver) {
        element._phenixObserver.disconnect();
        element._phenixObserver = null;
    }
    
    //====> Initialize state with current viewport check <====//
    element._phenixInViewState = isInViewport();
    
    //====> Set up observer with minimal config <====//
    const rootMargin = options.offset ? `${options.offset}px 0px 0px 0px` : 
                     options.into ? `0px 0px ${options.into}px 0px` : '0px';
    
    //====> Create observer <====//
    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        
        //====> Update state based on flow direction <====//
        if (flow === 'start') {
            //====> Check if element is entering from the top <====//
            element._phenixInViewState = entry.isIntersecting && entry.boundingClientRect.top <= window.innerHeight;
        } else if (flow === 'end') {
            //====> Check if element is entering from the bottom <====//
            element._phenixInViewState = entry.isIntersecting && entry.boundingClientRect.bottom >= 0;
        } else {
            //====> Default visibility check <====//
            element._phenixInViewState = entry.isIntersecting;
        }
        
        //====> Track direction <====//
        element._phenixDirection = entry.boundingClientRect.top < 0 ? 'down' : 'up';
        
        //====> Dispatch event with minimal data <====//
        element.dispatchEvent(new CustomEvent('phenixInViewChange', { detail: { inView: element._phenixInViewState, direction: element._phenixDirection, ratio: entry.intersectionRatio } }));
    }, { root: null, rootMargin, threshold: options.threshold || 0 });
    
    //====> Store observer for cleanup <====//
    element._phenixObserver = observer;
    
    //====> Start observing <====//
    observer.observe(element);
    
    //====> Return initial state <====//
    return element._phenixInViewState;
}

//====> Clean up IntersectionObserver <====//
PhenixElements.prototype.cleanupInView = function() {
    //====> Check if the Element Available <====//
    if (!this[0]) return this;
    
    //====> Clean up for each element <====//
    this.forEach((element) => {
        //====> Disconnect observer if exists <====//
        if (element._phenixObserver) {
            element._phenixObserver.disconnect();
            element._phenixObserver = null;
        }
        
        //====> Clean up properties <====//
        delete element._phenixInViewState;
        delete element._phenixIntersectionRatio;
        delete element._phenixDirection;
    });
    
    //====> Return Phenix Elements <====//
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

//====> Copyrights <====//
PhenixElements.prototype.copyrights = function (project_name) {
    //===> Name Resolve <===//
    let name = project_name;
    if(!name) name = 'Phenix Themes';
    while (name.length < 24) name += ` `;
    //====> Print Copyrights <====//
console.info(`🔥🔥🔥🔥🔥 %cPhenix Design System 🔥🔥🔥💥🐦
🔥                                      🔥
🔥  - Project : ${name}🔥
🔥  - System  : Phenix Blocks           🔥
🔥  - Author  : Abdullah Ramadan        🔥
🔥  - Version : PDS v1.0.0              🔥
🔥  - Website : phenixthemes.com        🔥
🔥  - Docs    : design.phenixthemes.com 🔥
🔥  - Contact : +2-01122974539          🔥
🔥                                      🔥
🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🚀`, "color: #FB955D;font-weight: 600");
    //===> Return Phenix <===//
    return this;
};

//====> Get Current Path <====//
PhenixElements.prototype.getURL = function (location?) {
    //====> Current Script File <====//
    let url = document.querySelector('script[src*="phenix.js"]')?.getAttribute('src'),
        phenix_js = url.substring(0, url.lastIndexOf('/')+1);
    //====> Return information's <====//
    return {
        script : url,
        window : window.location.href,
        page   : window.location.pathname,
        phenixJS : phenix_js || 'https://cdn.jsdelivr.net/npm/phenix-ui@0.6.5/dist/js/',
        phenixCSS : phenix_js.replace('js', 'css') || 'https://cdn.jsdelivr.net/npm/phenix-ui@0.6.5/dist/css/',
    }
}

// Fix for the cleanupInView method error
declare module ".." {
    interface PhenixElements {
        cleanupInView(): PhenixElements;
    }
}
