/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import React, { useState, useMemo, useEffect, useCallback } from '@wordpress/element';

//====> Phenix Modules <====//
import PhenixSelect from '../select';
import OptionControl from '../switch';

//===> Component <===//
const SizesSet = ({attributes, options, mainSetter, screen}) => {
    //===> Properties <===//
    const PhenixBlocks = window.PhenixBlocks.dataLists.sizes_range;
    const screenPoint = screen ? `-${screen}` : "";

    //===> Generate Width Sizes <===//
    const width_list = PhenixBlocks.width_range.map(size => { return { "label": size, "value": `w${screenPoint}-${size}`} }),
            min_width_list = PhenixBlocks.max_width_range.map(size => { return { "label": size, "value": `w${screenPoint}-min-${size}`} }),
            max_width_list = PhenixBlocks.max_width_range.map(size => { return { "label": size, "value": `w${screenPoint}-max-${size}`} });

    //===> Generate Height Sizes <===//
    const height_list = PhenixBlocks.height_range.map(size => { return { "label": size, "value": `h${screenPoint}-${size.replace("%", "")}`} }),
            min_height_list = PhenixBlocks.max_height_range.map(size => { return { "label": size, "value": `h${screenPoint}-min-${size.replace("%", "")}`} }),
            max_height_list = PhenixBlocks.max_height_range.map(size => { return { "label": size, "value": `h${screenPoint}-max-${size.replace("%", "")}`} });

    //===> Add Default Option <===//
    const default_option = { "label": __("Default", "pds-blocks"), "value": "" };
    width_list.unshift(default_option);
    min_width_list.unshift(default_option);
    max_width_list.unshift(default_option);
    height_list.unshift(default_option);
    min_height_list.unshift(default_option);
    max_height_list.unshift(default_option);
    
    //===> Output <===//
    return <>
        {/*===> Grouped Options <===*/}
        {!options ? <div className='row gpx-20 gpy-15'>
            {/*===> Width <===*/}
            <div className='col-12'>
                <PhenixSelect key={`width_size${screenPoint}`} name={`width_size${screenPoint}`} placeholder={__("Default", "pds-blocks")} label={__("Width Sizes", "pds-blocks")} value={attributes.style[`width_size${screenPoint}`]} onChange={mainSetter} options={width_list} />
            </div>
            {/*===> Min Width <===*/}
            <div className='col col-6'>
                <PhenixSelect key={`min_size${screenPoint}`} name={`min_size${screenPoint}`} placeholder={__("Default", "pds-blocks")} label={__("Min Width", "pds-blocks")} value={attributes.style[`min_size${screenPoint}`]} onChange={mainSetter} options={min_width_list} />
            </div>
            {/*===> Max Width <===*/}
            <div className='col col-6'>
                <PhenixSelect key={`max_size${screenPoint}`} name={`max_size${screenPoint}`} placeholder={__("Default", "pds-blocks")} label={__("Max Width", "pds-blocks")} value={attributes.style[`max_size${screenPoint}`]} onChange={mainSetter} options={max_width_list} />
            </div>

            {/*===> Height <===*/}
            <div className='col-12'>
                <PhenixSelect key={`height_size${screenPoint}`} name={`height_size${screenPoint}`} placeholder={__("Default", "pds-blocks")} label={__("Height Sizes", "pds-blocks")} value={attributes.style[`height_size${screenPoint}`]} onChange={mainSetter} options={height_list} />
            </div>
            {/*===> Min Height <===*/}
            <div className='col col-6'>
                <PhenixSelect key={`min_height_size${screenPoint}`} name={`min_height_size${screenPoint}`} placeholder={__("Default", "pds-blocks")} label={__("Min Height", "pds-blocks")} value={attributes.style[`min_height_size${screenPoint}`]} onChange={mainSetter} options={min_height_list} />
            </div>
            {/*===> Max Height <===*/}
            <div className='col col-6'>
                <PhenixSelect key={`max_height_size${screenPoint}`} name={`max_height_size${screenPoint}`} placeholder={__("Default", "pds-blocks")} label={__("Max Height", "pds-blocks")} value={attributes.style[`max_height_size${screenPoint}`]} onChange={mainSetter} options={max_height_list} />
            </div>
            {/*===> Other Options <===*/}
            {this.props.children ? this.props.children : null}
            {/*===> // Column <===*/}
        </div> : this.props.children ? this.props.children : null }
    </>
}

export default SizesSet;