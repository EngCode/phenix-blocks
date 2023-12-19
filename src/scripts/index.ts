/*
 * Phenix.js
 * Version  : 0.6 Beta
 * License  : MIT
 * Copyright: 2022 Abdullah.Ramadan
*/

/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - D.O.M Ready
 * ===> 03 - Add Class
 * ===> 04 - Remove Class
 * ===> 05 - Toggle Class
 * ===> 06 - Get Ancestor [Parent, Parents Until]
 * ===> 07 - Get Siblings
 * ===> 08 - Get Next Siblings
 * ===> 09 - Get Previous Siblings
 * ===> 10 - CSS Styling
 * ===> 11 - Set Multiple Attributes
 * ===> 12 - Insert Elements
 * ===> 13 - Event Handler
 * ===> 14 - Resources Lazy-Loader
 * ===> 15 - Media Query Method
 * ===> 16 - Service Worker
 * ===> 17 - Define information's
 * ===> 18 - Define UI Effects
 * ===> 19 - Define Other Features
 * ===> 20 - Include Features
 * ===> 21 - Integration
 * ===> 22 - Phenix Selecting Method
 * ===> 23 - Your Custom Script [JS]
*/

/*====> Phenix Object <====*/
export class PhenixElements extends Array<HTMLElement | Object | 'object'> {
    /*====> D.O.M Ready <====*/
    ready(callback:any) {
        //====> Check if its Ready <====//
        if (document.readyState == 'complete') callback();

        //====> Wait for It to be Ready <====//
        else document.addEventListener('DOMContentLoaded', callback);

        //====> Return Phenix Elements <====//
        return this;
    }

    /*====> Add Class <====*/
    addClass(className:any) {
        //====> Split classNames string into an array of class names <====//
        const classNamesArray = className.split(' ');

        //====> Add Class for Each Element <====//
        this.forEach((element: HTMLElement) => {
            classNamesArray.forEach(className => element.classList.add(className));
        });

        //====> Return Phenix Elements <====//
        return this;
    }

    /*====> Remove Class <====*/
    removeClass(className:any) {
        //====> Split classNames string into an array of class names <====//
        const classNamesArray = className.split(' ');

        //====> Add Class for Each Element <====//
        this.forEach((element: HTMLElement) => {
            classNamesArray.forEach(className => element.classList.remove(className));
        });

        //====> Return Phenix Elements <====//
        return this;
    }

    /*====> Toggle Class <====*/
    toggleClass(className:any) {
        //====> Split classNames string into an array of class names <====//
        const classNamesArray = className.split(' ');

        //====> Add Class for Each Element <====//
        this.forEach((element: HTMLElement) => {
            classNamesArray.forEach(className => element.classList.toggle(className));
        });

        //====> Return Phenix Elements <====//
        return this;
    }

    /*====> Get Ancestor <====*/
    ancestor(target?) {
        //====> Define Ancestor Arrays <====//
        let ancestors = [];

        //====> Loop Through Phenix Elements <====//
        this.forEach((element:HTMLElement) => {
            //====> Define The First Parent <====//
            let parent:any = element.parentNode;

            //====> if has a Target <===//
            if (target && !element.matches('html')) {
                //====> Loop Over The Ancestors <====//
                while (parent && !parent.matches('html')) {
                    //====> When the Target has been Found Return it <====//
                    if (parent.matches(target)) { ancestors.push(parent); break; }
                    //====> Otherwise get the Next Ancestor <====//
                    else parent = parent.parentNode;
                }
            }

            //====> Otherwise Return the Parent <====//
            else ancestors.push(parent);
        });

        //====> Return Ancestors <====//
        if (ancestors.length > 1) return ancestors;
        else if (ancestors.length === 1) return ancestors[0];
    }

    /*====> Get Siblings <====*/
    siblings(target?) {
        //====> Siblings Define <====//
        let siblings = [];

        //====> Loop Through Phenix Elements <====//
        this.forEach((element:any) => {
            //====> Get This Element Parent Childs <====//
            let childs = element.parentNode.children;

            //====> if has No target [Return All Sibling] <====//
            if (!target) Array.from(childs).forEach((child:HTMLElement) => child !== element ? siblings.push(child) : null);

            //====> Otherwise Return the matched targets <====//
            else Array.from(childs).forEach((child:HTMLElement) => child !== element && child.matches(target) ? siblings.push(child) : null);
        });

        //====> Return Siblings <====//
        return siblings.length > 0 ? siblings : null;
    }

