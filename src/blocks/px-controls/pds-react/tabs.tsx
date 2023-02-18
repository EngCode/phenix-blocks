/* eslint-disable jsx-a11y/anchor-has-content */
//====> .Dependencies. <====//
import React, { useEffect } from 'react';

//====> PDS : Components <====//
import Button from './button';
declare function Phenix(any:any):any;

//===> Component Create <===//
export default function Tabs(props:{
    menu?:any;
    children?:any;
    className?:string;
}) {
    //===> Options <===//
    let attributes:any = {};

    //===> Initial Scripts <===//
    useEffect(() => {
        //===> Build Dropdown <===//
        Phenix(".px-tabs").tabs();
    }, []);

    //===> Render Component <===//
    return (<div className={`px-tabs ${props.className? props.className : null}`} data-active="0" data-navigation=".tabs-navigation">
        {/* <!-- Tabs Navigation --> */}
        <ul className="tabs-navigation reset-list flexbox">
            <li data-tab="tab-1" className="pdy-10 pdx-15 fs-14 bg-offwhite-gray color-gray">Tab #1</li>
            <li className="pdy-10 pdx-15 fs-14 bg-offwhite-gray color-gray">Tab #2</li>
            <li data-tab="tab-3" className="pdy-10 pdx-15 fs-14 bg-offwhite-gray color-gray">Tab #3</li>
        </ul>
        {/* <!-- Panels Group --> */}
        <div className="tabs-panels">
            {/* <!-- Panel --> */}
            <div className="tab-panel bg-white pd-20 mb-30" id="tab-1">This Tab Number 1 with ID of #tab-1</div>
            {/* <!-- Panel --> */}
            <div className="tab-panel bg-white pd-20 mb-30" id="tab-2">This Tab Number 2 with ID of #tab-2</div>
            {/* <!-- Panel --> */}
            <div className="tab-panel bg-white pd-20 mb-30" id="tab-3">This Tab Number 3 with ID of #tab-3</div>
            {/* <!-- // Panel --> */}
        </div>
        {/* <!-- // Panels Group --> */}
    </div>)
}