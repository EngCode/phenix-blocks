//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import {useEffect} from '@wordpress/element';
import {PanelBody, TextControl, Toolbar} from '@wordpress/components';
import {BlockControls, InspectorControls, useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import ScreensTabs from "../px-controls/tabs";
import PxDropDown from '../px-controls/dropdown';
import PhenixSelect from '../px-controls/select';
import OptionControl from '../px-controls/switch';

//====> Phenix Options Sets <=====//
import StylesSet from '../px-controls/sets/styles';
import FlexboxSet from '../px-controls/sets/flexbox';
import TypographySet from '../px-controls/sets/typography';
import AnimationsSet from '../px-controls/sets/animations';
import PhenixComponentsBuilder from '../px-controls/panel-scripts';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_id = id => setAttributes({ id });

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();

    //===> Modal Settings <===//
    blockProps.className += ` px-modal hidden align-center`;
    if(attributes.id) blockProps.id = attributes.id;

    //===> Full Width Editing <===//
    if (!attributes.align) setAttributes({ align: 'full' });

    //===> Render <===//
    return (<>
        {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <Toolbar label={__("Quick Settings", "pds-blocks")}>
                
            </Toolbar>
        </BlockControls>
        {/*====> Controls Layout <====*/}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="General Settings" initialOpen={true}>
                {/*===> Form Control <===*/}
                <TextControl key="id" label={__("Modal ID", "pds-blocks")} value={ attributes.id } onChange={set_id}/>
            </PanelBody>
        </InspectorControls>
        {/*===> Modal Component <===*/}
        {attributes.preview ?  <img src={PreviewImage} alt="" className='fluid' /> :<div {...blockProps}>
            <div className='modal-content col'>
                <InnerBlocks />
            </div>
        </div>}
        {/*===> // Modal Component <===*/}
    </>);
}