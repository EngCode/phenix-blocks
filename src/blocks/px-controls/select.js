//====> .Dependencies. <====//
import React, { useState, useMemo, useEffect, useCallback } from '@wordpress/element';

//===> Phenix Form Control <===//
const PhenixSelect = (props) => {
    //===> Component View Script Function <===\\
    useEffect(() => {
        window.PhenixBlocks.componentsBuilder();
    }, []);

    //===> initial state <===//
    const [state, setState] = useState({});

    //===> Properties <===//
    const {name, type, size, label, value, options, multiple, onChange, className, placeholder, search } = props;
    const uniqueKey = `pds-select-controller`;

    //===> Change Value <===//
    const setValue = useCallback((event) => {
        return onChange(event.target);
    }, [onChange]);

    //===> Define Element Attributes <===//
    const attributes = useMemo(() => {
        let attrs = { onChange: setValue };
        if (search) attrs['data-search'] = 1;
        if (multiple) attrs.multiple = multiple;
        if (placeholder) attrs['data-placeholder'] = placeholder;
        return attrs;
    }, [setValue, search, multiple, placeholder]);

    //===> Get Options List <===//
    const options_list = useMemo(() => {
        let list = [];
        if (Array.isArray(options) && !options[0].type) {
            //===> Normal List of Options <===//
            options.forEach(item => {
                list.push(<option key={item.value} value={item.value}>{`${item.label}`}</option>);
            });
        } else if (options[0] && options[0].type) {
            list = options;
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
                list.push(options_group);
            });
        }
        return list;
    }, [options]);

    //===> Render Component <===//
    return <>
        {/*===> Control Label <===*/}
        {label?<label className='tx-capitalize fs-13' style={{marginBottom: 5}}>{`${label}`}</label>:null}

        {/*===> Control Element <===*/}
        <div key={`select-wrapper`} className={`px-select ${className ? className : ""}`} data-value={value}>
            <select key={`select-element`} name={name} defaultValue={value} className={`px-select pds-tm-control form-control ${size ? size : "small"} radius-md`} {...attributes}>{options_list}</select>
        </div>
    </>
}

export default PhenixSelect;