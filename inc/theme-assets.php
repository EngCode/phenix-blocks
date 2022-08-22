<?php
/**
 * Phenix WP Optimization Functions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Phenix_WP
 * @since Phenix WP 1.0
 * 
 * ========> Reference by Comments <=======
 ** 01 - Head Optimizer
 ** 02 - Scripts Optimizer
 ** 03 - Styles Optimizer
*/

//====> Phenix Design System Core <====//
if (!function_exists('phenix_core')) :
	/**
	 * Setup Core Phenix Design Assets
	 * @since Phenix WP 1.0
	 * @return void
	*/
    
    //=====> Phenix Assets [Head] <=====//
    function phenix_core () {
        //====> define props <====//
        $theme_version  = wp_get_theme()->get( 'Version' );
        $version_string = is_string( $theme_version ) ? $theme_version : false;
        $assets_path    = get_template_directory_uri() . "/assets";

        //====> Phenix CSS <====//
        if (!is_rtl()) :
            //====> Phenix LTR <====//
            wp_enqueue_style('phenix', $assets_path. '/css/phenix.css', array(), $version_string);
        else :
            //====> Phenix RTL <====//
            wp_enqueue_style('phenix', $assets_path. '/css/phenix-rtl.css', array(), $version_string);
        endif;
    
        //====> Enqueue Phenix JS <====//
        wp_enqueue_script('phenix', $assets_path.'/js/phenix.js', false , NULL , true);
    }
        
    add_action('enqueue_block_assets', 'phenix_core');
endif;

//=====> Phenix Assets [Footer] <=====//
if (!function_exists('phenix_assets')) :
	/**
	 * Setup Phenix Design Fonts and Third-Party
	 * @since Phenix WP 1.0
	 * @return void
	*/

    function phenix_assets () {
        //====> define props <====//
        $theme_version  = wp_get_theme()->get( 'Version' );
        $version_string = is_string( $theme_version ) ? $theme_version : false;
        $assets_path    = get_template_directory_uri() . "/assets";

        //====> Custom Fonts <====//
        wp_enqueue_style('phenix-fonts', $assets_path. '/css/fonts.css', array(), $version_string);

        //====> Font-Awesome <====//
        wp_enqueue_style('fontawesome', $assets_path. '/css/fontawsome.css', array(), $version_string);

        //====> Google Fonts <====//
        if (!is_rtl()) :
            wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap', array(), $version_string);
        else :
            wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&display=swap', array(), $version_string);
        endif;

        //====> Default Style.css <====//
        wp_enqueue_style('theme-style', get_template_directory_uri() . '/style.css', array(), $version_string);
    }

    add_action('wp_enqueue_scripts', 'phenix_assets');
    add_action('enqueue_block_editor_assets', 'phenix_assets');
endif;