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

import {
    InnerBlocks,
    useBlockProps,
} from '@wordpress/block-editor';

//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="254" height="254" viewBox="0 0 254 254"><g id="button" transform="translate(4296 3460)"><rect id="base" width="254" height="254" transform="translate(-4296 -3460)" fill="#fff"/><path id="server" d="M169.554,32H24.222A24.222,24.222,0,0,0,0,56.222V80.444a24.222,24.222,0,0,0,24.222,24.222H169.554a24.222,24.222,0,0,0,24.222-24.222V56.222A24.232,24.232,0,0,0,169.554,32Zm12.111,48.444a12.127,12.127,0,0,1-12.111,12.111H24.222A12.137,12.137,0,0,1,12.111,80.444V56.222A12.127,12.127,0,0,1,24.222,44.111H169.554a12.127,12.127,0,0,1,12.111,12.111ZM117.326,59.25a9.083,9.083,0,1,0,9.083,9.083A9.083,9.083,0,0,0,117.326,59.25Zm-36.333,0a9.083,9.083,0,1,0,9.083,9.083A9.083,9.083,0,0,0,80.992,59.25Z" transform="translate(-4265.888 -3453.554)"/><path id="server-2" data-name="server" d="M181.665,91.045H12.111A12.137,12.137,0,0,0,0,103.156V151.6a12.137,12.137,0,0,0,12.111,12.111H181.665A12.137,12.137,0,0,0,193.776,151.6V103.156A12.147,12.147,0,0,0,181.665,91.045Zm-118.6,42.9V120.614h69.395v13.328Z" transform="translate(-4265.889 -3415.711)"/></g></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const blockProps = useBlockProps.save();

        //===> Set JS URL <===//
        if (attributes.isLink) {
            blockProps['href'] = attributes.url;
            blockProps['rel']  = "noopener";
        }

        if (attributes.inNewTab) blockProps['target'] = "_blank";

        //===> Set Custom Data <===//
        if (attributes.data_id.length > 1) {
            blockProps['data-id'] = attributes.data_id;
            blockProps.className += ' menu-toggle';

        }

        if (attributes.data_modal.length > 1) blockProps['data-modal'] = attributes.data_modal;

        if (attributes.isLightBox) {
            blockProps['href'] = attributes.url;
            blockProps.className += ' px-lightbox';
            if (attributes.lightbox_type) blockProps['data-media'] = attributes.lightbox_type;
        }

        //===> Set Default Values <===//
        const setDefault = () => {
            //===> Main Names <===//
            blockProps.className += ` btn`;
    
            //===> Color/Background <===//
            if (attributes.background) {
                //===> Image Background <===//
                if (attributes.bg_type === 'image') {
                    blockProps.className += ` px-media`;
                    blockProps["data-src"] = attributes.background;
                    setPhenixView();
                }
                //===> Name Background <===//
                else {
                    blockProps.className += ` ${attributes.background}`;
                }

                //===> Background Rotation <===//
                if (attributes.bg_rotate) blockProps.className += ` ${attributes.bg_rotate}`;
            }
    
            if (attributes.color) blockProps.className += ` ${attributes.color}`;
    
            //===> Default Type <===//
            if (attributes.type) blockProps.className += ` ${attributes.type}`;
    
            //===> Default Size <===//
            if (attributes.size) blockProps.className += ` ${attributes.size}`;
    
            //===> Default Radius <===//
            if (attributes.radius) blockProps.className += ` ${attributes.radius}`;
    
            //===> Default Style <===//
            if (attributes.outline) blockProps.className += ` outline`;
        }

        setDefault();

        //===> Render <===//
        return (<>
            {attributes.isLink ? 
                <a { ...blockProps }>{attributes.type !== "square" ? attributes.label : ''}</a>
                :
                <button { ...blockProps }>{attributes.type !== "square" ? attributes.label : ''}</button>
            }
        </>);
    }
});