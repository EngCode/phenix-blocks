//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import {useEffect} from '@wordpress/element';
import {PanelBody, TextControl, Toolbar} from '@wordpress/components';
import {RichText, BlockControls, InspectorControls, useBlockProps, InnerBlocks, useInnerBlocksProps, __experimentalLinkControlSearchInput as LinkControlSearchInput} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import ScreensTabs from "../px-controls/tabs";
import PhenixIcons from '../px-controls/icons';
import PxDropDown from '../px-controls/dropdown';
import PhenixSelect from '../px-controls/select';
import PhenixNumber from "../px-controls/number";
import PhenixInput from '../px-controls/input';
import MediaUploader from '../px-controls/uploader';
import OptionControl from '../px-controls/switch';

//====> Phenix Options Sets <=====//
import SizesSet from '../px-controls/sets/sizes';
import MarginSet from '../px-controls/sets/margin';
import PositionSet from '../px-controls/sets/position';
import StylesSet from '../px-controls/sets/styles';
import TypographySet from '../px-controls/sets/typography';
import EffectsSet from '../px-controls/sets/effects';
import PhenixComponentsBuilder from '../px-controls/panel-scripts';

//====> Attributes Renderers <====//
import OptionsRenderer from "../px-controls/logic/renderer-v1";

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Value Handler <===//
    const valueHandler = (target) => {
        //===> Define Array Type <===//
        let single_val,
            array_val = [],
            type = target instanceof HTMLElement ? (target.getAttribute('type') || target.tagName) : null;

        //==> for Boolean Values <==//
        if (type === 'checkbox' || type === 'radio') {
            if (target.value === 'boolean') { single_val = target.checked; }
            else { single_val = target.checked ? target.value : ""; }
        }

        //===> for Value of Type Array <===//
        else if (type === "SELECT" && target.hasAttribute('multiple')) {
            //===> Get Multiple Value <===//
            let values = target.parentNode.getAttribute('data-value').split(',');
            //===> Get Current Values <===//
            values.forEach(val => val !== "" ? array_val.push(val) : null);
            //===> Set Array Value <===//
            single_val = array_val;
        }

        //===> for Normal Values <===//
        else if (type === null) { single_val = target; }

        //===> for Normal Values <===//
        else { single_val = target.value; }

        //===> Return Value <===//
        if(single_val) return single_val;
    };

    const set_value = (target) => {
        //==> Get Current <==//
        const name = target.getAttribute('name');
        const value = (typeof(target) === "string" || typeof(target) === "number") ? target : valueHandler(target);
        const newAttributes = { ...attributes, [name]: value };
        //==> Set Value <==//
        setAttributes(newAttributes);
    };

    //==> Set Attributes Method <==//
    const set_attr_handler = (target, screen, attr, hasName) => {
        //==> Get Current <==//
        const name = hasName || (target instanceof HTMLElement && target.getAttribute('name')) || (attr === "typography" ? "color" : attr === "style" ? "background" : `${target}`);
        const value = (typeof(target) === "string" || typeof(target) === "number") ? target : valueHandler(target);
        
        //==> Set Value <==//
        const newAttributes = name.includes('animation') ? {
            ...attributes[attr],
            animation: { ...attributes[attr].animation, [name.replace('animation-', '')]: value }
        } : {
            ...attributes[attr],
            [`${name}${screen ? '-' + screen : ''}`]: value
        };

        setAttributes({ ...attributes, [attr]: newAttributes });
    };

    //===> URL Auto-Complete <===//
    const suggestionsRender = (props) => (
        <ul className="fluid reset-list bg-white bx-shadow-dp-1 border-1 border-solid border-alpha-10 z-index-dropdown position-ab pos-start-0 pos-after-y">
            {props.suggestions.map((suggestion, index) => {
                return (<li key={`link-sug-key-${index}`} className="pdx-15 pdy-5 fs-12 divider-b mouse-pointer" onClick={() => props.handleSuggestionClick(suggestion)}>
                    <strong>{suggestion.title}</strong>
                    <span className='display-block fs-10 color-primary tx-nowrap'>{suggestion.url}</span>
                </li>)
            })}
        </ul>
    );

    //==> Set Object Attributes Methods <==//
    const set_url = url => setAttributes({ url });
    const set_setting = target => set_attr_handler(target, "", "setting");
    const set_style = (target, screen) => set_attr_handler(target, screen, "style");
    const set_icon = value => set_attr_handler(`${value.type} ${value.value}`, "", "style", "icon");
    const set_source = value => set_attr_handler(`${value.url}`, "", "setting", "src");
    const set_typography = (target, screen) => set_attr_handler(target, screen, "typography");

    //===> View Script <===//
    useEffect(() => PhenixComponentsBuilder(), []);

    //===> Controls Options <===//
    const types_options = [
        { "label": "Image", "value": "image"},
        { "label": "Embed", "value": "embed"},
        { "label": "iFrame", "value": "iframe"},
    ];

    const embeds_options = [
        { "label": "Video", "value": "video"},
        { "label": "YouTube", "value": "youtube"},
        { "label": "Vimeo", "value": "vimeo"},
        { "label": "Others", "value": "other"},
    ];

    const size_options = [
        { "label": "None", "value": "none"},
        { "label": "1x1", "value": "1x1"},
        { "label": "4x3", "value": "4x3"},
        { "label": "16x9", "value": "16x9"},
        { "label": "21x9", "value": "21x9"},
        { "label": "Other", "value": "custom"},
    ];

    const size_options_res = [
        { "label": "Default", "value": ""},
        { "label": "None", "value": "none"},
        { "label": "Ratio 1x1", "value": "1x1"},
        { "label": "Ratio 4x3", "value": "4x3"},
        { "label": "Ratio 16x9", "value": "16x9"},
        { "label": "Ratio 21x9", "value": "21x9"},
    ];

    const lightbox_types = [
        { label: __("Image", "pds-blocks"),  value: 'image' },
        { label: __("Video", "pds-blocks"),  value: 'video' },
        { label: __("Embed", "pds-blocks"),  value: 'embed' },
    ];

    //===> Get Block Properties <===//
    const renderProps = OptionsRenderer({attributes: attributes, blockProps: useBlockProps()});
    const blockProps = renderProps.blockProps;
    const uniqueKey = blockProps.id;

    //===> Layout Options <===//
    blockProps.className += `${renderProps.container.className}`;

    //===> Data Attributes Options <===//
    Object.entries(renderProps.container).forEach(([option_name, option_value]) => {
        if(option_name === "className") return;
        else blockProps[option_name] = option_value;
    });

    //===> Default Options <===//
    if(!attributes.setting.type) blockProps['data-type'] = "image";
    if(!attributes.setting.src) blockProps.style.backgroundImage = "https://via.placeholder.com/1024x768.webp";
    if(!attributes.setting.size) blockProps.className += " ratio-4x3";

    //===> Render <===//
    return (<>
        {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <Toolbar key={`${uniqueKey}-toolbar`} label={__("Quick Settings", "pds-blocks")}>
                {/*===> Select Control <===*/}
                <div className='inline-block inline-select tooltip-bottom w-100' data-title={__("Type", "pds-blocks")}>
                    <PhenixSelect name="type" placeholder={__("Image", "pds-blocks")} className={`tx-align-center weight-medium`} value={attributes.setting.type} onChange={set_setting} options={types_options} />
                </div>
                {/*===> Select Control <===*/}
                <div className='inline-block inline-select tooltip-bottom w-75' data-title={__("Ratio Size", "pds-blocks")}>
                    <PhenixSelect name="size" placeholder={__("Size", "pds-blocks")} className={`tx-align-center weight-medium`} value={attributes.setting.size} onChange={set_setting} options={size_options} />
                </div>
                {/*===> Select Control <===*/}
                {attributes.setting.type === "embed" ? <div className='inline-block inline-select tooltip-bottom w-100' data-title={__("Embed Source", "pds-blocks")}>
                    <PhenixSelect name="embed" placeholder={__("Video", "pds-blocks")} className={`tx-align-center weight-medium`} value={attributes.setting['embed']} onChange={set_setting} options={embeds_options} />
                </div> : null}
                {/*===> Dropdown Control <===*/}
                <PxDropDown title={__("Media Source", "pds-blocks")} button={`bg-transparent fs-16 square far fa-image divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="dropdown-item" className='pd-10'>
                        {/*===> Uploader <===*/}
                        {!attributes.setting.type || attributes.setting.type === "image" || attributes.setting['embed'] === "video" || attributes.setting.type === "embed" && !attributes.setting['embed']? 
                            <MediaUploader label={__("Upload File","pds-blocks")} value={attributes.setting?.src} setValue={set_source}></MediaUploader>
                            :
                            <PhenixInput name="src" label={__("Source URL", "pds-blocks")} value={attributes.setting.src} onChange={set_setting} />
                        }
                    </li>
                </PxDropDown>
                {/*===> Dropdown Control <===*/}
                <PxDropDown title={__("Media Settings", "pds-blocks")} button={`bg-transparent fs-16 square far fa-cog divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="dropdown-item" className='pdx-15 pdy-15'>
                        <ScreensTabs
                            md={(screen) => <PhenixSelect name={`size-${screen}`} label={__("Size", "pds-blocks")} className={`weight-medium mb-15`} value={attributes.setting[`size-${screen}`]} onChange={set_setting} options={size_options_res} />}
                            lg={(screen) => <PhenixSelect name={`size-${screen}`} label={__("Size", "pds-blocks")} className={`weight-medium mb-15`} value={attributes.setting[`size-${screen}`]} onChange={set_setting} options={size_options_res} />}
                            xl={(screen) => <PhenixSelect name={`size-${screen}`} label={__("Size", "pds-blocks")} className={`weight-medium mb-15`} value={attributes.setting[`size-${screen}`]} onChange={set_setting} options={size_options_res} />}
                        />
                        {/*===> Option Controller <===*/}
                        <div className='flexbox'>
                            <OptionControl name={`lazyloading`} value="true" checked={attributes.setting.lazyloading} onChange={set_setting} type='switch-checkbox' className='small me-10 mb-10'>{__("LazyLoading", "pds-blocks")}</OptionControl>
                            <OptionControl name={`inner-blocks`} value="boolean" checked={attributes.style['inner-blocks']} onChange={set_style} type='switch-checkbox' className='small mb-10'>{__("innerBlocks", "pds-blocks")}</OptionControl>
                            <OptionControl name={`controls`} value="true" checked={attributes.setting.controls} onChange={set_setting} type='switch-checkbox' className='small mb-10 me-10'>{__("Controls", "pds-blocks")}</OptionControl>
                            <OptionControl name={`autoplay`} value="true" checked={attributes.setting.autoplay} onChange={set_setting} type='switch-checkbox' className='small mb-10 me-10'>{__("Autoplay", "pds-blocks")}</OptionControl>
                            <OptionControl name={`loop`} value="true" checked={attributes.setting.loop} onChange={set_setting} type='switch-checkbox' className='small mb-10 me-10'>{__("Video Loop", "pds-blocks")}</OptionControl>
                            <OptionControl name={`muted`} value="true" checked={attributes.setting.muted} onChange={set_setting} type='switch-checkbox' className='small mb-10'>{__("Muted Audio", "pds-blocks")}</OptionControl>
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
                        <LinkControlSearchInput key={`url-${uniqueKey}`} name="url" placeholder={__("URL or Page Name", "pds-blocks")} onChange={set_url} value={ attributes.style.url || "#" } allowDirectEntry={false} withURLSuggestion={false} withCreateSuggestion={false} renderSuggestions={(props) => suggestionsRender(props)} />
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
                        <div className='col-12 mb-10'><PhenixSelect key={`lightbox-type-${uniqueKey}`} name="lightbox_type" placeholder={__("Source Type", "pds-blocks")} value={attributes.lightbox_type} onChange={set_value} options={lightbox_types} /></div>
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
                        <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} mainSetter={set_style} colorSetter={set_typography} options="text-colors" />
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
                {attributes.style?.position ?
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
                <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} mainSetter={set_style} colorSetter={set_typography} options="support" />
            </PanelBody>
        </InspectorControls>
        {/*===> Modal Component <===*/}
        {attributes.preview ?  <img src={PreviewImage} alt="" className='fluid' /> : <div {...blockProps}  key={`${uniqueKey}`}>
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