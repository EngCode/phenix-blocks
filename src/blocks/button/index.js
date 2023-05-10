/*
 * ===> 01 - Block Data
 * ===> 02 - WordPress Modules
 * ===> 03 - Register Block
 * ===> 03 - Block Save Mode [Output]
*/

//===> Block Data <===//
import Edit from './edit';
import metadata from './block.json';

//===> WordPress Modules <===//
import {registerBlockType} from '@wordpress/blocks';
import {useBlockProps} from '@wordpress/block-editor';

//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg fill="none" viewBox="0 0 32 30"><path fill="#000" d="M5.895 4.333c-.93 0-1.684.776-1.684 1.734 0 .957.754 1.733 1.684 1.733h20.21c.93 0 1.684-.776 1.684-1.733 0-.958-.754-1.734-1.684-1.734H5.895z"/><path fill="#000" fillRule="evenodd" d="M2.526 0C1.131 0 0 1.164 0 2.6v6.933c0 1.436 1.131 2.6 2.526 2.6h26.948c1.395 0 2.526-1.164 2.526-2.6V2.6C32 1.164 30.869 0 29.474 0H2.526zm26.948 1.733H2.526a.855.855 0 00-.842.867v6.933c0 .479.377.867.842.867h26.948a.855.855 0 00.842-.867V2.6a.855.855 0 00-.842-.867z" clipRule="evenodd"/><path fill="#000" d="M5.053 23.933c0-.957.754-1.733 1.684-1.733.93 0 1.684.776 1.684 1.733 0 .958-.754 1.734-1.684 1.734-.93 0-1.684-.776-1.684-1.734zM11.79 22.2c-.93 0-1.685.776-1.685 1.733 0 .958.754 1.734 1.684 1.734h13.474c.93 0 1.684-.776 1.684-1.734 0-.957-.754-1.733-1.684-1.733H11.79z"/><path fill="#000" fillRule="evenodd" d="M2.526 17.867C1.131 17.867 0 19.03 0 20.467V27.4C0 28.836 1.131 30 2.526 30h26.948C30.869 30 32 28.836 32 27.4v-6.933c0-1.436-1.131-2.6-2.526-2.6H2.526zM29.474 19.6H2.526a.855.855 0 00-.842.867V27.4c0 .479.377.867.842.867h26.948a.855.855 0 00.842-.867v-6.933a.855.855 0 00-.842-.867z" clipRule="evenodd"/></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const screens = ["-md", "-lg", "-xl"];
        const blockProps = useBlockProps.save();
        const uniqueKey = blockProps.id;

        //===> Rendering Checkers <===//
        const isObjectVal = (option_value) => {return typeof option_value === 'object'},
            isBooleanVal = (option_value) => {return typeof option_value === 'boolean'},
            isNormalValue = (option_value) => {return typeof option_value === 'string' || typeof option_value === 'number' || typeof option_value === 'array'};

        //===> Rendering Options <===//
        Object.entries(attributes).forEach(([option_name, option_value]) => {
            //===> Exclude Options <===//
            const excluded = ["lightbox_type", "label", "className"];
            if (excluded.some(opt => opt === option_name)) return;

            //===> if its a Normal Values that should be string <===//
            if (isNormalValue(option_value) && attributes[option_name]) {
                //===> for Data Modal <===//
                if (option_name === "data_modal") {
                    blockProps['data-modal'] = attributes[option_name];
                }
                //===> for URL <===//
                else if (option_name === "url") {
                    if (attributes.isLink === true || attributes.isLightBox === true) blockProps['href'] = attributes[option_name];
                }
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
                else if (option_name === "type") {
                    blockProps.className += ` ${attributes[option_name].replace('normal', 'btn').trim()}`;
                }
                //===> for Other Options <===//
                else if (attributes[option_name]) {
                    blockProps.className += ` ${attributes[option_name].toString().replace(',', ' ').trim()}`;
                };
            } else if (isBooleanVal(option_value) && attributes[option_name]) {
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
                        };
                    }
                    //===> for Normal strings and Arrays <===//
                    else if (isNormalValue(sub_value)) {
                        //===> Styles Support <===//
                        if (sub_option === "support") {
                            sub_value.forEach(property => !property.includes('enable-') ? blockProps.className += ` ${property}` : null);
                        }
                        //===> Postion Absolute Sticky <===//
                        else if (sub_option === "position" && sub_value === "sticky-absolute") {blockProps["data-sticky"] = `${sub_value}`;}
                        //===> Other Values <===//
                        else {blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;}
                    };
                });
            };
        });

        //===> Rendered Element <===//
        let renderedElement = <button title={attributes.type.includes("square") ? attributes.label : null} { ...blockProps }>{!attributes.type.includes("square") ? attributes.label : ""}</button>;
        if (attributes.isLink) renderedElement = <a title={attributes.type.includes("square") ? attributes.label : null} { ...blockProps }>{!attributes.type.includes("square") ? attributes.label : ''}</a>;

        //===> Render <===//
        return (<>{renderedElement}</>);
    }
});