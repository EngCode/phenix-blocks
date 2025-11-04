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
import Phenix, { PhenixElements } from "..";
declare var noUiSlider: any;

/*====> Phenix Blocks Script <====*/
PhenixElements.prototype.init = function (scripts?:[]) {
    //===> Activate Lazyloading <===//
    Phenix(document).lazyLoading();

    //===> Smooth Scroll <====//
    Phenix('a.smooth-scroll, .smooth-scroll a[href*="#"]').forEach((link:HTMLElement) => {
        // let hasFunction = Phenix(link).ancestor('.px-tabs') || Phenix(link).ancestor('.scrollspy-menu');
        // if (!hasFunction) 
        Phenix(link).smothScroll();
    });

    Phenix(".go-up-btn").on("click", isClicked => window.scrollTo({top: 0,left: 0,behavior: "smooth",}));

    /*====> Add Data Options to un-reachable Elements <====*/
    Phenix(`[data-add-options]`).forEach((element:HTMLElement) => {
        //===> Get Data Options <====//
        let dataOptions = JSON.parse(element.getAttribute('data-add-options'));
        //===> Add Data Options the Elements <====//
        Object.entries(dataOptions).forEach(([selector, options]) => {
            //===> Get Selector <====//
            element.querySelectorAll(`.${selector}`).forEach((item:HTMLElement) => {
                //===> Add Data Options to Elements <====//
                Object.entries(options).forEach(([attribute, value]) => item.setAttribute(`${attribute}`, value));
            });
        });
    });

    //===> Move Elements to Sibling Grid <===//
    Phenix('.move-to-grid').forEach(element => {
        let grid_element = Phenix(element).siblings('.row')[0];
        Phenix(grid_element).insert("append", element);
    });

    //===> Move Elements to Sibling Grid <===//
    Phenix('.move-to-grid-before').forEach(element => {
        let grid_element = Phenix(element).siblings('.row')[0];
        Phenix(grid_element).insert("prepend", element);
    });

    //===> Move Header <===//
    const main_header = document.querySelector('.main-header'),
          header_holder:HTMLElement = document.querySelector('#header-holder');

    //====> Header Holders <====//
    if (main_header) {
        //===> Define Sticky Wrapper <===//
        let sticky_wrapper:HTMLElement;
        //===> Check for Header Holder <===//
        if (header_holder) {
            //===> Wrap Header <===//
            Phenix(header_holder).insert('prepend', '<div class="header-sticky-wrapper"></div>');
            //===> Get Sticky Wrapper <===//
            sticky_wrapper = header_holder.querySelector('.header-sticky-wrapper');
        }
        //===> Wrap the Header <===//
        else {
            Phenix(main_header).insert('before', '<div class="header-sticky-wrapper"></div>');
            //===> Get Sticky Wrapper <===//
            sticky_wrapper = main_header.parentElement.querySelector('.header-sticky-wrapper');
        }

        //===> Prepend Header <===//
        sticky_wrapper.prepend(main_header);
        //===> add Dynamic Holder Height <===//
        sticky_wrapper.style.height = `${Phenix(sticky_wrapper).height()}px`;
    }

    //===> Audio Player [Testimonials] <===//
    if (document.querySelector('[data-audio]') || document.querySelector('.audio-trigger')) {
        //====> Audio Buttons <====//
        Phenix(document).audioTrigger('button[data-audio], .audio-trigger');
    }

    //===> Sticky Elements <====//
    Phenix("[data-sticky], .main-header.position-st").sticky({into: 0});

    //====> Sliders <====//
    Phenix('.px-slider:not([data-is-navigation])').slider();

    //====> Tabs <====//
    Phenix('.px-tabs').tabs();
    
    //====> Popups <====//
    Phenix('.px-modal').popup();

    //====> Activate Select <====//
    Phenix('select.px-select').forEach((select:HTMLElement) => {
        if (!select.querySelector('option')) Phenix(select).insert('prepend', `<option value="" selected>${select.getAttribute('data-placeholder') || 'Default'}</option>`);
        Phenix(select).select();
    });

    //===> Unlocated Menu fallback style. <===//
    Phenix('.px-navigation > div.reset-list').forEach((element:HTMLElement) => {
        //===> Define Elements <===//
        let parent:any = Phenix(element).ancestor(".px-navigation"),
            classNames = element.classList,
            children  = element.childNodes;

        //===> Move Children <===//
        children.forEach((child:any) => {
            parent.appendChild(child);
            //===> Move Classnames <===//
            classNames.forEach((className:string) => child.classList.add(className));
        });

        //===> Remove Element <===//
        element.remove();
    });

    //===> Megamenu Hooks <===//
    Phenix(".pds-megamenu").forEach((menu:HTMLElement) => {
        //===> Get Elements <====//
        const id = menu.getAttribute('id');
        const menu_item = document.querySelector(`.mgh-${id}`);
        //===> Get the Menu Item <===//
        Phenix(menu_item).insert('append', menu);
    });

    //===> Phenix Menu <===//
    Phenix('.px-navigation').menu();

    //====> Multimedia <====//
    Phenix('.px-media').multimedia({lazyloading: true});

    //====> Phenix Uploader <====//
    Phenix('.px-uploader').uploader();

    //====> Dropdown Buttons <====//
    Phenix('.px-dropdown').dropdown();

    //====> Progress <====//
    Phenix('.px-progress').progress({lazyloading: true});

    //====> Global Accordion <====//
    Phenix('.px-accordion:not(.custom-accordion) .accordion-btn').collapse({
        related : true,
        parent  : '.px-accordion',
        target  : '.accordion-content',
    });

    //===> Animations <===//
    Phenix('[data-animation], .px-animate, [data-lazy-group]').animations({animateCSS: ["all"]});

    //====> Build Timer's <====//
    Phenix('.px-timer').timer({type: "countdown"});

    //===> .Scrollspy. <===//
    Phenix(".scrollspy-menu").scrollSpy();

    //===> .Others. <===//
    Phenix(document).utilities();
}