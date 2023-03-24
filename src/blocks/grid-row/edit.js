//====> WP Modules <====//
import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    SelectControl,
    ToggleControl
} from '@wordpress/components';

import {
    InnerBlocks,
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls
} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import FlexAlignment from '../px-controls/alignment';

//====> Phenix Modules <====//
import ScreensTabs from "../px-controls/tabs";
import PhenixNumber from "../px-controls/number";
import PhenixSelect from '../px-controls/select';
import OptionControl from '../px-controls/switch';

//====> Phenix Options Sets <=====//
import StylesSet from '../px-controls/sets/styles';
import FlexboxSet from '../px-controls/sets/flexbox';
import TypographySet from '../px-controls/sets/typography';
import SliderSet from '../px-controls/sets/slider';

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
    const set_flexbox = target => {
        //==> Get Current <==//
        let name = target instanceof HTMLElement ? target.getAttribute('name') : `${target}`;
        const flexbox = attributes.flexbox;
            
        //==> Add the Value <==//        
        if(name.includes('align-')) { name = "align" }
        flexbox[`${name}`] = typeof(name) === "string" ? target.replace("align-reset", "") : valueHandler(target);

        //==> Set Value <==//
        setAttributes({ flexbox : {...flexbox} });
    };

    //==> ..Responsive.. <==//
    const set_responsive_flexbox = (target, screen) => {
        //==> Get Current <==//
        let name = target instanceof HTMLElement ? target.getAttribute('name') : `${target}`;
        const flexbox = attributes.flexbox;

        //==> Add the Value <==//
        if(name.includes('align-')) {
            name = `align`;
            flexbox[`${name}-${screen}`] = target.replace("align-reset", "").replace('align-', `align-${screen}-`);
        } else {
            flexbox[`${name}-${screen}`] = typeof(name) === "string" ? target : valueHandler(target);
        }

        //==> Set Value <==//
        setAttributes({ flexbox : {...flexbox} });
    };

    //==> Set Slider Method <==//
    const set_slider = target => {
        //==> Get Current <==//
        let name = target instanceof HTMLElement ? target.getAttribute('name') : `${target}`;
        const slider = attributes.slider;

        //==> Add the Value <==//
        slider[`${name}`] = typeof(name) === "string" ? target : valueHandler(target);

        //==> Set Value <==//
        setAttributes({ slider : {...slider} });
    };

    //==> Set Typography Method <==//
    const set_typography = target => {
        //==> Get Current <==//
        let name = target instanceof HTMLElement ? target.getAttribute('name') : "color";
        const typography = attributes.typography;

        //==> Add the Value <==//
        attributes.typography[`${name}`] = name === "color" ? target : valueHandler(target);

        //==> Set Value <==//
        setAttributes({ typography : {...typography} });
    };

    //==> Set Style Method <==//
    const set_style = target => {
        //==> Get Current <==//
        let name = target instanceof HTMLElement ? target.getAttribute('name') : "background";
        const style = attributes.style;

        //==> Add the Value <==//
        style[`${name}`] = name === "background" ? target : valueHandler(target);

        //==> Set Value <==//
        setAttributes({ style : {...style} });
    };

    //===> Responsive Options <===//
    const responsive_options = (screen) => {
        return <>
            <FlexboxSet screen={`${screen}`} attributes={attributes} mainSetter={set_responsive_flexbox} options={attributes.flexbox.equals || attributes.flexbox.slider ? "flex-props, grid-props" : null}></FlexboxSet>
        </>
    };

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps();

    //===> Set Properties <===//
    innerBlocksProps.className += ` ${blockProps.className}`;
    innerBlocksProps.className += ' row';

    //===> Grid Options <===//
    if(!attributes.flexbox.slider) {
        if (attributes.flexbox.align)  innerBlocksProps.className += ` ${attributes.flexbox.align}`;
        if (attributes.flexbox.flow)   innerBlocksProps.className += ` ${attributes.flexbox.flow}`;
        if (attributes.flexbox.nowrap) innerBlocksProps.className += ` ${attributes.flexbox.nowrap}`;
        if (attributes.flexbox.masonry) innerBlocksProps.className += ` ${attributes.flexbox.masonry}`;
        if (attributes.flexbox.equals && attributes.flexbox.cols) innerBlocksProps.className += ` row-cols-${attributes.flexbox.cols > 0 ? attributes.flexbox.cols : "auto"}`;
        //===> Responsive <===//
        let screens = ["md", "lg", "xl"];
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
        let screens = ["md", "lg", "xl"];
        if (attributes.flexbox.cols) innerBlocksProps[`data-items`] = attributes.flexbox.cols > 0 ? attributes.flexbox.cols : 1;
        screens.forEach(screen => {
            if (attributes.flexbox[`cols-${screen}`] && attributes.flexbox[`cols-${screen}`] > 0) innerBlocksProps[`data-${screen}`] = attributes.flexbox[`cols-${screen}`];
        });
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
                </FlexboxSet>
            </PanelBody>
            {/*===> Widget Panel <===*/}
            {attributes.flexbox.slider ? <PanelBody title={__("Slider Options", "phenix")} initialOpen={true}>
                <SliderSet attributes={attributes} mainSetter={set_slider} flexSetter={set_flexbox} />
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