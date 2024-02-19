/*
 * Phenix Blocks
 * Version  : 1.0
 * License  : MIT
 * Copyright: 2022 Abdullah.Ramadan
*/

//===> Define Translation Function <===//
const __ = window.wp.i18n.__;

//====> Create Window Object <====//
window.PhenixBlocks = {
    //====> Options Renderer <====//
    OptionsRenderer : (options) => {
        //===> Options <===//
        const {attributes, blockProps, isSave, hasColors, isColumn, isGrid} = options;
    
        //===> Rendering Checkers <===//
        const container = {className: ""}, 
              CustomCSS = {},
              isPadding = ['pdt', 'pds', 'pde', 'pdb'],
              isMargin  = ['mt', 'mb', 'ms', 'me'],
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
                    if (option_name === "inNewTab") {blockProps['target'] = "_blank";} 
                    else {blockProps['rel'] = "noopener";}
                }
                //===> for Lightbox Options <===//
                else if (option_name === "isLightBox" && option_value) {
                    blockProps.className += ' px-lightbox';
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
                    if (!attributes[option_name][sub_option]) return;

                    //===> Slider Mode Checker <===//
                    if (attributes.flexbox?.slider) {
                        //===> if not-related option return void <===//
                        if (["align", "nowrap", "masonry"].some(option => sub_option.includes(option))) return;
                    };

                    //===> Flexbox Equals Columns <===//
                    if (option_name === "flexbox" && sub_option.includes("cols")) {
                        //===> Slider Mode <===//
                        if(attributes.flexbox.slider) {
                            let dataAttr = `data-${sub_option === "cols" ? "items" : sub_option.replace('cols-', '')}`;
                            container[dataAttr] = sub_value;
                        } else if (attributes.flexbox.equals) {
                            //===> add Classes <===//
                            container.className += ` ${sub_option.replace('cols', 'row-cols') + colSizeHandler(sub_value)}`;
                        }
                    }

                    //===> Slider Options <===//
                    else if (option_name === "slider") {
                        //===> Set Options <===//
                        if (attributes.flexbox.slider && attributes.slider.preview || attributes.flexbox.slider && isSave) {
                            container[`data-${sub_option}`] = sub_value;
                        }
                    }

                    //===> if its a Object Value <===//
                    else if (!isNormalValue(sub_value)) {
                        //===> Background Specials <===//
                        if (sub_option === "background" && sub_value.value) {
                            //===> Adjust Primary Colors <===//
                            let isPrimary = false,
                                colorsList = ["bg-primary", "bg-secondary", "bg-gray", "bg-dark", "bg-white", "bg-success", "bg-danger", "bg-warning", "bg-info"];
    
                            //===> Clear Props <===//
                            blockProps['data-src'] = null;
                            blockProps.style?.backgroundImage ? blockProps.style.backgroundImage = null : null;
                            if (!blockProps.style) blockProps.style = {};
    
                            //===> Image Background <===//
                            if (attributes.style.background.type === 'image') {
                                blockProps.className += ` px-media`;
                                blockProps["data-src"] = sub_value.value;
                                blockProps.style.backgroundImage = sub_value.value;
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
                            }
                            //===> Name Background <===//
                            else {
                                //===> Correct Colors <===//
                                colorsList.forEach(color => sub_value.value === color ? isPrimary = true : null);
    
                                //===> Set the Background <===//
                                if (hasColors && isPrimary) {
                                    blockProps.className += sub_value.value.includes('bg-white') ? ` light` : ` ${sub_value.value.replace('bg-', '')}`;
                                }  else {
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
                            if (attributes.style.background.type === 'video') return;
                            //===> Image Background <===//
                            else if (attributes.style.background.type === 'image') {CustomCSS['--overlay-bg'] = `url("${sub_value.value}")`;}
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
                                if (property === "enable-border") blockProps.className += ` border-reset`;
                                !property.includes('enable-') ? blockProps.className += ` ${property}` : null
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
                        else if (Array.isArray(sub_value)) { blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`; }
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

                        //===> Positions Values <===//
                        else if (sub_option.startsWith("pos-")) {
                            //===> Custom Positions <===//
                            if (parseInt(sub_value) > 50 || parseInt(sub_value) < 0) {
                                //===> Set Custom Positions <===//
                                CustomCSS[`--${sub_option}`] = `${sub_value}px`;
                                //===> Add the ClassName <===//
                                let classOption = sub_option.replace('-md', '').replace('-lg', '').replace('-xl', ''),
                                    customClass = `${classOption}-custom`;
                                if (!blockProps.className.includes(customClass)) blockProps.className += ` ${customClass}`;
                            }
                            //===> Name Positions <===//
                            else { blockProps.className += ` ${sub_option}-${sub_value}`; }
                        }

                        //===> Margin Values <===//
                        else if (isMargin.some(css => sub_option.startsWith(css))) {
                            //===> Auto Value <===//
                            if (parseInt(sub_value) === -5) { blockProps.className += ` ${sub_option}-auto`; }
                            //===> Custom Value <===//
                            else if (parseInt(sub_value) > 100 || parseInt(sub_value) < 0) {
                                CustomCSS[`--${sub_option}`] = `${sub_value}px`;
                                //===> Add the ClassName <===//
                                let classOption = sub_option.replace('-md', '').replace('-lg', '').replace('-xl', ''),
                                    customClass = `${classOption}-custom`;
                                if (!blockProps.className.includes(customClass)) blockProps.className += ` ${customClass}`;
                            }
                            //===> Name Value <===//
                            else { blockProps.className += ` ${sub_option}-${sub_value}`; }
                        }

                        //===> Padding Values <===//
                        else if (isPadding.some(css => sub_option.startsWith(css))) {
                            if (parseInt(sub_value) < 0) return;
                            //===> Custom Value <===//
                            else if (parseInt(sub_value) > 100) {
                                CustomCSS[`--${sub_option}`] = `${sub_value}px`;
                                //===> Add the ClassName <===//
                                let classOption = sub_option.replace('-md', '').replace('-lg', '').replace('-xl', ''),
                                    customClass = `${classOption}-custom`;
                                if (!blockProps.className.includes(customClass)) blockProps.className += ` ${customClass}`;
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
                            CustomCSS[`--${sub_option}`] = `${sub_value}px`;
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

                        //===> Custom Text Colors <===//
                        else if (option_name === "typography" && sub_option === "color" && sub_value.includes('var')) {CustomCSS.color = sub_value;}

                        //===> Overlay Options <===//
                        else if (option_name === "style" && sub_option === "overly_opacity") {CustomCSS['--opacity'] = `${sub_value}%`;}

                        //===> Other Values <===//
                        else {
                            if (isColumn && attributes.isFlexbox || isGrid) {
                                container.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;
                            } else {
                                blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;
                            }
                        }
                    };
                });
            };
        });

        //===> Activate Slider in Editor <===//
        if (isSave && attributes.flexbox?.slider || attributes.slider?.preview) container.className += ' px-slider';
    
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

        //===> List View Naming <===//
        if (attributes.metadata?.name) {
            let ListViewItem = document.querySelector(`.block-editor-list-view-tree a[href="#block-${blockProps['data-block']}"] .components-truncate`);
            if(ListViewItem) ListViewItem.textContent = attributes.metadata.name;
        }
    
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
        if (type === 'checkbox' || type === 'radio') {
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
        else { single_val = target.value; }

        //===> Return Value <===//
        if(single_val) return single_val;
    },

    //===> Responsive Values Handler <===//
    setObject : (target, screen, attr, hasName, attributes, setAttributes) => {
        //==> Get Current <==//
        const name = hasName || (target instanceof HTMLElement && target.getAttribute('name')) || (attr === "typography" ? "color" : attr === "style" ? "background" : `${target}`);
        const value = (typeof(target) === "string" || typeof(target) === "number") ? target : PhenixBlocks.valueHandler(target);

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
        const value = (typeof(target) === "string" || typeof(target) === "number") ? target : PhenixBlocks.valueHandler(target.value);
        const newAttributes = { ...attributes, [name]: value };
        //==> Set Value <==//
        setAttributes(newAttributes);
    },

    //===> Flexbox Values <===//
    set_flexbox : (target, screen, attributes, setAttributes) => {
        //==> Get Current <==//
        const name = target instanceof HTMLElement ? target.getAttribute('name') : `${target}`;
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
        //===> Create Timestamp to Find the Elements <===//
        setTimeout(() => {
            //===> Get Elements <===//
            let elements = document.querySelectorAll('.pds-tm-control');
    
            //===> Loop Through Elements <===//
            elements.forEach(element => {
                //===> Define Element Data <===//
                let class_names = element.classList;
    
                //===> for Selects <===//
                if (class_names.contains('px-select') && !Phenix(element).ancestor('.px-dropdown')) {
                    Phenix(element).select();
                }
                //===> for Dropdowns <===//
                else if (class_names.contains('px-dropdown')) {
                    Phenix(element).dropdown();
                    element.querySelectorAll('.pds-tm-control.px-select').forEach(element => Phenix(element).select());
                }
            });
        }, 100);

        //===> Get View iFrame <===//
        let viewScript = (the_document) => {
            //===> Define Data <===//
            let time_counter = 0,
            //===> Timer Loop <===//
            pds_elements_timer = setInterval(() => {
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

                //====> Clear Timer <===//
                time_counter += 1;
                if (time_counter > 5) clearInterval(pds_elements_timer);
            }, 300);
        };

        //===> Check for Canvas Frames <===//
        if (window.frames['editor-canvas']) {
            //===> Run View Script <===//
            viewScript(window.frames['editor-canvas'].document);

            //===> Load Assets in Canvas Frame <====//
            if (!window.PhenixBlocks.canvasAssetsLoaded) {
                let trying_times = 0;
                let loadAssetTimer = setInterval(()=> {
                    //====> if the Document unloaded clear the timer <====//
                    if (!window.frames['editor-canvas'] || !window.frames['editor-canvas'].document) {
                        clearInterval(loadAssetTimer);
                        return;
                    } else {
                        //===> Load Assets inside Frames <===//
                        const frameAssetsLoader = (assets_id) => {
                            if (window.frames['editor-canvas'].document.querySelectorAll(assets_id).length <= 0) {
                                //===> Check in the Editor <===//
                                let frameDoc = window.frames['editor-canvas'].document,
                                    fontsElements = document.querySelectorAll(assets_id);

                                //===> Load Assets <===//
                                if (fontsElements.length > 0) fontsElements.forEach((font) => {
                                    //===> Load Font <===//
                                    if(frameDoc.body) {
                                        frameDoc.body.appendChild(document.importNode(font, true));
                                        clearInterval(loadAssetTimer);
                                    }
                                });
                            } else {
                                //===> Increase Counter <===//
                                trying_times += 1;
                                if (trying_times > 5) clearInterval(loadAssetTimer);
                            }
                        };
    
                        //===> Check if the Assets Exist or Not <===//
                        let pdsAssetsTargets = "#fontawesome-css, #pds-primary-font-css, #pds-secondary-font-css, #pds-primary-font-inline-css",
                            pdsPrimaryFontsCheck = window.frames['editor-canvas'].document.querySelectorAll(pdsAssetsTargets);
                        
                        //===> Clear Timer if Loaded <===//
                        if (pdsPrimaryFontsCheck.length > 0) {
                            window.PhenixBlocks.canvasAssetsLoaded = true;
                            clearInterval(loadAssetTimer);
                        };
    
                        //===> When the Frame is Found Load Assets <===//
                        frameAssetsLoader(pdsAssetsTargets);
                    }
                }, 300);
            }
        } else if (window.Phenix) {
            window.document ? viewScript(window.document) : null;
        }
    },

    //===> Block Inserter Accessibility <===//
    blockAccessibility : (event, clientId, newAttributes, currentContent, currentAttributes) => {
        //===> Define Data <===//
        const { createBlock } = wp.blocks;
        const { insertBlock, removeBlock } = wp.data.dispatch('core/editor');
        const { getBlockIndex, getBlockInsertionPoint, getBlockName } = wp.data.select('core/block-editor');

        //===> when its Empty  <===//
        if (currentContent?.length < 1) {
            //===> and Hit Backspace or Delete Remove the Block <===//
            if (event.key === "Backspace" || event.key === "Delete") removeBlock(clientId);
        }

        //===> Shift + # Shortcuts <===//
        else if (event.shiftKey) {
            //===> Insert new Blank Block <===//
            if (event.key === 'Enter') {
                //===> Prevent the default Behavior <===//
                event.preventDefault();
                // Create a new block
                const newBlock = createBlock("core/paragraph");
                // Insert the new block after the current block
                insertBlock(newBlock, getBlockIndex(clientId)+1, getBlockInsertionPoint().rootClientId);
            }
        }

        //===> Control + # Shortcuts <===//
        else if (event.ctrlKey) {
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

        //===> Alt + # Shortcuts <===//
        else if (event.altKey) {}

        //===> Insert New Block when Hit Enter <===//
        else if (event.key === 'Enter') {
            //===> Prevent the default Behavior <===//
            event.preventDefault();
            //===> Create a new block <===//
            const newBlock = createBlock(getBlockName(clientId), newAttributes);
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