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

    //===> Set Phenix Components <===//
    const setPhenixView = () => {
        //===> Create Time Loop to Find the Elements <===//
        let finder_counter = 0,
            frame_finder = setInterval(() => {
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
        if (window.frames['editor-canvas']) {
            //===> View Script <===//
            let time_counter = 0,
                frameDoc = window.frames['editor-canvas'].document,
                pds_elements_timer = setInterval(() => {
                    //===> Run Multimedia <===//
                    frameDoc.querySelectorAll(".px-media").forEach(element => Phenix(element).multimedia());

                    //===> Run Sliders <===//
                    frameDoc.querySelectorAll(".px-slider:not(.block-editor-block-list__block)").forEach(element => {
                        element.classList.add('edit-mode');
                        element.getAttribute('data-autoplay') ? element.setAttribute('data-autoplay', false) : null;
                        Phenix(element).slider({autoplay: false});
                        //===> Stretch Fix <===//
                        let slider_element = element.querySelector(".splide__list");
                        if (slider_element) {
                            slider_element.classList.add('flow-nowrap');
                            slider_element.style.maxHeight = Phenix(slider_element).height();
                            if (element.getAttribute('data-md')) slider_element.classList.add(`row-cols-md-${element.getAttribute('data-md')}`);
                            if (element.getAttribute('data-lg')) slider_element.classList.add(`row-cols-md-${element.getAttribute('data-lg')}`);
                            if (element.getAttribute('data-xl')) slider_element.classList.add(`row-cols-md-${element.getAttribute('data-xl')}`);
                        }
                    });

                    //====> Clear Timer <===//
                    time_counter += 1;
                    if (time_counter > 100) clearInterval(pds_elements_timer);
                }, 500);
        } else {
            //===> Timeout for Loading <===//
            pds_elements_timer = setInterval(() => {
                //===> Get Elements <===//
                let Sliders  = Phenix('.px-slider:not(.block-editor-block-list__block)'),
                    MediaEls = Phenix(".px-media");
    
                //===> Run Phenix Components <===//
                if(MediaEls.length > 0) MediaEls.multimedia();
                if(Sliders.length > 0) {
                    Sliders.addClass('edit-mode').slider({autoplay: false});
                    //===> Stretch Fix <===//
                    Sliders.forEach(element => {
                        //===> Disable Autoplay <===//
                        let slider_element = element.querySelector(".splide__list");
                        if(slider.getAttribute('data-autoplay')) slider.setAttribute('data-autoplay', false);

                        if (slider_element) {
                            slider_element.classList.add('flow-nowrap');
                            slider_element.style.maxHeight = Phenix(slider_element).height();
                            if (element.getAttribute('data-md')) slider_element.classList.add(`row-cols-md-${element.getAttribute('data-md')}`);
                            if (element.getAttribute('data-lg')) slider_element.classList.add(`row-cols-md-${element.getAttribute('data-lg')}`);
                            if (element.getAttribute('data-xl')) slider_element.classList.add(`row-cols-md-${element.getAttribute('data-xl')}`);
                        }
                    });
                }

                //====> Clear Timer <===//
                time_counter += 1;
                if (time_counter > 100) clearInterval(pds_elements_timer);
            }, 500);
        }
    }

    setPhenixView();
}

export default PhenixComponentsBuilder;