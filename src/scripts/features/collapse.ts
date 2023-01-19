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
}) {
    //====> Loop Through Phenix Query <====//
    this.forEach(button => {
        //====> if is Done Return no thing <====//
        if(button.classList.contains('pxjs-done')) return;

        //====> Get Options <====//
        let parent = button.getAttribute('data-parent') || options?.parent,
            related = button.getAttribute('data-related') || options?.related,
            active_class = 'px-collapse-active',
            target = button.getAttribute('data-target') || options?.target;

        //====> Create Custom Event <====//
        const showed = new Event('collapse-showed'),
              hidden = new Event('collapse-hidden');

        //====> Get Target as Element <====//
        if (typeof(target) === 'string') {
            related ? target = Phenix(button).siblings(target)[0] : target = document.querySelector(target);
        }

        //====> Collapse Handler <====//
        let collapse_handler = () => {
            //====> Show if its Hidden <====//
            if (Phenix(target).getCSS('display') === 'none') {
                //====> Hide Other Panels <====//
                if (parent) {
                    //====> Get Other Activated Items <====//
                    let others = Phenix(button).ancestor(parent).querySelectorAll(`.${active_class}`);
                    //====> and for each item <====//
                    others.forEach(element => {
                        //====> Remove Active Class <====//
                        element.classList.remove(active_class);
                        //====> Hide Targets <====//
                        if (element.matches(button.getAttribute('data-target') || options?.target))
                            Phenix(element).slideUp();
                    });
                }
                //====> Active Button <====//
                button.classList.add(active_class);

                //====> Show Target <====//
                Phenix(target).slideDown().addClass(active_class);

                //====> Fire Event <====//
                button.dispatchEvent(showed);
                target.dispatchEvent(showed);
            }
            //====> Hide if its Shown <====//
            else {
                //====> Active Button <====//
                button.classList.remove(active_class);

                //====> Show Target <====//
                Phenix(target).slideUp().removeClass(active_class);

                //====> Fire Event <====//
                button.dispatchEvent(hidden);
                target.dispatchEvent(hidden);
            }
        };

        //====> ... <====//
        button.addEventListener('click', collapse_handler);

        //====> Set Accessibility Options <====//
        button.setAttribute('role', 'button');
        button.setAttribute('tabIndex', '0');

        //====> Done <====//
        button.classList.add('pxjs-done');
    });

    //====> Return Phenix Elements <====//
    return this;
}