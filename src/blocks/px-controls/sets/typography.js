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

//===> Options List
//=> align, size, weight

//===> Component <===//
export default class TypographySet extends Component {
    render () {
        //===> Properties <===//
        const {attributes, options, mainSetter, screen} = this.props;
        const screenPoint = screen ? `-${screen}` : "";
        const uniqueKey = Date.now().toString(36) + Math.random().toString(36).substr(2, 5)+`-typography-${screen}-option`;

        //===> Define Controls Options <===//
        const sizes_list = [],
            origin_sizes = [
                ``,
                `fs${screenPoint}-12`,
                `fs${screenPoint}-13`,
                `fs${screenPoint}-14`,
                `fs${screenPoint}-15`,
                `fs${screenPoint}-16`,
                `fs${screenPoint}-17`,
                `fs${screenPoint}-18`,
                `fs${screenPoint}-19`,
                `fs${screenPoint}-20`,
                `fs${screenPoint}-22`,
                `fs${screenPoint}-24`,
                `fs${screenPoint}-25`,
                `fs${screenPoint}-26`,
                `fs${screenPoint}-28`,
                `fs${screenPoint}-30`,
                `h1${screenPoint}`, `h2${screenPoint}`, `h3${screenPoint}`, `h4${screenPoint}`, `h5${screenPoint}`, `h6${screenPoint}`,
                `display${screenPoint}-h1`, `display${screenPoint}-h2`, `display${screenPoint}-h3`, `display${screenPoint}-h4`, `display${screenPoint}-h5`, `display${screenPoint}-h6`
            ];

        //===> Generate Responsive Sizes <===//
        origin_sizes.forEach(size => {
            //===> Filter Value and Label <===//
            let true_label =`${size.replace(`fs${screenPoint}-`, "").replace(`display${screenPoint}-`,"D").replace(screenPoint, '').replace('-','').replace(`h`, 'H')}${size.includes(`fs${screenPoint}-`) ? 'px':''}`;
            if (size === "") true_label = __("Default", "pds-blocks");
            sizes_list.push({"label": true_label, "value": size});
        });

        //===> Weights List <===//
        const font_weights = [
            { "label": "Default",  "value": ""},
            { "label": "Thin",  "value": "weight-thin"},
            { "label": "Light",  "value": "weight-light"},
            { "label": "Extra Light",  "value": "weight-xlight"},
            { "label": "Normal",  "value": "weight-normal"},
            { "label": "Medium",  "value": "weight-medium"},
            { "label": "Semi-Bold",  "value": "weight-bold"},
            { "label": "Bold",  "value": "weight-strong"},
            { "label": "Heavy",  "value": "weight-xbold"},
            { "label": "Black",  "value": "weight-black"}
        ];

        //===> Lineheight List <===//
        const font_lineheight = [
            { "label": "Default",  "value": ""},
            { "label": "100%",  "value": "lineheight-100"},
            { "label": "120%",  "value": "lineheight-120"},
            { "label": "130%",  "value": "lineheight-130"},
            { "label": "150%",  "value": "lineheight-150"},
            { "label": "160%",  "value": "lineheight-160"},
            { "label": "170%",  "value": "lineheight-170"},
            { "label": "180%",  "value": "lineheight-180"},
            { "label": "inherit",  "value": "lineheight-inherit"},
        ];

        const text_shadows = {
            "Standard" : [
                { "label": "Standard", "value": "tx-shadow-dp-1"},
                { "label": "Small", "value": "tx-shadow-dp-2"},
                { "label": "Medium", "value": "tx-shadow-dp-3"},
                { "label": "Large", "value": "tx-shadow-dp-4"},
                { "label": "xLarge", "value": "tx-shadow-dp-5"},
                { "label": "Huge", "value": "tx-shadow-dp-x"},
            ],
            "TailWind" : [
                { "label": "Standard", "value": "tx-shadow"},
                { "label": "Small", "value": "tx-shadow-sm"},
                { "label": "Medium", "value": "tx-shadow-md"},
                { "label": "Large", "value": "tx-shadow-lg"},
                { "label": "xLarge", "value": "tx-shadow-xl"},
                { "label": "Huge", "value": "tx-shadow-xxl"},
            ],
        };

        //===> Output <===//
        return <>
            {/*===> Size Only <===*/}
            {options && options.includes("size") ? <>
                {/*===> Size <===*/}
                <PhenixSelect name={`size${screenPoint}`} placeholder={__("Default", "pds-blocks")} label={__("Font Size", "pds-blocks")} value={attributes.typography[`size${screenPoint}`]} onChange={mainSetter} options={sizes_list} search={true} />
            </> : null}
            {/*===> Grouped Options <===*/}
            {!options ? <div className='row gpx-20 gpy-15'>
                {/*===> Size <===*/}
                <div className='col col-6'>
                    <PhenixSelect name={`size${screenPoint}`} placeholder={__("Default", "pds-blocks")} label={__("Font Size", "pds-blocks")} value={attributes.typography[`size${screenPoint}`]} onChange={mainSetter} options={sizes_list} search={true} />
                </div>
                {/*===> Weight <===*/}
                <div className='col col-6'>
                    <PhenixSelect name="weight" placeholder={__("Default", "pds-blocks")} label={__("Font Weight", "pds-blocks")} value={attributes.typography.weight} onChange={mainSetter} options={font_weights}/>
                </div>
                {/*===> Weight <===*/}
                <div className='col col-6'>
                    <PhenixSelect name="lineheight" placeholder={__("Default", "pds-blocks")} label={__("Line Height", "pds-blocks")} value={attributes.typography.lineheight} onChange={mainSetter} options={font_lineheight}/>
                </div>
                {/*===> Shadow <===*/}
                <div className='col col-6'>
                    <PhenixSelect name="text-shadow" placeholder={__("None", "pds-blocks")} label={__("Text Shadow", "pds-blocks")} value={attributes.style['text-shadow']} onChange={mainSetter} options={text_shadows} />
                </div>
                {/*===> Other Options <===*/}
                {this.props.children ? this.props.children : null}
                {/*===> // Column <===*/}
            </div> : this.props.children ? this.props.children : null }
            {/*===> Alignment Options <===*/}
            {!options || options.includes("align") ? <>
                {/*===> Label <===*/}
                <label className={`col-12 mb-5 tx-UpperCase fs-13`}>{__("Text Alignment", "pds-blocks")}</label>
                {/*===> Elements Group <===*/}
                <div className='flexbox mb-15'>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`align${screenPoint}`} checked={!attributes.typography[`align${screenPoint}`] || attributes.typography[`align${screenPoint}`] === ""} value={""} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-radio' className='small me-5'>
                        <span className='btn small square outline gray far fa-align-slash radius-sm'></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`align${screenPoint}`} checked={attributes.typography[`align${screenPoint}`] === `tx-align${screenPoint}-start` ? true : false} value={`tx-align${screenPoint}-start`} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-${Phenix(document).direction() === "ltr" ? 'left' : "right"} radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`align${screenPoint}`} checked={attributes.typography[`align${screenPoint}`] === `tx-align${screenPoint}-justify` ? true : false} value={`tx-align${screenPoint}-justify`} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-justify radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`align${screenPoint}`} checked={attributes.typography[`align${screenPoint}`] === `tx-align${screenPoint}-center` ? true : false} value={`tx-align${screenPoint}-center`} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-center radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`align${screenPoint}`} checked={attributes.typography[`align${screenPoint}`] === `tx-align${screenPoint}-end` ? true : false} value={`tx-align${screenPoint}-end`} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-radio' className='small'>
                        <span className={`btn small square outline gray fs-17 far fa-align-${Phenix(document).direction() === "rtl" ? 'left' : "right"} radius-sm`}></span>
                    </OptionControl>
                </div>
                {/*===> Style Options <===*/}
                <label className={`col-12 mb-5 tx-UpperCase fs-13`}>{__("Text Style", "pds-blocks")}</label>
                {/*===> Elements Group <===*/}
                <div className='flexbox gpy-10'>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`tx-capitalize`} checked={attributes.typography[`tx-capitalize`]} value={"tx-capitalize"} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-checkbox' className='small me-5'>
                        <span className='btn small square tooltip-bottom outline gray fas fa-font-case radius-sm' data-title={__("Capitalize","pds-blocks")}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`tx-uppercase`} checked={attributes.typography[`tx-uppercase`]} value={"tx-uppercase"} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-checkbox' className='small me-5'>
                        <span className='btn small square tooltip-bottom outline gray fas fa-text radius-sm' data-title={__("Uppercase","pds-blocks")}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`tx-underline`} checked={attributes.typography[`tx-underline`]} value={"tx-underline"} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-checkbox' className='small me-5'>
                        <span className='btn small square tooltip-bottom outline gray fas fa-underline radius-sm' data-title={__("Underline","pds-blocks")}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`tx-line-through`} checked={attributes.typography[`tx-line-through`]} value={"tx-line-through"} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-checkbox' className='small me-5'>
                        <span className='btn small square tooltip-bottom outline gray fas fa-strikethrough radius-sm' data-title={__("Strikethrough","pds-blocks")}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`tx-direction`} checked={attributes.typography[`tx-direction`] === "ltr"} value={"ltr"} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-checkbox' className='small me-5'>
                        <span className='btn small square tooltip-bottom outline gray fas fa-paragraph radius-sm' data-title={__("LTR","pds-blocks")}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`tx-direction`} checked={attributes.typography[`tx-direction`] === "rtl"} value={"rtl"} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-checkbox' className='small me-5'>
                        <span className='btn small square tooltip-bottom outline gray fas fa-paragraph-rtl radius-sm' data-title={__("RTL","pds-blocks")}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`tx-nowrap`} checked={attributes.typography[`tx-nowrap`]} value={"tx-nowrap"} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-checkbox' className='small me-5'>
                        <span className='btn small square tooltip-bottom outline gray fas fa-ellipsis-h radius-sm' data-title={__("Nowrap","pds-blocks")}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`bg-clip-text`} checked={attributes.typography[`bg-clip-text`]} value={"bg-clip-text"} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-checkbox' className='small me-5'>
                        <span className='btn small square tooltip-bottom outline gray fas fa-box-heart radius-sm' data-title={__("Clip Text","pds-blocks")}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`colored-word`} checked={attributes.typography[`colored-word`]} value={"colored-word"} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-checkbox' className='small me-5'>
                        <span className='btn small square tooltip-bottom outline gray fas fa-tint radius-sm' data-title={__("Colored Words","pds-blocks")}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`gradient-text`} checked={attributes.typography[`gradient-text`]} value={"gradient-text"} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-checkbox' className='small me-5'>
                        <span className='btn small square tooltip-bottom outline gray fas fa-brush radius-sm' data-title={__("Gradient Words","pds-blocks")}></span>
                    </OptionControl>
                </div>
            </>: null}
        </>
    }
}