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

    const uiTypes = [
        { value: 'fi-rs', label: 'Regular Straight' },
        { value: 'fi-ss', label: 'Solid Straight' },
        { value: 'fi-bs', label: 'Bold Straight' },
        { value: 'fi-rr', label: 'Regular Rounded' },
        { value: 'fi-sr', label: 'Solid Rounded' },
        { value: 'fi-br', label: 'Bold Rounded' },
    ];

    //===> States <===//
    const [state, setState] = useState({
        iconsPage: 1,
        iconType: "far",
        iconName: "fa-icons",
        iconsFile: "fa7-free.json",
        iconsList: [],
        iconsPages: {},
        iconsVersion: "fa7",
        iconsFamily: "fontawesome",
        returnType: null,
        iconsTypes: faTypes,
        isUIIcons: false,
    });

    //===> Fetch Data When Render <===//
    useEffect(() => {
        apiFetch({ path: "pds-blocks/v2/options" }).then((options) => {
            //===> Get Icon Font Config <===//
            let iconFont = options.pds_icon_font || "fontawesome-7-free";
            let version = "fa7";
            let family = "fontawesome";
            let isUI = false;
            let types = faTypes;
            let defaultType = "far";
            let defaultIcon = "fa-icons";
            let file = "fa7-free.json";

            if (iconFont === "none") {
                // Disabled - no icons
                setState(prevState => ({
                    ...prevState,
                    iconsList: [],
                    iconsPages: {},
                    iconsTypes: [],
                }));
                return;
            }

            if (iconFont.startsWith("fontawesome")) {
                // Font Awesome
                family = "fontawesome";
                version = iconFont.replace("fontawesome-", "fa").replace("-free", "").replace("-pro", "");
                // Default to latest if version is not recognized
                if (!version.match(/^fa[567]$/)) version = "fa7";
                
                types = faTypes;
                defaultType = "far";
                defaultIcon = "fa-icons";
                
                // Brands use separate file
                if (props.value && props.value.includes("fab")) {
                    file = `${version}-brands.json`;
                } else {
                    file = `${version}-free.json`;
                }
            } else if (iconFont === "ui-icons") {
                // UI Icons (flaticons)
                family = "ui-icons";
                isUI = true;
                types = uiTypes;
                defaultType = "fi-rs";
                defaultIcon = "fi-rs-add";
                
                // Determine which UI JSON to load based on current type
                let currentType = props.value ? props.value.split(" ")[0] : "fi-rs";
                let uiStyle = currentType.replace("fi-", "");
                file = `ui-icons-${uiStyle}.json`;
            }

            //===> Start Fetching <===//
            if (state.iconsList.length < 1 || state.iconsFamily !== family) {
                fetch(`${PDS_WP_KEY.json}/${file}`).then((res) => res.json()).then((json) => {
                    //===> Assign Icons List <===//
                    const newIconsList = json.icons || [];

                    //===> Divide List into Pages <===//
                    const pages = {};
                    for (let item = 0; item < newIconsList.length; item += 200) {
                        let pageNumber = Math.floor(item / 200) + 1;
                        pages[pageNumber] = newIconsList.slice(item, item + 200);
                    }
                    //===> Update State <===//
                    setState(prevState => ({
                        ...prevState,
                        iconsList: newIconsList,
                        iconsPages: pages,
                        iconsVersion: version,
                        iconsFamily: family,
                        iconsTypes: types,
                        isUIIcons: isUI,
                        iconType: defaultType,
                        iconName: defaultIcon,
                    }));
                }).catch(() => {
                    setState(prevState => ({
                        ...prevState,
                        iconsList: [],
                        iconsPages: {},
                    }));
                });
            } else {
                //===> Divide List into Pages <===//
                const pages = {};
                for (let item = 0; item < state.iconsList.length; item += 200) {
                    let pageNumber = Math.floor(item / 200) + 1;
                    pages[pageNumber] = state.iconsList.slice(item, item + 200);
                }

                //===> Update State <===//
                setState(prevState => ({...prevState, iconsPages: pages}));
            }
        });
    }, [props.value]);

    //===> Properties <===//
    const { label, value, version, onChange } = props;

    //===> Returned Value <===//
    let options = {
        type: value.split(" ")[0],
        value: value.split(" ")[1] || value.split(" ")[0],
    };

    //===> Set Value <===//
    const set_value = useCallback((clicked) => {
        //===> Get Value <===//
        let button = clicked.target,
            theValue = button?.getAttribute('data-value');

        //===> Set Value <===//
        if (state.isUIIcons) {
            // For UI icons, store the full class name
            options.value = theValue;
            options.type = theValue; // Same as value for UI icons
        } else {
            options.value = theValue;
        }

        //===> Return Options <===//
        return onChange(options);
    }, [onChange, options, state.isUIIcons]);

    //===> Set Type <===//
    const set_type = useCallback((value) => {
        //===> Get Value <===//
        options.type = value;

        //===> For UI Icons, reload JSON when type changes <===//
        if (state.isUIIcons) {
            let uiStyle = value.replace("fi-", "");
            let file = `ui-icons-${uiStyle}.json`;
            
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
                    iconsPage: 1,
                    iconType: value,
                    iconName: newIconsList[0] || value,
                }));
            });
            
            options.value = newIconsList && newIconsList[0] ? newIconsList[0] : value;
            return onChange(options);
        }

        //===> Font Awesome Brand Switching <===//
        if (value === "fab" && !props.value.includes('fab')) options.value = "fa-wordpress";
        if (props.value.includes('fab') && value !== "fab") options.value = "fa-icons";

        //===> If Different Set of Icons Reset the List <===//
        if (props.value.includes('fab') && value !== "fab" || !props.value.includes('fab') && value === "fab") {
            setState(prevState => ({
                ...prevState,
                iconsPage: 1,
                iconsList: [],
                iconsPages: {},
                iconType: value,
                iconName: options.value
            }));
        } else {
            setState(prevState => ({...prevState, iconType: value}));
        }

        return onChange(options);
    }, [props.value, onChange, options, state.isUIIcons]);

    //===> Traveling Buttons <===//
    const travelingButton = useCallback((event) => {
        //===> Get the icons List Wrapper <====//
        let element = event.target,
            travelType = element.getAttribute('data-travel');

        //===> Get Next Page <===//
        if (travelType === 'next') {
            //===> Exit if Last Page <===//
            if (state.iconsPage === Object.keys(state.iconsPages).length) return;
            //===> Go to Next Page <===//
            setState(prevState => ({
                ...prevState,
                iconsPage: prevState.iconsPage + 1
            }));
        }
        //===> Get Previous Page <===//
        else if (travelType === 'previous') {
            //===> Exit if First Page <===//
            if (state.iconsPage === 1) return;
            //===> Go to Previous Page <===//
            setState(prevState => ({
                ...prevState,
                iconsPage: prevState.iconsPage - 1
            }));
        }
    }, [state.iconsPage, state.iconsPages]);

    //===> Buttons Creator <===//
    const makeButtons = useCallback((list, type) => {
        //===> Exit if has no items <===//
        if (!list || list.length < 1) return;

        //===> Define Data <===//
        let buttonsList = [],
            buttonsStyle = {"fontSize": "20px", "lineHeight": "32px", "width":"32px", "height":"32px", "borderRadius": "3px", "padding": 0},
            buttonItem = (item) => {
                // For UI icons, the full class is the item itself
                // For Font Awesome, combine type + item
                let buttonClass = state.isUIIcons ? item : `${type} ${item}`;
                let isActive = state.isUIIcons 
                    ? (props.value === item) 
                    : (state.iconName === item);
                return <button key={`${item}`} onClick={set_value} title={item} data-value={item} className={`reset-button icon-btn-item ${buttonClass} ${isActive ? 'px-active bg-offwhite-primary' : ""}`} style={buttonsStyle}></button>;
            };

        //===> Create Buttons <===//
        list.forEach((item) => buttonsList.push(buttonItem(item)));

        //===> Return Buttons <===//
        return buttonsList;
    }, [set_value, state.iconName, props.value, state.isUIIcons]);

    //===> Colors Panel <===//
    const showPanel = useCallback((clicked) => {
        let button = clicked.target,
            wrapper = Phenix(button).ancestor('.px-gb-component'),
            panel = wrapper.querySelector(".options-list");

        //=== Show/Hide Panel ===//
        if (panel) {
            Phenix(button).toggleClass("px-active");
            Phenix(panel).toggleClass("px-active").fadeToggle(300, 0, "flex");
        }
    }, []);

    //===> Search in icons <===//
    const iconsFilter = useCallback((changed) => {
        //===> Define Data <===//
        let pages = {},
            input = changed.target,
            value = input.value,
            searchedList;

        //===> Find the searched icon and remove the reset <===//
        if (value && value !== "") {
            searchedList = state.iconsList.filter(icon => icon.includes(value));
        } else {
            searchedList = state.iconsList;
        }

        //===> Divide List into Pages <===//
        for (let item = 0; item < searchedList.length; item += 200) {
            //===> Define Page Number <===//
            let pageNumber = Math.floor(item / 200) + 1;
            //===> Add item to Pages Object <===//
            pages[pageNumber] = searchedList.slice(item, item + 200);
        }
        
        //===> Set the New List <===//
        setState(prevState => ({...prevState, iconsPage: 1, iconsPages: pages}));
    }, [state.iconsPages]);

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
                    <i className='fas fa-pencil fs-12 color-gray'></i>
                </button>
                {/*===> Type Select <===*/}
                <PhenixSelect key={`icons-type`} name="icons-type" className="col-6" value={value.split(" ")[0]} onChange={(target) => set_type(target.value)} options={state.iconsTypes} />
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
