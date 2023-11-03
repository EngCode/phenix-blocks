/*
 * ===> 01 - Modules
 * ===> 02 - Register Block
 * ===> 03 - Block Save Mode [Output]
*/

//===> Modules <===//
import Edit from './edit';
import {__} from '@wordpress/i18n';
import metadata from './block.json';
import {useEffect} from '@wordpress/element';
import {registerBlockType} from '@wordpress/blocks';
import {InnerBlocks, useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg fill="none" viewBox="0 0 32 32"><path fill="#1E1E1E" d="M28.4 0H3.6C1.6 0 0 1.6 0 3.6v24.933C0 30.4 1.6 32 3.6 32h24.933c2 0 3.6-1.6 3.6-3.6V3.6C32 1.6 30.4 0 28.4 0zm.933 28.4c0 .533-.4.933-.933.933H3.6a.911.911 0 01-.933-.933V12.133l8.4-9.466h17.466c.4 0 .8.4.8.933v24.8zM18.667 11.6l4.4 4.4-4.4 4.933 2 1.734 6-6.667L20.4 9.733 18.667 11.6zm-5.334 0L11.6 9.733 5.333 16l6.267 6.8 2-1.733L8.933 16l4.4-4.4z"/></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : () => null
});