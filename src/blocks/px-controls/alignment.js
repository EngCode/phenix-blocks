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
        const {label, value, onChange, screen, blockKey} = this.props;
        const screenPoint = screen ? `-${screen}` : "";
        const button_style = "btn tiny bg-transparent fs-12 square pxi";
        const uniqueKey = `${blockKey ? blockKey+"-" : ""}align-${screenPoint}-options`;

        const set_alignment = (target) => {
            //====> Cleanup Empty Space and Split the Value <====/
            const options = value.trim().split(/\s+/);

            //====> Define alignment <====//
            const xAlignments = [`${screenPoint}-x-start`, `${screenPoint}-x-end`, `${screenPoint}-x-between`, `${screenPoint}-x-around`, `${screenPoint}-x-center`];
            const yAlignments = [`${screenPoint}-y-start`, `${screenPoint}-y-end`, `${screenPoint}-y-center`];
            const allAlignments = [...xAlignments, ...yAlignments];

            //====> Extract alignment type from target attribute <====//
            const targetType = target.getAttribute('name').match(/-x$/) ? 'x' : 'y';
          
            //====> Check if any option has the same type as target <====//
            const hasOption = options.some(option => allAlignments.includes(option));
          
            //====> Modify value based on conditions <====//
            let modifiedValue = options;
            if (hasOption && targetType === extractType(options)) {
              modifiedValue = options.map(option => option === extractType(options) ? target.value : option);
            } else {
              modifiedValue.push(target.value);
            }
          
            //====> Join modified options and return <====//
            return onChange(modifiedValue.join(' '));
        },

        extractType = (options) => options.find(option => xAlignments.includes(option) || yAlignments.includes(option)),

        //===> Reset Value Method <===//
        reset_align = (clicked) => onChange("align-reset");

        //===> Output <===//
        return (<div className='components-flex-item flex-alignment-btns' key={uniqueKey}>
            {/*===> Label <===*/}
            <div className={"flexbox align-between mb-5 align-center-y"}>
                <label className='fs-13 weight-bold'>{label}</label>
                <button type="button" key={`reset-btn${screenPoint}`} data-value="" title="Reset" className='btn tiny bg-transparent fs-12 square far fa-redo' onClick={reset_align}></button>
            </div>
            {/*===> Counter Control <===*/}
            <div className={"flexbox align-between mb-15"}>
                {/*===> Radio Buttons <===*/}
                <div className="col-auto border-1 border-solid border-alpha-15 radius-sm">
                    {/*===> Switch Button <===*/}
                    <OptionControl key={`align${screenPoint}-start-x`} name={`flex-align${screenPoint}-x`} checked={value.includes(`align${screenPoint}-start-x`)} value={`align${screenPoint}-start-x`} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span title="Start" className={`${button_style} pxi-align-x-start`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl key={`align${screenPoint}-center-x`} name={`flex-align${screenPoint}-x`} checked={value.includes(`align${screenPoint}-center-x`)} value={`align${screenPoint}-center-x`} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-x-center`} title="Center"></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl key={`align${screenPoint}-between`} name={`flex-align${screenPoint}-x`} checked={value.includes(`align${screenPoint}-between`)} value={`align${screenPoint}-between`} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-x-between`} title="Between"></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl key={`align${screenPoint}-around`} name={`flex-align${screenPoint}-x`} checked={value.includes(`align${screenPoint}-around`)} value={`align${screenPoint}-around`} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-x-around`} title="Around"></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl key={`align${screenPoint}-end-x`} name={`flex-align${screenPoint}-x`} checked={value.includes(`align${screenPoint}-end-x`)} value={`align${screenPoint}-end-x`} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-x-end`} title="Around"></span>
                    </OptionControl>
                </div>
                {/*===> Radio Buttons <===*/}
                <div className="col-auto border-1 border-solid border-alpha-15 radius-sm">
                    {/*===> Switch Button <===*/}
                    <OptionControl key={`align${screenPoint}-start-y`} name={`flex-align${screenPoint}-y`} checked={value.includes(`align${screenPoint}-start-y`)} value={`align${screenPoint}-start-y`} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-y-start`} title="Start"></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl key={`align${screenPoint}-center-y`} name={`flex-align${screenPoint}-y`} checked={value.includes(`align${screenPoint}-center-y`)} value={`align${screenPoint}-center-y`} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-y-center`} title="Center"></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl key={`align${screenPoint}-end-y`} name={`flex-align${screenPoint}-y`} checked={value.includes(`align${screenPoint}-end-y`)} value={`align${screenPoint}-end-y`} onChange={set_alignment} type='button-radio' className='tiny inline-block'>
                        <span className={`${button_style} pxi-align-y-end`} title="End"></span>
                    </OptionControl>
                </div>
            </div>
            {/*===> Counter Control <===*/}
        </div>)
    }
}