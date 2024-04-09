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

        //===> Reset <===//
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

        //===> Value Setter <===//
        const setValue = (target) => {
            //==> Checker <===//
            let newAttributes = {},
                propX = ["ms", "me"],
                propY = ["mt", "mb"],
                isX = propX.some(opt => target.getAttribute('name').includes(opt)),
                isY = propY.some(opt => target.getAttribute('name').includes(opt));

            //===> Correct the New Attributes <===//
            if (isX) {
                if (attributes.style[`bound-margin-x${screen}`]) {
                    newAttributes = {...attributes.style, [`ms${screen}`]: parseInt(target.value), [`me${screen}`]: parseInt(target.value)};
                } else {
                    newAttributes = {...attributes.style, [`${target.getAttribute('name')}`]: parseInt(target.value)};
                }
            }

            else if (isY) {
                if (attributes.style[`bound-margin-y${screen}`]) {
                    newAttributes = {...attributes.style, [`mt${screen}`]: parseInt(target.value), [`mb${screen}`]: parseInt(target.value)};
                } else {
                    newAttributes = {...attributes.style, [`${target.getAttribute('name')}`]: parseInt(target.value)};
                }
            }

            //==> Set Value <==//
            attrSetter({ ...attributes, "style": newAttributes });
        };

        //===> Output <===//
        return <div className={`margin-controller mgx-auto position-rv`}>
            {/*===> Bound X <===*/}
            <OptionControl key={`bound-margin-x${screen}`} name={`bound-margin-x${screen}`} checked={attributes.style[`bound-margin-x${screen}`]} value={"true"} onChange={(target) => mainSetter(target, screen?screen:"")} type='button-checkbox' className="tiny position-ab pos-top-0 pos-end-0">
                <span className='btn bg-transparent tiny fs-15 border-1 border-dashed radius-sm border-alpha-10 square far fa-arrows-left-right tooltip-bottom' data-title={__("Bound Start/End", "pds-blocks")}></span>
            </OptionControl>
            {/*===> Bound Y <===*/}
            <OptionControl key={`bound-margin-y${screen}`} name={`bound-margin-y${screen}`} checked={attributes.style[`bound-margin-y${screen}`]} value={"true"} onChange={(target) => mainSetter(target, screen?screen:"")} type='button-checkbox' className="tiny position-ab pos-top-0 pos-start-0">
                <span className='btn bg-transparent tiny fs-15 border-1 border-dashed radius-sm border-alpha-10 square far fa-arrows-up-down tooltip-bottom' data-title={__("Bound Top/Bottom", "pds-blocks")}></span>
            </OptionControl>

            {/*===> Top Controller <===*/}
            <div className='mgx-auto mb-15' style={{width: 100}}>
                <PhenixNumber key={`mt${screen}`} name={`mt${screen}`} onChange={setValue} value={attributes.style[`mt${screen}`] || 0} min={-2500} max={2500}  steps={5} />
            </div>
            {/*===> X Controls <===*/}
            <div className={`flexbox align-between align-center-y mb-15`}>
                {/*===> Start Button <===*/}
                <div style={{width: 100}}>
                    <PhenixNumber key={`ms${screen}`} name={`ms${screen}`} onChange={setValue} value={attributes.style[`ms${screen}`] || 0} min={-2500} max={2500}  steps={5} />
                </div>
                {/*===> Reset Button <===*/}
                <button key={`reset-margin${screen}`} name={`reset-margin${screen}`} onClick={reset} className='btn square far fa-redo bg-transparent tiny'></button>
                {/*===> End Button <===*/}
                <div style={{width: 100}}>
                    <PhenixNumber key={`me${screen}`} name={`me${screen}`} onChange={setValue} value={attributes.style[`me${screen}`] || 0} min={-2500} max={2500}  steps={5} />
                </div>
            </div>
            {/*===> Bottom Controller <===*/}
            <div className='mgx-auto' style={{width: 100}}>
                <PhenixNumber key={`mb${screen}`} name={`mb${screen}`} onChange={setValue} value={attributes.style[`mb${screen}`] || 0} min={-2500} max={2500}  steps={5} />
            </div>
            {/*===> Other Options <===*/}
            {this.props.children ? this.props.children : null}
        </div>
    }
}