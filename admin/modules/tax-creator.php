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

            //==== CPT Labels ====//
            $labels = array(
                'name'               => $label,
                'menu_name'          => $label,
                'add_new'            => __('Add New '.$singular, 'phenix'),
                'edit_item'          => __('Edit '.$singular, 'phenix'),
                'new_item'           => __('New '.$singular, 'phenix'),
                'all_items'          => __('All '.$label_singular, 'phenix'),
                'view_item'          => __('View '.$singular, 'phenix'),
                'not_found'          => __('No '.$label_singular.' found', 'phenix'),
                'search_items'       => __('Search '.$label, 'phenix'),
                'add_new_item'       => __('Add New '.$singular, 'phenix'),
                'singular_name'      => __($singular, 'phenix'),
                'not_found_in_trash' => __('No '.$label_singular.' found in the Trash', 'phenix'), 
            );

            //==== CPT Options ====//
            $args = array(
                'labels'             => $labels,
                'public'             => true,
                'hierarchical'       => true,
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