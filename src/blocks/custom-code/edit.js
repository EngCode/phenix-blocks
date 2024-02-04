//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import {PanelBody, Toolbar} from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import {BlockControls, InspectorControls, useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import PhenixSelect from '../px-controls/select';
import OptionControl from '../px-controls/switch';
import PhenixTextarea from '../px-controls/textarea';

//====> Code Editor <====//

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //====> Attributes Renderers <====//
    const PhenixBlocks = window.PhenixBlocks;
    
    //===> Value Handler <===//
    const set_value = (target) => PhenixBlocks.set_value(target, attributes, setAttributes);

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const uniqueKey = blockProps.id;

    //===> for Editing Mode <===//
    if (!attributes.code) blockProps.className += ' pd-15';
    if (attributes.dev_preview || !attributes.code_preview) blockProps.className += ' pdx-15 pdt-15';

    //===> Render <===//
    return (<>
        {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <Toolbar key={`${uniqueKey}-toolbar`} label={__("Quick-Settings", "pds-blocks")}>
                {/*===> Select Control <===*/}
                <div className='inline-block inline-select tooltip-bottom w-100' data-title={__("Code Type", "pds-blocks")}>
                    <PhenixSelect className="mb-10" name="type" value={attributes.type} onChange={set_value} options={[
                        { label: __('HTML', "pds-blocks"), value: 'html' },
                        { label: __('CSS', "pds-blocks"),  value: 'css' },
                        { label: __('JS', "pds-blocks"),  value: 'javascript' },
                    ]} />
                </div>
                {/*===> Option Control <===*/}
                <OptionControl key={`code_preview-${uniqueKey}`} name={`code_preview`} value={`boolean`} checked={attributes.code_preview} onChange={set_value} type='button-checkbox' className='inline-block divider-e border-alpha-25'>
                    <span className='btn bg-transparent fs-16 square tooltip-bottom far fa-eye h-min-100' style={{paddingTop: 2}} data-title={__("Preview", "pds-blocks")}></span>
                </OptionControl>
                {/*===> Option Control <===*/}
                <OptionControl key={`dev_preview-${uniqueKey}`} name={`dev_preview`} value={`boolean`} checked={attributes.dev_preview} onChange={set_value} type='button-checkbox' className='inline-block divider-e border-alpha-25'>
                    <span className='btn bg-transparent fs-16 square tooltip-bottom far fa-code h-min-100' style={{paddingTop: 2}} data-title={__("Developer Mode", "pds-blocks")}></span>
                </OptionControl>
            </Toolbar>
        </BlockControls>
        {/*====> Controls Layout <====*/}
        <InspectorControls key={`${uniqueKey}-inspector`}>
            {/*===> Widget Panel <===*/}
            <PanelBody title="General Settings" initialOpen={true}>
                {/*===> Select Control <===*/}
                <PhenixSelect label={__("Code Type", "pds-blocks")} className="mb-10" name="type" value={attributes.type} onChange={set_value} options={[
                    { label: __('HTML', "pds-blocks"), value: 'html' },
                    { label: __('CSS', "pds-blocks"),  value: 'css' },
                    { label: __('JS', "pds-blocks"),  value: 'javascript' },
                ]} />
                {/*===> Textarea Control <===*/}
                <PhenixTextarea label={__("Custom Code", "pds-blocks")} name="code" onChange={set_value} value={attributes.code} />
            </PanelBody>
        </InspectorControls>
        {/*===> Modal Component <===*/}
        {attributes.preview ?  <img src={PreviewImage} alt="" className='fluid' /> : <div {...blockProps} key={uniqueKey}>
            {/*===> Preview Mode <===*/}
            {attributes.dev_preview || attributes.code_preview ? <ServerSideRender block="phenix/custom-code" attributes={attributes}  /> : null}
            {/*===> Coding Mode <===*/}
            <PhenixTextarea placeholder={__("Custom Code", "pds-blocks")} name="code" onChange={set_value} value={attributes.code} style={{padding:"15px 20px", backgroundColor: "#1c1c1c", borderRadius: "3px"}} className={`position-rv z-index-3 ltr color-gray border-gray`} />
        </div>}
    </>);
}