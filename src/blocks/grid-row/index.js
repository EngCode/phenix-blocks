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
        const TagName = attributes.tagName;

        //===> Set Properties <===//
        blockProps.className += ' row';

        //===> Alignment <===//
        if (attributes.flex_align) blockProps.className +=` ${attributes.flex_align}`;

        //===> Masonry <===//
        if (attributes.isMasonry) blockProps.className += ' px-masonry';

        //===> Columns <===//
        if (attributes.isEqual && attributes.columns) blockProps.className += attributes.columns;

        //===> Slider <===//
        if (attributes.isSlider) {
            //===> Add Slider Name <===//
            blockProps.className += ' px-slider';

            //===> Items Info <===//
            let columns_names = attributes.columns.split(' ');
            columns_names.forEach(name => {
                //===> Medium Screen <===//
                if (name.includes('-md')) blockProps['data-md'] = name.replace('row-cols-md-','');
                //===> Large Screen <===//
                else if (name.includes('-lg')) blockProps['data-lg'] = name.replace('row-cols-lg-','');
                //===> xLarge Screen <===//
                else if (name.includes('-xl')) blockProps['data-xl'] = name.replace('row-cols-xl-','');
                //===> Small Screen <===//
                else if (name.includes('row-cols')) blockProps['data-items'] = name.replace('row-cols-','');
            });

            //===> Set Other Options <===//
            if (attributes.controls) blockProps['data-controls'] = 1;
            if (attributes.pagination) blockProps['data-pagination'] = 1;
        }

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