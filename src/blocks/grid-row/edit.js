//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import {useEffect} from '@wordpress/element';
import {PanelBody, Toolbar, ToolbarGroup} from '@wordpress/components';
import {BlockControls, InspectorControls, useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import PhenixInput from "../px-controls/input";
import ScreensTabs from "../px-controls/tabs";
import PxDropDown from '../px-controls/dropdown';
import PhenixNumber from "../px-controls/number";
import OptionControl from '../px-controls/switch';

//====> Phenix Options Sets <=====//
import SizesSet from '../px-controls/sets/sizes';
import StylesSet from '../px-controls/sets/styles';
import FlexboxSet from '../px-controls/sets/flexbox';
import SliderSet from '../px-controls/sets/slider';
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
    const set_slider = (target, screen) => PhenixBlocks.setObject(target, screen, 'slider', false, attributes, setAttributes);
    const set_typography = (target, screen) => PhenixBlocks.setObject(target, screen, "typography", false, attributes, setAttributes);

    //===> View Script <===//
    useEffect(() => PhenixBlocks.viewScript(), []);

    //===> Get Block Properties <===//
    const renderProps = OptionsRenderer({attributes: attributes, blockProps: useBlockProps(), isGrid: true});
    const blockProps = renderProps.blockProps;
    const uniqueKey = blockProps.id;
    const innerBlocksProps = useInnerBlocksProps();

    //===> Set Properties <===//
    innerBlocksProps.className += ' row';
    innerBlocksProps.className += ` ${renderProps.blockProps.className}`;
    innerBlocksProps.className += ` ${renderProps.container.className}`;

    //===> if is Slider and is Fade or one Slide per view disable flexbox <===//
    if (attributes.flexbox?.slider?.type === "fade") innerBlocksProps.className.replace('row', '');

    //===> Render <===//
    return (<>
        {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <ToolbarGroup key={`${uniqueKey}-toolbar`} label={__("Quick Settings", "pds-blocks")}>
                {/*===> Dropdown Button <===*/}
                {attributes.flexbox?.equals || attributes.flexbox?.slider ? <PxDropDown title={__("Columns Number", "pds-blocks")} button={`bg-transparent fs-16 square far fa-columns divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-180">
                    <li key="pds-styles" className='pdt-15 pdb-5 pdx-15 lineheight-150'>
                        <PhenixNumber name={"cols"} icon="far fa-mobile-alt" min={0} max={13} value={attributes.flexbox?.cols || 0} onChange={(target) => set_flexbox(target)} />
                        <PhenixNumber name={"cols-sm"} icon="far fa-mobile" min={0} max={13} value={attributes.flexbox['cols-sm'] || 0} onChange={(target) => set_flexbox(target)} />
                        <PhenixNumber name={`cols-md`} icon="far fa-tablet" min={0} max={13} value={attributes.flexbox[`cols-md`] || 0} onChange={(target) => set_flexbox(target)} />
                        <PhenixNumber name={`cols-lg`} icon="far fa-laptop" min={0} max={13} value={attributes.flexbox[`cols-lg`] || 0} onChange={(target) => set_flexbox(target)} />
                        <PhenixNumber name={`cols-xl`} icon="far fa-desktop" min={0} max={13} value={attributes.flexbox[`cols-xl`] || 0} onChange={(target) => set_flexbox(target)} />
                    </li>
                </PxDropDown>:null}
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
                {/*===> Dropdown Button <===*/}
                {attributes.flexbox['style-support'] ?<>
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
                </>: null}
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
            {/*===> Widget Panel <===*/}
            {attributes.flexbox.slider ? <PanelBody title={__("Slider Options", "pds-blocks")} initialOpen={true}>
                <SliderSet attributes={attributes} mainSetter={set_slider} flexSetter={set_flexbox} />
            </PanelBody> : null}
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("Layout Options", "pds-blocks")} initialOpen={true}>
                <ScreensTabs
                    sm={(screen) => <FlexboxSet attributes={attributes} mainSetter={set_flexbox} options={attributes.flexbox.slider ? "flex-props, grid-props" : null}>
                        {/*===> Switch Button <===*/}
                        <OptionControl name='slider' value="boolean" checked={attributes.flexbox.slider} onChange={set_flexbox} type='checkbox' className='tiny me-15'>
                            <span className='fas fa-check radius-circle'>{__("Slider.", "pds-blocks")}</span>
                        </OptionControl>
                        {/*===> Switch Button <===*/}
                        <OptionControl name='style-support' value="boolean" checked={attributes.flexbox['style-support']} onChange={set_flexbox} type='checkbox' className='tiny'>
                            <span className='fas fa-check radius-circle'>{__("Enable Style.", "pds-blocks")}</span>
                        </OptionControl>
                    </FlexboxSet>}
                    md={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={attributes.flexbox.slider ? "flex-props, grid-props" : null}></FlexboxSet>}
                    lg={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={attributes.flexbox.slider ? "flex-props, grid-props" : null}></FlexboxSet>}
                    xl={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={attributes.flexbox.slider ? "flex-props, grid-props" : null}></FlexboxSet>}
                />
            </PanelBody>
            {/*===> General Options <===*/}
            <PanelBody title={__("General Options", "pds-blocks")} initialOpen={true}>
                {/*=== Form Control  ===*/}
                <PhenixInput className="mb-15" name="id" label={__("HTML ID [Anchor]", "pds-blocks")} value={attributes.id} onChange={set_value} />
                {/*===> Styles Options <===*/}
                {attributes.flexbox['style-support'] ?<StylesSet key={`styles-${uniqueKey}`} attributes={attributes} setAttributes={setAttributes} objectSetter={PhenixBlocks.setObject} mainSetter={set_style} colorSetter={set_typography} options="support" />:null}
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/*====> Edit Layout <====*/}
        {attributes.preview ?
            <img src={PreviewImage} alt="" className="fluid" />
        :
        <div {...blockProps} key={`${uniqueKey}`}>
            <div {...innerBlocksProps}></div>
        </div>
        }
    </>);
}