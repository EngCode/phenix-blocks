/* eslint-disable jsx-a11y/anchor-has-content */

//===> Phenix Button <===//
export default function Button(props:{
    type?:string;
    size?:string;
    icon?:string;
    link?:string;
    title?:string;
    color?:string;
    onClick?:any;
    children?:any;
    className?:string;
    tabIndex?:number;
}) {
    //===> Get Data <===//
    let options = `btn`,
        attributes:any = {},
        buttonType = "button";

    //===> add Options <===//
    if (props.size) options += ` ${props.size}`;
    if (props.color) options += ` ${props.color}`;
    if (props.tabIndex) attributes['data-tab'] = props.tabIndex;

    //===> Custom Classes <===//
    if (props.className) options += ` ${props.className}`;

    //===> icon Mode <===//
    if (props.icon) options += `${props.type !== "icon" ? " btn-icon":" square"} ${props.icon}`;

    //===> Render Component <===//
    return (<>{buttonType !== "link" || "icon-link" ?
        //===> Button Type <===//
        <button type="button" className={options} onClick={props.onClick ? props.onClick : (e) => {}} title={props.title? props.title : props.children? props.children.toString() : null} tabIndex={0} {...attributes}>{props.children ? props.children : ""}</button>
        :
        //===> Links Type <===//
        <a href={props.link ? props.link : "#"} className={options} onClick={props.onClick ? props.onClick : (e) => {}} title={props.title? props.title : props.children? props.children.toString() : null} tabIndex={0} {...attributes}>{props.children ? props.children : ""}</a>
    }</>)
}