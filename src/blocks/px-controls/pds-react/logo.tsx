/* eslint-disable jsx-a11y/anchor-has-content */

//===> Component Create <===//
export default function Logo(props:{
    src?:string;
    alt?:string;
    link?:string;
    width?:string;
    height?:string;
    className?:string;
    responsive?:string;
}) {
    //===> Render Component <===//
    return (
        <a href={props.link ? props.link : "/"} className={`logo ${props.className ? props.className : ""}`} title={props.alt ? props.alt : ""}>
            {/*===> Logo Image <===*/}
            <img src={props.src} alt={props.alt ? props.alt : ""} className={props.responsive ? "hidden-sm-down" : ""} width={props.width} height={props.height} />
            
            {/*===> Responsive Mode <===// */}
            {props.responsive ? 
                <img src={props.responsive} alt={props.alt ? props.alt : ""} className={props.responsive ? "hidden-md-up" : ""} width={props.height} height={props.height} />
            : null}
        </a>
    )
}