//====> .Dependencies. <====//
import React from 'react';
import {Component} from '@wordpress/element';

//===> Phenix Form Control <===//
export default class PhenixInput extends Component {
    //===> States <===//
    state = {};

    //===> Force Render when Props Change <===//
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.value !== this.props.value);
    }

    render () {
        //===> Properties <===//
        const {name, type, size, label, value,  onChange, className, placeholder } = this.props;
        const uniqueKey = Date.now().toString(36) + Math.random().toString(36).substr(2, 5)+`-flexbox-${screen}-option`;

        //===> Change Value <===//
        const setValue = (event) => {
            return onChange(event.target);
        };

        //===> Define Element Attributes <===//
        let attributes = {
            onChange: setValue,
            type: type || "text",
            defaultValue: value || "",
            placeholder: placeholder || label || "",
        };

        //===> Render Component <===//
        return <>
            {/*===> Control Label <===*/}
            {label?<label className='tx-capitalize fs-13' style={{marginBottom: 5}}>{`${label}`}</label>:null}
            {/*===> Control Element <===*/}
            <input name={name} className={`form-control ${size ? size : "small"} radius-md ${className ? className : ""}`} {...attributes}/>
        </>
    }
}