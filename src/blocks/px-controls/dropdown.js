import React, { useEffect, Fragment } from '@wordpress/element';

const PxDropDown = ({
    label,
    button,
    support,
    dropList,
    children,
    className,
    dataPosition,
    title,
    key
}) => {
    //===> Component View Script Function <===\\
    useEffect(() => {
        window.PhenixBlocks.componentsBuilder();
    }, []);

    //===> Component Attributes <===\\
    const attributes = {};

    //===> Component Classes <===\\
    if (support?.includes("hover")) attributes["data-hover"] = "true";
    if (dataPosition) attributes["data-position"] = dataPosition;
    if (key) attributes.key = key;

    //===> Component Render <===\\
    return (
        <Fragment>
            {/* Dropdown Wrapper */}
            <div className={`px-dropdown pds-tm-control ${className ? className : ""}`} {...attributes}>
                {/* Toggle Button */}
                <button className={`px-toggle btn ${button} ${title ? "tooltip-bottom" : ""}`} data-title={title}>{label}</button>
                {/* Dropdown Target */}
                <ul className={`hidden px-dropdown-list reset-list bg-white radius-md radius-bottom bx-shadow-dp-2 border-1 border-alpha-10 border-solid ${dropList ? dropList : "fs-14 w-min-200"}`}>{children}</ul>
                {/* // Dropdown Target */}
            </div>
            {/* // Dropdown Wrapper */}
        </Fragment>
    );
};

export default PxDropDown;