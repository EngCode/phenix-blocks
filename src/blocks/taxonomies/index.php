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
    $slider_attrs = "";
    $grid_classes = "";

    //===> Render Options <===//
    $renderedProps = pds_blocks_options_render($block_attributes, $slider_attrs, $grid_classes);

    //===> Get Rendered Attributes <===//
    $slider_attrs = $renderedProps["slider_attrs"]; 
    $grid_classes = $renderedProps["grid_classes"];

    //===> Create New Query <===//
    $categories = get_categories($block_attributes['query']);
    if (empty($categories)) {return;}

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
        $px_assets['version'],true
    );

    //==== Register Block ====//
    register_block_type($assets_path.'block.json', array(
        'api_version'     => 2,
        'editor_script'   => 'pds-taxonomies',
        'render_callback' => 'pds_taxonomies_render'
    ));
}

add_action( 'init', 'pds_taxonomies_block' );