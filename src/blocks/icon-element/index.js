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
import {useBlockProps} from '@wordpress/block-editor';

//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg fill="none" viewBox="0 0 32 32"><path fill="#1E1E1E" d="M16 0C7.067 0 0 7.067 0 16s7.067 16 16 16 16-7.067 16-16S24.933 0 16 0zm0 2.667c7.333 0 13.333 6 13.333 13.333v.133c-2.533-1.466-5.866-3.066-6-3.2-.4-.133-.933-.133-1.466.134l-5.2 3.733-6-2c-.4-.133-.667 0-1.067.133L3.067 18.8c-.134-.933-.4-1.733-.4-2.667 0-7.466 6-13.466 13.333-13.466z"/></svg>,
    
    /**===> @see ./edit.js <===*/
    edit : Edit,
    
    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //====> Attributes Renderers <====//
        const OptionsRenderer = window.PhenixBlocks.OptionsRenderer;

        //===> Get Block Properties <===//
        const renderProps = OptionsRenderer({attributes: attributes, blockProps: useBlockProps.save(), isSave: true});
        const blockProps = renderProps.blockProps;
        const TagName = attributes.style.isLink ?  "a" : 'i';
        let iconURl = "https://placehold.co/50x50.webp";

        //===> Set Default Values <===//
        blockProps.className += ` tx-align-center inline-block`;
        blockProps.className += ` ${renderProps.container.className}`;
        if (attributes.style.isLink) blockProps.href = attributes.style.url || "#";
        if (attributes.type === "font" && !attributes.style.icon) blockProps.className += ` far fa-icons`;

        const iconStyle = {
            height: attributes.style.dimensions ? Phenix(document).toREM(attributes.style.dimensions) : Phenix(document).toREM(42),
            lineHeight: attributes.style.dimensions ? Phenix(document).toREM(attributes.style.dimensions) : Phenix(document).toREM(42)
        }
    
        if (!attributes.style.freeWidth) {
            iconStyle.width = attributes.style.dimensions ? Phenix(document).toREM(attributes.style.dimensions) : Phenix(document).toREM(42);
        }

        if (blockProps.style) {
            blockProps.style = { ...blockProps.style, ...iconStyle };
        } else {
            blockProps.style = iconStyle;
        }

        //===> Render <===//
        return (<TagName {...blockProps}>{attributes.type === "custom" ? 
            <img alt="icon" className='fluid' src={attributes.style.icon?.includes("http") ? attributes.style.icon : iconURl} />
        : null}</TagName>);
    }
});