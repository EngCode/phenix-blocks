/*
 * ===> 01 - Block Data
 * ===> 02 - WordPress Modules
 * ===> 03 - Register Block
 * ===> 03 - Block Save Mode [Output]
*/

//===> Block Data <===//
import Edit from './edit';
import metadata from './block.json';

//===> WordPress Modules <===//
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg fill="none" viewBox="0 0 32 32"><path fill="#1E1E1E" d="M16 0C7.067 0 0 7.067 0 16s7.067 16 16 16 16-7.067 16-16S24.933 0 16 0zm0 2.667c7.333 0 13.333 6 13.333 13.333v.133c-2.533-1.466-5.866-3.066-6-3.2-.4-.133-.933-.133-1.466.134l-5.2 3.733-6-2c-.4-.133-.667 0-1.067.133L3.067 18.8c-.134-.933-.4-1.733-.4-2.667 0-7.466 6-13.466 13.333-13.466zm0 26.666c-5.467 0-10.133-3.333-12.267-8l6.534-3.866 6.266 2.133c.4.133.934 0 1.2-.133l5.2-3.734c1.467.667 4.4 2.134 6.267 3.334-1.6 5.866-6.933 10.266-13.2 10.266z"/></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const toREM = (size, base = 16) => `${(parseFloat(size) / base)}rem`;
        const siteUrl = attributes.site_link,
              blockProps = useBlockProps.save();

            //===> Add Properties <===//
            blockProps["href"] = siteUrl || "#none";
            blockProps["title"] = attributes.site_title;
            blockProps.className += ' inline-block';

        //===> Render <===//
        return (
            <a { ...blockProps }>
                <img src={attributes.logo} className={attributes.responsive ? 'hidden-md-down' : ''} alt={blockProps.title} style={{ "width": `${parseInt(attributes.width) ? parseInt(attributes.width) : 'auto'}`, "height": `${toREM(attributes.size)}` }} />
                {attributes.responsive ?  <img src={attributes.use_fevicon ? attributes.fevicon : attributes.mobile_logo} className='hidden-lg-up' alt={blockProps.title} style={{ "width": `${parseInt(attributes.size)}`, "height": `${toREM(attributes.size)}` }} /> : null}
            </a>
        );
    }
});