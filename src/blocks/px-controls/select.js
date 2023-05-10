//====> .Dependencies. <====//
import React from 'react';
import {Component} from '@wordpress/element';

//====> Phenix Modules <====//
import PhenixComponentsBuilder from './panel-scripts';

//===> Phenix Form Control <===//
export default class PhenixSelect extends Component {
    //===> States <===//
    state = {};

    //===> Component Rendered Hooks <===//
    componentDidMount() { PhenixComponentsBuilder(); };
    componentDidUpdate() { PhenixComponentsBuilder(); };
    //===> Component Rendered when Props Change <===//
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.value !== this.props.value || nextProps.options !== this.props.options);
    }

    render () {
        //===> Properties <===//
        const {name, type, size, label, value, options, multiple, onChange, className, placeholder, search } = this.props;
        const uniqueKey = Date.now().toString(36) + Math.random().toString(36).substr(2, 5)+`-flexbox-${screen}-option`;

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

        if (Array.isArray(options) && !options[0].type) {
            //===> Normal Lost of Options <===//
            options.forEach(item => {
                options_list.push(<option key={item.value} value={item.value}>{`${item.label}`}</option>);
            });
        } else if (options[0] && options[0].type) {
            options_list = options;
        } else{
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
            {label?<label className='tx-capitalize fs-13' style={{marginBottom: 5}}>{`${label}`}</label>:null}

            {/*===> Control Element <===*/}
            <div key={`select-wrapper`} className={`px-select ${className ? className : ""}`}>
                <select key={`select-element`} name={name} className={`px-select pds-tm-control form-control ${size ? size : "small"} radius-md`} {...attributes}>{options_list}</select>
            </div>
        </>
    }
}