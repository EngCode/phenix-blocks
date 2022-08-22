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
                "color-secondary",
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
        const makeButtons = (list) => {
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

                output.push(<button onClick={setColor} title={title} data-value={name} className={`${name.replace('color-','bg-')} btn square tiny radius-circle border-1 border-solid border-alpha-25 mb-10 me-10 ${value === name ? 'px-active' : null}`}></button>);
            }

            //===> Return Buttons <===//
            return output;
        }

        //===> Component Output <===//
        return (
            <div className='px-gb-component'>
                {/*===> Label <===*/}
                <label className='mb-10'>Select Color</label>
                {/*===> Background <===*/}
                <div className='flexbox options-list'>
                    {makeButtons(pxPallete.main)}
                    {/* Divider */}
                    <span className='border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
                    {/* Brands */}
                    {makeButtons(pxPallete.brands)}
                </div>
                {/*===> End Component <===*/}
            </div>
        )
    }
}