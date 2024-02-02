/*
 * ===> 01 - Block Data
 * ===> 02 - WordPress Modules
 * ===> 03 - Register Block
 * ===> 03 - Block Save Mode [Output]
*/

//===> Modules <===//
import Edit from './edit';
import {__} from '@wordpress/i18n';
import metadata from './block.json';
import {registerBlockType} from '@wordpress/blocks';
import {RichText, useBlockProps} from '@wordpress/block-editor';

//====> Attributes Renderers <====//
const OptionsRenderer = window.PhenixBlocks.OptionsRenderer;

//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg viewBox="0 0 24 24"><path fill="#1E252B" d="M0,0v2.2h24V0H0z M12,12.8h12v-2.2H12V12.8z M0,24h24v-2.2H0V24z M6,12c0-1.7-1.4-3-3-3s-3,1.3-3,3s1.4,3,3,3	S6,13.7,6,12z" /></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const renderProps = OptionsRenderer({attributes: attributes, blockProps: useBlockProps.save()});
        const blockProps = renderProps.blockProps;
        const TagName = attributes.tagName;

        //===> Layout Options <===//
        blockProps.className += `${renderProps.container.className}`;

        //===> Render <===//
        return (<RichText.Content {...blockProps} tagName={TagName} value={attributes.content} />);
    }
});