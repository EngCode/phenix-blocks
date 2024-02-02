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
import {RichText, useBlockProps, InnerBlocks} from '@wordpress/block-editor';

//====> Attributes Renderers <====//
const OptionsRenderer = window.PhenixBlocks.OptionsRenderer;

//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg x="0" y="0" focusable="false" version="1.1" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24"><path d="M0,0v2.2h24V0H0z M12,12.8h12v-2.2H12V12.8z M0,24h24v-2.2H0V24z M6,12c0-1.7-1.4-3-3-3s-3,1.3-3,3s1.4,3,3,3	S6,13.7,6,12z" className="st0" /></svg>,

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
        if (attributes.type === "list-custom") blockProps.className += " reset-list";

        //===> Render <===//
        const RenderElement = () => {
            //===> Wrapped in Link
            if (attributes.style.isLink) {
                //===> Link Properties <===//
                let linkProps = {};

                //===> Remove Target & Rel <===//
                if(blockProps['target']) {
                    blockProps['target'] = null;
                    linkProps.target = blockProps['target'];
                } else if(blockProps['rel']) {
                    blockProps['rel'] = null;
                    linkProps.rel = !blockProps['target'] ? blockProps['rel'] : "noopener";
                }

                if (attributes.style.url) blockProps.className.replace(attributes.style.url, "");

                //===> Render <===//
                return <a {...linkProps} class="display-block color-inherit tx-link-wrapper" href={attributes.style.url || "#none"}>
                    <RichText.Content {...blockProps} tagName={TagName} value={attributes.content} />
                </a>;
            } else {
                return <RichText.Content {...blockProps} tagName={TagName} value={attributes.content} />;
            }
        }

        //===> Render <===//
        return (<>
            {attributes.type === "list" ?
                <RichText.Content {...blockProps} multiline="li" tagName={"ul"} value={attributes.content} />
            : attributes.type === "list-numbers" ?
                <RichText.Content {...blockProps} multiline="li" tagName={"ol"} value={attributes.content} />
            : attributes.type === "list-custom" ?
                <ul {...blockProps}>
                    <InnerBlocks.Content />
                </ul>
            : 
                RenderElement()
            }
        </>);
    }
});