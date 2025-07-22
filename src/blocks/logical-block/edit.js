//====> WP Modules <====//
import { __ } from '@wordpress/i18n';
import {PanelBody} from '@wordpress/components';
import {InnerBlocks, useBlockProps, InspectorControls} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import PhenixSelect from '../px-controls/select';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //====> Attributes Renderers <====//
    const PhenixBlocks = window.PhenixBlocks;
    const OptionsRenderer = PhenixBlocks.OptionsRenderer;

    //===> Set Attributes <===//
    const set_logic = (target, screen) => PhenixBlocks.setObject(target, screen, "logic", false, attributes, setAttributes);

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const uniqueKey = blockProps.id;

    //===> Visibility Options <===//
    const visibility_opts = [
        { label: __("All", "pds-blocks"), value: '' },
        { label: __("Users Only", "pds-blocks"), value: 'users-only' },
        { label: __("Visitors Only", "pds-blocks"), value: 'visitors-only' }
    ];

    //===> Render <===//
    return (<>
        {/*====> Controls Layout <====*/}
        <InspectorControls key={`${uniqueKey}-inspector`}>
            {/*===> Widget Panel <===*/}
            <PanelBody title="Logic Settings" initialOpen={true}>
                {/*===> Visibility Rule <===*/}
                <PhenixSelect key={`visibility`} name="visibility" placeholder={__("All", "pds-blocks")} label={__("Show Only For", "pds-blocks")} value={attributes.logic?.visibility} onChange={set_logic} options={visibility_opts} />
            </PanelBody>
        </InspectorControls>

        {/*====> Edit Layout <====*/}
        {attributes.preview ?  <img src={PreviewImage} alt="" className='fluid' /> :<div {...blockProps} key={`${uniqueKey}`}>
            <InnerBlocks />
        </div>}
    </>);
}