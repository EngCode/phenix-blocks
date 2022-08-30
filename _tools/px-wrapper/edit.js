//====> WP Modules <====//
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

import { useState, useEffect } from '@wordpress/element';

//====> Phenix Modules <====//
import FlexAlignment from '../px-components/flex-alignment';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_tagName = tagName => setAttributes({ tagName });

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps();
    const TagName = attributes.tagName;

    //===> Set Flexbox <===//
    const set_flexbox = value => {
        //===> Get Classname <===//
        let currentNames = attributes.className?.replace(/\s{2,}/g, ' ');

        //===> Set Auto Options <===//
        setAttributes({
            flexbox : value,
            className : `${currentNames ? currentNames : ''}${value === true ? ' flexbox' : ''}`,
        });

        //===> Clear Options <===//
        if (!attributes.flexbox && currentNames) {
            currentNames = currentNames.replace('flexbox', '');
            currentNames = currentNames.replace(attributes.flex_align, '');
        }
    }

    //===> Set Alignment <===//
    const set_alignment = alignment => {
        //===> Check for Flexbox <===//
        if (attributes.flexbox) {
            //===> Get Class Names <===//
            let currentNames = attributes.className?.replace(/\s{2,}/g, ' ');
    
            //===> Clear Current Align <===//
            currentNames = currentNames.replace(attributes.flex_align, '');
    
            //===> Set New Align <===//
            setAttributes({
                flex_align : alignment,
                className : `${currentNames} ${alignment}`,
            });
        }

    }

    //===> Flexbox for Inner-Blocks <===//
    if (attributes.flexbox) innerBlocksProps.className += ` flexbox ${attributes.alignment || ''}`;

    //===> Copy to Inner Blocks <===//
    if (attributes.className) innerBlocksProps.className += ` ${attributes.className}`;

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="Wrapper Settings">
                {/*=== Component <TagName> ===*/}
                <SelectControl key="tagName" label="Wrapper Tag" value={attributes.tagName} onChange={set_tagName} options={[
                    { label: 'Default <div>',  value: 'div' },
                    { label: 'List <ul>',  value: 'ul' },
                ]}/>

                {/*=== Flexbox ===*/}
                <ToggleControl label="Flexbox Layouts" checked={attributes.flexbox} onChange={set_flexbox}/>
            </PanelBody>
            {/*=== Flexbox Alignment ===*/}
            {attributes.flexbox ? <PanelBody title="Flexbox Alignment" initialOpen={false}>
                <FlexAlignment key="flex-align" value={attributes.flex_align} onChange={set_alignment}></FlexAlignment>
            </PanelBody> : null}
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        <TagName { ...innerBlocksProps } orientation="horizontal"></TagName>
    </>);
}