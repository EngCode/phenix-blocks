//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import {PanelBody, TextControl, Toolbar} from '@wordpress/components';
import {BlockControls, RichText, useBlockProps, InspectorControls, __experimentalLinkControlSearchInput as LinkControlSearchInput} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import ScreensTabs from "../px-controls/tabs";
import PhenixIcons from '../px-controls/icons';
import PxDropDown from '../px-controls/dropdown';
import PhenixSelect from '../px-controls/select';
import OptionControl from '../px-controls/switch';
import MediaUploader from '../px-controls/uploader';
import SelectFromData from "../px-controls/select-data";

import PaddingSet from '../px-controls/sets/padding';
import MarginSet from '../px-controls/sets/margin';
import PositionSet from '../px-controls/sets/position';

//====> Phenix Options Sets <=====//
import StylesSet from '../px-controls/sets/styles';
import TypographySet from '../px-controls/sets/typography';
import ResponsiveSet from '../px-controls/sets/responsive';
import AnimationsSet from '../px-controls/sets/animations';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
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
            [`${name}${screen ? '-' + screen : ''}`]: value
        };

        setAttributes({ ...attributes, [attr]: newAttributes });
    };

    //==> Set Object Attributes Methods <==//
    const set_style = (target, screen) => set_attr_handler(target, screen, "style");
    const set_typography = (target, screen) => set_attr_handler(target, screen, "typography");
    const set_responsive = (target, screen) => set_attr_handler(target, screen, 'responsive');

    //===> Responsive Options <===//
    const responsive_options = (screen) => {
        return (<ResponsiveSet 
            screen={screen}
            attributes={attributes}
            styleSetter={set_style}
            mainSetter={set_responsive}
            typoSetter={set_typography}
            options={`display, text-size, component-size`}
        />);
    };

    //===> Set Settings <===//
    const set_label = label => setAttributes({ label });
    const set_data_modal = data_modal => setAttributes({ data_modal });
    const set_icon = value => setAttributes({ icon: `${value.type} ${value.value}`});

    //===> Link Settings <===//
    const set_url = url => setAttributes({ url });

    //===> Define Controls Options <===//
    const btn_types = [
        { label: __("Default", "pds-blocks"), value: 'btn' },
        { label: __("Text/Icon", "pds-blocks"), value: 'btn btn-icon' },
        { label: __("Icon Only", "pds-blocks"), value: 'btn square tooltip-bottom' },
    ];

    const btn_sizes = [
        { label: __("XS", "pds-blocks"), value: 'tiny' },
        { label: __("SM", "pds-blocks"), value: 'small' },
        { label: __("MD", "pds-blocks"), value: '' },
        { label: __("LG", "pds-blocks"), value: 'large' },
        { label: __("XL", "pds-blocks"), value: 'xlarge' },
    ];

    const lightbox_types = [
        { label: __("Image", "pds-blocks"),  value: 'image' },
        { label: __("Video", "pds-blocks"),  value: 'video' },
        { label: __("Embed", "pds-blocks"),  value: 'embed' },
    ];

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const uniqueKey = blockProps.id;

    //===> Label Element <===//
    const labelControl = <RichText key={`btn-text-${uniqueKey}`} value={ attributes.label } onChange={set_label} allowedFormats={[]} tagName="span" placeholder="TXT" className="mg-0 pd-0" />;

    //===> Rendering Checkers <===//
    const isObjectVal = (option_value) => {return typeof option_value === 'object'},
        isBooleanVal = (option_value) => {return typeof option_value === 'boolean'},
        isNormalValue = (option_value) => {return typeof option_value === 'string' || typeof option_value === 'number' || typeof option_value === 'array'};

    //===> Rendering Options <===//
    Object.entries(attributes).forEach(([option_name, option_value]) => {
        //===> Exclude Options <===//
        const excluded = ["lightbox_type", "label", "className"];
        if (excluded.some(opt => opt === option_name)) return;

        //===> if its a Normal Values that should be string <===//
        if (isNormalValue(option_value) && attributes[option_name]) {
            //===> for Data Modal <===//
            if (option_name === "data_modal") {blockProps['data-modal'] = attributes[option_name];}
            //===> for URL <===//
            else if (option_name === "url" && attributes.isLink  || attributes.isLightBox) {blockProps['href'] = "#none";}
            //===> for Data ID <===//
            else if (option_name === "data_id") {
                blockProps.className += ` menu-toggle`;
                blockProps['data-id'] = attributes[option_name];
            }
            //===> for Icons <===//
            else if (option_name === "icon" && attributes[option_name]) {
                if (attributes.type.includes('icon') || attributes.type.includes('square')) {blockProps.className += ` ${attributes[option_name].toString().replace(',', ' ').trim()}`;}
            }
            //===> Fallback for Old Types <===//
            else if (option_name === "type") {blockProps.className += ` ${attributes[option_name].replace('normal', 'btn').trim()}`;}
            //===> for Other Options <===//
            else if (attributes[option_name]) {blockProps.className += ` ${attributes[option_name].toString().replace(',', ' ').trim()}`;};
        } 
        //===> for Boolean Options <===//
        else if (isBooleanVal(option_value) && attributes[option_name]) {
            //===> for Link Options <===//
            if (option_name === "isLink" || option_name === "inNewTab") {
                if (option_name === "inNewTab") {blockProps['target'] = "_blank";} else {blockProps['rel']  = "noopener";}
            }
            //===> for Lightbox Options <===//
            else if (option_name === "isLightBox" && option_value) {
                blockProps.className += ' px-lightbox';
                if (attributes.lightbox_type) blockProps['data-media'] = attributes.lightbox_type;
            };
        }
        //===> if its object[group] Option like [style, typography, responsive] <===//
        else if (isObjectVal(option_value) && attributes[option_name]) {
            //===> loop on the Object Options <===//
            Object.entries(option_value).forEach(([sub_option, sub_value]) => {
                //===> Check if the attribute is Set <===//
                if (!attributes[option_name][sub_option]) return;

                //===> if its a Object Value <===//
                if (!isNormalValue(sub_value)) {
                    //===> Background Specials <===//
                    if (sub_option === "background" && sub_value.value) {
                        //===> Adjust Primary Colors <===//
                        let isPrimary = false,
                            primaryColors = ["bg-primary", "bg-secondary", "bg-gray", "bg-dark", "bg-white", "bg-success", "bg-danger", "bg-warning", "bg-info"];
                        //===> Correct Colors <===//
                        primaryColors.forEach(color => sub_value.value === color ? isPrimary = true : null);
                        //===> Set the Background <===//
                        if (isPrimary) {blockProps.className += sub_value.value.includes('bg-white') ? ` light` : ` ${sub_value.value.replace('bg-', '')}`;} 
                        else {blockProps.className += ` ${sub_value.value}`;}
                        //===> Background Rotation <===//
                        if (sub_value.rotate) blockProps.className += ` ${sub_value.rotate}`;
                    }
                    //===> Animations Specials <===//
                    else if (sub_option === "animation" && sub_value.name) {
                        blockProps['data-animation'] = sub_value.name;
                        sub_value.delay && (blockProps['data-delay'] = sub_value.delay);
                        sub_value.reverse && (blockProps['data-flow'] = sub_value.reverse);
                        sub_value.offset && (blockProps['data-offset'] = sub_value.offset);
                        sub_value.duration && (blockProps['data-duration'] = sub_value.duration);
                        sub_value['exit-name'] && (blockProps['data-animation-exit'] = sub_value['exit-name']);
                    }
                    //===> Styles Support <===//
                    else if (sub_option === "support") {
                        sub_value.forEach(property => !property.includes('enable-') ? blockProps.className += ` ${property}` : null);
                    }
                    //===> Display Support <===//
                    else if (sub_option === "display") blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;
                }
                //===> for Normal strings and Arrays <===//
                else if (isNormalValue(sub_value)) {
                    //===> Postion Absolute Sticky <===//
                    if (sub_option === "position" && sub_value === "sticky-absolute") {blockProps["data-sticky"] = `${sub_value}`;}
                    //===> Padding Values <===//
                    else if (sub_option.includes('pdt') || sub_option.includes('pds') || sub_option.includes('pde') || sub_option.includes('pdb')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                    //===> Margin Values <===//
                    else if (sub_option.includes('mt') || sub_option.includes('ms') || sub_option.includes('me') || sub_option.includes('mb')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                    //===> Positions Values <===//
                    else if (sub_option.includes('pos-')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                    //===> Other Values <===//
                    else {blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;}
                };
            });
        };
    });

    //===> URL Auto-Complete <===//
    const suggestionsRender = (props) => (
        <ul className="fluid reset-list bg-white bx-shadow-dp-1 border-1 border-solid border-alpha-10 z-index-dropdown position-ab pos-start-0 pos-after-y">
            {props.suggestions.map((suggestion, index) => {
                return (<li key={`link-sug-key-${index}`} className="pdx-15 pdy-5 fs-12 divider-b mouse-pointer" onClick={() => props.handleSuggestionClick(suggestion)}>
                    <strong>{suggestion.title}</strong>
                    <span className='display-block fs-10 color-primary tx-nowrap'>{suggestion.url}</span>
                </li>)
            })}
        </ul>
    );

    //===> Render <===//
    return (<> 
        {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <Toolbar label={__("Quick Settings", "pds-blocks")}>
                {/*===> Select Control <===*/}
                <div className='inline-block inline-select tooltip' style={{width: 130}} data-title={__("Button Type", "pds-blocks")}>
                    <PhenixSelect key={`btn-type-${uniqueKey}`} className={`tx-align-center weight-medium`} name="type" placeholder={__("Default", "pds-blocks")} value={attributes.type} onChange={set_value} options={btn_types} />
                </div>
                {/*===> Select Control <===*/}
                <div className='inline-block inline-select tooltip' data-title={__("Button Size", "pds-blocks")}>
                    <PhenixSelect key={`size-${uniqueKey}`} className="weight-bold tx-uppercase tx-align-center" name="size" placeholder={__("MD", "pds-blocks")} value={attributes.size} onChange={set_value} options={btn_sizes} />
                </div>
                {/*===> Dropdown Button <===*/}
                {attributes.type.includes('icon') || attributes.type.includes('square') ?
                <PxDropDown title={__("Button Icon", "pds-blocks")} button={`bg-transparent fs-16 square ${attributes.icon} divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="icons" className='pd-10'>
                        {/*===> Icon Selector <===*/}
                        <PhenixIcons key={`icon-${uniqueKey}`} value={ attributes.icon } onChange={set_icon} />
                        {/*===> Options Group <===*/}
                        <div className='flexbox gpy-5 gpy-fix pdx-5'>
                            {/*===> Option Control <===*/}
                            <OptionControl key={`icon-large-${uniqueKey}`} name={`icon-large`} value="icon-lg" checked={attributes.style['icon-large'] || false} onChange={set_style} type='checkbox' className='tiny me-10'>
                                <span className='fas fa-check radius-circle'>{__("Large", "pds-blocks")}</span>
                            </OptionControl>
                            {attributes.type.includes('icon') ? <>
                                {/*===> Option Control <===*/}
                                <OptionControl key={`iconLabel-${uniqueKey}`} name={`iconLabel`} value="boolean" checked={attributes.iconLabel || false} onChange={set_value} type='checkbox' className='tiny me-10'>
                                    <span className='fas fa-check radius-circle'>{__("Labeled", "pds-blocks")}</span>
                                </OptionControl>
                                {/*===> Option Control <===*/}
                                <OptionControl key={`responsive-btn-${uniqueKey}`} name={`responsive-btn`} value="responsive-btn" checked={attributes.style['responsive-btn'] || false} onChange={set_style} type='checkbox' className='tiny'>
                                    <span className='fas fa-check radius-circle'>{__("Responsive", "pds-blocks")}</span>
                                </OptionControl>
                                {/*===> Option Control <===*/}
                                <OptionControl key={`iconEnd-${uniqueKey}`} name={`iconEnd`} value="boolean" checked={attributes.iconEnd || false} onChange={set_value} type='checkbox' className='tiny me-10'>
                                    <span className='fas fa-check radius-circle'>{__("Revers POS", "pds-blocks")}</span>
                                </OptionControl>
                            </> : null }
                        </div>
                        {/*===> Label Input <===*/}
                        {attributes.type.includes('square') ? <div className='mb-15'>
                            <TextControl key={`label-${uniqueKey}`} label={__("Label Text", "pds-blocks")} value={ attributes.label } onChange={set_label} />
                        </div> : null }
                    </li>
                </PxDropDown>: null}
                {/*===> Dropdown Button <===*/}
                <PxDropDown title={__("Style Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-adjust divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="pds-styles" className='pdt-15 pdb-5 pdx-15 lineheight-150'>
                        <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} mainSetter={set_style} colorSetter={set_typography} bgOnly="onlyCG" options="text-colors, background" />
                    </li>
                </PxDropDown>
                {/*===> Dropdown Button <===*/}
                <PxDropDown title={__("Typography Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-font divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="pds-typography" className='pdt-15 pdx-15 lineheight-150'>
                        <TypographySet key={`typography-${uniqueKey}`} attributes={attributes} mainSetter={set_typography} />
                    </li>
                </PxDropDown>
                {/*===> Link Input <===*/}
                {attributes.isLink ? <PxDropDown title={__("URL Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-link color-success divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-260" dataPosition={`bottom, end`}>
                    <li key="link" className='pdx-15 pdt-10 pdb-0 mb-0'>
                        <LinkControlSearchInput key={`url-${uniqueKey}`} name="url" placeholder={__("URL or Page Name", "pds-blocks")} onChange={set_url} value={ attributes.url } allowDirectEntry={false} withURLSuggestion={false} withCreateSuggestion={false} renderSuggestions={(props) => suggestionsRender(props)} />
                        {/*===> Option Control <===*/}
                        <OptionControl key={`inNewTab-${uniqueKey}`} name={`inNewTab`} value={`boolean`} checked={attributes.inNewTab || false} onChange={set_value} type='checkbox' className='tiny me-15'>
                            <span className='fas fa-check radius-circle'>{__("Open in New Tab", "pds-blocks")}</span>
                        </OptionControl>
                        {/*===> Disable Button <===*/}
                        <div className='fluid' style={{paddingBottom: 3}}>
                            <OptionControl key={`isLink-${uniqueKey}`} name={`isLink`} value={`boolean`} checked={attributes.isLink || false} onChange={set_value} type='checkbox' className='tiny fluid align-center-x divider-t mt-5'>
                                <span className='btn small fluid bg-transparent fs-12 color-danger'>{__("Disable URL Link", "pds-blocks")}</span>
                            </OptionControl>
                        </div>
                    </li>
                </PxDropDown> :
                /*===> Add Link <===*/
                <OptionControl key={`isLink-${uniqueKey}`} name={`isLink`} value={`boolean`} checked={attributes.isLink || false} onChange={set_value} type='button-checkbox' className='inline-block'>
                    <span className='btn bg-transparent fs-16 square tooltip far fa-link' data-title={__("Convert to Link", "pds-blocks")}></span>
                </OptionControl>}
                {/*===> Option Control <===*/}
                <OptionControl key={`hover-style-${uniqueKey}`} name={`hover-style`} value={`boolean`} checked={attributes.style['hover-style'] || false} onChange={set_style} type='button-checkbox' className='inline-block'>
                    <span className='btn bg-transparent fs-16 square tooltip far fa-bullseye-pointer' data-title={__("Custom Hover Style", "pds-blocks")}></span>
                </OptionControl>
                {/*===> Option Control <===*/}
                <OptionControl key={`outline-${uniqueKey}`} name={`outline`} value={`outline`} checked={attributes.outline || false} onChange={set_value} type='button-checkbox' className='inline-block'>
                    <span className='btn bg-transparent fs-16 square tooltip pxi pxi-outline-btn' data-title={__("Outline Style", "pds-blocks")}></span>
                </OptionControl>
                {/*===> Dropdown Button <===*/}
                {attributes.isLightBox ? <PxDropDown title={__("URL Options", "pds-blocks")} button={`bg-transparent fs-16 square pxi pxi-lightbox-btn active divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-260" dataPosition={`bottom, end`}>
                    <li key="lightbox" className='pdx-15 pdt-15 pdb-0 mb-0'>
                        {/*===> Column <===*/}
                        <div className='col-12 mb-10'><PhenixSelect key={`lightbox-type-${uniqueKey}`} name="lightbox_type" placeholder={__("Source Type", "pds-blocks")} value={attributes.lightbox_type} onChange={set_value} options={lightbox_types} /></div>
                        {/*===> Column <===*/}
                        <div className='col-12'>{attributes.lightbox_src ?  
                            <MediaUploader key={`lightbox-src-${uniqueKey}`} label={__("Upload Source", "pds-blocks")} type={attributes.lightbox_type} value={attributes.url} setValue={(file => {setAttributes({url: file.url})})}></MediaUploader>
                            :
                            <TextControl key={`lightbox-src-input-${uniqueKey}`} label={__("Source URL", "pds-blocks")} value={ attributes.url } onChange={set_url}/>
                        }</div>
                        {/*===> Column <===*/}
                        <div className='col-12'><OptionControl key={`lightbox_src-${uniqueKey}`} name={`lightbox_src`} value="boolean" checked={attributes.lightbox_src || false} onChange={set_value} type='switch-checkbox' className='small'>{__("Upload Source", "pds-blocks")}</OptionControl></div>
                        {/*===> Disable Button <===*/}
                        <div className='fluid' style={{paddingBottom: 3}}>
                            <OptionControl key={`isLightBox-${uniqueKey}`} name={`isLightBox`} value={`boolean`} checked={attributes.isLightBox || false} onChange={set_value} type='checkbox' className='tiny fluid align-center-x divider-t mt-5'>
                                <span className='btn small fluid bg-transparent fs-12 color-danger'>{__("Disable Lightbox", "pds-blocks")}</span>
                            </OptionControl>
                        </div>
                    </li>
                </PxDropDown> :
                /*===> Option Control <===*/
                <OptionControl key={`isLightBox-${uniqueKey}`} name={`isLightBox`} value={`boolean`} checked={attributes.isLightBox || false} onChange={set_value} type='button-checkbox' className='inline-block divider-e border-alpha-25'>
                    <span className='btn bg-transparent fs-16 square tooltip pxi pxi-lightbox-btn' data-title={__("View Source in Lightbox", "pds-blocks")}></span>
                </OptionControl>}
                {/*===> Dropdown Button <===*/}
                {attributes.style?.support?.includes('enable-animations') ?
                    <PxDropDown title={__("Animation Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-atom-alt divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                        <li key="pds-animations" className='pdt-15 pdx-15 lineheight-150'>
                            {/*===> Animations <===*/}
                            <AnimationsSet attributes={attributes} mainSetter={set_style} />
                        </li>
                    </PxDropDown>
                :null}
                {/*===> Dropdown Button <===*/}
                {attributes.style?.support?.includes('enable-padding') ?
                    <PxDropDown title={__("Padding Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-border-outer divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                        <li key="pds-padding" className='pdy-15 pdx-15 lineheight-150'>
                            <ScreensTabs
                                sm={(screen) => <PaddingSet attributes={attributes} attrSetter={setAttributes} screen="" mainSetter={target => set_style(target, "")} />}
                                md={(screen) => <PaddingSet attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                                lg={(screen) => <PaddingSet attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                                xl={(screen) => <PaddingSet attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                            />
                        </li>
                    </PxDropDown>
                :null}
                {/*===> Dropdown Button <===*/}
                {attributes.style?.support?.includes('enable-margin') ?
                    <PxDropDown title={__("Margin Options", "pds-blocks")} button={`bg-transparent fs-16 square fal fa-arrows-alt divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                        <li key="pds-margin" className='pdy-15 pdx-15 lineheight-150'>
                            <ScreensTabs
                                sm={(screen) => <MarginSet attributes={attributes} attrSetter={setAttributes} screen="" mainSetter={target => set_style(target, "")} />}
                                md={(screen) => <MarginSet attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                                lg={(screen) => <MarginSet attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                                xl={(screen) => <MarginSet attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                            />
                        </li>
                    </PxDropDown>
                :null}
                {/*===> Dropdown Button <===*/}
                {attributes.style?.position?.length > 0 ?
                    <PxDropDown title={__("Position Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-arrows-alt divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                        <li key="pds-margin" className='pdy-15 pdx-15 lineheight-150'>
                            <ScreensTabs
                                sm={(screen) => <PositionSet attributes={attributes} attrSetter={setAttributes} screen="" mainSetter={target => set_style(target, "")} />}
                                md={(screen) => <PositionSet attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                                lg={(screen) => <PositionSet attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                                xl={(screen) => <PositionSet attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                            />
                        </li>
                    </PxDropDown>
                :null}
            </Toolbar>
        </BlockControls>

        {/*====> Setting Panels <====*/}
        <InspectorControls key="inspector">
            {/*===> Responsive Options <===*/}
            <PanelBody title={__("Responsive Options", "pds-blocks")} initialOpen={true}>
                {/*===> Column <===*/}
                {attributes.type.includes('square') ?
                    <div className='pdb-25'>
                        <TextControl key={`label-${uniqueKey}`} label={__("Button Label", "pds-blocks")} value={attributes.label} onChange={set_label} />
                    </div>
                : null}
                {/*===> Responsive Tabs <===*/}
                <ScreensTabs key={`responsive-${uniqueKey}`} md={responsive_options} lg={responsive_options} xl={responsive_options} />
                {/*===> Styles Options <===*/}
                <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} mainSetter={set_style} colorSetter={set_typography} options="support" />
            </PanelBody>
            {/*===> Style Options <===*/}
            <PanelBody title={__("Extra Options", "pds-blocks")} initialOpen={true}>
                {/*===> Elements Group <===*/}
                <div className='row gpx-15 gpy-10'>
                    {/*===> Column <===*/}
                    <div className='col-6'><SelectFromData key={`data-id-${uniqueKey}`} options="menu-locations" name="data_id" label={__("Menu (ID)", "pds-blocks")} value={attributes.data_id} valueSetter={set_value} /></div>
                    {/*===> Column <===*/}
                    <div className='col-6'><TextControl key={`data-modal-${uniqueKey}`} label={__("Modal (ID)", "pds-blocks")} value={attributes.data_modal} onChange={set_data_modal} /></div>
                    {/*===> // Column <===*/}
                </div>
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        {attributes.preview ? <img src={PreviewImage} alt="" className="fluid" /> : <>
            <a key={`btn-${uniqueKey}-preview`} onClick={(event) => event.preventDefault()} { ...blockProps }>{!attributes.type.includes("square") ? labelControl : ''}</a>
        </>}
    </>);
}