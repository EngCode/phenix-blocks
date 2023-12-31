/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';

//===> Script Runner <===//
const PhenixComponentsBuilder = () => {
    //===> Create Timestamp to Find the Elements <===//
    setTimeout(() => {
        //===> Get Elements <===//
        let elements = document.querySelectorAll('.pds-tm-control');

        //===> Loop Through Elements <===//
        elements.forEach(element => {
            //===> Define Element Data <===//
            let class_names = element.classList;

            //===> for Selects <===//
            if (class_names.contains('px-select') && !Phenix(element).ancestor('.px-dropdown')) {
                Phenix(element).select();
            }
            //===> for Dropdowns <===//
            else if (class_names.contains('px-dropdown')) {
                Phenix(element).dropdown();
                element.querySelectorAll('.pds-tm-control.px-select').forEach(element => Phenix(element).select());
            }
        });
    }, 1000);

    //===> Get View iFrame <===//
    let viewScript = (the_document) => {
        //===> Define Data <===//
        let time_counter = 0,
        //===> Timer Loop <===//
        pds_elements_timer = setInterval(() => {
            //===> Run Multimedia <===//
            the_document.querySelectorAll(`.px-media:not([style*="background-image"]), .px-media.is-selected`).forEach(element => {
                element.style.backgroundImage = null;
                Phenix(element).multimedia();
            });

            //===> Run Sliders <===//
            the_document.querySelectorAll(".px-slider:not(.block-editor-block-list__block)").forEach(element => {
                //===> Mark as Editing Mode <===//
                element.classList.add('edit-mode');

                //===> Disable Autoplay <===//
                if(element.getAttribute('data-autoplay')) element.setAttribute('data-autoplay', false);

                //===> Replace Data Attributes with Row/Columns Classes <===//
                const slider_cols_fixer = (row) => {
                    //===> Contain the Slides in One Line <====//
                    row.classList.add('flow-nowrap');
                    if (element.getAttribute('data-md')) row.classList.add(`row-cols-md-${element.getAttribute('data-md')}`);
                    if (element.getAttribute('data-lg')) row.classList.add(`row-cols-md-${element.getAttribute('data-lg')}`);
                    if (element.getAttribute('data-xl')) row.classList.add(`row-cols-md-${element.getAttribute('data-xl')}`);
                }

                slider_cols_fixer(element);

                //===> Stretch Fix <===//
                // let slider_element = element.querySelector(".splide__list"),
                //===> Slides List Finder <===//
                // slider_element_finder = setInterval(() => {
                //     if (!slider_element) {
                //         slider_cols_fixer(element);
                //         slider_element = element.querySelector(".splide__list");
                //     } else {
                //         //===> Assign a Max Height for Stretch <===//
                //         slider_element.style.maxHeight = Phenix(slider_element).height();

                //         //===> Assign Columns Sizes <===//
                //         slider_cols_fixer(slider_element);
                //         element.classList.forEach(class_name => class_name.includes('row-cols') || class_name.includes('flow-') ? element.classList.remove(class_name) : null);

                //         //===> Clear Timer <===//
                //         clearInterval(slider_element_finder);
                //     }
                // }, 100);
                //===> Run the Slider <===//
                // Phenix(element).slider({autoplay: false});
            });

            //===> Run Menus <===//
            the_document.querySelectorAll(".px-navigation").forEach(element => Phenix(element).menu());

            //====> Clear Timer <===//
            time_counter += 1;
            if (time_counter > 25) clearInterval(pds_elements_timer);
        }, 500);
    };

    //===> Run View Script <===//
    if (window.frames['editor-canvas']) {
        viewScript(window.frames['editor-canvas'].document);
        //===> Load Assets in Frame <====//
        let trying_times = 0,
            loadAssetTimer = setInterval(()=> {
                //====> if the Document unloaded clear the timer <====//
                if (!window.frames['editor-canvas'] || !window.frames['editor-canvas'].document) {
                    clearInterval(loadAssetTimer);
                    return;
                } else {
                    //===> When the Frame is Found <===//
                    if (!window.frames['editor-canvas'].document.querySelector("#fontawesome-css")) {
                        //===> Check in the Editor <===//
                        let frameDoc = window.frames['editor-canvas'].document,
                            fontAwesome = document.querySelector("#fontawesome-css"),
                            importedEl = fontAwesome ? document.importNode(fontAwesome, true) : false;
        
                        //===> Load Font <===//
                        if(importedEl && frameDoc.body) {
                            frameDoc.body.appendChild(importedEl);
                            clearInterval(loadAssetTimer);
                        }
                    } else {
                        //===> Increase Counter <===//
                        trying_times += 1;
                        if (trying_times > 10) clearInterval(loadAssetTimer);
                    }
                }
            }, 300);
    } else if (window.Phenix) {
        window.document ? viewScript(window.document) : null;
    }
}

export default PhenixComponentsBuilder;