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
import {InnerBlocks, useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';

//===> Register Block <===//
registerBlockType(metadata, {
    icon : <svg fill="none" viewBox="0 0 35 35"><path fill="#000" d="M32.949 16.512a1 1 0 102 0h-2zm-19.715 11.16l.875-.485a1 1 0 00-.875-.515v1zm3.101 5.591l-.875.485.875-.485zm2.307 0l.875.485-.875-.485zm3.101-5.591v-1a1 1 0 00-.874.515l.874.485zm13.206-4.185a1 1 0 00-2 0h2zm-8.672-8.137a1 1 0 000-2v2zm-17.576-2a1 1 0 100 2v-2zm9.904 7.58a1 1 0 000-2v2zm-9.904-2a1 1 0 000 2v-2zM33.949 7.678a1 1 0 000-2v2zm-32.92-2a1 1 0 000 2v-2zm33.92 10.834V3.818h-2v12.694h2zm0-12.694a3.79 3.79 0 00-3.79-3.79v2c.989 0 1.79.802 1.79 1.79h2zm-3.79-3.79H3.819v2h27.34v-2zm-27.34 0a3.79 3.79 0 00-3.79 3.79h2c0-.988.8-1.79 1.79-1.79v-2zm-3.79 3.79v19.669h2V3.818h-2zm0 19.669a5.185 5.185 0 005.184 5.185v-2a3.185 3.185 0 01-3.184-3.185h-2zm5.184 5.185h8.021v-2h-8.02v2zm7.147-.515l3.1 5.591 1.75-.97-3.101-5.591-1.75.97zm3.1 5.591c.884 1.593 3.174 1.593 4.057 0l-1.75-.97a.32.32 0 01-.557 0l-1.75.97zm4.057 0l3.1-5.591-1.748-.97-3.101 5.591 1.749.97zm2.226-5.076h8.021v-2h-8.02v2zm8.021 0a5.185 5.185 0 005.185-5.185h-2a3.185 3.185 0 01-3.185 3.185v2zM26.277 13.35H8.7v2h17.576v-2zm-7.672 5.58H8.7v2h9.904v-2zM33.949 5.678H1.029v2h32.92v-2zm.93-1.86a3.79 3.79 0 00-3.79-3.79v2c.989 0 1.79.802 1.79 1.79h2zM31.09.028a3.79 3.79 0 00-3.79 3.79h2c0-.988.802-1.79 1.79-1.79v-2zm-3.79 3.79a3.79 3.79 0 003.79 3.79v-2a1.79 1.79 0 01-1.79-1.79h-2zm3.79 3.79a3.79 3.79 0 003.79-3.79h-2a1.79 1.79 0 01-1.79 1.79v2zm-1.79-3.79a3.79 3.79 0 00-3.79-3.79v2c.989 0 1.79.802 1.79 1.79h2zM25.51.028a3.79 3.79 0 00-3.79 3.79h2c0-.988.802-1.79 1.79-1.79v-2zm-3.79 3.79a3.79 3.79 0 003.79 3.79v-2a1.79 1.79 0 01-1.79-1.79h-2zm3.79 3.79a3.79 3.79 0 003.79-3.79h-2a1.79 1.79 0 01-1.79 1.79v2z"/></svg>,

    /**===> @see ./edit.js <===*/
    edit : Edit,

    /**===> Block Output <===*/
    save : ({ attributes }) => {
        //===> Get Block Properties <===//
        const blockProps = useBlockProps.save();

        //===> Modal Settings <===//
        blockProps.className += ` px-modal hidden`;
        if(attributes.id) blockProps.id = attributes.id;

        //===> Rendering Checkers <===//
        const isObjectVal = (option_value) => {return typeof option_value === 'object'},
            isBooleanVal = (option_value) => {return typeof option_value === 'boolean'},
            isNormalValue = (option_value) => {return typeof option_value === 'string' || typeof option_value === 'number' || typeof option_value === 'array'};

        //===> Rendering Options <===//
        Object.entries(attributes).forEach(([option_name, option_value]) => {
            //===> Exclude Options <===//
            const excluded = ["tagName", "className", "align"];
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
                //===> Flexbox Props <===//
                if(option_name === "flexbox") return;
                //===> loop on the Object Options <===//
                Object.entries(option_value).forEach(([sub_option, sub_value]) => {
                    //===> Check if the attribute is Set <===//
                    if (!attributes[option_name][sub_option]) return;

                    //===> if its a Object Value <===//
                    if (!isNormalValue(sub_value)) {
                        //===> Animations Specials <===//
                        if (sub_option === "animation" && sub_value.name) {
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
                        //===> Display Support <===//
                        else if (sub_option === "display") blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;
                    }

                    //===> for Normal strings and Arrays <===//
                    else if (isNormalValue(sub_value)) {
                        //===> Postion Absolute Sticky <===//
                        if (sub_option === "position" && sub_value === "sticky-absolute") {blockProps["data-sticky"] = `${sub_value}`;}
                        //===> Settings Values <===//
                        else if (option_name === "setting") {blockProps[`data-${sub_option}`] = sub_value;}
                        //===> Padding Values <===//
                        else if (sub_option.includes('pdt') || sub_option.includes('pds') || sub_option.includes('pde') || sub_option.includes('pdb')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                        //===> Margin Values <===//
                        else if (sub_option.includes('mt') || sub_option.includes('ms') || sub_option.includes('me') || sub_option.includes('mb')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                        //===> Positions Values <===//
                        else if (sub_option.includes('pos-')) { blockProps.className += ` ${sub_option}-${sub_value}`; }
                        //===> Layout Gap <===//
                        else if (sub_option.includes('gpx') || sub_option.includes('gpy') && !sub_option.includes('gpy-fix')) { innerBlocksProps.className += ` ${sub_option}-${sub_value}`; }
                        //===> Other Values <===//
                        else {blockProps.className += ` ${sub_value.toString().replace(',', ' ').trim()}`;}
                    };
                });
            };
        });

        //===> Render <===//
        return (<div {...blockProps}>
            <div className='modal-content col'>
                <InnerBlocks.Content />
            </div>
        </div>);
    }
});