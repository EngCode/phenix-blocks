/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
import {Component} from '@wordpress/element';
import OptionControl from './switch';

//===> Media Uploader <===//
export default class FlexAlignment extends Component {
    render () {
        //===> Properties <===//
        const {label, value, onChange} = this.props;
        let button_style = "btn tiny bg-transparent fs-12 square pxi";

        //===> Align Handler <===//
        const set_alignment = target => {
            //===> Define Data <===//
            let align_val  = value,
                align_type = target.getAttribute('name'),
                val_split  = value.split(" ");

            //===> Loop on Values <===//
            val_split.forEach(value => {
                //===> Type X Checker <===//
                let checkX = value.includes('-x') || value.includes('between');
                if (!checkX) checkX = value.includes('around');
                if (align_type.includes('-x') && checkX === true) {align_val.replace(value, target.value);} 
    
                //===> Type Y Checker <===//
                else if (align_type.includes('-y') && value.includes('-y')) {align_val.replace(value, target.value);}
    
                //===> New Type <===//
                else {align_val += ` ${target.value}`;}
            });

            //===> Return new Value <===//
            return onChange(align_val);
        },

        //===> Set Align Y <===//
        reset_align = (clicked) => onChange("");

        //===> Output <===//
        return (<div className='components-flex-item flex-alignment-btns'>
            {/*===> Label <===*/}
            <div className={"flexbox align-between mb-5 align-center-y"}>
                <label className='fs-13 weight-bold'>{label}</label>
                <button type="button" data-value="" title="Reset" className='btn tiny bg-transparent fs-12 square far fa-redo' onClick={reset_align}></button>
            </div>
            {/*===> Counter Control <===*/}
            <div className={"flexbox align-between"}>
                {/*===> Radio Buttons <===*/}
                <div className="col-auto pdx-5 border-1 border-solid border-alpha-15 radius-sm">
                    {/*===> Switch Button <===*/}
                    <OptionControl name='flex-align-x' checked={value.includes("align-start-x")} value={"align-start-x"} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span title="Start" className={`${button_style} pxi-align-x-start`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='flex-align-x' checked={value.includes("align-center-x")} value={"align-center-x"} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-x-center`} title="Center"></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='flex-align-x' checked={value.includes("align-between")} value={"align-between"} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-x-between`} title="Between"></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='flex-align-x' checked={value.includes("align-around")} value={"align-around"} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-x-around`} title="Around"></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='flex-align-x' checked={value.includes("align-end-x")} value={"align-end-x"} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-x-end`} title="Around"></span>
                    </OptionControl>
                </div>
                {/*===> Radio Buttons <===*/}
                <div className="col-auto pdx-5 border-1 border-solid border-alpha-15 radius-sm">
                    {/*===> Switch Button <===*/}
                    <OptionControl name='flex-align-y' checked={value.includes("align-start-y")} value={"align-start-y"} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-y-start`} title="Start"></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='flex-align-y' checked={value.includes("align-center-y")} value={"align-center-y"} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-y-center`} title="Center"></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='flex-align-y' checked={value.includes("align-end-y")} value={"align-end-y"} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-y-end`} title="End"></span>
                    </OptionControl>
                </div>
            </div>
            {/*===> Counter Control <===*/}
        </div>)
    }
}