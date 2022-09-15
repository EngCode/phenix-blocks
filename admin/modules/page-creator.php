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

//====> Default Options <====//
if (!function_exists('pds_add_admin_page')) :
    /**
     * Register Default Options for Phenix Blocks
     * @since Phenix Blocks 1.0
     * @return void
    */

    function pds_add_admin_page($page_title, $page_description, $tabs_list) {
        //===> Start Data <===//
        $template_markup = '';
        ob_start();

        //===> Get the File <===//
        include(dirname(__FILE__) . '/templates/page-template.php');

        //===> Stop Data <===//
        $template_output = ob_get_clean();
        $template_markup .= $template_output;
        return "{$template_markup}";
    }
endif;