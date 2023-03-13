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
    icon : <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;"><path fill="#1E1E1E" class="st0" d="M21,0H3C1.4,0,0,1.4,0,3v19.3C0,23.2,0.8,24,1.6,24c0.5,0,0.8-0.2,1.2-0.4l3.9-4.1H21c1.7,0,3-1.3,3-3V3C24,1.4,22.7,0,21,0z M21.8,16.5c0,0.5-0.3,0.8-0.8,0.8H5.9l-3.6,3.6V3c0-0.5,0.3-0.8,0.8-0.8h18c0.4,0,0.8,0.3,0.8,0.8V16.5z"/></svg>,

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