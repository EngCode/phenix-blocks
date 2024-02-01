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
            const excluded = ["tagName", "className", "align", "metadata", "name", "content", "lightbox_type", "url", "label"];
            if (excluded.some(opt => opt === option_name)) return;
    
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
    
            //===> if its object[group] => [style, typography, responsive, flexbox/slider] <===//
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
    
                            //===> Image Background <===//
                            if (attributes.style.background.type === 'image') {
                                blockProps.className += ` px-media`;
                                blockProps["data-src"] = attributes.style.background.value;
                                blockProps.style.backgroundImage = attributes.style.background.value;
                            }
                            //===> Video Background <===//
                            else if (attributes.style.background.type === 'video') {
                                blockProps.className += ` px-media pds-video-bg`;
                                blockProps["data-src"]      = attributes.style.background.value;
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
                                    blockProps.className += ` ${sub_value.value}`;
                                }
                            }
                            //===> Background Rotation <===//
                            if (sub_value.rotate) blockProps.className += ` ${sub_value.rotate}`;
                        }
                        //===> Animations Specials <===//
                        else if (sub_option === "animation") {
                            sub_value.name && (blockProps['data-animation'] = sub_value.name);
                            sub_value.group && (blockProps['data-lazy-group'] = "true");
                            sub_value.delay && (blockProps['data-delay'] = sub_value.delay);
                            sub_value.reverse && (blockProps['data-flow'] = sub_value.reverse);
                            sub_value.offset && (blockProps['data-offset'] = sub_value.offset);
                            sub_value.duration && (blockProps['data-duration'] = sub_value.duration);
                            sub_value['exit-name'] && (blockProps['data-animation-exit'] = sub_value['exit-name']);
                        }
                        //===> Styles Support <===//
                        else if (sub_option === "support") {
                            sub_value.forEach(property => !property.includes('enable-') ? blockProps.className += ` ${property}` : null);
                        }
                        //===> for Link Options <===//
                        else if (isSave && option_name === "isLink" || isSave &&  option_name === "inNewTab") {
                            if (option_name === "inNewTab") {blockProps['target'] = "_blank";} 
                            else {blockProps['rel'] = "noopener";}
                        }
                        //===> Has Icon <===//
                        else if (sub_option === "hasIcon") {
                            blockProps.className += ` tx-icon`;
                        }
                        //===> Display Support <===//
                        else if (sub_option === "display") {
                            blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;
                        }
                    }
    
                    //===> for Normal strings and Arrays <===//
                    else if (isNormalValue(sub_value)) {
                        //===> Exclude Options <===//
                        const excluded = ["dimensions"];
                        if (excluded.some(opt => opt === sub_option)) return;
    
                        //===> Postion Sticky <===//
                        if (sub_option === "position" && sub_value === "sticky-absolute") {
                            blockProps["data-sticky"] = `${sub_value}`;
                        }
    
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
                        else if (sub_option.includes("pos-")) {
                            //===> Custom Positions <===//
                            if (parseInt(sub_value) > 50 || parseInt(sub_value) < 0) {
                                CustomCSS[`--${sub_option}`] = `${sub_value}px`;
                                blockProps.className += ` ${sub_option}-custom-${sub_value}`;
                            }
                            //===> Name Positions <===//
                            else { blockProps.className += ` ${sub_option}-${sub_value}`; }
                        }
    
                        //===> Margin Values <===//
                        else if (isMargin.some(css => sub_option.includes(css))) {
                            //===> Check Value Range <===//
                            if (parseInt(sub_value) > 100) {
                                CustomCSS[`--${sub_option}`] = `${sub_value}px`;
                                blockProps.className += ` ${sub_option}-custom-${sub_value}`;
                            }
                            //===> for Auto <===//
                            else if (parseInt(sub_value) < 0) { blockProps.className += ` ${sub_option}-auto`; }
                            //===> is Name Value <===//
                            else { blockProps.className += ` ${sub_option}-${sub_value}`; }
                        }
    
                        //===> Padding Values <===//
                        else if (isPadding.some(css => sub_option.includes(css))) {
                            if (parseInt(sub_value) < 0) sub_value = 0;
                            blockProps.className += ` ${sub_option}-${sub_value}`;
                        }
    
                        //===> Layout Gap <===//
                        else if (sub_option.includes('gpx') || sub_option.includes('gpy') && !sub_option.includes('fix')) {
                            container.className += ` ${sub_option}-${sub_value}`;
                        }
    
                        //===> Flexbox Values <===//
                        else if (option_name === "flexbox") {container.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;}
                        
                        //===> Responsive Columns Sizes <===//
                        else if (isColumn && option_name === "responsive" && sub_option.includes('size-')) {
                            blockProps.className += ` ${sub_option.replace("size", "col")}${colSizeHandler(sub_value)}`;
                        }
    
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

        //===> for Normal Values <===//
        else if (type === null) { single_val = target; }

        //===> for Normal Values <===//
        else { single_val = target.value; }

        //===> Return Value <===//
        if(single_val) return single_val;
    },

    //===> Responsive Values Handler <===//
    setObject : (target, screen, attr, hasName) => {
        //==> Get Current <==//
        const name = hasName || (target instanceof HTMLElement && target.getAttribute('name')) || (attr === "typography" ? "color" : attr === "style" ? "background" : `${target}`);
        const value = (typeof(target) === "string" || typeof(target) === "number") ? target : this.valueHandler(target);
        
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
    set_value : (target) => {
        //==> Get Current <==//
        const name = target.getAttribute('name');
        const value = (typeof(target) === "string" || typeof(target) === "number") ? target : this.valueHandler(target);
        const newAttributes = { ...attributes, [name]: value };
        //==> Set Value <==//
        setAttributes(newAttributes);
    },

    //===> Options Lists Data <===//
    dataLists : {
        button : {
            types : [
                { label: __("Default", "pds-blocks"), value: 'btn' },
                { label: __("Text/Icon", "pds-blocks"), value: 'btn btn-icon' },
                { label: __("Icon Only", "pds-blocks"), value: 'btn square tooltip-bottom' },
            ],
        
            sizes : [
                { label: __("XS", "pds-blocks"), value: 'tiny' },
                { label: __("SM", "pds-blocks"), value: 'small' },
                { label: __("MD", "pds-blocks"), value: 'medium' },
                { label: __("LG", "pds-blocks"), value: 'large' },
                { label: __("XL", "pds-blocks"), value: 'xlarge' },
            ],
        },
    
        lightbox : {
            types : [
                { label: __("Image", "pds-blocks"),  value: 'image' },
                { label: __("Video", "pds-blocks"),  value: 'video' },
                { label: __("Embed", "pds-blocks"),  value: 'embed' },
            ],
        },
    },
}