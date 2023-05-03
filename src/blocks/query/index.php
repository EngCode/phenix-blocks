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
    $grid = $block_attributes['grid'];
    $slider = $block_attributes['slider'];
    $options = $block_attributes;

    //===> Grid Options <===//
    $grid_cols = "";
    $grid_opts = isset($grid['flow']) ? $grid['flow'] : false;

    //==>...<===//
    if (isset($grid['masonry'])) { $grid_opts .= " ".$grid['masonry']; }
    if (isset($grid['nowrap'])) { $grid_opts .= " ".$grid['nowrap']; }

    //==>. Slider Options .<===//
    $slider_opts = "";
    if ($options['slider_mode']) {
        //===>...<===//
        $grid_opts .= "px-slider ";
        if (isset($slider['type'])) { $slider_opts .= ' data-type="'.$slider['type'].'"'; }
        if (isset($slider['steps'])) { $slider_opts .= ' data-steps="'.$slider['steps'].'"'; }
        if (isset($slider['speed'])) { $slider_opts .= ' data-speed="'.$slider['speed'].'"'; }
        if (isset($slider['duration'])) { $slider_opts .= ' data-duration="'.$slider['duration'].'"'; }
        if (isset($slider['controls']) && $slider['controls']) { $slider_opts .= ' data-controls="1"'; }
        if (isset($slider['pagination']) && $slider['pagination']) { $slider_opts .= ' data-pagination="1"'; }
        if (isset($slider['autoplay']) && $slider['autoplay']) { $slider_opts .= ' data-autoplay="1"'; }
        else { $slider_opts .= ' data-autoplay="0"'; }
        //===>...<===//
        if (isset($grid['cols'])) { $slider_opts .= ' data-items="'.preg_replace('/[^0-9]/', '', $grid['cols']).'"'; }
        if (isset($grid['cols-md'])) { $slider_opts .= ' data-md="'.preg_replace('/[^0-9]/', '', $grid['cols-md']).'"'; }
        if (isset($grid['cols-lg'])) { $slider_opts .= ' data-lg="'.preg_replace('/[^0-9]/', '', $grid['cols-lg']).'"'; }
        if (isset($grid['cols-xl'])) { $slider_opts .= ' data-xl="'.preg_replace('/[^0-9]/', '', $grid['cols-xl']).'"'; }
    } else {
        //==>...<===//
        if (isset($grid['cols'])) { $grid_cols .= ' row-cols-'.$grid['cols']; }
        if (isset($grid['cols-md'])) { $grid_cols .= ' row-cols-md-'.$grid['cols-md']; }
        if (isset($grid['cols-lg'])) { $grid_cols .= ' row-cols-lg-'.$grid['cols-lg']; }
        if (isset($grid['cols-xl'])) { $grid_cols .= ' row-cols-xl-'.$grid['cols-xl']; }
    }

    //===> Custom Classes <===//
    if(isset($options['className'])) {
        //===> Set the Classes <===//
        $grid_opts = $grid_opts .' '. $options['className'];
    }

    if ($options['grid_mode']) { $grid_opts .= ' row'; }

    elseif ($options['slider_mode']) {
        if (isset($grid['cols-md']) || isset($grid['cols-lg']) || isset($grid['cols-xl'])) { $grid_opts .= ' row'; }
        elseif (isset($grid['cols']) && intval($grid['cols']) > 1) { $grid_opts .= ' row'; }
    }

    //===> Get Current Global Query <===//
    global $wp_query;

    /*===> Get Current Page <===*/
    $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

    //===> Custom Query <===//
    if ($options['post_type'] !== "default") {
        //===> Query Configuration <===//
        $query_config = array(
            'paged' => $paged,
            'order' => $options['order'],
            'post_type' => $options['post_type'],
            'posts_per_page' => $options['per_page'],
        );
    
        //===> Create New Query <===//
        $the_query = new WP_Query($query_config);

        //==== Start Query =====//
        if ($the_query->have_posts() ) :
            //===> Grid Wrapper <===//
            if ($options['grid_mode'] || $options['slider_mode']) {
                echo '<div class="'. $grid_opts . $grid_cols .'" '. $slider_opts .'>';
            }

            //==== Loop Start ====//
            while ($the_query->have_posts()):
                //=== Template Part ===//
                get_template_part("template-parts/".$options["template_part"], null, $the_query->the_post());
            endwhile;

            //===> End Grid Wrapper <===//
            if ($options['grid_mode'] || $options['slider_mode']) : echo '</div>'; endif;
    
            //=== Pagination ===//
            if ($options['pagination'] && function_exists("pagination")) {
                pagination($the_query); 
            };

            //=== Reset Query Data ===//
            wp_reset_postdata();
        endif;
        //==== End Query =====//
    }

    //===> Native Query <===//
    else {
        //==== Start Query =====//
        if (have_posts()) :
            //===> Grid Wrapper <===//
            if ($options['grid_mode']) {
                echo '<div class="row '. $grid_cols . ' '.$grid_opts .'">';
            }

            //==== Loop Start ====//
            while (have_posts()) : 
                //=== Template Part ===//
                get_template_part("template-parts/".$options["template_part"], null, the_post());
            endwhile;

            //===> End Grid Wrapper <===//
            if ($options['grid_mode']) : echo '</div>'; endif;
 
            //=== Pagination ===//
            if ($options['pagination'] && function_exists("pagination")) {
                pagination($wp_query); 
            };
            //=== Reset Data ===//
            wp_reset_postdata();
        endif;
        //==== End Query =====//
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