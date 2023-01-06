//====> WP Modules <====//
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
import ColumnSize from '../px-controls/grid/column-size';
import PhenixPadding from '../px-controls/elements/padding';
import PhenixMargin from '../px-controls/elements/margin';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_tagName = tagName => setAttributes({ tagName });
    const set_size = size => setAttributes({ size });
    const set_spacing_pd = spacing_pd => setAttributes({ spacing_pd });
    const set_spacing_mg = spacing_mg => setAttributes({ spacing_mg });

    //===> Options Tabs <===//
    const changeTab = (clicked) => {
        //===> Option Data <===//
        let element = Phenix(clicked.target),
            parent  = element.ancestor('.options-tabs'),
            optionsList = Phenix(parent).next('.options-list'),
            currentActive = Phenix(parent.querySelector(':scope > .primary')),
            currentType = `${element[0].getAttribute('data-options')}`,
            targetElement = optionsList.querySelector(`:scope > .${currentType}`);

        //===> Change Active <===//
        currentActive.addClass('light').removeClass('primary');
        element.addClass('primary').removeClass('light');

        //===> Show Options <===//
        optionsList.querySelector(':scope > .flexbox:not(.hidden)')?.classList.add('hidden');
        Phenix(targetElement).removeClass('hidden');
    };

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps();
    const TagName = attributes.tagName;

    //===> Set Properties <===//
    blockProps.className += ` ${blockProps.className}`;
    blockProps.className += ` ${attributes.size}`;
    
    //===> Render Spacing <===//
    if (attributes.spacing_pd) blockProps.className += ` ${attributes.spacing_pd}`;
    if (attributes.spacing_mg) blockProps.className += ` ${attributes.spacing_mg}`;

    //===> Render <===//
    return (<>
        {/*====> Controls Layout <====*/}
        <InspectorControls key="inspector">
            {/*=== Column Size ===*/}
            <PanelBody title="Column Size" initialOpen={true}>
                <ColumnSize key="flex-align" value={attributes.size} onChange={set_size}></ColumnSize>
            </PanelBody>
            {/*===> Widget Panel <===*/}
            <PanelBody title="General Settings" initialOpen={false}>
                {/*=== Component <TagName> ===*/}
                <SelectControl key="tagName" label="HTML Tag" value={attributes.tagName} onChange={set_tagName} options={[
                    { label: 'Default <div>',  value: 'div' },
                    { label: 'Main <main>',  value: 'main' },
                    { label: 'Aside <aside>',  value: 'aside' },
                    { label: 'Section <section>',  value: 'section' },
                    { label: 'Header <header>', value: 'header' },
                    { label: 'Footer <footer>', value: 'footer' },
                ]}/>
            </PanelBody>
            {/*===> Spacing <===*/}
            <PanelBody title="Spacing" initialOpen={false}>
                {/*===> Options Tabs <====*/}
                <div className='options-tabs lined-tabs fluid px-group borderd-group divider-b mb-10'>
                    <button key="padding" onClick={changeTab} className={`btn tiny outline primary col`} data-options="padding-size">Padding Size</button>
                    <button key="margin" onClick={changeTab} className={`btn tiny outline light col`} data-options="margin-size">Margin Size</button>
                </div>
                {/*===> Options Panels <====*/}
                <div className='options-list'>
                    {/*===> Padding <====*/}
                    <div className={`flexbox padding-size`}>
                        <PhenixPadding key="px-spacing_pd" onChange={set_spacing_pd} value={attributes.spacing_pd} />
                    </div>
                    {/*===> Margin <====*/}
                    <div className={`flexbox margin-size hidden`}>
                        <PhenixMargin key="px-spacing_mg" onChange={set_spacing_mg} value={attributes.spacing_mg} />
                    </div>
                </div>
                {/*===> End Options Types <====*/}
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/*====> Edit Layout <====*/}
        {attributes.preview ?
            <img src="https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/column.jpg" alt="" className="fluid" />
        :
        <TagName {...blockProps}>
            <div {...innerBlocksProps}></div>
        </TagName>
        }
    </>);
}