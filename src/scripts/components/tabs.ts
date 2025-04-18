/**======> Reference By Comment <======
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
            hash_url = options?.hash_url || Phenix(document).toBoolean(tabs.getAttribute('data-hash')),
            panels  = tabs.querySelectorAll('.tab-panel'),
            buttons = tabs.querySelector(navigation).querySelectorAll('[data-tab], [href^="#"]'),
            isHashed = window.location.hash && hash_url && hash_url !== '0' || hash_url !== 'false';

        //====> Create Custom Event <====//
        const showed = new Event('tab-showed'),
              hidden = new Event('tab-hidden');

        //====> Check if the Panels and Buttons are Available <====//
        if(panels.length === 0 || buttons.length === 0) return console.error('Phenix Tabs: No panels or buttons found');

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

        //====> Loop Through Buttons <====//
        buttons.forEach((button:HTMLElement, index:number) => {
            //====> Default Activation <====//
            if (index === active) button.classList.add('active');

            //====> Set Accessibility Options <====//
            button.setAttribute('role', 'button');
            button.setAttribute('tabIndex', '0');

            //====> Tab Clicked <====//
            Phenix(button).on('click', clicked => {
                //====> Prevent Default Behaver <====//
                clicked.preventDefault();

                //====> Get the Panel ID <====//
                let button = clicked.target,
                    tab_id = button.getAttribute('data-tab');

                //====> if panel id is not set and the button has an href <====//
                if (!tab_id && button.hasAttribute('href')) {
                    //====> Get the Panel ID <====//
                    tab_id = button.getAttribute('href')?.replace('#','');
                    //====> if the button is inside a list <====//
                    if (button.parentNode.childNodes.length < 2) button = button.parentNode;
                }

                //====> Add to URL if the hash is enabled <====//
                if (hash_url) {
                    //====> Get the URL <====//
                    const url = window.location.href.replace(location.hash, "") + `#${tab_id}`;
                    //====> Add to History <====//
                    history.pushState({ additionalInformation: 'Updated the URL with JS' }, document.title, url);
                }

                //====> Active the Button <====//
                Phenix(button).addClass('active').siblings()?.forEach(sibling => sibling.classList.remove('active'));

                //====> Active the Panel and Get its Siblings <====//
                let TabElement:any = document.querySelector(`#${tab_id}`),
                    TabDisplay = TabElement?.getAttribute('data-display') || "block";

                //====> Check if the Tab Element is Available <====//
                if (TabElement) {
                    //====> Active the Tab <====//
                    Phenix(TabElement).fadeIn(700, 0, TabDisplay).addClass('active').removeClass('hidden').siblings('.tab-panel')?.forEach(panel => {
                        //====> Fire Event <====//
                        document.querySelector(`#${tab_id}`).dispatchEvent(showed);
    
                        //====> if the sibling is active <====//
                        if (panel.classList.contains('active')) {
                            //===> Deactivate the Panel <===//
                            let the_panel:any = Phenix(panel).removeClass('active').addClass('hidden')[0];
                            the_panel.style.display = null;
                            //====> Fire Event <====//
                            panel.dispatchEvent(hidden);
                        }
                    });
                }
            });
        });

        //====> Active By URL <====//
        if (isHashed) {
            window.addEventListener('load', () => {
                //====> Get the Panel ID <====//
                let tab_id = window.location.hash.substr(1);

                //====> Active the Panel and Get its Siblings <====//
                if(tab_id && document.querySelector(`#${tab_id}`)) {
                    //====> Active the Panel <====//
                    Phenix(`#${tab_id}`).fadeIn().addClass('active').removeClass('hidden').siblings('.tab-panel').forEach(panel => {
                        //====> Check if it is active <====//
                        if (!panel.classList.contains('active')) return;
                        //====> Deactivate the Panel <====//
                        let the_panel:any = Phenix(panel).removeClass('active').addClass('hidden')[0];
                        //===> Clear Display Style <===//
                        the_panel.style.display = null;
                    });

                    //===> Active the Panel Button <===//
                    Phenix(`[data-tab="${tab_id}"], [href="#${tab_id}"]`).forEach((button:any) => {
                        //====> get this button <====//
                        let target = button;

                        //====> if the button is inside a list <====//
                        if (button.hasAttribute('href') && button.parentNode.tagName === "li") target = button.parentNode;

                        //====> Active the Button <====//
                        Phenix(target).addClass('active').siblings()?.forEach(sibling => sibling.classList.remove('active'));
                    });

                    //====> Fire Event <====//
                    document.querySelector(`#${tab_id}`).dispatchEvent(showed);
                }
            });
        }
    });

    //====> Return Phenix Elements <====//
    return this;
}