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
import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';

//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg fill="none" viewBox="0 0 31 28"><path fill="#000" fillRule="evenodd" d="M4 0a4 4 0 00-4 4v5a4 4 0 004 4h5a4 4 0 004-4V4a4 4 0 00-4-4H4zm20 2h1a4 4 0 014 4v1a4 4 0 01-4 4h-1a4 4 0 01-4-4V6a4 4 0 014-4zm-6 4a6 6 0 016-6h1a6 6 0 016 6v1a6 6 0 01-6 6h-1a6 6 0 01-6-6V6zm7 11a1 1 0 00-1 1v3h-3a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3v-3a1 1 0 00-1-1zM4 15a4 4 0 00-4 4v5a4 4 0 004 4h5a4 4 0 004-4v-5a4 4 0 00-4-4H4z" clipRule="evenodd"/></svg>,
    
    /**===> @see ./edit.js <===*/
    edit : Edit,
    
    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //====> Attributes Renderers <====//
        const OptionsRenderer = window.PhenixBlocks.OptionsRenderer;

        //===> Get Block Properties <===//
        const renderProps = OptionsRenderer({isGrid: true, isSave: true, attributes: attributes, blockProps: useBlockProps.save()});
        const blockProps = renderProps.blockProps;

        //===> Set Props <===//
        blockProps.className += ' row';
        blockProps.className += ` ${renderProps.container.className.trim()}`;

        //===> if is Slider and is Fade or one Slide per view disable flexbox <===//
        if (attributes.flexbox?.slider?.type === "fade") blockProps.className.replace('row', '');

        //===> Render <===//
        return (
            <div {...blockProps}>
                <InnerBlocks.Content />
            </div>
        );
    }
});