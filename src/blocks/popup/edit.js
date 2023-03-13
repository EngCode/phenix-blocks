//====> WP Modules <====//
import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    TextControl,
    SelectControl,
    ToggleControl,
    DropdownMenu,
} from '@wordpress/components';

import {
    RichText,
    InnerBlocks,
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls
} from '@wordpress/block-editor';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_id = id => setAttributes({ id });

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps();

    //===> Modal Settings <===//
    blockProps.className += ` px-modal hidden align-center`;
    innerBlocksProps.className += ` modal-content`;
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
                <TextControl key="id" label={__("Modal ID", "phenix")} value={ attributes.id } onChange={set_id}/>
            </PanelBody>
        </InspectorControls>
        {/*===> Modal Component <===*/}
        <div {...blockProps}>
            {/*===> Container <===*/}
            <div {...innerBlocksProps}></div>
            {/*===> Container <===*/}
        </div>
        {/*===> // Modal Component <===*/}
    </>);
}