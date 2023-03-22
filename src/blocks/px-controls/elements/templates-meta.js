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
    state = {post_types : this.props.types || [], taxonomies: this.props.taxonomies || []};

    //===> Component Rendered Hook <===//
    componentDidMount() {
        //===> Create Time Loop to Find the Elements <===//
        PhenixComponentsBuilder();
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
            return onChange({...current});
        };

        //===> Post-Type Controls <===//
        const post_types_control = (option, option_meta) => {
            //===> Create Post Types Select <===//
            if (this.state.post_types.length > 0) {
                //===> Form Control <===//
                return <div key={option} className={`mb-10 col-${option_meta.size ? option_meta.size : '12'}`}>
                    {/*===> Control Label <===*/}
                    <label className='mb-5 tx-capitalize'>{option.replace('-', ' ')}</label>
                    {/*===> Control Element <===*/}
                    <div className='px-select'>
                        <select name={`options:${option}`} data-search="1" value={options[`${option}`] ? options[`${option}`] : option_meta.value} multiple={option_meta.multiple ? option_meta.multiple : false} onChange={event => set_value(event.target)} className='px-select pds-tm-control form-control small radius-md'>
                            {this.state.post_types.map(post_type => <option key={post_type.value} value={post_type.value}>{post_type.label}</option>)};
                        </select>
                    </div>
                </div>;
            } else {
                return <div key={option} className={`col-${option_meta.size ? option_meta.size : '12'}`}>
                    <div className="px-loading-inline form-control small radius-md overflow-hidden flexbox align-center">{__("Loading","phenix")}</div>
                </div>
            }
        };

        //===> Post-Type Controls <===//
        const post_taxonomies_control = (option, option_meta) => {
            //===> Create Post Types Select <===//
            if (this.state.taxonomies.length > 0) {
                //===> Form Control <===//
                return <div key={option} className={`mb-10 col-${option_meta.size ? option_meta.size : '12'}`}>
                    {/*===> Control Label <===*/}
                    <label className='mb-5 tx-capitalize'>{option.replace('-', ' ')}</label>
                    {/*===> Control Element <===*/}
                    <div className='px-select'>
                        <select name={`options:${option}`} data-search="1" value={options[`${option}`] ? options[`${option}`] : option_meta.value} multiple={option_meta.multiple ? option_meta.multiple : false} onChange={event => set_value(event.target)} className='px-select pds-tm-control form-control small radius-md'>
                            {this.state.taxonomies.map(taxonomy => <option key={taxonomy.value} value={taxonomy.value}>{taxonomy.label}</option>)};
                        </select>
                    </div>
                </div>;
            } else {
                return <div key={option} className={`col-${option_meta.size ? option_meta.size : '12'}`}>
                    <div className="px-loading-inline form-control small radius-md overflow-hidden flexbox align-center">{__("Loading","phenix")}</div>
                </div>
            }
        };

        //===> Create the Template Meta Data <===//
        if (meta) {
            //===> Loop Through Template Options <===//
            Object.entries(meta['options']).forEach(([option, option_meta]) => {
                //===> Define Element <===//
                let element;

                //===> Create Post Types Select <===//
                if (option_meta.type === "post-type") element = post_types_control(option, option_meta);

                //===> Create Taxonomies Select <===//
                if (option_meta.type === "taxonomies") element = post_taxonomies_control(option, option_meta);

                //===> Create Switch Button <===//
                if(option_meta.type === "boolean") element = <div className={`mb-5 col-${option_meta.size ? option_meta.size : 12}`} key={`${option}`}>
                    <OptionControl name={`options:${option}`} checked={options[`${option}`] ? options[`${option}`] : option_meta.value} onChange={set_value} type='switch-checkbox' className='small me-5 tx-capitalize'>{option.replace('-', ' ').toUpperCase()}</OptionControl>
                </div>;

                //====> Group of Options <====//
                if (option_meta.type === "options") {
                    //===> Define Sub Options <===//
                    let sub_options = [];

                    //===> Create Sub-Options <===//
                    Object.entries(option_meta.value).forEach(([sub_option, sub_option_meta]) => {
                        //====> for the Status Controller and any Switch Button <====//
                        if (sub_option === 'status' || options[`${option}-status`] === true) {
                            //===> Create Switch Button <===//
                            if(sub_option_meta.type === "boolean") {
                                //===> Label Correction <===//
                                let label = sub_option.replace('-', ' ');
                                if (sub_option === 'status') label = `${__('Enable','phenix')} ${option.replace('-', ' ')}`;
    
                                //===> Create the Element <===//
                                sub_options.push(<div className={`mb-5 col-${sub_option_meta.size ? sub_option_meta.size : 12}`} key={`${option}-${sub_option}`}>
                                    <OptionControl name={`options:${option}-${sub_option}`} checked={options[`${option}-${sub_option}`] ? options[`${option}-${sub_option}`] : sub_option_meta.value} onChange={set_value} type='switch-checkbox' className='small me-5 tx-capitalize'>{label}</OptionControl>
                                </div>);
                            }
                        }
                        //====> for the Others Controllers <====//
                        if (options[`${option}-status`] === true) {
                            //===> Create Post Types Select <===//
                            if (sub_option_meta.type === "post-type") sub_options.push(post_types_control(sub_option, sub_option_meta));
                            //===> Create Taxonomies Select <===//
                            if (sub_option_meta.type === "taxonomies") sub_options.push(post_taxonomies_control(sub_option, sub_option_meta));
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
            if(controls.length > 0) panels.push(<PanelBody key="template-options" title={__("Template Options", "phenix")} initialOpen={true}><div className='row gpx-10'>{controls}</div></PanelBody>)
            {/*===> Features Panel <===*/}
            if(features_panels.length > 0) panels.push(<PanelBody key="template-features" title={__("Template Features", "phenix")} initialOpen={true}><div className='row gpx-10'>{features_panels}</div></PanelBody>)
        }

        //===> Output <===//
        return (<>{panels}</>);
    }
}