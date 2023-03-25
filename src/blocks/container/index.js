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
        const screens = ["md", "lg", "xl"];
        const blockProps = useBlockProps.save();
        const TagName = attributes.tagName;
        const container = {className: attributes.isFlexbox ? " flexbox" : ''};

        //===> General Options <===//
        if (attributes.id) blockProps['id'] = attributes.id;
        if (attributes.size) container.className += ` ${attributes.size}`;

        //===> Style Options <===//
        if (attributes.style || attributes.typography?.color) {
            //===> Effects <===//
            if (attributes.style.display) container.className += ` ${attributes.style.display.toString().replace(',', ' ')}`;
            if (attributes.style.overlapped) container.className += ` ${attributes.style.overlapped}`;

            //===> Text Color <===//
            if(attributes.typography?.color) container.className += ` ${attributes.typography.color}`;

            //===> Render Background <===//
            if (attributes.style?.background?.value) {
                const background = attributes.style.background;
                //===> Image Background <===//
                if (background.type === 'image') {
                    blockProps.className += ` px-media`;
                    blockProps["data-src"] = background.value;
                    if (attributes.style.parallax) blockProps.className += ` ${attributes.style.parallax}`;
                }

                //===> Name Background <===//
                else blockProps.className += ` ${background.value}`;

                //===> Background Rotation <===//
                if (background.rotate) blockProps.className += ` ${background.rotate}`;
            }

            //===> Position <===//
            if (attributes.style?.position) {
                //===> if its Absolute Sticky <===//
                if (attributes.style.position === "sticky-absolute") {
                    blockProps["data-sticky"] = `absolute`;
                    blockProps.className += ` position-rv fluid z-index-header`;
                }
                //===> Otherwise is Class Name <===//
                else {
                    blockProps.className += ` ${attributes.style.position}`;
                }
            }
        }

        //===> Layout Options <===//
        if (attributes.isFlexbox) {
            if (attributes.flexbox.align)  container.className += ` ${attributes.flexbox.align.trim()}`;
            if (attributes.flexbox.flow)   container.className += ` ${attributes.flexbox.flow}`;
            if (attributes.flexbox.nowrap) container.className += ` ${attributes.flexbox.nowrap}`;
            if (attributes.flexbox.stacked) container.className += ` ${attributes.flexbox.stacked}`;
            if (attributes.flexbox['animated-childs']) blocksProp.className += ` ${attributes.flexbox['animated-childs']}`;
            //===> Responsive <===//
            screens.forEach(screen => {
                if (attributes.flexbox[`align-${screen}`]) container.className += ` ${attributes.flexbox[`align-${screen}`]}`;
                if (attributes.flexbox[`flow-${screen}`]) container.className += ` ${attributes.flexbox[`flow-${screen}`]}`;
                if (attributes.flexbox[`nowrap-${screen}`]) container.className += ` ${attributes.flexbox[`nowrap-${screen}`]}`;
                if (attributes.flexbox[`masonry-${screen}`]) container.className += ` ${attributes.flexbox[`masonry-${screen}`]}`;
            });
        }

        //===> Typography Options <===//
        if (attributes.typography) {
            const typography = attributes.typography;
            if(typography.size) container.className += ` ${typography.size.toString().replace(',', ' ')}`;
            if(typography.weight) container.className += ` ${typography.weight}`;
            if(typography.align) container.className += ` ${typography.align}`;
        }

        //===> General Options : for Section Convert <===//
        if (!attributes.isSection) blockProps.className += ` ${container.className}`;

        //===> Render <===//
        return (
            <TagName {...blockProps}>
                {attributes.isSection ?
                    <div className={container.className}>
                        <InnerBlocks.Content />
                    </div>
                :
                    <InnerBlocks.Content />
                }
            </TagName>
        );
    }
});