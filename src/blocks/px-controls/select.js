//====> .Dependencies. <====//
import {Component} from '@wordpress/element';
import { useState, useEffect } from '@wordpress/element';

//====> Phenix Modules <====//
import PhenixComponentsBuilder from './panel-scripts';

//===> Phenix Form Control <===//
export default class PhenixSelect extends Component {
    //===> States <===//
    state = {};

    //===> Component Rendered Hook <===//
    componentDidMount() {
        //===> Create Time Loop to Find the Elements <===//
        PhenixComponentsBuilder();
    };

    render () {
        //===> Properties <===//
        const {name, type, size, label, value, options, multiple, onChange, className, placeholder, search } = this.props;

        //===> Change Value <===//
        const setValue = (event) => {
            return onChange(event.target);
        };

        //===> Define Element Attributes <===//
        let attributes = {onChange: setValue};

        //===> add Options <===//
        if (search) attributes['data-search'] = 1;
        if (value) attributes.defaultValue = value;
        if (multiple) attributes.multiple = multiple;
        if (placeholder) attributes['data-placeholder'] = placeholder;

        //===> Get Options List <===//
        let options_list = [];

        if (Array.isArray(options)) {
            //===> Normal Lost of Options <===//
            options.forEach(item => {
                options_list.push(<option key={item.value} value={item.value}>{`${item.label}`}</option>);
            });
        } else {
            //===> Grouped Options <===//
            Object.entries(options).forEach(([key, options]) => {
                //===> Define the Options List <===//
                let group_list = [];
                //===> Add Options to the Group <===//
                options.forEach(item => {
                    group_list.push(<option key={item.value} value={item.value}>{`${item.label}`}</option>);
                });
                //===> Create the Group <===//
                let options_group = <optgroup key={`${key}-group`} label={`${key}`}>{group_list}</optgroup>;
                //===> Add the Group <===//
                options_list.push(options_group);
            });
        }

        //===> Render Component <===//
        return <>
            {/*===> Control Label <===*/}
            <label className='mb-10 tx-capitalize fs-13'>{`${label}`}</label>

            {/*===> Control Element <===*/}
            <div className='px-select'>
                <select name={name} className={`px-select pds-tm-control form-control ${size ? size : "small"} radius-md`} {...attributes}>{options_list}</select>
            </div>
        </>
    }
}