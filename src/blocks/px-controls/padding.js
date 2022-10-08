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

//===> Phenix Padding <===//
export default class PhenixPadding extends Component {
    render () {
        //===> Properties <===//
        const {
            value,
            onChange,
        } = this.props;

        //===> Options Tabs <===//
        const changeTab = (clicked) => {
            //===> Option Data <===//
            let element = Phenix(clicked.target),
                parent  = element.ancestor('.options-tabs'),
                optionsList = Phenix(parent).next('.options-list'),
                currentActive = Phenix(parent.querySelector(':scope > .primary')),
                currentType = `${element[0].getAttribute('data-options')}`,
                targetElement = optionsList.querySelector(`:scope > .${currentType}`);

            //===> Change Active <===//
            currentActive.addClass('light').removeClass('primary');
            element.addClass('primary').removeClass('light');

            //===> Show Options <===//
            optionsList.querySelector(':scope > .flexbox:not(.hidden)')?.classList.add('hidden');
            Phenix(targetElement).removeClass('hidden');
        };

        //===> .Get Default Value. <===//
        let values = value.split(' '),
            options  = {
                small  : ["", false],
                medium : ["", false],
                large  : ["", false],
                xlarge : ["", false],
            };

        //===> Default Combined Options <===//
        if (value.includes("comb")) values.forEach(item => {
            if (item.includes("comb")) {
                //==> Define item <==//
                let option_item = false,
                    option_screen;

                //==> Small Screen <==//
                if (item.includes("comb-sm")) option_screen = "small";
                //==> Medium Screen <==//
                else if (item.includes("comb-md")) option_screen = "medium";
                //==> Large Screen <==//
                else if (item.includes("comb-lg")) option_screen = "large";
                //==> xLarge Screen <==//
                else if (item.includes("comb-xl")) option_screen = "xlarg";

                //===> Set the Option <===//
                options[option_screen][0] = option_item;
                options[option_screen][1] = true;
            }
        });

        //===> Set Combined Size <===//
        const set_combined = combined => {
            //===> Element Data <===//
            let checkbox = combined.target,
                current_sizes = value.replace(/\s\s+/g, ' '),
                comb_type = checkbox.name,
                comb_point = `-${comb_type.slice(comb_type.indexOf('-')+1, comb_type.lastIndexOf('-'))}`;

            //===> Cleanup Combined/Sepereated <===//
            current_sizes.split(" ").forEach(name => {
                //===> Fallback <===//
                if (name.length > 0 && !name.includes('comb')) {
                    //===> Define Properties <===//
                    if (comb_point.includes("sm")) comb_point = "";
                    let nameValue = `${name.slice(name.lastIndexOf('-')+1)}`,
                        padding_ys = name.includes(`pdt${comb_point}-${nameValue}`) || name.includes(`pdb${comb_point}-${nameValue}`),
                        padding_xs = name.includes(`pds${comb_point}-${nameValue}`) || name.includes(`pde${comb_point}-${nameValue}`),
                        padding_x  = name.includes(`pdx${comb_point}-${nameValue}`),
                        padding_y  = name.includes(`pdy${comb_point}-${nameValue}`);

                    //===> Cleanup Current Sizes <===//
                    if (padding_ys || padding_xs || padding_y || padding_x) current_sizes = current_sizes.replace(name, ``);

                    //===> Seperate X <===//
                    if (padding_x) {
                        if (!current_sizes.includes(`pds${comb_point}-`)) current_sizes += ` pds${comb_point}-${nameValue}`;
                        if (!current_sizes.includes(`pde${comb_point}-`)) current_sizes += ` pde${comb_point}-${nameValue}`;
                    }
                    //===> Seperate Y <===//
                    else if (padding_y) {
                        if (!current_sizes.includes(`pdt${comb_point}-`)) current_sizes += ` pdt${comb_point}-${nameValue}`;
                        if (!current_sizes.includes(`pdb${comb_point}-`)) current_sizes += ` pdb${comb_point}-${nameValue}`;
                    }
                    //===> Combine X <===//
                    else if (padding_xs && !current_sizes.includes(`pdx${comb_point}-`)) {
                        current_sizes += ` pdx${comb_point}-${nameValue}`;
                    }
                    //===> Combine Y <===//
                    else if (padding_ys && !current_sizes.includes(`pdy${comb_point}-`)) {
                        current_sizes += ` pdy${comb_point}-${nameValue}`;
                    }
                }
            });

            //===> Activate Combined Size <===//
            if (checkbox.checked && !values.includes(comb_type)) {
                return onChange(` ${comb_type} ${current_sizes}`);
            }
            
            //===> De-Activate the Combined Size <===//
            else if (!checkbox.checked && values.includes(comb_type)) {
                return onChange(current_sizes.replace(` ${comb_type} `, ''));
            }
        };

        //===> Set Value <===//
        const set_value = (prefix, the_value, breakpoint) => {
            //===> Fallback <===//
            if (!prefix || !the_value) return;

            //===> Define Returned Value <===//
            let output_sizes = value.replace(/\s\s+/g, ' ');

            //===> Screen Points <===//
            switch (breakpoint) {
                case "-sm" : breakpoint = ['', "small"];
                    break;
                case "-md" : breakpoint = [breakpoint, "medium"];
                    break;
                case "-lg" : breakpoint = [breakpoint, "large"];
                    break;
                case "-xl" : breakpoint = [breakpoint, "xlarge"];
                    break;
                default : breakpoint = breakpoint;
                    break;
            }

            //===> Update Size <===//
            if (output_sizes.includes(`${prefix}${breakpoint[0]}`)) {
                //===> For Each Size <===//
                output_sizes.split(' ').forEach(name => {
                    //===> When the Size is Found Replace it <===//
                    if (name.startsWith(`${prefix}${breakpoint[0]}`)) {
                        output_sizes = output_sizes.replace(name, ` ${prefix}${breakpoint[0]}-${the_value}`);
                        return onChange(output_sizes);
                    }
                });
            }

            //===> for New Size <===//
            else {
                //===> Set the New Size <===//
                return onChange(` ${output_sizes} ${prefix}${breakpoint[0]}-${the_value}`);
            }
        };

        //===> Layout Creator <===//
        const make_options = (data, value_infix) => {
            //===> Default Values <===//
            let current_values  = {
                pdy : 0, pdx : 0, pdt : 0, pds : 0, pdb : 0, pde : 0
            };

            //===> Get Options Status <===//
            let comb_status = data[1];
            //===> for Each Name in Value <===//
            values.forEach(name => {
                //===> Fallback <===//
                if (!name.includes('comb')) {
                    //===> Get the Name Prefix <===//
                    let end = name.indexOf("-"),
                        namePrefix = name.slice(0, end),
                        hasProp = current_values.hasOwnProperty(namePrefix);

                    //===> if the Prefix matches any value Grap it <===//
                    if (value_infix === "-sm" && hasProp) {
                        current_values[namePrefix] = parseInt(name.replace(/\D/g,''));
                    }

                    else if (name.includes(value_infix) && hasProp) {
                        if (hasProp) current_values[namePrefix] = parseInt(name.replace(/\D/g,''));
                    }
                }
            });

            //===> Create the Layout <===//
            return <>
                {/*=== is Combined ===*/}
                <label className="option-control mb-5" data-type="checkbox">
                    <input type="checkbox" name={`comb${value_infix}-pd`} checked={comb_status} onChange={set_combined} />
                    <span className="fas fa-link">Combined Size</span>
                </label>
                {/*=== Combined Size ===*/}
                {comb_status ? <>
                    {/*=== Form Control <===*/}
                    <div className="flexbox align-center-y mb-10 fluid">
                        {/* icon */}
                        <i className="fs-16 me-10 pxi pxi-arrows-y" style={{marginTop:"3px", width:"25px", height: "25px"}}></i>
                        {/* control */}
                        <RangeControl key={`pdy${value_infix}`} step={5} min={0} max={100} value={current_values.pdy} onChange={(number) => set_value('pdy', number, value_infix)} />
                    </div>
                    {/*=== Form Control <===*/}
                    <div className="flexbox align-center-y mb-10 fluid">
                        {/* icon */}
                        <i className="fs-16 me-10 pxi pxi-arrows-x" style={{marginTop:"3px", width:"25px", height: "25px"}}></i>
                        {/* control */}
                        <RangeControl key={`pdx${value_infix}`} step={5} min={0} max={100} value={current_values.pdx} onChange={(number) => set_value('pdx', number, value_infix)} />
                    </div>
                </> : <>
                    {/*=== Form Control <===*/}
                    <div className="flexbox align-center-y mb-10 fluid">
                        {/* icon */}
                        <i className="fs-16 me-10 pxi pxi-arrow-top" style={{marginTop:"3px", width:"25px", height: "25px"}}></i>
                        {/* control */}
                        <RangeControl key={`pdt${value_infix}`} step={5} min={0} max={100} value={current_values.pdt} onChange={(number) => set_value('pdt', number, value_infix)} />
                    </div>
                    {/*=== Form Control <===*/}
                    <div className="flexbox align-center-y mb-10 fluid">
                        {/* icon */}
                        <i className="fs-16 me-10 pxi pxi-arrow-start" style={{marginTop:"3px", width:"25px", height: "25px"}}></i>
                        {/* control */}
                        <RangeControl key={`pds${value_infix}`} step={5} min={0} max={100} value={current_values.pds} onChange={(number) => set_value('pds', number, value_infix)} />
                    </div>
                    {/*=== Form Control <===*/}
                    <div className="flexbox align-center-y mb-10 fluid">
                        {/* icon */}
                        <i className="fs-16 me-10 pxi pxi-arrow-bottom" style={{marginTop:"3px", width:"25px", height: "25px"}}></i>
                        {/* control */}
                        <RangeControl key={`pdb${value_infix}`} step={5} min={0} max={100} value={current_values.pdb} onChange={(number) => set_value('pdb', number, value_infix)} />
                    </div>
                    {/*=== Form Control <===*/}
                    <div className="flexbox align-center-y mb-10 fluid">
                        {/* icon */}
                        <i className="fs-16 me-10 pxi pxi-arrow-end" style={{marginTop:"3px", width:"25px", height: "25px"}}></i>
                        {/* control */}
                        <RangeControl key={`pde${value_infix}`} step={5} min={0} max={100} value={current_values.pde} onChange={(number) => set_value('pde', number, value_infix)} />
                    </div>
                </>}
            </>
        }

        //===> Reset Value <===//
        const reset_value = () => {
            return onChange('');
        }

        //===> Component Output <===//
        return (
            <div className='px-gb-component'>
                {/*===> Responsive Devices <===*/}
                <div className='options-tabs px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-10'>
                    <button key="mobile" onClick={changeTab} className={`btn square tiny primary col far fa-mobile`} title="Mobile Screens" data-options="small-options"></button>
                    <button key="tablet" onClick={changeTab} className={`btn square tiny light col far fa-tablet`} title="Tablet Screens" data-options="medium-options"></button>
                    <button key="laptop" onClick={changeTab} className={`btn square tiny light col far fa-laptop`} title="Desktop Screens" data-options="large-options"></button>
                    <button key="desktop" onClick={changeTab} className={`btn square tiny light col far fa-desktop`} title="xLarge Screens" data-options="xlarge-options"></button>
                </div>
                {/*===> Options Tabs <===*/}
                <div className='options-list'>
                    {/*===> Small <====*/}
                    <div className={`flexbox small-options`}>
                        {make_options(options.small, "-sm")}
                    </div>
                    {/*===> Medium <====*/}
                    <div className={`flexbox medium-options hidden`}>
                        {make_options(options.medium, "-md")}
                    </div>
                    {/*===> Large <====*/}
                    <div className={`flexbox large-options hidden`}>
                        {make_options(options.large, "-lg")}
                    </div>
                    {/*===> xLarge <====*/}
                    <div className={`flexbox xlarge-options hidden`}>
                        {make_options(options.xlarge, "-xl")}
                    </div>
                    {/*===> xLarge <====*/}
                </div>
                {/*===> Reset Button <===*/}
                <button onClick={reset_value} className={`btn tiny radius-sm`}>Reset Size</button>
            </div>
        )
    }
}