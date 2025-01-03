//====> .Dependencies. <====//
import React, { useMemo, useEffect, useCallback } from '@wordpress/element';

//===> Phenix Form Control <===//
const PhenixSelect = (props) => {
    //===> Component View Script Function <===\\
    useEffect(() => {
        window.PhenixBlocks.componentsBuilder();
    }, []);

    //===> Properties <===//
    const {name, type, size, label, value, options, multiple, onChange, className, placeholder, search } = props;

    //===> Change Value <===//
    const setValue = useCallback((event) => {
        return onChange(event.target);
    }, [onChange]);

    //===> Define Element Attributes <===//
    const attributes = useMemo(() => {
        //===> Define Element Attributes <===//
        let attrs = { onChange: setValue };
        //===> Add Attributes <===//
        if (search) attrs['data-search'] = 1;
        if (multiple) attrs.multiple = multiple;
        if (placeholder) attrs['data-placeholder'] = placeholder;
        //===> Return Attributes <===//
        return attrs;
    }, [setValue, search, multiple, placeholder]);

    //===> Get Options List <===//
    const options_list = useMemo(() => {
        //===> Define the Options List <===//
        let list = [];

        //===> Check if Array of Elements <===//
        if (Array.isArray(options) && options.length > 1 && options[1].type) {
            //===> Fix the Default <===//
            if (!options[0].type) options[0] = <option key={0} value={options[0].value}>{`${options[0].label}`}</option>;

            //===> Add Options to the List <===//
            list = options;
        }
        //===> Grouped Options <===//
        else if (typeof options === 'object' && !Array.isArray(options)) {
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
        //===> Normal Options <===//
        else {
            options.forEach(item => {
                list.push(<option key={item.value} value={item.value}>{`${item.label}`}</option>);
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