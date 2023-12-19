/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
*/

/*====> Phenix JS <====*/
import Phenix from "..";
declare var wp:any,
    PDS_WP_KEY:any,
    window:any;

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
        document.body.setAttribute('itemscope', "");
        document.body.setAttribute('itemtype', "https://schema.org/WebPage");
        if(!document.querySelector('h1')) Phenix('.main-header').insert('append', `<h1 class="hidden">${document.title}</h1>`);

        //====> S.E.O : Missing Meta <====//
        if (!document.head.querySelector('meta[name="description"]')) Phenix(document.head).insert('append', `<meta name="description" content="this is ${document.title} website with no proper description.">`);
        if (!document.head.querySelector('meta[name="keywords"]')) Phenix(document.head).insert('append', `<meta name="description" content="${document.title}, HTML, Phenix, Abdullah, Ramadan, Web, Designer, Developer, Placeholder, Keyword, WordPress, phenixthemes.com">`);
        
        //====> Links do not have a discernible name <====//
        Phenix('a:empty, button:empty').forEach((link:HTMLElement) => {
            //===> Define Data <===//
            let elTitle:string,
                elType = link.classList.contains('btn') || link.tagName === "BUTTON" ? "Button" : link.classList.contains('media') ? "Media" : "Resource";

            //===> Get a Correct Title <===//
            let parent = Phenix(link).ancestor('[class*="col"]') || Phenix(link).ancestor('[class*="row"]') || Phenix(link).ancestor('[class*="container"]');
            if (parent && parent.querySelectorAll('h2:first-of-type, h3:first-of-type, h4:first-of-type, p:first-of-type')[0]) {
                parent.querySelectorAll('h2:first-of-type, h3:first-of-type, h4:first-of-type, p:first-of-type').forEach(element => !elTitle && element.textContent ? elTitle = element.textContent.trim() : null);
            } else elTitle = document.title;

            //===> Set Attributes <===//
            if(!link.getAttribute('title') || link.getAttribute('title') === "") link.setAttribute('title', `${elTitle} ${elType} Element`);
            if(!link.getAttribute('aria-label')) link.setAttribute('aria-label', `${link.getAttribute('title') || elTitle} ${elType} Element`);
            // if(!link.getAttribute('placeholder') || link.getAttribute('placeholder') === "") link.setAttribute('placeholder', `${elTitle} ${elType} Element`);
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
        let FormsSubmit = Phenix('form[action] [type="submit"]'),
            spamInput = `<input name="px-protection" title="px-prot" style="left:100%; opacity: 0; visibility: hidden; z-index: -1" class="hidden position-ab" type="text" name="px-prot" value="" tabindex="-1" autocomplete="off" />`;

        //===> Create Spam Inputs <===//
        FormsSubmit.forEach(button => Phenix(button).insert('before', spamInput));

        //===> Add Spam Protection Filter <===//
        Phenix('form[action] [type="submit"]').on('click', isClicked => {
            //===> Get Form <===//
            let button = isClicked.target,
                form = Phenix(button).ancestor('form'),
                value = form.querySelector('[name="px-protection"]').value;

            if(value && value !== "") form.addEventListener('submit', submit => submit.preventDefault());
        });

        //===> Extra Spam Protection <===//
        document.querySelectorAll("form[action]").forEach((form:any) => form.addEventListener('submit', submit => {
            let value = form.querySelector('[name="px-protection"]')?.value;
            if(value && value !== "") submit.preventDefault();
        }));
    },

    editorAssets = () => {
        //====> Add Design Options Classes <===//
        document.body.classList.add('phenix-wp-design');

        //===> Removes Editor Reset styles <===//
        let common_css    = `#common-rtl-css, #common-css`,
            reset_styles  = `#wp-reset-editor-styles-rtl-css, #wp-reset-editor-styles-css`,
            block_library = `#wp-block-library-theme-css, #wp-block-library-theme-rtl-css`;

        //===> Run Files Remover <===//
        Phenix(`${reset_styles}, ${common_css}, ${block_library}`).forEach((file:HTMLElement) => file.remove());
    };

    /*====> Unblock Phenix <====*/
    document.querySelector('#phenix-js')?.removeAttribute('async');

    /*====> Unblock Fonts <====*/
    Phenix('#fontawesome-css, #pds-cfont-css, #theme-style-css, #phenix-css, #pds-primary-font-css, #pds-secondary-font-css').forEach((style:HTMLElement) => style.setAttribute('media', 'all'));

    /*====> for Front-End <====*/
    if (!document.body.classList.contains('wp-admin')) {
        //====> Start Fixes <====//
        fixCF7(); fixSEO(); spamBlock();

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
        Phenix("#menu-settings li a").forEach((link:HTMLElement) => {
            if (link.getAttribute("href").includes("blocks-product-editor-for-woocommerce")) {
                Phenix(link.parentNode).css({"display": "none"});
            }
        });
    }

    /*====> for Block Editor <====*/
    if(document.querySelector("#site-editor") || document.querySelector('body.block-editor-page')) {
        //===> Editor Assets <====//
        window.onload = editorAssets();
        // let cf7Cleaner = setInterval(() => fixCF7(), 1000);
        // setTimeout(() => clearInterval(cf7Cleaner), 10000);

        //====> Disable Links <====//
        Phenix('.editor-styles-wrapper a[href]').on('click', clicked => clicked.preventDefault(), true);
    }
});