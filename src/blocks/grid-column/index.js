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
import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';

//====> Attributes Renderers <====//
import OptionsRenderer from "../px-controls/logic/renderer-v1";

//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg fill="none" viewBox="0 0 32 28"><path fill="#000" fillRule="evenodd" d="M17 2.5h9A3.5 3.5 0 0129.5 6v16a3.5 3.5 0 01-3.5 3.5h-9v-23zM15 0h11a6 6 0 016 6v16a6 6 0 01-6 6H6a6 6 0 01-6-6V6a6 6 0 016-6h9zm0 25.5H6A3.5 3.5 0 012.5 22V6A3.5 3.5 0 016 2.5h9v23z" clipRule="evenodd"/></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const renderProps = OptionsRenderer({attributes: attributes, blockProps: useBlockProps.save(), isColumn: true});
        const blockProps = renderProps.blockProps;
        const TagName = attributes.tagName;

        //===> Flexbox Layouts <===//
        if (attributes.isFlexbox) blockProps.className += ` ${renderProps.container.className}`;
        else {blockProps.className += ` ${renderProps.container.className}`;}

        //===> Data Attributes Options <===//
        Object.entries(renderProps.container).forEach(([option_name, option_value]) => {
            if(option_name === "className") return;
            else blockProps[option_name] = option_value;
        });

        //===> Render <===//
        return <TagName {...blockProps}>
            <InnerBlocks.Content />
        </TagName>;
    }
});