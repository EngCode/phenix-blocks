<?php
    //===> Settings Panel <===//
    if (!function_exists('pds_settings_panel')) {
        function pds_settings_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/general-settings.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        }
    }

    //===> Blocks Panel <===//
    if (!function_exists('pds_blocks_panel')) {
        function pds_blocks_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/blocks-settings.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        }
    }

    //===> Optimization Panel <===//
    if (!function_exists('pds_optimization_panel')) {
        function pds_optimization_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/optimization.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        }
    }

    //===> General Blocks Panel <===//
    if (!function_exists('pds_core_blocks_panel')) {
        function pds_core_blocks_panel() {
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get Panel Template <===//
            include(dirname(__FILE__) . '/panels/core-blocks.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        }
    }

    //====> Create the Page <====//
    if (function_exists('pds_add_admin_page')) :
        //===> Create New Page <===//
        echo pds_add_admin_page(
            //==> Page Title <==//
            'Phenix Blocks Settings',
            //==> Page Description <==//
            'here you can enable or disable phenix blocks plugin features and options.',
            //==> Options Form Slug <==//
            'pds-admin',
            //==> Tabs List <==//
            array(
                //==> Tabs Panel <==//
                array(
                    "title" => "General Settings",
                    "slug"  => "pds-settings",
                    "icon"  => "far fa-cog",
                    "content" => 'pds_settings_panel',
                ),
                //==> Tabs Panel <==//
                array(
                    "title" => "Phenix Blocks",
                    "slug"  => "pds-blocks",
                    "icon"  => "far fa-layer-group",
                    "content" => 'pds_blocks_panel',
                    "description" => 'by default phenix blocks are enabled to replace the core blocks wthin gutenberg, and in the options below you can choose which "phenix blocks" to enable, be sure to select only the blocks that you need and will use.',
                ),
                //==> Tabs Panel <==//
                array(
                    "title" => "Optimization",
                    "slug"  => "pds-optimization",
                    "icon"  => "far fa-rocket",
                    "content" => 'pds_optimization_panel',
                ),
                //==> Tabs Panel <==//
                array(
                    "title" => "Core Blocks",
                    "slug"  => "pds-core-blocks",
                    "icon"  => "far fa-layer-group",
                    "content" => 'pds_core_blocks_panel',
                    "description" => 'by default phenix blocks disables the uncessary default core blocks wthin gutenberg to replace it with its own, and in the options below you can choose which core blocks to enable, be sure to select only the blocks that you need and will use.',
                ),
            ),
            //==> Show Submit Button <==//
            true
        );
    endif;

    //===> Get Script <===//
    include(dirname(__FILE__) . '/modules/scripts.php');
?>