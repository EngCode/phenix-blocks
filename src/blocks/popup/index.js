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
    useInnerBlocksProps,
} from '@wordpress/block-editor';

//===> Register Block <===//
registerBlockType(metadata, {
    icon : "../../img/blocks/core/latest-comments.svg",

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const blockProps = useBlockProps.save();
        const innerBlocksProps = useInnerBlocksProps.save();

        //===> Modal Settings <===//
        blockProps.className += ` px-modal hidden align-center`;
        innerBlocksProps.className += ` modal-content`;
        if(attributes.id) blockProps.id = attributes.id;

        //===> Render <===//
        return (<div {...blockProps}>
            {/*===> Container <===*/}
            <InnerBlocks.Content />
        </div>);
    }
});