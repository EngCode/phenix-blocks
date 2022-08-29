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

