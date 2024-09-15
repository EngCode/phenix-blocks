/*
 * ===> 01 - Import Assets
 * ===> 02 - Import Block Functions
 * ===> 03 - Register Block
*/

//===> WordPress Modules <===//
import {MediaUpload} from '@wordpress/block-editor';
import {Component} from '@wordpress/element';

//===> Media Uploader <===//
export default class MediaUploader extends Component {
    render () {
        //===> Properties <===//
        const { label, value, size, type, setValue, className } = this.props;
        const largeImage = (src) => <img src={src} className="radius-sm radius-top" style={{"maxWidth": "100%", "display": "block"}} /> ;
        const smallImage = (src) => <img src={src} style={{"maxHeight": "1.5rem"}} />;
        const largePlaceholder = "https://placehold.co/600x400/1c1c1c/CCC?text=Change%20Source";
        const smallPlaceholder = "https://placehold.co/200x75/1c1c1c/CCC?text=Change%20Source";

        //===> Output <===//
        return (<>
            <MediaUpload onSelect={ setValue } value={value} render={({open}) => (
                    <div className="mouse-pointer" onClick={open}>
                        {/* label */}
                        {label ? <label className="mb-5">{label}</label> : ''}
                        {/* elements group */}
                        <div className={`${className ? `${className}` : ""} mouse-no-events`}>
                            {size === 'small' ?
                                <div className='flexbox align-center-y align-between pd-5 border-solid border-1 border-alpha-15 radius-sm'>
                                    {!type || type === 'image' ? smallImage(value || smallPlaceholder) : smallImage(smallPlaceholder)}
                                    <span key="change-media" className="btn square primary tiny radius-sm fs-12 fas fa-upload"></span>
                                </div>
                                :
                                <div className='flexbox align-center-y align-between'>
                                    {!type || type === 'image' ? largeImage(value || largePlaceholder) : largeImage(largePlaceholder)}
                                    <span key="change-media" className="btn fluid primary small radius-sm radius-bottom fs-13 far fa-camera btn-icon">Select File</span>
                                </div>
                            }
                        </div>
                        {/* //elements group */}
                    </div>
                )}
            />
        </>
        )
    }
}