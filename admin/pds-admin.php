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
            //===> Dashboard Settings <===//
            add_menu_page(
                __('Home', "pds-blocks"),
                __('Home', "pds-blocks"),
                'edit_posts',
                'pds-dashboard',
                'pds_dash_page',
                plugin_dir_url(__DIR__).'assets/img/px-logo/px-dashicon.svg', 0
            );

            //===> General Settings <===//
            add_menu_page(
                __('Phenix Settings', "pds-blocks"),
                __('Phenix Blocks', "pds-blocks"),
                'manage_options',
                'pds-admin',
                'pds_admin_page',
                plugin_dir_url(__DIR__).'assets/img/px-logo/px-dashicon.svg', 60
            );

            //===> Data Collection <===//
            add_submenu_page('pds-admin',
                __('Custom Data Collection', "pds-blocks"),
                __('Data Collection', "pds-blocks"),
                'manage_options',
                'pds-data-collection',
                'pds_data_collection'
            );
            
            //===> Remove Menu Items <===//
            $removable = [
                'flamingo',
                'index.php',
                'upload.php',
                'edit-comments.php',
            ];

            foreach ($removable as $item) { remove_menu_page($item); }

            //===> Remove Sub Menu Items <===//
            $removable_sub = [
                ['index.php', 'my-sites.php'],
                ['index.php', 'update-core.php'],
                ['wpcf7', 'wpcf7-integration'],
                ['tools.php', 'export-personal-data.php'],
                ['tools.php', 'erase-personal-data.php'],
                ['options-general.php', 'svg-support'],
                ['options-general.php', 'options-writing.php'],
                ['options-general.php', 'options-privacy.php'],
                ['options-general.php', 'options-discussion.php'],
                ['options-general.php', 'blocks-product-editor-for-woocommerce'],
                ['blocks-product-editor-for-woocommerce', 'pricing'],
                ['blocks-product-editor-for-woocommerce', 'contact'],
                ['blocks-product-editor-for-woocommerce', 'wp-support-forum'],
            ];

            foreach ($removable_sub as $item) { remove_submenu_page(...$item); }

            //===> Organize Menu Items <===//
            $movable = [
                ['users.php', null, __('Comments', "pds-blocks"), 'manage_options', 'edit-comments.php'],
                ['wpcf7', null, __('Address Book', "pds-blocks"), 'manage_options', 'admin.php?page=flamingo'],
                ['tools.php', null, __('Media Uploads', "pds-blocks"), 'manage_options', 'upload.php'],
                ['options-general.php', null, __('Core Updates', "pds-blocks"), 'manage_options', 'update-core.php'],
                ['pds-dashboard', null, __('WordPress', "pds-blocks"), 'edit_posts', 'about.php'],
                ['wpcf7', null, __('Inbox Messages', "pds-blocks"), 'edit_posts', 'admin.php?page=flamingo_inbound'],
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
    $pds_options_list = array(
        //===> Data Collection <===//
        array('pds_types', 'pds-data-collection', true),
        array('users_roles', 'pds-data-collection', true),
        array('pds_metabox', 'pds-data-collection', true),
        array('theme_parts', 'pds-data-collection', true),
        array('countries_list', 'pds-data-collection', true),
        array('pds_taxonomies', 'pds-data-collection', true),
        array('menu_locations', 'pds-data-collection', true),
        array('block_patterns', 'pds-data-collection', true),
        array('theme_templates', 'pds-data-collection', true),
        array('templates_meta', 'pds-data-collection', true),

        //===> General Settings <===//
        array('pds_gfonts', 'pds-admin', true),
        array('pds_admin_style', 'pds-admin'),
        array('pds_template_parts', 'pds-general'),
        array('pds_primary_font', 'pds-admin', true),
        array('pds_secondary_font', 'pds-admin', true),
        array('pds_fonts', 'pds-admin', true),
        array('pds_icon_font', 'pds-admin', true),
        array('pds_icon_font_key', 'pds-admin', true),
        array('pds_reset', 'pds-data-collection', true),

        //===> Optimization <===//
        array('pds_cdn', 'pds-admin', true),
        array('head_cleaner', 'pds-admin'),
        array('wpc7_cleaner', 'pds-admin'),
        array('wpc7_rm_styles', 'pds-admin'),
        array('wpc7_rm_scripts', 'pds-admin'),
        array('adminbar_css', 'pds-admin'),
        array('adminbar_disable', 'pds-admin'),
        array('comments_css', 'pds-admin'),
        array('newsletter_css', 'pds-admin'),
        array('jquery_remove', 'pds-admin'),
        array('blocks_optimizer', 'pds-admin'),
        array('pds_loading', 'pds-admin'),

        //===> Phenix Blocks <===//
        array('container_block', 'pds-admin'),
        array('logo_block', 'pds-admin'),
        array('navigation_block', 'pds-admin'),
        array('button_block', 'pds-admin'),
        array('row_block', 'pds-admin'),
        array('column_block', 'pds-admin'),
        array('head_block', 'pds-admin'),
        array('query_block', 'pds-admin'),
        array('taxonomies_block', 'pds-admin'),
        array('taxonomies_list_block', 'pds-admin'),
        array('theme_part_block', 'pds-admin'),
        array('group_block', 'pds-admin'),
        array('inline_elements_block', 'pds-admin'),
        array('popups_block', 'pds-admin'),
        array('media_element_block', 'pds-admin'),
        array('icon_element_block', 'pds-admin'),
        array('custom_code_block', 'pds-admin'),
        array('pds_logical_block', 'pds-admin'),
        array('pds_users_query_block', 'pds-admin'),
        array('text_elements_block', 'pds-admin'),
        
        array('search_query_block', 'pds-admin'),
        array('tabs_block', 'pds-admin'),
        array('pds_form_block', 'pds-admin'),
        array('dropdowns_block', 'pds-admin'),
        array('accordion_block', 'pds-admin'),
        array('pds_gmaps_block', 'pds-admin'),
        array('pds_progress_block', 'pds-admin'),
        array('pds_languages_block', 'pds-admin'),
        array('pds_timer_block', 'pds-admin'),

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

    //====> Create Options <====//
    function create_pds_options() {
        //===> Grape Options List <===//
        global $pds_options_list;

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
                global $pds_options_list;
                //===> Define Options List <===//
                $core_blocks = array();
                $current_options = array();

                //===> Get Option Value <===//
                foreach ($pds_options_list as $option) {
                    //===> Define Data <===//
                    $option_name = $option[0];
                    $option_api  = $option[2];

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
                register_nav_menu($location['name'], $location['title']);
            }
        }
    }

    //===> Set Post-Types <===//
    if (get_option('pds_types')) :
        foreach(get_option('pds_types') as $post_type) {
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

            //===> Register String for Translation <===//
            if (function_exists('pll_register_string')) {
                pll_register_string("pds-blocks", $post_type["label"]);
                pll_register_string("pds-blocks", $post_type["label_singular"]);
            }
        }
    endif;

    //===> Set Taxonomies <===//
    if (get_option('pds_taxonomies')) :
        foreach(get_option('pds_taxonomies') as $taxonomy) {
            //===> if the Post-Type is Enabled <===//
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
            //===> if the Post-Type is Enabled <===//
            pds_add_pattern($pattern['name'], array(
                'width' => isset($pattern['width']) ? intval($pattern['width']) : 320,
                'title' => $pattern['title'],
                'category' => $pattern['category'],
                'content'  => $pattern['content'],
            ));
        }
    endif;
    
    //===> Redirect to Dashboard <===//
    if (!function_exists('pds_dash_redirect')) :
        /**
         * Admin Page for Phenix Blocks
         * @since Phenix Blocks 1.0
         * @return void
        */
        function pds_dash_redirect(){
            wp_redirect(admin_url('admin.php?page=pds-dashboard'));
        }

        add_action('load-index.php', 'pds_dash_redirect');
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
            if (!get_option("countries_list")) {
                //====> Get Countries JSON <====//
                $countries_data = file_get_contents(WP_PLUGIN_DIR."/pds-blocks/assets/img/countries/country.json");
                $countries_phone = file_get_contents(WP_PLUGIN_DIR."/pds-blocks/assets/img/countries/phone.json");
    
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
                        "flag" => plugins_url("pds-blocks/assets/img/countries/").$country->flag_4x3,
                        "flag_1x1" => plugins_url("pds-blocks/assets/img/countries/").$country->flag_1x1,
                    );
                }
    
                //===> Set Rules <===//
                update_option("countries_list", $countries);
            }
        };

        add_action('pds_blocks_active', 'pds_countries_register');
    endif;
?>