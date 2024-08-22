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

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

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
        $version = "1.1.0";
        $assets_url = plugin_dir_url(__DIR__)."assets/";

        //====> Check for CDN Option for the Core JS/CSS <====//
        if (get_option('pds_cdn') && get_option('pds_cdn') == "on") {
            $assets_url = "https://cdn.jsdelivr.net/gh/EngCode/phenix-blocks/assets/";
        }

        //====> Phenix CSS <====//
        if (!is_rtl()) :
            //====> Phenix LTR <====//
            wp_register_style('phenix', $assets_url. 'css/phenix.css', array(), $version);
            wp_register_style('phenix-utils', $assets_url. 'css/phenix-utils.css', array('phenix'), $version);
        else :
            //====> Phenix RTL <====//
            wp_register_style('phenix', $assets_url. 'css/phenix-rtl.css', array(), $version);
            wp_register_style('phenix-utils', $assets_url. 'css/phenix-utils-rtl.css', array('phenix'), $version);
        endif;

        wp_enqueue_style('phenix');
        wp_enqueue_style('phenix-utils');

        //====> Enqueue Phenix JS <====//
        wp_enqueue_script('phenix', $assets_url.'js/phenix.js', false, $version , true);

        //=====> Create Phenix API Key <=====//
        if (is_user_logged_in() && current_user_can('manage_options') || current_user_can('edit_others_posts')) {
            wp_localize_script('phenix', 'PDS_WP_KEY', array(
                'site' => esc_url_raw(site_url()),
                'root' => esc_url_raw(rest_url('pds-blocks/v2/')),
                'json' => esc_url_raw($assets_url."json"),
                'nonce' => wp_create_nonce('wp_rest'),
            ));
        } else {
            wp_localize_script('phenix', 'PDS_WP_KEY', array('site' => esc_url_raw(site_url())));
        }

        //====> Get the Translation Files <====//
        wp_set_script_translations('phenix', 'pds-blocks', plugin_dir_path(__FILE__).'languages');
    }

    add_action('wp_enqueue_scripts', 'phenix_core');
    add_action('enqueue_block_assets', 'phenix_core');
    add_action('enqueue_block_editor_assets', 'phenix_core');
    // add_action('login_enqueue_scripts', 'phenix_core');
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
        $prim_font; $sec_font;
        $final_files = array();
        $assets_url = "https://cdn.jsdelivr.net/gh/EngCode/pdb-assets/";
        $icons_font  = get_option("pds_icon_font");
        $fonts_list  = (array) get_option("pds_fonts");
        $custom_fonts = [
            "bio-sans",
            "tarek-v",
            "somar-sans",
            "somar-rounded",
            "ara-hamah-al-horra",
        ];

        //====> Define the Fonts List <====//
        $current_fonts = [
            "icon" => $icons_font,
            "text" => array(
                "primary" => is_rtl() === true ? $fonts_list['primary_rtl'] : $fonts_list['primary'],
                "secondary" => is_rtl() === true ? $fonts_list['secondary_rtl'] : $fonts_list['secondary']
            ),
        ];

        //===> Loop on the Fonts <===//
        foreach ($current_fonts['text'] as $key => $value) {
            //===> Define the Font File <===//
            if (is_array($fonts_list) && in_array($value, $custom_fonts, true)) {
                $final_files[$key] = $assets_url. 'webfonts/'.$value.'.css';
            } else if (get_option('pds_gfonts') == "on") {
                $final_files[$key] = 'https://fonts.googleapis.com/css2?family='.str_replace(" ", "+", $value).':wght@100;200;300;400;500;600;700;800;900&display=swap';
            }

            //===> Define Font Css Settings <===//
            if ($key === "primary") $prim_font = trim(str_replace("-", " ", $value));
            if ($key === "secondary") $sec_font  = trim(str_replace("-", " ", $value));
        }

        //===> Validate and Clean-up Files Names from Spaces and replace it with dash (-) <===//
        $final_files['icons_name'] = str_replace("-", " ", $icons_font);
        $final_files['primary_name'] = ucwords(str_replace("-", " ", $prim_font));
        $final_files['secondary_name'] = ucwords(str_replace("-", " ", $sec_font));

        //===> Fix Fontawesome Family Name <===//
        if (strpos($current_fonts['icon'], "fontawesome") !== false) {
            //====> Filter Icons-Font Name <====//
            $final_files['icons_name'] = str_replace("fontawesome", "Font Awesome", $final_files['icons_name']);
            //===> Check if the Font is Pro Family and fix it <===//
            if (strpos($current_fonts['icon'], "pro") === false) {
                $final_files['icons_name'] = $final_files['icons_name']." Pro";
                $final_files['icons_name'] = ucwords(str_replace("free", "pro", $final_files['icons_name']));
            }
        }

        //===> Load Icon Font <===//
        $icons_font = trim(preg_replace("/(-free|-pro)/i", "", $icons_font));
        $final_files['icons_font'] = $assets_url. 'webfonts/'.$icons_font.'.css';

        //===> Return List of the Files <===//
        return $final_files;
    }

    function pds_optimized_asset () {
        //====> Get the Assets Files <====//
        $version = "1.1.0";
        $assets_files = phenix_assets();

        //====> Google Fonts <====//
        if (get_option('pds_gfonts') == "on") {
            echo '<link rel="preconnect" href="https://fonts.googleapis.com">';
            echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
        }

        //===> Load Primary Font <===//
        wp_enqueue_style('pds-primary-font', $assets_files['primary'], array('phenix'), $version, 'screen and (min-width: 2500px)');

        //===> Load Secondary Font <===//
        if (isset($assets_files['primary']) && $assets_files['primary'] !== $assets_files['secondary']) {
            wp_enqueue_style('pds-secondary-font', $assets_files['secondary'], array('phenix'), $version, 'screen and (min-width: 2500px)');
        }

        //===> Load Icons Font <===//
        wp_enqueue_style('fontawesome', $assets_files['icons_font'], false, $version, 'screen and (min-width: 2500px)');

        //===> Set Font Css Settings <===//
        if ($assets_files['primary_name'] !== $assets_files['secondary_name']) {
            wp_add_inline_style('pds-primary-font', 'body, :root {
                --primary-font: '.$assets_files['primary_name'].', '.$assets_files['secondary_name'].';
                --secondary-font: '.$assets_files['secondary_name'].', '.$assets_files['primary_name'].';
                --icons-font: "'.$assets_files['icons_name'].'";
            }');
        } else {
            wp_add_inline_style('pds-primary-font', 'body, :root {
                --primary-font: '.$assets_files['primary_name'].';
                --secondary-font: '.$assets_files['secondary_name'].';
                --icons-font: "'.$assets_files['icons_name'].'";
            }');
        }
    };

    add_action('wp_enqueue_scripts', 'pds_optimized_asset');
    // add_action('login_enqueue_scripts', 'pds_optimized_asset');
    add_action('enqueue_block_editor_assets', 'pds_optimized_asset');
    add_action('admin_enqueue_scripts', 'pds_optimized_asset');
    add_action('enqueue_block_assets', 'pds_optimized_asset');
