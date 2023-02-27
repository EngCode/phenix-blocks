//====> WP Modules <====//
import { __ } from '@wordpress/i18n';

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
import PhenixNumber from "../px-controls/number";
import FlexAlignment from "../px-controls/grid/alignment";

//====> Edit Mode <====//
export default function Edit(props) {
    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();
    const [postTypes, setPostTypes] = useState([{"value": attributes.post_type, "label": __('Default', 'phenix')}]);

    //===> Query Options <===//
    const set_order = order => setAttributes({ order }),
          set_post_type  = post_type  => setAttributes({ post_type }),
          set_per_page   = per_page   => setAttributes({ per_page }),
          set_pagination = pagination => setAttributes({ pagination }),
          set_native_query = native_query => setAttributes({ native_query }),
          set_template_part = template_part => setAttributes({ template_part });

    //===> Grid Options <===//
    const set_grid_mode = grid_mode => setAttributes({ grid_mode }),
          set_grid_cols = grid_cols => setAttributes({ grid_cols: (!attributes.slider_mode ? "row-cols-" : "") + (grid_cols > 0 ? grid_cols : "auto") }),
          set_grid_cols_stat = grid_cols_stat => setAttributes({ grid_cols_stat }),
          set_grid_alignment = grid_alignment => setAttributes({ grid_alignment });
    
    //===> Grid Utilites <===//
    const set_grid_flow = grid_flow => grid_flow ? setAttributes({ grid_flow: "flow-reverse" }) : setAttributes({grid_flow :""}),
          set_grid_nowrap = grid_nowrap => grid_nowrap ? setAttributes({ grid_nowrap: "flow-nowrap" }) : setAttributes({grid_nowrap:""}),
          set_grid_masonry = grid_masonry => grid_masonry ? setAttributes({ grid_masonry: "px-masonry" }) : setAttributes({grid_masonry:""});

    //===> Slider Options <===//
    const set_slider_type = slider_type => setAttributes({ slider_type }),
          set_slider_steps = slider_steps => setAttributes({ slider_steps }),
          set_slider_duration = slider_duration => setAttributes({ slider_duration }),
          set_slider_speed = slider_speed => setAttributes({ slider_speed }),
          set_slider_autoplay = slider_autoplay => setAttributes({ slider_autoplay }),
          set_slider_controls = slider_controls => setAttributes({ slider_controls }),
          set_slider_pagination = slider_pagination => setAttributes({ slider_pagination }),
          set_slider_mode = slider_mode => setAttributes({
            slider_mode: slider_mode,
            grid_cols_stat : slider_mode ? false : attributes.grid_cols_stat,
            grid_cols : slider_mode && parseInt(attributes.grid_cols) < 1 ? 1 : attributes.grid_cols,
        });

    //===> Set Phenix Components <===//
    const setPhenixView = () => {
        //===> Timeout for Loading <===//
        setTimeout(() => {
            //===> Check Site Editor <===//
            let siteEditor = window.frames['editor-canvas'],
                mediaElement = '.px-media',
                sliderElement = '.px-slider:not(.splide)';

            //===> Correct Editor Target for Site-Editor <===//
            if (siteEditor) {
                //===> Correct Media <===//
                mediaElement = [...siteEditor.document.querySelectorAll(mediaElement)];
                //===> Correct Slider <===//
                sliderElement = [...siteEditor.document.querySelectorAll(sliderElement)];
            }

            //===> Run Phenix Components <===//
            Phenix(mediaElement).multimedia();
            Phenix(sliderElement).slider();
        }, 1000);
    }

    //===> Fetch Data for Options <===//
    useEffect(()=> {
        //===> Fetch Post Types <===//
        if (postTypes.length < 2) apiFetch({path: 'wp/v2/types'}).then(post_types => {
            //===> Reset Types <===//
            let new_types = [];
    
            //===> Get Current Active Types <===//
            for (const [key, value] of Object.entries(post_types)) {
                //===> Exclude the Core Types <===//
                if (!['attachment', 'nav_menu_item', 'wp_block', 'wp_navigation', 'wp_template', 'wp_template_part'].includes(key)) {
                    new_types.push({"value":key, "label":value.name});
                }
            }
    
            //===> Set the new List if its Deferent <===//
            if (new_types.length > 0) setPostTypes([...new_types]);
        });

        //===> Active Phenix Components <===//
        setPhenixView();
    }, []);
    
    //===> Set Edit Mode <===//
    if (!attributes.className?.includes('edit-mode')) attributes.className += " edit-mode";

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("General Setting", "phenix")} initialOpen={true}>
                {/*===> Post Type <===*/}
                {!attributes.native_query ? <SelectControl label={__("Data Type", "phenix")} value={attributes.post_type} onChange={set_post_type} options={postTypes}/> : ""}
                <ToggleControl label={__("Native Query", "phenix")} checked={attributes.native_query} onChange={set_native_query}/>

                {/*===> Group <===*/}
                {!attributes.native_query ? 
                <div className='row gpx-20 mb-15'>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <PhenixNumber label={__("Per Page", "phenix")} value={ attributes.per_page } onChange={set_per_page} min={3} max={36}></PhenixNumber>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <SelectControl label={__("Order By", "phenix")} value={attributes.order} onChange={set_order} options={[
                            { label: __('Oldest', "phenix"), value: 'ASC' },
                            { label: __('Newest', "phenix"),  value: 'DESC' },
                        ]}/>
                    </div>
                    {/*===> // Column <===*/}
                </div> : ""}
                {/*=== Card Template ===*/}
                <TextControl key="template-name" label={__("Card Template", "phenix")} value={ attributes.template_part } onChange={set_template_part}/>

                {/*===> Group <===*/}
                <div className='row gpx-20 mb-15'>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <ToggleControl label={__("Pagination", "phenix")} checked={attributes.pagination} onChange={set_pagination}/>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <ToggleControl label={__("Grid Mode", "phenix")} checked={attributes.grid_mode} onChange={set_grid_mode}/>
                    </div>
                    {/*===> // Column <===*/}
                </div>
            </PanelBody>
            {/*===> Widget Panel <===*/}
            {attributes.grid_mode ? <PanelBody title={__("Loop Grid", "phenix")} initialOpen={true}>
                {/*===> Columns No. in Row <===*/}
                {!attributes.slider_mode ? <>
                    {!attributes.grid_cols_stat ? <div className="mb-15">
                        <PhenixNumber label={__("Columns in Row", "phenix")} icon="far fa-mobile-android" value={attributes.grid_cols.replace("row-cols-", "")} onChange={set_grid_cols} min={1} max={12}></PhenixNumber>
                    </div> : ""}

                    {/*===> Free Columns Size <===*/}
                    <ToggleControl label={__("Free Columns Size ?", "phenix")} checked={attributes.grid_cols_stat} onChange={set_grid_cols_stat}/>    
                </> : null}

                {/*===> Switch Buttons <===*/}
                <div className='row gpx-15 mb-15'>
                    {/*===> Column [For Alignment] <===*/}
                    <div className='col-12 mb-20'>
                        <FlexAlignment label={__("Flexbox Alignment", "phenix")} value={attributes.grid_alignment} onChange={set_grid_alignment}></FlexAlignment>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        {/*===> Switch Button <===*/}
                        <ToggleControl label={__("Reverse ", "phenix")} checked={attributes.grid_flow.length > 0} onChange={set_grid_flow}/>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        {/*===> Switch Button <===*/}
                        <ToggleControl label={__("Nowrap", "phenix")} checked={attributes.grid_nowrap.length > 0} onChange={set_grid_nowrap}/>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        {/*===> Switch Button <===*/}
                        <ToggleControl label={__("Slider Mode", "phenix")} checked={attributes.slider_mode} onChange={set_slider_mode}/>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        {/*===> Switch Button <===*/}
                        <ToggleControl label={__("Masonry", "phenix")} checked={attributes.grid_masonry.length > 0} onChange={set_grid_masonry}/>
                    </div>
                    {/*===> // Column <===*/}
                </div>
            </PanelBody> : ""}
            {/*===> Widget Panel <===*/}
            {attributes.slider_mode ? <PanelBody title={__("Slider Options", "phenix")} initialOpen={true}>
                {/*===> Elements Group <===*/}
                <div className='row gpx-20'>
                    {/*===> Column <===*/}
                    <div className='col-12 mb-15'>
                        <SelectControl label={__("Type", "phenix")} value={attributes.slider_type} onChange={set_slider_type} options={[
                            { label: __('Loop', "phenix"), value: 'loop' },
                            { label: __('Fading', "phenix"),  value: 'fade' },
                            { label: __('Sliding', "phenix"),  value: 'slide' },
                        ]}/>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6 mb-15'>
                        <PhenixNumber label={__("Columns No.", "phenix")} value={attributes.grid_cols.replace("row-cols-", "")} onChange={set_grid_cols} min={1} max={12}></PhenixNumber>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6 mb-15'>
                        <PhenixNumber label={__("Steps", "phenix")} value={attributes.slider_steps} onChange={set_slider_steps} min={1} max={12}></PhenixNumber>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6 mb-15'>
                        <PhenixNumber label={__("Duration", "phenix")} value={attributes.slider_duration} onChange={set_slider_duration} min={3000} max={20000} steps={100}></PhenixNumber>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6 mb-15'>
                        <PhenixNumber label={__("Speed", "phenix")} value={attributes.slider_speed} onChange={set_slider_speed} min={300} max={3000} steps={100}></PhenixNumber>
                    </div>
                    {/*===> // Column <===*/}
                </div>

                {/*===> Switch Buttons <===*/}
                <div className='pdt-15 divider-t'>
                    <ToggleControl label={__("Enable Autoplay", "phenix")} checked={attributes.slider_autoplay} onChange={set_slider_autoplay}/>
                    <ToggleControl label={__("Enable Arrows Buttons", "phenix")} checked={attributes.slider_controls} onChange={set_slider_controls}/>
                    <ToggleControl label={__("Enable Bullet Pagination", "phenix")} checked={attributes.slider_pagination} onChange={set_slider_pagination}/>
                </div>
            </PanelBody> : ""}
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        {attributes.preview ? 
            <img src="https://design.phenixthemes.com/px-assets/slider-placeholder.svg" alt="" className='fluid' />
        :
            <div {...blockProps}>
                <ServerSideRender block="phenix/query" attributes={attributes} />
            </div>
        }
    </>);
}