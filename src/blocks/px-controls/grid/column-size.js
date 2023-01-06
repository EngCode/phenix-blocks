/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/

//===> WordPress Modules <===//
import {Component} from '@wordpress/element';

import {
    RangeControl,
    ToggleControl
} from '@wordpress/components';

//===> Phenix Background <===//
export default class ColumnSize extends Component {
    render () {
        //===> Properties <===//
        const {
            value,
            onChange
        } = this.props;

        //===> .Default. <===//
        let current  = value,
            size_xs  = 0,
            size_md = 0,
            size_lg = 0,
            size_xl = 0;

        //===> Convert Value to Array <===//
        const valueArray = value.split(' ');

        //===> Get Default Values <===//
        if (valueArray) valueArray.forEach(item => {
            if (item.includes('-md')) {
                size_md = parseInt(item.replace(/\D+/g, ''));
            }
            else if (item.includes('-lg')) {
                size_lg = parseInt(item.replace(/\D+/g, ''));
            }
            else if (item.includes('-xl')) {
                size_xl = parseInt(item.replace(/\D+/g, ''));
            }
            else if (item.length > 0) {
                if (item.includes('-auto')) size_xs = 13;
                else if (item.includes('-adaptive')) size_xs = 14;
                else size_xs = parseInt(item.replace(/\D+/g, ''));
            }
        });

        //===> New Values Handler <===//
        const set_value = (theValue, type, current_size) => {
            //===> Update Columns <===//
            if (current.includes(type)) {
                //===> if the Value is valid update it <===//
                if (theValue > 0) {
                    //===> Auto Size <===//
                    if (current_size == 13) {
                        if (theValue == 14) current = current.replace(`${type}-auto`, `${type}-adaptive`);
                        else if (theValue < 13) current = current.replace(`${type}-auto`, `${type}-${theValue}`);
                    }
                    //===> Adaptive Size <===//
                    else if (current_size == 14) {
                        if (theValue == 13) current = current.replace(`${type}-adaptive`, `${type}-auto`);
                        else if (theValue < 13) current = current.replace(`${type}-adaptive`, `${type}-${theValue}`);
                    }
                    //===> Other Size <===//
                    else {
                        //===> Set Auto <===//
                        if (theValue == 13) current = current.replace(`${type}-${current_size}`, `${type}-auto`);
                        //===> Set Adaptive <===//
                        else if (theValue == 14) current = current.replace(`${type}-${current_size}`, `${type}-adaptive`);
                        //===> Set Normal <===//
                        else if (theValue < 13) current = current.replace(`${type}-${current_size}`, `${type}-${theValue}`);
                    }
                }
                //===> if not delete it <===//
                else {
                    if (current_size == 13) current = current.replace(`${type}-auto`, ``);
                    else if (current_size == 14) current = current.replace(`${type}-adaptive`, ``);
                    else if (current_size < 13) current = current.replace(`${type}-${current_size}`, ``);
                }
            }
            //===> Set new Columns <===//
            else if (theValue > 0) {
                //===> Auto Size <===//
                if (theValue == 13) current += ` ${type}-auto`;
                //===> Adaptive Size <===//
                else if (theValue == 14) current += ` ${type}-adaptive`;
                //===> New Size <===//
                else current += ` ${type}-${theValue}`;
            }
        };

        //===> Set Columns-{Small} <===//
        const set_size = (cols) => {
            //===> Set New Columns <===//
            set_value(cols, 'col', size_xs);
            //===> Return Options <===//
            return onChange(current);
        };

        //===> Set Columns-{Medium} <===//
        const set_size_md = (cols) => {
            //===> Set New Columns <===//
            set_value(cols, 'col-md', size_md);

            //===> Return Options <===//
            return onChange(current);
        };

        //===> Set Columns-{Large} <===//
        const set_size_lg = (cols) => {
            //===> Set New Columns <===//
            set_value(cols, 'col-lg', size_lg);

            //===> Return Options <===//
            return onChange(current);
        };

        //===> Set Columns-{xLarge} <===//
        const set_size_xl = (cols) => {
            //===> Set New Columns <===//
            set_value(cols, 'col-xl', size_xl);

            //===> Return Options <===//
            return onChange(current);
        };

        //===> Component Output <===//
        return (
            <div className='px-gb-component'>
                <p className='mb-10 fs-12'>select the size of the "column" in each screen and keep in mind the "13" is for "auto" and "14" is for "Adaptive" column size.</p>
                {/* Small Device */}
                <div className="flexbox align-center-y mb-20">
                    {/* icon */}
                    <i className="far fs-16 me-10 fa-mobile" style={{marginTop:"3px", width:"25px"}}></i>
                    {/* control */}
                    <RangeControl key="mobile-size" min={0} max={14} value={size_xs} onChange={set_size} />
                </div>
                {/* Medium Device */}
                <div className="flexbox align-center-y mb-20">
                    {/* icon */}
                    <i className="far fs-16 me-10 fa-tablet" style={{marginTop:"3px", width:"25px"}}></i>
                    {/* control */}
                    <RangeControl key="mobile-size" min={0} max={14} value={size_md} onChange={set_size_md} />
                </div>
                {/* Large Device */}
                <div className="flexbox align-center-y mb-20">
                    {/* icon */}
                    <i className="far fs-14 me-10 fa-laptop" style={{marginTop:"3px", width:"25px"}}></i>
                    {/* control */}
                    <RangeControl key="mobile-size" min={0} max={14} value={size_lg} onChange={set_size_lg} />
                </div>
                {/* xLarge Device */}
                <div className="flexbox align-center-y">
                    {/* icon */}
                    <i className="far fs-14 me-10 fa-desktop" style={{marginTop:"3px", width:"25px"}}></i>
                    {/* control */}
                    <RangeControl key="mobile-size" min={0} max={14} value={size_xl} onChange={set_size_xl} />
                </div>
            </div>
        )
    }
}