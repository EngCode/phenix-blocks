/**======> Referance By Comment <======
 * ===> 01 - Phenix Object
 * ===> 02 - Advanced Select
*/

/*====> Phenix Object <====*/
import Phenix, { PhenixElements } from "..";

/*====> Advanced Select <====*/
PhenixElements.prototype.select = function (options?:{
    search:boolean,
    multiple:boolean,
    placeholder?:string,
    searchPlaceholder?:string,
}) {
    //====> Loop Through Phenix Elements <====//
    this.forEach(select => {
        //====> if Not Mounted Create <====//
        if (!select.classList.contains('px-mounted')) {
            //====> Get Options <====//
            let events_data:any = {},
                classes  = select.classList,
                multiple = select.hasAttribute('multiple') || options?.multiple,
                search = select.getAttribute('data-search') || options?.search,
                placeholder = select.getAttribute('data-placeholder') || options?.placeholder,
                searchPlaceholder = select.getAttribute('data-search-placeholder') || options?.searchPlaceholder || 'Search in Options';

            //====> Create Custom Select <====//
            let new_select = Phenix(select).insert('before', `<div class="px-select flexbox position-rv" style="line-height:var(--height);cursor: pointer;"></div>`);

            //====> Copy Select Classes and Perpare CSS <====//
            new_select.classList.add(...classes);
            new_select = Phenix(new_select);
            select.classList.add('hidden', 'px-mounted');

            //====> Fix Padding for Single <====//
            if (!multiple) {
                new_select.css({
                    "padding-left": "0",
                    "padding-right": "0",
                });
            } else {
                new_select.css({
                    "height" : "auto",
                    "min-height": "var(--height)",
                    "padding-left": `calc(var(--padding)/2)`,
                    "padding-right": `calc(var(--padding)/2)`,
                });
            }

            //====> Create Options Wrapper <====//
            let options_list = new_select.insert('append', `<ul class="reset-list fs-14 hidden border-1 border-solid border-alpha-10 fluid bg-inherit px-select-options position-ab fluid lineheight-160 pos-start-0 pos-after-y z-index-dropdown overflow-y-auto" style="max-height:270px;"></ul>`);
                options_list = Phenix(options_list);
            
            //====> Wrap the Original Select <====//
            select = new_select.insert('append', select);

            //====> Create Options List <====//
            select.querySelectorAll(':scope > *').forEach(option => {
                //====> Get Option Data <====//
                let option_text = option.textContent,
                    option_value = option.getAttribute('value'),
                    option_classes = `divider-b pdy-5`,
                    image_icon = ``,
                    current_item:any;

                //====> Set Images <====//
                if (option.hasAttribute('data-image')) {
                    let source = option.getAttribute('data-image');
                    //===> Clean Source [URL] <===//
                    source = encodeURI(source);
                    //===> Set the image <===//
                    image_icon = `<img style="width:1em" alt="${option_text}" src="${source}" class="me-5">`;
                }

                //====> Options Headline <====//
                if (option.matches('optgroup')) {
                    current_item = options_list.insert('append', `<li class="px-select-group bg-alpha-05 pdx-10 weight-strong ${option_classes}" data-value="${option_value}">${image_icon}${option_text}</li>`);
                }
                
                //====> Disabled Options  <====//
                else if (option.hasAttribute('disabled')) {
                    current_item = options_list.insert('append', `<li class="px-select-disabled pdx-15 color-gray tx-line-through ${option_classes}" data-value="${option_value}">${image_icon}${option_text}</li>`);
                } 
                
                //====> Options Items <====//
                else {
                    current_item = options_list.insert('append', `<li class="px-select-option pdx-15 ${option_classes}" data-value="${option_value}">${image_icon}${option_text}</li>`);
                }

                //====> Copy Classes <====//
                let original_classes = option.classList;
                if(original_classes.length > 0) original_classes.forEach((cl:any) => current_item.classList.add(cl));
            });

            //====> Create Placeholder <====//
            let first_option = select.querySelector('option:first-of-type'),
                first_label = placeholder ? placeholder : '---',
                first_classes = (holder) => {
                    //===> Get Placeholder Classes <===//
                    if (placeholder && holder) return holder;
                    else if (first_option.classList) return first_option.classList;
                },
                first_image = (image, alt) => {
                    if(placeholder && image) {
                        //===> Clean Source [URL] <===//
                        image = encodeURI(image);
                        //===> Set the image <===//
                        return `<img style="width:1em" alt="${alt}" src="${image}" class="me-5">`;
                    } else {return '';}
                };

            //====> Define [Multiple] Variables <====//
            let new_select_value, new_value_group, tag_classes, tag_remover,
                //====> Tag Remover Handler <====//
                set_tag_remover = (value_element) => {
                    if (value_element) value_element.addEventListener('click', clicked => {
                        //===> Get Value <===//
                        let tag_value = value_element.parentNode.getAttribute('data-value'),
                            select_values = new_select[0].getAttribute('data-value').split(',');

                        //===> Remove Tag <====//
                        value_element.parentNode.remove();

                        //===> Remove from Values <===//
                        select_values.forEach((val, index) => {
                            if(val === tag_value) select_values = select_values.splice(index-1, 1);
                        });

                        //====> Set Default Values <====//
                        new_select[0].setAttribute('data-value', select_values);
                        select.value = select_values;

                        //====> Unselect Original Options <====//
                        select.querySelector(`[value="${tag_value}"]`)?.removeAttribute('selected');
                    });
                },
                //====> Tag Remover Handler <====//
                tag_padding_fixer = () => {
                    //===> Remover Size Fixer <===//
                    if(Phenix(document).direction() === 'ltr') return 'padding-left: calc(1.5em + 8px)';
                    else return 'padding-right: calc(1.5em + 8px)';
                };

            //====> Multiple Mode <====//
            if (multiple) {
                //===> Tag Classes <===//
                tag_classes = 'px-selected-value inline-block lineheight-160 bg-alpha-10 mb-5 radius-sm pdy-5 pde-10 me-5 position-rv';

                //===> Tag Remover <===//
                tag_remover = `<button type="button" class="px-value-remover reset-button fs-inherit inline-block position-ab pos-center-y pos-start-0 h-100 bg-alpha-05" style="width:1.5em">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="width:0.6em">
                        <path fill="var(--color)" d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z"/>
                    </svg>
                </button>`;

                //===> Create Values Group <===//
                new_value_group = new_select.insert('prepend', `<div class="px-selected-values pdt-5 px-select-toggle col-12 flexbox align-center-y">
                    <input class="pd-5 px-select-search col-auto reset-input input-inherit mb-5" style="font-size: 0.9em" placeholder="${first_label}" />
                </div>`);
            }
            //====> Single Mode <====//
            else {
                //===> Get First Label <===//
                let first_label = placeholder ? placeholder : first_option.textContent,
                    holder_classes = select.getAttribute('data-holder-classes'),
                    holder_image   = select.getAttribute('data-image');

                //===> Create Placeholder <===//
                new_select_value = new_select.insert('prepend', `<button type="button" class="reset-button h-min-100 px-select-toggle col ${first_classes(holder_classes)}">${first_image(holder_image,first_label)}${first_label}</button>`);

                //===> Set First Option as Value <===//
                new_select[0].setAttribute('data-value', `${first_option ? first_option.getAttribute('value') : ''}`);

                //===> Style Placeholder <===//
                Phenix(new_select_value).css({
                    "padding-left": "var(--padding)",
                    "padding-right": "var(--padding)",
                });
            }

            //====> Set Default Value <====//
            if (!multiple && select.querySelector('[selected]')) {
                //====> Set Value <====//
                let selected_option = select.querySelector('[selected]'),
                    default_value = selected_option.getAttribute('value'),
                    default_label = selected_option.textContent;

                new_select[0].setAttribute('data-value', default_value);
                new_select_value.textContent = default_label;

                //====> Change Classes <====//
                if(selected_option.classList) {
                    //====> Get new Classes <====//
                    let new_classes = selected_option.classList,
                        holder_classes = select.getAttribute('data-holder-classes')?.split(' ') || [''];

                    //====> Remove Holder Classes <====//
                    holder_classes.forEach(cl => {
                        if (cl === '') return;
                        new_select_value.classList.remove(cl);
                    });

                    //====> Set New Classes <====//
                    new_select_value.classList.add(...new_classes);
                }

                //====> Change Image <====//
                if (selected_option.getAttribute('data-image')) {
                    //===> Get New Image <===//
                    let new_image = encodeURI(selected_option.getAttribute('data-image')),
                        current_image = new_select_value.querySelector('img'),
                        holder_classes = select.getAttribute('data-holder-classes')?.split(' ') || [''];

                    //====> Remove Holder Classes <====//
                    holder_classes.forEach(cl => new_select_value.classList.remove(cl));

                    //===> If Exist Change URL <====//
                    if (current_image) {
                        current_image.setAttribute('src', new_image);
                        current_image.setAttribute('alt', selected_option.textContent);
                    }

                    //===> Create Image <===//
                    else Phenix(new_select_value).insert('prepend', `<img style="width:1em" alt="${selected_option.textContent}" src="${new_image}" class="me-5">`);
                }
            } 
            //====> For Multiple Selection <====//
            else if (multiple) {
                //====> Collect Default Value <====//
                let default_values = [];
                //====> Attach each Option as Tag <====// 
                select.querySelectorAll('[selected]').forEach(item => {
                    //====> Create the Option <====//
                    let value_element = Phenix(new_value_group.querySelector('.px-select-search')).insert('before', `<span style="font-size: 0.8em;${tag_padding_fixer()}" class="${tag_classes}" data-value="${item.value}">${tag_remover} ${item.textContent}</span>`);
                    
                    //====> Collect its Value <=====//
                    default_values.push(item.value);

                    //====> Set Remover <====//
                    set_tag_remover(value_element.querySelector('.px-value-remover'));
                });
                //====> Set Default Values <====//
                new_select[0].setAttribute('data-value', default_values);
                select.value = default_values;
            }

            //====> Disabled Mode <====//
            if (select.hasAttribute('disabled')) new_select.addClass('disabled');
            
            //====> Enable Search <====//
            if(search || multiple) {
                //====> Create Search <====//
                if (!multiple) options_list.insert('prepend', `<li class="pdy-5 pdx-15 divider-b flexbox align-center-y">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="me-5" style="width:.9em">
                        <path fill="var(--color)" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z" />
                    </svg>
                    <input class="pdy-5 px-select-search col reset-input input-inherit" placeholder="${searchPlaceholder}">
                </li>`);

                //====> Search <====//
                new_select[0].querySelectorAll('.px-select-search').forEach(input => {
                    input.addEventListener('input', typing => {
                        //====> Get Search Value <====//
                        let search_value = typing.target.value.toLowerCase();
    
                        //====> Hide All Group Titles <====//
                        options_list[0].querySelectorAll('.px-select-group').forEach(headline => headline.classList.add('hidden'));
                        
                        //====> Loop Throgh Options <====//
                        options_list[0].querySelectorAll('.px-select-option,.px-select-disabled').forEach(option => {
                            //====> Hide Options <====//
                            option.classList.add('hidden');
    
                            //====> Get Value <====//
                            let option_value = option.getAttribute('data-value').toLowerCase(),
                                option_label = option.textContent.toLowerCase();
    
                            //====> if matched show it <====//
                            if (option_value.includes(search_value) || option_label.includes(search_value)) option.classList.remove('hidden');
                        });
                    });
                });
            }

            //====> Set Event Data <====//
            events_data = {
                select  : new_select[0],
                original: select,
                list    : options_list[0],
                search  : new_select[0].querySelector('.px-select-search'),
                value   : new_select[0].getAttribute('data-value'),
            };

            //====> Create Custom Events <====//
            const opened = new CustomEvent('opened', {detail: events_data}), //===> Fired when options list is opened
                  change = new CustomEvent('change', {detail: events_data}), //===> Fired when select value is changed
                  typing = new CustomEvent('typing', {detail: events_data}), //===> Fired when typing in options search
                  focus  = new CustomEvent('focus',  {detail: events_data}), //===> Fired when focued on options search
                  closed = new CustomEvent('closed', {detail: events_data}); //===> Fired when options list is closed

            //====> Show Options <====//
            new_select[0].querySelector('.px-select-toggle')?.addEventListener('click', clicked => {
                //===> if Disabled <====//
                if (select.hasAttribute('disabled') || clicked.target.matches('.px-selected-value')) return;
                //===> Show Options <===//
                Phenix(options_list).dynamicPosition().fadeToggle();
                //===> Fire Event <===//
                events_data.value = new_select[0].getAttribute('data-value');
                new_select[0].dispatchEvent(opened);
                select.dispatchEvent(opened);
            });

            //====> Hide Options on Blank <====//
            window.addEventListener('click', blank => {
                //====> Clicked Target <====//
                let clicked:any = blank.target,
                    select_toggle = new_select[0].querySelector('.px-select-toggle'),
                    select_search = new_select[0].querySelector('.px-select-search'),
                    check_clicked = clicked !== new_select[0] && clicked !== select_toggle && !clicked.matches('.px-selected-value'),
                    check_clicked_2 = clicked !== select_search && !clicked.matches('.px-select-disabled');

                //====> if the target is not the current element or any of its childerns <====//
                if (check_clicked && check_clicked_2) {
                    Phenix(options_list).fadeOut();
                    //===> Fire Event <===//
                    events_data.value = new_select[0].getAttribute('data-value');
                    new_select[0].dispatchEvent(closed);
                    select.dispatchEvent(closed);
                    //====> Search Reset <====//
                    options_list[0].querySelectorAll('.hidden').forEach(hidden => hidden.classList.remove('hidden'));
                }
            });

            //====> Set Option Value <====//
            let set_value = (option) => {
                option.addEventListener('click', clicked => {
                    //===> Get the Options Value <===//
                    let prevValue = new_select[0].getAttribute('data-value'),
                        value = option.getAttribute('data-value'),
                        label = option.textContent;

                    //===> Set value and label <===//
                    if (!multiple) {
                        //====> Set Value <====//
                        select.value = value;
                        new_select_value.textContent = label;
                        new_select[0].setAttribute('data-value', value);

                        //====> Original Option <====//
                        let original_option = select.querySelector(`[value="${value}"]`);

                        //====> Change Classes <====//
                        if(original_option.classList?.length > 0) {
                            //====> Get new Classes <====//
                            let new_classes = select.querySelector(`[value="${value}"]`).classList,
                                holder_classes = select.getAttribute('data-holder-classes')?.split(' ') || [''],
                                prev_classes = select.querySelector(`[value="${prevValue}"]`)?.classList;

                            //====> Remove Old Classes <====//
                            holder_classes.concat(...prev_classes).forEach(cl => new_select_value.classList.remove(cl));

                            //====> Set New Classes <====//
                            new_select_value.classList.add(...new_classes);
                        }

                        //====> Change Image <====//
                        if (original_option && original_option.getAttribute('data-image')) {
                            //===> Get New Image <===//
                            let new_image = encodeURI(original_option.getAttribute('data-image')),
                                current_image = new_select_value.querySelector('img'),
                                holder_classes = select.getAttribute('data-holder-classes')?.split(' ') || [''];

                            //====> Remove Holder Classes <====//
                            holder_classes.forEach(cl => new_select_value.classList.remove(cl));

                            //===> If Exist Change URL <====//
                            if (current_image) {
                                current_image.setAttribute('src', new_image);
                                current_image.setAttribute('alt', option.textContent);
                            }

                            //===> Create Image <===//
                            else Phenix(new_select_value).insert('prepend', `<img style="width:1em" alt="${option.textContent}" src="${new_image}" class="me-5">`);
                        }
                    } 
                    //===> Multiple Mode <===//
                    else {
                        //====> Get Current Value <====//
                        let current_values = new_select[0].getAttribute('data-value').split(','),
                            isSelected = false;

                        //====> Check Selected Values <====//
                        current_values.forEach(val => val === value ? isSelected = true : null);

                        //====> if Not Selected <====//
                        if (!isSelected) {
                            //====> Create the Option <====//
                            let value_element = Phenix(new_value_group.querySelector('.px-select-search')).insert('before', `<span style="font-size: 0.8em;${tag_padding_fixer()}" class="${tag_classes}" data-value="${value}">${tag_remover} ${label}</span>`);
                            current_values.push(value);

                            //====> Set Remover <====//
                            set_tag_remover(value_element.querySelector('.px-value-remover'));

                            //====> Set New Values <====//
                            new_select[0].setAttribute('data-value', current_values);
                            select.value = current_values;

                            //====> Select Original Options <====//
                            select.querySelector(`[value="${value}"]`)?.setAttribute('selected', true);
                        };
                    }

                    //===> Fire Event <===//
                    events_data.value = new_select[0].getAttribute('data-value');
                    new_select[0].dispatchEvent(change);
                    select.dispatchEvent(change);
                });
            };

            options_list[0].querySelectorAll(':scope > .px-select-option').forEach(option => set_value(option));

            //====> Change Position on Scroll <====//
            let isScrolling = false;
            window.addEventListener('scroll', scrolling => isScrolling = true, {passive: true});
            setInterval(() => {
                if (isScrolling) {
                    isScrolling = false;
                    Phenix(options_list).dynamicPosition();
                }
            }, 300);
        }

        //====> if Already Mounted Update <====//
        else { /* ..update.mode.. */ }
    });

    //====> Return Phenix <====//
    return this;
}