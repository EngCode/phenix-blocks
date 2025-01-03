//====> .Dependencies. <====//
import { useCallback } from '@wordpress/element';

//===> Phenix Form Control <===//
const PhenixTextarea = (props) => {
    //===> Properties <===//
    const { name, type, size, label, value,  onChange, className, placeholder, style } = props;

    //===> Change Value <===//
    const setValue = useCallback((event) => {
        if (value !== event.target.value) return onChange(event.target);
    }, [value, onChange]);

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

export default PhenixTextarea;