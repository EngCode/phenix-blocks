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

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="Setting" initialOpen={true}>
                {/*===> Menu ID <===*/}
                <TextControl label="Menu ID" value={ attributes.menu_id } onChange={set_menu_id} />
                {/*===> Responsive <===*/}
                <ToggleControl label="Responsive Menu" checked={attributes.responsive} onChange={set_responsive}/>
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        <div {...blockProps}>
            <div className='pdy-10 pdx-20 border-1 border-dashed border-alpha-25 fs-14'>Dynamic Menu Location {attributes.menu_id}</div>
            {/* <ServerSideRender block="phenix/px-navigation" attributes={attributes} /> */}
        </div>
    </>);
}