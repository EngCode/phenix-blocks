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
import ScreensTabs from "../px-controls/tabs";
import PhenixSelect from '../px-controls/select';
import OptionControl from '../px-controls/switch';

//====> Phenix Options Sets <=====//
import StylesSet from '../px-controls/sets/styles';
import FlexboxSet from '../px-controls/sets/flexbox';
import TypographySet from '../px-controls/sets/typography';
import ResponsiveSet from '../px-controls/sets/responsive';

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

        //==> for Boolean Values <==//
        if (type === 'checkbox' || type === 'radio') {
            if (target.value === 'boolean') { single_val = target.checked; }
            else { single_val = target.checked ? target.value : ""; }
        }

        //===> for Value of Type Array <===//
        else if (type === "SELECT" && target.hasAttribute('multiple')) {
            //===> Get Multiple Value <===//
            let values = target.parentNode.getAttribute('data-value').split(',');
            //===> Get Current Values <===//
            values.forEach(val => val !== "" ? array_val.push(val) : null);
            //===> Set Array Value <===//
            single_val = array_val;
        }

        //===> for Normal Values <===//
        else { single_val = target.value; }

        //===> Return Value <===//
        if(single_val) return single_val;
    };

    //==> Set Value Method <==//
    const set_value = target => {
        //==> Get Current <==//
        let name = target.getAttribute('name');
        const attr = attributes;

        //==> Add the Value <==//
        attr[`${name}`] = typeof(target) === "string"? target : valueHandler(target);

        //==> Set Value <==//
        setAttributes({ ...attr });
    };

    //==> Set Flexbox Method <==//
    const set_flexbox = (target, screen) => {
        //==> Get Current <==//
        let name = target instanceof HTMLElement ? target.getAttribute('name') : `${target}`;
        const flexbox = attributes.flexbox;

        //==> Add the Value <==//        
        if(name.includes('align-')) { name = "align" }
        flexbox[`${name}${screen?'-'+screen:""}`] = typeof(target) === "string" ? target.replace("align-reset", "") : valueHandler(target);

        //==> Set Value <==//
        setAttributes({ flexbox : {...flexbox} });
    };

    //==> Set Typography Method <==//
    const set_typography = (target, screen) => {
        //==> Get Current <==//
        let name = target instanceof HTMLElement ? target.getAttribute('name') : "color";
        const typography = attributes.typography;

        //==> Add the Value <==//
        typography[`${name}${screen?'-'+screen:""}`] = typeof(target) === "string" ? target : valueHandler(target);

        //==> Set Value <==//
        setAttributes({ typography : {...typography} });
    };

    //==> Set Style Method <==//
    const set_style = target => {
        //==> Get Current <==//
        let name = target instanceof HTMLElement ? target.getAttribute('name') : "background";
        const style = attributes.style;

        //==> Add the Value <==//
        style[`${name}`] = name === "background" ? target : valueHandler(target);

        //==> Set Value <==//
        setAttributes({ style : {...style} });
    };

    //===> Responsive Options <===//
    const responsive_options = (screen) => {
        return <ResponsiveSet options={`${attributes.isFlexbox ? "flexbox," : null} display, text-align`} flexSetter={set_flexbox} styleSetter={set_style} typoSetter={set_typography} screen={screen} attributes={attributes} />
    };

    //===> Define Controls Options <===//
    const html_tags = [
        { "label": "Div", "value": "div"},
        { "label": "Main", "value": "main"},
        { "label": "Aside", "value": "aside"},
        { "label": "Section", "value": "section"},
        { "label": "Header", "value": "header"},
        { "label": "Footer", "value": "footer"},
    ];

    //===> Get Block Properties <===//
    const screens = ["-md", "-lg", "-xl"];
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps();
    const TagName = attributes.tagName;

    //===> for Section Convert <===//
    const container = {className: attributes.isFlexbox ? " flexbox" : ''};

    //===> General Options <===//
    if (attributes.size) container.className += ` ${attributes.size}`;
    if (attributes.isFlexbox && !attributes.isSection && blockProps.className) container.className += ` ${blockProps.className}`;

    //===> Style Options <===//
    if (attributes.style || attributes.typography?.color) {
        //===> Effects <===//
        if (attributes.style?.display) blockProps.className += ` ${attributes.style.display.toString().replace(',', ' ')}`;
        if (attributes.style?.overlapped) blockProps.className += ` ${attributes.style.overlapped}`;

        //===> Text Color <===//
        if(attributes.typography?.color) container.className += ` ${attributes.typography.color}`;

        //===> Render Background <===//
        if (attributes.style?.background?.value) {
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

        //===> Position <===//
        if (attributes.style?.position) {
            //===> if its Absolute Sticky <===//
            if (attributes.style.position === "sticky-absolute") {
                blockProps["data-sticky"] = ` ${attributes.style.position}`;
                blockProps.className += ` position-rv fluid z-index-header`;
            }
            //===> Otherwise is Class Name <===//
            else {
                blockProps.className += ` ${attributes.style.position}`;
            }
        }
    }

    //===> Layout Options <===//
    if (attributes.isFlexbox) {
        if (attributes.flexbox.align)  container.className += ` ${attributes.flexbox.align.trim()}`;
        if (attributes.flexbox.flow)   container.className += ` ${attributes.flexbox.flow}`;
        if (attributes.flexbox.nowrap) container.className += ` ${attributes.flexbox.nowrap}`;
        if (attributes.flexbox.stacked) container.className += ` ${attributes.flexbox.stacked}`;
        if (attributes.flexbox['animated-childs']) blocksProp.className += ` ${attributes.flexbox['animated-childs']}`;
        //===> Responsive <===//
        screens.forEach(screen => {
            if (attributes.flexbox[`align${screen}`]) container.className += ` ${attributes.flexbox[`align${screen}`]}`;
            if (attributes.flexbox[`flow${screen}`]) container.className += ` ${attributes.flexbox[`flow${screen}`]}`;
            if (attributes.flexbox[`nowrap${screen}`]) container.className += ` ${attributes.flexbox[`nowrap${screen}`]}`;
            if (attributes.flexbox[`masonry${screen}`]) container.className += ` ${attributes.flexbox[`masonry${screen}`]}`;
        });
    }

    //===> Typography Options <===//
    if (attributes.typography) {
        if(attributes.typography.size) container.className += ` ${attributes.typography.size.toString().replace(',', ' ')}`;
        if(attributes.typography.weight) container.className += ` ${attributes.typography.weight}`;
        //===> Responsive <===//
        screens.forEach(screen => {
            if(attributes.typography.align) container.className += ` ${attributes.typography.align}`;
            if (attributes.typography[`align${screen}`]) container.className += ` ${attributes.typography[`align${screen}`]}`;
        });
    }

    //===> General Options : for Section Convert <===//
    if (attributes.isSection) innerBlocksProps.className += `${container.className}`; 
    else blockProps.className += `${container.className}`;

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
                        <PhenixSelect name="size" placeholder={__("None", "phenix")} label={__("Container Size", "phenix")} value={attributes.size} onChange={set_value} options={[
                            { label: 'Small',  value: 'container-sm' },
                            { label: 'Medium', value: 'container-md' },
                            { label: 'Normal', value: 'container' },
                            { label: 'Large',  value: 'container-xl' },
                            { label: 'Full Width',  value: 'container-fluid' },
                        ]}/>
                    </div>
                    {/*===> HTML Tag <===*/}
                    <div className='col-6 mb-10'>
                        <PhenixSelect name="tagName" placeholder={__("Default", "phenix")} label={__("HTML Tag", "phenix")} value={attributes.tagName} onChange={set_value} options={html_tags} />
                    </div>
                    {/*=== isSection ===*/}
                    <div className='col-6 mb-10'>
                        <OptionControl name={`isSection`} value="boolean" checked={attributes.isSection} onChange={set_value} type='switch-checkbox' className='small'>{__("Wrapper ?", "phenix")}</OptionControl>
                    </div>
                    {/*===  isFlexbox ===*/}
                    <div className='col-6 mb-10'>
                        <OptionControl name={`isFlexbox`} value="boolean" checked={attributes.isFlexbox} onChange={set_value} type='switch-checkbox' className='small'>{__("Flexbox", "phenix")}</OptionControl>
                    </div>
                    {/*=== Container ID ===*/}
                    <div className='col-12'>
                        <TextControl name="id" label={__("HTML ID [Anchor]", "phenix")} value={ attributes.id } onChange={set_id} />
                    </div>
                    {/*===> // Column <===*/}
                </div>
            </PanelBody>
            {/*===> Layout Options <===*/}
            {attributes.isFlexbox ? <PanelBody title={__("Layout Settings", "phenix")} initialOpen={true}>
                <FlexboxSet attributes={attributes} mainSetter={set_flexbox} >
                    {/*===> Switch Button <===*/}
                    <OptionControl name='animated-childs' value="px-animate" checked={attributes.flexbox['animated-childs']} onChange={set_flexbox} type='checkbox' className='tiny'>
                        <span className='fas fa-check radius-circle'>{__("Animate Childs.", "phenix")}</span>
                    </OptionControl>
                </FlexboxSet>
            </PanelBody> : null}
            {/*===> Typography <===*/}
            <PanelBody title={__("Typography", "phenix")} initialOpen={false}>
                <TypographySet attributes={attributes} mainSetter={set_typography} />
            </PanelBody>
            {/*===> Style Options <===*/}
            <PanelBody title={__("Style Options", "phenix")} initialOpen={false}>
                <StylesSet attributes={attributes} mainSetter={set_style} colorSetter={set_typography} />
            </PanelBody>
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("Responsive Options", "phenix")} initialOpen={false}>
                <ScreensTabs md={responsive_options} lg={responsive_options} xl={responsive_options} />
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