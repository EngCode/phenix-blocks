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

//====> Phenix Modules <====//
import OptionControl from '../switch';
import FlexAlignment from '../alignment';
import PhenixColor from '../colors/text';
import PhenixBackground from '../colors/background';
import PhenixComponentsBuilder from '../panel-scripts';

//===> Media Uploader <===//
export default class TemplateOptions extends Component {
    //===> States <===//
    state = {post_types : [], taxonomies: []};

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

        //===> Fetch Taxonomies <===//
        if (this.state.taxonomies.length < 1 && this.state.post_types.length > 0) apiFetch({path: 'wp/v2/taxonomies'}).then(taxonomies => {
            //===> Define Types <===//
            let new_state = {...this.state};

            //===> Get Current Active Types <===//
            for (const [key, value] of Object.entries(taxonomies)) {
                //===> Exclude the Core Types <===//
                if (!['nav_menu', 'post_tag'].includes(key)) {
                    new_state.taxonomies.push({"value":key, "label":value.name});
                }
            }

            //===> Set the new List if its Deferent <===//
            this.setState({...new_state});
        });

        //===> Define Elements Lists <===//
        let panels = [], controls = [], features_panels = [];

        //===> Set Value <===//
        const set_value = (control) => {
            console.log(control);
            //===> Get Current Value <===//
            let current = {"options": options, "features": features},
                option_group = control.name.split(':')[0],
                option_name = control.name.split(':')[1];

            //===> Set Current Value <===//
            if (control.getAttribute('type') === 'checkbox' || control.getAttribute('type') === 'radio') {
                current[option_group][option_name] = control.checked;
            } else {
                current[option_group][option_name] = control.value;
            }
            //===> Set Data <===//
            return onChange(current);
        };

        //===> Post-Type Controls <===//
        const post_types_control = (option, value) => {
            //===> Create Post Types Select <===//
            if (value.type === "post-type" && this.state.post_types.length > 0) {
                //===> Form Control <===//
                return <div key={option} className={`col-${value.size ? value.size : '12'}`}>
                    {/*===> Control Label <===*/}
                    <label className='mb-5 tx-capitalize'>{option.replace('-', ' ')}</label>
                    {/*===> Control Element <===*/}
                    <select name={`options:${option}`} data-search="1" defaultValue={options[`${option}`] ? options[`${option}`] : value.default} onChange={event => set_value(event.target)} className='px-select pds-tm-control form-control small radius-md'>
                        {this.state.post_types.map(post_type => <option key={post_type.value} value={post_type.value}>{post_type.label}</option>)};
                    </select>
                </div>;
            }
        };

        //===> Create the Template Meta Data <===//
        if (meta) {
            //===> Loop Through Template Options <===//
            Object.entries(meta['options']).forEach(([option, value]) => {
                //===> Define Element <===//
                let element;

                //===> Create Post Types Select <===//
                if (value.type === "post-type" && this.state.post_types.length > 0) element = post_types_control(option, value);

                //===> Create Switch Button <===//
                if(value.type === "boolean") sub_options.push(<div className={`col-${value.size ? value.size : 12}`} key={`${option}`}>
                    <OptionControl name={`options:${option}`} checked={options[`${option}`] ? options[`${option}`] : sub_value.default} onChange={set_value} type='switch-checkbox' className='small me-5 tx-capitalize'>{option.replace('-', ' ').toUpperCase()}</OptionControl>
                </div>);

                //====> Group of Options <====//
                if (value.type === "options") {
                    //===> Define Sub Options <===//
                    let sub_options = [];

                    //===> Create Sub-Options <===//
                    Object.entries(value.default).forEach(([sub_option, sub_value]) => {
                        //===> Create Post Types Select <===//
                        if (sub_value.type === "post-type" && this.state.post_types.length > 0) sub_options.push(post_types_control(sub_option, sub_value));
                        //===> Create Switch Button <===//
                        if(sub_value.type === "boolean") {
                            //===> Label Correction <===//
                            let label = sub_option.replace('-', ' ');
                            if (sub_option === 'status') label = `${__('Enable','phenix')} ${option.replace('-', ' ')}`;

                            //===> Create the Element <===//
                            sub_options.push(<div className={`col-${sub_value.size ? sub_value.size : 12}`} key={`${option}-${sub_option}`}>
                                <OptionControl name={`options:${option}-${sub_option}`} checked={options[`${option}-${sub_option}`] ? options[`${option}-${sub_option}`] : sub_value.default} onChange={set_value} type='switch-checkbox' className='small me-5 tx-capitalize'>{label}</OptionControl>
                            </div>);
                        }
                    });

                    //===> Controls Group <===//
                    element = <div key={option} className={`col-12 row gpx-10 gpy-15`}>{sub_options}</div>;
                }


                //===> Add the Element <===//
                if (element) controls.push(element);
            });

            {/*===> Options Panel <===*/}
            if(controls.length > 0) panels.push(<PanelBody key="template-options" title={__("Template Options", "phenix")} initialOpen={true}><div className='row gpx-10 gpy-15'>{controls}</div></PanelBody>)
            {/*===> Features Panel <===*/}
            if(features_panels.length > 0) panels.push(<PanelBody key="template-features" title={__("Template Features", "phenix")} initialOpen={true}><div className='row gpx-10 gpy-15'>{features_panels}</div></PanelBody>)
        }

        //===> Output <===//
        return (<>{panels}</>);
    }
}