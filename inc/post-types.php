<?php
/**
 * Phenix WP Post Type Registering
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Phenix_WP
 * @since Phenix WP 1.0
 * 
 * ====> Reference by Comments <====
 ** 01 - Products Type
 ** 02 - Cultures Taxonomy
 ** 03 - Lines Taxonomy
 ** 04 - Products Sublist
*/

//====> Products Type <====//
if (!function_exists('products_cpt')) :
    //==== Admin Menu Optimizer ====//
    function admin_menu_optimizer(){ 
        remove_menu_page( 'edit.php' );
    }

    add_action( 'admin_menu', 'admin_menu_optimizer' );
    
    function products_cpt() {
        //==== CPT Options ====//
        $args = array(
            'label'         => px__('Products'),
            'name'          => 'products',
            'singular_name' => 'products',
            'menu_position' => 6,
            'menu_icon'     => 'dashicons-cart',
            'public'        => true,
            'has_archive'   => true,
            'show_in_rest'  => true,
            'hierarchical'  => true,
            'template'      => array (
                array('core/pattern',
                    array ('slug' => 'phenix/product-details'),
                ),
            ),
            'supports'      => array( 'title', 'editor', 'excerpt', 'thumbnail', 'revisions'),
            'taxonomies'    => array('tag','categories','cultures','products-lines'),
        );

        register_post_type('products', $args);
    }

    add_action( 'init', 'products_cpt' );
endif;

//====> Cultures Taxonomy <====//
if (!function_exists('cultures_tax')) :
    function cultures_tax() {
        //==== Taxonomies Options ====//
        $args = array(
            'label'             => px__('Cultures'),
            'rewrite'           => array('slug' => 'cultures'),
            'public'            => true,
            'hierarchical'      => true,
            'show_admin_column' => true,
            'show_in_rest'      => true,
            'query_var'         => true,
        );

        register_taxonomy ('cultures', array('products'), $args);
    }

    //==== Hooking The Custom Taxonomies ====//
    add_action( 'init', 'cultures_tax', 0 );
endif;

//====> Lines Taxonomy <====//
if (!function_exists('products_lines_tax')) :
    function products_lines_tax() {
        //==== Taxonomies Options ====//
        $args = array(
            'label'             => px__('Products Lines'),
            'rewrite'           => array('slug' => 'products-lines'),
            'public'            => true,
            'hierarchical'      => true,
            'show_admin_column' => true,
            'show_in_rest'      => true,
            'query_var'         => true,
        );

        register_taxonomy ('products-lines', array('products'), $args);
    }

    //==== Hooking The Custom Taxonomies ====//
    add_action( 'init', 'products_lines_tax', 0 );
endif;

//====> Categories Taxonomy <====//
if (!function_exists('categories_tax')) :
    function categories_tax() {
        //==== Taxonomies Options ====//
        $args = array(
            'label'             => px__('Categories'),
            'rewrite'           => array('slug' => 'categories'),
            'public'            => true,
            'hierarchical'      => true,
            'show_admin_column' => true,
            'show_in_rest'      => true,
            'query_var'         => true,
        );

        register_taxonomy ('categories', array('products'), $args);
    }

    //==== Hooking The Custom Taxonomies ====//
    add_action( 'init', 'categories_tax', 0 );
endif;

//====> Home Slider <====//
if (!function_exists('home_slider_cpt')) :
    function home_slider_cpt() {
        //==== CPT Options ====//
        $args = array(
            'label'         => px__('Home Slider'),
            'name'          => 'home-slider',
            'singular_name' => 'home-slider',
            'menu_position' => 6,
            'menu_icon'     => 'dashicons-welcome-view-site',
            'public'        => true,
            'has_archive'   => true,
            'show_in_rest'  => true,
            'hierarchical'  => true,
            'template'      => array (
                array('core/pattern',
                    array ('slug' => 'phenix/slide'),
                ),
            ),
            'supports'      => array( 'title', 'editor', 'thumbnail', 'revisions', 'excerpt'),
        );

        register_post_type('home-slider', $args);
    }

    add_action('init', 'home_slider_cpt');
endif;

//====> Products Sublist <====//
if (!function_exists('sub_products_cpt')) :
    function sub_products_cpt() {
        //==== CPT Options ====//
        $args = array(
            'label'         => px__('Products Sub-List'),
            'name'          => 'sub-product',
            'singular_name' => 'sub-product',
            'menu_position' => 7,
            'menu_icon'     => 'dashicons-cart',
            'template'      => array (
                array('core/pattern',
                    array ('slug' => 'phenix/product-details'),
                ),
            ),
            'public'        => true,
            'has_archive'   => true,
            'show_in_rest'  => true,
            'hierarchical'  => true,
            'supports'      => array( 'title', 'editor' , 'thumbnail', 'excerpt', 'page-attributes', 'revisions'),
        );

        register_post_type('sublist', $args);
    }

    add_action('init', 'sub_products_cpt');
endif;