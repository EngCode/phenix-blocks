//====> WP Modules <====//
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { useEffect } from '@wordpress/element';

import {
    PanelBody,
    TextControl,
    ToggleControl
} from '@wordpress/components';

import {
    useBlockProps,
    InspectorControls,
} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import MediaUploader from '../px-controls/uploader';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Attributes <===//
    const set_size = size => setAttributes({ size });
    const set_width = width => setAttributes({ width });
    const set_responsive = responsive => setAttributes({ responsive });
    const set_use_fevicon = use_fevicon => setAttributes({ use_fevicon });
    const set_mobile_logo = mobile_logo => setAttributes({ mobile_logo: mobile_logo.url });

    //===> Set Logo <===//
    const set_logo = value => setAttributes({ logo: value.url, logo_id: value.id });

    //===> Set Fevicon <===//
    const set_fevicon = value => setAttributes({ fevicon: value.url, favicon_id: value.id });

    //===> Set Site Logo <===//
    const set_site_logo = clicked => {
        //===> Add Loading Mode <===//
        clicked.target.classList.add('px-loading');

        //===> Set Fevicon in Settings <===//
        apiFetch( {
            path: '/wp/v2/settings',
            method: 'POST',
            data: { site_icon : attributes.favicon_id },
        }).then(respond => clicked.target.classList.remove('px-loading'));
        
        //===> Set Logo in Settings <===//
        apiFetch( {
            method: 'POST',
            path: '/wp/v2/settings',
            data: { site_logo : attributes.logo_id },
        }).then(respond => clicked.target.classList.remove('px-loading'));
    };

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();

    //===> Accessibility Fallback <===//
    useEffect(() => {
        //===> Fetch Site Title and Link <===//
        apiFetch({path: 'wp/v2/settings'}).then(Response => {
            //===> Set Options <===//
            if(Response.title !== attributes.site_title) setAttributes({site_title: Response.title});
            if(Response.url & Response.url !== attributes.site_link) setAttributes({site_link: Response.url});
        });
    }, []);

    //===> Add Properties <===//
    blockProps["title"] = attributes.site_title;
    blockProps["href"]  = attributes.site_link;
    blockProps.className += ' inline-block';

    //===> Render <===//
    return (<>
        {/* //====> Controls Layout <====// */}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="Logo Setting" initialOpen={true}>
                {/*===> Group <===*/}
                <div className='row gpx-10 mb-10'>
                    {/*===> Column <===*/}
                    <div className='col-5'>
                        {/* Size */}
                        <TextControl label={__("Size (Height)","pds-blocks")} value={attributes.size} onChange={set_size}></TextControl>
                    </div>
                    {/*===> Column <===*/}
                    <div className='col-7'>
                        {/* Size */}
                        <TextControl label={__("Width (Optional)","pds-blocks")} value={attributes.width} onChange={set_width}></TextControl>
                    </div>
                </div>

                {/* Logo */}
                <MediaUploader label={__("Upload Logo","pds-blocks")} value={attributes.logo} setValue={set_logo} size="small" className="mb-15"></MediaUploader>

                {/* Fevicon */}
                <MediaUploader label={__("Upload Favicon","pds-blocks")} value={attributes.fevicon} setValue={set_fevicon} size="small" className="mb-15"></MediaUploader>

                {/*=== Responsive ===*/}
                <ToggleControl label={__("Responsive Logo","pds-blocks")} checked={attributes.responsive} onChange={set_responsive}/>

                {/*=== Responsive [...] ===*/}
                {attributes.responsive ? <>
                    <ToggleControl label="Use Favicon for Mobile" checked={attributes.use_fevicon} onChange={set_use_fevicon}/>
                    {/* Fevicon */}
                    {!attributes.use_fevicon ? <MediaUploader label="Upload Mobile Logo" value={attributes.mobile_logo} setValue={set_mobile_logo} size="small"></MediaUploader> : null}
                </> : null}

                {/*=== Button ===*/}
                <button type='button' className='tx-uppercase btn fluid tiny fs-12 mt-5 primary radius-sm' onClick={set_site_logo}>{__("Update Site Logo", "pds-blocks")}</button>
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        {attributes.preview ?  <img src={PreviewImage} alt="" className='fluid' /> :<a { ...blockProps }>
            <img src={attributes.logo} className={attributes.responsive ? 'hidden-md-down' : ''} alt={blockProps.title} style={{ "maxHeight": `${parseInt(attributes.size)}px` }} width={parseInt(attributes.width) ? parseInt(attributes.width) : null} height={parseInt(attributes.size)} />
            {attributes.responsive ?  <img src={attributes.use_fevicon ? attributes.fevicon : attributes.mobile_logo} className='hidden-lg-up' alt={blockProps.title} style={{ "height": attributes.size }} width={parseInt(attributes.size)} height={parseInt(attributes.size)}/> : null}
        </a>}
    </>);
}