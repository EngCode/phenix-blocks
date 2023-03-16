//====> WP Modules <====//
import { __ } from '@wordpress/i18n';

import {
    Panel,
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl
} from '@wordpress/components';

import {
    useBlockProps,
    InspectorControls
} from '@wordpress/block-editor';

import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import ServerSideRender from '@wordpress/server-side-render';

//====> Phenix Modules <====//
import PhenixIcons from '../px-controls/icons';
import PhenixColor from '../px-controls/colors/text';
import OptionControl from '../px-controls/switch';
import PhenixBackground from '../px-controls/colors/background';
import PhenixNumber from '../px-controls/number';

//====> Edit Mode <====//
export default function Edit(props) {
    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();
    const [menus_list, set_menu_list] = useState([]);
    const [icons_list, set_icons_list] = useState([]);
    const [icons_version, set_icons_version] = useState("5-free");

    //===> Set Attributes <===//
    const set_menu_id = menu_id => setAttributes({ menu_id });
    const set_tagName = tagName => setAttributes({ tagName });
    const set_hover  = hover => setAttributes({ hover });
    const set_effect = effect => setAttributes({ effect });
    const set_arrow_icon = icon => setAttributes({ arrow_icon: `${icon.type} ${icon.value}`});
    const set_direction = direction => setAttributes({ direction });
    const set_mobile_mode = mobile_mode => setAttributes({ mobile_mode });
    const set_responsive = responsive => setAttributes({ responsive });
    const set_trigger = trigger => setAttributes({ trigger });

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

    //===> Set Height <===//
    const set_typography_height = value => {
        //===> Define Data <===//
        let typography = attributes.typography;
        //===> Set Value <===//
        typography.height = value;
        setAttributes({ typography: {...typography} });
    }

    //===> Set Padding <===//
    const set_style_padding = value => {
        //===> Define Data <===//
        let style = attributes.style;
        //===> Set Value <===//
        style.padding = value;
        setAttributes({ style: {...style} });
    }

    //==> Color <==//
    const set_color = value => {
        //==> Get Current <==//
        let typography = attributes.typography;

        //==> Set Value <==//
        typography.color = value;
        setAttributes({ typography : {...typography} });
    };

    const set_color_hvr = value => {
        //==> Get Current <==//
        let typography = attributes.typography;

        //==> Set Value <==//
        typography.color_hvr = value;
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

    const set_background_hvr = background => {
        //==> Get Current <==//
        let styles = attributes.style;

        //==> Set Value <==//
        styles.background_hvr = background;
        setAttributes({ style : {...styles} });
    };

    //===> Sharp Icons Fallback <===//
    let arrow_ops = attributes.arrow_icon.split(" "),
        arrowIcon = arrow_ops[1],
        arrowType = arrow_ops[0];
    
    if (attributes.arrow_icon.includes('fa-sharp')) {
        arrowType = `${arrow_ops[0]} ${arrow_ops[1]}`,
        arrowIcon = arrow_ops[2];
    }

    //===> Fetching Data <===//
    useEffect(() => {
        apiFetch({path: 'pds-blocks/v2/options'}).then(options => {
            //===> Create New Array <===//
            let locations = options.menu_locations,
                menus_new_list = [{label: __("Default", 'phenix'), value: ""}];
            //===> Prepare Each Location for Select Array <===//
            for (const [key, value] of Object.entries(locations)) {
                menus_new_list.push({label: value, value: key});
            }
            //===> Set New Locations List <===//
            if (menus_list !== menus_new_list) set_menu_list([...menus_new_list]);

            //===> Fetch Icons List <===//
            let filename = `${options.pds_icon_font.replace("fontawesome-", "fa")}`;

            //===> Correct Icons <===//
            if (attributes.arrow_icon.split(" ")[0] === "fab") filename = filename.replace(filename.includes("free") ? "free" : "pro", "brands")
            if (filename.includes('pro')) icons_version = icons_version.replace("free", "pro");
            if (filename.includes('6')) icons_version = icons_version.replace("5", "6");
            set_icons_version(icons_version);

            //===> Start Fetching <===//
            fetch(`${PDS_WP_KEY.json}/${filename}.json`).then(res => res.json()).then(json => {
                let iconsList = json.icons;
                if (iconsList !== icons_list) set_icons_list([...iconsList]);
            });
        });
    }, []);

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            <Panel>
                {/*===> Widget Panel <===*/}
                <PanelBody title="Setting" initialOpen={true}>
                    {/*===> Elements Group <===*/}
                    <div className='row gpx-20'>
                        {/*===> Column <===*/}
                        <div className='col-12 mb-10'>
                            <SelectControl label={__("Location (ID)", "phenix")} value={ attributes.menu_id } onChange={set_menu_id} options={menus_list} />
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-6 mb-10'>
                            <SelectControl key="direction" label={__("Direction", "phenix")} value={attributes.direction} onChange={set_direction} options={[
                                { label: 'Vertical',  value: 'px-vertical' },
                                { label: 'Horizontal',  value: 'flexbox' },
                            ]}/>
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-6 mb-10'>
                            <SelectControl key="tagName" label={__("HTML Tag", "phenix")} value={attributes.tagName} onChange={set_tagName} options={[
                                { label: '<nav>', value: 'nav' },
                                { label: '<main>', value: 'main' },
                                { label: '<aside>', value: 'aside' },
                                { label: '<div>', value: 'div' },
                            ]}/>
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-6 mb-10'>
                            <ToggleControl label="Responsive" checked={attributes.responsive} onChange={set_responsive}/>
                        </div>
                        {/*===> // Column <===*/}
                    </div>
                </PanelBody>
                {/*===> Typography <===*/}
                <PanelBody title={__("Typography", "phenix")} initialOpen={false}>
                    {/*===> Elements Group <===*/}
                    <div className='row gpx-20'>
                        {/*===> Column <===*/}
                        <div className='col-6 mb-10'>
                            <SelectControl key="typography-size" label={__("Font Size", "phenix")} value={attributes.typography.size || ""} onChange={set_typography_size} options={[
                                { label: 'Default',   value: '' },
                                { label: '12px',   value: '12px' },
                                { label: '13px',   value: '13px' },
                                { label: '14px',   value: '14px' },
                                { label: '15px',   value: '15px' },
                                { label: '16px',   value: '16px' },
                                { label: '17px',   value: '17px' },
                                { label: '18px',   value: '18px' },
                                { label: '19px',   value: '19px' },
                                { label: '20px',   value: '20px' },
                                { label: '22px',   value: '22px' },
                                { label: '24px',   value: '24px' },
                                { label: '25px',   value: '25px' },
                                { label: '26px',   value: '26px' },
                                { label: '28px',   value: '28px' },
                                { label: '30px',   value: '30px' },
                            ]}/>
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-6 mb-10'>
                            <SelectControl key="typography-weight" label={__("Font Weight", "phenix")} value={attributes.typography.weight || ""} onChange={set_typography_weight} options={[
                                { label: 'Default',  value: '' },
                                { label: 'Thin',  value: '100'},
                                { label: 'Light',  value: '300'},
                                { label: 'Extra Light',  value: '200'},
                                { label: 'Normal',  value: '400'},
                                { label: 'Medium',  value: '500'},
                                { label: 'Semi-Bold',  value: '600'},
                                { label: 'Bold',  value: '700'},
                                { label: 'Heavy',  value: '800'},
                                { label: 'Black',  value: '900'},
                            ]}/>
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-6 mb-15'>
                            <PhenixNumber label={__("Line-Height (px)", "phenix")} value={attributes.typography[`height`] ? attributes.typography[`height`] : 34} onChange={set_typography_height} min={0}></PhenixNumber>
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-6 mb-15'>
                            <PhenixNumber label={__("Padding (px)", "phenix")} value={attributes.style[`padding`] ? attributes.style[`padding`] : 12} onChange={set_style_padding} min={0}></PhenixNumber>
                        </div>
                        {/*===> // Column <===*/}
                    </div>
                    {/*===> Text Alignment <===*/}
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
                <PanelBody title="Style Options" initialOpen={false}>
                    {/*===> Colors <===*/}
                    <label className='mb-5'>{__("Text Color", "phenix")}</label>
                    {/*===> Elements Group <===*/}
                    <div className='row gpx-10 position-rv'>
                        {/*===> Column <===*/}
                        <div className='col-6 mb-10'>
                            <PhenixColor key="px-color" placeholder={__("Normal","phenix")} isSmall={true} onChange={set_color} value={attributes.typography.color || ""} />
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-6 mb-10'>
                            <PhenixColor key="px-color-hvr" placeholder={__("Hover","phenix")} isSmall={true} onChange={set_color_hvr} value={attributes.typography.color_hvr || ""} />
                        </div>
                        {/*===> // Column <===*/}
                    </div>
                    {/*===> Background <===*/}
                    <label className='mb-5'>{__("Background Color", "phenix")}</label>
                    {/*===> Elements Group <===*/}
                    <div className='row gpx-10 position-rv'>
                        {/*===> Column <===*/}
                        <div className='col-6 mb-10'>
                            <PhenixBackground key="px-bg" placeholder={__("Normal","phenix")} isSmall={true} colorsOnly={true} onChange={set_background} type={attributes.style.background?.type || "color"} value={attributes.style.background?.value || ""} rotate={attributes.style.background?.rotate || null} />
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-6 mb-10'>
                            <PhenixBackground key="px-bg-hvr" placeholder={__("Hover","phenix")} isSmall={true} colorsOnly={true} onChange={set_background_hvr} type={attributes.style.background_hvr?.type || "color"} value={attributes.style.background_hvr?.value || ""} rotate={attributes.style.background_hvr?.rotate || null} />
                        </div>
                        {/*===> // Column <===*/}
                    </div>
                </PanelBody>
                {/*===> Widget Panel <===*/}
                <PanelBody title="Dropdown Options" initialOpen={false}>
                    {/*=== Arrow Icon ===*/}
                    <PhenixIcons key="arrow_icon" label="Dropdown Icon" icons={icons_list} version={icons_version} type={ arrowType } value={ arrowIcon } onChange={set_arrow_icon} />
                    
                    {/*===> Dropdown Hover <===*/}
                    <ToggleControl label="Support Hover" checked={attributes.hover} onChange={set_hover}/>
                </PanelBody>
                {/*===> Widget Panel <===*/}
                {attributes.responsive ? <>
                    <PanelBody title="Responsive Options" initialOpen={false}>
                        {/*===> Elements Group <===*/}
                        <div className='row gpx-20'>
                            {/*===> Column <===*/}
                            <div className='col-6 mb-5'>
                                <SelectControl key="mobile_mode" label={__("Mode", "phenix")} value={attributes.mobile_mode} onChange={set_mobile_mode} options={[
                                    { label: 'Default', value: '' },
                                    { label: 'Dropdown', value: 'dropdown' },
                                    { label: 'Offcanvas', value: 'custom' },
                                ]}/>
                            </div>
                            {/*===> Column <===*/}
                            <div className='col-6 mb-5'>
                                <SelectControl key="effect" label={__("Effect", "phenix")} value={attributes.effect} onChange={set_effect} options={[
                                    { label: 'Default', value: '' },
                                    { label: 'Sliding', value: 'slide' },
                                    { label: 'Fading', value: 'fade' },
                                    { label: 'Custom', value: 'custom' },
                                ]}/>
                            </div>
                            {/*===> Column <===*/}
                            <div className='col-12'>
                                <ToggleControl label={__("Attach Trigger Button", "phenix")} checked={attributes.trigger} onChange={set_trigger}/>
                            </div>
                            {/*===> // Column <===*/}
                        </div>
                    </PanelBody>
                </> : ""}
                {/*===> End Widgets Panels <===*/}
            </Panel>
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        <div {...blockProps}>
            {/* <div className='pdy-10 pdx-20 border-1 border-dashed border-alpha-25 fs-14'>Dynamic Menu Location {attributes.menu_id}</div> */}
            <ServerSideRender block="phenix/navigation" attributes={attributes} />
        </div>
    </>);
}