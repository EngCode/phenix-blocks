/* eslint-disable jsx-a11y/anchor-has-content */
//====> .Dependencies. <====//
import React, { useEffect } from 'react';

//====> PDS : Components <====//
import Button from './button';
declare function Phenix(any:any):any;

//===> Component Create <===//
export default function Dropdown(props:{
    list?:any;
    trigger?:any;
    size?:string;
    type?:string;
    title?:string;
    children?:any;
    position?:string;
    className?:string;
}) {
    //===> Options <===//
    let attributes:any = {},
        triggerOptions:any = {};

    if(props.position) attributes["data-position"] = 'bottom, end';

    //===> Trigger [Options] <===//
    if(props.size) triggerOptions["size"] = props.size;
    if(props.type) triggerOptions["type"] = props.type;
    //===> ...Trigger... <===//
    if(props.trigger) {
        if(props.trigger.icon) triggerOptions["icon"] = props.trigger.icon;
        if(props.trigger.color) triggerOptions["color"] = props.trigger.color;
        if(props.trigger.title) triggerOptions["title"] = props.trigger.title;
        //===> Trigger [Class Names] <===//
        props.trigger.class ? triggerOptions["className"] = `px-toggle ${props.trigger.class}` : triggerOptions["className"] = "px-toggle";
    }

    //===> Initial Scripts <===//
    useEffect(() => {
        //===> Build Dropdown <===//
        Phenix(".px-dropdown").dropdown();
    }, []);

    //===> Render Component <===//
    return (<div className={`px-dropdown ${props.className ? props.className : ""}`} {...attributes}>
        {/*===> Toggle Button <===*/}
        <Button {...triggerOptions}>{props.trigger.label ? props.trigger.label : null}</Button>

        {/*===> Dropdown Target <===*/}
        <ul className={`px-dropdown-list reset-list ${props.list?.class ? props.list.class : ""}`}>
            {props.children ? props.children : ""}
        </ul>
        {/*===> // Dropdown Target <===*/}
    </div>)
}