
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
    echo '<ul class="reset-list links-list mb-15 pdb-15 divider-b fs-14">';
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
    $assets_uri  = get_template_directory_uri().'/assets/js/blocks/px-categories/';
    $assets_path = get_template_directory().'/assets/js/blocks/px-categories/';
    $px_assets   = include($assets_path.'index.asset.php');

    //===> Add the Block JS <===//
    wp_register_script('px-categories',
        $assets_uri.'index.js',
        $px_assets['dependencies'],
        $px_assets['version']
    );

    //==== Register Block ====//
    register_block_type($assets_path.'block.json', array(
        'api_version'     => 2,
        'editor_script'   => 'px-categories',
        'render_callback' => 'px_categories_render'
    ));
}

add_action( 'init', 'px_categories_block' );