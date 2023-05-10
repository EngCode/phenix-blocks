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
import {InnerBlocks, useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg fill="none" viewBox="0 0 32 27"><path fill="#1E1E1E" d="M18.526 6.75h-2.543c-1.06 0-2.105.506-2.678 1.181L11.79 3.375H6.956L2.93 15.188h2.846l1.246-3.376h4.767v6.75H3.367A3.382 3.382 0 010 15.188V3.376A3.382 3.382 0 013.368 0h11.79a3.382 3.382 0 013.368 3.375V6.75zm-7.562 3.375H7.562l1.684-4.944 1.718 4.944zm5.878-1.688h11.79A3.382 3.382 0 0132 11.813v11.812A3.382 3.382 0 0128.632 27h-11.79a3.382 3.382 0 01-3.368-3.375V11.812a3.382 3.382 0 013.368-3.374zm12.21 8.438v-1.822h-5.338V11.39H21.76v3.662h-5.339v1.822h2.156c.185 1.434.943 3.122 2.156 4.421-1.466.608-3.184 1.047-3.89 1.047-.018.033.37 1.636.336 2.463 1.415 0 3.722-.844 5.524-1.94 1.836 1.096 4.177 1.94 5.625 1.94-.033-.827.337-2.43.337-2.463-.724 0-2.51-.456-4.008-1.064 1.179-1.299 1.92-2.986 2.105-4.404h2.29zm-6.416 3.257c-.842-.776-1.432-1.907-1.701-3.257h3.52c-.287 1.35-.86 2.48-1.684 3.257l-.068.05s-.05-.033-.067-.05z"/></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Render <===//
        return (<></>);
    }
});