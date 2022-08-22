/**======> Referance By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Tabs Panels
 * ===> 03 - Default Options
 * ===> 03 - Activator
 * ===> 03 - Loop Through Phenix Query
 * ===> 03 - 
 * ===> 09 - Return Phenix Elements
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> Tabs Panels <====*/
PhenixElements.prototype.tabs = function (options?:{
    active?:number,     //===> Show Tab # on Initial
    navigation?:string, //===> Navigation Selector
    hash_url?:boolean,  //===> Show Tab from URL #ID
}) {
    //====> Loop Through Phenix Query <====//
    this.forEach(tabs => {
        //====> Options Data <====//
        let active =  parseInt(tabs.getAttribute('data-active')) || options?.active || 0,
            navigation = options?.navigation || '.tabs-navigation',
            hash_url = options?.hash_url || tabs.getAttribute('data-hash'),
            panels  = tabs.querySelectorAll('.tab-panel'),
            buttons = tabs.querySelector(navigation).querySelectorAll('[data-tab], [href^="#"]');

        //====> Create Custom Event <====//
        const showed = new Event('tab-showed'),
              hidden = new Event('tab-hidden');

        //====> Hide All Tabs <====//
        panels.forEach((panel, index) => {
            //====> Default Activation <====//
            if (index === active) {
                panel.classList.add('active');
                panel.classList.remove('hidden');
                //====> Fire Event <====//
                panel.dispatchEvent(showed);
            } else {
                panel.classList.add('hidden');
            }
        });

        //====> Loop Throgh Buttons <====//
        buttons.forEach((button:HTMLElement, index:number) => {
            //====> Default Activation <====//
            if (index === active) button.classList.add('active');

            //====> Tab Clicked <====//
            Phenix(button).on('click', clicked => {
                //====> Prevent Default Behavor <====//
                clicked.preventDefault();

                //====> Get the Panel ID <====//
                let button = clicked.target,
                    tab_id = button.getAttribute('data-tab');

                if (!tab_id && button.hasAttribute('href')) {
                    tab_id = button.getAttribute('href')?.replace('#','');
                    button = button.parentNode;
                }

                //====> Active the Button <====//
                Phenix(button).addClass('active').siblings()?.forEach(sibling => sibling.classList.remove('active'));

                //====> Active the Panel and Get its Siblings <====//
                Phenix(`#${tab_id}`).fadeIn().addClass('active').removeClass('hidden').siblings('.tab-panel')?.forEach(panel => {
                    //====> Fire Event <====//
                    document.querySelector(`#${tab_id}`).dispatchEvent(showed);

                    //====> if the siblign is active <====//
                    if (panel.classList.contains('active')) {
                        //===> Deactivate the Panel <===//
                        let the_panel:any = Phenix(panel).removeClass('active').addClass('hidden')[0];
                        the_panel.style.display = null;
                        //====> Fire Event <====//
                        panel.dispatchEvent(hidden);
                    }
                });
            });
        });

        //====> Active By URL <====//
        if (hash_url !== '0' || 'false') window.addEventListener('load', () => {
            let tab_id = window.location.hash.substr(1);
            //====> Active the Panel and Get its Siblings <====//
            Phenix(`#${tab_id}`).fadeIn().addClass('active').removeClass('hidden').siblings('.tab-panel')?.forEach(panel => {
                //====> Fire Event <====//
                document.querySelector(`#${tab_id}`).dispatchEvent(showed);
                //====> if the siblign is active <====//
                if (panel.classList.contains('active')) {
                    //===> Deactivate the Panel <===//
                    let the_panel:any = Phenix(panel).removeClass('active').addClass('hidden')[0];
                    the_panel.style.display = null;
                    //===> Active the Panel Button <===//
                    Phenix(`[data-tab="${tab_id}"], [href="#${tab_id}"]`).forEach((button:any) => {
                        //====> get this button <====//
                        let target = button;
                        if (button.hasAttribute('href')) target = button.parentNode;
                        //====> Active the Button <====//
                        Phenix(target).addClass('active').siblings()?.forEach(sibling => sibling.classList.remove('active'));
                    });
                    //====> Fire Event <====//
                    panel.dispatchEvent(hidden);
                }
            });
        });
    });

    //====> Return Phenix Elements <====//
    return this;
}