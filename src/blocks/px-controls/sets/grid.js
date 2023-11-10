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
export default class GridSet extends Component {
    render () {
        //===> Properties <===//
        const {className, attributes, options, mainSetter, screen} = this.props;
        const screenPoint = screen ? `-${screen}` : "";
        const uniqueKey = Date.now().toString(36) + Math.random().toString(36).substr(2, 5)+`-flexbox-${screen}-option`;

        //===> Output <===//
        return <>
            <div className={`row gpx-15 ${className ? className : ""}`}>
                {/*===> Column <===*/}
                {!options || options.includes("align") ? <>
                <div className='col-12 mb-15'>
                    <FlexAlignment label={__("Flexbox Alignment", "pds-blocks")} value={attributes.grid[`align${screenPoint}`] || ""} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)}></FlexAlignment>
                </div>
                </>: null}
                {/*===> Column <===*/}
                <div className='col-12 flexbox gpy-5 align-between'>
                    {/*===> Label <===*/}
                    {!options || options.includes("flex-props") ? <label className='col-12 mb-5 tx-UpperCase'>{__("Flow Options", "pds-blocks")}</label> : null}
                    {/*===> Switch Button <===*/}
                    {!options || options.includes("flex-props") ? <OptionControl name='flow' value={!attributes.grid[`stacked${screenPoint}`] || attributes.grid[`stacked${screenPoint}`] === "" ? `flow${screenPoint}-reverse` : `flow${screenPoint}-columns-reverse`} checked={attributes.grid[`flow${screenPoint}`]?.length > 0} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='checkbox' className='tiny'>
                        <span className='fas fa-check radius-circle'>{__("Reverse ", "pds-blocks")}</span>
                    </OptionControl>: null}
                    {/*===> Switch Button <===*/}
                    {!options || options.includes("flex-props") ? <OptionControl name='stacked' value={`flow${screenPoint}-columns`} checked={attributes.grid[`stacked${screenPoint}`]?.length > 0} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='checkbox' className='tiny'>
                        <span className='fas fa-check radius-circle'>{__("Stacked", "pds-blocks")}</span>
                    </OptionControl>: null}
                    {/*===> Switch Button <===*/}
                    {!options || options.includes("flex-props") ? <OptionControl name='nowrap' value={`flow${screenPoint}-nowrap`} checked={attributes.grid[`nowrap${screenPoint}`]?.length > 0} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='checkbox' className='tiny'>
                        <span className='fas fa-check radius-circle'>{__("Nowrap", "pds-blocks")}</span>
                    </OptionControl>: null}
                    {/*===> Switch Button <===*/}
                    {!options || options.includes("grid-props") && !screen ? <OptionControl name='equals' checked={attributes.grid.equals} onChange={mainSetter} type='checkbox' className='tiny'>
                        <span className='fas fa-check radius-circle'>{__("Equal Cols.", "pds-blocks")}</span>
                    </OptionControl>: null}
                    {/*===> Switch Button <===*/}
                    {!options || options.includes("grid-props") ? <OptionControl name='masonry' value={`px-masonry${screenPoint}`} checked={attributes.grid[`masonry${screenPoint}`]?.length > 0} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='checkbox' className='tiny'>
                        <span className='fas fa-check radius-circle'>{__("Masonry", "pds-blocks")}</span>
                    </OptionControl>: null}
                    {/*===> Other Button <===*/}
                    {this.props.children ? this.props.children : null}
                </div>
                {/*===> // Column <===*/}
            </div>
        </>
    }
}