/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import React, { useState, useMemo, useEffect, useCallback } from '@wordpress/element';

//====> Phenix Modules <====//
import PhenixSelect from '../select';

//===> Component <===//
const EffectsSet = ({attributes, options, mainSetter}) => {
    //===> Properties <===//
    const PhenixBlocks = window.PhenixBlocks.dataLists;

    //===> Define Controls Options <===//
    const hover_effect = PhenixBlocks.effects.hover;
    const box_shadows = PhenixBlocks.effects.shadows;
    const animations_effect = PhenixBlocks.effects.animations;
    const other_effects = PhenixBlocks.effects.other_effects;

    //===> Output <===//
    return <>
        {/*===> Other Options <===*/}
        {this.props.children ? this.props.children : null}

        {/*===> Layout Group <===*/}
        <div className={`row gpx-10 gpy-15`}>
            {/*===> Hover Effects <===*/}
            <div className='col col-12'>
                <PhenixSelect name="hover-effect" size="normal" placeholder={__("None", "pds-blocks")} className="stacked-options" search={true} multiple={true} label={__("Hover Effects", "pds-blocks")} value={typeof(attributes.style['hover-effect']) === 'string' ? [attributes.style['hover-effect']] : attributes.style['hover-effect']} onChange={mainSetter} options={hover_effect} />
            </div>
            {/*===> Animation Effects <===*/}
            <div className='col col-12'>
                <PhenixSelect name="animated-effect" size="normal" placeholder={__("None", "pds-blocks")} className="stacked-options" search={true} multiple={true} label={__("Always Animated", "pds-blocks")} value={typeof(attributes.style['animated-effect']) === 'string' ? [attributes.style['animated-effect']] : attributes.style['animated-effect']} onChange={mainSetter} options={animations_effect} />
            </div>
            {/*===> Box Shadow <===*/}
            <div className='col col-12'>
                <PhenixSelect name="box-shadow" size="normal" placeholder={__("None", "pds-blocks")} className="stacked-options" label={__("Box Shadow", "pds-blocks")} value={attributes.style['box-shadow']} onChange={mainSetter} options={box_shadows} />
            </div>
            {/*===> Other Effects <===*/}
            <div className='col col-12'>
                <PhenixSelect name="other-effects" size="normal" placeholder={__("None", "pds-blocks")} className="stacked-options" label={__("Other Effects", "pds-blocks")} value={attributes.style['other-effects']} multiple={true} onChange={mainSetter} options={other_effects} />
            </div>
        </div>
        {/*===> // Layout Group <===*/}
    </>
}

export default EffectsSet;