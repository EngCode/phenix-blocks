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
export default class PhenixSpacing extends Component {
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
        let value_list = value.split(' '),
            options_list  = {
                small  : {
                    padding : ["", false],
                    margin  : ["", false]
                },
                medium : {
                    padding : ["", false],
                    margin  : ["", false]
                },
                large  : {
                    padding : ["", false],
                    margin  : ["", false]
                },
                xlarge : {
                    padding : ["", false],
                    margin  : ["", false]
                },
            };

        //===> Default Options <===//
        value_list.forEach(item => {
            //===> Combined Mode <===//
            if (item.includes("comb-")) {
                //==> Define item <==//
                let option_item = {padding : false, margin : false};

                //==> Check for Padding <==//
                if (item.includes('-pd')) option_item.padding = true;

                //==> Check for Margin <==//
                if (item.includes('-mg')) option_item.margin = true;

                //==> Small Screen <==//
                if (item.includes("comb-sm")) {
                    //==> Padding <==//
                    if(option_item.padding) {
                        options_list.small.padding[0] = option_item.padding;
                        options_list.small.padding[1] = true;
                    }
                    //==> Margin <==//
                    if(option_item.margin) {
                        options_list.small.margin[0] = option_item.margin;
                        options_list.small.margin[1] = true;
                    }
                }
                //==> Medium Screen <==//
                else if (item.includes("comb-md")) {
                    //==> Padding <==//
                    if(option_item.padding) {
                        options_list.medium.padding[0] = option_item.padding;
                        options_list.medium.padding[1] = true;
                    }
                    //==> Margin <==//
                    if(option_item.margin) {
                        options_list.medium.margin[0] = option_item.margin;
                        options_list.medium.margin[1] = true;
                    }
                }
                //==> Large Screen <==//
                else if (item.includes("comb-lg")) {
                    //==> Padding <==//
                    if(option_item.padding) {
                        options_list.large.padding[0] = option_item.padding;
                        options_list.large.padding[1] = true;
                    }
                    //==> Margin <==//
                    if(option_item.margin) {
                        options_list.large.margin[0] = option_item.margin;
                        options_list.large.margin[1] = true;
                    }
                }
                //==> xLarge Screen <==//
                else if (item.includes("comb-xl")) {
                    //==> Padding <==//
                    if(option_item.padding) {
                        options_list.xlarge.padding[0] = option_item.padding;
                        options_list.xlarge.padding[1] = true;
                    }
                    //==> Margin <==//
                    if(option_item.margin) {
                        options_list.xlarge.margin[0] = option_item.margin;
                        options_list.xlarge.margin[1] = true;
                    }
                }
            }
            
            //===>  <===//
        });

        //===> Set Combined Size <===//
        const set_combined = combined => {
            //===> Element Data <===//
            let checkbox = combined.target,
                comb_type = checkbox.name;
            
            //===> Activate Combined Size <===//
            if (checkbox.checked && !value_list.includes(comb_type)) return onChange(`${value} ${comb_type}`);
            
            //===> De-Activate the Combined Size <===//
            else if (!checkbox.checked && value_list.includes(comb_type)) return onChange(value.replace(` ${comb_type}`));
        };

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
                        {/*===> Options Types <====*/}
                        <div className='options-tabs fluid px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-10'>
                            <button key="padding" onClick={changeTab} className={`btn tiny outline primary col`} data-options="padding-size">Padding Size</button>
                            <button key="margin" onClick={changeTab} className={`btn tiny outline light col`} data-options="margin-size">Margin Size</button>
                        </div>
                        {/*===> Options Types Panels <====*/}
                        <div className='options-list'>
                            {/*===> Padding <====*/}
                            <div className={`flexbox padding-size`}>
                                {/*=== is Combined ===*/}
                                <label className="option-control mb-15" data-type="checkbox">
                                    <input type="checkbox" name="comb-sm-pd" checked={options_list.small.padding[1]} onChange={set_combined} />
                                    <span className="fas fa-link">Combined Size</span>
                                </label>
                                {/*=== Combined Size ===*/}

