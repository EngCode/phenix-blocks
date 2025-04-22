---
title: "API End-Point"
date: 2025-01-04
---

## API End-Point Creator

another function to help you add data to the plugin Restful API Endpoint, and to get this data from the api follow your API Endpoint: https://wordpress-api/pds-blocks/v2/

```
<?php
//===> Syntax <===//
pds_add_api($options_array_object);
/*===> Options List 
    **** api_slug   => string,
    **** api_props  => data_array,
    **** get_method => Callback_Function,
    **** set_method => Callback_Function,
    **** read_permission => Callback_Function,
    **** write_permission => Callback_Function
<===*/

//===> Example: API Endpoint for [All Options] <====//
add_action('rest_api_init', function() {
    //====> Create PDS Endpoint ====//
    pds_add_api(array(
        "api_slug"   => '/options',
        //===> Data Parameters <===//
        "api_props"  => array('options' => [
            'validate_callback' => function( $param, $request, $key ) {
                return is_array($param);
            },
        ]),
        //===> Reading Permission <===//
        "read_prem"  => function () {
            return is_user_logged_in();
        },
        //===> Editing Permission <===//
        "write_prem" => function () {
            return current_user_can('manage_options');
        },
        //===> Get Option Method <===//
        "get_method" => function($request) {
            global $pds_options_list;
            //===> Define Options List <===//
            $core_blocks = array();
            $current_options = array();

            //===> Get Option Value <===//
            foreach ($pds_options_list as $option) {
                //===> Define Data <===//
                $option_name = $option[0];
                $option_api  = $option[2];

                //===> Core Blocks <===//
                if (strpos($option_name, "pds_core") !== false) {
                    $core_blocks[$option_name] = get_option($option_name);
                }

                //===> Options with API Enabled <===// 
                if ($option_api) {
                    $current_options[$option_name] = get_option($option_name);
                }
            }

            //===> add Core Blocks <===//
            $current_options["pds_core"] = $core_blocks;

            //===> Return Options <===//
            return $current_options;
        },
        //===> Set Option Method <===//
        "set_method" => function($request) {
            //===> Get Request Data <===//
            $params = $request->get_params();

            //===> Set Response Data <===//
            $response['data'] = $params;
            $response['response'] = 'Success Data has been Set.';

            //===> Update Options <===//
            foreach ($response['data'] as $option => $value) {
                //===> for Core Blocks Options <===//
                if ($option == "pds_core") {
                    foreach ($option as $block => $value) {
                        update_option($block, $value);
                    }
                }
                //===> for Other Options <===//
                else {
                    update_option($option, $value);
                } 
            }

            //===> Return Success <===//
            return $response;
        },
    ));
});
```
