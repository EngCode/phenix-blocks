/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import {Component} from '@wordpress/element';

//====> Phenix Modules <====//
import PhenixSelect from '../select';
import OptionControl from '../switch';
import PhenixNumber from "../number";

//===> Component <===//
export default class PositionSet extends Component {
    render () {
        //===> Properties <===//
        const {attributes, options, mainSetter, screen, attrSetter} = this.props;
        const uniqueKey = Date.now().toString(36) + Math.random().toString(36).substr(2, 5)+`-padding-option`;

        //===> Reset Padding <===//
        const reset = () => {
            //==> Set Value <==//
            const newAttributes = {
                ...attributes.style,
                [`pos-top${screen}`]: "",
                [`pos-start${screen}`]: "",
                [`pos-end${screen}`]: "",
                [`pos-bottom${screen}`]: ""
            };

            attrSetter({ ...attributes, "style": newAttributes });
        };

        //===> Output <===//
        return <div className={`padding-controller mgx-auto`}>
            {/*===> Top Controller <===*/}
            <div className='mgx-auto mb-15' style={{width: 100}}>
                <PhenixNumber name={`pos-top${screen}`} onChange={mainSetter} value={attributes.style[`pos-top${screen}`] || 0} min={0} max={30} steps={5} />
            </div>
            {/*===> X Controls <===*/}
            <div className={`flexbox align-between align-center-y mb-15`}>
                {/*===> Start Button <===*/}
                <div style={{width: 100}}>
                    <PhenixNumber name={`pos-start${screen}`} onChange={mainSetter} value={attributes.style[`pos-start${screen}`] || 0} min={0} max={30} steps={5} />
                </div>
                {/*===> Reset Button <===*/}
                <button name="reset-padding" onClick={reset} className='btn square far fa-redo bg-transparent tiny'></button>
                {/*===> End Button <===*/}
                <div style={{width: 100}}>
                    <PhenixNumber name={`pos-end${screen}`} onChange={mainSetter} value={attributes.style[`pos-end${screen}`] || 0} min={0} max={30} steps={5} />
                </div>
            </div>
            {/*===> Bottom Controller <===*/}
            <div className='mgx-auto' style={{width: 100}}>
                <PhenixNumber name={`pos-bottom${screen}`} onChange={mainSetter} value={attributes.style[`pos-bottom${screen}`] || 0} min={0} max={30} steps={5} />
            </div>
            {/*===> Other Options <===*/}
            {this.props.children ? this.props.children : null}
        </div>
    }
}