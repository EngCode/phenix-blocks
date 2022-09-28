<?php
/**
 * Phenix Blocks Admin Controls
 * @since Phenix WP 1.0
 * @return void
*/

//====> Default Options <====//
if (!function_exists('pds_add_api')) :
    /**
     * Register Default Options for Phenix Blocks
     * @since Phenix Blocks 1.0
     * @return void
    */

    function pds_add_api($options) {
        /*===> Options List 
          **** api_slug,
          **** api_props,
          **** get_method,
          **** set_method,
          **** read_prem,
          **** write_prem
        <===*/

        //===> Register Options <===//
        register_rest_route('pds-blocks/v1', $options['api_slug'], array(
            //===> [GET] Mode <===//
            array(
                'methods'  => WP_REST_Server::READABLE,
                'callback' => $options['get_method'],
                //====> Set Access Permission <====//
                'permission_callback' => function () {
                    return current_user_can($options['read_prem']);
                }
            ),
            //===> [POST] Mode <===//
            array(
                'methods'  => WP_REST_Server::CREATABLE,
                'callback' => $options['set_method'],
                'args'     => $options['api_props'],
                //====> Set Access Permission <====//
                'permission_callback' => function () {
                    return current_user_can($options['write_prem']);
                },
            ),
            //===> [POST] Mode <===//
            array(
                'methods'  => WP_REST_Server::EDITABLE,
                'callback' => $options['set_method'],
                'args'     => $options['api_props'],
                //====> Set Access Permission <====//
                'permission_callback' => function () {
                    return current_user_can($options['write_prem']);
                },
            )
        ));
    }
endif;

//====> Create Rest API Route for Options <====//
foreach ($pds_options_list as $key => $option) {
    //===> Define the Option <===//
    $option_name = $option[0];
    
    //===> if the Option is valid for Rest API <===//
    if (isset($option[2]) && $option[2]) {
        //===> Get Current Value and Define Slug-Name <===//
        $option_value = get_option($option_name);
        $option_slug  = '/options/'.$option_name.'/';

        //===> Define Api Properties <===//
        $option_api_props = array(
            "api_slug"   => $option_slug,
            "read_prem"  => 'edit_posts',
            "write_prem" => 'manage_options',
            "api_props"  => array('default' => $option_value),
            //===> Get Option Method <===//
            "get_method" => function($data) {
                //===> Get Option Value <===//
                $response = get_option($option_name);
                //===> Return Option Value <===//
                return rest_ensure_response($response);
            },
            //===> Set Option Method <===//
            "set_method" => function($data) {
                //===> Update Options <===//
                update_option($option_name, $data);
                //===> Return Options <===//
                return rest_ensure_response('Option '.$option_name.' is Set to : '.get_option($option_name));
            },
        );

        //===> Create the End-Point <===//
        add_action('rest_api_init', function() {
            global $option_api_props;
            pds_add_api($option_api_props);
        });
    }
}