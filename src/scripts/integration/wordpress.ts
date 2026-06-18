/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
*/
/*====> Import Phenix <====*/
import Phenix, { PhenixElements } from "..";
declare var wp:any, PDS_WP_KEY:any, window:any;
declare var noUiSlider: any;

/*====> Phenix Blocks Script <====*/
if (PhenixElements) PhenixElements.prototype.init = function (scripts?:[]) {
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

/*====> D.O.M is Ready ? <====*/
if (Phenix) Phenix(document).on("DOMContentLoaded", (loaded) => {
    //====> Edit/Admin Define <====//
    const isAdmin  = document.body?.classList?.contains('wp-admin');
    const isEditor = document.querySelector("#site-editor") || document.querySelector('body[class*="editor"]');

    //===> Contact Form 7 Fixes <===//
    const fixCF7 = () => {
        //====> Forms Validation <====//
        Phenix('.wpcf7-form, .px-form-validation').validation();

        //====> Fetching Form Data for CF7 <=====//
        document.querySelectorAll('.wpcf7-form').forEach((form:any) => {
            //====> on Submit Prevent the Native behavior and submit with Fetch <====//
            form.addEventListener('submit', (event:any) => {
                //====> Prevent the default form submission <====//
                event.preventDefault();

                //====> Get Submit Button <====//
                const submitButton = form.querySelector('input[type="submit"]') || form.querySelector('button[type="submit"]') || form.querySelector('.btn:last-of-type');

                //====> Check if the form is valid <====//
                if(!form.querySelector('.px-validation') && !form.querySelector('.error')) {
                    //====> Disable Form <====//
                    submitButton.classList.add('px-loading-inline');

                    //====> Date/Time Reformated <====//
                    const dateTimeFormatter = (dateString) => {
                        //===> Get Current Date and Time Data <===//
                        let date = new Date(dateString),
                            year = date.getFullYear(),
                            month = ('0' + (date.getMonth() + 1)).slice(-2),
                            day = ('0' + date.getDate()).slice(-2),
                            hours = ('0' + date.getHours()).slice(-2),
                            minutes = ('0' + date.getMinutes()).slice(-2);

                        //===> Construct a readable date and time format <===//
                        return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
                    }

                    //====> Create a new FormData object from the form <====//
                    const formData = new FormData(form);

                    //====> Loop through each entry in the FormData object <===//
                    for (const pair of formData.entries()) {
                        //====> Check if the entry value is a date/time string <====//
                        if (typeof pair[1] === 'string' && pair[1].match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/)) {
                            //====> Reformat the date/time string <====//
                            formData.set(pair[0], dateTimeFormatter(pair[1]));
                        }
                    }

                    //====> Submit with Ajax [Fetch] <====//
                    fetch(form.getAttribute('action'), {
                        body: formData,
                        method: form.getAttribute('method'),
                    }).then(response => {
                        //====> Check Network Connection <====//
                        if (!response.ok) {
                            //===> Show Failed Message <===//
                            Phenix(document).notifications({
                                type: "error",
                                duration: "7000",
                                position: ["center", "center"],
                                message: "Network response was not ok",
                            });
    
                            //===> Throw an Error <====//
                            throw new Error('Network response was not ok');
                        }
                        //====> Return Response Text <====//
                        return response.text();
                    }).then(data => {
                        //====> Enable Form <====//
                        submitButton.classList.add('px-loading-inline');
                        // //===> Reset Forms on Loading <===//
                        // Phenix('.wpcf7 input:not([type="hidden"]):not(.btn):not([type="submit"]), .wpcf7 select, .wpcf7 textarea').forEach((input:any) => {input.value = '';});

                        // //===> Reset PX Select Component <===//
                        // form.querySelectorAll('div.px-select').forEach((element: any) => {
                        //     let firstOption = element.querySelector('.px-select-option:first-child');
                        //     const toggleButton = element.querySelector('.px-select-toggle');
                        //     if (!firstOption) firstOption = element.querySelector('.px-select-option:nth-child(2)');
                            
                        //     toggleButton.textContent = firstOption.textContent;
                        // });
                        //====> Disable Form <====//
                        submitButton.classList.remove('px-loading-inline');
                        //===> Redirect to Success <===//
                        const sourceParameter = window.location.href.replace(PDS_WP_KEY.site, '');
                        const successSlug = form.querySelector('[name="success_slug"]')?.value || 'success';
                        window.location.href = `${PDS_WP_KEY.site ? PDS_WP_KEY.site + `/${successSlug}/?source=${sourceParameter}` : `/${successSlug}/?source=${sourceParameter}`}`;
                    }).catch(error => {
                        //===> Show Error Message <===//
                        Phenix(document).notifications({
                            type: "error",
                            duration: "7000",
                            position: ["center", "center"],
                            message: error,
                        });
                    });
                }
            });
        });

        //===> CF7 Style Fixes <===//
        if (document.querySelector(".wpcf7-form")) {
            //===> Textarea <===//
            Phenix('.wpcf7-textarea').forEach((element:any) => {
                element.setAttribute('cols', null);
                element.setAttribute('rows', null);
            });

            //===> Required <===//
            Phenix('.wpcf7-validates-as-required').forEach((element:any) => element.setAttribute('required', true));

            /*===== Whitespace =====*/
            Phenix('.wpcf7-form br').forEach((space:HTMLElement) => space.remove());
            Phenix('.wpcf7[dir], .wpcf7 [dir]').forEach((element:HTMLElement) => element.removeAttribute('dir'));
        }
    },

    //====> S.E.O : Fixes <====//
    fixSEO = () => {
        //====> Schema Meta Data Set <====//
        if(!document.body.getAttribute('itemscope')) document.body.setAttribute('itemscope', "");
        if(!document.body.getAttribute('itemtype')) document.body.setAttribute('itemtype', "https://schema.org/WebPage");

        //====> Create Placeholder Keywords <=====//
        let pds_meta_description = document.querySelector('.entry-content p:first-of-type')?.textContent.substring(0, 160);

        //====> S.E.O : Missing Meta <====//
        if (!document.head.querySelector('meta[name="description"]')) Phenix(document.head).insert('append', `<meta name="description" content="${pds_meta_description}">`);

        //====> Inputs do not have a discernible name <====//
        Phenix('input:not([title]):not([type="submit"]), select:not([title])').forEach((element:HTMLElement) => {
            //===> Define Data <===//
            let element_label = element.getAttribute('placeholder') || element.getAttribute('data-placeholder');

            //===> If the placeholder is not valid <===//
            if (!element_label) {
                //===> Get the Label <===//
                let label = Phenix(element).prev('label') || Phenix(element).next('label') || element.closest('label');
                //=== Get the Controller Parent ====//
                let element_parent = Phenix(element).ancestor('p') || Phenix(element).ancestor('[class*="col"]') || Phenix(element).ancestor('div');
                //===> if the label not exist get the parent text <====//
                if (!label && element_parent) label = Phenix(element_parent).prev('label') || Phenix(element_parent).next('label');
                //===> Correct Label if there are none <===//
                if (label && label.textContent) element_label = label.textContent.trim();
            }

            //===> Set Attributes <===//
            if(!element.getAttribute('aria-label')) element.setAttribute('aria-label', `${element_label}`);
            if(!element.getAttribute('title') || element.getAttribute('title') === "") element.setAttribute('title', `${element_label}`);
            if(!element.getAttribute('placeholder') || element.getAttribute('placeholder') === "") element.setAttribute('placeholder', `${element_label}`);
        });

        //===> Buttons Fixes <===//
        Phenix('button.btn:not([type])').forEach((button:HTMLElement) => {
            //===> Check if the Button in a Form <===//
            let checkForForm = Phenix(button).ancestor('form'),
                checkForInput = checkForForm?.querySelector('[type="submit"]');

            //===> Set Type Attribute <===//
            if (!checkForForm || !checkForInput) button.setAttribute('type', "button");
            else if (checkForForm && !checkForInput) button.setAttribute('type', 'submit');
        });
    };

    /*====> Unblock Fonts <====*/
    Phenix('#fontawesome-css, #pds-icons-css, #pds-cfont-css, #theme-style-css, #phenix-css, #pds-primary-font-css, #pds-secondary-font-css, #pds-style-font-css').forEach((style:HTMLElement) => style.setAttribute('media', 'all'));

    /*====> for Front-End <====*/
    if (!isAdmin && !isEditor) {
        /*====> Activated Menu Items <====*/
        Phenix('.current-menu-parent, .current-menu-item').addClass('px-item-active');
        Phenix(".px-navigation.has-active-submenu .px-item-active").addClass("px-submenu-active");

        //===> Run Scripts <===//
        Phenix(document).init();
        
        //====> Start Fixes <====//
        fixCF7(); fixSEO();

        //====> Adminbar Fix <====//
        if (document.querySelector('#wpadminbar')) Phenix('body').css({ "padding": "0", 'padding-top' : '32px', "margin-top": "-24px"});
        
        //===> Alignwide Fix <===//
        Phenix(".alignfull").forEach((element:HTMLElement) => element.classList.remove('alignfull'));

        //===> Set Logo Link <===//
        Phenix(".wp-block-phenix-logo").setAttributes({"href": PDS_WP_KEY?.site || "/"});
    }

    /*====> for Admin Panel <====*/
    else if (isAdmin && !isEditor) {
        //====> Tabs <====//
        Phenix('.px-tabs').tabs();
        //====> Dropdown Buttons <====//
        Phenix('.px-dropdown').dropdown();
        //===> .Others. <===//
        Phenix(document).utilities('form, other');
    }

    /*====> for Block Editor <====*/
    if(isEditor) {
        //====> Disable Links <====//
        Phenix('.editor-styles-wrapper a[href]').on('click', clicked => clicked.preventDefault(), true);
    }
});

