<?php
    /**
     * Main Admin Page for Phenix Blocks
     * @since Phenix WP 1.0
     * @return void
    */

    //=====> Phenix Blocks Admin <=====//
    if (!function_exists('pds_menu')) :
        /**
         * Create Admin Pages for Phenix Blocks
         * @since Phenix Blocks 1.0
         * @return void
        */

        
        add_action('admin_menu', 'pds_menu');

        function pds_menu() {
            //===> Main Settings <===//
            add_menu_page(
                'Phenix Blocks Settings',
                'Phenix Blocks',
                'manage_options',
                'pds-admin',
                'pds_admin_page',
                plugin_dir_url(__DIR__).'assets/img/px-logo/px-dashicon.svg', 60
            );
            //===> Menu Creator <===//
            add_submenu_page('pds-admin',
                'WP Menu Locations',
                'Menu Locations',
                'manage_options',
                'pds-menu-locations',
                'pds_menu_locations'
            );
        }
    endif;

    //====> Include Modules <====//
    include(dirname(__FILE__) . '/modules/page-creator.php');
    include(dirname(__FILE__) . '/modules/toggle-controls.php');

    //====> Options List <====//
    $pds_options_list = array(//==> {option_name, show_in_rest}
        //===> Menu Locations <===//
        array('pds_menu_locations', 'pds-menu-locations', true),

        //===> General Settings <===//
        array('pds_admin_style', 'pds-admin'),
        array('pds_gfonts', 'pds-admin'),

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
        array('taxonomies_list_block', 'pds-admin'),
        array('theme_part_block', 'pds-admin'),

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
    
    //===> Create Options <===//
    function create_pds_options() {
        //===> Grap Options List <===//
        global $pds_options_list;
        //===> Register Options <===//
        foreach ($pds_options_list as $option) {
            register_setting($option[1], $option[0]);
        }
    }
    
    add_action('admin_init', 'create_pds_options');

    //====> Get Options for Rest API <====//
    function pds_get_rest_options($data) {
        //===> Grap Options List <===//
        global $pds_options_list;
        //===> Create List <===//
        $rest_options_data = array();
        //===> Get Options <===//
        foreach ($pds_options_list as $option) {
            //===> Get Option name and Status <===//
            $option_name   = $option[0];
            $option_status = $option[2];
            //===> Set Option if its valid for Rest <===//
            if (isset($option_status) && $option_status) {
                $option_value  = get_option($option_name);
                $rest_options_data[$option_name] = $option_value;
            }
        }
        //===> Return Options <===//
        return $rest_options_data;
    }

    //====> Set Options for Rest API <====//
    function pds_set_rest_options($data) {
        //===> Grap Options List <===//
        global $pds_options_list;

        //===> Register Options <===//
        foreach ($pds_options_list as $option) {
            //===> Get Option name and Status <===//
            $option_name   = $option[0];
            $option_status = $option[2];

            //===> Set Option if its valid for Rest <===//
            if (isset($option_status) && $option_status) {
                update_option($option_name, $data);
            }
        }
        //===> Return Options <===//
        return $data;
    }

    //====> Create Rest API Route <====//
    add_action('rest_api_init', function () {
        //===> Register Options [GET] Mode <===//
        register_rest_route('pds-blocks/v1', '/options/', array(
            'methods'  => 'GET',
            'callback' => 'pds_get_rest_options',
            //====> Set Access Permission <====//
            'permission_callback' => function () {
                return current_user_can('manage_options');
            }
        ));
        //===> Register Options [POST] <===//
        register_rest_route('pds-blocks/v1', '/options/', array(
            'methods'  => 'POST',
            'callback' => 'pds_set_rest_options',
            //====> Set Access Permission <====//
            'permission_callback' => function () {
                return current_user_can('manage_options');
            }
        ));
    });

    //=====> Phenix Admin [General Settings] <=====//
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

    //=====> Phenix Admin [Menu Creator] <=====//
    if (!function_exists('pds_menu_locations')) :
        /**
         * Create Admin Pages for Phenix Blocks
         * @since Phenix Blocks 1.0
         * @return void
        */

        function pds_menu_locations () {
            include(dirname(__FILE__) . '/menu-locations.php');
        };
    endif;
?>