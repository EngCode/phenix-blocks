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

        //===> Define Controls Options <===//
        const display_options = {
            "Mobile Screens" : [
                { "label": "Flex", "value": "display-flex"},
                { "label": "Grid", "value": "display-grid"},
                { "label": "Block", "value": "display-block"},
                { "label": "Flexbox", "value": "flexbox"},
                { "label": "Inline-Block", "value": "inline-block"},
                { "label": "Hidden SM <i class='fas fa-arrow-up'><i>", "value": "hidden"},
                { "label": "Hidden SM <i class='fas fa-arrow-down'><i>", "value": "hidden-sm-down"},
            ],
            "Tablet Screens" : [
                { "label": "Flex MD", "value": "display-md-flex"},
                { "label": "Grid MD", "value": "display-md-grid"},
                { "label": "Block MD", "value": "display-md-block"},
                { "label": "Hidden MD <i class='fas fa-arrow-up'><i>", "value": "hidden-md-up"},
                { "label": "Hidden MD <i class='fas fa-arrow-down'><i>", "value": "hidden-md-down"},
                { "label": "Inline-Block MD", "value": "inline-block-md"},
            ],
            "Laptop Screens" : [
                { "label": "Flex LG", "value": "display-lg-flex"},
                { "label": "Grid LG", "value": "display-lg-grid"},
                { "label": "Block LG", "value": "display-lg-block"},
                { "label": "Hidden LG <i class='fas fa-arrow-up'><i>", "value": "hidden-lg-up"},
                { "label": "Hidden LG <i class='fas fa-arrow-down'><i>", "value": "hidden-lg-down"},
                { "label": "Inline-Block LG", "value": "inline-block-lg"},
            ],
            "Desktop Screens" : [
                { "label": "Flex XL", "value": "display-xl-flex"},
                { "label": "Grid XL", "value": "display-xl-grid"},
                { "label": "Block XL", "value": "display-xl-block"},
                { "label": "Hidden XL <i class='fas fa-arrow-up'><i>", "value": "hidden-xl-up"},
                { "label": "Hidden XL <i class='fas fa-arrow-down'><i>", "value": "hidden-xl-down"},
                { "label": "Inline-Block XG", "value": "inline-block-xl"},
            ],
        };

        const component_sizes = [
            { label: __("Normal", "phenix"), value: '' },
            { label: __("Tiny", "phenix"), value: 'tiny' },
            { label: __("Small", "phenix"), value: 'small' },
            { label: __("Large", "phenix"), value: 'large' },
            { label: __("xLarge", "phenix"), value: 'xlarge' },
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
            <div className={`row gpx-20 gpy-15 ${!options || options.includes("display") ? "gpy-fix" : ""}`}>
                {/*===> Sizes Options <===*/}
                {options && options.includes("component-size") ?
                    <div className='col-6 col'>
                        <PhenixSelect name={`size${screenPoint}`} placeholder={__("Default", "phenix")} label={__("Size", "phenix")} value={attributes.responsive[`size${screenPoint}`]} onChange={mainSetter} options={component_sizes} />
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
            {/*===> Display <===*/}
            {!options || options.includes("display") ? <>
                <div className='col-12 mb-5'>
                    <PhenixSelect name="display" placeholder={__("Default", "phenix")} search={true} label={__("Responsive Display", "phenix")} value={attributes.style.display} onChange={styleSetter} options={display_options} multiple={true} className="stacked-options" />
                </div>
            </>: null}
        </>
    }
}