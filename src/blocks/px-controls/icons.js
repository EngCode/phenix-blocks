/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import {Component} from '@wordpress/element';
import PhenixSelect from './select';

//===> Phenix Icons <===//
export default class PhenixIcons extends Component {
    //===> States <===//
    state = {
        icon_type : "far",
        icon_name : "fa-icons",
        icons_file : "fa5-free.json",
        icons_list : [],
        icons_types : [
            { value: 'far',   label: 'Regular' },
            { value: 'fas',   label: 'Solid' },
            { value: 'fab',   label: 'Brands' }
        ],
        icons_version : "5-free",
        return_type: null
    };

    reRender = () => {
        //===> Fetch Data <===//
        apiFetch({ path: "pds-blocks/v2/options" }).then((options) => {
            //===> Get Icons Data <===//
            let icons_version = this.state.icons_version,
                icons_file = this.state.icons_file,
                icon_type = this.state.icon_type,
                icon_name = this.state.icon_name,
                icons_list = this.state.icons_list;

            //===> Get Icons Version <===//
            if (options.pds_icon_font) icons_version = options.pds_icon_font.replace("fontawesome-", "");

            //===> Define Icons File <===//
            if (this.props.value.includes("fab")) { icons_file = "fa5-brands.json"; } 
            else { icons_file = "fa5-free.json"; }

            //===> Version Correct <===//
            if(icons_version.includes("6")) icons_file = icons_file.replace("5", "6");
            if(icons_version.includes("pro")) icons_file = icons_file.replace("free", "pro");

            //===> Set Icon Type <===//
            const icon_value = this.props.value.split(" ");

            //===> Sharp Type Fallback <===//
            if (icon_value.includes("fa-sharp")) {
                //===> Reset Icons List <===//
                if (icon_type !== `${icon_value[0]} ${icon_value[1]}`) icons_list = [];

                //===> Set Icon Type <===//
                icon_name = icon_value[2];
                icon_type = `${icon_value[0]} ${icon_value[1]}`;
            } else {
                //===> Reset Icons List <===//
                if (icon_type !== icon_value[0]) icons_list = [];

                //===> Set Icon Type <===//
                icon_name = icon_value[1];
                icon_type = icon_value[0];
            }

            //===> Add the Pro Types <===//
            if (icons_file.includes("pro") && this.state.icons_types.length < 3) {
                let icons_types = this.state.icons_types.slice();
                icons_types.push({ value: "fal", label: "Light" });
                icons_types.push({ value: "fad", label: "Duotone" });
                icons_types = icons_types.filter((item,index) => icons_types.indexOf(item) === index);
                //===> for Version 6 <===//
                if (icons_file.includes("6")) {
                    icons_types.push({value: "fa-sharp fa-regular", label: "Regular Sharp"});
                    icons_types.push({value: "fa-sharp fa-solid", label: "Solid Sharp" });
                }

                this.setState({ icons_types });
            }

            //===> Start Fetching <===//
            if (icons_list.length < 1) {
                fetch(`${PDS_WP_KEY.json}/${icons_file}`).then((res) => res.json()).then((json) => {
                    //===> Assign Icons List <===//
                    if (json.icons !== icons_list) icons_list = json.icons;
        
                    //===> Update State <===//
                    this.setState({icon_type, icon_name, icons_file, icons_list, icons_version});
                });
            } else {
                //===> Update State <===//
                this.setState({icon_type, icon_name, icons_file, icons_list, icons_version});
            }
        });
    };

    //===> Fetch Data When Rendered <===//
    componentDidMount() { this.reRender(); };
    //===> Fetch Data When Updated <===//
    componentDidUpdate() { this.reRender(); };

