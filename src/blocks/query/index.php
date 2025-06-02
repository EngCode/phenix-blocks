<?php
/**
 * Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//==== Block Render ====//
function px_query_render($block_attributes, $content) {
    //===> Start Collecting Data <===//
    $markup = '';ob_start();

    //===> Define Attributes <===//
    $slider_attrs = ""; 
    $grid_classes = "";
    $query = $block_attributes['query'];

    //===> Generate Taxonomies Query <===//
    if (isset($query['taxonomies-types']) && count($query['taxonomies-types']) > 0) {
        //===> Create Taxonomies in Query <===//
        $query['tax_query'] = array('relation' => 'AND');

        //===> for Each Taxonomy Type <===//
        foreach ($query['taxonomies-types'] as $taxonomy) {
            //===> Push the Taxonomy and its Terms <===//
            if (isset($query[$taxonomy.'-terms'])) {
                //===> Get Terms <===//
                $terms = array();
                foreach ($query[$taxonomy.'-terms'] as $term) {
                    $terms[] = (int) $term;
                }

                //===> Add the Taxonomy <===//
                $query['tax_query'][] = array(
                    'terms' => $terms,
                    'operator' => 'IN',
                    'field' => 'term_id',
                    'taxonomy' => $taxonomy,
                    'include_children' => true,
                );
            }
        }

        //===> Remove unnecessary Args from the Query <===//
        unset($query['taxonomies-types']);
        unset($query[$taxonomy.'-terms']);
    }

    //===> Render Options <===//
    $renderedProps = pds_blocks_options_render($block_attributes, $slider_attrs, $grid_classes);

    //===> Get Rendered Attributes <===//
    $slider_attrs = $renderedProps["slider_attrs"];
    $grid_classes = $renderedProps["grid_classes"];
    //===> Create Nonce Verification <===//
    $pds_nonce = wp_create_nonce("posts-query");

    //===> Get Current Global Query <===//
    global $wp_query;

    /*===> Query Items <===*/
    $query['per_page'] = isset($query['per_page']) ? (int) $query['per_page'] : 12;
    $query['posts_per_page'] = isset($query['per_page']) ? (int) $query['per_page'] : 12;
    
    /*===> Set Pagination Page <===*/
    $query['paged'] = isset($query['pagination']) ? (get_query_var('paged')) ? get_query_var('paged') : 1 : 1;

    /*===> Check for Search Query <===*/
    if (isset($query['s'])) {
        //===> if Search is Enable <===//
        if ($query['s'] === true && wp_verify_nonce($_GET['s'], "posts-query")) {
            //===> Get Search Keywords <===//
            $query['s'] = $_GET["s"];

            //===> Get the Post Type <===//
            if (isset($_GET["post_type"])) {
                $query['post_type'] = $_GET["post_type"];
            }

            //===> Set Default Type <===//
            else if (!isset($query['post_type']) || empty($query['post_type'])) {
                $query['post_type'] = "post";
            };
        }
        //===> if its Disable Delete the Prop <===//
        else { unset($query['s']); }
    };

    //===> Create New Query <===//
    if (isset($query['post_type'])) {
        $the_query = new WP_Query($query);
    }

    //===> Convert Query Informations into JSON String <===//
    $query_json = json_encode($query);

    //==== Start Query =====//
    if (isset($the_query) && $the_query->have_posts() || have_posts()) {
        //===> Grid Wrapper <===//
        if ($block_attributes['isFlexbox'] || isset($block_attributes['flexbox']['slider']) && $block_attributes['flexbox']['slider']) {
            echo '<div class="'.$grid_classes.'" '.$slider_attrs. ' data-query="'. $query_json .'" data-page="'.$query['paged'].'" data-template="'.$block_attributes["template_part"].'">';
        }

        //===> Custom Loop <===//
        if (isset($query['post_type']) && !empty($query['post_type']) && $the_query->have_posts()) {
            while ($the_query->have_posts()):
                //=== Template Part ===//
                get_template_part("template-parts/".$block_attributes["template_part"], null, $the_query->the_post());
            endwhile;
        } 
        //===> Native Loop <===//
        else {
            //===> Start Loop <===//
            while (have_posts()):
                //=== Template Part ===//
                get_template_part("template-parts/".$block_attributes["template_part"], null, the_post());
            endwhile;
        };

        //===> End Grid Wrapper <===//
        if ($block_attributes['isFlexbox'] || isset($block_attributes['flexbox']['slider']) && $block_attributes['flexbox']['slider']) {
            echo '</div>';
        }

        //=== Pagination ===//
        //===> Custom Query <===//
        if (isset($query['post_type']) && $the_query->have_posts() && !empty($query['post_type'])) {
            pagination($the_query); 
        } 
        //===> Native Query <===//
        else {
            pagination($wp_query);
        };

        //=== Reset Query Data ===//
        wp_reset_postdata();
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
        $px_assets['version'],true
    );

    //==== Register Block ====//
    register_block_type($assets_path.'block.json', array(
        'api_version'     => 2,
        'editor_script'   => 'px-query',
        'render_callback' => 'px_query_render'
    ));
}

add_action('init', 'px_query_block');