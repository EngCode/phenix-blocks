/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
*/

/*====> Phenix JS <====*/
import Phenix from "..";
declare var wp:any,
PDS_WP_KEY:any;

/*====> D.O.M is Ready ? <====*/
Phenix(document).ready(ready => {
    /*====> for Front-End <====*/
    if (!document.body.classList.contains('wp-admin')) {
        //====> Add Design Options Classes <===//
        document.body.classList.add('phenix-wp-design');

        //====> S.E.O : Headline Fix <====//
        if(!document.querySelector('h1')) Phenix('.main-header').insert('append', `<h1 class="hidden">${document.title}</h1>`);

        //===> Contact Form 7 Fixes <===//
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

        /*====> Activated Menu Items <====*/
        Phenix('.current-menu-parent, .current-menu-item').addClass('px-item-active');

        //====> Adminbar Fix <====//
        if (document.querySelector('#wpadminbar')) Phenix('body').css({ "padding": "0", 'padding-top' : '32px', "margin-top": "-24px"});

        //===> Set Logo Link <===//
        Phenix(".wp-block-phenix-logo").setAttributes({"href": PDS_WP_KEY?.site || "/"});

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
    } 
    /*====> for the Admin <====*/
    else {
        //===> Fix Tables Style <===//
        Phenix('.wp-list-table .column-date, .wp-list-table .column-author').forEach((dateColumn:HTMLElement) => {
            dateColumn.classList.add('tx-nowrap');
            dateColumn.innerHTML = dateColumn.innerHTML.replace('<br>', ' ');
        });

        //===> Fix Tables Style <===//
        Phenix('.wp-list-table .row-actions span').forEach((spanLink:HTMLElement) => spanLink.innerHTML = spanLink.innerHTML.replace('|', ''));
    }
    /*====> for the Editor <====*/
    if(document.querySelector("#site-editor") || document.querySelector('body.block-editor-page')) {
        //===> Site Editor Only <====//
        if (document.querySelector('#site-editor')) {
            let loadAssetTimer = setInterval(()=> {
                //===> Load Assets in Frame <====//
                if (window.frames['editor-canvas']) {
                    //===> Check in the Editor <===//
                    let frameDoc = window.frames['editor-canvas'].document,
                        fontAwesome = document.querySelector("#fontawesome-css");
                    //===> Load FontAwesome <===//
                    if (!frameDoc.querySelector("#fontawesome-css") && fontAwesome) frameDoc.body.appendChild(document.importNode(fontAwesome, true));
                    //===> Clear Timer <===//
                    clearInterval(loadAssetTimer);
                }
            }, 1000);
        }

        //====> Add Design Options Classes <===//
        document.body.classList.add('phenix-wp-design');

        //====> Disable Links <====//
        Phenix('.editor-styles-wrapper a[href]').on('click', clicked => clicked.preventDefault(), true);

        //===> Removes Editor Reset styles <===//
        let common_css    = `#common-rtl-css, #common-css`,
            reset_styles  = `#wp-reset-editor-styles-rtl-css, #wp-reset-editor-styles-css`,
            block_library = `#wp-block-library-theme-css, #wp-block-library-theme-rtl-css`;

        //===> Run Files Remover <===//
        Phenix(`${reset_styles}, ${common_css}, ${block_library}`).forEach((file:HTMLElement) => file.remove());
    }
});