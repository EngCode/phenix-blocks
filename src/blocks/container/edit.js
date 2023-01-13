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
    more,
    arrowLeft,
    arrowRight,
    arrowUp,
    arrowDown,
} from '@wordpress/icons';

import {
    RichText,
    InnerBlocks,
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls
} from '@wordpress/block-editor';

import { useState, useEffect } from '@wordpress/element';

//====> Phenix Modules <====//
import PhenixNumber from "../px-controls/number-counter";
import PhenixBackground from '../px-controls/elements/px-background';
import PhenixColor from '../px-controls/typography/px-colors';
import FlexAlignment from '../px-controls/grid/flex-alignment';
import PhenixPadding from '../px-controls/elements/padding';
import PhenixMargin from '../px-controls/elements/margin';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_id = id => setAttributes({ id });
    const set_size = size => setAttributes({ size });
    const set_color = color => setAttributes({ color });
    const set_tagName = tagName => setAttributes({ tagName });
    const set_isSection = isSection => setAttributes({ isSection });
    const set_isFlexbox = isFlexbox => setAttributes({ isFlexbox });
    const set_alignment = alignment => setAttributes({ flex_align : alignment });
    const set_spacing_pd = spacing_pd => setAttributes({ spacing_pd });
    const set_spacing_mg = spacing_mg => setAttributes({ spacing_mg });

    //===> Options Tabs <===//
    const changeTab = (clicked) => {
        //===> Option Data <===//
        let element = Phenix(clicked.target),
            parent  = element.ancestor('.options-tabs'),
            optionsList = Phenix(parent).next('.options-list'),
            currentActive = Phenix(parent.querySelector(':scope > .primary')),
            currentType = `${element[0].getAttribute('data-options')}`,
            targetElement = optionsList.querySelector(`:scope > .${currentType}`);

        //===> Change Active <===//
        currentActive.addClass('light').removeClass('primary');
        element.addClass('primary').removeClass('light');

        //===> Show Options <===//
        optionsList.querySelector(':scope > .flexbox:not(.hidden)')?.classList.add('hidden');
        Phenix(targetElement).removeClass('hidden');
    };

    //===> Set Background <===//
    const set_background = background => {
        //=== Set New Value ===//
        setAttributes({ background : background.value });
        //===> Update Rotation <===//
        if (attributes.bg_type === 'gradient' && background.rotation) {
            setAttributes({bg_rotate : background.rotation});
        } else {
            setAttributes({ bg_type : background.type });
        }
    }

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
    let container_element = blockProps;
    if (attributes.isSection || attributes.isFlexbox) container_element = innerBlocksProps;

    //===> Render Size <===//
    if (attributes.size) container_element.className += ` ${attributes.size}`;

    //===> Render Alignment <===//
    if (attributes.isFlexbox) {
        container_element.className += ' flexbox';
        if (attributes.flex_align) container_element.className +=` ${attributes.flex_align}`;
    }

    //===> Render Color <===//
    if (attributes.color) blockProps.className += ` ${attributes.color}`;

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

    //===> Render Spacing <===//
    if (attributes.spacing_pd) container_element.className += ` ${attributes.spacing_pd}`;
    if (attributes.spacing_mg) container_element.className += ` ${attributes.spacing_mg}`;

    //===> Render <===//
    return (<>
        {/*====> Controls Layout <====*/}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("General Settings", "phenix")}>
                {/*=== Component <TagName> ===*/}
                <SelectControl key="tagName" label={__("HTML Tag", "phenix")} value={attributes.tagName} onChange={set_tagName} options={[
                    { label: 'Default <div>',  value: 'div' },
                    { label: 'Main <main>',  value: 'main' },
                    { label: 'Aside <aside>',  value: 'aside' },
                    { label: 'Section <section>',  value: 'section' },
                    { label: 'Header <header>', value: 'header' },
                    { label: 'Footer <footer>', value: 'footer' },
                ]}/>

                {/*=== Container Size ===*/}
                <SelectControl key="container_size" label={__("Container Size", "phenix")} value={attributes.size} onChange={set_size} options={[
                    { label: 'None',   value: '' },
                    { label: 'Small',  value: 'container-sm' },
                    { label: 'Medium', value: 'container-md' },
                    { label: 'Normal', value: 'container' },
                    { label: 'Large',  value: 'container-xl' },
                    { label: 'Full Width',  value: 'container-fluid' },
                ]}/>

                {/*=== Container ID ===*/}
                <TextControl key="container_id" label={__("Container ID", "phenix")} value={ attributes.id } onChange={set_id}/>

                {/*=== isSection ===*/}
                <ToggleControl label={__("Section Wrapper", "phenix")} checked={attributes.isSection} onChange={set_isSection}/>

                {/*===  isFlexbox ===*/}
                <ToggleControl key="isFlexbox" label={__("Flex Container", "phenix")} checked={attributes.isFlexbox} onChange={set_isFlexbox}/>
            </PanelBody>
            {/*=== Container Options ===*/}
            {attributes.isFlexbox ? <PanelBody title={__("Flexbox", "phenix")} initialOpen={false}>
                {/*=== Flexbox Alignment ===*/}
                <FlexAlignment key="flex-align" value={attributes.flex_align} onChange={set_alignment}></FlexAlignment>
            </PanelBody> : null}
            {/*===> Spacing <===*/}
            <PanelBody title={__("Spacing", "phenix")} initialOpen={false}>
                {/*===> Options Tabs <====*/}
                <div className='options-tabs lined-tabs fluid px-group borderd-group divider-b mb-10'>
                    <button key="padding" onClick={changeTab} className={`btn tiny outline primary col`} data-options="padding-size">{__("Padding Size", "phenix")}</button>
                    <button key="margin" onClick={changeTab} className={`btn tiny outline light col`} data-options="margin-size">{__("Margin Size", "phenix")}</button>
                </div>
                {/*===> Options Panels <====*/}
                <div className='options-list'>
                    {/*===> Padding <====*/}
                    <div className={`flexbox padding-size`}>
                        <PhenixPadding key="px-spacing_pd" onChange={set_spacing_pd} value={attributes.spacing_pd} />
                    </div>
                    {/*===> Margin <====*/}
                    <div className={`flexbox margin-size hidden`}>
                        <PhenixMargin key="px-spacing_mg" onChange={set_spacing_mg} value={attributes.spacing_mg} />
                    </div>
                </div>
                {/*===> End Options Types <====*/}
            </PanelBody>
            {/*===> Text Color <===*/}
            <PanelBody title={__("Text Color", "phenix")} initialOpen={false}>
                {/* Text Color */}
                <PhenixColor key="px-color" onChange={set_color} value={attributes.color} />
            </PanelBody>
            {/*===> Background <===*/}
            <PanelBody title={__("Background", "phenix")} initialOpen={false}>
                <PhenixBackground key="px-bg" onChange={set_background} type={attributes.bg_type} value={attributes.background} />
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