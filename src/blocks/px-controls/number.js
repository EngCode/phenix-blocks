/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
import React, { useCallback } from '@wordpress/element';

//===> Media Uploader <===//
const PhenixNumber = (props) => {
    //===> Properties <===//
    const {label, value, min, max, steps, icon, onChange, name} = props;

    //===> Set Value <===//
    const setNumber = useCallback((changed) => {
        //===> Get Elements <===//
        const input  = changed.target;
        const minNum  = parseFloat(min) || 0;
        const maxNum  = parseFloat(max) || 0;
        //===> Get Input Element <===//
        const newVal = parseFloat(input.value);
        const checkVal = (newVal >= minNum || newVal <= maxNum) ? newVal : 0;
        //===> Set Data <===//
        input.value = checkVal;
        //===> Return Data <===//
        return onChange(input);
    }, [min, max, onChange]);

    //===> Increase Number <===//
    const IncreaseNum = useCallback((clicked) => {
        //===> Get Elements <===//
        let button = clicked.target,
            wrapper = button.closest(".px-counter-input"),
            maxNum = parseFloat(max) || 9999999,
            step = steps ? parseFloat(steps) : 1;
    
        //===> Get Input Element <===//
        let input = wrapper.querySelector('input[type="number"]'),
            newVal = parseFloat(input.value) + step;
    
        //===> Set Data <===//
        input.value = (newVal >= minNum || newVal <= maxNum) ? newVal : maxNum;
    
        //===> Return Data <===//
        return onChange(input);
    }, [max, steps, onChange]);

    //===> Decrease Number <===//
    const DecreaseNum = useCallback((clicked) => {
        //===> Get Elements <===//
        let button = clicked.target,
            wrapper = button.closest(".px-counter-input"),
            minNum = parseFloat(min) || 0,
            step = steps ? parseFloat(steps) : 1;
    
        //===> Get Input Element <===//
        let input = wrapper.querySelector('input[type="number"]'),
            newVal = parseFloat(input.value) - step;
    
        //===> Set Data <===//
        input.value = (newVal >= minNum || newVal <= maxNum) ? newVal : minNum;
    
        //===> Return Data <===//
        return onChange(input);
    }, [min, steps, onChange]);

    //===> Output <===//
    return (<div className='flexbox flex-gap-fix align-between flow-column'>
        {/*===> Label <===*/}
        <label className='components-input-control__label tx-uppercase weight-bold'>{label}</label>
        {/*===> Counter Control <===*/}
        <div className={"px-counter-input position-rv fluid " + (icon ? icon : "")}>
            {/*===> Button <===*/}
            {!icon ? <button onClick={DecreaseNum} className='btn square small fs-13 increase-btn far fa-minus position-ab pos-start-0 pos-top-0 divider-e icon-fix'></button> : ""}

            {/*===> Number Input <===*/}
            <input name={name} type="number" min={min} max={max} value={parseFloat(value) ? parseFloat(value) : 0} className={"form-control small radius-sm reset-appearance tx-align-center"} onChange={setNumber} />

            {/*===> Button <===*/}
            <div className='position-ab pos-end-0 pos-bottom-0 flexbox'>
                {icon ? <button onClick={DecreaseNum} className='btn square small fs-13 increase-btn far fa-minus divider-s icon-fix'></button> : ""}
                <button onClick={IncreaseNum} className='btn square small fs-13 increase-btn far fa-plus divider-s icon-fix'></button>
            </div>
        </div>
        {/*===> Counter Control <===*/}
    </div>)
}

export default PhenixNumber;