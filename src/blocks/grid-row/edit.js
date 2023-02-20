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

    //==> Slider Mode <==//
    const set_flex_slider = target => {
        //==> Get Current <==//
        let flex_ops = attributes.flexbox;

        //==> Set Value <==//
        flex_ops.slider = target.checked;        
        setAttributes({flexbox : {...flex_ops}});
    };

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps();

    //===> Set Properties <===//
    innerBlocksProps.className += ` ${blockProps.className}`;
    innerBlocksProps.className += ' row';

    //===> Properties <===//
    if (attributes.flexbox.align)  innerBlocksProps.className += ` ${attributes.flexbox.align}`;
    if (attributes.flexbox.flow)   innerBlocksProps.className += ` ${attributes.flexbox.flow}`;
    if (attributes.flexbox.nowrap) innerBlocksProps.className += ` ${attributes.flexbox.nowrap}`;
    if (attributes.flexbox.masonry) innerBlocksProps.className += ` ${attributes.flexbox.masonry}`;

    //===> Columns <===//
    if (attributes.flexbox.equals && attributes.columns) innerBlocksProps.className += attributes.columns;
    
    //===> Slider <===//
    if (attributes.flexbox.slider) {
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
                {!attributes.flexbox.slider ? <div className='row gpx-15 mb-10 divider-b'>
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
                        <OptionControl name='flex-equals' checked={attributes.flexbox.equals} onChange={set_flex_equals} type='checkbox' className='tiny'>
                            <span className='fas fa-check radius-circle'>{__("Equal Columns.", "phenix")}</span>
                        </OptionControl>
                    </div>
                    {/*===> // Column <===*/}
                </div> : null}
                {/*===> Switch Button <===*/}
                <OptionControl name='flex-slider' checked={attributes.flexbox.slider} onChange={set_flex_slider} type='switch-checkbox' className='tiny'>{__("Enable Slider Mode", "phenix")}</OptionControl>
            </PanelBody>
            {/*=== Slider ===*/}
            {attributes.flexbox.slider ?
                <PanelBody title="Slider Options" initialOpen={true}>
                    <ToggleControl label="Enable Pagination" checked={attributes.pagination} onChange={set_pagination}/>
                    <ToggleControl label="Enable Arrow Buttons" checked={attributes.controls} onChange={set_controls}/>
                </PanelBody>
            : null}
            {/*=== Columns ===*/}
            {attributes.flexbox.equals || attributes.flexbox.slider ?
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