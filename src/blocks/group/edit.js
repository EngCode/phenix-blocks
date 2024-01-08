//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import {useEffect} from '@wordpress/element';
import {PanelBody, TextControl, Toolbar} from '@wordpress/components';
import {BlockControls, InspectorControls, useBlockProps, useInnerBlocksProps, InnerBlocks} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.png';
import ScreensTabs from "../px-controls/tabs";
import PxDropDown from '../px-controls/dropdown';
import PhenixSelect from '../px-controls/select';
import OptionControl from '../px-controls/switch';
import PhenixInput from '../px-controls/input';

//====> Phenix Options Sets <=====//
import StylesSet from '../px-controls/sets/styles';
import FlexboxSet from '../px-controls/sets/flexbox';
import TypographySet from '../px-controls/sets/typography';
import AnimationsSet from '../px-controls/sets/animations';
import PhenixComponentsBuilder from '../px-controls/panel-scripts';

import PaddingSet from '../px-controls/sets/padding';
import MarginSet from '../px-controls/sets/margin';
import PositionSet from '../px-controls/sets/position';
import EffectsSet from '../px-controls/sets/effects';

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

    //==> Set Flexbox Method <==//
    const set_flexbox = (target, screen) => {
        //==> Get Current <==//
        const name = target instanceof HTMLElement ? target.getAttribute('name') : `${target}`;
        const flexbox = { ...attributes.flexbox };
        //==> Add the Value <==//
        flexbox[`${name.includes('align-') ? `align${screen?'-'+screen:""}` : name}${screen?'-'+screen:""}`] = (typeof(target) === "string" || typeof(target) === "number") ? target.replace("align-reset", "") : valueHandler(target);
        //==> Set Value <==//
        const newAttributes = { ...attributes, flexbox: flexbox };
        setAttributes(newAttributes);
    };

    //===> View Script <===//
    useEffect(() => PhenixComponentsBuilder(), []);

    //===> Define Controls Options <===//
    const html_tags = [
        { "label": "Div", "value": "div"},
        { "label": "Main", "value": "main"},
        { "label": "Aside", "value": "aside"},
        { "label": "Article", "value": "article"},
        { "label": "Section", "value": "section"},
        { "label": "Listing", "value": "ul"},
    ];

    const max_size_util = [
        { "label": "1920", "value": "w-max-1920"},
        { "label": "1600", "value": "w-max-1600"},
        { "label": "1400", "value": "w-max-1400"},
        { "label": "1366", "value": "w-max-1366"},
        { "label": "1200", "value": "w-max-1200"},
        { "label": "1100", "value": "w-max-1100"},
        { "label": "768", "value": "w-max-768"},
        { "label": "640", "value": "w-max-640"},
        { "label": "570", "value": "w-max-570"},
        { "label": "480", "value": "w-max-480"},
        { "label": "420", "value": "w-max-420"},
        { "label": "390", "value": "w-max-390"},
        { "label": "360", "value": "w-max-360"},
        { "label": "320", "value": "w-max-320"},
        { "label": "280", "value": "w-max-280"},
        { "label": "260", "value": "w-max-260"},
        { "label": "200", "value": "w-max-200"},
        { "label": "180", "value": "w-max-180"},
    ];

    const min_size_util = [
        { "label": "1920", "value": "w-min-1920"},
        { "label": "1600", "value": "w-min-1600"},
        { "label": "1400", "value": "w-min-1400"},
        { "label": "1366", "value": "w-min-1366"},
        { "label": "1200", "value": "w-min-1200"},
        { "label": "1100", "value": "w-min-1100"},
        { "label": "768", "value": "w-min-768"},
        { "label": "640", "value": "w-min-640"},
        { "label": "570", "value": "w-min-570"},
        { "label": "480", "value": "w-min-480"},
        { "label": "420", "value": "w-min-420"},
        { "label": "390", "value": "w-min-390"},
        { "label": "360", "value": "w-min-360"},
        { "label": "320", "value": "w-min-320"},
        { "label": "280", "value": "w-min-280"},
        { "label": "260", "value": "w-min-260"},
        { "label": "200", "value": "w-min-200"},
        { "label": "180", "value": "w-min-180"},
    ];

    //===> Get Block Properties <===//
    const TagName = attributes.tagName;
    const blockProps = useBlockProps();
    const uniqueKey = blockProps.id;
    const innerBlocksProps = useInnerBlocksProps();

    //===> Flexbox Options <===//
    let container = blockProps;
    if (attributes.isFlexbox) container = innerBlocksProps;

    //===> Rendering Checkers <===//
    const isObjectVal = (option_value) => {return typeof option_value === 'object'},
        isBooleanVal = (option_value) => {return typeof option_value === 'boolean'},
        isNormalValue = (option_value) => {return typeof option_value === 'string' || typeof option_value === 'number' || typeof option_value === 'array'};

    //===> Rendering Options <===//
    Object.entries(attributes).forEach(([option_name, option_value]) => {
        //===> Exclude Options <===//
        const excluded = ["tagName", "className", "align", "metadata"];
        if (excluded.some(opt => opt === option_name)) return;

        //===> if its a Normal Values that should be string <===//
        if (isNormalValue(option_value) && attributes[option_name]) {
            //===> ID <===//
            if (option_name === "id") blockProps['id'] = attributes[option_name];
            //===> Other Options <===//
            else if (attributes[option_name]) {
                container.className += ` ${attributes[option_name].toString().replace(',', ' ').trim()}`;
            };
        }

        //===> for Boolean Options <===//
        else if (isBooleanVal(option_value) && attributes[option_name]) {
            //===> Flexbox <===//
            if (option_name === "isFlexbox" && option_value === true) container.className += ` flexbox`;
        }

        //===> if its object[group] Option like [style, typography, responsive] <===//
        else if (isObjectVal(option_value) && attributes[option_name]) {
            //===> Flexbox Props <===//
            if(option_name === "flexbox" && !attributes.isFlexbox) return;
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
                            blockProps.style.backgroundImage = attributes.style.background.value;
                        }
                        //===> Video Background <===//
                        else if (attributes.style.background.type === 'video') {
                            blockProps.className += ` px-media pds-video-bg`;
                            blockProps["data-type"] = "embed";
                            blockProps["data-embed"]="video";
                            blockProps["data-autoplay"]="1";
                            blockProps["data-loop"]="1";
                            blockProps["data-muted"]="1";
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
                    //===> Layout Gap <===//
                    else if (sub_option.includes('gpx') || sub_option.includes('gpy') && !sub_option.includes('gpy-fix')) { innerBlocksProps.className += ` ${sub_option}-${sub_value}`; }
                    //===> Other Values <===//
                    else if (option_name === "flexbox") {container.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;}
                    //===> Other Values <===//
                    else {blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;}
                };
            });
        };
    });

    //===> Render <===//
    return (<>
        {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <Toolbar key={`${uniqueKey}-toolbar`} label={__("Quick Settings", "pds-blocks")}>
                {/*===> Select Control <===*/}
                <div className='inline-block inline-select tooltip-bottom w-75' data-title={__("HTML Tag", "pds-blocks")}>
                    <PhenixSelect name="tagName" placeholder={__("div", "pds-blocks")} className={`tx-align-center weight-medium`} value={attributes.tagName} onChange={set_value} options={html_tags} />
                </div>
                {/*===> Select Control <===*/}
                <div className='inline-block inline-select tooltip-bottom w-100' data-title={__("Max Size", "pds-blocks")}>
                    <PhenixSelect name="max_size" placeholder={__("Max Size", "pds-blocks")} className={`tx-align-center weight-medium`} value={attributes.style.max_size} onChange={set_style} options={max_size_util} />
                </div>
                {/*===> Select Control <===*/}
                <div className='inline-block inline-select tooltip-bottom w-100' data-title={__("Min Size", "pds-blocks")}>
                    <PhenixSelect name="min_size" placeholder={__("Size", "pds-blocks")} className={`tx-align-center weight-medium`} value={attributes.style.min_size} onChange={set_style} options={min_size_util} />
                </div>
                {/*===> Dropdown Button <===*/}
                {attributes.isFlexbox? <PxDropDown title={__("Layout Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-columns color-success divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280" >
                    <li key="layouts" className='pdt-15 pdx-15 lineheight-150'>
                        <ScreensTabs
                            sm={(screen) => <FlexboxSet attributes={attributes} mainSetter={set_flexbox}></FlexboxSet>}
                            md={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={"flex-props, align"}></FlexboxSet>}
                            lg={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={"flex-props, align"}></FlexboxSet>}
                            xl={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={"flex-props, align"}></FlexboxSet>}
                        />
                        {/*===> Disable Button <===*/}
                        <div className='fluid' style={{paddingBottom: 3}}>
                            <OptionControl key={`isFlexbox-${uniqueKey}`} name={`isFlexbox`} value={`boolean`} checked={attributes.isFlexbox || false} onChange={set_value} type='checkbox' className='tiny fluid align-center-x divider-t mt-5'>
                                <span className='btn small fluid bg-transparent fs-12 color-danger'>{__("Disable Flexbox Layout", "pds-blocks")}</span>
                            </OptionControl>
                        </div>
                    </li>
                </PxDropDown>:
                /*===> Option Control <===*/
                <OptionControl key={`isFlexbox-${uniqueKey}`} name={`isFlexbox`} value={`boolean`} checked={attributes.isFlexbox} onChange={set_value} type='button-checkbox' className='inline-block divider-e border-alpha-25'>
                    <span className='btn bg-transparent fs-16 square tooltip-bottom far fa-columns h-min-100' style={{paddingTop: 2}} data-title={__("Flexbox Layouts", "pds-blocks")}></span>
                </OptionControl>}
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
            {/*===> General Options <===*/}
            <PanelBody title={__("General Options", "pds-blocks")} initialOpen={true}>
                {/*=== Form Control  ===*/}
                <PhenixInput className="mb-15" name="id" label={__("HTML ID [Anchor]", "pds-blocks")} value={attributes.id} onChange={set_value} />
                {/*===> Styles Options <===*/}
                <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} mainSetter={set_style} colorSetter={set_typography} options="support" />
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/*====> Edit Layout <====*/}
        {attributes.preview ?
            <img src={PreviewImage} alt="" className="fluid" />
        :
        <TagName key={`${uniqueKey}`} {...blockProps}>
            <div {...innerBlocksProps}></div>
        </TagName>
        }
    </>);
}