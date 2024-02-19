//====> .Dependencies. <====//
import React from 'react';
import {Component} from '@wordpress/element';

//===> Phenix Form Control <===//
export default class PhenixTextarea extends Component {
    //===> States <===//
    state = {};

    render () {
        //===> Properties <===//
        const {name, type, size, label, value,  onChange, className, placeholder, style } = this.props;
        const uniqueKey = `pds-textarea-option`;

        //===> Change Value <===//
        const setValue = (event) => {
            if (this.props.value !== event.target.value) return onChange(event.value);
        };

        //===> Define Element Attributes <===//
        let attributes = {
            style: style,
            onChange: setValue,
            defaultValue: value,
            placeholder: placeholder || label,
        };

        //===> Render Component <===//
        return <>
            {/*===> Control Label <===*/}
            {label?<label className='tx-capitalize fs-13' style={{marginBottom: 5}}>{`${label}`}</label>:null}
            {/*===> Control Element <===*/}
            <textarea name={name} className={`form-control ${size ? size : "small"} radius-md ${className ? className : ""}`} {...attributes}></textarea>
        </>
    }
}