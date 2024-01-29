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

//===> Component <===//
export default class SizesSet extends Component {
    render () {
        //===> Properties <===//
        const {attributes, options, mainSetter, screen} = this.props;
        const screenPoint = screen ? `-${screen}` : "";

        //===> Define Width Sizes <===//
        const width_range = [50, 75, 100, 125, 150, 200, 225, 250, 275, 300, 320, 360, 390, 768 ,570 ,480 ,420, "auto", "fluid"],
              max_width_range = [1920, 1600, 1400, 1366, 1200, 1100, 768, 640, 570, 480, 420, 390, 360, 320, 280, 260, 200, 180];

        //===> Generate Width Sizes <===//
        const width_list = width_range.map(size => { return { "label": size, "value": `w${screenPoint}-${size}`} }),
              min_width_list = max_width_range.map(size => { return { "label": size, "value": `w${screenPoint}-min-${size}`} }),
              max_width_list = max_width_range.map(size => { return { "label": size, "value": `w${screenPoint}-max-${size}`} });

        //===> Define Height Sizes <===//
        const height_range = ["auto", "25%", "50%", "75%", "100%", "120%", "150%", "175%", "200%", "25vh", "50vh", "75vh", "100vh"],
              max_height_range = ["auto", "25%", "50%", "75%", "100%", "25vh", "50vh", "75vh", "100vh"];

        //===> Generate Height Sizes <===//
        const height_list = height_range.map(size => { return { "label": size, "value": `h${screenPoint}-${size}`} }),
              min_height_list = max_height_range.map(size => { return { "label": size, "value": `h${screenPoint}-min-${size}`} }),
              max_height_list = max_height_range.map(size => { return { "label": size, "value": `h${screenPoint}-max-${size}`} });


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
                    <PhenixSelect name={`width_size`} placeholder={__("Default", "pds-blocks")} label={__("Width Sizes", "pds-blocks")} value={attributes.style[`width_size`]} onChange={mainSetter} options={width_list} />
                </div>
                {/*===> Min Width <===*/}
                <div className='col col-6'>
                    <PhenixSelect name={`min_size`} placeholder={__("Default", "pds-blocks")} label={__("Min Width", "pds-blocks")} value={attributes.style[`min_size`]} onChange={mainSetter} options={min_width_list} />
                </div>
                {/*===> Max Width <===*/}
                <div className='col col-6'>
                    <PhenixSelect name={`max_size`} placeholder={__("Default", "pds-blocks")} label={__("Max Width", "pds-blocks")} value={attributes.style[`max_size`]} onChange={mainSetter} options={max_width_list} />
                </div>

                {/*===> Height <===*/}
                <div className='col-12'>
                    <PhenixSelect name={`height_size`} placeholder={__("Default", "pds-blocks")} label={__("Height Sizes", "pds-blocks")} value={attributes.style[`height_size`]} onChange={mainSetter} options={height_list} />
                </div>
                {/*===> Min Height <===*/}
                <div className='col col-6'>
                    <PhenixSelect name={`min_height_size`} placeholder={__("Default", "pds-blocks")} label={__("Min Height", "pds-blocks")} value={attributes.style[`min_height_size`]} onChange={mainSetter} options={min_height_list} />
                </div>
                {/*===> Max Height <===*/}
                <div className='col col-6'>
                    <PhenixSelect name={`max_height_size`} placeholder={__("Default", "pds-blocks")} label={__("Max Height", "pds-blocks")} value={attributes.style[`max_height_size`]} onChange={mainSetter} options={max_height_list} />
                </div>
                {/*===> Other Options <===*/}
                {this.props.children ? this.props.children : null}
                {/*===> // Column <===*/}
            </div> : this.props.children ? this.props.children : null }
        </>
    }
}