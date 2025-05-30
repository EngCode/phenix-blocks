/*
 * Phenix Design System
 * Version  : 1.3.0
 * License  : GPL-3.0
 * Copyright: 2025 Abdullah.Ramadan
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
 * ===> 10 - Set CSS Styls
 * ===> 11 - Set Multiple Attributes
 * ===> 12 - Insert Elements
 * ===> 13 - Event Handler
 * ===> 14 - Resources Lazy-Loader
 * ===> 15 - Media Query Method
 * ===> 16 - Dynamic Position
 * ===> 17 - CSS/JS Importer
 * ===> 18 - Convert Pixels to REM
 * ===> 19 - Copy to Clipboard
 * ===> 20 - Audio Trigger
 * ===> 21 - Convert String to Boolean
 * ===> 22 - Define Information
 * ===> 23 - Define UI Effects
 * ===> 24 - Define Other Features
 * ===> 25 - Include Features
 * ===> 26 - Integration
 * ===> 27 - Phenix Selecting Method
 * ===> 28 - Your Custom Script [JS]
*/

/*====> Phenix Object <====*/
export class PhenixElements extends Array<HTMLElement | Record <string, any>> {
    /*====> D.O.M Ready <====*/
    ready(callback: () => void): this {
         //====> Check if its Ready <====//
        if (document.readyState === 'complete') queueMicrotask(callback);
        //====> Wait for It to be Ready <====//
        else document.addEventListener('DOMContentLoaded', () => queueMicrotask(callback),{ once: true });
        //====> Return Phenix Elements <====//
        return this;
    }

    /*====> Add Class <====*/
    addClass(className: any) {
        //====> Split classNames string into an array of class names <====//
        const classNamesArray = className.split(' ');
        const classNamesLength = classNamesArray.length;

        //====> Add Class for Each Element <====//
        for (let i = 0; i < this.length; i++) {
            const element = this[i] as HTMLElement;
            const classList = element.classList;

            for (let j = 0; j < classNamesLength; j++) {
                classList.add(classNamesArray[j]);
            }
        }

        //====> Return Phenix Elements <====//
        return this;
    }

    /*====> Remove Class <====*/
    removeClass(className: string) {
        //====> Split classNames string into an array of class names and convert it to a Set <====//
        const classNamesSet = new Set(className.split(' '));

        //====> Remove Class for Each Element <====//
        this.forEach((element: HTMLElement) => {
            element.classList.remove(...classNamesSet);
        });

        //====> Return Phenix Elements <====//
        return this;
    }

