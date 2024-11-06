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
          header_holder = document.querySelector('#header-holder');

    //====> Header Holders <====//
    if (main_header && header_holder) header_holder.prepend(main_header);

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

    /*===> Table of contents Menu <===*/
    let postContent = document.querySelector(".entry-content"), last_title,
        content_menu = document.querySelector('#table-of-content-list');

    /*===> Loop Through Titles <===*/
    if (postContent && content_menu) {
        //===> Get Headlines <===//
        let headlines = postContent.querySelectorAll('h2, h3, h4');
        //===> Reset List <===//
        content_menu.innerHTML = "";
        //===> for Each Headline <===//
        headlines.forEach((element:HTMLElement, index) => {
            //====> Get Data <====//
            let title = element.textContent,
                itemHtml = `<li class="tx-nowrap"><a href="#section-${index}" class="smoth-scroller">${title}</a></li>`;
    
            //====> Set ID <====//
            element.setAttribute('id', `section-${index}`);

            //====> Sub-Titles <====//
            if (element.matches('h3' || 'h4')) {
                //===> ... <===//
                let last_item = content_menu.querySelector('li:last-child'),
                    last_list = last_item?.querySelector('ul') || content_menu;
                //====> Create new Menu <====//
                if (!last_list && last_item) last_list = Phenix(last_item).insert('append', '<ul class="table-of-content-menu pdx-15"></ul>');
    
                //====> Create as Menu Item <====//
                Phenix(last_list).insert('append', itemHtml);
            }
            //====> Create as Main Title <====//
            else Phenix(content_menu).insert('append', itemHtml);
    
            //====> Assign Last Title <====//
            last_title = element;
        });
    }

    //===> .Scrollspy. <===//
    Phenix(".scrollspy-menu").scrollSpy();

    //===> .Others. <===//
    Phenix(document).utilities();

    //===> Header Hacks <===//
    if (main_header) {
        
    }

    //===> Add Support for CSS Scroll Driving Animations <===//
    // Phenix(document).import("scroll-timeline", "script", "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js", ()=>{}, false);
}