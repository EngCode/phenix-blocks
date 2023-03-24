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
import PhenixNumber from "../number";

//===> Options List
//=> 

//===> Component <===//
export default class SliderSet extends Component {
    render () {
        //===> Properties <===//
        const {className, attributes, options, mainSetter, flexSetter} = this.props;

        //===> Define Controls Options <===//
        const slider_types = [
            { label: __('Loop', "phenix"), value: 'loop' },
            { label: __('Fading', "phenix"),  value: 'fade' },
            { label: __('Sliding', "phenix"),  value: 'slide' },
        ];

        //===> Output <===//
        return <>
            <div className='row gpx-20 gpy-15 gpy-fix'>
                {/*===> Column <===*/}
                <div className='col-12'>
                    <PhenixSelect name="type" placeholder={__("Default", "phenix")} label={__("Effect Type", "phenix")} value={attributes.slider.type} onChange={mainSetter} options={slider_types} />
                </div>
                {/*===> Column <===*/}
                <div className='col-6'>
                    <PhenixNumber name="cols" label={__("Columns No.", "phenix")} value={attributes.flexbox.cols ? attributes.flexbox.cols : 1} onChange={flexSetter} min={1} max={12}></PhenixNumber>
                </div>
                {/*===> Column <===*/}
                <div className='col-6'>
                    <PhenixNumber name="steps" label={__("Steps", "phenix")} value={attributes.slider.steps || 1} onChange={mainSetter} min={1} max={12}></PhenixNumber>
                </div>
                {/*===> Column <===*/}
                <div className='col-6'>
                    <PhenixNumber name="duration" label={__("Duration", "phenix")} value={attributes.slider.duration || 6000} onChange={mainSetter} min={3000} max={20000} steps={100}></PhenixNumber>
                </div>
                {/*===> Column <===*/}
                <div className='col-6'>
                    <PhenixNumber name="speed" label={__("Speed", "phenix")} value={attributes.slider.speed || 700} onChange={mainSetter} min={300} max={3000} steps={100}></PhenixNumber>
                </div>
                {/*===> Column <===*/}
                <div className='col-12 pdt-10 divider-t flexbox gpy-5 align-between'>
                    <OptionControl name={`autoplay`} value="boolean" checked={attributes.slider.autoplay || false} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Autoplay", "phenix")}</span></OptionControl>
                    <OptionControl name={`controls`} value="boolean" checked={attributes.slider.controls || false} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Arrows", "phenix")}</span></OptionControl>
                    <OptionControl name={`pagination`} value="boolean" checked={attributes.slider.pagination || false} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Pagination", "phenix")}</span></OptionControl>
                </div>
                {/*===> // Column <===*/}
            </div>

        </>}
}