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
 ** 06 - Remove Emoji Support
 ** 07 - Restrict Login Attempts
 ** 08 - S.E.O. Images Metadata Generator
 ** 09 - Cleanup Navigation Menus
 ** 10 - Disable Thumbnails Generating
 ** 11 - Optimize Third-Party CDN Cookies
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//====> Optimize for Front-End Only <====//
if (!is_admin()) {
    //=====> Head Optimizer <=====//
    if (!function_exists('head_optimize') && get_option('head_cleaner') == "on") :
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
            if (get_option('jquery_remove') == "on") {
                wp_deregister_script('jquery');
                wp_deregister_script('jquery-core');
                wp_deregister_script('jquery-migrate');
            }

            //===== Contact Form 7 =====//
            if (get_option('wpc7_cleaner') == "on") {
                wp_deregister_script('contact-form-7');
            }

            //===> WooCommerce <===//
            if (get_option('pds_woo_js') == "on") {
                wp_dequeue_script('select2');
                wp_dequeue_script('woocommerce');
                wp_dequeue_script('wc-checkout');
                wp_dequeue_script('wc-add-to-cart');
                wp_dequeue_script('wc-cart-fragments');
                wp_dequeue_script('wc-single-product');
                wp_dequeue_script('wc-add-to-cart-variation');
            }

            if (get_option('pds_woo_css') == "on") {
                wp_dequeue_style('wc-blocks-style');
                wp_dequeue_style('woocommerce-layout');
                wp_dequeue_style('woocommerce-general');
                wp_dequeue_style('woocommerce-smallscreen');
            }
        }
        
        add_action('wp_enqueue_scripts', 'scripts_optimize', 999);
    endif;

    //=====> Styles Optimizer <=====//
    if (!function_exists('styles_optimize')) :
        function styles_optimize() {
            //===> Newsletter Plugin <===//
            if (get_option('newsletter_css') && get_option('newsletter_css') == "on") {
                wp_dequeue_style('newsletter');
            }

            //===== Contact Form 7 =====//
            if (get_option('wpc7_cleaner') == "on") {
                wp_deregister_style('contact-form-7');
            }
            
            //==== Editor Assets ====//
            wp_dequeue_style('wp-reset-editor-styles');
            wp_dequeue_style('wp-reset-editor-styles-rtl');
        }

        add_action('wp_print_styles', 'styles_optimize', 999);
    endif;

    //===> Remove Comments Default CSS <===//
    if (!function_exists('comments_styles') && get_option('comments_css') == "on") :
        function comments_styles() {
            global $wp_widget_factory;
            remove_action('wp_head', array($wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style'));
        }

        add_action('widgets_init', 'comments_styles');
    endif;

    //===> Remove Admin Bar Inline CSS <===//
    if (!function_exists('remove_adminbar_style')) :
        function remove_adminbar_style() {
            remove_action('wp_head', '_admin_bar_bump_cb');
        }

        add_action('get_header', 'remove_adminbar_style');
    endif;

    //===== Contact Form 7 Fixes =====//
    if (get_option('wpc7_cleaner') == "on") {
        //===> HTML Fixes <===//
        add_filter('wpcf7_form_elements', function($content) {
            $content = preg_replace('/<(span).*?class="\s*(?:.*\s)?wpcf7-form-control-wrap(?:\s[^"]+)?\s*"[^\>]*>(.*)<\/\1>/i', '\2', $content);
            return $content;
        });

        add_filter('wpcf7_autop_or_not', '__return_false');

        //====> Remove Enum Validation <====//
        remove_action('wpcf7_swv_create_schema', 'wpcf7_swv_add_select_enum_rules', 20, 2);
        remove_action('wpcf7_swv_create_schema', 'wpcf7_swv_add_checkbox_enum_rules', 20, 2);
        // remove_action('wpcf7_swv_create_schema', 'wpcf7_swv_add_datetime_enum_rules', 20, 2);
        // remove_action('wpcf7_swv_create_schema', 'wpcf7_swv_add_datetime_local_enum_rules', 20, 2);
    }

    //===> Cleanup Navigation Menus <===//
    if (!function_exists('pds_menu_items_id_remover')) :
        function pds_menu_items_id_remover($id, $item, $args ) { return ""; }
        add_filter('nav_menu_item_id', 'pds_menu_items_id_remover', 10, 3);
    endif;

    if (!function_exists('pds_remove_nav_menu_id')) :
        function pds_remove_nav_menu_id( $menu ) {
            return preg_replace('/id=\"(.*)\"/U', '', $menu);
        }

        add_filter('wp_nav_menu', 'pds_remove_nav_menu_id');
    endif;
}

//=====> Gutenberg Optimizer <=====//
if (!function_exists('blocks_optimizer') && get_option('blocks_optimizer') == "on") :
    function blocks_optimizer() {
        wp_dequeue_style('wp-block-list');
        wp_dequeue_style('wp-block-image');
        wp_dequeue_style('wp-block-library');
        wp_dequeue_style('wp-block-heading');
        wp_dequeue_style('wp-block-paragraph');
        wp_dequeue_style('wp-block-template-part');
        wp_dequeue_style('wp-block-library-theme');
        wp_deregister_style('wp-reset-editor-styles');
        // wp_dequeue_style('wc-blocks-style'); //===> WooCommerce
        // wp_dequeue_script('tnp-blocks'); //===> Newsletter
        // wp_dequeue_script('pll_blocks'); //===> PolyLang
        // wp_dequeue_script('contact-form-7-block-editor'); //===> CF7 Form
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

//===> Restrict Login Attempts <===//
if (!function_exists('pds_limit_login_attempts')) :
	/**
	 * @since Phenix WP 1.0
	 * @return void
	*/

	function pds_limit_login_attempts() {
		//===> Max Attempts <===//
		$login_attempts = 3;

		//===> Lockout Duration <===//
		$lockout_duration = 300;

        //===> Create Nonce Verification <===//
        $pds_nonce = wp_create_nonce("pds_limit_login_attempts");

		//===> Check if the Cookie is Set <===//
		if (isset($_COOKIE['login_attempts']) && $_COOKIE['login_attempts'] >= $login_attempts) {
			//===> Check if the Lockout Duration is Over <===//
			header('HTTP/1.1 403 Forbidden');
			//===> Display the Error Message <===//
			echo 'Forbidden';
			//===> Exit <===//
			exit;
		}

		//===> Check if the Login Form is Submitted <===//
		if (isset($_GET['log']) && wp_verify_nonce($_GET['log'], "pds_limit_login_attempts")) {
			//===> Check if the Cookie is Set <===//
			if (!isset($_COOKIE['login_attempts'])) {
				//===> Set the Cookie <===//
				setcookie('login_attempts', 1, time() + $lockout_duration, '/');
			} else {
				//===> Increase the Cookie Value <===//
				setcookie('login_attempts', $_COOKIE['login_attempts'] + 1, time() + $lockout_duration, '/');
			}
		}
	}

	add_action('wp_login_failed', 'pds_limit_login_attempts');
endif;

//====> S.E.O. Images Metadata Generator <====//
add_action('add_attachment', function ($post_ID) {
	//====> Check if uploaded file is an image <====//
	if (wp_attachment_is_image($post_ID)) {
        //===> Get Image Title <===//
		$image_title = get_post($post_ID)->post_title;
		//===> Sanitize the title:  remove (hyphens, underscores, spaces) <===//
		$image_title = preg_replace( '%\s*[-_\s]+\s*%', ' ',  $image_title );
		//===> Sanitize the title:  capitalize first letter of every word <===//
		$image_title = ucwords(strtolower($image_title));
		//===> Create Image Metadata <===//
		$my_image_meta = array(
			'ID' => $post_ID,
			'post_title' => $image_title,
			'post_excerpt' => $image_title,
			'post_content' => $image_title,
		);
		//===> Set the image Alt-Text <===//
		update_post_meta( $post_ID, '_wp_attachment_image_alt', $image_title );
		//===> Set the image meta (e.g. Title, Excerpt, Content) <===//
		wp_update_post( $my_image_meta );
    }
});

//===> Disable Thumbnails Generating <===//
add_action('init', function() {
    //====> Define Sizes <====//
    $media_sizes = array('thumbnail', 'small', 'medium', 'medium_large', 'large', 'scaled', 'medium_large', 'medium-large');

    //====> Update Sizes Options to 0 <====//
    foreach ($media_sizes as $size ) {
        update_option( "{$size}_size_w", 0 );
        update_option( "{$size}_size_h", 0 );
    }

    //====> Remove Resized Images <====//
    foreach ( get_intermediate_image_sizes() as $size ) {
        if (!in_array($size, $media_sizes)) {
            remove_image_size($size);
        }
    }
});

add_filter( 'big_image_size_threshold', '__return_false' );

//===> Optimize Third-Party CDN Cookies <====//
function pds_cdn_cookies_style($tag, $handle, $src) {
    //===> Check if the Target has CDN Link <===//
    if (strpos($src, 'cdn.') !== false || strpos($src, 'fonts.') !== false || strpos($src, 'cloudflare.com')) {
        //===> Check if its Stylesheet or Script <=====//
        if (strpos($tag, ' media=') === false) {
            $tag = str_replace('>', ' crossorigin="anonymous" referrerpolicy="strict-origin-when-cross-origin">', $tag);
        } else {
            $tag = str_replace('>', ' referrerpolicy="strict-origin-when-cross-origin">', $tag);
        }
    }

    return $tag;
}

add_filter('style_loader_tag', 'pds_cdn_cookies_style', 10, 3);
add_filter('script_loader_tag', 'pds_cdn_cookies_style', 10, 3);

