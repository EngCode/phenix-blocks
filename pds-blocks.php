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

//===> Activation <===//
function pds_blocks_activate() {
	do_action('pds_blocks_active');
}

register_activation_hook(dirname(__FILE__), 'pds_blocks_activate');

//====> Default Values <====//
include(dirname(__FILE__) . '/admin/pds-default.php');

//====> Set Menu Locations <====//
if (get_option('pds_menu_locations')) :
	register_nav_menus( get_option('pds_menu_locations') );
endif;

//====> Multilang Support <====//
if (!function_exists('px__')) {
	/**
	 * Multilangauge Plugins Fallback
	 * @since Phenix WP 1.0
	 * @return void
	*/

	function px__($string) {
		if(function_exists('pll__')) :
			return pll__($string, 'phenix');
		else :
			return __($string, 'phenix');
		endif;
	}
}


//====> Languages Path <====//
if (!function_exists('phenix_textdomain')) {
	/**
	 * Multilangauge Plugins Textdomain
	 * @since Phenix WP 1.0
	 * @return void
	*/

	function phenix_textdomain() {
		load_plugin_textdomain('phenix', false, dirname(plugin_basename(__FILE__)) . '/languages'); 
	}
	
	add_action( 'init', 'phenix_textdomain' );
}

//=====> Phenix Blocks Admin <=====//
include(dirname(__FILE__) . '/admin/pds-admin.php');

//=====> Phenix Optimizer <=====//
include(dirname(__FILE__) . '/inc/pds-optimizer.php');

//=====> Phenix Functions <=====//
include(dirname(__FILE__) . '/inc/pds-functions.php');

//=====> Phenix Assets <=====//
include(dirname(__FILE__) . '/inc/pds-assets.php');

//====> Add Phenix Blocks <====//
include(dirname(__FILE__) . '/src/blocks/blocks.php');
include(dirname(__FILE__) . '/src/blocks/patterns.php');
