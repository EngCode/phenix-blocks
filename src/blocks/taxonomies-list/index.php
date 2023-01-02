<?php
/**
 * Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

//==== Block Render ====//
function px_categories_render($block_attributes, $content) {
    //===> Start Collecting Data <===//
    $markup = '';ob_start();
    //===> Get Categories List <===//
    $categories = get_categories( array(
        'taxonomy'   => $block_attributes['taxonomy'],
        'post_type'  => $block_attributes['post_type'],
        'hide_empty' => false
    ));
    //===> Loop Throgh Categories <===//
    echo '<ul class="reset-list links-list fs-14 pds-15">';
    foreach ($categories as $category) :
       echo '<li><a href="'.get_category_link($category->cat_ID).'">'.$category->name.'</a></li>';
    endforeach;
    echo '</ul>';
    //===> Stop Collecting Data <===//
    $blockOutput = ob_get_clean();
    $markup  .= $blockOutput;
    return "{$markup}";
}

//===> Register Phenix Block <===//
function px_categories_block () {
    //===> Define [JSON] Assets  <===//
    $assets_path = plugin_dir_path(__DIR__).'taxonomies-list/';
    $assets_uri  = plugin_dir_url(__DIR__).'taxonomies-list/';

    //===> Fix File Paths <===//
    $assets_path = str_replace('src', 'assets/js', $assets_path);
    $assets_uri  = str_replace('src', 'assets/js', $assets_uri);
    $px_assets   = include($assets_path.'index.asset.php');

    //===> Add the Block JS <===//
    wp_register_script('taxonomies-list',
        $assets_uri.'index.js',
        $px_assets['dependencies'],
        $px_assets['version']
    );

    //==== Register Block ====//
    register_block_type($assets_path.'block.json', array(
        'api_version'     => 2,
        'editor_script'   => 'taxonomies-list',
        'render_callback' => 'px_categories_render'
    ));
}

add_action( 'init', 'px_categories_block' );