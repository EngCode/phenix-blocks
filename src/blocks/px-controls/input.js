//===> WordPress Modules <===//
import React, { useCallback } from '@wordpress/element';

//===> Phenix Form Control <===//
const PhenixInput = (props) => {
    //===> Properties <===//
    const {name, type, size, label, value,  onChange, className, placeholder } = props;

    //===> Change Value <===//
    const setValue = useCallback((event) => {
        if (value !== event.target.value) return onChange(event.target);
    }, [value, onChange]);

    //===> Define Element Attributes <===//
    const attributes = {
        onBlur: setValue,
        type: type || "text",
        defaultValue: value || "",
        placeholder: placeholder || label || "",
    };;

    //===> Render Component <===//
    return (<>
        {/*===> Control Label <===*/}
        {label && <label className='tx-capitalize fs-13' style={{ marginBottom: 5 }}>{label}</label>}
        {/*===> Control Element <===*/}
        <input name={name} className={`form-control ${size ? size : "small"} radius-md ${className ? className : ""}`} {...attributes}/>
    </>);
}

export default PhenixInput;