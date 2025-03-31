<?php
/**
  * Plugin Name: Phenix Design System - Blocks
  * Plugin URI: https://github.com/EngCode/phenix-blocks
  * Description: Phenix Design System - Blocks Ecosystem for WordPress v6.0+ and block based themes designed for phenix themes.
  * Version: 1.2.0
  * Author: Abdullah.Ramadan
  * Author URI: https://phenixthemes.com
  * License: GPL2
  * License URI: https://www.gnu.org/licenses/gpl-2.0.html
  * Text Domain: pds-blocks
  * Domain Path: /languages
**/

//=====> Exit if accessed directly <=====//
if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//====> Define Constants <====//
define('PDS_BLOCKS_PATH', plugin_dir_path(__FILE__));
define('PDS_BLOCKS_URL', plugin_dir_url(__FILE__));

//===> Activation <===//
function pds_blocks_activate() {
	if (!current_user_can('activate_plugins')) return;
	do_action('pds_blocks_active');
}

register_activation_hook(__FILE__, 'pds_blocks_activate');

//====> Languages Path <====//
if (!function_exists('pds_textdomain')) {
	/**
	 * Multilangauge Plugins Textdomain
	 * @since Phenix WP 1.0
	 * @return void
	*/

	function pds_textdomain() {
		$languages = dirname(plugin_basename(__FILE__)). '/languages';
		load_plugin_textdomain('pds-blocks', false, $languages);
	}

	add_action('plugins_loaded', 'pds_textdomain');
}

//====> Default Values <====//
include(dirname(__FILE__) . '/admin/pds-default.php');

//=====> Phenix Blocks Admin <=====//
include(dirname(__FILE__) . '/admin/pds-admin.php');

//=====> Phenix Optimizer <=====//
include(dirname(__FILE__) . '/inc/pds-optimizer.php');

//=====> Phenix Functions <=====//
include(dirname(__FILE__) . '/inc/pds-functions.php');
include(dirname(__FILE__) . '/inc/woo-functions.php');

//=====> Phenix Assets <=====//
include(dirname(__FILE__) . '/inc/pds-assets.php');

//====> Add Phenix Blocks <====//
include(dirname(__FILE__) . '/src/blocks/blocks.php');

//===> Implement selective block loading <===//
add_filter('pds_blocks_registered_blocks', function($blocks) {
    // Allow theme/user to disable unused blocks
    return array_filter($blocks, function($block) {
        return apply_filters("pds_block_{$block}_enabled", true);
    });
});

//===> Blocks Patterns Categories <===//
if (!function_exists('pds_patterns_cats')) :
	function pds_patterns_cats () {
		//===> Blocks Patterns Categories <===//
		$pattern_categories = array(
			'sections' => 'Sections',
			'slides' => 'Hero Slides',
			'cards' => 'Cards',
			'elements' => 'Elements',
			'headers' => 'Headers',
			'pages' => 'General Pages',
			'single' => 'Single Pages',
			'footers' => 'Footers',
			'phenix' => 'Phenix'
		);

		//===> Register Blocks Categories <===//
		foreach ($pattern_categories as $slug => $label) {
			register_block_pattern_category($slug, array('label' => $label));
		}
	}

	add_action('init', 'pds_patterns_cats');
endif;

//===> Plugins Fallback <===//
function check_other_plugins() {
	//===> ACF <===//
	if (!is_plugin_active('advanced-custom-fields/acf.php') && !is_plugin_active('advanced-custom-fields-pro/acf.php')) {
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
