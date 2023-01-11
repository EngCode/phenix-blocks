
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
    //===> Get Categories List <===//
    $categories = get_categories( array(
        'taxonomy'   => $block_attributes['taxonomy'],
        'post_type'  => $block_attributes['post_type'],
        'hide_empty' => false
    ));
    //===> Loop Through Categories <===//
    echo '<div class="row align-center-x gpy-fix">';
    foreach ($categories as $category) :
        get_template_part('template-parts/category-card', null, $category);
    endforeach;
    echo '</div>';
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