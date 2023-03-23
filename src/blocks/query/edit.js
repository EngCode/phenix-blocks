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
import OptionControl from '../px-controls/switch';
import ScreensTabs from "../px-controls/tabs";

//====> Edit Mode <====//
export default function Edit(props) {
    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();
    const [postTypes, setPostTypes] = useState([{"value": attributes.post_type, "label": __('Default', 'phenix')}]);

    //===> Query Options <===//
    const set_order = order => setAttributes({ order }),
        set_post_type  = post_type  => setAttributes({ post_type }),
        set_grid_mode = grid_mode => setAttributes({ grid_mode }),
        set_per_page   = per_page   => setAttributes({ per_page }),
        set_pagination = pagination => setAttributes({ pagination }),
        set_template_part = template_part => setAttributes({ template_part }),
        set_slider_mode = value => {
            //===> Define Data <===//
            let options = attributes.grid;

            //===> Convert Grid to Slider <===//
            if (options.state && value) options.state = false;
            if (options.cols && parseInt(options.cols) < 1) options.cols = 1;

            //===> Set Value <===//
            setAttributes({slider_mode: value, grid: {...options}});
        };

    //===> Grid Options <===//
    const set_grid_cols = value => {
        //===> Define Data <===//
        let grid_ops = attributes.grid;
        //===> Set Value <===//
        grid_ops.cols = value;
        setAttributes({ grid: {...grid_ops} });
    },

    set_grid_cols_resp = (value, screen) => {
        //===> Define Data <===//
        let grid_ops = attributes.grid;
        //===> Set Value <===//
        grid_ops[`cols-${screen}`] = value;
        setAttributes({ grid: {...grid_ops} });
    },

    set_grid_state = target => {
        //==> Get Current <==//
        let grid_ops = attributes.grid;

        //==> Set Value <==//
        grid_ops.state = target.checked;
        console.log(grid_ops);
        setAttributes({grid : {...grid_ops}});
    };

    //===> Grid Utilites <===//
    const set_grid_flow = target => {
        //==> Get Current <==//
        let grid_ops = attributes.grid;

        //==> Set Value <==//
        grid_ops.flow = target.checked ? target.value : "";
        setAttributes({grid : {...grid_ops}});
    },

    set_grid_masonry = target => {
        //==> Get Current <==//
        let grid_ops = attributes.grid;

        //==> Set Value <==//
        grid_ops.masonry = target.checked ? target.value : "";
        setAttributes({grid : {...grid_ops}});
    };

    //===> Slider Options <===//
    const set_slider_type = value => {
        //==> Get Current <==//
        let options = attributes.slider;

        //==> Set Value <==//
        options.type = value;
        setAttributes({ slider : {...options} });
    },

    set_slider_steps = value => {
        //==> Get Current <==//
        let options = attributes.slider;

        //==> Set Value <==//
        options.steps = value;
        setAttributes({ slider : {...options} });
    },

    set_slider_duration = value => {
        //==> Get Current <==//
        let options = attributes.slider;

        //==> Set Value <==//
        options.duration = value;
        setAttributes({ slider : {...options} });
    },

    set_slider_speed = value => {
        //==> Get Current <==//
        let options = attributes.slider;

        //==> Set Value <==//
        options.speed = value;
        setAttributes({ slider : {...options} });
    },

    set_slider_autoplay = value => {
        //==> Get Current <==//
        let options = attributes.slider;

        //==> Set Value <==//
        options.autoplay = value;
        setAttributes({slider : {...options}});
    },

    set_slider_controls = value => {
        //==> Get Current <==//
        let options = attributes.slider;

        //==> Set Value <==//
        options.controls = value;
        setAttributes({slider : {...options}});
    },

    set_slider_pagination = value => {
        //==> Get Current <==//
        let options = attributes.slider;

        //==> Set Value <==//
        options.pagination = value;
        setAttributes({slider : {...options}});
    };

    //===> Set Phenix Components <===//
    const setPhenixView = () => {
        //===> Get View iFrame <===//
        if (window.frames['editor-canvas']) {
            //===> View Script <===//
            let frameDoc = window.frames['editor-canvas'].document;
            setTimeout(() => {
                //===> Run Multimedia <===//
                frameDoc.querySelectorAll(".px-media").forEach(element => Phenix(element).multimedia());

                //===> Run Sliders <===//
                frameDoc.querySelectorAll(".px-slider:not(.splide)").forEach(element => {
                    element.classList.add('edit-mode');
                    element.getAttribute('data-autoplay') ? element.setAttribute('data-autoplay', false) : null;
                    Phenix(element).slider({autoplay: false});
                    //===> Stretch Fix <===//
                    let slider_element = element.querySelector(".splide__list");
                    if (slider_element) slider_element.style.maxHeight = Phenix(slider_element).height();
                });
            }, 2000);
        } else {
        }
        //===> Timeout for Loading <===//
        setTimeout(() => {
            //===> Get Elements <===//
            let Sliders  = Phenix('.px-slider'),
                MediaEls = Phenix(".px-media");

            //===> Run Phenix Components <===//
            if(MediaEls.length > 0) MediaEls.multimedia();
            if(Sliders.length > 0) {
                Sliders.forEach(slider => {
                    slider.getAttribute('data-autoplay') ? slider.setAttribute('data-autoplay', false) : null;
                });
                Sliders.addClass('edit-mode').slider({autoplay: false});
                //===> Stretch Fix <===//
                Sliders.forEach(element => {
                    let slider_element = element.querySelector(".splide__list");
                    if (slider_element) slider_element.style.maxHeight = Phenix(slider_element).height();
                    element.getAttribute('data-autoplay') ? element.setAttribute('data-autoplay', false) : null;
                });
            }
        }, 2000);
    }

    useEffect(()=> { setPhenixView(); }, [attributes]);

    //===> Fetch Data for Options <===//
    useEffect(()=> {
        //===> Fetch Post Types <===//
        if (postTypes.length < 2) apiFetch({path: 'wp/v2/types'}).then(post_types => {
            //===> Reset Types <===//
            let new_types = [{"value": "default", "label": "Default"}];

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
    }, []);

    //===> Responsive Options <===//
    const responsive_options = (screen) => {
        //===> Layout <===//
        return <>
            {/*===> Column <===*/}
            <div className='col col-6 mb-15'>
                <PhenixNumber label={__("Columns No.", "phenix")} value={attributes.grid[`cols-${screen}`] || 0} onChange={value => set_grid_cols_resp(value, screen)} min={0} max={12}></PhenixNumber>
            </div>
            {/*===> // Column <===*/}
        </>
    };

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("General Setting", "phenix")} initialOpen={true}>
                {/*===> Post Type <===*/}
                <SelectControl label={__("Data Type", "phenix")} value={attributes.post_type} onChange={set_post_type} options={postTypes}/>

                {/*===> Group <===*/}
                {attributes.post_type !== 'default' ? 
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
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <ToggleControl label={__("Slider Mode", "phenix")} checked={attributes.slider_mode} onChange={set_slider_mode}/>
                    </div>
                    {/*===> // Column <===*/}
                </div>
            </PanelBody>
            {/*===> Widget Panel <===*/}
            {attributes.grid_mode && !attributes.slider_mode ? <PanelBody title={__("Loop Grid", "phenix")} initialOpen={true}>
                {/*===> Columns No. in Row <===*/}
                {!attributes.grid.state ? <div className="mb-15">
                    <PhenixNumber label={__("Columns in Row", "phenix")} icon="far fa-mobile-android" value={attributes.grid.cols?.replace("row-cols-", "") || 1} onChange={set_grid_cols} min={0} max={12}></PhenixNumber>
                </div> : ""}

                {/*===> Switch Button <===*/}
                <OptionControl name='grid-state' checked={attributes.grid.state} onChange={set_grid_state} type='switch-checkbox' className='small'>
                    <span>{__("Free Columns Size ?", "phenix")}</span>
                </OptionControl>

                {/*===> Switch Buttons <===*/}
                <div className='row gpx-15 mb-15'>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        {/*===> Switch Button <===*/}
                        <OptionControl name='grid-state' value="flow-reverse" checked={attributes.grid.flow?.length > 0} onChange={set_grid_flow} type='switch-checkbox' className='small'>
                            <span>{__("Reverse", "phenix")}</span>
                        </OptionControl>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        {/*===> Switch Button <===*/}
                        <OptionControl name='grid-masonry' value="px-masonry" checked={attributes.grid.masonry?.length > 0} onChange={set_grid_masonry} type='switch-checkbox' className='small'>
                            <span>{__("Masonry", "phenix")}</span>
                        </OptionControl>
                    </div>
                    {/*===> // Column <===*/}
                </div>
            </PanelBody> : null}
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
                        <PhenixNumber label={__("Columns No.", "phenix")} value={attributes.grid.cols ? attributes.grid.cols : 1} onChange={set_grid_cols} min={0} max={12}></PhenixNumber>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6 mb-15'>
                        <PhenixNumber label={__("Steps", "phenix")} value={attributes.slider.steps || 1} onChange={set_slider_steps} min={1} max={12}></PhenixNumber>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6 mb-15'>
                        <PhenixNumber label={__("Duration", "phenix")} value={attributes.slider.duration || 6000} onChange={set_slider_duration} min={3000} max={20000} steps={100}></PhenixNumber>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6 mb-15'>
                        <PhenixNumber label={__("Speed", "phenix")} value={attributes.slider.speed || 700} onChange={set_slider_speed} min={300} max={3000} steps={100}></PhenixNumber>
                    </div>
                    {/*===> // Column <===*/}
                </div>

                {/*===> Switch Buttons <===*/}
                <div className='pdt-15 divider-t'>
                    <ToggleControl label={__("Enable Autoplay", "phenix")} checked={attributes.slider.autoplay || false} onChange={set_slider_autoplay}/>
                    <ToggleControl label={__("Enable Arrows Buttons", "phenix")} checked={attributes.slider.controls || false} onChange={set_slider_controls}/>
                    <ToggleControl label={__("Enable Bullet Pagination", "phenix")} checked={attributes.slider.pagination || false} onChange={set_slider_pagination}/>
                </div>
            </PanelBody> : null}
            {/*===> Widgets Panel <===*/}
            <PanelBody title={__("Responsive Options", "phenix")} initialOpen={false}>
                <ScreensTabs md={responsive_options} lg={responsive_options} xl={responsive_options} />
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        {attributes.preview ? 
            <img src="https://design.phenixthemes.com/px-assets/slider-placeholder.svg" alt="" className='fluid' />
        :
            <div {...blockProps}>
                <ServerSideRender block="phenix/query" attributes={attributes} />
                { setPhenixView() }
            </div>
        }
    </>);
}