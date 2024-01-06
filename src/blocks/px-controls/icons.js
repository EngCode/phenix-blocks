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
        icons_page : 1,
        icon_type  : "far",
        icon_name  : "fa-icons",
        icons_file : "fa6-pro.json",
        icons_list : [],
        icons_pages: {},

        icons_types : [
            { value: 'fab', label: 'Brands' },

            { value: 'fat', label: 'Thin' },
            { value: 'fal', label: 'Light' },
            { value: 'far', label: 'Regular' },
            { value: 'fas', label: 'Solid' },
            { value: 'fad', label: 'Duotone' },

            { value: 'fast', label: 'Sharp Thin' },
            { value: 'fasl', label: 'Sharp Light' },
            { value: 'fass', label: 'Sharp Solid' },
            { value: 'fasr', label: 'Sharp Regular' },
        ],

        icons_version : "fa6",
        return_type: null
    };

    reRender = () => {
        //===> Fetch Data <===//
        apiFetch({ path: "pds-blocks/v2/options" }).then((options) => {
            //===> Get Icons Data <===//
            let icons_pages = this.state.icons_pages,
                icons_version = this.state.icons_version,
                icons_file = this.state.icons_file,
                icon_type = this.state.icon_type,
                icon_name = this.state.icon_name,
                icons_list = this.state.icons_list;

            //===> Get Icons Version <===//
            if (options.pds_icon_font) {
                icons_version = options.pds_icon_font.replace("fontawesome-", "fa").replace("-free","").replace("-pro","");
            }

            //===> Define FontAwesome Icons File <===//
            if (this.props.value.includes("fab")) {
                icons_file = `${icons_version}-brands.json`;
            } else {
                icons_file = `${icons_version}-pro.json`;
            }

            //===> FontAwesome Version Correct <===//
            if(icons_version.includes("6")) icons_file = icons_file.replace("5", "6");

            //===> Set Icon Type <===//
            const icon_value = this.props.value.split(" ");

            //===> Reset Icons List <===//
            if (icon_type.includes('fab') && !icon_value[0].includes('fab')) icons_list = [];
            // if (icon_type !== icon_value[0]) icons_list = [];

            //===> Set Icon Type <===//
            icon_name = icon_value[1];
            icon_type = icon_value[0];

            //===> Start Fetching <===//
            if (icons_list.length < 1) {
                fetch(`${PDS_WP_KEY.json}/${icons_file}`).then((res) => res.json()).then((json) => {
                    //===> Assign Icons List <===//
                    if (json.icons !== icons_list) icons_list = json.icons;
                    //===> Divide List into Pages <===//
                    for(let item = 0; item < icons_list.length; item += 200) {
                        //===> Define Page Number <===//
                        let pageNumber = Math.floor(item / 200) + 1;
                        //===> Add item to Pages Object <===//
                        icons_pages[pageNumber] = icons_list.slice(item, item + 200);
                    }
                    //===> Update State <===//
                    this.setState({icon_type, icon_name, icons_file, icons_list, icons_version, icons_pages});
                });
            } else {
                //===> Divide List into Pages <===//
                for(let item = 0; item < icons_list.length; item += 200) {
                    //===> Define Page Number <===//
                    let pageNumber = Math.floor(item / 200) + 1;
                    //===> Add item to Pages Object <===//
                    icons_pages[pageNumber] = icons_list.slice(item, item + 200);
                }
                //===> Update State <===//
                this.setState({icon_type, icon_name, icons_file, icons_list, icons_version, icons_pages});
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

        //===> Returned Value <===//
        let options = {
            type: this.state.icon_type,
            value: this.state.icon_name,
        };

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

        //===> Traveling Buttons <===//
        const travelingButton = (event) => {
            //===> Get the icons List Wrapper <====//
            let element = event.target,
                travelType = element.getAttribute('data-travel');

            //===> Get Next Page <===//
            if (travelType === 'next') {
                //===> Exit if Last Page <===//
                if (this.state.icons_page === Object.keys(this.state.icons_pages).length) return;
                //===> Go to Next Page <===//
                this.setState({icons_page: this.state.icons_page + 1});
            }

            //===> Get Previous Page <===//
            else if (travelType === 'previous') {
                //===> Exit if First Page <===//
                if (this.state.icons_page === 1) return;

                //===> Go to Previous Page <===//
                this.setState({icons_page: this.state.icons_page - 1});
            }
        };

        //===> Buttons Creator <===//
        const makeButtons = (list, type) => {
            //===> Exit if has no items <===//
            if (list.length < 1) return;

            //===> Define Data <===//
            let buttonsList  = [],
                buttonsStyle = {"fontSize": "20px", "lineHeight": "32px", "width":"32px", "height":"32px", "borderRadius": "3px", "padding": 0},
                buttonItem = (item) => {
                    return <button key={`${item}`} onClick={set_value} title={item} data-value={item} className={`reset-button icon-btn-item ${type} ${item} ${this.state.icon_name === item?'px-active bg-offwhite-primary':""}`} style={buttonsStyle}></button>;
                };

            //===> Create Buttons <===//
            list.forEach((item) => buttonsList.push(buttonItem(item)));

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
                icons_list = this.state.icons_list,
                value = input.value;

            //===> Find the searched icon and remove the reset <===//
            let searchedList = icons_list.filter(icon => icon.includes(value));
            
            //===> Set the New List <===//
            if (value.length > 0)  this.setState({icons_list: searchedList, icons_page: 1});
            else this.setState({icons_list: [], icons_page: 1});
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
                <div className={`flexbox align-center tx-align-center options-list pdb-15 pdt-5 bg-white border-1 border-solid border-alpha-25 radius-md radius-bottom hidden fluid`}>
                    <input name="pds-icons-search" className='reset-input pdy-5 fs-12 divider-b fluid tx-align-center' onChange={iconsFilter} placeholder={__("Search in icons", "pds-blocks")} />
                    {/*===> Buttons List <===*/}
                    <div className="bg-alpha-05 fluid pdx-15 pdy-10 icons-listing align-center flexbox px-scrollbar overflow-y-auto mb-10 divider-y" style={{gap:"10px", maxHeight: "220px"}}>
                        {this.state.icons_list.length > 0 ? 
                            makeButtons(this.state.icons_pages[this.state.icons_page], this.state.icon_type) : "No Icons Found."
                        }
                    </div>
                    {/*===> Pagination <===*/}
                    <div className='fluid flexbox align-between pagination-btns pdx-15'>
                        <button onClick={travelingButton} type="button" data-travel="next" className="btn tiny fs-12 radius-sm primary">{__("Next", "pds-blocks")}</button> 
                        <button onClick={travelingButton} type="button" data-travel="previous" className="btn tiny fs-12 radius-sm gray">{__("Previous", "pds-blocks")}</button> 
                    </div>
                    {/*===> // Pagination <===*/}
                </div>
            </div>
        )
    }
}