<?php
    /**
     * Main Admin Page for Phenix Blocks
     * @since Phenix WP 1.0
     * @return void
    */

    //=====> Phenix Blocks Admin <=====//
    if (!function_exists('pds_admin_menu')) :
        /**
         * Create Admin Pages for Phenix Blocks
         * @since Phenix Blocks 1.0
         * @return void
        */

        function pds_admin_menu() {
            //===> Main Settings <===//
            add_menu_page(
                'Phenix Blocks Settings',
                'Phenix Blocks',
                'manage_options',
                'pds-admin',
                'pds_admin_page',
                plugin_dir_url(__DIR__).'assets/img/px-logo/px-dashicon.svg', 60
            );
            //===> Data Collection <===//
            add_submenu_page('pds-admin',
                'Custom Data Collection',
                'Data Collection',
                'manage_options',
                'pds-data-collection',
                'pds_data_collection'
            );
        }

        add_action('admin_menu', 'pds_admin_menu');
    endif;

    /**===> Options List { properties by order }
     *** option_name,
     *** option_page,
     *** show_in_rest
    <===*/
    $pds_options_list = array(
        //===> Data Collection <===//
        array('pds_metabox', 'pds-data-collection', true),
        array('pds_taxonomies', 'pds-data-collection', true),
        array('pds_post_types', 'pds-data-collection', true),
        array('pds_menu_locations', 'pds-data-collection', true),

        //===> General Settings <===//
        array('pds_admin_style', 'pds-admin'),
        array('pds_gfonts', 'pds-admin'),
        array('pds_template_parts', 'pds-admin'),

        //===> Optimization <===//
        array('head_cleaner', 'pds-admin'),
        array('wpc7_cleaner', 'pds-admin'),
        array('wpc7_rm_styles', 'pds-admin'),
        array('wpc7_rm_scripts', 'pds-admin'),
        array('adminbar_css', 'pds-admin'),
        array('adminbar_disable', 'pds-admin'),
        array('comments_css', 'pds-admin'),
        array('newsletter_css', 'pds-admin'),
        array('jquery_remove', 'pds-admin'),
        array('blocks_optimizer', 'pds-admin'),

        //===> Phenix Blocks <===//
        array('container_block', 'pds-admin'),
        array('logo_block', 'pds-admin'),
        array('navigation_block', 'pds-admin'),
        array('button_block', 'pds-admin'),
        array('row_block', 'pds-admin'),
        array('column_block', 'pds-admin'),
        array('head_block', 'pds-admin'),
        array('query_block', 'pds-admin'),
        array('taxonomies_block', 'pds-admin'),
        array('taxonomies_list_block', 'pds-admin'),
        array('theme_part_block', 'pds-admin'),
        array('group_block', 'pds-admin'),
        array('inline_elements_block', 'pds-admin'),

        //===> Core Blocks <===//
        array('pds_core_quote', 'pds-admin'),
        array('pds_core_preformatted', 'pds-admin'),
        array('pds_core_code', 'pds-admin'),
        array('pds_core_pullquote', 'pds-admin'),
        array('pds_core_verse', 'pds-admin'),
        array('pds_core_gallery', 'pds-admin'),
        array('pds_core_file', 'pds-admin'),
        array('pds_core_mediatext', 'pds-admin'),
        array('pds_core_cover', 'pds-admin'),
        array('pds_core_buttons', 'pds-admin'),
        array('pds_core_columns', 'pds-admin'),
        array('pds_core_group', 'pds-admin'),
        array('pds_core_more', 'pds-admin'),
        array('pds_core_nextpage', 'pds-admin'),
        array('pds_core_separator', 'pds-admin'),
        array('pds_core_spacer', 'pds-admin'),
        array('pds_core_embed', 'pds-admin'),
        array('pds_core_logo', 'pds-admin'),
        array('pds_core_title', 'pds-admin'),
        array('pds_core_tagline', 'pds-admin'),
        array('pds_core_query', 'pds-admin'),
        array('pds_core_navigation', 'pds-admin'),
        array('pds_core_avatar', 'pds-admin'),
        array('pds_core_post_elements', 'pds-admin'),
        array('pds_core_tag_cloud', 'pds-admin'),
        array('pds_core_widgets_blocks', 'pds-admin'),
    );

    //====> Include Modules <====//
    include(dirname(__FILE__) . '/modules/api-creator.php');
    include(dirname(__FILE__) . '/modules/cpt-creator.php');
    include(dirname(__FILE__) . '/modules/tax-creator.php');
    include(dirname(__FILE__) . '/modules/page-creator.php');
    include(dirname(__FILE__) . '/modules/toggle-controls.php');
    include(dirname(__FILE__) . '/modules/pattern-creator.php');

    //====> Create Options <====//
    function create_pds_options() {
        //===> Grape Options List <===//
        global $pds_options_list;
        //===> Register Options <===//
        foreach ($pds_options_list as $option) {
            //===> Register the Option <===//
            register_setting($option[1], $option[0]);
        }
    }

    add_action('admin_init', 'create_pds_options');

    //====> Phenix Admin [General Settings] <====//
    if (!function_exists('pds_admin_page')) :
        /**
         * Create Admin Pages for Phenix Blocks
         * @since Phenix Blocks 1.0
         * @return void
        */

        function pds_admin_page () {
            include(dirname(__FILE__) . '/main.php');
        };
    endif;

    //====> Phenix Admin [Data Collection] <====//
    if (!function_exists('pds_data_collection')) :
        /**
         * Create Admin Pages for Phenix Blocks
         * @since Phenix Blocks 1.0
         * @return void
        */

        function pds_data_collection () {
            include(dirname(__FILE__) . '/data-collection.php');
        };
    endif;

    //====> API Endpoint [All Options] <====//
    add_action('rest_api_init', function() {
        //====> Create PDS Endpoint ====//
        pds_add_api(array(
            "api_slug"   => '/options/pds-core-blocks/',
            //===> Data Parameters <===//
            "api_props"  => array('blocks-list' => [
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
                $pds_output = array();

                //===> Get Option Value <===//
                foreach ($pds_options_list as $option) {
                    $option_name = $option[0];
                    if (strpos($option_name, "pds_core") !== false) {
                        $pds_output[$option_name] = get_option($option_name);
                    }
                }

                //===> Return Option Value <===//
                return $pds_output;
            },
            //===> Set Option Method <===//
            "set_method" => function($request) {
                //===> Get Request Data <===//
                $params = $request->get_params();
                //===> Check if has value <===//
                if (isset($params['blocks-list'])) {
                    //===> Get Data <===//
                    $response['response'] = 'Success Data has been Set.';
                    $response['data'] = $params['blocks-list'];

                    //===> Update Options <===//
                    foreach ($response['data'] as $op_name => $op_value) {
                        update_option($op_name, $op_value);
                    }

                    //===> Return Success <===//
                    return $response;
                } else {
                }
                return $request;
            },
        ));
    });

    //====> API Endpoint [Menu Creator] <====//
    add_action('rest_api_init', function() {
        //====> Create PDS Endpoint ====//
        pds_add_api(array(
            "api_slug"   => '/options/pds_menu_locations/',
            //===> Data Parameters <===//
            "api_props"  => array('locations' => [
				'validate_callback' => function( $param, $request, $key ) {
					return is_array($param);
				},
			]),
            //===> Reading Permission <===//
            "read_prem"  => function () {
                return current_user_can('edit_posts');
            },
            //===> Editing Permission <===//
            "write_prem" => function () {
                return current_user_can('manage_options');
            },
            //===> Get Option Method <===//
            "get_method" => function($request) {
                //===> Get Option Value <===//
                $response = get_option('pds_menu_locations');
                //===> Return Option Value <===//
                return $response;
            },
            //===> Set Option Method <===//
            "set_method" => function($request) {
                //===> Get Request Data <===//
                $params = $request->get_params();
                //===> Check if has value <===//
                if (isset($params['locations'])) {
                    //===> Set 
                    $response['response'] = 'Success Data has been Set.';
                    $response['data'] = $params['locations'];

                    //===> Update Options <===//
                    update_option('pds_menu_locations', $params['locations']);

                    //===> Return Success <===//
                    return $response;
                } else {
                    return $request;
                }
            },
        ));
    });

    //====> API Endpoint [Types Creator] <====//
    add_action('rest_api_init', function() {
        //====> Create PDS Endpoint ====//
        pds_add_api(array(
            "api_slug"   => '/options/pds_post_types/',
            //===> Data Parameters <===//
            "api_props"  => array('post-types' => [
                'validate_callback' => function( $param, $request, $key ) {
                    return is_array($param);
                },
            ]),
            //===> Reading Permission <===//
            "read_prem"  => function () {
                return current_user_can('edit_posts');
            },
            //===> Editing Permission <===//
            "write_prem" => function () {
                return current_user_can('manage_options');
            },
            //===> Get Option Method <===//
            "get_method" => function($request) {
                //===> Get Option Value <===//
                $response = get_option('pds_post_types');
                //===> Return Option Value <===//
                return $response;
            },
            //===> Set Option Method <===//
            "set_method" => function($request) {
                //===> Get Request Data <===//
                $params = $request->get_params();
                //===> Check if has value <===//
                if (isset($params['post_types'])) {
                    //===> Set 
                    $response['response'] = 'Success Data has been Set.';
                    $response['data'] = $params['post_types'];

                    //===> Update Options <===//
                    update_option('pds_post_types', $params['post_types']);

                    //===> Return Success <===//
                    return $response;
                } else {
                    return $request;
                }
            },
        ));
    });

    //====> API Endpoint [Taxonomies Creator] <====//
    add_action('rest_api_init', function() {
        //====> Create PDS Endpoint ====//
        pds_add_api(array(
            "api_slug"   => '/options/pds_taxonomies/',
            //===> Data Parameters <===//
            "api_props"  => array('taxonomies' => [
                'validate_callback' => function( $param, $request, $key ) {
                    return is_array($param);
                },
            ]),
            //===> Reading Permission <===//
            "read_prem"  => function () {
                return current_user_can('edit_posts');
            },
            //===> Editing Permission <===//
            "write_prem" => function () {
                return current_user_can('manage_options');
            },
            //===> Get Option Method <===//
            "get_method" => function($request) {
                //===> Get Option Value <===//
                $response = get_option('pds_taxonomies');
                //===> Return Option Value <===//
                return $response;
            },
            //===> Set Option Method <===//
            "set_method" => function($request) {
                //===> Get Request Data <===//
                $params = $request->get_params();
                //===> Check if has value <===//
                if (isset($params['taxonomies'])) {
                    //===> Set 
                    $response['response'] = 'Success Data has been Set.';
                    $response['data'] = $params['taxonomies'];

                    //===> Update Options <===//
                    update_option('pds_taxonomies', $params['taxonomies']);

                    //===> Return Success <===//
                    return $response;
                } else {
                    return $request;
                }
            },
        ));
    });
?>