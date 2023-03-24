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

//===> Media Uploader <===//
export default class TypographySet extends Component {
    render () {
        //===> Properties <===//
        const {attributes, options, mainSetter} = this.props;

        //===> Define Controls Options <===//
        const font_sizes = [
            {"label": "12px", "value": "fs-12" },
            {"label": "13px", "value": "fs-13" },
            {"label": "14px", "value": "fs-14" },
            {"label": "15px", "value": "fs-15" },
            {"label": "16px", "value": "fs-16" },
            {"label": "17px", "value": "fs-17" },
            {"label": "18px", "value": "fs-18" },
            {"label": "19px", "value": "fs-19" },
            {"label": "20px", "value": "fs-20" },
            {"label": "22px", "value": "fs-22" },
            {"label": "24px", "value": "fs-24" },
            {"label": "25px", "value": "fs-25" },
            {"label": "26px", "value": "fs-26" },
            {"label": "28px", "value": "fs-28" },
            {"label": "30px", "value": "fs-30" },
        ];
    
        const font_weights = [
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

        //===> Output <===//
        return <>
            {!options || options.includes("align") ? <>
                {/*===> Label <===*/}
                <label className={`col-12 mb-5 tx-UpperCase fs-13`}>{__("Text Alignment", "phenix")}</label>
                {/*===> Elements Group <===*/}
                <div className='flexbox mb-15'>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={!attributes.typography.align || attributes.typography.align === ""} value={""} onChange={mainSetter} type='button-radio' className='small me-5'>
                        <span className='btn small square outline gray far fa-align-slash radius-sm'></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='align' checked={attributes.typography.align === "tx-align-start" ? true : false} value={"tx-align-start"} onChange={mainSetter} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-${Phenix(document).direction() === "ltr" ? 'left' : "right"} radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='align' checked={attributes.typography.align === "tx-align-justify" ? true : false} value={"tx-align-justify"} onChange={mainSetter} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-justify radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='align' checked={attributes.typography.align === "tx-align-center" ? true : false} value={"tx-align-center"} onChange={mainSetter} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-center radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='align' checked={attributes.typography.align === "tx-align-end" ? true : false} value={"tx-align-end"} onChange={mainSetter} type='button-radio' className='small'>
                        <span className={`btn small square outline gray fs-17 far fa-align-${Phenix(document).direction() === "rtl" ? 'left' : "right"} radius-sm`}></span>
                    </OptionControl>
                </div>
            </>: null}
            {/*===> Grouped Options <===*/}
            <div className='row gpx-20 gpy-fix'>
                {/*===> Size <===*/}
                {!options || options.includes("size") ? <>
                <div className='col-6 mb-10'>
                    <PhenixSelect name="size" placeholder={__("Default", "phenix")} label={__("Font Size", "phenix")} value={attributes.typography.size} onChange={mainSetter} options={font_sizes} />
                </div>
                </>: null}
                {/*===> HTML Tag <===*/}
                {!options || options.includes("weight") ? <>
                <div className='col-6 mb-10'>
                    <PhenixSelect name="weight" placeholder={__("Default", "phenix")} label={__("Font Weight", "phenix")} value={attributes.typography.weight} onChange={mainSetter} options={font_weights}/>
                </div>
                </>: null}
                {/*===> // Column <===*/}
            </div>
        </>
    }
}