/*
 * ===> 01 - Block Data
 * ===> 02 - WordPress Modules
 * ===> 03 - Register Block
 * ===> 03 - Block Save Mode [Output]
*/
//====> WP Modules <====//

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
    icon : <svg fill="none" viewBox="0 0 32 32"><path fill="#000" fillRule="evenodd" d="M6 30h20a4 4 0 004-4v-3.6h-4v1.267a3 3 0 01-3 3H9a3 3 0 01-3-3v-.717a1.358 1.358 0 01-.769-.55H2V26a4 4 0 004 4zm2-14.665V9.4a1 1 0 011-1h14a1 1 0 011 1v.752a1.354 1.354 0 00-.6.605l-2.666 5.364c-.827 1.663-3.256 1.581-3.966-.133-1.554-3.746-6.742-4.04-8.768-.653zm0 6.103l2.266-4.559c.826-1.663 3.256-1.582 3.966.133 1.606 3.872 7.094 4.055 8.961.3L24 15.687v7.979a1 1 0 01-1 1H9a1 1 0 01-1-1v-2.23zm18-9.705h4V6a4 4 0 00-4-4H6a4 4 0 00-4 4v5.733h4V9.4a3 3 0 013-3h14a3 3 0 013 3v2.333zM6 32a6 6 0 01-6-6V6a6 6 0 016-6h20a6 6 0 016 6v20a6 6 0 01-6 6H6z" clipRule="evenodd"/></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const container = {className: ""};
        const TagName = attributes.tagName;
        const blockProps = useBlockProps.save();

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
                        else {container.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;}
                    };
                });
            };
        });

        //===> General Options : for Section Convert <===//
        if (!attributes.isSection) blockProps.className += ` ${container.className}`;

        //===> Render <===//
        return (
            <TagName {...blockProps}>
                {attributes.isSection ?
                    <div className={container.className}>
                        <InnerBlocks.Content />
                    </div>
                :
                    <InnerBlocks.Content />
                }
            </TagName>
        );
    }
});