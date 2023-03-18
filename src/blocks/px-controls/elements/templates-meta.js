/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import {Component} from '@wordpress/element';
import { PanelBody } from '@wordpress/components';

//===> Media Uploader <===//
export default class TemplateOptions extends Component {
    //===> States <===//
    state = {post_types : []};

    
    //===> Render <===//
    render () {
        //===> Properties <===//
        const {options, features, meta, onChange} = this.props;

        //===> Fetch Post Types <===//
        if (this.state.post_types.length < 1) apiFetch({path: 'wp/v2/types'}).then(post_types => {
            //===> Define State <===//
            let new_state = {...this.state};

            //===> Get Current Active Types <===//
            for (const [key, value] of Object.entries(post_types)) {
                //===> Exclude the Core Types <===//
                if (!['attachment', 'nav_menu_item', 'wp_block', 'wp_navigation', 'wp_template', 'wp_template_part'].includes(key)) {
                    new_state.post_types.push({"value":key, "label":value.name});
                }
            }

            //===> Set State <===//
            this.setState({...new_state});
        });

        //===> Define Options List <===//
        let options_panels = [],
            options_controls = [],
            options_features = [],
            current_options = options,
            current_features = features,
            template_opts = meta;

        //===> Check if the Template Has Meta Data <===//
        if (template_opts) {
            //===> Loop Through Template Options <===//
            Object.entries(template_opts['options']).forEach(([option, value]) => {
                //===> Define Data <===//
                let option_element;

                //===> Post Types Select <===//
                if (value.type === "post-type" && this.state.post_types.length > 0) {
                    option_element = <div key={option}>
                        <label key={`${option}-label`} className='mb-5'>{option.replace('-', ' ').toUpperCase()}</label>
                        <select key={`${option}-control`} className='form-control small radius-md' name={`options:${option}`} value={current_options[`${option}`] ? current_options[`${option}`] : "post"} onChange={event => set_value(event.target)}>
                            {this.state.post_types.map(post_type => <option key={post_type.value} value={post_type.value}>{post_type.label}</option>)};
                        </select>
                    </div>;

                    options_controls.push(option_element);
                }
            });

            {/*===> Options Panel <===*/}
            if(options_controls.length > 0) options_panels.push(<PanelBody key="template-options" title={__("Template Options", "phenix")} initialOpen={true}>{options_controls}</PanelBody>)

            {/*===> Features Panel <===*/}
            if(options_features.length > 0) options_panels.push(<PanelBody key="template-features" title={__("Template Features", "phenix")} initialOpen={true}>{options_features}</PanelBody>)
        }

        //===> Set Value <===//
        const set_value = (control) => {
            //===> Get Current Value <===//
            let current = {"options": options, "features": features},
                option_group = control.name.split(':')[0],
                option_name = control.name.split(':')[1];

            //===> Set Current Value <===//
            current[option_group][option_name] = control.value;

            //===> Set Data <===//
            return onChange(current);
        };

        //===> Output <===//
        return (<>{options_panels}</>);
    }
}