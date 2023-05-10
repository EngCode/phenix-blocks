//====> WP Modules <====//
import { __ } from '@wordpress/i18n';
import {PanelBody} from '@wordpress/components';

import {
    InnerBlocks,
    useBlockProps,
    InspectorControls
} from '@wordpress/block-editor';

//====> Phenix Modules <====//
import PreviewImage from './preview.jpg';
import PhenixSelect from '../px-controls/select';
import OptionControl from '../px-controls/switch';

//====> Edit Mode <====//
export default function Edit({ attributes, setAttributes }) {
    //===> Value Handler <===//
    const valueHandler = (target) => {
        //===> Define Array Type <===//
        let single_val,
            array_val = [],
            type = target instanceof HTMLElement ? (target.getAttribute('type') || target.tagName) : null;

        //==> for Boolean Values <==//
        if (type === 'checkbox' || type === 'radio') {
            if (target.value === 'boolean') { single_val = target.checked; }
            else { single_val = target.checked ? target.value : ""; }
        }

        //===> for Value of Type Array <===//
        else if (type === "SELECT" && target.hasAttribute('multiple')) {
            //===> Get Multiple Value <===//
            let values = target.parentNode.getAttribute('data-value').split(',');
            //===> Get Current Values <===//
            values.forEach(val => val !== "" ? array_val.push(val) : null);
            //===> Set Array Value <===//
            single_val = array_val;
        }

        //===> for Normal Values <===//
        else if (type === null) { single_val = target; }

        //===> for Normal Values <===//
        else { single_val = target.value; }

        //===> Return Value <===//
        if(single_val) return single_val;
    };

    //==> Set Value Method <==//
    const set_logic = (target) => {
        //==> Get Current <==//
        const logic = attributes.logic;
        const name = target instanceof HTMLElement ? target.getAttribute('name') : null;

        //==> Add the Value <==//
        if (name) logic[`${name}`] = typeof(target) === "string" ? target : valueHandler(target);

        //==> Set Value <==//
        setAttributes({ logic : {...logic} });
    };

    //===> Get Block Properties <===//
    const blockProps = useBlockProps();

    const visibility_opts = [
        { label: __("All", "pds-blocks"), value: '' },
        { label: __("Users Only", "pds-blocks"), value: 'users-only' },
        { label: __("Visitors Only", "pds-blocks"), value: 'visitors-only' }
    ];

    //===> Render <===//
    return (<>
        {/*====> Controls Layout <====*/}
        <InspectorControls key="inspector">
            {/*===> Widget Panel <===*/}
            <PanelBody title="Logic Settings" initialOpen={true}>
                {/*===> Visibility Rule <===*/}
                <PhenixSelect key={`visibility`} name="visibility" placeholder={__("All", "pds-blocks")} label={__("Show Only For", "pds-blocks")} value={attributes.logic?.visibility} onChange={set_logic} options={visibility_opts} />

            </PanelBody>
        </InspectorControls>

        {/*====> Edit Layout <====*/}
        {attributes.preview ?  <img src={PreviewImage} alt="" className='fluid' /> :<div {...blockProps}>
            <InnerBlocks />
        </div>}
    </>);
}