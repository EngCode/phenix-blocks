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

/*====> ViewPort Detector <====*/
PhenixElements.prototype.inView = function (options?:{
    flow:string,    //====> From Top to Bottom [start] Reverse [end] Or Any of [both]
    into:number,    //====> Increase Target Position By [number]
    offset:number,  //====> Decrease Target Position By [number]
}, flowOn?:string) {
    //====> Define Data <====//
    let element:any = this[0],
        flow:string = flowOn || options?.flow,
        scrollPosition = window.scrollY || window.pageYOffset,
        targetPosition = element.getBoundingClientRect().top + scrollPosition,

        //===> ViewPoint Position <====//
        viewport = {
            top: scrollPosition,
            bottom: scrollPosition + window.innerHeight
        };

        //====> Into Calc <====//
        if (options?.into && options?.into > 0) targetPosition = targetPosition + options?.into;

        //====> Offset Calc <====//
        else if (options?.offset && options?.offset > 0) targetPosition = targetPosition - options?.offset;

        //===> Target Data <====//
        let target = {
            top: targetPosition,
            bottom: targetPosition + element.clientHeight
        },

        //===> inBetween Odds <====//
        topIn = viewport.bottom >= target.top && target.top >= viewport.top ? true : false,
        bottomIn = viewport.top <= target.bottom && target.bottom <= viewport.bottom ? true : false,
        inBetween = topIn || bottomIn ? true : false;

    //====> if Visible from Top to Bottom <====//
    if(flow === 'start') return viewport.bottom >= target.top ? true : false;

    //====> if Visible from Bottom to Top <====//
    else if (flow === 'end') return bottomIn;

    //====> if Visible from Any of Both Directions <====//
    else return inBetween;
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
