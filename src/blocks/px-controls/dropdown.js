import React, { useEffect, Fragment } from '@wordpress/element';
import { DropdownMenu } from '@wordpress/components';

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
    useEffect(() => {
        window.PhenixBlocks.componentsBuilder();
    }, []); // Empty dependency array ensures this runs only once after the initial render

    const attributes = {};

    if (support?.includes("hover")) attributes["data-hover"] = "true";
    if (dataPosition) attributes["data-position"] = dataPosition;
    if (key) attributes.key = key;

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