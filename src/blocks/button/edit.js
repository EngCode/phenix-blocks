//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import {useState, useEffect } from '@wordpress/element';
import {PanelBody, SelectControl, ToggleControl, TextControl} from '@wordpress/components';
import {RichText, useBlockProps, InspectorControls, __experimentalLinkControlSearchInput as LinkControlSearchInput} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import ScreensTabs from "../px-controls/tabs";
import PhenixSelect from '../px-controls/select';
import OptionControl from '../px-controls/switch';
import MediaUploader from '../px-controls/uploader';
import PhenixColor from '../px-controls/colors/text';
import PhenixBackground from '../px-controls/colors/background';
import PhenixIcons from '../px-controls/icons';

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
    const set_size = size => setAttributes({size});
    const set_type = type => setAttributes({type});
    const set_label = label => setAttributes({ label });
    const set_radius = radius => setAttributes({radius});
    const set_outline = outline => setAttributes({ outline });
    const set_data_id = data_id => setAttributes({ data_id });
    const set_icon = value => setAttributes({ icon: `${value.type} ${value.value}`});
    const set_iconEnd = iconEnd => setAttributes({ iconEnd });
    const set_iconLabel = iconLabel => setAttributes({ iconLabel });
    const set_isLightBox = isLightBox => setAttributes({isLightBox});
    const set_data_modal = data_modal => setAttributes({ data_modal });
    const set_lightbox_src = lightbox_src => setAttributes({lightbox_src});
    const set_lightbox_type = lightbox_type => setAttributes({lightbox_type});

    //===> Link Settings <===//
    const set_isLink = isLink => setAttributes({ isLink });
    const set_inNewTab = inNewTab => setAttributes({ inNewTab });
    const set_url = url => setAttributes({ url });

    //===> Typography Options <===//
    const set_typography_size = value => {
        //==> Get Current <==//
        let typography = attributes.typography;

        //==> Set Value <==//
        typography.size = value;
        setAttributes({ typography : {...typography} });
    };

    //==> Weight <==//
    const set_typography_weight = value => {
        //==> Get Current <==//
        let typography = attributes.typography;

        //==> Set Value <==//
        typography.weight = value;
        setAttributes({ typography : {...typography} });
    };

    //==> Align <==//
    const set_typography_align = target => {
        //==> Get Current <==//
        let typography = attributes.typography;

        //==> Set Value <==//
        typography.align = target.checked ? target.value : "";
        setAttributes({ typography : {...typography} });
    };

    //==> Color <==//
    const set_color = value => {
        //==> Get Current <==//
        let typography = attributes.typography;

        //==> Set Value <==//
        typography.color = value;
        setAttributes({ typography : {...typography} });
    };

    //===> Set Background <===//
    const set_background = background => {
        //==> Get Current <==//
        let styles = attributes.style;

        //==> Set Value <==//
        styles.background = background;
        setAttributes({ style : {...styles} });
    };

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

    const radius_sizes = [
        { label: __("None", "phenix"), value: '' },
        { label: __("Tiny", "phenix"), value: 'radius-sm' },
        { label: __("Small", "phenix"), value: 'radius-md' },
        { label: __("Medium", "phenix"), value: 'radius-lg' },
        { label: __("Large", "phenix"), value: 'radius-xl' },
        { label: __("xLarge", "phenix"), value: 'radius-xxl' },
        { label: __("Circle", "phenix"), value: 'radius-circle' },
        { label: __("Rounded", "phenix"), value: 'radius-height' },
    ];

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
    if (attributes.isLink) blockProps['href'] = "#none";
    if (attributes.outline) blockProps.className += ` outline`;
    if (attributes.size) blockProps.className += ` ${attributes.size}`;
    if (attributes.radius) blockProps.className += ` ${attributes.radius}`;
    if (attributes.type) {
        blockProps.className += ` ${attributes.type.replace('normal', 'btn')}`;
        if (attributes.type !== "btn" && attributes.icon) blockProps.className+= ` ${attributes.icon}`;
    }

    //===> Typography Properties <===//
    if (attributes.typography) {
        if(attributes.typography.size) blockProps.className += ` ${attributes.typography.size}`;
        if(attributes.typography.color) blockProps.className += ` ${attributes.typography.color}`;
        if(attributes.typography.weight) blockProps.className += ` ${attributes.typography.weight}`;
        if(attributes.typography.align) blockProps.className += ` ${attributes.typography.align}`;
    }

    //===> Render Background <===//
    if (attributes.style.background?.value) {
        //===> Image Background <===//
        if (attributes.style.background.type === 'image') {
            blockProps.className += ` px-media`;
            blockProps["data-src"] = attributes.style.background.value;
        }

        //===> Name Background <===//
        else {
            //===> Adjust Primary Colors <===//
            let isPrimary = false,
                primaryColors = ["bg-primary", "bg-secondary", "bg-gray", "bg-dark", "bg-white", "bg-success", "bg-danger", "bg-warning", "bg-info"];
            
            //===> Correct Colors <===//
            primaryColors.forEach(color => attributes.style.background.value === color ? isPrimary = true : null);

            //===> Set the Background <===//
            if (isPrimary) { blockProps.className += ` ${attributes.style.background.value.replace('bg-', '')}`; }
            else { blockProps.className += ` ${attributes.style.background.value}`; }
        }

        //===> Background Rotation <===//
        if (attributes.style.background.rotate) blockProps.className += ` ${attributes.style.background.rotate}`;
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
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("General Settings", "phenix")}>
                {/*===> Elements Group <===*/}
                <div className='row gpx-20'>
                    {/*===> Column <===*/}
                    <div className='col-6 mb-10'>
                        <PhenixSelect name="type" placeholder={__("Default", "phenix")} label={__("Type", "phenix")} value={attributes.type} onChange={set_value} options={btn_types} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6 mb-10'>
                        <PhenixSelect name="size" placeholder={__("Default", "phenix")} label={__("Size", "phenix")} value={attributes.size} onChange={set_value} options={btn_sizes} />
                    </div>
                    {/*===> Column <===*/}
                    {attributes.isLink ? <div className='col col-6 mb-10'>
                        <label className='mb-5'>{__("URL/Page")}</label>
                        <LinkControlSearchInput placeholder={__("URL or Page Name", "phenix")} onChange={set_url} value={ attributes.url } allowDirectEntry={false} withURLSuggestion={false} withCreateSuggestion={false} renderSuggestions={(props) => suggestionsRender(props)} />
                    </div> : null}
                    {/*===> Column <===*/}
                    <div className='col col-6 mb-10'>
                        <PhenixSelect name="radius" placeholder={__("None", "phenix")} label={__("Radius Size", "phenix")} value={attributes.radius} onChange={set_value} options={btn_sizes} />
                    </div>
                    {/*===> Column <===*/}
                    {attributes.isLink ? <span style={{marginTop: "-10px"}} className='col-12 color-primary tx-icon far fa-link display-block mb-10'>{attributes.url}</span>: null}
                    {/*===> Column <===*/}
                    <div className='col-12 row gpx-10'>
                        {/*===> Current Link <===*/}
                        <div className='col-6'><ToggleControl label="is Link" checked={attributes.isLink} onChange={set_isLink}/></div>
                        {attributes.isLink ? <div className='col-6'> <ToggleControl label={__("New Tab", "phenix")} checked={attributes.inNewTab} onChange={set_inNewTab}/> </div>: null}
                        <div className='col-6'><ToggleControl label="Outline" checked={attributes.outline} onChange={set_outline}/></div>
                        <div className='col-6'><ToggleControl label="Lightbox" checked={attributes.isLightBox} onChange={set_isLightBox}/></div>
                        {attributes.type === 'btn-icon' ? <div className='col-6'><ToggleControl label="Labeled" checked={attributes.iconLabel} onChange={set_iconLabel}/></div> : null}
                        {attributes.type === 'btn-icon' ? <div className='col-6'><ToggleControl label="icon End" checked={attributes.iconEnd} onChange={set_iconEnd}/></div> : null}
                    </div>
                    {/*===> // Column <===*/}
                </div>
            </PanelBody>
            {/*===> Style Options <===*/}
            <PanelBody title={__("Style Options", "phenix")} initialOpen={false}>
                {/*===> Background <===*/}
                <PhenixBackground key="px-bg" label={__("Background", "phenix")}  onChange={set_background} type={attributes.style.background?.type || "color"} value={attributes.style.background?.value || ""} rotate={attributes.style.background?.rotate || null} />
                {/*=== Icon ===*/}
                <PhenixIcons key="icon" label="Button Icon" version={state.icons_version} value={ attributes.icon } onChange={set_icon} />
            </PanelBody>
            {/*===> Typography <===*/}
            <PanelBody title={__("Typography", "phenix")} initialOpen={false}>
                {/*===> Elements Group <===*/}
                <div className='row gpx-20'>
                    {/*===> Column <===*/}
                    <div className='col-6 mb-10'>
                        <SelectControl key="typography-size" label={__("Font Size", "phenix")} value={attributes.typography.size || ""} onChange={set_typography_size} options={[
                            { label: 'Default',   value: '' },
                            { label: '12px',   value: 'fs-12' },
                            { label: '13px',   value: 'fs-13' },
                            { label: '14px',   value: 'fs-14' },
                            { label: '15px',   value: 'fs-15' },
                            { label: '16px',   value: 'fs-16' },
                            { label: '17px',   value: 'fs-17' },
                            { label: '18px',   value: 'fs-18' },
                            { label: '19px',   value: 'fs-19' },
                            { label: '20px',   value: 'fs-20' },
                            { label: '22px',   value: 'fs-22' },
                            { label: '24px',   value: 'fs-24' },
                            { label: '25px',   value: 'fs-25' },
                            { label: '26px',   value: 'fs-26' },
                            { label: '28px',   value: 'fs-28' },
                            { label: '30px',   value: 'fs-30' },
                        ]}/>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6 mb-10'>
                        <SelectControl key="typography-weight" label={__("Font Weight", "phenix")} value={attributes.typography.weight || ""} onChange={set_typography_weight} options={[
                            { label: 'Default',  value: '' },
                            { label: 'Thin',  value: 'weight-thin'},
                            { label: 'Light',  value: 'weight-light'},
                            { label: 'Extra Light',  value: 'weight-xlight'},
                            { label: 'Normal',  value: 'weight-normal'},
                            { label: 'Medium',  value: 'weight-medium'},
                            { label: 'Semi-Bold',  value: 'weight-bold'},
                            { label: 'Bold',  value: 'weight-strong'},
                            { label: 'Heavy',  value: 'weight-xbold'},
                            { label: 'Black',  value: 'weight-black'},
                        ]}/>
                    </div>
                    {/*===> // Column <===*/}
                </div>
                {/*===> Text Color <===*/}
                <PhenixColor key="px-color" label={__("Text Color", "phenix")} onChange={set_color} value={attributes.typography.color || ""} />
                {/*===> Label <===*/}
                <label className='col-12 mb-5 tx-UpperCase'>{__("Text Alignment", "phenix")}</label>
                {/*===> Elements Group <===*/}
                <div className='flexbox'>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={!attributes.typography.align || attributes.typography.align === ""} value={""} onChange={set_typography_align} type='button-radio' className='small me-5'>
                        <span className='btn small square outline gray far fa-align-slash radius-sm'></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={attributes.typography.align === "tx-align-start" ? true : false} value={"tx-align-start"} onChange={set_typography_align} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-${Phenix(document).direction() === "ltr" ? 'left' : "right"} radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={attributes.typography.align === "tx-align-justify" ? true : false} value={"tx-align-justify"} onChange={set_typography_align} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-justify radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={attributes.typography.align === "tx-align-center" ? true : false} value={"tx-align-center"} onChange={set_typography_align} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-center radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={attributes.typography.align === "tx-align-end" ? true : false} value={"tx-align-end"} onChange={set_typography_align} type='button-radio' className='small'>
                        <span className={`btn small square outline gray fs-17 far fa-align-${Phenix(document).direction() === "rtl" ? 'left' : "right"} radius-sm`}></span>
                    </OptionControl>
                </div>
            </PanelBody>
            {/*===> Widget Panel <===*/}
            {attributes.isLightBox ?<PanelBody title={__("Lightbox Settings","phenix")}>
                {/*===> Elements Group <===*/}
                <div className='row gpx-20'>
                    {/*===> Column <===*/}
                    <div className='col-12 mb-10'>
                        <SelectControl key="lightbox-type" label={__("Type","phenix")} value={attributes.lightbox_type} onChange={set_lightbox_type} options={[
                            { label: __("Image", "phenix"),  value: 'image' },
                            { label: __("Video", "phenix"),  value: 'video' },
                            { label: __("Embed", "phenix"),  value: 'embed' },
                        ]}/>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-12'>
                        {attributes.lightbox_src ? <MediaUploader label={__("Upload Source", "phenix")} type={attributes.lightbox_type} value={attributes.url} setValue={(file => {setAttributes({url: file.url})})}></MediaUploader>
                        : <TextControl key="container_id" label={__("Source URL", "phenix")} value={ attributes.url } onChange={set_url}/> }
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-12'>
                        <ToggleControl label={__("Upload Source","phenix")} checked={attributes.lightbox_src} onChange={set_lightbox_src}/>
                    </div>
                    {/*===> // Column <===*/}
                </div>
            </PanelBody> : null}
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("Trigger Data", "phenix")} initialOpen={false}>
                {/*===> Elements Group <===*/}
                <div className='row gpx-20'>
                    {/*===> Column <===*/}
                    <div className='col-6 mb-10'>
                        <SelectControl label={__("Menu (ID)", "phenix")} value={ attributes.data_id } onChange={set_data_id} options={state.menus_list} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6 mb-10'>
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