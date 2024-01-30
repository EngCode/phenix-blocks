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
    icon : <svg fill="none" viewBox="0 0 32 28"><path fill="#000" fillRule="evenodd" d="M17 2.5h9A3.5 3.5 0 0129.5 6v16a3.5 3.5 0 01-3.5 3.5h-9v-23zM15 0h11a6 6 0 016 6v16a6 6 0 01-6 6H6a6 6 0 01-6-6V6a6 6 0 016-6h9zm0 25.5H6A3.5 3.5 0 012.5 22V6A3.5 3.5 0 016 2.5h9v23z" clipRule="evenodd"/></svg>,

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
            isNormalValue = (option_value) => {return typeof option_value === 'string' || typeof option_value === 'number' || typeof option_value === 'array'},
            sizeRender = (size) => parseInt(size) === 0 ? `-auto` : parseInt(size) === 13 ? "" : `-${size}`;

        //===> Rendering Options <===//
        Object.entries(attributes).forEach(([option_name, option_value]) => {
            //===> Exclude Options <===//
            const excluded = ["tagName", "className"];
            if (excluded.some(opt => opt === option_name)) return;

            //===> if its a Normal Values that should be string <===//
            if (isNormalValue(option_value) && attributes[option_name]) {
                //===> ID <===//
                if (option_name === "id") blockProps['id'] = attributes[option_name];
                //===> Size <===//
                if (option_name === "size") blockProps.className += ` col${sizeRender(option_value)}`;
                //===> Other Options <===//
                else if (attributes[option_name]) {
                    blockProps.className += ` ${attributes[option_name].toString().replace(',', ' ').trim()}`;
                };
            }

            //===> for Boolean Options <===//
            else if (isBooleanVal(option_value) && attributes[option_name]) {
                //===> Flexbox <===//
                if (option_name === "isFlexbox") blockProps.className += ` flexbox`;
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
                        //===> Postion Absolute Sticky <===//
                        if (sub_option === "position" && sub_value === "sticky-absolute") {blockProps["data-sticky"] = `${sub_value}`;} 
                        //===> Size <===//
                        else if (sub_option.includes("size")) blockProps.className += ` ${sub_option.replace('size', 'col') + sizeRender(sub_value)}`;
                        //===> Size <===//
                        else if (sub_option.includes("size")) blockProps.className += ` ${sub_option.replace('size', 'col') + sizeRender(sub_value)}`;
                        //===> Padding Values <===//
                        else if (sub_option.includes('pdt') || sub_option.includes('pds') || sub_option.includes('pde') || sub_option.includes('pdb')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                        //===> Margin Values <===//
                        else if (sub_option.includes('mt') || sub_option.includes('ms') || sub_option.includes('me') || sub_option.includes('mb')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                        //===> Positions Values <===//
                        else if (sub_option.includes('pos-')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                        //===> Layout Gap <===//
                        else if (sub_option.includes('gpx') || sub_option.includes('gpy') && !sub_option.includes('gpy-fix')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                        //===> Other Values <===//
                        else {blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;}
                    };
                });
            };
        });

        //===> Render <===//
        return <TagName {...blockProps}>
            <InnerBlocks.Content />
        </TagName>;
    }
});