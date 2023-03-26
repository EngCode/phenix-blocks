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
        icons_version : this.props.version?.replace("fontawesome-", "") || "5-free",
        return_type: null
    };

    //===> Fetch Data Method <===//
    reRender = () => {
        //===> Get Current State <===//
        let new_state = this.state;

        //===> Define Icons File <===//
        if (this.props.value.includes('fab')) {
            new_state.icons_file = new_state.icons_file = "fa5-brands.json";
        } else {
            new_state.icons_file = new_state.icons_file = "fa5-free.json";
        }

        //===> Version Correct <===//
        if (this.props.version.includes('6') || this.props.version.includes('pro')) {
            new_state.icons_file.replace("5", "6");
            new_state.icons_file.replace("free", "pro");
        }

        //===> Set Icon Type <===//
        const icon_value = this.props.value.split(" ");

        //===> Sharp Type Fallback <===//
        if (icon_value.includes('fa-sharp')) {
            //===> Reset Icons List <===//
            if (new_state.icon_type !== `${icon_value[0]} ${icon_value[1]}`) new_state.icons_list = [];

            //===> Set Icon Type <===//
            new_state.icon_name = icon_value[2];
            new_state.icon_type = `${icon_value[0]} ${icon_value[1]}`;
        } else {
            //===> Reset Icons List <===//
            if (new_state.icon_type !== icon_value[0]) new_state.icons_list = [];

            //===> Set Icon Type <===//
            new_state.icon_name = icon_value[1];
            new_state.icon_type = icon_value[0];
        }

        if (this.props.version.includes("pro")) {
            new_state.icons_types.push({ value: 'fal',   label: 'Light' });
            new_state.icons_types.push({ value: 'fad',   label: 'Duotone' });
        }

        if (this.props.version.includes("6")) {
            new_state.icons_types.push({ value: 'fa-sharp fa-regular', label: 'Regular Sharp' });
            new_state.icons_types.push({ value: 'fa-sharp fa-solid', label: 'Solid Sharp' });
        }

        //===> Start Fetching <===//
        if(new_state.icons_list.length < 1) {
            fetch(`${PDS_WP_KEY.json}/${new_state.icons_file}`).then(res => res.json()).then(json => {
                //===> Assign Icons List <===//
                if (json.icons !== new_state.icons_list) new_state.icons_list = json.icons;
                //===> Set State <===//
                this.setState(new_state);
            });
        }

        //===> Update State if its New <===//
        if(this.state !== new_state) this.setState({...new_state});
    };

    //===> Fetch Data When Rendered <===//
    componentDidMount() { this.reRender(); };
    //===> Fetch Data When Updated <===//
    componentDidUpdate() { this.reRender(); };

    //===> Render <===//
    render () {
        //===> Properties <===//
        const { label, value, version, onChange } = this.props;

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
            <div className='px-gb-component position-rv mb-15'>
                {/*===> Toggle Button <===*/}
                <label className='mb-10 tx-UpperCase'>{label}</label>

                {/*===> Group <===*/}
                <div className='overflow-hidden form-control small flexbox border-alpha-25 mb-5 tx-align-start radius-md align-center-y pdx-0 flow-nowrap'>
                    {/*===> Panel Trigger */}
                    <button onClick={showPanel} className={`w-max-150 fs-13 col h-min-100 reset-button options-toggle flexbox flow-nowrap align-between align-center-y pdx-10 divider-e`} type="button">
                        <span className={`col tx-nowrap pde-5`} style={{"lineHeight": "20px"}}>
                            <span className={`pds-icon-preview inline-block me-5 radius-circle bg-alpha-05 ${this.props.value} position-rv`}></span>
                            {__("Replace", "phenix")}
                        </span>
                        <i className='fas fa-pencil fs-12 color-gray'></i>
                    </button>
                    {/*===> Type Select <===*/}
                    <SelectControl key="icons-type" value={this.state.icon_type} onChange={set_type} options={this.state.icons_types}/>
                </div>
                {/*===> Panel <===*/}
                <div className={`overflow-y-auto flexbox options-list align-center tx-align-center px-scrollbar pdx-15 pdb-15 pdt-5 bg-white border-1 border-solid border-alpha-20 radius-md radius-bottom hidden fluid`} style={{gap:"10px", maxHeight: "220px"}}>
                    <input name="pds-icons-search" className='reset-input pdy-5 fs-12 divider-b fluid tx-align-center' onChange={iconsFilter} placeholder={__("Search in icons", "phenix")} />
                    {makeButtons(this.state.icons_list, this.state.icon_type)}
                </div>
            </div>
        )
    }
}