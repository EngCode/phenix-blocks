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
        register_rest_route('pds-blocks/v2', $options['api_slug'], array(
            //===> [Reading] Mode <===//
            array(
                'methods'  => WP_REST_Server::READABLE,
                'callback' => $options['get_method'],
                //====> Set Access Permission <====//
                'permission_callback' => $options['write_prem'],
            ),
            //===> [Creating] Mode <===//
            array(
                'methods'  => WP_REST_Server::CREATABLE,
                'callback' => $options['set_method'],
                'args'     => $options['api_props'],
                //====> Set Access Permission <====//
                'permission_callback' => $options['write_prem'],
            ),
            //===> [Editing] Mode <===//
            array(
                'methods'  => WP_REST_Server::EDITABLE,
                'callback' => $options['set_method'],
                'args'     => $options['api_props'],
                //====> Set Access Permission <====//
                'permission_callback' => $options['write_prem'],
            )
        ));
    }
endif;