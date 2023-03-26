/*
 * ===> 01 - Block Data
 * ===> 02 - WordPress Modules
 * ===> 03 - Register Block
 * ===> 03 - Block Save Mode [Output]
*/

//===> Block Data <===//
import Edit from './edit';
import icon from './icon.svg';
import metadata from './block.json';

//===> WordPress Modules <===//
import { registerBlockType } from '@wordpress/blocks';

import {
    InnerBlocks,
    useBlockProps,
} from '@wordpress/block-editor';

//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.1 0H10.5c-1.7 0-3 1.4-3 3v4.5H2.9c-1.7 0-3 1.4-3 3v10.6c0 1.7 1.4 3 3 3h10.6c1.7 0 3-1.4 3-3v-4.5H21c1.7 0 3-1.4 3-3V3c.1-1.6-1.3-3-2.9-3zm-6.8 21.1c0 .5-.3.8-.8.8H2.9c-.5 0-.8-.3-.8-.8V10.6c0-.5.3-.8.8-.8h4.5v3.8c0 1.7 1.4 3 3 3h3.8v4.5zm0-6.8h-3.8c-.5 0-.8-.3-.8-.8V9.8h3.8c.5 0 .8.3.8.8v3.7zm7.5-.7c0 .5-.3.8-.8.8h-4.5v-3.8c0-1.7-1.4-3-3-3H9.7V3c0-.5.3-.8.8-.8h10.6c.5 0 .8.3.8.8v10.6z"/>
    </svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const blockProps = useBlockProps.save();
        const TagName = attributes.tagName;

        let background = attributes.style.background,
            typography = attributes.typography;

        //===> Flexbox Properties <===//
        if (attributes.isFlexbox) {
            blockProps.className += ` flexbox`;
            if (attributes.flexbox.align)  blockProps.className += ` ${attributes.flexbox.align}`;
            if (attributes.flexbox.flow)   blockProps.className += ` ${attributes.flexbox.flow}`;
            if (attributes.flexbox.nowrap) blockProps.className += ` ${attributes.flexbox.nowrap}`;
            if (attributes.flexbox.stacked) blockProps.className += ` ${attributes.flexbox.stacked}`;
        }

        //===> Typography Properties <===//
        if (typography) {
            if(typography.size) blockProps.className += ` ${typography.size}`;
            if(typography.color) blockProps.className += ` ${typography.color}`;
            if(typography.weight) blockProps.className += ` ${typography.weight}`;
            if(typography.align) blockProps.className += ` ${typography.align}`;
        }

        //===> Render Background <===//
        if (background?.value) {
            //===> Image Background <===//
            if (background.type === 'image') {
                blockProps.className += ` px-media`;
                blockProps["data-src"] = background.value;
            }

            //===> Name Background <===//
            else blockProps.className += ` ${background.value}`;

            //===> Background Rotation <===//
            if (background.rotate) blockProps.className += ` ${background.rotate}`;
        }

        //===> Render <===//
        return (
            <TagName {...blockProps}>
                <InnerBlocks.Content />
            </TagName>
        );
    }
});