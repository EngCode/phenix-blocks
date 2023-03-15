/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
*/

/*====> Phenix JS <====*/
import Phenix from "..";
declare var wp:any,
    PDS_WP_KEY:any,
    window:any;

/*====> D.O.M is Ready ? <====*/
Phenix(document).ready(ready => {
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
        Phenix('a:empty').forEach((link:HTMLElement) => {
            //===> Define Data <===//
            let elTitle:string,
                elType = link.classList.contains('btn') ? "Button" : link.classList.contains('media') ? "Media" : "Resource";

            //===> Get a Correct Title <===//
            let parent = Phenix(link).ancestor('[class*="col"]') || Phenix(link).ancestor('[class*="row"]') || Phenix(link).ancestor('[class*="container"]');
            if (parent && parent.querySelectorAll('h2, h3, h4, p')[0]) {
                parent.querySelectorAll('h2, h3, h4, p').forEach(element => !elTitle && element.textContent ? elTitle = element.textContent.trim() : null);
            } else elTitle = document.title;

            //===> Set Attributes <===//
            if(!link.getAttribute('aria-label')) link.setAttribute('aria-label', `${elTitle} ${elType} Link`);
            if(!link.getAttribute('title') || link.getAttribute('title') === "") link.setAttribute('title', `${elTitle} ${elType} Link`);
        });
    },

    spamBlock = () => {
        //===> Form Spam Protection <===//
        let FormsSubmit = Phenix('form[action] [type="submit"]'),
            spamInput = `<input style="left:100%; opacity: 0; visibility: hidden; z-index: -1" class="hidden position-ab" type="text" name="px-prot" value="" tabindex="-1" autocomplete="off" />`;

        //===> Create Spam Inputs <===//
        FormsSubmit.forEach(button => Phenix(button).insert('after', spamInput));

        //===> Add Spam Protection Filter <===//
        Phenix('form[action] [type="submit"]').on('click', isClicked => {
            //===> Get Form <===//
            let button = isClicked.target,
                form = Phenix(button).ancestor('form'),
                value = form.querySelector('[name="px-prot"]').value;

            if(value && value !== "") form.addEventListener('submit', submit => submit.preventDefault());
        });

        //===> Extra Spam Protection <===//
        document.querySelectorAll("form[action]").forEach((form:any) => form.addEventListener('submit', submit => {
            let value = form.querySelector('[name="px-prot"]')?.value;
            if(value && value !== "") submit.preventDefault();
        }));
    },

    editorAssets = () => {
        //===> Load Assets in Frame <====//
        if (document.querySelector('#site-editor')) {
            let loadAssetTimer = setInterval(()=> {
                if (window.frames['editor-canvas']) {
                    //===> Check in the Editor <===//
                    let frameDoc = window.frames['editor-canvas'].document;

                    //===> Check for the Frame Document <===//
                    if (frameDoc) {
                        //===> Load FontAwesome <===//
                        if (!frameDoc.querySelector("#fontawesome-css")) {
                            let fontAwesome = document.querySelector("#fontawesome-css"),
                                importedEl = fontAwesome ? document.importNode(fontAwesome, true) : false;
    
                            if(importedEl) frameDoc.body.appendChild(document.importNode(fontAwesome, true));
                        }
    
                        //===> Load Phenix Js <===//
                        if (!frameDoc.querySelector("#phenix-js")) {
                            let phenixJs = document.querySelector("#phenix-js"),
                                importedEl = phenixJs ? document.importNode(phenixJs, true) : false;
                            if(importedEl) frameDoc.body.appendChild(document.importNode(phenixJs, true));
                        }
                    }
                }

                //===> Clear Timer <===//
                clearInterval(loadAssetTimer);
            }, 1000);
        };

        //====> Add Design Options Classes <===//
        document.body.classList.add('phenix-wp-design');

        //===> Removes Editor Reset styles <===//
        let common_css    = `#common-rtl-css, #common-css`,
            reset_styles  = `#wp-reset-editor-styles-rtl-css, #wp-reset-editor-styles-css`,
            block_library = `#wp-block-library-theme-css, #wp-block-library-theme-rtl-css`;

        //===> Run Files Remover <===//
        Phenix(`${reset_styles}, ${common_css}, ${block_library}`).forEach((file:HTMLElement) => file.remove());
    };

    /*====> Change Scrollbar <====*/
    document.querySelector('html').classList.add('px-scrollbar');
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
        Phenix(document).copyrights("Phenix Blocks").init();
    } 
    /*====> for Admin Panel <====*/
    else {
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
        editorAssets();
        let cf7Cleaner = setInterval(() => fixCF7(), 1000);
        setTimeout(() => clearInterval(cf7Cleaner), 10000);

        //====> Disable Links <====//
        Phenix('.editor-styles-wrapper a[href]').on('click', clicked => clicked.preventDefault(), true);
    }
    /*====> for Adminbar <====*/
    if(document.querySelector('#wpadminbar')) {
        /*====> Remove Logo Submenu <====*/
        document.querySelector('#wp-admin-bar-wp-logo .ab-sub-wrapper')?.remove();
        document.querySelector('#wp-admin-bar-customize')?.remove();
        let aboutLink = document.querySelector('#wpadminbar .ab-item[href*="about.php"]');
        if (aboutLink) aboutLink.setAttribute('href', aboutLink.getAttribute('href').replace('about.php', 'admin.php?page=pds-dashboard'));

        /*====> Fixes <====*/
        Phenix('a.ab-item, .ab-item a').forEach((link:HTMLElement) => link.setAttribute('rel', 'noopener'));
    }
});