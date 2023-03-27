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
//=> text-colors, background, overlapped, position

//===> Component <===//
export default class StylesSet extends Component {
    render () {
        //===> Properties <===//
        const {attributes, options, mainSetter, colorSetter, bgOnly} = this.props;

        //===> Define Controls Options <===//
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
            { label: __("None", "phenix"), value: '' },
            { label: __("Tiny", "phenix"), value: 'radius-sm' },
            { label: __("Small", "phenix"), value: 'radius-md' },
            { label: __("Medium", "phenix"), value: 'radius-lg' },
            { label: __("Large", "phenix"), value: 'radius-xl' },
            { label: __("xLarge", "phenix"), value: 'radius-xxl' },
            { label: __("Circle", "phenix"), value: 'radius-circle' },
            { label: __("Rounded", "phenix"), value: 'radius-height' },
        ];

        //===> Output <===//
        return <>
            {/*===> Other Options <===*/}
            {this.props.children ? this.props.children : null}

            {/*===> Text Color <===*/}
            {!options || options.includes("text-colors") ?
                <PhenixColor key="px-color" label={__("Text Color", "phenix")} onChange={colorSetter} value={attributes.typography.color} />
            : null}

            {/*===> Background <===*/}
            {!options || options.includes("background") ? <>
                <PhenixBackground colorsOnly={bgOnly.includes('colorsOnly') ? true : false} onlyCG={bgOnly.includes('onlyCG') ? true : false} key="px-bg" label={__("Background", "phenix")}  onChange={mainSetter} type={attributes.style.background?.type || "color"} value={attributes.style.background?.value || ""} rotate={attributes.style.background?.rotate || null} />
                {attributes.style.background?.type === "image" ? 
                    <div className='row gpx-15 mb-5' style={{marginTop: -10}}>
                        {/*===> Column <===*/}
                        <div className='col-6'>
                            <OptionControl name={`overlay`} value="overlay-dark" checked={attributes.style.overly || false} onChange={mainSetter} type='switch-checkbox' className='small'>{__("Overlays", "phenix")}</OptionControl>
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-6'>
                            <OptionControl name={`parallax`} value="bg-parallax" checked={attributes.style.parallax || false} onChange={mainSetter} type='switch-checkbox' className='small'>{__("Parallax BG", "phenix")}</OptionControl>
                        </div>
                    </div>
                : null }
            </>: null}

            {/*===> Additional Styles <===*/}
            <div className={`row gpx-15 ${attributes.style.background?.type === "image" ? "divider-t pdt-15" : null}`}>
                {/*===> Border Radius <===*/}
                {!options || options.includes("radius") ?<div className='col col-6'>
                    <PhenixSelect name="radius" placeholder={__("None", "phenix")} label={__("Radius Size", "phenix")} value={attributes.style.radius} onChange={mainSetter} options={radius_sizes} />
                </div>: null}

                {/*===> Sticky Element <===*/}
                {!options || options.includes("position") ? <>
                    <div className='col col-6'>
                        <PhenixSelect name="position" placeholder={__("Default", "phenix")} label={__("Position Type", "phenix")} value={attributes.style.position} onChange={mainSetter} options={position_options} />
                        {/*===> Overlapped <===*/}
                        {!options || options.includes("overlapped") ? <OptionControl name={`overlapped`} value="pos-overlap" checked={attributes.style.overlapped || false} onChange={mainSetter} type='switch-checkbox' className='small mt-5'>{__("Overlapped", "phenix")}</OptionControl> : null}
                    </div>
                </>: null}
            </div>
        </>
    }
}