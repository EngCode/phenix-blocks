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
export default class AnimationsSet extends Component {
    render () {
        //===> Properties <===//
        const {attributes, options, mainSetter} = this.props;

        //===> Define Controls Options <===//
        const entrance_animations = {
            "Fading Entrances" : [
                { "label": "None", "value": ""},
                { "label": "fadeIn", "value": "fadeIn"},
                { "label": "fadeInUp", "value": "fadeInUp"},
                { "label": "fadeInDown", "value": "fadeInDown"},
                { "label": "fadeInStart", "value": "fadeInStart"},
                { "label": "fadeInEnd", "value": "fadeInEnd"},
                { "label": "fadeInTopStart", "value": "fadeInTopStart"},
                { "label": "fadeInTopEnd", "value": "fadeInTopEnd"},
                { "label": "fadeInBottomStart", "value": "fadeInBottomStart"},
                { "label": "fadeInBottomEnd", "value": "fadeInBottomEnd"},
                { "label": "fadeInUpBig", "value": "fadeInUpBig"},
                { "label": "fadeInDownBig", "value": "fadeInDownBig"},
                { "label": "fadeInStartBig", "value": "fadeInStartBig"},
                { "label": "fadeInEndBig", "value": "fadeInEndBig"},
            ],

            "Back Entrances" : [
                { "label": "backInUp", "value": "backInUp"},
                { "label": "backInStart", "value": "backInStart"},
                { "label": "backInEnd", "value": "backInEnd"},
                { "label": "backInDown", "value": "backInDown"},
            ],
            
            "Bouncing Entrances" : [
                { "label": "bounceIn", "value": "bounceIn"},
                { "label": "bounceInUp", "value": "bounceInUp"},
                { "label": "bounceInStart", "value": "bounceInStart"},
                { "label": "bounceInEnd", "value": "bounceInEnd"},
                { "label": "bounceInDown", "value": "bounceInDown"},
            ],

            "Flippers Entrances" : [
                { "label": "flipInX", "value": "flipInX"},
                { "label": "flipInY", "value": "flipInY"},
            ],

            "Lightspeed Entrances" : [
                { "label": "lightSpeedInStart", "value": "lightSpeedInStart"},
                { "label": "lightSpeedInEnd", "value": "lightSpeedInEnd"},
            ],

            "Rotating Entrances" : [
                { "label": "rotateIn", "value": "rotateIn"},
                { "label": "rotateInDownStart", "value": "rotateInDownStart"},
                { "label": "rotateInDownEnd", "value": "rotateInDownEnd"},
                { "label": "rotateInUpStart", "value": "rotateInUpStart"},
                { "label": "rotateInUpEnd", "value": "rotateInUpEnd"},
            ],

            "Zooming Entrances" : [
                { "label": "zoomIn", "value": "zoomIn"},
                { "label": "zoomInDown", "value": "zoomInDown"},
                { "label": "zoomInStart", "value": "zoomInStart"},
                { "label": "zoomInEnd", "value": "zoomInEnd"},
                { "label": "zoomInUp", "value": "zoomInUp"},
            ],

            "Sliding Entrances" : [
                { "label": "slideInDown", "value": "slideInDown"},
                { "label": "slideInStart", "value": "slideInStart"},
                { "label": "slideInEnd", "value": "slideInEnd"},
                { "label": "slideInUp", "value": "slideInUp"},
            ],

            "Specials Entrances" : [
                { "label": "hinge", "value": "hinge"},
                { "label": "jackInTheBox", "value": "jackInTheBox"},
                { "label": "rollIn", "value": "rollIn"},
            ],

            "Attention seekers" : [
                { "label": "bounce", "value": "bounce"},
                { "label": "flash", "value": "flash"},
                { "label": "pulse", "value": "pulse"},
                { "label": "flip", "value": "flip"},
                { "label": "rubberBand", "value": "rubberBand"},
                { "label": "shakeX", "value": "shakeX"},
                { "label": "shakeY", "value": "shakeY"},
                { "label": "headShake", "value": "headShake"},
                { "label": "swing", "value": "swing"},
                { "label": "tada", "value": "tada"},
                { "label": "wobble", "value": "wobble"},
                { "label": "jello", "value": "jello"},
                { "label": "heartBeat", "value": "heartBeat"},
            ],
        };

        const exits_animations = {
            "Fading Exits" : [
                { "label": "fadeOut", "value": "fadeOut"},
                { "label": "fadeOutUp", "value": "fadeOutDown"},
                { "label": "fadeOutDown", "value": "fadeOutDown"},
                { "label": "fadeOutStart", "value": "fadeOutStart"},
                { "label": "fadeOutEnd", "value": "fadeOutEnd"},
                { "label": "fadeOutTopStart", "value": "fadeOutTopStart"},
                { "label": "fadeOutTopEnd", "value": "fadeOutTopEnd"},
                { "label": "fadeOutBottomStart", "value": "fadeOutBottomStart"},
                { "label": "fadeOutBottomEnd", "value": "fadeOutBottomEnd"},
                { "label": "fadeOutUpBig", "value": "fadeOutUpBig"},
                { "label": "fadeOutDownBig", "value": "fadeOutDownBig"},
                { "label": "fadeOutStartBig", "value": "fadeOutStartBig"},
                { "label": "fadeOutEndBig", "value": "fadeOutEndBig"},
            ],

            "Back Exits" : [
                { "label": "backOutUp", "value": "backOutUp"},
                { "label": "backOutStart", "value": "backOutStart"},
                { "label": "backOutEnd", "value": "backOutEnd"},
                { "label": "backOutDown", "value": "backOutDown"},
            ],

            "Bouncing Exits" : [
                { "label": "bounceOut", "value": "bounceOut"},
                { "label": "bounceOutUp", "value": "bounceOutUp"},
                { "label": "bounceOutStart", "value": "bounceOutStart"},
                { "label": "bounceOutEnd", "value": "bounceOutEnd"},
                { "label": "bounceOutDown", "value": "bounceOutDown"},
            ],

            "Flippers Exits" : [
                { "label": "flipOutX", "value": "flipOutX"},
                { "label": "flipOutY", "value": "flipOutY"},
            ],

            "Lightspeed Exits" : [
                { "label": "lightSpeedOutStart", "value": "lightSpeedOutStart"},
                { "label": "lightSpeedOutEnd", "value": "lightSpeedOutEnd"},
            ],

            "Rotating Exits" : [
                { "label": "rotateOut", "value": "rotateOut"},
                { "label": "rotateOutDownStart", "value": "rotateOutDownStart"},
                { "label": "rotateOutDownEnd", "value": "rotateOutDownEnd"},
                { "label": "rotateOutUpStart", "value": "rotateOutUpStart"},
                { "label": "rotateOutUpEnd", "value": "rotateOutUpEnd"},
            ],

            "Zooming Exits" : [
                { "label": "zoomOut", "value": "zoomOut"},
                { "label": "zoomOutDown", "value": "zoomOutDown"},
                { "label": "zoomOutStart", "value": "zoomOutStart"},
                { "label": "zoomOutEnd", "value": "zoomOutEnd"},
                { "label": "zoomOutUp", "value": "zoomOutUp"},
            ],

            "Sliding Exits" : [
                { "label": "slideOutDown", "value": "slideOutDown"},
                { "label": "slideOutStart", "value": "slideOutStart"},
                { "label": "slideOutEnd", "value": "slideOutEnd"},
                { "label": "slideOutUp", "value": "slideOutUp"},
            ],

            "Specials Exits" : [
                { "label": "rollOut", "value": "rollOut"},
            ],
        };

        //===> Output <===//
        return <>
            {/*===> Other Options <===*/}
            {this.props.children ? this.props.children : null}

            {/*===> Layout Group <===*/}
            <div className={`row gpx-10`}>
                {/*===> Animation Name <===*/}
                <div className='col-12 mb-5'>
                    <PhenixSelect name="animation-name" placeholder={__("None", "pds-blocks")} search={true} label={__("Entrances Animation", "pds-blocks")} value={attributes.style?.animation?.name} onChange={mainSetter} options={entrance_animations} />
                </div>
                <div className='col-7 col mb-10'>
                    <OptionControl name={`animation-group`} value="boolean" checked={attributes.style?.animation?.group} onChange={mainSetter} type='switch-checkbox' className='small'>{__("Use as Group", "pds-blocks")}</OptionControl>
                </div>
                <div className='col-5 col mb-10'>
                    <OptionControl name={`animation-exit`} value="boolean" checked={attributes.style?.animation?.hasExit} onChange={mainSetter} type='switch-checkbox' className='small'>{__("Has Exit", "pds-blocks")}</OptionControl>
                </div>
                {!attributes.style?.animation?.group ? <>
                    {/*===> Column <===*/}
                    <div className='col-6 col mb-10'>
                        <PhenixNumber name="animation-duration" label={__("Speed", "pds-blocks")} value={attributes.style?.animation?.duration || 1000} onChange={mainSetter} min={0} max={15000} steps={100}></PhenixNumber>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6 col mb-10'>
                        <PhenixNumber name="animation-delay" label={__("Delay", "pds-blocks")} value={attributes.style?.animation?.delay || 0} onChange={mainSetter} min={0} max={3000} steps={100}></PhenixNumber>
                    </div>
                    {/*===> Column <===*/}
                    {/* <div className='col-6 col mb-10'>
                        <PhenixNumber name="animation-offset" label={__("Offset", "pds-blocks")} value={attributes.style?.animation?.offset || 0} onChange={mainSetter} min={0} max={3000} steps={1}></PhenixNumber>
                    </div> */}
                    {/*===> Column <===*/}
                    {/* <div className='col-12'>
                        <OptionControl name={`animation-reverse`} value="end" checked={attributes.style?.animation?.reverse} onChange={mainSetter} type='switch-checkbox' className='small'>{__("Revers Flow", "pds-blocks")}</OptionControl>
                    </div> */}
                    {/*===> .End Columns. <===*/}
                </>: null}
            </div>
            {/*===> // Layout Group <===*/}
        </>
    }
}