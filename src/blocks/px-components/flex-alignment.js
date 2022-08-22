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
            flow,
            value,
            onChange
        } = this.props;

        //===> Alignment Buttons <===//
        const createAlignment = (screen) => {
            if (!screen) screen = "";
            {/*===> Responsive Devices <===*/}
            return (<>
                <label className='mb-10 fluid weight-medium'>Horizontal Align</label>
                <div className='px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20'>
                    <button onClick={setAlignment} title="Start" className={`btn small ${value.includes(`align${screen}-start-x`) ? 'bg-offwhite-smoke' : 'light'} col pxi pxi-align-x-start`} data-screen={screen} data-value={`align${screen}-start-x`}></button>
                    <button onClick={setAlignment} title="Center" className={`btn small ${value.includes(`align${screen}-center-x`) ? 'bg-offwhite-smoke' : 'light'} col pxi pxi-align-x-center`} data-screen={screen} data-value={`align${screen}-center-x`}></button>
                    <button onClick={setAlignment} title="End" className={`btn small ${value.includes(`align${screen}-end-x`) ? 'bg-offwhite-smoke' : 'light'} col pxi pxi-align-x-end`} data-screen={screen} data-value={`align${screen}-end-x`}></button>
                    <button onClick={setAlignment} title="Between" className={`btn small ${value.includes(`align${screen}-between`) ? 'bg-offwhite-smoke' : 'light'} col pxi pxi-align-x-between`} data-screen={screen} data-value={`align${screen}-between`}></button>
                    <button onClick={setAlignment} title="Around" className={`btn small ${value.includes(`align${screen}-around`) ? 'bg-offwhite-smoke' : 'light'} col pxi pxi-align-x-around`} data-screen={screen} data-value={`align${screen}-around`}></button>
                </div>
                <label className='mb-10 fluid weight-medium'>Vertical Align</label>
                <div className='px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20'>
                    <button onClick={setAlignment} title="Start" className={`btn small ${value.includes(`align${screen}-start-y`) ? 'bg-offwhite-smoke' : 'light'} col pxi pxi-align-y-start`} data-screen={screen} data-value={`align${screen}-start-y`}></button>
                    <button onClick={setAlignment} title="Center" className={`btn small ${value.includes(`align${screen}-center-y`) ? 'bg-offwhite-smoke' : 'light'} col pxi pxi-align-y-center`} data-screen={screen} data-value={`align${screen}-center-y`}></button>
                    <button onClick={setAlignment} title="End" className={`btn small ${value.includes(`align${screen}-end-y`) ? 'bg-offwhite-smoke' : 'light'} col pxi pxi-align-y-end`} data-screen={screen} data-value={`align${screen}-end-y`}></button>
                </div>
            </>)
        }

        //===> Set Alignment <===//
        const setAlignment = clicked => {
            //===> Element Data <===//
            let button = clicked.target,
                newVal = button.getAttribute('data-value'),
                other  = [],
                screen = button.getAttribute('data-screen') || '';

            //===> Get Sibling Values <===//
            button.parentNode.querySelectorAll('.btn').forEach(element => {
                other.push(element.getAttribute('data-value'));
            });

            /*===> if Current Value has Current Screen Point <===*/
            if (value.includes(screen)) value.split(' ').forEach(item => {
                //===> if the siblings has the item in it remove it <===//
                if (other.includes(item)) value.replace(item, '');
                //===> if the item is not in siblings add it <===//
                else if (item.length > 1) newVal = `${item} ${newVal}`;
            });
            
            /*===> else if its New Screen Point <===*/
            else newVal = `${value} ${newVal}`;

            //===> Return Options <===//
            return onChange(`${newVal}`);
        }

        //===> Default Flow <===//
        let isReversed = () => {
            if (value.includes('flow-reverse')) return true;
            else return false;
        };

        //===> Set Flow <===//
        const setFlow = toggle => {
            //===> Get Current Value <===//
            let current = value;

            //===> .if already reversed. <===//
            if (isReversed()) {
                current = current.replaceAll('flow-reverse');
            }
            //===> .if not make it. <===//
            else {
                current = `${value} flow-reverse`;
            }

            //===> Return Options <===//
            return onChange(current);  
        }

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
                <ToggleControl label="Flow Reverse ?" checked={isReversed()} onChange={setFlow}/>
                {/* Divider */}
                <span className='display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
                {/*===> Responsive Devices <===*/}
                <div className='options-tabs px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20'>
                    <button onClick={changeTab} className={`btn square tiny primary col far fa-mobile`} title="Mobile Screens"  data-options="small"></button>
                    <button onClick={changeTab} className={`btn square tiny light col far fa-tablet`}   title="Tablet Screens"  data-options="medium"></button>
                    <button onClick={changeTab} className={`btn square tiny light col far fa-laptop`}   title="Desktop Screens" data-options="large"></button>
                    <button onClick={changeTab} className={`btn square tiny light col far fa-desktop`}  title="xLarge Screens"  data-options="xlarge"></button>
                </div>
                {/*===> Options Tabs <===*/}
                <div className='options-list'>
                    {/*===> Small <====*/}
                    <div className={`flexbox small-options`}>
                        {createAlignment()}
                    </div>
                    {/*===> Medium <====*/}
                    <div className={`flexbox medium-options hidden`}>
                        {createAlignment('-md')}
                    </div>
                    {/*===> Large <====*/}
                    <div className={`flexbox large-options hidden`}>
                        {createAlignment('-lg')}
                    </div>
                    {/*===> xLarge <====*/}
                    <div className={`flexbox xlarge-options hidden`}>
                        {createAlignment('-xl')}
                    </div>
                    {/*===> xLarge <====*/}
                </div>
                {/*===> // Options Tabs <===*/}
            </div>
        )
    }
}