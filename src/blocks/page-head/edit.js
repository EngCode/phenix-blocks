//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';
import ServerSideRender from '@wordpress/server-side-render';
import {PanelBody, TextControl, Toolbar} from '@wordpress/components';
import {BlockControls, InspectorControls, useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import PhenixIcons from '../px-controls/icons';
import PxDropDown from '../px-controls/dropdown';
import PhenixNumber from "../px-controls/number";
import PhenixSelect from '../px-controls/select';
import OptionControl from '../px-controls/switch';

//====> Phenix Options Sets <=====//
import TypographySet from '../px-controls/sets/typography';

//====> Edit Mode <====//
export default function Edit(props) {
    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();

    //===> Set Attributes <===//
    

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("General Options", "pds-blocks")} initialOpen={true}>
                
            </PanelBody>
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("Title Options", "pds-blocks")} initialOpen={true}>

            </PanelBody>
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("Breadcrumb Options", "pds-blocks")} initialOpen={true}>

            </PanelBody>
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("Description Options", "pds-blocks")} initialOpen={true}>

            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        {attributes.preview ? <img src={PreviewImage} alt="" className="fluid" /> :<div {...blockProps}> 
            <ServerSideRender block="phenix/page-head" attributes={attributes} />
        </div>}
    </>);
}