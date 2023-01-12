/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
import {Component} from '@wordpress/element';

//===> Media Uploader <===//
export default class FlexAlignment extends Component {
    render () {
        //===> Properties <===//
        const {label, value, onChange} = this.props;
            
        let button_style = "btn tiny bg-transparent fs-12 square pxi";

        //===> Align Handler <===//
        const set_align = (new_value, current_value, Axis) => {
            //===> Split the value <===//
            let valueArray = current_value.split(" ").filter(val => val),

            //===> Check Names Method <===//
            checkNames = (name) => {
                if (Axis === "align-x") {
                    return name.includes('-x') || name.includes('-between') || name.includes('-around');
                } else if (Axis === "align-y") {
                    return name.includes('-y');
                }
            };

            //===> Replace if has Multiple <===//
            if (valueArray.length > 1) {
                console.log("is Array ", valueArray);
                valueArray.forEach(val => checkNames(val) ? value.replace(val, new_value) : new_value);
            }
            //===> Update Current Value <===//
            else {
                return checkNames(value) ? new_value : `${new_value} ${current_value}`;
            }
        },
        
        //===> Set Align X <===//
        set_align_x = (clicked) => {
            //===> Get Elements <===//
            let button = clicked.target,
                new_val = button.getAttribute('data-value'),
                checkVal = set_align(new_val, value, "align-x");

            //===> Set Data <===//
            return checkVal ? onChange(checkVal) : "";
        },

        //===> Set Align Y <===//
        set_align_y = (clicked) => {
            //===> Get Elements <===//
            let button   = clicked.target,
                new_val  = button.getAttribute('data-value'),
                checkVal = set_align(new_val, value, "align-y");

            //===> Set Data <===//
            return checkVal ? onChange(checkVal) : "";
        },

        //===> Set Align Y <===//
        reset_align = (clicked) => onChange("");

        //===> Output <===//
        return (<div className='components-flex-item flex-alignment-btns'>
            {/*===> Label <===*/}
            <div className={"flexbox align-between mb-5 align-center-y"}>
                <label className='components-input-control__label components-flex-item weight-bold'>{label}</label>
                <button type="button" data-value="" title="Reset" className='btn tiny bg-transparent fs-12 square far fa-redo' onClick={reset_align}></button>
            </div>
            {/*===> Counter Control <===*/}
            <div className={"flexbox align-between"}>
                {/*===> Radio Buttons <===*/}
                <div className="col-auto pdx-5 border-1 border-solid border-alpha-15 radius-sm">
                    <button type="button" data-value="align-start-x"  title="Start" className={`${button_style} pxi-align-x-start ${value.includes("x-start") ? "active":""}`} onClick={set_align_x}></button>
                    <button type="button" data-value="align-center-x" title="Center" className={`${button_style} pxi-align-x-center ${value.includes("x-center") ? "active":""}`} onClick={set_align_x}></button>
                    <button type="button" data-value="align-between" title="Between" className={`${button_style} pxi-align-x-between ${value.includes("x-between") ? "active":""}`} onClick={set_align_x}></button>
                    <button type="button" data-value="align-around" title="Around" className={`${button_style} pxi-align-x-around ${value.includes("x-around") ? "active":""}`} onClick={set_align_x}></button>
                    <button type="button" data-value="align-end-x" title="End" className={`${button_style} pxi-align-x-end ${value.includes("x-end") ? "active":""}`} onClick={set_align_x}></button>
                </div>
                {/*===> Radio Buttons <===*/}
                <div className="col-auto pdx-5 border-1 border-solid border-alpha-15 radius-sm">
                    <button type="button" data-value="align-start-y" title="Start" className={`${button_style} pxi-align-y-start ${value.includes("y-start") ? "active":""}`} onClick={set_align_y}></button>
                    <button type="button" data-value="align-center-y" title="Center" className={`${button_style} pxi-align-y-center ${value.includes("y-center") ? "active":""}`} onClick={set_align_y}></button>
                    <button type="button" data-value="align-end-y" title="End" className={`${button_style} pxi-align-y-end ${value.includes("y-end") ? "active":""}`} onClick={set_align_y}></button>
                </div>
            </div>
            {/*===> Counter Control <===*/}
        </div>)
    }
}