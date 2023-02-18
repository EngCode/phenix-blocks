//====> .Dependencies. <====//
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

//====> PDS : Components <====//
declare function Phenix(any:any):any;

//===> Phenix Form Control <===//
export default function FormControl(props:{
    name?:string;
    type?:string;
    size?:string;
    icon?:string;
    hint?:string;
    label?:string;
    required?:boolean;
    className?:string;
    placeholder?:string;
    wrapperClass?:string;
    
    value?:any;
    onInput?:any;
    onChange?:any;
}) {
    //===> Define Data <===//
    const { t, i18n } = useTranslation();

    //===> Get Data <===//
    let options = `form-control fs-13`,
        wrapper = props.wrapperClass,
        attributes:any = {
            value: props.value,
            autoComplete: "on",
            onInput: props.onInput,
            onChange: props.onChange,
        };

    //===> Custom Classes <===//
    if (props.className) options += ` ${props.className}`;

    //===> add Options <===//
    if (props.size) options += ` ${props.size}`;
    if (props.required) attributes.required = true;

    //===> Layout Template <===//
    let layoutTemplate = () => (<>
        {/*===> Label <===*/}
        {props.label ? <label className={`mb-10 fs-14 ${props.required ? "required-star" : null}`}>{props.label}</label> : null}

        {/*===> Form Control <===*/}
        {props.type !== 'textarea' ? 
            <input name={props.name} type={props.type ? props.type : "text"} placeholder={props.placeholder} className={options} {...attributes} />
            :
            <textarea name={props.name} placeholder={props.placeholder} className={options} {...attributes}>{attributes.value}</textarea>
        }

        {/*===> Control Hint <===*/}
        {props.hint ? <p className="fs-12 color-gray mt-5">{props.hint}</p> : null}
    </>)

    //===> Initial Scripts <===//
    useEffect(() => {
        //====> Phenix Utilities <====//
        Phenix(document).utilities({type: "form"});
    }, []);

    //===> Translation Scripts <===//
    useEffect(() => {
        //====> Phenix Utilities <====//
        Phenix(document).utilities({type: "form"});
    }, [i18n, t]);

    //===> Render Component <===//
    return (<>
        {props.wrapperClass || props.icon ? <div className={`control-wrapper ${wrapper}`}>{layoutTemplate()}</div> : layoutTemplate() }
    </>)
}