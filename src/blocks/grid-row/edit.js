//====> WP Modules <====//
import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    SelectControl,
    ToggleControl
} from '@wordpress/components';

import {
    InnerBlocks,
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls
} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import OptionControl from '../px-controls/switch';
import FlexAlignment from '../px-controls/alignment';
import PhenixNumber from "../px-controls/number";
import ScreensTabs from "../px-controls/tabs";

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Flexbox Options <===//
    const set_alignment = alignment => {
        //==> Get Current <==//
        let flex_ops = attributes.flexbox;

        //==> Set Value <==//
        flex_ops.align = alignment;
        setAttributes({ flexbox : {...flex_ops} });
    };

    //==> Flow <==//
    const set_flex_flow = target => {
        //==> Get Current <==//
        let flex_ops = attributes.flexbox;

        //==> Set Value <==//
        flex_ops.flow = target.checked ? target.value : "";
        setAttributes({flexbox : {...flex_ops}});
    };

    //==> No-Wrap <==//
    const set_flex_nowrap = target => {
        //==> Get Current <==//
        let flex_ops = attributes.flexbox;

        //==> Set Value <==//
        flex_ops.nowrap = target.checked ? target.value : "";
        setAttributes({flexbox : {...flex_ops}});
    };

    //==> Masonry <==//
    const set_flex_masonry = target => {
        //==> Get Current <==//
        let flex_ops = attributes.flexbox;

        //==> Set Value <==//
        flex_ops.masonry = target.checked ? target.value : "";
        setAttributes({flexbox : {...flex_ops}});
    };

    //==> Equal Columns <==//
    const set_flex_equals = target => {
        //==> Get Current <==//
        let flex_ops = attributes.flexbox;

        //==> Set Value <==//
        flex_ops.equals = target.checked;        
        setAttributes({flexbox : {...flex_ops}});
    };

    //===> Columns Options <===//
    const set_flexbox_cols = value => {
        //===> Define Data <===//
        let flexbox_ops = attributes.flexbox;
        //===> Set Value <===//
        flexbox_ops.cols = value;
        setAttributes({ flexbox: {...flexbox_ops} });
    },

    set_flexbox_cols_resp = (value, screen) => {
        //===> Define Data <===//
        let flexbox_ops = attributes.flexbox;
        //===> Set Value <===//
        flexbox_ops[`cols-${screen}`] = value;
        setAttributes({ flexbox: {...flexbox_ops} });
    },

    set_alignment_resp = (value, screen) => {
        //===> Define Data <===//
        let flexbox_ops = attributes.flexbox;
        //===> Set Value <===//
        flexbox_ops[`align-${screen}`] = value;
        setAttributes({ flexbox: {...flexbox_ops} });
    },

    set_flex_flow_resp = (value, screen) => {
        //===> Define Data <===//
        let flexbox_ops = attributes.flexbox;
        //===> Set Value <===//
        flexbox_ops[`flow-${screen}`] = value;
        setAttributes({ flexbox: {...flexbox_ops} });
    },

    set_flex_nowrap_resp = (value, screen) => {
        //===> Define Data <===//
        let flexbox_ops = attributes.flexbox;
        //===> Set Value <===//
        flexbox_ops[`nowrap-${screen}`] = value;
        setAttributes({ flexbox: {...flexbox_ops} });
    },

    set_flex_masonry_resp = (value, screen) => {
        //===> Define Data <===//
        let flexbox_ops = attributes.flexbox;
        //===> Set Value <===//
        flexbox_ops[`masonry-${screen}`] = value;
        setAttributes({ flexbox: {...flexbox_ops} });
    };

    //==> Slider Mode <==//
    const set_flex_slider = target => {
        //==> Get Current <==//
        let flex_ops = attributes.flexbox;

        //==> Set Value <==//
        flex_ops.slider = target.checked;        
        setAttributes({flexbox : {...flex_ops}});
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

    //===> Responsive Options <===//
    const responsive_options = (screen) => {
        return <>
            {/*===> Column <===*/}
            {attributes.flexbox.equals || attributes.flexbox.slider ? <>
                <div className='col col-6 mb-15'>
                    <PhenixNumber label={__("Columns No.", "phenix")} value={attributes.flexbox[`cols-${screen}`] ? attributes.flexbox[`cols-${screen}`] : 1} onChange={value => set_flexbox_cols_resp(value, screen)} min={1} max={12}></PhenixNumber>
                </div>
            </> : null}
            {/*===> Flexbox Properties <===*/}
            {!attributes.flexbox.slider ? <div className='row gpx-15 mb-10 divider-b'>
                {/*===> Column <===*/}
                <div className='col-12 mb-15'>
                    <FlexAlignment label={__("Grid Alignment", "phenix")} value={attributes.flexbox[`align-${screen}`] || ""} onChange={value => set_alignment_resp(value.replace('align-', `align-${screen}-`), screen)}></FlexAlignment>
                </div>
                {/*===> Column <===*/}
                <div className='col-12 flexbox mb-15'>
                    {/*===> Label <===*/}
                    <label className='col-12 mb-5 tx-UpperCase'>{__("Grid Options", "phenix")}</label>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`flex-${screen}-flow`} value={`flow-${screen}-reverse`} checked={attributes.flexbox[`flow-${screen}`]?.length > 0} onChange={value => set_flex_flow_resp(value, screen)} type='checkbox' className='tiny mb-5 me-10'>
                        <span className='fas fa-check radius-circle'>{__("Reverse ", "phenix")}</span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`flex-${screen}-nowrap`} value={`flow-${screen}-nowrap`} checked={attributes.flexbox[`nowrap-${screen}`]?.length > 0} onChange={value => set_flex_nowrap_resp(value, screen)} type='checkbox' className='tiny mb-5 me-10'>
                        <span className='fas fa-check radius-circle'>{__("Nowrap", "phenix")}</span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`flex-${screen}-masonry`} value={`px-masonry-${screen}`} checked={attributes.flexbox[`masonry-${screen}`]?.length > 0} onChange={value => set_flex_masonry_resp(value, screen)} type='checkbox' className='tiny mb-5'>
                        <span className='fas fa-check radius-circle'>{__("Masonry", "phenix")}</span>
                    </OptionControl>
                </div>
                {/*===> // Column <===*/}
            </div> : null}
            {/*===> // Column <===*/}
        </>
    };

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps();

    //===> Set Properties <===//
    innerBlocksProps.className += ` ${blockProps.className}`;
    innerBlocksProps.className += ' row';

    //===> Properties <===//
    if(!attributes.flexbox.slider) {
        if (attributes.flexbox.align)  innerBlocksProps.className += ` ${attributes.flexbox.align}`;
        if (attributes.flexbox.flow)   innerBlocksProps.className += ` ${attributes.flexbox.flow}`;
        if (attributes.flexbox.nowrap) innerBlocksProps.className += ` ${attributes.flexbox.nowrap}`;
        if (attributes.flexbox.masonry) innerBlocksProps.className += ` ${attributes.flexbox.masonry}`;
        if (attributes.flexbox.equals && attributes.flexbox.cols) innerBlocksProps.className += ` row-cols-${attributes.flexbox.cols > 0 ? attributes.flexbox.cols : "auto"}`;
        //===> Responsive <===//
        let screens = ["md", "lg", "xl"];
        screens.forEach(screen => {
            if (attributes.flexbox[`align-${screen}`]) innerBlocksProps.className += ` ${attributes.flexbox[`align-${screen}`]}`;
            if (attributes.flexbox[`flow-${screen}`]) innerBlocksProps.className += ` ${attributes.flexbox[`flow-${screen}`]}`;
            if (attributes.flexbox[`nowrap-${screen}`]) innerBlocksProps.className += ` ${attributes.flexbox[`nowrap-${screen}`]}`;
            if (attributes.flexbox[`masonry-${screen}`]) innerBlocksProps.className += ` ${attributes.flexbox[`masonry-${screen}`]}`;
            if (attributes.flexbox.equals && attributes.flexbox[`cols-${screen}`]) innerBlocksProps.className += ` row-cols-${screen}-${attributes.flexbox[`cols-${screen}`] > 0 ? attributes.flexbox[`cols-${screen}`] : "auto"}`;
        });
    }

    //===> Slider <===//
    if (attributes.flexbox.slider && attributes.slider.preview) {
        //===> Add Slider Name <===//
        innerBlocksProps.className += ' px-slider';

        //===> Set Other Options <===//
        if (attributes.slider.type) innerBlocksProps['data-type'] = attributes.slider.type;
        if (attributes.slider.steps) innerBlocksProps['data-steps'] = attributes.slider.steps;
        if (attributes.slider.speed) innerBlocksProps['data-speed'] = attributes.slider.speed;
        if (attributes.slider.duration) innerBlocksProps['data-duration'] = attributes.slider.duration;
        if (attributes.slider.controls) innerBlocksProps['data-controls'] = 1;
        if (attributes.slider.pagination) innerBlocksProps['data-pagination'] = 1;
        if (attributes.slider.hasOwnProperty('autoplay')) {
            if (attributes.slider.autoplay === true) {innerBlocksProps['data-autoplay'] = 1;}
            else {innerBlocksProps['data-autoplay'] = 0;}
        }
        //===> Responsive <===//
        let screens = ["md", "lg", "xl"];
        if (attributes.flexbox.cols) innerBlocksProps[`data-items`] = attributes.flexbox.cols > 0 ? attributes.flexbox.cols : 1;
        screens.forEach(screen => {
            if (attributes.flexbox[`cols-${screen}`] && attributes.flexbox[`cols-${screen}`] > 0) innerBlocksProps[`data-${screen}`] = attributes.flexbox[`cols-${screen}`];
        });
    }

    //===> Render <===//
    return (<>
        {/*====> Controls Layout <====*/}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("General Settings", "phenix")} initialOpen={attributes.flexbox.equals || attributes.flexbox.slider ? false : true}>
                {/*===> Flexbox Properties <===*/}
                <div className='row gpx-15 mb-10 divider-b'>
                    {/*===> Column <===*/}
                    <div className='col-12 mb-15'>
                        <FlexAlignment label={__("Grid Alignment", "phenix")} value={attributes.flexbox.align || ""} onChange={set_alignment}></FlexAlignment>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-12 flexbox mb-15'>
                        {/*===> Label <===*/}
                        <label className='col-12 mb-5 tx-UpperCase'>{__("Grid Options", "phenix")}</label>
                        {/*===> Switch Button <===*/}
                        <OptionControl name='flex-flow' value="flow-reverse" checked={attributes.flexbox.flow?.length > 0} onChange={set_flex_flow} type='checkbox' className='tiny mb-5 me-10'>
                            <span className='fas fa-check radius-circle'>{__("Reverse ", "phenix")}</span>
                        </OptionControl>
                        {/*===> Switch Button <===*/}
                        <OptionControl name='flex-nowrap' value="flow-nowrap" checked={attributes.flexbox.nowrap?.length > 0} onChange={set_flex_nowrap} type='checkbox' className='tiny mb-5 me-10'>
                            <span className='fas fa-check radius-circle'>{__("Nowrap", "phenix")}</span>
                        </OptionControl>
                        {/*===> Switch Button <===*/}
                        <OptionControl name='flex-masonry' value="px-masonry" checked={attributes.flexbox.masonry?.length > 0} onChange={set_flex_masonry} type='checkbox' className='tiny mb-5'>
                            <span className='fas fa-check radius-circle'>{__("Masonry", "phenix")}</span>
                        </OptionControl>
                        {/*===> Switch Button <===*/}
                        <OptionControl name='flex-equals' checked={attributes.flexbox.equals} onChange={set_flex_equals} type='checkbox' className='tiny me-10'>
                            <span className='fas fa-check radius-circle'>{__("Equal Columns.", "phenix")}</span>
                        </OptionControl>
                        {/*===> Switch Button <===*/}
                        <OptionControl name='flex-slider' checked={attributes.flexbox.slider} onChange={set_flex_slider} type='checkbox' className='tiny'>
                            <span className='fas fa-check radius-circle'>{__("Slider Mode.", "phenix")}</span>
                        </OptionControl>
                    </div>
                    {/*===> // Column <===*/}
                </div>
            </PanelBody>
            {/*===> Widget Panel <===*/}
            {attributes.flexbox.slider ? <PanelBody title={__("Slider Options", "phenix")} initialOpen={true}>
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
                        <PhenixNumber label={__("Columns No.", "phenix")} value={attributes.flexbox.cols ? attributes.flexbox.cols : 1} onChange={set_flexbox_cols} min={1} max={12}></PhenixNumber>
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
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("Responsive Options", "phenix")} initialOpen={false}>
                <ScreensTabs md={responsive_options} lg={responsive_options} xl={responsive_options} />
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/*====> Edit Layout <====*/}
        {attributes.preview ?
            <img src="https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/row.jpg" alt="" className="fluid" />
        :
        <div {...blockProps}>
            <div {...innerBlocksProps}></div>
        </div>
        }
    </>);
}