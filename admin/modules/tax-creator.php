<?php
/**
 * Phenix Blocks Admin Controls
 * @since Phenix WP 1.0
 * @return void
*/

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
            $post_types = isset($options['post_types']) ? $options["post_types"] : array("tag");

            //==== CPT Labels ====//
            $labels = array(
                'name'               => $label,
                'menu_name'          => $label,
                'add_new'            => px__('Add New '.$singular),
                'edit_item'          => px__('Edit '.$singular),
                'new_item'           => px__('New '.$singular),
                'all_items'          => px__('All '.$label_singular),
                'view_item'          => px__('View '.$singular),
                'not_found'          => px__('No '.$label_singular.' found'),
                'search_items'       => px__('Search '.$label),
                'add_new_item'       => px__('Add New '.$singular),
                'singular_name'      => px__($singular),
                'not_found_in_trash' => px__('No '.$label_singular.' found in the Trash'), 
            );

            //==== CPT Options ====//
            $args = array(
                'labels'            => $labels,
                'public'            => true,
                'hierarchical'      => true,
                'show_admin_column' => true,
                'show_in_rest'      => true,
                'query_var'         => true,
                'rewrite'           => array('slug' => $name),
            );

            register_taxonomy ($name, $post_types, $options);
        });
    }
endif;