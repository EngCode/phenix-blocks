<?php
/**
 * Phenix WP Optimization Functions
 *
 * @package WordPress
 * @subpackage Phenix_WP
 * @since Phenix WP 1.0
 * 
 * ========> Reference by Comments <=======
 ** 01 - Head Optimizer
 ** 02 - Scripts Optimizer
 ** 03 - Styles Optimizer
 ** 04 - Remove Admin Bar for Users
 ** 05 - Contact Form 7 Optimizer
*/

defined('ABSPATH') || exit;

//====> Optimize for Front-End Only <====//
if (!is_admin()) {
    //=====> Head Optimizer <=====//
    if (!function_exists('head_optimize') && get_option('head_cleaner')) :
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

            //===> Remove Duotone SVG <===//
            remove_action('wp_body_open', 'wp_global_styles_render_svg_filters');
        }
    
        add_action('init', 'head_optimize');
    endif;

    //=====> Scripts Optimizer <=====//
    if (!function_exists('scripts_optimize')) :
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
            //===> Newsletter Plugin <===//
            if (get_option('newsletter_css')) {
                wp_dequeue_style('newsletter');
            }
        }
        
        add_action('wp_print_styles', 'styles_optimize', 100);
    endif;

    //===> Remove Comments Default CSS <===//
    if (!function_exists('comments_styles') && get_option('comments_css')) :
        function comments_styles() {
            global $wp_widget_factory;
            remove_action('wp_head', array($wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style'));
        }

        add_action('widgets_init', 'comments_styles');
    endif;

    //===> Remove Admin Bar Inline CSS <===//
    if (!function_exists('remove_adminbar_style') && get_option('adminbar_css')) :
        function remove_adminbar_style() {
            remove_action('wp_head', '_admin_bar_bump_cb');
        }

        add_action('get_header', 'remove_adminbar_style');
    endif;

    //=====> Remove Admin Bar for Users <=====//
    if (!function_exists('adminbar_disable')) :
        function adminbar_disable() {
            if (!current_user_can('edit_posts') && get_option('adminbar_disable')) {
                show_admin_bar(false);
            }
        }

        add_action('get_header', 'adminbar_disable');
    endif;

    //===== C7 Elements Fix =====//
    if (get_option('wpc7_cleaner')) {
        add_filter('wpcf7_form_elements', function($content) {
            $content = preg_replace('/<(span).*?class="\s*(?:.*\s)?wpcf7-form-control-wrap(?:\s[^"]+)?\s*"[^\>]*>(.*)<\/\1>/i', '\2', $content);
            return $content;
        });

        add_filter('wpcf7_autop_or_not', '__return_false');
    }

    //===== CSS Remove =====//
    if (get_option('wpc7_rm_styles') && !function_exists('wpcf7_deregister_styles')) {
        function wpcf7_deregister_styles() {
            wp_deregister_style('contact-form-7');
        }

        add_action('wp_print_styles', 'wpcf7_deregister_styles', 100);
    }

    //===== JavaScript Remove =====//
    if (get_option('wpc7_rm_scripts') && !function_exists('wpcf7_deregister_scripts')) {
        function wpcf7_deregister_scripts() {
            wp_deregister_script('contact-form-7');
        }
 
        add_action('wp_enqueue_scripts', 'wpcf7_deregister_scripts', 100);
    }
}

//=====> Gutenberg Optimizer <=====//
if (!function_exists('blocks_optimizer') && get_option('blocks_optimizer')) :
    function blocks_optimizer() {
        wp_dequeue_style('wp-block-list');
        wp_dequeue_style('wp-block-library');
        wp_dequeue_style('wp-block-heading');
        wp_dequeue_style('wp-block-paragraph');
        wp_dequeue_style('wp-block-template-part');
        wp_dequeue_style('wp-block-library-theme');
        wp_dequeue_style('wc-blocks-style'); //===> WooCommerce
        // wp_dequeue_style('global-styles'); //===> Theme Options.
    }
    
    add_action('wp_enqueue_scripts', 'blocks_optimizer', 100);
endif;

//====> Remove Layout Gap <====//
remove_filter('render_block', 'wp_render_layout_support_flag', 10, 2);
remove_filter('render_block', 'gutenberg_render_layout_support_flag', 10, 2);

//====> Remove Link Color <====//
remove_filter('render_block', 'wp_render_elements_support', 10, 2);
remove_filter('render_block', 'gutenberg_render_elements_support', 10, 2);