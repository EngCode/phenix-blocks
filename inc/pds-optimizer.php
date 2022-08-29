<?php
/**
 * Phenix WP Optimization Functions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Phenix_WP
 * @since Phenix WP 1.0
 * 
 * ========> Reference by Comments <=======
 ** 01 - Head Optimizer
 ** 02 - Scripts Optimizer
 ** 03 - Styles Optimizer
*/

//=====> Head Optimizer <=====//
if (!function_exists('head_optimize')) :
	/**
	 * Optimizing the Default Unnecessary Scripts and Styles
	 * @since Phenix WP 1.0
	 * @return void
	*/

	function head_optimize() {
		//====> Removing (RSD) Link [Remove it if integrate services like flicker exists]
        remove_action('wp_head', 'rsd_link');
        
        //====> Removing "Windows Live Writer" link for Editing Shortcut
        remove_action('wp_head', 'wlwmanifest_link');
        
        //====> Remove "WordPress version" tag
        remove_action('wp_head', 'wp_generator');
        
        //====> hide WordPress version from RSS
        add_filter('the_generator', '__return_false');
        
        //====> Remove RSS Feed for Comments
        add_filter('feed_links_show_comments_feed', '__return_false');

        //====== Remove Emoji Scripts and Styles ======//
        remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
        remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
        remove_action( 'wp_print_styles', 'print_emoji_styles' );
        remove_action( 'admin_print_styles', 'print_emoji_styles' );	
        remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
        remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );	
        remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );

        //====> Remove from TinyMCE
        add_filter( 'tiny_mce_plugins', 'disable_emojis_tinymce' );

        //====== Remove WP Embed Scripts ======//
        remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );

        //===> Remove WP Embed <===//
        wp_deregister_script('wp-embed');
	}

	if(!is_admin() && get_option('head_cleaner')) {
        add_action('init', 'head_optimize');
    };
endif;

//=====> Scripts Remover <=====//
if (!function_exists('scripts_optimize') && !is_admin()) :
    function scripts_optimize() {
        //===> Remove jQuery <===//
        if (get_option('jquery_remove')) {
            wp_deregister_script('jquery');
            wp_deregister_script('jquery-core');
            wp_deregister_script('jquery-migrate');
        }
    }
    
    add_action('wp_enqueue_scripts', 'scripts_optimize');
endif;

//=====> Styles Optimizer <=====//
if (!function_exists('styles_optimize')) :
    function styles_optimize() {
        //===> Remove in Frontend Only <===//
        if(!is_admin()) {
            //===> Gutenberg Library <===//
            // wp_dequeue_style('wp-block-library');

            //===> Newsletter Plugin <===//
            if (get_option('newsletter_css')) {
                wp_dequeue_style('newsletter');
            }

            //===> Remove Comments Default CSS <===//
            if (!function_exists('comments_styles') && get_option('comments_css')) :
                function comments_styles() {
                    global $wp_widget_factory;
                    remove_action('wp_head', array($wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style'));
                }
            
                add_action('widgets_init', 'remove_recent_comments_style');
            endif;

            //===> Remove Admin Bar Inline CSS <===//
            if (!function_exists('adminbar_style') && get_option('adminbar_css')) :
                function adminbar_style() {
                    remove_action('wp_head', '_admin_bar_bump_cb');
                }
                add_action('get_header', 'adminbar_style');
            endif;
    
        }
    }

    add_action('wp_print_styles', 'styles_optimize', 100);
endif;

//=====> Remove Admin Bar for Users <=====//
if (!is_admin() && !function_exists('adminbar_disable') && get_option('adminbar_disable')) :
    function adminbar_disable() {
        if (!current_user_can('edit_posts')) {
            show_admin_bar(false);
        }
    }

    add_action('get_header', 'adminbar_disable');
endif;