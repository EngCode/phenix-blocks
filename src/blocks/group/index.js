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
    icon : <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="st0" d="M21.1,0H10.5c-1.7,0-3,1.4-3,3v4.5H2.9c-1.7,0-3,1.4-3,3v10.6c0,1.7,1.4,3,3,3h10.6c1.7,0,3-1.4,3-3v-4.5h4.5 c1.7,0,3-1.4,3-3V3C24.1,1.4,22.7,0,21.1,0z M14.3,21.1c0,0.5-0.3,0.8-0.8,0.8H2.9c-0.5,0-0.8-0.3-0.8-0.8V10.6 c0-0.5,0.3-0.8,0.8-0.8h4.5v3.8c0,1.7,1.4,3,3,3h3.8V21.1z M14.3,14.3h-3.8c-0.5,0-0.8-0.3-0.8-0.8V9.8h3.8c0.5,0,0.8,0.3,0.8,0.8 V14.3z M21.8,13.6c0,0.5-0.3,0.8-0.8,0.8h-4.5v-3.8c0-1.7-1.4-3-3-3H9.7V3c0-0.5,0.3-0.8,0.8-0.8h10.6c0.5,0,0.8,0.3,0.8,0.8V13.6z" /></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const blockProps = useBlockProps.save();
        const TagName = attributes.tagName;

        //===> Render Alignment <===//
        if (attributes.isFlexbox) {
            blockProps.className += ' flexbox';
            if (attributes.flex_align) blockProps.className +=` ${attributes.flex_align}`;
        }

        //===> Render Color <===//
        if (attributes.color) blockProps.className += ` ${attributes.color}`;

        //===> Render Background <===//
        if (attributes.background) {
            //===> Image Background <===//
            if (attributes.bg_type === 'image') {
                blockProps.className += ` px-media`;
                blockProps["data-src"] = attributes.background;
            }

            //===> Name Background <===//
            else blockProps.className += ` ${attributes.background}`;

            //===> Background Rotation <===//
            if (attributes.bg_rotate) blockProps.className += ` ${attributes.bg_rotate}`;
        }

        //===> Render ID <===//
        if (attributes.id) blockProps['id'] = attributes.id;

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