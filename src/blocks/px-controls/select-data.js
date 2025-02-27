//====> .Dependencies. <====//
import {__} from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import React, { useState, useMemo, useEffect, useCallback } from '@wordpress/element';
//====> Phenix Modules <====//
import PhenixSelect from './select';

//===> Phenix Form Control <===//
const SelectFromData = (props) => {
    //===> States <===//
    const [dataFetched, setDataFetched] = useState(0);
    const [optionsList, setOptionsList] = useState([{label: __("Default", "pds-blocks"), value: ""}]);

    //===> Properties <===//
    const {options, name, type, size, label, value, multiple, valueSetter, className, search, termType } = props;

    //===> Fetch Data <===//
    const fetchData = useCallback(() => {
        //===> Check if Options List is Empty <===//
        if (optionsList.length > 1) return;

        //===> Fetching Method <===//
        const fetchOptions = async (path, processData) => {
            //===> Fetch Data <===//
            const data = await apiFetch({ path });
            //===> Create Data <===//
            const newOptionsList = [{ label: __("Default", "pds-blocks"), value: "" }];
            //===> Process Data <===//
            processData(data, newOptionsList);
            //===> Set new Options List <===//
            setOptionsList(prevOptions => {
                //===> Check if Options are Different <===//
                if (typeof(prevOptions) === "object" && prevOptions !== newOptionsList || JSON.stringify(prevOptions) !== JSON.stringify(newOptionsList)) {
                    //===> Increase Data Fetched <===//
                    setDataFetched(prev => prev + 1);
                    //===> Return new Options List <===//
                    return newOptionsList;
                }
                //===> Return Previous Options <===//
                return prevOptions;
            });
        };

        //===> Fetching Switch Cases <===//
        switch (options) {
            //===> for PDS Menu Locations <===//
            case "menu-locations":
                fetchOptions('pds-blocks/v2/options', (data, newOptionsList) => {
                    Object.entries(data.menu_locations).forEach(([key, item]) => {
                        newOptionsList.push({ label: item.title, value: item.name });
                    });
                });
                break;
            //====> for taxonomies <====//
            case "taxonomies":
                fetchOptions('wp/v2/taxonomies', (data, newOptionsList) => {
                    Object.entries(data).forEach(([key, value]) => {
                        if (!['nav_menu', 'wp_pattern'].some(keyword => key.includes(keyword))) {
                            newOptionsList.push({ value: key, label: value.name });
                        }
                    });
                });
                break;
            //====> for taxonomies Terms <====//
            case "taxonomies-terms":
                fetchOptions(`wp/v2/${termType === "category" ? "categories" : termType}`, (data, newOptionsList) => {
                    Object.entries(data).forEach(([key, value]) => {
                        newOptionsList.push({ value: value.id, label: value.name });
                    });
                });
                break;
            //====> for Post-Types <====//
            case "post-types":
                fetchOptions('wp/v2/types', (data, newOptionsList) => {
                    Object.entries(data).forEach(([key, value]) => {
                        //===> Exclude Unwanted Post Types <===//
                        const excluded = ['attachment', 'nav_menu_item', 'wp_block', 'wp_navigation', 'wp_template', 'wp_template_part', 'wp_font'];
                        //===> Add Post Type to the List <===//
                        if (!excluded.some(keyword => key.includes(keyword))) newOptionsList.push({ value: key, label: value.name });
                    });
                });
                break;
            //====> for Users-Roles <====//
            case "users-roles":
                fetchOptions('pds-blocks/v2/options', (data, newOptionsList) => {
                    Object.entries(data.users_roles).forEach(([key, value]) => {
                        newOptionsList.push({ value: value.name, label: value.name });
                    });
                });
                break;
            //====> for Template-Parts <====//
            case "template-parts":
                fetchOptions('pds-blocks/v2/options', (data, newOptionsList) => {
                    //===> Define Data <===//
                    const templateParts = data.theme_parts;

                    //===> Check if Data is Available <===//
                    if (templateParts) {
                        Object.entries(templateParts).forEach(([key, value]) => {
                            //===> Normal File <===//
                            if (typeof value === 'string') {
                                newOptionsList.push(<option key={`${value}`} value={value.replace(".php", "")}>{value.replace('-', ' ').replace('_', '').replace(".php", "")}</option>);
                            } 
                            //===> Grouped Files <===//
                            else {
                                //===> Define Files List <===//
                                let filesList = [];

                                //===> Add Files to the List <===//
                                Object.entries(value).forEach(([sub_key, sub_value]) => {
                                    filesList.push(<option key={`${key}-${sub_value}`} value={`${key}/${sub_value.replace(".php", "")}`}>{`${sub_value.replace('-', ' ').replace('_', '').replace(".php", "")}`}</option>);
                                });

                                //===> Add Grouped Files to the List <===//
                                newOptionsList.push(<optgroup key={`${key}-group`} label={`${key}`}>{filesList}</optgroup>);
                            }
                        });
                    }
                });
                break;
            //====> .... <====//
            default:
                break;
        }
    }, [options, optionsList.length, termType]);

    //===> Start Fetch Data When Rendering <===//
    useEffect(() => fetchData(), [fetchData]);

    //===> Memoized Options List <===//
    const memoizedOptionsList = useMemo(() => optionsList, [optionsList]);

    //===> Render Component <===//
    return <PhenixSelect key={dataFetched} type={type} options={memoizedOptionsList} multiple={multiple} name={name} placeholder={__("Default", "pds-blocks")} label={label} value={value} onChange={valueSetter} className={className} search={search} size={size} />
}

export default SelectFromData;