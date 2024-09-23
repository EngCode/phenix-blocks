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
import PhenixNumber from "../number";
import PhenixSelect from "../select";

//===> Options List
//=> align, flex-props, grid-props

//===> Component <===//
export default class FlexboxSet extends Component {
    render () {
        //===> Properties <===//
        const {className, attributes, options, mainSetter, screen} = this.props;
        const screenPoint = screen ? `-${screen}` : "";
        const uniqueKey = Date.now().toString(36) + Math.random().toString(36).substr(2, 5)+`-flexbox-${screenPoint}-option`;

        const align_options = [
            {label: "Start", value: `align-self${screen}-start`},
            {label: "Center", value: `align-self${screen}-center`},
            {label: "End", value: `align-self${screen}-end`}
        ];

        //===> Output <===//
        return <>
            <div className={`row gpx-15 ${className ? className : ""}`} key={uniqueKey}>
                {/*===> Column <===*/}
                {!options || options.includes("align") ? <>
                    <div className='col-12 mb-15'>
                        <FlexAlignment screen={screen} label={__("Flexbox Alignment", "pds-blocks")} value={attributes.flexbox[`align${screenPoint}`] || ""} onChange={(target) => mainSetter(target, screen ? screen : "")}></FlexAlignment>
                        {/*====> Self Alignment <====*/}
                        {!options || options.includes('align-self') ? <>
                            <PhenixSelect class="mt-15" name={`align-self${screen}`} size="normal" placeholder={__("None", "pds-blocks")} className="stacked-options" label={__("Self Align", "pds-blocks")} value={attributes.flexbox[`align-self${screen}`]} onChange={mainSetter} options={align_options} />
                        </>:null}
                    </div>
                </>: null}
                {/*===> Group <===*/}
                <div className='col-12 row gpx-10 pdt-5 mb-15'>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <PhenixNumber label={__("Gap-Y Space", "pds-blocks")} key={`gpy${screenPoint}`} name={`gpy${screenPoint}`} onChange={mainSetter} value={attributes.flexbox[`gpy${screenPoint}`] || 0} min={0} max={50} steps={5} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-6'>
                        <PhenixNumber label={__("Gap-X Space", "pds-blocks")} key={`gpx${screenPoint}`} name={`gpx${screenPoint}`} onChange={mainSetter} value={attributes.flexbox[`gpx${screenPoint}`] || 0} min={0} max={50} steps={5} />
                    </div>
                    {/*===> // Column <===*/}
                </div>
                {/*===> Column <===*/}
                <div className='col-12 flexbox gpy-5'>
                    {/*===> Label <===*/}
                    {!options || options.includes("flex-props") ? <label className='col-12 mb-5 tx-UpperCase'>{__("Flow Options", "pds-blocks")}</label> : null}
                    {/*===> Switch Button <===*/}
                    {!options || options.includes("flex-props") ? <OptionControl key={`flow${screenPoint}`} name={`flow${screenPoint}`} value={!attributes.flexbox[`stacked${screenPoint}`] || attributes.flexbox[`stacked${screenPoint}`] === "" ? `flow${screenPoint}-reverse` : `flow${screenPoint}-columns-reverse`} checked={attributes.flexbox[`flow${screenPoint}`]?.length > 0} onChange={(target) => mainSetter(target, screen ? screen : "")} type='checkbox' className='tiny col-6'>
                        <span className='fas fa-check radius-circle'>{__("Reverse ", "pds-blocks")}</span>
                    </OptionControl>: null}
                    {/*===> Switch Button <===*/}
                    {!options || options.includes("flex-props") && !attributes.flexbox?.slider ? <OptionControl key={`stacked${screenPoint}`} name={`stacked${screenPoint}`} value={`flow${screenPoint}-columns`} checked={attributes.flexbox[`stacked${screenPoint}`]?.length > 0} onChange={(target) => mainSetter(target, screen ? screen : "")} type='checkbox' className='tiny col-6'>
                        <span className='fas fa-check radius-circle'>{__("Stacked", "pds-blocks")}</span>
                    </OptionControl>: null}
                    {/*===> Switch Button <===*/}
                    {!options || options.includes("flex-props") && !attributes.flexbox?.slider ? <OptionControl key={`nowrap${screenPoint}`} name={`nowrap${screenPoint}`} value={`flow${screenPoint}-nowrap`} checked={attributes.flexbox[`nowrap${screenPoint}`]?.length > 0} onChange={(target) => mainSetter(target, screen ? screen : "")} type='checkbox' className='tiny col-6'>
                        <span className='fas fa-check radius-circle'>{__("Nowrap", "pds-blocks")}</span>
                    </OptionControl>: null}
                    {/*===> Switch Button <===*/}
                    {!options || options.includes("grid-props") && !attributes.flexbox?.slider && !screen ? <OptionControl key={`equals${screenPoint}`} name={`equals${screenPoint}`} checked={attributes.flexbox.equals} onChange={(target) => mainSetter(target, screen ? screen : "")} type='checkbox' className='tiny col-6'>
                        <span className='fas fa-check radius-circle'>{__("Equal Cols.", "pds-blocks")}</span>
                    </OptionControl>: null}
                    {/*===> Switch Button <===*/}
                    {!options || options.includes("grid-props") && !attributes.flexbox?.slider ? <OptionControl key={`masonry${screenPoint}`} name={`masonry${screenPoint}`} value={`px-masonry${screenPoint}`} checked={attributes.flexbox[`masonry${screenPoint}`]?.length > 0} onChange={(target) => mainSetter(target, screen ? screen : "")} type='checkbox' className='tiny col-6'>
                        <span className='fas fa-check radius-circle'>{__("Masonry", "pds-blocks")}</span>
                    </OptionControl>: null}
                    {/*===> Switch Button <===*/}
                    {!options || options.includes("grid-props") ?
                    <OptionControl key={`gpy-fix`} name={`gpy-fix`} value={`gpy-fix`} checked={attributes.flexbox[`gpy-fix`]?.length > 0} onChange={(target) => mainSetter(target, screen ? screen : "")} type='checkbox' className='tiny col-6'>
                        <span className='fas fa-check radius-circle'>{__("Gap Y fix", "pds-blocks")}</span>
                    </OptionControl>: null}
                    {/*===> Other Button <===*/}
                    {this.props.children ? this.props.children : null}
                </div>
                {/*===> // Column <===*/}
            </div>
        </>
    }
}