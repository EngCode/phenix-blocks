/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import React, { useState, useMemo } from '@wordpress/element';

//====> Phenix Modules <====//
import PhenixSelect from '../select';
import MediaUploader from '../uploader';

//===> Phenix Background <===//
const PhenixBackground = (props) => {
    //===> Get Data <===//
    const PhenixBlocks = useMemo(() => window.PhenixBlocks.dataLists, []);
    //===> Properties <===//
    const {type, value, label, rotate, colorsOnly, onlyCG, isSmall, placeholder, onChange, customOnly, cover} = props;

    //===> Get Custom Colors and Gradients <===//
    const setting = wp.data.select('core/block-editor').getSettings();
    const editorColors = setting['__experimentalFeatures']?.color;

    //===> Custom Colors List <===//
    const customColorsList = useMemo(() => {
        //===> Default and User Custom <===//
        const list = [];
        if (editorColors) {
            editorColors.palette?.default?.forEach(color => list.push(`var(--wp--preset--color--${color.slug})`));
            editorColors.palette?.custom?.forEach(color => list.push(`var(--wp--preset--color--${color.slug})`));
        }
        return list;
    }, [editorColors]);

    //===> Custom Gradients List <===//
    const customGradientsList = useMemo(() => {
        //===> Default and User Custom <===//
        const list = [];
        if (editorColors && !colorsOnly) {
            editorColors.gradients?.default?.forEach(gradient => list.push(`var(--wp--preset--gradient--${gradient.slug})`));
            editorColors.gradients?.custom?.forEach(gradient => list.push(`var(--wp--preset--gradient--${gradient.slug})`));
        }
        return list;
    }, [editorColors]);

    //===> Returned Value <===//
    let options = {
        type: type,
        rotate: rotate,
        value: value || "",
    };

    //===> Set Type <===//
    const set_type = type => {
        //===> Set Value <===//
        options.type = type;

        //===> change value <===//
        if (options.type === 'image') {options.value = PhenixBlocks.palette.placeholder;} 
        else {options.value = "";}

        //===> Return Options <===//
        return onChange(options);
    };

    //===> Set Type <===//
    const set_rotate = rotate => {
        //===> Set Value <===//
        options.rotate = rotate;
        //===> change value <===//
        if (options.type !== 'gradient') options.value = "";
        //===> Return Options <===//
        return onChange(options);
    };

    //===> Set Background <===//
    const setBackground = clicked => {
        //===> Get Value <===//
        let button = clicked.target,
            value  = button?.getAttribute('data-value');

        //===> Colors & Gradients <===//
        if (type !== 'image' && type !== "video") {options.value = value;}
        //===> Image Type <===//
        else {options.value = clicked.url;}

        //===> Return Options <===//
        return onChange(options);
    };

    //===> Set Cover <===//
    const setCover = clicked => {
        //===> Set value <===//
        options.cover = clicked.url;

        //===> Return Options <===//
        return onChange(options);
    };

    //===> Buttons Creator <===//
    const makeButtons = (list, classes) => {
        let output = [];
        //===> for each item <===//
        for (let index = 0; index < list.length; index++) {
            //===> Get Value <===//
            const name = list[index];
            let title = name,
                isColor = !name.includes("fa-");

            //===> Convert to Title <===//
            if (isColor) {
                //===> Get a Clean Title <===//
                title = title.replace("var(", "").replace('--wp--preset--color--', '').replace('--wp--preset--gradient--', '').replace(')', '').replace('bg-', '').replaceAll('-', ' ');
                //===> UpperCase Title <===//
                title = title.replace(/^\w/, function(c) {
                    return c.toUpperCase();
                });
            } else title = "Reset";

            const buttonAttributes = {
                "title": title,
                "onClick": setBackground,
                "data-value": isColor ? name : "",
                "key": `${name.replaceAll(" ", "-")}`,
                "style": {"width":"30px","height":"16px", backgroundColor: name.includes('var(') && !name.includes('--gradient') ? name : null, backgroundImage: name.includes('--wp--preset--gradient') ? name : null},
                "className":`${isColor && !name.includes('var') ? name : `${!name.includes('var') ? name : name.includes('--white') ? 'border-1 border-solid border-alpha-10' : ''} color-gray fs-12`} col reset-button ${value === name ? 'px-active' : ""} ${classes?classes:""}`
            }

            output.push(<button {...buttonAttributes}></button>);
        }
        //===> Return Buttons <===//
        return output;
    };

    //===> Colors Panel <===//
    const showPanel = clicked => {
        let button  = clicked.target,
            wrapper = Phenix(button).ancestor('.px-gb-component'),
            panel   = wrapper.querySelector(".options-list");

        //=== Show/Hide Panel ===//
        if (panel) {
            Phenix(button).toggleClass("px-active");
            Phenix(panel).toggleClass("px-active").fadeToggle(300, 0, "flex");

            if (isSmall) {
                Phenix(wrapper).toggleClass("overlay-panel")
            }
        }
    };

    //===> Component Design <===//
    return (
        <div className={`colors-selector px-gb-component ${isSmall ? "":" position-rv "}${label ? "mb-10" : ""}`}>
            {/*===> Toggle Button <===*/}
            {label ? <label className='mb-5 tx-UpperCase fs-12'>{label}</label> : null}
            {/*===> Group <===*/}
            <div className='form-control small flexbox border-alpha-25 mb-5 tx-align-start radius-md align-center-y pdx-0 flow-nowrap'>
                {/*===> Panel Trigger */}
                <button onClick={showPanel} className={`col fs-13 col h-min-100 reset-button options-toggle flexbox flow-nowrap align-between align-center-y pdx-10 divider-e`} type="button">
                    {type !== "image" && type !== "video" ? <>
                        <span className={`me-5 radius-circle inline-block ${value?.length > 0 && !value.includes('var') ? value : value?.includes('var') ? '': "bg-inherit"}`} style={{"width": "17px", "height": "17px", backgroundColor: value.includes('--wp--preset--color') ? value : null, backgroundImage: value.includes('--wp--preset--gradient') ? value : null}}></span>
                        <span className='col tx-nowrap pde-5 tx-capitalize'>{value?.length > 0 && !placeholder ? value?.replace('var(--wp--preset--color--', '').replace('var(--wp--preset--gradient--', '').replace(')', '').replace('bg-', '').replaceAll('-', ' ') : placeholder ? placeholder : "Default"}</span>
                    </> : <>
                    <span className={`me-5 radius-circle inline-block`} style={{"width": "22px", "height": "22px", "backgroundImage": `url(${value})`, "backgroundSize": "cover", "backgroundPosition": "center"}}></span>
                        <span className='col tx-nowrap pde-5'>{placeholder ? placeholder : __("Replace", "pds-blocks")}</span>
                    </>}
                    {!isSmall ? <i className='fas fa-pencil fs-12 color-gray'></i> : null}
                </button>
                {/*===> Type Select <===*/}
                {!colorsOnly && !onlyCG ? 
                    <PhenixSelect key="bg-type" className="col-5" name="bg-type" value={type || ""} onChange={(target) => set_type(target.value)} options={[
                        { label: 'color',   value: 'color' },
                        { label: 'image',   value: 'image' },
                        { label: 'gradient',   value: 'gradient' },
                        { label: 'video',   value: 'video' },
                    ]}/>
                : onlyCG ? 
                    <PhenixSelect key="bg-type" className="col-5" name="bg-type" value={type || ""} onChange={(target) => set_type(target.value)} options={[
                        { label: 'color',   value: 'color' },
                        { label: 'gradient',   value: 'gradient' },
                    ]}/>
                : null}
            </div>
            {/*===> Panel <===*/}
            <div className={`flexbox flow-columns options-list ${type !== "image"  && type !== "video" && type !== "embed" ? 'pdy-15 pdx-10 bg-white border-1 border-solid border-alpha-20 radius-md radius-bottom' : 'pdt-5'} hidden fluid px-scrollbar overflow-y-auto`} style={{gap:"10px", maxHeight: "calc(100vh - 350px)"}}>
                {type === "image" || type === "video" ? <>
                    <MediaUploader key="upload-file" size="small" label={`${type === "video" ? "Video File" : "Image File"}`} value={!value || type === "video" ? PhenixBlocks.palette.placeholder : value} setValue={setBackground}></MediaUploader>

                    {type === "video" ? <MediaUploader label="Cover File" key="upload-cover-file" size="small" value={!cover ? PhenixBlocks.palette.placeholder : cover} setValue={setCover}></MediaUploader> : null}
                </> : null}
                {/*===> Colors Set <====*/}
                <div className='flexbox' style={{"gap": "0.75rem"}}>
                    {type === "color" ? <>
                        <label className='tx-align-center pdb-5 pdy-5 lineheight-100 bg-alpha-05 radius-sm mb-0 tx-UpperCase fs-12 col-12'>{__("Main Colors", "pds-blocks")}</label>
                        {makeButtons(PhenixBlocks.palette[`${customOnly?'variables':'colors'}`].main, "radius-xxl")}

                        <label className='tx-align-center pdb-5 pdy-5 lineheight-100 bg-alpha-05 radius-sm mb-10 tx-UpperCase fs-12 col-12 mt-10'>{__("Components Colors", "pds-blocks")}</label>
                        {makeButtons(PhenixBlocks.palette[`${customOnly?'variables':'colors'}`].components, "radius-xxl border-1 border-alpha-15 border-solid")}

                        {customColorsList.length > 0 ? <>
                            <label className={`tx-align-center pdb-5 pdy-5 lineheight-100 bg-alpha-05 radius-sm mb-0 ${!customOnly?"mt-10":''} tx-UpperCase fs-12 col-12`}>
                                {__("Custom Colors", "pds-blocks")}
                            </label>
                            {makeButtons(customColorsList, "radius-xxl")}
                        </>:null}

                        <label className='tx-align-center pdb-5 pdy-5 lineheight-100 bg-alpha-05 radius-sm mb-0 tx-UpperCase fs-12 col-12 mt-10'>{__("Dark Alpha", "pds-blocks")}</label>
                        <div className='pd-5 radius-sm bg-white fluid flexbox align-between'>
                            {makeButtons(PhenixBlocks.palette[`${customOnly?'variables':'colors'}`].darkAlpha, "")}
                        </div>

                        <label className='tx-align-center pdb-5 pdy-5 lineheight-100 bg-alpha-05 radius-sm mb-0 tx-UpperCase fs-12 col-12 mt-10'>{__("Light Alpha", "pds-blocks")}</label>
                        <div className='pd-5 radius-sm bg-dark fluid flexbox align-between'>
                            {makeButtons(PhenixBlocks.palette[`${customOnly?'variables':'colors'}`].lightAlpha, "")}
                        </div>

                        <label className='tx-align-center pdb-5 pdy-5 lineheight-100 bg-alpha-05 radius-sm mb-0 tx-UpperCase fs-12 col-12 mt-10'>{__("Status Colors", "pds-blocks")}</label>
                        {makeButtons(PhenixBlocks.palette[`${customOnly?'variables':'colors'}`].status, "radius-xxl")}
                        {!customOnly ? <> 
                            <label className='tx-align-center pdb-5 pdy-5 lineheight-100 bg-alpha-05 radius-sm mb-0 tx-UpperCase fs-12 col-12 mt-10'>{__("Offwhite Colors", "pds-blocks")}</label>
                            {makeButtons(PhenixBlocks.palette.colors.offwhite, "radius-xxl")}
                        </>:null}

                        <label className='tx-align-center pdb-5 pdy-5 lineheight-100 bg-alpha-05 radius-sm mb-0 tx-UpperCase fs-12 col-12 mt-10'>{__("Brand Colors", "pds-blocks")}</label>
                        {makeButtons(PhenixBlocks.palette[`${customOnly?'variables':'colors'}`].brands, "radius-xxl")}
                    </>
                    : type === "gradient" ? <>
                        {!customOnly ? <> 
                            <label className='tx-align-center pdb-5 pdy-5 lineheight-100 bg-alpha-05 radius-sm mb-0 tx-UpperCase fs-12 col-12'>{__("Phenix Gradients", "pds-blocks")}</label>
                            {makeButtons(PhenixBlocks.palette.gradients, "radius-xxl")}
                        </>:null}

                        {customGradientsList.length > 0 ? <>
                            <label className={`tx-align-center pdb-5 pdy-5 lineheight-100 bg-alpha-05 radius-sm mb-0 ${!customOnly?"mt-10":''} tx-UpperCase fs-12 col-12`}>
                                {__("Custom Gradients", "pds-blocks")}
                            </label>
                            {makeButtons(customGradientsList, "radius-xxl")}
                        </>:null}
                    </>:
                    null}
                </div>
            </div>
            {/*===> Rotation Select <===*/}
            {type === "gradient" ? <div className='divider-t pdt-15 col-12'>
                <label className='mb-5 fs-13 weight-medium'>{`${_("Rotation", "pds-blocks")}`}</label>
                <PhenixSelect key="gradient-direction" name={`gradient-direction`} value={rotate || ""} onChange={(target) => set_rotate(target.value)} options={[
                    { label: __('Default' ,"pds-blocks"), value: '' },
                    { label: __('45 Degree' ,"pds-blocks"), value: 'bg-grade-45' },
                    { label: __('-45 Degree' ,"pds-blocks"), value: 'bg-grade-45n' },
                    { label: __('90 Degree' ,"pds-blocks"), value: 'bg-grade-90' },
                    { label: __('-90 Degree' ,"pds-blocks"), value: 'bg-grade-90n' },
                    { label: __('120 Degree' ,"pds-blocks"), value: 'bg-grade-120' },
                    { label: __('-120 Degree' ,"pds-blocks"), value: 'bg-grade-120n' },
                    { label: __('180 Degree' ,"pds-blocks"), value: 'bg-grade-180' },
                    { label: __('-180 Degree' ,"pds-blocks"), value: 'bg-grade-180n' },
                ]}/>
            </div> : null}
            {/*===> Rotation Select <===*/}
        </div>
    )
}

export default PhenixBackground;