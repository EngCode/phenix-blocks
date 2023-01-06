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
            onChange
        } = this.props;

        //===> Colors List <===//
        const pxPallete = {
            main : [
                "color-inherit",
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
                "color-transparent",
            ],
            brands : [
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
                "color-flicker"
            ],
        }

        //===> Set Background <===//
        const setColor = clicked => {
            //===> Get Value <===//
            let button = clicked.target,
                value  = button.getAttribute('data-value');

            //===> Return Options <===//
            return onChange(value);
        }

        //===> Buttons Creator <===//
        const makeButtons = (list, prefix) => {
            let output = [];
            //===> for each item <===//
            for (let index = 0; index < list.length; index++) {
                //===> Get Value <===//
                const name = list[index];

                //===> Convert to Title <===//
                let title = list[index].replace('color-', '');
                    title = title.replace('-', ' ');

                //===> UpperCase Title <===//
                title = title.replace(/^\w/, function(c) {
                    return c.toUpperCase();
                });

                output.push(<li>
                    <button key={`${name}-${prefix}`} onClick={setColor} title={title} data-value={name} className={`reset-button fluid ${value === name ? 'px-active' : null}`}>'
                        <span className={`${name.replace('color-','bg-')} radius-circle me-10 inline-block border-1 border-solid border-alpha-10`} style={{width:"20px", height: "20px"}}></span> {name}
                    </button>
                 </li>);
            }

            //===> Return Buttons <===//
            return output;
        }

        //===> Component Output <===//
        return (
            <div className='px-gb-component'>
                {/*===> new Colors Component */}
                <div class="px-dropdown mb-15 px-colors-dropdown">
                    {/* <!-- Toggle Button --> */}
                    <button class="px-toggle btn small primary">
                        Change Color <i class="ms-5 fas fa-angle-down"></i>
                    </button>
                    {/* <!-- Dropdown Target --> */}
                    <ul class="px-dropdown-list reset-list bg-white fs-14 w-min-200">
                        {makeButtons(pxPallete.main, 'main')}
                        {/* Brands */}
                        {makeButtons(pxPallete.brands, 'brands')}
                    </ul>
                    {/* <!-- // Dropdown Target --> */}
                </div>
                {Phenix(".px-colors-dropdown").dropdown()}
                {/*===> End Component <===*/}
            </div>
        )
    }
}