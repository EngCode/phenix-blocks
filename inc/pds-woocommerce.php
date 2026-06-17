<?php
/**
 * Phenix WooCommerce Integration
 *
 * @package WordPress
 * @subpackage pds-blocks
 * @since Phenix Blocks 2.0.0
 * 
 * ========> Reference by Comments <=======
 ** 01 - WooCommerce Check
 ** 02 - Enqueue Extension Script
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//=====> WooCommerce Check <=====//
if (!function_exists('pds_woocommerce_support')) :
	/**
	 * Check if WooCommerce is active and enqueue extension
	 * @since Phenix Blocks 2.0.0
	 * @return void
	*/

    function pds_woocommerce_support() {
        //====> Check if WooCommerce is Active <====//
        if (!class_exists('WooCommerce')) return;

        //====> define props <====//
        $version = PDS_BLOCKS_VERSTION;
        $assets_url = plugin_dir_url(__DIR__)."assets/";

        //====> Check for CDN Option for the Core JS/CSS <====//
        if (get_option('pds_cdn') && get_option('pds_cdn') == "on") {
            $assets_url = "https://cdn.jsdelivr.net/gh/EngCode/phenix-blocks@latest/assets/";
        }

        //====> Enqueue WooCommerce Extension JS <====//
        wp_enqueue_script(
            'pds-woocommerce',
            $assets_url . 'js/woocommerce.js',
            array('phenix'), // depends on core phenix
            $version,
            true
        );
    }

    add_action('wp_enqueue_scripts', 'pds_woocommerce_support');
    add_action('enqueue_block_assets', 'pds_woocommerce_support');
endif;

//=====> Add WooCommerce Body Class <=====//
if (!function_exists('pds_woocommerce_body_class')) :
    function pds_woocommerce_body_class($classes) {
        if (class_exists('WooCommerce')) {
            $classes[] = 'pds-woocommerce';
        }
        return $classes;
    }

    add_filter('body_class', 'pds_woocommerce_body_class');
endif;