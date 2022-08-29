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
            plugin_dir_url(__DIR__).'pds-blocks/assets/img/px-logo/px-dashicon.svg', 60
        );
    }

    include(dirname(__FILE__) . '/admin/pds-admin.php');
endif;

//=====> Phenix Optimizer <=====//
include(dirname(__FILE__) . '/inc/pds-optimizer.php');

//=====> Phenix Assets <=====//
include(dirname(__FILE__) . '/inc/pds-assets.php');
