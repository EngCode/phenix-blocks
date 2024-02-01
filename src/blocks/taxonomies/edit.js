//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';
import {PanelBody, Toolbar} from '@wordpress/components';
import {BlockControls, InspectorControls, useBlockProps} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.png';
import SizesSet from '../px-controls/sets/sizes';
import PxDropDown from '../px-controls/dropdown';
import PhenixNumber from "../px-controls/number";
import PhenixSelect from '../px-controls/select';
import OptionControl from '../px-controls/switch';
import SelectFromData from '../px-controls/select-data';

//====> Phenix Options Sets <=====//
import ScreensTabs from "../px-controls/tabs";
import FlexboxSet from '../px-controls/sets/flexbox';

//====> Attributes Renderers <====//
const PhenixBlocks = window.PhenixBlocks;
const OptionsRenderer = PhenixBlocks.OptionsRenderer;

//====> Edit Mode <====//
export default function Edit(props) {
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

    //==> Set Object Attributes Methods <==//
    const set_style = (target, screen) => PhenixBlocks.setObject(target, screen, "style");
    const set_slider = (target, screen) => PhenixBlocks.setObject(target, screen, 'slider');
    const set_query = (target, screen) => PhenixBlocks.setObject(target, screen, "query");

    //==> Set Flexbox Method <==//
    const set_flexbox = (target, screen) => {
        //==> Get Current <==//
        const name = target instanceof HTMLElement ? target.getAttribute('name') : `${target}`;
        const flexbox = { ...attributes.flexbox };
        //==> Add the Value <==//
        flexbox[`${name.includes('align-') ? `align${screen?'-'+screen:""}` : name}${screen?'-'+screen:""}`] = (typeof(target) === "string" || typeof(target) === "number") ? target.replace("align-reset", "") : valueHandler(target);
        //==> Set Value <==//
        const newAttributes = { ...attributes, flexbox: flexbox };
        setAttributes(newAttributes);
    };

    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();
    const uniqueKey = blockProps.id;

    //===> OrderBy Options <===//
    const orderBy = [
        { label: __('Default', 'pds-blocks'), value: '' },
        { label: __('Name', 'pds-blocks'), value: 'name' },
        { label: __('ID', 'pds-blocks'), value: 'id' },
        { label: __('Count', 'pds-blocks'), value: 'count' },
        { label: __('Slug', 'pds-blocks'), value: 'slug' },
        { label: __('Term Group', 'pds-blocks'), value: 'term_group' },
        { label: __('Term Order', 'pds-blocks'), value: 'term_order' },
    ];

    //===> Render <===//
    return (<>
        {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <Toolbar key={`${uniqueKey}-toolbar`} label={__("Quick Settings", "pds-blocks")}>
                {attributes.flexbox?.equals || attributes.flexbox?.slider ? <PxDropDown title={__("Columns Number", "pds-blocks")} button={`bg-transparent fs-16 square far fa-columns divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-180">
                    <li key="pds-styles" className='pdt-15 pdb-5 pdx-15 lineheight-150'>
                        <PhenixNumber name={"cols"} icon="far fa-mobile" min={0} max={13} value={attributes.flexbox?.cols || 0} onChange={set_flexbox} />
                        <PhenixNumber name={`cols-md`} icon="far fa-tablet" min={0} max={13} value={attributes.flexbox[`cols-md`] || 0} onChange={set_flexbox} />
                        <PhenixNumber name={`cols-lg`} icon="far fa-laptop" min={0} max={13} value={attributes.flexbox[`cols-lg`] || 0} onChange={set_flexbox} />
                        <PhenixNumber name={`cols-xl`} icon="far fa-desktop" min={0} max={13} value={attributes.flexbox[`cols-xl`] || 0} onChange={set_flexbox} />
                    </li>
                </PxDropDown>: null}
                {/*===> Dropdown Button <===*/}
                <PxDropDown title={__("Sizes Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-arrows-maximize divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-320" >
                    <li key="sizes" className='pdy-15 pdx-15 lineheight-150'>
                        <ScreensTabs
                            sm={(screen) => <SizesSet attributes={attributes} mainSetter={set_style} />}
                            md={(screen) => <SizesSet screen={screen} attributes={attributes} mainSetter={set_style} />}
                            lg={(screen) => <SizesSet screen={screen} attributes={attributes} mainSetter={set_style} />}
                            xl={(screen) => <SizesSet screen={screen} attributes={attributes} mainSetter={set_style} />}
                        />
                    </li>
                </PxDropDown>
            </Toolbar>
        </BlockControls>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key={`${uniqueKey}-inspector`}>
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("Query Setting", "pds-blocks")} initialOpen={true}>
                {/*===> Group <===*/}
                <div className='row gpx-10'>
                    {/*===> Column <===*/}
                    <div className='col-12 mb-15'>
                        <SelectFromData name="taxonomy" options="taxonomies" label={__("Taxonomies", "pds-blocks")} value={attributes.query?.taxonomy || null} valueSetter={(target) => set_query(target, false)} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-12 mb-15'>
                        <SelectFromData name="post_type" options="post-types" label={__("Post-Type", "pds-blocks")} value={attributes.query?.post_type || null} valueSetter={(target) => set_query(target, false)} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-12 mb-15'>
                        <SelectFromData label={__("Card Template", "pds-blocks")} name="template_part" options="template-parts" value={attributes.template_part} valueSetter={set_value} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6 mb-10'>
                        <PhenixSelect label={__("Order", "pds-blocks")} name="order" value={attributes.query?.order} onChange={set_query} options={[
                            { label: __('Oldest', "pds-blocks"), value: 'ASC' },
                            { label: __('Newest', "pds-blocks"),  value: 'DESC' },
                        ]} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6 mb-10'>
                        <PhenixSelect label={__("OrderBy", "pds-blocks")} name="orderby" value={attributes.query?.orderby} onChange={set_query} options={orderBy} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-12 mb-10'>
                        <PhenixNumber name="number" label={__("Max Items", "pds-blocks")} value={ attributes.query?.number } onChange={set_query} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <OptionControl key={`hide_empty-${uniqueKey}`} name={`hide_empty`} value="boolean" checked={attributes.query['hide_empty'] || false} onChange={set_query} type='switch-checkbox' className='small'>{__("Hide Empty", "pds-blocks")}</OptionControl>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <OptionControl key={`isFlexbox-${uniqueKey}`} name={`isFlexbox`} value="boolean" checked={attributes.isFlexbox} onChange={set_value} type='switch-checkbox' className='small'>{__("Grid Mode", "pds-blocks")}</OptionControl>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <OptionControl key={`slider-${uniqueKey}`} name={`slider`} value="boolean" checked={attributes.flexbox.slider} onChange={set_flexbox} type='switch-checkbox' className='small'>{__("IS Slider", "pds-blocks")}</OptionControl>
                    </div>
                </div>
                {/*===> Group <===*/}
            </PanelBody>
            <PanelBody title={__("Grid Layout", "pds-blocks")} initialOpen={true}>
                <ScreensTabs
                    sm={(screen) => <FlexboxSet attributes={attributes} mainSetter={set_flexbox}></FlexboxSet>}
                    md={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={"grid-props, align"}></FlexboxSet>}
                    lg={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={"grid-props, align"}></FlexboxSet>}
                    xl={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={"grid-props, align"}></FlexboxSet>}
                />
            </PanelBody>
            {/*===> Widget Panel <===*/}
            {attributes.flexbox.slider ? <PanelBody title={__("Slider Options", "pds-blocks")} initialOpen={true}>
                <SliderSet attributes={attributes} mainSetter={set_slider} flexSetter={set_flexbox} />
            </PanelBody> : null}
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        {attributes.preview ? 
            <img src={PreviewImage} alt="" className='fluid' />
        :
            <div {...blockProps} key={`${uniqueKey}`}>
                <ServerSideRender block="phenix/taxonomies" attributes={attributes} />
            </div>
        }
    </>);
}