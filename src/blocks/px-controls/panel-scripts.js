/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';

//===> Script Runner <===//
const PhenixComponentsBuilder = () => {
    //===> Create Time Loop to Find the Elements <===//
    let finder_counter = 0,
        element_finder = setInterval(() => {
            //===> Get Elements <===//
            let elements = document.querySelectorAll('.pds-tm-control');

            //===> Loop Through Elements <===//
            elements.forEach(element => {
                //===> Define Element Data <===//
                let class_names = element.classList;

                //===> for Selects <===//
                if (class_names.contains('px-select')) Phenix(element).select();
            });

            //===> Increase Counter <===//
            finder_counter++;

            //===> Clear Timer Loop <===//
            if (finder_counter > 30) clearInterval(element_finder);
        }, 500);

    //===> Get View iFrame <===//
    let viewScript = (the_document) => {
        //===> Define Data <===// 
        let time_counter = 0,
        //===> Timer Loop <===//
        pds_elements_timer = setInterval(() => {
            //===> Run Multimedia <===//
            the_document.querySelectorAll(".px-media").forEach(element => {
                element.style.backgroundImage = null;
                Phenix(element).multimedia();
            });

            //===> Run Sliders <===//
            the_document.querySelectorAll(".px-slider:not(.block-editor-block-list__block)").forEach(element => {
                //===> Mark as Editing Mode <===//
                element.classList.add('edit-mode');

                //===> Disable Autoplay <===//
                if(element.getAttribute('data-autoplay')) element.setAttribute('data-autoplay', false);

                //===> Stretch Fix <===//
                let slider_element = element.querySelector(".splide__list"),

                //===> Slides List Finder <===//
                slider_element_finder = setInterval(() => {
                    if (!slider_element) {
                        slider_element = element.querySelector(".splide__list");
                    } else {
                        //===> Contain the Slides in One Line <====//
                        slider_element.classList.add('flow-nowrap');
                        element.querySelectorAll(".splide__arrows, .splide__track").forEach(element => element.classList.add("fluid"));

                        //===> Replace Data Attributes with Row/Columns Classes <===//
                        if (element.getAttribute('data-md')) element.classList.add(`row-cols-md-${element.getAttribute('data-md')}`);
                        if (element.getAttribute('data-lg')) element.classList.add(`row-cols-md-${element.getAttribute('data-lg')}`);

                        //===> Assign a Max Height fo Stretch <===//
                        slider_element.style.maxHeight = Phenix(slider_element).height();
                        //===> Clear Timer <===//
                        clearInterval(slider_element_finder);
                        if (element.getAttribute('data-xl')) element.classList.add(`row-cols-md-${element.getAttribute('data-xl')}`);
                    }
                }, 100);

                
                //===> Run the Slider <===//
                Phenix(element).slider({autoplay: false});
            });

            //====> Clear Timer <===//
            time_counter += 1; if (time_counter > 5000) clearInterval(pds_elements_timer);
        }, 500);
    };

    //===> Run View Script <===//
    if (window.frames['editor-canvas']) viewScript(window.frames['editor-canvas'].document);
    else viewScript(window.document);
}

export default PhenixComponentsBuilder;