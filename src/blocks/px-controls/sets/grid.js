/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import React, { useState, useMemo, useEffect, useCallback } from '@wordpress/element';

//====> Phenix Modules <====//
import OptionControl from '../switch';
import FlexAlignment from '../alignment';

//===> Options List
//=> align, flex-props, grid-props

//===> Component <===//
const GridSet = (props) => {
    //===> Properties <===//
    const {className, attributes, options, mainSetter, screen} = props;
    const screenPoint = screen ? `-${screen}` : "";
    const uniqueKey = Date.now().toString(36) + Math.random().toString(36).substr(2, 5)+`-flexbox-${screen}-option`;

    //===> Output <===//
    return <>
        <div className={`row gpx-15 ${className ? className : ""}`}>
            {/*===> Column <===*/}
            {!options || options.includes("align") ? <>
            <div className='col-12 mb-15'>
                <FlexAlignment label={__("Flexbox Alignment", "pds-blocks")} value={attributes.grid[`align${screenPoint}`] || ""} onChange={(target) => mainSetter(target, screen ? screen : "")}></FlexAlignment>
            </div>
            </>: null}
            {/*===> Column <===*/}
            <div className='col-12 flexbox gpy-5 align-between'>
                {/*===> Label <===*/}
                {!options || options.includes("flex-props") ? <label className='col-12 mb-5 tx-UpperCase'>{__("Flow Options", "pds-blocks")}</label> : null}
                {/*===> Switch Button <===*/}
                {!options || options.includes("flex-props") ? <OptionControl key={`flow${screenPoint}`} name={`flow${screenPoint}`} value={!attributes.grid[`stacked${screenPoint}`] || attributes.grid[`stacked${screenPoint}`] === "" ? `flow${screenPoint}-reverse` : `flow${screenPoint}-columns-reverse`} checked={attributes.grid[`flow${screenPoint}`]?.length > 0} onChange={(target) => mainSetter(target, screen ? screen : "")} type='checkbox' className='tiny'>
                    <span className='fas fa-check radius-circle'>{__("Reverse ", "pds-blocks")}</span>
                </OptionControl>: null}
                {/*===> Switch Button <===*/}
                {!options || options.includes("flex-props") ? <OptionControl key={`stacked${screenPoint}`} name={`stacked${screenPoint}`} value={`flow${screenPoint}-columns`} checked={attributes.grid[`stacked${screenPoint}`]?.length > 0} onChange={(target) => mainSetter(target, screen ? screen : "")} type='checkbox' className='tiny'>
                    <span className='fas fa-check radius-circle'>{__("Stacked", "pds-blocks")}</span>
                </OptionControl>: null}
                {/*===> Switch Button <===*/}
                {!options || options.includes("flex-props") ? <OptionControl key={`nowrap${screenPoint}`} name={`nowrap${screenPoint}`} value={`flow${screenPoint}-nowrap`} checked={attributes.grid[`nowrap${screenPoint}`]?.length > 0} onChange={(target) => mainSetter(target, screen ? screen : "")} type='checkbox' className='tiny'>
                    <span className='fas fa-check radius-circle'>{__("Nowrap", "pds-blocks")}</span>
                </OptionControl>: null}
                {/*===> Switch Button <===*/}
                {!options || options.includes("grid-props") && !screen ? <OptionControl key='equals' name='equals' checked={attributes.grid.equals} onChange={(target) => mainSetter(target, screen ? screen : "")} type='checkbox' className='tiny'>
                    <span className='fas fa-check radius-circle'>{__("Equal Cols.", "pds-blocks")}</span>
                </OptionControl>: null}
                {/*===> Switch Button <===*/}
                {!options || options.includes("grid-props") ? <OptionControl key='masonry' name='masonry' value={`px-masonry`} checked={attributes.grid[`masonry`]?.length > 0} onChange={(target) => mainSetter(target, screen ? screen : "")} type='checkbox' className='tiny'>
                    <span className='fas fa-check radius-circle'>{__("Masonry", "pds-blocks")}</span>
                </OptionControl>: null}
                {/*===> Other Button <===*/}
                {this.props.children ? this.props.children : null}
            </div>
            {/*===> // Column <===*/}
        </div>
    </>
}

export default GridSet;