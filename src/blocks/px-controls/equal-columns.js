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
export default class EqualColumns extends Component {
    render () {
        //===> Properties <===//
        const {
            value,
            onChange
        } = this.props;

        //===> .Default. <===//
        let current  = value,
            columns  = 0,
            columns_md = 0,
            columns_lg = 0,
            columns_xl = 0;

        //===> Convert Value to Array <===//
        const valueArray = value.split(' ');

        //===> Get Default Values <===//
        if (valueArray) valueArray.forEach(item => {
            if (item.includes('-md')) {
                columns_md = parseInt(item.replace(/\D+/g, ''));
            }
            else if (item.includes('-lg')) {
                columns_lg = parseInt(item.replace(/\D+/g, ''));
            }
            else if (item.includes('-xl')) {
                columns_xl = parseInt(item.replace(/\D+/g, ''));
            }
            else if (item.length > 0) {
                columns = parseInt(item.replace(/\D+/g, ''));
            }
        });

        //===> New Values Handler <===//
        const set_value = (theValue, type, current_cols) => {
            //===> Update Columns <===//
            if (current.includes(type)) {
                //===> if the Value is valid update it <===//
                if (theValue > 0) current = current.replace(`${type}-${current_cols}`, `${type}-${theValue}`);

                //===> if not delete it <===//
                else current = current.replace(` ${type}-${current_cols}`, ``);
            }

            //===> Set new Columns <===//
            else if (theValue > 0) current += ` ${type}-${theValue}`;
        };

        //===> Set Columns-{Small} <===//
        const set_cols = (cols) => {
            //===> Set New Columns <===//
            set_value(cols, 'row-cols', columns);

            //===> Return Options <===//
            return onChange(current);
        };

        //===> Set Columns-{Medium} <===//
        const set_cols_md = (cols) => {
            //===> Set New Columns <===//
            set_value(cols, 'row-cols-md', columns_md);

            //===> Return Options <===//
            return onChange(current);
        };

        //===> Set Columns-{Large} <===//
        const set_cols_lg = (cols) => {
            //===> Set New Columns <===//
            set_value(cols, 'row-cols-lg', columns_lg);

            //===> Return Options <===//
            return onChange(current);
        };

        //===> Set Columns-{xLarge} <===//
        const set_cols_xl = (cols) => {
            //===> Set New Columns <===//
            set_value(cols, 'row-cols-xl', columns_xl);

            //===> Return Options <===//
            return onChange(current);
        };

        //===> Component Output <===//
        return (
            <div className='px-gb-component'>
                <p className='mb-10 fs-12'>select number of columns in each row for each screen size</p>
                {/* Small Device */}
                <div className="flexbox align-center-y mb-20">
                    {/* icon */}
                    <i className="far fs-16 me-10 fa-mobile" style={{marginTop:"3px", width:"25px"}}></i>
                    {/* control */}
                    <RangeControl key="mobile-cols" min={0} max={12} value={columns} onChange={set_cols} />
                </div>
                {/* Medium Device */}
                <div className="flexbox align-center-y mb-20">
                    {/* icon */}
                    <i className="far fs-16 me-10 fa-tablet" style={{marginTop:"3px", width:"25px"}}></i>
                    {/* control */}
                    <RangeControl key="mobile-cols" min={0} max={12} value={columns_md} onChange={set_cols_md} />
                </div>
                {/* Large Device */}
                <div className="flexbox align-center-y mb-20">
                    {/* icon */}
                    <i className="far fs-14 me-10 fa-laptop" style={{marginTop:"3px", width:"25px"}}></i>
                    {/* control */}
                    <RangeControl key="mobile-cols" min={0} max={12} value={columns_lg} onChange={set_cols_lg} />
                </div>
                {/* xLarge Device */}
                <div className="flexbox align-center-y">
                    {/* icon */}
                    <i className="far fs-14 me-10 fa-desktop" style={{marginTop:"3px", width:"25px"}}></i>
                    {/* control */}
                    <RangeControl key="mobile-cols" min={0} max={12} value={columns_xl} onChange={set_cols_xl} />
                </div>
            </div>
        )
    }
}