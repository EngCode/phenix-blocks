//====> WP Modules <====//
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

//====> Edit Mode <====//
export default function Edit(props) {
    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();
    const [menus_list, set_menu_list] = useState([]);

    //===> Set Attributes <===//
    const set_menu_id = menu_id => setAttributes({ menu_id });
    const set_tagName = tagName => setAttributes({ tagName });
    const set_hover  = hover => setAttributes({ hover });
    const set_effect = effect => setAttributes({ effect });
    const set_arrow_icon = arrow_icon => setAttributes({ arrow_icon });
    const set_direction = direction => setAttributes({ direction });
    const set_mobile_mode = mobile_mode => setAttributes({ mobile_mode });
    const set_responsive = responsive => setAttributes({ responsive });

    //===> Get Menu List <===//
    useEffect(() => {
        apiFetch({path: 'pds-blocks/v2/options'}).then(options => {
            //===> Create New Array <===//
            let locations = options.menu_locations,
                menus_new_list = [];
            //===> Prepare Each Location for Select Array <===//
            for (const [key, value] of Object.entries(locations)) {
                menus_new_list.push({label: value, value: key});
            }
            //===> Set New Locations List <===//
            if (menus_list !== menus_new_list) set_menu_list([...menus_new_list]);
        });
    }, []);

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            <Panel>
                {/*===> Widget Panel <===*/}
                <PanelBody title="Setting" initialOpen={true}>
                    {/*===> Menu Location aka ID <===*/}
                    <SelectControl label="Menu Location {ID}" value={ attributes.menu_id } onChange={set_menu_id} options={menus_list} />

                    {/*=== Component <TagName> ===*/}
                    <SelectControl key="tagName" label="HTML Wrapper" value={attributes.tagName} onChange={set_tagName} options={[
                        { label: 'Default <nav>',  value: 'nav' },
                        { label: 'Main <main>',  value: 'main' },
                        { label: 'Aside <aside>',  value: 'aside' },
                        { label: 'Standard <div>',  value: 'div' },
                    ]}/>

                    {/*=== Direction Mode ===*/}
                    <SelectControl key="direction" label="Menu Direction" value={attributes.direction} onChange={set_direction} options={[
                        { label: 'Vertical',  value: 'px-vertical' },
                        { label: 'Horizontal',  value: 'flexbox' },
                    ]}/>

                    {/*===> Responsive <===*/}
                    <ToggleControl help="this will Hide the Menu in Mobile!" label="Responsive Menu" checked={attributes.responsive} onChange={set_responsive}/>
                </PanelBody>
                {/*===> Widget Panel <===*/}
                <PanelBody title="Style Options" initialOpen={false}>

                </PanelBody>
                {/*===> Widget Panel <===*/}
                {attributes.responsive ? <>
                <PanelBody title="Responsive Options" initialOpen={false}>
                    {/*=== Mobile Behavior ===*/}
                    <SelectControl key="mobile_mode" label="Mobile Mode" value={attributes.mobile_mode} onChange={set_mobile_mode} options={[
                        { label: 'Dropdown', value: 'dropdown' },
                        { label: 'Offcanvas', value: 'custom' },
                    ]}/>

                    {/*=== Animation Effect ===*/}
                    <SelectControl key="effect" label="Animation Effect" value={attributes.effect} onChange={set_effect} options={[
                        { label: 'Sliding', value: 'slide' },
                        { label: 'Fading', value: 'fade' },
                        { label: 'Custom', value: 'custom' },
                    ]}/>
                </PanelBody>
                </> : ""}
                {/*===> Widget Panel <===*/}
                <PanelBody title="Dropdown Options" initialOpen={false}>
                    {/*=== Arrow Icon ===*/}
                    <TextControl key="arrow_icon" label="Dropdown Icon" value={ attributes.arrow_icon } onChange={set_arrow_icon}/>
                    
                    {/*===> Dropdown Hover <===*/}
                    <ToggleControl label="Dropdown on Hover ?" checked={attributes.hover} onChange={set_hover}/>
                </PanelBody>
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