    /*====> Get Next Siblings <====*/
    next(target?, all_target?) {
        //====> Sibling Define <====//
        let siblings = [];
        
        //====> Loop Through Phenix Elements <====//
        this.forEach((element:any) => {
            //====> Define Next Unit <====//
            let nextUnit = element.nextElementSibling;
    
            //====> if No target [Return the Direct Next Sibling] <====//
            if (!target) siblings.push(nextUnit);
    
            //====> if Target is Detected <====//
            if (target) {
                //====> if All Next is the Target <====//
                if (target.includes('all', 0)) {
                    //====> Loop Through All Next Siblings <====//
                    while (nextUnit) {
                        //====> if All has Target & Matches this Unit <====//
                        if (all_target && nextUnit.matches(all_target)) siblings.push(nextUnit);
    
                        //====> if All has no Target get this Unit <====//
                        if (!all_target) siblings.push(nextUnit);
    
                        //====> get the next one <====//
                        nextUnit = nextUnit.nextElementSibling;
                    }
                }
    
                //====> Otherwise get the Next Matched Target [Next Until] <====//
                else {
                    //====> While there is a Next Unit <====//
                    while (nextUnit) {
                        //====> Check for the Target & Return it <====//
                        if (nextUnit.matches(target)) { siblings.push(nextUnit); break; } 
                        
                        //====> Otherwise Get the Next Unit <====//
                        else nextUnit = nextUnit.nextElementSibling;
                    }
                }
            }
        });

        //====> Return Siblings <====//
        if (siblings.length > 1) return siblings;
        else if (siblings.length === 1) return siblings[0];
    }

    /*====> Get Previous Siblings <====*/
    prev(target?, all_target?) {
        //====> Sibling Define <====//
        let siblings = [];
        
        //====> Loop Through Phenix Elements <====//
        this.forEach((element:any) => {
            //====> Define Previous Unit <====//
            let prevUnit = element.previousElementSibling;
    
            //====> if No target [Return the Direct Previous Sibling] <====//
            if (!target) siblings.push(prevUnit);
    
            //====> if Target is Detected <====//
            if (target) {
                //====> if All Previous is the Target <====//
                if (target.includes('all', 0)) {
                    //====> Loop Through All Previous Siblings <====//
                    while (prevUnit) {
                        //====> if All has Target & Matches this Unit <====//
                        if (all_target && prevUnit.matches(all_target)) siblings.push(prevUnit);
    
                        //====> if All has no Target get this Unit <====//
                        if (!all_target) siblings.push(prevUnit);
    
                        //====> get the previous one <====//
                        prevUnit = prevUnit.previousElementSibling;
                    }
                }
    
                //====> Otherwise get the Previous Matched Target [Previous Until] <====//
                else {
                    //====> While there is a Previous Unit <====//
                    while (prevUnit) {
                        //====> Check for the Target & Return it <====//
                        if (prevUnit.matches(target)) {
                            siblings.push(prevUnit);
                            break;
                        } else {
                            prevUnit = prevUnit.previousElementSibling;
                        }
                    }
                }
            }
        });
        
        //====> Return Siblings <====//
        if (siblings.length > 1) return siblings;
        else if (siblings.length === 1) return siblings[0];
    }

    /*====> Get Children <====*/
    child(target?:string) {
        //====> Children Define <====//
        let childs = [];

        //====> Loop Through Phenix Elements <====//
        this.forEach((element:any) => {
            //====> All Children <====//
            let all_childs = element.children;
    
            //====> if No target [Return All Direct Children] <====//
            if (!target) childs = all_childs;
    
            //====> if Target is Matched Return it <====//
            if (target) all_childs.forEach(element => element.matches(target) ? childs.push(element) : '');
        });

        //====> Return Children <====//
        if (childs.length > 1) return childs;
        else if (childs.length === 1) return childs[0];
    }

    /*====> CSS Styling <====*/
    css(style:object, clearInline?) {
        //====> if inline-style Clear is Activated <====//
        if (clearInline) this.forEach((element:HTMLElement) => (element.removeAttribute('style')));

        //====> for Each CSS Property <====//
        for (const [key, value] of Object.entries(style)) {
            //====> Convert Property[String] To Object Name[Key] <====//
            // let property = key.replace(/(-[a-z])/, prop => prop.replace("-", "").toUpperCase());

            //====> Style Elements <====//
            this.forEach((element:HTMLElement) => {
                element.style.setProperty(key, value);
                // element.style[property] = value
            });
        }

        //====> Return Phenix Elements <====//
        return this
    }

