//===> Options Renderer <===//
const OptionsRenderer = (attributes, blockProps, innerBlocksProps) => {
    //===> Rendering Checkers <===//
    const container = {className: ""},
          isObjectVal = (option_value) => {return typeof option_value === 'object'},
          isBooleanVal = (option_value) => {return typeof option_value === 'boolean'},
          isNormalValue = (option_value) => {return typeof option_value === 'string' || typeof option_value === 'number' || typeof option_value === 'array'};

    //===> Rendering Options <===//
    Object.entries(attributes).forEach(([option_name, option_value]) => {
        //===> Exclude Options <===//
        const excluded = ["tagName", "className", "align", "metadata", "name"];
        if (excluded.some(opt => opt === option_name)) return;

        //===> if its a Normal Values that should be string <===//
        if (isNormalValue(option_value) && attributes[option_name]) {
            //===> ID <===//
            if (option_name === "id") blockProps['id'] = attributes[option_name];
            //===> Other Options <===//
            else if (attributes[option_name]) {
                container.className += ` ${attributes[option_name].toString().replace(',', ' ').trim()}`;
            };
        }

        //===> for Boolean Options <===//
        else if (isBooleanVal(option_value) && attributes[option_name]) {
            //===> Flexbox <===//
            if (option_name === "isFlexbox" && option_value === true) container.className += ` flexbox`;
        }

        //===> if its object[group] Option like [style, typography, responsive] <===//
        else if (isObjectVal(option_value) && attributes[option_name]) {
            //===> Flexbox Props <===//
            if(option_name === "flexbox" && !attributes.isFlexbox) return;

            //===> loop on the Object Options <===//
            Object.entries(option_value).forEach(([sub_option, sub_value]) => {
                //===> Check if the attribute is Set <===//
                if (!attributes[option_name][sub_option]) return;

                //===> if its a Object Value <===//
                if (!isNormalValue(sub_value)) {
                    //===> Background Specials <===//
                    if (sub_option === "background" && sub_value.value) {
                        //===> Image Background <===//
                        if (attributes.style.background.type === 'image') {
                            blockProps.className += ` px-media`;
                            blockProps["data-src"] = attributes.style.background.value;
                            blockProps.style.backgroundImage = attributes.style.background.value;
                        }
                        //===> Video Background <===//
                        else if (attributes.style.background.type === 'video') {
                            blockProps.className += ` px-media pds-video-bg`;
                            blockProps["data-type"] = "embed";
                            blockProps["data-embed"]="video";
                            blockProps["data-autoplay"]="1";
                            blockProps["data-loop"]="1";
                            blockProps["data-muted"]="1";
                            blockProps["data-src"] = attributes.style.background.value;
                        }
                        //===> Name Background <===//
                        else {
                            blockProps['style'] = null; blockProps['data-src'] = null;
                            blockProps.className += ` ${attributes.style.background.value}`;
                        }
                        //===> Background Rotation <===//
                        if (sub_value.rotate) blockProps.className += ` ${sub_value.rotate}`;
                    }
                    //===> Animations Specials <===//
                    else if (sub_option === "animation") {
                        sub_value.name && (blockProps['data-animation'] = sub_value.name);
                        sub_value.group && (blockProps['data-lazy-group'] = 1);
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
                    //===> Display Support <===//
                    else if (sub_option === "display") blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;
                }

                //===> for Normal strings and Arrays <===//
                else if (isNormalValue(sub_value)) {
                    //===> Postion Sticky <===//
                    if (sub_option === "position" && sub_value === "sticky-absolute") {blockProps["data-sticky"] = `${sub_value}`;}
                    //===> Padding Values <===//
                    else if (sub_option.includes('pdt') || sub_option.includes('pds') || sub_option.includes('pde') || sub_option.includes('pdb')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                    //===> Margin Values <===//
                    else if (sub_option.includes('mt') || sub_option.includes('ms') || sub_option.includes('me') || sub_option.includes('mb')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                    //===> Positions Values <===//
                    else if (sub_option.includes('pos-')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                    //===> Layout Gap <===//
                    else if (sub_option.includes('gpx') || sub_option.includes('gpy') && !sub_option.includes('fix')) { container.className += ` ${sub_option}-${sub_value}`; }
                    //===> Other Values <===//
                    else if (option_name === "flexbox") {container.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;}
                    //===> Other Values <===//
                    else {blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;}
                };
            });
        };
    });

    //===> General Options : for Section Convert <===//
    if (attributes.isSection) innerBlocksProps.className += `${container.className}`; 
    else blockProps.className += `${container.className}`;

    //===> Render Component <===//
    return {blockProps, innerBlocksProps};
}

export default OptionsRenderer;