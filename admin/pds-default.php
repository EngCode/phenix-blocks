<?php
/**
 * Main Admin Page for Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

//====> Default Options <====//
if (!function_exists('pds_blocks_default_values')) :
    /**
     * Register Default Options for Phenix Blocks
     * @since Phenix Blocks 1.0
     * @return void
    */

    //===> Set default values here <===//
    function pds_blocks_default_values() {
        //===> Menu Locations <===//
        if (!get_option('pds_menu_locations')) :
            add_option('pds_menu_locations', array(
                'main-menu'     => 'Main Menu',
                'footer-menu'   => 'Footer Links',
                'footer-menu-2' => 'Footer Links #2',
            ));
        endif;

        //===> Blocks settings <===//
        add_option('container_block', true);
        add_option('logo_block', true);
        add_option('navigation_block', true);
        add_option('button_block', true);
        add_option('row_block', true);
        add_option('column_block', true);
        add_option('head_block', true);
        add_option('query_block', true);
        add_option('taxonomies_list_block', true);
        add_option('taxonomies_block', true);
        add_option('theme_part_block', true);
        add_option('group_block', true);

        //===> Optimization settings <===//
        add_option('pds_gfonts', true);
        add_option('head_cleaner', true);
        add_option('wpc7_cleaner', true);
        add_option('adminbar_css', true);
        add_option('comments_css', true);
        add_option('wpc7_rm_styles', true);
        add_option('wpc7_rm_scripts', true);
        add_option('blocks_optimizer', true);
    }

    add_action('pds_blocks_active', 'pds_blocks_default_values');
endif;