    //===> Render <===//
    render () {
        //===> Properties <===//
        const { label, value, version, onChange } = this.props;
        const uniqueKey = Date.now().toString(36) + Math.random().toString(36).substr(2, 5)+`-flexbox-${screen}-option`;

        //===> Returned Value <===//
        let options = {type: this.state.icon_type, value: this.state.icon_name};

        //===> Set Type <===//
        const set_value = clicked => {
            //===> Get Value <===//
            let button = clicked.target,
                theValue  = button?.getAttribute('data-value');

            //===> Set Value <===//
            options.value = theValue;

            //===> Return Options <===//
            return onChange(options);
        };

        const set_type = value => {
            //===> Set Value <===//
            options.type = value;

            //===> Switched to Brand <===//
            if (value === "fab" && !this.props.value.includes('fab')) options.value = "fa-wordpress";

            //===> Switched from Brand <===//
            if (this.props.value.includes('fab') && value !== "fab") options.value = "fa-icons";

            //===> Return Options <===//
            return onChange(options);
        };

        //===> Buttons Creator <===//
        const makeButtons = (list, type) => {
            //===> Define Data <===//
            let buttonsList = [],
                buttonsStyle = {"fontSize": "17px", "lineHeight": "24px", "width":"24px", "height":"24px", "borderRadius": "3px", "padding": 0};

            //===> for each item <===//
            if(list.length > 0) {
                list.forEach((item) => buttonsList.push(<button key={`${item}`} onClick={set_value} title={item} data-value={item} className={`reset-button icon-btn-item ${type} ${item} ${this.state.icon_name === item?'px-active bg-offwhite-primary':""}`} style={buttonsStyle}></button>));
            }

            //===> Return Buttons <===//
            return buttonsList;
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

        //===> Search in icons <===//
        const iconsFilter = changed => {
            //===> Define Data <===//
            let input = changed.target,
                value = input.value,
                options = Phenix(input).ancestor(".options-list"),
                buttons = options.querySelectorAll(".icon-btn-item");
            //===> Find the searched icon and hide the rest <===//
            buttons.forEach(button => button.getAttribute('data-value').includes(value) ? button.classList.remove("hidden") : button.classList.add("hidden"));
        };

        //===> Component Design <===//
        return (
            <div className='px-gb-component position-rv mb-10 px-icons-selector'>
                {/*===> Toggle Button <===*/}
                {label?<label className='mb-10 tx-UpperCase fs-13'>{label}</label>:null}

                {/*===> Group <===*/}
                <div className='form-control small flexbox border-alpha-25 mb-5 tx-align-start radius-md align-center-y pdx-0 flow-nowrap'>
                    {/*===> Panel Trigger */}
                    <button onClick={showPanel} className={`col-6 w-max-150 fs-13 h-min-100 reset-button options-toggle flexbox flow-nowrap align-between align-center-y pdx-10 divider-e`} type="button">
                        <span className={`col tx-nowrap pde-5`} style={{"lineHeight": "20px"}}>
                            <span className={`pds-icon-preview inline-block me-5 radius-circle bg-alpha-05 ${this.props.value} position-rv`}></span>
                            {__("Replace", "pds-blocks")}
                        </span>
                        <i className='fas fa-pencil fs-12 color-gray'></i>
                    </button>
                    {/*===> Type Select <===*/}
                    <PhenixSelect key={`icons-type`} name="icons-type" className="col-6" value={this.state.icon_type} onChange={(target) => set_type(target.value)} options={this.state.icons_types} />
                </div>

                {/*===> Panel <===*/}
                <div className={`overflow-y-auto flexbox options-list align-center tx-align-center px-scrollbar pdx-15 pdb-15 pdt-5 bg-white border-1 border-solid border-alpha-25 radius-md radius-bottom hidden fluid`} style={{gap:"10px", maxHeight: "220px"}}>
                    <input name="pds-icons-search" className='reset-input pdy-5 fs-12 divider-b fluid tx-align-center' onChange={iconsFilter} placeholder={__("Search in icons", "pds-blocks")} />
                    {makeButtons(this.state.icons_list, this.state.icon_type)}
                </div>
            </div>
        )
    }
}