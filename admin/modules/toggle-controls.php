<?php
/**
 * Phenix Blocks Admin Controls
 * @since Phenix WP 1.0
 * @return void
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//====> Default Options <====//
if (!function_exists('pds_toggle_controls')) :
    /**
     * Register Default Options for Phenix Blocks
     * @since Phenix Blocks 1.0
     * @return void
    */

    function pds_toggle_controls($controls_list) {
        foreach ($controls_list as $control_item) {
            //===> Declare Options <===//
            $isChecked = '';
            $has_icon  = '';

            //===> Get Options <===//
            if (get_option($control_item["name"])) { $isChecked = 'checked'; }
            if (isset($control_item["icon"])) $has_icon = '<img src="'.esc_attr($control_item["icon"]).'" class="icon x2"> ';

            //===> Print the Data <===//
            echo '<label class="small option-control flexbox flow-reverse align-center-y align-between fs-14 weight-medium" data-type="switch">';
                echo '<input type="checkbox" name="'.$control_item["name"].'" '.$isChecked.'><span class="switch"></span>';
                echo '<span>'.$has_icon.$control_item["title"].'</span>';
            echo '</label>';
        }
    }
endif;