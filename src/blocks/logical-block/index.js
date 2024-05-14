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
import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';

//===> Register Block <===//
registerBlockType(metadata.name, {
    title      : metadata.title,
    category   : metadata.category,
    attributes : metadata.attributes,
    icon : <svg fill="none" viewBox="0 0 32 32"><path fill="#000" fillRule="evenodd" d="M24.184 15A2.996 2.996 0 0127 13a3.006 3.006 0 013.001 3.002c0 1.654-1.346 3-3 3a2.996 2.996 0 01-2.816-2H18.99a.516.516 0 00-.004.052c0 .018-.002.035-.004.053l.515.294a1 1 0 01.367 1.371l-2.018 3.464a.998.998 0 01-1.361.364l-.525-.3c-.593.46-1.25.837-1.942 1.116V24a1 1 0 01-1 1H12v3h9v-9a1 1 0 012 0v10a1 1 0 01-1 1H11a1 1 0 01-1-1v-4H8.982a1 1 0 01-1-1v-.584A8.146 8.146 0 016.04 22.3l-.525.3a1 1 0 01-1.361-.365l-2.018-3.464a1 1 0 01.367-1.371l.516-.294a7.576 7.576 0 01-.001-2.212l-.515-.294a1 1 0 01-.367-1.371l2.018-3.464A1.001 1.001 0 015.515 9.4l.525.301a8.116 8.116 0 011.942-1.117V8a1 1 0 011-1H10V3a1 1 0 011-1h11a1 1 0 011 1v10a1 1 0 01-2 0V4h-9v3h1.018a1 1 0 011 1v.584A8.146 8.146 0 0115.96 9.7l.525-.3a1 1 0 011.361.366l2.018 3.464a1 1 0 01-.367 1.371l-.515.294a.516.516 0 01.004.052c0 .018.002.035.004.053h5.194zm-7.84 5.215l.273.156 1.009-1.734-.259-.148a1.002 1.002 0 01-.476-1.101c.113-.473.17-.939.17-1.387 0-.448-.057-.914-.17-1.387-.103-.432.091-.88.476-1.101l.259-.148-1.011-1.735-.273.156a1 1 0 01-1.18-.138 6.094 6.094 0 00-2.428-1.395 1 1 0 01-.717-.959V9H9.981v.293a1 1 0 01-.717.959 6.094 6.094 0 00-2.428 1.395.997.997 0 01-1.18.138l-.273-.156-1.011 1.735.259.148a1 1 0 01.476 1.102c-.113.47-.17.937-.17 1.386 0 .449.057.916.17 1.386a1 1 0 01-.476 1.102l-.259.148 1.011 1.735.273-.156c.381-.218.86-.161 1.18.138a6.114 6.114 0 002.429 1.394 1 1 0 01.717.959V23h2.037v-.293a1 1 0 01.717-.959 6.094 6.094 0 002.428-1.395c.321-.299.8-.356 1.18-.138zM26 16c0 .551.449 1 1 1 .551 0 1-.449 1-1 0-.551-.449-1-1-1-.551 0-1 .449-1 1zM9.707 13.293a.999.999 0 00-1.414 0l-2 2a.999.999 0 000 1.414l2 2a.997.997 0 001.414 0 .999.999 0 000-1.414L8.414 16l1.293-1.293a.999.999 0 000-1.414zm4 0a.999.999 0 10-1.414 1.414L13.586 16l-1.293 1.293a.999.999 0 101.414 1.414l2-2a.999.999 0 000-1.414l-2-2z" clipRule="evenodd"/></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({attributes}) => {
        //===> Get Block Properties <===//
        const blockProps = useBlockProps.save();

        //===> Render <===//
        return <InnerBlocks.Content />;
    }
});