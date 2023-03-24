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

//===> Options List
//=> align, flex-props, grid-props

//===> Component <===//
export default class FlexboxSet extends Component {
    render () {
        //===> Properties <===//
        const {className, attributes, options, mainSetter, screen} = this.props;
        const screenPoint = screen ? `-${screen}` : "";

        //===> Output <===//
        return <>
            <div className={`row gpx-15 ${className ? className : ""}`}>
                {/*===> Column <===*/}
                {!options || options.includes("align") ? <>
                <div className='col-12 mb-15'>
                    <FlexAlignment label={__("Flexbox Alignment", "phenix")} value={attributes.flexbox[`align${screenPoint}`] || ""} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)}></FlexAlignment>
                </div>
                </>: null}
                {/*===> Column <===*/}
                <div className='col-12 flexbox gpy-5 align-between'>
                    {/*===> Label <===*/}
                    {!options || options.includes("flex-props") ? <label className='col-12 mb-5 tx-UpperCase'>{__("Flow Options", "phenix")}</label> : null}
                    {/*===> Switch Button <===*/}
                    {!options || options.includes("flex-props") ? <OptionControl name='flow' value={!attributes.flexbox[`stacked${screenPoint}`] || attributes.flexbox[`stacked${screenPoint}`] === "" ? `flow${screenPoint}-reverse` : `flow${screenPoint}-columns-reverse`} checked={attributes.flexbox[`flow${screenPoint}`]?.length > 0} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='checkbox' className='tiny'>
                        <span className='fas fa-check radius-circle'>{__("Reverse ", "phenix")}</span>
                    </OptionControl>: null}
                    {/*===> Switch Button <===*/}
                    {!options || options.includes("flex-props") ? <OptionControl name='stacked' value={`flow${screenPoint}-columns`} checked={attributes.flexbox[`stacked${screenPoint}`]?.length > 0} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='checkbox' className='tiny'>
                        <span className='fas fa-check radius-circle'>{__("Stacked", "phenix")}</span>
                    </OptionControl>: null}
                    {/*===> Switch Button <===*/}
                    {!options || options.includes("flex-props") ? <OptionControl name='nowrap' value={`flow${screenPoint}-nowrap`} checked={attributes.flexbox[`nowrap${screenPoint}`]?.length > 0} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='checkbox' className='tiny'>
                        <span className='fas fa-check radius-circle'>{__("Nowrap", "phenix")}</span>
                    </OptionControl>: null}
                    {/*===> Switch Button <===*/}
                    {!options || options.includes("grid-props") && !screen ? <OptionControl name='equals' checked={attributes.flexbox.equals} onChange={mainSetter} type='checkbox' className='tiny'>
                        <span className='fas fa-check radius-circle'>{__("Equal Cols.", "phenix")}</span>
                    </OptionControl>: null}
                    {/*===> Switch Button <===*/}
                    {!options || options.includes("grid-props") ? <OptionControl name='masonry' value={`px-masonry${screenPoint}`} checked={attributes.flexbox[`masonry${screenPoint}`]?.length > 0} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='checkbox' className='tiny'>
                        <span className='fas fa-check radius-circle'>{__("Masonry", "phenix")}</span>
                    </OptionControl>: null}
                    {/*===> Other Button <===*/}
                    {this.props.children ? this.props.children : null}
                </div>
                {/*===> // Column <===*/}
            </div>
        </>
    }
}