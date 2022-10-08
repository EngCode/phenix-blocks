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

//===> Phenix Margin <===//
export default class PhenixMargin extends Component {
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
                        margin_ys = name.includes(`mt${comb_point}-${nameValue}`) || name.includes(`mb${comb_point}-${nameValue}`),
                        margin_xs = name.includes(`ms${comb_point}-${nameValue}`) || name.includes(`me${comb_point}-${nameValue}`),
                        margin_x  = name.includes(`mx${comb_point}-${nameValue}`),
                        margin_y  = name.includes(`my${comb_point}-${nameValue}`);

                    //===> Cleanup Current Sizes <===//
                    if (margin_ys || margin_xs || margin_y || margin_x) current_sizes = current_sizes.replace(name, ``);

                    //===> Seperate X <===//
                    if (margin_x) {
                        if (!current_sizes.includes(`ms${comb_point}-`)) current_sizes += ` ms${comb_point}-${nameValue}`;
                        if (!current_sizes.includes(`me${comb_point}-`)) current_sizes += ` me${comb_point}-${nameValue}`;
                    }
                    //===> Seperate Y <===//
                    else if (margin_y) {
                        if (!current_sizes.includes(`mt${comb_point}-`)) current_sizes += ` mt${comb_point}-${nameValue}`;
                        if (!current_sizes.includes(`mb${comb_point}-`)) current_sizes += ` mb${comb_point}-${nameValue}`;
                    }
                    //===> Combine X <===//
                    else if (margin_xs && !current_sizes.includes(`mx${comb_point}-`)) {
                        current_sizes += ` mx${comb_point}-${nameValue}`;
                    }
                    //===> Combine Y <===//
                    else if (margin_ys && !current_sizes.includes(`my${comb_point}-`)) {
                        current_sizes += ` my${comb_point}-${nameValue}`;
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
                my : 0, mx : 0, mt : 0, ms : 0, mb : 0, me : 0
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
                    <input type="checkbox" name={`comb${value_infix}-mg`} checked={comb_status} onChange={set_combined} />
                    <span className="fas fa-link">Combined Size</span>
                </label>
                {/*=== Combined Size ===*/}
                {comb_status ? <>
                    {/*=== Form Control <===*/}
                    <div className="flexbox align-center-y mb-10 fluid">
                        {/* icon */}
                        <i className="fs-16 me-10 pxi pxi-arrows-y" style={{marginTop:"3px", width:"25px", height: "25px"}}></i>
                        {/* control */}
                        <RangeControl key={`my${value_infix}`} step={5} min={0} max={100} value={current_values.my} onChange={(number) => set_value('my', number, value_infix)} />
                    </div>
                    {/*=== Form Control <===*/}
                    <div className="flexbox align-center-y mb-10 fluid">
                        {/* icon */}
                        <i className="fs-16 me-10 pxi pxi-arrows-x" style={{marginTop:"3px", width:"25px", height: "25px"}}></i>
                        {/* control */}
                        <RangeControl key={`mx${value_infix}`} step={5} min={0} max={100} value={current_values.mx} onChange={(number) => set_value('mx', number, value_infix)} />
                    </div>
                </> : <>
                    {/*=== Form Control <===*/}
                    <div className="flexbox align-center-y mb-10 fluid">
                        {/* icon */}
                        <i className="fs-16 me-10 pxi pxi-arrow-top" style={{marginTop:"3px", width:"25px", height: "25px"}}></i>
                        {/* control */}
                        <RangeControl key={`mt${value_infix}`} step={5} min={0} max={100} value={current_values.mt} onChange={(number) => set_value('mt', number, value_infix)} />
                    </div>
                    {/*=== Form Control <===*/}
                    <div className="flexbox align-center-y mb-10 fluid">
                        {/* icon */}
                        <i className="fs-16 me-10 pxi pxi-arrow-start" style={{marginTop:"3px", width:"25px", height: "25px"}}></i>
                        {/* control */}
                        <RangeControl key={`ms${value_infix}`} step={5} min={0} max={100} value={current_values.ms} onChange={(number) => set_value('ms', number, value_infix)} />
                    </div>
                    {/*=== Form Control <===*/}
                    <div className="flexbox align-center-y mb-10 fluid">
                        {/* icon */}
                        <i className="fs-16 me-10 pxi pxi-arrow-bottom" style={{marginTop:"3px", width:"25px", height: "25px"}}></i>
                        {/* control */}
                        <RangeControl key={`mb${value_infix}`} step={5} min={0} max={100} value={current_values.mb} onChange={(number) => set_value('mb', number, value_infix)} />
                    </div>
                    {/*=== Form Control <===*/}
                    <div className="flexbox align-center-y mb-10 fluid">
                        {/* icon */}
                        <i className="fs-16 me-10 pxi pxi-arrow-end" style={{marginTop:"3px", width:"25px", height: "25px"}}></i>
                        {/* control */}
                        <RangeControl key={`me${value_infix}`} step={5} min={0} max={100} value={current_values.me} onChange={(number) => set_value('me', number, value_infix)} />
                    </div>
                </>}
            </>
        }

        //===> Component Output <===//
        return (
            <div className='px-gb-component'>
                {/*===> Responsive Devices <===*/}
                <div className='options-tabs px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20'>
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
                {/*===> // Options Tabs <===*/}
            </div>
        )
    }
}