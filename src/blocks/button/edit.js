//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import {PanelBody, TextControl, ToolbarGroup} from '@wordpress/components';
import {BlockControls, RichText, useBlockProps, InspectorControls, __experimentalLinkControlSearchInput as LinkControlSearchInput} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import ScreensTabs from "../px-controls/tabs";
import PhenixIcons from '../px-controls/icons';
import SizesSet from '../px-controls/sets/sizes';
import PxDropDown from '../px-controls/dropdown';
import PhenixSelect from '../px-controls/select';
import OptionControl from '../px-controls/switch';
import MediaUploader from '../px-controls/uploader';
import SelectFromData from "../px-controls/select-data";
import SuggestionsUrl from "../px-controls/dynamic-url";
import PhenixInput from "../px-controls/input";

//====> Phenix Options Sets <=====//
import MarginSet from '../px-controls/sets/margin';
import StylesSet from '../px-controls/sets/styles';
import PaddingSet from '../px-controls/sets/padding';
import PositionSet from '../px-controls/sets/position';
import TypographySet from '../px-controls/sets/typography';
import ResponsiveSet from '../px-controls/sets/responsive';
import AnimationsSet from '../px-controls/sets/animations';
import EffectsSet from '../px-controls/sets/effects';
import BorderSet from '../px-controls/sets/border';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes, clientId }) {    
    //====> Attributes Renderers <====//
    const PhenixBlocks = window.PhenixBlocks;
    const OptionsRenderer = PhenixBlocks.OptionsRenderer;

    //===> Get Sizes <===//
    const getSizes = (screen) => {
        //===> Break Point fix <===//
        const screenPoint =  screen === "sm" ? "" : screen ? `-${screen}` : "";
        //===> Define Controls Options <===//
        const component_sizes = [];
        PhenixBlocks.dataLists.component_sizes.forEach(item => component_sizes.push({label: item.label, value: item.value === "" ? "" :`${item.value}${screenPoint}`}));
        //===> Output <===//
        return component_sizes;
    }

    //==> Set Methods <==//
    const set_value = (target) => PhenixBlocks.set_value(target, attributes, setAttributes);
    const set_style = (target, screen) => PhenixBlocks.setObject(target, screen, "style", false, attributes, setAttributes);
    const set_typography = (target, screen) => PhenixBlocks.setObject(target, screen, "typography", false, attributes, setAttributes);
    const set_responsive = (target, screen) => PhenixBlocks.setObject(target, screen, 'responsive', false, attributes, setAttributes);

    //===> Set Settings <===//
    const set_url = url => setAttributes({ url });
    const set_label = label => setAttributes({ label });
    const set_data_modal = data_modal => setAttributes({ data_modal });
    const set_icon = value => setAttributes({ icon: `${value.type} ${value.value}`});

    //===> Get Block Properties <===//
    const renderProps = OptionsRenderer({attributes: attributes, blockProps: useBlockProps(), hasColors: true});
    const blockProps = renderProps.blockProps;
    const uniqueKey = blockProps.id;

    //===> Set Layout Options <===//
    blockProps.className += ` ${renderProps.container.className}`;

    //===> Set Links/Lightbox URL <===//
    if (attributes.style.isLink || attributes.isLightBox) blockProps.href = attributes.url || "#none";

    //===> Create Label Element <===//
    const labelControl = <RichText key={`btn-text-${uniqueKey}`} value={ attributes.label } onChange={set_label} allowedFormats={[]} tagName="span" placeholder="TXT" className="mg-0 pd-0" onReplace={() => {}} splitting={""} />;

    //===> Block Accessibility <===//
    const blockAccessibility = (event) => PhenixBlocks.blockAccessibility(event, clientId, { ...attributes, label: 'Button' }, attributes.label, attributes);

    //===> Render <===//
    return (<> 
        {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <ToolbarGroup key={`${uniqueKey}-toolbar`} label={__("Quick Settings", "pds-blocks")}>
                {/*===> Dropdown Button <===*/}
                {attributes.type.includes('icon') || attributes.type.includes('square') ?
                <PxDropDown title={__("Button Icon", "pds-blocks")} button={`bg-transparent fs-16 square ${attributes.icon} divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="icons" className='pd-10'>
                        {/*===> Icon Selector <===*/}
                        <PhenixIcons key={`icon-${uniqueKey}`} value={ attributes.icon } onChange={set_icon} />
                        {/*===> Options Group <===*/}
                        <div className='flexbox gpy-5 gpy-fix pdx-5'>
                            {/*===> Option Control <===*/}
                            <OptionControl key={`icon-large-${uniqueKey}`} name={`icon-large`} value="icon-lg" checked={attributes.style['icon-large'] || false} onChange={set_style} type='checkbox' className='small me-10'>
                                <span className='fas fa-check radius-circle'>{__("Large", "pds-blocks")}</span>
                            </OptionControl>
                            {attributes.type.includes('icon') || attributes.type.includes('square') ? <>
                                {/*===> Option Control <===*/}
                                <OptionControl key={`iconLabel-${uniqueKey}`} name={`iconLabel`} value="boolean" checked={attributes.iconLabel || false} onChange={set_value} type='checkbox' className='small me-10'>
                                    <span className='fas fa-check radius-circle'>{__("Labeled", "pds-blocks")}</span>
                                </OptionControl>
                                {/*===> Option Control <===*/}
                                <OptionControl key={`responsive-btn-${uniqueKey}`} name={`responsive-btn`} value="responsive-btn" checked={attributes.style['responsive-btn'] || false} onChange={set_style} type='checkbox' className='small'>
                                    <span className='fas fa-check radius-circle'>{__("Responsive", "pds-blocks")}</span>
                                </OptionControl>
                                {/*===> Option Control <===*/}
                                <OptionControl key={`iconEnd-${uniqueKey}`} name={`iconEnd`} value="boolean" checked={attributes.iconEnd || false} onChange={set_value} type='checkbox' className='small me-10'>
                                    <span className='fas fa-check radius-circle'>{__("Reverse Position", "pds-blocks")}</span>
                                </OptionControl>
                            </> : null }
                        </div>
                        {/*===> Label Input <===*/}
                        {attributes.type.includes('square') ? <div className='mb-15 mt-15'>
                            <TextControl key={`label-${uniqueKey}`} label={__("Label Text", "pds-blocks")} value={ attributes.label } onChange={set_label} />
                        </div> : null }
                    </li>
                </PxDropDown>: null}
                {/*===> Dropdown Button <===*/}
                <PxDropDown title={__("Style Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-adjust divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="pds-styles" className='pdt-15 pdb-5 pdx-15 lineheight-150'>
                        <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} mainSetter={set_style} colorSetter={set_typography} bgOnly="onlyCG" options="text-colors, background" />
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
                {/*===> Link Input <===*/}
                {attributes.isLink ? <PxDropDown title={__("URL Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-link color-success divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-260">
                    <li key="link" className='pdx-15 pdt-10 pdb-0 mb-0'>
                        <LinkControlSearchInput key={`url-${uniqueKey}`} name="url" placeholder={__("URL or Page Name", "pds-blocks")} onChange={set_url} value={ attributes.url } allowDirectEntry={false} withURLSuggestion={false} withCreateSuggestion={false} renderSuggestions={(props) => SuggestionsUrl(props)} />
                        {/*===> Option Control <===*/}
                        <OptionControl key={`inNewTab-${uniqueKey}`} name={`inNewTab`} value={`boolean`} checked={attributes.inNewTab || false} onChange={set_value} type='checkbox' className='tiny me-15'>
                            <span className='fas fa-check radius-circle'>{__("Open in New Tab", "pds-blocks")}</span>
                        </OptionControl>
                        {/*===> Disable Button <===*/}
                        <div className='fluid' style={{paddingBottom: 3}}>
                            <OptionControl key={`isLink-${uniqueKey}`} name={`isLink`} value={`boolean`} checked={attributes.isLink || false} onChange={set_value} type='checkbox' className='tiny fluid align-center-x divider-t mt-5'>
                                <span className='btn small fluid bg-transparent fs-12 color-danger'>{__("Disable URL Link", "pds-blocks")}</span>
                            </OptionControl>
                        </div>
                    </li>
                </PxDropDown> :
                /*===> Add Link <===*/
                <OptionControl key={`isLink-${uniqueKey}`} name={`isLink`} value={`boolean`} checked={attributes.isLink || false} onChange={set_value} type='button-checkbox' className='inline-block'>
                    <span className='btn bg-transparent fs-16 square tooltip-bottom far fa-link' data-title={__("Convert to Link", "pds-blocks")}></span>
                </OptionControl>}
                {/*===> Option Control <===*/}
                <OptionControl key={`hover-style-${uniqueKey}`} name={`hover-style`} value={`boolean`} checked={attributes.style['hover-style'] || false} onChange={set_style} type='button-checkbox' className='inline-block'>
                    <span className='btn bg-transparent fs-16 square tooltip-bottom far fa-bullseye-pointer' data-title={__("Custom Hover Style", "pds-blocks")}></span>
                </OptionControl>
                {/*===> Option Control <===*/}
                <OptionControl key={`outline-${uniqueKey}`} name={`outline`} value={`outline`} checked={attributes.outline || false} onChange={set_value} type='button-checkbox' className='inline-block'>
                    <span className='btn bg-transparent fs-16 square tooltip-bottom pxi pxi-outline-btn' data-title={__("Outline Style", "pds-blocks")}></span>
                </OptionControl>
                {/*===> Dropdown Button <===*/}
                {attributes.isLightBox ? <PxDropDown title={__("Lightbox Options", "pds-blocks")} button={`bg-transparent fs-16 square pxi pxi-lightbox-btn active divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-260" dataPosition={`bottom, end`}>
                    <li key="lightbox" className='pdx-15 pdt-15 pdb-0 mb-0'>
                        {/*===> Column <===*/}
                        <div className='col-12 mb-10'><PhenixSelect key={`lightbox-type-${uniqueKey}`} name="lightbox_type" placeholder={__("Source Type", "pds-blocks")} value={attributes.lightbox_type} onChange={set_value} options={PhenixBlocks.dataLists.lightbox.types} /></div>
                        {/*===> Column <===*/}
                        <div className='col-12'>{attributes.lightbox_src ?
                            <MediaUploader key={`lightbox-src-${uniqueKey}`} label={__("Upload Source", "pds-blocks")} type={attributes.lightbox_type} value={attributes.url} setValue={(file => {setAttributes({url: file.url})})}></MediaUploader>
                            :
                            <TextControl key={`lightbox-src-input-${uniqueKey}`} label={__("Source URL", "pds-blocks")} value={ attributes.url } onChange={set_url}/>
                        }</div>
                        {/*===> Column <===*/}
                        <div className='col-12'><OptionControl key={`lightbox_src-${uniqueKey}`} name={`lightbox_src`} value="boolean" checked={attributes.lightbox_src || false} onChange={set_value} type='switch-checkbox' className='small'>{__("Upload Source", "pds-blocks")}</OptionControl></div>
                        {/*===> Disable Button <===*/}
                        <div className='fluid' style={{paddingBottom: 3}}>
                            <OptionControl key={`isLightBox-${uniqueKey}`} name={`isLightBox`} value={`boolean`} checked={attributes.isLightBox || false} onChange={set_value} type='checkbox' className='tiny fluid align-center-x divider-t mt-5'>
                                <span className='btn small fluid bg-transparent fs-12 color-danger'>{__("Disable Lightbox", "pds-blocks")}</span>
                            </OptionControl>
                        </div>
                    </li>
                </PxDropDown> :
                /*===> Option Control <===*/
                <OptionControl key={`isLightBox-${uniqueKey}`} name={`isLightBox`} value={`boolean`} checked={attributes.isLightBox || false} onChange={set_value} type='button-checkbox' className='inline-block divider-e border-alpha-25'>
                    <span className='btn bg-transparent fs-16 square tooltip-bottom pxi pxi-lightbox-btn' data-title={__("View Source in Lightbox", "pds-blocks")}></span>
                </OptionControl>}
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
                    <PxDropDown title={__("Effects Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-backpack divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-320">
                        <li key="pds-margin" className='pdy-15 pdx-15 lineheight-150'>
                            <EffectsSet attributes={attributes} mainSetter={set_style} />
                        </li>
                    </PxDropDown>
                :null}
            </ToolbarGroup>
        </BlockControls>

        {/*====> Setting Panels <====*/}
        <InspectorControls key={`${uniqueKey}-inspector`}>
            {/*===> General Options <===*/}
            <PanelBody title={__("General Options", "pds-blocks")} initialOpen={true}>
                {/*===> Screen Tabs <===*/}
                <ScreensTabs key={`responsive-${uniqueKey}`} 
                    //===> Small Screen <===//
                    sm={(screen) => <>
                        {/*===> Layouts <===*/}
                        <div class="row">
                            {/*===> Button Type <===*/}
                            <div class="col col-6">
                                <PhenixSelect key={`btn-type-${uniqueKey}`} className={`mb-15 arrow-gray`} name="type" label={"Type"} placeholder={__("Default", "pds-blocks")} value={attributes.type} onChange={set_value} options={PhenixBlocks.dataLists.button.types} />
                            </div>
                            {/*===> Column <===*/}
                            <div class="col col-6">
                                <PhenixSelect key={`size`} name={`size`} placeholder={__("Default", "pds-blocks")} label={__("Size", "pds-blocks")} value={attributes.responsive[`size`]} onChange={(target) => set_responsive(target, "")} options={getSizes(screen)} />
                            </div>
                            {/*===> Column <===*/}
                            <div class="col col-6">
                                {/*=== Form Control  ===*/}
                                <PhenixInput className="mb-15" name="id" label={__("HTML ID [Anchor]", "pds-blocks")} value={attributes.id} onChange={set_value} />
                            </div>
                        </div>
                        {/*===> Button Label <===*/}
                        {attributes.type.includes('square') ?
                            <TextControl key={`label-${uniqueKey}`} label={__("Button Label", "pds-blocks")} value={attributes.label} onChange={set_label} />
                        : null}
                        {/*===> Styles Options <===*/}
                        <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} objectSetter={PhenixBlocks.setObject} mainSetter={set_style} colorSetter={set_typography} options="support" />
                    </>} 
                    //===> Medium Screen <===//
                    md={(screen) => <>
                        <PhenixSelect key={`size-${screen}`} name={`size-${screen}`} placeholder={__("Default", "pds-blocks")} label={__("Size", "pds-blocks")} value={attributes.responsive[`size-${screen}`]} onChange={(target) => set_responsive(target, screen ? screen : "")} options={getSizes(screen)} />
                    </>}
                    //===> Large Screen <===// 
                    lg={(screen) => <>
                        <PhenixSelect key={`size-${screen}`} name={`size-${screen}`} placeholder={__("Default", "pds-blocks")} label={__("Size", "pds-blocks")} value={attributes.responsive[`size-${screen}`]} onChange={(target) => set_responsive(target, screen ? screen : "")} options={getSizes(screen)} />
                    </>} 
                    //===> xLarge Screen <===//
                    xl={(screen) => <>
                        <PhenixSelect key={`size-${screen}`} name={`size-${screen}`} placeholder={__("Default", "pds-blocks")} label={__("Size", "pds-blocks")} value={attributes.responsive[`size-${screen}`]} onChange={(target) => set_responsive(target, screen ? screen : "")} options={getSizes(screen)} />
                    </>} 
                />
            </PanelBody>

            {/*===> Typography Options <===*/}
            <PanelBody title={__("Typography Options", "pds-blocks")} initialOpen={false}>
                <ScreensTabs key={`responsive-${uniqueKey}`} 
                    sm={(screen) => <TypographySet key={`typography-${uniqueKey}`} attributes={attributes} mainSetter={set_typography} exclude={`align`} />} 
                    md={(screen) => <TypographySet key={`typography-${uniqueKey}`} attributes={attributes} mainSetter={set_typography} exclude={`align`} options="size" screen={screen} />} 
                    lg={(screen) => <TypographySet key={`typography-${uniqueKey}`} attributes={attributes} mainSetter={set_typography} exclude={`align`} options="size" screen={screen} />} 
                    xl={(screen) => <TypographySet key={`typography-${uniqueKey}`} attributes={attributes} mainSetter={set_typography} exclude={`align`} options="size" screen={screen} />} 
                />
            </PanelBody>

            {/*===> Trigger Options <===*/}
            <PanelBody title={__("Trigger Options", "pds-blocks")} initialOpen={false}>
                {/*===> Elements Group <===*/}
                <div className='row gpx-15 gpy-10'>
                    {/*===> Column <===*/}
                    <div className='col-6'><SelectFromData key={`data-id-${uniqueKey}`} options="menu-locations" name="data_id" label={__("Menu (ID)", "pds-blocks")} value={attributes.data_id} valueSetter={set_value} /></div>
                    {/*===> Column <===*/}
                    <div className='col-6'><TextControl key={`data-modal-${uniqueKey}`} label={__("Modal (ID)", "pds-blocks")} value={attributes.data_modal} onChange={set_data_modal} /></div>
                    {/*===> // Column <===*/}
                </div>
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        {attributes.preview ? <img src={PreviewImage} alt="" className="fluid" /> : <>
            <a key={`btn-${uniqueKey}-preview`} onKeyDown={blockAccessibility} onClick={(event) => event.preventDefault()} { ...blockProps }>{!attributes.type.includes("square") ? labelControl : ''}</a>
        </>}
    </>);
}