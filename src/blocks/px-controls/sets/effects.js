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
            "Default": [{ "label": "None", "value": ""}],

            "Background" : [
                { "label": "Gradient-L", "value": "pds-hvr-gradient-move"},
                { "label": "Gradient-R", "value": "pds-hvr-gradient-move-revert"},
            ],

            "Scaling" : [
                { "label": "ScaleBy 10%", "value": "pds-hvr-scale-10"},
                { "label": "ScaleBy 15%", "value": "pds-hvr-scale-15"},
                { "label": "ScaleBy 25%", "value": "pds-hvr-scale-25"},
            ],
            
            "Animate CSS" : [
                { "label": "Floating", "value": "pds-hvr-floating"},
                { "label": "Highlight", "value": "pds-hvr-highlight"},
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
            "Default": [{ "label": "None", "value": ""}],

            "Moving" : [
                { "label": "Floating", "value": "pds-animate-floating"},
                { "label": "Ringing", "value": "pds-animate-ringing"},
            ],

            "Background" : [
                { "label": "Zooming", "value": "bg-animated-zoom"},
                { "label": "Animate-X", "value": "bg-animated-x"},
                { "label": "Animate-Y", "value": "bg-animated-y"},
            ],
        };

        const box_shadows = {
            "Default": [{ "label": "None", "value": ""}],
            
            "Standard" : [
                { "label": "DP-1", "value": "bx-shadow-dp-1"},
                { "label": "DP-2", "value": "bx-shadow-dp-2"},
                { "label": "DP-3", "value": "bx-shadow-dp-3"},
                { "label": "DP-4", "value": "bx-shadow-dp-4"},
                { "label": "DP-5", "value": "bx-shadow-dp-5"},
                { "label": "DP-1Y", "value": "bx-shadow-dp-1y"},
            ],

            "Glass Effects" : [
                { "label": "Tiny", "value": "bx-shadow-gls-dp-1"},
                { "label": "Small", "value": "bx-shadow-gls-dp-2"},
                { "label": "Medium", "value": "bx-shadow-gls-dp-3"},
            ],

            "TailWind" : [
                { "label": "Standard", "value": "bx-shadow-tw"},
                { "label": "Small", "value": "bx-shadow-tw-sm"},
                { "label": "Medium", "value": "bx-shadow-tw-md"},
                { "label": "Large", "value": "bx-shadow-tw-lg"},
                { "label": "xLarge", "value": "bx-shadow-tw-xl"},
                { "label": "Huge", "value": "bx-shadow-tw-xxl"},
            ],
        };

        //===> Output <===//
        return <>
            {/*===> Other Options <===*/}
            {this.props.children ? this.props.children : null}

            {/*===> Layout Group <===*/}
            <div className={`row gpx-10 gpy-15`}>
                {/*===> Hover Effects <===*/}
                <div className='col col-12'>
                    <PhenixSelect name="hover-effect" size="normal" placeholder={__("None", "pds-blocks")} search={true} multiple={true} label={__("Hover Effects", "pds-blocks")} value={typeof(attributes.style['hover-effect']) === 'string' ? [attributes.style['hover-effect']] : attributes.style['hover-effect']} onChange={mainSetter} options={hover_effect} />
                </div>
                {/*===> Animation Effects <===*/}
                <div className='col col-12'>
                    <PhenixSelect name="animated-effect" size="normal" placeholder={__("None", "pds-blocks")} search={true} multiple={true} label={__("Always Animated", "pds-blocks")} value={typeof(attributes.style['animated-effect']) === 'string' ? [attributes.style['animated-effect']] : attributes.style['animated-effect']} onChange={mainSetter} options={animations_effect} />
                </div>
                {/*===> Box Shadow <===*/}
                <div className='col col-12'>
                    <PhenixSelect name="box-shadow" size="normal" placeholder={__("None", "pds-blocks")} label={__("Box Shadow", "pds-blocks")} value={attributes.style['box-shadow']} onChange={mainSetter} options={box_shadows} />
                </div>
            </div>
            {/*===> // Layout Group <===*/}
        </>
    }
}