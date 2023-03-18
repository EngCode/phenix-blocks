//====> .Dependencies. <====//
import {Component} from '@wordpress/element';
import { useState, useEffect } from '@wordpress/element';

//===> Phenix Form Control <===//
export default class OptionControl extends Component {
    //===> States <===//
    state = {};

    render () {
        //===> Properties <===//
        const {
            name,
            type,
            value,
            checked,
            onChange,
            children,
            required,
            className
        } = this.props;

        //===> Change Value <===//
        const setValue = (event) => {
            return onChange(event.target);
        };

        //===> Define Data <===//
        let options = `option-control flexbox align-center-y`,
            attributes = {onChange: setValue};

        //===> Custom Classes <===//
        if (className) options += ` ${className}`;

        //===> Check if is On <===//
        attributes.defaultChecked = checked;

        //===> add Options <===//
        if (required) attributes.required = true;
        if (value) attributes.value = value;

        //===> Render Component <===//
        return (<label className={options} data-type={type?.includes("switch") ? "switch" : type.includes("button") ? "button" : type}>
            <input type={type?.replace("switch-","").replace("button-", "")} name={name} {...attributes} />
            {type?.includes("switch") ? <span className="switch"></span> : null}
            {children}
        </label>)
    }
}