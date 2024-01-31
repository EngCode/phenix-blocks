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
import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';

//====> Attributes Renderers <====//
import OptionsRenderer from "../px-controls/logic/renderer-v1";

//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg fill="none" viewBox="0 0 32 32"><path fill="#000" fillRule="evenodd" d="M6 30h20a4 4 0 004-4v-3.6h-4v1.267a3 3 0 01-3 3H9a3 3 0 01-3-3v-.717a1.358 1.358 0 01-.769-.55H2V26a4 4 0 004 4zm2-14.665V9.4a1 1 0 011-1h14a1 1 0 011 1v.752a1.354 1.354 0 00-.6.605l-2.666 5.364c-.827 1.663-3.256 1.581-3.966-.133-1.554-3.746-6.742-4.04-8.768-.653zm0 6.103l2.266-4.559c.826-1.663 3.256-1.582 3.966.133 1.606 3.872 7.094 4.055 8.961.3L24 15.687v7.979a1 1 0 01-1 1H9a1 1 0 01-1-1v-2.23zm18-9.705h4V6a4 4 0 00-4-4H6a4 4 0 00-4 4v5.733h4V9.4a3 3 0 013-3h14a3 3 0 013 3v2.333zM6 32a6 6 0 01-6-6V6a6 6 0 016-6h20a6 6 0 016 6v20a6 6 0 01-6 6H6z" clipRule="evenodd"/></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const TagName = attributes.tagName;
        const renderProps = OptionsRenderer({attributes: attributes, blockProps: useBlockProps.save()});
        const blockProps = renderProps.blockProps;

        //===> Layout Options <===//
        if (!attributes.isSection) blockProps.className += `${renderProps.container.className}`;

        //===> Render <===//
        return (
            <TagName {...blockProps}>
                {attributes.isSection ?
                    <div className={renderProps.container.className}>
                        <InnerBlocks.Content />
                    </div>
                :
                    <InnerBlocks.Content />
                }
            </TagName>
        );
    }
});