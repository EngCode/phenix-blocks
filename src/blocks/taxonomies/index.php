<?php
/**
 * Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

//==== Block Render ====//
function pds_taxonomies_render($block_attributes, $content) {
    //===> Start Collecting Data <===//
    $markup = '';ob_start();
    $options = $block_attributes;

    //===> Get Categories List <===//
    $categories = get_categories( array(
        'order'      => $options['order'],
        'number'     => $options['query_count'],
        'taxonomy'   => $options['taxonomy'],
        'post_type'  => $options['post_type'],
        'hide_empty' => $options['hide_empty'],
    ));

    //===> Grid and Slider Wrapper <===//
    if ($options['grid_mode'] || $options['slider_mode']) {
        echo '<div class="row">';
    }

    //===> Loop Through Categories <===//
    foreach ($categories as $category) :
        get_template_part("template-parts/".$options["template_part"], null, $category);
    endforeach;

    //===> Grid and Slider Wrapper <===//
    if ($options['grid_mode'] || $options['slider_mode']) : echo '</div>'; endif;

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