    /*====> Set Multiple Attributes <====*/
    setAttributes(attributes:{}) {
        //====> Loop Through Phenix Elements <====//
        this.forEach((element:HTMLElement) => {
            //====> Loop Through the Attributes <====//
            Object.keys(attributes).forEach(attribute => {
                //====> Set Attributes One By One <====//
                element.setAttribute(attribute, attributes[attribute]);
            });
        });

        //====> Return Phenix Elements <====//
        return this;
    }

    /*====> Insert Elements <====*/
    insert(position?:string, elementsPackage?:any) {
        //====> Define the Package <====//
        let new_package = [];

        //====> Loop Through Phenix Elements <====//
        this.forEach((element:HTMLElement) => {
            //===> String Element Converter to [Node] <===//
            if (typeof(elementsPackage) === 'string')
                elementsPackage = document.createRange().createContextualFragment(elementsPackage);

            //====> Insert After The Element <====//
            if (position === 'after') {
                element.parentNode.insertBefore(elementsPackage, element.nextSibling);
                //====> Include the New Element to the Package <====//
                new_package.push(element.nextElementSibling);
            }

            //====> Insert Before The Element <====//
            else if (position === 'before') {
                element.parentNode.insertBefore(elementsPackage, element);
                //====> Include the New Element to the Package <====//
                new_package.push(element.previousElementSibling);
            }

            //====> Insert Inside The Element at First <====//
            else if (position == 'prepend') {
                element.prepend(elementsPackage);
                //====> Include the New Element to the Package <====//
                new_package.push(element.firstChild);
            }

            //====> Insert Inside The Element at Last <====//
            else if (position == 'append') {
                element.appendChild(elementsPackage);
                //====> Include the New Element to the Package <====//
                new_package.push(element.lastChild);
            }
        });

        //====> Return the New Elements Package <====//
        if (new_package.length > 1) return new_package;
        else if (new_package.length === 1) return new_package[0];
    }

    /*====> Event Handler <====*/
    on(event, callback, live?, timer?) {
        //====> Attache a Normal Event <====//
        if (!live) {
            //====> Event for Each Element <====//
            this.forEach((element:HTMLElement) => {
                element.addEventListener(event, callback);
            });

            //====> Return Phenix Elements <====//
            return this;

        //====> Live Event <====//
        } else if (live && this.length > 0) {
            //====> Create Time Loop & Attach Event <====//
            let timerLoop = setInterval(() => this.forEach((element:HTMLElement) => element.addEventListener(event, callback)), timer | 1000);

            //====> Return the Elements & Time Loop <====//
            return {
                elements: this,
                timeLoop: timerLoop
            };
        }
    }

    /*====> Resources Lazy-Loader <====*/
    lazyLoading() {
        //====> Element Data <====//
        // let spinner = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwJSAwJTsgZGlzcGxheTogYmxvY2s7IHNoYXBlLXJlbmRlcmluZzogYXV0bzsiIHdpZHRoPSIyMDBweCIgaGVpZ2h0PSIyMDBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KPGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGNkY2RjIiBzdHJva2Utd2lkdGg9IjMiIHI9IjE4IiBzdHJva2UtZGFzaGFycmF5PSI4NC44MjMwMDE2NDY5MjQ0MSAzMC4yNzQzMzM4ODIzMDgxMzgiPgogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxcyIgdmFsdWVzPSIwIDUwIDUwOzM2MCA1MCA1MCIga2V5VGltZXM9IjA7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgo8L2NpcmNsZT4KPCEtLSBbbGRpb10gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vbG9hZGluZy5pby8gLS0+PC9zdmc+";
        
        //====> Loop Through Media Elements <====//
        Phenix('img, video, audio, iframe').forEach((element:HTMLElement) => {
            //====> Set Loading Mode <====//
            if (!Phenix(element).inView()) {
                //====> Get Data <====//
                let playable = element.matches('video' || 'audio'),
                    source = !playable ? element.getAttribute('src') : null,
                    preloaded = element.getAttribute('preload' || 'loading');

                //===> for [images, iframe] <===//
                if (element.matches('img'||'iframe')) {
                    // element.setAttribute('data-lazyload', source);
                    // element.setAttribute('src', spinner);
                    element.classList.add('px-loading')
                }

                //===> for [video, audio] <===//
                else if (playable && !preloaded) element.setAttribute('preload', 'none');
                element.setAttribute('loading', 'lazy');

                //====> Keep Watching Element While Scrolling <====//
                document.addEventListener('scroll', event => {
                    //====> if its in view-point set the original source <====//
                    if (element.matches('img'||'iframe') && Phenix(element).inView() && !element.matches('.px-loaded')) {
                        // element.setAttribute('src', source);
                        element.classList.remove('px-loading');
                        element.classList.add('px-loaded');
                    };
                });
            }

            //====> First View [workout] <====//
            else if (Phenix(element).inView() && element.matches('img') && element.getAttribute('data-lazyload')) {
                element.setAttribute('src', element.getAttribute('data-lazyload'));
                element.classList.add('px-loaded');
            }
        });

        //====> Other Elements Types <====//
        Phenix('.px-counter').forEach((counter:HTMLElement) => {
            if(!counter.classList.contains('counting')) document.addEventListener('scroll', event => {
                if(Phenix(counter).inView() && !counter.classList.contains('counting')) Phenix(counter).counter();
            });
        });

        //====> Return Phenix Elements <====//
        return this;
    }

