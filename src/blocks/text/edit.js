//====> WP Modules <====//
import {__} from '@wordpress/i18n';
import {PanelBody, ToolbarGroup} from '@wordpress/components';
import {RichText, BlockControls, InspectorControls, useBlockProps, useInnerBlocksProps,__experimentalLinkControlSearchInput as LinkControlSearchInput} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import ScreensTabs from "../px-controls/tabs";
import PhenixIcons from '../px-controls/icons';
import PxDropDown from '../px-controls/dropdown';
import PhenixSelect from '../px-controls/select';
import PhenixInput from '../px-controls/input';
import OptionControl from '../px-controls/switch';
import SuggestionsUrl from "../px-controls/dynamic-url";

//====> Phenix Options Sets <=====//
import SizesSet from '../px-controls/sets/sizes';
import PaddingSet from '../px-controls/sets/padding';
import MarginSet from '../px-controls/sets/margin';
import PositionSet from '../px-controls/sets/position';
import StylesSet from '../px-controls/sets/styles';
import TypographySet from '../px-controls/sets/typography';
import AnimationsSet from '../px-controls/sets/animations';
import EffectsSet from '../px-controls/sets/effects';
import BorderSet from '../px-controls/sets/border';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes, clientId }) {
    //====> Attributes Renderers <====//
    const PhenixBlocks = window.PhenixBlocks;
    const OptionsRenderer = PhenixBlocks.OptionsRenderer;

    //===> Value Handler <===//
    const set_value = (target) => PhenixBlocks.set_value(target, attributes, setAttributes);
    const set_url = value => PhenixBlocks.setObject(value, "", "style", "url", attributes, setAttributes);
    const set_content = content => setAttributes({ content });

    //==> Set Object Attributes Methods <==//
    const set_style = (target, screen) => PhenixBlocks.setObject(target, screen, "style", false, attributes, setAttributes);
    const set_icon = value => PhenixBlocks.setObject(`${value.type} ${value.value}`, "", "style", "icon", attributes, setAttributes);
    const set_typography = (target, screen) => PhenixBlocks.setObject(target, screen, "typography", false, attributes, setAttributes);

    //===> Get Block Properties <===//
    const renderProps = OptionsRenderer({attributes: attributes, blockProps: useBlockProps()});
    const blockProps = renderProps.blockProps;
    const innerBlocksProps = useInnerBlocksProps(blockProps, {allowedBlocks: ['phenix/text-list-item']});
    const uniqueKey = blockProps.id;
    const getTagName = () => {
        //===> Headline <===//
        if (attributes.type === 'headline') return attributes.tagName.includes('h') ? attributes.tagName : 'h2';
        //===> Span <===//
        else if (attributes.type === 'span') return 'span'; 
        //===> Paragraph <===//
        else if (attributes.tagName === '' || attributes.type === 'paragraph') return 'p'; 
        //===> Default <===//
        else return attributes.tagName;
    }

    //===> Tag Name <===//
    const TagName = getTagName();

    //===> Layout Options <===//
    if (attributes.type === "list-custom") {
        innerBlocksProps.className += ` ${renderProps.container.className} reset-list`;
    } else {
        blockProps.className += ` ${renderProps.container.className}`;
    }

    //===> Block Accessibility <===//
    const blockAccessibility = (event, editor) => PhenixBlocks.blockAccessibility(event, clientId, {content: ''}, attributes.content, attributes);

    //===> Render <===//
    return (<>
        {/*====> Settings Toolbar <====*/}
        <BlockControls>
            <ToolbarGroup key={`${uniqueKey}-toolbar`} label={__("Quick Settings", "pds-blocks")}>
                {/*===> Select Control <===*/}
                <div className='inline-block inline-select tooltip-bottom w-150' data-title={__("Text Type", "pds-blocks")}>
                    <PhenixSelect name="type" placeholder={__("Paragraph", "pds-blocks")} className={`tx-align-center weight-medium`} value={attributes.type} onChange={set_value} options={PhenixBlocks.dataLists.textElements.types} />
                </div>
                {/*===> Select Control <===*/}
                {attributes.type === "headline" ?
                    <div className='inline-block inline-select tooltip-bottom w-75' data-title={__("HTML Tag", "pds-blocks")}>
                        <PhenixSelect name="tagName" placeholder={__("H2", "pds-blocks")} className={`weight-bold fs-20 tx-align-center`} value={attributes.tagName} onChange={set_value} options={PhenixBlocks.dataLists.textElements.headlines} />
                    </div>
                : null}
                {/*===> Dropdown Button <===*/}
                <PxDropDown title={__("Style Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-adjust divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                    <li key="pds-styles" className='pdt-15 pdb-5 pdx-15 lineheight-150'>
                        <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} setAttributes={setAttributes} objectSetter={PhenixBlocks.setObject} mainSetter={set_style} colorSetter={set_typography} options="text-colors, background" />
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
                {/*===> Link Input <===*/}
                {attributes.style.isLink ? <PxDropDown title={__("URL Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-link color-success divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-260" >
                    <li key="link" className='pdx-15 pdt-10 pdb-0 mb-0'>
                        <LinkControlSearchInput key={`url-${uniqueKey}`} name="url" placeholder={__("URL or Page Name", "pds-blocks")} onChange={set_url} value={ attributes.style.url || "#" } allowDirectEntry={false} withURLSuggestion={false} withCreateSuggestion={false} renderSuggestions={(props) => SuggestionsUrl(props)} />
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
                {/*===> Icon Control <===*/}
                {!attributes.style?.hasIcon ? 
                    <OptionControl key={`hasIcon-${uniqueKey}`} name={`hasIcon`} value={`boolean`} checked={attributes.style?.hasIcon} onChange={set_style} type='button-checkbox' className='inline-block divider-e border-alpha-25'>
                        <span className='btn bg-transparent fs-16 square tooltip-bottom far fa-icons h-min-100' style={{paddingTop: 2}} data-title={__("Add Icon", "pds-blocks")}></span>
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
                {attributes.style?.support?.includes('enable-position') ?
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
                {attributes.style?.support?.includes('enable-border') ?
                    <PxDropDown title={__("Border Options", "pds-blocks")} button={`bg-transparent fs-16 square far fa-border-all divider-e border-alpha-25 h-100`} dropList="fs-14 w-min-280">
                        <li key="pds-margin" className='pdy-15 pdx-15 lineheight-150'>
                            {/*===> Border Size <===*/}
                            <ScreensTabs
                                sm={(screen) => <BorderSet setAttributes={setAttributes} objectSetter={PhenixBlocks.setObject} attributes={attributes} attrSetter={setAttributes} screen="" mainSetter={target => set_style(target, "")} />}
                                md={(screen) => <BorderSet setAttributes={setAttributes} objectSetter={PhenixBlocks.setObject} attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                                lg={(screen) => <BorderSet setAttributes={setAttributes} objectSetter={PhenixBlocks.setObject} attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
                                xl={(screen) => <BorderSet setAttributes={setAttributes} objectSetter={PhenixBlocks.setObject} attributes={attributes} attrSetter={setAttributes} screen={`-${screen}`} mainSetter={target => set_style(target, "")} />}
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
            </ToolbarGroup>
        </BlockControls>
        {/*====> Controls Layout <====*/}
        <InspectorControls key={`${uniqueKey}-inspector`}>
            {/*===> Widget Panel <===*/}
            <PanelBody title="General Settings" initialOpen={true}>
                {/*=== Form Control  ===*/}
                <PhenixInput className="mb-15" name="id" label={__("HTML ID [Anchor]", "pds-blocks")} value={ attributes.id } onChange={set_value} />
                {/*===> Styles Options <===*/}
                <StylesSet key={`styles-${uniqueKey}`} attributes={attributes} setAttributes={setAttributes} objectSetter={PhenixBlocks.setObject} mainSetter={set_style} colorSetter={set_typography} options="support" />
            </PanelBody>
        </InspectorControls>

        {/*====> Edit Layout <====*/}
        {attributes.preview ?  <img src={PreviewImage} alt="" className='fluid' /> :
            <>{attributes.type === "list" ?
                <RichText {...blockProps} key={`${uniqueKey}`} multiline="li" tagName={"ul"} value={attributes.content} onChange={set_content} placeholder={__("Enter Content", "pds-blocks")} />
            : attributes.type === "list-numbers" ?
                <RichText {...blockProps} key={`${uniqueKey}`} multiline="li" tagName={"ol"} value={attributes.content} />
            : attributes.type === "list-custom" ?
                <div key={`${uniqueKey}`} {...blockProps}>
                    <ul {...innerBlocksProps}></ul>
                </div>
            : 
                <RichText {...blockProps} key={`${uniqueKey}`} tagName={TagName} value={attributes.content} onReplace={() => {}} splitting={""} onKeyDown={blockAccessibility} onChange={set_content} placeholder={__("Enter Content", "pds-blocks")} />
            }</>
        }
    </>);
}