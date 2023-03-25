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

        //===> Define Controls Options <===//
        const sizes_list = ["fs-12","fs-13","fs-14","fs-15","fs-16","fs-17","fs-18","fs-19","fs-20","fs-22","fs-24","fs-25","fs-26","fs-28","fs-30","h1","h2","h3","h4","h5","h6","display-h1", "display-h2", "display-h3", "display-h4","display-h5", "display-h6"],
              font_sizes = {"Mobile Screens": [], "Tablet Screens": [], "Laptop Screens": [], "Desktop Screens": []};

        //===> Generate Responsive Sizes <===//
        Object.entries(font_sizes).forEach(([key, value]) => {
            //===> Define Screen Infix <===//
            let screen_name  = key,
                screen_infix = key.includes('Tablet') ? "md" : key.includes('Laptop') ? "lg" : key.includes('Desktop') ? "xl" : "";
                
            //===> Add Sizes to each Screen List <===//
            sizes_list.forEach(size => {
                //===> Filter Value and Label <===//
                let true_label =`${size.replace('fs-', "").replace('display-',"D").replace('-','').replace('h', 'H')}${screen_infix.length < 1 && size.includes('fs-') ? 'px':''}${screen_infix.length > 1 ? `-${screen_infix.toUpperCase()}` : ""}`,
                    true_value = size.replace(`fs-`, `fs-${screen_infix}-`).replace('display-',`display-${screen_infix}-`);
    
                //===> Correct Value for Headline Sizes <===//
                if (!size.includes('fs-') || !size.includes('display-')) true_value = `${true_value}-${screen_infix}`;

                font_sizes[screen_name].push({"label": true_label, "value": true_value});
            });
        });

        //===> Weights List <===//
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
                    <OptionControl name={`align${screenPoint}`} checked={!attributes.typography[`align${screenPoint}`] || attributes.typography[`align${screenPoint}`] === ""} value={""} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-radio' className='small me-5'>
                        <span className='btn small square outline gray far fa-align-slash radius-sm'></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`align${screenPoint}`} checked={attributes.typography[`align${screenPoint}`] === "tx-align-start" ? true : false} value={"tx-align-start"} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-${Phenix(document).direction() === "ltr" ? 'left' : "right"} radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`align${screenPoint}`} checked={attributes.typography[`align${screenPoint}`] === "tx-align-justify" ? true : false} value={"tx-align-justify"} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-justify radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`align${screenPoint}`} checked={attributes.typography[`align${screenPoint}`] === "tx-align-center" ? true : false} value={"tx-align-center"} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-center radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`align${screenPoint}`} checked={attributes.typography[`align${screenPoint}`] === "tx-align-end" ? true : false} value={"tx-align-end"} onChange={!screen ? mainSetter : (target) => mainSetter(target, screen)} type='button-radio' className='small'>
                        <span className={`btn small square outline gray fs-17 far fa-align-${Phenix(document).direction() === "rtl" ? 'left' : "right"} radius-sm`}></span>
                    </OptionControl>
                </div>
            </>: null}
            {/*===> Grouped Options <===*/}
            <div className='row gpx-20 gpy-15 gpy-fix'>
                {/*===> Size <===*/}
                {!options || options.includes("size") ? <>
                    <div className='col-12'>
                        <PhenixSelect name="size" placeholder={__("Default", "phenix")} label={__("Font Size", "phenix")} value={attributes.typography.size} onChange={mainSetter} options={font_sizes} multiple={true} search={true} className="stacked-options" />
                    </div>
                </>: null}
                {/*===> HTML Tag <===*/}
                {!options || options.includes("weight") ? <>
                <div className='col col-6'>
                    <PhenixSelect name="weight" placeholder={__("Default", "phenix")} label={__("Font Weight", "phenix")} value={attributes.typography.weight} onChange={mainSetter} options={font_weights}/>
                </div>
                </>: null}
                {/*===> Other Options <===*/}
                {this.props.children ? this.props.children : null}
                {/*===> // Column <===*/}
            </div>
        </>
    }
}