    /*====> Media Query <====*/
    mediaQuery(breakpoint:any, fn_callback?:any, mobile_first?:boolean) {
        /*==== Breakpoints Points ====*/
        let xsmall_end = 499, /*===> Max xSmall breakpoint Width */
            small_start= 500, /*===> Min Small breakpoint Width */
            small_end = 774,  /*===> Max Small breakpoint Width */
            /*==== Medium Points ====*/
            medium_start = 775,  /*===> Min Medium breakpoint Width */
            medium_end = 1204,   /*===> Max Medium breakpoint Width */
            /*==== Large Points ====*/
            large_start = 1205, /*===> Min Large breakpoint Width */
            large_end = 1404,   /*===> Max Large breakpoint Width */
            /*==== xLarge Points ====*/
            xlarge_start = 1405, /*===> Min xLarge breakpoint Width */
            xlarge_end = 2565;   /*===> Max xLarge breakpoint Width */

        /*==== Activator ====*/
        const createQuery = () => {
            //==== Get Current Screen Width ====//
            let current_vw = Phenix(document).viewport('width');

            /*==== Extra Small ====*/
            if (mobile_first && breakpoint == 'xsmall') {
                if (current_vw >= 0) {
                    fn_callback();
                }
            } else if (breakpoint == 'xsmall') {
                if (current_vw <= xsmall_end) {
                    fn_callback();
                }
            }

            /*==== Small ====*/
            if (mobile_first && breakpoint == 'small')  {
                if (current_vw >= small_start) {
                    fn_callback();
                }
            } else if (breakpoint == 'small')  {
                if (current_vw <= small_end) {
                    fn_callback();
                }
            }

            /*==== Medium ====*/
            if (mobile_first && breakpoint == 'medium') {
                if (current_vw >= medium_start) {
                    fn_callback();
                }
            } else if (breakpoint == 'medium') {
                if (current_vw <= medium_end) {
                    fn_callback();
                }
            }

            /*==== Large ====*/
            if (mobile_first && breakpoint == 'large')  {
                if (current_vw >= large_start) {
                    fn_callback();
                }
            } else if (breakpoint == 'large')  {
                if (current_vw <= large_end) {
                    fn_callback();
                }
            }

            /*==== Extra Large ====*/
            if (mobile_first && breakpoint == 'xlarge') {
                if (current_vw >= xlarge_start) {
                    fn_callback();
                }
            } else if (breakpoint == 'xlarge')  {
                if (current_vw <= xlarge_end) {
                    fn_callback();
                }
            }

            /*==== Custom Media ====*/
            if (mobile_first && typeof(breakpoint) == 'number')   {
                if (current_vw >= breakpoint) {
                    fn_callback();
                }
            } else if (typeof(breakpoint) == 'number')  {
                if (current_vw <= breakpoint) {
                    fn_callback();
                }
            }
        };

        //===> Active <===//
        createQuery();

        //===> Live Check <===//
        window.addEventListener('resize', resizing => {
            createQuery();
        });

        //====> Return Phenix Elements <====//
        return this;
    }

