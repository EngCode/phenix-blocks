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
    icon  : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M232 256C232 242.7 242.7 232 256 232C269.3 232 280 242.7 280 256C280 269.3 269.3 280 256 280C242.7 280 232 269.3 232 256zM348.6 122.9C373.6 114.6 397.4 138.4 389.1 163.4L340.2 309.9C335.5 324.2 324.2 335.5 309.9 340.2L163.4 389.1C138.4 397.4 114.6 373.6 122.9 348.6L171.8 202.1C176.5 187.8 187.8 176.5 202.1 171.8L348.6 122.9zM358.7 153.3L212.2 202.1C207.5 203.7 203.7 207.5 202.1 212.2L153.3 358.7L299.8 309.9C304.5 308.3 308.3 304.5 309.9 299.8L358.7 153.3zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480z"/></svg>,
    /**===> @see ./edit.js <===*/
    edit  : Edit,
    save  : () => null
});