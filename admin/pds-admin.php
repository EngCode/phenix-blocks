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

    //====> Register Options <====//
    if (!function_exists('pds_options')) :
        /**
         * Register Options for Phenix Blocks
         * @since Phenix Blocks 1.0
         * @return void
        */

        function create_pds_options() {
            //===> Menu Locations <===//
            register_setting('pds-admin', 'pds_menu_locations');
            
            //===> General Settings <===//
            register_setting('pds-admin', 'pds_admin_style');
            register_setting('pds-admin', 'pds_gfonts');

            //===> Optimization <===//
            register_setting('pds-admin', 'head_cleaner');
            register_setting('pds-admin', 'wpc7_cleaner');
            register_setting('pds-admin', 'wpc7_rm_styles');
            register_setting('pds-admin', 'wpc7_rm_scripts');
            register_setting('pds-admin', 'adminbar_css');
            register_setting('pds-admin', 'adminbar_disable');
            register_setting('pds-admin', 'comments_css');
            register_setting('pds-admin', 'newsletter_css');
            register_setting('pds-admin', 'jquery_remove');
            register_setting('pds-admin', 'blocks_optimizer');

            //===> Phenix Blocks <===//
            register_setting('pds-admin', 'container_block');
            register_setting('pds-admin', 'logo_block');
            register_setting('pds-admin', 'navigation_block');
            register_setting('pds-admin', 'button_block');
            register_setting('pds-admin', 'row_block');
            register_setting('pds-admin', 'column_block');
            register_setting('pds-admin', 'head_block');
            register_setting('pds-admin', 'query_block');
            register_setting('pds-admin', 'taxonomies_list_block');
            register_setting('pds-admin', 'theme_part_block');

            //===> Core Blocks <===//
            register_setting('pds-admin', 'pds_core_quote');
            register_setting('pds-admin', 'pds_core_preformatted');
            register_setting('pds-admin', 'pds_core_code');
            register_setting('pds-admin', 'pds_core_pullquote');
            register_setting('pds-admin', 'pds_core_verse');
            register_setting('pds-admin', 'pds_core_gallery');
            register_setting('pds-admin', 'pds_core_file');
            register_setting('pds-admin', 'pds_core_mediatext');
            register_setting('pds-admin', 'pds_core_cover');
            register_setting('pds-admin', 'pds_core_buttons');
            register_setting('pds-admin', 'pds_core_columns');
            register_setting('pds-admin', 'pds_core_group');
            register_setting('pds-admin', 'pds_core_more');
            register_setting('pds-admin', 'pds_core_nextpage');
            register_setting('pds-admin', 'pds_core_separator');
            register_setting('pds-admin', 'pds_core_spacer');
            register_setting('pds-admin', 'pds_core_embed');
            register_setting('pds-admin', 'pds_core_logo');
            register_setting('pds-admin', 'pds_core_title');
            register_setting('pds-admin', 'pds_core_tagline');
            register_setting('pds-admin', 'pds_core_query');
            register_setting('pds-admin', 'pds_core_navigation');
            register_setting('pds-admin', 'pds_core_avatar');
            register_setting('pds-admin', 'pds_core_post_elements');
            register_setting('pds-admin', 'pds_core_tag_cloud');
            register_setting('pds-admin', 'pds_core_widgets_blocks');
        }

        add_action('admin_init', 'create_pds_options');
    endif;

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