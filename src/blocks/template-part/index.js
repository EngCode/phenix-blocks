//====> WordPress Modules <====//
const { addFilter } = wp.hooks;
const { createHigherOrderComponent } = wp.compose;

import {
    PanelBody,
    ToggleControl
} from '@wordpress/components';

import {
    useBlockProps,
    InspectorControls
} from '@wordpress/block-editor';

import { Fragment } from '@wordpress/element';

//====> Phenix Modules <====//
import PhenixColor from '../_pds/px-colors';
import FlexAlignment from '../_pds/flex-alignment';
import PhenixBackground from '../_pds/px-background';

//===> Add Custom Attributes <===//
function template_part_attributes(settings) {
    //===> Assign New Attribute to the Block <===//
    settings.attributes = Object.assign(settings.attributes, {
        isFlexbox : {
            type: "boolean",
            default: false
        },

        flex_align : {
            type: "string",
            default: ""
        },

        bg_type : {
            type : "string",
            default : "color"
        },

        bg_rotate : {
            type : "string",
            default : ""
        },

        background : {
            type : "string",
            default : ""
        },

        color : {
            type : "string",
            default : ""
        }
    });

    return settings;
}

addFilter('blocks.registerBlockType', 'core/template-part', template_part_attributes);

//===> Add Custom Controls <===//
const template_part_extra = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        //===> Get Block Methods <===//
        const {attributes, setAttributes} = props;

        //===> Set Settings <===//
        const set_color = color => setAttributes({ color });
        const set_isFlexbox = isFlexbox => setAttributes({ isFlexbox });
        const set_alignment = alignment => setAttributes({ flex_align : alignment });

        //===> Set Background <===//
        const set_background = background => {
            //=== Set New Value ===//
            setAttributes({ background : background.value });
            //===> Update Rotation <===//
            if (attributes.bg_type === 'gradient' && background.rotation) {
                setAttributes({bg_rotate : background.rotation});
            } else {
                setAttributes({ bg_type : background.type });
            }
        }

        //===> Set Phenix View <===//
        const setPhenixView = () => {
            //===> Check Site Editor <===//
            let siteEditor = window.frames['editor-canvas'],
                blockElement = '.px-media';

            //===> Get the Element from Site Editor <===//
            if (siteEditor) {
                blockElement = siteEditor.document.querySelectorAll('.px-media');
                blockElement = [...blockElement];
                Phenix(blockElement).multimedia();
            }

            //===> Set Background <===//
            if (!siteEditor) Phenix(blockElement).multimedia();
        }

        //===> Get Block Properties <===//
        const blockProps = useBlockProps();
        if (blockProps['data-type'] === 'core/template-part') {
            let container_element = blockProps;
            
            console.log(container_element);
            //===> Render Alignment <===//
            if (attributes.isFlexbox) {
                container_element.className += ' flexbox';
                if (attributes.flex_align) container_element.className +=` ${attributes.flex_align}`;
            }
    
            //===> Render Color <===//
            if (attributes.color) container_element.className += ` ${attributes.color}`;
    
            //===> Render Background <===//
            if (attributes.background) {
                //===> Image Background <===//
                if (attributes.bg_type === 'image') {
                    blockProps.className += ` px-media`;
                    blockProps["data-src"] = attributes.background;
                    setPhenixView();
                }
                //===> Name Background <===//
                else blockProps.className += ` ${attributes.background}`;
            }
        }

        //===> Create Fragment Component <===//
        return (<Fragment>
            {/*===> ... <===*/}
            <BlockEdit {...props} />

            {/*===> Inspector Controls <===*/}
            <InspectorControls key="inspector">
                {/*===> Widget Panel <===*/}
                <PanelBody title="Layout Settings">
                    {/*===  isFlexbox ===*/}
                    <ToggleControl key="isFlexbox" label="Flexbox Layouts" checked={attributes.isFlexbox} onChange={set_isFlexbox}/>

                    {/*=== Flexbox Alignment ===*/}
                    {attributes.isFlexbox ?
                        <FlexAlignment key="flex-align" value={attributes.flex_align} onChange={set_alignment}></FlexAlignment>
                    : null}
                </PanelBody>
                {/*===> Widget Panel <===*/}
                <PanelBody title="Typography" initialOpen={false}>
                    {/* Text Color */}
                    <PhenixColor key="px-color" onChange={set_color} value={attributes.color} />
                </PanelBody>
                {/*===> Widget Panel <===*/}
                <PanelBody title="Background" initialOpen={false}>
                    <PhenixBackground key="px-bg" onChange={set_background} type={attributes.bg_type} value={attributes.background} />
                </PanelBody>
                {/*===> End Widgets Panels <===*/}
            </InspectorControls>
        </Fragment>);
    };
}, 'withAdvancedControls');

addFilter('editor.BlockEdit', 'core/template-part', template_part_extra);
