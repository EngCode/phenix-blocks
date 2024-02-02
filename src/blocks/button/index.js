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
import {registerBlockType} from '@wordpress/blocks';
import {useBlockProps} from '@wordpress/block-editor';


//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg fill="none" viewBox="0 0 32 30"><path fill="#000" d="M5.895 4.333c-.93 0-1.684.776-1.684 1.734 0 .957.754 1.733 1.684 1.733h20.21c.93 0 1.684-.776 1.684-1.733 0-.958-.754-1.734-1.684-1.734H5.895z"/><path fill="#000" fillRule="evenodd" d="M2.526 0C1.131 0 0 1.164 0 2.6v6.933c0 1.436 1.131 2.6 2.526 2.6h26.948c1.395 0 2.526-1.164 2.526-2.6V2.6C32 1.164 30.869 0 29.474 0H2.526zm26.948 1.733H2.526a.855.855 0 00-.842.867v6.933c0 .479.377.867.842.867h26.948a.855.855 0 00.842-.867V2.6a.855.855 0 00-.842-.867z" clipRule="evenodd"/><path fill="#000" d="M5.053 23.933c0-.957.754-1.733 1.684-1.733.93 0 1.684.776 1.684 1.733 0 .958-.754 1.734-1.684 1.734-.93 0-1.684-.776-1.684-1.734zM11.79 22.2c-.93 0-1.685.776-1.685 1.733 0 .958.754 1.734 1.684 1.734h13.474c.93 0 1.684-.776 1.684-1.734 0-.957-.754-1.733-1.684-1.733H11.79z"/><path fill="#000" fillRule="evenodd" d="M2.526 17.867C1.131 17.867 0 19.03 0 20.467V27.4C0 28.836 1.131 30 2.526 30h26.948C30.869 30 32 28.836 32 27.4v-6.933c0-1.436-1.131-2.6-2.526-2.6H2.526zM29.474 19.6H2.526a.855.855 0 00-.842.867V27.4c0 .479.377.867.842.867h26.948a.855.855 0 00.842-.867v-6.933a.855.855 0 00-.842-.867z" clipRule="evenodd"/></svg>,
    
    /**===> @see ./edit.js <===*/
    edit : Edit,
    
    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //====> Attributes Renderers <====//
        const OptionsRenderer = window.PhenixBlocks.OptionsRenderer;

        //===> Render Block Properties <===//
        const renderProps = OptionsRenderer({
            hasColors: true,
            attributes: attributes,
            blockProps: useBlockProps.save()
        });

        //===> Get Block Properties <===//
        const blockProps = renderProps.blockProps;
        const TagName = attributes.isLink ? "a" : "button";

        //===> Add Layout Options <===//
        blockProps.className += ` ${renderProps.container.className}`;        
        //===> Add Button Title <===//
        attributes.type.includes("square") ? blockProps.title = attributes.label : null;
        //===> Add Links/Lightbox URL <===//
        if (attributes.isLink || attributes.isLightBox) blockProps.href = attributes.url || "#none";

        //===> Render <===//
        return (<TagName { ...blockProps }>{!attributes.type.includes("square") ? attributes.label : ""}</TagName>);
    }
});