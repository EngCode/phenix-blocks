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

        //===> .Default. <===//
        let current_value = value.split(' '),
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
        current_value.forEach(item => {
            //===> Combined Mode for Each Value Name <===//
            if (item.includes("comb-")) {
                //==> Define item <==//
                let option_item;

                //==> Check for Padding <==//
                if (item.includes('-pd')) option_item.padding[1] = true;

                //==> Check for Margin <==//
                if (item.includes('-mg')) option_item.margin[1] = true;

                //==> Small Screen <==//
                if (item.includes("comb-sm")) {
                    //==> Padding <==//
                    if(option_item.padding) options_list.small.padding = option_item.padding;
                    //==> Margin <==//
                    if(option_item.margin) options_list.small.margin = option_item.margin;
                }
                //==> Medium Screen <==//
                else if (item.includes("comb-md")) {
                    //==> Padding <==//
                    if(option_item.padding) options_list.medium.padding = option_item.padding;
                    //==> Margin <==//
                    if(option_item.margin) options_list.medium.margin = option_item.margin;
                }
                //==> Large Screen <==//
                else if (item.includes("comb-lg")) {
                    //==> Padding <==//
                    if(option_item.padding) options_list.large.padding = option_item.padding;
                    //==> Margin <==//
                    if(option_item.margin) options_list.large.margin = option_item.margin;
                }
                //==> xLarge Screen <==//
                else if (item.includes("comb-xl")) {
                    //==> Padding <==//
                    if(option_item.padding) options_list.xlarge.padding = option_item.padding;
                    //==> Margin <==//
                    if(option_item.margin) options_list.xlarge.margin = option_item.margin;
                }
            }
        });

        //===> Set Combined Size <===//
        const set_combined = combined => {
            
        };

        //===> Component Output <===//
        return (
            <div className='px-gb-component'>
                {/*===> Responsive Devices <===*/}
                <div className='options-tabs px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20'>
                    <button key="mobile" onClick={changeTab} className={`btn square tiny primary col far fa-mobile`} title="Mobile Screens"  data-options="small-options"></button>
                    <button key="tablet" onClick={changeTab} className={`btn square tiny light col far fa-tablet`}   title="Tablet Screens"  data-options="medium-options"></button>
                    <button key="laptop" onClick={changeTab} className={`btn square tiny light col far fa-laptop`}   title="Desktop Screens" data-options="large-options"></button>
                    <button key="desktop" onClick={changeTab} className={`btn square tiny light col far fa-desktop`}  title="xLarge Screens"  data-options="xlarge-options"></button>
                </div>
                {/*===> Options Tabs <===*/}
                <div className='options-list'>
                    {/*===> Small <====*/}
                    <div className={`flexbox small-options`}>
                        {/*===> Options Types <====*/}
                        <div className='options-tabs fluid px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20'>
                            <button key="padding" onClick={changeTab} className={`btn tiny outline primary col`} data-options="padding-size">Padding Size</button>
                            <button key="margin" onClick={changeTab} className={`btn tiny outline light col`} data-options="margin-size">Margin Size</button>
                        </div>
                        {/*===> Options Types Panels <====*/}
                        <div className='options-list'>
                            {/*===> Padding <====*/}
                            <div className={`flexbox padding-size`}>
                                {/*=== is Combined ===*/}
                                <ToggleControl key="is-combined" label="Combined Size" checked={options_list.small.padding[1]} onChange={set_combined} />

                                {/*=== Combined Size ===*/}

                            </div>
                            {/*===> Margin <====*/}
                            <div className={`flexbox margin-size hidden`}>
                                SMALL Options [Margin]
                            </div>
                        </div>
                        {/*===> End Options Types <====*/}
                    </div>
                    {/*===> Medium <====*/}
                    <div className={`flexbox medium-options hidden`}>
                        {/*===> Options Types <====*/}
                        <div className='options-tabs fluid px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20'>
                            <button key="padding" onClick={changeTab} className={`btn tiny outline primary col`} data-options="padding-size">Padding Size</button>
                            <button key="margin" onClick={changeTab} className={`btn tiny outline light col`} data-options="margin-size">Margin Size</button>
                        </div>
                        {/*===> Options Types Panels <====*/}
                        <div className='options-list'>
                            {/*===> Padding <====*/}
                            <div className={`flexbox padding-size`}>
                                Medium Options [Padding]
                            </div>
                            {/*===> Margin <====*/}
                            <div className={`flexbox margin-size hidden`}>
                                Medium Options [Margin]
                            </div>
                        </div>
                        {/*===> End Options Types <====*/}
                    </div>
                    {/*===> Large <====*/}
                    <div className={`flexbox large-options hidden`}>
                        {/*===> Options Types <====*/}
                        <div className='options-tabs fluid px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20'>
                            <button key="padding" onClick={changeTab} className={`btn tiny outline primary col`} data-options="padding-size">Padding Size</button>
                            <button key="margin" onClick={changeTab} className={`btn tiny outline light col`} data-options="margin-size">Margin Size</button>
                        </div>
                        {/*===> Options Types Panels <====*/}
                        <div className='options-list'>
                            {/*===> Padding <====*/}
                            <div className={`flexbox padding-size`}>
                                Large Options [Padding]
                            </div>
                            {/*===> Margin <====*/}
                            <div className={`flexbox margin-size hidden`}>
                                Large Options [Margin]
                            </div>
                        </div>
                        {/*===> End Options Types <====*/}
                    </div>
                    {/*===> xLarge <====*/}
                    <div className={`flexbox xlarge-options hidden`}>
                        {/*===> Options Types <====*/}
                        <div className='options-tabs fluid px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20'>
                            <button key="padding" onClick={changeTab} className={`btn tiny outline primary col`} data-options="padding-size">Padding Size</button>
                            <button key="margin" onClick={changeTab} className={`btn tiny outline light col`} data-options="margin-size">Margin Size</button>
                        </div>
                        {/*===> Options Types Panels <====*/}
                        <div className='options-list'>
                            {/*===> Padding <====*/}
                            <div className={`flexbox padding-size`}>
                                XL Options [Padding]
                            </div>
                            {/*===> Margin <====*/}
                            <div className={`flexbox margin-size hidden`}>
                                XL Options [Margin]
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