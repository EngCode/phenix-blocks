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
        const PhenixBlocks = window.PhenixBlocks.dataLists.styles;
        const zindex_options = PhenixBlocks.zindex_options.map(opt => ({ ...opt, value: `${opt.value}${screen}` }));
        const position_options = PhenixBlocks.position_options.map(opt => ({ ...opt, value: `${opt.value}${screen}` }));
        const preset_positions = PhenixBlocks.preset_positions.map(opt => ({ ...opt, value: `${opt.value}${screen}` }));

        //===> Reset position <===//
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

        //===> Value Setter <===//
        const setValue = (target) => {
            //==> Checker <===//
            let newAttributes = {},
                propX = ["pos-start", "pos-end"],
                propY = ["pos-top", "pos-bottom"],
                isX = propX.some(opt => target.getAttribute('name').includes(opt)),
                isY = propY.some(opt => target.getAttribute('name').includes(opt));

            //===> Correct the New Attributes <===//
            if (isX) {
                if (attributes.style[`bound-position-x${screen}`]) {
                    newAttributes = {...attributes.style, [`pos-start${screen}`]: parseInt(target.value), [`pos-end${screen}`]: parseInt(target.value)};
                } else {
                    newAttributes = {...attributes.style, [`${target.getAttribute('name')}`]: parseInt(target.value)};
                }
            }

            else if (isY) {
                if (attributes.style[`bound-position-y${screen}`]) {
                    newAttributes = {...attributes.style, [`pos-top${screen}`]: parseInt(target.value), [`pos-bottom${screen}`]: parseInt(target.value)};
                } else {
                    newAttributes = {...attributes.style, [`${target.getAttribute('name')}`]: parseInt(target.value)};
                }
            }

            //==> Set Value <==//
            attrSetter({ ...attributes, "style": newAttributes });
        };

        //===> Output <===//
        return <div className={`position-controller mgx-auto position-rv`}>
            {/*===> Bound X <===*/}
            <OptionControl key={`bound-position-x${screen}`} name={`bound-position-x${screen}`} checked={attributes.style[`bound-position-x${screen}`]} value={"true"} onChange={(target) => mainSetter(target, screen?screen:"")} type='button-checkbox' className="tiny position-ab pos-top-0 pos-end-0">
                <span className='btn bg-transparent tiny fs-15 border-1 border-dashed radius-sm border-alpha-10 square far fa-arrows-left-right tooltip-bottom' data-title={__("Bound Start/End", "pds-blocks")}></span>
            </OptionControl>
            {/*===> Bound Y <===*/}
            <OptionControl key={`bound-position-y${screen}`} name={`bound-position-y${screen}`} checked={attributes.style[`bound-position-y${screen}`]} value={"true"} onChange={(target) => mainSetter(target, screen?screen:"")} type='button-checkbox' className="tiny position-ab pos-top-0 pos-start-0">
                <span className='btn bg-transparent tiny fs-15 border-1 border-dashed radius-sm border-alpha-10 square far fa-arrows-up-down tooltip-bottom' data-title={__("Bound Top/Bottom", "pds-blocks")}></span>
            </OptionControl>
            
            {/*===> Top Controller <===*/}
            <div className='mgx-auto mb-15' style={{width: 100}}>
                <PhenixNumber key={`pos-top${screen}`} name={`pos-top${screen}`} onChange={setValue} value={attributes.style[`pos-top${screen}`] || 0} min={-2500} max={2500} steps={1} />
            </div>
            {/*===> X Controls <===*/}
            <div className={`flexbox align-between align-center-y mb-15`}>
                {/*===> Start Button <===*/}
                <div style={{width: 100}}>
                    <PhenixNumber key={`pos-start${screen}`} name={`pos-start${screen}`} onChange={setValue} value={attributes.style[`pos-start${screen}`] || 0} min={-2500} max={2500} steps={1} />
                </div>
                {/*===> Reset Button <===*/}
                <button key={`reset-position${screen}`} name={`reset-position${screen}`} onClick={reset} className='btn square far fa-redo bg-transparent tiny'></button>
                {/*===> End Button <===*/}
                <div style={{width: 100}}>
                    <PhenixNumber key={`pos-end${screen}`} name={`pos-end${screen}`} onChange={setValue} value={attributes.style[`pos-end${screen}`] || 0} min={-2500} max={2500} steps={1} />
                </div>
            </div>
            {/*===> Bottom Controller <===*/}
            <div className='mgx-auto' style={{width: 100}}>
                <PhenixNumber key={`pos-bottom${screen}`}  name={`pos-bottom${screen}`} onChange={setValue} value={attributes.style[`pos-bottom${screen}`] || 0} min={-2500} max={2500} steps={1} />
            </div>
            {/*===> Other Options <===*/}
            <div className='col-12 pdt-10 divider-t mt-15 row gpx-15'>
                <div className='mb-10 col'>
                    <PhenixSelect key={`position${screen}`} name={`position${screen}`} placeholder={__("Default", "pds-blocks")} label={__("Position Type", "pds-blocks")} value={attributes.style[`position${screen}`]} onChange={mainSetter} options={position_options} />
                </div>
                <div className='mb-10 col col-6'>
                    <PhenixSelect key={`position-index${screen}`} name={`z-index${screen}`} placeholder={__("Default", "pds-blocks")} label={__("Index Order", "pds-blocks")} value={attributes.style[`z-index${screen}`]} onChange={mainSetter} options={zindex_options} />
                </div>
                <div className='col col-6'>
                    <PhenixSelect key={`position-preset${screen}`} name={`position-preset${screen}`} placeholder={__("Default", "pds-blocks")} label={__("Preset Position", "pds-blocks")} value={attributes.style[`position-preset${screen}`]} onChange={mainSetter} options={preset_positions} />
                </div>
            </div>
            {this.props.children ? this.props.children : null}
        </div>
    }
}