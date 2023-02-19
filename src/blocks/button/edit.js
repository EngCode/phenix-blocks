//====> WP Modules <====//
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';

import {
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl,
    __experimentalRadio as Radio,
    __experimentalRadioGroup as RadioGroup,
} from '@wordpress/components';

import {
    RichText,
    useBlockProps,
    useInnerBlocksProps,
    InspectorControls,
    __experimentalLinkControlSearchInput as LinkControlSearchInput
} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import OptionControl from '../px-controls/switch';
import MediaUploader from '../px-controls/uploader';
import PhenixColor from '../px-controls/colors/text';
import PhenixBackground from '../px-controls/colors/background';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_size = size => setAttributes({size});
    const set_type = type => setAttributes({type});
    const set_label = label => setAttributes({ label });
    const set_radius = radius => setAttributes({radius});
    const set_outline = outline => setAttributes({ outline });
    const set_data_id = data_id => setAttributes({ data_id });
    const set_iconEnd = iconEnd => setAttributes({ iconEnd });
    const set_iconLabel = iconLabel => setAttributes({ iconLabel });
    const set_isLightBox = isLightBox => setAttributes({isLightBox});
    const set_data_modal = data_modal => setAttributes({ data_modal });
    const set_lightbox_src = lightbox_src => setAttributes({lightbox_src});
    const set_lightbox_type = lightbox_type => setAttributes({lightbox_type});

    //===> Link Settings <===//
    const set_isLink = isLink => setAttributes({ isLink });
    const set_inNewTab = inNewTab => setAttributes({ inNewTab });
    const set_url = url => setAttributes({ url });

    //===> Get Options <===//
    let style_options = attributes.style,
        background = style_options?.background,
        typography = attributes.typography;

    //===> Default Typography <===//
    if(typography) {
        if(!typography.size)   typography.size = "";
        if(!typography.color)  typography.color = "";
        if(!typography.weight) typography.weight = "";
        if(!typography.align)  typography.align  = "";
    }

    //===> Default Style <===//
    if(style_options) {
        //===> Background <===//
        if (!style_options.background) style_options.background = {};
        if (!style_options.background.value)  typography.value  = "";
        if (!style_options.background.rotate) typography.rotate = "";
        if (!style_options.background.type)   typography.type = "color";
    }

    //===> Typography Options <===//
    const set_typography_size = value => {
        //==> Size <==//
        typography.size = value;
        setAttributes({ typography : {...typography} });
    };

    //==> Weight <==//
    const set_typography_weight = value => {
        typography.weight = value;
        setAttributes({ typography : {...typography} });
    };

    //==> Align <==//
    const set_typography_align = target => {
        typography.align = target.checked ? target.value : "";
        setAttributes({ typography : {...typography} });
    };

    //==> Color <==//
    const set_color = value => {
        typography.color = value;
        setAttributes({ typography : {...typography} });
    };

    //===> Set Background <===//
    const set_background = background => {
        style_options.background = background;
        setAttributes({ style : {...style_options} });
    };

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps();
    blockProps.className += ` btn`;
    const labelControl = <RichText value={ attributes.label } onChange={set_label} tagName="span" placeholder="TXT" className="mg-0 pd-0"/>;

    //===> Set Phenix Components <===//
    const setPhenixView = () => {
        //===> Check Site Editor <===//
        let siteEditor = window.frames['editor-canvas'],
            blockElement = '.px-media';

        //===> Correct Editor Target for Site-Editor <===//
        if (siteEditor) {
            blockElement = siteEditor.document.querySelectorAll('.px-media');
            blockElement = [...blockElement];
        }

        //===> Set Background <===//
        if (background?.type === 'image') Phenix(blockElement).multimedia();
    }

    useEffect(() => setPhenixView(), [attributes]);

    //===> Initial Script <===//
    useEffect(() => {
        //===> Loading FontAwesome <===//
        if (window.frames['editor-canvas']) {
            if (document.querySelector("#fontawesome-css")) {
                //===> Check in the Editor <===//
                let fontAwesome = document.querySelector("#fontawesome-css"),
                    canvasAwesome = window.frames['editor-canvas'].document.querySelector("#fontawesome-css");
    
                //===> if Font Awesome not Loaded <===//
                if (!canvasAwesome && fontAwesome) {
                    let newAwesome = document.importNode(fontAwesome, true);
                    window.frames['editor-canvas'].document.head.appendChild(newAwesome);
                }
            }
        }
    }, []);

    //===> Typography Properties <===//
    if (typography) {
        if(typography.size) blockProps.className += ` ${typography.size}`;
        if(typography.color) blockProps.className += ` ${typography.color}`;
        if(typography.weight) blockProps.className += ` ${typography.weight}`;
        if(typography.align) blockProps.className += ` ${typography.align}`;
    }

    //===> Render Background <===//
    if (background?.value) {
        //===> Image Background <===//
        if (background.type === 'image') {
            blockProps.className += ` px-media`;
            blockProps["data-src"] = background.value;
        }

        //===> Name Background <===//
        else {
            //===> Adjust Primary Colors <===//
            let isPrimary = false,
                primaryColors = ["bg-primary", "bg-secondary", "bg-gray", "bg-dark", "bg-white", "bg-success", "bg-danger", "bg-warning", "bg-info"];
            
            //===> Correct Colors <===//
            primaryColors.forEach(color => background.value === color ? isPrimary = true : null);

            //===> Set the Background <===//
            if (isPrimary) { blockProps.className += ` ${background.value.replace('bg-', '')}`; }
            else { blockProps.className += ` ${background.value}`; }
        }

        //===> Background Rotation <===//
        if (background.rotate) blockProps.className += ` ${background.rotate}`;
    }

    //===> Default Type <===//
    if (attributes.type) blockProps.className += ` ${attributes.type}`;

    //===> Default Size <===//
    if (attributes.size) blockProps.className += ` ${attributes.size}`;

    //===> Default Radius <===//
    if (attributes.radius) blockProps.className += ` ${attributes.radius}`;

    //===> Default Style <===//
    if (attributes.outline) blockProps.className += ` outline`;

    //===> Set JS URL <===//
    if (attributes.isLink) blockProps['href'] = "#none";

    //===> URL Auto-Complete <===//
    const suggestionsRender = (props) => (
        <ul className="fluid reset-list bg-white bx-shadow-dp-1 border-1 border-solid border-alpha-10 z-index-dropdown position-ab pos-start-0 pos-after-y">
            {props.suggestions.map((suggestion, index) => {
                    return (
                        <li key={`link-sug-key-${index}`} className="pdx-15 pdy-5 fs-12 divider-b mouse-pointer" onClick={() => props.handleSuggestionClick(suggestion)}>
                            <strong>{suggestion.title}</strong>
                            <span className='display-block fs-10 color-primary tx-nowrap'>{suggestion.url}</span>
                        </li>
                    )
                })
            }
        </ul>
    );

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            {attributes.isLink ?<PanelBody title="Link Settings">
                {/* Current Link */}
                <span className='color-primary tx-icon far fa-link display-block mb-10'>{attributes.url}</span>
                {/* Link Controls */}
                <LinkControlSearchInput
                    placeholder="URL or Page Name"
                    onChange={set_url}
                    value={ attributes.url }
                    allowDirectEntry={false}
                    withURLSuggestion={false}
                    withCreateSuggestion={false}
                    renderSuggestions={(props) => suggestionsRender(props)}
                />
                {/*=== isLink ===*/}
                <div className='mt-10'><ToggleControl label="Open in New Tab ?" checked={attributes.inNewTab} onChange={set_inNewTab}/></div>
            </PanelBody> : null}
            {/*===> Widget Panel <===*/}
            <PanelBody title="General Settings">
                {/*=== Button Type ===*/}
                <label className='mb-10 weight-medium'>Button Type</label>
                <RadioGroup label="Button Type" onChange={ set_type } defaultChecked={attributes.type}>
                    <Radio value="normal">Default</Radio>
                    <Radio value="square">icon only</Radio>
                    <Radio value="btn-icon">with icon</Radio>
                </RadioGroup>

                {/* Divider */}
                <span className='display-block border-alpha-05 bg-alpha-05 col-12 my-15 divider-t'></span>

                {/*=== Button Size ===*/}
                <label className='mb-10 weight-medium'>Button Size</label>
                <RadioGroup label="Button Size" onChange={ set_size } defaultChecked={attributes.size}>
                    <Radio value="normal">Default</Radio>
                    <Radio value="tiny">XS</Radio>
                    <Radio value="small">SM</Radio>
                    <Radio value="large">LG</Radio>
                    <Radio value="xlarge">XL</Radio>
                </RadioGroup>

                {/* Divider */}
                <span className='display-block border-alpha-05 bg-alpha-05 col-12 my-15 divider-t'></span>

                {/*=== Button Size ===*/}
                <label className='mb-10 weight-medium'>Border Radius</label>
                <RadioGroup label="Button Size" onChange={ set_radius } defaultChecked={attributes.radius}>
                    <Radio value="radius-none">NO</Radio>
                    <Radio value="radius-sm">XS</Radio>
                    <Radio value="radius-md">SM</Radio>
                    <Radio value="radius-lg">LG</Radio>
                    <Radio value="radius-xl">XL</Radio>
                    <Radio value="radius-xxl">XXL</Radio>
                    <Radio value="radius-circle">Full Circle</Radio>
                    <Radio value="radius-height">Full Round</Radio>
                </RadioGroup>

                {/* Divider */}
                <span className='display-block border-alpha-05 bg-alpha-05 col-12 my-15 divider-t'></span>

                {/*=== isOutline ===*/}
                <ToggleControl label="Outline Style" checked={attributes.outline} onChange={set_outline}/>

                {/*=== isLink ===*/}
                <ToggleControl label="Link Button" checked={attributes.isLink} onChange={set_isLink}/>

                {/*=== isLightbox ===*/}
                <ToggleControl label="Lightbox Button" checked={attributes.isLightBox} onChange={set_isLightBox}/>

                {/*=== Icon Settings ===*/}
                {attributes.type === 'btn-icon' ? <>
                    <ToggleControl label="Icon as Label" checked={attributes.iconLabel} onChange={set_iconLabel}/>
                    <ToggleControl label="Icon in the End" checked={attributes.iconEnd} onChange={set_iconEnd}/>
                </>: null}
            </PanelBody>
            {/*===> Typography <===*/}
            <PanelBody title={__("Typography", "phenix")} initialOpen={false}>
                {/*===> Elements Group <===*/}
                <div className='row gpx-20'>
                    {/*===> Size <===*/}
                    <div className='col-6 mb-10'>
                        <SelectControl key="typography-size" label={__("Font Size", "phenix")} value={typography.size || ""} onChange={set_typography_size} options={[
                            { label: 'Default',   value: '' },
                            { label: '12px',   value: 'fs-12' },
                            { label: '13px',   value: 'fs-13' },
                            { label: '14px',   value: 'fs-14' },
                            { label: '15px',   value: 'fs-15' },
                            { label: '16px',   value: 'fs-16' },
                            { label: '17px',   value: 'fs-17' },
                            { label: '18px',   value: 'fs-18' },
                            { label: '19px',   value: 'fs-19' },
                            { label: '20px',   value: 'fs-20' },
                            { label: '22px',   value: 'fs-22' },
                            { label: '24px',   value: 'fs-24' },
                            { label: '25px',   value: 'fs-25' },
                            { label: '26px',   value: 'fs-26' },
                            { label: '28px',   value: 'fs-28' },
                            { label: '30px',   value: 'fs-30' },
                        ]}/>
                    </div>
                    {/*===> HTML Tag <===*/}
                    <div className='col-6 mb-10'>
                        <SelectControl key="typography-weight" label={__("Font Weight", "phenix")} value={typography.weight || ""} onChange={set_typography_weight} options={[
                            { label: 'Default',  value: '' },
                            { label: 'Thin',  value: 'weight-thin'},
                            { label: 'Light',  value: 'weight-light'},
                            { label: 'Extra Light',  value: 'weight-xlight'},
                            { label: 'Normal',  value: 'weight-normal'},
                            { label: 'Medium',  value: 'weight-medium'},
                            { label: 'Semi-Bold',  value: 'weight-bold'},
                            { label: 'Bold',  value: 'weight-strong'},
                            { label: 'Heavy',  value: 'weight-xbold'},
                            { label: 'Black',  value: 'weight-black'},
                        ]}/>
                    </div>
                    {/*===> // Column <===*/}
                </div>
                {/*===> Text Color <===*/}
                <PhenixColor key="px-color" label={__("Text Color", "phenix")} onChange={set_color} value={typography.color || ""} />
                {/*===> Label <===*/}
                <label className='col-12 mb-5 tx-UpperCase'>{__("Text Alignment", "phenix")}</label>
                {/*===> Elements Group <===*/}
                <div className='flexbox'>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={!typography.align || typography.align === ""} value={""} onChange={set_typography_align} type='button-radio' className='small me-5'>
                        <span className='btn small square outline gray far fa-align-slash radius-sm'></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={typography.align === "tx-align-start" ? true : false} value={"tx-align-start"} onChange={set_typography_align} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-${Phenix(document).direction() === "ltr" ? 'left' : "right"} radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={typography.align === "tx-align-justify" ? true : false} value={"tx-align-justify"} onChange={set_typography_align} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-justify radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={typography.align === "tx-align-center" ? true : false} value={"tx-align-center"} onChange={set_typography_align} type='button-radio' className='small me-5'>
                        <span className={`btn small square outline gray fs-17 far fa-align-center radius-sm`}></span>
                    </OptionControl>
                    {/*===> Switch Button <===*/}
                    <OptionControl name='text-align' checked={typography.align === "tx-align-end" ? true : false} value={"tx-align-end"} onChange={set_typography_align} type='button-radio' className='small'>
                        <span className={`btn small square outline gray fs-17 far fa-align-${Phenix(document).direction() === "rtl" ? 'left' : "right"} radius-sm`}></span>
                    </OptionControl>
                </div>
            </PanelBody>
            {/*===> Style Options <===*/}
            <PanelBody title={__("Style Options", "phenix")} initialOpen={false}>
                {/*===> Background <===*/}
                <PhenixBackground key="px-bg" label={__("Background", "phenix")}  onChange={set_background} type={style_options.background?.type || "color"} value={style_options.background?.value || ""} rotate={style_options.background?.rotate || null} />
            </PanelBody>
            {/*===> Widget Panel <===*/}
            {attributes.isLightBox ?<PanelBody title="Lightbox Settings">
                {/*=== Component <TagName> ===*/}
                <SelectControl key="lightbox-type" label="Lightbox Type" value={attributes.lightbox_type} onChange={set_lightbox_type} options={[
                    { label: 'Image',  value: 'image' },
                    { label: 'Video',  value: 'video' },
                    { label: 'Embed',  value: 'embed' },
                ]}/>

                {/*===> Custom Source <===*/}
                <ToggleControl label="Custom Source" checked={attributes.lightbox_src} onChange={set_lightbox_src}/>

                {/*===> Source Control <===*/}
                {attributes.lightbox_src ?
                    <MediaUploader label="Upload Source" type={attributes.lightbox_type} value={attributes.url} setValue={(file => {setAttributes({url: file.url})})}></MediaUploader>
                :
                    <TextControl key="container_id" label="Lightbox Source" value={ attributes.url } onChange={set_url}/>
                }
            </PanelBody> : null}
            {/*===> Widget Panel <===*/}
            <PanelBody title="Custom Data" initialOpen={false}>
                {/* Data ID */}
                <TextControl label="Data-ID" value={ attributes.data_id } onChange={set_data_id} />
                {/* Data Modal */}
                <TextControl label="Data-Modal" value={ attributes.data_modal } onChange={set_data_modal} />
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        {attributes.preview ?
            <img src="https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/buttons.jpg" alt="" className="fluid" />
            :
            <>
            {attributes.isLink ? 
                <a onClick={(event) => event.preventDefault()} { ...blockProps }>{attributes.type !== 'square' ? labelControl : ''}</a>
                :
                <button { ...blockProps }>{attributes.type !== 'square' ? labelControl : ''}</button>
            }
            </>
        }
    </>);
}