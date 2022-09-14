
<?php
/**
 * Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

//==== Block Render ====//
function px_theme_part_render($block_attributes, $content) {
    //===> Start Collecting Data <===//
    $markup = '';ob_start();
    //===> Get Part <===//
    get_template_part('template-parts/'.$block_attributes['part_name']);
    //===> Stop Collecting Data <===//
    $blockOutput = ob_get_clean();
    $markup  .= $blockOutput;
    return "{$markup}";
}

//===> Register Phenix Block <===//
function px_theme_part_block () {
    //===> Define [JSON] Assets  <===//
    $assets_path = plugin_dir_path(__DIR__).'theme-part\\';
    $assets_uri  = plugin_dir_url(__DIR__).'theme-part/';

    //===> Fix File Paths <===//
    $assets_path = str_replace('src', 'assets\js', $assets_path);
    $assets_uri  = str_replace('src', 'assets/js', $assets_uri);
    $px_assets   = include($assets_path.'index.asset.php');

    //===> Add the Block JS <===//
    wp_register_script('theme-part',
        $assets_uri.'index.js',
        $px_assets['dependencies'],
        $px_assets['version']
    );

    //==== Register Block ====//
    register_block_type($assets_path.'block.json', array(
        'api_version'     => 2,
        'editor_script'   => 'theme-part',
        'render_callback' => 'px_theme_part_render'
    ));
}

add_action( 'init', 'px_theme_part_block' );