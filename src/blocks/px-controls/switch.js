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
            onChange,
            children,
            required,
            className
        } = this.props;

        //===> Change Value <===//
        const setValue = (event) => {
            return onChange(event.target.checked);
        };

        //===> Define Data <===//
        let options = `option-control flexbox align-between align-center-y`,
            attributes = {onChange: setValue};

        //===> Custom Classes <===//
        if (className) options += ` ${className}`;

        //===> add Options <===//
        if (required) attributes.required = true;

        //===> Check if is On <===//
        if (value === true) attributes.defaultChecked = true;

        //===> Render Component <===//
        return (<label className={options} data-type={type?.includes("switch") ? "switch" : type}>
            <input type={type?.replace("switch-","")} name={name} {...attributes} />
            {children}
            {type?.includes("switch") ? <span className="switch"></span> : null}
        </label>)
    }
}