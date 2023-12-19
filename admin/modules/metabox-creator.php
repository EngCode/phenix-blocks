<?php
/**
 * Phenix Blocks Admin Controls
 * @since Phenix WP 1.0
 * @return void
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//====> Posts Type [Creation] <====//
if (!function_exists('pds_cpt_create')) :
    /**
     * Register new Custom Post Types
     * @since Phenix Blocks 1.0
     * @return void
    */

    function pds_metabox_create ($options) {
        add_action('init', function () use ($options) {
            //==== Get Options ====//
            $name = $options["name"];
            $label = $options["label"];
            $field_type = $options["field_type"];
            $field_data = $options["field_data"];

            //====> Fields Builder <====//
            function pds_custom_meta_field() {
                //===> Create Field Label <===//
                echo '<label class="fs-14 mb-5">' . $label . '</label>';

                //===> for Text Field Type <===//
                if ($field_type === "") {
                    echo '<input type="text" name="'.$name.'" value="'.get_post_meta($post->ID, $name, true).'"  placeholder="'.$label.'" class="form-control radius-sm fs-13" />';
                }
            };

            //====> Register the Meta-Box <====//
            add_meta_box($name, $label, "pds_custom_meta_field", $field_data, 'side', 'default', 0);
        });
    }
endif;