/**======> Referance By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Multi-Level Menu Builder
 * ===> 03 - 
 * ===> 04 - 
 * ===> 05 - 
 * ===> 06 - 
 * ===> 00 - ....
 * ===> 00 - Phenix Selecting Method
*/

/*====> Phenix JS <====*/
import Phenix from "..";
declare var wp: any;

/*====> D.O.M is Ready ? <====*/
Phenix(document).ready(ready => {
    /*====> for Front-End <====*/
    if (!document.body.classList.contains('wp-admin')) {
        //===> WPF7 Fixes <===//
        Phenix('.wpcf7-textarea').forEach((element:any) => {
            element.setAttribute('cols', null);
            element.setAttribute('rows', null);
        });

        Phenix('.wpcf7-validates-as-required').forEach((element:any) => {
            element.setAttribute('required', true);
        });

        /*====> Activated Items Detect <====*/
        Phenix('.current-menu-parent, .current-menu-item').addClass('px-item-active');

        /*===== Contact 7 Fixs =====*/
        Phenix('.wpcf7-form br').forEach((space:HTMLElement) => space.remove());
        Phenix('.wpcf7[dir], .wpcf7 [dir]').forEach((element:HTMLElement) => element.removeAttribute('dir'));

        //====> Adminbar Fix <====//
        if (document.querySelector('#wpadminbar')) Phenix('body').css({ 'padding-top' : '32px' });

        //====> H1 Fix <====//
        if(document.querySelector('h1') !== null) 
            Phenix('.main-header').insert('append', `<h1 class="hidden">${document.title}</h1>`);

        //====> Phenix Blocks <====//
        Phenix('.wp-block-design-px-section[data-src]').multimedia();

        //====> Adminbar <====//
        if (document.querySelector('#wpadminbar')) {
            Phenix('body').css({"margin-top": "-24px","padding": "0"});
        }
    }
    /*====> for Admin Panel <====*/
    else {
        //====> Disable Links <====//
        Phenix('.editor-styles-wrapper a[href]').on('click', clicked => clicked.preventDefault(), true);
    }
});
