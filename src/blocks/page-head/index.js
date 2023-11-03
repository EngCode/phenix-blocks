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
    icon  : <svg fill="none" viewBox="0 0 30 28"><path fill="#000" fillRule="evenodd" d="M16.187 27.68c.293.107.6.16.906.16.707 0 1.4-.293 1.894-.853L29.08 15.52c.667-.76.827-1.8.413-2.72a2.498 2.498 0 00-2.306-1.493h-3.12v-8.6c0-1.067-.64-2-1.64-2.374a2.498 2.498 0 00-2.8.694L9.533 12.493c-.666.76-.826 1.8-.413 2.72a2.497 2.497 0 002.307 1.494h3.12v8.6c0 1.067.64 2 1.64 2.373zM21.12 2.347a.485.485 0 01.387-.187c.08 0 .16.013.2.04.106.04.346.173.346.507v9.6c0 .546.454 1 1 1h4.12a.52.52 0 01.494.32c.04.093.12.333-.094.573L17.48 25.68a.502.502 0 01-.587.147.523.523 0 01-.346-.507v-9.6c0-.546-.454-1-1-1h-4.12a.52.52 0 01-.494-.32.515.515 0 01.094-.573L21.12 2.347zM1 4.333h9.333c.547 0 1-.453 1-1 0-.546-.453-1-1-1H1c-.547 0-1 .454-1 1 0 .547.453 1 1 1zm9 20.334c0 .546-.453 1-1 1H1c-.547 0-1-.454-1-1 0-.547.453-1 1-1h8c.547 0 1 .453 1 1zM1 15h4c.547 0 1-.453 1-1 0-.547-.453-1-1-1H1c-.547 0-1 .453-1 1 0 .547.453 1 1 1z" clipRule="evenodd"/></svg>,

    /**===> @see ./edit.js <===*/
    edit  : Edit,
    save  : () => null
});