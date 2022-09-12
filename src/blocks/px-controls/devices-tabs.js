/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/

//===> WordPress Modules <===//
import {Component} from '@wordpress/element';

import {
    PanelBody,
    SelectControl,
    ToggleControl
} from '@wordpress/components';

//===> Phenix Background <===//
export default class FlexAlignment extends Component {
    render () {
        //===> Properties <===//
        const {
            value,
            onChange
        } = this.props;

        //===> Options Changer <===//
        const changeTab = (clicked) => {
            //===> Option Data <===//
            let element = Phenix(clicked.target),
                parent  = element.ancestor('.options-tabs'),
                optionsList = Phenix(parent).next('.options-list'),
                currentActive = Phenix(parent.querySelector('.primary')),
                currentType = `${element[0].getAttribute('data-options')}-options`,
                targetElement = optionsList.querySelector(`.${currentType}`);

            //===> Change Active <===//
            currentActive.addClass('light').removeClass('primary');
            element.addClass('primary').removeClass('light');

            //===> Show Options <===//
            optionsList.querySelector('.flexbox:not(.hidden)')?.classList.add('hidden');
            Phenix(targetElement).removeClass('hidden');
        };

        //===> Component Output <===//
        return (
            <div className='px-gb-component'>
                {/*=== Flow Reverse ===*/}
                <ToggleControl key="align-flow" label="Flow Reverse ?" checked={isReversed()} onChange={setFlow}/>
                {/* Divider */}
                <span className='display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
                {/*===> Responsive Devices <===*/}
                <div className='options-tabs px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20'>
                    <button key="mobile" onClick={changeTab} className={`btn square tiny primary col far fa-mobile`} title="Mobile Screens"  data-options="small"></button>
                    <button key="tablet" onClick={changeTab} className={`btn square tiny light col far fa-tablet`}   title="Tablet Screens"  data-options="medium"></button>
                    <button key="laptop" onClick={changeTab} className={`btn square tiny light col far fa-laptop`}   title="Desktop Screens" data-options="large"></button>
                    <button key="desktop" onClick={changeTab} className={`btn square tiny light col far fa-desktop`}  title="xLarge Screens"  data-options="xlarge"></button>
                </div>
                {/*===> Options Tabs <===*/}
                <div className='options-list'>
                    {/*===> Small <====*/}
                    <div className={`flexbox small-options`}>
                        
                    </div>
                    {/*===> Medium <====*/}
                    <div className={`flexbox medium-options hidden`}>

                    </div>
                    {/*===> Large <====*/}
                    <div className={`flexbox large-options hidden`}>

                    </div>
                    {/*===> xLarge <====*/}
                    <div className={`flexbox xlarge-options hidden`}>

                    </div>
                    {/*===> xLarge <====*/}
                </div>
                {/*===> // Options Tabs <===*/}
            </div>
        )
    }
}