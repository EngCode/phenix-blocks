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
        const {
            label,
            value,
            size,
            setValue
        } = this.props;

        //===> Output <===//
        return (<>
            <MediaUpload onSelect={ setValue } value={value} render={({open}) => (
                    <div class="mb-15 cursor-pointer" onClick={open}>
                        {/* label */}
                        {label ? <label className="mb-10">{label}</label> : ''}
                        {/* elements group */}
                        <div className="flexbox align-center-y align-between">
                            {size === 'small' ?
                                <>
                                    <img src={value} style={{"max-height": "2.25rem"}} />
                                    <button onClick={open} class="btn square primary small radius-sm fs-12 fas fa-upload"></button>
                                </>
                                :
                                <>
                                    <img src={value} className="radius-sm radius-top" style={{"max-width": "100%", "display": "block"}} />
                                    <button onClick={open} class="btn fluid primary small radius-sm radius-bottom fs-13 far fa-camera btn-icon">Select Image</button>
                                </>
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