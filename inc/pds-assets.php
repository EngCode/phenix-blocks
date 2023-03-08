<?php
/**
 * Phenix Blocks Assets
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage pds-blocks
 * @since Phenix Blocks 1.0
 * 
 * ========> Reference by Comments <=======
 ** 01 - Phenix Core
 ** 02 - Phenix Assets
 ** 03 - Phenix Admin CSS
*/

defined('ABSPATH') || exit;

//====> Phenix Core <====//
if (!function_exists('phenix_core')) :
	/**
	 * Setup Core Phenix Design Assets
	 * @since Phenix Blocks 1.0
	 * @return void
	*/

    //=====> Phenix Assets [Head] <=====//
    function phenix_core () {
        //====> define props <====//
        $assets_path = plugin_dir_path(__DIR__);
        $assets_url  = plugin_dir_url(__DIR__)."assets/";

        //====> Phenix CSS <====//
        if (!is_rtl()) :
            //====> Phenix LTR <====//
            wp_enqueue_style('phenix', $assets_url. 'css/phenix.css');
        else :
            //====> Phenix RTL <====//
            wp_enqueue_style('phenix', $assets_url. 'css/phenix-rtl.css');
        endif;
    
        //====> Enqueue Phenix JS <====//
        wp_enqueue_script('phenix', $assets_url.'js/phenix.js', false , NULL , true);

        //=====> Create Phenix API Key <=====//
        wp_localize_script('phenix', 'PDS_WP_KEY', array(
            'site' => esc_url_raw(site_url()),
            'root' => esc_url_raw(rest_url('pds-blocks/v2/')),
            'nonce' => wp_create_nonce('wp_rest'),
        ));
    }

    add_action('wp_enqueue_scripts', 'phenix_core');
    add_action('enqueue_block_editor_assets', 'phenix_core');
    add_action('login_enqueue_scripts', 'phenix_core');
endif;

//=====> Phenix Assets <=====//
if (!function_exists('phenix_assets')) :
	/**
	 * Setup Phenix Design Fonts and Third-Party
	 * @since Phenix WP 1.0
	 * @return void
	*/

    function phenix_assets () {
        //====> define props <====//
        $assets_path = plugin_dir_path(__DIR__);
        $assets_url  = plugin_dir_url(__DIR__)."assets/";
        $icons_font  = "fontawesome-5";
        $pds_custom_fonts = ["somar-rounded", "somar-sans", "neo-sans-w23", "din-next-lt-arabic", "tarek-v"];
        $current_fonts = [
            "icon" => get_option("pds_icon_font"),
            "primary" => get_option("pds_primary_font"),
            "secondary" => get_option("pds_secondary_font"),
        ];

        //===> Font Css Settings <===//
        $prim_font = str_replace("-", " ", $current_fonts['primary']);
        $sec_font  = str_replace("-", " ", $current_fonts['secondary']);
        $icon_font = str_replace("-", " ", $current_fonts['icon']);
        $icon_font = str_replace("free", "", $icon_font);
        $icon_font = str_replace("pro", "", $icon_font);

        //====> Font-icon <====//
        if (str_contains($current_fonts['icon'], "fontawesome-6")) : $icons_font = "fontawesome-6"; endif;

        //====> Google Fonts <====//
        if (get_option('pds_gfonts') == "on") {
            echo '<link rel="preconnect" href="https://fonts.googleapis.com">';
            echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
        }

        //===> Load Primary Font <===//
        if (get_option('pds_gfonts') == "on" && !in_array($current_fonts["primary"], $pds_custom_fonts, true)) {
            $google_url = 'https://fonts.googleapis.com/css2?family='.$current_fonts['primary'];
            wp_enqueue_style('pds-primary-font', $google_url, array('phenix'), null, 'screen and (min-width: 2500px)');
        } else {
            wp_enqueue_style('pds-primary-font', $assets_url. 'webfonts/'.$current_fonts['primary'].'.css', array('phenix'), false, 'screen and (min-width: 2500px)');
        }

        //===> Load Secondary Font <===//
        if ($current_fonts['primary'] !== $current_fonts['secondary']) {
            if (get_option('pds_gfonts') == "on" && !in_array($current_fonts["secondary"], $pds_custom_fonts, true)) {
                $google_url = 'https://fonts.googleapis.com/css2?family='.$current_fonts['secondary'];
                wp_enqueue_style('pds-secondary-font', $assets_url. 'webfonts/'.$current_fonts['secondary'].'.css', array('phenix'), null, 'screen and (min-width: 2500px)');
            } else {
                wp_enqueue_style('pds-secondary-font', $assets_url. 'webfonts/'.$current_fonts['secondary'].'.css', array('phenix'), false, 'screen and (min-width: 2500px)');
            }
        }

        //===> Set Font Css Settings <===//
        $fonts_css_options = 'body {
            --primary-font: '.ucwords($prim_font).';
            --secondary-font: '.ucwords($sec_font).';
        }';

        wp_add_inline_style('pds-primary-font', $fonts_css_options);

        //===> Load Icon Font <===//
        wp_enqueue_style('fontawesome', $assets_url. 'webfonts/'.$icons_font.'.css', array('phenix'), false, 'screen and (min-width: 2500px)');
        
        //===> Set Font Css Settings <===//
        $icons_css_options = 'body { --icons-font: '.ucwords($icon_font).'; }';
        wp_add_inline_style('fontawesome', $icons_css_options );
    }

    add_action('wp_enqueue_scripts', 'phenix_assets');
    add_action('enqueue_block_editor_assets', 'phenix_assets');
    add_action('login_enqueue_scripts', 'phenix_assets');
