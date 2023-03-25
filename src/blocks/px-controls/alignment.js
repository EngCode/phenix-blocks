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
        const {label, value, onChange, screen} = this.props;
        const screenPoint = screen ? `-${screen}` : "";
        const button_style = "btn tiny bg-transparent fs-12 square pxi";

        //===> Value Handler <===//
        const set_alignment = target => {
            //===> Define Data <===//
            let align_val  = value;
            const current_val = value.trim(),
                  current_values  = current_val.split(" "),
                  xTypes = ["-x", "between", "around"],
                  allTypes = ["-x", "between", "around", "-y"];

            //===> Check if the Value has an option with the same type as the target value <===//
            const itHasType = allTypes.some(type => current_val.includes(type)),
                  align_type = xTypes.some(type => target.getAttribute('name').includes(type)) ? "x" : "y",
                  foundedType = xTypes.some(type => current_val.includes(type)) ? "x" : "y";

            //===> if the Value has an Option and the option type is the same as the target <===//
            if (itHasType && align_type === foundedType) {
                //===> Loop on Values <===//
                current_values.forEach(current_value => {
                    //===> if the Founded Type is the same is the Value, Replace the Value <===//
                    if (current_value.includes(align_type)) {
                        align_val = align_val.replace(current_value, target.value);
                    }
                });
            }
            //===> if its a new Value add it <===//
            else {
                align_val += ` ${target.value}`;
            }

            //===> Return new Value <===//
            return onChange(align_val.trim());
        },

        //===> Reset Value Method <===//
        reset_align = (clicked) => onChange("align-reset");

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
                    <OptionControl name={`flex-align-x${screenPoint}`} checked={value.includes(`align${screenPoint}-start-x`)} value={`align${screenPoint}-start-x`} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span title="Start" className={`${button_style} pxi-align-x-start`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`flex-align-x${screenPoint}`} checked={value.includes(`align${screenPoint}-center-x`)} value={`align${screenPoint}-center-x`} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-x-center`} title="Center"></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`flex-align-x${screenPoint}`} checked={value.includes(`align${screenPoint}-between`)} value={`align${screenPoint}-between`} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-x-between`} title="Between"></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`flex-align-x${screenPoint}`} checked={value.includes(`align${screenPoint}-around`)} value={`align${screenPoint}-around`} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-x-around`} title="Around"></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`flex-align-x${screenPoint}`} checked={value.includes(`align${screenPoint}-end-x`)} value={`align${screenPoint}-end-x`} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-x-end`} title="Around"></span>
                    </OptionControl>
                </div>
                {/*===> Radio Buttons <===*/}
                <div className="col-auto pdx-5 border-1 border-solid border-alpha-15 radius-sm">
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`flex-align-y${screenPoint}`} checked={value.includes(`align${screenPoint}-start-y`)} value={`align${screenPoint}-start-y`} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-y-start`} title="Start"></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`flex-align-y${screenPoint}`} checked={value.includes(`align${screenPoint}-center-y`)} value={`align${screenPoint}-center-y`} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-y-center`} title="Center"></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name={`flex-align-y${screenPoint}`} checked={value.includes(`align${screenPoint}-end-y`)} value={`align${screenPoint}-end-y`} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-y-end`} title="End"></span>
                    </OptionControl>
                </div>
            </div>
            {/*===> Counter Control <===*/}
        </div>)
    }
}