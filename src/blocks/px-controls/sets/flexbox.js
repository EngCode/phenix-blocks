/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import {Component} from '@wordpress/element';

//====> Phenix Modules <====//
import OptionControl from '../switch';
import FlexAlignment from '../alignment';

//===> Media Uploader <===//
export default class FlexboxSet extends Component {
    render () {
        //===> Properties <===//
        const {className, attributes, options, alignSetter, mainSetter} = this.props;

        //===> Output <===//
        return <>
            <div className={`row gpx-15 ${className ? className : ""}`}>
                {/*===> Column <===*/}
                <div className='col-12 mb-15'>
                    <FlexAlignment label={__("Flexbox Alignment", "phenix")} value={attributes.flexbox.align || ""} onChange={alignSetter}></FlexAlignment>
                </div>
                {/*===> Column <===*/}
                <div className='col-12 flexbox align-between mb-15'>
                    {/*===> Label <===*/}
                    <label className='col-12 mb-5 tx-UpperCase'>{__("Flow Options", "phenix")}</label>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='flow' value={!attributes.flexbox.stacked || attributes.flexbox.stacked === "" ? `flow-reverse` : "flow-columns-reverse"} checked={attributes.flexbox.flow?.length > 0} onChange={mainSetter} type='checkbox' className='tiny'>
                        <span className='fas fa-check radius-circle'>{__("Reverse ", "phenix")}</span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='stacked' value="flow-columns" checked={attributes.flexbox.stacked?.length > 0} onChange={mainSetter} type='checkbox' className='tiny'>
                        <span className='fas fa-check radius-circle'>{__("Stacked", "phenix")}</span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='nowrap' value="flow-nowrap" checked={attributes.flexbox.nowrap?.length > 0} onChange={mainSetter} type='checkbox' className='tiny'>
                        <span className='fas fa-check radius-circle'>{__("Nowrap", "phenix")}</span>
                    </OptionControl>
                </div>
                {/*===> // Column <===*/}
            </div>
        </>
    }
}