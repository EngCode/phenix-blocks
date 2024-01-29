//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import {useEffect} from '@wordpress/element';
import {PanelBody, TextControl, Toolbar, SelectControl} from '@wordpress/components';
import {InnerBlocks, BlockControls, InspectorControls, useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import PhenixInput from "../px-controls/input";
import ScreensTabs from "../px-controls/tabs";
import PxDropDown from '../px-controls/dropdown';
import PhenixNumber from "../px-controls/number";
import OptionControl from '../px-controls/switch';

//====> Phenix Options Sets <=====//
import SizesSet from '../px-controls/sets/sizes';
import StylesSet from '../px-controls/sets/styles';
import FlexboxSet from '../px-controls/sets/flexbox';
import SliderSet from '../px-controls/sets/slider';
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
            [`${name}${screen && screen.length > 0 ? '-' + screen : ''}`]: value
        };

        setAttributes({ ...attributes, [attr]: newAttributes });
    };

    //==> Set Object Attributes Methods <==//
    const set_style = (target, screen) => set_attr_handler(target, screen, "style");
    const set_slider = (target, screen) => set_attr_handler(target, screen, 'slider');
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

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const uniqueKey = blockProps.id;
    const innerBlocksProps = useInnerBlocksProps();

    //===> Set Properties <===//
    innerBlocksProps.className += ` ${blockProps.className}`;
    innerBlocksProps.className += ' row';

    //===> Rendering Checkers <===//
    const isObjectVal = (option_value) => {return typeof option_value === 'object'},
        isNormalValue = (option_value) => {return typeof option_value === 'string' || typeof option_value === 'number' || typeof option_value === 'array'},
        colsRender = (size) => parseInt(size) === 0 ? `-auto` : parseInt(size) === 13 ? "" : `-${size}`;

    //====> Fallback <====//
    if (attributes.flexbox.slider === "on") attributes.flexbox.slider = true;

    //===> Rendering Options <===//
    Object.entries(attributes).forEach(([option_name, option_value]) => {
        //===> Exclude Options <===//
        const excluded = ["className", "metadata"];
        if (excluded.some(opt => opt === option_name)) return;

        //===> if its a Normal Values that should be string <===//
        if (isNormalValue(option_value) && attributes[option_name]) {
            //===> ID <===//
            if (option_name === "id") blockProps['id'] = attributes[option_name];
            //===> Other Options <===//
            else if (attributes[option_name]) {
                innerBlocksProps.className += ` ${attributes[option_name].toString().replace(',', ' ').trim()}`;
            };
        }

        //===> if its object[group] Option like [style, typography, responsive] <===//
        else if (isObjectVal(option_value) && attributes[option_name]) {
            //===> loop on the Object Options <===//
            Object.entries(option_value).forEach(([sub_option, sub_value]) => {
                //===> Check if the attribute is Set <===//
                if (!attributes[option_name][sub_option]) return;

                //===> Checker for Slider Mode <===//
                else if (attributes.flexbox.slider) {
                    //===> Add Slider Name <===//
                    if (attributes.slider.preview) innerBlocksProps.className += ' px-slider';
                    //===> if not-related option return void <===//
                    if (["align", "nowrap", "masonry"].some(option => sub_option.includes(option))) return;
                };

                //===> Flexbox Options <===//
                if (option_name === "flexbox" && sub_option.includes("cols")) {
                    //===> Slider Mode <===//
                    if(attributes.flexbox.slider) {
                        let dataAttr = `data-${sub_option === "cols" ? "items" : sub_option.replace('cols-', '')}`;
                        innerBlocksProps[dataAttr] = sub_value;
                    } else if (attributes.flexbox.equals) {
                        //===> add Classes <===//
                        innerBlocksProps.className += ` ${sub_option.replace('cols', 'row-cols') + colsRender(sub_value)}`;
                    }
                }

                //===> Slider Options <===//
                else if (option_name === "slider") {
                    //===> Set Options <===//
                    if(attributes.flexbox.slider && attributes.slider.preview) innerBlocksProps[`data-${sub_option}`] = sub_value;
                }

                //===> if its a Object Value <===//
                else if (!isNormalValue(sub_value)) {
                    //===> Animations Specials <===//
                    if (sub_option === "animation" && sub_value.name) {
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
                    //===> Size <===//
                    else if (sub_option.includes("size")) innerBlocksProps.className += ` ${sub_option.replace('size', 'col') + colsRender(sub_value)}`;
                    //===> Layout Gap <===//
                    else if (sub_option.includes('gpx') || sub_option.includes('gpy') && !sub_option.includes('fix')) { innerBlocksProps.className += ` ${sub_option}-${sub_value}`; }
                    //===> Padding Values <===//
                    else if (sub_option.includes('pdt') || sub_option.includes('pds') || sub_option.includes('pde') || sub_option.includes('pdb')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                    //===> Margin Values <===//
                    else if (sub_option.includes('mt') || sub_option.includes('ms') || sub_option.includes('me') || sub_option.includes('mb')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                    //===> Positions Values <===//
                    else if (sub_option.includes('pos-')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                    //===> Other Values <===//
                    else {innerBlocksProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;}
                };
            });
        };
    });

    //===> if is Slider and is Fade or one Slide per view disable flexbox <===//
    if (attributes.flexbox?.slider?.type === "fade") innerBlocksProps.className.replace('row', '');

    //===> Render <===//
    return (<>
        {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <Toolbar key={`${uniqueKey}-toolbar`} label={__("Quick Settings", "pds-blocks")}>
                {/*===> Dropdown Button <===*/}
                {attributes.flexbox?.equals || attributes.flexbox?.slider ? <PxDropDown title={__("Columns Number", "pds-blocks")} button={`bg-transparent fs-16 square far fa-columns divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-180">
                    <li key="pds-styles" className='pdt-15 pdb-5 pdx-15 lineheight-150'>
                        <PhenixNumber name={"cols"} icon="far fa-mobile" min={0} max={13} value={attributes.flexbox?.cols || 0} onChange={set_flexbox} />
                        <PhenixNumber name={`cols-md`} icon="far fa-tablet" min={0} max={13} value={attributes.flexbox[`cols-md`] || 0} onChange={set_flexbox} />
                        <PhenixNumber name={`cols-lg`} icon="far fa-laptop" min={0} max={13} value={attributes.flexbox[`cols-lg`] || 0} onChange={set_flexbox} />
                        <PhenixNumber name={`cols-xl`} icon="far fa-desktop" min={0} max={13} value={attributes.flexbox[`cols-xl`] || 0} onChange={set_flexbox} />
                    </li>
                </PxDropDown>:null}
                {/*===> Dropdown Button <===*/}
                <PxDropDown title={__("Sizes Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-arrows-maximize divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-320" >
                    <li key="sizes" className='pdy-15 pdx-15 lineheight-150'>
                        <ScreensTabs
                            sm={(screen) => <SizesSet attributes={attributes} mainSetter={set_style} />}
                            md={(screen) => <SizesSet screen={screen} attributes={attributes} mainSetter={set_style} />}
                            lg={(screen) => <SizesSet screen={screen} attributes={attributes} mainSetter={set_style} />}
                            xl={(screen) => <SizesSet screen={screen} attributes={attributes} mainSetter={set_style} />}
                        />
                    </li>
                </PxDropDown>
                {/*===> Dropdown Button <===*/}
                {attributes.flexbox['style-support'] ?<>
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
                </>: null}
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
            {/*===> Widget Panel <===*/}
            {attributes.flexbox.slider ? <PanelBody title={__("Slider Options", "pds-blocks")} initialOpen={true}>
                <SliderSet attributes={attributes} mainSetter={set_slider} flexSetter={set_flexbox} />
            </PanelBody> : null}
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("Layout Options", "pds-blocks")} initialOpen={true}>
                <ScreensTabs
                    sm={(screen) => <FlexboxSet attributes={attributes} mainSetter={set_flexbox} options={attributes.flexbox.slider ? "flex-props, grid-props" : null}>
                        {/*===> Switch Button <===*/}
                        <OptionControl name='slider' value="boolean" checked={attributes.flexbox.slider} onChange={set_flexbox} type='checkbox' className='tiny me-15'>
                            <span className='fas fa-check radius-circle'>{__("Slider.", "pds-blocks")}</span>
                        </OptionControl>
                        {/*===> Switch Button <===*/}
                        <OptionControl name='style-support' value="boolean" checked={attributes.flexbox['style-support']} onChange={set_flexbox} type='checkbox' className='tiny'>
                            <span className='fas fa-check radius-circle'>{__("Enable Style.", "pds-blocks")}</span>
                        </OptionControl>
                    </FlexboxSet>}
                    md={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={attributes.flexbox.slider ? "flex-props, grid-props" : null}></FlexboxSet>}
                    lg={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={attributes.flexbox.slider ? "flex-props, grid-props" : null}></FlexboxSet>}
                    xl={(screen) => <FlexboxSet screen={screen} attributes={attributes} mainSetter={set_flexbox} options={attributes.flexbox.slider ? "flex-props, grid-props" : null}></FlexboxSet>}
                />
            </PanelBody>
            {/*===> General Options <===*/}
            <PanelBody title={__("General Options", "pds-blocks")} initialOpen={true}>
                {/*=== Form Control  ===*/}
                <PhenixInput className="mb-15" name="id" label={__("HTML ID [Anchor]", "pds-blocks")} value={attributes.id} onChange={set_value} />
                {/*===> Styles Options <===*/}
                {attributes.flexbox['style-support'] ?<StylesSet key={`styles-${uniqueKey}`} attributes={attributes} mainSetter={set_style} colorSetter={set_typography} options="support" />:null}
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/*====> Edit Layout <====*/}
        {attributes.preview ?
            <img src={PreviewImage} alt="" className="fluid" />
        :
        <div {...blockProps} key={`${uniqueKey}`}>
            <div {...innerBlocksProps}></div>
        </div>
        }
    </>);
}