//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { useEffect } from '@wordpress/element';
import ServerSideRender from '@wordpress/server-side-render';
import {PanelBody, ToolbarGroup} from '@wordpress/components';
import {BlockControls, InspectorControls, useBlockProps} from '@wordpress/block-editor';

//====> Preview Image <====//
import PreviewImage from './preview.jpg';

//====> Phenix Components <====//
import TemplateMeta from '../px-controls/sets/template-meta';
import SelectFromData from '../px-controls/select-data';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //====> Attributes Renderers <====//
    const PhenixBlocks = window.PhenixBlocks;

    //===> Get Properties <===//
    const blockProps = useBlockProps();
    const uniqueKey = blockProps.id;

    //===> Value Handler <===//
    const set_value = (target) => PhenixBlocks.set_value(target, attributes, setAttributes);
    const set_meta_options = (target, screen) => PhenixBlocks.setObject(target, screen, "part_options", false, attributes, setAttributes);

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

            //====> Get the Meta Data <====//
            if (templates_meta_list[`${attributes.part_name}`]) {
                //===> Ensure Meta Data and the Current Data are Different <===//
                if (templates_meta_list[`${attributes.part_name}`] === attributes.template_meta) return;

                //===> Set the Attributes <===//
                setAttributes({template_meta: templates_meta_list[`${attributes.part_name}`]});
            }
        });
    }, []);

    //===> Render <===//
    return (<>
        {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <ToolbarGroup key={`${uniqueKey}-toolbar`} label={__("Quick Settings", "pds-blocks")}>
                {/*===> Select Control <===*/}
                <div className='inline-block inline-select tooltip' style={{width: 175}} data-title={__("Template Name", "pds-blocks")}>
                    <SelectFromData key={`${uniqueKey}-part_name-toolbar`} placeholder={__("Template Name", "pds-blocks")} name="part_name" options="template-parts" value={attributes.part_name} valueSetter={set_value} />
                </div>
            </ToolbarGroup>
        </BlockControls>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key={`${uniqueKey}-inspector`}>
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("General Setting", "pds-blocks")} initialOpen={true}>
                {/*=== Template Name ===*/}
                <SelectFromData key={`${uniqueKey}-part_name`} label={__("Template Name", "pds-blocks")} placeholder={__("Template Name", "pds-blocks")} name="part_name" options="template-parts" value={attributes.part_name} valueSetter={set_value} className="mb-15" />
                {/*=== Template Custom Options ===*/}
                <TemplateMeta key={`${uniqueKey}-template_meta`} attributes={attributes} mainSetter={set_meta_options} />
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        {attributes.preview ?  <img src={PreviewImage} alt="" className='fluid' /> : <div {...blockProps} key={`${uniqueKey}`}>
            <ServerSideRender block="phenix/theme-part" attributes={attributes}  />
        </div>}
    </>);
}