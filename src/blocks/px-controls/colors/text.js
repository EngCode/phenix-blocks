/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import {Component} from '@wordpress/element';

//===> Phenix Background <===//
export default class PhenixColors extends Component {
    render () {
        //===> Properties <===//
        const {
            value,
            label,
            isSmall,
            placeholder,
            onChange
        } = this.props;

        const uniqueKey = Date.now().toString(36) + Math.random().toString(36).substr(2, 5)+`-flexbox-${screen}-option`;

        //===> Colors List <===//
        const pxPallete = {
            main: [
                "color-inherit",
                "color-transparent",
                "color-primary",
                "color-primary-dark",
                "color-secondary",
                "color-secondary-dark",
                "color-gray",
                "color-dark",
                "color-white",
                "fas fa-redo tx-align-center"
            ],

            status: [
                "color-success",
                "color-danger",
                "color-warning",
                "color-info",
            ],

            social: [
                "color-facebook",
                "color-twitter",
                "color-youtube",
                "color-instagram",
                "color-snapchat",
                "color-whatsapp",
                "color-pinterest",
                "color-linkedin",
                "color-behance",
                "color-dribbble",
                "color-flicker",
            ],

            components: [
                "color-component-lvl-1",
                "color-component-lvl-2",
                "color-component-lvl-3"
            ]
        };

        //===> Set Color <===//
        const setColor = clicked => {
            //===> Get Value <===//
            let button = clicked.target,
                value  = button.getAttribute('data-value');
            //===> Return Options <===//
            return onChange(value);
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
                    title = list[index].replace('color-', '').replace('-', ' ');
    
                    //===> UpperCase Title <===//
                    title = title.replace(/^\w/, function(c) {
                        return c.toUpperCase();
                    });
                } else title = "Reset";

                output.push(<button key={`${name.replaceAll(" ", "-")}`} onClick={setColor} title={title} data-value={isColor ? name : ""} className={`${isColor ? name.replace('color-','bg-') : `${name} color-gray fs-12`} col reset-button ${value === name ? 'px-active' : null}  ${classes?classes:""}`} style={{"width":"30px","height":"16px"}}></button>);
            }

            //===> Return Buttons <===//
            return output;
        };

        //===> Colors Panel <===//
        const showPanel = clicked => {
            let button = clicked.target,
                wrapper = Phenix(button).ancestor('.px-gb-component'),
                panel  = Phenix(button).next(".options-list");
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

        //===> Component Output <===//
        return (
            <div className={`colors-selector px-gb-component${isSmall ? "":" position-rv "}${label ? "mb-10" : ""}`}>
                {/*===> Toggle Button <===*/}
                {label ? <label className='mb-5 tx-UpperCase fs-12'>{label}</label> : null}
                {/*===> Trigger <===*/}
                <button onClick={showPanel} className={`options-toggle form-control small flexbox align-between align-center-y radius-md tx-align-start border-alpha-25 mb-5`} type="button">
                    <span className={`me-5 radius-circle inline-block ${value?.length > 0 ? value.replace("color-","bg-") : "bg-inherit"}`} style={{"width": "20px", "height": "20px"}}></span>
                    <span className='col'>{value?.length > 0 && !placeholder ? value?.replaceAll("-", " ").replace("color","") : placeholder ? placeholder : "Default"}</span>
                    {!isSmall ? <i className='fas fa-pencil'></i> : null}
                </button>
                {/*===> Panel <===*/}
                <div className='flexbox px-scrollbar overflow-y-auto options-list pdy-20 pdx-10 bg-white border-1 border-solid border-alpha-20 radius-md radius-bottom hidden fluid' style={{gap:"10px", maxHeight: "calc(100vh - 350px)"}}>
                    <label className='tx-align-center divider-b mb-0 tx-UpperCase fs-12 col-12'>{__("Main Colors", "pds-blocks")}</label>
                    {makeButtons(pxPallete.main, "radius-xxl")}

                    <label className='tx-align-center divider-b mb-0 mt-10 tx-UpperCase fs-12 col-12'>{__("Components Colors", "pds-blocks")}</label>
                    {makeButtons(pxPallete.components, "radius-xxl border-1 border-alpha-15 border-solid")}

                    <label className='tx-align-center divider-b mb-0 mt-10 tx-UpperCase fs-12 col-12'>{__("Status Colors", "pds-blocks")}</label>
                    {makeButtons(pxPallete.status, "radius-xxl")}

                    <label className='tx-align-center divider-b mb-0 mt-10 tx-UpperCase fs-12 col-12'>{__("Brand Colors", "pds-blocks")}</label>
                    {makeButtons(pxPallete.social, "radius-xxl")}
                </div>
            </div>
        )
    }
}