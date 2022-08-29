<?php
/**
* Plugin Name: Phenix Blocks
* Plugin URI: https://phenixthemes.com
* Description: Phenix Design System - Blocks Ecosystem for WordPress v6.0+ and block based themes designed for phenix themes.
* Version: 0.1
* Author: Abdullah.Ramadan
* Author URI: https://phenixthemes.com
* License: GPL2
* License URI:  https://www.gnu.org/licenses/gpl-2.0.html
* Text Domain:  pds
* Domain Path:  /languages
**/

// Exit if accessed directly.
if (!defined('ABSPATH')) {exit;}

//====> Phenix Design System Core <====//
if (!function_exists('phenix_core')) :
	/**
	 * Setup Core Phenix Design Assets
	 * @since Phenix Blocks 1.0
	 * @return void
	*/
    
    //=====> Phenix Assets [Head] <=====//
    function phenix_core () {
        //====> define props <====//
        $assets_path = plugin_dir_path(__FILE__) ;
        $assets_url  = plugin_dir_url(__FILE__) . "/assets";

        //====> Phenix CSS <====//
        if (!is_rtl()) :
            //====> Phenix LTR <====//
            wp_enqueue_style('phenix', $assets_path. '/css/phenix.css');
        else :
            //====> Phenix RTL <====//
            wp_enqueue_style('phenix', $assets_path. '/css/phenix-rtl.css');
        endif;

        //====> Custom Fonts <====//
        wp_enqueue_style('phenix-fonts', $assets_path. '/css/fonts.css');
    
        //====> Enqueue Phenix JS <====//
        wp_enqueue_script('phenix', $assets_path.'/js/phenix.js', false , NULL , true);
    }

    add_action('wp_enqueue_scripts', 'phenix_core');
    add_action('enqueue_block_editor_assets', 'phenix_core');
endif;