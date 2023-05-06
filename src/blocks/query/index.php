<?php
/**
 * Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//==== Block Render ====//
function px_query_render($block_attributes, $content) {
    //===> Start Collecting Data <===//
    $markup = '';ob_start();

    //===> Define Attributes <===//
    $query = $block_attributes['query']; $slider_attrs = ""; $grid_classes = "";
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
                    if ($block_attributes['flexbox']['slider']) {
                        $dataAttr = 'data-' . ($sub_option === "cols" ? "items" : str_replace('cols-', '', $sub_option));
                        $slider_attrs .= ' '.$dataAttr.'="'.$sub_value.'"';
                    } else {
                        //===> add Classes <===//
                        $grid_classes .= ' ' . str_replace('cols', 'row-cols', $sub_option) . colsRender($sub_value);
                    }
                }
            }
        };
    }

    //===> Get Current Global Query <===//
    global $wp_query;

    /*===> Query Defaults <===*/
    if(!isset($query['per_page'])) { $query['per_page'] = 5; }
    $query['paged'] = (get_query_var('paged')) ? get_query_var('paged') : 1;
    
    //===> Create New Query <===//
    if (isset($query['post_type'])) { $the_query = new WP_Query($query); }

    //==== Start Query =====//
    if (isset($query['post_type']) && $the_query->have_posts() || have_posts()) {
        //===> Grid Wrapper <===//
        if ($block_attributes['isFlexbox'] || isset($block_attributes['flexbox']['slider']) && $block_attributes['flexbox']['slider']) { echo '<div class="'.$grid_classes.'" '.$slider_attrs.'>'; }

        //===> Custom Loop <===//
        if (isset($query['post_type']) && $the_query->have_posts()) {
            while ($the_query->have_posts()):
                //=== Template Part ===//
                get_template_part("template-parts/".$block_attributes["template_part"], null, $the_query->the_post());
            endwhile;
        } 
        //===> Native Loop <===//
        else {
            while (have_posts()):
                //=== Template Part ===//
                get_template_part("template-parts/".$block_attributes["template_part"], null, the_post());
            endwhile;
        };

        //===> End Grid Wrapper <===//
        if ($block_attributes['isFlexbox'] || isset($block_attributes['flexbox']['slider']) && $block_attributes['flexbox']['slider']) { echo '</div>'; }

        //=== Pagination ===//
        if (isset($query['pagination']) && $query['pagination']) {
            //===> Custom Query <===//
            if (isset($query['post_type']) && $the_query->have_posts()) {
                pagination($the_query); 
            } 
            //===> Native Query <===//
            else {
                pagination($wp_query);
            };
        }

        //=== Reset Query Data ===//
        wp_reset_postdata();
    }

    //===> Stop Collecting Data <===//
    $blockOutput = ob_get_clean();
    $markup  .= $blockOutput;
    return "{$markup}";
}

//===> Register Phenix Block <===//
function px_query_block () {
    //===> Define [JSON] Assets  <===//
    $assets_path = plugin_dir_path(__DIR__).'query/';
    $assets_uri  = plugin_dir_url(__DIR__).'query/';

    //===> Fix File Paths <===//
    $assets_path = str_replace('src', 'assets/js', $assets_path);
    $assets_uri  = str_replace('src', 'assets/js', $assets_uri);
    $px_assets   = include($assets_path.'index.asset.php');

    //===> Add the Block JS <===//
    wp_register_script('query',
        $assets_uri.'index.js',
        $px_assets['dependencies'],
        $px_assets['version']
    );

    //==== Register Block ====//
    register_block_type($assets_path.'block.json', array(
        'api_version'     => 2,
        'editor_script'   => 'px-query',
        'render_callback' => 'px_query_render'
    ));
}

add_action('init', 'px_query_block');