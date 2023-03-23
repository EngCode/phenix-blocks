/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/

//===> WordPress Modules <===//
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

        //===> Colors List <===//
        const pxPallete = [
            "color-inherit",
            "color-transparent",
            "color-primary",
            "color-primary-dark",
            "color-secondary",
            "color-secondary-dark",
            "color-gray",
            "color-dark",
            "color-white",
            "color-success",
            "color-danger",
            "color-warning",
            "color-info",
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
            "fas fa-redo tx-align-center"
        ];

        //===> Set Color <===//
        const setColor = clicked => {
            //===> Get Value <===//
            let button = clicked.target,
                value  = button.getAttribute('data-value');
            //===> Return Options <===//
            return onChange(value);
        };

        //===> Buttons Creator <===//
        const makeButtons = (list) => {
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

                output.push(<button key={`${name.replaceAll(" ", "-")}`} onClick={setColor} title={title} data-value={isColor ? name : ""} className={`${isColor ? name.replace('color-','bg-') : `${name} color-gray fs-12`} reset-button ${value === name ? 'px-active' : null}`} style={{"width":"30px","height":"16px","borderRadius":"16px"}}></button>);
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
            <div className={`px-gb-component${isSmall ? "":" position-rv "}${label ? "mb-15" : ""}`}>
                {/*===> Toggle Button <===*/}
                {label ? <label className='mb-10 tx-UpperCase'>{label}</label> : null}
                {/*===> Trigger <===*/}
                <button onClick={showPanel} className={`options-toggle form-control small flexbox align-between align-center-y radius-md tx-align-start border-alpha-25 mb-5`} type="button">
                    <span className={`me-5 radius-circle inline-block ${value?.length > 0 ? value.replace("color-","bg-") : "bg-inherit"}`} style={{"width": "20px", "height": "20px"}}></span>
                    <span className='col'>{value?.length > 0 && !placeholder ? value?.replaceAll("-", " ").replace("color","") : placeholder ? placeholder : "Default"}</span>
                    {!isSmall ? <i className='fas fa-pencil'></i> : null}
                </button>
                {/*===> Panel <===*/}
                <div className='flexbox options-list align-between pd-20 bg-white border-1 border-solid border-alpha-20 radius-md radius-bottom hidden fluid' style={{gap:"10px"}}>
                    {makeButtons(pxPallete)}
                </div>
            </div>
        )
    }
}