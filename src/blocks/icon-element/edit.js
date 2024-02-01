//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import {useEffect} from '@wordpress/element';
import {PanelBody, TextControl, Toolbar} from '@wordpress/components';
import {RichText, BlockControls, InspectorControls, useBlockProps, useInnerBlocksProps, __experimentalLinkControlSearchInput as LinkControlSearchInput} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import ScreensTabs from "../px-controls/tabs";
import PhenixIcons from '../px-controls/icons';
import PxDropDown from '../px-controls/dropdown';
import PhenixSelect from '../px-controls/select';
import PhenixNumber from "../px-controls/number";
import PhenixInput from '../px-controls/input';
import MediaUploader from '../px-controls/uploader';
import OptionControl from '../px-controls/switch';

//====> Phenix Options Sets <=====//
import PaddingSet from '../px-controls/sets/padding';
import MarginSet from '../px-controls/sets/margin';
import PositionSet from '../px-controls/sets/position';
import StylesSet from '../px-controls/sets/styles';
import TypographySet from '../px-controls/sets/typography';
import EffectsSet from '../px-controls/sets/effects';

//====> Attributes Renderers <====//
const OptionsRenderer = window.PhenixBlocks.OptionsRenderer;

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
        let newTag;
        //==> Type Handler <===//
        if (name === "type") {
            if (value === "paragraph") newTag = "p";
            else if (value === "list") newTag = "ul";
            else if (value === "headline") newTag = "h3";
        }
        //===> Set new Attributes <===//
        if (newTag) {
            const newAttributes = { ...attributes, "tagName": newTag, [name]: value };
            //==> Set Value <==//
            setAttributes(newAttributes);
        } else {
            const newAttributes = { ...attributes, [name]: value };
            //==> Set Value <==//
            setAttributes(newAttributes);
        }
    };

    //==> Set Attributes Method <==//
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
    const set_icon = value => set_attr_handler(`${value.type} ${value.value}`, "", "style", "icon");
    const set_icon_img = value => set_attr_handler(value.url, "", "style", "icon");
    const set_url = value => set_attr_handler(value, "", "style", "url");
    const set_typography = (target, screen) => set_attr_handler(target, screen, "typography");
    
    const types_options = [
        { "label": "FontAwesome", "value": "font"},
        { "label": "Icon Image", "value": "custom"},
    ];

    //===> Get Block Properties <===//
    const renderProps = OptionsRenderer({attributes: attributes, blockProps: useBlockProps()});
    const blockProps = renderProps.blockProps;
    const uniqueKey = blockProps.id;
    let iconURl = "https://via.placeholder.com/50x50.webp";
    
    //===> Set Default Values <===//
    blockProps.className += ` tx-align-center inline-block`;
    blockProps.className += `${renderProps.container.className}`;
    if (attributes.type === "font" && !attributes.style.icon) blockProps.className += ` far fa-icons`;

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
            <Toolbar key={`${uniqueKey}-toolbar`} label={__("Quick Settings", "pds-blocks")}>
                {/*===> Select Control <===*/}
                <div className='inline-block inline-select tooltip-bottom w-150' data-title={__("Text Type", "pds-blocks")}>
                    <PhenixSelect name="type" placeholder={__("FontAwesome", "pds-blocks")} className={`tx-align-center weight-medium`} value={attributes.type} onChange={set_value} options={types_options} />
                </div>
                {/*===> Icon Control <===*/}
                {attributes.type === "font" ? 
                    <PxDropDown title={__("Change Icon", "pds-blocks")} button={`bg-transparent fs-16 square ${attributes.style?.icon || "far fa-icons"} divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                        <li key="icons" className='pd-10'>
                            {/*===> Icon Selector <===*/}
                            <PhenixIcons key={`icon-${uniqueKey}`} value={ attributes.style?.icon || "far fa-icons" } onChange={set_icon} />
                            {/*===> Option Control <===*/}
                            <OptionControl key={`icon-large-${uniqueKey}`} name={`icon-large`} value="icon-lg" checked={attributes.style['icon-large'] || false} onChange={set_style} type='switch-checkbox' className='tiny mt-5'>{__("Large icon", "pds-blocks")}</OptionControl>
                        </li>
                    </PxDropDown>
                    :
                    <PxDropDown title={__("Change Icon", "pds-blocks")} button={`bg-transparent fs-16 square far fa-image divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                        <li key="icons" className='pd-10'>
                            {/*===> Icon Uploader <===*/}
                            <MediaUploader label={__("Upload Icon","pds-blocks")} value={attributes.style?.icon} setValue={set_icon_img}></MediaUploader>
                            {/*===> Option Control <===*/}
                            <OptionControl key={`icon-large-${uniqueKey}`} name={`freeWidth`} value="boolean" checked={attributes.style.freeWidth} onChange={set_style} type='switch-checkbox' className='tiny mt-5'>{__("Free Width", "pds-blocks")}</OptionControl>
                        </li>
                    </PxDropDown>
                }
                {/*===> Link Input <===*/}
                {attributes.style.isLink ? <PxDropDown title={__("URL Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-link color-success divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-260" >
                    <li key="link" className='pdx-15 pdt-10 pdb-0 mb-0'>
                        <LinkControlSearchInput key={`url-${uniqueKey}`} name="url" placeholder={__("URL or Page Name", "pds-blocks")} onChange={set_url} value={ attributes.style.url || "#" } allowDirectEntry={false} withURLSuggestion={false} withCreateSuggestion={false} renderSuggestions={(props) => suggestionsRender(props)} />
                        {/*===> Option Control <===*/}
                        <OptionControl key={`inNewTab-${uniqueKey}`} name={`inNewTab`} value={`boolean`} checked={attributes.style.inNewTab} onChange={set_style} type='checkbox' className='tiny me-15'>
                            <span className='fas fa-check radius-circle'>{__("Open in New Tab", "pds-blocks")}</span>
                        </OptionControl>
                        {/*===> Disable Button <===*/}
                        <div className='fluid' style={{paddingBottom: 3}}>
                            <OptionControl key={`isLink-${uniqueKey}`} name={`isLink`} value={`boolean`} checked={attributes.style.isLink} onChange={set_style} type='checkbox' className='tiny fluid align-center-x divider-t mt-5'>
                                <span className='btn small fluid bg-transparent fs-12 color-danger'>{__("Disable URL Link", "pds-blocks")}</span>
                            </OptionControl>
                        </div>
                    </li>
                </PxDropDown> :
                /*===> Add Link <===*/
                <OptionControl key={`isLink-${uniqueKey}`} name={`isLink`} value={`boolean`} checked={attributes.style.isLink} onChange={set_style} type='button-checkbox' className='inline-block'>
                    <span className='btn bg-transparent fs-16 square tooltip-bottom far fa-link' data-title={__("Convert to Link", "pds-blocks")}></span>
                </OptionControl>}

                {/*===> Dropdown Button <===*/}
                <PxDropDown title={__("Style Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-adjust divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="pds-styles" className='pdt-15 pdb-15 pdx-15 lineheight-150'>
                        {/*===> Icon Size <===*/}
                        <PhenixNumber name={"dimensions"} icon="far fa-arrows" className="mb-15" min={42} max={512} value={attributes.style.dimensions || 42} onChange={set_style} />

                        {/*===> Styles <===*/}
                        <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} mainSetter={set_style} colorSetter={set_typography} options="text-colors, background" />
                    </li>
                </PxDropDown>
                {/*===> Dropdown Button <===*/}
                <PxDropDown title={__("Typography Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-font divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="pds-typography" className='pdy-15 pdx-15 lineheight-150'>
                        <ScreensTabs
                            sm={(screen) => <TypographySet key={`typography-${uniqueKey}`} attributes={attributes} mainSetter={set_typography} options="size, other" />}
                            md={(screen) => <TypographySet screen={screen} attributes={attributes} mainSetter={set_typography} options="size" />}
                            lg={(screen) => <TypographySet screen={screen} attributes={attributes} mainSetter={set_typography} options="size" />}
                            xl={(screen) => <TypographySet screen={screen} attributes={attributes} mainSetter={set_typography} options="size" />}
                        />
                    </li>
                </PxDropDown>
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
                {attributes.style?.position ?
                    <PxDropDown title={__("Position Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-arrows-to-dot divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
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
                {/*===> Dropdown Button <===*/}
                {attributes.style?.support?.includes('enable-effects') ?
                    <PxDropDown title={__("Effects Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-backpack divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                        <li key="pds-margin" className='pdy-15 pdx-15 lineheight-150'>
                            <EffectsSet attributes={attributes} mainSetter={set_style} />
                        </li>
                    </PxDropDown>
                :null}
            </Toolbar>
        </BlockControls>
        {/*====> Controls Layout <====*/}
        <InspectorControls key={`${uniqueKey}-inspector`}>
            {/*===> Widget Panel <===*/}
            <PanelBody title="General Settings" initialOpen={true}>
                {/*===> Styles Options <===*/}
                <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} mainSetter={set_style} colorSetter={set_typography} options="support" />
            </PanelBody>
        </InspectorControls>
        {/*===> Modal Component <===*/}
        {attributes.preview ?  <img src={PreviewImage} alt="" className='fluid' /> :
            <i {...blockProps} key={`${uniqueKey}`} style={{
                width: attributes.style.dimensions ? attributes.style.dimensions+'px' : 42+'px',
                height: attributes.style.dimensions ? attributes.style.dimensions+'px' : 42+'px',
                lineHeight: attributes.style.dimensions ? attributes.style.dimensions+'px' : 42+'px'
            }}>
                {attributes.type === "custom" ? <img alt="icon" width={attributes.style.dimensions ? attributes.style.dimensions : 42} height={attributes.style.dimensions ? attributes.style.dimensions : 42} src={attributes.style.icon?.includes("http") ? attributes.style.icon : iconURl} />
            : null}</i>
        }
    </>);
}