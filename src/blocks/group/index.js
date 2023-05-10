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
import { registerBlockType } from '@wordpress/blocks';

import {
    InnerBlocks,
    useBlockProps,
} from '@wordpress/block-editor';

//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg fill="none" viewBox="0 0 32 32"><path fill="#000" fillRule="evenodd" d="M16.2 4.5H23A4.5 4.5 0 0127.5 9v6.8a4.5 4.5 0 01-4.5 4.5h-.2v-4.1a7 7 0 00-7-7h-4.1V9a4.5 4.5 0 014.5-4.5zm-7 4.7V9a7 7 0 017-7H23a7 7 0 017 7v6.8a7 7 0 01-7 7h-.2v.2a7 7 0 01-7 7H9a7 7 0 01-7-7v-6.8a7 7 0 017-7h.2zm11.1 13.6v.2a4.5 4.5 0 01-4.5 4.5H9A4.5 4.5 0 014.5 23v-6.8A4.5 4.5 0 019 11.7h.2v4.1a7 7 0 007 7h4.1zm0-2.5h-4.1a4.5 4.5 0 01-4.5-4.5v-4.1h4.1a4.5 4.5 0 014.5 4.5v4.1z" clipRule="evenodd"/></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const blockProps = useBlockProps.save();
        const TagName = attributes.tagName;

        //===> Rendering Checkers <===//
        const isObjectVal = (option_value) => {return typeof option_value === 'object'},
            isBooleanVal = (option_value) => {return typeof option_value === 'boolean'},
            isNormalValue = (option_value) => {return typeof option_value === 'string' || typeof option_value === 'number' || typeof option_value === 'array'};

        //===> Rendering Options <===//
        Object.entries(attributes).forEach(([option_name, option_value]) => {
            //===> Exclude Options <===//
            const excluded = ["tagName", "className", "align"];
            if (excluded.some(opt => opt === option_name)) return;

            //===> if its a Normal Values that should be string <===//
            if (isNormalValue(option_value) && attributes[option_name]) {
                //===> ID <===//
                if (option_name === "id") blockProps['id'] = attributes[option_name];
                //===> Other Options <===//
                else if (attributes[option_name]) {
                    blockProps.className += ` ${attributes[option_name].toString().replace(',', ' ').trim()}`;
                };
            }

            //===> for Boolean Options <===//
            else if (isBooleanVal(option_value) && attributes[option_name]) {
                //===> Flexbox <===//
                if (option_name === "isFlexbox" && option_value === true) blockProps.className += ` flexbox`;
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

        //===> Render <===//
        return (
            <TagName {...blockProps}>
                <InnerBlocks.Content />
            </TagName>
        );
    }
});