    /*====> Toggle Class <====*/
    toggleClass(className: string) {
        //====> Split classNames string into an array of class names <====//
        const classNamesArray = className.split(' ');

        //====> Loop through each element only once <====//
        for (let i = 0; i < this.length; i++) {
            const element = this[i] as HTMLElement;
            const classList = element.classList;

            //====> Check if element already has the class <====//
            const hasClass = classNamesArray.some(className => classList.contains(className));

            //====> Toggle the class based on its presence <====//
            classNamesArray.forEach(className => {
                if (hasClass) {
                    classList.remove(className);
                } else {
                    classList.add(className);
                }
            });
        }

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
            else {
                //====> if All Next is the Target <====//
                if (all_target) {
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
        if (siblings.length === 1 && !all_target) return siblings[0];
        else if (siblings.length > 0 || all_target) return siblings;
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
                if (all_target) {
                    //====> Loop Through All Previous Siblings <====//
                    while (prevUnit) {
                        //====> if All has Target & Matches this Unit <====//
                        if (all_target && prevUnit.matches(target)) siblings.push(prevUnit);
    
                        //====> if All has no Target get this Unit <====//
                        else if (!all_target) siblings.push(prevUnit);
    
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
        if (siblings.length === 1 && !all_target) return siblings[0];
        else if (siblings.length > 0 || all_target) return siblings;
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

    /*====> Set CSS Styls <====*/
    css(style:object, clearInline?) {
        //====> Check for the Elements <====//
        if (this.length === 0) return;

        //====> if inline-style Clear is Activated <====//
        if (clearInline) this.forEach((element:HTMLElement) => (element.removeAttribute('style')));

        //====> for Each CSS Property <====//
        for (const [key, value] of Object.entries(style)) {
            //====> Style Elements <====//
            this.forEach((element:HTMLElement) => {
                element.style.setProperty(key, value);
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
            if (typeof(elementsPackage) === 'string') elementsPackage = document.createRange().createContextualFragment(elementsPackage);

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
        //====> Loop Through Media Elements <====//
        Phenix('img, video, audio, iframe').forEach((element:HTMLElement) => {
            //====> Set Loading Mode <====//
            if (!element.matches('.px-loaded')) {
                //====> Get Data <====//
                let playable = element.matches('video') || element.matches('audio') || element.matches('iframe'),
                    preloaded = element.getAttribute('preload') || element.getAttribute('loading');

                //===> Mark as Loading <===//
                if (element.matches('img') || element.matches('iframe')) element.classList.add('px-loading');

                //===> Native Loading Attribute <===//
                if (playable && !preloaded) element.setAttribute('preload', 'none');
                else if(element.matches('img')) element.setAttribute('loading', 'lazy');

                //====> Watch Element <====//
                Phenix(element).inView({
                    offset: 100,
                    callback: () => {
                        if (element.matches('img') || element.matches('iframe')) {
                            element.classList.remove('px-loading');
                            element.classList.add('px-loaded');
                        }
                    },
                    feature: 'lazyloading'
                });
            }
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
    import = (id:string, tag:string, source:string, callback:any, options?:boolean|{
        integrated?: boolean;   // Whether to prepend the library path to the source
        module?: boolean;       // Whether to load as ES6 module
        importMap?: Record<string, string>; // Import map for ES6 modules
    }) => {
        //===> Get Correct Tagname <===//
        if (tag === "css") tag = "link";
        else if (tag === "js") tag = "script";

        //===> Handle Legacy Support for Options <===//
        let isIntegrated = false;
        let isModule = false;
        let moduleMap: Record<string, string> | undefined;

        if (typeof options === 'boolean') {
            // Legacy format: options is isIntegrated boolean
            isIntegrated = options;
        } else if (options && typeof options === 'object') {
            // New format: options is an object
            isIntegrated = options.integrated ?? false;
            isModule = options.module ?? false;
            moduleMap = options.importMap;
        }

        //===> Define Element and URL Path <===//
        let element = document.querySelector(`#${id}-phenix-${tag === "link" ? "css" : tag}`),
            libPath = Phenix(document).getURL().phenixJS.replace('js/', 'lib/'),
            trueUrl = `${isIntegrated ? libPath : ""}${source}`;

        //===> Create a new Element if is not Loaded yet <===//
        if (!element) {
            //===> Create Element <===//
            element = document.createElement(tag);
    
            //===> Set ID <===//
            element.setAttribute('id', `${id}-phenix-${tag === "link" ? "css" : tag}`);
    
            //===> Load JS Script <===//
            if (tag === "script" || tag === "js") {
                element.setAttribute("src", trueUrl);
                
                //===> If it's an ES6 Module <===//
                if (isModule) {
                    element.setAttribute("type", "module");
                } else {
                    element.setAttribute("async", "");
                }
                
                //===> Append Element <===//
                document.body.appendChild(element);
            }

            //===> Load CSS File <===//
            else if (tag === "link" || tag === "css") {
                element.setAttribute("href", trueUrl);
                element.setAttribute("rel", "stylesheet");
                //===> Append Element <===//
                document.head.appendChild(element);
            };
        }

        //====> When Loaded Run Callback <====//
        element.addEventListener("load", callback);

        //====> When Error Re-Load <====//
        element.addEventListener("error", event => element.setAttribute("src", trueUrl));
    };

    /*====> Convert Pixels to REM <====*/
    toREM(size: number, base: number = 16): string {
        return `${(parseFloat(size.toString()) / base)}rem`;
    };

    /*====> Copy to Clipboard <====*/
    async copyText (text: string) {
        //===> Copy to Clipboard Method <===//
        const type = "text/plain";
        const blob = new Blob([text], { type });
        const data = [new ClipboardItem({ [type]: blob })];
        await navigator.clipboard.write(data);
    };

    /*====> Audio Trigger <=====*/
    audioTrigger = (trigger) => {
        //===> Check if the Trigger is HTML Element <===//
        if (trigger instanceof HTMLElement) {
            //===> Define Objects <===//
            let audio_player:any = document.querySelector('#px-audio-player');
    
            //===> Create Audio Player <===//
            if (!audio_player) {
                //===> Create Player <===//
                audio_player = document.createElement("audio");
                //=== Set Player ID ===//
                audio_player.setAttribute('id', 'px-audio-player');
                //=== Insert Player to the Document ===//
                document.body.appendChild(audio_player);
            }
    
            //====> Audio Buttons <====//
            Phenix(trigger).on('click', event => {
                event.preventDefault();
                //=== Get Data ===//
                let button = event.target,
                    audio_file = button.getAttribute('href') || button.getAttribute('data-audio');
    
                //=== Check if the Audio is Already Playing ===//
                if (audio_player.getAttribute('src') === audio_file && !audio_player.paused) {
                    //=== Pause the Audio ===//
                    audio_player.pause();
    
                    //=== Switch Play Status icon ===//
                    if(button.classList.contains('fa-pause')) {
                        button.classList.remove('fa-pause');
                        button.classList.add('fa-play');
                    }
    
                    //=== Switch Play Status icon ===//
                    else if(button.classList.contains('fa-music-note')) {
                        button.classList.remove('fa-music-note');
                        button.classList.add('fa-music-note-slash');
                    }
                } else {
                    //=== Set Audio and Play ===//
                    audio_player.setAttribute('src', audio_file);
                    audio_player.play();
    
                    //=== Switch Play Status icon ===//
                    if (button.classList.contains('fa-play')) {
                        button.classList.add('fa-pause');
                        button.classList.remove('fa-play');
                    }
    
                    //=== Switch Play Status icon ===//
                    else if(button.classList.contains('fa-music-note-slash')) {
                        button.classList.add('fa-music-note');
                        button.classList.remove('fa-music-note-slash');
                    }
    
                    //=== When Audio is Finished Switch the Status icon ===//
                    audio_player.addEventListener('ended', (isEnded) => {
                        //=== Switch Play Status icon ===//
                        if (button.classList.contains('fa-play')) {
                            button.classList.add('fa-pause');
                            button.classList.remove('fa-play');
                        }
    
                        //=== Switch Play Status icon ===//
                        else if(button.classList.contains('fa-music-note-slash')) {
                            button.classList.add('fa-music-note');
                            button.classList.remove('fa-music-note-slash');
                        }
                    });
                }
            }, true);
        };
    };

    /*====> Convert String to Boolean <====*/
    toBoolean = (value: string | boolean | undefined): boolean | string => {
        //===> Return true if the value is true, true string, or 1 and false if the value is false, false string, or 0 any other string return it self <===//
        return value === true || value === 'true' || value === '1' ? true : value === false || value === 'false' || value === '0' ? false : typeof value === 'string' ? value : false;
    };

    /*====> Define Information <====*/
    height; getCSS; direction; getURL;
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
    validation; uploader; progress; rebuildSelect
    select; repeater; rating; seo; loader;
    slider; utilities; notifications; init;

    /*====> WooCommerce Methods <====*/
    pds_add_to_cart; pds_remove_from_cart; pds_toggle_wishlist;
}

/*====> Phenix Selecting Method <====*/
const Phenix = (selector?:any) => {
    /*====> Get Elements from Selector <====*/
    if (typeof(selector) === 'string' && selector.length > 0) {
        //====> Select as Phenix Elements <====//
        const selected = document.querySelectorAll(selector);
        //====> Create Elements Query <====//
        return new PhenixElements(...selected);
    }

    /*====> if its Elements Passed it <====*/
    else if (selector !== null && typeof(selector) !== 'undefined' || 'number') {
        //====> if Not Array Make it one <====//
        const elements = Array.isArray(selector) ? selector : [selector];
        //====> Filter Undefined/Nulled Items <====//
        const filteredElements = elements.filter((element) => element !== null && element !== undefined);
        //====> and Create Elements Query <====//
        return new PhenixElements(...filteredElements);
    }
}

//====> Export Phenix <====//
export default Phenix;

/*====> Import Methods <====*/
import './features/get-info';   //==> Get Informations about elements
import './features/viewport';   //==> Viewport Detection
import './features/counter';    //==> Animated Counter
import './features/effects';    //==> UI Effects
import './features/animations'; //==> View-port Animations
import './features/validation'; //==> Form Validation
import './features/collapse';   //==> Collapse Toggle
import './features/notifications'; //==> Notifications

/*====> Import Scroll Methods <====*/
import './features/smooth-scroll';   //==> Smooth Scroll
import './features/sticky-elements'; //==> Sticky Elements
import './features/scroll-spy';      //==> Scroll Spy

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
import './components/rating'; //==> Rating

/*====> Integration <====*/
import './integration/slider';    //==> Splide.js Slider
import './integration/utilities'; //==> Phenix Utilities

/*====> Integration WordPress <====*/
import './integration/blocks';      //==> Front-end Blocks Scripts
import './integration/wordpress';   //==> Wordpress Integration
import './integration/woocommerce'; //==> WooCommerce Integration

/*====> Custom Script <====*/
import './custom-scripts';

//====> Export Global Phenix <====//
module.exports = Phenix;
