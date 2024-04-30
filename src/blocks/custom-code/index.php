<?php
/**
 * Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/
if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//==== Block Render ====//
function px_custom_code_render($block_attributes, $content) {
    //===> Start Collecting Data <===//
    $markup = '';ob_start();

    //===> Render [HTML] Code <===//
    if ($block_attributes['type'] === "html") {
        $markup .= $block_attributes['code'];
    }
    //===> Render [CSS] Code <===//
    elseif ($block_attributes['type'] === "css") {
        $markup .= '<style>'.$block_attributes['code'].'</style>';
    }
    //===> Render [Javascript] Code <===//
    elseif ($block_attributes['type'] === "javascript") {
        $markup .= '<script defer>document.addEventListener("DOMContentLoaded", () => {'.$block_attributes['code'].'});</script>';
    }
    //===> Render [Shortcode] Code <===//
    elseif ($block_attributes['type'] === "shortcode") {
        $markup .= do_shortcode($block_attributes['code']);
    }

    //===> Stop Collecting Data <===//
    $blockOutput = ob_get_clean();
    $markup  .= $blockOutput;
    return "{$markup}";
}

//===> Register Phenix Block <===//
function px_custom_code_block () {
    //===> Define [JSON] Assets  <===//
    $assets_path = plugin_dir_path(__DIR__).'custom-code/';
    $assets_uri  = plugin_dir_url(__DIR__).'custom-code/';

    //===> Fix File Paths <===//
    $assets_path = str_replace('src', 'assets/js', $assets_path);
    $assets_uri  = str_replace('src', 'assets/js', $assets_uri);
    $px_assets   = include($assets_path.'index.asset.php');

    //===> Add the Block JS <===//
    wp_register_script('custom-code',
        $assets_uri.'index.js',
        $px_assets['dependencies'],
        $px_assets['version'],true
    );

    //==== Register Block ====//
    register_block_type($assets_path.'block.json', array(
        'api_version'     => 2,
        'editor_script'   => 'custom-code',
        'render_callback' => 'px_custom_code_render'
    ));
}

add_action( 'init', 'px_custom_code_block' );