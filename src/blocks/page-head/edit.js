//====> WP Modules <====//
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl
} from '@wordpress/components';

import {
    useBlockProps,
    InspectorControls
} from '@wordpress/block-editor';

import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import ServerSideRender from '@wordpress/server-side-render';

//====> Edit Mode <====//
export default function Edit(props) {
    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();

    //===> Set Attributes <===//
    const set_menu_id = menu_id => setAttributes({ menu_id });
    const set_responsive = responsive => setAttributes({ responsive });

    //===> Editor Render <===//
    let isFSE = true;
    if (window.frames['editor-canvas']) isFSE = true;

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="Setting" initialOpen={true}></PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        <div {...blockProps}> 
            <ServerSideRender block="phenix/page-head" attributes={attributes} />
        </div>
    </>);
}