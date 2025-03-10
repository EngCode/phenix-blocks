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
        const {className, attributes, options, mainSetter} = this.props;

        //===> Define Controls Options <===//
        const slider_types = [
            { label: __('Loop', "pds-blocks"), value: 'loop' },
            { label: __('Fading', "pds-blocks"),  value: 'fade' },
            { label: __('Sliding', "pds-blocks"),  value: 'slide' },
        ];

        const slider_directions = [
            { label: __('Default', "pds-blocks"), value: '' },
            { label: __('LTR', "pds-blocks"), value: 'ltr' },
            { label: __('RTL', "pds-blocks"), value: 'rtl' },
            { label: __('Vertical', "pds-blocks"),  value: 'ttb' },
        ];

        //===> Output <===//
        return <>
            <div className={`row gpx-20 gpy-15 gpy-fix ${className}`}>
                {/*===> Column <===*/}
                <div className='col-6'>
                    <PhenixSelect key="type" name="type" placeholder={__("Default", "pds-blocks")} label={__("Effect Type", "pds-blocks")} value={attributes.slider.type} onChange={mainSetter} options={slider_types} />
                </div>
                {/*===> Column <===*/}
                <div className='col-6'>
                    <PhenixSelect key="type" name="direction" placeholder={__("Default", "pds-blocks")} label={__("Direction", "pds-blocks")} value={attributes.slider.direction} onChange={mainSetter} options={slider_directions} />
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
                    <OptionControl key={`autoplay`} name={`autoplay`} value="boolean" checked={attributes.slider.autoplay || true} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Autoplay", "pds-blocks")}</span></OptionControl>
                    <OptionControl key={`controls`} name={`controls`} value="boolean" checked={attributes.slider.controls || false} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Arrows", "pds-blocks")}</span></OptionControl>
                    <OptionControl key={`pagination`} name={`pagination`} value="boolean" checked={attributes.slider.pagination || false} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Pagination", "pds-blocks")}</span></OptionControl>
                    <OptionControl key={`isNavigation`} name={`is-navigation`} value="boolean" checked={attributes.slider['is-navigation'] || false} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("isNavigation", "pds-blocks")}</span></OptionControl>
                    <OptionControl key={`center-mode`} name={`center`} value="boolean" checked={attributes.slider.center || false} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Center Mode", "pds-blocks")}</span></OptionControl>
                    <OptionControl key={`autoWidth`} name={`autoWidth`} value="boolean" checked={attributes.slider.autoWidth || false} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Free Width", "pds-blocks")}</span></OptionControl>
                    <OptionControl key={`autoHeight`} name={`autoHeight`} value="boolean" checked={attributes.slider.autoHeight || false} onChange={mainSetter} type='checkbox' className='small'><span className='fas fa-check radius-circle'>{__("Free Height", "pds-blocks")}</span></OptionControl>
                </div>
                {/*===> Column <===*/}
                <div className='col-12'>
                    <PhenixInput key="sync" name="sync" label={__("Sync with", "pds-blocks")} className="mb-15" value={attributes.slider.sync} onChange={mainSetter} />
                </div>
                {/*===> Column <===*/}
                {attributes.slider.pagination ? <div className='col-12'>
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