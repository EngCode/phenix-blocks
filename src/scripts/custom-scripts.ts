/*===================================
=                                   =
=  - !Hello There                   =
=  - this is Your working space     =
=  - here you can customize phenix  =
=  - to your app ui design needs    =
=  - Good Luck :)                   =
=                                   =
===================================*/

/*====> Import Phenix <====*/
import Phenix from '.';

//======> D.O.M is Ready [for you] <=======//
Phenix(document).ready((event:any) => {
    //====> Validation Demo <====//
    Phenix('.wpcf7-form').validation();

    //====> Sticky Header <====//
    let headerElement = Phenix('.main-header');

    if (headerElement.length > 0) {
        headerElement.setAttributes({'data-sticky': "absolute"});
        headerElement.addClass('fluid').addClass('z-index-header').sticky();
    
        //===> Define Data <===//
        let headerHeight = headerElement.height();
    
        //====> Full Screen Fixes <====//
        Phenix('.full-screen').forEach((element:HTMLElement) => element.style.minHeight = `calc(100vh - ${headerHeight}px)`);
        Phenix('.full-screen-wide').forEach((element:HTMLElement) => element.style.minHeight = `calc(85vh - ${headerHeight}px)`);
    }

    //====> Sliders Fix <====//
    Phenix('.temp-slider-3x, .temp-slider-4x').setAttributes({
        "data-md"    : 3,
        "data-items" : 1,
        "data-controls": 1,
    }).addClass("px-slider");

    Phenix('.temp-slider-4x').setAttributes({"data-lg": 4, "data-duration": 7000}).addClass("px-slider");

    Phenix('.logo-slider').setAttributes({
        "data-items": 2,
        "data-md": 4,
        "data-lg": 6,
        "data-xl": 7,
    }).addClass("px-slider");

    //====> Multimedia <====//
    Phenix('.px-media').multimedia();

    //===> Phenix Menu <===//
    Phenix('.px-navigation').menu();

    //====> Dropdown Buttons <====//
    Phenix('.px-dropdown').dropdown();

    //====> Sliders <====//
    Phenix('.px-slider').slider();

    //===> Lightbox Images <===//
    Phenix('.lightbox-image img').forEach((image:HTMLElement) => {
        image.classList.add('px-lightbox');
        image.classList.add('mouse-pointer');
        image.setAttribute('data-src', image.getAttribute('src'));
    });

    //====> Popups <====//
    Phenix('.px-modal').popup();

    //===> Animations <===//
    Phenix('.px-animate').animations({animateCSS: ["fading", "sliding", "zooming", "utilities"]});

    //====> Activate Select <====//
    Phenix('.px-select').select();

    //===> ... <===//
    Phenix(document).utilities().copyrights("Phenix Blocks");
});