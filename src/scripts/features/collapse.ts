/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Collapse
 * ===> 03 - Loop Through Phenix Query
 * ===> 04 - Get Options
 * ===> 05 - Create Custom Event
 * ===> 06 - Collapse Handler
 * ===> 07 - Return Phenix Elements
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> Collapse <====*/
PhenixElements.prototype.collapse = function (options?:{
    target?:string;   //===> Panel Target Selector
    related?:boolean; //===> Panel Target is related to the button in the DOM Tree
    parent?:string;   //===> Accordion Group Selector
    hover?:boolean;  //===> Trigger on Hover instead of Click
}) {
    //====> Loop Through Phenix Query <====//
    this.forEach(button => {
        //====> if is Done Return no thing <====//
        if(button.classList.contains('pxjs-done')) return;

        //====> Get Options <====//
        let classes = button.classList,
            parent = button.getAttribute('data-parent') || options?.parent,
            related = button.getAttribute('data-related') || options?.related,
            active_class = 'px-collapse-active',
            target = button.getAttribute('data-target') || options?.target;

        //===> Add Icon Class Name <====//
        classes.forEach((className:string) => {
            //===> Get the Icon Name <===//
            if(className.includes('fa-')) button.setAttribute('data-trigger-icon-normal', `${className}`);
        });

        //===> Store the Icon Name <===//
        const normal_icon = button.getAttribute('data-trigger-icon-normal');

        //===> Get the Icon Class for Active <===//
        if (normal_icon && normal_icon.includes('plus')) {
            button.setAttribute('data-trigger-icon', `${normal_icon.replace('plus', 'minus')}`);
        } else if (normal_icon && normal_icon.includes('down')) {
            button.setAttribute('data-trigger-icon', `${normal_icon.replace('down', 'up')}`);
        }

        //===> Change Active Item Icon <===//
        const active_icon = button.getAttribute('data-trigger-icon');
        if (button.classList.contains(active_class)) {
            button.classList.add(active_icon);
            button.classList.remove(normal_icon);
        }

        //====> Create Custom Event <====//
        const showed = new Event('collapse-showed'),
              hidden = new Event('collapse-hidden');

        //====> Get Target as Element <====//
        if (typeof(target) === 'string') {
            related ? target = Phenix(button).siblings(target)[0] : target = document.querySelector(target);
        }

        //====> Collapse Handler <====//
        let collapse_handler = (toggle) => {
            //====> Show if its Hidden <====//
            if (Phenix(target).getCSS('display') === 'none') {
                //====> Hide Other Panels <====//
                if (parent) {
                    //====> Get Other Activated Items <====//
                    let others = Phenix(button).ancestor(parent).querySelectorAll(`.${active_class}`);

                    //====> and for each item <====//
                    others.forEach(element => {
                        //====> Remove Active Class <====//
                        element.classList.remove(active_class, active_icon);
                        //====> Hide Targets <====//
                        if (element.matches(button.getAttribute('data-target') || options?.target)) {
                            Phenix(element).slideUp();
                        } else {
                            element.classList.add(normal_icon);
                        }
                    });
                }

                //====> Active Button <====//
                button.classList.remove(normal_icon);
                button.classList.add(active_class, active_icon);

                //====> Show Target <====//
                Phenix(target).slideDown().addClass(active_class);

                //====> Fire Event <====//
                button.dispatchEvent(showed);
                target.dispatchEvent(showed);
            }
            //====> Hide if its Shown <====//
            else {
                //====> If Toggle is True <====//
                // if (toggle) return;

                //====> Active Button <====//
                button.classList.add(normal_icon);
                button.classList.remove(active_class, active_icon);

                //====> Show Target <====//
                Phenix(target).slideUp().removeClass(active_class);

                //====> Fire Event <====//
                button.dispatchEvent(hidden);
                target.dispatchEvent(hidden);
            }
        };

        //====> Trigger on Click <====//
        button.addEventListener('click', collapse_handler);

        //====> Trigger on Hover <====//
        let parentNode = Phenix(button).ancestor(parent);
        // if (options?.hover || parentNode.classList.contains('px-accordion-hover')) button.addEventListener('mouseover', collapse_handler);

        //====> Set Accessibility Options <====//
        button.setAttribute('role', 'button');
        button.setAttribute('tabIndex', '0');

        //====> Done <====//
        button.classList.add('pxjs-done');
    });

    //====> Return Phenix Elements <====//
    return this;
}