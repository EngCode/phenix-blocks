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
    //===> Load Animations <===//
    Phenix(document).animations({
        animateCSS: ["fading", "sliding", "utilities"],
    });

    //===> Phenix Menu <===//
    Phenix('.px-navigation').menu();

    //====> Dropdown Buttons <====//
    Phenix('.px-dropdown').dropdown();

    //====> Sliders <====//
    Phenix('.px-slider').slider();

    //====> Media Elements <====//
    Phenix('.px-media').multimedia();

    //====> icons List <====//
    Phenix('.icons-list').forEach((list:any) => {
        let classes = list.getAttribute('data-icon').split(" ");
        list.querySelectorAll('li').forEach(item => item.classList.add(...classes));
    });

    //====> Validation Demo <====//
    Phenix('.wpcf7-form').validation();

    //====> Hero Thumbnail <====//
    window.addEventListener('load', () => {
        let hero_thumbs  = document.querySelector('#hero-thumbnails');

        if (hero_thumbs) {
            let thumb_height = Phenix(hero_thumbs).height(),
                header_height = Phenix('header.wp-block-template-part').height();
        
            //====> Thumbs over Slider <====//
            Phenix(hero_thumbs).css({"margin-top": `-${thumb_height}px`});
        
            Phenix('.full-height-flexbox .flexbox').css({
                "min-height" : `calc(100vh - ${header_height}px)`,
                "padding-bottom": `${thumb_height}px`,
            });
        }
    });

    //====> Sticky Header <====//
    Phenix('.main-header').setAttributes({'data-sticky': "absolute"});
    Phenix('.main-header').addClass('fluid').sticky();

}).utilities('all');
