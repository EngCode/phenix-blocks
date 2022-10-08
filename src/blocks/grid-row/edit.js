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
import FlexAlignment from '../px-controls/flex-alignment';
import EqualColumns from '../px-controls/equal-columns';
import PhenixPadding from '../px-controls/padding';
import PhenixMargin from '../px-controls/margin';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_tagName = tagName => setAttributes({ tagName });
    const set_isEqual = isEqual => setAttributes({ isEqual });
    const set_columns = columns => setAttributes({ columns });
    const set_isSlider = isSlider => setAttributes({ isSlider });
    const set_controls = controls => setAttributes({ controls });
    const set_isMasonry = isMasonry => setAttributes({ isMasonry });
    const set_pagination = pagination => setAttributes({ pagination });
    const set_alignment = alignment => setAttributes({ flex_align : alignment });
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
    innerBlocksProps.className += ` ${blockProps.className}`;
    innerBlocksProps.className += ' row';

    //===> Alignment <===//
    if (attributes.flex_align) innerBlocksProps.className +=` ${attributes.flex_align}`;

    //===> Masonry <===//
    if (attributes.isMasonry) innerBlocksProps.className += ' px-masonry';

    //===> Columns <===//
    if (attributes.isEqual && attributes.columns) innerBlocksProps.className += attributes.columns;
    
    //===> Slider <===//
    if (attributes.isSlider) {
        //===> Add Slider Name <===//
        innerBlocksProps.className += ' px-slider';
        
        //===> Set Items <===//
        let columns_names = attributes.columns.split(' ');
        columns_names.forEach(name => {
            //===> Medium Screen <===//
            if (name.includes('-md')) innerBlocksProps['data-md'] = name.replace('row-cols-md-','');
            //===> Large Screen <===//
            else if (name.includes('-lg')) innerBlocksProps['data-lg'] = name.replace('row-cols-lg-','');
            //===> xLarge Screen <===//
            else if (name.includes('-xl')) innerBlocksProps['data-xl'] = name.replace('row-cols-xl-','');
            //===> Small Screen <===//
            else if (name.includes('row-cols')) innerBlocksProps['data-items'] = name.replace('row-cols-','');
        });

        //===> Set Other Options <===//
        if (attributes.controls) innerBlocksProps['data-controls'] = 1;
        if (attributes.pagination) innerBlocksProps['data-pagination'] = 1;

        //===> for Edit only <===//
        // innerBlocksProps.className += attributes.columns;
    }

    //===> Render Spacing <===//
    if (attributes.spacing_pd) innerBlocksProps.className += ` ${attributes.spacing_pd}`;
    if (attributes.spacing_mg) innerBlocksProps.className += ` ${attributes.spacing_mg}`;

    //===> Render <===//
    return (<>
        {/*====> Controls Layout <====*/}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="General Settings">
                {/*=== Component <TagName> ===*/}
                <SelectControl key="tagName" label="HTML Tag" value={attributes.tagName} onChange={set_tagName} options={[
                    { label: 'Default <div>',  value: 'div' },
                    { label: 'Main <main>',  value: 'main' },
                    { label: 'Aside <aside>',  value: 'aside' },
                    { label: 'Section <section>',  value: 'section' },
                    { label: 'Header <header>', value: 'header' },
                    { label: 'Footer <footer>', value: 'footer' },
                ]}/>

                {/*=== Masonry Grid ===*/}
                <ToggleControl label="Masonry Grid" checked={attributes.isMasonry} onChange={set_isMasonry}/>

                {/*=== Equal Columns ===*/}
                <ToggleControl label="Responsive Columns" checked={attributes.isEqual} onChange={set_isEqual}/>

                {/*=== Slider Toggle ===*/}
                <ToggleControl label="Enable Slider" checked={attributes.isSlider} onChange={set_isSlider}/>
            </PanelBody>
            {/*=== Slider ===*/}
            {attributes.isSlider ?
                <PanelBody title="Slider Options" initialOpen={true}>
                    <ToggleControl label="Enable Pagination" checked={attributes.pagination} onChange={set_pagination}/>
                    <ToggleControl label="Enable Arrow Buttons" checked={attributes.controls} onChange={set_controls}/>
                </PanelBody>
            : null}
            {/*=== Columns ===*/}
            {attributes.isEqual || attributes.isSlider ?
                <PanelBody title="Columns Size" initialOpen={true}>
                    <EqualColumns key="row-columns" value={attributes.columns} onChange={set_columns}></EqualColumns>
                </PanelBody>
            : null}
            {/*=== Alignment ===*/}
            {!attributes.isSlider ?
                <PanelBody title="Alignment" initialOpen={false}>
                    <FlexAlignment key="flex-align" value={attributes.flex_align} onChange={set_alignment}></FlexAlignment>
                </PanelBody>
            : null}
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
            <img src="https://raw.githubusercontent.com/EngCode/phenix-blocks/main/assets/img/prev/row.jpg" alt="" className="fluid" />
        :
        <div {...blockProps}>
            <TagName {...innerBlocksProps}></TagName>
        </div>
        }
    </>);
}