endif;

//=====> Phenix Admin CSS <=====//
if (!function_exists('pds_admin_style') && is_admin()) :
    /**
     * Setup WP Phenix Design Assets
     * @since Phenix Blocks 1.0
     * @return void
    */

    function pds_admin_style($hook) {
        //===> Global for Admin <===//
        if (is_rtl()) {
            wp_enqueue_style('pds-admin', plugin_dir_url(__DIR__).'assets/css/admin-rtl.css');
        } else {
            wp_enqueue_style('pds-admin', plugin_dir_url(__DIR__).'assets/css/admin.css');
        }
    }

    //===> Include Phenix Core in the Plugin Page <===//
    if (isset($_GET["page"]) && $_GET["page"] == 'pds-admin' || get_option('pds_admin_style')) {
        add_action('admin_enqueue_scripts', 'phenix_core');
        add_action('admin_enqueue_scripts', 'phenix_assets');
        add_action('admin_enqueue_scripts', 'pds_admin_style');
    }
endif;

//====> Login Page Script <====//
if (!function_exists('pds_login_admin')) :
	/**
	 * Overwrite Login Page Design
	 * @since Phenix Blocks 1.0
	 * @return void
	*/
    function pds_login_admin () {
        //===> Script <===//
        include(dirname(__FILE__) . '/login-overwrite.php');
    }

    add_action('login_enqueue_scripts', 'pds_login_admin');
endif;

//====> Defer Scripts <====//
if (!function_exists('pds_defer_scripts')) :
	/**
	 * Defer Scripts
	 * @since Phenix Blocks 1.0
	 * @return void
	*/

    function pds_defer_scripts($tag, $handle, $src) {
        $async_scripts = array('phenix');
        // $defer_scripts = array('pds-script');

        if (in_array($handle, $async_scripts)) {
            return '<script src="' . $src . '" defer></script>' . "\n";
        }

        return $tag;
    }

    add_filter('script_loader_tag', 'pds_defer_scripts', 10, 3);

    add_filter('body_class', function( $classes ) {
        return array_merge($classes, array('pds-loader'));
    });
endif;

//====> Custom Body Classes <====//
if (!function_exists('pds_body_class')) :
	/**
	 * Defer Scripts
	 * @since Phenix Blocks 1.0
	 * @return void
	*/
    add_filter('body_class', 'pds_body_class');
    
    function pds_body_class( $classes ) {
        $classes[] = 'pds-loader';
        return $classes;
    }
endif;

//===> Loading Page <===//
if (!function_exists('pds_loader_template')) :
	function pds_loader_template() {
		include(dirname(__FILE__) . '/loading.php');
	}

	add_action('wp_body_open', 'pds_loader_template');
endif;

//===> Set Font Css Settings <===//
// if (!function_exists('pds_fonts_setup')) :
//     function pds_fonts_setup() {
//         $current_fonts = [
//             "icon" => get_option("pds_icon_font"),
//             "primary" => get_option("pds_primary_font"),
//             "secondary" => get_option("pds_secondary_font"),
//         ];

//         $prim_font = str_replace("-", " ", $current_fonts['primary']);
//         $sec_font = str_replace("-", " ", $current_fonts['secondary']);
//         $icon_font = str_replace("-", " ", $current_fonts['icon']);

//         echo '<style id="pds-font-settings">body {
//             --icons-font: '.ucwords($prim_font).';
//             --primary-font: '.ucwords($sec_font).';
//             --secondary-font: '.ucwords($icon_font).';
//         }</style>';
//     }

//     add_action('wp_body_open', 'pds_fonts_setup');
// endif;

