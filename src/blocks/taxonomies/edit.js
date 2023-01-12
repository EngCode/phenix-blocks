//====> WP Modules <====//
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
import PhenixNumber from "../px-controls/form/num-counter";

//====> Edit Mode <====//
export default function Edit(props) {
    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();

    //===> Set Attributes <===//
    const set_order = order => setAttributes({ order });
    const set_taxonomy = taxonomy => setAttributes({ taxonomy });
    const set_grid_mode = grid_mode => setAttributes({ grid_mode });
    const set_post_type = post_type => setAttributes({ post_type });
    const set_hide_empty = hide_empty => setAttributes({ hide_empty });
    const set_slider_mode = slider_mode => setAttributes({ slider_mode });
    const set_query_count = query_count => setAttributes({ query_count });
    const set_template_part = template_part => setAttributes({ template_part });

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
    useEffect(()=> setPhenixView());

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="Setting" initialOpen={true}>
                {/*===> Post Type <===*/}
                <SelectControl label="Taxonomy Type" value={attributes.taxonomy} onChange={set_taxonomy} options={attributes.tax_list}/>
                
                {/*===> Hide Empty <===*/}
                <ToggleControl label="Hide Empty Taxonomies" checked={attributes.hide_empty} onChange={set_hide_empty}/>

                {/*===> Post Type <===*/}
                <SelectControl label="Data Type" value={attributes.post_type} onChange={set_post_type} options={attributes.types_list}/>

                {/*=== Template Name ===*/}
                <TextControl key="template-name" label="Template Name" value={ attributes.template_part } onChange={set_template_part}/>
                
                {/*===> Group <===*/}
                <div className='row gpx-20 mb-15'>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <PhenixNumber label="Max Items" value={ attributes.query_count } onChange={set_query_count}></PhenixNumber>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <SelectControl label="Order By" value={attributes.order} onChange={set_order} options={[
                            { label: 'Oldest', value: 'ASC' },
                            { label: 'Newest',  value: 'DESC' },
                        ]}/>
                    </div>
                    {/*===> // Column <===*/}
                </div>

                {/*===> Grid and Slider <===*/}
                <ToggleControl label="Enable Grid Mode" checked={attributes.grid_mode} onChange={set_grid_mode}/>
                <ToggleControl label="Enable Slider Mode ?" checked={attributes.slider_mode} onChange={set_slider_mode}/>
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