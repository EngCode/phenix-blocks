//====> .Dependencies. <====//
import React, { useState, useMemo, useEffect, useCallback } from '@wordpress/element';

//===> Phenix Form Control <===//
const OptionControl = (props) => {
    //===> Properties <===//
    const {name, type, value, checked, onChange, children, required, className} = props;

    //===> Change Value <===//
    const setValue = useCallback((event) => {
        return onChange(event.target);
    }, [onChange]);

    //===> Define Data <===//
    let options = `fs-12 option-control flexbox align-center-y`,
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

export default OptionControl;