//====> WP Modules <====//
import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl
} from '@wordpress/components';

import {
    useBlockProps,
    InspectorControls
} from '@wordpress/block-editor';

import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import ServerSideRender from '@wordpress/server-side-render';

//====> Edit Mode <====//
export default function Edit(props) {
    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();
    const [state, set_state] = useState({
        post_types: [],
        taxonomies: [],
        templates_meta: {},
        template_list: [<option key={__("Default", "phenix")} value="">{__("Default", "phenix")}</option>],
    });

    //===> Set Attributes <===//
    const set_part_name = part_name => setAttributes({ part_name });

    //===> Get Template Options <===//
    const get_template_options = () => {
        //===> Define Options List <===//
        let options_panels = [],
            template_opts = state.templates_meta[attributes.part_name];

        //===> Check if the Template Has Meta Data <===//
        if (template_opts) {
            console.log(template_opts['options']);
            //===> Loop Through Template Options <===//
            template_opts['options'].forEach(option => { 
                //===> Define Data <===//
                let option_element;

                //===> Post Types Select <===//
                console.log(option);
            });

            {/*===> Options Panel <===*/}
            options_panels.push(
                <PanelBody key="template-options" title={__("Template Options", "phenix")} initialOpen={true}>
                    
                </PanelBody>
            )
        }

        //===> Return the Options <===//
        return <>{options_panels}</>;
    };

    //===> Fetching Data <===//
    useEffect(() => {
        apiFetch({path: 'pds-blocks/v2/options'}).then(options => {
            //===> Create New Array <===//
            let new_state = state,
                post_types = options.pds_types,
                taxonomies = options.pds_taxonomies,
                meta_templates = options.templates_meta,
                template_parts = options.theme_parts;

            //===> Loop Through Theme-Parts <===//
            Object.entries(template_parts).forEach(([key, value]) => {
                //===> if its direct theme-part <===//
                if(typeof(value) === 'string') {
                    new_state.template_list.push(<option key={`${key}-${value}`} value={value.replace(".php", "")}>{value.replace('-', ' ').replace('_', '').replace(".php", "")}</option>);
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
                    new_state.template_list.push(<optgroup key={`${key}-group`} label={`${key}`}>{files_list}</optgroup>);
                }
            });

            //===> Get Phenix Data <===//
            if(meta_templates !== state.templates_meta) new_state.templates_meta = meta_templates;
            if(post_types !== state.post_types) new_state.post_types = post_types;
            if(taxonomies !== state.taxonomies) new_state.taxonomies = taxonomies;

            //===> Set State <===//
            if (new_state !== state) set_state({...new_state});
        });
    }, []);

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("General Setting", "phenix")} initialOpen={true}>
                {/*=== Template Name ===*/}
                <SelectControl label={__("Template Name", "phenix")} value={ attributes.part_name } onChange={set_part_name} >
                    {state.template_list}
                </SelectControl>
            </PanelBody>
            {/*=== Template Meta Panels ===*/}
            {get_template_options()}
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        <div {...blockProps}>
            <ServerSideRender block="phenix/theme-part" attributes={attributes}  />
        </div>
    </>);
}