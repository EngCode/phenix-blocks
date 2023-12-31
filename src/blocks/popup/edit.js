//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import {useEffect} from '@wordpress/element';
import {PanelBody, Toolbar} from '@wordpress/components';
import {BlockControls, InspectorControls, useBlockProps, InnerBlocks, useInnerBlocksProps} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import ScreensTabs from "../px-controls/tabs";
import PxDropDown from '../px-controls/dropdown';
import PhenixSelect from '../px-controls/select';
import PhenixInput from '../px-controls/input';
import OptionControl from '../px-controls/switch';

//====> Phenix Options Sets <=====//
import StylesSet from '../px-controls/sets/styles';
import FlexboxSet from '../px-controls/sets/flexbox';
import PhenixComponentsBuilder from '../px-controls/panel-scripts';

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
    const set_setting = (target, screen) => set_attr_handler(target, "", "setting");
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
    const TagName = attributes.tagName;
    const blockProps = useBlockProps();
    const uniqueKey = blockProps.id;
    const innerBlocksProps = useInnerBlocksProps();

    //===> Modal Settings <===//
    blockProps.className += ` px-modal hidden`;
    if(attributes.id) blockProps.id = attributes.id;

    //===> Full Width Editing <===//
    if (!attributes.align) setAttributes({ align: 'full' });

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
                blockProps.className += ` ${attributes[option_name].toString().replace(',', ' ').trim()}`;
            };
        }

        //===> if its object[group] Option like [style, typography, responsive] <===//
        else if (isObjectVal(option_value) && attributes[option_name]) {
            //===> Flexbox Props <===//
            // if(option_name === "flexbox") return;

            //===> loop on the Object Options <===//
            Object.entries(option_value).forEach(([sub_option, sub_value]) => {
                //===> Check if the attribute is Set <===//
                if (!attributes[option_name][sub_option]) return;

                //===> if its a Object Value <===//
                if (!isNormalValue(sub_value)) {
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
                    //===> Settings Values <===//
                    else if (option_name === "setting") {blockProps[`data-${sub_option}`] = sub_value;}
                    //===> Padding Values <===//
                    else if (sub_option.includes('pdt') || sub_option.includes('pds') || sub_option.includes('pde') || sub_option.includes('pdb')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                    //===> Margin Values <===//
                    else if (sub_option.includes('mt') || sub_option.includes('ms') || sub_option.includes('me') || sub_option.includes('mb')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                    //===> Positions Values <===//
                    else if (sub_option.includes('pos-')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                    //===> Layout Gap <===//
                    else if (sub_option.includes('gpx') || sub_option.includes('gpy') && !sub_option.includes('gpy-fix')) { innerBlocksProps.className += ` ${sub_option}-${sub_value}`; }
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
                {/*===> Dropdown Control <===*/}
                <PxDropDown title={__("Layout Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-columns color-success divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
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
                </PxDropDown>
                {/*===> Dropdown Control <===*/}
                <PxDropDown title={__("Modal Settings", "pds-blocks")} button={`bg-transparent fs-16 square far fa-cog divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="dropdown-item" className='pd-10'>
                        {/*===> Form Group <===*/}
                        <div className='row gpx-15 gpy-15'>
                            {/*===> Form Control <===*/}
                            <div className='col col--6'>
                                <PhenixInput name="id" label={__("Modal ID", "pds-blocks")} value={attributes.id} onChange={set_value} />
                            </div>
                            {/*===> Form Control <===*/}
                            {attributes.setting.showon ? <div className='col col--6'>
                                <PhenixInput name="showon" label={__("Element ID", "pds-blocks")} value={attributes.setting.showon} onChange={set_setting} />
                            </div> : null }
                            {/*===> Form Control <===*/}
                            {attributes.setting.onload ? <div className='col col--6'>
                                <PhenixNumber name="timeout" label={__("Duration", "pds-blocks")} value={attributes.setting.timeout || 6000} onChange={set_setting} min={0} max={20000} steps={100}></PhenixNumber>
                            </div> : null }
                        </div>
                        {/*===> Option Controller <===*/}
                        <div className='flexbox'>
                            <OptionControl name={`hash_url`} value="true" checked={attributes.setting.hash_url} onChange={set_setting} type='switch-checkbox' className='small me-10 mb-10'>{__("Open by Hash URL", "pds-blocks")}</OptionControl>
                            <OptionControl name={`showon`} value="#ID" checked={attributes.setting.showon} onChange={set_setting} type='switch-checkbox' className='small me-10 mb-10'>{__("Open When Rich Element", "pds-blocks")}</OptionControl>
                            <OptionControl name={`onload`} value="true" checked={attributes.setting.onload} onChange={set_setting} type='switch-checkbox' className='small me-10 mb-10'>{__("Open When Page Loads", "pds-blocks")}</OptionControl>
                        </div>
                    </li>
                </PxDropDown>
            </Toolbar>
        </BlockControls>
        {/*====> Controls Layout <====*/}
        <InspectorControls key={`${uniqueKey}-inspector`}>
            {/*===> Widget Panel <===*/}
            <PanelBody title="General Settings" initialOpen={true}>
                {/*===> Form Control <===*/}
                <PhenixInput name="id" label={__("Modal ID", "pds-blocks")} className="mb-15" value={attributes.id} onChange={set_value} />
                {/*===> Styles Options <===*/}
                <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} mainSetter={set_style} colorSetter={set_typography} options="support" />
            </PanelBody>
        </InspectorControls>
        {/*===> Modal Component <===*/}
        {attributes.preview ?  <img src={PreviewImage} alt="" className='fluid' /> :<div {...blockProps} key={`${uniqueKey}`}>
            <div className='modal-content col'>
                <InnerBlocks template={[
                    ['phenix/group', {
                        "className": "model-content mgx-auto",
                        "style": {
                            "max_size":"w-max-640",
                            "pdt": "30", "pdb": "30",
                            "pds": "30", "pde": "30",
                            "support":["enable-position"],
                            "position":"position-rv",
                            "background":{"type":"color","rotate":null,"value":"bg-white"},
                        }
                    },[
                        [ 'phenix/button', {"label":"Close Window","type":"btn square tooltip-bottom","icon":"far fa-times","typography":{"size":"fs-18"},"style":{"background":{"type":"color","rotate":null,"value":"bg-danger"},"support":["enable-radius","enable-position"],"radius":"radius-circle","position":"position-ab","z-index":"z-index-modal","pos-top":"15","pos-end":"15"},"className":"modal-close"} ],
                        [ 'core/paragraph', {"placeholder": "Modal Content"} ],
                    ]],
                ]} />
            </div>
        </div>}
        {/*===> // Modal Component <===*/}
    </>);
}