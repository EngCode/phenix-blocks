//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import {useEffect} from '@wordpress/element';
import {PanelBody, TextControl, ToolbarGroup, SelectControl} from '@wordpress/components';
import {BlockControls, InspectorControls, useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import ScreensTabs from "../px-controls/tabs";
import PhenixInput from "../px-controls/input";
import PxDropDown from '../px-controls/dropdown';
import PhenixNumber from "../px-controls/number";
import PhenixSelect from '../px-controls/select';
import OptionControl from '../px-controls/switch';

//====> Phenix Options Sets <=====//
import SizesSet from '../px-controls/sets/sizes';
import StylesSet from '../px-controls/sets/styles';
import FlexboxSet from '../px-controls/sets/flexbox';
import TypographySet from '../px-controls/sets/typography';
import AnimationsSet from '../px-controls/sets/animations';
import PaddingSet from '../px-controls/sets/padding';
import MarginSet from '../px-controls/sets/margin';
import PositionSet from '../px-controls/sets/position';
import EffectsSet from '../px-controls/sets/effects';
import BorderSet from '../px-controls/sets/border';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //====> Attributes Renderers <====//
    const PhenixBlocks = window.PhenixBlocks;
    const OptionsRenderer = PhenixBlocks.OptionsRenderer;

    //==> Set Attributes Methods <==//
    const set_value = (target) => PhenixBlocks.set_value(target, attributes, setAttributes);
    const set_flexbox = (target, screen) => PhenixBlocks.set_flexbox(target, screen, attributes, setAttributes);
    const set_style = (target, screen) => PhenixBlocks.setObject(target, screen, "style", false, attributes, setAttributes);
    const set_typography = (target, screen) => PhenixBlocks.setObject(target, screen, "typography", false, attributes, setAttributes);
    const set_responsive = (target, screen) => PhenixBlocks.setObject(target, screen, 'responsive', false, attributes, setAttributes);

    //===> Get Block Properties <===//
    const TagName = attributes.tagName;
    const innerBlocksProps = useInnerBlocksProps();
    const renderProps = OptionsRenderer({attributes: attributes, blockProps: useBlockProps(), isColumn: true});
    const blockProps = renderProps.blockProps;
    const uniqueKey = blockProps.id;

    //===> Flexbox Layouts <===//
    if (attributes.isFlexbox) innerBlocksProps.className += ` ${renderProps.container.className}`;
    else {blockProps.className += ` ${renderProps.container.className}`;}

    //===> Render <===//
    return (<>
        {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <ToolbarGroup key={`${uniqueKey}-toolbar`} label={__("Quick Settings", "pds-blocks")}>
                {/*===> Dropdown Button <===*/}
                <PxDropDown title={__("Column Size", "pds-blocks")} button={`bg-transparent fs-16 square far fa-arrows-alt-h divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-180">
                    <li key="pds-styles" className='pdt-15 pdb-5 pdx-15 lineheight-150'>
                        <PhenixNumber name={"size"} icon="far fa-mobile-alt" min={0} max={13} value={attributes.size || 0} onChange={set_value} />
                        <PhenixNumber name={`size-sm`} icon="far fa-mobile" min={0} max={13} value={attributes.responsive[`size-sm`] || 0} onChange={(target) => set_responsive(target)} />
                        <PhenixNumber name={`size-md`} icon="far fa-tablet" min={0} max={13} value={attributes.responsive[`size-md`] || 0} onChange={(target) => set_responsive(target)} />
                        <PhenixNumber name={`size-lg`} icon="far fa-laptop" min={0} max={13} value={attributes.responsive[`size-lg`] || 0} onChange={(target) => set_responsive(target)} />
                        <PhenixNumber name={`size-xl`} icon="far fa-desktop" min={0} max={13} value={attributes.responsive[`size-xl`] || 0} onChange={(target) => set_responsive(target)} />
                    </li>
                </PxDropDown>
                {/*===> Dropdown Button <===*/}
                <PxDropDown title={__("Sizes Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-arrows-maximize divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-320" >
                    <li key="sizes" className='pdy-15 pdx-15 lineheight-150'>
                        <ScreensTabs
                            sm={(screen) => <SizesSet attributes={attributes} mainSetter={set_style} />}
                            md={(screen) => <SizesSet screen={screen} attributes={attributes} mainSetter={set_style} />}
                            lg={(screen) => <SizesSet screen={screen} attributes={attributes} mainSetter={set_style} />}
                            xl={(screen) => <SizesSet screen={screen} attributes={attributes} mainSetter={set_style} />}
                        />
                    </li>
                </PxDropDown>
                {/*===> Select Control <===*/}
                <div className='inline-block inline-select tooltip-bottom w-75' data-title={__("HTML Tag", "pds-blocks")}>
                    <PhenixSelect name="tagName" placeholder={__("div", "pds-blocks")} className={`tx-align-center weight-medium`} value={attributes.tagName} onChange={set_value} options={PhenixBlocks.dataLists.html_tags} />
                </div>
                {/*===> Dropdown Button <===*/}
                {attributes.isFlexbox? <PxDropDown title={__("Layout Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-columns color-success divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
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
                </PxDropDown>:
                /*===> Option Control <===*/
                <OptionControl key={`isFlexbox-${uniqueKey}`} name={`isFlexbox`} value={`boolean`} checked={attributes.isFlexbox} onChange={set_value} type='button-checkbox' className='inline-block divider-e border-alpha-25'>
                    <span className='btn bg-transparent fs-16 square tooltip-bottom far fa-columns h-min-100' style={{paddingTop: 2}} data-title={__("Flexbox Layouts", "pds-blocks")}></span>
                </OptionControl>}
                {/*===> Dropdown Button <===*/}
                <PxDropDown title={__("Style Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-adjust divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="pds-styles" className='pdt-15 pdb-5 pdx-15 lineheight-150'>
                        <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} setAttributes={setAttributes} objectSetter={PhenixBlocks.setObject} mainSetter={set_style} colorSetter={set_typography} options="text-colors, background" />
                    </li>
                </PxDropDown>
                {/*===> Dropdown Button <===*/}
                <PxDropDown title={__("Typography Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-font divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="pds-typography" className='pdt-15 pdx-15 lineheight-150'>
                        <ScreensTabs
                            sm={(screen) => <TypographySet key={`typography-${uniqueKey}`} attributes={attributes} mainSetter={set_typography} />}
                            md={(screen) => <TypographySet screen={screen} attributes={attributes} mainSetter={set_typography} options="size, align" />}
                            lg={(screen) => <TypographySet screen={screen} attributes={attributes} mainSetter={set_typography} options="size, align" />}
                            xl={(screen) => <TypographySet screen={screen} attributes={attributes} mainSetter={set_typography} options="size, align" />}
                        />
                    </li>
                </PxDropDown>
                {/*===> Dropdown Button <===*/}
                {attributes.style?.support?.includes('enable-animations') ?
                    <PxDropDown title={__("Animation Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-atom-alt divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                        <li key="pds-animations" className='pdt-15 pdx-15 lineheight-150'>
                            {/*===> Animations <===*/}
                            <AnimationsSet attributes={attributes} mainSetter={set_style} />
                        </li>
                    </PxDropDown>
                :null}
                {/*===> Dropdown Button <===*/}
                {attributes.style?.support?.includes('enable-padding') ?
                    <PxDropDown title={__("Padding Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-border-outer divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                        <li key="pds-padding" className='pdy-15 pdx-15 lineheight-150'>
                            <ScreensTabs
                                sm={(screen) => <PaddingSet attributes={attributes} attrSetter={setAttributes} screen="" mainSetter={target => set_style(target, "")} />}
                                md={(screen) => <PaddingSet attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                                lg={(screen) => <PaddingSet attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                                xl={(screen) => <PaddingSet attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                            />
                        </li>
                    </PxDropDown>
                :null}
                {/*===> Dropdown Button <===*/}
                {attributes.style?.support?.includes('enable-margin') ?
                    <PxDropDown title={__("Margin Options", "pds-blocks")} button={`bg-transparent fs-16 square fal fa-arrows-alt divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                        <li key="pds-margin" className='pdy-15 pdx-15 lineheight-150'>
                            <ScreensTabs
                                sm={(screen) => <MarginSet attributes={attributes} attrSetter={setAttributes} screen="" mainSetter={target => set_style(target, "")} />}
                                md={(screen) => <MarginSet attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                                lg={(screen) => <MarginSet attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                                xl={(screen) => <MarginSet attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                            />
                        </li>
                    </PxDropDown>
                :null}
                {/*===> Dropdown Button <===*/}
                {attributes.style?.support?.includes('enable-position') ?
                    <PxDropDown title={__("Position Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-arrows-to-dot divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                        <li key="pds-margin" className='pdy-15 pdx-15 lineheight-150'>
                            <ScreensTabs
                                sm={(screen) => <PositionSet attributes={attributes} attrSetter={setAttributes} screen="" mainSetter={target => set_style(target, "")} />}
                                md={(screen) => <PositionSet attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                                lg={(screen) => <PositionSet attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                                xl={(screen) => <PositionSet attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                            />
                        </li>
                    </PxDropDown>
                :null}
                {/*===> Dropdown Button <===*/}
                {attributes.style?.support?.includes('enable-border') ?
                    <PxDropDown title={__("Border Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-border-all divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                        <li key="pds-margin" className='pdy-15 pdx-15 lineheight-150'>
                            {/*===> Border Size <===*/}
                            <ScreensTabs
                                sm={(screen) => <BorderSet setAttributes={setAttributes} objectSetter={PhenixBlocks.setObject} attributes={attributes} attrSetter={setAttributes} screen="" mainSetter={target => set_style(target, "")} />}
                                md={(screen) => <BorderSet setAttributes={setAttributes} objectSetter={PhenixBlocks.setObject} attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                                lg={(screen) => <BorderSet setAttributes={setAttributes} objectSetter={PhenixBlocks.setObject} attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                                xl={(screen) => <BorderSet setAttributes={setAttributes} objectSetter={PhenixBlocks.setObject} attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                            />
                        </li>
                    </PxDropDown>
                :null}
                {/*===> Dropdown Button <===*/}
                {attributes.style?.support?.includes('enable-effects') ?
                    <PxDropDown title={__("Effects Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-backpack divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                        <li key="pds-margin" className='pdy-15 pdx-15 lineheight-150'>
                            <EffectsSet attributes={attributes} mainSetter={set_style} />
                        </li>
                    </PxDropDown>
                :null}
            </ToolbarGroup>
        </BlockControls>
        {/*====> Controls Layout <====*/}
        <InspectorControls key={`${uniqueKey}-inspector`}>
            {/*===> General Options <===*/}
            <PanelBody title={__("General Options", "pds-blocks")} initialOpen={true}>
                {/*=== Form Control  ===*/}
                <PhenixInput className="mb-15" name="id" label={__("HTML ID [Anchor]", "pds-blocks")} value={attributes.id} onChange={set_value} />
                {/*===> Styles Options <===*/}
                <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} setAttributes={setAttributes} objectSetter={PhenixBlocks.setObject} mainSetter={set_style} options="support" />
                {/*===> Self-Align Options <===*/}
                <div className="mt-30" >
                    <ScreensTabs
                        sm={(screen) => <PhenixSelect name={`align-self`} size="normal" placeholder={__("None", "pds-blocks")} className="stacked-options" label={__("Self Align", "pds-blocks")} value={attributes.flexbox[`align-self`]} onChange={set_flexbox} options={[
                            {label: "Start", value: `align-self-start`},
                            {label: "Center", value: `align-self-center`},
                            {label: "End", value: `align-self-end`}
                        ]} />}

                        md={(screen) => <PhenixSelect class="mt-15" name={`align-self-md`} size="normal" placeholder={__("None", "pds-blocks")} className="stacked-options" label={__("Self Align", "pds-blocks")} value={attributes.flexbox[`align-self-md`]} onChange={set_flexbox} options={[
                            {label: "Start", value: `align-self-md-start`},
                            {label: "Center", value: `align-self-md-center`},
                            {label: "End", value: `align-self-md-end`}
                        ]} />}

                        lg={(screen) => <PhenixSelect class="mt-15" name={`align-self-lg`} size="normal" placeholder={__("None", "pds-blocks")} className="stacked-options" label={__("Self Align", "pds-blocks")} value={attributes.flexbox[`align-self-lg`]} onChange={set_flexbox} options={[
                            {label: "Start", value: `align-self-lg-start`},
                            {label: "Center", value: `align-self-lg-center`},
                            {label: "End", value: `align-self-lg-end`}
                        ]} />}

                        xl={(screen) => <PhenixSelect class="mt-15" name={`align-self-xl`} size="normal" placeholder={__("None", "pds-blocks")} className="stacked-options" label={__("Self Align", "pds-blocks")} value={attributes.flexbox[`align-self-xl`]} onChange={set_flexbox} options={[
                            {label: "Start", value: `align-self-xl-start`},
                            {label: "Center", value: `align-self-xl-center`},
                            {label: "End", value: `align-self-xl-end`}
                        ]} />}
                    />
                </div>
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/*====> Edit Layout <====*/}
        {attributes.preview ?
            <img src={PreviewImage} alt="" className="fluid" />
        :
        <TagName {...blockProps} key={`${uniqueKey}`}>
            <div {...innerBlocksProps}></div>
        </TagName>
        }
    </>);
}