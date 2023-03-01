/**======> Reference By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Phenix Utilities
 * ===> 03 - Form Utilities
 * ===> 04 - Placeholder Handler
 * ===> 05 - Global Utilities
 * ===> 06 - Item Remover
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> Phenix Utilities <====*/
PhenixElements.prototype.seo = function (options?:{
    type?:string, //====> Utilities Types
}) {
    //====> H1 Fix <====//
    let headline = document.querySelector('h1');
    if(!headline) Phenix('body').insert('prepend', `<h1 class="hidden">${document.title}</h1>`);
    
    //====> Images SEO/Performance <====//
    Phenix('img').forEach((img:any) => {
        //===> Get Image Data <===//
        let img_width = img.getAttribute('width') || img.style.width,
            img_height = img.getAttribute('height') || img.style.height,
            parent_width = img.parentNode.clientWidth,
            parent_height = img.parentNode.clientHeight;
        //===> Set Width and Height <===//
        if (!img_width && parent_width > 0)  img.setAttribute('width', `${parent_width}`);
        if (!img_height && parent_height > 0) img.setAttribute('height', `${parent_height}`);
        //===> Alternative Text <===//
        if (!img.getAttribute('alt') || img.getAttribute('alt') === "") img.setAttribute('alt', document.title);
    });

    //====> Links SEO <====//
    Phenix('a[href]').forEach((link:any) => {
        //===> Alternative Text <===//
        if (!link.getAttribute('title') || link.getAttribute('title') === "") link.setAttribute('title', link.textContent);
    });

    //====> Return Phenix Query <====//
    return this;
}
