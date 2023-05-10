//====> WP Modules <====//
import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    TextControl,
} from '@wordpress/components';

import {
    InnerBlocks,
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls
} from '@wordpress/block-editor';

import PreviewImage from './preview.jpg';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_id = id => setAttributes({ id });

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();

    //===> Modal Settings <===//
    blockProps.className += ` px-modal hidden align-center`;
    if(attributes.id) blockProps.id = attributes.id;

    //===> Full Width Editing <===//
    if (!attributes.align) setAttributes({ align: 'full' });

    //===> Render <===//
    return (<>
        {/*====> Controls Layout <====*/}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="General Settings" initialOpen={true}>
                {/*===> Form Control <===*/}
                <TextControl key="id" label={__("Modal ID", "pds-blocks")} value={ attributes.id } onChange={set_id}/>
            </PanelBody>
        </InspectorControls>
        {/*===> Modal Component <===*/}
        {attributes.preview ?  <img src={PreviewImage} alt="" className='fluid' /> :<div {...blockProps}>
            <div className='modal-content col'>
                <InnerBlocks />
            </div>
        </div>}
        {/*===> // Modal Component <===*/}
    </>);
}