/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import {Component} from '@wordpress/element';
import {SelectControl} from '@wordpress/components';

//====> Phenix Modules <====//
import MediaUploader from '../uploader';

//===> Phenix Background <===//
export default class PhenixBackground extends Component {
    //===> States <===//
    state = {
        colors : [
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

            "bg-alpha-05",
            "bg-alpha-10",
            "bg-alpha-15",
            "bg-alpha-25",
            "bg-alpha-50",
            "bg-alpha-75",

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
        gradients: [
            "bg-grade-primary",
            "bg-grade-secondary",
            "bg-grade-warning",
            "bg-grade-danger",
            "bg-grade-success",
            "bg-grade-water",
            "bg-grade-ice",
            "bg-grade-fire",
            "bg-grade-purple"
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
            onChange
        } = this.props;

        //===> Returned Value <===//
        let options = {
            type: type,
            rotate: rotate,
            value: value
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
                value  = button.getAttribute('data-value');

            //===> Colors & Gradients <===//
            if (button) {options.value = value;}
            //===> Image Type <===//
            else {options.value = clicked.url;}

            //===> Return Options <===//
            return onChange(options);
        };

        //===> Buttons Creator <===//
        const makeButtons = (list, type) => {
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

                output.push(<button key={`${name.replaceAll(" ", "-")}`} onClick={setBackground} title={title} data-value={isColor ? name : ""} className={`${isColor ? name : `${name} color-gray fs-12`} col reset-button ${value === name ? 'px-active' : ""}`} style={{"width":"30px","height":"16px","borderRadius":"16px"}}></button>);
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
                Phenix(panel).toggleClass("px-active").slideToggle(300, 0, "flex");
            }
        };

        //===> Component Design <===//
        return (
            <div className='px-gb-component position-rv mb-15'>
                {/*===> Toggle Button <===*/}
                <label className='mb-10 tx-UpperCase'>{label}</label>
                {/*===> Group <===*/}
                <div className='overflow-hidden form-control small flexbox border-alpha-25 mb-5 tx-align-start radius-md align-center-y pdx-0 flow-nowrap'>
                    {/*===> Panel Trigger */}
                    <button onClick={showPanel} className={`w-max-150 fs-13 col h-min-100 reset-button options-toggle flexbox flow-nowrap align-between align-center-y pdx-10 divider-e`} type="button">
                        {type !== "image" ? <>
                            <span className={`me-5 radius-circle inline-block ${value.length > 0 ? value : "bg-inherit"}`} style={{"width": "17px", "height": "17px"}}></span>
                            <span className='col tx-nowrap pde-5 tx-capitalize'>{value.length > 0 ? value.replaceAll("-", " ").replace("bg","") : "Default"}</span>
                        </> : <>
                        <span className={`me-5 radius-circle inline-block`} style={{"width": "22px", "height": "22px", "backgroundImage": `url(${value})`, "backgroundSize": "cover", "backgroundPosition": "center"}}></span>
                            <span className='col tx-nowrap pde-5'>{__("Replace", "phenix")}</span>
                        </>}
                        <i className='fas fa-pencil fs-12 color-gray'></i>
                    </button>
                    {/*===> Type Select <===*/}
                    <SelectControl key="bg-type" value={type || ""} onChange={set_type} options={[
                        { label: 'color',   value: 'color' },
                        { label: 'image',   value: 'image' },
                        { label: 'gradient',   value: 'gradient' },
                    ]}/>
                </div>
                {/*===> Panel <===*/}
                <div className={`flexbox options-list align-between ${type !== "image" ? 'pd-15 bg-white border-1 border-solid border-alpha-20 radius-md radius-bottom' : 'pdt-5'} hidden fluid`} style={{gap:"10px"}}>
                    {type === "color" ? makeButtons(this.state.colors) : type === "gradient" ? makeButtons(this.state.gradients) : null}
                    {type === "image" ? <MediaUploader key="upload-file" value={!value ? this.state.placeholder : value} setValue={setBackground}></MediaUploader> : null}
                    {/*===> Type Select <===*/}
                    <div className='divider-t pdt-15 col-12'>
                        <SelectControl label={`${_("Rotation", "phenix")}`} key="gradient-direction" value={rotate || ""} onChange={set_rotate} options={[
                            { label: __('Default' ,"phenix"), value: '' },
                            { label: __('45 Degree' ,"phenix"), value: 'bg-grade-45' },
                            { label: __('-45 Degree' ,"phenix"), value: 'bg-grade-45n' },
                            { label: __('90 Degree' ,"phenix"), value: 'bg-grade-90' },
                            { label: __('-90 Degree' ,"phenix"), value: 'bg-grade-90n' },
                            { label: __('120 Degree' ,"phenix"), value: 'bg-grade-120' },
                            { label: __('-120 Degree' ,"phenix"), value: 'bg-grade-120n' },
                            { label: __('180 Degree' ,"phenix"), value: 'bg-grade-180' },
                            { label: __('-180 Degree' ,"phenix"), value: 'bg-grade-180n' },
                        ]}/>
                    </div>
                </div>
            </div>
        )
    }
}