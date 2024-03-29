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
import OptionControl from './switch';
import FlexAlignment from './alignment';
import PhenixColor from './colors/text';
import PhenixBackground from './colors/background';
import PhenixComponentsBuilder from './panel-scripts';

//===> Media Uploader <===//
export default class TemplateOptions extends Component {
    //===> States <===//
    state = {post_types : this.props.types || [], taxonomies: this.props.taxonomies || []};

    //===> Component Rendered Hook <===//
    componentDidMount() {
        //===> Create Time Loop to Find the Elements <===//
        window.PhenixBlocks.componentsBuilder();
    };

    //===> Render <===//
    render () {
        //===> Properties <===//
        const {options, features, meta, onChange, types, taxonomies} = this.props;

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
            //===> Get Current Value <===//
            let current = {"options": options || {}, "features": features || {}},
                options_trail = control.name.split(':'),
                trail_length = options_trail.length,
                zero = options_trail[0];

            //===> Define the Value <===//            
            let value;
            //===> Check for Array <===//
            if (control.tagName === "SELECT" && control.getAttribute('multiple') !== null) {
                //===> Get Multiple Value <===//
                let values = Phenix(control).ancestor('.px-select').getAttribute('data-value').split(','),
                    array_val = [];
                //===> Get Current Values <===//
                values.forEach(val => val !== "" ? array_val.push(val) : null);
                //===> Set Array Value <===//
                value = array_val;
            }
            //===> for Check-Boxes <===//
            else if (control.getAttribute('type') === 'checkbox' || control.getAttribute('type') === 'radio') { value = control.checked; }
            //===> Get Normal Value <===//
            else { value = control.value; }

            //===> set the Value for Level 01 Options <===//
            if (trail_length === 2) current[`${zero}`][`${options_trail[1]}`] = value;

            //===> Manual Loop on the Options Trail <===//
            else if (trail_length === 3) {
                //====> Create Options Object <====//
                if (!current[`${zero}`][`${options_trail[1]}`]) current[`${zero}`][`${options_trail[1]}`] = {};
                //===> Set the Value <===//
                current[`${zero}`][`${options_trail[1]}`][`${options_trail[2]}`] = value;
            }
            //===> Manual Loop on the Options Trail <===//
            else if (trail_length === 4) {
                //====> Create Options Object <====//
                if (!current[`${zero}`][`${options_trail[1]}`]) current[`${zero}`][`${options_trail[1]}`] = {};
                if (!current[`${zero}`][`${options_trail[1]}`][`${options_trail[2]}`]) current[`${zero}`][`${options_trail[1]}`][`${options_trail[2]}`] = {};
                //===> Set the Value <===//
                current[`${zero}`][`${options_trail[1]}`][`${options_trail[2]}`][`${options_trail[3]}`] = value;
            };

            //===> Set Data <===//
            return onChange({...current});
        };

        //===> Taxonomies Controls <===//
        const post_types_control = (option, option_meta, group) => {
            //===> Create Post Types Select <===//
            if (this.state.post_types.length > 0) {
                //===> Form Control <===//
                return <div key={option} className={`mb-15 col-${option_meta.size ? option_meta.size : '12'}`}>
                    {/*===> Control Label <===*/}
                    <label className='mb-5 tx-capitalize'>{option.replace('-', ' ')}</label>
                    {/*===> Control Element <===*/}
                    <div className='px-select'>
                        <select name={`${group}:${option}`} data-search="1" defaultValue={options?.hasOwnProperty(`${option}`) ? options[`${option}`] : option_meta.value} multiple={option_meta.multiple ? option_meta.multiple : false} onChange={event => set_value(event.target)} className='px-select pds-tm-control form-control small radius-md'>
                            {this.state.post_types.map(post_type => <option key={post_type.value} value={post_type.value}>{post_type.label}</option>)}
                        </select>
                    </div>
                </div>;
            } else {
                return <div key={option} className={`col-${option_meta.size ? option_meta.size : '12'}`}>
                    <div className="px-loading-inline form-control small radius-md overflow-hidden flexbox align-center">{__("Loading","pds-blocks")}</div>
                </div>
            }
        };

        //===> Post-Type Controls <===//
        const post_taxonomies_control = (option, option_meta, group) => {
            //===> Create Post Types Select <===//
            if (this.state.taxonomies.length > 0) {
                //===> Form Control <===//
                return <div key={option} className={`mb-15 col-${option_meta.size ? option_meta.size : '12'}`}>
                    {/*===> Control Label <===*/}
                    <label className='mb-5 tx-capitalize'>{option.replace('-', ' ')}</label>
                    {/*===> Control Element <===*/}
                    <div className='px-select'>
                        <select name={`${group}:${option}`} data-search="1" defaultValue={options?.hasOwnProperty(`${option}`) ? options[`${option}`] : option_meta.value} multiple={option_meta.multiple ? option_meta.multiple : false} onChange={event => set_value(event.target)} className='px-select pds-tm-control form-control small radius-md'>
                            {this.state.taxonomies.map(taxonomy => <option key={taxonomy.value} value={taxonomy.value}>{taxonomy.label}</option>)}
                        </select>
                    </div>
                </div>;
            } else {
                return <div key={option} className={`col-${option_meta.size ? option_meta.size : '12'}`}>
                    <div className="px-loading-inline form-control small radius-md overflow-hidden flexbox align-center">{__("Loading","pds-blocks")}</div>
                </div>
            }
        };

