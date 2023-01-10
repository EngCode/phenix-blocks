<?php
/**
 * Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

//==== Block Render ====//
function px_query_render($block_attributes, $content) {
    //===> Start Collecting Data <===//
    $markup = '';ob_start();

    //===> Current Attributes <===//
    $current = $block_attributes;

    //===> wrapper class-names <===//
    $wrapper_props = '';
    
    //===> Get Current Global Query <===//
    global $wp_query;

    /*===> Get Current Page <===*/
    $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

    //===> Query Configuration <===//
    $query_config = array(
        'paged' => $paged,
        'order' => $current['order'],
        'post_type' => $current['post_type'],
        'posts_per_page' => $current['per_page'],
    );

    //===> Create New Query <===//
    $the_query = new WP_Query($query_config);

    //==== Start Query =====//
    if ($the_query->have_posts() ) :
        //==== Loop Start ====//
        while ($the_query->have_posts()):
            //=== Block  Design ===//
            get_template_part($current["template_part"], null, $the_query->the_post()); 
        endwhile;
        //=== Pagination ===//
        if ($current['pagination'] && function_exists("pagination")) {
            pagination($the_query); 
        };
        //=== Reset Query Data ===//
        wp_reset_postdata();
    endif;
    //==== End Query =====//

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