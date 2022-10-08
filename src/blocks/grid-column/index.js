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
    icon : <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 24 24"><path fill="#1E1E1E" d="M21.2,2.8H2.8C1.2,2.8,0,4.1,0,5.6v12.7c0,1.6,1.3,2.8,2.8,2.8h18.4c1.6,0,2.8-1.3,2.8-2.8V5.6C24,4.1,22.8,2.8,21.2,2.8z M15.4,4.9v14.2H8.5V4.9H15.4z M2.1,18.4V5.6c0-0.4,0.3-0.7,0.7-0.7h3.5v14.2H2.8C2.4,19.1,2.1,18.8,2.1,18.4z M21.9,18.4c0,0.4-0.3,0.7-0.7,0.7h-3.7V4.9h3.7c0.4,0,0.7,0.3,0.7,0.7V18.4z"/></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const blockProps = useBlockProps.save();
        const TagName = attributes.tagName;

        //===> Set Properties <===//
        blockProps.className += ` ${attributes.size}`;
        //===> Render Spacing <===//
        if (attributes.spacing_pd) blockProps.className += ` ${attributes.spacing_pd}`;
        if (attributes.spacing_mg) blockProps.className += ` ${attributes.spacing_mg}`;

        //===> Render <===//
        return (
            <TagName {...blockProps}>
                <InnerBlocks.Content />
            </TagName>
        );
    }
});