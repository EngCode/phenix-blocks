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
import PhenixNumber from "../number";
import OptionControl from '../switch';

//===> Options List
//=> entrance-animation, exit-animation, duration, delay
//=> lazyloading, flow/into, offset, lazygroup, effect-animations

//===> Component <===//
export default class EffectsSet extends Component {
    render () {
        //===> Properties <===//
        const {attributes, options, mainSetter} = this.props;

        //===> Define Controls Options <===//
        const hover_effect = {
            "Cool & Slow" : [
                { "label": "ScaleBy 10%", "value": "pds-hvr-scale-10"},
                { "label": "ScaleBy 15%", "value": "pds-hvr-scale-15"},
                { "label": "ScaleBy 25%", "value": "pds-hvr-scale-25"},
                { "label": "Highlight", "value": "pds-hvr-highlight"},
                { "label": "Floating", "value": "pds-hvr-floating"},
            ],

            "Attention Seekers" : [
                { "label": "Shaking", "value": "pds-hvr-ringing"},
                { "label": "Bounce", "value": "pds-hvr-bounce"},
                { "label": "Flash", "value": "pds-hvr-flash"},
                { "label": "Pulse", "value": "pds-hvr-pulse"},
                { "label": "RubberBand", "value": "pds-hvr-rubberBand"},
                { "label": "ShakeX", "value": "pds-hvr-shakeX"},
                { "label": "ShakeY", "value": "pds-hvr-shakeY"},
                { "label": "Tada", "value": "pds-hvr-tada"},
                { "label": "Jello", "value": "pds-hvr-jello"},
            ],
        };

        const animations_effect = {
            "Moving Effects" : [
                { "label": "Floating", "value": "pds-animate-floating"},
                { "label": "Ringing", "value": "pds-animate-ringing"},
            ],

            "Background Effects" : [
                { "label": "BG-X", "value": "bg-animated-x"},
                { "label": "BG-Y", "value": "bg-animated-y"},
                { "label": "BG-Zoom", "value": "bg-animated-zoom"},
            ],
        };

        const box_shadows = {
            "Standard" : [
                { "label": "Standard", "value": "bx-shadow-dp-1"},
                { "label": "Small", "value": "bx-shadow-dp-2"},
                { "label": "Medium", "value": "bx-shadow-dp-3"},
                { "label": "Large", "value": "bx-shadow-dp-4"},
                { "label": "xLarge", "value": "bx-shadow-dp-5"},
                { "label": "Huge", "value": "bx-shadow-dp-x"},
            ],
            "TailWind" : [
                { "label": "Standard", "value": "bx-shadow"},
                { "label": "Small", "value": "bx-shadow-sm"},
                { "label": "Medium", "value": "bx-shadow-md"},
                { "label": "Large", "value": "bx-shadow-lg"},
                { "label": "xLarge", "value": "bx-shadow-xl"},
                { "label": "Huge", "value": "bx-shadow-xxl"},
            ],
        };

        //===> Output <===//
        return <>
            {/*===> Other Options <===*/}
            {this.props.children ? this.props.children : null}

            {/*===> Layout Group <===*/}
            <div className={`row gpx-10 gpy-15`}>
                {/*===> Hover Effects <===*/}
                <div className='col col-6'>
                    <PhenixSelect name="hover-effect" placeholder={__("None", "pds-blocks")} search={true} label={__("Hover", "pds-blocks")} value={attributes.style['hover-effect']} onChange={mainSetter} options={hover_effect} />
                </div>
                {/*===> Animation Effects <===*/}
                <div className='col col-6'>
                    <PhenixSelect name="animated-effect" placeholder={__("None", "pds-blocks")} search={true} label={__("Animated", "pds-blocks")} value={attributes.style['animated-effect']} onChange={mainSetter} options={animations_effect} />
                </div>
                {/*===> Box Shadow <===*/}
                <div className='col col-6'>
                    <PhenixSelect name="box-shadow" placeholder={__("None", "pds-blocks")} label={__("Box Shadow", "pds-blocks")} value={attributes.style['box-shadow']} onChange={mainSetter} options={box_shadows} />
                </div>
            </div>
            {/*===> // Layout Group <===*/}
        </>
    }
}