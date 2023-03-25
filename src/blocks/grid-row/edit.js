//====> WP Modules <====//
import { __ } from '@wordpress/i18n';
import {PanelBody} from '@wordpress/components';

import {
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls
} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import ScreensTabs from "../px-controls/tabs";
import OptionControl from '../px-controls/switch';

//====> Phenix Options Sets <=====//
import StylesSet from '../px-controls/sets/styles';
import SliderSet from '../px-controls/sets/slider';
import FlexboxSet from '../px-controls/sets/flexbox';
import ResponsiveSet from '../px-controls/sets/responsive';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Value Handler <===//
    const valueHandler = (target) => {
        //===> Define Array Type <===//
        let single_val,
            array_val = [],
            type = target.getAttribute('type') || target.tagName;

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
        else { single_val = target.value; }

        //===> Return Value <===//
        if(single_val) return single_val;
    };

    //==> Set Flexbox Method <==//
    const set_flexbox = (target, screen) => {
        //==> Get Current <==//
        let name = target instanceof HTMLElement ? target.getAttribute('name') : `${target}`;
        const flexbox = attributes.flexbox;

        //==> Add the Value <==//        
        if(name.includes('align-')) { name = "align" }
        flexbox[`${name}${screen?'-'+screen:""}`] = typeof(target) === "string" ? target.replace("align-reset", "") : valueHandler(target);

        //==> Set Value <==//
        setAttributes({ flexbox : {...flexbox} });
    };

    //==> Set Slider Method <==//
    const set_slider = (target, screen) => {
        //==> Get Current <==//
        let name = target instanceof HTMLElement ? target.getAttribute('name') : `${target}`;
        const slider = attributes.slider;

        //==> Add the Value <==//
        slider[`${name}`] = typeof(target) === "string" ? target : valueHandler(target);

        //==> Set Value <==//
        setAttributes({ slider : {...slider} });
    };

    //==> Set Typography Method <==//
    const set_typography = (target, screen) => {
        //==> Get Current <==//
        let name = target instanceof HTMLElement ? target.getAttribute('name') : "color";
        const typography = attributes.typography;

        //==> Add the Value <==//
        typography[`${name}${screen?'-'+screen:""}`] = typeof(target) === "string" ? target : valueHandler(target);

        //==> Set Value <==//
        setAttributes({ typography : {...typography} });
    };

    //==> Set Style Method <==//
    const set_style = (target, screen) => {
        //==> Get Current <==//
        let name = target instanceof HTMLElement ? target.getAttribute('name') : "background";
        const style = attributes.style;

        //==> Add the Value <==//
        style[`${name}${screen?'-'+screen:""}`] = name === "background" ? target : valueHandler(target);

        //==> Set Value <==//
        setAttributes({ style : {...style} });
    };

    //===> Responsive Options <===//
    const responsive_options = (screen) => {
        return <ResponsiveSet options={`flexbox, display`} flexSetter={set_flexbox} styleSetter={set_style} typoSetter={set_typography} screen={screen} attributes={attributes} />
    };

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps();

    //===> Set Properties <===//
    innerBlocksProps.className += ` ${blockProps.className}`;
    innerBlocksProps.className += ' row';
    const screens = ["-md", "-lg", "-xl"];

    //===> Layout Options <===//
    if(!attributes.flexbox.slider) {
        if (attributes.flexbox.align)  innerBlocksProps.className += ` ${attributes.flexbox.align.trim()}`;
        if (attributes.flexbox.flow)   innerBlocksProps.className += ` ${attributes.flexbox.flow}`;
        if (attributes.flexbox.nowrap) innerBlocksProps.className += ` ${attributes.flexbox.nowrap}`;
        if (attributes.flexbox.masonry) innerBlocksProps.className += ` ${attributes.flexbox.masonry}`;
        if (attributes.flexbox.equals && attributes.flexbox.cols) innerBlocksProps.className += ` row-cols-${attributes.flexbox.cols > 0 ? attributes.flexbox.cols : "auto"}`;
        if (attributes.flexbox['animated-childs']) innerBlocksProps.className += ` ${attributes.flexbox['animated-childs']}`;
        //===> Responsive <===//
        screens.forEach(screen => {
            if (attributes.flexbox[`align-${screen}`]) innerBlocksProps.className += ` ${attributes.flexbox[`align-${screen}`]}`;
            if (attributes.flexbox[`flow-${screen}`]) innerBlocksProps.className += ` ${attributes.flexbox[`flow-${screen}`]}`;
            if (attributes.flexbox[`nowrap-${screen}`]) innerBlocksProps.className += ` ${attributes.flexbox[`nowrap-${screen}`]}`;
            if (attributes.flexbox[`masonry-${screen}`]) innerBlocksProps.className += ` ${attributes.flexbox[`masonry-${screen}`]}`;
            if (attributes.flexbox.equals && attributes.flexbox[`cols-${screen}`]) innerBlocksProps.className += ` row-cols-${screen}-${attributes.flexbox[`cols-${screen}`] > 0 ? attributes.flexbox[`cols-${screen}`] : "auto"}`;
        });
    }

    //===> Slider Options <===//
    if (attributes.flexbox.slider && attributes.slider.preview) {
        //===> Add Slider Name <===//
        innerBlocksProps.className += ' px-slider';

        //===> Set Other Options <===//
        if (attributes.slider.type) innerBlocksProps['data-type'] = attributes.slider.type;
        if (attributes.slider.steps) innerBlocksProps['data-steps'] = attributes.slider.steps;
        if (attributes.slider.speed) innerBlocksProps['data-speed'] = attributes.slider.speed;
        if (attributes.slider.duration) innerBlocksProps['data-duration'] = attributes.slider.duration;
        if (attributes.slider.controls) innerBlocksProps['data-controls'] = 1;
        if (attributes.slider.pagination) innerBlocksProps['data-pagination'] = 1;
        if (attributes.slider.hasOwnProperty('autoplay')) {
            if (attributes.slider.autoplay === true) {innerBlocksProps['data-autoplay'] = 1;}
            else {innerBlocksProps['data-autoplay'] = 0;}
        }
        //===> Responsive <===//
        if (attributes.flexbox.cols) innerBlocksProps[`data-items`] = attributes.flexbox.cols > 0 ? attributes.flexbox.cols : 1;
        screens.forEach(screen => {
            if (attributes.flexbox[`cols${screen}`] && attributes.flexbox[`cols${screen}`] > 0) innerBlocksProps[`data-${screen}`] = attributes.flexbox[`cols${screen}`];
        });
    }

    //===> Style Options <===//
    if (attributes.style || attributes.typography?.color) {
        //===> Text Color <===//
        if (attributes.typography?.color) innerBlocksProps.className += ` ${attributes.typography.color}`;

        //===> Render Background <===//
        if (attributes.style?.background?.value) {
            //===> Image Background <===//
            if (attributes.style.background.type === 'image') {
                innerBlocksProps.className += ` px-media`;
                innerBlocksProps["data-src"] = attributes.style.background.value;
                if (attributes.style.parallax) innerBlocksProps.className += ` ${attributes.style.parallax}`;
            }

            //===> Name Background <===//
            else innerBlocksProps.className += ` ${attributes.style.background.value}`;

            //===> Background Rotation <===//
            if (attributes.style.background.rotate) innerBlocksProps.className += ` ${attributes.style.background.rotate}`;
        }

        //===> Position <===//
        if (attributes.style?.position) {
            //===> if its Absolute Sticky <===//
            if (attributes.style.position === "sticky-absolute") {
                innerBlocksProps["data-sticky"] = ` ${attributes.style.position}`;
                innerBlocksProps.className += ` position-rv fluid z-index-header`;
            }
            //===> Otherwise is Class Name <===//
            else { innerBlocksProps.className += ` ${attributes.style.position}`; }
        }

        //===> Text Color <===//
        if (attributes.typography?.color) innerBlocksProps.className += ` ${attributes.typography.color}`;
    }

    //===> Render <===//
    return (<>
        {/*====> Controls Layout <====*/}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("Layout Settings", "phenix")} initialOpen={true}>
                <FlexboxSet attributes={attributes} mainSetter={set_flexbox} options={attributes.flexbox.equals || attributes.flexbox.slider ? "flex-props, grid-props" : null} >
                    {/*===> Switch Button <===*/}
                    <OptionControl name='slider' checked={attributes.flexbox.slider} onChange={set_flexbox} type='checkbox' className='tiny'>
                        <span className='fas fa-check radius-circle'>{__("Slider.", "phenix")}</span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='style-support' checked={attributes.flexbox['style-support']} onChange={set_flexbox} type='checkbox' className='tiny'>
                        <span className='fas fa-check radius-circle'>{__("Styles Support.", "phenix")}</span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='animated-childs' value="px-animate" checked={attributes.flexbox['animated-childs']} onChange={set_flexbox} type='checkbox' className='tiny'>
                        <span className='fas fa-check radius-circle'>{__("Animate Childs.", "phenix")}</span>
                    </OptionControl>
                </FlexboxSet>
            </PanelBody>
            {/*===> Widget Panel <===*/}
            {attributes.flexbox.slider ? <PanelBody title={__("Slider Options", "phenix")} initialOpen={true}>
                <SliderSet attributes={attributes} mainSetter={set_slider} flexSetter={set_flexbox} />
            </PanelBody> : null}
            {/*===> Widget Panel <===*/}
            {attributes.flexbox['style-support'] ? <PanelBody title={__("Style Options", "phenix")} initialOpen={false}>
                <StylesSet attributes={attributes} mainSetter={set_style} colorSetter={set_typography} options="text-colors, background, position" />
            </PanelBody> : null}
            {/*===> Widget Panel <===*/}
            <PanelBody title={__("Responsive Options", "phenix")} initialOpen={false}>
                <ScreensTabs md={responsive_options} lg={responsive_options} xl={responsive_options} />
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/*====> Edit Layout <====*/}
        {attributes.preview ?
            <img src="https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/row.jpg" alt="" className="fluid" />
        :
        <div {...blockProps}>
            <div {...innerBlocksProps}></div>
        </div>
        }
    </>);
}