//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';
import ServerSideRender from '@wordpress/server-side-render';
import {PanelBody, TextControl, Toolbar} from '@wordpress/components';
import {BlockControls, InspectorControls, useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import ScreensTabs from "../px-controls/tabs";
import PxDropDown from '../px-controls/dropdown';
import PhenixNumber from "../px-controls/number";
import PhenixSelect from '../px-controls/select';
import OptionControl from '../px-controls/switch';

//====> Phenix Options Sets <=====//
import SelectFromData from "../px-controls/select-data";
import TypographySet from '../px-controls/sets/typography';
import AnimationsSet from '../px-controls/sets/animations';

//====> Phenix Modules <====//
import PhenixIcons from '../px-controls/icons';
import PhenixColor from '../px-controls/colors/text';
import PhenixBackground from '../px-controls/colors/background';

//====> Edit Mode <====//
export default function Edit(props) {
    //===> Value Handler <===//
    const valueHandler = (target) => {
        //===> Define Array Type <===//
        let single_val,
            array_val = [],
            type = target instanceof HTMLElement ? (target.getAttribute('type') || target.tagName) : null;

        //==> for Boolean Values <==//
        if (type === 'checkbox' || type === 'radio') {
            if (target.value === 'boolean') { single_val = target.checked; }
            else { single_val = target.checked ? target.value : ""; }
        }

        //===> for Value of Type Array <===//
        else if (type === "SELECT" && target.hasAttribute('multiple')) {
            //===> Get Multiple Value <===//
            let values = target.parentNode.getAttribute('data-value').split(',');
            //===> Get Current Values <===//
            values.forEach(val => val !== "" ? array_val.push(val) : null);
            //===> Set Array Value <===//
            single_val = array_val;
        }

        //===> for Normal Values <===//
        else if (type === null) { single_val = target; }

        //===> for Normal Values <===//
        else { single_val = target.value; }

        //===> Return Value <===//
        if(single_val) return single_val;
    };

    const set_value = (target) => {
        //==> Get Current <==//
        const name = target.getAttribute('name');
        const value = (typeof(target) === "string" || typeof(target) === "number") ? target : valueHandler(target);
        const newAttributes = { ...attributes, [name]: value };
        //==> Set Value <==//
        setAttributes(newAttributes);
    };

    //==> Set Responsive Method <==//
    const set_attr_handler = (target, screen, attr, hasName) => {
        //==> Get Current <==//
        const name = hasName || (target instanceof HTMLElement && target.getAttribute('name')) || (attr === "typography" ? "color" : attr === "style" ? "background" : `${target}`);
        const value = (typeof(target) === "string" || typeof(target) === "number") ? target : valueHandler(target);
        
        //==> Set Value <==//
        const newAttributes = name.includes('animation') ? {
            ...attributes[attr],
            animation: { ...attributes[attr].animation, [name.replace('animation-', '')]: value }
        } : {
            ...attributes[attr],
            [`${name}${screen && screen.length > 0 ? '-' + screen : ''}`]: value
        };

        setAttributes({ ...attributes, [attr]: newAttributes });
    };

    //==> Set Object Attributes Methods <==//
    const set_style = (target, screen) => set_attr_handler(target, screen, "style");
    const set_typography = (target, screen) => set_attr_handler(target, screen, "typography");

    //===> Set icons <===//
    const set_arrow_icon = icon => setAttributes({ arrow_icon: `${icon.type} ${icon.value}`});
    const set_items_icon = icon => setAttributes({ items_icon: `${icon.type} ${icon.value}`});

    //==> Ser Colors <==//
    const set_color = value => {
        //==> Get Current <==//
        let typography = attributes.typography;

        //==> Set Value <==//
        typography.color = value;
        setAttributes({ typography : {...typography} });
    };

    const set_color_hvr = value => {
        //==> Get Current <==//
        let typography = attributes.typography;

        //==> Set Value <==//
        typography.color_hvr = value;
        setAttributes({ typography : {...typography} });
    };

    //===> Set Backgrounds <===//
    const set_background = background => {
        //==> Get Current <==//
        let styles = attributes.style;

        //==> Set Value <==//
        styles.background = background;
        setAttributes({ style : {...styles} });
    };

    const set_background_hvr = background => {
        //==> Get Current <==//
        let styles = attributes.style;

        //==> Set Value <==//
        styles.background_hvr = background;
        setAttributes({ style : {...styles} });
    };

    //===> Get Properties <===//
    const {attributes, setAttributes} = props;
    const blockProps = useBlockProps();
    const uniqueKey = blockProps.id;

    //===> Define Options <===//
    const html_tags = [
        { label: 'nav', value: 'nav' },
        { label: 'main', value: 'main' },
        { label: 'aside', value: 'aside' },
        { label: 'div', value: 'div' },
    ];

    //===> Render <===//
    return (<>
        {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <Toolbar label={__("Quick Settings", "pds-blocks")}>
                {/*===> Select Control <===*/}
                <div className='inline-block inline-select tooltip w-75' data-title={__("HTML Wrapper", "pds-blocks")}>
                    <PhenixSelect name="tagName" placeholder={__("div", "pds-blocks")} className={`tx-align-center weight-medium`} value={attributes.tagName} onChange={set_value} options={html_tags} />
                </div>
                {/*===> Select Control <===*/}
                <div className='inline-block inline-select tooltip' style={{width: 125}} data-title={__("Menu Type", "pds-blocks")}>
                    <PhenixSelect name="menu_type" placeholder={__("Menu Type", "pds-blocks")} value={ attributes.menu_type } onChange={set_value} options={[
                        { label: 'Classic',  value: 'classic' },
                        { label: 'Taxonomies',  value: 'taxonomies' },
                        { label: 'Posts List',  value: 'posts' },
                    ]} />
                </div>
                {/*===> Dropdown Button <===*/}
                <PxDropDown title={__("Style Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-adjust divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="pds-styles" className='pdt-15 pdb-5 pdx-15 lineheight-150'>
                        <PhenixSelect name="direction" key="direction" label={__("Direction", "pds-blocks")} value={attributes.direction} onChange={set_value} options={[
                            { label: 'Vertical',  value: 'px-vertical' },
                            { label: 'Horizontal',  value: 'flexbox' },
                        ]} />
                        {/*===> Colors <===*/}
                        <label className='mb-5'>{__("Text Color", "pds-blocks")}</label>
                        {/*===> Elements Group <===*/}
                        <div className='row gpx-10 position-rv'>
                            {/*===> Column <===*/}
                            <div className='col-6 mb-10'>
                                <PhenixColor key="px-color" placeholder={__("Normal","pds-blocks")} isSmall={true} onChange={set_color} value={attributes.typography.color || ""} />
                            </div>
                            {/*===> Column <===*/}
                            <div className='col-6 mb-10'>
                                <PhenixColor key="px-color-hvr" placeholder={__("Hover","pds-blocks")} isSmall={true} onChange={set_color_hvr} value={attributes.typography.color_hvr || ""} />
                            </div>
                            {/*===> // Column <===*/}
                        </div>
                        {/*===> Background <===*/}
                        <label className='mb-5'>{__("Background Color", "pds-blocks")}</label>
                        {/*===> Elements Group <===*/}
                        <div className='row gpx-10 position-rv'>
                            {/*===> Column <===*/}
                            <div className='col-6 mb-10'>
                                <PhenixBackground key="px-bg" placeholder={__("Normal","pds-blocks")} isSmall={true} colorsOnly={true} onChange={set_background} type={attributes.style.background?.type || "color"} value={attributes.style.background?.value || ""} rotate={attributes.style.background?.rotate || null} />
                            </div>
                            {/*===> Column <===*/}
                            <div className='col-6 mb-10'>
                                <PhenixBackground key="px-bg-hvr" placeholder={__("Hover","pds-blocks")} isSmall={true} colorsOnly={true} onChange={set_background_hvr} type={attributes.style.background_hvr?.type || "color"} value={attributes.style.background_hvr?.value || ""} rotate={attributes.style.background_hvr?.rotate || null} />
                            </div>
                            {/*===> // Column <===*/}
                        </div>
                    </li>
                </PxDropDown>
                {/*===> Dropdown Button <===*/}
                <PxDropDown title={__("Typography Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-font divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="pds-typography" className='pdt-15 pdx-15 lineheight-150'>
                        <TypographySet key={`typography-${uniqueKey}`} attributes={attributes} mainSetter={set_typography}>
                            {/*===> Column <===*/}
                            <div className='col-6 mb-15'>
                                <PhenixNumber name="height" label={__("Line-Height (px)", "pds-blocks")} value={attributes.typography[`height`] ? attributes.typography[`height`] : 34} onChange={set_typography} min={0}></PhenixNumber>
                            </div>
                            {/*===> Column <===*/}
                            <div className='col-6 mb-15'>
                                <PhenixNumber name="padding" label={__("Padding (px)", "pds-blocks")} value={attributes.style[`padding`] ? attributes.style[`padding`] : 12} onChange={set_style} min={0}></PhenixNumber>
                            </div>
                            {/*===> // Column <===*/}
                        </TypographySet>
                    </li>
                </PxDropDown>
            </Toolbar>
        </BlockControls>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="Setting" initialOpen={true}>
                {/*=== Menu ID [Taxonomies/Posts] ===*/}
                {attributes.menu_type === "posts" || attributes.menu_type === "taxonomies" ? <div className={`row gpx-15`}>
                    {/*===> Column <===*/}
                    <div className='col col-6 mb-10'>
                        {attributes.menu_type === "taxonomies" ? <SelectFromData key={`data-id-${uniqueKey}`} options="taxonomies" name="menu_id" label={__("Taxonomy", "pds-blocks")} value={attributes.menu_id} valueSetter={set_value} /> : 
                            <SelectFromData key={`data-id-${uniqueKey}`} options="post-types" name="menu_id" label={__("Post Type", "pds-blocks")} value={attributes.menu_id} valueSetter={set_value} />
                        }
                    </div>
                    {/*===> Column <===*/}
                    {attributes.menu_type === "taxonomies" ?  
                        <div className='col col-6 mb-10'>
                            <SelectFromData key={`data-type-${uniqueKey}`} options="post-types" name="post_type" label={__("Post Type", "pds-blocks")} value={attributes.post_type} valueSetter={set_value} />
                        </div>
                    : null }
                    {/*===> Column <===*/}
                    <div className='col col-6 mb-15'>
                        <PhenixNumber name="items_count" label={__("Max Items", "pds-blocks")} value={attributes.items_count} onChange={set_value} min={0}></PhenixNumber>
                    </div>
                </div>
                //===> Menu Locations <====//
                : <div className='mb-10'>
                    <SelectFromData key={`data-id-${uniqueKey}`} options="menu-locations" name="menu_id" label={__("Menu-ID", "pds-blocks")} value={attributes.menu_id} valueSetter={set_value} />
                </div>}

                {/*=== Arrow Icon ===*/}
                <PhenixIcons key="arrow_icon" label={__("Dropdown Icon", "pds-blocks")} value={ attributes.arrow_icon } onChange={set_arrow_icon} />

                {/*=== Items Icon ===*/}
                {attributes.items_icon_op ? 
                    <PhenixIcons key="items_icon" label={__("Items Icon", "pds-blocks")} value={ attributes.items_icon } onChange={set_items_icon} />
                : null}

                {/*===> Toggle Options <===*/}
                <OptionControl name={`hover`} value="boolean" checked={attributes.hover} onChange={set_value} type='switch-checkbox' className='small me-10 inline-block'>{__("Hover=>Drop", "pds-blocks")}</OptionControl>
                <OptionControl name={`responsive`} value="boolean" checked={attributes.responsive} onChange={set_value} type='switch-checkbox' className='small inline-block'>{__("Responsive", "pds-blocks")}</OptionControl>
                <OptionControl name={`items_icon_op`} value="boolean" checked={attributes.items_icon_op} onChange={set_value} type='switch-checkbox' className='small me-10 inline-block'>{__("with Icons", "pds-blocks")}</OptionControl>
                <OptionControl name={`count_badge`} value="boolean" checked={attributes.count_badge} onChange={set_value} type='switch-checkbox' className='small inline-block'>{__("Count Badge", "pds-blocks")}</OptionControl>
            </PanelBody>
            {/*===> Widget Panel <===*/}
            {attributes.responsive ? <>
                <PanelBody title="Responsive Options" initialOpen={true}>
                    {/*===> Elements Group <===*/}
                    <div className='row gpx-20'>
                        {/*===> Column <===*/}
                        <div className='col-6 mb-5'>
                            <PhenixSelect name="mobile_mode" key="mobile_mode" label={__("Mode", "pds-blocks")} value={attributes.mobile_mode} onChange={set_value} options={[
                                { label: 'Default', value: '' },
                                { label: 'Dropdown', value: 'dropdown' },
                                { label: 'Offcanvas', value: 'custom' },
                            ]}/>
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-6 mb-5'>
                            <PhenixSelect name="effect" key="effect" label={__("Effect", "pds-blocks")} value={attributes.effect} onChange={set_value} options={[
                                { label: 'Default', value: '' },
                                { label: 'Sliding', value: 'slide' },
                                { label: 'Fading', value: 'fade' },
                                { label: 'Custom', value: 'custom' },
                            ]}/>
                        </div>
                        {/*===> Column <===*/}
                        <div className='col-12'>
                            <OptionControl name={`trigger`} value="boolean" checked={attributes.trigger} onChange={set_value} type='switch-checkbox' className='small me-10 inline-block'>{__("Attach Trigger Button", "pds-blocks")}</OptionControl>
                        </div>
                        {/*===> // Column <===*/}
                    </div>
                </PanelBody>
            </> : ""}
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        {attributes.preview ? <img src={PreviewImage} alt="" className="fluid" /> : <div {...blockProps}>
            <ServerSideRender block="phenix/navigation" attributes={attributes} />
        </div>}
    </>);
}