//===> Options Renderer <===//
const OptionsRenderer = (attributes, blockProps, innerBlocksProps) => {
    //===> Rendering Checkers <===//
    const isObjectVal = (option_value) => {return typeof option_value === 'object'},
            isBooleanVal = (option_value) => {return typeof option_value === 'boolean'},
            isNormalValue = (option_value) => {return typeof option_value === 'string' || typeof option_value === 'number' || typeof option_value === 'array'};

    //===> Rendering Options <===//
    Object.entries(attributes).forEach(([option_name, option_value]) => {
        //===> Exclude Options <===//
        const excluded = ["lightbox_type", "label", "className", "metadata"];
        if (excluded.some(opt => opt === option_name)) return;

        //===> if its a Normal Values that should be string <===//
        if (isNormalValue(option_value) && attributes[option_name]) {
            //===> for Data Modal <===//
            if (option_name === "data_modal") {blockProps['data-modal'] = attributes[option_name];}
            //===> for URL <===//
            else if (option_name === "url" && attributes.isLink  || attributes.isLightBox) {blockProps['href'] = "#none";}
            //===> for Data ID <===//
            else if (option_name === "data_id") {
                blockProps.className += ` menu-toggle`;
                blockProps['data-id'] = attributes[option_name];
            }
            //===> for Icons <===//
            else if (option_name === "icon" && attributes[option_name]) {
                if (attributes.type.includes('icon') || attributes.type.includes('square')) {blockProps.className += ` ${attributes[option_name].toString().replace(',', ' ').trim()}`;}
            }
            //===> Fallback for Old Types <===//
            else if (option_name === "type") {blockProps.className += ` ${attributes[option_name].replace('normal', 'btn').trim()}`;}
            //===> for Other Options <===//
            else if (attributes[option_name]) {blockProps.className += ` ${attributes[option_name].toString().replace(',', ' ').trim()}`;};
        } 
        //===> for Boolean Options <===//
        else if (isBooleanVal(option_value) && attributes[option_name]) {
            //===> for Link Options <===//
            if (option_name === "isLink" || option_name === "inNewTab") {
                if (option_name === "inNewTab") {blockProps['target'] = "_blank";} else {blockProps['rel']  = "noopener";}
            }
            //===> for Lightbox Options <===//
            else if (option_name === "isLightBox" && option_value) {
                blockProps.className += ' px-lightbox';
                if (attributes.lightbox_type) blockProps['data-media'] = attributes.lightbox_type;
            };
        }
        //===> if its object[group] Option like [style, typography, responsive] <===//
        else if (isObjectVal(option_value) && attributes[option_name]) {
            //===> loop on the Object Options <===//
            Object.entries(option_value).forEach(([sub_option, sub_value]) => {
                //===> Check if the attribute is Set <===//
                if (!attributes[option_name][sub_option]) return;

                //===> if its a Object Value <===//
                if (!isNormalValue(sub_value)) {
                    //===> Background Specials <===//
                    if (sub_option === "background" && sub_value.value) {
                        //===> Adjust Primary Colors <===//
                        let isPrimary = false,
                            primaryColors = ["bg-primary", "bg-secondary", "bg-gray", "bg-dark", "bg-white", "bg-success", "bg-danger", "bg-warning", "bg-info"];
                        //===> Correct Colors <===//
                        primaryColors.forEach(color => sub_value.value === color ? isPrimary = true : null);
                        //===> Set the Background <===//
                        if (isPrimary) {blockProps.className += sub_value.value.includes('bg-white') ? ` light` : ` ${sub_value.value.replace('bg-', '')}`;} 
                        else {blockProps.className += ` ${sub_value.value}`;}
                        //===> Background Rotation <===//
                        if (sub_value.rotate) blockProps.className += ` ${sub_value.rotate}`;
                    }
                    //===> Animations Specials <===//
                    else if (sub_option === "animation" && sub_value.name) {
                        blockProps['data-animation'] = sub_value.name;
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
                    //===> Postion Absolute Sticky <===//
                    if (sub_option === "position" && sub_value === "sticky-absolute") {blockProps["data-sticky"] = `${sub_value}`;}
                    //===> Padding Values <===//
                    else if (sub_option.includes('pdt') || sub_option.includes('pds') || sub_option.includes('pde') || sub_option.includes('pdb')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                    //===> Margin Values <===//
                    else if (sub_option.includes('mt') || sub_option.includes('ms') || sub_option.includes('me') || sub_option.includes('mb')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                    //===> Positions Values <===//
                    else if (sub_option.includes('pos-')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                    //===> Other Values <===//
                    else {blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;}
                };
            });
        };
    });

    //===> Render Component <===//
    return {blockProps, innerBlocksProps};
}

export default OptionsRenderer;