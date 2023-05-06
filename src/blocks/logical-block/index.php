<?php
/**
 * Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//==== Block Render ====//
function px_logical_block_render($block_attributes, $content) {
    //===> Start Collecting Data <===//
    $markup = '';ob_start();

    //===> Users Only Logic <===//
    if ($block_attributes['logic']['visibility'] === "users-only" && is_user_logged_in()) {
        echo $content;
    }
    //===> Visitors Only Logic <===//
    elseif ($block_attributes['logic']['visibility'] === "visitors-only" && !is_user_logged_in()) {
        echo $content;
    }
    //===> for All <===//
    elseif ($block_attributes['logic']['visibility'] === "" || $block_attributes['logic']['visibility'] === "all") {
        echo $content;
    }

    //===> Stop Collecting Data <===//
    $blockOutput = ob_get_clean();
    $markup  .= $blockOutput;
    return "{$markup}";
}

//===> Register Phenix Block <===//
function px_logical_block () {
    //===> Define [JSON] Assets  <===//
    $assets_path = plugin_dir_path(__DIR__).'logical-block/';
    $assets_uri  = plugin_dir_url(__DIR__).'logical-block/';

    //===> Fix File Paths <===//
    $assets_path = str_replace('src', 'assets/js', $assets_path);
    $assets_uri  = str_replace('src', 'assets/js', $assets_uri);
    $px_assets   = include($assets_path.'index.asset.php');

    //===> Add the Block JS <===//
    wp_register_script('logical-block',
        $assets_uri.'index.js',
        $px_assets['dependencies'],
        $px_assets['version']
    );

    //==== Register Block ====//
    register_block_type($assets_path.'block.json', array(
        'api_version'     => 2,
        'editor_script'   => 'logical-block',
        'render_callback' => 'px_logical_block_render'
    ));
}

add_action( 'init', 'px_logical_block' );