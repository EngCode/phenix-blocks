//====> WP Modules <====//
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl,
    RangeControl
} from '@wordpress/components';

import {
    useBlockProps,
    InspectorControls
} from '@wordpress/block-editor';

import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
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
    const set_post_type  = post_type  => setAttributes({ post_type });
    const set_per_page   = per_page   => setAttributes({ per_page });
    const set_pagination = pagination => setAttributes({ pagination });
    const set_template_part = template_part => setAttributes({ template_part });

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

    // blockProps.className += ' col tx-align-center';

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="Query Options" initialOpen={true}>
                {/*===> Post Type <===*/}
                <SelectControl label="Data Type" value={attributes.post_type} onChange={set_post_type} options={attributes.types_list}/>
                
                {/*===> Group <===*/}
                <div className='row gpx-20 mb-15'>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <PhenixNumber label="Items Number" value={ attributes.per_page } onChange={set_per_page} min={3} max={36}></PhenixNumber>
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
                
                {/*=== Template Name ===*/}
                <TextControl key="template-name" label="Template Name" value={ attributes.template_part } onChange={set_template_part}/>

                {/*===> Pagination <===*/}
                <ToggleControl label="Show Pagination" checked={attributes.pagination} onChange={set_pagination}/>
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        {attributes.preview ? 
            <img src="https://design.phenixthemes.com/px-assets/slider-placeholder.svg" alt="" className='fluid' />
        :
            <div {...blockProps}>
                {/* <div className='pdy-30 pdx-25 bg-alpha-05 radius-md border-1 border-dashed border-alpha-25 fs-14'>Dynamic Query Loop For : {attributes.post_type}</div> */}
                {/* <ServerSideRender block="phenix/px-navigation" attributes={attributes} /> */}
                <ServerSideRender block="phenix/query" attributes={attributes} />
            </div>
        }
    </>);
}