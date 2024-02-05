/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import {Component} from '@wordpress/element';

//====> Phenix Modules <====//
import PhenixNumber from '../number';
import PhenixSelect from '../select';
import OptionControl from '../switch';
import PhenixColor from '../colors/text';
import PhenixBackground from '../colors/background';

//===> Options List
//=> text-colors, background, support

//===> Component <===//
export default class StylesSet extends Component {
    render () {
        //===> Properties <===//
        const PhenixBlocks = window.PhenixBlocks.dataLists.styles;
        const {attributes, options, mainSetter, colorSetter, bgOnly} = this.props;
        const uniqueKey = Date.now().toString(36) + Math.random().toString(36).substr(2, 5)+`-styles-option`;

        //===> Define Controls Options <===//
        const radius_sizes = PhenixBlocks.radius_sizes;
        const zindex_options = PhenixBlocks.zindex_options;
        const support_options = PhenixBlocks.support_options;
        const display_options = PhenixBlocks.display_options;
        const position_options = PhenixBlocks.position_options;
        const radius_directions = PhenixBlocks.radius_directions;
        const background_options = PhenixBlocks.background_options;

        //====> Support Options Checker <====//
        let showSupportOpts = false;
        const supportedOpts = ["enable-radius","enable-position","enable-display"];
        const SupportOpts = attributes.style?.support || [];
        SupportOpts.forEach(opt => supportedOpts.includes(opt) ? showSupportOpts = true : showSupportOpts = showSupportOpts);

        //===> Output <===//
        return <>
            {/*===> Other Options <===*/}
            {this.props.children ? this.props.children : null}

            {/*===> Text Color <===*/}
            {!options || options.includes("text-colors") ?
                <PhenixColor key={`px-color-${uniqueKey}`} label={__("Text Color", "pds-blocks")} onChange={colorSetter} value={attributes.typography.color} />
            : null}

            {/*===> Background <===*/}
            {!options || options.includes("background")?<>
                {/*===> Colors and Gradients <===*/}
                <PhenixBackground key={`background-${uniqueKey}`} 
                    colorsOnly={bgOnly && bgOnly.includes('colorsOnly') ? true : false}
                    onlyCG={bgOnly && bgOnly.includes('onlyCG') ? true : false}
                    label={__("Background", "pds-blocks")}  onChange={mainSetter}
                    type={attributes.style.background?.type || "color"}
                    value={attributes.style.background?.value || ""}
                    rotate={attributes.style.background?.rotate || null} 
                />

                {/*===> Image Backgrounds <===*/}
                {attributes.style.background?.type === "image" ? 
                    <div className='row gpx-15 pdt-10' style={{marginTop: -10}}>
                        {/*===> Column <===*/}
                        <div className='col col-6 mb-10'>
                            <PhenixSelect className="border-alpha-25" key={`bg-size-${uniqueKey}`} name="bg-size" placeholder={__("Size", "pds-blocks")} value={attributes.style['bg-size']} onChange={mainSetter} options={background_options.sizes} />
                        </div>
                        {/*===> Column <===*/}
                        <div className='col col-6 mb-10'>
                            <PhenixSelect className="border-alpha-25" key={`bg-position-${uniqueKey}`} name="bg-position" placeholder={__("Position", "pds-blocks")} value={attributes.style['bg-position']} onChange={mainSetter} options={background_options.positions} />
                        </div>
                        {/*===> Column <===*/}
                        <div className='col col-6 mb-10'>
                            <PhenixSelect className="border-alpha-25" key={`bg-repeat-${uniqueKey}`} name="bg-repeat" placeholder={__("Repeat", "pds-blocks")} value={attributes.style['bg-repeat']} onChange={mainSetter} options={background_options.repeat} />
                        </div>
                        {/*===> Column <===*/}
                        <div className='col col-6'>
                            <PhenixSelect className="border-alpha-25" key={`bg-animation-${uniqueKey}`} name="bg-animation" placeholder={__("Animation", "pds-blocks")} value={attributes.style['bg-animation']} onChange={mainSetter} options={background_options.animations} />
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-12'>
                            {/*===> Column <===*/}
                            <div className='row gpx-15'>
                                <div className='col col-6 mb-10'>
                                    <PhenixSelect className="border-alpha-25" label={__("Overlay", "pds-blocks")} key={`overly-${uniqueKey}`} name="overly" placeholder={__("Overlay", "pds-blocks")} value={attributes.style.overly} onChange={mainSetter} options={background_options.overlay} />
                                </div>
                                {attributes.style.overly ? <>
                                <div className='col col-6 mb-10'>
                                    <PhenixNumber name="overly_opacity" label={__("Overlay Opacity", "pds-blocks")} value={ parseInt(attributes.style.overly_opacity) || 75} onChange={mainSetter} />
                                </div>
                                </>:null}
                            </div>
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-12'>
                            <OptionControl key={`parallax-${uniqueKey}`} name={`parallax`} value="bg-parallax" checked={attributes.style.parallax || false} onChange={mainSetter} type='switch-checkbox' className='small'>{__("Parallax BG", "pds-blocks")}</OptionControl>
                        </div>
                    </div>
                : null }
            </>:null}

            {/*===> Support <===*/}
            {!options || options.includes("support") ? <>
                <div className={`col-12 ${showSupportOpts === true?"mb-20":"mb-10"}`}>
                    <PhenixSelect name="support" placeholder={__("add..", "pds-blocks")} search={true} label={__("Support", "pds-blocks")} value={attributes.style.support} onChange={mainSetter} options={support_options} multiple={true} className="stacked-options" />
                </div>
                {/*===> Additional Styles <===*/}
                {showSupportOpts === true ? <>
                    <div className={`row gpx-15 gpy-15`}>
                        {/*===> Border Radius <===*/}
                        {attributes.style.support?.includes('enable-radius') ? <>
                            <div className='col col-6'>
                                <PhenixSelect key={`radius-${uniqueKey}`} name="radius" placeholder={__("None", "pds-blocks")} label={__("Radius Size", "pds-blocks")} value={attributes.style.radius} onChange={mainSetter} options={radius_sizes} />
                            </div>
                            <div className='col col-6'>
                                <PhenixSelect key={`radius-direction-${uniqueKey}`} name="radius-direction" placeholder={__("Default", "pds-blocks")} label={__("Radius Direction", "pds-blocks")} value={attributes.style['radius-direction']} onChange={mainSetter} options={radius_directions} />
                            </div>
                        </> : null}

                        {/*===> Sticky Element <===*/}
                        {attributes.style.support?.includes('enable-position') ? <>
                            <div className='col col-6'>
                                <PhenixSelect key={`position-${uniqueKey}`} name="position" placeholder={__("Default", "pds-blocks")} label={__("Position Type", "pds-blocks")} value={attributes.style.position} onChange={mainSetter} options={position_options} />
                            </div>
                            <div className='col col-6'>
                                <PhenixSelect key={`position-index-${uniqueKey}`} name="z-index" placeholder={__("Default", "pds-blocks")} label={__("Index Order", "pds-blocks")} value={attributes.style['z-index']} onChange={mainSetter} options={zindex_options} />
                            </div>
                        </>: null}

                        {/*===> Display <===*/}
                        {attributes.style.support?.includes('enable-display') ? <>
                            <div className='col-12'>
                                <PhenixSelect name="display" placeholder={__("Default", "pds-blocks")} search={true} label={__("Responsive Display", "pds-blocks")} value={attributes.style.display} onChange={mainSetter} options={display_options} multiple={true} className="stacked-options" />
                            </div>
                        </>: null}
                    </div>
                </>:null}
            </>: null}
        </>
    }
}