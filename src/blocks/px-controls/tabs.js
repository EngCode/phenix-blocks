/*
 * ===> 01 - WordPress Modules
 * ===> 02 - Phenix Background
 * ===> 03 - Buttons Creator
 * ===> 04 - Component Output
*/

//===> WordPress Modules <===//
import { __ } from '@wordpress/i18n';
import React, { useState } from '@wordpress/element';

//===> Phenix Background <===//
const ScreensTabs = (props) => {
    //===> States <===//
    const [screen, setScreen] = props.xs ? useState("xs") : props.sm ? useState("sm") : useState("md");

    //===> Tab Buttons <====//
    const buttons = {
        opts: ["xs", "sm", "md", "lg", "xl"],
        classes: "btn square tiny col far",
        xs: {key:"mobile-alt", title: __("Mobile Screens", "pds-blocks")},
        sm: {key:"mobile", title: __("Mobile Medium", "pds-blocks")},
        md: {key:"tablet", title: __("Tablet Screens", "pds-blocks")},
        lg: {key:"laptop", title: __("Desktop Screens", "pds-blocks")},
        xl: {key:"desktop", title: __("xLarge Screens", "pds-blocks")},
    };

    //===> Render <===//
    return(
        <div className='px-gb-tabs'>
            {/*===> Tabs Buttons <===*/}
            <div className='options-tabs px-group borderd-group divider-b border-alpha-15 mb-10' style={{"--radius": 0}}>
                {buttons.opts.map((opt) => {
                    if (props[opt]) {
                        return <button key={buttons[opt].key} onClick={() => setScreen(opt)} className={`${buttons.classes} ${screen !== opt ? "bg-alpha-05" : "primary"} fa-${buttons[opt].key}`} title={buttons[opt].title} data-options={opt}></button>
                    }
                })}
            </div>
            {/*===> Screen <====*/}
            <div className={`${screen}-options`}>{props[screen] && props[screen](screen)}</div>
        </div>
    );
};

export default ScreensTabs;