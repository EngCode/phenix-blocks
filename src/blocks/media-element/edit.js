//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import {useEffect} from '@wordpress/element';
import {PanelBody, TextControl, Toolbar} from '@wordpress/components';
import {MediaUpload, BlockControls, InspectorControls, useBlockProps, InnerBlocks, __experimentalLinkControlSearchInput as LinkControlSearchInput} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import ScreensTabs from "../px-controls/tabs";
import PhenixIcons from '../px-controls/icons';
import PxDropDown from '../px-controls/dropdown';
import PhenixSelect from '../px-controls/select';
import PhenixInput from '../px-controls/input';
import MediaUploader from '../px-controls/uploader';
import OptionControl from '../px-controls/switch';
import SuggestionsUrl from "../px-controls/dynamic-url";

//====> Phenix Options Sets <=====//
import SizesSet from '../px-controls/sets/sizes';
import MarginSet from '../px-controls/sets/margin';
import PositionSet from '../px-controls/sets/position';
import StylesSet from '../px-controls/sets/styles';
import TypographySet from '../px-controls/sets/typography';
import EffectsSet from '../px-controls/sets/effects';
import BorderSet from '../px-controls/sets/border';
import AnimationsSet from '../px-controls/sets/animations';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //====> Attributes Renderers <====//
    const PhenixBlocks = window.PhenixBlocks;
    const OptionsRenderer = PhenixBlocks.OptionsRenderer;

    //==> Set Attributes Methods <==//
    const set_value = (target) => PhenixBlocks.set_value(target, attributes, setAttributes);
    const set_url = url => setAttributes({ url });
    const set_setting = target => PhenixBlocks.setObject(target, "", "setting", target.getAttribute('name'),attributes, setAttributes);
    const set_style = (target, screen) => PhenixBlocks.setObject(target, screen, "style", false, attributes, setAttributes);
    const set_icon = value => PhenixBlocks.setObject(`${value.type} ${value.value}`, "", "style", "icon", attributes, setAttributes);
    const set_source = value => PhenixBlocks.setObject(`${value.url}`, "", "setting", "src", attributes, setAttributes);
    const set_typography = (target, screen) => PhenixBlocks.setObject(target, screen, "typography", false, attributes, setAttributes);

    //===> View Script <===//
    useEffect(() => PhenixBlocks.componentsBuilder(), []);

    //===> Get Block Properties <===//
    const renderProps = OptionsRenderer({attributes: attributes, blockProps: useBlockProps()});
    const blockProps = renderProps.blockProps;
    const uniqueKey = blockProps.id;

    //===> Layout Options <===//
    blockProps.className += ` ${renderProps.container.className}`;

    //===> Default Options <===//
    if(!attributes.setting.type) blockProps['data-type'] = "image";
    if(!attributes.setting.src) {
        blockProps['data-src'] = "https://via.placeholder.com/1024x768.webp";
        blockProps.style.backgroundImage = "https://via.placeholder.com/1024x768.webp";
    }
    if(!attributes.setting.size) blockProps.className += " ratio-none";

    //===> Render <===//
    return (<>
        {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <Toolbar key={`${uniqueKey}-toolbar`} label={__("Quick Settings", "pds-blocks")}>
                {/*===> Select Control <===*/}
                <div className='inline-block inline-select tooltip-bottom w-100' data-title={__("Type", "pds-blocks")}>
                    <PhenixSelect name="type" placeholder={__("Image", "pds-blocks")} className={`tx-align-center weight-medium`} value={attributes.setting.type} onChange={set_setting} options={PhenixBlocks.dataLists.media_options.types} />
                </div>
                {/*===> Select Control <===*/}
                <div className='inline-block inline-select tooltip-bottom w-100' data-title={__("Ratio Size", "pds-blocks")}>
                    <PhenixSelect key={`ratio-size`} name="size" placeholder={__("Ratio Size", "pds-blocks")} className={`tx-align-center weight-medium`} value={attributes.setting.size} onChange={set_setting} options={PhenixBlocks.dataLists.media_options.size} />
                </div>
                {/*===> Select Control <===*/}
                {attributes.setting.type === "embed" ? <div className='inline-block inline-select tooltip-bottom w-100' data-title={__("Embed Source", "pds-blocks")}>
                    <PhenixSelect name="embed" placeholder={__("Video", "pds-blocks")} className={`tx-align-center weight-medium`} value={attributes.setting['embed']} onChange={set_setting} options={PhenixBlocks.dataLists.media_options.embeds} />
                </div> : null}
                {/*===> Dropdown Control <===*/}
                <PxDropDown title={__("Media Source", "pds-blocks")} button={`bg-transparent fs-16 square far fa-image divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="dropdown-item" className='pd-10'>
                        {/*===> Uploader <===*/}
                        {!attributes.setting.type || attributes.setting.type === "image" || attributes.setting['embed'] === "video" || attributes.setting.type === "embed" && !attributes.setting['embed']? 
                            <MediaUploader label={__("Upload File","pds-blocks")} value={attributes.setting?.src} setValue={set_source}></MediaUploader>
                            :
                            <PhenixInput key="src" name="src" label={__("Source URL", "pds-blocks")} value={attributes.setting.src} onChange={set_setting} />
                        }
                    </li>
                </PxDropDown>
                {/*===> Dropdown Control <===*/}
                <PxDropDown title={__("Media Settings", "pds-blocks")} button={`bg-transparent fs-16 square far fa-cog divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="dropdown-item" className='pdx-15 pdy-15'>
                        <ScreensTabs
                            md={(screen) => <PhenixSelect key={`ratio-size-${screen}`} name={`size-${screen}`} label={__("Ratio Size", "pds-blocks")} className={`weight-medium mb-15`} value={attributes.setting[`size-${screen}`]} onChange={set_setting} options={PhenixBlocks.dataLists.media_options.size} />}
                            lg={(screen) => <PhenixSelect key={`ratio-size-${screen}`} name={`size-${screen}`} label={__("Ratio Size", "pds-blocks")} className={`weight-medium mb-15`} value={attributes.setting[`size-${screen}`]} onChange={set_setting} options={PhenixBlocks.dataLists.media_options.size} />}
                            xl={(screen) => <PhenixSelect key={`ratio-size-${screen}`} name={`size-${screen}`} label={__("Ratio Size", "pds-blocks")} className={`weight-medium mb-15`} value={attributes.setting[`size-${screen}`]} onChange={set_setting} options={PhenixBlocks.dataLists.media_options.size} />}
                        />
                        {/*===> Option Controller <===*/}
                        <div className='flexbox'>
                            <OptionControl key={`lazyloading`} name={`lazyloading`} value="true" checked={attributes.setting.lazyloading} onChange={set_setting} type='switch-checkbox' className='small me-10 mb-10'>{__("LazyLoading", "pds-blocks")}</OptionControl>
                            <OptionControl key={`inner-blocks`} name={`inner-blocks`} value="boolean" checked={attributes.style['inner-blocks']} onChange={set_style} type='switch-checkbox' className='small mb-10'>{__("innerBlocks", "pds-blocks")}</OptionControl>
                            {attributes.setting.type === 'embed' && attributes.setting.embeds === "video" ? <>
                                <OptionControl key={`controls`} name={`controls`} value="true" checked={attributes.setting.controls} onChange={set_setting} type='switch-checkbox' className='small mb-10 me-10'>{__("Controls", "pds-blocks")}</OptionControl>
                                <OptionControl key={`autoplay`}  name={`autoplay`} value="true" checked={attributes.setting.autoplay} onChange={set_setting} type='switch-checkbox' className='small mb-10 me-10'>{__("Autoplay", "pds-blocks")}</OptionControl>
                                <OptionControl key={`loop`} name={`loop`} value="true" checked={attributes.setting.loop} onChange={set_setting} type='switch-checkbox' className='small mb-10 me-10'>{__("Video Loop", "pds-blocks")}</OptionControl>
                                <OptionControl key={`muted`} name={`muted`} value="true" checked={attributes.setting.muted} onChange={set_setting} type='switch-checkbox' className='small mb-10'>{__("Muted Audio", "pds-blocks")}</OptionControl>
                            </>:null}
                        </div>
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
                {attributes.style.isLink ? <PxDropDown title={__("URL Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-link color-success divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-260" dataPosition={`bottom, end`}>
                    <li key="link" className='pdx-15 pdt-10 pdb-0 mb-0'>
                        <LinkControlSearchInput key={`url-${uniqueKey}`} name="url" placeholder={__("URL or Page Name", "pds-blocks")} onChange={set_url} value={ attributes.style.url || "#" } allowDirectEntry={false} withURLSuggestion={false} withCreateSuggestion={false} renderSuggestions={(props) => SuggestionsUrl(props)} />
                        {/*===> Option Control <===*/}
                        <OptionControl key={`inNewTab-${uniqueKey}`} name={`inNewTab`} value={`boolean`} checked={attributes.style.inNewTab} onChange={set_style} type='checkbox' className='tiny me-15'>
                            <span className='fas fa-check radius-circle'>{__("Open in New Tab", "pds-blocks")}</span>
                        </OptionControl>
                        {/*===> Disable Button <===*/}
                        <div className='fluid' style={{paddingBottom: 3}}>
                            <OptionControl key={`isLink-${uniqueKey}`} name={`isLink`} value={`boolean`} checked={attributes.style.isLink} onChange={set_style} type='checkbox' className='tiny fluid align-center-x divider-t mt-5'>
                                <span className='btn small fluid bg-transparent fs-12 color-danger'>{__("Disable URL Link", "pds-blocks")}</span>
                            </OptionControl>
                        </div>
                    </li>
                </PxDropDown> :
                /*===> Add Link <===*/
                <OptionControl key={`isLink-${uniqueKey}`} name={`isLink`} value={`boolean`} checked={attributes.style.isLink} onChange={set_style} type='button-checkbox' className='inline-block'>
                    <span className='btn bg-transparent fs-16 square tooltip-bottom far fa-link' data-title={__("Convert to Link", "pds-blocks")}></span>
                </OptionControl>}
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
                <PxDropDown title={__("Style Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-adjust divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="pds-styles" className='pdt-15 pdb-5 pdx-15 lineheight-150'>
                        {/*===> Styles <===*/}
                        <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} setAttributes={setAttributes} mainSetter={set_style} objectSetter={PhenixBlocks.setObject} colorSetter={set_typography} options="text-colors" />
                    </li>
                </PxDropDown>
                {/*===> Dropdown Button <===*/}
                <PxDropDown title={__("Typography Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-font divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="pds-typography" className='pdt-15 pdx-15 lineheight-150'>
                        <ScreensTabs
                            sm={(screen) => <TypographySet key={`typography-${uniqueKey}`} attributes={attributes} mainSetter={set_typography} options="size, other" />}
                            md={(screen) => <TypographySet screen={screen} attributes={attributes} mainSetter={set_typography} options="size" />}
                            lg={(screen) => <TypographySet screen={screen} attributes={attributes} mainSetter={set_typography} options="size" />}
                            xl={(screen) => <TypographySet screen={screen} attributes={attributes} mainSetter={set_typography} options="size" />}
                        />
                    </li>
                </PxDropDown>
                {/*===> Icon Control <===*/}
                {!attributes.style?.hasIcon ? 
                    <OptionControl key={`hasIcon-${uniqueKey}`} name={`hasIcon`} value={`boolean`} checked={attributes.style?.hasIcon} onChange={set_style} type='button-checkbox' className='inline-block divider-e border-alpha-25'>
                        <span className='btn bg-transparent fs-16 square tooltip-bottom far fa-icons h-min-100' style={{paddingTop: 2}} data-title={__("Add Icon", "pds-blocks")}></span>
                    </OptionControl>
                :
                    <PxDropDown title={__("Text Icon", "pds-blocks")} button={`bg-transparent fs-16 square ${attributes.style?.icon || "far fa-icons"} divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                        <li key="icons" className='pdx-10 pdt-5'>
                            {/*===> Icon Selector <===*/}
                            <PhenixIcons key={`icon-${uniqueKey}`} value={ attributes.style?.icon || "far fa-icons" } onChange={set_icon} />
                            {/*===> Option Control <===*/}
                            <OptionControl key={`icon-large-${uniqueKey}`} name={`icon-large`} value="icon-lg" checked={attributes.style['icon-large'] || false} onChange={set_style} type='switch-checkbox' className='tiny mt-5'>{__("Large icon", "pds-blocks")}</OptionControl>
                            {/*===> Disable Button <===*/}
                            <div className='fluid' style={{paddingBottom: 3}}>
                                <OptionControl key={`hasIcon-${uniqueKey}`} name={`hasIcon`} value={`boolean`} checked={attributes.style?.hasIcon} onChange={set_style} type='checkbox' className='tiny fluid align-center-x divider-t mt-5'>
                                    <span className='btn small fluid bg-transparent fs-12 color-danger'>{__("Remove Icon", "pds-blocks")}</span>
                                </OptionControl>
                            </div>
                        </li>
                    </PxDropDown>
                }
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
            </Toolbar>
        </BlockControls>
        {/*====> Controls Layout <====*/}
        <InspectorControls key={`${uniqueKey}-inspector`}>
            {/*===> Widget Panel <===*/}
            <PanelBody title="General Settings" initialOpen={true}>
                {/*===> Styles Options <===*/}
                <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} setAttributes={setAttributes} objectSetter={PhenixBlocks.setObject} mainSetter={set_style} colorSetter={set_typography} options="support" />
            </PanelBody>
        </InspectorControls>
        {/*===> Modal Component <===*/}
        {attributes.preview ?  <img src={PreviewImage} alt="" className='fluid' /> : 
        <div {...blockProps}  key={`${uniqueKey}`}>
            {/*===> Change Source Trigger <===*/}
            {!attributes.setting.type || attributes.setting.type === "image" || attributes.setting['embed'] === "video" || attributes.setting.type === "embed" && !attributes.setting['embed']? 
                <MediaUpload onSelect={ set_source } value={attributes.setting?.src} render={({open}) => (<button type="button" className="pds-replace-btn mouse-pointer position-ab pos-top-15 pos-start-15 btn primary radius-sm fs-12 small z-index-5" onClick={open}>{__("Replace", "pds-blocks")}</button>)} />
            :null}
            {/*===> Image Type <===*/}
            {attributes.setting.type === "image" ? <img src={attributes.setting.src || blockProps['data-src']} className="px-media-img" /> : null}
            {/*===> Inner Content <===*/}
            {attributes.style['inner-blocks'] === true ? <InnerBlocks template={[
                ['phenix/group', {
                    "className": "px-media-element",
                    "style": {"min_size":"w-min-280"}
                },[
                    [ 'core/paragraph', { placeholder: 'Book Content' } ],
                ]],
            ]} /> : null}
        </div>}
    </>);
}