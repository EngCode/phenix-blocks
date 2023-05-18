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
import {RichText, InnerBlocks, useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg fill="none" viewBox="0 0 32 32"><path fill="#1E1E1E" d="M16 0C7.067 0 0 7.067 0 16s7.067 16 16 16 16-7.067 16-16S24.933 0 16 0zm0 2.667c7.333 0 13.333 6 13.333 13.333v.133c-2.533-1.466-5.866-3.066-6-3.2-.4-.133-.933-.133-1.466.134l-5.2 3.733-6-2c-.4-.133-.667 0-1.067.133L3.067 18.8c-.134-.933-.4-1.733-.4-2.667 0-7.466 6-13.466 13.333-13.466z"/></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const blockProps = useBlockProps.save();
        const TagName = attributes.style.isLink ?  "a" : 'i';

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
                        //===> Background Specials <===//
                        if (sub_option === "background" && sub_value.value) {
                            //===> Image Background <===//
                            if (attributes.style.background.type === 'image') {
                                blockProps.className += ` px-media`;
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
                        else if (sub_option === "animation" && sub_value.name) {
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
                        //===> Postion Absolute Sticky <===//
                        if (sub_option === "position" && sub_value === "sticky-absolute") {blockProps["data-sticky"] = `${sub_value}`;}
                        //===> Icon Size <===//
                        else if (sub_option === "dimensions") {
                            if(!attributes.style.freeWidth) blockProps.style.width = `${sub_value}px`;
                            blockProps.style.height = `${sub_value}px`;
                            blockProps.style.lineHeight = `${sub_value}px`;
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

        //===> Default icon <===//
        let iconURl = "https://via.placeholder.com/50x50.webp";
        blockProps.className += ` tx-align-center inline-block`;
        if (attributes.type === "font" && !attributes.style.icon) blockProps.className += ` far fa-icons`;

        //===> Render <===//
        return (<TagName {...blockProps}>{attributes.type === "custom" ? 
            <img alt="icon" width={attributes.style.dimensions ? attributes.style.dimensions : 42} height={attributes.style.dimensions ? attributes.style.dimensions : 42} src={attributes.style.icon?.includes("http") ? attributes.style.icon : iconURl} />
        : null}</TagName>);
    }
});