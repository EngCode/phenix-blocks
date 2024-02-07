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
import PhenixBackground from '../colors/background';

//===> Component <===//
export default class BorderSet extends Component {
    render () {
        //===> Properties <===//
        const {attributes, options, mainSetter, screen, attrSetter, objectSetter, setAttributes} = this.props;
        const PhenixBlocks = window.PhenixBlocks;

        //===> Reset border <===//
        const reset = () => {
            //==> Set Value <==//
            const newAttributes = {
                ...attributes.style,
                [`border-top${screen}`]: "",
                [`border-start${screen}`]: "",
                [`border-end${screen}`]: "",
                [`border-bottom${screen}`]: ""
            };

            attrSetter({ ...attributes, "style": newAttributes });
        };

        //===> Value Setter <===//
        const setValue = (target) => {
            //==> Checker <===//
            let newAttributes = {},
                propX = ["border-start", "border-end"],
                propY = ["border-top", "border-bottom"],
                isX = propX.some(opt => target.getAttribute('name').includes(opt)),
                isY = propY.some(opt => target.getAttribute('name').includes(opt));

            //===> Correct the New Attributes <===//
            if (isX) {
                if (attributes.style[`bound-border-x${screen}`]) {
                    newAttributes = {...attributes.style, [`border-start${screen}`]: parseInt(target.value), [`border-end${screen}`]: parseInt(target.value)};
                } else {
                    newAttributes = {...attributes.style, [`${target.getAttribute('name')}`]: parseInt(target.value)};
                }
            }

            else if (isY) {
                if (attributes.style[`bound-border-y${screen}`]) {
                    newAttributes = {...attributes.style, [`border-top${screen}`]: parseInt(target.value), [`border-bottom${screen}`]: parseInt(target.value)};
                } else {
                    newAttributes = {...attributes.style, [`${target.getAttribute('name')}`]: parseInt(target.value)};
                }
            }

            //==> Set Value <==//
            attrSetter({ ...attributes, "style": newAttributes });
        };

        //===> Output <===//
        return <div className={`position-controller mgx-auto`}>
            {/*===> Other Options <===*/}
            {!screen || screen !== "" ? <>
                <div className='row gpx-15 divider-b pdb-10 mt-15 position-rv'>
                    {/*===> Column <===*/}
                    <div className='col col-6'>
                        {/*===> Border Style <===*/}
                        <PhenixSelect name="border-style" placeholder={__("Style", "pds-blocks")} className={`mb-10 weight-medium`} value={attributes.style['border-style']} onChange={mainSetter} options={PhenixBlocks.dataLists.styles.border_styles} />
                    </div>
                    {/*===> Column <===*/}
                    <div className='col col-6'>
                        {/*===> Border Style <===*/}
                        <PhenixBackground key={`border-color`}
                            isSmall={true}
                            colorsOnly={true}
                            customOnly={true}
                            onChange={(value) => objectSetter(value, "", "style", "border-color", attributes, setAttributes)}
                            type={attributes.style['border-color']?.type || "color"}
                            value={attributes.style['border-color']?.value || ""}
                            rotate={attributes.style['border-color']?.rotate || null} 
                        />
                    </div>
                </div>
            </>:null}
            {/*===> Bound X <===*/}
            <div className='position-rv'>
                <OptionControl key={`bound-border-x${screen}`} name={`bound-border-x${screen}`} checked={attributes.style[`bound-border-x${screen}`]} value={"true"} onChange={(target) => mainSetter(target, screen?screen:"")} type='button-checkbox' className="tiny position-ab pos-top-0 pos-end-0">
                    <span className='btn bg-transparent tiny fs-15 border-1 border-dashed radius-sm border-alpha-10 square far fa-arrows-left-right tooltip-bottom' data-title={__("Bound Start/End", "pds-blocks")}></span>
                </OptionControl>
                {/*===> Bound Y <===*/}
                <OptionControl key={`bound-border-y${screen}`} name={`bound-border-y${screen}`} checked={attributes.style[`bound-border-y${screen}`]} value={"true"} onChange={(target) => mainSetter(target, screen?screen:"")} type='button-checkbox' className="tiny position-ab pos-top-0 pos-start-0">
                    <span className='btn bg-transparent tiny fs-15 border-1 border-dashed radius-sm border-alpha-10 square far fa-arrows-up-down tooltip-bottom' data-title={__("Bound Top/Bottom", "pds-blocks")}></span>
                </OptionControl>

                {/*===> Top Controller <===*/}
                <div className='mgx-auto mb-15' style={{width: 100}}>
                    <PhenixNumber key={`border-top${screen}`} name={`border-top${screen}`} onChange={setValue} value={attributes.style[`border-top${screen}`] || 0} min={0} max={250} steps={1} />
                </div>
                {/*===> X Controls <===*/}
                <div className={`flexbox align-between align-center-y mb-15`}>
                    {/*===> Start Button <===*/}
                    <div style={{width: 100}}>
                        <PhenixNumber key={`border-start${screen}`} name={`border-start${screen}`} onChange={setValue} value={attributes.style[`border-start${screen}`] || 0} min={0} max={250} steps={1} />
                    </div>
                    {/*===> Reset Button <===*/}
                    <button key={`reset-border${screen}`} name={`reset-border${screen}`} onClick={reset} className='btn square far fa-redo bg-transparent tiny'></button>
                    {/*===> End Button <===*/}
                    <div style={{width: 100}}>
                        <PhenixNumber key={`border-end${screen}`} name={`border-end${screen}`} onChange={setValue} value={attributes.style[`border-end${screen}`] || 0} min={0} max={250} steps={1} />
                    </div>
                </div>
                {/*===> Bottom Controller <===*/}
                <div className='mgx-auto' style={{width: 100}}>
                    <PhenixNumber key={`border-bottom${screen}`}  name={`border-bottom${screen}`} onChange={setValue} value={attributes.style[`border-bottom${screen}`] || 0} min={0} max={250} steps={1} />
                </div>
            </div>
        </div>
    }
}