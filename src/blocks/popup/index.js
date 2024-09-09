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
import {InnerBlocks, useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg fill="none" viewBox="0 0 35 35"><path fill="#000" d="M32.949 16.512a1 1 0 102 0h-2zm-19.715 11.16l.875-.485a1 1 0 00-.875-.515v1zm3.101 5.591l-.875.485.875-.485zm2.307 0l.875.485-.875-.485zm3.101-5.591v-1a1 1 0 00-.874.515l.874.485zm13.206-4.185a1 1 0 00-2 0h2zm-8.672-8.137a1 1 0 000-2v2zm-17.576-2a1 1 0 100 2v-2zm9.904 7.58a1 1 0 000-2v2zm-9.904-2a1 1 0 000 2v-2zM33.949 7.678a1 1 0 000-2v2zm-32.92-2a1 1 0 000 2v-2zm33.92 10.834V3.818h-2v12.694h2zm0-12.694a3.79 3.79 0 00-3.79-3.79v2c.989 0 1.79.802 1.79 1.79h2zm-3.79-3.79H3.819v2h27.34v-2zm-27.34 0a3.79 3.79 0 00-3.79 3.79h2c0-.988.8-1.79 1.79-1.79v-2zm-3.79 3.79v19.669h2V3.818h-2zm0 19.669a5.185 5.185 0 005.184 5.185v-2a3.185 3.185 0 01-3.184-3.185h-2zm5.184 5.185h8.021v-2h-8.02v2zm7.147-.515l3.1 5.591 1.75-.97-3.101-5.591-1.75.97zm3.1 5.591c.884 1.593 3.174 1.593 4.057 0l-1.75-.97a.32.32 0 01-.557 0l-1.75.97zm4.057 0l3.1-5.591-1.748-.97-3.101 5.591 1.749.97zm2.226-5.076h8.021v-2h-8.02v2zm8.021 0a5.185 5.185 0 005.185-5.185h-2a3.185 3.185 0 01-3.185 3.185v2zM26.277 13.35H8.7v2h17.576v-2zm-7.672 5.58H8.7v2h9.904v-2zM33.949 5.678H1.029v2h32.92v-2zm.93-1.86a3.79 3.79 0 00-3.79-3.79v2c.989 0 1.79.802 1.79 1.79h2zM31.09.028a3.79 3.79 0 00-3.79 3.79h2c0-.988.802-1.79 1.79-1.79v-2zm-3.79 3.79a3.79 3.79 0 003.79 3.79v-2a1.79 1.79 0 01-1.79-1.79h-2zm3.79 3.79a3.79 3.79 0 003.79-3.79h-2a1.79 1.79 0 01-1.79 1.79v2zm-1.79-3.79a3.79 3.79 0 00-3.79-3.79v2c.989 0 1.79.802 1.79 1.79h2zM25.51.028a3.79 3.79 0 00-3.79 3.79h2c0-.988.802-1.79 1.79-1.79v-2zm-3.79 3.79a3.79 3.79 0 003.79 3.79v-2a1.79 1.79 0 01-1.79-1.79h-2zm3.79 3.79a3.79 3.79 0 003.79-3.79h-2a1.79 1.79 0 01-1.79 1.79v2z"/></svg>,
    
    /**===> @see ./edit.js <===*/
    edit : Edit,
    
    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //====> Attributes Renderers <====//
        const OptionsRenderer = window.PhenixBlocks.OptionsRenderer;

        //===> Get Block Properties <===//
        const renderProps = OptionsRenderer({attributes: attributes, blockProps: useBlockProps.save(), isSave: true});
        const blockProps = renderProps.blockProps;

        //===> Layout Options <===//
        blockProps.className += ` px-modal hidden ${renderProps.container.className}`;

        //===> Render <===//
        return (<div {...blockProps}>
            <InnerBlocks.Content />
        </div>);
    }
});