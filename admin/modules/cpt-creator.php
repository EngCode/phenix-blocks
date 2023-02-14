<?php
/**
 * Phenix Blocks Admin Controls
 * @since Phenix WP 1.0
 * @return void
*/

//====> Posts Type [Creation] <====//
if (!function_exists('pds_cpt_create')) :
    /**
     * Register new Custom Post Types
     * @since Phenix Blocks 1.0
     * @return void
    */

    function pds_cpt_create ($options) {
        add_action('init', function () use ($options) {
            //==== Get Options ====//
            $name = $options["name"];
            $label = $options["label"];
            $singular = isset($options['singular']) ? $options["singular"] : $options["name"];
            $label_singular = isset($options['label_singular']) ? $options["label_singular"] : $options["label"];
            $template = isset($options['template']) ? $options["template"] : array();
            $menu_icon = isset($options['menu_icon']) ? $options["menu_icon"] : "category";
            $menu_position = isset($options['menu_position']) ? $options["menu_position"] : 19;
            $taxonomies = isset($options['taxonomies']) ? $options["taxonomies"] : array("tag");

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
                'labels'        => $labels,
                'name'          => $name,
                'singular_name' => $singular,
                'menu_position' => $menu_position,
                'menu_icon'     => 'dashicons-'.$menu_icon,
                'public'        => true,
                'has_archive'   => true,
                'show_in_rest'  => true,
                'hierarchical'  => true,
                'template'      => $template,
                'taxonomies'    => $taxonomies,
                'supports'      => array('title', 'editor', 'excerpt', 'thumbnail', 'revisions'),
            );

            register_post_type($name, $args);
        });
    }
endif;