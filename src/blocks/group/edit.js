//====> WP Modules <====//
import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    TextControl,
    SelectControl,
    ToggleControl
} from '@wordpress/components';

import {
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls
} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PhenixColor from '../px-controls/colors/text';
import OptionControl from '../px-controls/switch';
import FlexAlignment from '../px-controls/alignment';
import PhenixBackground from '../px-controls/colors/background';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_id = id => setAttributes({ id });
    const set_tagName = tagName => setAttributes({ tagName });
    const set_isFlexbox = isFlexbox => setAttributes({ isFlexbox });

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

    //==> Flow Columns <==//
    const set_flex_stacked = target => {
        //==> Get Current <==//
        let flex_ops = attributes.flexbox;

        //==> Set Value <==//
        flex_ops.stacked = target.checked ? target.value : "";        
        setAttributes({flexbox : {...flex_ops}});
    };

    //===> Typography Options <===//
    const set_typography_size = value => {
        //==> Get Current <==//
        let typography = attributes.typography;

        //==> Set Value <==//
        typography.size = value;
        setAttributes({ typography : {...typography} });
    };

    //==> Weight <==//
    const set_typography_weight = value => {
        //==> Get Current <==//
        let typography = attributes.typography;

        //==> Set Value <==//
        typography.weight = value;
        setAttributes({ typography : {...typography} });
    };

    //==> Align <==//
    const set_typography_align = target => {
        //==> Get Current <==//
        let typography = attributes.typography;

        //==> Set Value <==//
        typography.align = target.checked ? target.value : "";
        setAttributes({ typography : {...typography} });
    };

    //==> Color <==//
    const set_color = value => {
        //==> Get Current <==//
        let typography = attributes.typography;

        //==> Set Value <==//
        typography.color = value;
        setAttributes({ typography : {...typography} });
    };

    //===> Set Background <===//
    const set_background = background => {
        //==> Get Current <==//
        let styles = attributes.style;

        //==> Set Value <==//
        styles.background = background;
        setAttributes({ style : {...attributes.style} });
    };

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps();
    const TagName = attributes.tagName;

    //===> Flexbox Options <===//
    let container = blockProps;
    if (attributes.isFlexbox) container = innerBlocksProps;

    //===> Flexbox Properties <===//
    if (attributes.isFlexbox) {
        container.className += ' flexbox';
        if (attributes.flexbox.align)  container.className += ` ${attributes.flexbox.align}`;
        if (attributes.flexbox.flow)   container.className += ` ${attributes.flexbox.flow}`;
        if (attributes.flexbox.nowrap) container.className += ` ${attributes.flexbox.nowrap}`;
        if (attributes.flexbox.stacked) container.className += ` ${attributes.flexbox.stacked}`;
    }

    //===> Typography Properties <===//
    if (attributes.typography) {
        if(attributes.typography.size) container.className += ` ${attributes.typography.size}`;
        if(attributes.typography.color) container.className += ` ${attributes.typography.color}`;
        if(attributes.typography.weight) container.className += ` ${attributes.typography.weight}`;
        if(attributes.typography.align) container.className += ` ${attributes.typography.align}`;
    }

    //===> Render Background <===//
    if (attributes.style.background?.value) {
        //===> Image Background <===//
        if (attributes.style.background.type === 'image') {
            blockProps.className += ` px-media`;
            blockProps["data-src"] = attributes.style.background.value;
        }

        //===> Name Background <===//
        else blockProps.className += ` ${attributes.style.background.value}`;

        //===> Background Rotation <===//
        if (attributes.style.background.rotate) blockProps.className += ` ${attributes.style.background.rotate}`;
    }

    //===> Render <===//
    return (<>
        {/*====> Controls Layout <====*/}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="General Settings">
                {/*===> Elements Group <===*/}
                <div className='row gpx-20'>
                    {/*===> HTML Tag <===*/}
                    <div className='col-6 mb-10'>
                        <SelectControl key="tagName" label={__("HTML Tag", "phenix")} value={attributes.tagName} onChange={set_tagName} options={[
                            { label: '<div>',  value: 'div' },
                            { label: '<main>',  value: 'main' },
                            { label: '<aside>',  value: 'aside' },
                            { label: '<section>',  value: 'section' },
                            { label: '<header>', value: 'header' },
                            { label: '<footer>', value: 'footer' },
                        ]}/>
                    </div>
                    {/*===  isFlexbox ===*/}
                    <div className='col-6 mb-5'>
                        <TextControl key="container_id" label={__("HTML ID [Anchor]", "phenix")} value={ attributes.id } onChange={set_id}/>
                    </div>
                    {/*=== Container ID ===*/}
                    <div className='col-12'>
                        <ToggleControl key="isFlexbox" label={__("Flexbox", "phenix")} checked={attributes.isFlexbox} onChange={set_isFlexbox}/>
                    </div>
                    {/*===> // Column <===*/}
                </div>
            </PanelBody>
            {/*===> Typography <===*/}
            <PanelBody title={__("Typography", "phenix")} initialOpen={false}>
                {/*===> Elements Group <===*/}
                <div className='row gpx-20'>
                    {/*===> Size <===*/}
                    <div className='col-6 mb-10'>
                        <SelectControl key="typography-size" label={__("Font Size", "phenix")} value={attributes.typography.size || ""} onChange={set_typography_size} options={[
                            { label: 'Default',   value: '' },
                            { label: '12px',   value: 'fs-12' },
                            { label: '13px',   value: 'fs-13' },
                            { label: '14px',   value: 'fs-14' },
                            { label: '15px',   value: 'fs-15' },
                            { label: '16px',   value: 'fs-16' },
                            { label: '17px',   value: 'fs-17' },
                            { label: '18px',   value: 'fs-18' },
                            { label: '19px',   value: 'fs-19' },
                            { label: '20px',   value: 'fs-20' },
                            { label: '22px',   value: 'fs-22' },
                            { label: '24px',   value: 'fs-24' },
                            { label: '25px',   value: 'fs-25' },
                            { label: '26px',   value: 'fs-26' },
                            { label: '28px',   value: 'fs-28' },
                            { label: '30px',   value: 'fs-30' },
                        ]}/>
                    </div>
                    {/*===> HTML Tag <===*/}
                    <div className='col-6 mb-10'>
                        <SelectControl key="typography-weight" label={__("Font Weight", "phenix")} value={attributes.typography.weight || ""} onChange={set_typography_weight} options={[
                            { label: 'Default',  value: '' },
                            { label: 'Thin',  value: 'weight-thin'},
                            { label: 'Light',  value: 'weight-light'},
                            { label: 'Extra Light',  value: 'weight-xlight'},
                            { label: 'Normal',  value: 'weight-normal'},
                            { label: 'Medium',  value: 'weight-medium'},
                            { label: 'Semi-Bold',  value: 'weight-bold'},
                            { label: 'Bold',  value: 'weight-strong'},
                            { label: 'Heavy',  value: 'weight-xbold'},
                            { label: 'Black',  value: 'weight-black'},
                        ]}/>
                    </div>
                    {/*===> // Column <===*/}
                </div>
                {/*===> Text Color <===*/}
                <PhenixColor key="px-color" label={__("Text Color", "phenix")} onChange={set_color} value={attributes.typography.color || ""} />
                {/*===> Label <===*/}
                <label className='col-12 mb-5 tx-UpperCase'>{__("Text Alignment", "phenix")}</label>
                {/*===> Elements Group <===*/}
                <div className='flexbox'>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={!attributes.typography.align || attributes.typography.align === ""} value={""} onChange={set_typography_align} type='button-radio' className='small me-5'>
                        <span className='btn small square outline gray far fa-align-slash radius-sm'></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={attributes.typography.align === "tx-align-start" ? true : false} value={"tx-align-start"} onChange={set_typography_align} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-${Phenix(document).direction() === "ltr" ? 'left' : "right"} radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={attributes.typography.align === "tx-align-justify" ? true : false} value={"tx-align-justify"} onChange={set_typography_align} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-justify radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={attributes.typography.align === "tx-align-center" ? true : false} value={"tx-align-center"} onChange={set_typography_align} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-center radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={attributes.typography.align === "tx-align-end" ? true : false} value={"tx-align-end"} onChange={set_typography_align} type='button-radio' className='small'>
                        <span className={`btn small square outline gray fs-17 far fa-align-${Phenix(document).direction() === "rtl" ? 'left' : "right"} radius-sm`}></span>
                    </OptionControl>
                </div>
            </PanelBody>
            {/*===> Style Options <===*/}
            <PanelBody title={__("Style Options", "phenix")} initialOpen={false}>
                {/*===> Background <===*/}
                <PhenixBackground key="px-bg" label={__("Background", "phenix")}  onChange={set_background} type={attributes.style.background?.type || "color"} value={attributes.style.background?.value || ""} rotate={attributes.style.background?.rotate || null} />

                {/*===> Flexbox Properties <===*/}
                {attributes.isFlexbox ?
                    <div className='row gpx-15 divider-t pdt-10'>
                        {/*===> Column <===*/}
                        <div className='col-12 mb-15'>
                            <FlexAlignment label={__("Flexbox Alignment", "phenix")} value={attributes.flexbox.align || ""} onChange={set_alignment}></FlexAlignment>
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-12 flexbox align-between mb-15'>
                            {/*===> Label <===*/}
                            <label className='col-12 mb-5 tx-UpperCase'>{__("Flow Options", "phenix")}</label>
                            {/*===> Switch Button <===*/}
                            <OptionControl name='flex-flow' value={!attributes.flexbox.stacked || attributes.flexbox.stacked === "" ? `flow-reverse` : "flow-columns-reverse"} checked={attributes.flexbox.flow?.length > 0} onChange={set_flex_flow} type='checkbox' className='tiny'>
                                <span className='fas fa-check radius-circle'>{__("Reverse ", "phenix")}</span>
                            </OptionControl>
                            {/*===> Switch Button <===*/}
                            <OptionControl name='flex-columns' value="flow-columns" checked={attributes.flexbox.stacked?.length > 0} onChange={set_flex_stacked} type='checkbox' className='tiny'>
                                <span className='fas fa-check radius-circle'>{__("Stacked", "phenix")}</span>
                            </OptionControl>
                            {/*===> Switch Button <===*/}
                            <OptionControl name='flex-nowrap' value="flow-nowrap" checked={attributes.flexbox.nowrap?.length > 0} onChange={set_flex_nowrap} type='checkbox' className='tiny'>
                                <span className='fas fa-check radius-circle'>{__("Nowrap", "phenix")}</span>
                            </OptionControl>
                        </div>
                        {/*===> // Column <===*/}
                    </div>
                : null}
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/*====> Edit Layout <====*/}
        {attributes.preview ?
            <img src="https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/section.jpg" alt="" className="fluid" />
        :
        <TagName {...blockProps}>
            <div {...innerBlocksProps}></div>
        </TagName>
        }
    </>);
}