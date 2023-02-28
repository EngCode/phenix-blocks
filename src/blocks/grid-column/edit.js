//====> WP Modules <====//
import { __ } from '@wordpress/i18n';

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
import PhenixNumber from "../px-controls/number";
import OptionControl from '../px-controls/switch';
import ScreensTabs from "../px-controls/elements/tabs";

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_tagName = tagName => setAttributes({ tagName });
    const set_size = size => setAttributes({ size });

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps();
    const TagName = attributes.tagName;

    //===> Responsive Options <===//
    const responsive_options = (screen) => {
        //===> Correct Base Screen <===*/
        let size_value = screen === "sm" ? parseInt(attributes.size) || 0 : attributes.responsive[`size-${screen}`] || 0;

        //===> Layout <===//
        return <div className='row gpx-15'>
            {/*===> Column <===*/}
            <div className='col col-6 mb-15'>
                <PhenixNumber label={__("Column Size :", "phenix")} value={size_value} onChange={value => set_size(value, screen)} min={0} max={13}></PhenixNumber>
            </div>
            {/*===> Column <===*/}
            <div className='col col-6 mb-15'>
                {/*=== Component <TagName> ===*/}
                <SelectControl key="tagName" label={__("HTML Tag :", "phenix")} value={attributes.tagName} onChange={set_tagName} options={[
                    { label: '<div>',  value: 'div' },
                    { label: '<main>',  value: 'main' },
                    { label: '<aside>',  value: 'aside' },
                    { label: '<section>',  value: 'section' },
                    { label: '<header>', value: 'header' },
                    { label: '<footer>', value: 'footer' },
                ]}/>
            </div>
            {/*===> // Column <===*/}
        </div>
    };

    //===> Set Properties <===//
    blockProps.className += ` ${blockProps.className}`;
    if(attributes.size) blockProps.className += ` col${parseInt(attributes.size) === 0 ? `-auto` : parseInt(attributes.size) === 13 ? "" : `-${parseInt(attributes.size)}`}`;
    if(attributes.responsive['size-md']) blockProps.className += ` col${attributes.responsive['size-md'] === 0 ? `-auto` : attributes.responsive['size-md'] === 13 ? "" : `-md-${attributes.responsive['size-md']}`}`;
    if(attributes.responsive['size-lg']) blockProps.className += ` col${attributes.responsive['size-lg'] === 0 ? `-auto` : attributes.responsive['size-lg'] === 13 ? "" : `-lg-${attributes.responsive['size-lg']}`}`;
    if(attributes.responsive['size-xl']) blockProps.className += ` col${attributes.responsive['size-xl'] === 0 ? `-auto` : attributes.responsive['size-xl'] === 13 ? "" : `-xl-${attributes.responsive['size-xl']}`}`;

    //===> Render <===//
    return (<>
        {/*====> Controls Layout <====*/}
        <InspectorControls key="inspector">
            {/*=== Column Size ===*/}
            <PanelBody title={__("General Settings")} initialOpen={true}>
                {/* <ColumnSize key="column-size" value={attributes.size} onChange={set_size}></ColumnSize> */}
                <ScreensTabs sm={responsive_options} md={responsive_options} lg={responsive_options} xl={responsive_options} />
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/*====> Edit Layout <====*/}
        {attributes.preview ?
            <img src="https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/column.jpg" alt="" className="fluid" />
        :
        <TagName {...blockProps}>
            <div {...innerBlocksProps}></div>
        </TagName>
        }
    </>);
}