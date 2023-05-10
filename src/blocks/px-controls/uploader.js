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
            type,
            setValue,
            className,
        } = this.props;

        //===> Output <===//
        return (<>
            <MediaUpload onSelect={ setValue } value={value} render={({open}) => (
                    <div className="mouse-pointer" onClick={open}>
                        {/* label */}
                        {label ? <label className="mb-5">{label}</label> : ''}
                        {/* elements group */}
                        <div className={`${className ? `${className}` : ""}`}>
                            {size === 'small' ?
                                <div className='flexbox align-center-y align-between pd-5 border-solid border-1 border-alpha-15 radius-sm'>
                                    {!type || type === 'image' ? <img src={value} style={{"maxHeight": "1.5rem"}} /> : null}
                                    <button key="change-media" onClick={open} className="btn square primary tiny radius-sm fs-12 fas fa-upload"></button>
                                </div>
                                :
                                <div className='flexbox align-center-y align-between'>
                                    {!type || type === 'image' ? <img src={value} className="radius-sm radius-top" style={{"maxWidth": "100%", "display": "block"}} /> : null}
                                    <button key="change-media" onClick={open} className="btn fluid primary small radius-sm radius-bottom fs-13 far fa-camera btn-icon">Select File</button>
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