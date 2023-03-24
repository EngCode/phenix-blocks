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

//===> Media Uploader <===//
export default class StylesSet extends Component {
    render () {
        //===> Properties <===//
        const {attributes, options, mainSetter, colorSetter, backgroundSetter} = this.props;

        //===> Define Controls Options <===//
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

        //===> Output <===//
        return <>
            {/*===> Text Color <===*/}
            {!options || options.contains("text-colors") ?
                <PhenixColor key="px-color" label={__("Text Color", "phenix")} onChange={colorSetter} value={attributes.typography.color} />
            : null}

            {/*===> Background <===*/}
            {!options || options.contains("background") ? <>
                <PhenixBackground key="px-bg" label={__("Background", "phenix")}  onChange={backgroundSetter} type={attributes.style.background?.type || "color"} value={attributes.style.background?.value || ""} rotate={attributes.style.background?.rotate || null} />
                {attributes.style.background?.type === "image" ? 
                    <div className='mb-15 row gpx-15' style={{marginTop: -10}}>
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
            <div className='row gpx-15 divider-t pdt-15'>
                {/*===> Display <===*/}
                {!options || options.contains("display") ? <>
                    <div className='col-12 mb-5'>
                        <PhenixSelect name="display" placeholder={__("Default", "phenix")} label={__("Responsive Display", "phenix")} value={attributes.style.display} onChange={mainSetter} options={display_options} multiple={true} className="stacked-options" />
                    </div>
                </>: null}

                {/*===> Overlapped <===*/}
                {!options || options.contains("overlapped") ? <>
                <div className='col-6'>
                    <OptionControl name={`overlapped`} value="pos-overlap" checked={attributes.style.overlapped || false} onChange={mainSetter} type='switch-checkbox' className='small'>{__("Overlapped", "phenix")}</OptionControl>
                </div>
                </>: null}
            </div>
        </>
    }
}