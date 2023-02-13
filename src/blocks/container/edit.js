//====> WP Modules <====//
import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    TextControl,
    SelectControl,
    ToggleControl,
    DropdownMenu,
} from '@wordpress/components';

import {
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls
} from '@wordpress/block-editor';

import { useState, useEffect } from '@wordpress/element';

//====> Phenix Modules <====//
import PhenixColor from '../px-controls/colors/text';
import FlexAlignment from '../px-controls/grid/alignment';
import PhenixBackground from '../px-controls/colors/background';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_id = id => setAttributes({ id });
    const set_size = size => setAttributes({ size });
    const set_tagName = tagName => setAttributes({ tagName });
    const set_isSection = isSection => setAttributes({ isSection });
    const set_isFlexbox = isFlexbox => setAttributes({ isFlexbox });
    const set_isHidden  = isHidden => setAttributes({ isHidden });

    //===> Get Options <===//
    let flexbox_options = attributes.flexbox,
        style_options = attributes.style,
        typography_opts = attributes.typography;
    
    //===> Flexbox Options <===//
    const set_alignment = alignment => {
        //==> Align <==//
        flexbox_options.align = alignment;
        setAttributes({ flexbox : {...flexbox_options} });
    },
    //==> Flow <==//
    set_flex_flow = flex_flow => {
        flex_flow ? flexbox_options.flow = "flow-reverse" : flexbox_options.flow = "";
        setAttributes({flexbox : {...flexbox_options}});
    },

    //==> No-Wrap <==//
    set_flex_nowrap = flex_nowrap => {
        flex_nowrap ? flexbox_options.nowrap = "flow-nowrap" : flexbox_options.nowrap = "";
        setAttributes({flexbox : {...flexbox_options}});
    };

    //===> Typography Options <===//
    const set_typography_size = value => {
        //==> Size <==//
        typography_opts.size = value;
        setAttributes({ typography : {...typography_opts} });
    },

    //==> Weight <==//
    set_typography_weight = value => {
        typography_opts.weight = value;
        setAttributes({ typography : {...typography_opts} });
    },

    //==> Color <==//
    set_color = value => {
        typography_opts.color = value;
        setAttributes({ typography : {...typography_opts} });
    },

    //===> Set Background <===//
    set_background = background => {
        style_options.background = background;
        setAttributes({ style : {...style_options} });
    };

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps();
    const TagName = attributes.tagName;

    //===> Set Phenix View <===//
    const setPhenixView = () => {
        //===> Check Site Editor <===//
        let siteEditor = window.frames['editor-canvas'],
            blockElement = '.px-media';

        //===> Get the Element from Site Editor <===//
        if (siteEditor) {
            blockElement = siteEditor.document.querySelectorAll('.px-media');
            blockElement = [...blockElement];
            Phenix(blockElement).multimedia();
        }

        //===> Set Background <===//
        if (!siteEditor) Phenix(blockElement).multimedia();
    }

    //===> Component is Ready <===//
    useEffect(() => {
        //===> Loading FontAwesome <===//
        if (window.frames['editor-canvas']) {
            let fontAwesome = document.querySelector("#fontawesome-css");
            if (fontAwesome) {
                //===> Check in the Editor <===//
                let canvasAwesome = window.frames['editor-canvas'].document.querySelector("#fontawesome-css");
    
                //===> if Font Awesome not Loaded <===//
                if (!canvasAwesome && fontAwesome) {
                    let newAwesome = document.importNode(fontAwesome, true);
                    window.frames['editor-canvas'].document.head.appendChild(newAwesome);
                }
            }
        }

        //===> Render Background <===//
        if (attributes.background && attributes.bg_type === 'image') setPhenixView();
    }, []);

    //===> for Section Convert <===//
    let container = blockProps;
    if (attributes.isSection || attributes.isFlexbox) container = innerBlocksProps;

    //===> Container Options <===//
    if (attributes.size) container.className += ` ${attributes.size}`;
    if (attributes.isHidden) container.className += ' hidden';

    //===> Flexbox Properties <===//
    if (attributes.isFlexbox) {
        container.className += ' flexbox';
        if (flexbox_options.align)  container.className += ` ${flexbox_options.align}`;
        if (flexbox_options.flow)   container.className += ` ${flexbox_options.flow}`;
        if (flexbox_options.nowrap) container.className += ` ${flexbox_options.nowrap}`;
    }

    //===> Typography Properties <===//
    if (attributes.typography) {
        container.className += ` ${typography_opts.size}`;
        container.className += ` ${typography_opts.color}`;
        container.className += ` ${typography_opts.weight}`;
    }

    //===> Render Background <===//
    if (attributes.background) {
        //===> Image Background <===//
        if (attributes.bg_type === 'image') {
            blockProps.className += ` px-media`;
            blockProps["data-src"] = attributes.background;
        }

        //===> Name Background <===//
        else blockProps.className += ` ${attributes.background}`;

        //===> Background Rotation <===//
        if (attributes.bg_rotate) blockProps.className += ` ${attributes.bg_rotate}`;
    }

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
                        <SelectControl key="container_size" label={__("Container Size", "phenix")} value={attributes.size} onChange={set_size} options={[
                            { label: 'None',   value: '' },
                            { label: 'Small',  value: 'container-sm' },
                            { label: 'Medium', value: 'container-md' },
                            { label: 'Normal', value: 'container' },
                            { label: 'Large',  value: 'container-xl' },
                            { label: 'Full Width',  value: 'container-fluid' },
                        ]}/>
                    </div>
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
                    {/*=== isSection ===*/}
                    <div className='col-6 mb-5'>
                        <ToggleControl label={__("Wrapper ?", "phenix")} checked={attributes.isSection} onChange={set_isSection}/>
                    </div>
                    {/*===  isFlexbox ===*/}
                    <div className='col-6 mb-5'>
                        <ToggleControl key="isFlexbox" label={__("Flexbox", "phenix")} checked={attributes.isFlexbox} onChange={set_isFlexbox}/>
                    </div>
                    {/*=== Container ID ===*/}
                    <div className='col-12'>
                        <TextControl key="container_id" label={__("HTML ID [Anchor]", "phenix")} value={ attributes.id } onChange={set_id}/>
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
                        <SelectControl key="typography-size" label={__("Font Size", "phenix")} value={typography_opts.size} onChange={set_typography_size} options={[
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
                        <SelectControl key="typography-weight" label={__("Font Weight", "phenix")} value={typography_opts.weight} onChange={set_typography_weight} options={[
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
                <PhenixColor key="px-color" label={__("Text Color", "phenix")} onChange={set_color} value={typography_opts.color} />
            </PanelBody>
            {/*===> Style Options <===*/}
            <PanelBody title={__("Style Options", "phenix")} initialOpen={false}>
                {/*===> Display <===*/}
                <ToggleControl key="isHidden" label={__("Hide this Block ?", "phenix")} checked={attributes.isHidden} onChange={set_isHidden}/>

                {/*===> Flexbox Properties <===*/}
                {attributes.isFlexbox ?
                    <div className='row gpx-15 divider-b mb-20 pdb-5'>
                        {/*===> Column <===*/}
                        <div className='col-12 mb-20'>
                            <FlexAlignment label={__("Flexbox Alignment", "phenix")} value={flexbox_options.align} onChange={set_alignment}></FlexAlignment>
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-6'>
                            {/*===> Switch Button <===*/}
                            <ToggleControl label={__("Reverse ", "phenix")} checked={flexbox_options.flow.length > 0} onChange={set_flex_flow}/>
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-6'>
                            {/*===> Switch Button <===*/}
                            <ToggleControl label={__("Nowrap", "phenix")} checked={flexbox_options.nowrap.length > 0} onChange={set_flex_nowrap}/>
                        </div>
                        {/*===> // Column <===*/}
                    </div>
                : null}
                {/*===> Background <===*/}
                <PhenixBackground key="px-bg" onChange={set_background} type={style_options.background.type} value={style_options.background.value} />
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