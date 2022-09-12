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
    //====> Multimedia <====//
    Phenix('.px-media').multimedia();

    //===> Animations <===//
    Phenix(document).animations({
        animateCSS: ["fading", "sliding", "utilities"],
    });

    //===> Phenix Menu <===//
    Phenix('.px-navigation').menu();

    //====> Dropdown Buttons <====//
    Phenix('.px-dropdown').dropdown();

    //====> Sliders <====//
    Phenix('.px-slider').slider();

    //====> icons List <====//
    Phenix('.icons-list').forEach((list:any) => {
        let classes = list.getAttribute('data-icon').split(" ");
        list.querySelectorAll('li').forEach(item => item.classList.add(...classes));
    });

    //====> Validation Demo <====//
    Phenix('.wpcf7-form').validation();

    //====> Sticky Header <====//
    Phenix('.main-header').setAttributes({'data-sticky': "absolute"});
    Phenix('.main-header').addClass('fluid').sticky();
}).utilities('all');
