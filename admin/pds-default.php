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
            $default_options = file_get_contents(WP_PLUGIN_DIR."/pds-blocks/assets/json/default-options.json");
            $default_options = json_decode($default_options);

            //====> Conditional Options <====//
            $other_options = array();

            //====> Add WooCommerce Option <====//
            if (class_exists("woocommerce")) {
                array_push($other_options, array('pds_core_woo' => ""));
            } else {
                array_push($other_options, array('pds_core_woo' => "on"));
            }

            //====> Return Options <====//
            return array_merge($default_options, $other_options);
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