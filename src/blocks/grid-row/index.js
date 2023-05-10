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
    icon : <svg fill="none" viewBox="0 0 31 28"><path fill="#000" fillRule="evenodd" d="M4 0a4 4 0 00-4 4v5a4 4 0 004 4h5a4 4 0 004-4V4a4 4 0 00-4-4H4zm20 2h1a4 4 0 014 4v1a4 4 0 01-4 4h-1a4 4 0 01-4-4V6a4 4 0 014-4zm-6 4a6 6 0 016-6h1a6 6 0 016 6v1a6 6 0 01-6 6h-1a6 6 0 01-6-6V6zm7 11a1 1 0 00-1 1v3h-3a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3v-3a1 1 0 00-1-1zM4 15a4 4 0 00-4 4v5a4 4 0 004 4h5a4 4 0 004-4v-5a4 4 0 00-4-4H4z" clipRule="evenodd"/></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const blockProps = useBlockProps.save();
        blockProps.className += ' row';

        //===> Rendering Checkers <===//
        const isObjectVal = (option_value) => {return typeof option_value === 'object'},
            isNormalValue = (option_value) => {return typeof option_value === 'string' || typeof option_value === 'number' || typeof option_value === 'array'},
            colsRender = (size) => parseInt(size) === 0 ? `-auto` : parseInt(size) === 13 ? "" : `-${size}`;

        //====> Fallback <====//
        if (attributes.flexbox.slider === "on") attributes.flexbox.slider = true;

        //===> Rendering Options <===//
        Object.entries(attributes).forEach(([option_name, option_value]) => {
            //===> Exclude Options <===//
            const excluded = ["className"];
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
    
            //===> if its object[group] Option like [style, typography, responsive] <===//
            else if (isObjectVal(option_value) && attributes[option_name]) {
                //===> loop on the Object Options <===//
                Object.entries(option_value).forEach(([sub_option, sub_value]) => {
                    //===> Check if the attribute is Set <===//
                    if (!attributes[option_name][sub_option]) return;
    
                    //===> Checker for Slider Mode <===//
                    else if (attributes.flexbox.slider) {
                        //===> Add Slider Name <===//
                        blockProps.className += ' px-slider';
                        //===> if not-related option return void <===//
                        if (["align", "nowrap", "masonry"].some(option => sub_option.includes(option))) return;
                    };
    
                    //===> Flexbox Options <===//
                    if (option_name === "flexbox" && sub_option.includes("cols")) {
                        //===> Slider Mode <===//
                        if(attributes.flexbox.slider) {
                            let dataAttr = `data-${sub_option === "cols" ? "items" : sub_option.replace('cols-', '')}`;
                            blockProps[dataAttr] = sub_value;
                        } else if (attributes.flexbox.equals) {
                            //===> add Classes <===//
                            blockProps.className += ` ${sub_option.replace('cols', 'row-cols') + colsRender(sub_value)}`;
                        }
                    }
    
                    //===> Slider Options <===//
                    else if (option_name === "slider") {
                        //===> Set Options <===//
                        if(attributes.flexbox.slider) blockProps[`data-${sub_option}`] = sub_value;
                    }
    
                    //===> if its a Object Value <===//
                    else if (!isNormalValue(sub_value)) {
                        //===> Animations Specials <===//
                        if (sub_option === "animation" && sub_value.name) {
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
                        //===> Size <===//
                        else if (sub_option.includes("size")) blockProps.className += ` ${sub_option.replace('size', 'col') + colsRender(sub_value)}`;
                        //===> Other Values <===//
                        else {blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;}
                    };
                });
            };
        });

        //===> Render <===//
        return (
            <div {...blockProps}>
                <InnerBlocks.Content />
            </div>
        );
    }
});