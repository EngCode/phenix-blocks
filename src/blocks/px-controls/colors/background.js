/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import {Component} from '@wordpress/element';
import { select } from '@wordpress/data';

//====> Phenix Modules <====//
import PhenixSelect from '../select';
import MediaUploader from '../uploader';

//===> Phenix Background <===//
export default class PhenixBackground extends Component {
    //===> States <===//
    state = {
        colors : {
            main : [
                "fas fa-redo tx-align-center",
                "bg-inherit",
                "bg-transparent",
                "bg-primary",
                "bg-primary-dark",
                "bg-secondary",
                "bg-secondary-dark",
                "bg-gray",
                "bg-dark",
                "bg-white",
            ],

            status: [
                "bg-success",
                "bg-danger",
                "bg-warning",
                "bg-info",

                "bg-offwhite-primary",
                "bg-offwhite-secondary",
                "bg-offwhite-info",
                "bg-offwhite-success",
                "bg-offwhite-danger",
                "bg-offwhite-warning",
            ],

            offwhite: [
                "bg-offwhite-smoke",
                "bg-offwhite-gray",
                "bg-offwhite-snow",
                "bg-offwhite-honeydew",
                "bg-offwhite-aliceblue",
                "bg-offwhite-ghost",
                "bg-offwhite-seashell",
                "bg-offwhite-beige",
                "bg-offwhite-oldlace",
                "bg-offwhite-floral",
                "bg-offwhite-antique",
                "bg-offwhite-linen",
                "bg-offwhite-lavenderblush",
            ],
            
            brands: [
                "bg-facebook",
                "bg-twitter",
                "bg-youtube",
                "bg-instagram",
                "bg-snapchat",
                "bg-whatsapp",
                "bg-pinterest",
                "bg-linkedin",
                "bg-behance",
                "bg-dribbble",
                "bg-flicker",
            ],

            darkAlpha: [
                "bg-alpha-05",
                "bg-alpha-10",
                "bg-alpha-15",
                "bg-alpha-25",
                "bg-alpha-50",
                "bg-alpha-75",
            ],

            lightAlpha: [
                "bg-revert-05",
                "bg-revert-10",
                "bg-revert-15",
                "bg-revert-25",
                "bg-revert-50",
                "bg-revert-75",
            ],

            components: [
                "bg-component-lvl-1",
                "bg-component-lvl-2",
                "bg-component-lvl-3"
            ]
        },

        gradients: [
            "bg-grade-primary",
            "bg-grade-secondary",
            "bg-grade-warning",
            "bg-grade-danger",
            "bg-grade-success",
            "bg-grade-water",
            "bg-grade-ice",
            "bg-grade-fire",
            "bg-grade-purple",
            "bg-grade-primary-offwhite",
            "bg-grade-primary-dark",
            "bg-grade-secondary-offwhite",
            "bg-grade-secondary-dark",
            "bg-grade-primary-secondary",
            "bg-grade-primary-secondary-2nd",
            "bg-grade-danger-purple",
            "bg-grade-primary-purple",
            "bg-grade-silver",
            "bg-grade-silver-2nd",
            "bg-grade-offwhite-red",
            "bg-grade-offwhite-blue",
            "bg-grade-offwhite-green",
            "bg-grade-offwhite-yellow",
            "bg-grade-offwhite-silver",
            "bg-grade-offwhite-info",
            "bg-grade-offwhite-purple",
            "bg-grade-offwhite-danger",
            "bg-grade-offwhite-yellow-2nd",
            "bg-grade-offwhite-blue-2nd ",
            "bg-grade-offwhite-blue-3rd",
            "bg-grade-offwhite-blue-4th",
        ],

        rotation : [
            'bg-grade-0',
            'bg-grade-45',
            'bg-grade-90',
            'bg-grade-120',
            'bg-grade-120n',
            'bg-grade-90n',
            'bg-grade-45n',
            'bg-grade-180',
        ],

        placeholder : "https://via.placeholder.com/480x200.webp?text=Example",
    }
    //===> Render <===//
    render () {
        //===> Properties <===//
        const {
            type,
            value,
            label,
            rotate,
            colorsOnly,
            onlyCG,
            isSmall,
            placeholder,
            onChange
        } = this.props;

        const uniqueKey = Date.now().toString(36) + Math.random().toString(36).substr(2, 5)+`-flexbox-${screen}-option`;

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
            if (options.type === 'image') {
                options.value = this.state.placeholder;
            } else {
                options.value = "";
            }

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

        //===> Buttons Creator <===//
        const makeButtons = (list, classes) => {
            let output = [];
            //===> for each item <===//
            for (let index = 0; index < list.length; index++) {
                //===> Get Value <===//
                const name = list[index];
                let title = "",
                    isColor = !name.includes("fa-");

                //===> Convert to Title <===//
                if (isColor) {
                    title = list[index].replace('bg-', '').replace('-', ' ');

                    //===> UpperCase Title <===//
                    title = title.replace(/^\w/, function(c) {
                        return c.toUpperCase();
                    });
                } else title = "Reset";

                output.push(<button key={`${name.replaceAll(" ", "-")}`} onClick={setBackground} title={title} data-value={isColor ? name : ""} className={`${isColor ? name : `${name} color-gray fs-12`} col reset-button ${value === name ? 'px-active' : ""} ${classes?classes:""}`} style={{"width":"30px","height":"16px"}}></button>);
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
                if (isSmall) {
                    Phenix(wrapper).toggleClass("overlay-panel")
                    Phenix(panel).toggleClass("px-active").fadeToggle(300, 0, "flex");
                } else {
                    Phenix(panel).toggleClass("px-active").slideToggle(300, 0, "flex");
                };
            }
        };

        //===> Get Custom Colors and Gradients <===//
        // const settings = wp.data.select('core/block-editor').getSettings();
        // console.log(settings.colors, settings.gradients);

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
                            <span className={`me-5 radius-circle inline-block ${value?.length > 0 ? value : "bg-inherit"}`} style={{"width": "17px", "height": "17px"}}></span>
                            <span className='col tx-nowrap pde-5 tx-capitalize'>{value?.length > 0 ? value.replaceAll("-", " ").replace("bg","") : placeholder ? placeholder : "Default"}</span>
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
                <div className={`flexbox options-list ${type !== "image"  && type !== "video" && type !== "embed" ? 'pdy-15 pdx-10 bg-white border-1 border-solid border-alpha-20 radius-md radius-bottom' : 'pdt-5'} hidden fluid px-scrollbar overflow-y-auto`} style={{gap:"10px", maxHeight: "calc(100vh - 350px)"}}>
                    {type === "color" ? <>
                        <label className='tx-align-center divider-b mb-0 tx-UpperCase fs-12 col-12'>{__("Main Colors", "pds-blocks")}</label>
                        {makeButtons(this.state.colors.main, "radius-xxl")}

                        <label className='tx-align-center divider-b mb-0 tx-UpperCase fs-12 col-12 mt-10'>{__("Components Colors", "pds-blocks")}</label>
                        {makeButtons(this.state.colors.components, "radius-xxl border-1 border-alpha-15 border-solid")}

                        <label className='tx-align-center divider-b mb-0 tx-UpperCase fs-12 col-12 mt-10'>{__("Status Colors", "pds-blocks")}</label>
                        {makeButtons(this.state.colors.status, "radius-xxl")}

                        <label className='tx-align-center divider-b mb-0 tx-UpperCase fs-12 col-12 mt-10'>{__("Offwhite Colors", "pds-blocks")}</label>
                        {makeButtons(this.state.colors.offwhite, "radius-xxl")}

                        <label className='tx-align-center divider-b mb-0 tx-UpperCase fs-12 col-12 mt-10'>{__("Brand Colors", "pds-blocks")}</label>
                        {makeButtons(this.state.colors.brands, "radius-xxl")}

                        <label className='tx-align-center divider-b mb-0 tx-UpperCase fs-12 col-12 mt-10'>{__("Dark Alpha", "pds-blocks")}</label>
                        <div className='pd-5 radius-sm bg-white fluid flexbox align-between'>
                            {makeButtons(this.state.colors.darkAlpha, "")}
                        </div>

                        <label className='tx-align-center divider-b mb-0 tx-UpperCase fs-12 col-12 mt-10'>{__("Light Alpha", "pds-blocks")}</label>
                        <div className='pd-5 radius-sm bg-dark fluid flexbox align-between'>
                            {makeButtons(this.state.colors.lightAlpha, "")}
                        </div>
                    </>
                    : type === "gradient" ? 
                        makeButtons(this.state.gradients, "radius-xxl") : 
                    null}
                    {type === "image" || type === "video" ? <MediaUploader key="upload-file" value={!value ? this.state.placeholder : value} setValue={setBackground}></MediaUploader> : null}
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
}