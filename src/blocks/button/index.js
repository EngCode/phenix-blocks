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
import {registerBlockType} from '@wordpress/blocks';
import {useBlockProps} from '@wordpress/block-editor';

//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg xmlns="http://www.w3.org/2000/svg" width="254" height="254" viewBox="0 0 254 254"><g id="button" transform="translate(4296 3460)"><rect id="base" width="254" height="254" transform="translate(-4296 -3460)" fill="#fff"/><path id="server" d="M169.554,32H24.222A24.222,24.222,0,0,0,0,56.222V80.444a24.222,24.222,0,0,0,24.222,24.222H169.554a24.222,24.222,0,0,0,24.222-24.222V56.222A24.232,24.232,0,0,0,169.554,32Zm12.111,48.444a12.127,12.127,0,0,1-12.111,12.111H24.222A12.137,12.137,0,0,1,12.111,80.444V56.222A12.127,12.127,0,0,1,24.222,44.111H169.554a12.127,12.127,0,0,1,12.111,12.111ZM117.326,59.25a9.083,9.083,0,1,0,9.083,9.083A9.083,9.083,0,0,0,117.326,59.25Zm-36.333,0a9.083,9.083,0,1,0,9.083,9.083A9.083,9.083,0,0,0,80.992,59.25Z" transform="translate(-4265.888 -3453.554)"/><path id="server-2" data-name="server" d="M181.665,91.045H12.111A12.137,12.137,0,0,0,0,103.156V151.6a12.137,12.137,0,0,0,12.111,12.111H181.665A12.137,12.137,0,0,0,193.776,151.6V103.156A12.147,12.147,0,0,0,181.665,91.045Zm-118.6,42.9V120.614h69.395v13.328Z" transform="translate(-4265.889 -3415.711)"/></g></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const screens = ["-md", "-lg", "-xl"];
        const blockProps = useBlockProps.save();

        //===> General Options <===//
        if (attributes.size) blockProps.className += ` ${attributes.size}`;
        if (attributes.radius) blockProps.className += ` ${attributes.radius}`;
        if (attributes.outline) blockProps.className += ` ${attributes.outline}`;
        if (attributes.type) {
            blockProps.className += ` ${attributes.type.replace('normal', 'btn')}`;
            if (attributes.type !== "btn" && attributes.icon) blockProps.className+= ` ${attributes.icon}`;
        }

        if (attributes.isLink) {
            blockProps['href'] = attributes.url;
            blockProps['rel']  = "noopener";
            if (attributes.inNewTab) blockProps['target'] = "_blank";
        }

        //===> Style Options <===//
        if (attributes.style || attributes.typography?.color) {
            //===> Effects <===//
            if (attributes.style?.radius) blockProps.className += ` ${attributes.style.radius}`;
            if (attributes.style?.overlapped) blockProps.className += ` ${attributes.style.overlapped}`;
            if (attributes.style['icon-large']) blockProps.className += ` ${attributes.style['icon-large']}`;
            if (attributes.style['fix-lineheight']) blockProps.className += ` ${attributes.style['fix-lineheight']}`;
            if (attributes.style?.display) blockProps.className += ` ${attributes.style.display.toString().replace(',', ' ')}`;

            //===> Text Color <===//
            if(attributes.typography?.color) blockProps.className += ` ${attributes.typography.color}`;

            //===> Render Background <===//
            if (attributes.style?.background?.value) {
                //===> Adjust Primary Colors <===//
                let isPrimary = false,
                    primaryColors = ["bg-primary", "bg-secondary", "bg-gray", "bg-dark", "bg-white", "bg-success", "bg-danger", "bg-warning", "bg-info"];

                    //===> Correct Colors <===//
                    primaryColors.forEach(color => attributes.style.background.value === color ? isPrimary = true : null);

                    //===> Set the Background <===//
                    if (isPrimary) {
                        blockProps.className += ` ${attributes.style.background.value.replace('bg-', '')}`;
                    } else {
                        blockProps.className += ` ${attributes.style.background.value}`;
                    }

                //===> Background Rotation <===//
                if (attributes.style.background.rotate) blockProps.className += ` ${attributes.style.background.rotate}`;
            }

            //===> Position <===//
            if (attributes.style?.position) {
                //===> if its Absolute Sticky <===//
                if (attributes.style.position === "sticky-absolute") {
                    blockProps["data-sticky"] = ` ${attributes.style.position}`;
                    blockProps.className += ` position-rv fluid z-index-header`;
                }
                //===> Otherwise is Class Name <===//
                else {
                    blockProps.className += ` ${attributes.style.position}`;
                }
            }
        }

        //===> Typography Options <===//
        if (attributes.typography) {
            if(attributes.typography.size) blockProps.className += ` ${attributes.typography.size.toString().replace(',', ' ')}`;
            if(attributes.typography.weight) blockProps.className += ` ${attributes.typography.weight}`;
            if(attributes.typography.align) blockProps.className += ` ${attributes.typography.align}`;
            //===> Responsive <===//
            screens.forEach(screen => {
                if (attributes.typography[`size${screen}`]) blockProps.className += ` ${attributes.typography[`size${screen}`]}`;
                if (attributes.typography[`align${screen}`]) blockProps.className += ` ${attributes.typography[`align${screen}`]}`;
            });
        }

        //===> Responsive Options <===//
        if (attributes.responsive) screens.forEach(screen => {
            if (attributes.responsive[`size${screen}`]) blockProps.className += ` ${attributes.responsive[`size${screen}`]}`;
        });

        //===> Set Custom Data <===//
        if (attributes.data_modal) blockProps['data-modal'] = attributes.data_modal;

        if (attributes.data_id) {
            blockProps['data-id'] = attributes.data_id;
            blockProps.className += ' menu-toggle';
        }

        if (attributes.isLightBox) {
            blockProps['href'] = attributes.url;
            blockProps.className += ' px-lightbox';
            if (attributes.lightbox_type) blockProps['data-media'] = attributes.lightbox_type;
        }

        //===> Rendered Element <===//
        let renderedElement = <button { ...blockProps }>{!attributes.type.includes("square") ? attributes.label : ""}</button>;
        if (attributes.isLink) renderedElement = <a { ...blockProps }>{!attributes.type.includes("square") ? attributes.label : ''}</a>;

        //===> Render <===//
        return (<>{renderedElement}</>);
    }
});