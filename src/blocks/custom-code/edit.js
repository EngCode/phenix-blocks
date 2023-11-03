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

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Value Handler <===//
    const valueHandler = (target) => {
        //===> Define Array Type <===//
        let single_val,
            array_val = [],
            type = target instanceof HTMLElement ? (target.getAttribute('type') || target.tagName) : null;

        //==> for Boolean Values <==//
        if (type === 'checkbox' || type === 'radio') {
            if (target.value === 'boolean') { single_val = target.checked; }
            else { single_val = target.checked ? target.value : ""; }
        }

        //===> for Value of Type Array <===//
        else if (type === "SELECT" && target.hasAttribute('multiple')) {
            //===> Get Multiple Value <===//
            let values = target.parentNode.getAttribute('data-value').split(',');
            //===> Get Current Values <===//
            values.forEach(val => val !== "" ? array_val.push(val) : null);
            //===> Set Array Value <===//
            single_val = array_val;
        }

        //===> for Normal Values <===//
        else { single_val = target.value; }

        //===> Return Value <===//
        if(single_val) return single_val;
    };

    const set_value = (target) => {
        //==> Get Current <==//
        const name = target.getAttribute('name');
        const value = (typeof(target) === "string" || typeof(target) === "number") ? target : valueHandler(target);
        const newAttributes = { ...attributes, [name]: value };
        //==> Set Value <==//
        setAttributes(newAttributes);
    };

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
                <div className='inline-block inline-select tooltip' style={{width: 125}} data-title={__("Code Type", "pds-blocks")}>
                    <PhenixSelect placeholder={__("Type", "pds-blocks")} name="type" value={attributes.type} onChange={set_value} options={[
                        { label: __('HTML', "pds-blocks"), value: 'html' },
                        { label: __('CSS', "pds-blocks"),  value: 'css' },
                        { label: __('Shortcode', "pds-blocks"),  value: 'shortcode' },
                        { label: __('JavaScript', "pds-blocks"),  value: 'javascript' },
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
            {/*===> Coding Mode <===*/}
            {attributes.dev_preview || !attributes.code_preview ? <PhenixTextarea placeholder={__("Custom Code", "pds-blocks")} name="code" onChange={set_value} value={attributes.code} className={`position-rv z-index-3 mb-15 ltr`} /> : null}
            {/*===> Preview Mode <===*/}
            {attributes.dev_preview || attributes.code_preview ? <ServerSideRender block="phenix/custom-code" attributes={attributes}  /> : null}
        </div>}
    </>);
}