/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import {Component} from '@wordpress/element';

//====> Phenix Modules <====//
import PhenixInput from '../input';
import PhenixSelect from '../select';
import OptionControl from '../switch';
import PhenixNumber from "../number";


//===> Component <===//
export default class TemplateMeta extends Component {
    //===> Render <===//
    render () {
        //===> Properties <===//
        const {className, attributes, mainSetter} = this.props;

        //===> Get the Meta Options and Features <===//
        const metaOptions = attributes['template_meta']['options'];
        const metaFeatures = attributes['template_meta']['features'];
        const TemplateOptionsSet = [];

        //===> Loop throgh the Options <===//
        Object.keys(metaOptions).map((key) => {
            //===> Get the Option Type <===//
            const optionType = metaOptions[key]['type'];
            //===> Get Default Value <===//
            const defaultValue = metaOptions[key]['value'] || '';
            
            //===> for Input Type <===//
            if (optionType === "text") {
                TemplateOptionsSet.push(
                    <PhenixInput key={key} name={key} label={key.replace('-', ' ')} value={attributes['part_options'][key] || defaultValue} onChange={mainSetter} className="mb-15" />
                );
            }
        });

        //====> Return Options <====//
        return TemplateOptionsSet;
    }
}