    /*====> Dynamic Position <====*/
    dynamicPosition = () => {
        //====> Event for Each Element <====//
        this.forEach((element:HTMLElement) => {
            //=== Check for Visibility ===//
            let target_element:any = Phenix(element),
                panel_size = Math.round(target_element[0].clientHeight),
                stickyElement = document.querySelector('[data-sticky="absolute"]')?.getBoundingClientRect().height;
            
            if (panel_size == 0) return;
    
            //=== get viewport postion ===//
            let top = Math.round(target_element[0].getBoundingClientRect().top),
                stickySize = Math.round(stickyElement) || 0,
                offsetTop = Math.round(top+stickySize-(stickySize/4)),
                offsetBottom = Phenix(document).viewport().height - (panel_size + offsetTop);
    
            //====> to Top <====//
            if (offsetBottom < 0) {
                target_element.addClass('pos-before-y').removeClass('pos-after-y');
            }
    
            //====> to Bottom <====//
            else {
                target_element.addClass('pos-after-y').removeClass('pos-before-y');
            }
        });

        return this;
    };

    /*====> CSS/JS Importer <====*/
    import = (id:string, type:string, source:string, callback:any, isIntegrated:boolean) => {
        //===> if Already Exist Quit <===//
        if (document.querySelector(`#${id}-phenix-${type}`)) return;

        //===> Create Element <===//
        let element  = document.createElement(type),
            libPath = Phenix(document).getURL().phenixJS.replace('js/', 'lib/'),
            trueUrl = `${isIntegrated ? libPath : ""}${source}`;

        //===> Set ID <===//
        element.setAttribute('id', `${id}-phenix-${type === "link" ? "css" : type}`);

        //===> Set Source <===//
        if (type === "script") {
            element.setAttribute("src", trueUrl);
            element.setAttribute("async", "");
            //===> Append Element <===//
            document.body.appendChild(element);
        }

        //===> for CSS <===//
        else if (type === "link" || type === "css") {
            element.setAttribute("href", trueUrl);
            element.setAttribute("rel", "stylesheet");
            //===> Append Element <===//
            document.head.appendChild(element);
        };

        //====> When Loaded Run Callback <====//
        element.addEventListener("load", callback);

        //====> When Error Re-Load <====//
        element.addEventListener("error", event => element.setAttribute("src", trueUrl));
    };

    /*====> Define Information <====*/
    height; getCSS; direction; getURL
    inView; viewport; copyrights;

    /*====> Define UI Effects <====*/
    slideUp; slideDown; slideToggle;
    fadeOut; fadeIn; fadeToggle;

    /*====> Define Other Features <====*/
    counter; multimedia; timer;
    sticky; smothScroll; scrollSpy;
    design; themes; animations;

    /*====> Define Components <====*/
    dropdown; tabs; collapse; connect;
    popup; lightbox; menu; datatable;
    validation; uploader; progress;
    select; repeater; rating; seo; loader;
    slider; utilities; notifications; init;
}

/*====> Phenix Selecting Method <====*/
const Phenix = (selector?:any) => {
    /*====> Get Elements from Selector <====*/
    if (typeof(selector) === 'string') {
        //====> Select as Phenix Elements <====//
        let selected = document.querySelectorAll(selector);

        //====> Create Elements Query <====//
        if (selector.length > 0) return new PhenixElements(...selected);
    }

    /*====> if its Elements Passed it <====*/
    else if (selector !== null && typeof(selector) !== 'undefined' || 'number') {
        //====> if Not Array Make it one <====//
        if (!Array.isArray(selector) || typeof(selector) !== 'object') selector = [selector];

        //====> and Create Elements Query <====//
        return new PhenixElements(...selector);
    }
}

//====> Export Phenix <====//
export default Phenix;

//===> Page Loader Script <===//
import './integration/loader';

/*====> Import Features <====*/
import './features/get-info';   //==> Information
import './features/effects';    //==> UI Effects
import './features/counter';    //==> Animated Counter
import './features/animations'; //==> View-port Animations
import './features/validation'; //==> Form Validation
import './features/collapse';   //==> Collapse Toggle
import './features/notifications'; //==> Notifications

/*====> Import Components <====*/
import './components/menu';      //==> Menus
import './components/media';     //==> Media Setter
import './components/timer';     //==> Time Counter
import './components/dropdown';  //==> Dropdown
import './components/tabs';      //==> Tabs System
import './components/popup';     //==> Popups
import './components/progress';  //==> Progress
import './components/select';    //==> Advanced Select
import './components/uploader';  //==> File Uploader
import './components/datatable'; //==> Data-Tables

/*====> Integration <====*/
import './integration/slider';    //==> Splide.js Slider
import './integration/utilities'; //==> Phenix Utilities
import './integration/blocks';    //==> Phenix Blocks Scripts
import './integration/wordpress'; //==> Wordpress Integration

/*====> Custom Script <====*/
import './custom-scripts';

//====> Export Global Phenix <====//
module.exports = Phenix;