<?php
/**
 * Phenix Blocks Admin Controls
 * @since Phenix WP 1.0
 * @return void
*/

//====> Default Options <====//
if (!function_exists('pds_add_admin_page')) :
    /**
     * Register Default Options for Phenix Blocks
     * @since Phenix Blocks 1.0
     * @return void
    */

    function pds_add_admin_page($page_title, $page_description, $form_page, $tabs_list, $submit_button) {
        //===> Start Data <===//
        $template_markup = '';
        ob_start();

        //===> Get the File <===//
        include(dirname(__FILE__) . '/page-layout.php');

        //===> Stop Data <===//
        $template_output = ob_get_clean();
        $template_markup .= $template_output;
        return "{$template_markup}";
    }
endif;