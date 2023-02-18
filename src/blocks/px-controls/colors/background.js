/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/

//===> WordPress Modules <===//
import {Component} from '@wordpress/element';
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
            onChange
        } = this.props;

        //===> Returned Value <===//
        const options = {
            type: type,
            value: value
        }

        //===> Set Background <===//
        const setBackground = clicked => {
            //===> Get Value <===//
            let button = clicked.target,
                value  = button.getAttribute('data-value');

            //===> Colors & Gradients <===//
            if (button) {
                options.value = value;
            }
            //===> Image Type <===//
            else {
                options.value = clicked.url;
            }
            //===> Return Options <===//
            return onChange(options);
        }

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

                output.push(<button key={`${name.replaceAll(" ", "-")}`} onClick={setBackground} title={title} data-value={isColor ? name : ""} className={`${isColor ? name : `${name} color-gray fs-12`} reset-button ${value === name ? 'px-active' : null}`} style={{"width":"30px","height":"16px","borderRadius":"16px"}}></button>);
            }
            //===> Return Buttons <===//
            return output;
        }

        //===> Colors Panel <===//
        const showPanel = clicked => {
            let button = clicked.target,
                panel  = Phenix(button).next(".options-list");
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
                {/*===> Trigger <===*/}
                <button onClick={showPanel} className={`options-toggle form-control small flexbox align-between align-center-y radius-md tx-align-start border-alpha-25 mb-5`} type="button">
                    <span className={`me-10 radius-circle inline-block ${value.length > 0 ? value : "bg-inherit"}`} style={{"width": "20px", "height": "20px"}}></span>
                    <span className='col'>{value.length > 0 ? value.replaceAll("-", " ").replace("bg","") : "Default"}</span>
                    <i className='fas fa-pencil'></i>
                </button>
                {/*===> Panel <===*/}
                {type !== "image" ?
                    <div className='flexbox options-list align-between pd-20 bg-white border-1 border-solid border-alpha-20 radius-md radius-bottom hidden fluid' style={{gap:"10px"}}>
                        {type === "color" ? makeButtons(this.state.colors) : type === "gradients" ? makeButtons(this.state.gradients) : null}
                    </div>
                : null}
            </div>
        )
    }
}

// <div className='px-gb-component'>
//     {/*===> Background Types <===*/}
//     <div className='options-tabs px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20'>
//         <button key="color" className={`btn tiny col ${activeBtn('color')}`} onClick={changeTab} data-value="color">Colors</button>
//         <button key="gradient" className={`btn tiny col ${activeBtn('gradient')}`} onClick={changeTab} data-value="gradient">Gradients</button>
//         <button key="image" className={`btn tiny col ${activeBtn('image')}`} onClick={changeTab} data-value="image">Image</button>
//         <button key="more" className={`btn tiny bg-offwhite-smoke col far fa-ellipsis-v`} style={{padding:'0 8px'}}></button>
//     </div>

//     {/*===> Background <===*/}
//     <div className='options-list'>
//         {/*===> Colors <====*/}
//         <div className={`flexbox color-options ${activeTab('color')}`}>
//             {makeButtons(this.state.main, 'color')}
//             {/* Divider */}
//             <span className='display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
//             {/* Offwhite */}
//             {makeButtons(this.state.offwhite, 'color')}
//             {/* Divider */}
//             <span className='display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
//             {/* Brands */}
//             {makeButtons(this.state.brands, 'color')}
//         </div>
//         {/*===> Gradients <====*/}
//         <div className={`flexbox gradient-options ${activeTab('gradient')}`}>
//             {makeButtons(this.state.gradients, 'gradient')}
//             {/* Divider */}
//             <span className='display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
//             {/* Directions */}
//             <label className='mb-10 col-12'>Gradient Direction</label>
//             {/* .... */}
//             <div className='px-group icon-btns radius-sm border-1 border-solid border-alpha-10 borderd-group mb-10'>
//                 {makeRotations(this.state.rotation, 'rotate')}
//             </div>
//         </div>
//         {/*===> Background <====*/}
//         <div className={`flexbox image-options ${activeTab('image')}`}>
//             <MediaUploader key="image-background" value={type !== 'image' ? this.state.placeholder : value} setValue={setBackground}></MediaUploader>
//         </div>
//     </div>
//     {/*===> End Component <===*/}
// </div>