//====> WP Modules <====//
//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import {useState, useEffect} from '@wordpress/element';
import ServerSideRender from '@wordpress/server-side-render';
import {PanelBody, TextControl, Toolbar, SelectControl, ToggleControl} from '@wordpress/components';
import {InnerBlocks, BlockControls, InspectorControls, useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';
import apiFetch from '@wordpress/api-fetch';

//====> Phenix Modules <====//
import PreviewImage from './preview.png';
import PxDropDown from '../px-controls/dropdown';
import PhenixNumber from "../px-controls/number";
import PhenixSelect from '../px-controls/select';
import OptionControl from '../px-controls/switch';
import SelectFromData from '../px-controls/select-data';

//====> Phenix Options Sets <=====//
import SizesSet from '../px-controls/sets/sizes';
import ScreensTabs from "../px-controls/tabs";
import SliderSet from '../px-controls/sets/slider';
import FlexboxSet from '../px-controls/sets/flexbox';

//====> Attributes Renderers <====//
const PhenixBlocks = window.PhenixBlocks;

//====> Edit Mode <====//
export default function Edit(props) {
    //===> Value Handler <===//
    const set_value = PhenixBlocks.set_value;
    const set_flexbox = PhenixBlocks.set_flexbox;

    //==> Set Object Attributes Methods <==//
    const set_style = (target, screen) => PhenixBlocks.setObject(target, screen, "style");
    const set_slider = (target, screen) => PhenixBlocks.setObject(target, screen, 'slider');
    const set_query = (target, screen) => PhenixBlocks.setObject(target, screen, "query");

    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();
    const uniqueKey = blockProps.id;

    //===> OrderBy Options <===//
    const orderBy = [
        { label: __('Default', 'pds-blocks'), value: '' },
        { label: __('Date', 'pds-blocks'), value: 'date' },
        { label: __('ID', 'pds-blocks'), value: 'ID' },
        { label: __('Author', 'pds-blocks'), value: 'author' },
        { label: __('Title', 'pds-blocks'), value: 'title' },
        { label: __('Modified', 'pds-blocks'), value: 'modified' },
        { label: __('Random', 'pds-blocks'), value: 'rand' },
        { label: __('Comment Count', 'pds-blocks'), value: 'comment_count' },
        { label: __('Menu Order', 'pds-blocks'), value: 'menu_order' },
        { label: __('Meta Value', 'pds-blocks'), value: 'meta_value' },
        { label: __('Meta Value Num', 'pds-blocks'), value: 'meta_value_num' },
        { label: __('Post__In', 'pds-blocks'), value: 'post__in' },
        { label: __('None', 'pds-blocks'), value: 'none' },
    ];

    //===> Render <===//
    return (<>
        {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <Toolbar label={__("Quick Settings", "pds-blocks")}>
                {/*===> Dropdown Button <===*/}
                {attributes.flexbox?.equals || attributes.flexbox?.slider ? <>
                    <PxDropDown title={__("Columns Number", "pds-blocks")} button={`bg-transparent fs-16 square far fa-columns divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-180">
                        <li key="pds-styles" className='pdt-15 pdb-5 pdx-15 lineheight-150'>
                            <PhenixNumber name={"cols"} icon="far fa-mobile" min={0} max={13} value={attributes.flexbox?.cols || 0} onChange={set_flexbox} />
                            <PhenixNumber name={`cols-md`} icon="far fa-tablet" min={0} max={13} value={attributes.flexbox[`cols-md`] || 0} onChange={set_flexbox} />
                            <PhenixNumber name={`cols-lg`} icon="far fa-laptop" min={0} max={13} value={attributes.flexbox[`cols-lg`] || 0} onChange={set_flexbox} />
                            <PhenixNumber name={`cols-xl`} icon="far fa-desktop" min={0} max={13} value={attributes.flexbox[`cols-xl`] || 0} onChange={set_flexbox} />
                        </li>
                    </PxDropDown>
                </>: null}
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
            <PanelBody title={__("General Setting", "pds-blocks")} initialOpen={true}>
                {/*===> Group <===*/}
                <div className='row gpx-10 mb-10'>
                    {/*===> Column <===*/}
                    <div className='col-12 mb-10'>
                        <SelectFromData name="post_type" options="post-types" label={__("Post-Type", "pds-blocks")} value={attributes.query?.post_type || "default"} valueSetter={(target) => set_query(target, false)} multiple />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-12 mb-10'>
                        <SelectFromData label={__("Card Template", "pds-blocks")} name="template_part" options="template-parts" value={attributes.template_part} valueSetter={set_value} />
                    </div>
                    {/*===> Column <===*/}
                    {!attributes.query?.post_type?.includes("default") ? <div className='col-6 mb-10'>
                        <PhenixSelect label={__("Order", "pds-blocks")} name="order" value={attributes.query?.order} onChange={set_query} options={[
                            { label: __('Oldest', "pds-blocks"), value: 'ASC' },
                            { label: __('Newest', "pds-blocks"),  value: 'DESC' },
                        ]} />
                    </div> : null}
                    {/*===> Column <===*/}
                    {!attributes.query?.post_type?.includes("default") ? <div className='col-6 mb-10'>
                        <PhenixSelect label={__("OrderBy", "pds-blocks")} name="orderby" value={attributes.query?.orderby} onChange={set_query} options={orderBy} />
                    </div> : null}
                    {/*===> Column <===*/}
                    {!attributes.query?.post_type?.includes("default") ? <div className='col-12 mb-10'>
                        <PhenixNumber name="per_page" label={__("Per Page", "pds-blocks")} value={ attributes.query?.per_page || 5 } onChange={set_query} />
                    </div> : null}
                    {/*===> Column <===*/}
                    {!attributes.query?.post_type?.includes("default") ? <div className='col-6'>
                        <OptionControl name={`pagination`} value="boolean" checked={attributes.query?.pagination} onChange={set_query} type='switch-checkbox' className='small'>{__("Pagination", "pds-blocks")}</OptionControl>
                    </div> : null}
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <OptionControl name={`s`} value="boolean" checked={attributes.query?.s} onChange={set_query} type='switch-checkbox' className='small'>{__("IS Search", "pds-blocks")}</OptionControl>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <OptionControl name={`isFlexbox`} value="boolean" checked={attributes.isFlexbox} onChange={set_value} type='switch-checkbox' className='small'>{__("Grid Mode", "pds-blocks")}</OptionControl>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <OptionControl name={`slider`} value="boolean" checked={attributes.flexbox.slider} onChange={set_flexbox} type='switch-checkbox' className='small'>{__("IS Slider", "pds-blocks")}</OptionControl>
                    </div>
                    {/*===> // Column <===*/}
                </div>
            </PanelBody>
            {/*===> Widget Panel <===*/}
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
                <ServerSideRender block="phenix/query" attributes={attributes} />
            </div>
        }
    </>);
}