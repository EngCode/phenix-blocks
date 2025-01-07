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
            { label: __('Default', "pds-blocks"),  value: '' },
            { label: __('Fade', "pds-blocks"),  value: 'fade' },
            { label: __('Flip', "pds-blocks"),  value: 'flip' },
            { label: __('Cube', "pds-blocks"),  value: 'cube' },
            { label: __('Slide', "pds-blocks"),  value: 'slide' },
            { label: __('Cards', "pds-blocks"),  value: 'cards' },
            { label: __('Creative', "pds-blocks"),  value: 'creative' },
            { label: __('CoverFlow', "pds-blocks"),  value: 'coverflow' },
        ];

        //===> Output <===//
        return <>
            <div className='row gpx-20 gpy-15 gpy-fix'>
                {/*===> Column <===*/}
                <div className='col-12'>
                    <PhenixSelect key="type" name="type" placeholder={__("Default", "pds-blocks")} label={__("Effect", "pds-blocks")} value={attributes.slider.type} onChange={mainSetter} options={slider_types} />
                </div>
                {/*===> Column <===*/}
                <div className='col-6'>
                    <PhenixNumber key="duration" name="duration" label={__("Duration", "pds-blocks")} value={attributes.slider.duration || 6000} onChange={mainSetter} min={0} max={20000} steps={50}></PhenixNumber>
                </div>
                {/*===> Column <===*/}
                <div className='col-6'>
                    <PhenixNumber key="speed" name="speed" label={__("Speed", "pds-blocks")} value={attributes.slider.speed || 700} onChange={mainSetter} min={0} max={20000} steps={50}></PhenixNumber>
                </div>
                {/*===> Column <===*/}
                <div className='col-12 pdt-10 divider-t flexbox gpy-5 align-between'>
                    <OptionControl key={`autoplay`} name={`autoplay`} value="boolean" checked={attributes.slider.autoplay || true} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Autoplay", "pds-blocks")}</span></OptionControl>
                    <OptionControl key={`controls`} name={`controls`} value="boolean" checked={attributes.slider.controls || false} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Arrows", "pds-blocks")}</span></OptionControl>
                    <OptionControl key={`pagination`} name={`pagination`} value="boolean" checked={attributes.slider.pagination || false} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Pagination", "pds-blocks")}</span></OptionControl>
                    <OptionControl key={`center-mode`} name={`center`} value="boolean" checked={attributes.slider.center || false} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Center Mode", "pds-blocks")}</span></OptionControl>
                    <OptionControl key={`autoWidth`} name={`autoWidth`} value="boolean" checked={attributes.slider.autoWidth || false} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Free Width", "pds-blocks")}</span></OptionControl>
                    <OptionControl key={`autoHeight`} name={`autoHeight`} value="boolean" checked={attributes.slider.autoHeight || false} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Free Height", "pds-blocks")}</span></OptionControl>
                    <OptionControl key={`reverseDirection`} name={`reverseDirection`} value="boolean" checked={attributes.slider.reverseDirection || false} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Reverse Direction", "pds-blocks")}</span></OptionControl>
                </div>
                {/*===> Column <===*/}
                <div className='col-12'>
                    <PhenixInput key="sync" name="sync" label={__("Thumbnails", "pds-blocks")} className="mb-15" value={attributes.slider.sync} onChange={mainSetter} />
                </div>
                {/*===> Column <===*/}
                {attributes.slider.pagination || attributes.slider.controls === "" ? <div className='col-12'>
                    <PhenixInput key="page" name="page" label={__("Pagination Buttons Classes", "pds-blocks")} className="mb-15" value={attributes.slider.page} onChange={mainSetter} />
                    <PhenixInput key="pagination" name="pagination" label={__("Pagination Wrapper Classes", "pds-blocks")} value={attributes.slider.pagination} onChange={mainSetter} />
                </div> : null}
                {/*===> Column <===*/}
                {attributes.slider.controls || attributes.slider.controls === "" ? <div className='col-12'>
                    <PhenixInput key="arrow" name="arrow" label={__("Arrows Buttons Classes", "pds-blocks")} className="mb-15" value={attributes.slider.arrow} onChange={mainSetter} />
                    <PhenixInput key="controls" name="controls" label={__("Arrows Wrapper Classes", "pds-blocks")} value={attributes.slider.controls} onChange={mainSetter} />
                </div> : null}
                {/*===> // Column <===*/}
            </div>
        </>}
}