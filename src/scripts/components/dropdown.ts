/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Dropdown
 * ===> 03 - Default Options
 * ===> 04 - Set Trigger Accessibility
 * ===> 05 - When Click on the Trigger
 * ===> 06 - De-Activate Other
 * ===> 07 - Activate Button and List
 * ===> 08 - De-Activate on Blank
 * ===> 09 - Return Phenix Elements
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> Dropdown <====*/
PhenixElements.prototype.dropdown = function (options?:{
    toggle?:string,   //====> Toggle Button Class Name : px-toggle
    target?:string,   //====> Target to Toggle (add/remove) Active Class
    active?:string,   //====> Active Class Name : px-active
    hover?:boolean,   //====> Support on Hover Show/Hide
    exclude?:string,  //====> Exclude from on Blank Click only [CSS :not()... Selector]
    position?:string, //====> the position of the target [top or bottom, start or end]
    //====> Hide/Show Toggle Effect [fade, slide] <====//
    effect?:{
        type?:string,
        duration?:number,
        delay?:number,
        display?:string,
    },
}) {    
    this.forEach(dropdown_wrapper => {
        //====> Default Options <====//
        let siblings,
            inline = attr => dropdown_wrapper.getAttribute(attr),
            active  = inline('data-active') || options?.active || 'px-active',
            toggle  = inline('data-toggle') || options?.toggle || '.px-toggle',
            target  = inline('data-target') || options?.target || '.px-dropdown-list',
            position  = inline('data-position') || options?.position || 'bottom, start',
            exclude  = inline('data-exclude') || options?.exclude || '.px-toggle',
            activated = `${target}.${active}`,
            //====> Effect Options <====//
            delay  = inline('data-delay') || options?.effect?.delay || 0,
            effect = inline('data-effect') || options?.effect?.type || 'fade',
            display = inline('data-display') || options?.effect?.display || 'block',
            duration = inline('data-duration') || options?.effect?.duration || 300,
            //====> Catch the Target <====//
            dropdown_target = dropdown_wrapper.querySelector(target);

        //====> identify the effect <====//
        dropdown_wrapper.setAttribute('data-effect', effect);

        //===> Dynamic Position <===//
        let change_position = () => position[0] === 'top' || 'bottom' ? Phenix(dropdown_target).dynamicPosition() : null;

        //====> Hide Activated Dropdowns <====//
        const hide_others = (activated) => {
            //==== Hide Others ====//
            Phenix(activated).removeClass(active).forEach((dropdown:HTMLElement) => {
                //====> Get the Effect Type <====//
                let dropdown_wrapper = Phenix(dropdown).ancestor('[data-effect]'),
                    current_effect   = dropdown_wrapper.getAttribute('data-effect');

                //====> De-Activate Triggers <====//
                dropdown_wrapper.querySelector('.px-toggle').classList.remove(active);
                Phenix(dropdown).siblings(active)?.forEach((sibling:HTMLElement) => sibling.classList.remove(active));

                //====> Hide Opened Dropdowns <====//
                if (current_effect == 'fade') Phenix(dropdown).fadeOut(duration, delay, display);
                else if (current_effect == 'slide') Phenix(dropdown).slideUp(duration, delay, display);
            });
        },

        //====> Click to Dropdown <====//
        dropdown_start = event => {
            //====> De-Activate Other <====//
            // hide_others(activated);

            //====> Prevent Default <====//
            event.preventDefault();

            //====> Get the Target and its Sibling <====//
            let event_trigger = event.target;
            if (!event.target.matches(toggle)) event_trigger = Phenix(event_trigger).ancestor(toggle);

            
            siblings = Phenix(event_trigger).addClass(active).siblings(target);

            //====> Active Button and the Target <====//
            if (siblings) {
                //====> Change Position <====//
                change_position();

                //====> Active Target <====//
                Phenix(siblings).addClass(active);

                //====> Effect : Fade-In-Out <====//
                if (effect == 'fade') {
                    Phenix(siblings).fadeIn(duration, delay, display);
                }
                //====> Effect : Slide-Down-Up <====//
                else if (effect == 'slide') {
                    Phenix(siblings).slideDown(duration, delay, display);
                }
            }
        },

        //====> Hide Dropdown on Blank <====//
        dropdown_hide = blank => {
            //====> Clicked Target <====//
            let exclude_final = `${target} *:not([href^="#"]):not(${exclude})`,
                clicked:any = blank.target;

            //====> if the target is not the current element or any of its children <====//
            if (!clicked.matches(target) && !clicked.matches(exclude_final) && !clicked.matches(toggle) && !clicked.matches(`${toggle} *`)) hide_others(activated);
        };

        //====> Click to Dropdown <====//
        let toggle_element = dropdown_wrapper.querySelector(toggle);
        toggle_element.addEventListener('click', dropdown_start);

        //====> Set Accessibility Options <====//
        toggle_element.setAttribute('role', 'button');
        toggle_element.setAttribute('tabIndex', '0');

        //====> De-Activate on Blank <====//
        window.addEventListener('click', dropdown_hide);

        //====> CSS Prepare <====//
        Phenix(dropdown_wrapper).addClass("position-rv");

        //====> Divide Positions <====//
        position = position.replace(' ','').split(',');

        //====> Define Targets <====//
        let the_target = Phenix(dropdown_target),
            isScrolling = false

        //====> Style Utilites <====//
        the_target.addClass("position-ab").addClass("z-index-dropdown").addClass("hidden");
        the_target.addClass(`pos-${position[1] !== "center" ? `${position[1]}-0` : `${position[1]}-x`}`);
        position[0] === "top" ? the_target.addClass('pos-before-y') : the_target.addClass('pos-after-y');

        //====> Change Position on Scroll <====//
        window.addEventListener('scroll', scrolling => isScrolling = true, {passive: true});

        setInterval(() => {
            if (isScrolling) {
                isScrolling = false;
                change_position();
            }
        }, 300);
    });

    //====> Return Phenix Elements <====//
    return this;
}