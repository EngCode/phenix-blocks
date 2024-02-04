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
export default class MarginSet extends Component {
    render () {
        //===> Properties <===//
        const {attributes, options, mainSetter, screen, attrSetter} = this.props;
        const uniqueKey = Date.now().toString(36) + Math.random().toString(36).substr(2, 5)+`-margin-option`;

        //===> Reset Padding <===//
        const reset = () => {
            //==> Set Value <==//
            const newAttributes = {
                ...attributes.style,
                [`mt${screen}`]: "",
                [`ms${screen}`]: "",
                [`me${screen}`]: "",
                [`mb${screen}`]: ""
            };

            attrSetter({ ...attributes, "style": newAttributes });
        };

        //===> Output <===//
        return <div className={`margin-controller mgx-auto`}>
            {/*===> Top Controller <===*/}
            <div className='mgx-auto mb-15' style={{width: 100}}>
                <PhenixNumber key={`mt${screen}`} name={`mt${screen}`} onChange={mainSetter} value={attributes.style[`mt${screen}`] || 0} min={0} max={100} steps={5} />
            </div>
            {/*===> X Controls <===*/}
            <div className={`flexbox align-between align-center-y mb-15`}>
                {/*===> Start Button <===*/}
                <div style={{width: 100}}>
                    <PhenixNumber key={`ms${screen}`} name={`ms${screen}`} onChange={mainSetter} value={attributes.style[`ms${screen}`] || 0} min={0} max={100} steps={5} />
                </div>
                {/*===> Reset Button <===*/}
                <button key={`reset-margin${screen}`} name={`reset-margin${screen}`} onClick={reset} className='btn square far fa-redo bg-transparent tiny'></button>
                {/*===> End Button <===*/}
                <div style={{width: 100}}>
                    <PhenixNumber key={`me${screen}`} name={`me${screen}`} onChange={mainSetter} value={attributes.style[`me${screen}`] || 0} min={0} max={100} steps={5} />
                </div>
            </div>
            {/*===> Bottom Controller <===*/}
            <div className='mgx-auto' style={{width: 100}}>
                <PhenixNumber key={`mb${screen}`} name={`mb${screen}`} onChange={mainSetter} value={attributes.style[`mb${screen}`] || 0} min={0} max={100} steps={5} />
            </div>
            {/*===> Other Options <===*/}
            {this.props.children ? this.props.children : null}
        </div>
    }
}