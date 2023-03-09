//====> WP Modules <====//
import { __ } from '@wordpress/i18n';

import {
    Panel,
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

//====> Phenix Modules <====//
import PhenixIcons from '../px-controls/icons';

//====> Edit Mode <====//
export default function Edit(props) {
    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();
    const [menus_list, set_menu_list] = useState([]);
    const [icons_list, set_icons_list] = useState([]);
    const [icons_version, set_icons_version] = useState("5-free");

    //===> Set Attributes <===//
    const set_menu_id = menu_id => setAttributes({ menu_id });
    const set_tagName = tagName => setAttributes({ tagName });
    const set_hover  = hover => setAttributes({ hover });
    const set_effect = effect => setAttributes({ effect });
    const set_arrow_icon = icon => setAttributes({ arrow_icon: `${icon.type} ${icon.value}`});
    const set_direction = direction => setAttributes({ direction });
    const set_mobile_mode = mobile_mode => setAttributes({ mobile_mode });
    const set_responsive = responsive => setAttributes({ responsive });
    const set_trigger = trigger => setAttributes({ trigger });

    //===> Sharp Icons Fallback <===//
    let arrow_ops = attributes.arrow_icon.split(" "),
        arrowIcon = arrow_ops[1],
        arrowType = arrow_ops[0];
    
    if (attributes.arrow_icon.includes('fa-sharp')) {
        arrowType = `${arrow_ops[0]} ${arrow_ops[1]}`,
        arrowIcon = arrow_ops[2];
    }

    //===> Fetching Data <===//
    useEffect(() => {
        apiFetch({path: 'pds-blocks/v2/options'}).then(options => {
            //===> Create New Array <===//
            let locations = options.menu_locations,
                menus_new_list = [{label: __("Default", 'phenix'), value: ""}];
            //===> Prepare Each Location for Select Array <===//
            for (const [key, value] of Object.entries(locations)) {
                menus_new_list.push({label: value, value: key});
            }
            //===> Set New Locations List <===//
            if (menus_list !== menus_new_list) set_menu_list([...menus_new_list]);

            //===> Fetch Icons List <===//
            let filename = `${options.pds_icon_font.replace("fontawesome-", "fa")}`;

            //===> Correct Icons <===//
            if (attributes.arrow_icon.split(" ")[0] === "fab") filename = filename.replace(filename.includes("free") ? "free" : "pro", "brands")
            if (filename.includes('pro')) set_icons_version(icons_version.replace("free", "pro"));
            if (filename.includes('6')) set_icons_version(icons_version.replace("5", "6"));

            //===> Start Fetching <===//
            fetch(`${PDS_WP_KEY.json}/${filename}.json`).then(res => res.json()).then(json => {
                let iconsList = json.icons;
                if (iconsList !== icons_list) set_icons_list([...iconsList]);
            });
        });
    }, []);

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            <Panel>
                {/*===> Widget Panel <===*/}
                <PanelBody title="Setting" initialOpen={true}>
                    {/*===> Elements Group <===*/}
                    <div className='row gpx-20'>
                        {/*===> Column <===*/}
                        <div className='col-12 mb-10'>
                            <SelectControl label={__("Location (ID)", "phenix")} value={ attributes.menu_id } onChange={set_menu_id} options={menus_list} />
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-6 mb-10'>
                            <SelectControl key="direction" label={__("Direction", "phenix")} value={attributes.direction} onChange={set_direction} options={[
                                { label: 'Vertical',  value: 'px-vertical' },
                                { label: 'Horizontal',  value: 'flexbox' },
                            ]}/>
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-6 mb-10'>
                            <SelectControl key="tagName" label={__("HTML Tag", "phenix")} value={attributes.tagName} onChange={set_tagName} options={[
                                { label: '<nav>', value: 'nav' },
                                { label: '<main>', value: 'main' },
                                { label: '<aside>', value: 'aside' },
                                { label: '<div>', value: 'div' },
                            ]}/>
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-6 mb-10'>
                            <ToggleControl label="Responsive" checked={attributes.responsive} onChange={set_responsive}/>
                        </div>
                        {/*===> // Column <===*/}
                    </div>
                </PanelBody>
                {/*===> Widget Panel <===*/}
                <PanelBody title="Style Options" initialOpen={false}>

                </PanelBody>
                {/*===> Widget Panel <===*/}
                <PanelBody title="Dropdown Options" initialOpen={false}>
                    {/*=== Arrow Icon ===*/}
                    <PhenixIcons key="arrow_icon" label="Dropdown Icon" icons={icons_list} version={icons_version} type={ arrowType } value={ arrowIcon } onChange={set_arrow_icon} />
                    
                    {/*===> Dropdown Hover <===*/}
                    <ToggleControl label="Support Hover" checked={attributes.hover} onChange={set_hover}/>
                </PanelBody>
                {/*===> Widget Panel <===*/}
                {attributes.responsive ? <>
                <PanelBody title="Responsive Options" initialOpen={true}>
                    {/*===> Elements Group <===*/}
                    <div className='row gpx-20'>
                        {/*===> Column <===*/}
                        <div className='col-6 mb-5'>
                            <SelectControl key="mobile_mode" label={__("Mode", "phenix")} value={attributes.mobile_mode} onChange={set_mobile_mode} options={[
                                { label: 'Default', value: '' },
                                { label: 'Dropdown', value: 'dropdown' },
                                { label: 'Offcanvas', value: 'custom' },
                            ]}/>
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-6 mb-5'>
                            <SelectControl key="effect" label={__("Effect", "phenix")} value={attributes.effect} onChange={set_effect} options={[
                                { label: 'Default', value: '' },
                                { label: 'Sliding', value: 'slide' },
                                { label: 'Fading', value: 'fade' },
                                { label: 'Custom', value: 'custom' },
                            ]}/>
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-12'>
                            <ToggleControl label={__("Attach Trigger Button", "phenix")} checked={attributes.trigger} onChange={set_trigger}/>
                        </div>
                        {/*===> // Column <===*/}
                    </div>
                </PanelBody>
                </> : ""}
                {/*===> End Widgets Panels <===*/}
            </Panel>
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        <div {...blockProps}>
            {/* <div className='pdy-10 pdx-20 border-1 border-dashed border-alpha-25 fs-14'>Dynamic Menu Location {attributes.menu_id}</div> */}
            <ServerSideRender block="phenix/navigation" attributes={attributes} />
        </div>
    </>);
}