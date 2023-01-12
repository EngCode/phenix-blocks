//====> WP Modules <====//
import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl
} from '@wordpress/components';

import {
    useBlockProps,
    InspectorControls
} from '@wordpress/block-editor';

import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';
import ServerSideRender from '@wordpress/server-side-render';

//====> Phenix Modules <====//
import PhenixNumber from "../px-controls/number-counter";
import FlexAlignment from "../px-controls/flex-alignment";

//====> Edit Mode <====//
export default function Edit(props) {
    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();

    //===> Set Attributes <===//
    const set_order = order => setAttributes({ order });
    const set_taxonomy = taxonomy => setAttributes({ taxonomy });
    const set_post_type = post_type => setAttributes({ post_type });
    const set_hide_empty = hide_empty => setAttributes({ hide_empty });
    const set_query_count = query_count => setAttributes({ query_count });
    const set_template_part = template_part => setAttributes({ template_part });

    //===> Grid Attributes <===//
    const set_grid_mode = grid_mode => setAttributes({ grid_mode });
    const set_grid_cols = grid_cols => setAttributes({ grid_cols: "row-cols-" + (grid_cols > 0 ? grid_cols : "auto") });
    const set_grid_cols_stat = grid_cols_stat => setAttributes({ grid_cols_stat });
    const set_grid_alignment = grid_alignment => setAttributes({ grid_alignment });

    //===> Grid Features <===//
    const set_grid_flow = grid_flow => grid_flow ? setAttributes({ grid_flow: "flow-reverse" }) : setAttributes({grid_flow :""});
    const set_grid_nowrap = grid_nowrap => grid_nowrap ? setAttributes({ grid_nowrap: "flow-nowrap" }) : setAttributes({grid_nowrap:""});
    const set_grid_masonry = grid_masonry => grid_masonry ? setAttributes({ grid_masonry: "px-masonry" }) : setAttributes({grid_masonry:""});
    const set_grid_gap_fix = grid_gap_fix => grid_gap_fix ? setAttributes({ grid_gap_fix: "gpy-fix" }) : setAttributes({grid_gap_fix:""});

    //===> Slider Attributes <===//
    const set_slider_mode = slider_mode => setAttributes({ slider_mode });

    //===> Set Phenix View <===//
    const setPhenixView = () => {
        //===> Check Site Editor <===//
        let siteEditor = window.frames['editor-canvas'];

        //===> Get the Element from Site Editor <===//
        if (siteEditor) {
            //===> Media Active <===//
            let mediaElements = siteEditor.document.querySelectorAll('.px-media');
            mediaElements = [...mediaElements];
            Phenix(mediaElements).multimedia();
        }

        //===> Set Background <===//
        if (!siteEditor) {
            Phenix('.px-media').multimedia();
        }
    };

    //===> Update Phenix Elements <===//
    useEffect(()=> {
        //===> Active Phenix Components <===//
        setPhenixView();

        //===> Fetch Post Types <===//
        apiFetch({path: 'wp/v2/taxonomies'}).then(taxonomies => {
            //===> Define Types <===//
            let new_taxonomies = [];

            //===> Get Current Active Types <===//
            for (const [key, value] of Object.entries(taxonomies)) {
                //===> Exclude the Core Types <===//
                if (!['nav_menu', 'post_tag'].includes(key)) {
                    new_taxonomies.push({"value":key, "label":value.name});
                }
            }

            //===> Set the new List if its Deferent <===//
            if (attributes.tax_list !== new_taxonomies) setAttributes({ tax_list : new_taxonomies });
        });

        //===> Fetch Post Types <===//
        apiFetch({path: 'wp/v2/types'}).then(post_types => {
            //===> Define Types <===//
            let new_types = [];

            //===> Get Current Active Types <===//
            for (const [key, value] of Object.entries(post_types)) {
                //===> Exclude the Core Types <===//
                if (!['attachment', 'nav_menu_item', 'wp_block', 'wp_navigation', 'wp_template', 'wp_template_part'].includes(key)) {
                    new_types.push({"value":key, "label":value.name});
                }
            }

            //===> Set the new List if its Deferent <===//
            if (attributes.types_list !== new_types) setAttributes({ types_list : new_types });
        });
    }, []);

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("Taxonomies Setting", "phenix")} initialOpen={true}>
                {/*===> Post Type <===*/}
                <SelectControl label={__("Taxonomy Type", "phenix")} value={attributes.taxonomy} onChange={set_taxonomy} options={attributes.tax_list}/>
                
                
                {/*===> Post Type <===*/}
                <SelectControl label={__("Data Type", "phenix")} value={attributes.post_type} onChange={set_post_type} options={attributes.types_list}/>

                {/*=== Card Template ===*/}
                <TextControl key="template-name" label={__("Card Template", "phenix")} value={ attributes.template_part } onChange={set_template_part}/>
                
                {/*===> Max Items and Order <===*/}
                <div className='row gpx-20 mb-15'>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <PhenixNumber label={__("Max Items", "phenix")} value={ attributes.query_count } onChange={set_query_count}></PhenixNumber>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <SelectControl label={__("Order By", "phenix")} value={attributes.order} onChange={set_order} options={[
                            { label: __('Oldest', "phenix"), value: 'ASC' },
                            { label: __('Newest', "phenix"),  value: 'DESC' },
                        ]}/>
                    </div>
                    {/*===> // Column <===*/}
                </div>

                {/*===> Hide Empty <===*/}
                <ToggleControl label={__("Hide Empty Taxonomies", "phenix")} checked={attributes.hide_empty} onChange={set_hide_empty}/>

                {/*===> Grid and Slider <===*/}
                <ToggleControl label={__("Enable Grid Mode", "phenix")} checked={attributes.grid_mode} onChange={set_grid_mode}/>
            </PanelBody>
            {/*===> Widget Panel <===*/}
            <PanelBody title="Loop Grid" initialOpen={true}>
                {/*===> Columns No. in Row <===*/}
                {!attributes.grid_cols_stat ? <div class="mb-15">
                    <PhenixNumber label={__("Columns in Row", "phenix")} icon="far fa-mobile-android" value={attributes.grid_cols.replace("row-cols-", "")} onChange={set_grid_cols} min={0} max={12}></PhenixNumber>
                </div> : ""}

                {/*===> Free Columns Size <===*/}
                <ToggleControl label={__("Free Columns Size ?", "phenix")} checked={attributes.grid_cols_stat} onChange={set_grid_cols_stat}/>
                
                {/*===> Switch Button <===*/}
                <ToggleControl label={__("Enable Slider Mode ?", "phenix")} checked={attributes.slider_mode} onChange={set_slider_mode}/>

                {/*===> Switch Buttons <===*/}
                <div className='row gpx-15 mb-15 mt-20'>
                    {/*===> Column [For Alignment] <===*/}
                    <div className='col-12 mb-20'>
                        <FlexAlignment label={__("Flexbox Alignment", "phenix")} value={attributes.grid_alignment} onChange={set_grid_alignment}></FlexAlignment>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-5'>
                        {/*===> Switch Button <===*/}
                        <ToggleControl label={__("Reverse ", "phenix")} checked={attributes.grid_flow.length > 0} onChange={set_grid_flow}/>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-7'>
                        {/*===> Switch Button <===*/}
                        <ToggleControl label={__("Gap-Y Fix", "phenix")} checked={attributes.grid_gap_fix.length > 0} onChange={set_grid_gap_fix}/>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-5'>
                        {/*===> Switch Button <===*/}
                        <ToggleControl label={__("Nowrap", "phenix")} checked={attributes.grid_nowrap.length > 0} onChange={set_grid_nowrap}/>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-7'>
                        {/*===> Switch Button <===*/}
                        <ToggleControl label={__("Masonry Mode", "phenix")} checked={attributes.grid_masonry.length > 0} onChange={set_grid_masonry}/>
                    </div>
                    {/*===> // Column <===*/}
                </div>
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        {attributes.preview ? 
            <img src="https://design.phenixthemes.com/px-assets/slider-placeholder.svg" alt="" className='fluid' />
        :
            <div {...blockProps}>
                <ServerSideRender block="phenix/taxonomies" attributes={attributes} />
            </div>
        }
    </>);
}