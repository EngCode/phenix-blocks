//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';
import ServerSideRender from '@wordpress/server-side-render';
import {PanelBody, TextControl, Toolbar} from '@wordpress/components';
import {BlockControls, InspectorControls, useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import ScreensTabs from "../px-controls/tabs";
import PhenixIcons from '../px-controls/icons';
import PxDropDown from '../px-controls/dropdown';
import PhenixSelect from '../px-controls/select';;

//====> Phenix Options Sets <=====//
import StylesSet from '../px-controls/sets/styles';
import TypographySet from '../px-controls/sets/typography';
import AnimationsSet from '../px-controls/sets/animations';
import EffectsSet from '../px-controls/sets/effects';

//====> Attributes Renderers <====//
const PhenixBlocks = window.PhenixBlocks;
const OptionsRenderer = PhenixBlocks.OptionsRenderer;

//====> Edit Mode <====//
export default function Edit(props) {
    //===> Value Handler <===//
    const valueHandler = (target) => {
        //===> Define Array Type <===//
        let single_val,
            array_val = [],
            type = target instanceof HTMLElement ? (target.getAttribute('type') || target.tagName) : null;

        //==> for Boolean Values <==//
        if (type === 'checkbox' || type === 'radio') {
            if (target.value === 'boolean') { single_val = target.checked; }
            else { single_val = target.checked ? target.value : ""; }
        }

        //===> for Value of Type Array <===//
        else if (type === "SELECT" && target.hasAttribute('multiple')) {
            //===> Get Multiple Value <===//
            let values = target.parentNode.getAttribute('data-value').split(',');
            //===> Get Current Values <===//
            values.forEach(val => val !== "" ? array_val.push(val) : null);
            //===> Set Array Value <===//
            single_val = array_val;
        }

        //===> for Normal Values <===//
        else if (type === null) { single_val = target; }

        //===> for Normal Values <===//
        else { single_val = target.value; }

        //===> Return Value <===//
        if(single_val) return single_val;
    };

    const set_value = (target) => {
        //==> Get Current <==//
        const name = target.getAttribute('name');
        const value = (typeof(target) === "string" || typeof(target) === "number") ? target : valueHandler(target);
        let newTag;
        //==> Type Handler <===//
        if (name === "type") {
            if (value === "paragraph") newTag = "p";
            else if (value === "list") newTag = "ul";
            else if (value === "headline") newTag = "h3";
        }
        //===> Set new Attributes <===//
        if (newTag) {
            const newAttributes = { ...attributes, "tagName": newTag, [name]: value };
            //==> Set Value <==//
            setAttributes(newAttributes);
        } else {
            const newAttributes = { ...attributes, [name]: value };
            //==> Set Value <==//
            setAttributes(newAttributes);
        }
    };

    //==> Set Object Attributes Methods <==//
    const set_style = (target, screen) => PhenixBlocks.setObject(target, screen, "style");
    const set_setting = (target, screen) => PhenixBlocks.setObject(target, "", "setting");
    const set_typography = (target, screen) => PhenixBlocks.setObject(target, screen, "typography");
    const set_separator = value => PhenixBlocks.setObject(`${value.type} ${value.value}`, "", "setting", "separator");

    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();
    const uniqueKey = blockProps.id;

    //===> Render <===//
    return (<>
        {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <Toolbar key={`${uniqueKey}-toolbar`} label={__("Quick Settings", "pds-blocks")}>
                {/*===> Select Control <===*/}
                <div className='inline-block inline-select tooltip-bottom w-150' data-title={__("Text Type", "pds-blocks")}>
                    <PhenixSelect name="mode" placeholder={__("Title/Breadcrumb", "pds-blocks")} className={`tx-align-center weight-medium`} value={attributes.mode} onChange={set_value} options={[
                        { "label": __("Title/Breadcrumb", "pds-blocks"), "value": "title-breadcrumb"},
                        { "label": __("Title Only", "pds-blocks"), "value": "title"},
                        { "label": __("Breadcrumb", "pds-blocks"), "value": "breadcrumb"},
                    ]} />
                </div>
                {/*===> Dropdown Button <===*/}
                <PxDropDown title={__("Style Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-adjust divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="pds-styles" className='pdt-15 pdb-5 pdx-15 lineheight-150'>
                        {/*===> Styles <===*/}
                        <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} mainSetter={set_style} colorSetter={set_typography} options="text-colors, background" />
                    </li>
                </PxDropDown>
                {/*===> Dropdown Button <===*/}
                <PxDropDown title={__("Typography Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-font divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="pds-typography" className='pdt-15 pdx-15 lineheight-150'>
                        <ScreensTabs
                            sm={(screen) => <TypographySet key={`typography-${uniqueKey}`} attributes={attributes} mainSetter={set_typography} options="size, align, other" />}
                            md={(screen) => <TypographySet screen={screen} attributes={attributes} mainSetter={set_typography} options="size, align" />}
                            lg={(screen) => <TypographySet screen={screen} attributes={attributes} mainSetter={set_typography} options="size, align" />}
                            xl={(screen) => <TypographySet screen={screen} attributes={attributes} mainSetter={set_typography} options="size, align" />}
                        />
                    </li>
                </PxDropDown>
                {/*===> Dropdown Button <===*/}
                {attributes.style?.support?.includes('enable-animations') ?
                    <PxDropDown title={__("Animation Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-atom-alt divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                        <li key="pds-animations" className='pdt-15 pdx-15 lineheight-150'>
                            {/*===> Animations <===*/}
                            <AnimationsSet attributes={attributes} mainSetter={set_style} />
                        </li>
                    </PxDropDown>
                :null}
                {/*===> Dropdown Button <===*/}
                {attributes.style?.support?.includes('enable-effects') ?
                    <PxDropDown title={__("Effects Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-backpack divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                        <li key="pds-margin" className='pdy-15 pdx-15 lineheight-150'>
                            <EffectsSet attributes={attributes} mainSetter={set_style} />
                        </li>
                    </PxDropDown>
                :null}
            </Toolbar>
        </BlockControls>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key={`${uniqueKey}-inspector`}>
            {/*===> Widget Panel <===*/}
            <PanelBody title="General Settings" initialOpen={true}>
                {/*===> Styles Options <===*/}
                <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} mainSetter={set_style} colorSetter={set_typography} options="support" />
            </PanelBody>
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        {attributes.preview ? <img src={PreviewImage} alt="" className="fluid" /> :<div {...blockProps} key={`${uniqueKey}`}> 
            <ServerSideRender block="phenix/page-head" attributes={attributes} />
        </div>}
    </>);
}