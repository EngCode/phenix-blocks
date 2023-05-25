/*
 * ===> 01 - Modules
 * ===> 02 - Register Block
 * ===> 03 - Block Save Mode [Output]
*/

//===> Modules <===//
import Edit from './edit';
import {__} from '@wordpress/i18n';
import metadata from './block.json';
import {registerBlockType} from '@wordpress/blocks';
import {InnerBlocks, useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg fill="none" viewBox="0 0 32 32"><path fill="#1E1E1E" d="M28.4 0H3.6C1.6 0 0 1.6 0 3.6v24.933C0 30.4 1.6 32 3.6 32h24.933c2 0 3.6-1.6 3.6-3.6V3.6C32 1.6 30.4 0 28.4 0zm.933 28.4c0 .533-.4.933-.933.933H3.6a.911.911 0 01-.933-.933V12.133l8.4-9.466h17.466c.4 0 .8.4.8.933v24.8zM12.4 21.333L21.333 16 12.4 10.667v10.666z"/></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const blockProps = useBlockProps.save();
        const TagName = attributes.style.isLink ?  "a" : 'div';
        if (attributes.style.isLink) blockProps.href = attributes.style.url || "#";

        //===> Rendering Checkers <===//
        const isObjectVal = (option_value) => {return typeof option_value === 'object'},
            isBooleanVal = (option_value) => {return typeof option_value === 'boolean'},
            isNormalValue = (option_value) => {return typeof option_value === 'string' || typeof option_value === 'number' || typeof option_value === 'array'};

        //===> Rendering Options <===//
        Object.entries(attributes).forEach(([option_name, option_value]) => {
            //===> Exclude Options <===//
            const excluded = ["tagName", "className", "align", "content"];
            if (excluded.some(opt => opt === option_name)) return;

            //===> if its a Normal Values that should be string <===//
            if (isNormalValue(option_value) && attributes[option_name]) {
                //===> Other Options <===//
                blockProps.className += ` ${attributes[option_name].toString().replace(',', ' ').trim()}`;
            }

            //===> if its object[group] Option like [style, typography, responsive] <===//
            else if (isObjectVal(option_value) && attributes[option_name]) {
                //===> loop on the Object Options <===//
                Object.entries(option_value).forEach(([sub_option, sub_value]) => {
                    //===> Check if the attribute is Set <===//
                    if (!attributes[option_name][sub_option]) return;

                    //===> if its a Object Value <===//
                    if (!isNormalValue(sub_value)) {
                        //===> Animations Specials <===//
                        if (sub_option === "animation" && sub_value.name) {
                            blockProps['data-animation'] = sub_value.name;
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
                        //===> Has Icon <===//
                        else if (sub_option === "hasIcon") blockProps.className += ` tx-icon`;
                        //===> Display Support <===//
                        else if (sub_option === "display") blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;
                    }

                    //===> for Normal strings and Arrays <===//
                    else if (isNormalValue(sub_value)) {
                        //===> .for Icon. <====//
                        if (sub_option.includes("icon") && !attributes.style.hasIcon) return;
                        //===> Postion Absolute Sticky <===//
                        if (sub_option === "position" && sub_value === "sticky-absolute") {blockProps["data-sticky"] = `${sub_value}`;}
                        //===> Settings Values <===//
                        else if (option_name === "setting") {
                            if (sub_option.includes('size') && sub_value !== "custom") blockProps.className += ` ${sub_option.replaceAll('size', 'ratio')}-${sub_value}`;
                            else blockProps[`data-${sub_option}`] = sub_value;
                        }
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

        //===> Default <===//
        if(!attributes.setting.type) blockProps['data-type'] = "image";
        if(!attributes.setting.src)  blockProps['data-src'] = "https://via.placeholder.com/1024x768.webp";
        if(!attributes.setting.size) blockProps.className += " ratio-4x3";

        //===> Render <===//
        return (<div {...blockProps}>{attributes.style['inner-blocks'] === true ? <InnerBlocks.Content /> : null}</div>);
    }
});