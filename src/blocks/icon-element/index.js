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
    icon : <svg fill="none" viewBox="0 0 32 32"><path fill="#1E1E1E" d="M16 0C7.067 0 0 7.067 0 16s7.067 16 16 16 16-7.067 16-16S24.933 0 16 0zm0 2.667c7.333 0 13.333 6 13.333 13.333v.133c-2.533-1.466-5.866-3.066-6-3.2-.4-.133-.933-.133-1.466.134l-5.2 3.733-6-2c-.4-.133-.667 0-1.067.133L3.067 18.8c-.134-.933-.4-1.733-.4-2.667 0-7.466 6-13.466 13.333-13.466z"/></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Render <===//
        return (<></>);
    }
});