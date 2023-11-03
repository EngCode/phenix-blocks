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
PhenixElements.prototype.utilities = function (options?:{
    type?:string, //====> Utilities Types
}) {
    //====> Default Type <====//
    let type = options?.type || 'all';

    //===> Form Utils <====//
    if (type.includes("form") || type === "all") {
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

    //====> Others <====//
    if (type.includes("other") || type === "all") {
        //====> Item Remover <====//
        Phenix('.remove-item').on('click', click => {
            //====> Prevent Default Behavior <====//
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

        //====> Create Animated Count Up <====//
        Phenix('.px-counter').forEach((element:HTMLElement) => {
            //===> Separate Numbers from Symbols <====//
            const numbers = element.textContent.match(/\d+/g),
                  characters = element.textContent.replace(`${numbers}`, '');

            //===> Set Correct Values <====//
            element.setAttribute('data-value', `${numbers}`);
            if(characters && !element.getAttribute('data-symbol')) element.setAttribute('data-symbol', `${characters}`);

            //====> inView Checker <====//
            Phenix(window).on('scroll', scroll => {
                //===> Start Counting <====//
                if (Phenix(element).inView() && !element.classList.contains('counting')) Phenix(element).counter();
            });
        });
    }

    //====> Masonry Grid <====//
    if (type.includes("form") || type === "grid") Phenix('.px-masonry').forEach((gallery:HTMLElement) => {
        //===> Wait for Loading <===//
        setTimeout(() => {
            let max_height = Phenix(gallery).height();
            gallery.style.maxHeight = `${max_height}px`;
            gallery.classList.add('flow-columns');
        }, 500);
    });

    //====> Dynamic Word Coloring <====//
    if (type.includes("text") || type === "all") {
        //====> Dynamic Word Coloring <====//
        Phenix('body:not(.wp-admin) .colored-word').forEach((title:HTMLElement) => {
            //====> Setup Properties <====//
            var titleContent = title.innerHTML,
                word_array = titleContent.split(/[ ]+/),
                lastWord  = word_array.splice(-1);
            //====> Return Title <====//
            let theResult = `${word_array} <span class="color-primary">${lastWord}</span>`;
            title.innerHTML = theResult.replace(/,/g, ' ');
        });
        //====> Max Text Length <====//
        Phenix('[data-max-text]').forEach((element:any) => {
            //===> Element Data <===//
            let text = element.textContent,
                max  = parseInt(element.getAttribute('data-max-text'));
    
            //===> check count <===//
            if (text.length > max) element.textContent = text.slice(0, max) + '...';
        });
        //====> Custom Colored Titles <====//
        const pds_words_wrapper = (str, classes, num) => {
            //===> Split String <===//
            const words = str.split(' ');
        
            //===> make sure its valid request <===//
            if (!num) num = 2;
            if (words.length < num) { return str; }

            //===> Get the last two words <===//
            const lastTwoWords = words.slice(-num);
        
            //===> Join the words back together with a space between them, and wrap in a span element <===//
            const wrappedWords = `<span class="${classes}">${lastTwoWords.join(' ')}</span>`;
        
            //===> Replace the last two words in the original string with the wrapped words <===//
            return str.replace(lastTwoWords.join(' '), wrappedWords);
        };

        Phenix('.gradient-text').forEach((title:HTMLElement) => {
        //===> Get the Title Content <===//
        let title_content = title.textContent,
            gradient_name = "";

        //===> get the title background name <===//
        title.classList.forEach(className => {
            if (className.includes('grade-')) gradient_name += ` ${className.includes('bg-') ? "" : "bg-"}${className}`;
        });

        //====> Set the Title Content <====//
        title.innerHTML = pds_words_wrapper(title_content, `bg-clip-text ${gradient_name.length < 1 ? "bg-grade-45 bg-grade-primary-secondary" : gradient_name.trim()}`, title_content.split(' ').length - 1);
        });
    }


    //====> icons List <====//
    if (type.includes("icons") || type === "all") Phenix('.icons-list').forEach((list:HTMLElement) => {
        if (list.getAttribute('data-icon')) {
            let classes = list.getAttribute('data-icon').split(" ") || [];
            list.querySelectorAll('li').forEach(item => item.classList.add(...classes));
        }
    });

    //====> Copyrights Protection <====//
    if (type.includes("copyrights")) {
        Phenix(document).on("contextmenu", rightClick => rightClick.preventDefault());
        Phenix(document).on("selectstart", textSelect => textSelect.preventDefault());
    }

    //====> SEO Fix <====//
    if (type.includes("seo") || type === "all") {
        //====> Headline Fix <====//
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
            if (!link.getAttribute('title') || link.getAttribute('title') === "") link.setAttribute('title', link.textContent.trim());
        });
    }

    //====> Return Phenix Query <====//
    return this;
}