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
import FlexAlignment from '../px-controls/grid/alignment';
import EqualColumns from '../px-controls/grid/equal-columns';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_isEqual = isEqual => setAttributes({ isEqual });
    const set_columns = columns => setAttributes({ columns });
    const set_isSlider = isSlider => setAttributes({ isSlider });
    const set_controls = controls => setAttributes({ controls });
    const set_pagination = pagination => setAttributes({ pagination });

    //===> Get Options <===//
    let flexbox_options = attributes.flexbox,
        style_options = attributes.style,
        background = style_options?.background,
        typography = attributes.typography;

    //===> Flexbox Options <===//
    const set_alignment = alignment => {
        //==> Align <==//
        flexbox_options.align = alignment;
        setAttributes({ flexbox : {...flexbox_options} });
    };

    //==> Flow <==//
    const set_flex_flow = target => {
        flexbox_options.flow = target.checked ? target.value : "";
        setAttributes({flexbox : {...flexbox_options}});
    };

    //==> No-Wrap <==//
    const set_flex_nowrap = target => {
        flexbox_options.nowrap = target.checked ? target.value : "";
        setAttributes({flexbox : {...flexbox_options}});
    };

    //==> Masonry <==//
    const set_flex_masonry = target => {
        flexbox_options.masonry = target.checked ? target.value : "";
        setAttributes({flexbox : {...flexbox_options}});
    };

    //==> Equal Columns <==//
    const set_flex_equals = target => {
        flexbox_options.equals = target.checked;        
        setAttributes({flexbox : {...flexbox_options}});
    };

    //==> Slider Mode <==//
    const set_flex_slider = target => {
        flexbox_options.slider = target.checked;        
        setAttributes({flexbox : {...flexbox_options}});
    };

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps();

    //===> Set Properties <===//
    innerBlocksProps.className += ` ${blockProps.className}`;
    innerBlocksProps.className += ' row';

    //===> Properties <===//
    if (flexbox_options.align)  innerBlocksProps.className += ` ${flexbox_options.align}`;
    if (flexbox_options.flow)   innerBlocksProps.className += ` ${flexbox_options.flow}`;
    if (flexbox_options.nowrap) innerBlocksProps.className += ` ${flexbox_options.nowrap}`;
    if (flexbox_options.masonry) innerBlocksProps.className += ` ${flexbox_options.masonry}`;

    //===> Columns <===//
    if (flexbox_options.equals && attributes.columns) innerBlocksProps.className += attributes.columns;
    
    //===> Slider <===//
    if (flexbox_options.slider) {
        //===> Add Slider Name <===//
        innerBlocksProps.className += ' px-slider';
        
        //===> Set Items <===//
        let columns_names = attributes.columns.split(' ');
        columns_names.forEach(name => {
            //===> Medium Screen <===//
            if (name.includes('-md')) innerBlocksProps['data-md'] = name.replace('row-cols-md-','');
            //===> Large Screen <===//
            else if (name.includes('-lg')) innerBlocksProps['data-lg'] = name.replace('row-cols-lg-','');
            //===> xLarge Screen <===//
            else if (name.includes('-xl')) innerBlocksProps['data-xl'] = name.replace('row-cols-xl-','');
            //===> Small Screen <===//
            else if (name.includes('row-cols')) innerBlocksProps['data-items'] = name.replace('row-cols-','');
        });

        //===> Set Other Options <===//
        if (attributes.controls) innerBlocksProps['data-controls'] = 1;
        if (attributes.pagination) innerBlocksProps['data-pagination'] = 1;

        //===> for Edit only <===//
        // innerBlocksProps.className += attributes.columns;
    }

    //===> Render <===//
    return (<>
        {/*====> Controls Layout <====*/}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="General Settings">
                {/*===> Flexbox Properties <===*/}
                {!flexbox_options.slider ? <div className='row gpx-15 mb-10 divider-b'>
                    {/*===> Column <===*/}
                    <div className='col-12 mb-15'>
                        <FlexAlignment label={__("Grid Alignment", "phenix")} value={flexbox_options.align || ""} onChange={set_alignment}></FlexAlignment>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-12 flexbox mb-15'>
                        {/*===> Label <===*/}
                        <label className='col-12 mb-5 tx-UpperCase'>{__("Grid Options", "phenix")}</label>
                        {/*===> Switch Button <===*/}
                        <OptionControl name='flex-flow' value="flow-reverse" checked={flexbox_options.flow?.length > 0} onChange={set_flex_flow} type='checkbox' className='tiny mb-5 me-10'>
                            <span className='fas fa-check radius-circle'>{__("Reverse ", "phenix")}</span>
                        </OptionControl>
                        {/*===> Switch Button <===*/}
                        <OptionControl name='flex-nowrap' value="flow-nowrap" checked={flexbox_options.nowrap?.length > 0} onChange={set_flex_nowrap} type='checkbox' className='tiny mb-5 me-10'>
                            <span className='fas fa-check radius-circle'>{__("Nowrap", "phenix")}</span>
                        </OptionControl>
                        {/*===> Switch Button <===*/}
                        <OptionControl name='flex-masonry' value="px-masonry" checked={flexbox_options.masonry?.length > 0} onChange={set_flex_masonry} type='checkbox' className='tiny mb-5'>
                            <span className='fas fa-check radius-circle'>{__("Masonry", "phenix")}</span>
                        </OptionControl>
                        {/*===> Switch Button <===*/}
                        <OptionControl name='flex-equals' checked={flexbox_options.equals} onChange={set_flex_equals} type='checkbox' className='tiny'>
                            <span className='fas fa-check radius-circle'>{__("Equal Columns.", "phenix")}</span>
                        </OptionControl>
                    </div>
                    {/*===> // Column <===*/}
                </div> : null}
                {/*===> Switch Button <===*/}
                <OptionControl name='flex-slider' checked={flexbox_options.slider} onChange={set_flex_slider} type='switch-checkbox' className='tiny'>{__("Enable Slider Mode", "phenix")}</OptionControl>
            </PanelBody>
            {/*=== Slider ===*/}
            {flexbox_options.slider ?
                <PanelBody title="Slider Options" initialOpen={true}>
                    <ToggleControl label="Enable Pagination" checked={attributes.pagination} onChange={set_pagination}/>
                    <ToggleControl label="Enable Arrow Buttons" checked={attributes.controls} onChange={set_controls}/>
                </PanelBody>
            : null}
            {/*=== Columns ===*/}
            {flexbox_options.equals || flexbox_options.slider ?
                <PanelBody title="Columns Size" initialOpen={true}>
                    <EqualColumns key="row-columns" value={attributes.columns} onChange={set_columns}></EqualColumns>
                </PanelBody>
            : null}
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