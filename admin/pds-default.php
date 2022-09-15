<?php
/**
 * Main Admin Page for Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

//====> Default Options <====//
if (!function_exists('pds_blocks_activation')) :
    /**
     * Register Default Options for Phenix Blocks
     * @since Phenix Blocks 1.0
     * @return void
    */

    //===> Activation <===//
    function pds_blocks_activation(){
        do_action('pds_blocks_active');
    }

    register_activation_hook(__FILE__, 'pds_blocks_activation');

    //===> Set default values here <===//
    function pds_blocks_default_values() {
        //===> Form settings <===//
        add_option('container_block', true);
        add_option('logo_block', true);
        add_option('navigation_block', true);
        add_option('button_block', true);
        add_option('row_block', true);
        add_option('column_block', true);
        add_option('head_block', true);
        add_option('query_block', true);
        add_option('taxonomies_list_block', true);
        add_option('theme_part_block', true);
    }

    add_action('pds_blocks_active', 'pds_blocks_default_values');
endif;