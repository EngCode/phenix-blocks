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
export default class PaddingSet extends Component {
    render () {
        //===> Properties <===//
        const {attributes, options, mainSetter, screen, attrSetter} = this.props;
        const uniqueKey = Date.now().toString(36) + Math.random().toString(36).substr(2, 5)+`-padding-option`;

        //===> Reset Padding <===//
        const reset = () => {
            //==> Set Value <==//
            const newAttributes = {
                ...attributes.style,
                [`pdt${screen}`]: "",
                [`pds${screen}`]: "",
                [`pde${screen}`]: "",
                [`pdb${screen}`]: ""
            };

            attrSetter({ ...attributes, "style": newAttributes });
        };

        //===> Output <===//
        return <div className={`padding-controller mgx-auto`}>
            {/*===> Top Controller <===*/}
            <div className='mgx-auto mb-15' style={{width: 100}}>
                <PhenixNumber key={`pdt${screen}`} name={`pdt${screen}`} onChange={mainSetter} value={attributes.style[`pdt${screen}`] || 0} min={-5} max={2500} steps={5} />
            </div>
            {/*===> X Controls <===*/}
            <div className={`flexbox align-between align-center-y mb-15`}>
                {/*===> Start Button <===*/}
                <div style={{width: 100}}>
                    <PhenixNumber key={`pds${screen}`} name={`pds${screen}`} onChange={mainSetter} value={attributes.style[`pds${screen}`] || 0} min={-5} max={2500} steps={5} />
                </div>
                {/*===> Reset Button <===*/}
                <button key={`reset-padding${screen}`} name={`reset-padding${screen}`} onClick={reset} className='btn square far fa-redo bg-transparent tiny'></button>
                {/*===> End Button <===*/}
                <div style={{width: 100}}>
                    <PhenixNumber key={`pde${screen}`} name={`pde${screen}`} onChange={mainSetter} value={attributes.style[`pde${screen}`] || 0} min={-5} max={2500} steps={5} />
                </div>
            </div>
            {/*===> Bottom Controller <===*/}
            <div className='mgx-auto' style={{width: 100}}>
                <PhenixNumber key={`pdb${screen}`} name={`pdb${screen}`} onChange={mainSetter} value={attributes.style[`pdb${screen}`] || 0} min={-5} max={2500} steps={5} />
            </div>
            {/*===> Other Options <===*/}
            {this.props.children ? this.props.children : null}
        </div>
    }
}