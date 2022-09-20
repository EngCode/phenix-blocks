/**======> Referance By Comment <======
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
PhenixElements.prototype.utilities = function (options?:{
    type?:string, //====> Utilities Types
}) {
    //====> Default Type <====//
    let type = options?.type || 'all';

    //======> D.O.M is Ready <=======//
    Phenix(document).ready(ready => {
        //====> Form Utilities <====//
        if (type === 'form' || 'all') {
            //===> Placeholder Effect <====//
            Phenix('[placeholder]').forEach((control:HTMLElement) => {
                //====> Current Placeholder <===//
                let holder = control.getAttribute('placeholder');
                //====> Empty Placeholder <===//
                Phenix(control).on('focus', event => control.removeAttribute('placeholder'));
                //====> Restore Placeholder <===//
                Phenix(control).on('blur', event => control.setAttribute('placeholder', holder));
            });

            //===> Form Controls Group <===//
            Phenix('.form-ui, .px-form').forEach((form:HTMLElement) => {
                //===> Get the Controls Size <====//
                let size = form.getAttribute('data-size') || '';

                //===> for Each Form <====//
                form.querySelectorAll('input, select, textarea').forEach(controler => {
                    //====> Get the controler type <====//
                    let type = controler.getAttribute('type');
                    //====> if has no such class names or type <====//
                    if (!controler.matches('.btn' || '.form-control'))
                        type !== 'submit' || 'button' || 'radio' || 'checkbox' ? controler.classList.add('form-control', size) : '';
                });
            });
        }

        //====> Global Utilities <====//
        if (type === 'global' || 'all') {
            //====> Item Remover <====//
            Phenix('.remove-item').on('click', click => {
                //====> Prevent Default Behavor <====//
                click.preventDefault();
                //====> Remover Data <====//
                let trigger = click.target,
                    target  = trigger.getAttribute('data-target' || 'href') || false,
                    relation = trigger.getAttribute('data-relation');
    
                //=== Remove Target in Ancestors ===//
                if (!relation || relation === 'ancestor') Phenix(trigger).ancestor(target).remove();
                //=== Remove Target in Siblings ===//
                else if (relation === 'sibling') {
                    Phenix(trigger).siblings(target).forEach(sibling => sibling .remove());
                }
                //=== Remove Target as Global ===//
                else if (relation === 'global' || 'none') document.querySelector(target).remove();
                //=== Remove the Closest Target ===//
                else if (relation === 'closest' || 'related') trigger.closest(target).remove();
            });

            //====> Masonry Grid <====//
            Phenix('.px-masonry').forEach((gallery:HTMLElement) => {
                //===> Wait for Loading <===//
                setTimeout(() => {
                    let max_height = Phenix(gallery).height();
                    gallery.style.maxHeight = `${max_height}px`;
                    gallery.classList.add('flow-columns');
                }, 500);
            });

            //====> H1 Fix <====//
            let headline = document.querySelector('h1');
            if(headline !== null) Phenix('body').insert('prepend', `<h1 class="hidden">${document.title}</h1>`);

            //====> Dynamic Word Coloring <====//
            Phenix('body:not(.wp-admin) .colored-word').forEach((title:HTMLElement) => {
                //====> Setup Properties <====//
                var titleContent = title.innerHTML,
                    word_array = titleContent.split(/[ ]+/),
                    lastword  = word_array.splice(-1);
                //====> Return Title <====//
                let theResult = `${word_array} <span class="color-primary">${lastword}</span>`;
                title.innerHTML = theResult.replace(/,/g, ' ');
            });
        }

        //====> Max Text Length <====//
        Phenix('[data-max-text]').forEach((element:any) => {
            //===> Element Data <===//
            let text = element.textContent,
                max  = parseInt(element.getAttribute('data-max-text'));

            //===> check count <===//
            if (text.length > max) element.textContent = text.slice(0, max);
        });

        //====> icons List <====//
        Phenix('.icons-list').forEach((list:any) => {
            let classes = list.getAttribute('data-icon').split(" ");
            list.querySelectorAll('li').forEach(item => item.classList.add(...classes));
        });

        //====> Images Demstions <====//
        Phenix('img').forEach((img:any) => {
            //===> Get Image Data <===//
            let img_width = img.getAttribute('width') || img.style.width,
                img_height = img.getAttribute('height') || img.style.height,
                parent_width = img.parentNode.clientWidth,
                parent_height = img.parentNode.clientHeight;
            //===> Set Width and Height <===//
            if (!img_width && parent_width > 0)  img.setAttribute('width', `${parent_width}px`);
            if (!img_height && parent_height > 0) img.setAttribute('height', `${parent_height}px`);
        });
        
        //====> Loading <====//
        let loading_wrapper = document.querySelector('.px-loader');
        if (loading_wrapper) {
            //===> Disable Scroll <===//
            document.body.classList.add('overflow-hidden');

            //===> When Loading is Complete <===//
            window.addEventListener('load', loaded => {
                //===> Fast Loaded Fallback <===//
                setTimeout(() => {
                    //===> Enable Scroll <===//
                    document.body.classList.remove('overflow-hidden');
                    //===> Hide Loader <===//
                    Phenix(loading_wrapper).fadeOut();
                    //===> Remove Loader <===//
                    setTimeout(()=> loading_wrapper.querySelector('.content-box').remove(), 1000);
                }, 2500);
            });

            //===> When Leaving Page <===//
            window.addEventListener('beforeunload', isLeaving => Phenix(loading_wrapper).fadeIn());
        }

        //====> Copyrights Protection <====//
        // Phenix(document).on("contextmenu", rightClick => rightClick.preventDefault());
        // Phenix(document).on("selectstart", textSelect => textSelect.preventDefault());
    });

    //====> Return Phenix Query <====//
    return this;
}
