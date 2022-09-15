<?php
    //====> Shared Options <====//
    $assets_url = plugin_dir_url(__FILE__);
    $icons_url = str_replace('admin/', 'assets/img/blocks/core/', $assets_url);

    //===> Locations Panel <===//
    if (!function_exists('pds_menus_locations_panel')) {
        function pds_menus_locations_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/menus-locations.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        }
    }

    //===> Locations Panel <===//
    if (!function_exists('pds_add_menu_panel')) {
        function pds_add_menu_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/menus-location-add.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        }
    }

    //====> Create Page <====//
    if (function_exists('pds_add_admin_page')) :
        //===> Create New Page <===//
        echo pds_add_admin_page(
            //==> Page Title <==//
            'WP Menu Creator',
            //==> Page Description <==//
            'here you can add and remove Dynamic Menu Locations for your blocks.',
            //==> Tabs List <==//
            array(
                //==> Tabs Panel <==//
                array(
                    "title" => "WP Menu Locations",
                    "slug"  => "pds-current-locations",
                    "icon"  => "far fa-list",
                    "content" => 'pds_menus_locations_panel',
                    "description" => 'in here you can manage the menu locations created by phenix-blocks.',
                ),
                //==> Tabs Panel <==//
                array(
                    "title" => "Add New Location",
                    "slug"  => "pds-blocks",
                    "icon"  => "fas fa-cog",
                    "content" => 'pds_add_menu_panel',
                    "description" => 'in the form below you can add a new menu location all fields are reqiured.',
                )
            ),
        );
    endif;

    //===> Get Script <===//
    include(dirname(__FILE__) . '/assets/scripts.php');
?>