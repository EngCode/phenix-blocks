//====> WP Modules <====//
import {
    PanelBody,
    SelectControl,
    ToggleControl
} from '@wordpress/components';

import {
    RichText,
    InnerBlocks,
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls
} from '@wordpress/block-editor';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_tagName = tagName => setAttributes({ tagName });
    const set_content = content => setAttributes({ content });

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const TagName = attributes.tagName;

    //===> Convert Block to Inline <===//
    if (TagName === 'div') blockProps.className += ` inline-block`;

    //===> Render <===//
    return (<>
        {/*====> Controls Layout <====*/}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="General Settings" initialOpen={false}>
                
            </PanelBody>
        </InspectorControls>

        {/*====> Edit Layout <====*/}
        <RichText {...blockProps} tagName={attributes.tagName} value={attributes.content} onChange={set_content} placeholder="type any thing..."/>
    </>);
}