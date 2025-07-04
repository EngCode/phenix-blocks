//====> WP Modules <====//
//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';
import {PanelBody, ToolbarGroup} from '@wordpress/components';
import {BlockControls, InspectorControls, useBlockProps} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.png';
import PxDropDown from '../px-controls/dropdown';
import PhenixNumber from "../px-controls/number";
import PhenixSelect from '../px-controls/select';
import OptionControl from '../px-controls/switch';
import PhenixInput from '../px-controls/input';
import SelectFromData from '../px-controls/select-data';

//====> Phenix Options Sets <=====//
import SizesSet from '../px-controls/sets/sizes';
import ScreensTabs from "../px-controls/tabs";
import SliderSet from '../px-controls/sets/slider';
import FlexboxSet from '../px-controls/sets/flexbox';


//====> Edit Mode <====//
export default function Edit(props) {
    //====> Attributes Renderers <====//
    const PhenixBlocks = window.PhenixBlocks;

    //==> Set Object Attributes Methods <==//
    const set_value = (target) => PhenixBlocks.set_value(target, attributes, setAttributes);
    const set_flexbox = (target, screen) => PhenixBlocks.set_flexbox(target, screen, attributes, setAttributes);
    const set_style = (target, screen) => PhenixBlocks.setObject(target, screen, "style", false, attributes, setAttributes);
    const set_slider = (target, screen) => PhenixBlocks.setObject(target, screen, 'slider', false, attributes, setAttributes);
    const set_query = (target, screen) => PhenixBlocks.setObject(target, screen, "query", false, attributes, setAttributes);
    
    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();
    const uniqueKey = blockProps.id;

    //===> List View Naming <===//
    if (attributes.metadata?.name) {
        let ListViewItem = document.querySelector(`.block-editor-list-view-tree a[href="#block-${blockProps['data-block']}"] .components-truncate`);
        if(ListViewItem) ListViewItem.textContent = attributes.metadata.name;
    }

    //===> Render <===//
    return (<>
        {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <ToolbarGroup label={__("Quick Settings", "pds-blocks")}>
                {/*===> Dropdown Button <===*/}
                {attributes.flexbox?.equals || attributes.flexbox?.slider ? <>
                    <PxDropDown title={__("Columns Number", "pds-blocks")} button={`bg-transparent fs-16 square far fa-columns divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-180">
                        <li key="pds-styles" className='pdt-15 pdb-5 pdx-15 lineheight-150'>
                            <PhenixNumber name={"cols"} icon="far fa-mobile" min={0} max={13} value={attributes.flexbox?.cols || 0} onChange={(target) => set_flexbox(target, '')} />
                            <PhenixNumber name={"cols-sm"} icon="far fa-mobile" min={0} max={13} value={attributes.flexbox['cols-sm'] || 0} onChange={(target) => set_flexbox(target)} />
                            <PhenixNumber name={`cols-md`} icon="far fa-tablet" min={0} max={13} value={attributes.flexbox[`cols-md`] || 0} onChange={(target) => set_flexbox(target, '')} />
                            <PhenixNumber name={`cols-lg`} icon="far fa-laptop" min={0} max={13} value={attributes.flexbox[`cols-lg`] || 0} onChange={(target) => set_flexbox(target, '')} />
                            <PhenixNumber name={`cols-xl`} icon="far fa-desktop" min={0} max={13} value={attributes.flexbox[`cols-xl`] || 0} onChange={(target) => set_flexbox(target, '')} />
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
            </ToolbarGroup>
        </BlockControls>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key={`${uniqueKey}-inspector`}>
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("General Setting", "pds-blocks")} initialOpen={true}>
                {/*===> Group <===*/}
                <div className='row gpx-10 mb-10'>
                    {/*===> Column <===*/}
                    <div className='col-12 mb-10'>
                        {/*=== Form Control  ===*/}
                        <PhenixInput className="mb-15" name="id" label={__("HTML ID [Anchor]", "pds-blocks")} value={attributes.id} onChange={set_value} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-12 mb-10'>
                        <SelectFromData key="post_type" name="post_type" options="post-types" label={__("Post-Type", "pds-blocks")} value={attributes.query?.post_type || "default"} valueSetter={(target) => set_query(target, false)} multiple />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-12 mb-10'>
                        <SelectFromData label={__("Card Template", "pds-blocks")} key="template_part" name="template_part" options="template-parts" value={attributes.template_part} valueSetter={set_value} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6 mb-10'>
                        <PhenixSelect label={__("Order", "pds-blocks")} key="order" name="order" value={attributes.query?.order} onChange={set_query} options={[
                            { label: __('Oldest', "pds-blocks"), value: 'ASC' },
                            { label: __('Newest', "pds-blocks"),  value: 'DESC' },
                        ]} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6 mb-10'>
                        <PhenixSelect label={__("OrderBy", "pds-blocks")} key="orderby" name="orderby" value={attributes.query?.orderby} onChange={set_query} options={PhenixBlocks.dataLists.queries.orderBy} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-12 mb-10'>
                        <PhenixNumber name="per_page" label={__("Per Page", "pds-blocks")} value={ attributes.query?.per_page || 5 } onChange={set_query} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <OptionControl name={`pagination`} value="boolean" checked={attributes.query?.pagination} onChange={set_query} type='switch-checkbox' className='small'>{__("Pagination", "pds-blocks")}</OptionControl>
                    </div>
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
            <PanelBody title={__("Query by Taxonomies", "pds-blocks")} initialOpen={true}>
                {/*===> Taxonomies Types <===*/}
                <div className='mb-15' key={`taxonomies-types-wrapper`}>
                    <SelectFromData key={`taxonomies-types`} name="taxonomies-types" options="taxonomies" multiple={true}
                        label={__("Taxonomies Types", "pds-blocks")}
                        value={attributes.query['taxonomies-types'] || []}
                        valueSetter={(target) => set_query(target, false)} 
                    />
                </div>

                {/*===> Taxonomies Terms <===*/}
                {attributes.query['taxonomies-types'] ? attributes.query['taxonomies-types'].map((tax_type) => {
                    //===> Check if its Empty Option <===//
                    if (tax_type === "" || tax_type === "none") return;

                    //===> Create Select Component <===//
                    return (
                        <div key={`${tax_type}-wrapper`} className='mb-15'>
                            <SelectFromData key={`${tax_type}-terms-${uniqueKey}`} name={`${tax_type}-terms`} options="taxonomies-terms" termType={tax_type} multiple={true}
                                label={__(`Terms of "${tax_type}"`, "pds-blocks")}
                                value={attributes.query[`${tax_type}-terms`] || ["none"]}
                                valueSetter={(target) => set_query(target, false)} 
                            />
                        </div>
                    )
                }) : null}
            </PanelBody>
            {/*===> Widget Panel <===*/}
            {attributes.isFlexbox ? 
                <PanelBody title={__("Grid Layout", "pds-blocks")} initialOpen={true}>
                    <ScreensTabs
                        sm={(screen) => <FlexboxSet attributes={attributes} mainSetter={set_flexbox}></FlexboxSet>}
                        md={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={"grid-props, align"}></FlexboxSet>}
                        lg={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={"grid-props, align"}></FlexboxSet>}
                        xl={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={"grid-props, align"}></FlexboxSet>}
                    />
                </PanelBody>
            : null}
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