//====> .Dependencies. <====//
import {__} from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import {Component} from '@wordpress/element';

//====> Phenix Modules <====//
import PhenixSelect from './select';

//===> Phenix Form Control <===//
export default class SelectFromData extends Component {
    //===> States <===//
    state = {
        dataFetched: 0,
        options: [{label: __("Default", "pds-blocks"), value: ""}],
    };

    //===> Component Rendered Hook <===//
    reRender = () => {
        //===> Fetch Data <===//
        if(this.state.options.length < 2) {
            //===> for PDS Menu Locations <===//
            if (this.props.options === "menu-locations") {
                apiFetch({path: 'pds-blocks/v2/options'}).then(options => {
                    //===> Create New Array <===//
                    const new_state = this.state,
                        locations = options.menu_locations,
                        new_options_list = [{label: __("Default", "pds-blocks"), value: ""}];
        
                    //===> add Locations to a List <===//
                    for (const [key, item] of Object.entries(locations)) {
                        new_options_list.push(location);
                    }
    
                    //===> Set new Options List <===//
                    if (new_options_list !== this.state.options) {
                        new_state.dataFetched += 1;
                        new_state.options = new_options_list;
                        //===> Set State <===//
                       this.setState({...new_state});
                    }
                });
            }
            //====> for taxonomies <====//
            else if (this.props.options === "taxonomies") {
                //===> Fetch Taxonomies <===//
                apiFetch({path: 'wp/v2/taxonomies'}).then(taxonomies => {
                    //===> Define Types <===//
                    const new_state = this.state,
                          new_options_list = [];

                    //===> Get Current Active Types <===//
                    for (const [key, value] of Object.entries(taxonomies)) {
                        //===> Exclude the Core Types <===//
                        if ("nav_menu" !== key) {
                            new_options_list.push({"value":key, "label":value.name});
                        }
                    }

                    //===> Set new Options List <===//
                    if (new_options_list !== this.state.options) {
                        new_state.dataFetched += 1;
                        new_state.options = new_options_list;
                        //===> Set State <===//
                        this.setState({...new_state});
                    }
                });
            }
            //====> for Post-Types <====//
            else if (this.props.options === "post-types") {
                //===> Fetch Post Types <===//
                apiFetch({path: 'wp/v2/types'}).then(post_types => {
                    //===> Define Types <===//
                    const new_state = this.state,
                          new_options_list = [];
            
                    //===> Get Current Active Types <===//
                    for (const [key, value] of Object.entries(post_types)) {
                        //===> Exclude the Core Types <===//
                        if (!['attachment', 'nav_menu_item', 'wp_block', 'wp_navigation', 'wp_template', 'wp_template_part'].includes(key)) {
                            new_options_list.push({"value":key, "label":value.name});
                        }
                    }
            
                    //===> Set new Options List <===//
                    if (new_options_list !== this.state.options) {
                        new_state.dataFetched += 1;
                        new_state.options = new_options_list;
                        //===> Set State <===//
                        this.setState({...new_state});
                    }

                });
            }
            //====> for Users-Roles <====//
            else if (this.props.options === "users-roles") {
                //===> Fetch Roles <===//
                apiFetch({path: 'pds-blocks/v2/options'}).then(options => {
                    //===> Define Types <===//
                    const new_state = this.state,
                          new_options_list = [];
            
                    //===> Get Current Roles <===//
                    for (const [key, value] of Object.entries(options.users_roles)) {
                        new_options_list.push({"value": value.name, "label": value.name});
                    }
            
                    //===> Set new Options List <===//
                    if (new_options_list !== this.state.options) {
                        new_state.dataFetched += 1;
                        new_state.options = new_options_list;
                        //===> Set State <===//
                        this.setState({...new_state});
                    }
                });
            }
            //====> for Template-Parts <====//
            else if (this.props.options === "template-parts") {
                apiFetch({path: 'pds-blocks/v2/options'}).then(options => {
                    //===> Create New Array <===//
                    const new_state = this.state,
                          template_parts = options.theme_parts,
                          new_options_list = [];

                    //===> Loop Through Theme-Parts <===//
                    Object.entries(template_parts).forEach(([key, value]) => {
                        //===> if its direct theme-part <===//
                        if(typeof(value) === 'string') {
                            new_options_list.push(<option key={`${key}-${value}`} value={value.replace(".php", "")}>{value.replace('-', ' ').replace('_', '').replace(".php", "")}</option>);
                        }
                        //===> if its nested theme-part in a directory <===//
                        else {
                            //===> Define Directory Files <===//
                            let files_list = [];
                            //===> Loop Through Files <===//
                            Object.entries(value).forEach(([key2, value]) => {
                                //===> add the file to the list <===//
                                files_list.push(<option key={`${key2}-${value}`} value={`${key}/${value.replace(".php", "")}`}>{`${value.replace('-', ' ').replace('_', '').replace(".php", "")}`}</option>);
                            });
                            //===> Push the Options Group <===//
                            new_options_list.push(<optgroup key={`${key}-group`} label={`${key}`}>{files_list}</optgroup>);
                        }
                    });

                    //===> Set new Options List <===//
                    if (new_options_list !== this.state.options) {
                        new_state.dataFetched += 1;
                        new_state.options = new_options_list;
                        //===> Set State <===//
                       this.setState({...new_state});
                    }
                });
            }
        }
    };

    //===> Fetch Data When Rendered <===//
    componentDidMount() { this.reRender(); };
    //===> Fetch Data When Updated <===//
    componentDidUpdate() { this.reRender(); };

    render () {
        //===> Properties <===//
        const {options, name, type, size, label, value, multiple, valueSetter, className, search } = this.props;
        const uniqueKey = Date.now().toString(36) + Math.random().toString(36).substr(2, 5)+`-flexbox-${screen}-option`;

        //===> Render Component <===//
        return <PhenixSelect key={this.state.dataFetched} type={type} options={this.state.options} multiple={multiple} name={name} placeholder={__("Default", "pds-blocks")} label={label} value={value} onChange={valueSetter} className={className} search={search} size={size} />
    }
}