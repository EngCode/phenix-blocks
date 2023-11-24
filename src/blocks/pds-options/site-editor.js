/*
 * ===> 01 - Modules
 * ===> 02 - Register Block
 * ===> 03 - Block Save Mode [Output]
*/

// //===> WP Modules <===//
// import { __ } from '@wordpress/i18n';
// import apiFetch from '@wordpress/api-fetch';
// import { PanelBody } from '@wordpress/components';
// import { registerPlugin } from '@wordpress/plugins';
// import { PluginSidebar } from '@wordpress/edit-site';
// import {useState, useEffect} from '@wordpress/element';

// //====> Phenix Modules <====//
// import PxDropDown from '../px-controls/dropdown';
// import PhenixNumber from "../px-controls/number";
// import PhenixSelect from '../px-controls/select';
// import OptionControl from '../px-controls/switch';
// import SelectFromData from '../px-controls/select-data';

// //===> Register the Plugin Sidebar <===//
// registerPlugin('phenix-sidebar', {
//     render: () => {
//         //===> Define Options <===//
//         const data_options = {};

//         //===> on Render Hook <===//
//         useEffect(() => {
//             //===> 
//             apiFetch({path: 'pds-blocks/v2/options'}).then(options => {
                
//             });
//         });

//         //===> Sidebar Content <===//
//         return <PluginSidebar name="phenix-sidebar" title={__('Phenix Settings', 'phenix')} icon={<svg fill="none" viewBox="0 0 28 29"><path fill="#121212" d="M18 2.378c4.766.944 6.867 11.864 1.543 13.04.433.378 1.623.871 2.598 2.225 2.206 3.071 1.061 5.217 1.137 6.48a9.895 9.895 0 001.896-1.93c2.203-2.833 3.26-6.245 2.506-9.858-.17.296-.373.573-.603.826.114-4.55-4.064-10.996-9.077-10.764m-2.476 22.321C12.127 23.338 3.892 23.046.858 19.13c1.566 3.39 5.263 4.652 8.835 5.434 3.321.731 7.424.223 8.429 3.916.633-1.547-.971-3.094-2.613-3.76m2.195 3.7c-.822-2.84-7.25-2.757-12.474-4.323a21.922 21.922 0 01-3.033-1.16c5.486 4.197 10.764 2.43 14.506 4.618.66.402.565.47 1.017.865m2.16-17.57c-.026-2.587-2.111-2.61-3.556-2.678-.333 0-2.093-.603-3.355.02h-.812c-.542 0-1.274.06-1.736-.289l-.38-.379a.644.644 0 00-.071-.076c.005.611.231 1.2.636 1.657.228.254.88.758 1.347.758l-.562 1.672c-1.107 4.41 1.767 5.138 4.687 7.25 1.543 1.138 3.31 2.734 3.033 4.838 0-.504-.728-1.698-.997-2.07-2.984-4.091-15.811-6.912-8.83-17.275A8.816 8.816 0 0117.408.32c-.307-.06-.641-.129-.853-.152C8.495-.667 1.799 5.35 1.496 13.377l-.638-1.403c-.542 1.202-.47 4.065.148 5.328 1.278 3.17 5.468 4.55 8.49 5.281 4.19 1.043 9.941.888 9 5.582 1.848-.451 4.486-4.79 4.172-7.132A6.825 6.825 0 0017.48 15.3a3.033 3.033 0 01-1.198-.417c-.38-.243-.6-.607-.888-.732a5.69 5.69 0 01-.436-1.16 2.86 2.86 0 011.058-2.655c1.308-1.073 2.68-.318 3.864.524m-4.706-2.078a.254.254 0 01-.144.466l-.61-.019a.243.243 0 01-.14-.05.258.258 0 010-.428.25.25 0 01.144-.037l.61.019c.05.001.1.018.14.049z"/></svg>}>
//             {/*===> Panel Component <===*/}
//             <PanelBody title={__('General Options', 'phenix')} initialOpen={true}>
                
//             </PanelBody>
//             {/*===> Panel Component <===*/}
//             <PanelBody title={__('Phenix Blocks', 'phenix')} initialOpen={false}>
                
//             </PanelBody>
//             {/*===> Panel Component <===*/}
//             <PanelBody title={__('Core Blocks', 'phenix')} initialOpen={false}>
                
//             </PanelBody>
//             {/*===> Panel Component <===*/}
//             <PanelBody title={__('Typography Fonts', 'phenix')} initialOpen={false}>
                
//             </PanelBody>
//             {/*===> Panels Component <===*/}
//         </PluginSidebar>
//     },
// });