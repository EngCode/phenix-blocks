//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import {useEffect} from '@wordpress/element';
import {PanelBody, TextControl, Toolbar} from '@wordpress/components';
import {RichText, BlockControls, InspectorControls, useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import ScreensTabs from "../px-controls/tabs";
import PhenixIcons from '../px-controls/icons';
import PxDropDown from '../px-controls/dropdown';
import PhenixSelect from '../px-controls/select';
import PhenixInput from '../px-controls/input';
import OptionControl from '../px-controls/switch';

//====> Phenix Options Sets <=====//
import PaddingSet from '../px-controls/sets/padding';
import MarginSet from '../px-controls/sets/margin';
import PositionSet from '../px-controls/sets/position';
import StylesSet from '../px-controls/sets/styles';
import TypographySet from '../px-controls/sets/typography';
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

    const set_content = content => setAttributes({ content });

    const set_value = (target) => {
        //==> Get Current <==//
        const name = target.getAttribute('name');
        const value = (typeof(target) === "string" || typeof(target) === "number") ? target : valueHandler(target);

        //==> Set Value <==//
        const newAttributes = { ...attributes, [name]: value };
        setAttributes(newAttributes);
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
    const set_typography = (target, screen) => set_attr_handler(target, screen, "typography");

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const uniqueKey = blockProps.id;
    const TagName = attributes.tagName;
    const html_tags = [
        { label: 'span', value: 'span' },
        { label: 'italic', value: 'i' },
        { label: 'strong', value: 'strong' },
        { label: 'Seperator', value: 'hr' },
        { label: 'abbr', value: 'abbr' },
        { label: 'code', value: 'code' },
        { label: 'kbd', value: 'kbd' },
        { label: 'div', value: 'div' },
        { label: 'object', value: 'object' },
        { label: 'list-item', value: 'li' },
    ];

    //===> Convert Block to Inline <===//
    if (TagName === 'div') blockProps.className += ` inline-block`;

    //===> Rendering Checkers <===//
    const isObjectVal = (option_value) => {return typeof option_value === 'object'},
        isBooleanVal = (option_value) => {return typeof option_value === 'boolean'},
        isNormalValue = (option_value) => {return typeof option_value === 'string' || typeof option_value === 'number' || typeof option_value === 'array'};

    //===> Rendering Options <===//
    Object.entries(attributes).forEach(([option_name, option_value]) => {
        //===> Exclude Options <===//
        const excluded = ["tagName", "className", "align", "content"];
        if (excluded.some(opt => opt === option_name)) return;

        //===> if its a Normal Values that should be string <===//
        if (isNormalValue(option_value) && attributes[option_name]) {
            //===> ID <===//
            if (option_name === "id") blockProps['id'] = attributes[option_name];
            //===> Other Options <===//
            else if (attributes[option_name]) {
                blockProps.className += ` ${attributes[option_name].toString().replace(',', ' ').trim()}`;
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
                        //===> Image Background <===//
                        if (attributes.style.background.type === 'image') {
                            blockProps.className += ` px-media`;
                            blockProps["data-src"] = attributes.style.background.value;
                        }
                        //===> Name Background <===//
                        else {
                            blockProps['style'] = null; blockProps['data-src'] = null;
                            blockProps.className += ` ${attributes.style.background.value}`;
                        }
                        //===> Background Rotation <===//
                        if (sub_value.rotate) blockProps.className += ` ${sub_value.rotate}`;
                    }
                    //===> Animations Specials <===//
                    else if (sub_option === "animation" && sub_value.name) {
                        blockProps['data-animation'] = sub_value.name;
                        sub_value.group && (blockProps['data-lazy-group'] = 1);
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
                    //===> Has Icon <===//
                    else if (sub_option === "hasIcon") blockProps.className += ` tx-icon`;
                    //===> Display Support <===//
                    else if (sub_option === "display") blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;
                }

                //===> for Normal strings and Arrays <===//
                else if (isNormalValue(sub_value)) {
                    //===> .for Icon. <====//
                    if (sub_option.includes("icon")&& !attributes.style.hasIcon) return;
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

    //===> Render <===//
    return (<>
        {/*====> Controls Layout <====*/}
        <InspectorControls key="inspector">
            {/*====> Settings Toolbar <====*/}
            <BlockControls>
                <Toolbar label={__("Quick Settings", "pds-blocks")}>
                    <div className='inline-block inline-select tooltip w-75' data-title={__("HTML Tag", "pds-blocks")}>
                        <PhenixSelect name="tagName" placeholder={__("span", "pds-blocks")} className={`weight-bold fs-20 tx-align-center`} value={attributes.tagName} onChange={set_value} options={html_tags} />
                    </div>
                    {/*===> Dropdown Button <===*/}
                    <PxDropDown title={__("Style Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-adjust divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                        <li key="pds-styles" className='pdt-15 pdb-5 pdx-15 lineheight-150'>
                            <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} mainSetter={set_style} colorSetter={set_typography} options="text-colors, background" />
                        </li>
                    </PxDropDown>
                    {/*===> Dropdown Button <===*/}
                    <PxDropDown title={__("Typography Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-font divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                        <li key="pds-typography" className='pdt-15 pdx-15 lineheight-150'>
                            <ScreensTabs
                                sm={(screen) => <TypographySet key={`typography-${uniqueKey}`} attributes={attributes} mainSetter={set_typography} />}
                                md={(screen) => <TypographySet screen={screen} attributes={attributes} mainSetter={set_typography} options="size, align" />}
                                lg={(screen) => <TypographySet screen={screen} attributes={attributes} mainSetter={set_typography} options="size, align" />}
                                xl={(screen) => <TypographySet screen={screen} attributes={attributes} mainSetter={set_typography} options="size, align" />}
                            />
                        </li>
                    </PxDropDown>
                    {/*===> Icon Control <===*/}
                    {!attributes.style?.hasIcon ? 
                        <OptionControl key={`hasIcon-${uniqueKey}`} name={`hasIcon`} value={`boolean`} checked={attributes.style?.hasIcon} onChange={set_style} type='button-checkbox' className='inline-block divider-e border-alpha-25'>
                            <span className='btn bg-transparent fs-16 square tooltip far fa-icons h-min-100' style={{paddingTop: 2}} data-title={__("Add Icon", "pds-blocks")}></span>
                        </OptionControl>
                    :
                        <PxDropDown title={__("Text Icon", "pds-blocks")} button={`bg-transparent fs-16 square ${attributes.style?.icon || "far fa-icons"} divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                            <li key="icons" className='pdx-10 pdt-5'>
                                {/*===> Icon Selector <===*/}
                                <PhenixIcons key={`icon-${uniqueKey}`} value={ attributes.style?.icon || "far fa-icons" } onChange={set_icon} />
                                {/*===> Option Control <===*/}
                                <OptionControl key={`icon-large-${uniqueKey}`} name={`icon-large`} value="icon-lg" checked={attributes.style['icon-large'] || false} onChange={set_style} type='switch-checkbox' className='tiny mt-5'>{__("Large icon", "pds-blocks")}</OptionControl>
                                {/*===> Disable Button <===*/}
                                <div className='fluid' style={{paddingBottom: 3}}>
                                    <OptionControl key={`hasIcon-${uniqueKey}`} name={`hasIcon`} value={`boolean`} checked={attributes.style?.hasIcon} onChange={set_style} type='checkbox' className='tiny fluid align-center-x divider-t mt-5'>
                                        <span className='btn small fluid bg-transparent fs-12 color-danger'>{__("Remove Icon", "pds-blocks")}</span>
                                    </OptionControl>
                                </div>
                            </li>
                        </PxDropDown>
                    }
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
            {/*===> Widget Panel <===*/}
            <PanelBody title="General Settings" initialOpen={false}>
                {/*=== Form Control  ===*/}
                <PhenixInput name="id" label={__("HTML ID [Anchor]", "pds-blocks")} value={ attributes.id } onChange={set_value} />
                {/*===> Styles Options <===*/}
                <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} mainSetter={set_style} colorSetter={set_typography} options="support" />
            </PanelBody>
        </InspectorControls>

        {/*====> Edit Layout <====*/}
        {attributes.preview ?  <img src={PreviewImage} alt="" className='fluid' /> :
            <RichText {...blockProps} tagName={TagName} value={attributes.content} onChange={set_content} placeholder={__("Enter Content", "pds-blocks")} />
        }
    </>);
}