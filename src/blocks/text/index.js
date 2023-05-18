/*
 * ===> 01 - Block Data
 * ===> 02 - WordPress Modules
 * ===> 03 - Register Block
 * ===> 03 - Block Save Mode [Output]
*/

//===> Modules <===//
import Edit from './edit';
import {__} from '@wordpress/i18n';
import metadata from './block.json';
import {registerBlockType} from '@wordpress/blocks';
import {RichText, InnerBlocks, useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg fill="none" viewBox="0 0 32 20"><path fill="#1E252B" d="M32 1.18V.132h-4.507V1.18h1.73v17.64h-1.73v1.048H32V18.82h-1.73V1.18H32zM.194 15.601L5.47 3.69c.368-.822 1.038-1.32 1.946-1.32h.194c.908 0 1.557.498 1.924 1.32L14.81 15.6c.108.238.173.454.173.67 0 .887-.692 1.6-1.578 1.6-.779 0-1.298-.453-1.6-1.145l-1.016-2.378h-6.66L3.07 16.834c-.281.648-.843 1.038-1.535 1.038C.67 17.872 0 17.18 0 16.315c0-.238.086-.476.194-.714zm9.362-4.194L7.46 6.413l-2.097 4.994h4.194zm7.004 2.962v.043c0 2.292 1.795 3.546 3.979 3.546 1.6 0 2.702-.584 3.502-1.47v.021c0 .692.627 1.363 1.578 1.363.887 0 1.6-.692 1.6-1.579v-5.275c0-1.557-.389-2.833-1.254-3.697-.821-.822-2.119-1.297-3.913-1.297-1.535 0-2.66.216-3.697.605a1.362 1.362 0 00-.886 1.276c0 .756.605 1.34 1.361 1.34.152 0 .282-.022.476-.086a7.534 7.534 0 012.27-.325c1.644 0 2.487.757 2.487 2.12v.194a8.235 8.235 0 00-2.833-.476c-2.745 0-4.67 1.167-4.67 3.697zm7.546-1.297v.584c0 1.189-1.038 2.032-2.573 2.032-1.06 0-1.794-.519-1.794-1.405v-.044c0-1.038.864-1.6 2.27-1.6.8 0 1.535.173 2.097.433z"/></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const blockProps = useBlockProps.save();
        const TagName = attributes.tagName;

        //===> Rendering Checkers <===//
        const isObjectVal = (option_value) => {return typeof option_value === 'object'},
            isBooleanVal = (option_value) => {return typeof option_value === 'boolean'},
            isNormalValue = (option_value) => {return typeof option_value === 'string' || typeof option_value === 'number' || typeof option_value === 'array'};

        //===> Rendering Options <===//
        Object.entries(attributes).forEach(([option_name, option_value]) => {
            //===> Exclude Options <===//
            const excluded = ["tagName", "className", "align", "content"];
            if (excluded.some(opt => opt === option_name)) return;

            //===> if its a Normal Values that should be string <===//
            if (isNormalValue(option_value) && attributes[option_name]) {
                //===> ID <===//
                if (option_name === "id") blockProps['id'] = attributes[option_name];
                //===> Other Options <===//
                else if (attributes[option_name]) {
                    blockProps.className += ` ${attributes[option_name].toString().replace(',', ' ').trim()}`;
                };
            }

            //===> if its object[group] Option like [style, typography, responsive] <===//
            else if (isObjectVal(option_value) && attributes[option_name]) {
                //===> loop on the Object Options <===//
                Object.entries(option_value).forEach(([sub_option, sub_value]) => {
                    //===> Check if the attribute is Set <===//
                    if (!attributes[option_name][sub_option]) return;

                    //===> if its a Object Value <===//
                    if (!isNormalValue(sub_value)) {
                        //===> Background Specials <===//
                        if (sub_option === "background" && sub_value.value) {
                            //===> Image Background <===//
                            if (attributes.style.background.type === 'image') {
                                blockProps.className += ` px-media`;
                                blockProps["data-src"] = attributes.style.background.value;
                            }
                            //===> Name Background <===//
                            else {
                                blockProps['style'] = null; blockProps['data-src'] = null;
                                blockProps.className += ` ${attributes.style.background.value}`;
                            }
                            //===> Background Rotation <===//
                            if (sub_value.rotate) blockProps.className += ` ${sub_value.rotate}`;
                        }
                        //===> Animations Specials <===//
                        else if (sub_option === "animation" && sub_value.name) {
                            blockProps['data-animation'] = sub_value.name;
                            sub_value.group && (blockProps['data-lazy-group'] = 1);
                            sub_value.delay && (blockProps['data-delay'] = sub_value.delay);
                            sub_value.reverse && (blockProps['data-flow'] = sub_value.reverse);
                            sub_value.offset && (blockProps['data-offset'] = sub_value.offset);
                            sub_value.duration && (blockProps['data-duration'] = sub_value.duration);
                            sub_value['exit-name'] && (blockProps['data-animation-exit'] = sub_value['exit-name']);
                        }
                        //===> Styles Support <===//
                        else if (sub_option === "support") {
                            sub_value.forEach(property => !property.includes('enable-') ? blockProps.className += ` ${property}` : null);
                        }
                        //===> Has Icon <===//
                        else if (sub_option === "hasIcon") blockProps.className += ` tx-icon`;
                        //===> Display Support <===//
                        else if (sub_option === "display") blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;
                    }

                    //===> for Normal strings and Arrays <===//
                    else if (isNormalValue(sub_value)) {
                        //===> .for Icon. <====//
                        if (sub_option.includes("icon") && !attributes.style.hasIcon) return;
                        //===> Postion Absolute Sticky <===//
                        if (sub_option === "position" && sub_value === "sticky-absolute") {blockProps["data-sticky"] = `${sub_value}`;}
                        //===> Padding Values <===//
                        else if (sub_option.includes('pdt') || sub_option.includes('pds') || sub_option.includes('pde') || sub_option.includes('pdb')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                        //===> Margin Values <===//
                        else if (sub_option.includes('mt') || sub_option.includes('ms') || sub_option.includes('me') || sub_option.includes('mb')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                        //===> Positions Values <===//
                        else if (sub_option.includes('pos-')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                        //===> Other Values <===//
                        else {blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;}
                    };
                });
            };
        });

        //===> Render <===//
        return (<>
            {attributes.type === "list" ?
                <RichText.Content {...blockProps} multiline="li" tagName={"ul"} value={attributes.content} />
                : 
                <RichText.Content {...blockProps} tagName={TagName} value={attributes.content} />
            }
        </>);
    }
});