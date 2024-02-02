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
declare var Masonry:any;

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

        //====> Form Repeater <====//
        Phenix(".px-form-repeater").forEach((repeater_container:Element) => {
            //====> Define Data <====//
            const add_btn  = repeater_container.querySelector(".px-repeater-add"),
                  fields_key = repeater_container.getAttribute("data-fields-key"),
                  items_list = repeater_container.querySelector(".px-repeater-items"),
                  original_row = items_list.querySelector("[data-item-key]");

            //===> Set a Number for the Original Row <===//
            if(!original_row.getAttribute('data-item-key')) original_row.setAttribute("data-item-key", "0");

            //===> Correct the name of the Fields <===//
            original_row.querySelectorAll("[name]").forEach((element:HTMLElement) => {
                //====> Get the Name <====//
                let name = element.getAttribute("name");
                //====> Correct the Name <====//
                element.setAttribute("name", `${fields_key}[${original_row.getAttribute('data-item-key')}][${name}]`);
            });

            //===> Remove Button Creator <===//
            const create_remove_btn = (repeater_row:any) => {
                //===> Insert the Remove Button <===//
                const currentRemoveBtn = repeater_row.appendChild(add_btn.cloneNode(false));

                //===> Change the Button Style <===//
                currentRemoveBtn.classList.remove("fa-plus", "tiny", "small", "large", "xlarge");
                currentRemoveBtn.classList.add('fa-minus', 'danger', 'px-repeater-remove');

                //====> Correct Button Size <====//
                if (repeater_row.querySelector(".form-control")) {
                    let classNames = repeater_row.querySelector(".form-control").classList;
                    let sizes = ["tiny", "small", "large", "xlarge"];
                    sizes.some(size => classNames.contains(size) ? currentRemoveBtn.classList.add(size) : '');
                }

                //====> Remove the Item <====//
                currentRemoveBtn.addEventListener("click", (event:any) => Phenix(event.target).ancestor(".px-form-repeater-fields").remove());
            };

            //====> Add New Item (Remove Item Method Included) <====//
            add_btn.addEventListener("click", (event:any) => {
                //===> Create new Row <===//
                const newRow:any  = items_list.appendChild(original_row.cloneNode(true)),
                      currentRows = items_list.querySelectorAll("[data-item-key]").length-1;

                //===> Increase the Row Number <===//
                newRow.setAttribute("data-item-key", currentRows);

                //===> Change the Fields Name <===//
                newRow.querySelectorAll("[name]").forEach((element:any) => {
                    //====> Get the Name <====//
                    let name = element.getAttribute("name");
                    
                    //====> Correct the Name <====//
                    element.setAttribute("name", name.replace(`[${currentRows-1}]`, `[${currentRows}]`));

                    //====> Cleanup Any Values <====//
                    if (element.value) element.value = "";
                    if (element.tagName === "TEXTAREA") element.innerHTML = "";

                    //====> Clean Up Select Options <====//
                    if (element.tagName === "SELECT") {
                        element.querySelectorAll('[selected]').forEach(option => option.removeAttribute('selected'));
                        //====> Advanced Select Rebuild <====//
                        if (element.classList.contains('px-select')) Phenix(element).rebuildSelect();
                    }
                });

                //===> Create Remove Button <===//
                create_remove_btn(newRow);
            });

            //====> Create Remove Button Whenever it is not found <====//
            setInterval(() => {
                //====> Get the Rows <====//
                let rows = repeater_container.querySelectorAll('[data-item-key]:not([data-item-key="0"])');
                //====> Create Remove Button <====//
                if (rows) rows.forEach(row => !row.querySelector('.px-repeater-remove') ? create_remove_btn(row) : '');
            }, 1000);
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
    if (type.includes("all") || type === "grid") {
        //===> Check for MAsonry Elements <===//
        if(document.querySelector('.px-masonry')) Phenix(document).import("masonry", "script", "masonry.min.js", ()=> {
            var masonry = new Masonry('.px-masonry', {itemSelector: '[class*="col"]'});
            console.log(masonry);
        }, true);
    }
    
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

        //===> Dynamic Colors Variants for Elements Shadow <===//
        setTimeout(() => {
            Phenix("[class*='bx-shadow-gls'], .pds-sc-props").forEach((element:HTMLElement) => {
                //====> Color Transformer <====//
                const transformColor = (color: string, amount: number) => {
                    let rgb = color.match(/\d+/g).map(Number);
                    if (rgb.length > 4) rgb.splice(-(rgb.length - 3));
                    return rgb.map(c => Math.max(0, Math.min(255, c + amount))).join(', ');
                };
    
                //====> Color Contrast Checker <====//
                const isLightOrDark = (color:string) => {
                    //===> get Colors Range <====//
                    let all = color.split(','),
                        r = parseInt(all[0]), g = parseInt(all[1]), b = parseInt(all[2]);
                    //===> Calculate the luminance of the color <===//
                    let luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
                    //===> Return 'light' or 'dark' based on the luminance <===//
                    return luminance;
                }
    
                //====> get the Background Color <====//
                let bgColor = window.getComputedStyle(element).backgroundColor,
                    bgImage = window.getComputedStyle(element).backgroundImage,
                    darkerRgb:any = "0,0,0",
                    lighterRgb:any = "255,255,255";
    
                //====> Check if has Background Gradient <====//
                if (bgImage && bgImage.includes('gradient') && bgImage.match(/gradient\((.*?)\)/)) {
                    //===> Check for gradient Match colors <===//
                    let colors = [];
    
                    //===> Get Colors <===//
                    bgImage.match(/rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)/g).forEach((color:string) => {
                        colors.push(color.replace('rgb', '').replace('(', '').replace(')', ''));
                    });
    
                    //===> Get the colors from the gradient <===//
                    const colorOne = isLightOrDark(colors[colors.length - 1]),
                        colorTwo = isLightOrDark(colors[0]);
    
                    //===> Set the Colors <===//
                    darkerRgb  = transformColor(colorOne < colorTwo ? colors[colors.length - 1] : colors[0], -95);
                    lighterRgb = transformColor(colorOne > colorTwo ? colors[colors.length - 1] : colors[0], 95);
                }
    
                //====> Check if has Background Color <====//
                else if (bgColor) {
                    //====> Create a darker shade by subtracting 90 from each color component <====//
                    darkerRgb = transformColor(bgColor, -95);
                    //====> Create a lighter shade by adding 80 to each color component <====//
                    lighterRgb = transformColor(bgColor, 95);
                }
    
                //====> Add the Colors to the CSS Properties <====//
                element.style.setProperty('--shadow-color-dark', darkerRgb);
                element.style.setProperty('--shadow-color-light', lighterRgb);
            });
        }, 1000);

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
            let img_width = img.getAttribute('width') || img.style.width || img.clientWidth,
                img_height = img.getAttribute('height') || img.style.height || img.clientHeight,
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
            if (!link.getAttribute('title') || link.getAttribute('title') === "") {
                link.setAttribute('title', link.textContent.trim() || link.getAttribute('data-title'));
            }
        });
    }

    //====> Return Phenix Query <====//
    return this;
}