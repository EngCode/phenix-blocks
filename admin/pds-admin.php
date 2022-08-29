<?php
    /**
     * Main Admin Page for Phenix Blocks
     * @since Phenix WP 1.0
     * @return void
    */

    //=====> Phenix Admin <=====//
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

    //====> Register Options <====//
    if (!function_exists('pds_options')) :
        /**
         * Register Options for Phenix Blocks
         * @since Phenix Blocks 1.0
         * @return void
        */

        function create_pds_options() {
            //===> Optimization <===//
            register_setting('pds-admin', 'head_cleaner');
            register_setting('pds-admin', 'wpc7_cleaner');
            register_setting('pds-admin', 'adminbar_css');
            register_setting('pds-admin', 'adminbar_disable');
            register_setting('pds-admin', 'comments_css');
            register_setting('pds-admin', 'newsletter_css');
            register_setting('pds-admin', 'jquery_remove');
            //===> Customization <===//
            register_setting('pds-admin', 'pds_admin_style');
        }

        add_action('admin_init', 'create_pds_options');
    endif;