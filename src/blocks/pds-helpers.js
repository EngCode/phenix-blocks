/*
 * Phenix Blocks
 * Version  : 1.0
 * License  : MIT
 * Copyright: 2022 Abdullah.Ramadan
*/

//====> Create Window Object <====//
window.PhenixBlocks = {
    //====> Options Renderer <====//
    OptionsRenderer : (options) => {
        //===> Options <===//
        const {attributes, blockProps, isSave, hasColors, isColumn, isGrid} = options;
        const utilities_sizes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
        const positions_sizes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    
        //===> Rendering Checkers <===//
        const container = {className: ""}, 
              CustomCSS = {},
              isMargin  = ['mt', 'mb', 'ms', 'me'],
              isPadding = ['pdt', 'pds', 'pde', 'pdb'],
              isObjectVal = (option_value) => {return typeof option_value === 'object'},
              isBooleanVal = (option_value) => {return typeof option_value === 'boolean'},
              isNormalValue = (option_value) => {return typeof option_value === 'string' || typeof option_value === 'number' || typeof option_value === 'array'},
              colSizeHandler = (size) => parseInt(size) === 0 ? `-auto` : parseInt(size) > 12 ? "" : `-${size}`;

        //===> Rendering Options <===//
        Object.entries(attributes).forEach(([option_name, option_value]) => {
            //===> Exclude Options <===//
            const excluded = ["tagName", "className", "align", "metadata", "content", "lightbox_type", "url", "label"];
            if (excluded.some(opt => opt === option_name) || option_name.startsWith('name-')) return;
    
            //===> if its a Normal Values that should be string <===//
            if (isNormalValue(option_value) && attributes[option_name]) {
                //====> Invalid Values Check <====//
                if (attributes[option_name] === "null" || attributes[option_name] === "on" || attributes[option_name] === "undefined") return;

                //===> HTML ID <===//
                if (option_name === "id") {
                    blockProps['id'] = attributes[option_name];
                }
    
                //===> Columns Size <===//
                else if (isColumn && option_name === "size") {
                    blockProps.className += ` col${colSizeHandler(option_value)}`;
                }
    
                //===> Data Modal <===//
                else if (option_name === "data_modal") {
                    blockProps['data-modal'] = attributes[option_name];
                }
    
                //===> Menu Data ID <===//
                else if (option_name === "data_id") {
                    blockProps.className += ` menu-toggle`;
                    blockProps['data-id'] = attributes[option_name];
                }
    
                //===> for Icons <===//
                else if (option_name === "icon" && attributes[option_name]) {
                    //===> Check if the type is an icon or square <===//
                    if (attributes.type.includes('icon') || attributes.type.includes('square')) {
                        blockProps.className += ` ${attributes[option_name].toString().replace(',', ' ').trim()}`;
                    }
                }
    
                //===> Fallback for Old Types <===//
                else if (option_name === "type") {
                    blockProps.className += ` ${attributes[option_name].replace('normal', 'btn').trim()}`;
                }
    
                //===> Other Options <===//
                else if (attributes[option_name]) {
                    container.className += ` ${attributes[option_name].toString().replace(',', ' ').trim()}`;
                };
            }
    
            //===> for Boolean Options <===//
            else if (isBooleanVal(option_value) && attributes[option_name]) {
                //===> Flexbox <===//
                if (option_name === "isFlexbox" && option_value === true) {
                    container.className += ` flexbox`;
                }
                //===> for Link Options <===//
                else if (option_name === "isLink" || option_name === "inNewTab") {
                    //===> New Tab Link <===//
                    if (option_name === "inNewTab") {blockProps['target'] = "_blank";} 
                    //===> Noopener Link <===//
                    else {blockProps['rel'] = "noopener";}
                }
                //===> for icon End <===//
                else if (option_name === "iconEnd" && option_value) {
                    blockProps.className += ' btn-icon-end';
                }
                //===> for icon Label <===//
                else if (option_name === "iconLabel" && option_value) {
                    blockProps.className += ' labeled';
                }
                //===> for Lightbox Options <===//
                else if (option_name === "isLightBox" && option_value) {
                    //===> Lightbox Class <===//
                    blockProps.className += ' px-lightbox';
                    //===> Lightbox Media Type <===//
                    if (attributes.lightbox_type) blockProps['data-media'] = attributes.lightbox_type;
                };
            }

            //===> if its {options-set} => [style, typography, responsive, flexbox/slider] <===//
            else if (isObjectVal(option_value) && attributes[option_name]) {
                //===> Flexbox Props <===//
                if(!isGrid && option_name === "flexbox" && attributes.isFlexbox === false) return;

                //===> loop on the Object Options <===//
                Object.entries(option_value).forEach(([sub_option, sub_value]) => {
                    //===> Check if the attribute is Set <===//
                    if (!(sub_option in attributes[option_name]) || attributes[option_name][sub_option] == null) return;

                    //===> Slider Mode Checker <===//
                    if (attributes.flexbox?.slider === true) {
                        //===> if not-related option return void <===//
                        if (["align", "nowrap", "masonry"].some(option => sub_option.includes(option))) return;
                    };

                    //===> Flexbox Equals Columns <===//
                    if (option_name === "flexbox" && sub_option.includes("cols")) {
                        //===> Slider Mode <===//
                        if(attributes.flexbox.slider) {
                            let dataAttr = `data-${sub_option === "cols" ? "items" : sub_option.replace('cols-', '')}`;
                            container[dataAttr] = sub_value;
                        }
                        //===> Equals Mode <===//
                        else if (attributes.flexbox.equals) {
                            //===> add Classes <===//
                            container.className += ` ${sub_option.replace('cols', 'row-cols') + colSizeHandler(sub_value)}`;
                        }
                    }

                    //===> Slider Options <===//
                    else if (option_name === "slider") {
                        //===> Check if its save mode <===//
                        if (!isSave || !attributes.flexbox.slider) return;
                        //===> Autoplay <===//
                        if (sub_option === "autoplay" && sub_value) {
                            console.log(sub_value);
                        }
                        //===> Set Options <===//
                        else if (attributes.flexbox.slider) {
                            container[`data-${sub_option}`] = `${sub_value}`;
                        }
                    }

                    //===> if its a Object Value <===//
                    else if (!isNormalValue(sub_value)) {
                        //===> Background Specials <===//
                        if (sub_option === "background" && sub_value.value) {
                            //===> Adjust Primary Colors for Buttons <===//
                            let isPrimary = false,
                                colorsList = ["bg-primary", "bg-secondary", "bg-gray", "bg-dark", "bg-white", "bg-success", "bg-danger", "bg-warning", "bg-info"];

                            //===> Clear Props <===//
                            blockProps['data-src'] = null;
                            blockProps.style?.backgroundImage ? blockProps.style.backgroundImage = null : null;
                            if (!blockProps.style) blockProps.style = {};

                            //===> Image Background <===//
                            if (attributes.style.background.type === 'image' || attributes.style.background.type === '3d-viewer') {
                                //===> Set Props <===//
                                blockProps.className += ` px-media`;
                                blockProps["data-src"] = sub_value.value;
                                //===> Set 3D Type for Background <===//
                                if(attributes.style.background.type === '3d-viewer') blockProps["data-type"] = attributes.style.background.type;
                                //===> Set Background in Editor only <===//
                                if(!isSave && attributes.style.background.type != '3d-viewer') blockProps.style.backgroundImage = `url("${sub_value.value}")`;
                            }
                            //===> Video Background <===//
                            else if (attributes.style.background.type === 'video') {
                                blockProps.className += ` px-media pds-video-bg`;
                                blockProps["data-src"]      = sub_value.value;
                                blockProps["data-loop"]     = "1";
                                blockProps["data-type"]     = "embed";
                                blockProps["data-embed"]    = "video";
                                blockProps["data-muted"]    = "1";
                                blockProps["data-autoplay"] = "1";
                                if (sub_value.cover) blockProps["data-cover"] = sub_value.cover;
                            }
                            //===> Name Background <===//
                            else {
                                //===> Check Correct Colors for Buttons <===//
                                colorsList.forEach(color => sub_value.value === color ? isPrimary = true : null);

                                //===> Set the Background for Buttons <===//
                                if (hasColors && isPrimary) {
                                    blockProps.className += sub_value.value.includes('bg-white') ? ` light` : ` ${sub_value.value.replace('bg-', '')}`;
                                }  
                                //===> Set the Background for Other Elements <===//
                                else {
                                    //===> Custom Colors <===//
                                    if (sub_value.value.includes('var(') && !sub_value.value.includes('--gradient')) {CustomCSS.backgroundColor = sub_value.value;}

                                    //===> Custom Gradient <===//
                                    else if (sub_value.value.includes('var(') && sub_value.value.includes('--gradient')) {CustomCSS.backgroundImage = sub_value.value;}

                                    //===> Normal <===//
                                    else {blockProps.className += ` ${sub_value.value}`;}
                                }
                            }
                            //===> Background Rotation <===//
                            if (sub_value.rotate) blockProps.className += ` ${sub_value.rotate}`;
                        }

                        //===> Overlay Background <===//
                        else if (sub_option === "overly_bg" && sub_value.value) {
                            //===> Video Background <===//
                            if (attributes.style.overly_bg.type === 'video') return;
                            //===> Image Background <===//
                            else if (attributes.style.overly_bg.type === 'image') {CustomCSS['--overlay-bg'] = `url("${sub_value.value}")`;}
                            //===> Name Background <===//
                            else {CustomCSS['--overlay-bg'] = sub_value.value;}
                        }

                        //===> Border Color <===//
                        else if (sub_option === "border-color" && sub_value.value) {
                            if (sub_value.value.includes('var(')) CustomCSS['borderColor'] = sub_value.value;
                            else {blockProps.className += ` ${sub_value.value}`;}
                        }

                        //===> Icon Color <===//
                        else if (sub_option === "icon-color" && sub_value.value) {
                            //===> 
                            if (sub_value.value.includes('var(')) CustomCSS['--icon-color'] = sub_value.value;
                            else {blockProps.className += ` ${sub_value.value}`;}
                            //===> Coloring Class <===//
                            if (!blockProps.className.includes('pds-icon-color')) blockProps.className += ` pds-icon-color`;
                        }

                        //===> Animations Specials <===//
                        else if (sub_option === "animation") {
                            Object.entries(sub_value).forEach(([key, value]) => {
                                //===> Animation Name <===//
                                if (key === "name") { blockProps[`data-animation`] = value; } 
                                //===> Animation Group <===//
                                else if (key === "group") {blockProps[`data-lazy-group`] = "true";} 
                                //===> Animation Flow <===//
                                else if (key === "reverse") {blockProps[`data-flow`] = value;}
                                //===> Animation Other Options <===//
                                else {blockProps[`data-${key}`] = value;}
                            });
                        }

                        //===> Styles Support <===//
                        else if (sub_option === "support") {
                            sub_value.forEach(property => {
                                //===> Enable Border <===//
                                if (property === "enable-border") blockProps.className += ` border-reset`;
                                //===> Enable Other Options <===//
                                !property.includes('enable-') ? blockProps.className += ` ${property}` : null;
                            });
                        }

                        //===> for Link Options <===//
                        else if (isSave && option_name === "isLink" || isSave && option_name === "inNewTab") {
                            //===> Open in New Tab <===//
                            if (option_name === "inNewTab") {blockProps['target'] = "_blank";}
                            //===> No Target Fallback <===//
                            else {blockProps['rel'] = "noopener";}
                        }

                        //===> Has Icon <===//
                        else if (sub_option === "hasIcon") { blockProps.className += ` tx-icon`; }

                        //===> Display Support <===//
                        else if (sub_option === "display") { blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`; }
                        
                        //===> for Array Values <===//
                        else if (Array.isArray(sub_value)) { 
                            blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`; 
                        }
                    }

                    //===> for Normal strings and Arrays <===//
                    else if (isNormalValue(sub_value)) {
                        //===> Exclude Options <===//
                        const excluded = ["dimensions", "url"];
                        const findAndExcluded = ["bound-"];

                        if (excluded.some(opt => opt === sub_option)) return;
                        if (findAndExcluded.some(opt => opt.includes(sub_option))) return;

                        //===> Postion Sticky <===//
                        if (sub_option === "position" && sub_value === "sticky-absolute") { blockProps["data-sticky"] = `${sub_value}`; }

                        //===> Media Settings <===//
                        else if (option_name === "setting") {
                            //===> Ratio Size <===//
                            if (sub_option.includes('size') && sub_value !== "custom") {
                                blockProps.className += ` ${sub_option.replaceAll('size', 'ratio')}-${sub_value}`;
                            } else {
                                blockProps[`data-${sub_option}`] = sub_value;
                            }
                        }

                        //===> Icon List <====//
                        else if (sub_option === "icon" && attributes.type === "list") {
                            blockProps['data-icon'] = sub_value;
                            blockProps.className += ` icons-list`;
                        }

                        //===> Icon List <====//
                        else if (sub_option === "icon" && attributes.type === "font") {
                            blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;
                        }

                        //===> Positions Values <===//
                        else if (sub_option.startsWith("pos-")) {
                            //===> Custom Positions <===//
                            if (!positions_sizes.includes(parseInt(sub_value))) {
                                //===> Set Custom Positions <===//
                                CustomCSS[`--${sub_option}`] = `${Phenix(document).toREM(sub_value)}`;
                                //===> Add the ClassName <===//
                                let classOption = sub_option.replace('-md', '').replace('-lg', '').replace('-xl', ''),
                                    customClass = `${classOption}-custom`;
                                //===> Check if the class is already added <===//
                                if (!blockProps.className || !blockProps.className?.includes(customClass)) blockProps.className += ` ${customClass}`;
                            }
                            //===> Name Positions <===//
                            else { blockProps.className += ` ${sub_option}-${sub_value}`; }
                        }

                        //===> Margin Values <===//
                        else if (isMargin.some(css => sub_option.startsWith(css))) {
                            //===> Custom Value <===//
                            if (!utilities_sizes.includes(parseInt(sub_value))) {
                                //===> Set Custom Margin <===//
                                CustomCSS[`--${sub_option}`] = `${Phenix(document).toREM(sub_value)}`;
                                //===> Add the ClassName <===//
                                let classOption = sub_option.replace('-md', '').replace('-lg', '').replace('-xl', ''),
                                    customClass = `${classOption}-custom`;
                                //===> Check if the class is already added <===//
                                if (!blockProps.className || !blockProps.className.includes(customClass)) blockProps.className += ` ${customClass}`;
                            }
                            //===> Name Value <===//
                            else { blockProps.className += ` ${sub_option}-${sub_value}`; }
                        }

                        //===> Padding Values <===//
                        else if (isPadding.some(css => sub_option.startsWith(css))) {
                            //===> Invalid Values Check <===//
                            if (parseInt(sub_value) < -1) return;
                            //===> Custom Value <===//
                            else if (!utilities_sizes.includes(parseInt(sub_value))) {
                                //===> Set Custom Padding <===//
                                CustomCSS[`--${sub_option}`] = `${Phenix(document).toREM(sub_value)}`;
                                //===> Add the ClassName <===//
                                let classOption = sub_option.replace('-md', '').replace('-lg', '').replace('-xl', ''),
                                    customClass = `${classOption}-custom`;
                                if (!blockProps.className || !blockProps.className.includes(customClass)) blockProps.className += ` ${customClass}`;
                            }
                            //===> Name Value <===//
                            else { blockProps.className += ` ${sub_option}-${sub_value}`; }
                        }

                        //===> Layout Gap <===//
                        else if (sub_option.includes('gpx') || sub_option.includes('gpy') && !sub_option.includes('fix')) {
                            container.className += ` ${sub_option}-${sub_value}`;
                        }

                        //===> Border Values <===//
                        else if (sub_option.includes('border-') && !sub_option.includes('border-style') && !sub_option.includes('bound-')) {
                            //===> Set Custom Border <===//
                            CustomCSS[`--${sub_option}`] = `${Phenix(document).toREM(sub_value)}`;
                            //===> Add the ClassName <===//
                            let classOption = sub_option.replace('-md', '').replace('-lg', '').replace('-xl', ''),
                                customClass = `${classOption}-custom`,
                                defaultClass = `${!attributes.style['border-style'] ? 'border-solid' : ''}`;
                            //===> ... <===//
                            if (!blockProps.className.includes(customClass)) blockProps.className += ` ${customClass}`;
                            if (!blockProps.className.includes(defaultClass)) blockProps.className += ` ${defaultClass}`;
                        }
    
                        //===> Flexbox Values <===//
                        else if (option_name === "flexbox") {container.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;}
                        
                        //===> Responsive Columns Sizes <===//
                        else if (isColumn && option_name === "responsive" && sub_option.includes('size-')) {
                            blockProps.className += ` ${sub_option.replace("size", "col")}${colSizeHandler(sub_value)}`;
                        }

                        //===> Marquee Speed <===//
                        else if (sub_option === "marquee-speed") { blockProps['data-speed'] = sub_value; }

                        //===> Custom Text Colors <===//
                        else if (option_name === "typography" && sub_option === "color" && sub_value.includes('var')) {CustomCSS.color = sub_value;}

                        //===> Overlay Options <===//
                        else if (option_name === "style" && sub_option === "overly_opacity") {CustomCSS['--opacity'] = `${sub_value}%`;}

                        //===> Other Values <===//
                        else {
                            //====> Invalid Values Check <====//
                            if (sub_value === "null" || sub_value === "on" || sub_value === "undefined" || sub_value === "true" || sub_value === "false") return;

                            //====> Check URL Classes Fix <====//
                            const urlPattern = new RegExp(/(www|http:|https:)+[^\s]+[\w]/);
                            if (urlPattern.test(sub_value)) return;

                            //====> Check if icon is activate <====//
                            if (option_name === "style" && sub_option === "icon" && !attributes.style?.hasIcon) return;

                            //====> Grid Layouts <===//
                            if (isColumn && attributes.isFlexbox || isGrid) {
                                container.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;
                            }
                            //====> Class names <====//
                            else {
                                blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;
                            }
                        }
                    };

                    //===> Data Settings <===//
                    if (option_name === "setting") {
                        //===> Ratio Size <===//
                        if (sub_option.includes('size') && sub_value !== "custom") {
                            blockProps.className += ` ${sub_option.replaceAll('size', 'ratio')}-${sub_value}`;
                        } else {
                            blockProps[`data-${sub_option}`] = sub_value;
                        }
                    }
                });
            };
        });

        //===> Activate Slider in Editor <===//
        if (isSave && attributes.flexbox?.slider || attributes.slider?.preview) container.className += ' px-slider';
        else { container.className.replace('px-slider', ''); }
    
        //===> Check the Style Props <===//
        if (!blockProps.style) blockProps.style = {};
    
        //===> Data Attributes Options <===//
        Object.entries(container).forEach(([option_name, option_value]) => {
            if (option_name === "className") return;
            else blockProps[option_name] = option_value;
        });
    
        //===> CSS Attributes Options <===//
        Object.entries(CustomCSS).forEach(([option_name, option_value]) => {
            blockProps.style[`${option_name}`] = option_value;
        });

        //===> Render Component <===//
        return {blockProps, container};
    },

    //===> Normal Values Handler <===//
    valueHandler : (target) => {
        //===> Define Array Type <===//
        let single_val,
            array_val = [],
            type = target instanceof HTMLElement ? (target.getAttribute('type') || target.tagName) : null;

        //==> for Boolean Values <==//
        if (target === "boolean" || type === "boolean" || type === 'checkbox' || type === 'radio') {
            if (target.value === 'boolean') { single_val = target.checked; }
            else { single_val = target.checked ? target.value : ""; }
        }

        //===> for Value of Type Array <===//
        else if (type === "SELECT" && target.hasAttribute('multiple')) {
            //===> Get Multiple Value <===//
            let values = target.parentNode.getAttribute('data-value').split(',');
            //===> Get Current Values <===//
            values.forEach(val => val !== "" ? array_val.push(val) : null);
            //===> Set Array Value <===//
            single_val = array_val;
        }

        //===> for Values with Target <===//
        else if (type === null) { single_val = target; }

        //===> for Normal Values <===//
        else if (target instanceof HTMLElement) { single_val = target.value; }

        //===> Return Value <===//
        if(single_val !== undefined) return single_val;
    },

    //===> Responsive Values Handler <===//
    setObject : (target, screen, attr, hasName, attributes, setAttributes) => {
        //==> Get Current <==//
        const name = hasName || (target instanceof HTMLElement && target.getAttribute('name')) || (attr === "typography" ? "color" : attr === "style" ? "background" : `${target}`);
        const value = (target instanceof HTMLElement) ? PhenixBlocks.valueHandler(target) : target;

        //==> Set Value <==//
        const newAttributes = name.includes('animation') ? {
            ...attributes[attr],
            animation: { ...attributes[attr].animation, [name.replace('animation-', '')]: value }
        } : {
            ...attributes[attr],
            [`${name}${screen ? '-' + screen : ''}`]: value
        };

        setAttributes({ ...attributes, [attr]: newAttributes });
    },

    //===> Regular Values <===//
    set_value : (target, attributes, setAttributes) => {
        //==> Get Current <==//
        const name = target.getAttribute('name');
        const value = (typeof(target) === "string" || typeof(target) === "number") ? target : target instanceof HTMLElement ? PhenixBlocks.valueHandler(target) : PhenixBlocks.valueHandler(target.value);
        const newAttributes = Object.assign({}, attributes, { [name]: value });
        //==> Set Value <==//
        setAttributes(newAttributes);
    },

    //===> Flexbox Values <===//
    set_flexbox : (target, screen, attributes, setAttributes) => {
        //==> Get Current <==//
        const name = target instanceof HTMLElement ? target.getAttribute('name') : target;
        const flexbox = { ...attributes.flexbox };
        //==> Add the Value <==//
        flexbox[`${name.includes('align-') ? `align${screen?'-'+screen:""}` : name}${screen?'-'+screen:""}`] = (typeof(target) === "string" || typeof(target) === "number") ? target.replace("align-reset", "") : PhenixBlocks.valueHandler(target);
        //==> Set Value <==//
        const newAttributes = { ...attributes, flexbox: flexbox };
        setAttributes(newAttributes);
    },

    //===> Component Builder <===//
    canvasAssetsLoaded: false,

    componentsBuilder : () => {
        //===> Get Elements <===//
        const elements = document.querySelectorAll('.pds-tm-control');

        //===> Loop Through Elements <===//
        elements.forEach(element => {
            //===> Define Element Data <===//
            const class_names = element.classList;

            //===> for Selects <===//
            if (class_names.contains('px-select') && !Phenix(element).ancestor('.px-dropdown')) Phenix(element).select();

            //===> for Dropdowns <===//
            else if (class_names.contains('px-dropdown')) {
                Phenix(element).dropdown();
                element.querySelectorAll('.pds-tm-control.px-select').forEach(element => Phenix(element).select());
            }
        });
    },

    viewScript : () => {
        //===> Get View iFrame <===//
        const viewScript = (the_document) => {
            //===> Run Multimedia <===//
            the_document.querySelectorAll(`.px-media:not([style*="background-image"]), .px-media.is-selected`).forEach(element => {
                element.style.backgroundImage = null;
                let image = element.querySelector('.px-media-img');
                if (image) image.setAttribute('src', element.getAttribute('data-src'));
                Phenix(element).multimedia();
            });

            //===> Contain Queries Sliders <===//
            the_document.querySelectorAll(".px-slider:not(.block-editor-block-list__block)").forEach(element => {
                //===> Mark as Editing Mode <===//
                element.classList.add('edit-mode');

                //===> Disable Autoplay <===//
                if(element.getAttribute('data-autoplay')) element.setAttribute('data-autoplay', false);

                //===> Replace Data Attributes with Row/Columns Classes <===//
                const slider_cols_fixer = (row) => {
                    //===> Contain the Slides in One Line <====//
                    row.classList.add('flow-nowrap');
                    if (element.getAttribute('data-md')) row.classList.add(`row-cols-md-${element.getAttribute('data-md')}`);
                    if (element.getAttribute('data-lg')) row.classList.add(`row-cols-md-${element.getAttribute('data-lg')}`);
                    if (element.getAttribute('data-xl')) row.classList.add(`row-cols-md-${element.getAttribute('data-xl')}`);
                }

                slider_cols_fixer(element);
            });

            //===> Run Menus <===//
            the_document.querySelectorAll(".px-navigation").forEach(element => Phenix(element).menu());

            //===> Run Utilites <===//
            Phenix(the_document).utilities("form");

            //===> Icons List <===//
            the_document.querySelectorAll('li[data-icon]').forEach((list) => {
                if (list.getAttribute('data-icon')) {
                    let classes = list.getAttribute('data-icon').split(" ") || [];
                    list.classList.add(...classes);
                }
            });

            //===> Unlocated Menu fallback style. <===//
            the_document.querySelectorAll('.px-navigation > div.reset-list').forEach((element) => {
                //===> Define Elements <===//
                let parent = Phenix(element).ancestor(".px-navigation"),
                    classNames = element.classList,
                    children  = element.childNodes;

                //===> Move Children <===//
                children.forEach((child) => {
                    parent.appendChild(child);
                    //===> Move Classnames <===//
                    classNames.forEach((className) => child.classList.add(className));
                });

                //===> Remove Element <===//
                element.remove();
            });
        };

        //====> Get the Editor iFrame <====//
        let canvasIframe = document.querySelector('iframe[name="editor-canvas"]'),
            canvasIframeDoc = canvasIframe?.contentDocument || canvasIframe?.contentWindow.document;

        //===> Check for Canvas Frames <===//
        if (canvasIframeDoc) {
            //===> Timer to Check for Assets Existing <===//
            let canvasTimer = setInterval(() => {
                //===> Re-Catch the Canvas <===//
                canvasIframe = document.querySelector('iframe[name="editor-canvas"]'),
                canvasIframeDoc = canvasIframe?.contentDocument || canvasIframe?.contentWindow.document;
                //===> if the Assets are no there Loaded <===//
                if (canvasIframe && canvasIframeDoc) {
                    viewScript(canvasIframeDoc);
                    clearInterval(canvasTimer);
                }
            }, 500);
        }

        //===> Run the Scripts Directly <===//
        else if (window.Phenix && window.document) viewScript(window.document);
    },

    //===> Block Inserter Accessibility <===//
    blockAccessibility : (event, clientId, newAttributes, currentContent, currentAttributes) => {
        //===> Define Data <===//
        const { createBlock } = wp.blocks;
        const { insertBlock, removeBlock } = wp.data.dispatch('core/editor');
        const { getBlockIndex, getBlockInsertionPoint, getBlockName } = wp.data.select('core/block-editor');

        //===> when its Empty  <===//
        if (currentContent?.length === 0) {
            //===> and Hit Backspace or Delete Remove the Block <===//
            if (event.key === "Backspace" || event.key === "Delete") removeBlock(clientId);
        }
        
        //===> Control + # Shortcuts <===//
        else if (event.ctrlKey) {
            //===> Insert new Blank Block <===//
            if (event.key === 'Enter') {
                //===> Prevent the default Behavior <===//
                event.preventDefault();
                // Create a new block
                const newBlock = createBlock(getBlockName(clientId), newAttributes);
                // Insert the new block after the current block
                insertBlock(newBlock, getBlockIndex(clientId)+1, getBlockInsertionPoint().rootClientId);
            }
            //===> Duplicate Current Block <===//
            if (event.key === 'D' || event.key === 'd') {
                //===> Prevent the default Behavior <===//
                event.preventDefault();
                //===> Create a new block <===//
                const newBlock = createBlock(getBlockName(clientId), currentAttributes);
                //===> Insert the new block after the current block <===//
                insertBlock(newBlock, getBlockIndex(clientId)+1, getBlockInsertionPoint().rootClientId);
            }
        }
        //===> Insert New Block when Hit Enter <===//
        else if (event.key === 'Enter') {
            //===> Prevent the default Behavior <===//
            event.preventDefault();
            //===> Create a new block <===//
            const newBlock = createBlock("core/paragraph");
            //===> Insert the new block after the current block <===//
            insertBlock(newBlock, getBlockIndex(clientId)+1, getBlockInsertionPoint().rootClientId);
        }
    },

    //===> Palette Checker <====//
    checkPalette : (colors, theme) => {
        if (!theme) theme = window.PhenixBlocks.dataLists.theme_palette;
        return colors.length === theme.length && colors[0].slug === "background" && colors[colors.length-1].slug === "disable";
    },
};