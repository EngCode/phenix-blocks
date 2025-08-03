//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { useEffect } from '@wordpress/element';
import ServerSideRender from '@wordpress/server-side-render';
import {PanelBody, ToolbarGroup} from '@wordpress/components';
import {BlockControls, InspectorControls, useBlockProps} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import SizesSet from '../px-controls/sets/sizes';
import PxDropDown from '../px-controls/dropdown';
import PhenixNumber from "../px-controls/number";
import PhenixSelect from '../px-controls/select';
import OptionControl from '../px-controls/switch';
import SelectFromData from '../px-controls/select-data';
import TemplateMeta from '../px-controls/sets/template-meta';

//====> Phenix Options Sets <=====//
import ScreensTabs from "../px-controls/tabs";
import SliderSet from '../px-controls/sets/slider';
import FlexboxSet from '../px-controls/sets/flexbox';

//====> Edit Mode <====//
export default function Edit(props) {
    //====> Attributes Renderers <====//
    const PhenixBlocks = window.PhenixBlocks;

    //==> Set Attributes Methods <==//
    const set_value = (target) => PhenixBlocks.set_value(target, attributes, setAttributes);
    const set_flexbox = (target, screen) => PhenixBlocks.set_flexbox(target, screen, attributes, setAttributes);
    const set_style = (target, screen) => PhenixBlocks.setObject(target, screen, "style", false, attributes, setAttributes);
    const set_slider = (target, screen) => PhenixBlocks.setObject(target, screen, 'slider', false, attributes, setAttributes);
    const set_query = (target, screen) => PhenixBlocks.setObject(target, screen, "query", false, attributes, setAttributes);
    const set_meta_options = (target, screen) => PhenixBlocks.setObject(target, screen, "part_options", false, attributes, setAttributes);

    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();
    const uniqueKey = blockProps.id;

    //===> List View Naming <===//
    if (attributes.metadata?.name) {
        let ListViewItem = document.querySelector(`.block-editor-list-view-tree a[href="#block-${blockProps['data-block']}"] .components-truncate`);
        if(ListViewItem) ListViewItem.textContent = attributes.metadata.name;
    }

    //===> Get Template Part Meta Option <===//
    useEffect(() => {
        //===> Fetch Template Part Meta <===//
        apiFetch({path: 'pds-blocks/v2/options'}).then(Response => {
            //===> Get Templates Meta List <===//
            let templates_meta_list = Response['templates_meta'];

            //====> Check if the Template part has the correct current template part name meta <====//
            if (templates_meta_list[`${attributes.part_name}`]) {
                //===> Ensure Meta Data and the Current Data are Different <===//
                //=====> By Compare them using JSON.stringify for deep equality check
                if (JSON.stringify(templates_meta_list[`${attributes.part_name}`]) === JSON.stringify(attributes.template_meta)) return;

                //===> Define Template Meta <===//
                const part_options = {};

                //===> Loop through the Meta Options <===//
                Object.keys(templates_meta_list[`${attributes.part_name}`]['options']).forEach((key) => {
                    //===> Get Default Value <===//
                    const defaultValue = templates_meta_list[`${attributes.part_name}`]['options'][key]['value'] || '';

                    //===> Set the Default Value <===//
                    part_options[key] = attributes.part_options[key] || defaultValue;
                });

                //===> Set the Attributes <===//
                setAttributes({template_meta: templates_meta_list[`${attributes.part_name}`], part_options: part_options});
            }
        });
    }, [attributes.part_name, attributes.template_meta, attributes.part_options, setAttributes]);

    //===> Render <===//
    return (<>
        {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <ToolbarGroup key={`${uniqueKey}-toolbar`} label={__("Quick Settings", "pds-blocks")}>
                {/*===> Dropdown Button <===*/}
                {attributes.flexbox?.equals || attributes.flexbox?.slider ? <PxDropDown title={__("Columns Number", "pds-blocks")} button={`bg-transparent fs-16 square far fa-container-storage divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-180">
                    <li key="pds-styles" className='pdt-15 pdb-5 pdx-15 lineheight-150'>
                        <PhenixNumber name={"cols"} icon="far fa-mobile" min={0} max={13} value={attributes.flexbox?.cols || 0} onChange={(target) => set_flexbox(target, '')} />
                        <PhenixNumber name={"cols-sm"} icon="far fa-mobile" min={0} max={13} value={attributes.flexbox['cols-sm'] || 0} onChange={(target) => set_flexbox(target)} />
                        <PhenixNumber name={`cols-md`} icon="far fa-tablet" min={0} max={13} value={attributes.flexbox[`cols-md`] || 0} onChange={(target) => set_flexbox(target, '')} />
                        <PhenixNumber name={`cols-lg`} icon="far fa-laptop" min={0} max={13} value={attributes.flexbox[`cols-lg`] || 0} onChange={(target) => set_flexbox(target, '')} />
                        <PhenixNumber name={`cols-xl`} icon="far fa-desktop" min={0} max={13} value={attributes.flexbox[`cols-xl`] || 0} onChange={(target) => set_flexbox(target, '')} />
                    </li>
                </PxDropDown>: null} 
                {/*===> Dropdown Button <===*/}
                {attributes.isFlexbox ? <PxDropDown title={__("Grid Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-columns divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="layouts" className='pdt-15 pdx-15 lineheight-150'>
                        <ScreensTabs
                            sm={(screen) => <FlexboxSet attributes={attributes} mainSetter={set_flexbox}></FlexboxSet>}
                            md={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={"grid-props, align"}></FlexboxSet>}
                            lg={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={"grid-props, align"}></FlexboxSet>}
                            xl={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={"grid-props, align"}></FlexboxSet>}
                        />
                    </li>
                </PxDropDown>:null}
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
                <div className='row gpx-10'>
                    {/*===> Column <===*/}
                    <div className='col-12 mb-10'>
                        <SelectFromData name="role" options="users-roles" label={__("User Roles", "pds-blocks")} value={attributes.query?.role || null} valueSetter={(target) => set_query(target, false)} multiple />
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
                        <PhenixSelect label={__("OrderBy", "pds-blocks")} name="orderby" value={attributes.query?.orderby} onChange={set_query} options={PhenixBlocks.dataLists.queries.usersOrderBy} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-12 mb-10'>
                        <PhenixNumber name="number" label={__("Max Items", "pds-blocks")} value={ attributes.query?.number } onChange={set_query} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6 mb-10'>
                        <OptionControl key={`has_published_posts-${uniqueKey}`} name={`has_published_posts`} value="boolean" checked={attributes.query['has_published_posts'] || false} onChange={set_query} type='switch-checkbox' className='small'>{__("Has Posts", "pds-blocks")}</OptionControl>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <OptionControl key={`isFlexbox-${uniqueKey}`} name={`isFlexbox`} value="boolean" checked={attributes.isFlexbox} onChange={set_value} type='switch-checkbox' className='small'>{__("Grid Mode", "pds-blocks")}</OptionControl>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <OptionControl key={`slider-${uniqueKey}`} name={`slider`} value="boolean" checked={attributes.flexbox.slider} onChange={set_flexbox} type='switch-checkbox' className='small'>{__("Slider Mode", "pds-blocks")}</OptionControl>
                    </div>
                </div>
                {/*===> Group <===*/}
            </PanelBody>
            {/*===> Widget Panel <===*/}
            {attributes.flexbox.slider ? <PanelBody title={__("Slider Options", "pds-blocks")} initialOpen={true}>
                <SliderSet attributes={attributes} mainSetter={set_slider} flexSetter={set_flexbox} />
            </PanelBody> : null}
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        {attributes.preview ?  <img src={PreviewImage} alt="" className='fluid' /> :
            <div {...blockProps} key={`${uniqueKey}`}>
                <ServerSideRender block="phenix/users-query" attributes={attributes} />
            </div>
        }
    </>);
}