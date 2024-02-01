//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import {useEffect} from '@wordpress/element';
import {PanelBody, Toolbar} from '@wordpress/components';
import {BlockControls, InspectorControls, useBlockProps, InnerBlocks, useInnerBlocksProps} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import ScreensTabs from "../px-controls/tabs";
import PxDropDown from '../px-controls/dropdown';
import PhenixSelect from '../px-controls/select';
import PhenixInput from '../px-controls/input';
import OptionControl from '../px-controls/switch';

//====> Phenix Options Sets <=====//
import StylesSet from '../px-controls/sets/styles';
import FlexboxSet from '../px-controls/sets/flexbox';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //====> Attributes Renderers <====//
    const PhenixBlocks = window.PhenixBlocks;
    const OptionsRenderer = PhenixBlocks.OptionsRenderer;

    //==> Set Attributes Methods <==//
    const set_value = (target) => PhenixBlocks.set_value(target, attributes, setAttributes);
    const set_flexbox = (target, screen) => PhenixBlocks.set_flexbox(target, screen, attributes, setAttributes);
    const set_style = (target, screen) => PhenixBlocks.setObject(target, screen, "style", false, attributes, setAttributes);
    const set_setting = (target, screen) => PhenixBlocks.setObject(target, "", "setting", attributes, setAttributes);
    const set_typography = (target, screen) => PhenixBlocks.setObject(target, screen, "typography", false, attributes, setAttributes);

    //===> View Script <===//
    useEffect(() => PhenixBlocks.componentsBuilder(), []);

    //===> Get Block Properties <===//
    const renderProps = OptionsRenderer({attributes: attributes, blockProps: useBlockProps()});
    const blockProps = renderProps.blockProps;
    const uniqueKey = blockProps.id;

    //===> Full Width Editing <===//
    if (!attributes.align) setAttributes({ align: 'full' });

    //===> Layout Options <===//
    blockProps.className += ` px-modal ${renderProps.container.className}`;

    //===> Render <===//
    return (<>
        {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <Toolbar key={`${uniqueKey}-toolbar`} label={__("Quick Settings", "pds-blocks")}>
                {/*===> Dropdown Control <===*/}
                <PxDropDown title={__("Layout Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-columns color-success divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="layouts" className='pdt-15 pdx-15 lineheight-150'>
                        <ScreensTabs
                            sm={(screen) => <FlexboxSet attributes={attributes} mainSetter={set_flexbox}></FlexboxSet>}
                            md={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={"flex-props, align"}></FlexboxSet>}
                            lg={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={"flex-props, align"}></FlexboxSet>}
                            xl={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={"flex-props, align"}></FlexboxSet>}
                        />
                        {/*===> Disable Button <===*/}
                        <div className='fluid' style={{paddingBottom: 3}}>
                            <OptionControl key={`isFlexbox-${uniqueKey}`} name={`isFlexbox`} value={`boolean`} checked={attributes.isFlexbox || false} onChange={set_value} type='checkbox' className='tiny fluid align-center-x divider-t mt-5'>
                                <span className='btn small fluid bg-transparent fs-12 color-danger'>{__("Disable Flexbox Layout", "pds-blocks")}</span>
                            </OptionControl>
                        </div>
                    </li>
                </PxDropDown>
                {/*===> Dropdown Control <===*/}
                <PxDropDown title={__("Modal Settings", "pds-blocks")} button={`bg-transparent fs-16 square far fa-cog divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="dropdown-item" className='pd-10'>
                        {/*===> Form Group <===*/}
                        <div className='row gpx-15 gpy-15'>
                            {/*===> Form Control <===*/}
                            <div className='col col--6'>
                                <PhenixInput name="id" label={__("Modal ID", "pds-blocks")} value={attributes.id} onChange={set_value} />
                            </div>
                            {/*===> Form Control <===*/}
                            <div className='col col--6'>
                                <PhenixInput name="showon" label={__("Trigger ID", "pds-blocks")} value={attributes.setting.showon} onChange={set_setting} />
                            </div>
                            {/*===> Form Control <===*/}
                            {attributes.setting.onload ? <div className='col col--6'>
                                <PhenixNumber name="timeout" label={__("Duration", "pds-blocks")} value={attributes.setting.timeout || 6000} onChange={set_setting} min={0} max={20000} steps={100}></PhenixNumber>
                            </div> : null }
                        </div>
                        {/*===> Option Controller <===*/}
                        <div className='flexbox'>
                            <OptionControl name={`hash_url`} value="true" checked={attributes.setting.hash_url} onChange={set_setting} type='switch-checkbox' className='small me-10 mb-10'>{__("Open by Hash URL", "pds-blocks")}</OptionControl>
                            <OptionControl name={`onload`} value="true" checked={attributes.setting.onload} onChange={set_setting} type='switch-checkbox' className='small me-10 mb-10'>{__("Open When Page Loads", "pds-blocks")}</OptionControl>
                        </div>
                    </li>
                </PxDropDown>
            </Toolbar>
        </BlockControls>
        {/*====> Controls Layout <====*/}
        <InspectorControls key={`${uniqueKey}-inspector`}>
            {/*===> Widget Panel <===*/}
            <PanelBody title="General Settings" initialOpen={true}>
                {/*===> Form Control <===*/}
                <PhenixInput name="id" label={__("Modal ID", "pds-blocks")} className="mb-15" value={attributes.id} onChange={set_value} />
                {/*===> Styles Options <===*/}
                <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} mainSetter={set_style} colorSetter={set_typography} options="support" />
            </PanelBody>
        </InspectorControls>
        {/*===> Modal Component <===*/}
        {attributes.preview ?  <img src={PreviewImage} alt="" className='fluid' /> :<div {...blockProps} key={`${uniqueKey}`}>
            <InnerBlocks template={[
                ['phenix/group', {
                    "className": "model-content mgx-auto col",
                    "style": {
                        "max_size":"w-max-640",
                        "pdt": "30", "pdb": "30",
                        "pds": "30", "pde": "30",
                        "support":["enable-position"],
                        "position":"position-rv",
                        "z-index": "z-index-10",
                        "background":{"type":"color","rotate":null,"value":"bg-white"},
                    }
                },[
                    [ 'phenix/button', {"label":"Close Window","type":"btn square tooltip-bottom","icon":"far fa-times","typography":{"size":"fs-18"},"style":{"background":{"type":"color","rotate":null,"value":"bg-danger"},"support":["enable-radius","enable-position"],"radius":"radius-circle","position":"position-ab","z-index":"z-index-modal","pos-top":"15","pos-end":"15"},"className":"modal-close"} ],
                    [ 'core/paragraph', {"placeholder": "Modal Content"} ],
                ]],
            ]} />
        </div>}
        {/*===> // Modal Component <===*/}
    </>);
}