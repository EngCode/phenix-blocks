<?php
/**
 * Setting Gutenberg for Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//====> Create Phenix Section <====//
add_filter( 'block_categories_all', function($categories, $post) {
    // Add a custom section (category) for your blocks
    $custom_category = array(
        'slug'  => 'phenix-blocks',        // Unique slug for the category
        'title' => __('Phenix Blocks', 'text-domain'), // Display name for the category
        'icon'  => 'screenoptions', // Optional: icon for the category in the list
    );

    // Add custom category to the beginning of the categories array
    array_unshift( $categories, $custom_category );

    return $categories;
}, 10, 2);

//====> Helper Functions [Check for Objects] <====//
if (!function_exists("PxToREM")) :
    function PxToREM($size, $base = 16) {
        return ((int) $size / $base) . "rem";
    }
endif;

//====> Helper Functions [Check for Objects] <====//
if (!function_exists("isObjectVal")) :
    function isObjectVal($option_value) {
        return is_object($option_value) || is_array($option_value) && count($option_value) > 0;
    }
endif;

//====> Helper Functions [Check for Boolean] <====//
if (!function_exists("isBooleanVal")) :
    function isBooleanVal($option_value) {
        return is_bool($option_value);
    }
endif;

//====> Helper Functions [Check for Strings] <====//
if (!function_exists("isNormalValue")) :
    function isNormalValue($option_value) {
        return is_string($option_value) || is_numeric($option_value);
    }
endif;

//====> Helper Functions [Columns Renderer] <====//
if (!function_exists("colsRender")) :
    function colsRender($size) {
        if (intval($size) === 0) {
            return "-auto";
        } elseif (intval($size) === 13) {
            return "";
        } else {
            return "-" . $size;
        }
    }
endif;

//====> Helper Functions [Block Options Renderer] <====//
if (!function_exists("pds_blocks_options_render")) :
    function pds_blocks_options_render($block_attributes, $slider_attrs, $grid_classes) {
        //===> PHP 8.2 Fixes <===//
        $block_attributes = (array) $block_attributes;

        //===> Grid Layout Mode <===//
        if (isset($block_attributes['className'])) {
            $grid_classes .= $block_attributes['className'].' ';
        }

        //===> Dynamic Data Setter <===//
        foreach ($block_attributes as $option_name => $option_value) {
            //===> Exclude Options <===//
            $excluded = ["id", "preview", "query", "template_part"];
            if ($option_name === "id") { $slider_attrs .= 'id="'.$option_value.'"'; }
            if (in_array($option_name, $excluded) || !isset($block_attributes[$option_name])) { continue; }

            //===> if its a Normal Values that should be string <===//
            elseif (isNormalValue($option_value)) {
                //===> Classes Options <===//
                $grid_classes .= ' ' . str_replace(',', ' ', $block_attributes[$option_name]);
            }

            //===> for Boolean Options <===//
            elseif (isBooleanVal($option_value) && $block_attributes[$option_name]) {
                if ($option_name === 'isFlexbox') { $grid_classes .= "row "; }
            }

            //===> if its object[group] Option like [style, typography, slider...] <===//
            elseif (isObjectVal($option_value)) {
                //===> loop on the Object Options <===//
                foreach ($option_value as $sub_option => $sub_value) {
                    //===> Check if the attribute is Set <===//
                    if (!isset($block_attributes[$option_name][$sub_option])) { continue; }

                    //===> Add Slider Name <===//
                    if (isset($block_attributes['flexbox']['slider']) && $block_attributes['flexbox']['slider'] === true) {
                        $grid_classes .= " px-slider ";
                    }

                    //===> Checker for Slider Mode <===//
                    if ($option_name === 'slider') {
                        //===> if not-related option return void <===//
                        if (in_array($sub_option, ["align", "nowrap", "masonry"])) { continue; }
                        //===> add data attributes <===//
                        if (strpos($sub_option, "[object") === false && $sub_value !== "") {
                            $slider_attrs .= 'data-'.$sub_option.'="'.$sub_value.'"';
                        }
                    }

                    //===> Flexbox Options <===//
                    elseif ($option_name === "flexbox" && strpos($sub_option, "cols") !== false) {
                        //===> Slider Mode <===//
                        if (isset($block_attributes['flexbox']['slider']) && $block_attributes['flexbox']['slider'] === true) {
                            $dataAttr = 'data-' . ($sub_option === "cols" ? "items" : str_replace('cols-', '', $sub_option));
                            $slider_attrs .= ' '.$dataAttr.'="'.$sub_value.'"';
                            //===> if is Slider and is Fade or one Slide per view disable flexbox <===//
                            if (isset($block_attributes['slider']['type']) && $block_attributes['slider']['type'] === 'fade') {
                                $grid_classes = str_replace('row', '', $grid_classes);
                            }
                        } else {
                            //===> add Classes <===//
                            $grid_classes .= ' ' . str_replace('cols', 'row-cols', $sub_option) . colsRender($sub_value);
                        }
                    }

                    //===> Other Options <===//
                    elseif ($option_name === "flexbox" || $option_name === "style" || $option_name === "typography") {
                        //===> Postion Absolute Sticky <===//
                        if ($sub_option === "position" && $sub_value === "sticky-absolute") {$block_attributes["data-sticky"] = $sub_value;} 
                        //===> Animated Elements <===//
                        elseif ($sub_option === "animate-elements") {$grid_classes .= ' ' . $sub_value;}
                        //===> Padding Values <===//
                        elseif (strpos($sub_option, 'pdt') !== false || strpos($sub_option, 'pds') !== false || strpos($sub_option, 'pde') !== false || strpos($sub_option, 'pdb') !== false) {$grid_classes .= " $sub_option-$sub_value";}
                        //===> Margin Values <===//
                        elseif (strpos($sub_option, 'mt') !== false || strpos($sub_option, 'ms') !== false || strpos($sub_option, 'me') !== false || strpos($sub_option, 'mb') !== false) {$grid_classes .= " $sub_option-$sub_value";}
                        //===> Positions Values <===//
                        elseif (strpos($sub_option, 'pos-') !== false) {$grid_classes .= " $sub_option-$sub_value";}
                        //===> Layout Gap <===//
                        elseif (strpos($sub_option, 'gpx') !== false || strpos($sub_option, 'gpy') !== false && $sub_option !== "gpy-fix") {$grid_classes .= " $sub_option-$sub_value";}
                        //===> Other Values <===//
                        elseif (!isBooleanVal($sub_value)) {
                            $grid_classes .= " " . str_replace(',', ' ', $sub_value) . " ";
                        }
                    };
                }
            };
        }

        //===> Return Rendered Values <===//
        return array("slider_attrs"=>$slider_attrs, "grid_classes"=>$grid_classes);
    }
endif;

//=====> Enqueue Phenix Blocks <=====//
if (!function_exists('phenix_blocks')) :
    function phenix_blocks() {
        //====> Shared Options <====//
        $version = PDS_BLOCKS_VERSTION;
        $blocksPath = plugin_dir_url(__FILE__);
        $blocksDependencies = array('wp-blocks', 'wp-element', 'wp-editor', 'wp-edit-site', 'wp-plugins');
        $blocksPath = str_replace('src/', 'assets/js/', $blocksPath);

        //====> Blocks Logic and Data <====//
        if (is_admin()) :
            wp_enqueue_script('pds-blocks-logic', plugin_dir_url(__FILE__).'pds-helpers.js', $blocksDependencies, $version , true);
            wp_enqueue_script('pds-blocks-data', plugin_dir_url(__FILE__).'pds-data-list.js', $blocksDependencies, $version , true);
        endif;

        //====> GB Core Blocks Remover <====//
        if (is_admin() && !get_option("pds_core_post_elements")) :
            add_filter('extendify_load_library', '__return_false');
            wp_enqueue_script('core-block-remover', plugin_dir_url(__FILE__).'core-blocks-remover.js', $blocksDependencies, $version , true);
        endif;

        //====> Phenix Section <====//
        if (get_option('container_block')) {
            wp_enqueue_script('section', $blocksPath.'container/index.js', $blocksDependencies, $version , true);
        }

        //====> Phenix Group <====//
        if (get_option('group_block')) {
            wp_enqueue_script('px-group', $blocksPath.'group/index.js', $blocksDependencies, $version , true);
        }

        //====> Phenix Logo <====//
        if (get_option('logo_block')) {
            wp_enqueue_script('px-logo', $blocksPath.'logo/index.js', $blocksDependencies, $version , true);
        }

        //====> Phenix Menu <====//
        if (get_option('navigation_block')) {
            wp_enqueue_script('px-navigation', $blocksPath.'navigation/index.js', $blocksDependencies, $version , true);
        }

        //====> Phenix Row <====//
        if (get_option('row_block')) {
            wp_enqueue_script('px-row', $blocksPath.'grid-row/index.js', $blocksDependencies, $version , true);
        }

        //====> Phenix Column <====//
        if (get_option('column_block')) {
            wp_enqueue_script('grid-column', $blocksPath.'grid-column/index.js', $blocksDependencies, $version , true);
        }

        //====> Phenix Head <====//
        if (get_option('head_block')) {
            wp_enqueue_script('page-head', $blocksPath.'page-head/index.js', $blocksDependencies, $version , true);
        }

        //====> Phenix Query <====//
        if (get_option('query_block')) {
            wp_enqueue_script('px-query', $blocksPath.'query/index.js', $blocksDependencies, $version , true);
        }

        //====> Taxonomies List <====//
        if (get_option('taxonomies_block')) {
            wp_enqueue_script('pds-taxonomies', $blocksPath.'taxonomies/index.js', $blocksDependencies, $version , true);
        }
        
        //====> Theme Part <====//
        if (get_option('theme_part_block')) {
            wp_enqueue_script('theme-part', $blocksPath.'theme-part/index.js', $blocksDependencies, $version , true);
        }
        
        //====> Popups <====//
        if (get_option('popups_block')) {
            wp_enqueue_script('popup', $blocksPath.'popup/index.js', $blocksDependencies, $version , true);
        }
        
        //====> Phenix Button <====//
        if (get_option('button_block')) {
            wp_enqueue_script('px-button', $blocksPath.'button/index.js', $blocksDependencies, $version , true);
        }
        
        //====> Inline Elements <====//
        if (get_option('text_list_item_block')) {
            wp_enqueue_script('text-list-item', $blocksPath.'text-list-item/index.js', $blocksDependencies, $version , true);
        }

        //====> Text Elements <====//
        if (get_option('text_elements_block')) {
            wp_enqueue_script('text-elements', $blocksPath.'text/index.js', $blocksDependencies, $version , true);
        }
        
        //====> Media Element <====//
        if (get_option('media_element_block')) {
            wp_enqueue_script('media-element', $blocksPath.'media-element/index.js', $blocksDependencies, $version , true);
        }
        
        //====> Icon Element <====//
        if (get_option('icon_element_block')) {
            wp_enqueue_script('icon-element', $blocksPath.'icon-element/index.js', $blocksDependencies, $version , true);
        }
        
        //====> Custom Code <====//
        if (get_option('custom_code_block')) {
            wp_enqueue_script('custom-code', $blocksPath.'custom-code/index.js', $blocksDependencies, $version , true);
        }

        //====> Logical Block <====//
        if (get_option('pds_logical_block')) {
            wp_enqueue_script('logical-block', $blocksPath.'logical-block/index.js', $blocksDependencies, $version , true);
        }

        //====> Users Query <====//
        if (get_option('pds_users_query_block')) {
            wp_enqueue_script('users-query', $blocksPath.'users-query/index.js', $blocksDependencies, $version , true);
        }

        //====> Tabs <====//
        if (get_option('tabs_block')) {
            wp_enqueue_script('pds-tabs', $blocksPath.'pds-tabs/index.js', $blocksDependencies, $version , true);
        }

        //====> Dropdowns <====//
        if (get_option('dropdowns_block')) {
            wp_enqueue_script('pds-dropdowns', $blocksPath.'pds-dropdowns/index.js', $blocksDependencies, $version , true);
        }

        //====> Accordions <====//
        if (get_option('accordion_block')) {
            wp_enqueue_script('pds-accordion', $blocksPath.'pds-accordion/index.js', $blocksDependencies, $version , true);
        }

        //====> Progress Bars <====//
        if (get_option('pds_progress_block')) {
            wp_enqueue_script('pds-tabs', $blocksPath.'pds-progress/index.js', $blocksDependencies, $version , true);
        }

        //====> Google Maps <====//
        if (get_option('pds_gmaps_block')) {
            wp_enqueue_script('pds-google-maps', $blocksPath.'pds-google-maps/index.js', $blocksDependencies, $version , true);
        }

        //====> Timer <====//
        if (get_option('pds_timer_block')) {
            wp_enqueue_script('pds-timer', $blocksPath.'pds-timer/index.js', $blocksDependencies, $version , true);
        }
        
        //====> PDS Forms <====//
        if (get_option('pds_form_block')) {
            wp_enqueue_script('pds-form', $blocksPath.'pds-form/index.js', $blocksDependencies, $version , true);
        }

        //====> PDS Languages <====//
        if (get_option('pds_languages_block')) {
            wp_enqueue_script('pds-languages', $blocksPath.'pds-languages/index.js', $blocksDependencies, $version , true);
        }

        //====> Search Query <====//
        if (get_option('search_query_block')) {
            wp_enqueue_script('pds-search-query', $blocksPath.'pds-search-query/index.js', $blocksDependencies, $version , true);
        }
    }

    add_action('enqueue_block_editor_assets', 'phenix_blocks');
endif;

//====> Phenix Navigation <====//
if (get_option('navigation_block')) {
    include(dirname(__FILE__) . '/navigation/index.php');
}

//====> Phenix Page-Head <====//
if (get_option('head_block')) {
    include(dirname(__FILE__) . '/page-head/index.php');
}

//====> Phenix Query <====//
if (get_option('query_block')) {
    include(dirname(__FILE__) . '/query/index.php');
}

//====> Taxonomies List <====//
if (get_option('taxonomies_block')) {
    include(dirname(__FILE__) . '/taxonomies/index.php');
}

//====> Theme Part <====//
if (get_option('theme_part_block')) {
    include(dirname(__FILE__) . '/theme-part/index.php');
}

//====> Logical Block <====//
if (get_option('pds_logical_block')) {
    include(dirname(__FILE__) . '/logical-block/index.php');
}

//====> Users Query <====//
if (get_option('pds_users_query_block')) {
    include(dirname(__FILE__) . '/users-query/index.php');
}

//====> Custom Code <====//
if (get_option('custom_code_block')) {
    include(dirname(__FILE__) . '/custom-code/index.php');
}

//====> Search Query <====//
if (get_option('search_query_block')) {
    include(dirname(__FILE__) . '/pds-search-query/index.php');
}