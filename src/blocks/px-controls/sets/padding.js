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

        //===> Value Setter <===//
        const setValue = (target) => {
            //==> Checker <===//
            let newAttributes = {},
                propX = ["pds", "pde"],
                propY = ["pdt", "pdb"],
                isX = propX.some(opt => target.getAttribute('name').includes(opt)),
                isY = propY.some(opt => target.getAttribute('name').includes(opt));

            //===> Correct the New Attributes <===//
            if (isX) {
                if (attributes.style[`bound-padding-x${screen}`]) {
                    newAttributes = {...attributes.style, [`pds${screen}`]: parseInt(target.value), [`pde${screen}`]: parseInt(target.value)};
                } else {
                    newAttributes = {...attributes.style, [`${target.getAttribute('name')}`]: parseInt(target.value)};
                }
            }

            else if (isY) {
                if (attributes.style[`bound-padding-y${screen}`]) {
                    newAttributes = {...attributes.style, [`pdt${screen}`]: parseInt(target.value), [`pdb${screen}`]: parseInt(target.value)};
                } else {
                    newAttributes = {...attributes.style, [`${target.getAttribute('name')}`]: parseInt(target.value)};
                }
            }

            //==> Set Value <==//
            attrSetter({ ...attributes, "style": newAttributes });
        };

        //===> Output <===//
        return <div className={`padding-controller mgx-auto position-rv`}>
            {/*===> Bound X <===*/}
            <OptionControl key={`bound-padding-x${screen}`} name={`bound-padding-x${screen}`} checked={attributes.style[`bound-padding-x${screen}`]} value={"true"} onChange={(target) => mainSetter(target, screen?screen:"")} type='button-checkbox' className="tiny position-ab pos-top-0 pos-end-0">
                <span className='btn bg-transparent tiny fs-15 border-1 border-dashed radius-sm border-alpha-10 square far fa-arrows-left-right tooltip-bottom' data-title={__("Bound Start/End", "pds-blocks")}></span>
            </OptionControl>
            {/*===> Bound Y <===*/}
            <OptionControl key={`bound-padding-y${screen}`} name={`bound-padding-y${screen}`} checked={attributes.style[`bound-padding-y${screen}`]} value={"true"} onChange={(target) => mainSetter(target, screen?screen:"")} type='button-checkbox' className="tiny position-ab pos-top-0 pos-start-0">
                <span className='btn bg-transparent tiny fs-15 border-1 border-dashed radius-sm border-alpha-10 square far fa-arrows-up-down tooltip-bottom' data-title={__("Bound Top/Bottom", "pds-blocks")}></span>
            </OptionControl>

            {/*===> Top Controller <===*/}
            <div className='mgx-auto mb-15' style={{width: 100}}>
                <PhenixNumber key={`pdt${screen}`} name={`pdt${screen}`} onChange={setValue} value={attributes.style[`pdt${screen}`] || 0} min={0} max={2500} steps={1} />
            </div>
            {/*===> X Controls <===*/}
            <div className={`flexbox align-between align-center-y mb-15`}>
                {/*===> Start Button <===*/}
                <div style={{width: 100}}>
                    <PhenixNumber key={`pds${screen}`} name={`pds${screen}`} onChange={setValue} value={attributes.style[`pds${screen}`] || 0} min={0} max={2500} steps={1} />
                </div>
                {/*===> Reset Button <===*/}
                <button key={`reset-padding${screen}`} name={`reset-padding${screen}`} onClick={reset} className='btn square far fa-redo bg-transparent tiny'></button>
                {/*===> End Button <===*/}
                <div style={{width: 100}}>
                    <PhenixNumber key={`pde${screen}`} name={`pde${screen}`} onChange={setValue} value={attributes.style[`pde${screen}`] || 0} min={0} max={2500} steps={1} />
                </div>
            </div>
            {/*===> Bottom Controller <===*/}
            <div className='mgx-auto' style={{width: 100}}>
                <PhenixNumber key={`pdb${screen}`} name={`pdb${screen}`} onChange={setValue} value={attributes.style[`pdb${screen}`] || 0} min={0} max={2500} steps={1} />
            </div>
            {/*===> Other Options <===*/}
            {this.props.children ? this.props.children : null}
        </div>
    }
}