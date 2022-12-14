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

import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import ServerSideRender from '@wordpress/server-side-render';

//====> Edit Mode <====//
export default function Edit(props) {
    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();

    //===> Set Attributes <===//
    const set_taxonomy = taxonomy => setAttributes({ taxonomy });
    const set_post_type = post_type => setAttributes({ post_type });

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="Setting" initialOpen={true}>
                {/*===> Taxonomy <===*/}
                <SelectControl label="Taxonomy Type" value={attributes.taxonomy} onChange={set_taxonomy} options={[
                    { label: 'Categories', value: 'category' },
                    // { label: 'Cultures',  value: 'cultures' },
                    // { label: 'Products Lines',  value: 'products-lines' },
                ]}/>
                {/*===> Post Type <===*/}
                <SelectControl label="Post Type" value={attributes.post_type} onChange={set_post_type} options={[
                    { label: 'Blog', value: 'post' },
                    // { label: 'Products',  value: 'products' },
                    // { label: 'Products Sublist',  value: 'sublist' },
                ]}/>
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        <ServerSideRender block="phenix/taxonomies-list" attributes={attributes} />
    </>);
}