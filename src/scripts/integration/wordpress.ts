/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
*/

/*====> Phenix JS <====*/
import Phenix from "..";
declare var wp:any, PDS_WP_KEY:any, window:any;

/*====> D.O.M is Ready ? <====*/
Phenix(window).on("load", (loaded) => {
    //===> Contact Form 7 Fixes <===//
    const fixCF7 = () => {
        if (document.querySelector(".wpcf7-form")) {
            //===> Redirect WP7 After Submit <===//
            if (window.location.hash.substr(1).includes('wpcf7-')) {
                //===> ... <===//
                let isFailed = false,
                    theForm = document.querySelector(`#${window.location.hash.substr(1)}`);
                
                //===> Check Forms <===//
                if(theForm.classList.contains('failed')) isFailed = true;

                //===> Redirect <===//
                if (isFailed === false) {
                    console.log("is Success");
                    window.location.href = `${PDS_WP_KEY.site ? PDS_WP_KEY.site + '/success' : "/success"}`;
                }

                //===> Show Failed Message <===//
                else Phenix(document).notifications({
                    type: "error",
                    duration: "7000",
                    position: ["center", "center"],
                    message: Phenix(document).direction() === "ltr" ? "Something Went Wrong Please Try Again." : "لقد حدث خطأ ما يرجي اعادة المحاولة.",
                });
            }

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
        document.body.setAttribute('itemscope', "");
        document.body.setAttribute('itemtype', "https://schema.org/WebPage");
        let pds_keywords = `${document.title}, HTML, Phenix, Abdullah, Ramadan, Web, Designer, Developer, Design System, WordPress, phenixthemes.com`;
        let pds_meta_description = document.querySelector('.entry-content p:first-of-type')?.textContent.substring(0, 160);
        if (document.location.href.includes('phenixthemes.com')) {
            pds_keywords += `,شركة برمجة, تصميم مواقع, شركة تصميم مواقع, تصميم موقع الكتروني, تصميم مواقع الكترونية, شركات تصميم مواقع الكترونية, تصميم واجهة مستخدم, تطوير موقع ووردبريس, شركات تطوير مواقع الكترونية, شركات تصميم المواقع الالكترونية, تصميم مواقع الشركات, افضل شركة لتصميم المواقع, افضل شركات تصميم متاجر الكترونية, شركات تطوير المواقع الالكترونية, افضل شركات تصميم منصات الكترونية, افضل شركة برمجة منصات, شركات لعمل مواقع الانترنت, شركة برمجة وتصميم مواقع, أسعار تصميم المواقع, شركة تصميم مواقع ويب`
        }

        //====> Check for Headline Level 1 <====//
        if(!document.querySelector('h1')) Phenix('.main-header').insert('append', `<h1 class="hidden">${document.title}</h1>`);

        //====> S.E.O : Missing Meta <====//
        if (!document.head.querySelector('meta[name="description"]')) Phenix(document.head).insert('append', `<meta name="description" content="${pds_meta_description}">`);
        if (!document.head.querySelector('meta[name="keywords"]')) Phenix(document.head).insert('append', `<meta name="keywords" content="${pds_keywords}">`);

        //====> Links do not have a discernible name <====//
        Phenix('a:empty:not(.px-media), button:empty').forEach((link:HTMLElement) => {
            setTimeout(() => {
                //===> Get the Title from the Closest Text Element <===//
                let closestElement = link.closest('h2, h3, h4, p, a, img'),
                    elTitle:string = closestElement?.textContent.trim() || link.getAttribute('title') || "";
    
                //===> Get from an Attributes <===//
                if (!elTitle || elTitle === "null") elTitle = closestElement?.getAttribute('alt') || closestElement?.getAttribute('title') || "";
    
                //===> Set Attributes <===//
                if(!link.getAttribute('title')) link.setAttribute('title', `${elTitle}`);
                if(!link.getAttribute('aria-label')) link.setAttribute('aria-label', `${elTitle}`);
            }, 1000);
        });
        
        //====> Inputs do not have a discernible name <====//
        Phenix('input:not([title]), select:not([title])').forEach((element:HTMLElement) => {
            //===> Define Data <===//
            let element_label = element.getAttribute('placeholder') || element.getAttribute('data-placeholder') || element.tagName;

            //===> Get a Correct Title <===//
            let label = Phenix(element).prev('label') || Phenix(element).next('label');
            if (!label) {
                let element_parent = Phenix(element).ancestor('p') || Phenix(element).ancestor('[class*="col"]') || Phenix(element).ancestor('div');
                if (element_parent) label = Phenix(element_parent).prev('label') || Phenix(element_parent).next('label');
            }

            //===> Set Attributes <===//
            if (label && label.textContent) element_label = label.textContent.trim();

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
    },

    spamBlock = () => {
        //===> Form Spam Protection <===//
        let FormsSubmit = Phenix('form [type="submit"]'),
            spamInput = `<input name="px-protection" title="px-prot" style="left:100%; opacity: 0; visibility: hidden; z-index: -1" class="hidden position-ab" type="text" name="px-prot" value="" tabindex="-1" autocomplete="off" />`;

        //===> Create Spam Inputs <===//
        FormsSubmit.forEach(button => Phenix(button).insert('before', spamInput));

        //===> Add Spam Protection Filter <===//
        Phenix('form [type="submit"]').on('click', isClicked => {
            //===> Get Form <===//
            let button = isClicked.target,
                form = Phenix(button).ancestor('form'),
                value = form.querySelector('[name="px-protection"]').value;

            if(value && value !== "") form.addEventListener('submit', submit => submit.preventDefault());
        });

        //===> Extra Spam Protection <===//
        document.querySelectorAll("form").forEach((form:any) => form.addEventListener('submit', submit => {
            let value = form.querySelector('[name="px-protection"]')?.value;
            if (value && value !== "") submit.preventDefault();
        }));
    };

    /*====> Unblock Phenix <====*/
    document.querySelector('#phenix-js')?.removeAttribute('async');

    /*====> Unblock Fonts <====*/
    Phenix('#fontawesome-css, #pds-icons-css, #pds-cfont-css, #theme-style-css, #phenix-css, #pds-primary-font-css, #pds-secondary-font-css').forEach((style:HTMLElement) => style.setAttribute('media', 'all'));

    /*====> for Front-End <====*/
    if (!document.body.classList.contains('wp-admin')) {
        //====> Start Fixes <====//
        fixCF7(); fixSEO();

        /*====> Activated Menu Items <====*/
        Phenix('.current-menu-parent, .current-menu-item').addClass('px-item-active');

        //====> Adminbar Fix <====//
        if (document.querySelector('#wpadminbar')) Phenix('body').css({ "padding": "0", 'padding-top' : '32px', "margin-top": "-24px"});
        
        //===> Alignwide Fix <===//
        Phenix(".alignfull").forEach((element:HTMLElement) => element.classList.remove('alignfull'));

        //===> Set Logo Link <===//
        Phenix(".wp-block-phenix-logo").setAttributes({"href": PDS_WP_KEY?.site || "/"});

        //===> Run Scripts <===//
        Phenix(document).init();
    }

    /*====> for Admin Panel <====*/
    if (document.body.classList.contains('wp-admin') && !document.body.getAttribute('class')?.includes('-editor')) {
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
    if(document.querySelector("#site-editor") || document.querySelector('body[class*="editor"]')) {
        //====> Disable Links <====//
        Phenix('.editor-styles-wrapper a[href]').on('click', clicked => clicked.preventDefault(), true);
    }

    //===> WP Media Uploader <===//
    Phenix(".px-custom-uploader .uploader-btn").on("click", isClicked => {
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
    });

    if(document.querySelector('.px-custom-uploader .input-value')) document.querySelectorAll('.px-custom-uploader .input-value').forEach((item:any) => {
        item.classList.add('tx-nowrap');
        item.parentNode.classList.add('flow-nowrap');
    });
});