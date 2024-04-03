<?php
/**
  * Plugin Name: Phenix Blocks
  * Plugin URI: https://github.com/EngCode/phenix-blocks
  * Description: Phenix Design System - Blocks Ecosystem for WordPress v6.0+ and block based themes designed for phenix themes.
  * Version: 1.0.4
  * Author: Abdullah.Ramadan
  * Author URI:https://phenixthemes.com
  * License: GPL2
  * License URI: https://www.gnu.org/licenses/gpl-2.0.html
  * Text Domain: pds-blocks
  * Domain Path: /languages
**/

//=====> Exit if accessed directly <=====//
if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//===> Activation <===//
function pds_blocks_activate() {
	do_action('pds_blocks_active');
}

register_activation_hook(dirname(__FILE__), 'pds_blocks_activate');

//====> Multilang Support <====//
function px__($string) {
	if(function_exists('pll__')) {
		return pll__($string, 'phenix');
	} else {
		return __($string, 'phenix');
	}
}

//====> Languages Path <====//
if (!function_exists('pds_textdomain')) {
	/**
	 * Multilangauge Plugins Textdomain
	 * @since Phenix WP 1.0
	 * @return void
	*/

	function pds_textdomain() {
		$languages = dirname(plugin_basename(__FILE__)). '/languages';
		load_plugin_textdomain('phenix', false, $languages);
		load_plugin_textdomain('newsletter', false, $languages);
	}

	add_action('init', 'pds_textdomain');
}

//====> Default Values <====//
include(dirname(__FILE__) . '/admin/pds-default.php');

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

//===> Blocks Patterns Categories <===//
if (!function_exists('pds_patterns_cats')) :
	function pds_patterns_cats () {
		register_block_pattern_category('sections', array('label' => 'Sections'));
		register_block_pattern_category('slides', array('label' => 'Hero Slides'));
		register_block_pattern_category('cards', array('label' => 'Cards'));
		register_block_pattern_category('elements', array('label' => 'Elements'));
		register_block_pattern_category('headers', array('label' => 'Headers'));
		register_block_pattern_category('pages', array('label' => 'General Pages'));
		register_block_pattern_category('single', array('label' => 'Single Pages'));
		register_block_pattern_category('footers', array('label' => 'Footers'));
		register_block_pattern_category('phenix', array('label' => 'Phenix'));
	}

	add_action('init', 'pds_patterns_cats');
endif;

//===> Create Cron Jobs Scheduler <===//
add_filter('cron_schedules', function($schedules) {
    //===> Every 10 Minutes <===//
    $schedules['pds_schedule'] = array(
        'interval' => 600,
        'display'  => __( 'Every 10 Minutes' ),
    );

    //===> .... <===//
    return $schedules;
});

//===> Plugins Fallback <===//
function check_other_plugins() {
	//===> ACF <===//
	if (!is_plugin_active('advanced-custom-fields/acf.php') || !is_plugin_active('advanced-custom-fields-pro/acf.php')) {
		//===> Get Field Replacement <===//
		if(!function_exists('get_field'))  {
			function get_field() { return 'ACF is Not Enabled.'; }
		}
		//===> The Field Replacement <===//
		if(!function_exists('the_field'))  {
			function the_field() { return 'ACF is Not Enabled.'; }
		}
	}
}