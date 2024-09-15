/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
*/

/*====> Phenix JS <====*/
import Phenix from "..";
declare var wp:any, PDS_WP_KEY:any, window:any;

/*====> D.O.M is Ready ? <====*/
Phenix(document).on("DOMContentLoaded", (loaded) => {
    //===> Contact Form 7 Fixes <===//
    const fixCF7 = () => {
        //====> Fetching Form Data for CF7 <=====//
        document.querySelectorAll('.wpcf7-form').forEach((form:any) => {
            //====> Forms Validation <====//
            Phenix('.wpcf7-form, .px-form-validation').validation();

            //====> on Submit Prevent the Native behavior and submit with Fetch <====//
            form.addEventListener('submit', (event:any) => {
                //====> Prevent the default form submission <====//
                event.preventDefault();
                const submitButton = form.querySelector('input[type="submit"]') || form.querySelector('button[type="submit"]') || form.querySelector('.btn:last-of-type');

                console.log(submitButton);

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

                    // Create a new FormData object from the form
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
                        //===> Reset Forms on Loading <===//
                        Phenix('.wpcf7 input:not([type="hidden"]):not(.btn):not([type="submit"]), .wpcf7 select, .wpcf7 textarea').forEach((input:any) => {input.value = '';});

                        //===> Reset PX Select Component <===//
                        form.querySelectorAll('div.px-select').forEach((element: any) => {
                            let firstOption = element.querySelector('.px-select-option:first-child');
                            const toggleButton = element.querySelector('.px-select-toggle');
                            if (!firstOption) firstOption = element.querySelector('.px-select-option:nth-child(2)');
                            
                            toggleButton.textContent = firstOption.textContent;
                        });

                        //====> Disable Form <====//
                        submitButton.classList.remove('px-loading-inline');
                        //===> Redirect to Success <===//
                        const sourceParameter = window.location.href.replace(PDS_WP_KEY.site, '');
                        window.location.href = `${PDS_WP_KEY.site ? PDS_WP_KEY.site + `/success/?source=${sourceParameter}` : `/success/?source=${sourceParameter}`}`;
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
        let pds_keywords = `${document.title}, HTML, Phenix, Abdullah, Ramadan, Web, Designer, Developer, Design System, WordPress, phenixthemes.com`;
        let pds_meta_description = document.querySelector('.entry-content p:first-of-type')?.textContent.substring(0, 160);

        //====> Add keywords for PX website only <====//
        if (document.location.href.includes('phenixthemes.com')) pds_keywords += `,شركة برمجة, تصميم مواقع, شركة تصميم مواقع, تصميم موقع الكتروني, تصميم مواقع الكترونية, شركات تصميم مواقع الكترونية, تصميم واجهة مستخدم, تطوير موقع ووردبريس, شركات تطوير مواقع الكترونية, شركات تصميم المواقع الالكترونية, تصميم مواقع الشركات, افضل شركة لتصميم المواقع, افضل شركات تصميم متاجر الكترونية, شركات تطوير المواقع الالكترونية, افضل شركات تصميم منصات الكترونية, افضل شركة برمجة منصات, شركات لعمل مواقع الانترنت, شركة برمجة وتصميم مواقع, أسعار تصميم المواقع, شركة تصميم مواقع ويب`;

        //====> Check for Headline Level 1 <====//
        if(!document.querySelector('h1')) Phenix('.main-header').insert('append', `<h1 class="hidden">${document.title}</h1>`);

        //====> S.E.O : Missing Meta <====//
        if (!document.head.querySelector('meta[name="description"]')) Phenix(document.head).insert('append', `<meta name="description" content="${pds_meta_description}">`);
        if (!document.head.querySelector('meta[name="keywords"]')) Phenix(document.head).insert('append', `<meta name="keywords" content="${pds_keywords}">`);

        //====> Links do not have a discernible name <====//
        Phenix('a:not([title]):empty, button:not([title]):empty, a:not([title]), button:not([title])').forEach((link:HTMLElement) => {
            //===> Links Metadata Fixer <===//
            const LinksMetaFixer = () => {
                //===> Get the Title from the Closest Text Element <===//
                let closestElement = link.closest('h2, h3, h4, p, a, img'),
                    elTitle:string = document.title;

                //===> Get the Title from the closest elements Attributes or the document title <===//
                if (closestElement) closestElement.textContent.trim() || link.getAttribute('title') || closestElement?.getAttribute('alt') || document.title;

                //===> Set Attributes <===//
                if(!link.getAttribute('title')) link.setAttribute('title', `${elTitle}`);
                if(!link.getAttribute('aria-label')) link.setAttribute('aria-label', `${elTitle}`);
            };

            //===> Fix the Links <===//
            LinksMetaFixer();
        });

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

    const isEditor = document.querySelector("#site-editor") || document.querySelector('body[class*="editor"]');
    const isAdmin  = document.body.classList?.contains('wp-admin');

    /*====> Unblock Fonts <====*/
    Phenix('#fontawesome-css, #pds-icons-css, #pds-cfont-css, #theme-style-css, #phenix-css, #pds-primary-font-css, #pds-secondary-font-css, #pds-style-font-css').forEach((style:HTMLElement) => style.setAttribute('media', 'all'));

    /*====> for Front-End <====*/
    if (!isAdmin && !isEditor) {
        /*====> Activated Menu Items <====*/
        Phenix('.current-menu-parent, .current-menu-item').addClass('px-item-active');

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
        //===> Fix Tables Style <===//
        Phenix('.wp-list-table .column-date, .wp-list-table .column-author').forEach((dateColumn:HTMLElement) => {
            dateColumn.classList.add('tx-nowrap');
            dateColumn.innerHTML = dateColumn.innerHTML.replace('<br>', ' ');
        });

        //===> Fix Tables Style <===//
        Phenix('.wp-list-table .row-actions span').forEach((spanLink:HTMLElement) => spanLink.innerHTML = spanLink.innerHTML.replace('|', ''));
        
        //===> Run Scripts <===//
        Phenix(document).init();
    }

    /*====> for Block Editor <====*/
    if(isEditor) {
        //====> Disable Links <====//
        Phenix('.editor-styles-wrapper a[href]').on('click', clicked => clicked.preventDefault(), true);
    }

    /*====> for Block Editor and Admin <====*/
    else if (isEditor || isAdmin) {}
});

//===> Create WP Uploader <===//
window.PxWpUploader = isClicked => {
    //===> Prevent Default <===//
    isClicked.preventDefault();
    let input = Phenix(isClicked.target).next(".uploader-input");
    
    //===> Preview <===//
    let input_preview = document.querySelector('.loading-image'),
        value_preview = Phenix(input).ancestor('.px-custom-uploader')?.querySelector('.input-value');

    //===> Open Media Uploader <===//
    if(wp.media) {
        const mediaPopup = wp.media({
            title: "Upload Image",
            multiple: false
        });
        
        //===> Open the Popup <===//
        mediaPopup.open().on("select", isSelect => {
            //===> Get the Image URL <===//
            var uploaded_image = mediaPopup.state().get("selection").first();

            //===> Set the URL to the Input <===//
            input.value = uploaded_image.toJSON().url;

            //===> Set Preview and Value <===//
            if(input_preview) input_preview.setAttribute('src', uploaded_image.toJSON().url);
            if(value_preview) value_preview.textContent = uploaded_image.toJSON().name;
            
        });
    }
};