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
        const {label, value, min, max, steps, onChange} = this.props;

        //===> Set new Value <===//
        const setNumber = (changed) => onChange(changed.value),

        //===> Increase Number <===//
        IncreaseNum = (clicked) => {
            //===> Get Elements <===//
            let button  = clicked.target,
                wrapper = button.parentNode,
                input   = wrapper.querySelector('input[type="number"]'),
                step    = steps ? parseInt(steps) : 1;

            //===> Get Data <===//
            return onChange(Math.round(( parseInt(input.value) + step )));
        },

        //===> Decrease Number <===//
        DecreaseNum = (clicked) => {
            //===> Get Elements <===//
            let button  = clicked.target,
                wrapper = button.parentNode,
                input   = wrapper.querySelector('input[type="number"]'),
                step    = steps ? steps : 1;

            //===> Get Data <===//
            return onChange(Math.round(( parseInt(input.value) - step )));
        };

        //===> Output <===//
        return (<div className='components-flex-item'>
            {/*===> Label <===*/}
            <label className='components-input-control__label components-flex-item mb-5 weight-bold'>{label}</label>
            {/*===> Counter Control <===*/}
            <div className="px-counter-input position-rv">
                {/*===> Increase Button <===*/}
                <button onClick={DecreaseNum} className='btn square small bg-transparent fs-13 increase-btn far fa-minus position-ab pos-start-0 pos-top-0 divider-e'></button>
                {/*===> Number Input <===*/}
                <input type="number" min={min} max={max} value={value} className="form-control small radius-sm tx-align-center reset-appearance" onChange={setNumber} />
                {/*===> Decrease Button <===*/}
                <button onClick={IncreaseNum} className='btn square small bg-transparent fs-13 increase-btn far fa-plus position-ab pos-end-0 pos-top-0 divider-s'></button>
            </div>
            {/*===> Counter Control <===*/}
        </div>)
    }
}