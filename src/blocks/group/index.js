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
    icon : <svg fill="none" viewBox="0 0 32 32"><path fill="#000" fillRule="evenodd" d="M16.2 4.5H23A4.5 4.5 0 0127.5 9v6.8a4.5 4.5 0 01-4.5 4.5h-.2v-4.1a7 7 0 00-7-7h-4.1V9a4.5 4.5 0 014.5-4.5zm-7 4.7V9a7 7 0 017-7H23a7 7 0 017 7v6.8a7 7 0 01-7 7h-.2v.2a7 7 0 01-7 7H9a7 7 0 01-7-7v-6.8a7 7 0 017-7h.2zm11.1 13.6v.2a4.5 4.5 0 01-4.5 4.5H9A4.5 4.5 0 014.5 23v-6.8A4.5 4.5 0 019 11.7h.2v4.1a7 7 0 007 7h4.1zm0-2.5h-4.1a4.5 4.5 0 01-4.5-4.5v-4.1h4.1a4.5 4.5 0 014.5 4.5v4.1z" clipRule="evenodd"/></svg>,
    
    /**===> @see ./edit.js <===*/
    edit : Edit,
    
    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //====> Attributes Renderers <====//
        const OptionsRenderer = window.PhenixBlocks.OptionsRenderer;

        //===> Get Block Properties <===//
        const renderProps = OptionsRenderer({attributes: attributes, blockProps: useBlockProps.save()});
        const blockProps = renderProps.blockProps;
        const TagName = attributes.style.isLink ? "a" : attributes.tagName;

        //===> Layout Options <===//
        blockProps.className += `${renderProps.container.className}`;

        //===> Add Links/Lightbox URL <===//
        if (attributes.style.isLink) {
            blockProps.href = attributes.style.url || "#none";
            blockProps.className.replace(attributes.style.url, "");
        }

        //===> Render <===//
        return (
            <TagName {...blockProps}>
                <InnerBlocks.Content />
            </TagName>
        );
    }
});