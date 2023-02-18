//====> .Dependencies. <====//
import React, { useEffect } from 'react';

//====> PDS : Components <====//
declare function Phenix(any:any):any;

//===> Phenix Form Control <===//
export default function OptionControl(props:{
    name?:string;
    type?:string;
    onClick?:any;
    children?:any;
    onChange?:any;
    value?:boolean;
    required?:boolean;
    className?:string;
    placeholder?:string;
}) {
    //===> Get Data <===//
    let options = `option-control flexbox align-between align-center-y`,
        attributes:any = {onChange: props.onChange};

    //===> Custom Classes <===//
    if (props.className) options += ` ${props.className}`;

    //===> add Options <===//
    if (props.required) attributes.required = true;

    //===> Check if is On <===//
    if (props.value === true) attributes.defaultChecked = true;

    //===> Initial Scripts <===//
    useEffect(() => {
        //====> Menu Build <====//
        Phenix(document).utilities({type: "form"});
    }, []);

    //===> Render Component <===//
    return (<label className={options} data-type={props.type?.includes("switch") ? "switch" : props.type}>
        <input type={props.type?.replace("switch-","")} name={props.name} {...attributes} />
        {props.children}
        {props.type?.includes("switch") ? <span className="switch"></span> : null}
    </label>)
}