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

//====> Phenix Options Sets <=====//
import FlexboxSet from './flexbox';
import TypographySet from './typography';

//===> Options List
//=> flexbox, display, text-align

//===> Component <===//
export default class ResponsiveSet extends Component {
    render () {
        //===> Properties <===//
        const PhenixBlocks = window.PhenixBlocks.dataLists;
        const {attributes, options, screen, mainSetter, flexSetter, styleSetter, typoSetter} = this.props;
        const screenPoint =  screen === "sm" ? "" : screen ? `-${screen}` : "";

        //===> Define Controls Options <===//
        const component_sizes = [];
        PhenixBlocks.component_sizes.forEach(item => component_sizes.push({label: item.label, value: item.value === "" ? "" :`${item.value}${screenPoint}`}));

        //===> Output <===//
        return <>
            {/*===> Other Options <===*/}
            {this.props.children ? this.props.children : null}

            {/*===> Layouts Options <===*/}
            {!options || options.includes("flexbox") ?
                <div className={`mb-10 pdb-5 ${this.props.children?"divider-y":"divider-b"}`}>
                    <FlexboxSet screen={screen} attributes={attributes} mainSetter={flexSetter} options={attributes.flexbox.equals || attributes.flexbox.slider ? "flex-props, grid-props" : "flex-props, align"}></FlexboxSet>
                </div>
            : null}

            {/*===> Options Group <===*/}
            <div className={`row gpx-15 gpy-15`}>
                {/*===> Sizes Options <===*/}
                {options && options.includes("component-size") ?
                    <div className='col-6 col'>
                        <PhenixSelect key={`size${screenPoint}`} name={`size${screenPoint}`} placeholder={__("Default", "pds-blocks")} label={__("Size", "pds-blocks")} value={attributes.responsive[`size${screenPoint}`]} onChange={(target) => mainSetter(target, screen ? screen : "")} options={component_sizes} />
                    </div>
                : null}
                {/*===> Text Size <===*/}
                {options && options.includes("text-size") ?
                    <div className='col-6 col'>
                        <TypographySet screen={screen} attributes={attributes} mainSetter={(target) => typoSetter(target, screen ? screen : "")} options="size" />
                    </div>
                : null}
                {/*===> Text Align <===*/}
                {!options || options.includes("text-align") ?
                    <div className='col-12'>
                        <TypographySet screen={screen} attributes={attributes} mainSetter={(target) => typoSetter(target, screen ? screen : "")} options="align" />
                    </div>
                : null}
            </div>
        </>
    }
}