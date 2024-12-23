<?php
    /**
     * Main Admin Page for Phenix Blocks
     * @since Phenix WP 1.0
     * @return void
    */

    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;
    
    //=====> Phenix Blocks Admin <=====//
    if (!function_exists('pds_admin_menu')) :
        /**
         * Create Admin Pages for Phenix Blocks
         * @since Phenix Blocks 1.0
         * @return void
        */

        function pds_admin_menu() {
            
            //===> General Settings <===//
            add_menu_page(
                __('Phenix Settings', "pds-blocks"),
                __('Design System', "pds-blocks"),
                'manage_options',
                'pds-admin',
                'pds_admin_page',
                plugin_dir_url(__DIR__).'assets/img/px-logo/px-dashicon.svg', 60
            );
            
            //===> Data Collection <===//
            add_submenu_page('pds-admin',
                __('Phenix Data Manager', "pds-blocks"),
                __('Data Manager', "pds-blocks"),
                'manage_options',
                'pds-data-collection',
                'pds_data_collection'
            );

            //===> Dashboard Settings <===//
            add_submenu_page('pds-admin',
                __('Documentation', "pds-blocks"),
                __('Documentation', "pds-blocks"),
                'edit_posts',
                'pds-dashboard',
                'pds_dash_page'
            );
            
            //===> Remove Menu Items <===//
            // $removable = ['edit-comments.php'];
            // foreach ($removable as $item) { remove_menu_page($item); }

            //===> Remove Sub Menu Items <===//
            $removable_sub = [
                ['blocks-product-editor-for-woocommerce', 'pricing'],
                ['blocks-product-editor-for-woocommerce', 'contact'],
                ['blocks-product-editor-for-woocommerce', 'wp-support-forum'],
            ];

            foreach ($removable_sub as $item) { remove_submenu_page(...$item); }

            //===> Organize Menu Items <===//
            $movable = [
                ['pds-dashboard', null, __('WordPress', "pds-blocks"), 'edit_posts', 'about.php'],
                ['users.php', null, __('Comments', "pds-blocks"), 'manage_options', 'edit-comments.php'],
                ['options-general.php', null, __('Core Updates', "pds-blocks"), 'manage_options', 'update-core.php'],
            ];

            foreach ($movable as $item) { add_submenu_page(...$item); }
        }

        add_action('admin_menu', 'pds_admin_menu', 99);
    endif;

    //====> Include Modules <====//
    include(dirname(__FILE__) . '/modules/api-creator.php');
    include(dirname(__FILE__) . '/modules/cpt-creator.php');
    include(dirname(__FILE__) . '/modules/tax-creator.php');
    include(dirname(__FILE__) . '/modules/page-creator.php');
    include(dirname(__FILE__) . '/modules/metabox-creator.php');
    include(dirname(__FILE__) . '/modules/toggle-controls.php');
    include(dirname(__FILE__) . '/modules/pattern-creator.php');

    /**===> Options List { properties by order }
     *** option_name,
     *** option_page,
     *** show_in_rest
    <===*/
    function get_pds_options_list() {
        //===> .... <===//
        $pds_options = array(
            //===> Data Collection <===//
            array('pds_types', 'pds-data-collection', true),
            array('pds_metabox', 'pds-data-collection', true),
            array('pds_taxonomies', 'pds-data-collection', true),
            array('menu_locations', 'pds-data-collection', true),
            array('block_patterns', 'pds-data-collection', true),
            array('users_roles', 'pds-data-collection', true),
            array('theme_parts', 'pds-data-collection', true),
            array('countries_list', 'pds-data-collection', true),
            array('theme_templates', 'pds-data-collection', true),
            array('templates_meta', 'pds-data-collection', true),
            array('pds_custom_pallete', 'pds-data-collection', true),
    
            //===> General Settings <===//
            array('pds_gfonts', 'pds-admin', true),
            array('pds_admin_style', 'pds-admin', true),
            array('pds_template_parts', 'pds-general', true),
            array('pds_fonts', 'pds-admin', true),
            array('pds_icon_font', 'pds-admin', true),
            array('pds_icon_font_key', 'pds-admin', true),
            array('pds_reset', 'pds-data-collection', true),
    
            //===> Optimization <===//
            array('pds_cdn', 'pds-admin', true),
            array('head_cleaner', 'pds-admin', true),
            array('wpc7_cleaner', 'pds-admin', true),
            array('wpc7_rm_styles', 'pds-admin', true),
            array('wpc7_rm_scripts', 'pds-admin', true),
            array('adminbar_css', 'pds-admin', true),
            array('adminbar_disable', 'pds-admin', true),
            array('comments_css', 'pds-admin', true),
            array('newsletter_css', 'pds-admin', true),
            array('jquery_remove', 'pds-admin', true),
            array('blocks_optimizer', 'pds-admin', true),
            array('pds_loading', 'pds-admin', true),
            array('excerpt_length', 'pds-admin', true),
            array('pds_woo_css', 'pds-admin', true),
            array('pds_woo_js', 'pds-admin', true),
    
            //===> Phenix Blocks <===//
            array('container_block', 'pds-admin', true),
            array('logo_block', 'pds-admin', true),
            array('navigation_block', 'pds-admin', true),
            array('button_block', 'pds-admin', true),
            array('row_block', 'pds-admin', true),
            array('column_block', 'pds-admin', true),
            array('head_block', 'pds-admin', true),
            array('query_block', 'pds-admin', true),
            array('taxonomies_block', 'pds-admin', true),
            array('taxonomies_list_block', 'pds-admin', true),
            array('theme_part_block', 'pds-admin', true),
            array('group_block', 'pds-admin', true),
            array('inline_elements_block', 'pds-admin', true),
            array('popups_block', 'pds-admin', true),
            array('media_element_block', 'pds-admin', true),
            array('icon_element_block', 'pds-admin', true),
            array('custom_code_block', 'pds-admin', true),
            array('pds_logical_block', 'pds-admin', true),
            array('pds_users_query_block', 'pds-admin', true),
            array('text_elements_block', 'pds-admin', true),
            array('text_list_item_block', 'pds-admin', true),
            
            array('search_query_block', 'pds-admin', true),
            array('tabs_block', 'pds-admin', true),
            array('pds_form_block', 'pds-admin', true),
            array('dropdowns_block', 'pds-admin', true),
            array('accordion_block', 'pds-admin', true),
            array('pds_gmaps_block', 'pds-admin', true),
            array('pds_progress_block', 'pds-admin', true),
            array('pds_languages_block', 'pds-admin', true),
            array('pds_timer_block', 'pds-admin', true),
    
            //===> Core Blocks <===//
            array('pds_core_quote', 'pds-admin'),
            array('pds_core_preformatted', 'pds-admin'),
            array('pds_core_code', 'pds-admin'),
            array('pds_core_pullquote', 'pds-admin'),
            array('pds_core_verse', 'pds-admin'),
            array('pds_core_gallery', 'pds-admin'),
            array('pds_core_file', 'pds-admin'),
            array('pds_core_mediatext', 'pds-admin'),
            array('pds_core_cover', 'pds-admin'),
            array('pds_core_buttons', 'pds-admin'),
            array('pds_core_columns', 'pds-admin'),
            array('pds_core_group', 'pds-admin'),
            array('pds_core_more', 'pds-admin'),
            array('pds_core_nextpage', 'pds-admin'),
            array('pds_core_separator', 'pds-admin'),
            array('pds_core_spacer', 'pds-admin'),
            array('pds_core_embed', 'pds-admin'),
            array('pds_core_logo', 'pds-admin'),
            array('pds_core_title', 'pds-admin'),
            array('pds_core_tagline', 'pds-admin'),
            array('pds_core_query', 'pds-admin'),
            array('pds_core_navigation', 'pds-admin'),
            array('pds_core_avatar', 'pds-admin'),
            array('pds_core_post_elements', 'pds-admin'),
            array('pds_core_tag_cloud', 'pds-admin'),
            array('pds_core_widgets_blocks', 'pds-admin'),
            array('pds_core_woo', 'pds-admin'),
        );

        //===> Return Options <===//
        return $pds_options;
    }

    //====> Create Options <====//
    function create_pds_options() {
        //===> Grape Options List <===//
        $pds_options_list = get_pds_options_list();

        //===> Register Options <===//
        foreach ($pds_options_list as $option) {
            //===> Register the Option <===//
            register_setting($option[1], $option[0]);
        }
    }

    add_action('admin_init', 'create_pds_options');

    //====> Phenix Admin [Dashboard] <====//
    if (!function_exists('pds_dash_page')) :
        /**
         * Create Admin Pages for Phenix Blocks
         * @since Phenix Blocks 1.0
         * @return void
        */

        function pds_dash_page () {
            include(dirname(__FILE__) . '/pds-dashboard.php');
        };
    endif;

    //====> Phenix Admin [General Settings] <====//
    if (!function_exists('pds_admin_page')) :
        /**
         * Create Admin Pages for Phenix Blocks
         * @since Phenix Blocks 1.0
         * @return void
        */

        function pds_admin_page () {
            include(dirname(__FILE__) . '/main.php');
        };
    endif;

    //====> Phenix Admin [Data Collection] <====//
    if (!function_exists('pds_data_collection')) :
        /**
         * Create Admin Pages for Phenix Blocks
         * @since Phenix Blocks 1.0
         * @return void
        */

        //===> Data Collection <===//
        function pds_data_collection () {
            include(dirname(__FILE__) . '/data-collection.php');
        };
    endif;

    //====> API Endpoint for [All Options] <====//
    add_action('rest_api_init', function() {
        //====> Create PDS Endpoint ====//
        pds_add_api(array(
            "api_slug"   => '/options',
            //===> Data Parameters <===//
            "api_props"  => array('options' => [
				'validate_callback' => function( $param, $request, $key ) {
					return is_array($param);
				},
			]),
            //===> Reading Permission <===//
            "read_prem"  => function () {
                return is_user_logged_in();
            },
            //===> Editing Permission <===//
            "write_prem" => function () {
                return current_user_can('manage_options');
            },
            //===> Get Option Method <===//
            "get_method" => function($request) {
                $pds_options_list = get_pds_options_list();
                //===> Define Options List <===//
                $core_blocks = array();
                $current_options = array();

                //===> Get Option Value <===//
                foreach ($pds_options_list as $option) {
                    //===> Define Data <===//
                    $option_name = $option[0];
                    $option_api  = false;
                    if (isset($option[2])) { $option_api = $option[2]; }

                    //===> Core Blocks <===//
                    if (strpos($option_name, "pds_core") !== false) {
                        $core_blocks[$option_name] = get_option($option_name);
                    }

                    //===> Options with API Enabled <===// 
                    if ($option_api) {
                        $current_options[$option_name] = get_option($option_name);
                    }
                }

                //===> add Core Blocks <===//
                $current_options["pds_core"] = $core_blocks;

                //===> Return Options <===//
                return $current_options;
            },
            //===> Set Option Method <===//
            "set_method" => function($request) {
                //===> Get Request Data <===//
                $params = $request->get_params();

                //===> Set Response Data <===//
                $response['data'] = $params;
                $response['response'] = 'Success Data has been Set.';

                //===> Update Options <===//
                foreach ($response['data'] as $option => $value) {
                    //===> for Core Blocks Options <===//
                    if ($option == "pds_core") {
                        foreach ($option as $block => $value) {
                            update_option($block, $value);
                        }
                    }
                    //===> for Other Options <===//
                    else {
                        update_option($option, $value);
                    } 
                }

                //===> Return Success <===//
                return $response;
            },
        ));
    });

    //====> Set Menu Locations <====//
    if (get_option("menu_locations")) {
        //===> Get Current Locations
        $current_locations = get_option("menu_locations");

        //===> Menu Locations Fallback <===//
        if (!$current_locations[0]) {
            //===> Create new Menu Format <====//
            $menu_locations = array();
            //===> Add the Previous Menu Data <===//
            foreach ($current_locations as $key => $value) {
                array_push($menu_locations, array('title' => $value, 'name'  => $key));
            }
            //===> Update the Menu Locations <===//
            update_option("menu_locations", $menu_locations);
        } else {
            //====> Set Menu Locations <====//
            foreach ($current_locations as $location) {
                $location = (array) $location;
                register_nav_menu($location['name'], $location['title']);
            }
        }
    }

    //===> Set Post-Types <===//
    if (get_option('pds_types')) :
        //===> Define GB Types <===//
        $pds_gb_cpt = array();
        global $pds_gb_cpt;

        //===> Get Post-Types <===//
        foreach(get_option('pds_types') as $post_type) {
            $post_type = (array) $post_type;
            //===> if is Posts Disable Core <===//
            if ($post_type["name"] == "post") {
                add_action('admin_menu', function() {
                    remove_menu_page('edit.php'); 
                });
            }

            //===> if the Post-Type is Enabled <===//
            if(isset($post_type['enable']) && $post_type['enable'] == true) {
                pds_cpt_create($post_type);
            }

            //===> Disable Gutenberg for the Post-Type <===//
            if (isset($post_type['disable-editor']) && $post_type['disable-editor'] === true) {
                $pds_gb_cpt[$post_type["name"]] = $post_type['disable-editor'];
            }

            //===> Register Strings for Translation <===//
            if (function_exists('pll_register_string')) {
                pll_register_string("pds-blocks", $post_type["label"]);
                pll_register_string("pds-blocks", $post_type["label_singular"]);

                if (isset($post_type["rewrite"])) {
                    pll_register_string("pds-blocks", $post_type["rewrite"]);
                }
            }
        }

        //====> Disable Editor for Specific Types <====//
        add_filter('use_block_editor_for_post_type', function ($status, $type) use ($pds_gb_cpt) {
            //===> if the Post-Type has Editor Disabled <===//
            if (isset($pds_gb_cpt[$type]) && $pds_gb_cpt[$type] === true) return false;
            //===> Else Return the Status <===//
            return $status;
        }, 10, 2);
    endif;

    //===> Set Taxonomies <===//
    if (get_option('pds_taxonomies')) :
        foreach(get_option('pds_taxonomies') as $taxonomy) {
            $taxonomy = (array) $taxonomy;
            //===> if the Taxonomy is Enabled <===//
            if(isset($taxonomy['enable']) && $taxonomy['enable'] == true) { pds_tax_create($taxonomy); }
            //===> Register String for Translation <===//
            if (function_exists('pll_register_string')) {
                pll_register_string("pds-blocks", $post_type["label"]);
                pll_register_string("pds-blocks", $post_type["label_singular"]);
            }
        }
    endif;

    //===> Set Patterns <===//
    if (get_option('block_patterns')) :
        foreach(get_option('block_patterns') as $pattern) {
            $pattern = (array) $pattern;
            //===> if the Pattern is Enabled <===//
            pds_add_pattern($pattern['name'], array(
                'width' => isset($pattern['width']) ? intval($pattern['width']) : 320,
                'title' => $pattern['title'],
                'category' => $pattern['category'],
                'content'  => $pattern['content'],
            ));
        }
    endif;

    //====> Setup Users Roles <====//
    if (!function_exists('pds_users_roles_register')) :
        function pds_users_roles_register() {
            //===> Get Current Roles <===//
            global $wp_roles;
            $users_roles = $wp_roles->roles;

            //===> Set Rules <===//
            update_option("users_roles", $users_roles);
        };

        add_action('init', 'pds_users_roles_register');
    endif;

    //====> Setup Countries <====//
    if (!function_exists('pds_countries_register')) :
        function pds_countries_register() {
            //===> CDN URL <===//
            $px_cdn_assets = "https://cdn.jsdelivr.net/gh/EngCode/pdb-assets";
            // if ($cdn) { $px_cdn_assets = WP_PLUGIN_DIR.'/pds-blocks/assets'; }

            if (!get_option("countries_list")) {
                //====> Get Countries JSON <====//
                $countries_data = wp_remote_get($px_cdn_assets."/json/countries.json");
                $countries_phone = wp_remote_get($px_cdn_assets."/json/countries-phones.json");
    
                //====> Convert the JSON data into a PHP object <====//
                $phones_json = json_decode($countries_phone);
                $countries_json = json_decode($countries_data);
    
                //====> Create new List <====//
                $countries = array();
    
                //====> Loop through the JSON Object <====//
                foreach ($countries_json as $country) {
                    //===> Get Phone Number <===//
                    $country_phone = "";
                    foreach ($phones_json as $phone) {
                        if (strtolower($country->code) == strtolower($phone->code)) { $country_phone = $phone->dial_code; }
                    }
    
                    //===> add the Country to the List <===//
                    $countries[strtolower($country->code)] = array(
                        "iso" => $country->iso,
                        "name" => $country->name,
                        "code" => $country->code,
                        "dial_code" => $country_phone,
                        "capital" => isset($country->capital) ? $country->capital : $country->name,
                        "flag" => $px_cdn_assets."/img/countries/".$country->flag_4x3,
                        "flag_1x1" => $px_cdn_assets."/img/countries/".$country->flag_1x1,
                    );
                }
    
                //===> Set Countries <===//
                update_option("countries_list", $countries);
            }
        };

        add_action('pds_blocks_active', 'pds_countries_register');
    endif;

    //====> Set Custom Metaboxes <====//
    $metaboxes = get_option('pds_metabox');
    if ($metaboxes): 
        pds_metabox_create($metaboxes); 
    endif;
?>