//====> .Dependencies. <====//
import {Component} from '@wordpress/element';
import PhenixComponentsBuilder from './panel-scripts';

//===> Phenix Form Control <===//
export default class PxDropDown extends Component {
    //===> States <===//
    state = {};

    //===> Component Rendered Hooks <===//
    componentDidMount() { PhenixComponentsBuilder(); };
    componentDidUpdate() { PhenixComponentsBuilder(); };

    render () {
        //===> Properties <===//
        const {
            label,
            button,
            support,
            dropList,
            children,
            className,
            dataPosition,
            title,
        } = this.props;

        const attributes = {};


        if (support?.includes("hover")) attributes["data-hover"] = "true";
        if (dataPosition) attributes["data-position"] = dataPosition;
        if (this.props.key) attributes.key = this.props.key;

        //===> Render Component <===//
        return (<>
            {/* Dropdown Wrapper */}
            <div className={`px-dropdown pds-tm-control ${className ? className : ""}`} {...attributes}>
                {/* Toggle Button */}
                <button className={`px-toggle btn ${button} ${title ? "tooltip-bottom" : ""}`} data-title={title}>{label}</button>
                {/* Dropdown Target */}
                <ul className={`hidden px-dropdown-list reset-list bg-white radius-md radius-bottom bx-shadow-dp-2 border-1 border-alpha-10 border-solid ${dropList ? dropList : "fs-14 w-min-200"}`}>{children}</ul>
                {/* // Dropdown Target */}
            </div>
            {/* // Dropdown Wrapper */}
        </>)
    }
}