//===> Create WP Uploader <===//
window.PxWpUploader = isClicked => {
    //===> Prevent Default <===//
    isClicked.preventDefault();
    let input = Phenix(isClicked.target).next(".uploader-input");

    //===> Preview <===//
    let input_preview = document.querySelector('.loading-image'),
        value_preview = Phenix(input).ancestor('.px-custom-uploader')?.querySelector('.input-value');

    //===> Track Media Frame for Each Instance <===//
    if (!isClicked.target.mediaPopup) {
        //===> Create Media Popup if it Doesn't Exist <===//
        isClicked.target.mediaPopup = wp.media({
            title: "Upload Image",
            multiple: false
        });

        //===> Handle Media Selection <===//
        isClicked.target.mediaPopup.on("select", () => {
            //===> Get the Image URL <===//
            var uploaded_image = isClicked.target.mediaPopup.state().get("selection").first();
    
            //===> Set the URL to the Input <===//
            input.value = uploaded_image.toJSON().url;
    
            //===> Set Preview and Value <===//
            if (input_preview) input_preview.setAttribute('src', uploaded_image.toJSON().url);
            if (value_preview) value_preview.textContent = uploaded_image.toJSON().name;
        });
    }

    //===> Open the Popup <===//
    isClicked.target.mediaPopup.open();
};


//====> Fixing [Document does not have a main landmark.] <====//
document.querySelector(".entry-content")?.setAttribute("role", "main");