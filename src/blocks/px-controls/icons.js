/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Modules
 * ===> 03 - Phenix Icons
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import React, { useState, useEffect, useCallback } from '@wordpress/element';

//===> Phenix Modules <===//
import PhenixSelect from './select';

//===> Phenix Icons <===//
const PhenixIcons = (props) => {
    //===> Icon Sets Config <===//
    const faTypes = [
        { value: 'fab', label: 'Brands' },
        { value: 'far', label: 'Regular' },
        { value: 'fas', label: 'Solid' },
    ];

    // UI Icons: combined style + weight classes
    const uiTypes = [
        { value: 'fi-straight fi-regular', label: 'Regular Straight' },
        { value: 'fi-straight fi-bold', label: 'Bold Straight' },
        { value: 'fi-straight fi-solid', label: 'Solid Straight' },
        { value: 'fi-rounded fi-regular', label: 'Regular Rounded' },
        { value: 'fi-rounded fi-bold', label: 'Bold Rounded' },
        { value: 'fi-rounded fi-solid', label: 'Solid Rounded' },
    ];

    //===> Value Parser <===//
    const parseValue = (fullValue) => {
        let parts = (fullValue || "").trim().split(/\s+/).filter(Boolean);
        let icon = parts.pop() || "";
        let type = parts.join(" ");
        return { type, icon };
    };

    //===> Get JSON file for current type <===//
    const getJSONFile = (iconFont, type) => {
        if (iconFont.startsWith("fontawesome")) {
            let version = iconFont.replace("fontawesome-", "fa").replace("-free", "").replace("-pro", "");
            if (!version.match(/^fa[567]$/)) version = "fa7";
            
            if (type === "fab") return `${version}-brands.json`;
            if (type === "far") return `${version}-regular.json`;
            return `${version}-solid.json`;
        } else if (iconFont.startsWith("ui-icons")) {
            return "ui-icons.json";
        }
        return null;
    };

    //===> States <===//
    const [state, setState] = useState({
        iconsPage: 1,
        iconType: "fi-rounded fi-regular",
        iconName: "fi-add",
        iconsFile: "ui-icons.json",
        iconsList: [],
        iconsPages: {},
        iconsVersion: "ui-rounded",
        iconsFamily: "ui-icons",
        returnType: null,
        iconsTypes: uiTypes,
        isUIIcons: true,
    });

    //===> Load Icons JSON <===//
    const loadIcons = useCallback((file, setType, setIcon, version, family, types, isUI) => {
        fetch(`${PDS_WP_KEY.json}/${file}`).then((res) => res.json()).then((json) => {
            const newIconsList = json.icons || [];
            const pages = {};
            for (let item = 0; item < newIconsList.length; item += 200) {
                let pageNumber = Math.floor(item / 200) + 1;
                pages[pageNumber] = newIconsList.slice(item, item + 200);
            }
            setState(prevState => ({
                ...prevState,
                iconsList: newIconsList,
                iconsPages: pages,
                iconsVersion: version,
                iconsFamily: family,
                iconsTypes: types,
                isUIIcons: isUI,
                iconType: setType,
                iconName: setIcon,
                iconsPage: 1,
            }));
        }).catch(() => {
            setState(prevState => ({
                ...prevState,
                iconsList: [],
                iconsPages: {},
            }));
        });
    }, []);

    //===> Fetch Data When Render <===//
    useEffect(() => {
        apiFetch({ path: "pds-blocks/v2/options" }).then((options) => {
            let iconFont = options.pds_icon_font || "ui-icons-rounded";
            let version = "ui-rounded";
            let family = "ui-icons";
            let isUI = true;
            let types = uiTypes;
            let defaultType = "fi-rounded fi-regular";
            let defaultIcon = "fi-add";
            let file = "ui-icons.json";

            if (iconFont === "none") {
                setState(prevState => ({
                    ...prevState,
                    iconsList: [],
                    iconsPages: {},
                    iconsTypes: [],
                }));
                return;
            }

            if (iconFont.startsWith("fontawesome")) {
                family = "fontawesome";
                version = iconFont.replace("fontawesome-", "fa").replace("-free", "").replace("-pro", "");
                if (!version.match(/^fa[567]$/)) version = "fa7";
                
                types = faTypes;
                defaultType = parsed.type || "far";
                defaultIcon = parsed.icon || "fa-icons";
                file = getJSONFile(iconFont, defaultType);
            } else if (iconFont === "ui-icons-straight") {
                defaultType = "fi-straight fi-regular";
            }
            // ui-icons-rounded is the default

            if (state.iconsList.length < 1 || state.iconsFamily !== family) {
                loadIcons(file, defaultType, defaultIcon, version, family, types, isUI);
            }
        });
    }, [props.value, loadIcons]);

    //===> Properties <===//
    const { label, value, onChange } = props;

    //===> Parse Current Value <===//
    const parsed = parseValue(value);
    let options = {
        type: parsed.type,
        value: parsed.icon,
    };

    //===> Set Value <===//
    const set_value = useCallback((clicked) => {
        let button = clicked.target,
            theValue = button?.getAttribute('data-value');
        options.value = theValue;
        return onChange(options);
    }, [onChange, options]);

    //===> Set Type <===//
    const set_type = useCallback((newType) => {
        options.type = newType;

        //===> For UI Icons, just update type (same JSON file) <===//
        if (state.isUIIcons) {
            let currentIcon = parsed.icon || state.iconsList[0] || "fi-add";
            options.value = currentIcon;
            setState(prevState => ({
                ...prevState,
                iconType: newType,
                iconsPage: 1,
            }));
            return onChange(options);
        }

        //===> Font Awesome: reload JSON for new weight <===//
        apiFetch({ path: "pds-blocks/v2/options" }).then((opts) => {
            let iconFont = opts.pds_icon_font || "ui-icons-rounded";
            let newFile = getJSONFile(iconFont, newType);
            
            // Default icon for each weight
            let newIcon = parsed.icon;
            if (newType === "fab") newIcon = "fa-wordpress";
            else if (newType === "far") newIcon = "fa-address-book";
            else if (newType === "fas") newIcon = "fa-icons";
            
            options.value = newIcon;
            
            if (newFile) {
                loadIcons(newFile, newType, newIcon, state.iconsVersion, state.iconsFamily, state.iconsTypes, false);
            }
            
            return onChange(options);
        });
    }, [parsed.icon, state.isUIIcons, state.iconsVersion, state.iconsFamily, state.iconsTypes, loadIcons, onChange, options]);

    //===> Traveling Buttons <===//
    const travelingButton = useCallback((event) => {
        let element = event.target,
            travelType = element.getAttribute('data-travel');

        if (travelType === 'next') {
            if (state.iconsPage === Object.keys(state.iconsPages).length) return;
            setState(prevState => ({
                ...prevState,
                iconsPage: prevState.iconsPage + 1
            }));
        } else if (travelType === 'previous') {
            if (state.iconsPage === 1) return;
            setState(prevState => ({
                ...prevState,
                iconsPage: prevState.iconsPage - 1
            }));
        }
    }, [state.iconsPage, state.iconsPages]);

    //===> Buttons Creator <===//
    const makeButtons = useCallback((list, type) => {
        if (!list || list.length < 1) return;

        let buttonsList = [],
            buttonsStyle = {"fontSize": "20px", "lineHeight": "32px", "width":"32px", "height":"32px", "borderRadius": "3px", "padding": 0},
            buttonItem = (item) => {
                let buttonClass = `${type} ${item}`;
                let isActive = parsed.icon === item;
                return <button key={`${item}`} onClick={set_value} title={item} data-value={item} className={`reset-button icon-btn-item ${buttonClass} ${isActive ? 'px-active bg-offwhite-primary' : ""}`} style={buttonsStyle}></button>;
            };

        list.forEach((item) => buttonsList.push(buttonItem(item)));
        return buttonsList;
    }, [set_value, parsed.icon]);

    //===> Colors Panel <===//
    const showPanel = useCallback((clicked) => {
        let button = clicked.target,
            wrapper = Phenix(button).ancestor('.px-gb-component'),
            panel = wrapper.querySelector(".options-list");

        if (panel) {
            Phenix(button).toggleClass("px-active");
            Phenix(panel).toggleClass("px-active").fadeToggle(300, 0, "flex");
        }
    }, []);

    //===> Search in icons <===//
    const iconsFilter = useCallback((changed) => {
        let pages = {},
            input = changed.target,
            searchValue = input.value,
            searchedList;

        if (searchValue && searchValue !== "") {
            searchedList = state.iconsList.filter(icon => icon.includes(searchValue));
        } else {
            searchedList = state.iconsList;
        }

        for (let item = 0; item < searchedList.length; item += 200) {
            let pageNumber = Math.floor(item / 200) + 1;
            pages[pageNumber] = searchedList.slice(item, item + 200);
        }
        
        setState(prevState => ({...prevState, iconsPage: 1, iconsPages: pages}));
    }, [state.iconsList]);

    //===> Component Design <===//
    return (
        <div className={`px-gb-component position-rv mb-10 px-icons-selector ${!label?'pdt-10':''}`}>
            {/*===> Toggle Button <===*/}
            {label?<label className='mb-10 tx-UpperCase fs-13'>{label}</label>:null}

            {/*===> Group <===*/}
            <div className='form-control small flexbox border-alpha-25 mb-5 tx-align-start radius-md align-center-y pdx-0 flow-nowrap'>
                {/*===> Panel Trigger */}
                <button onClick={showPanel} className={`col-6 w-max-150 fs-13 h-min-100 reset-button options-toggle flexbox flow-nowrap align-between align-center-y pdx-10 divider-e`} type="button">
                    <span className={`col tx-nowrap pde-5`} style={{"lineHeight": "20px"}}>
                        <span className={`pds-icon-preview inline-block me-5 radius-circle bg-alpha-05 ${props.value} position-rv`}></span>
                        {__("Replace", "pds-blocks")}
                    </span>
                    <i className='fi-rounded fi-regular fi-pencil fs-12 color-gray'></i>
                </button>
                {/*===> Type Select <===*/}
                <PhenixSelect key={`icons-type`} name="icons-type" className="col-6" value={parsed.type} onChange={(target) => set_type(target.value)} options={state.iconsTypes} />
            </div>

            {/*===> Panel <===*/}
            <div className={`flexbox align-center tx-align-center options-list pdb-15 pdt-5 bg-white border-1 border-solid border-alpha-25 radius-md radius-bottom hidden fluid`}>
                <input name="pds-icons-search" className='reset-input pdy-5 fs-12 divider-b fluid tx-align-center' onChange={iconsFilter} onKeyUp={iconsFilter} placeholder={__("Search in icons", "pds-blocks")} />
                {/*===> Buttons List <===*/}
                <div className="bg-alpha-05 fluid pdx-15 pdy-10 icons-listing align-center flexbox px-scrollbar overflow-y-auto mb-10 divider-y" style={{gap:"10px", maxHeight: "220px"}}>
                    {state.iconsList.length > 0 ? 
                        makeButtons(state.iconsPages[state.iconsPage], state.iconType) : "No Icons Found."
                    }
                </div>
                {/*===> Pagination <===*/}
                <div className='fluid flexbox align-between align-center-y pagination-btns pdx-15'>
                    <button onClick={travelingButton} type="button" data-travel="next" className="btn tiny fs-12 radius-sm primary">{__("Next", "pds-blocks")}</button> 
                    <span className="fs-14 weight-medium">{state.iconsPage}/{Object.keys(state.iconsPages).length}</span>
                    <button onClick={travelingButton} type="button" data-travel="previous" className="btn tiny fs-12 radius-sm gray">{__("Previous", "pds-blocks")}</button> 
                </div>
                {/*===> // Pagination <===*/}
            </div>
        </div>
    )
}

export default PhenixIcons;
