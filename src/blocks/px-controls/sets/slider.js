/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import {Component} from '@wordpress/element';

//====> Phenix Modules <====//
import PhenixInput from '../input';
import PhenixSelect from '../select';
import OptionControl from '../switch';
import PhenixNumber from "../number";

//===> Component <===//
export default class SliderSet extends Component {
    render () {
        //===> Properties <===//
        const {className, attributes, options, mainSetter, flexSetter, isGrid} = this.props;
        const uniqueKey = Date.now().toString(36) + Math.random().toString(36).substr(2, 5)+`-slider-option`;

        //===> Define Controls Options <===//
        const slider_types = [
            { label: __('Loop', "pds-blocks"), value: 'loop' },
            { label: __('Fading', "pds-blocks"),  value: 'fade' },
            { label: __('Sliding', "pds-blocks"),  value: 'slide' },
        ];

        //===> Output <===//
        return <>
            <div className='row gpx-20 gpy-15 gpy-fix'>
                {/*===> Column <===*/}
                <div className='col-6'>
                    <PhenixSelect key="type" name="type" placeholder={__("Default", "pds-blocks")} label={__("Effect Type", "pds-blocks")} value={attributes.slider.type} onChange={mainSetter} options={slider_types} />
                </div>
                {/*===> Column <===*/}
                <div className='col-6'>
                    <PhenixNumber key="steps" name="steps" label={__("Steps", "pds-blocks")} value={attributes.slider.steps || 1} onChange={mainSetter} min={1} max={12}></PhenixNumber>
                </div>
                {/*===> Column <===*/}
                <div className='col-6'>
                    <PhenixNumber key="duration" name="duration" label={__("Duration", "pds-blocks")} value={attributes.slider.duration || 6000} onChange={mainSetter} min={3000} max={20000} steps={100}></PhenixNumber>
                </div>
                {/*===> Column <===*/}
                <div className='col-6'>
                    <PhenixNumber key="speed" name="speed" label={__("Speed", "pds-blocks")} value={attributes.slider.speed || 700} onChange={mainSetter} min={300} max={3000} steps={100}></PhenixNumber>
                </div>
                {/*===> Column <===*/}
                <div className='col-12 pdt-10 divider-t flexbox gpy-5 align-between'>
                    <OptionControl key={`autoplay`} name={`autoplay`} value="boolean" checked={attributes.slider.autoplay || false} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Autoplay", "pds-blocks")}</span></OptionControl>
                    <OptionControl key={`controls`} name={`controls`} value="boolean" checked={attributes.slider.controls || false} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Arrows", "pds-blocks")}</span></OptionControl>
                    <OptionControl key={`pagination`} name={`pagination`} value="boolean" checked={attributes.slider.pagination || false} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Pagination", "pds-blocks")}</span></OptionControl>
                    <OptionControl key={`animate-elements`} name={`animate-elements`} value="has-animated-childs" checked={attributes.flexbox['animate-elements'] || false} onChange={flexSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Animated Elements", "pds-blocks")}</span></OptionControl>
                </div>
                {/*===> Column <===*/}
                {attributes.slider.pagination ? <div className='col-12'>
                    <PhenixInput key="page" name="page" label={__("Pagination Buttons Classes", "pds-blocks")} className="mb-15" value={attributes.slider.page} onChange={mainSetter} />
                    <PhenixInput key="pagination" name="pagination" label={__("Pagination Wrapper Classes", "pds-blocks")} value={attributes.slider.pagination} onChange={mainSetter} />
                </div> : null}
                {/*===> Column <===*/}
                {attributes.slider.controls ? <div className='col-12'>
                    <PhenixInput key="arrow" name="arrow" label={__("Arrows Buttons Classes", "pds-blocks")} className="mb-15" value={attributes.slider.arrow} onChange={mainSetter} />
                    <PhenixInput key="controls" name="controls" label={__("Arrows Wrapper Classes", "pds-blocks")} value={attributes.slider.controls} onChange={mainSetter} />
                </div> : null}
                {/*===> // Column <===*/}
            </div>
        </>}
}