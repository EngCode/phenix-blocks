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
        const {value, label, isSmall, placeholder, onChange} = this.props;

        //===> Colors List <===//
        const pxPallete = window.PhenixBlocks.dataLists.paletteText;

        //===> Get Custom Colors and Gradients <===//
        const setting = wp.data.select('core/block-editor').getSettings();
        const editorColors = setting['__experimentalFeatures']?.color;
        const customColorsList = [];

        //===> Generate Custom Colors <===//
        if (editorColors) {
            editorColors.palette?.default?.forEach(color => customColorsList.push(`var(--wp--preset--color--${color.slug})`));
            editorColors.palette?.custom?.forEach(color => customColorsList.push(`var(--wp--preset--color--${color.slug})`));
        }

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
                let title = list[index],
                    isColor = !name.includes("fa-");

                //===> Convert to Title <===//
                if (isColor) {
                    //===> Get a Clean Title <===//
                    title = title.replace("var(", "").replace('--wp--preset--color--', '').replace(')', '').replace('color-', '').replaceAll('-', ' ');
                    //===> UpperCase Title <===//
                    title = title.replace(/^\w/, function(c) {
                        return c.toUpperCase();
                    });
                } else {
                    title = "Reset";
                }

                //===> Button Attributes <====//
                const buttonAttributes = {
                    "title": title,
                    "onClick": setColor,
                    "data-value": isColor ? name : "",
                    "key": `${name.replaceAll(" ", "-")}`,
                    "style": {width: "30px", height:"16px", backgroundColor: name.includes('var') ? name : null},
                    "className": `${isColor && !name.includes('var') ? name.replace('color-','bg-') : `${!name.includes('var') ? name : name.includes('--white') ? 'border-1 border-solid border-alpha-10' : ''} color-gray fs-12`} col reset-button ${value === name ? 'px-active' : null}  ${classes?classes:""}`,
                };

                //===> Push the Button <===//
                output.push(<button {...buttonAttributes}></button>);
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
                Phenix(panel).toggleClass("px-active").fadeToggle(300, 0, "flex");
                
                if (isSmall) {
                    Phenix(wrapper).toggleClass("overlay-panel")
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
                    <span className={`me-5 radius-circle inline-block ${value?.length > 0 && !value.includes('var') ? value.replace("color-","bg-") : value?.includes('var') ? '': "bg-inherit"}`} style={{"width": "20px", "height": "20px", backgroundColor: value && value.includes('var') ? value : null}}></span>
                    <span className='col tx-nowrap pde-5 tx-capitalize'>{value?.length > 0 && !placeholder ? value?.replace('var(--wp--preset--color--', '').replace(')', '').replace('color-', '').replaceAll('-', ' ') : placeholder ? placeholder : "Default"}</span>
                    {!isSmall ? <i className='fas fa-pencil'></i> : null}
                </button>
                {/*===> Panel <===*/}
                <div className='flexbox px-scrollbar overflow-y-auto options-list pdb-20 pdt-10 pdx-10 bg-white border-1 border-solid border-alpha-20 radius-md radius-bottom hidden fluid' style={{gap:"10px", maxHeight: "calc(100vh - 350px)"}}>
                    <label className={`tx-align-center pdb-5 pdy-5 lineheight-100 bg-alpha-05 radius-sm mb-0 tx-UpperCase fs-12 col-12`}>{__("Main Colors", "pds-blocks")}</label>
                    {makeButtons(pxPallete.main, "radius-xxl")}

                    <label className='tx-align-center pdb-5 pdy-5 lineheight-100 bg-alpha-05 radius-sm mb-0 mt-10 tx-UpperCase fs-12 col-12'>{__("Components Colors", "pds-blocks")}</label>
                    {makeButtons(pxPallete.components, "radius-xxl border-1 border-alpha-15 border-solid")}

                    {customColorsList.length > 0 ? <>
                        <label className='tx-align-center pdb-5 pdy-5 lineheight-100 bg-alpha-05 radius-sm mb-0 mt-10 tx-UpperCase fs-12 col-12'>
                            {__("Custom Colors", "pds-blocks")}
                        </label>
                        {makeButtons(customColorsList, "radius-xxl")}
                    </>:null}

                    <label className='tx-align-center pdb-5 pdy-5 lineheight-100 bg-alpha-05 radius-sm mb-0 mt-10 tx-UpperCase fs-12 col-12'>{__("Status Colors", "pds-blocks")}</label>
                    {makeButtons(pxPallete.status, "radius-xxl")}

                    <label className='tx-align-center pdb-5 pdy-5 lineheight-100 bg-alpha-05 radius-sm mb-0 mt-10 tx-UpperCase fs-12 col-12'>{__("Brand Colors", "pds-blocks")}</label>
                    {makeButtons(pxPallete.social, "radius-xxl")}
                </div>
            </div>
        )
    }
}