//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';
import {PanelBody, Toolbar} from '@wordpress/components';
import {BlockControls, InspectorControls, useBlockProps} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import SelectFromData from '../px-controls/select-data';

//====> Edit Mode <====//
export default function Edit(props) {
    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();
    const uniqueKey = blockProps.id;

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
        else if (type === null) { single_val = target; }

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
        console.log(attributes);
    };

    //===> Render <===//
    return (<>
    {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <Toolbar key={`${uniqueKey}-toolbar`} label={__("Quick Settings", "pds-blocks")}>
                {/*===> Select Control <===*/}
                <div className='inline-block inline-select tooltip' style={{width: 175}} data-title={__("Template Name", "pds-blocks")}>
                    <SelectFromData key={"part_name"} placeholder={__("Template Name", "pds-blocks")} name="part_name" options="template-parts" value={attributes.part_name} valueSetter={set_value} />
                </div>
            </Toolbar>
        </BlockControls>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key={`${uniqueKey}-inspector`}>
            {/*===> Widget Panel <===*/}
            {/* <PanelBody title={__("General Setting", "pds-blocks")} initialOpen={true}> */}
                {/*=== Template Name ===*/}
                
            {/* </PanelBody> */}
            {/*=== Template Meta Panels ===*/}
            {/* {state.templates_meta[attributes.part_name] ?
                <TemplateOptions options={attributes.part_options?.options}
                    features={attributes.part_options?.features}
                    meta={state.templates_meta[attributes.part_name]}
                    onChange={set_template_option}
                    types={state.post_types.length > 0 ? state.post_types : null}
                    taxonomies={state.taxonomies.length > 0 ? state.taxonomies : null} 
                />
            : null} */}
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        {attributes.preview ?  <img src={PreviewImage} alt="" className='fluid' /> : <div {...blockProps} key={`${uniqueKey}`}>
            <ServerSideRender block="phenix/theme-part" attributes={attributes}  />
        </div>}
    </>);
}