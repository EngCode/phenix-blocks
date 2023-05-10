/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
import {Component} from '@wordpress/element';

//===> Media Uploader <===//
export default class PhenixNumber extends Component {
    render () {
        //===> Properties <===//
        const {label, value, min, max, steps, icon, onChange, name} = this.props;
        const uniqueKey = Date.now().toString(36) + Math.random().toString(36).substr(2, 5)+`-flexbox-${screen}-option`;

        //===> Set Value <===//
        const setNumber = (changed) => {
            //===> Get Elements <===//
            const input  = changed.target,
                  minNum  = parseInt(min) || 0,
                  maxNum  = parseInt(max) || 0;

            //===> Get Input Element <===//
            const newVal = parseInt(input.value),
                  checkVal = (newVal >= minNum || newVal <= maxNum) ? newVal : 0;

            //===> Set Data <===//
            input.value = checkVal;
            return onChange(input);
        },

        //===> Increase Number <===//
        IncreaseNum = (clicked) => {
            //===> Get Elements <===//
            let button  = clicked.target,
                wrapper = Phenix(button).ancestor(".px-counter-input"),
                maxNum  = parseInt(max) || 9999999,
                step    = steps ? parseInt(steps) : 1;

            //===> Get Input Element <===//
            let input  = wrapper.querySelector('input[type="number"]'),
                newVal = parseInt(input.value) + step;

            //===> Set Data <===//
            input.value = newVal < maxNum || newVal === maxNum ? newVal : maxNum;
            return onChange(input);
        },

        //===> Decrease Number <===//
        DecreaseNum = (clicked) => {
            //===> Get Elements <===//
            let button  = clicked.target,
                wrapper = Phenix(button).ancestor(".px-counter-input"),
                minNum  = parseInt(min) || 0,
                step    = steps ? steps : 1;

            //===> Get Input Element <===//
            let input = wrapper.querySelector('input[type="number"]'),
                newVal = parseInt(input.value) - step;

            //===> Set Data <===//
            input.value = newVal > minNum || newVal === minNum ? newVal : minNum;
            return onChange(input);
        };

        //===> Output <===//
        return (<div className='flexbox flex-gap-fix align-between flow-column'>
            {/*===> Label <===*/}
            <label className='components-input-control__label tx-uppercase weight-bold'>{label}</label>
            {/*===> Counter Control <===*/}
            <div className={"px-counter-input position-rv fluid " + (icon ? icon : "")}>
                {/*===> Button <===*/}
                {!icon ? <button onClick={DecreaseNum} className='btn square small fs-13 increase-btn far fa-minus position-ab pos-start-0 pos-top-0 divider-e icon-fix'></button> : ""}

                {/*===> Number Input <===*/}
                <input name={name} type="number" min={min} max={max} value={parseInt(value) ? parseInt(value) : 0} className={"form-control small radius-sm reset-appearance tx-align-center"} onChange={setNumber} />

                {/*===> Button <===*/}
                <div className='position-ab pos-end-0 pos-bottom-0 flexbox'>
                    {icon ? <button onClick={DecreaseNum} className='btn square small fs-13 increase-btn far fa-minus divider-s icon-fix'></button> : ""}
                    <button onClick={IncreaseNum} className='btn square small fs-13 increase-btn far fa-plus divider-s icon-fix'></button>
                </div>
            </div>
            {/*===> Counter Control <===*/}
        </div>)
    }
}