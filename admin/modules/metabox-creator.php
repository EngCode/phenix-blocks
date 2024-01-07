<?php
/**
 * Phenix Blocks Admin Controls
 * @since Phenix WP 1.0
 * @return void
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//====> Posts Type [Creation] <====//
if (!function_exists('pds_metabox_create')) :
    /**
     * Register new Custom Post Types
     * @since Phenix Blocks 1.0
     * @return void
    */

    function pds_metabox_create ($metaboxes) {
        //===> for Each Metabox as Group <===//
        foreach($metaboxes as $metabox_group) {
            //===> Register Post Types Metaboxes <===//
            if ($metabox_group["datatype"] == "post-type") {
                //===> Register the Metaboxes Group <===//
                add_action('add_meta_boxes', function() use ($metabox_group) {
                    //====> Display Metabox <=====//
                    add_meta_box($metabox_group["name"], $metabox_group["label"], function() use ($metabox_group) {
                        foreach($metabox_group["fields"] as $metabox) {                 
                            //===> Get Current Value <===//
                            $current_value = get_post_meta(get_the_ID(), $metabox["name"], true);
       
                            var_dump($current_value);
                            //===> Create Field Label <===//
                            echo '<label class="fs-14 mb-5">' . $metabox["label"] . '</label>';
    
                            //===> for Text Field Type <===//
                            if ($metabox["type"] === "number" || $metabox["type"] === "text") {
                                echo '<input type="'.$metabox["type"].'" name="'.$metabox["name"].'" value="'.$current_value.'" class="form-control radius-sm fs-13 mb-20" />';
                            }
                        }
                    }, $metabox_group["post_types"], 'side', 'default', 0);
                });

                //====> Save Metaboxes <=====//
                add_action('save_post', function ($post_id) use ($metabox_group) {
                    //===> Check Points <===//
                    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return $post_id;
                    if (!current_user_can('edit_post', $post_id)) return $post_id;

                    //===> Save Fields <===//
                    foreach($metabox_group["fields"] as $metabox) {
                        update_post_meta($post_id, $metabox["name"], $_POST[$metabox["name"]]);
                    }
                });
            } else if ($metabox_group["datatype"] == "taxonomy") {

            }
        }
    }
endif;