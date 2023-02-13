<?php
/**
 * Phenix Blocks : Custom Data Collections
 *
 * @link https://design.phenixthemes.com
 *
 * @package WordPress
 * @subpackage pds-blocks
 * @since Phenix Blocks 1.0
 * 
 * ========> Reference by Comments <=======
 ** 01 - Phenix Register Custom Data
 ** 02 - Register Each Post-Type
 ** 03 - Register Each Taxonomy
*/

defined('ABSPATH') || exit;

//====> Phenix Register Custom : [Post-Types, Taxonomies] <====//
add_action('init', function() { 
    //===> Get Data <===//
    $post_types = get_option('pds_post_types');
    $taxonomies_list = get_option('pds_taxonomies');

    //===> Register Each Post-Type <===//
    foreach($post_types as $new_cpt_options) {
        //===> if the Post-Type is Enabled <===//
        if($new_cpt_options['open'] == true) {
            //==== Get Options ====//
            $name = $new_cpt_options["name"];
            $label = $new_cpt_options["label"];
            $singular = isset($new_cpt_options['singular']) ? $new_cpt_options["singular"] : $new_cpt_options["name"];
            $label_singular = isset($new_cpt_options['label_singular']) ? $new_cpt_options["label_singular"] : $new_cpt_options["label"];
            $template = isset($new_cpt_options['template']) ? $new_cpt_options["template"] : array();
            $menu_icon = isset($new_cpt_options['menu_icon']) ? $new_cpt_options["menu_icon"] : "category";
            $menu_position = isset($new_cpt_options['menu_position']) ? $new_cpt_options["menu_position"] : 6;
            $taxonomies = array();

            //===> Create Taxonomies List <===//
            foreach($taxonomies_list as $taxonomy){
                if(in_array($name, $taxonomy['post_type'])) {
                    $taxonomies[] = $taxonomy['name'];
                }
            }

            //==== CPT Labels ====//
            $labels = array(
                'name'               => px__($label),
                'menu_name'          => px__($label),
                'add_new'            => px__('Add New '.$singular),
                'edit_item'          => px__('Edit '.$singular),
                'new_item'           => px__('New '.$singular),
                'all_items'          => px__('All '.$label_singular),
                'view_item'          => px__('View '.$singular),
                'not_found'          => px__('No '.$label_singular.' found' ),
                'search_items'       => px__('Search '.$label),
                'add_new_item'       => px__('Add New '.$singular),
                'singular_name'      => px__($singular),
                'not_found_in_trash' => px__('No '.$label_singular.' found in the Trash'), 
            );

            //==== CPT Options ====//
            $options = array(
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

            //==== CPT Register ====//
            register_post_type($name, $options);
        }
    }

    //===> Register Each Taxonomy <===//
    foreach($taxonomies_list as $taxonomy) {
        //==== Get Options ====//
        $singular = isset($taxonomy['singular']) ? $taxonomy["singular"] : $taxonomy["name"];
        $label_singular = isset($taxonomy['label_singular']) ? $taxonomy["label_singular"] : $taxonomy["label"];

        //==== Labels ====//
        $taxonomy_labels = array(
            'name'               => px__($taxonomy["label"]),
            'menu_name'          => px__($taxonomy["label"]),
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

        //==== Options ====//
        $options = array(
            'labels'            => $taxonomy_labels,
            'rewrite'           => array('slug' => $taxonomy['name']),
            'public'            => true,
            'hierarchical'      => true,
            'show_admin_column' => true,
            'show_in_rest'      => true,
            'query_var'         => true,
        );

        //==== Tax Register ====//
        register_taxonomy ($taxonomy['name'], $taxonomy['post_type'], $options);
    }
});