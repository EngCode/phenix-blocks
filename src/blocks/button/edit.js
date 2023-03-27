//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import {useState, useEffect } from '@wordpress/element';
import {PanelBody, TextControl} from '@wordpress/components';
import {RichText, useBlockProps, InspectorControls, __experimentalLinkControlSearchInput as LinkControlSearchInput} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import ScreensTabs from "../px-controls/tabs";
import PhenixIcons from '../px-controls/icons';
import PhenixSelect from '../px-controls/select';
import OptionControl from '../px-controls/switch';
import MediaUploader from '../px-controls/uploader';

//====> Phenix Options Sets <=====//
import StylesSet from '../px-controls/sets/styles';
import FlexboxSet from '../px-controls/sets/flexbox';
import TypographySet from '../px-controls/sets/typography';
import ResponsiveSet from '../px-controls/sets/responsive';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Value Handler <===//
    const valueHandler = (target) => {
        //===> Define Array Type <===//
        let single_val,
            array_val = [],
            type = target.getAttribute('type') || target.tagName;

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
        else { single_val = target.value; }

        //===> Return Value <===//
        if(single_val) return single_val;
    };

    //==> Set Value Method <==//
    const set_value = target => {
        //==> Get Current <==//
        let name = target.getAttribute('name');
        const attr = attributes;

        //==> Add the Value <==//
        attr[`${name}`] = typeof(target) === "string"? target : valueHandler(target);

        //==> Set Value <==//
        setAttributes({ ...attr });
    };

    //==> Set Flexbox Method <==//
    const set_flexbox = (target, screen) => {
        //==> Get Current <==//
        let name = target instanceof HTMLElement ? target.getAttribute('name') : `${target}`;
        const flexbox = attributes.flexbox;

        //==> Add the Value <==//
        if(name.includes('align-')) { name = "align" }
        flexbox[`${name}${screen?'-'+screen:""}`] = typeof(target) === "string" ? target.replace("align-reset", "") : valueHandler(target);

        //==> Set Value <==//
        setAttributes({ flexbox : {...flexbox} });
    };

    //==> Set Typography Method <==//
    const set_typography = (target, screen) => {
        //==> Get Current <==//
        let name = target instanceof HTMLElement ? target.getAttribute('name') : "color";
        const typography = attributes.typography;

        //==> Add the Value <==//
        typography[`${name}${screen?'-'+screen:""}`] = typeof(target) === "string" ? target : valueHandler(target);

        //==> Set Value <==//
        setAttributes({ typography : {...typography} });
    };

    //==> Set Style Method <==//
    const set_style = (target, screen) => {
        //==> Get Current <==//
        let name = target instanceof HTMLElement ? target.getAttribute('name') : "background";
        const style = attributes.style;

        //==> Add the Value <==//
        style[`${name}${screen?'-'+screen:""}`] = name === "background" ? target : valueHandler(target);

        //==> Set Value <==//
        setAttributes({ style : {...style} });
    };

    //===> Responsive Options <===//
    const responsive_options = (screen) => {
        return (<ResponsiveSet options={`${attributes.isFlexbox ? "flexbox," : ""} display, text-align`} flexSetter={set_flexbox} styleSetter={set_style} typoSetter={set_typography} screen={screen} attributes={attributes} />);
    };

    //===> Set Settings <===//
    const set_icon = value => setAttributes({ icon: `${value.type} ${value.value}`});
    const set_label = label => setAttributes({ label });
    const set_data_modal = data_modal => setAttributes({ data_modal });

    //===> Link Settings <===//
    const set_url = url => setAttributes({ url });

    //===> Define Controls Options <===//
    const btn_types = [
        { label: __("Default", "phenix"), value: 'btn' },
        { label: __("Text/Icon", "phenix"), value: 'btn btn-icon' },
        { label: __("Icon Only", "phenix"), value: 'btn square' },
    ];

    const btn_sizes = [
        { label: __("Normal", "phenix"), value: '' },
        { label: __("Tiny", "phenix"), value: 'tiny' },
        { label: __("Small", "phenix"), value: 'small' },
        { label: __("Large", "phenix"), value: 'large' },
        { label: __("xLarge", "phenix"), value: 'xlarge' },
    ];

    const lightbox_types = [
        { label: __("Image", "phenix"),  value: 'image' },
        { label: __("Video", "phenix"),  value: 'video' },
        { label: __("Embed", "phenix"),  value: 'embed' },
    ]

    //===> Label Element <===//
    const labelControl = <RichText value={ attributes.label } onChange={set_label} tagName="span" placeholder="TXT" className="mg-0 pd-0" />;

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const screens = ["-md", "-lg", "-xl"];
    const [state, set_state] = useState({
        menus_list: [],
        icons_version: "5-free",
    });

    //===> Fetch Data <===//
    useEffect(() => {
        apiFetch({path: 'pds-blocks/v2/options'}).then(options => {
            //===> Create New Array <===//
            let new_state = state,
                locations = options.menu_locations,
                menus_new_list = [{label: __("Default", 'phenix'), value: ""}];
            
            //===> Get Icons Version <===//
            if (options.pds_icon_font) new_state.icons_version = options.pds_icon_font;
            //===> Get Menu Locations <===//
            for (const [key, value] of Object.entries(locations)) menus_new_list.push({label: value, value: key});
            if (menus_new_list !== state.menus_list) new_state.menus_list = menus_new_list;
        });
    }, []);

    //===> General Options <===//
    if (attributes.size) blockProps.className += ` ${attributes.size}`;
    if (attributes.radius) blockProps.className += ` ${attributes.radius}`;
    if (attributes.outline) blockProps.className += ` ${attributes.outline}`;
    if (attributes.isLink) blockProps['href'] = "#none";
    if (attributes.type) {
        blockProps.className += ` ${attributes.type.replace('normal', 'btn')}`;
        if (attributes.type !== "btn" && attributes.icon) blockProps.className+= ` ${attributes.icon}`;
    }

    //===> Style Options <===//
    if (attributes.style || attributes.typography?.color) {
        //===> Effects <===//
        if (attributes.style?.radius) blockProps.className += ` ${attributes.style.radius}`;
        if (attributes.style?.overlapped) blockProps.className += ` ${attributes.style.overlapped}`;
        if (attributes.style['icon-large']) blockProps.className += ` ${attributes.style['icon-large']}`;
        if (attributes.style?.display) blockProps.className += ` ${attributes.style.display.toString().replace(',', ' ')}`;

        //===> Text Color <===//
        if(attributes.typography?.color) blockProps.className += ` ${attributes.typography.color}`;

        //===> Render Background <===//
        if (attributes.style?.background?.value) {
            //===> Adjust Primary Colors <===//
            let isPrimary = false,
                primaryColors = ["bg-primary", "bg-secondary", "bg-gray", "bg-dark", "bg-white", "bg-success", "bg-danger", "bg-warning", "bg-info"];

            //===> Correct Colors <===//
            primaryColors.forEach(color => attributes.style.background.value === color ? isPrimary = true : null);

            //===> Set the Background <===//
            if (isPrimary) {
                blockProps.className += ` ${attributes.style.background.value.replace('bg-', '')}`;
            } else {
                blockProps.className += ` ${attributes.style.background.value}`;
            }


            //===> Background Rotation <===//
            if (attributes.style.background.rotate) blockProps.className += ` ${attributes.style.background.rotate}`;
        }

        //===> Position <===//
        if (attributes.style?.position) {
            //===> if its Absolute Sticky <===//
            if (attributes.style.position === "sticky-absolute") {
                blockProps["data-sticky"] = ` ${attributes.style.position}`;
                blockProps.className += ` position-rv fluid z-index-header`;
            }
            //===> Otherwise is Class Name <===//
            else {
                blockProps.className += ` ${attributes.style.position}`;
            }
        }
    }

    //===> Typography Options <===//
    if (attributes.typography) {
        if(attributes.typography.size) blockProps.className += ` ${attributes.typography.size.toString().replace(',', ' ')}`;
        if(attributes.typography.weight) blockProps.className += ` ${attributes.typography.weight}`;
        if(attributes.typography.align) blockProps.className += ` ${attributes.typography.align}`;
        //===> Responsive <===//
        screens.forEach(screen => {
            if (attributes.typography[`align${screen}`]) blockProps.className += ` ${attributes.typography[`align${screen}`]}`;
            if (attributes.typography[`size${screen}`]) blockProps.className += ` ${attributes.typography[`size${screen}`]}`;
        });
    }

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

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> General Options <===*/}
            <PanelBody title={__("General Settings", "phenix")}>
                <div className='row gpx-20'>
                    {/*===> Select Control <===*/}
                    <div className='col-6 mb-15'>
                        <PhenixSelect name="type" placeholder={__("Default", "phenix")} label={__("Type", "phenix")} value={attributes.type} onChange={set_value} options={btn_types} />
                    </div>
                    {/*===> Select Control <===*/}
                    <div className='col-6 mb-15'>
                        <PhenixSelect name="size" placeholder={__("Default", "phenix")} label={__("Size", "phenix")} value={attributes.size} onChange={set_value} options={btn_sizes} />
                    </div>
                    {/*===> Link Input <===*/}
                    {attributes.isLink ? <div className='col col-6 mb-10'>
                        <label className='mb-5'>{__("URL/Page")}</label>
                        <LinkControlSearchInput name="url" placeholder={__("URL or Page Name", "phenix")} onChange={set_url} value={ attributes.url } allowDirectEntry={false} withURLSuggestion={false} withCreateSuggestion={false} renderSuggestions={(props) => suggestionsRender(props)} />
                        <span style={{marginTop: "-10px"}} className='col-12 color-primary tx-icon far fa-link display-block mb-10'>{attributes.url}</span>
                    </div> : null}
                    {/*===> Options Group <===*/}
                    <div className='col-12 flexbox gpy-5 mb-10 pdx-5'>
                        <label className='col-12 mb-10 fs-14'>{__("Button Features", "phenix")}</label>
                        {/*===> Add Link <===*/}
                        <OptionControl name={`isLink`} value={`boolean`} checked={attributes.isLink || false} onChange={set_value} type='checkbox' className='tiny me-10'>
                            <span className='fas fa-check radius-circle'>{__("URL Link", "phenix")}</span>
                        </OptionControl>
                        {/*===> Option Control <===*/}
                        {attributes.isLink ?
                            <OptionControl name={`inNewTab`} value={`boolean`} checked={attributes.inNewTab || false} onChange={set_value} type='checkbox' className='tiny me-10'>
                                <span className='fas fa-check radius-circle'>{__("New Tab", "phenix")}</span>
                            </OptionControl>
                        : null}
                        {/*===> Option Control <===*/}
                        <OptionControl name={`isLightBox`} value={`boolean`} checked={attributes.isLightBox || false} onChange={set_value} type='checkbox' className='tiny me-10'>
                            <span className='fas fa-check radius-circle'>{__("Lightbox", "phenix")}</span>
                        </OptionControl>
                        {/*===> Option Control <===*/}
                        <OptionControl name={`outline`} value={`outline`} checked={attributes.outline || false} onChange={set_value} type='checkbox' className='tiny me-10'>
                            <span className='fas fa-check radius-circle'>{__("Outline", "phenix")}</span>
                        </OptionControl>
                        {/*===> Option Control <===*/}
                        <OptionControl name={`custom-hover`} value={`boolean`} checked={attributes['custom-hover'] || false} onChange={set_value} type='checkbox' className='tiny me-10'>
                            <span className='fas fa-check radius-circle'>{__("Custom HVR", "phenix")}</span>
                        </OptionControl>
                        {/*===> Option Control <===*/}
                        <OptionControl name={`has-animations`} value={`boolean`} checked={attributes['has-animations'] || false} onChange={set_value} type='checkbox' className='tiny'>
                            <span className='fas fa-check radius-circle'>{__("Animated", "phenix")}</span>
                        </OptionControl>
                    </div>
                    {/*===> Icon Selector <===*/}
                    <div className='col-12'>
                        <PhenixIcons key="icon" label="Button Icon" version={state.icons_version} value={ attributes.icon } onChange={set_icon} />
                    </div>
                    {/*===> Options Group <===*/}
                    {attributes.type.includes('icon') || attributes.type.includes('square') ? <div className='col-12 row gpx-10'>
                        {/*===> Option Control <===*/}
                        <div className='col-6'>
                            <OptionControl name={`icon-large`} value="icon-lg" checked={attributes.style['icon-large'] || false} onChange={set_style} type='switch-checkbox' className='small'>{__("Large Icon", "phenix")}</OptionControl>
                        </div>
                        {attributes.type.includes('icon') ? <>
                            {/*===> Option Control <===*/}
                            <div className='col-6'>
                                <OptionControl name={`iconLabel`} value="boolean" checked={attributes.iconLabel || false} onChange={set_value} type='switch-checkbox' className='small'>{__("Label Icon", "phenix")}</OptionControl>
                            </div>
                            {/*===> Option Control <===*/}
                            <div className='col-6'>
                                <OptionControl name={`iconEnd`} value="boolean" checked={attributes.iconEnd || false} onChange={set_value} type='switch-checkbox' className='small'>{__("Revers Pos", "phenix")}</OptionControl>
                            </div>
                        </> : null }
                    </div> : null }
                    {/*===> // Column <===*/}
                </div>
            </PanelBody>
            {/*===> Style Options <===*/}
            <PanelBody title={__("Style Options", "phenix")} initialOpen={false}>
                <StylesSet attributes={attributes} mainSetter={set_style} colorSetter={set_typography} bgOnly="onlyCG" />
            </PanelBody>
            {/*===> Typography <===*/}
            <PanelBody title={__("Typography", "phenix")} initialOpen={false}>
                <TypographySet attributes={attributes} mainSetter={set_typography} />
            </PanelBody>
            {/*===> Widget Panel <===*/}
            {attributes.isLightBox ?<PanelBody title={__("Lightbox Settings","phenix")}>
                {/*===> Elements Group <===*/}
                <div className='row gpx-15'>
                    {/*===> Column <===*/}
                    <div className='col-12 mb-10'>
                        <PhenixSelect name="lightbox_type" placeholder={__("Default", "phenix")} label={__("Type", "phenix")} value={attributes.lightbox_type} onChange={set_value} options={lightbox_types} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-12'>
                        {attributes.lightbox_src ?  <MediaUploader label={__("Upload Source", "phenix")} type={attributes.lightbox_type} value={attributes.url} setValue={(file => {setAttributes({url: file.url})})}></MediaUploader> :
                            <TextControl key="blockProps_id" label={__("Source URL", "phenix")} value={ attributes.url } onChange={set_url}/>
                        }
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-12'>
                        <OptionControl name={`lightbox_src`} value="boolean" checked={attributes.lightbox_src || false} onChange={set_value} type='switch-checkbox' className='small'>{__("Upload Source", "phenix")}</OptionControl>
                    </div>
                    {/*===> // Column <===*/}
                </div>
            </PanelBody> : null}
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("Trigger Data", "phenix")} initialOpen={false}>
                {/*===> Elements Group <===*/}
                <div className='row gpx-15 gpy-10'>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <PhenixSelect name="data_id" placeholder={__("Default", "phenix")} label={__("Menu (ID)", "phenix")} value={attributes.data_id} onChange={set_value} options={state.menus_list} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <TextControl label={__("Modal (ID)", "phenix")} value={ attributes.data_modal } onChange={set_data_modal} />
                    </div>
                    {/*===> // Column <===*/}
                </div>
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        {attributes.preview ? <img src="https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/buttons.jpg" alt="" className="fluid" /> : <>
            <a onClick={(event) => event.preventDefault()} { ...blockProps }>{!attributes.type.includes("square") ? labelControl : ''}</a>
        </>}
    </>);
}