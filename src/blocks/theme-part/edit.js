//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';
import {PanelBody, Toolbar} from '@wordpress/components';
import {BlockControls, InspectorControls, useBlockProps} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
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

    //===> List View Naming <===//
    if (attributes.metadata?.name) {
        let ListViewItem = document.querySelector(`.block-editor-list-view-tree a[href="#block-${blockProps['data-block']}"] .components-truncate`);
        if(ListViewItem) ListViewItem.textContent = attributes.metadata.name;
    }

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
            <PanelBody title={__("General Setting", "pds-blocks")} initialOpen={true}>
                {/*=== Template Name ===*/}
                <SelectFromData key={"part_name"} label={__("Template Name", "pds-blocks")} placeholder={__("Template Name", "pds-blocks")} name="part_name" options="template-parts" value={attributes.part_name} valueSetter={set_value} />
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        {attributes.preview ?  <img src={PreviewImage} alt="" className='fluid' /> : <div {...blockProps} key={`${uniqueKey}`}>
            <ServerSideRender block="phenix/theme-part" attributes={attributes}  />
        </div>}
    </>);
}