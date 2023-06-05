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
import FlexAlignment from '../alignment';

//====> Phenix Options Sets <=====//
import StylesSet from './styles';
import FlexboxSet from './flexbox';
import TypographySet from './typography';

//===> Options List
//=> flexbox, display, text-align

//===> Component <===//
export default class ResponsiveSet extends Component {
    render () {
        //===> Properties <===//
        const {attributes, options, screen, mainSetter, flexSetter, styleSetter, typoSetter} = this.props;
        const screenPoint = screen ? `-${screen}` : "";
        const uniqueKey = Date.now().toString(36) + Math.random().toString(36).substr(2, 5)+`-flexbox-${screen}-option`;

        //===> Define Controls Options <===//
        const component_sizes = [
            { label: __("Normal", "pds-blocks"), value: '' },
            { label: __("Tiny", "pds-blocks"), value: 'tiny' },
            { label: __("Small", "pds-blocks"), value: 'small' },
            { label: __("Large", "pds-blocks"), value: 'large' },
            { label: __("xLarge", "pds-blocks"), value: 'xlarge' },
        ];

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
                        <PhenixSelect name={`size${screenPoint}`} placeholder={__("Default", "pds-blocks")} label={__("Size", "pds-blocks")} value={attributes.responsive[`size${screenPoint}`]} onChange={mainSetter} options={component_sizes} />
                    </div>
                : null}
                {/*===> Text Size <===*/}
                {options && options.includes("text-size") ?
                    <div className='col-6 col'>
                        <TypographySet screen={screen} attributes={attributes} mainSetter={typoSetter} options="size" />
                    </div>
                : null}
                {/*===> Text Align <===*/}
                {!options || options.includes("text-align") ?
                    <div className='col-12'>
                        <TypographySet screen={screen} attributes={attributes} mainSetter={typoSetter} options="align" />
                    </div>
                : null}
            </div>
        </>
    }
}