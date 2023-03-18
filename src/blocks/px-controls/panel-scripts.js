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
}

export default PhenixComponentsBuilder;