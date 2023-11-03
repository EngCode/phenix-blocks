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
    icon  : <svg fill="none" viewBox="0 0 28 30"><path fill="#000" fillRule="evenodd" d="M14 29.334a5.17 5.17 0 01-2.6-.694l-7.92-4.573a5.235 5.235 0 01-2.6-4.507v-9.12c0-1.853 1-3.573 2.6-4.507L11.4 1.36a5.179 5.179 0 015.2 0l7.92 4.573c1.6.934 2.6 2.654 2.6 4.507v9.12c0 1.854-1 3.574-2.6 4.507L16.6 28.64a5.17 5.17 0 01-2.6.694zm0-26.667c-.546 0-1.106.146-1.6.426L4.48 7.667a3.208 3.208 0 00-1.6 2.773v9.12c0 1.134.614 2.2 1.6 2.774l7.92 4.573a3.192 3.192 0 003.2 0l7.92-4.573a3.209 3.209 0 001.6-2.774v-9.12c0-1.133-.613-2.2-1.6-2.773L15.6 3.093a3.268 3.268 0 00-1.6-.426zm0 12a4.108 4.108 0 01-4.107-4.107A4.108 4.108 0 0114 6.453a4.108 4.108 0 014.107 4.107A4.108 4.108 0 0114 14.667zm0-6.214c-1.16 0-2.107.947-2.107 2.107 0 1.16.947 2.107 2.107 2.107 1.16 0 2.107-.947 2.107-2.107 0-1.16-.947-2.107-2.107-2.107zm4.334 12.76c0 .547.453 1 1 1 .546 0 1-.453 1-1 0-2.946-2.84-5.346-6.334-5.346-3.493 0-6.333 2.4-6.333 5.346 0 .547.453 1 1 1 .547 0 1-.453 1-1 0-1.84 1.947-3.346 4.333-3.346 2.387 0 4.334 1.506 4.334 3.346z" clipRule="evenodd"/></svg>,
    /**===> @see ./edit.js <===*/
    edit  : Edit,
    save  : () => null
});