                            </div>
                            {/*===> Margin <====*/}
                            <div className={`flexbox margin-size hidden`}>
                                {/*=== is Combined ===*/}
                                <label className="option-control mb-15" data-type="checkbox">
                                    <input type="checkbox" name="comb-sm-mg" checked={options_list.small.margin[1]} onChange={set_combined} />
                                    <span className="fas fa-link">Combined Size</span>
                                </label>
                                {/*=== Combined Size ===*/}
                            </div>
                        </div>
                        {/*===> End Options Types <====*/}
                    </div>
                    {/*===> Medium <====*/}
                    <div className={`flexbox medium-options hidden`}>
                        {/*===> Options Types <====*/}
                        <div className='options-tabs fluid px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-10'>
                            <button key="padding" onClick={changeTab} className={`btn tiny outline primary col`} data-options="padding-size">Padding Size</button>
                            <button key="margin" onClick={changeTab} className={`btn tiny outline light col`} data-options="margin-size">Margin Size</button>
                        </div>
                        {/*===> Options Types Panels <====*/}
                        <div className='options-list'>
                            {/*===> Padding <====*/}
                            <div className={`flexbox padding-size`}>
                                {/*=== is Combined ===*/}
                                <label className="option-control mb-15" data-type="checkbox">
                                    <input type="checkbox" name="comb-md-pd" checked={options_list.medium.padding[1]} onChange={set_combined} />
                                    <span className="fas fa-link">Combined Size</span>
                                </label>
                                {/*=== Combined Size ===*/}
                            </div>
                            {/*===> Margin <====*/}
                            <div className={`flexbox margin-size hidden`}>
                                {/*=== is Combined ===*/}
                                <label className="option-control mb-15" data-type="checkbox">
                                    <input type="checkbox" name="comb-md-mg" checked={options_list.medium.margin[1]} onChange={set_combined} />
                                    <span className="fas fa-link">Combined Size</span>
                                </label>
                                {/*=== Combined Size ===*/}
                            </div>
                        </div>
                        {/*===> End Options Types <====*/}
                    </div>
                    {/*===> Large <====*/}
                    <div className={`flexbox large-options hidden`}>
                        {/*===> Options Types <====*/}
                        <div className='options-tabs fluid px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-10'>
                            <button key="padding" onClick={changeTab} className={`btn tiny outline primary col`} data-options="padding-size">Padding Size</button>
                            <button key="margin" onClick={changeTab} className={`btn tiny outline light col`} data-options="margin-size">Margin Size</button>
                        </div>
                        {/*===> Options Types Panels <====*/}
                        <div className='options-list'>
                            {/*===> Padding <====*/}
                            <div className={`flexbox padding-size`}>
                                {/*=== is Combined ===*/}
                                <label className="option-control mb-15" data-type="checkbox">
                                    <input type="checkbox" name="comb-lg-pd" checked={options_list.large.padding[1]} onChange={set_combined} />
                                    <span className="fas fa-link">Combined Size</span>
                                </label>
                                {/*=== Combined Size ===*/}
                            </div>
                            {/*===> Margin <====*/}
                            <div className={`flexbox margin-size hidden`}>
                                {/*=== is Combined ===*/}
                                <label className="option-control mb-15" data-type="checkbox">
                                    <input type="checkbox" name="comb-lg-mg" checked={options_list.large.margin[1]} onChange={set_combined} />
                                    <span className="fas fa-link">Combined Size</span>
                                </label>
                                {/*=== Combined Size ===*/}
                            </div>
                        </div>
                        {/*===> End Options Types <====*/}
                    </div>
                    {/*===> xLarge <====*/}
                    <div className={`flexbox xlarge-options hidden`}>
                        {/*===> Options Types <====*/}
                        <div className='options-tabs fluid px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-10'>
                            <button key="padding" onClick={changeTab} className={`btn tiny outline primary col`} data-options="padding-size">Padding Size</button>
                            <button key="margin" onClick={changeTab} className={`btn tiny outline light col`} data-options="margin-size">Margin Size</button>
                        </div>
                        {/*===> Options Types Panels <====*/}
                        <div className='options-list'>
                            {/*===> Padding <====*/}
                            <div className={`flexbox padding-size`}>
                                {/*=== is Combined ===*/}
                                <label className="option-control mb-15" data-type="checkbox">
                                    <input type="checkbox" name="comb-xl-pd" checked={options_list.xlarge.padding[1]} onChange={set_combined} />
                                    <span className="fas fa-link">Combined Size</span>
                                </label>
                                {/*=== Combined Size ===*/}
                            </div>
                            {/*===> Margin <====*/}
                            <div className={`flexbox margin-size hidden`}>
                                {/*=== is Combined ===*/}
                                <label className="option-control mb-15" data-type="checkbox">
                                    <input type="checkbox" name="comb-xl-mg" checked={options_list.xlarge.margin[1]} onChange={set_combined} />
                                    <span className="fas fa-link">Combined Size</span>
                                </label>
                                {/*=== Combined Size ===*/}
                            </div>
                        </div>
                        {/*===> End Options Types <====*/}
                    </div>
                    {/*===> xLarge <====*/}
                </div>
                {/*===> // Options Tabs <===*/}
            </div>
        )
    }
}