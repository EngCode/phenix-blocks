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
    icon : <svg viewBox="0 0 640 512"><path d="M96 470h448V46H96v424zM32 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32s32-14.3 32-32V128c0-17.7-14.3-32-32-32zm576 0c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32s32-14.3 32-32V128c0-17.7-14.3-32-32-32z"/></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const blockProps = useBlockProps.save();
        const TagName = attributes.tagName;

        let container = attributes.isFlexbox ? "flexbox " : '',
            background = attributes.style.background,
            typography = attributes.typography;

        //===> Container Options <===//
        if (attributes.id) blockProps['id'] = attributes.id;
        if (attributes.size) container += attributes.size;
        if (attributes.isHidden) container += ' hidden';

        //===> Flexbox Properties <===//
        if (attributes.isFlexbox) {
            if (attributes.flexbox.align)  container += ` ${attributes.flexbox.align}`;
            if (attributes.flexbox.flow)   container += ` ${attributes.flexbox.flow}`;
            if (attributes.flexbox.nowrap) container += ` ${attributes.flexbox.nowrap}`;
            if (attributes.flexbox.stacked) container += ` ${attributes.flexbox.stacked}`;
        }

        //===> Typography Properties <===//
        if (typography) {
            if(typography.size) container += ` ${typography.size}`;
            if(typography.color) container += ` ${typography.color}`;
            if(typography.weight) container += ` ${typography.weight}`;
            if(typography.align) container += ` ${typography.align}`;
        }

        //===> Render Background <===//
        if (background && background.value) {
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

        //===> for Section Convert <===//
        if (!attributes.isSection) blockProps.className += ` ${container}`;

        //===> Render <===//
        return (
            <TagName {...blockProps}>
                {attributes.isSection ?
                    <div className={container}>
                        <InnerBlocks.Content />
                    </div>
                :
                    <InnerBlocks.Content />
                }
            </TagName>
        );
    }
});