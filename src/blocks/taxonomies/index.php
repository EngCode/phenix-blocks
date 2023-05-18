<?php
/**
 * Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//==== Block Render ====//
function pds_taxonomies_render($block_attributes, $content) {
    //===> Start Collecting Data <===//
    $markup = ''; ob_start();

    //===> Define Attributes <===//
    $slider_attrs = ""; $grid_classes = "";
    if (isset($block_attributes['className'])) { $grid_classes .= $block_attributes['className'].' '; }

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
                    $grid_classes .= "px-slider ";
                    //===> if not-related option return void <===//
                    if (in_array($sub_option, ["align", "nowrap", "masonry"])) { continue; }
                    //===> add data attributes <===//
                    $slider_attrs .= 'data-'.$sub_option.'="'.$sub_value.'"';
                }

                //===> Flexbox Options <===//
                elseif ($option_name === "flexbox" && strpos($sub_option, "cols") !== false) {
                    //===> Slider Mode <===//
                    if (isset($block_attributes['flexbox']['slider']))  {
                        $dataAttr = 'data-' . ($sub_option === "cols" ? "items" : str_replace('cols-', '', $sub_option));
                        $slider_attrs .= ' '.$dataAttr.'="'.$sub_value.'"';
                    } else {
                        //===> add Classes <===//
                        $grid_classes .= ' ' . str_replace('cols', 'row-cols', $sub_option) . colsRender($sub_value);
                    }
                }

                //===> Other Options <===//
                elseif ($option_name === "flexbox" || $option_name === "style" || $option_name === "typography") {
                    //===> Postion Absolute Sticky <===//
                    if ($sub_option === "position" && $sub_value === "sticky-absolute") {$block_attributes["data-sticky"] = $sub_value;} 
                    //===> Padding Values <===//
                    elseif (strpos($sub_option, 'pdt') !== false || strpos($sub_option, 'pds') !== false || strpos($sub_option, 'pde') !== false || strpos($sub_option, 'pdb') !== false) {$block_attributes['className'] .= " $sub_option-$sub_value";}
                    //===> Margin Values <===//
                    elseif (strpos($sub_option, 'mt') !== false || strpos($sub_option, 'ms') !== false || strpos($sub_option, 'me') !== false || strpos($sub_option, 'mb') !== false) {$block_attributes['className'] .= " $sub_option-$sub_value";}
                    //===> Positions Values <===//
                    elseif (strpos($sub_option, 'pos-') !== false) {$block_attributes['className'] .= " $sub_option-$sub_value";}
                    //===> Layout Gap <===//
                    elseif (strpos($sub_option, 'gpx') !== false || strpos($sub_option, 'gpy') !== false) {$block_attributes['className'] .= " $sub_option-$sub_value";}
                    //===> Other Values <===//
                    else {$block_attributes['className'] .= " " . str_replace(',', ' ', $sub_value) . " ";}
                };
            }
        };
    }

    //===> Create New Query <===//
    $categories = get_categories($block_attributes['query']);

    //===> Default Query <===//
    $default_query = ["hide_empty"];
    foreach ($default_query as $option_name) {
        if (!isset($block_attributes['query'][$option_name])) {
            if ($option_name === "hide_empty")  { $block_attributes['query'][$option_name] = false; }
            else { $block_attributes['query'][$option_name] = ''; }
        }
    };

    //===> Grid Wrapper <===//
    if ($block_attributes['isFlexbox'] || isset($block_attributes['flexbox']['slider']) && $block_attributes['flexbox']['slider']) { echo '<div class="'.$grid_classes.'" '.$slider_attrs.'>'; }

    //===> Loop Through Categories <===//
    foreach ($categories as $category) :
        get_template_part("template-parts/".$block_attributes["template_part"], null, $category);
    endforeach;

    //===> End Grid Wrapper <===//
    if ($block_attributes['isFlexbox'] || isset($block_attributes['flexbox']['slider'])) { echo '</div>'; }

    //===> Stop Collecting Data <===//
    $blockOutput = ob_get_clean();
    $markup  .= $blockOutput;
    return "{$markup}";
}

//===> Register Phenix Block <===//
function pds_taxonomies_block () {
    //===> Define [JSON] Assets  <===//
    $assets_path = plugin_dir_path(__DIR__).'taxonomies/';
    $assets_uri  = plugin_dir_url(__DIR__).'taxonomies/';

    //===> Fix File Paths <===//
    $assets_path = str_replace('src', 'assets/js', $assets_path);
    $assets_uri  = str_replace('src', 'assets/js', $assets_uri);
    $px_assets   = include($assets_path.'index.asset.php');

    //===> Add the Block JS <===//
    wp_register_script('pds-taxonomies',
        $assets_uri.'index.js',
        $px_assets['dependencies'],
        $px_assets['version']
    );

    //==== Register Block ====//
    register_block_type($assets_path.'block.json', array(
        'api_version'     => 2,
        'editor_script'   => 'pds-taxonomies',
        'render_callback' => 'pds_taxonomies_render'
    ));
}

add_action( 'init', 'pds_taxonomies_block' );