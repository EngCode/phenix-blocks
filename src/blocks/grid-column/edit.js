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
import ColumnSize from '../px-controls/column-size';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_tagName = tagName => setAttributes({ tagName });
    const set_size = size => setAttributes({ size });

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps();
    const TagName = attributes.tagName;

    //===> Set Properties <===//
    blockProps.className += ` ${blockProps.className}`;
    blockProps.className += ` ${attributes.size}`;

    //===> Render <===//
    return (<>
        {/*====> Controls Layout <====*/}
        <InspectorControls key="inspector">
            {/*=== Column Size ===*/}
            <PanelBody title="Column Size" initialOpen={true}>
                <ColumnSize key="flex-align" value={attributes.size} onChange={set_size}></ColumnSize>
            </PanelBody>
            {/*===> Widget Panel <===*/}
            <PanelBody title="General Settings" initialOpen={false}>
                {/*=== Component <TagName> ===*/}
                <SelectControl key="tagName" label="HTML Tag" value={attributes.tagName} onChange={set_tagName} options={[
                    { label: 'Default <div>',  value: 'div' },
                    { label: 'Main <main>',  value: 'main' },
                    { label: 'Aside <aside>',  value: 'aside' },
                    { label: 'Section <section>',  value: 'section' },
                    { label: 'Header <header>', value: 'header' },
                    { label: 'Footer <footer>', value: 'footer' },
                ]}/>
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/*====> Edit Layout <====*/}
        {attributes.preview ?
            <img src="https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/column.jpg" alt="" className="fluid" />
        :
        <TagName {...blockProps}>
            <p {...innerBlocksProps}></p>
        </TagName>
        }
    </>);
}