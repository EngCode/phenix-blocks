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
        //===> Create Fields <===//
        function pds_metabox_fields_create($metabox_group) {
            //===> Output <===//
            $output = '';

            //===> Create Fields <===//
            foreach($metabox_group["fields"] as $metabox) {
                //===> Get Current Value <===//
                $current_value = get_post_meta(get_the_ID(), $metabox["name"], true);

                //===> Type Check Points <===//
                $type_checkpoints = array(
                    "isSelect" => substr($metabox["type"], 0) === "select",
                    "isMedia"  => substr($metabox["type"], 0) === "media",
                    "isTextarea" => substr($metabox["type"], 0) === "textarea",
                    "isOption" => substr($metabox["type"], 0) === "option",
                );

                //===> Create Field Label <===//
                $label_html = '<label class="fs-14 mb-5">' . $metabox["label"] . '</label>';
                $field_html = '';

                //===> for Text Field Type <===//
                if (!$type_checkpoints["isOption"] || !$type_checkpoints["isSelect"] || !$type_checkpoints["isMedia"] || !$type_checkpoints["isTextarea"]) {
                    $field_html = '<input type="'.$metabox["type"].'" name="'.$metabox["name"].'" value="'.$current_value.'" class="form-control radius-sm fs-13 mb-20" />';
                }

                //===> Return Final HTML <===//
                $output .= $label_html . $field_html;
            }

            return $output;
        };

        //===> for Each Metabox as Group <===//
        foreach($metaboxes as $metabox_group) {
            //===> Register Post Types Metaboxes <===//
            if (in_array("post_types", $metabox_group["datatype"])) {
                //===> Register the Metaboxes Group <===//
                add_action('add_meta_boxes', function() use ($metabox_group) {
                    foreach ($metabox_group["post_types"] as $post_type) {
                        //====> Display Metaboxes <=====//
                        add_meta_box($metabox_group["name"], $metabox_group["label"], function() use ($metabox_group) {
                            //===> Create Nonce Field <===//
                            wp_nonce_field(basename(__FILE__), $metabox_group["name"] . '_nonce');
                            
                            //===> Create Fields <===//
                            echo pds_metabox_fields_create($metabox_group);
                        }, $post_type, 'side', 'high', 0);
                    }
                });

                //====> Save Metaboxes <=====//
                add_action('save_post', function ($post_id) use ($metabox_group) {
                    //===> Check Points <===//
                    if (!current_user_can('edit_post', $post_id)) return $post_id;
                    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return $post_id;
                    if (!isset($_POST[$metabox_group["name"] . '_nonce'])) return $post_id;
                    if (!wp_verify_nonce($_POST[$metabox_group["name"] . '_nonce'], basename(__FILE__))) return $post_id;

                    //===> Save Fields <===//
                    foreach($metabox_group["fields"] as $metabox) {
                        update_post_meta($post_id, $metabox["name"], $_POST[$metabox["name"]]);
                    }
                });
            } 

            if (in_array("taxonomies", $metabox_group["datatype"])) {
                foreach ($metabox_group["taxonomies"] as $taxonomy) {
                    //====> Display Metaboxes <=====//
                    add_action($taxonomy . '_edit_form_fields', function($term) use ($metabox_group) {
                        //===> Create Nonce Field <===//
                        wp_nonce_field(basename(__FILE__), $metabox_group["name"] . '_nonce');
                        //===> Create Fields <===//
                        echo '<tr class="form-field term-group-wrap"><th scope="row"><label for="custom_field">'.$metabox_group["label"].'</label></th>';
                        echo '<td>' . pds_metabox_fields_create($metabox_group) . '</td></tr>';
                    });
        
                    //====> Display Metaboxes <=====//
                    add_action($taxonomy . '_add_form_fields', function($term) use ($metabox_group) {
                        //===> Create Nonce Field <===//
                        wp_nonce_field(basename(__FILE__), $metabox_group["name"] . '_nonce');
                        //===> Create Fields <===//
                        echo '<div class="form-field fluid ">';
                            echo pds_metabox_fields_create($metabox_group);
                        echo '</div>';
                    });
        
                    //====> Save Metaboxes in Edit Mode <=====//
                    add_action('edited_' . $taxonomy, function ($term_id) use ($metabox_group) {
                        //===> Check Points <===//
                        if (!current_user_can('edit_term', $term_id)) return $term_id;
                        if (!isset($_POST[$metabox_group["name"] . '_nonce'])) return $term_id;
                        if (!wp_verify_nonce($_POST[$metabox_group["name"] . '_nonce'], basename(__FILE__))) return $term_id;
        
                        //===> Save Fields <===//
                        foreach($metabox_group["fields"] as $metabox) {
                            update_term_meta($term_id, $metabox["name"], $_POST[$metabox["name"]]);
                        }
                    });

                    //====> Save Metaboxes in Creating Mode <=====//
                    add_action('created_' . $taxonomy, function ($term_id) use ($metabox_group) {
                        //===> Check Points <===//
                        if (!current_user_can('edit_term', $term_id)) return $term_id;
                        if (!isset($_POST[$metabox_group["name"] . '_nonce'])) return $term_id;
                        if (!wp_verify_nonce($_POST[$metabox_group["name"] . '_nonce'], basename(__FILE__))) return $term_id;
        
                        //===> Save Fields <===//
                        foreach($metabox_group["fields"] as $metabox) {
                            update_term_meta($term_id, $metabox["name"], $_POST[$metabox["name"]]);
                        }
                    });
                }
            }
        }
    }
endif;