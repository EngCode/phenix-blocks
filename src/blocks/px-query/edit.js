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

//====> Edit Mode <====//
export default function Edit(props) {
    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();

    //===> Set Attributes <===//
    const set_order = order => setAttributes({ order });
    const set_query_type = query_type => setAttributes({ query_type });
    const set_post_type  = post_type  => setAttributes({ post_type });
    const set_per_page   = per_page   => setAttributes({ per_page });
    const set_pagination = pagination => setAttributes({ pagination });
    const set_isSlider = isSlider => setAttributes({ isSlider });

    //===> Set Phenix View <===//
    const setPhenixView = () => {
        //===> Check Site Editor <===//
        let siteEditor = window.frames['editor-canvas'];

        //===> Get the Element from Site Editor <===//
        if (siteEditor) {
            //===> Slider Active <===//
            if (attributes.isSlider) {
                let sliderElements = siteEditor.document.querySelectorAll('.px-slider');
                sliderElements = [...sliderElements];
                Phenix(sliderElements).slider();
            }

            //===> Media Active <===//
            let mediaElements = siteEditor.document.querySelectorAll('.px-media');
            mediaElements = [...mediaElements];
            Phenix(mediaElements).multimedia();
        }

        //===> Set Background <===//
        if (!siteEditor) {
            if(attributes.isSlider) Phenix('.px-slider').slider();
            Phenix('.px-media').multimedia();
        }
    }

    //===> Update Phenix Elements <===//
    useEffect(()=> setPhenixView());

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="Setting" initialOpen={true}>
                {/*===> Query Type <===*/}
                <SelectControl label="Query Type" value={attributes.query_type} onChange={set_query_type} options={[
                    { label: 'Default', value: 'native' },
                    { label: 'Custom',  value: 'custom' },
                ]}/>

                {/*===> Post Type <===*/}
                {attributes.query_type === 'custom' ? <>
                    <SelectControl label="Post Type" value={attributes.post_type} onChange={set_post_type} options={[
                        { label: 'Blog', value: 'post' },
                        { label: 'Products',  value: 'products' },
                        { label: 'Products Sublist',  value: 'sublist' },
                        { label: 'Home Slider',  value: 'home-slider' },
                    ]}/>

                    {/*===> Post Type <===*/}
                    <SelectControl label="Order By" value={attributes.order} onChange={set_order} options={[
                        { label: 'Oldest First', value: 'ASC' },
                        { label: 'Newest First',  value: 'DESC' },
                    ]}/>

                    {/*===> Posts Number <===*/}
                    <RangeControl label="Posts per Page" value={ attributes.per_page } onChange={set_per_page} min={3} max={36} />
                </> : null}

                {/*===> Slider <===*/}
                <ToggleControl label="Carousel Mode" checked={attributes.isSlider} onChange={set_isSlider} />

                {/*===> Pagination <===*/}
                <ToggleControl label="Show Pagination" checked={attributes.pagination} onChange={set_pagination}/>
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        {attributes.post_type === 'home-slider' ? 
            <img src="https://design.phenixthemes.com/px-assets/slider-placeholder.svg" alt="" className='fluid' />
        :
            <ServerSideRender block="phenix/px-query" attributes={attributes} />
        }
    </>);
}