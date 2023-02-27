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

import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import ServerSideRender from '@wordpress/server-side-render';

//====> Phenix Modules <====//
import PhenixNumber from "../px-controls/number";

//====> Edit Mode <====//
export default function Edit(props) {
    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();
    const [PostTypes, setPostTypes] = useState([{"value": attributes.post_type, "label": __('Default', 'phenix')}]);
    const [TaxonomyList, setTaxonomyList] = useState([{"value": attributes.taxonomy, "label": __('Default', 'phenix')}]);

    //===> Set Attributes <===//
    const set_order = order => setAttributes({ order });
    const set_taxonomy = taxonomy => setAttributes({ taxonomy });
    const set_post_type = post_type => setAttributes({ post_type });
    const set_hide_empty = hide_empty => setAttributes({ hide_empty });
    const set_query_count = query_count => setAttributes({ query_count });

    //===> Update Phenix Elements <===//
    useEffect(()=> {
        //===> Fetch Taxonomies <===//
        if (TaxonomyList.length < 2) apiFetch({path: 'wp/v2/taxonomies'}).then(taxonomies => {
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
            if (TaxonomyList !== new_taxonomies) setPostTypes([...new_taxonomies]);
        });

        //===> Fetch Post Types <===//
        if (postTypes.length < 2) apiFetch({path: 'wp/v2/types'}).then(post_types => {
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
            if (PostTypes !== new_types) setTaxonomyList([...new_types]);
        });
    }, []);

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("General Setting", "phenix")} initialOpen={true}>
                {/*===> Post Type <===*/}
                <SelectControl label={__("Taxonomy Type", "phenix")} value={attributes.taxonomy} onChange={set_taxonomy} options={TaxonomyList}/>

                {/*===> Post Type <===*/}
                <SelectControl label={__("Data Type", "phenix")} value={attributes.post_type} onChange={set_post_type} options={PostTypes}/>
            
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
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        <div {...blockProps}>
            <ServerSideRender block="phenix/taxonomies-list" attributes={attributes} />
        </div>
    </>);
}