<?php
/**
 * Phenix WP Optimizer Class
 *
 * Groups all optimization features into a single class with
 * option-based conditional hooks.
 *
 * @package WordPress
 * @subpackage pds-blocks
 * @since Phenix Blocks 2.0.0
 */

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

if (!class_exists('PDS_Optimizer')) :
    class PDS_Optimizer {
        /**
         * Initialize all optimization hooks
         * @since Phenix Blocks 2.0.0
         * @return void
        */
        public static function init() {
            //====> Front-End Only <====//
            if (!is_admin()) {
                self::head_optimizer();
                self::scripts_optimizer();
                self::styles_optimizer();
                self::comments_optimizer();
                self::adminbar_optimizer();
                self::cf7_optimizer();
                self::navigation_optimizer();
            }

            //====> Front + Admin <====//
            self::gutenberg_optimizer();
            self::layout_optimizer();
            self::image_metadata_optimizer();
            self::thumbnail_optimizer();
            self::cdn_optimizer();
            self::image_alt_optimizer();
            self::archive_optimizer();
            self::excerpt_optimizer();
            self::svg_optimizer();
        }

        //=====> Head Optimizer <=====//
        private static function head_optimizer() {
            //====> Check if Head Optimizing is Enable <====//
            if (get_option('head_cleaner') !== "on") return;

            //====> Cleanup the <head> <====//
            add_action('init', function() {
                //====> Removing (RSD) Link [Remove it if integrate services like flicker exists]
                remove_action('wp_head', 'rsd_link');

                //====> Removing "Windows Live Writer" link for Editing Shortcut
                remove_action('wp_head', 'wlwmanifest_link');

                //====> Remove RSS Feed for Comments
                add_filter('feed_links_show_comments_feed', '__return_false');

                //====== Remove Emoji Scripts and Styles ======//
                remove_action('wp_head', 'print_emoji_detection_script', 7);
                remove_filter('the_content_feed', 'wp_staticize_emoji');
                remove_filter('comment_text_rss', 'wp_staticize_emoji');
                remove_filter('wp_mail', 'wp_staticize_emoji_for_email');

                //====> Remove from TinyMCE <====//
                add_filter('tiny_mce_plugins', [__CLASS__, 'disable_emojis_tinymce']);

                //====== Remove WP Embed Scripts ======//
                remove_action('wp_head', 'wp_oembed_add_discovery_links');
                
                //===> Remove WP Embed <===//
                wp_deregister_script('wp-embed');
                
                //===> Remove Duotone SVG <===//
                remove_action('wp_body_open', 'wp_global_styles_render_svg_filters');
            });
        }

        //=====> Scripts Optimizer <=====//
        private static function scripts_optimizer() {
            add_action('wp_enqueue_scripts', function() {
                if (get_option('jquery_remove') === "on") {
                    wp_deregister_script('jquery');
                    wp_deregister_script('jquery-core');
                    wp_deregister_script('jquery-migrate');
                }
                if (get_option('wpc7_cleaner') === "on") {
                    wp_deregister_script('contact-form-7');
                }
            }, 999);
        }

        //=====> Styles Optimizer <=====//
        private static function styles_optimizer() {
            add_action('wp_print_styles', function() {
                if (get_option('newsletter_css') && get_option('newsletter_css') === "on") {
                    wp_dequeue_style('newsletter');
                }
                if (get_option('wpc7_cleaner') === "on") {
                    wp_deregister_style('contact-form-7');
                }
                wp_dequeue_style('wp-reset-editor-styles');
                wp_dequeue_style('wp-reset-editor-styles-rtl');
            }, 999);
        }

        //=====> Comments CSS Optimizer <=====//
        private static function comments_optimizer() {
            add_action('widgets_init', function() {
                global $wp_widget_factory;
                remove_action('wp_head', array($wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style'));
            });
        }

        //=====> Admin Bar CSS Optimizer <=====//
        private static function adminbar_optimizer() {
            add_action('get_header', function() {
                remove_action('wp_head', '_admin_bar_bump_cb');
            });
        }

        //=====> Contact Form 7 Optimizer <=====//
        private static function cf7_optimizer() {
            if (get_option('wpc7_cleaner') !== "on") return;

            add_filter('wpcf7_form_elements', function($content) {
                return preg_replace('/<(span).*?class="\s*(?:.*\s)?wpcf7-form-control-wrap(?:\s[^"]+)?\s*"[^\>]*>(.*)<\/\1>/i', '\2', $content);
            });

            add_filter('wpcf7_autop_or_not', '__return_false');
            remove_action('wpcf7_swv_create_schema', 'wpcf7_swv_add_select_enum_rules', 20, 2);
            remove_action('wpcf7_swv_create_schema', 'wpcf7_swv_add_checkbox_enum_rules', 20, 2);
        }

        //=====> Navigation Menu Optimizer <=====//
        private static function navigation_optimizer() {
            add_filter('nav_menu_item_id', function() { return ""; }, 10, 3);
            add_filter('wp_nav_menu', function($menu) {
                return preg_replace('/id="(.*)"/U', '', $menu);
            });
        }

        //=====> Gutenberg Block Optimizer <=====//
        private static function gutenberg_optimizer() {
            if (get_option('blocks_optimizer') !== "on") return;

            add_action('wp_enqueue_scripts', function() {
                wp_dequeue_style('wp-block-list');
                wp_dequeue_style('wp-block-image');
                wp_dequeue_style('wp-block-library');
                wp_dequeue_style('wp-block-heading');
                wp_dequeue_style('wp-block-paragraph');
                wp_dequeue_style('wp-block-template-part');
                wp_dequeue_style('wp-block-library-theme');
                wp_deregister_style('wp-reset-editor-styles');
            }, 100);
        }

        //=====> Layout Support Optimizer <=====//
        private static function layout_optimizer() {
            remove_filter('render_block', 'wp_render_layout_support_flag', 10, 2);
            remove_filter('render_block', 'gutenberg_render_layout_support_flag', 10, 2);
            remove_filter('render_block', 'wp_render_elements_support', 10, 2);
            remove_filter('render_block', 'gutenberg_render_elements_support', 10, 2);
        }

        //=====> Image Metadata Optimizer <=====//
        private static function image_metadata_optimizer() {
            add_action('add_attachment', function($post_ID) {
                if (!wp_attachment_is_image($post_ID)) return;

                $image_title = get_post($post_ID)->post_title;
                $image_title = preg_replace('%\s*[-_\s]+\s*%', ' ', $image_title);
                $image_title = ucwords(strtolower($image_title));

                update_post_meta($post_ID, '_wp_attachment_image_alt', $image_title);
                wp_update_post(array(
                    'ID'           => $post_ID,
                    'post_title'   => $image_title,
                    'post_excerpt' => $image_title,
                    'post_content' => $image_title,
                ));
            });
        }

        //=====> Thumbnail Optimizer <=====//
        private static function thumbnail_optimizer() {
            add_action('init', function() {
                if (get_option('pds_enable_thumbnails_sizes') === 'on') return;

                $media_sizes = array('thumbnail', 'small', 'medium', 'medium_large', 'large', 'scaled', 'medium_large', 'medium-large');
                foreach ($media_sizes as $size) {
                    update_option("{$size}_size_w", 0);
                    update_option("{$size}_size_h", 0);
                }
                foreach (get_intermediate_image_sizes() as $size) {
                    if (!in_array($size, $media_sizes)) {
                        remove_image_size($size);
                    }
                }
            });

            add_filter('big_image_size_threshold', '__return_false');
        }

        //=====> CDN Cookie Optimizer <=====//
        private static function cdn_optimizer() {
            add_filter('style_loader_tag', [__CLASS__, 'cdn_cookies_style'], 10, 3);
            add_filter('script_loader_tag', [__CLASS__, 'cdn_cookies_style'], 10, 3);
        }

        public static function cdn_cookies_style($tag, $handle, $src) {
            if (strpos($src, 'cdn.') !== false || strpos($src, 'fonts.') !== false || strpos($src, 'cloudflare.com')) {
                if (strpos($tag, ' media=') === false) {
                    $tag = str_replace('>', ' crossorigin="anonymous" referrerpolicy="strict-origin-when-cross-origin">', $tag);
                } else {
                    $tag = str_replace('>', ' referrerpolicy="strict-origin-when-cross-origin">', $tag);
                }
            }
            return $tag;
        }

        //=====> Image Alt Optimizer <=====//
        private static function image_alt_optimizer() {
            add_filter('the_content', function($content) {
                preg_match_all('/<img[^>]+src=["\']([^"\']+)["\'][^>]*>/i', $content, $matches);
                if (empty($matches[0])) return $content;

                foreach ($matches[0] as $img_tag) {
                    if (strpos($img_tag, 'alt=') === false) {
                        $post_title = get_the_title();
                        $new_img_tag = str_replace('>', ' alt="' . esc_attr($post_title) . '">', $img_tag);
                        $content = str_replace($img_tag, $new_img_tag, $content);
                    }
                }
                return $content;
            });
        }

        //=====> Image Dimension Optimizer (SEO) <=====//
        public static function image_dimensions_optimizer($attr, $attachment, $size) {
            if (empty($attr['width']) || empty($attr['height'])) {
                $metadata = wp_get_attachment_metadata($attachment->ID);
                if (!empty($metadata['width']) && !empty($metadata['height'])) {
                    $attr['width']  = $metadata['width'];
                    $attr['height'] = $metadata['height'];
                }
            }
            return $attr;
        }

        //=====> Archive Title Optimizer <=====//
        private static function archive_optimizer() {
            add_filter('get_the_archive_title', function($title) {
                if (is_category()) {
                    $title = single_cat_title('', false);
                } elseif (is_tag()) {
                    $title = single_tag_title('', false);
                } elseif (is_post_type_archive()) {
                    $title = post_type_archive_title('', false);
                } elseif (is_tax()) {
                    $title = single_term_title('', false);
                }
                return $title;
            });
        }

        //=====> Excerpt Optimizer <=====//
        private static function excerpt_optimizer() {
            remove_filter('the_excerpt', 'wpautop');
            add_filter('excerpt_length', function($length) { return $length; }, get_option("excerpt_length") ? get_option("excerpt_length") : 175);
            add_filter('excerpt_more', function() { return '...'; });
        }

        //=====> SVG Upload Optimizer <=====//
        private static function svg_optimizer() {
            add_filter('upload_mimes', function($mimes) {
                $mimes['svg'] = 'image/svg+xml';
                return $mimes;
            });
        }

        //=====> Emoji TinyMCE Helper <=====//
        public static function disable_emojis_tinymce($plugins) {
            if (is_array($plugins)) {
                return array_diff($plugins, array('wpemoji'));
            }
            return array();
        }
    }

    //====> Initialize <====//
    PDS_Optimizer::init();
    add_filter('wp_get_attachment_image_attributes', ['PDS_Optimizer', 'image_dimensions_optimizer'], 10, 3);
endif;
