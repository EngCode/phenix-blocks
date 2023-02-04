//====> WP Modules <====//
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
import MediaUploader from '../px-controls/media-uploader';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Set Attributes <===//
    const set_size = size => setAttributes({ size });
    const set_responsive = responsive => setAttributes({ responsive });
    const set_use_fevicon = use_fevicon => setAttributes({ use_fevicon });
    const set_mobile_logo = mobile_logo => setAttributes({ mobile_logo: mobile_logo.url });

    //===> Set Logo <===//
    const set_logo = value => {
        //===> Set Attribute <===//
        setAttributes({ logo: value.url })
        //===> Set Fevicon in Settings <===//
        apiFetch( {
            method: 'POST',
            path: '/wp/v2/settings',
            data: { site_logo : value.id },
        });
    }

    //===> Set Fevicon <===//
    const set_fevicon = value => {
        //===> Set Attribute <===//
        setAttributes({ fevicon: value.url })
        //===> Set Fevicon in Settings <===//
        apiFetch( {
            path: '/wp/v2/settings',
            method: 'POST',
            data: { site_icon : value.id },
        });
    };

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();

    //===> if the Title not Set <===//
    useEffect(() => {
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
                {/* Size */}
                <TextControl label="Logo Size" value={attributes.size} onChange={set_size}></TextControl>
                {/* Divider */}
                <span className='display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
                {/* Logo */}
                <MediaUploader label="Upload Logo" value={attributes.logo} setValue={set_logo} size="small"></MediaUploader>
                {/* Divider */}
                <span className='display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
                {/* Fevicon */}
                <MediaUploader label="Upload Fevicon" value={attributes.fevicon} setValue={set_fevicon} size="small"></MediaUploader>
                {/* Divider */}
                <span className='display-block border-alpha-05 bg-alpha-05 col-12 mb-15 mt-5 divider-t'></span>
                {/*=== Responsive ===*/}
                <ToggleControl label="Responsive Logo" checked={attributes.responsive} onChange={set_responsive}/>
                {/*=== Responsive [...] ===*/}
                {attributes.responsive ? <>
                    <ToggleControl label="Use Favicon for Mobile" checked={attributes.use_fevicon} onChange={set_use_fevicon}/>
                    {/* Fevicon */}
                    {!attributes.use_fevicon ? <MediaUploader label="Upload Mobile Logo" value={attributes.mobile_logo} setValue={set_mobile_logo} size="small"></MediaUploader> : null}
                </> : null}
            </PanelBody>
            {/*===> End Widgets Panels <===*/}
        </InspectorControls>

        {/* //====> Edit Layout <====// */}
        <a { ...blockProps }>
            <img src={attributes.logo} className={attributes.responsive ? 'hidden-md-down' : ''} alt={blockProps.title} style={{ "height": attributes.size }} />
            {attributes.responsive ?  <img src={attributes.use_fevicon ? attributes.fevicon : attributes.mobile_logo} className='hidden-lg-up' alt={blockProps.title} style={{ "height": attributes.size }} /> : null}
        </a>
    </>);
}