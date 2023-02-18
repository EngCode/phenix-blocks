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
        if (document.querySelector('#wpadminbar')) Phenix('body').css({ 'padding-top' : '32px' });

        //====> Adminbar <====//
        if (document.querySelector('#wpadminbar')) Phenix('body').css({"margin-top": "-24px","padding": "0"});

        //===> Set Logo Link <===//
        Phenix(".wp-block-phenix-logo").setAttributes({"href": PDS_WP_KEY?.site || "/"});
    }

    /*====> for the Editor <====*/
    if(document.querySelector("#site-editor") || document.querySelector('body.block-editor-page')) {
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