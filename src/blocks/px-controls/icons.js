/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import {Component} from '@wordpress/element';
import {SelectControl} from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';

//===> Phenix Icons <===//
export default class PhenixIcons extends Component {
    //===> Render <===//
    render () {
        //===> Properties <===//
        const {
            type,
            label,
            value,
            icons,
            version,
            onChange
        } = this.props;

        //===> Returned Value <===//
        let options = {
            type: type,
            value: value
        };

        //===> Set Type <===//
        const set_value = clicked => {
            //===> Get Value <===//
            let button = clicked.target,
                theValue  = button?.getAttribute('data-value');

            //===> Set Value <===//
            options.value = theValue;

            //===> Return Options <===//
            return onChange(options);
        };

        const set_type = value => {
            //===> Set Value <===//
            options.type = value;

            //===> Return Options <===//
            return onChange(options);
        };

        //===> Buttons Creator <===//
        const makeButtons = (list, type) => {
            //===> Define Data <===//
            let buttonsList = [];

            //===> for each item <===//
            if(list) list.forEach((item) => buttonsList.push(<button key={`${item}`} onClick={set_value} title={item} data-value={item} className={`icon-btn-item ${type} ${item} reset-button ${value === item ? 'px-active bg-offwhite-primary' : ""}`} style={{"fontSize": "17px", "lineHeight": "24px", "width":"24px", "height":"24px", "borderRadius": "3px", "padding": 0}}></button>));

            //===> Return Buttons <===//
            return buttonsList;
        };

        //===> Colors Panel <===//
        const showPanel = clicked => {
            let button  = clicked.target,
                wrapper = Phenix(button).ancestor('.px-gb-component'),
                panel   = wrapper.querySelector(".options-list");

            //=== Show/Hide Panel ===//
            if (panel) {
                Phenix(button).toggleClass("px-active");
                Phenix(panel).toggleClass("px-active").slideToggle(300, 0, "flex");
            }
        };

        //===> Search in icons <===//
        const iconsFilter = changed => {
            //===> Define Data <===//
            let input = changed.target,
                value = input.value,
                options = Phenix(input).ancestor(".options-list"),
                buttons = options.querySelectorAll(".icon-btn-item");
            //===> Find the searched icon and hide the rest <===//
            buttons.forEach(button => button.getAttribute('data-value').includes(value) ? button.classList.remove("hidden") : button.classList.add("hidden"));
        };

        const icons_types = [
            { value: 'far',   label: 'Regular' },
            { value: 'fas',   label: 'Solid' },
            { value: 'fab',   label: 'Brands' }
        ]

        if (version.includes("pro")) {
            icons_types.push({ value: 'fal',   label: 'Light' });
            icons_types.push({ value: 'fad',   label: 'Duotone' });
        }

        if (version.includes("6")) {
            icons_types.push({ value: 'fa-sharp fa-regular',   label: 'Regular Sharp' });
            icons_types.push({ value: 'fa-sharp fa-solid',   label: 'Solid Sharp' });
        }

        //===> Component Design <===//
        return (
            <div className='px-gb-component position-rv mb-15'>
                {/*===> Toggle Button <===*/}
                <label className='mb-10 tx-UpperCase'>{label}</label>

                {/*===> Group <===*/}
                <div className='overflow-hidden form-control small flexbox border-alpha-25 mb-5 tx-align-start radius-md align-center-y pdx-0 flow-nowrap'>
                    {/*===> Panel Trigger */}
                    <button onClick={showPanel} className={`w-max-150 fs-13 col h-min-100 reset-button options-toggle flexbox flow-nowrap align-between align-center-y pdx-10 divider-e`} type="button">
                        <span className={`col tx-nowrap pde-5`} style={{"lineHeight": "20px"}}>
                            <span className={`pds-icon-preview inline-block me-5 radius-circle bg-alpha-05 ${type} ${value} position-rv`}></span>
                            {__("Replace", "phenix")}
                        </span>
                        <i className='fas fa-pencil fs-12 color-gray'></i>
                    </button>
                    {/*===> Type Select <===*/}
                    <SelectControl key="icons-type" value={type} onChange={set_type} options={icons_types}/>
                </div>
                {/*===> Panel <===*/}
                <div className={`overflow-y-auto flexbox options-list align-center tx-align-center px-scrollbar pdx-15 pdb-15 pdt-5 bg-white border-1 border-solid border-alpha-20 radius-md radius-bottom hidden fluid`} style={{gap:"10px", maxHeight: "220px"}}>
                    <input name="pds-icons-search" className='reset-input pdy-5 fs-12 divider-b fluid tx-align-center' onChange={iconsFilter} placeholder={__("Search in icons", "phenix")} />
                    {makeButtons(icons, type)}
                </div>
            </div>
        )
    }
}