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
    //===> Lazy Backgrounds <===//
    Phenix('.wp-block-phenix-container[data-src]').forEach((container:HTMLElement) => {
        container.setAttribute('data-lazyloading', "true");
    });

    //===> Lightbox Images <===//
    Phenix('.lightbox-image img').forEach((image:HTMLElement) => {
        //===> Get the Source <===//
        let image_source = image.getAttribute('src');

        //===> Add Classes <===//
        image.classList.add('px-lightbox');
        image.classList.add('mouse-pointer');

        //====> Check for File Type Classes <===//
        let fileType = image.classList.contains('jpg') ? "jpg" : "png";
        if (fileType) image_source.replace('.webp', fileType);

        //===> Set the Source <===//
        image.setAttribute('data-src', image_source);
    });

    //===> Smooth Scroll <====//
    Phenix('body:not(.wp-admin) a[href*="#"]').forEach((link:HTMLElement) => {
        let ancestorIs = Phenix(link).ancestor('.px-tabs') || Phenix(link).ancestor('.scrollspy-menu');
        if (!ancestorIs) Phenix(link).smothScroll();
    });

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

    //===> Element Overlap <===//
    Phenix(".pos-overlap").forEach((element:HTMLElement) => {
        let height = Phenix(element).height(),
            nextEl = Phenix(element).next() || Phenix(element.parentNode).next(),
            nextElPadding = nextEl ? Phenix(nextEl).getCSS("paddingTop") : 0;
        //===> Element CSS <===//
        element.style.marginBottom = `-${height}px`;
        if(nextEl) Phenix(nextEl).css({'padding-top': `${height+parseInt(nextElPadding)}px`});
    });

    //====> Forms Validation <====//
    Phenix('.wpcf7-form, .px-form-validation').validation();

    //===> Move Header <===//
    const main_header = document.querySelector('.main-header'),
          header_holder = document.querySelector('#header-holder');

    //====> Header Holders <====//
    if (main_header && header_holder) header_holder.prepend(main_header);

    //====> Sticky Header Fixes <====//    
    // if (Phenix('[data-sticky="absolute"], .main-header.position-st')[0]) {
    //     //===> Define Data <===//
    //     const stickyHeader = Phenix('[data-sticky="absolute"], .main-header.position-st'),
    //           headerHeight = stickyHeader.height();

    //     //====> Full Screen Fixes <====//
    //     Phenix('.full-screen').forEach((element:HTMLElement) => {
    //         //===> Check for Row Element and Padding <====//
    //         let rowElement:HTMLElement = element.querySelector('[class*="row"]') || element.querySelector('[class*="flexbox"]'),
    //             hasPadding = [Phenix(element).getCSS('padding-top'), Phenix(element).getCSS('padding-bottom')],
    //             paddingValue:any = 0; hasPadding.forEach((value:string) => paddingValue += parseInt(value));

    //         console.log(hasPadding);
    //         //===> Set Height <===//
    //         element.style.minHeight = `calc(100vh - ${headerHeight+paddingValue}px)`;
    //         if (rowElement) rowElement.style.minHeight = `calc(100vh - ${headerHeight+paddingValue}px)`;
    //     });

    //     Phenix('.full-screen-wide').forEach((element:HTMLElement) => {
    //         //===> Check for Row Element and Padding <====//
    //         let rowElement:HTMLElement = element.querySelector('[class*="row"]') || element.querySelector('[class*="flexbox"]'),
    //             hasPadding = [Phenix(element).getCSS('padding-top'), Phenix(element).getCSS('padding-bottom')],
    //             paddingValue:any = 0; hasPadding.forEach((value:string) => paddingValue += parseInt(value));

    //         //===> Set Height <===//
    //         element.style.minHeight = `calc(85vh - ${headerHeight+paddingValue}px)`;
    //         if (rowElement) rowElement.style.minHeight = `calc(85vh - ${headerHeight+paddingValue}px)`;
    //     });
    // }

    //===> Sticky Elements <====//
    Phenix("[data-sticky], .main-header.position-st").sticky();

    //====> Sliders <====//
    Phenix('.px-slider').slider();
    
    //====> Tabs <====//
    Phenix('.px-tabs').tabs();
    
    //====> Popups <====//
    Phenix('.px-modal').popup();

    //====> Activate Select <====//
    Phenix('.px-select').select();
    
    //===> Phenix Menu <===//
    Phenix('.px-navigation > div.reset-list').forEach((element:HTMLElement) => {
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

    Phenix('.px-navigation').menu();

    //====> Multimedia <====//
    Phenix('.px-media').multimedia();

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
    Phenix('[data-animation], .px-animate').animations({animateCSS: ["all"]});

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
}