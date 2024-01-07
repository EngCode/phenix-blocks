<?php
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;
    //====> Shared Options <====//
    $assets_url = plugin_dir_url(__FILE__);
    $icons_url = str_replace('admin/', 'assets/img/blocks/core/', $assets_url);

    //===> Types Panel <===//
    if (!function_exists('pds_types_panel')) {
        function pds_types_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/post-types.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        }
    }

    //===> Taxonomies Panel <===//
    if (!function_exists('pds_taxonomies_panel')) {
        function pds_taxonomies_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/taxonomies.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        }
    }

    //===> Locations Panel <===//
    if (!function_exists('pds_menus_locations_panel')) {
        function pds_menus_locations_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/locations.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        }
    }

    //===> Metaboxes Panel <===//
    if (!function_exists('pds_metabox_panel')) {
        function pds_metabox_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/metabox.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        }
    }

    //===> Patterns Panel <===//
    if (!function_exists('pds_patterns_panel')) {
        function pds_patterns_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/block-patterns.php');
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
            'Custom Data Collection',
            //==> Page Description <==//
            'here you can add and remove Dynamic Custom Data like Post Types, Taxonomies, Menu Locations, Metaboxes for your data.',
            //==> Options Form Slug <==//
            'pds-data-collection',
            //==> Tabs List <==//
            array(
                //==> Locations Panel <==//
                array(
                    "title" => "Menu Locations",
                    "slug"  => "pds-locations",
                    "icon"  => "far fa-list",
                    "content" => 'pds_menus_locations_panel',
                ),
                //==> Types Panel <==//
                array(
                    "title" => "Post Types",
                    "slug"  => "pds-types",
                    "icon"  => "far fa-cube",
                    "content" => 'pds_types_panel',
                ),
                //==> Taxonomies Panel <==//
                array(
                    "title" => "Taxonomies",
                    "slug"  => "pds-taxonomy",
                    "icon"  => "far fa-boxes",
                    "content" => 'pds_taxonomies_panel',
                ),
                //==> Patterns Panel <==//
                array(
                    "title" => "Block Patterns",
                    "slug"  => "pds-patterns",
                    "icon"  => "far fa-file-alt",
                    "content" => 'pds_patterns_panel',
                ),
                //==> Meta Boxes Panel <==//
                array(
                    "title" => "Metaboxes",
                    "slug"  => "pds-metabox",
                    "icon"  => "far fa-pen-field",
                    "content" => 'pds_metabox_panel',
                ),
            ),
            //==> Hide Submit Button <==//
            false
        );
    endif;
?>
<!-- Form Script -->
<script src="<?php echo $assets_url.'/data-collection.js';?>" defer></script>
