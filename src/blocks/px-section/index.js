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
    icon : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M96 384h448V128H96V384zM32 96C14.34 96 0 110.3 0 128v256c0 17.66 14.34 32 32 32s32-14.34 32-32V128C64 110.3 49.66 96 32 96zM608 96c-17.66 0-32 14.34-32 32v256c0 17.66 14.34 32 32 32s32-14.34 32-32V128C640 110.3 625.7 96 608 96z" /></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const blockProps = useBlockProps.save();
        const TagName = attributes.tagName;

        //===> .Check Background Image. <===//
        if (attributes.px_bg_type === 'image') blockProps["data-src"] = attributes.px_bg;

        //===> Render <===//
        return (
            <TagName { ...blockProps }>
                {attributes.container ? 
                    <div className={`${attributes.size}${attributes.container_flex ? ' flexbox' : ''} ${attributes.flex_align}`}>
                        <InnerBlocks.Content />
                    </div>
                : 
                    <InnerBlocks.Content />
                }
            </TagName>
        );
    }
});