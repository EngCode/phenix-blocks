/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/

//===> WordPress Modules <===//
import {Component} from '@wordpress/element';
import MediaUploader from '../px-components/media-uploader';

//===> Phenix Background <===//
export default class PhenixBackground extends Component {
    //===> States <===//
    state = {
        main : [
            "bg-transparent",
            "bg-primary",
            "bg-secondary",
            "bg-secondary-dark",
            "bg-gray",
            "bg-dark",
            "bg-white",
            "bg-success",
            "bg-danger",
            "bg-warning",
            "bg-info",
            "bg-alpha-05",
            "bg-alpha-10",
            "bg-alpha-25",
            "bg-alpha-50",
            "bg-alpha-75",
        ],
        offwhite : [
            "bg-offwhite-primary",
            "bg-offwhite-secondary",
            "bg-offwhite-info",
            "bg-offwhite-success",
            "bg-ffwhite-danger",
            "bg-offwhite-warning",
            "bg-offwhite-smoke",
            "bg-offwhite-smoke",
            "bg-offwhite-gray",
            "bg-offwhite-snow",
            "bg-offwhite-snow",
            "bg-offwhite-honeydew",
            "bg-offwhite-mintcream",
            "bg-offwhite-aliceblue",
            "bg-offwhite-ghost",
            "bg-offwhite-seashell",
            "bg-offwhite-beige",
            "bg-offwhite-oldlace",
            "bg-offwhite-floral",
            "bg-offwhite-ivory",
            "bg-offwhite-antique",
            "bg-offwhite-linen",
            "bg-offwhite-lavenderblush"
        ],
        brands : [
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
            "bg-flicker"
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
            onChange
        } = this.props;

        //===> Returned Value <===//
        const options = {}

        //===> Type Activator <===//
        const activeBtn = (current) => type === current ?  'primary' : 'light';
        const activeTab = (current) => type === current ?  '' : 'hidden';

        //===> Set Background <===//
        const setBackground = clicked => {
            //===> Colors & Gradients <===//
            if (clicked.target) {
                //===> Get Value <===//
                let button   = clicked.target,
                    btnType  = button.getAttribute('data-type'),
                    btnValue = button.getAttribute('data-value');
    
                //===> Rotate Gradient <===//
                if (btnType === 'rotate') {
                    //===> Clear Exisitng Directions <===//
                    let current = options.value,
                        saved   = value.replaceAll('   ', '');
    
                    //===> Clear Exisitng Directions <===//
                    this.state.rotation.forEach(name => {
                        if (name !== btnValue) {
                            saved = saved.replaceAll(name, '').replaceAll(' n','');
                            if (current) options.value = current.replaceAll(name, '').replaceAll(' n','');
                        };
                    });
    
                    //===> Set New Direction <===//
                    options.type     = 'gradient';
                    options.value    = saved;
                    options.rotation = btnValue;
                } else {
                    //===> Set Background <===//
                    options.type  = btnType;
                    options.value = btnValue;
                    options.rotation = null;
                }
            }
            //===> Image Type <===//
            else {
                //===> Set New Direction <===//
                options.type  = 'image';
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

                //===> Convert to Title <===//
                let title = list[index].replace('bg-', '');
                    title = title.replace('-', ' ');
                    title = title.replace('grade', '');

                //===> UpperCase Title <===//
                title = title.replace(/^\w/, function(c) {
                    return c.toUpperCase();
                });

                output.push(<button onClick={setBackground} title={title} data-value={name} data-type={type} className={`${name} btn square tiny radius-circle border-1 border-solid border-alpha-25 mb-10 me-10 ${value.includes(name) ? 'px-active' : ''}`}></button>);
            }

            //===> Return Buttons <===//
            return output;
        }

        //===> Icons Buttons <===//
        const makeRotations = (list, type) => {
            let output = [];
            //===> for each item <===//
            for (let index = 0; index < list.length; index++) {
                //===> Get Value <===//
                const name = list[index];

                //===> Rotation <===//
                let rotation = name.replace('bg-grade-', '');
                if (name.endsWith('n')) rotation = `-${rotation.slice(0,-1)}`;

                //===> Get Value <===//
                output.push(<button data-type={type} onClick={setBackground} data-value={name} className={`btn square tiny light ${value.includes(name) ? 'px-active' : ''}`}><i className='inline-block fas fa-arrow-to-bottom' style={{transform:`rotate(${rotation}deg)`}}></i></button>);
            }

            //===> Return Buttons <===//
            return output
        }

        //===> Options Changer <===//
        const changeTab = (clicked) => {
            //===> Option Data <===//
            let element = Phenix(clicked.target),
                parent  = element.ancestor('.options-tabs'),
                optionsList = Phenix(parent).next('.options-list'),
                currentActive = Phenix(parent.querySelector('.primary')),
                currentType = `${element[0].getAttribute('data-value')}-options`,
                targetElement = optionsList.querySelector(`.${currentType}`);

            //===> Change Active <===//
            currentActive.addClass('light').removeClass('primary');
            element.addClass('primary').removeClass('light');

            //===> Show Options <===//
            optionsList.querySelector('.flexbox:not(.hidden)')?.classList.add('hidden');
            Phenix(targetElement).removeClass('hidden');
        };

        //===> Component Design <===//
        return (
            <div className='px-gb-component'>
                {/*===> Background Types <===*/}
                <div className='options-tabs px-group borderd-group radius-sm border-1 border-solid border-alpha-10 mb-20'>
                    <button className={`btn tiny col ${activeBtn('color')}`} onClick={changeTab} data-value="color">Colors</button>
                    <button className={`btn tiny col ${activeBtn('gradient')}`} onClick={changeTab} data-value="gradient">Gradients</button>
                    <button className={`btn tiny col ${activeBtn('image')}`} onClick={changeTab} data-value="image">Image</button>
                    <button className={`btn tiny bg-offwhite-smoke col far fa-ellipsis-v`} style={{padding:'0 8px'}}></button>
                </div>

                {/*===> Background <===*/}
                <div className='options-list'>
                    {/*===> Colors <====*/}
                    <div className={`flexbox color-options ${activeTab('color')}`}>
                        {makeButtons(this.state.main, 'color')}
                        {/* Divider */}
                        <span className='display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
                        {/* Offwhite */}
                        {makeButtons(this.state.offwhite, 'color')}
                        {/* Divider */}
                        <span className='display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
                        {/* Brands */}
                        {makeButtons(this.state.brands, 'color')}
                    </div>
                    {/*===> Gradients <====*/}
                    <div className={`flexbox gradient-options ${activeTab('gradient')}`}>
                        {makeButtons(this.state.gradients, 'gradient')}
                        {/* Divider */}
                        <span className='display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
                        {/* Directions */}
                        <label className='mb-10 col-12'>Gradient Direction</label>
                        {/* .... */}
                        <div className='px-group icon-btns radius-sm border-1 border-solid border-alpha-10 borderd-group mb-10'>
                            {makeRotations(this.state.rotation, 'rotate')}
                        </div>
                    </div>
                    {/*===> Background <====*/}
                    <div className={`flexbox image-options ${activeTab('image')}`}>
                        <MediaUploader value={type !== 'image' ? this.state.placeholder : value} setValue={setBackground}></MediaUploader>
                    </div>
                </div>
                {/*===> End Component <===*/}
            </div>
        )
    }
}