        //===> Array Controls <===//
        const post_array_control = (option, option_meta, group) => {
            //===> Form Control <===//
            return <div key={option} className={`mb-15 col-${option_meta.size ? option_meta.size : '12'}`}>
                {/*===> Control Label <===*/}
                <label className='mb-5 tx-capitalize'>{option.replace('-', ' ')}</label>
                {/*===> Control Element <===*/}
                <div className='px-select'>
                    <select name={`${group}:${option}`} data-search="1" defaultValue={options?.hasOwnProperty(`${option}`) ? options[`${option}`] : ""} multiple={option_meta.multiple ? option_meta.multiple : false} onChange={event => set_value(event.target)} className='px-select pds-tm-control form-control small radius-md'>
                        {option_meta.value.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
                    </select>
                </div>
            </div>;
        };

        //===> Switch Buttons <===//
        const switch_control = (option, option_meta, group) => {
            let label = option.replace('-', ' ').toUpperCase();
            //===> Label Correction <===//
            if (option === 'status') label = `${__('Enable',"pds-blocks")} ${group.replace('-', ' ').replace('options:','')}`;

            //===> Create Component <===//
            return <div className={`mb-10 col-${option_meta.size ? option_meta.size : 12}`} key={`${option}`}>
                <OptionControl name={`${group}:${option}`} checked={options?.hasOwnProperty(`${option}`) ? options[`${option}`] : option_meta.value} onChange={set_value} type='switch-checkbox' className='small me-5 tx-capitalize'>{label}</OptionControl>
            </div>;
        };

        //===> Create the Template Meta Data <===//
        if (meta.hasOwnProperty('options')) {
            //===> Loop Through Template Options <===//
            Object.entries(meta['options']).forEach(([option, option_meta]) => {
                //===> Define Element <===//
                let element;

                //===> Create Post Types Select <===//
                if (option_meta.type === "post-type") element = post_types_control(option, option_meta, 'options');

                //===> Create Taxonomies Select <===//
                if (option_meta.type === "taxonomies") element = post_taxonomies_control(option, option_meta, 'options');

                //===> Create Switch Button <===//
                if(option_meta.type === "boolean") element = switch_control(option, option_meta, 'options');

                //===> Create Array Controls <===//
                if(option_meta.type === "select") element = post_array_control(option, option_meta, 'options');

                //====> Group of Options <====//
                if (option_meta.type === "options") {
                    //===> Define Sub Options <===//
                    let sub_options = [];

                    //===> Create Sub-Options <===//
                    Object.entries(option_meta.value).forEach(([sub_option, sub_option_meta]) => {
                        //====> for the Status Controller and any Switch Button <====//
                        if (sub_option === 'status') sub_options.push(switch_control(sub_option, sub_option_meta, `options:${option}`));

                        //====> for the Others Controllers <====//
                        if (options?.hasOwnProperty(`${option}`) && options[`${option}`].hasOwnProperty('status')) {
                            if (options[`${option}`].status === true) {
                                //===> Create Post Types Select <===//
                                if (sub_option_meta.type === "post-type") sub_options.push(post_types_control(sub_option, sub_option_meta, `options:${option}`));

                                //===> Create Taxonomies Select <===//
                                if (sub_option_meta.type === "taxonomies") sub_options.push(post_taxonomies_control(sub_option, sub_option_meta, `options:${option}`));

                                //===> Create Switch Buttons <===//
                                if (sub_option_meta.type === "boolean" && sub_option !== 'status') sub_options.push(switch_control(sub_option, sub_option_meta, `options:${option}`));
                                
                                //===> Create Array Controls <===//
                                if (sub_option_meta.type === "select") sub_options.push(post_array_control(sub_option, sub_option_meta, `options:${option}`));
                            }
                        }
                    });

                    //===> Controls Group <===//
                    element = <div key={option} className={`col-12`}>
                        <div className='row gpx-10'>{sub_options}</div>
                    </div>;
                }

                //===> Add the Element <===//
                if (element) controls.push(element);
            });

            {/*===> Options Panel <===*/}
            if(controls.length > 0) panels.push(<PanelBody key="template-options" title={__("Template Options", "pds-blocks")} initialOpen={true}><div className='row gpx-10'>{controls}</div></PanelBody>)
            {/*===> Features Panel <===*/}
            if(features_panels.length > 0) panels.push(<PanelBody key="template-features" title={__("Template Features", "pds-blocks")} initialOpen={true}><div className='row gpx-10'>{features_panels}</div></PanelBody>)
        }

        //===> Output <===//
        return (<>{panels}</>);
    }
}