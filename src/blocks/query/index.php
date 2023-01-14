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
    $options = $block_attributes;

    //===> Grid Options <===//
    $grid_cols = ($options['grid_cols_stat'] || $options['slider_mode']) ? "" : " ". $options['grid_cols'];
    $grid_opts = $options['grid_flow'] .' '. $options['grid_masonry'] .' '. $options['grid_nowrap'] .' '. $options['grid_alignment'];
    $is_slider = $options['slider_mode'] ? " px-slider" : "";
    $slider_opts = "";

    //===> Slider Options <===//
    if ($options['slider_mode']) {   
        //===> Type, Steps, Duration, Speed <===//
        $slider_opts = $slider_opts.' data-type="'.$options['slider_type'].'"';
        $slider_opts = $slider_opts.' data-steps="'.$options['slider_steps'].'"';
        $slider_opts = $slider_opts.' data-duration="'.$options['slider_duration'].'"';
        $slider_opts = $slider_opts.' data-speed="'.$options['slider_speed'].'"';

        //===> Autoplay, Arrows, Pagination <===//
        $slider_opts = $slider_opts.' data-autoplay="'.$options['slider_autoplay'].'"';
        $slider_opts = $slider_opts.' data-controls="'.$options['slider_controls'].'"';
        $slider_opts = $slider_opts.' data-pagination="'.$options['slider_pagination'].'"';

        //===> Items Number <===//
        if ($options['grid_cols']) {
            $slider_opts = $slider_opts.' data-items="'.preg_replace('/[^0-9]/', '', $options['grid_cols']).'"';
        }
    }

    //===> Custom Classes <===//
    if(isset($options['className'])) {
        $grid_opts = $grid_opts .' '. $options['className'];
    }

    //===> Get Current Global Query <===//
    global $wp_query;

    /*===> Get Current Page <===*/
    $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

    //===> Custom Query <===//
    if (!$options['native_query']) {
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
            if ($options['grid_mode']) {
                echo '<div class="row '. $grid_opts . $grid_cols . $is_slider .'" '. $slider_opts .'>';
            }
    
            //==== Loop Start ====//
            while ($the_query->have_posts()):
                //=== Template Part ===//
                get_template_part("template-parts/".$options["template_part"], null, $the_query->the_post());
            endwhile;
    
            //===> End Grid Wrapper <===//
            if ($options['grid_mode']) : echo '</div>'; endif;
    
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
                echo '<div class="row'. $grid_cols . $grid_opts . $is_slider .'">';
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