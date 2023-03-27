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
    state = {screen : this.props.sm ? "sm" : "md"};

    render () {
        //===> Properties <===//
        const {sm, lg, xl, md} = this.props;
        let screenContent = this.props[`${this.state.screen}`];

        //===> Options Changer <===//
        const changeTab = (clicked) => {
            //===> Option Data <===//
            let element = clicked.target;
            //===> Show Options <===//
            this.setState({screen: element.getAttribute('data-options')});
        };

        //===> Component Output <===//
        return (
            <div className='px-gb-tabs'>
                {/*===> Tabs Buttons <===*/}
                <div className='options-tabs px-group borderd-group divider-b border-alpha-15 mb-10'>
                    {this.props.sm ? <button key="mobile" onClick={changeTab} className={`btn square tiny ${this.state.screen !== "sm" ? "bg-alpha-05" : "primary"} col far fa-mobile`} title={__("Mobile Screens", "phenix")}  data-options="sm"></button> : null}
                    {this.props.md ? <button key="tablet" onClick={changeTab} className={`btn square tiny ${this.state.screen !== "md" ? "bg-alpha-05" : "primary"} col far fa-tablet`} title={__("Tablet Screens", "phenix")}  data-options="md"></button> : null}
                    {this.props.lg ? <button key="laptop" onClick={changeTab} className={`btn square tiny ${this.state.screen !== "lg" ? "bg-alpha-05" : "primary"} col far fa-laptop`} title={__("Desktop Screens", "phenix")} data-options="lg"></button> : null}
                    {this.props.xl ? <button key="desktop" onClick={changeTab} className={`btn square tiny ${this.state.screen !== "xl" ? "bg-alpha-05" : "primary"} col far fa-desktop`} title={__("xLarge Screens", "phenix")}  data-options="xl"></button> : null}
                </div>
                {/*===> Screen <====*/}
                <div className={`flexbox ${this.state.screen}-options`}>{screenContent(this.state.screen)}</div>
            </div>
        )
    }
}