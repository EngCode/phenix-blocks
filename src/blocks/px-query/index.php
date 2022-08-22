
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

    if ($current['post_type'] === 'sublist') {
        get_template_part('template-parts/sublist',null, $product);
    } else {
        //===> wrapper class-names <===//
        $wrapper_names = 'row ';
        $wrapper_props = '';
    
        if ($current['post_type'] === 'home-slider') {
            $wrapper_names = 'px-slider home-slider ';
            $wrapper_props = 'data-sync="#hero-thumbnails" data-controls="1"';
        }
    
        //===> Slider Classes <===//
        $slider_enable = array(
            "class" => '',
            "properties" => '',
        );
    
        if ($block_attributes['isSlider']) {
            $slider_enable['class'] = 'px-slider';
            $slider_enable['properties'] = 'data-items="1" data-md="3" data-lg="4"';
        }
    
        //===> Get Current Global Query <===//
        global $wp_query;
    
        //===> Custom Query <===//
        if ($current['query_type'] === 'custom') {
            /*===> Get Current Page <===*/
            $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
    
            //===> Query Configration <===//
            $query_config = array(
                'paged' => $paged,
                'order' => $current['order'],
                'posts_per_page' => $current['per_page'],
                'post_type' => $current['post_type'],
            );
    
            //===> Create New Query <===//
            $the_query = new WP_Query($query_config);
    
            //==== Start Query =====//
            if ($the_query->have_posts() ) :
                echo '<div class="'.$wrapper_names.$slider_enable['class'].'" '.$slider_enable['properties'].$wrapper_props.'>';
                //==== Loop Start ====//
                while ($the_query->have_posts()):
                    //=== Block  Design ===//
                    if ($current['post_type'] == 'home-slider') {
                        $the_query->the_post();
                        the_content();
                    } else {
                        get_template_part('template-parts/product-card', null, $the_query->the_post()); 
                    }
                endwhile;
                //==== End Loop =====//
                echo '</div>';
    
                //==== Slider Thumbnails ====//
                if ($current['post_type'] == 'home-slider') {
                    echo '<div class="container-xl">';
                        echo '<div id="hero-thumbnails" class="flexbox bg-alpha-50" data-items="1" data-md="3" data-lg="4" data-type="slide" data-is-navigation="1">';
                            //==== Loop Start ====//
                            while ($the_query->have_posts()):
                                //=== Block  Design ===//
                                get_template_part('template-parts/slide-thumbnail', null, $the_query->the_post()); 
                            endwhile;
                            //==== End Loop =====//
                        echo '</div>';
                    echo '</div>';
                }
    
                //=== Pagination ===//
                if ($current['pagination'] && function_exists("pagination")) {
                    pagination($the_query); 
                };
                //=== Reset Query Data ===//
                wp_reset_postdata();
            endif;
            //==== End Query =====//
        } else {
            //==== Start Query =====//
            if (have_posts()) :
                echo '<div class="row">';
                //==== Loop Start ====//
                while (have_posts()) : 
                    //=== Block  Design ===//
                    get_template_part('template-parts/product-card',null, the_post());
                endwhile;
                //==== End Loop =====//
                echo '</div>';
    
                //=== Pagination ===//
                if ($current['pagination'] && function_exists("pagination")) {
                    pagination($wp_query);
                };
                //=== Reset Data ===//
                wp_reset_postdata();
            endif;
            //==== End Query =====//
        }
    }
    
    //===> Stop Collecting Data <===//
    $blockOutput = ob_get_clean();
    $markup  .= $blockOutput;
    return "{$markup}";
}

//===> Register Phenix Block <===//
function px_query_block () {
    //===> Define [JSON] Assets  <===//
    $assets_path = get_template_directory().'/assets/js/blocks/px-query/';
    $assets_uri = get_template_directory_uri().'/assets/js/blocks/px-query/';
    $px_assets = include($assets_path.'index.asset.php');

    //===> Add the Block JS <===//
    wp_register_script('px-query',
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