/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import {Component} from '@wordpress/element';

//===> Phenix Background <===//
export default class ScreensTabs extends Component {
    //===> States <===//
    state = {screen : "none"};

    render () {
        //===> Properties <===//
        const {
            small,
            large,
            xlarge,
            medium,
        } = this.props;

        let screenContent = () => {};

        //===> Initial Tab <===//
        if (this.state.screen === "none") {
            if(this.props.small) this.setState({screen: "small"});
            else if(this.props.medium) this.setState({screen: "medium"});
            else if(this.props.large) this.setState({screen: "large"});
            else if(this.props.xlarge) this.setState({screen: "xlarge"});
        } else {
            screenContent = this.props[`${this.state.screen}`];
        }

        //===> Options Changer <===//
        const changeTab = (clicked) => {
            //===> Option Data <===//
            let element = clicked.target;
            //===> Show Options <===//
            this.setState({screen: element.getAttribute('data-options')});
        };

        //===> Component Output <===//
        return (
            <div className='px-gb-component'>
                {/*===> Tabs Buttons <===*/}
                <div className='options-tabs px-group borderd-group divider-b border-alpha-15 mb-20'>
                    {this.props.small ? <button key="tablet" onClick={changeTab} className={`btn square tiny ${this.state.screen !== "small" ? "light" : "primary"} col far fa-tablet`} title={__("Tablet Screens", "phenix")}  data-options="small"></button> : null}
                    {this.props.medium ? <button key="tablet" onClick={changeTab} className={`btn square tiny ${this.state.screen !== "medium" ? "light" : "primary"} col far fa-tablet`} title={__("Tablet Screens", "phenix")}  data-options="medium"></button> : null}
                    {this.props.large ? <button key="laptop" onClick={changeTab} className={`btn square tiny ${this.state.screen !== "large" ? "light" : "primary"} col far fa-laptop`} title={__("Desktop Screens", "phenix")} data-options="large"></button> : null}
                    {this.props.xlarge ? <button key="desktop" onClick={changeTab} className={`btn square tiny ${this.state.screen !== "xlarge" ? "light" : "primary"} col far fa-desktop`} title={__("xLarge Screens", "phenix")}  data-options="xlarge"></button> : null}
                </div>
                {/*===> Options Tabs <===*/}
                <div className='options-list'>
                    {/*===> Screen <====*/}
                    <div className={`flexbox ${this.state.screen}-options`}>{screenContent(this.state.screen)}</div>
                </div>
                {/*===> // Options Tabs <===*/}
            </div>
        )
    }
}