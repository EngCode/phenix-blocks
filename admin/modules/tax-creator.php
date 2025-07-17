<?php
/**
 * Phenix Blocks Admin Controls
 * @since Phenix WP 1.0
 * @return void
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//====> Posts Type [Creation] <====//
if (!function_exists('pds_tax_create')) :
    /**
     * Register new Custom Post Types
     * @since Phenix Blocks 1.0
     * @return void
    */

    function pds_tax_create ($options) {
        add_action('init', function () use ($options) {
            //==== Get Options ====//
            $name = $options["name"];
            $label = $options["label"];
            $singular = isset($options['singular']) ? $options["singular"] : $options["name"];
            $label_singular = isset($options['label_singular']) ? $options["label_singular"] : $options["label"];
            $post_types = isset($options['post_types']) ? $options["post_types"] : array();
            $hierarchical = isset($options['hierarchical']) ? $options["hierarchical"] : true;

            //==== CPT Labels ====//
            $labels = array(
                'name'          => $label,
                'menu_name'     => $label,
                'singular_name' => $singular,
            );

            //==== CPT Options ====//
            $args = array(
                'labels'             => $labels,
                'public'             => true,
                'hierarchical'       => $hierarchical,
                'show_admin_column'  => true,
                'show_in_rest'       => true,
                'query_var'          => true,
                'show_ui'            => true,
                'show_tagcloud'      => true,
                'publicly_queryable' => true,
                'rewrite'            => array('slug' => $name),
            );

            register_taxonomy ($name, $post_types, $args);
        });
    }
endif;