/* eslint-disable jsx-a11y/anchor-has-content */

//===> Component Create <===//
export default function Container(props:{
    id?:string;
    size?:string;
    children?:any;
    flexbox?:string;
    wrapper?:string;
    className?:string;
}) {
    //===> Get Data <===//
    let attributes:any = {},
        options:string = `container`,
        Section:any = `${props.wrapper? props.wrapper : "div"}`;

    //===> add Options <===//
    if (props.id) attributes["id"] = props.id;
    if (props.size) options += `-${props.size}`;
    if (props.flexbox) options += ` flexbox ${props.flexbox}`;

    //===> Render Component <===//
    return (
        <Section className={props.className} {...attributes}>
            <div className={options}>{props.children ? props.children : "no Content Yet."}</div>
        </Section>
    )
}