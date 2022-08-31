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
    icon : <svg viewBox="0 0 640 512"><path d="M96 470h448V46H96v424zM32 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32s32-14.3 32-32V128c0-17.7-14.3-32-32-32zm576 0c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32s32-14.3 32-32V128c0-17.7-14.3-32-32-32z"/></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const blockProps = useBlockProps.save();
        const TagName = attributes.tagName;
        let container_names = '';

        //===> Render Size <===//
        if (attributes.size) container_names += attributes.size;

        //===> Render Alignment <===//
        if (attributes.isFlexbox) {
            container_names += ' flexbox';
            if (attributes.flex_align) container_names +=` ${attributes.flex_align}`;
        }

        //===> Render Color <===//
        if (attributes.color) container_names += ` ${attributes.color}`;

        //===> Render Background <===//
        if (attributes.background) {
            //===> Image Background <===//
            if (attributes.bg_type === 'image') blockProps["data-src"] = attributes.background;
            //===> Name Background <===//
            else blockProps.className += ` ${attributes.background}`;
            //===> Background Rotation <===//
            if (attributes.bg_rotate) blockProps.className += ` ${attributes.bg_rotate}`;
        }

        //===> for Section Convert <===//
        if (!attributes.isSection) blockProps.className += ` ${container_names}`;

        //===> Render <===//
        return (
            <TagName {...blockProps}>
                {attributes.isSection ?
                    <div className={container_names}>
                        <InnerBlocks.Content />
                    </div>
                :
                    <InnerBlocks.Content />
                }
            </TagName>
        );
    }
});