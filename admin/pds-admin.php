<?php
    /**
     * Main Admin Page for Phenix Blocks
     * @since Phenix WP 1.0
     * @return void
    */

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
                __('Home', 'phenix'),
                __('Home', 'phenix'),
                'edit_posts',
                'pds-dashboard',
                'pds_dash_page',
                plugin_dir_url(__DIR__).'assets/img/px-logo/px-dashicon.svg', 0
            );

            //===> General Settings <===//
            add_menu_page(
                __('Phenix Settings', 'phenix'),
                __('Phenix Blocks', 'phenix'),
                'manage_options',
                'pds-admin',
                'pds_admin_page',
                plugin_dir_url(__DIR__).'assets/img/px-logo/px-dashicon.svg', 60
            );

            //===> Data Collection <===//
            add_submenu_page('pds-admin',
                __('Custom Data Collection', 'phenix'),
                __('Data Collection', 'phenix'),
                'manage_options',
                'pds-data-collection',
                'pds_data_collection'
            );
            
            //===> Remove Menu Items <===//
            $removable = [
                'flamingo',
                'index.php',
                'upload.php',
                'plugins.php',
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
            ];

            foreach ($removable_sub as $item) { remove_submenu_page(...$item); }

            //===> Organize Menu Items <===//
            $movable = [
                ['themes.php', null, __('Plugins', 'phenix'), 'manage_options', 'plugins.php'],
                ['users.php', null, __('Comments', 'phenix'), 'manage_options', 'edit-comments.php'],
                ['wpcf7', null, __('Address Book', 'phenix'), 'manage_options', 'admin.php?page=flamingo'],
                ['tools.php', null, __('Media Uploads', 'phenix'), 'manage_options', 'upload.php'],
                ['options-general.php', null, __('Core Updates', 'phenix'), 'manage_options', 'update-core.php'],
                ['pds-dashboard', null, __('WordPress', 'phenix'), 'edit_posts', 'about.php'],
                ['wpcf7', null, __('Inbox Messages', 'phenix'), 'edit_posts', 'admin.php?page=flamingo_inbound'],
                ['pds-dashboard', __('Reusable Blocks', 'phenix'), __('Reusable Blocks', 'phenix'), 'edit_posts', 'edit.php?post_type=wp_block'],
                ['pds-admin', __('Reusable Blocks', 'phenix'), __('Reusable Blocks', 'phenix'), 'edit_posts', 'edit.php?post_type=wp_block'],
            ];

            foreach ($movable as $item) { add_submenu_page(...$item); }
        }

        add_action('admin_menu', 'pds_admin_menu', 11);
    endif;

    //====> Include Modules <====//
    include(dirname(__FILE__) . '/modules/api-creator.php');
    include(dirname(__FILE__) . '/modules/cpt-creator.php');
    include(dirname(__FILE__) . '/modules/tax-creator.php');
    include(dirname(__FILE__) . '/modules/page-creator.php');
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
        array('pds_metabox', 'pds-data-collection', true),
        array('theme_parts', 'pds-data-collection', true),
        array('pds_taxonomies', 'pds-data-collection', true),
        array('menu_locations', 'pds-data-collection', true),
        array('block_patterns', 'pds-data-collection', true),
        array('theme_templates', 'pds-data-collection', true),

        //===> General Settings <===//
        array('pds_admin_style', 'pds-admin'),
        array('pds_gfonts', 'pds-admin', true),
        array('pds_icon_font', 'pds-admin', true),
        array('pds_icon_font_key', 'pds-admin', true),
        array('pds_primary_font', 'pds-admin', true),
        array('pds_secondary_font', 'pds-admin', true),
        array('pds_template_parts', 'pds-admin'),
        
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
    if (get_option('menu_locations')) :
        register_nav_menus( get_option('menu_locations') );
    endif;

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
        }
    endif;

    //===> Set Taxonomies <===//
    if (get_option('pds_taxonomies')) :
        foreach(get_option('pds_taxonomies') as $taxonomy) {
            //===> if the Post-Type is Enabled <===//
            if(isset($taxonomy['enable']) && $taxonomy['enable'] == true) { pds_tax_create($taxonomy); }
        }
    endif;

    //===> Set Patterns <===//
    if (get_option('block_patterns')) :
        foreach(get_option('block_patterns') as $pattern) {
            //===> if the Post-Type is Enabled <===//
            pds_add_pattern($pattern['name'], array(
                'title'    => $pattern['title'],
                'category' => $pattern['category'],
                'content'  => $pattern['content']
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
?>