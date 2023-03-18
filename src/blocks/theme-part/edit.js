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

//====> Phenix Components <====//
import TemplateOptions from '../px-controls/elements/templates-meta';
import PhenixComponentsBuilder from '../px-controls/panel-scripts';

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

    //===> Set Template Option <===//
    const set_template_option = part_options => setAttributes({ part_options });

    //===> Fetching Data <===//
    useEffect(() => {
        //===> Fetch PDS Options <===//
        apiFetch({path: 'pds-blocks/v2/options'}).then(options => {
            //===> Create New Array <===//
            let new_state = state,
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

            //===> Set State <===//
            if (new_state !== state) set_state({...new_state});
        });

        //===> Run Phenix Components <===//
        if(state.templates_meta.length > 0) PhenixComponentsBuilder();
    }, []);

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("General Setting", "phenix")} initialOpen={true}>
                {/*=== Template Name ===*/}
                <label className='mb-5'>{__("Template Name", "phenix")}</label>
                <select className='px-select form-control pds-tm-control small radius-md' data-search="1" defaultValue={ attributes.part_name } onChange={set_part_name} >
                    {state.template_list}
                </select>
            </PanelBody>
            {/*=== Template Meta Panels ===*/}
            {state.templates_meta[attributes.part_name] ? 
                <TemplateOptions options={attributes.part_options.options} features={attributes.part_options.features} meta={state.templates_meta[attributes.part_name]} onChange={set_template_option} />
            : null}
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        <div {...blockProps}>
            <ServerSideRender block="phenix/theme-part" attributes={attributes}  />
        </div>
    </>);
}