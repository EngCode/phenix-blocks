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

//====> Phenix Modules <====//
import FlexAlignment from '../px-controls/flex-alignment';
import EqualColumns from '../px-controls/equal-columns';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_tagName = tagName => setAttributes({ tagName });
    const set_alignment = alignment => setAttributes({ flex_align : alignment });
    const set_isEqual = isEqual => setAttributes({ isEqual });
    const set_isMasonry = isMasonry => setAttributes({ isMasonry });
    const set_columns = columns => setAttributes({ columns });

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps();
    const TagName = attributes.tagName;

    //===> Set Properties <===//
    innerBlocksProps.className += ` ${blockProps.className}`;
    innerBlocksProps.className += ' row';

    //===> Alignment <===//
    if (attributes.flex_align) innerBlocksProps.className +=` ${attributes.flex_align}`;

    //===> Masonry <===//
    if (attributes.isMasonry) innerBlocksProps.className += ' px-masonry';

    //===> Columns <===//
    if (attributes.isEqual && attributes.columns) innerBlocksProps.className += attributes.columns;

    //===> Render <===//
    return (<>
        {/*====> Controls Layout <====*/}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="General Settings">
                {/*=== Component <TagName> ===*/}
                <SelectControl key="tagName" label="HTML Tag" value={attributes.tagName} onChange={set_tagName} options={[
                    { label: 'Default <div>',  value: 'div' },
                    { label: 'Main <main>',  value: 'main' },
                    { label: 'Aside <aside>',  value: 'aside' },
                    { label: 'Section <section>',  value: 'section' },
                    { label: 'Header <header>', value: 'header' },
                    { label: 'Footer <footer>', value: 'footer' },
                ]}/>

                {/*=== Masonry Grid ===*/}
                <ToggleControl label="Masonry Grid" checked={attributes.isMasonry} onChange={set_isMasonry}/>

                {/*=== Equal Columns ===*/}
                <ToggleControl label="Responsive Columns" checked={attributes.isEqual} onChange={set_isEqual}/>
            </PanelBody>
            {/*=== Columns ===*/}
            {attributes.isEqual ? 
                <PanelBody title="Columns" initialOpen={true}>
                    <EqualColumns key="row-columns" value={attributes.columns} onChange={set_columns}></EqualColumns>
                </PanelBody>
            : null}
            {/*=== Alignment ===*/}
            <PanelBody title="Alignment" initialOpen={false}>
                <FlexAlignment key="flex-align" value={attributes.flex_align} onChange={set_alignment}></FlexAlignment>
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/*====> Edit Layout <====*/}
        {attributes.preview ?
            <img src="https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/row.jpg" alt="" className="fluid" />
        :
        <TagName {...innerBlocksProps}></TagName>
        }
    </>);
}