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
        add_option('menu_locations', array(
            'main-menu'     => 'Main Menu',
            'footer-menu'   => 'Footer Links',
            'footer-menu-2' => 'Footer Links #2',
        ));

        //===> Post Types <===//
        add_option('pds_types', array(
            array(
                'open' => true,
                "name"  => "post",
                "label" => "Blog Posts",
                "label_singular" => "Posts",
                "template" => array (
                    array('core/pattern',
                        array ('slug' => 'phenix/blog-example'),
                    ),
                ),
                "menu_icon" => "welcome-widgets-menus",
                "taxonomies" => array('tag','category')
            ),
            array(
                'open' => true,
                "name"  => "home-slider",
                "label" => "Home Slider",
                "singular" => "slides",
                "label_singular" => "Slides",
                "template" => array (
                    array('core/pattern',
                        array ('slug' => 'phenix/hero-slide'),
                    ),
                ),
                "menu_icon" => "align-wide",
                "taxonomies" => array('tag','category')
            ),
        ));

        //===> Taxonomies <===//
        add_option('pds_taxonomies', array());

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
        add_option('pds_core_separator', true);
        add_option('inline_elements_block', true);

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

    add_action('init', 'pds_blocks_default_values');
endif;