<?php
/**
 * Phenix Blocks Admin Controls
 * @since Phenix WP 1.0
 * @return void
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

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
            $label_singular = isset($options['label-singular']) ? $options["label-singular"] : $options["label"];
            $template = isset($options['template']) ? $options["template"] : "";
            $menu_icon = isset($options['menu_icon']) ? $options["menu_icon"] : "category";
            $menu_position = isset($options['menu_position']) ? $options["menu_position"] : 17;
            $taxonomies = isset($options['taxonomies']) ? $options["taxonomies"] : array("post_tag");
            $hierarchical = isset($options['hierarchical']) ? $options["hierarchical"] : false;

            //==== Template Correct ====//
            if($template && getType($template) !== 'array') {
                if ($template == "") {
                    $template = array();
                } else {
                    $template = array (
                        array('core/pattern',
                            array ('slug' => $template),
                        ),
                    );
                }
            }

            //==== CPT Labels ====//
            $labels = array(
                'name'               => $label,
                'menu_name'          => $label,
                'add_new'            => __('Add New '.$label_singular, 'pds-blocks'),
                'edit_item'          => __('Edit '.$singular, 'pds-blocks'),
                'new_item'           => __('New '.$singular, 'pds-blocks'),
                'all_items'          => __('All '.$label_singular, 'pds-blocks'),
                'view_item'          => __('View '.$singular, 'pds-blocks'),
                'not_found'          => __('No '.$label_singular.' found', 'pds-blocks'),
                'search_items'       => __('Search '.$label, 'pds-blocks'),
                'add_new_item'       => __('Add New '.$singular, 'pds-blocks'),
                'singular_name'      => __($singular, 'pds-blocks'),
                'not_found_in_trash' => __('No '.$label_singular.' found in the Trash', 'pds-blocks'), 
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
                'hierarchical'  => $hierarchical,
                'template'      => $template,
                'taxonomies'    => $taxonomies,
                'supports'      => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields', 'revisions', 'comments'),
            );

            register_post_type($name, $args);
        });
    }
endif;