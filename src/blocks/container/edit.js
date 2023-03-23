//====> WP Modules <====//
import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    TextControl,
    ToggleControl,
} from '@wordpress/components';

import {
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls
} from '@wordpress/block-editor';

import { useState, useEffect } from '@wordpress/element';

//====> Phenix Modules <====//
import PhenixColor from '../px-controls/colors/text';
import PhenixSelect from '../px-controls/select';
import OptionControl from '../px-controls/switch';
import FlexAlignment from '../px-controls/alignment';
import PhenixBackground from '../px-controls/colors/background';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set ID <===//
    const set_id = id => setAttributes({ id });

    //===> Value Handler <===//
    const valueHandler = (target) => {
        //===> Define Array Type <===//
        let single_val,
            array_val = [],
            type = target.getAttribute('type') || target.tagName;

        //==> Add the Value <==//
        if (type === 'checkbox' || type === 'radio') {
            if (target.value === 'boolean') { single_val = target.checked; }
            else { single_val = target.checked ? target.value : ""; }
        }

        else if (type === "SELECT" && target.hasAttribute('multiple')) {
            //===> Get Multiple Value <===//
            let values = target.parentNode.getAttribute('data-value').split(',');
            //===> Get Current Values <===//
            values.forEach(val => val !== "" ? array_val.push(val) : null);
            //===> Set Array Value <===//
            single_val = array_val;
        }

        else { single_val = target.value; }

        //===> Return Value <===//
        if(single_val) return single_val;
    };

    //==> Set Normal Values Method <==//
    const set_normal_value = target => {
        //==> Get Current <==//
        let name = target.getAttribute('name'),
            attr = attributes;

        //==> Add the Value <==//
        attr[`${name}`] = valueHandler(target);

        //==> Set Value <==//
        setAttributes({ ...attr });
    };

    //==> Set Flexbox Method <==//
    const set_flexbox = target => {
        //==> Get Current <==//
        let name = target.getAttribute('name').replace('fx-', ''),
            flexbox = attributes.flexbox;

        //==> Add the Value <==//
        flexbox[`${name}`] = valueHandler(target);

        //==> Set Value <==//
        setAttributes({ flexbox : {...flexbox} });
    };

    //===> Flexbox Alignment <===//
    const set_flex_align = alignment => {
        //==> Get Current <==//
        let flex_ops = attributes.flexbox;

        //==> Set Value <==//
        flex_ops.align = alignment;
        setAttributes({ flexbox : {...flex_ops} });
    };

    //==> Set Typography Method <==//
    const set_typography = target => {
        //==> Get Current <==//
        let name = target.getAttribute('name'),
            typography = attributes.typography;

        //==> Add the Value <==//
        typography[`${name}`] = valueHandler(target);

        //==> Set Value <==//
        setAttributes({ typography : {...typography} });
    };

    //==> Set Style Method <==//
    const set_style = target => {
        //==> Get Current <==//
        let name = target.getAttribute('name'),
            style = attributes.style;

        //==> Add the Value <==//
        style[`${name}`] = valueHandler(target);

        //==> Set Value <==//
        setAttributes({ style : {...style} });
    };

    //==> Set Color Method <==//
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

    //===> Typography Options <===//
    const font_sizes = [
        {"label": "12px", "value": "fs-12" },
        {"label": "13px", "value": "fs-13" },
        {"label": "14px", "value": "fs-14" },
        {"label": "15px", "value": "fs-15" },
        {"label": "16px", "value": "fs-16" },
        {"label": "17px", "value": "fs-17" },
        {"label": "18px", "value": "fs-18" },
        {"label": "19px", "value": "fs-19" },
        {"label": "20px", "value": "fs-20" },
        {"label": "22px", "value": "fs-22" },
        {"label": "24px", "value": "fs-24" },
        {"label": "25px", "value": "fs-25" },
        {"label": "26px", "value": "fs-26" },
        {"label": "28px", "value": "fs-28" },
        {"label": "30px", "value": "fs-30" },
    ];

    const font_weights = [
        { "label": "Thin",  "value": "weight-thin"},
        { "label": "Light",  "value": "weight-light"},
        { "label": "Extra Light",  "value": "weight-xlight"},
        { "label": "Normal",  "value": "weight-normal"},
        { "label": "Medium",  "value": "weight-medium"},
        { "label": "Semi-Bold",  "value": "weight-bold"},
        { "label": "Bold",  "value": "weight-strong"},
        { "label": "Heavy",  "value": "weight-xbold"},
        { "label": "Black",  "value": "weight-black"}
    ];

    const html_tags = [
        { "label": "Div", "value": "div"},
        { "label": "Main", "value": "main"},
        { "label": "Aside", "value": "aside"},
        { "label": "Section", "value": "section"},
        { "label": "Header", "value": "header"},
        { "label": "Footer", "value": "footer"},
    ];

    const display_options = {
        "Mobile Screens" : [
            { "label": "Flex", "value": "display-flex"},
            { "label": "Grid", "value": "display-grid"},
            { "label": "Block", "value": "display-block"},
            { "label": "Inline-Block", "value": "inline-block"},
            { "label": "Hidden", "value": "hidden"},
            { "label": "Hide SM Down", "value": "hidden-sm-down"},
            { "label": "Flexbox", "value": "flexbox"},
        ],
        "Tablet Screens" : [
            { "label": "Flex MD", "value": "display-md-flex"},
            { "label": "Grid MD", "value": "display-md-grid"},
            { "label": "Block MD", "value": "display-md-block"},
            { "label": "Inline-Block MD", "value": "inline-block-md"},
            { "label": "Hide MD Up", "value": "hidden-md-up"},
            { "label": "Hide MD Down", "value": "hidden-md-down"},
        ],
        "Laptop Screens" : [
            { "label": "Flex LG", "value": "display-lg-flex"},
            { "label": "Grid LG", "value": "display-lg-grid"},
            { "label": "Block LG", "value": "display-lg-block"},
            { "label": "Inline-Block LG", "value": "inline-block-lg"},
            { "label": "Hide LG Up", "value": "hidden-lg-up"},
            { "label": "Hide LG Down", "value": "hidden-lg-down"},
        ],
        "Desktop Screens" : [
            { "label": "Flex XL", "value": "display-xl-flex"},
            { "label": "Grid XL", "value": "display-xl-grid"},
            { "label": "Block XL", "value": "display-xl-block"},
            { "label": "Inline-Block XG", "value": "inline-block-xl"},
            { "label": "Hide XL Up", "value": "hidden-xl-up"},
            { "label": "Hide XL Down", "value": "hidden-xl-down"},
        ],
    };

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps();
    const TagName = attributes.tagName;

    //===> Set Phenix Components <===//
    const setPhenixView = () => {
        //===> Check Site Editor <===//
        let siteEditor = window.frames['editor-canvas'],
            blockElement = '.px-media';

        //===> Correct Editor Target for Site-Editor <===//
        if (siteEditor) {
            blockElement = siteEditor.document.querySelectorAll('.px-media');
            blockElement = [...blockElement];
        }

        //===> Set Background <===//
        if (attributes.style.background?.type === 'image') Phenix(blockElement).multimedia();
    }

    useEffect(() => setPhenixView(), [attributes]);

    //===> for Section Convert <===//
    let container = blockProps;
    if (attributes.isSection || attributes.isFlexbox) container = innerBlocksProps;

    //===> Container Options <===//
    console.log('Attribute :', `${attributes.style.display?.toString().replace(',', ' ')}`);
    if (attributes.size) container.className += ` ${attributes.size}`;
    if (attributes.style.display) container.className += ` ${attributes.style.display.toString().replace(',', ' ')}`;
    if (attributes.style.overlapped) container.className += ` ${attributes.style.overlapped}`;
    if (attributes.isFlexbox && !attributes.isSection && blockProps.className) container.className += ` ${blockProps.className}`;

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

    //===> Full Width Editing <===//
    if (!attributes.align) setAttributes({ align: 'full' });

    //===> Render <===//
    return (<>
        {/*====> Controls Layout <====*/}
        <InspectorControls key="inspector">
            {/*===> General Options <===*/}
            <PanelBody title={__("General Settings", "phenix")}>
                {/*===> Elements Group <===*/}
                <div className='row gpx-20'>
                    {/*===> Size <===*/}
                    <div className='col-6 mb-10'>
                        <PhenixSelect name="size" placeholder={__("None", "phenix")} label={__("Container Size", "phenix")} value={attributes.size} onChange={set_normal_value} options={[
                            { label: 'Small',  value: 'container-sm' },
                            { label: 'Medium', value: 'container-md' },
                            { label: 'Normal', value: 'container' },
                            { label: 'Large',  value: 'container-xl' },
                            { label: 'Full Width',  value: 'container-fluid' },
                        ]}/>
                    </div>
                    {/*===> HTML Tag <===*/}
                    <div className='col-6 mb-10'>
                        <PhenixSelect name="tagName" placeholder={__("Default", "phenix")} label={__("HTML Tag", "phenix")} value={attributes.tagName} onChange={set_normal_value} options={html_tags} />
                    </div>
                    {/*=== isSection ===*/}
                    <div className='col-6 mb-10'>
                        <OptionControl name={`isSection`} value="boolean" checked={attributes.isSection} onChange={set_normal_value} type='switch-checkbox' className='small'>{__("Wrapper ?", "phenix")}</OptionControl>
                    </div>
                    {/*===  isFlexbox ===*/}
                    <div className='col-6 mb-10'>
                        <OptionControl name={`isFlexbox`} value="boolean" checked={attributes.isFlexbox} onChange={set_normal_value} type='switch-checkbox' className='small'>{__("Flexbox", "phenix")}</OptionControl>
                    </div>
                    {/*=== Container ID ===*/}
                    <div className='col-12'>
                        <TextControl name="id" label={__("HTML ID [Anchor]", "phenix")} value={ attributes.id } onChange={set_id} />
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
                        <PhenixSelect name="size" placeholder={__("Default", "phenix")} label={__("Font Size", "phenix")} value={attributes.typography.size} onChange={set_typography} options={font_sizes} />
                    </div>
                    {/*===> HTML Tag <===*/}
                    <div className='col-6 mb-10'>
                        <PhenixSelect name="weight" placeholder={__("Default", "phenix")} label={__("Font Weight", "phenix")} value={attributes.typography.weight} onChange={set_typography} options={font_weights}/>
                    </div>
                    {/*===> // Column <===*/}
                </div>

                {/*===> Text Color <===*/}
                <PhenixColor key="px-color" label={__("Text Color", "phenix")} onChange={set_color} value={attributes.typography.color} />

                {/*===> Label <===*/}
                <label className='col-12 mb-5 tx-UpperCase'>{__("Text Alignment", "phenix")}</label>
                {/*===> Elements Group <===*/}
                <div className='flexbox'>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={!attributes.typography.align || attributes.typography.align === ""} value={""} onChange={set_typography} type='button-radio' className='small me-5'>
                        <span className='btn small square outline gray far fa-align-slash radius-sm'></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='align' checked={attributes.typography.align === "tx-align-start" ? true : false} value={"tx-align-start"} onChange={set_typography} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-${Phenix(document).direction() === "ltr" ? 'left' : "right"} radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='align' checked={attributes.typography.align === "tx-align-justify" ? true : false} value={"tx-align-justify"} onChange={set_typography} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-justify radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='align' checked={attributes.typography.align === "tx-align-center" ? true : false} value={"tx-align-center"} onChange={set_typography} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-center radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='align' checked={attributes.typography.align === "tx-align-end" ? true : false} value={"tx-align-end"} onChange={set_typography} type='button-radio' className='small'>
                        <span className={`btn small square outline gray fs-17 far fa-align-${Phenix(document).direction() === "rtl" ? 'left' : "right"} radius-sm`}></span>
                    </OptionControl>
                </div>
            </PanelBody>
            {/*===> Style Options <===*/}
            <PanelBody title={__("Style Options", "phenix")} initialOpen={false}>
                {/*===> Background <===*/}
                <PhenixBackground key="px-bg" label={__("Background", "phenix")}  onChange={set_background} type={attributes.style.background?.type || "color"} value={attributes.style.background?.value || ""} rotate={attributes.style.background?.rotate || null} />
                {attributes.style.background?.type === "image" ? 
                    <div className='mb-15 row gpx-15' style={{marginTop: -10}}>
                        {/*===> Column <===*/}
                        <div className='col-6'>
                            <OptionControl name={`overlay`} value="overlay-dark" checked={attributes.style.overly || false} onChange={set_style} type='switch-checkbox' className='small'>{__("Overlays", "phenix")}</OptionControl>
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-6'>
                            <OptionControl name={`parallax`} value="bg-parallax" checked={attributes.style.parallax || false} onChange={set_style} type='switch-checkbox' className='small'>{__("Parallax BG", "phenix")}</OptionControl>
                        </div>
                    </div>
                : null }

                {/*===> Flexbox Properties <===*/}
                {attributes.isFlexbox ?
                    <div className='row gpx-15 divider-t pdt-10'>
                        {/*===> Column <===*/}
                        <div className='col-12 mb-15'>
                            <FlexAlignment label={__("Flexbox Alignment", "phenix")} value={attributes.flexbox.align || ""} onChange={set_flex_align}></FlexAlignment>
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-12 flexbox align-between mb-15'>
                            {/*===> Label <===*/}
                            <label className='col-12 mb-5 tx-UpperCase'>{__("Flow Options", "phenix")}</label>
                            {/*===> Switch Button <===*/}
                            <OptionControl name='flow' value={!attributes.flexbox.stacked || attributes.flexbox.stacked === "" ? `flow-reverse` : "flow-columns-reverse"} checked={attributes.flexbox.flow?.length > 0} onChange={set_flexbox} type='checkbox' className='tiny'>
                                <span className='fas fa-check radius-circle'>{__("Reverse ", "phenix")}</span>
                            </OptionControl>
                            {/*===> Switch Button <===*/}
                            <OptionControl name='stacked' value="flow-columns" checked={attributes.flexbox.stacked?.length > 0} onChange={set_flexbox} type='checkbox' className='tiny'>
                                <span className='fas fa-check radius-circle'>{__("Stacked", "phenix")}</span>
                            </OptionControl>
                            {/*===> Switch Button <===*/}
                            <OptionControl name='nowrap' value="flow-nowrap" checked={attributes.flexbox.nowrap?.length > 0} onChange={set_flexbox} type='checkbox' className='tiny'>
                                <span className='fas fa-check radius-circle'>{__("Nowrap", "phenix")}</span>
                            </OptionControl>
                        </div>
                        {/*===> // Column <===*/}
                    </div>
                : null}
                {/*===> Additional Styles <===*/}
                <div className='row gpx-15 divider-t pdt-10'>
                    {/*===> Column <===*/}
                    <div className='col-12 mb-5'>
                        <PhenixSelect name="display" placeholder={__("Default", "phenix")} label={__("Responsive Display", "phenix")} value={attributes.style.display} onChange={set_style} options={display_options} multiple={true} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <OptionControl name={`overlapped`} value="pos-overlap" checked={attributes.style.overlapped || false} onChange={set_style} type='switch-checkbox' className='small'>{__("Overlapped", "phenix")}</OptionControl>
                    </div>
                </div>
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