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
import PhenixComponentsBuilder from '../panel-scripts';

//===> Media Uploader <===//
export default class TemplateOptions extends Component {
    //===> States <===//
    state = {post_types : []};

    //===> Component Rendered Hook <===//
    componentDidMount() {
        //===> Create Time Loop to Find the Elements <===//
        PhenixComponentsBuilder();
    };

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

        //===> Define Elements Lists <===//
        let panels = [], controls = [], features_panels = [];

        //===> Create the Template Meta Data <===//
        if (meta) {
            //===> Loop Through Template Options <===//
            Object.entries(meta['options']).forEach(([option, value]) => {
                //===> Define Element <===//
                let element;

                //===> Create Post Types Select <===//
                if (value.type === "post-type" && this.state.post_types.length > 0) {
                    element = <div key={option}>
                        <label className='mb-5'>{option.replace('-', ' ').toUpperCase()}</label>
                        <select name={`options:${option}`} defaultValue={options[`${option}`] ? options[`${option}`] : "post"} onChange={event => set_value(event.target)} className='px-select pds-tm-control form-control small radius-md'>
                            {this.state.post_types.map(post_type => <option key={post_type.value} value={post_type.value}>{post_type.label}</option>)};
                        </select>
                    </div>;

                    controls.push(element);
                }
            });

            {/*===> Options Panel <===*/}
            if(controls.length > 0) panels.push(<PanelBody key="template-options" title={__("Template Options", "phenix")} initialOpen={true}>{controls}</PanelBody>)

            {/*===> Features Panel <===*/}
            if(features_panels.length > 0) panels.push(<PanelBody key="template-features" title={__("Template Features", "phenix")} initialOpen={true}>{features_panels}</PanelBody>)
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
        return (<>{panels}</>);
    }
}