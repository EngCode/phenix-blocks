<?php
/**
 * Setting Gutenberg for Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

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
        //===> Grid Layout Mode <===//
        if (isset($block_attributes['className'])) {
            $grid_classes .= $block_attributes['className'].' ';
        }

        //===> Dynamic Data Setter <===//
        foreach ($block_attributes as $option_name => $option_value) {
            //===> Exclude Options <===//
            $excluded = ["preview", "query", "template_part"];
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

                    //===> Checker for Slider Mode <===//
                    if ($option_name === 'slider') {
                        //===> Add Slider Name <===//
                        $grid_classes .= " px-slider ";
                        //===> if not-related option return void <===//
                        if (in_array($sub_option, ["align", "nowrap", "masonry"])) { continue; }
                        //===> add data attributes <===//
                        $slider_attrs .= 'data-'.$sub_option.'="'.$sub_value.'"';
                    }

                    //===> Flexbox Options <===//
                    elseif ($option_name === "flexbox" && strpos($sub_option, "cols") !== false) {
                        //===> Slider Mode <===//
                        if (isset($block_attributes['flexbox']['slider'])) {
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
        $blocksPath = plugin_dir_url(__FILE__);
        $blocksDependencies = array('wp-blocks', 'wp-element', 'wp-editor', 'wp-edit-site', 'wp-plugins');
        $blocksPath = str_replace('src/', 'assets/js/', $blocksPath);

        //====> Blocks Logic and Data <====//
        if (is_admin()) :
            wp_enqueue_script('pds-blocks-logic', plugin_dir_url(__FILE__).'pds-helpers.js', $blocksDependencies, NULL , true);
            wp_enqueue_script('pds-blocks-data', plugin_dir_url(__FILE__).'pds-data-list.js', $blocksDependencies, NULL , true);
        endif;

        //====> GB Core Blocks Remover <====//
        if (is_admin() && !get_option("pds_core_post_elements")) :
            add_filter('extendify_load_library', '__return_false');
            wp_enqueue_script('core-block-remover', plugin_dir_url(__FILE__).'core-blocks-remover.js', $blocksDependencies, NULL , true);
        endif;

        //====> Define Phenix Blocks <====//
        $pds_blocks_list = array(
            "logo_block" => 'logo',
            "group_block" => 'group',
            "row_block" => 'grid-row',
            "column_block" => 'grid-column',
            "container_block" => 'container',
            "popups_block" => 'popup',
            "button_block" => 'button',
            "text_elements_block" => "text",
            "text_list_item_block" => "text-list-item",
            "media_element_block" => 'media-element',
            "icon_element_block" => 'icon-element',

            "tabs_block" => 'pds-tabs',
            "dropdowns_block" => 'pds-dropdowns',
            "accordion_block" => 'pds-accordion',
            "pds_progress_block" => 'pds-progress',
            "pds_gmaps_block" => 'pds-google-maps',
            "pds_timer_block" => 'pds-timer',
            "pds_form_block" => 'pds-form',
            "pds_languages_block" => 'pds-languages',
        );

        //====> Loop on the Blocks <====//
        foreach ($pds_blocks_list as $block_option => $block_name) {
            if (!get_option($block_option)) { continue; }
            wp_enqueue_script($block_name, $blocksPath.$block_name.'/index.js', $blocksDependencies, NULL , true);
        }
    }
    
    add_action('enqueue_block_editor_assets', 'phenix_blocks');
endif;

//===> Define Dynamic Blocks <===//
$pds_dynamic_blocks = array(
    "query_block" => 'query',
    "head_block" => 'page-head',
    "navigation_block" => 'navigation',
    "theme_part_block" => 'theme-part',
    "taxonomies_block" => 'taxonomies',
    "pds_logical_block" => 'logical-block',
    "pds_users_query_block" => 'users-query',
    "custom_code_block" => 'custom-code',
    "search_query_block" => 'pds-search-query',
);

//===> Loop on the Dynamic Blocks <===//
foreach ($pds_dynamic_blocks as $block_option => $block_name) {
    if (!get_option($block_option)) { continue; }
    include(dirname(__FILE__) . '/'.$block_name.'/index.php');
}