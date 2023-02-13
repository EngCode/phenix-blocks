<?php
    //====> Shared Options <====//
    $assets_url = plugin_dir_url(__FILE__);
    $icons_url = str_replace('admin/', 'assets/img/blocks/core/', $assets_url);

    //===> post-type Panel <===//
    if (!function_exists('pds_post_types_panel')) {
        function pds_post_types_panel() {
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

    //====> Create Page <====//
    if (function_exists('pds_add_admin_page')) :
        //===> Create New Page <===//
        echo pds_add_admin_page(
            //==> Page Title <==//
            'Custom Data Collections',
            //==> Page Description <==//
            'here you can add and remove Dynamic Custom Post Types And Taxonomies for your data.',
            //==> Options Form Slug <==//
            'pds-post-types',
            //==> Tabs List <==//
            array(
                //==> Tabs Panel <==//
                array(
                    "title" => "Post-Types",
                    "slug"  => "pds-post-type",
                    "icon"  => "far fa-list",
                    "content" => 'pds_post_types_panel',
                ),

                array(
                    "title" => "Taxonomies",
                    "slug"  => "pds-taxonomy",
                    "icon"  => "far fa-list",
                    "content" => 'pds_taxonomies_panel',
                )
            ),
            //==> Hide Submit Button <==//
            false
        );
    endif;

    //===> Get Script <===//
    include(dirname(__FILE__) . '/modules/scripts.php');
?>