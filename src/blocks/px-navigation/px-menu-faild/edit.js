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

import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Settings <===//
    const set_tagName = tagName => setAttributes({ tagName });

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();
    const innerBlocksProps = useInnerBlocksProps();
    const TagName = attributes.tagName;

    //===> Update Menu List <===//
    const updateMenus = () => {
        //===> List <===//
        let list = [];

        //===> Get Menus List <===//
        apiFetch({path: '/wp/v2/menus'}).then(respond => {
            //===> for Each Menu <===//
            respond.forEach(menu => {
                list.push({
                    label : menu.name,
                    value : menu.id
                });
            });

            //===> if the items is more then 0 <===//
            if (list.length > 0) setAttributes({menus_list: list});
        });
    }

    //===> Menu Items Update <===//
    const updateItems = () => {
        //===> Define Items <===//
        let items_list = [];

        //===> Create Menu Items <===//
        apiFetch({path: `/wp/v2/menu-items?menus=${attributes.menu}`}).then(respond => {
            respond.forEach(item => {
                //===> Main Items <===//
                if (item.parent === 0) {
                    //===> ... <===//
                    items_list.push({
                        id    : item.id,
                        label : item.title,
                        url   : item.url,
                        childs : []
                    });
                }
                //===> Sub-Menus <===//
                items_list.forEach(main_item => {
                    //===> if the item is child of main-item <===//
                    if (main_item.id === item.parent) {
                        main_item.childs.push({
                            id    : item.id,
                            label : item.title,
                            url   : item.url
                        });
                    }
                })
            });
     
            if (items_list.length > 0) setAttributes({menu_items: items_list});
        });
    }

    //===> Set Menu <===//
    const set_menu = menu => {
        updateItems()
        setAttributes({ menu });
    }

    //===> Block Hook <===//
    useEffect(() => {
        //===> Default Menus <===//
        if (attributes.menus_list.length <= 0) updateMenus();

        //===> Create Menu <===//
        if (attributes.menu_items.length <= 0) updateItems();
    });

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="Settings">
                {/*=== Component <TagName> ===*/}
                <SelectControl key="tagName" label="Wrapper Tag" value={attributes.tagName} onChange={set_tagName} options={[
                    { label: 'Default <div>',  value: 'div' },
                    { label: 'Navigation <nav>',  value: 'nav' },
                ]}/>

                {/*=== Select Menu ===*/}
                <div className='flexbox align-center-y mb-5'>
                    <label className='col'>Select Menu</label>
                    {/* update menus */}
                    <button title='Update Menus' onClick={updateMenus} className='btn tiny square light far fa-redo'></button>
                </div>
                <SelectControl key="menu" value={attributes.menu} onChange={set_menu} options={attributes.menus_list} />
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        <TagName { ...blockProps }>{attributes.menu_items.length > 0 ?
            attributes.menu_items.map(({id, label, url}) => {
                return <li key={id} data-sub={id}><a href={url} title={label}>{label}</a></li>;
            })
        : null}
      </TagName>
    </>);
}