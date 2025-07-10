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

    //===> Create Fields <===//
    if (!function_exists('pds_metabox_fields_create')) :
        function pds_metabox_fields_create($metabox_group, $term) {
            //===> Output <===//
            $output = '';

            //===> Create Fields <===//
            foreach($metabox_group["fields"] as $metabox) {
                //===> Define Value and Metabox name <===//
                $current_value;
                $metabox = (array) $metabox;

                //===> Get Current Value <===//
                if ($term && isset($term->term_id)) {
                    $current_value = get_term_meta($term->term_id, $metabox["name"], true);
                } else {
                    $current_value = get_post_meta(get_the_ID(), $metabox["name"], true);
                }

                //===> Type Check Points <===//
                $type_checkpoints = array(
                    "isMedia"    => $metabox["type"] === "media-file",
                    "isSelect"   => $metabox["type"] === "select" || $metabox["type"] === "multi-select",
                    "isTextarea" => $metabox["type"] === "textarea",
                    "isRadio"    => $metabox["type"] === "option-radio",
                    "isSwitch"   => $metabox["type"] === "option-switch",
                    "isCheckbox" => $metabox["type"] === "option-checkbox",
                    "isRepeater" => $metabox["type"] === "repeater",
                );

                //===> Create Field Label <===//
                $label_html = '<label class="fs-14 mb-5">' . $metabox["label"] . '</label>';
                $input_classes = "form-control radius-sm fs-13 mb-20 tx-nowrap flow-nowrap";
                $field_html = '';

                //===> for Textarea Type <===//
                if ($type_checkpoints["isTextarea"]) {
                    $field_html = $label_html;
                    $field_html .= '<textarea name="'.$metabox["name"].'" class="'.$input_classes.'">'.$current_value.'</textarea>';
                }

                //===> for Media Uploader Type <===//
                else if ($type_checkpoints["isMedia"]) {
                    //===> Get the File Name and Type <===//
                    $file_name = basename($current_value);
                    // $file_type = (array) wp_check_filetype($file_name);
                    //===> Check Types <===//
                    // if (strpos($file_type['type'], 'image') !== false) {$file_type = 'image';}
                    // if (strpos($file_type['type'], 'video') !== false) {$file_type = 'video';}
                    // if (strpos($file_type['type'], 'audio') !== false) {$file_type = 'audio';}
                    //===> Generate Output <===//
                    $field_html =  '<label class="fs-14 mb-5">'.$metabox["label"].'</label>';
                    $field_html .= '<div class="col-auto px-custom-uploader flexbox flow-nowrap align-between border-1 border-solid border-alpha-10 bg-white radius-sm pds-15 align-center-y mb-20">';
                        $field_html .=  '<span class="input-value tx-nowrap">'.$file_name.'</span>';
                        $field_html .=  '<button type="button" class="uploader-btn btn gray small radius-sm radius-end" onClick="PxWpUploader(event)">'.__("Replace", "pds-blocks").'</button>';
                        $field_html .=  '<input type="hidden" name="'.$metabox["name"].'" class="uploader-input" value="'.$current_value.'" />';
                    $field_html .= '</div>';
                }

                //===> for Repeater Type <===//
                else if ($type_checkpoints["isRepeater"]) {
                    $field_html = $label_html;
                    $field_html .= '<div class="px-form-repeater" data-fields-key="'.$metabox["name"].'">';
                    $field_html .= '<div class="px-repeater-items pdx-15 pdt-15 border-1 border-solid border-alpha-10 radius-sm">';

                    //===> Get existing repeater data <===//
                    $repeater_data = maybe_unserialize($current_value);
                    if (!is_array($repeater_data)) $repeater_data = array();

                    //===> Create the first row (template row) <===//
                    $field_html .= '<div class="px-form-repeater-fields flexbox flow-nowrap align-stretch mb-10" data-item-key="0">';
                    
                    //===> Create sub-fields <===//
                    if (isset($metabox["sub_fields"]) && is_array($metabox["sub_fields"])) {
                        foreach ($metabox["sub_fields"] as $sub_field) {
                            $sub_field = (array) $sub_field;
                            $sub_value = isset($repeater_data[0][$sub_field["name"]]) ? esc_attr($repeater_data[0][$sub_field["name"]]) : '';
                            
                            $field_html .= '<div class="px-repeater-sub-field flex-1 mx-5">';
                            $field_html .= '<label class="fs-12 mb-5 weight-bold">'.$sub_field["label"].'</label>';
                            
                            //===> Handle different sub-field types <===//
                            if ($sub_field["type"] === "select" && isset($sub_field["options"])) {
                                $field_html .= '<select name="'.$sub_field["name"].'" class="form-control radius-sm fs-12">';
                                foreach ($sub_field["options"] as $option_value => $option_label) {
                                    $selected = ($sub_value === $option_value) ? 'selected="selected"' : '';
                                    $field_html .= '<option value="'.$option_value.'" '.$selected.'>'.$option_label.'</option>';
                                }
                                $field_html .= '</select>';
                            } else if ($sub_field["type"] === "textarea") {
                                $field_html .= '<textarea name="'.$sub_field["name"].'" class="form-control radius-sm fs-12" rows="2">'.$sub_value.'</textarea>';
                            } else {
                                $field_html .= '<input type="'.$sub_field["type"].'" name="'.$sub_field["name"].'" value="'.$sub_value.'" class="form-control radius-sm fs-12" />';
                            }
                            $field_html .= '</div>';
                        }
                    }
                    
                    $field_html .= '</div>'; // End first row

                    //===> Create additional existing rows <===//
                    if (!empty($repeater_data)) {
                        for ($i = 1; $i < count($repeater_data); $i++) {
                            $row_data = $repeater_data[$i];
                            
                            $field_html .= '<div class="px-form-repeater-fields flexbox flow-nowrap align-stretch mb-10 p-10 border-1 border-solid border-alpha-10 radius-sm" data-item-key="'.$i.'">';
                            
                            //===> Create sub-fields for this row <===//
                            if (isset($metabox["sub_fields"]) && is_array($metabox["sub_fields"])) {
                                foreach ($metabox["sub_fields"] as $sub_field) {
                                    $sub_field = (array) $sub_field;
                                    $sub_value = isset($row_data[$sub_field["name"]]) ? esc_attr($row_data[$sub_field["name"]]) : '';
                                    $sub_field_name = $metabox["name"].'['.$i.']['.$sub_field["name"].']';
                                    
                                    $field_html .= '<div class="px-repeater-sub-field flex-1 mx-5">';
                                    $field_html .= '<label class="fs-12 mb-5 weight-bold">'.$sub_field["label"].'</label>';
                                    
                                    //===> Handle different sub-field types <===//
                                    if ($sub_field["type"] === "select" && isset($sub_field["options"])) {
                                        $field_html .= '<select name="'.$sub_field_name.'" class="form-control radius-sm fs-12">';
                                        foreach ($sub_field["options"] as $option_value => $option_label) {
                                            $selected = ($sub_value === $option_value) ? 'selected="selected"' : '';
                                            $field_html .= '<option value="'.$option_value.'" '.$selected.'>'.$option_label.'</option>';
                                        }
                                        $field_html .= '</select>';
                                    } else if ($sub_field["type"] === "textarea") {
                                        $field_html .= '<textarea name="'.$sub_field_name.'" class="form-control radius-sm fs-12" rows="2">'.$sub_value.'</textarea>';
                                    } else {
                                        $field_html .= '<input type="'.$sub_field["type"].'" name="'.$sub_field_name.'" value="'.$sub_value.'" class="form-control radius-sm fs-12" />';
                                    }
                                    $field_html .= '</div>';
                                }
                            }
                            
                            //===> Add remove button for existing rows <===//
                            $field_html .= '<div class="px-repeater-actions align-self-end mx-5">';
                            $field_html .= '<button type="button" class="btn red small radius-sm px-repeater-remove fa fa-minus" title="'.__("Remove", "pds-blocks").'"></button>';
                            $field_html .= '</div>';
                            $field_html .= '</div>';
                        }
                    }

                    $field_html .= '</div>'; // End px-repeater-items

                    //===> Add new row button <===//
                    $field_html .= '<button type="button" class="btn btn-icon primary small radius-sm mt-10 px-repeater-add fa fa-plus">';
                    $field_html .= ' '.__("Add New", "pds-blocks");
                    $field_html .= '</button>';

                    $field_html .= '</div>'; // End px-form-repeater
                }

                //===> for Select Type <===//
                else if ($type_checkpoints["isSelect"]) {
                    $field_html = $label_html;
                    $field_html .= '<select name="'.$metabox["name"].'" class="'.$input_classes.'">';
                    
                    //===> Handle dynamic options <===//
                    $options = array();
                    if (isset($metabox["options"])) {
                        if (is_array($metabox["options"])) {
                            //===> Static options array <===//
                            $options = $metabox["options"];
                        } else if (is_string($metabox["options"])) {
                            //===> Dynamic options from post type <===//
                            if (strpos($metabox["options"], 'post_type:') === 0) {
                                $post_type = str_replace('post_type:', '', $metabox["options"]);
                                $posts = get_posts(array(
                                    'post_type' => $post_type,
                                    'posts_per_page' => -1,
                                    'post_status' => 'publish',
                                    'orderby' => 'title',
                                    'order' => 'ASC'
                                ));
                                
                                $options[''] = '-- Select ' . ucfirst($post_type) . ' --';
                                foreach ($posts as $post) {
                                    $options[$post->ID] = $post->post_title;
                                }
                            }
                        }
                    }
                    
                    //===> Generate select options <===//
                    foreach ($options as $option_value => $option_label) {
                        $selected = ($current_value == $option_value) ? 'selected="selected"' : '';
                        $field_html .= '<option value="'.$option_value.'" '.$selected.'>'.$option_label.'</option>';
                    }
                    
                    $field_html .= '</select>';
                }

                //===> For Swutch Toggles <===//
                else if ($type_checkpoints["isSwitch"]) {
                    $checked = ($current_value === 'yes' || $current_value === true) ? 'checked' : '';
                    $field_html .= '<label class="small option-control flexbox flow-reverse align-center-y align-between fs-14 weight-medium" data-type="switch">';
                    $field_html .= '<input type="checkbox" name="'.$metabox["name"].'" value="yes" '.$checked.' class="'.$input_classes.'" /><span class="switch"></span>';
                    $field_html .= '<span>'.$metabox["label"].'</span>';
                    $field_html .= '</label>';
                }

                //===> for Input Field Type <===//
                else {
                    $field_html = $label_html;
                    $field_html .= '<input type="'.$metabox["type"].'" name="'.$metabox["name"].'" value="'.$current_value.'" class="'.$input_classes.'" />';
                }

                //===> Return Final HTML <===//
                $output .= '<div class="col col-12 '.$metabox["type"].'-field">'.$field_html.'</div>';
            }

            return $output;
        };
    endif;

    //===> Create Metaboxes <===//
    function pds_metabox_create ($metaboxes) {
        //===> for Each Metabox as Group <===//
        foreach($metaboxes as $metabox_group) {
            //===> Check for Data <===//
            $metabox_group = (array) $metabox_group;

            //===> Register Post Types Metaboxes <===//
            if (in_array("post_types", $metabox_group["datatype"])) {
                //===> Register the Metaboxes Group <===//
                add_action('add_meta_boxes', function() use ($metabox_group) {
                    foreach ($metabox_group["post_types"] as $post_type) {
                        //===> Get Position <===//
                        $position = isset($metabox_group["position"]) ? $metabox_group["position"] : 'side';

                        //====> Display Metaboxes <=====//
                        add_meta_box($metabox_group["name"], $metabox_group["label"], function() use ($metabox_group) {
                            //===> Create Nonce Field <===//
                            wp_nonce_field(basename(__FILE__), $metabox_group["name"] . '_nonce');
                            //===> Create Fields <===//
                            echo pds_metabox_fields_create($metabox_group, false);
                        }, $post_type, $position, 'high', 0);
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
                        $metabox = (array) $metabox;
                        
                        //===> Handle repeater fields differently <===//
                        if ($metabox["type"] === "repeater") {
                            $repeater_data = array();
                            
                            if (isset($_POST[$metabox["name"]]) && is_array($_POST[$metabox["name"]])) {
                                foreach ($_POST[$metabox["name"]] as $index => $row_data) {
                                    if (is_array($row_data)) {
                                        $clean_row = array();
                                        foreach ($row_data as $field_key => $field_value) {
                                            $clean_row[$field_key] = sanitize_text_field($field_value);
                                        }
                                        
                                        //===> Only save non-empty rows <===//
                                        $has_content = false;
                                        foreach ($clean_row as $value) {
                                            if (!empty(trim($value))) {
                                                $has_content = true;
                                                break;
                                            }
                                        }
                                        
                                        if ($has_content) {
                                            $repeater_data[] = $clean_row;
                                        }
                                    }
                                }
                            }
                            
                            //===> Save or delete meta <===//
                            if (!empty($repeater_data)) {
                                update_post_meta($post_id, $metabox["name"], $repeater_data);
                            }
                        } 
                        //===> Handle regular fields <===//
                        elseif (isset($_POST[$metabox["name"]])) {
                            update_post_meta($post_id, $metabox["name"], $_POST[$metabox["name"]]);
                        }
                    }
                });
            } 

            //===> Register Taxonomies Metaboxes <===//
            if (in_array("taxonomies", $metabox_group["datatype"])) {
                foreach ($metabox_group["taxonomies"] as $taxonomy) {
                    //====> Display Metaboxes in Edit Mode  <=====//
                    add_action($taxonomy . '_edit_form_fields', function($term) use ($metabox_group) {
                        //===> Create Nonce Field <===//
                        wp_nonce_field(basename(__FILE__), $metabox_group["name"] . '_nonce');
                        //===> Create Fields <===//
                        echo '<tr class="form-field term-group-wrap"><th scope="row"><label for="custom_field">'.$metabox_group["label"].'</label></th>';
                        echo '<td>'. pds_metabox_fields_create($metabox_group, $term) . '</td></tr>';
                    });
        
                    //====> Display Metaboxes in Creating Mode<=====//
                    add_action($taxonomy . '_add_form_fields', function($term) use ($metabox_group) {
                        //===> Create Nonce Field <===//
                        wp_nonce_field(basename(__FILE__), $metabox_group["name"] . '_nonce');
                        //===> Create Fields <===//
                        echo '<div class="form-field fluid ">';
                            echo pds_metabox_fields_create($metabox_group, $term);
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
                            $metabox = (array) $metabox;
                            
                            //===> Handle repeater fields differently <===//
                            if ($metabox["type"] === "repeater") {
                                $repeater_data = array();
                                
                                if (isset($_POST[$metabox["name"]]) && is_array($_POST[$metabox["name"]])) {
                                    foreach ($_POST[$metabox["name"]] as $index => $row_data) {
                                        if (is_array($row_data)) {
                                            $clean_row = array();
                                            foreach ($row_data as $field_key => $field_value) {
                                                $clean_row[$field_key] = sanitize_text_field($field_value);
                                            }
                                            
                                            //===> Only save non-empty rows <===//
                                            $has_content = false;
                                            foreach ($clean_row as $value) {
                                                if (!empty(trim($value))) {
                                                    $has_content = true;
                                                    break;
                                                }
                                            }
                                            
                                            if ($has_content) {
                                                $repeater_data[] = $clean_row;
                                            }
                                        }
                                    }
                                }
                                
                                //===> Save or delete meta <===//
                                if (!empty($repeater_data)) {
                                    update_term_meta($term_id, $metabox["name"], $repeater_data);
                                }
                            } else {
                                //===> Handle regular fields <===//
                                if (isset($_POST[$metabox["name"]])) {
                                    update_term_meta($term_id, $metabox["name"], $_POST[$metabox["name"]]);
                                }
                            }
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
                            $metabox = (array) $metabox;
                            
                            //===> Handle repeater fields differently <===//
                            if ($metabox["type"] === "repeater") {
                                $repeater_data = array();
                                
                                if (isset($_POST[$metabox["name"]]) && is_array($_POST[$metabox["name"]])) {
                                    foreach ($_POST[$metabox["name"]] as $index => $row_data) {
                                        if (is_array($row_data)) {
                                            $clean_row = array();
                                            foreach ($row_data as $field_key => $field_value) {
                                                $clean_row[$field_key] = sanitize_text_field($field_value);
                                            }
                                            
                                            //===> Only save non-empty rows <===//
                                            $has_content = false;
                                            foreach ($clean_row as $value) {
                                                if (!empty(trim($value))) {
                                                    $has_content = true;
                                                    break;
                                                }
                                            }
                                            
                                            if ($has_content) {
                                                $repeater_data[] = $clean_row;
                                            }
                                        }
                                    }
                                }
                                
                                //===> Save or delete meta <===//
                                if (!empty($repeater_data)) {
                                    update_term_meta($term_id, $metabox["name"], $repeater_data);
                                } else {
                                    delete_term_meta($term_id, $metabox["name"]);
                                }
                            } else {
                                //===> Handle regular fields <===//
                                if (isset($_POST[$metabox["name"]])) {
                                    update_term_meta($term_id, $metabox["name"], $_POST[$metabox["name"]]);
                                } else {
                                    // For checkbox/switch fields that aren't checked, delete the meta
                                    if ($metabox["type"] === "option-switch" || $metabox["type"] === "option-checkbox") {
                                        delete_term_meta($term_id, $metabox["name"]);
                                    }
                                }
                            }
                        }
                    });
                }
            }
        };
    }
endif;