endif;

//=====> Phenix Admin CSS <=====//
if (!function_exists('pds_admin_style') && is_admin()) :
    /**
     * Setup WP Phenix Design Assets
     * @since Phenix Blocks 1.0
     * @return void
    */

    function pds_admin_style($hook) {
        $version = "1.1.0";
        //===> Global for Admin <===//
        if (is_rtl()) {
            wp_enqueue_style('pds-admin', plugin_dir_url(__DIR__).'assets/css/admin-rtl.css', array(), $version);
        } else {
            wp_enqueue_style('pds-admin', plugin_dir_url(__DIR__).'assets/css/admin.css', array(), $version);
        }

        //===> Check Current Admin Page <===//
        $screen = get_current_screen();

        //===> Collection Data <===//
        if ($screen->id === 'phenix-blocks_page_pds-data-collection') {
            wp_enqueue_script('phenix-data-collection', plugin_dir_url(__DIR__).'admin/data-collection.js', false, $version , true);
        }

        //===> Include Admin Script <===//
        wp_enqueue_script('phenix-admin-pages-script', plugin_dir_url(__DIR__).'admin/scripts.js', false, $version , true);
    }

    //===> Include Phenix Core in the Plugin Page <===//
    if (get_option('pds_admin_style') && is_admin()) {
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

    // add_action('login_enqueue_scripts', 'pds_login_admin');
endif;

//====> Defer Scripts <====//
if (!function_exists('pds_defer_scripts')) :
	/**
	 * Defer Scripts
	 * @since Phenix Blocks 1.0
	 * @return void
	*/

    function pds_defer_scripts($tag, $handle, $src) {
        // Array of script handles to defer
        $async_scripts = array('phenix');
        
        // Check if the script is enqueued and should be deferred
        if (in_array($handle, $async_scripts) && wp_script_is($handle, 'enqueued')) {
            return str_replace('<script ', '<script defer ', $tag);
        }
    
        // Return the original tag if not deferring
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
        $theme_loading = get_option("pds_loading");

        if(isset($theme_loading->theme) && $theme_loading->theme) {
            get_template_part('template-parts/loading');
        } else {
            include(dirname(__FILE__) . '/loading.php');
        }
	}

	add_action('wp_body_open', 'pds_loader_template');
endif;

//===> Phenix Backlinks <===//
if (!function_exists('pds_copyrights_backlinks')) :
    function pds_copyrights_backlinks() {
        include(dirname(__FILE__) . '/backlinks.php');
    }
    // add_action('wp_footer', 'pds_copyrights_backlinks');
endif;

//===> Lightbox Template <===//
if (!function_exists('pds_lightbox_template')) :
	function pds_lightbox_template() {
		include(dirname(__FILE__) . '/lightbox.php');
	}

	add_action('wp_footer', 'pds_lightbox_template');
endif;

//===> Loading Media Library Scripts <===//
add_action('admin_enqueue_scripts', function () {
    wp_enqueue_media();
});