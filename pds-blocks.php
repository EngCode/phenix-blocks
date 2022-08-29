<?php
/**
* Plugin Name: Phenix Blocks
* Plugin URI: https://phenixthemes.com
* Description: Phenix Design System - Blocks Ecosystem for WordPress v6.0+ and block based themes designed for phenix themes.
* Version: 0.1
* Author: Abdullah.Ramadan
* Author URI:https://phenixthemes.com
* License: GPL2
* License URI: https://www.gnu.org/licenses/gpl-2.0.html
* Text Domain: phenix
* Domain Path: /languages
**/

//=====> Exit if accessed directly <=====//
if (!defined('ABSPATH')) {exit;}

//=====> Phenix Blocks Admin <=====//
if (!function_exists('pds_menu')) :
	/**
	 * Create Admin Pages for Phenix Blocks
	 * @since Phenix Blocks 1.0
	 * @return void
	*/
    
    add_action('admin_menu', 'pds_menu');

    function pds_menu() {
        add_menu_page(
            'Phenix Blocks Settings',
            'Phenix Blocks',
            'manage_options',
            'pds-admin',
            'pds_admin_page',
            'https://demo.phenixthemes.com/assets/px-logo/px-blocks-icon.svg', 60
        );
    }

    include(dirname(__FILE__) . '/admin/pds-admin.php');
endif;

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
        $assets_path = plugin_dir_path(__FILE__);
        $assets_url  = plugin_dir_url(__FILE__)."assets/";

        //====> Phenix CSS <====//
        if (!is_rtl()) :
            //====> Phenix LTR <====//
            wp_enqueue_style('phenix', $assets_url. 'css/phenix.css');
        else :
            //====> Phenix RTL <====//
            wp_enqueue_style('phenix', $assets_url. 'css/phenix-rtl.css');
        endif;

        //====> Custom Fonts <====//
        wp_enqueue_style('phenix-fonts', $assets_url. 'css/fonts.css');
    
        //====> Enqueue Phenix JS <====//
        wp_enqueue_script('phenix', $assets_url.'js/phenix.js', false , NULL , true);
    }

    add_action('wp_enqueue_scripts', 'phenix_core');
    add_action('enqueue_block_editor_assets', 'phenix_core');
endif;

//=====> Phenix Admin CSS <=====//
if (!function_exists('pds_admin_style')) :
	/**
	 * Setup WP Phenix Design Assets
	 * @since Phenix Blocks 1.0
	 * @return void
	*/

    function pds_admin_style($hook) {
        //===> Global for Admin <===//
        wp_enqueue_style('pds-admin', plugin_dir_url(__FILE__).'style.css');
    }
    
    add_action('admin_enqueue_scripts', 'pds_admin_style');

    //===> Include Phenix Core in the Plguin Page <===//
    if (isset($_GET["page"]) && $_GET["page"] == 'pds-admin') {
        add_action('admin_enqueue_scripts', 'phenix_core');
    }
endif;