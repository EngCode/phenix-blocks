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
import { registerBlockType } from '@wordpress/blocks';

//===> Register Block <===//
registerBlockType(metadata.name, {
    title      : metadata.title,
    category   : metadata.category,
    attributes : metadata.attributes,
    icon  : <svg fill="none" viewBox="0 0 32 32"><path fill="#000" fillRule="evenodd" d="M16 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14zM0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16zm9-6a1 1 0 100 2h15a1 1 0 100-2H9zm-1 6a1 1 0 011-1h15a1 1 0 110 2H9a1 1 0 01-1-1zm1 4a1 1 0 100 2h15a1 1 0 100-2H9z" clipRule="evenodd"/></svg>,
    /**===> @see ./edit.js <===*/
    edit  : Edit,
    save  : () => null
});