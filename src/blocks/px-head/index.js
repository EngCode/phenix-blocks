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
    icon  : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M296 64C282.8 64 272 74.75 272 88V224h-224V88C48 74.75 37.25 64 24 64S0 74.75 0 88v336C0 437.3 10.75 448 24 448s24-10.75 24-24V272h224v152c0 13.25 10.75 24 24 24S320 437.3 320 424V88C320 74.75 309.3 64 296 64zM552 400h-48V88.02c0-8.842-4.875-16.97-12.69-21.15C483.5 62.65 474 63.12 466.7 68.05l-72 47.1c-11.03 7.344-14 22.25-6.656 33.28c7.375 11.03 22.22 13.97 33.28 6.656L456 132.9v267.1h-48c-13.25 0-24 10.75-24 24C384 437.3 394.8 448 408 448h143.1C565.2 448 576 437.3 576 424C576 410.8 565.3 400 552 400z"/></svg>,
    /**===> @see ./edit.js <===*/
    edit  : Edit,
    save  : () => null
});