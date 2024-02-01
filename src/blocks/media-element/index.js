/*
 * ===> 01 - Modules
 * ===> 02 - Register Block
 * ===> 03 - Block Save Mode [Output]
*/

//===> Modules <===//
import Edit from './edit';
import {__} from '@wordpress/i18n';
import metadata from './block.json';
import {registerBlockType} from '@wordpress/blocks';
import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';


//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg fill="none" viewBox="0 0 32 32"><path fill="#1E1E1E" d="M28.4 0H3.6C1.6 0 0 1.6 0 3.6v24.933C0 30.4 1.6 32 3.6 32h24.933c2 0 3.6-1.6 3.6-3.6V3.6C32 1.6 30.4 0 28.4 0zm.933 28.4c0 .533-.4.933-.933.933H3.6a.911.911 0 01-.933-.933V12.133l8.4-9.466h17.466c.4 0 .8.4.8.933v24.8zM12.4 21.333L21.333 16 12.4 10.667v10.666z"/></svg>,
    
    /**===> @see ./edit.js <===*/
    edit : Edit,
    
    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //====> Attributes Renderers <====//
        const OptionsRenderer = window.PhenixBlocks.OptionsRenderer;

        //===> Get Block Properties <===//
        const renderProps = OptionsRenderer({attributes: attributes, blockProps: useBlockProps.save(), isSave: true});
        const blockProps = renderProps.blockProps;
        const TagName = attributes.style.isLink || attributes.isLightBox ?  "a" : 'div';

        //===> Links and Lightbox URL <===//
        if (attributes.style.isLink || attributes.isLightBox) blockProps.href = attributes.url || "#";

        //===> Layout Options <===//
        blockProps.className += `${renderProps.container.className}`;

        //===> Default Options <===//
        if(!attributes.setting.type) blockProps['data-type'] = "image";
        if(!attributes.setting.src) blockProps.style.backgroundImage = "https://via.placeholder.com/1024x768.webp";
        if(!attributes.setting.size) blockProps.className += " ratio-4x3";

        //===> Render <===//
        return (<TagName {...blockProps}>{attributes.style['inner-blocks'] === true ? <InnerBlocks.Content /> : null}</TagName>);
    }
});