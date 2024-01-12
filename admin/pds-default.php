<?php
    /**
     * Main Admin Page for Phenix Blocks
     * @since Phenix WP 1.0
     * @return void
    */
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

    //====> Default Options Data <====//
    if (!function_exists('pds_get_default_options')) :
        /**
         * Register Default Options for Phenix Blocks
         * @since Phenix Blocks 1.0
         * @return void
        */
        
        function pds_get_default_options() {
            //====> Define Options Data <====//
            $default_types = array(
                array(
                    'enable'=> true,
                    "name"  => "post",
                    "label" => "Blog Posts",
                    "label_singular" => "Posts",
                    "template" => "phenix/blog-example",
                    "menu_icon" => "welcome-widgets-menus",
                    "taxonomies" => array('post_tag','category')
                ),
                array(
                    'enable'=> true,
                    "name"  => "sliders",
                    "label" => "Block Sliders",
                    "singular" => "slider",
                    "label_singular" => "Slider",
                    "template" => "phenix/slide-hero",
                    "menu_icon" => "cover-image",
                    "taxonomies" => array()
                ),
            );

            $default_patterns = array(
                array('name' => "table-of-content",
                    'title'  => "Table of Content",
                    'width'  => 1280,
                    'category' => array("single", "elements"),
                    'content'  => "<!-- wp:phenix/group {\"id\":\"table-of-content-list\",\"tagName\":\"ul\",\"className\":\"scrollspy-menu\"} -->\n<ul class=\"wp-block-phenix-group scrollspy-menu\" id=\"table-of-content-list\"><!-- wp:phenix/inline {\"content\":\"قائمة بعناوين محتوي الصفحة\\u003cbr\\u003e Table of Content List\"} -->\n<i class=\"wp-block-phenix-inline\">قائمة بعناوين محتوي الصفحة<br> Table of Content List</i>\n<!-- /wp:phenix/inline --></ul>\n<!-- /wp:phenix/group -->"
                ),
            );

            $default_locations = array(
                array(
                    'title' => 'Main Menu',
                    'name'  => 'main-menu',
                ),
                array(
                    'title' => 'Quick Links',
                    'name'  => 'quick-links',
                ),
                array(
                    'title' => 'Secondary Menu',
                    'name'  => 'secondary-menu',
                ),
            );

            //====> Define Template Meta <====//
            $default_templates_meta = array(
                //===> Dynamic Search Bar <===//
                "dynamic/search-bar" => array(
                    //===> Features <===//
                    "features" => array("grid", "spacing", "typography"),

                    //===> Options <===//
                    "options" => array(
                        "search-type" => array("type" => "string", "default" => "post"),
                        "taxonomies" => array("type" => "options", "default" => array(
                            "enable" => array("type" => "boolean", "default" => false),
                            "fields" => array("type" => "string", "default" => "1"),
                            "value"  => array("type" => "array", "default" => array("category")),
                        )),
                    ),
                )
            );

            //====> Conditional Options <====//
            $other_options = array();

            //====> Add WooCommerce Option <====//
            if (class_exists("woocommerce")) {
                array_push($other_options, array('pds_core_woo' => ""));
            } else {
                array_push($other_options, array('pds_core_woo' => "on"));
            }

            //====> Return Options <====//
            return array_merge(array(
                "pds_types" => $default_types,
                "block_patterns" => $default_patterns,
                "menu_locations" => $default_locations,
                "pds_taxonomies" => array(),
                "templates_meta" => $default_templates_meta,

                //===> Blocks settings <===//
                'pds_core_navigation' => "on",
                'pds_admin_style' => "on",
                'pds_gfonts' => "on",
                'container_block' => "on",
                'logo_block' => "on",
                'navigation_block' => "on",
                'button_block' => "on",
                'row_block' => "on",
                'column_block' => "on",
                'head_block' => "on",
                'query_block' => "on",
                'taxonomies_list_block' => "on",
                'taxonomies_block' => "on",
                'theme_part_block' => "on",
                'group_block' => "on",
                'inline_elements_block' => "on",
                'popups_block' => "on",
                'media_element_block' => "on",
                'icon_element_block' => "on",
                'custom_code_block' => "on",
                'pds_logical_block' => "on",
                'pds_users_query_block' => "on",
                'text_elements_block' => "on",
                
                // 'tabs_block' => "on",
                // 'pds_form_block' => "on",
                // 'dropdowns_block' => "on",
                // 'accordion_block' => "on",
                // 'pds_gmaps_block' => "on",
                // 'pds_timer_block' => "on",
                // 'pds_languages_block' => "on",
                // 'pds_progress_block' => "on",
                // 'search_query_block' => "on",

                //===> Optimization settings <===//
                'head_cleaner' => "on",
                'wpc7_cleaner' => "on",
                'adminbar_css' => "on",
                'comments_css' => "on",
                'jquery_remove' => "on",
                'wpc7_rm_styles' => "on",
                'wpc7_rm_scripts' => "on",
                'blocks_optimizer' => "on",
                'pds_loading' => array(
                    "code" => "",
                    "type" => "image",
                    "showText" => "on",
                    "background" => "var(--body-bg)",
                    "text" => __('Loading', "pds-blocks"),
                    "image" => plugin_dir_url(__DIR__)."assets/img/loading.svg",
                ),

                //===> Multiple Fonts <===//
                'pds_fonts' => array(
                    "primary" => 'somar-rounded',
                    "secondary" => 'somar-rounded',
                    "primary_rtl" => 'somar-rounded',
                    "secondary_rtl" => 'somar-rounded',
                ),

                'pds_icon_font' => "fontawesome-6-pro",
            ), $other_options);
        }
    endif;

    //====> Set Default Options <====//
    if (!function_exists('pds_blocks_default_values') && function_exists('pds_get_default_options')) :
        /**
         * Set Default Options for Phenix Blocks
         * @since Phenix Blocks 1.0
         * @return void
        */

        //===> Set default values here <===//
        function pds_blocks_default_values() {
            //===> Get Default Options <===//
            $default_options = pds_get_default_options();
            $is_reset_mode = get_option('pds_reset');
    
            //===> Add Options if not Exist <===//
            foreach ($default_options as $key => $value) { add_option($key, $value); }
    
            //===> Reset Options <===//
            if (isset($is_reset_mode) && $is_reset_mode !== "off") {
                //===> Reset Data <===//
                update_option($is_reset_mode, $default_options[$is_reset_mode]);
                //===> Turn Off Reset <===//
                update_option("pds_reset", "off");
            }

            //===> Get Theme Template Parts <===//
            if (function_exists('phenix_support')) {
                //===> Set Templates Parts <===//
                $current_theme_parts = pds_get_theme_parts(new DirectoryIterator(get_template_directory()."/template-parts"));
                update_option('theme_parts', $current_theme_parts);
            }
        }

        add_action('init', 'pds_blocks_default_values');
    endif;

    //====> Temporary Fallbacks (Loading Screen) <====//
    if (!is_array(get_option("pds_loading"))) {
        update_option("pds_loading", array(
            "code" => "",
            "type" => "image",
            "showText" => "on",
            "background" => "var(--body-bg)",
            "text" => __('Loading', "pds-blocks"),
            "image" => plugin_dir_url(__DIR__)."assets/img/loading.svg",
        ));
    }