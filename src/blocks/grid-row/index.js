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
    icon : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M176 32C202.5 32 224 53.49 224 80V176C224 202.5 202.5 224 176 224H80C53.49 224 32 202.5 32 176V80C32 53.49 53.49 32 80 32H176zM176 288C202.5 288 224 309.5 224 336V432C224 458.5 202.5 480 176 480H80C53.49 480 32 458.5 32 432V336C32 309.5 53.49 288 80 288H176zM288 80C288 53.49 309.5 32 336 32H432C458.5 32 480 53.49 480 80V176C480 202.5 458.5 224 432 224H336C309.5 224 288 202.5 288 176V80zM384 272C397.3 272 408 282.7 408 296V360H472C485.3 360 496 370.7 496 384C496 397.3 485.3 408 472 408H408V472C408 485.3 397.3 496 384 496C370.7 496 360 485.3 360 472V408H296C282.7 408 272 397.3 272 384C272 370.7 282.7 360 296 360H360V296C360 282.7 370.7 272 384 272z"/></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const blockProps = useBlockProps.save();
        const screens = ["md", "lg", "xl"];
        blockProps.className += ' row';

        //===> Properties <===//
        if(!attributes.flexbox.slider) {
            if (attributes.flexbox.align)  blockProps.className += ` ${attributes.flexbox.align.trim()}`;
            if (attributes.flexbox.flow)   blockProps.className += ` ${attributes.flexbox.flow}`;
            if (attributes.flexbox.nowrap) blockProps.className += ` ${attributes.flexbox.nowrap}`;
            if (attributes.flexbox.masonry) blockProps.className += ` ${attributes.flexbox.masonry}`;
            if (attributes.flexbox.equals && attributes.flexbox.cols) blockProps.className += ` row-cols-${attributes.flexbox.cols > 0 ? attributes.flexbox.cols : "auto"}`;
            //===> Responsive <===//
            screens.forEach(screen => {
                if (attributes.flexbox[`align-${screen}`]) blockProps.className += ` ${attributes.flexbox[`align-${screen}`]}`;
                if (attributes.flexbox[`flow-${screen}`]) blockProps.className += ` ${attributes.flexbox[`flow-${screen}`]}`;
                if (attributes.flexbox[`nowrap-${screen}`]) blockProps.className += ` ${attributes.flexbox[`nowrap-${screen}`]}`;
                if (attributes.flexbox[`masonry-${screen}`]) blockProps.className += ` ${attributes.flexbox[`masonry-${screen}`]}`;
                if (attributes.flexbox.equals && attributes.flexbox[`cols-${screen}`]) blockProps.className += ` row-cols-${screen}-${attributes.flexbox[`cols-${screen}`] > 0 ? attributes.flexbox[`cols-${screen}`] : "auto"}`;
            });
        }

        //===> Slider <===//
        if (attributes.flexbox.slider) {
            //===> Add Slider Name <===//
            blockProps.className += ' px-slider';

            //===> Set Other Options <===//
            if (attributes.slider.type) blockProps['data-type'] = attributes.slider.type;
            if (attributes.slider.steps) blockProps['data-steps'] = attributes.slider.steps;
            if (attributes.slider.speed) blockProps['data-speed'] = attributes.slider.speed;
            if (attributes.slider.duration) blockProps['data-duration'] = attributes.slider.duration;
            if (attributes.slider.controls) blockProps['data-controls'] = 1;
            if (attributes.slider.pagination) blockProps['data-pagination'] = 1;
            if (attributes.slider.hasOwnProperty('autoplay')) {
                if (attributes.slider.autoplay === true) {blockProps['data-autoplay'] = 1;}
                else {blockProps['data-autoplay'] = 0;}
            }
            //===> Responsive <===//
            if (attributes.flexbox.cols) blockProps[`data-items`] = attributes.flexbox.cols > 0 ? attributes.flexbox.cols : 1;
            screens.forEach(screen => {
                if (attributes.flexbox[`cols-${screen}`] && attributes.flexbox[`cols-${screen}`] > 0) blockProps[`data-${screen}`] = attributes.flexbox[`cols-${screen}`];
            });
        }

        //===> Style Options <===//
        if (attributes.style || attributes.typography?.color) {
            //===> Text Color <===//
            if (attributes.typography?.color) blockProps.className += ` ${attributes.typography.color}`;

            //===> Render Background <===//
            if (attributes.style?.background?.value) {
                //===> Image Background <===//
                if (attributes.style.background.type === 'image') {
                    blockProps.className += ` px-media`;
                    blockProps["data-src"] = attributes.style.background.value;
                }

                //===> Name Background <===//
                else blockProps.className += ` ${attributes.style.background.value}`;

                //===> Background Rotation <===//
                if (attributes.style.background.rotate) blockProps.className += ` ${attributes.style.background.rotate}`;
            }

            //===> Position <===//
            if (attributes.style?.position) {
                //===> if its Absolute Sticky <===//
                if (attributes.style.position === "sticky-absolute") {
                    blockProps["data-sticky"] = ` ${attributes.style.position}`;
                    blockProps.className += ` position-rv fluid z-index-header`;
                }
                //===> Otherwise is Class Name <===//
                else { blockProps.className += ` ${attributes.style.position}`; }
            }
        }

        //===> Render <===//
        return (
            <div {...blockProps}>
                <InnerBlocks.Content />
            </div>
        );
    }
});