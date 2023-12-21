/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import {Component} from '@wordpress/element';

//====> Phenix Modules <====//
import PhenixSelect from '../select';
import OptionControl from '../switch';
import PhenixColor from '../colors/text';
import PhenixBackground from '../colors/background';

//===> Options List
//=> text-colors, background, support

//===> Component <===//
export default class StylesSet extends Component {
    render () {
        //===> Properties <===//
        const {attributes, options, mainSetter, colorSetter, bgOnly} = this.props;
        const uniqueKey = Date.now().toString(36) + Math.random().toString(36).substr(2, 5)+`-styles-option`;

        //===> Define Controls Options <===//
        const zindex_options = [
            { "label": "Default", "value": ""},
            { "label": "Level.1", "value": "z-index-1"},
            { "label": "Level.2", "value": "z-index-2"},
            { "label": "Level.3", "value": "z-index-3"},
            { "label": "Level.4", "value": "z-index-4"},
            { "label": "Level.5", "value": "z-index-5"},
            { "label": "Level.6", "value": "z-index-6"},
            { "label": "Level.7", "value": "z-index-7"},
            { "label": "Level.8", "value": "z-index-8"},
            { "label": "Level.9", "value": "z-index-9"},
            { "label": "Level.10", "value": "z-index-10"},
            { "label": "Lvl.Header", "value": "z-index-header"},
            { "label": "Lvl.Popups", "value": "z-index-modal"},
            { "label": "Lvl.Dropdowns", "value": "z-index-dropdown"},
        ];

        const position_options = [
            { "label": "Default", "value": ""},
            { "label": "Fixed", "value": "position-fx"},
            { "label": "Static", "value": "position-none"},
            { "label": "Sticky", "value": "position-st"},
            { "label": "Absolute", "value": "position-ab"},
            { "label": "Relative", "value": "position-rv"},
            { "label": "Sticky(S)", "value": "sticky-absolute"},
        ];

        const radius_sizes = [
            { label: __("None", "pds-blocks"), value: '' },
            { label: __("Tiny", "pds-blocks"), value: 'radius-sm' },
            { label: __("Small", "pds-blocks"), value: 'radius-md' },
            { label: __("Medium", "pds-blocks"), value: 'radius-lg' },
            { label: __("Large", "pds-blocks"), value: 'radius-xl' },
            { label: __("xLarge", "pds-blocks"), value: 'radius-xxl' },
            { label: __("Circle", "pds-blocks"), value: 'radius-circle' },
            { label: __("Rounded", "pds-blocks"), value: 'radius-height' },
        ];

        const display_options = {
            "Mobile Screens" : [
                { "label": "Flex", "value": "display-flex"},
                { "label": "Grid", "value": "display-grid"},
                { "label": "Block", "value": "display-block"},
                { "label": "Flexbox", "value": "flexbox"},
                { "label": "Inline-Block", "value": "inline-block"},
                { "label": "Hidden SM <i class='fas fa-arrow-up'><i>", "value": "hidden"},
                { "label": "Hidden SM <i class='fas fa-arrow-down'><i>", "value": "hidden-sm-down"},
            ],
            "Tablet Screens" : [
                { "label": "Flex MD", "value": "display-md-flex"},
                { "label": "Grid MD", "value": "display-md-grid"},
                { "label": "Block MD", "value": "display-md-block"},
                { "label": "Hidden MD <i class='fas fa-arrow-up'><i>", "value": "hidden-md-up"},
                { "label": "Hidden MD <i class='fas fa-arrow-down'><i>", "value": "hidden-md-down"},
                { "label": "Inline-Block MD", "value": "inline-block-md"},
            ],
            "Laptop Screens" : [
                { "label": "Flex LG", "value": "display-lg-flex"},
                { "label": "Grid LG", "value": "display-lg-grid"},
                { "label": "Block LG", "value": "display-lg-block"},
                { "label": "Hidden LG <i class='fas fa-arrow-up'><i>", "value": "hidden-lg-up"},
                { "label": "Hidden LG <i class='fas fa-arrow-down'><i>", "value": "hidden-lg-down"},
                { "label": "Inline-Block LG", "value": "inline-block-lg"},
            ],
            "Desktop Screens" : [
                { "label": "Flex XL", "value": "display-xl-flex"},
                { "label": "Grid XL", "value": "display-xl-grid"},
                { "label": "Block XL", "value": "display-xl-block"},
                { "label": "Hidden XL <i class='fas fa-arrow-up'><i>", "value": "hidden-xl-up"},
                { "label": "Hidden XL <i class='fas fa-arrow-down'><i>", "value": "hidden-xl-down"},
                { "label": "Inline-Block XG", "value": "inline-block-xl"},
            ],
        };

        const support_options = [
            { label: __("Margin", "pds-blocks"), value: 'enable-margin' },
            { label: __("Padding", "pds-blocks"), value: 'enable-padding' },
            { label: __("Radius", "pds-blocks"), value: 'enable-radius' },
            { label: __("Display", "pds-blocks"), value: 'enable-display' },
            { label: __("Position", "pds-blocks"), value: 'enable-position' },
            { label: __("Animations", "pds-blocks"), value: 'enable-animations' },
            { label: __("Effects", "pds-blocks"), value: 'enable-effects' },
            // { label: __("Animated Childs", "pds-blocks"), value: 'px-animate' },
            // { label: __("Overlapped", "pds-blocks"), value: 'pos-overlap' },
        ];

        const background_options = {
            sizes : [
                { label:"all-100", value:"bgs-100" },
                { label:"all-auto", value:"bgs-auto"},
                { label:"width-25", value:"bgw-25"},
                { label:"width-50", value:"bgw-50"},
                { label:"width-75", value:"bgw-75"},
                { label:"width-90", value:"bgw-90"},
                { label:"width-100", value:"bgw-100"},
                { label:"height-25", value:"bgh-25"},
                { label:"height-50", value:"bgh-50"},
                { label:"height-75", value:"bgh-75"},
                { label:"height-90", value:"bgh-90"},
                { label:"height-100", value:"bgh-100"},
            ],
        
            repeat : [
                { label:"repeat", value: "bgr"},
                { label:"repeat-x", value: "bgr-x"},
                { label:"repeat-y", value: "bgr-y"},
                { label:"repeat-none", value: "bgr-n"},
            ],
        
            positions : [
                { label:"top-start", value: "bgp-ts"},
                { label:"top-center", value: "bgp-tc"},
                { label:"top-end", value: "bgp-te"},
                { label:"center-start", value: "bgp-cs"},
                { label:"center-center", value: "bgp-cc"},
                { label:"center-end", value: "bgp-ce"},
                { label:"bottom-start", value: "bgp-bs"},
                { label:"bottom-center", value: "bgp-bc"},
                { label:"bottom-end", value: "bgp-be"},
            ],
    
            animations : [
                { label:"Animated X", value: "bg-animated-x"},
                { label:"Animated Y", value: "bg-animated-y"},
                { label:"Zooming BG", value: "bg-animated-zoom"},
            ],

            overlay : [
                { label:"None", value: ""},
                { label:"Dark", value: "overlay-dark"},
                { label:"Light", value: "overlay-light"},
                { label:"Custom", value: "overlay-custom"},
            ],
        }

        //====> Support Options Checker <====//
        let showSupportOpts = false;
        const supportedOpts = ["enable-radius","enable-position","enable-display"];
        const SupportOpts = attributes.style?.support || [];
        SupportOpts.forEach(opt => supportedOpts.includes(opt) ? showSupportOpts = true : showSupportOpts = showSupportOpts);

        //===> Output <===//
        return <>
            {/*===> Other Options <===*/}
            {this.props.children ? this.props.children : null}

            {/*===> Text Color <===*/}
            {!options || options.includes("text-colors") ?
                <PhenixColor key={`px-color-${uniqueKey}`} label={__("Text Color", "pds-blocks")} onChange={colorSetter} value={attributes.typography.color} />
            : null}

            {/*===> Background <===*/}
            {!options || options.includes("background")?<>
                <PhenixBackground key={`background-${uniqueKey}`} colorsOnly={bgOnly && bgOnly.includes('colorsOnly') ? true : false} onlyCG={bgOnly && bgOnly.includes('onlyCG') ? true : false} label={__("Background", "pds-blocks")}  onChange={mainSetter} type={attributes.style.background?.type || "color"} value={attributes.style.background?.value || ""} rotate={attributes.style.background?.rotate || null} />
                {attributes.style.background?.type === "image" ? 
                    <div className='row gpx-15 pdt-10' style={{marginTop: -10}}>
                        {/*===> Column <===*/}
                        <div className='col col-6 mb-10'>
                            <PhenixSelect className="border-alpha-25" key={`overly-${uniqueKey}`} name="overly" placeholder={__("Overlay", "pds-blocks")} value={attributes.style.overly} onChange={mainSetter} options={background_options.overlay} />
                        </div>
                        {/*===> Column <===*/}
                        <div className='col col-6 mb-10'>
                            <PhenixSelect className="border-alpha-25" key={`bg-size-${uniqueKey}`} name="bg-size" placeholder={__("Size", "pds-blocks")} value={attributes.style['bg-size']} onChange={mainSetter} options={background_options.sizes} />
                        </div>
                        {/*===> Column <===*/}
                        <div className='col col-6 mb-10'>
                            <PhenixSelect className="border-alpha-25" key={`bg-position-${uniqueKey}`} name="bg-position" placeholder={__("Position", "pds-blocks")} value={attributes.style['bg-position']} onChange={mainSetter} options={background_options.positions} />
                        </div>
                        {/*===> Column <===*/}
                        <div className='col col-6 mb-10'>
                            <PhenixSelect className="border-alpha-25" key={`bg-repeat-${uniqueKey}`} name="bg-repeat" placeholder={__("Repeat", "pds-blocks")} value={attributes.style['bg-repeat']} onChange={mainSetter} options={background_options.repeat} />
                        </div>
                        {/*===> Column <===*/}
                        <div className='col col-6'>
                            <PhenixSelect className="border-alpha-25" key={`bg-animation-${uniqueKey}`} name="bg-animation" placeholder={__("Animation", "pds-blocks")} value={attributes.style['bg-animation']} onChange={mainSetter} options={background_options.animations} />
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-12'>
                            <OptionControl key={`parallax-${uniqueKey}`} name={`parallax`} value="bg-parallax" checked={attributes.style.parallax || false} onChange={mainSetter} type='switch-checkbox' className='small'>{__("Parallax BG", "pds-blocks")}</OptionControl>
                        </div>
                    </div>
                : null }
            </>:null}

            {/*===> Support <===*/}
            {!options || options.includes("support") ? <>
                <div className={`col-12 ${showSupportOpts === true?"mb-20":"mb-10"}`}>
                    <PhenixSelect name="support" placeholder={__("add..", "pds-blocks")} search={true} label={__("Support", "pds-blocks")} value={attributes.style.support} onChange={mainSetter} options={support_options} multiple={true} className="stacked-options" />
                </div>
                {/*===> Additional Styles <===*/}
                {showSupportOpts === true ? <>
                    <div className={`row gpx-15 gpy-15`}>
                        {/*===> Border Radius <===*/}
                        {attributes.style.support?.includes('enable-radius') ? <div className='col col-6'>
                            <PhenixSelect key={`radius-${uniqueKey}`} name="radius" placeholder={__("None", "pds-blocks")} label={__("Radius Size", "pds-blocks")} value={attributes.style.radius} onChange={mainSetter} options={radius_sizes} />
                        </div> : null}

                        {/*===> Sticky Element <===*/}
                        {attributes.style.support?.includes('enable-position') ? <>
                            <div className='col col-6'>
                                <PhenixSelect key={`position-${uniqueKey}`} name="position" placeholder={__("Default", "pds-blocks")} label={__("Position Type", "pds-blocks")} value={attributes.style.position} onChange={mainSetter} options={position_options} />
                            </div>
                            <div className='col col-6'>
                                <PhenixSelect key={`position-index-${uniqueKey}`} name="z-index" placeholder={__("Default", "pds-blocks")} label={__("Index Order", "pds-blocks")} value={attributes.style['z-index']} onChange={mainSetter} options={zindex_options} />
                            </div>
                        </>: null}

                        {/*===> Display <===*/}
                        {attributes.style.support?.includes('enable-display') ? <>
                            <div className='col-12'>
                                <PhenixSelect name="display" placeholder={__("Default", "pds-blocks")} search={true} label={__("Responsive Display", "pds-blocks")} value={attributes.style.display} onChange={mainSetter} options={display_options} multiple={true} className="stacked-options" />
                            </div>
                        </>: null}
                    </div>
                </>:null}
            </>: null}
        </>
    }
}