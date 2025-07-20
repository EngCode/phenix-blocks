<?php
/**
 * Phenix WP Optimization Functions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Phenix_WP
 * @since Phenix WP 1.0
 * 
 * ========> Reference by Comments <=======
 ** - Add a Duplicate link to the posts table
 ** - Handle the duplication logic
*/

//===> Add a Duplicate link to the posts table <===//
add_filter('post_row_actions', 'pds_add_duplicate_button', 10, 2);

function pds_add_duplicate_button($actions, $post) {
	//===> Check if user has permission to duplicate posts <===//
    if (current_user_can('edit_posts')) {
        $actions['duplicate'] = '<a href="' . wp_nonce_url(admin_url('admin.php?action=duplicate_post&post_id=' . $post->ID), 'duplicate_post_' . $post->ID) . '">Duplicate</a>';
    }
	//===> Return Actions <===//
    return $actions;
}

//===> Handle the duplication logic <===//
add_action('admin_action_duplicate_post', 'pds_duplicate_post');

function pds_duplicate_post() {	
    //===> Verify nonce and check if the user has permission to duplicate posts <===//
    if (!isset($_GET['post_id']) || !current_user_can('edit_posts') || !wp_verify_nonce($_GET['_wpnonce'], 'duplicate_post_' . $_GET['post_id'])) {
        wp_die('No permissions or invalid nonce.');
    }

	//===> Define Data <===//
	$post_title_prefix = '#';
    $post_id = intval($_GET['post_id']);
    $original_post = get_post($post_id);

	//===> Check if the original post exists <===//
    if (!$original_post) { 
        wp_die('Original post not found.'); 
    }

	//===> Check for existing duplicates <===//
    $existing_posts = get_posts(array(
        'post_type' => $original_post->post_type,
        'posts_per_page' => -1,
        'fields' => 'ids',
        'meta_query' => array(
            array(
                'key' => '_original_post_id',
                'value' => $post_id,
                'compare' => '='
            )
        )
    ));

	//===> Count existing duplicates and calculate new prefix <===//
    $duplicate_count = count($existing_posts) + 1;
    $prefix_number = str_pad($duplicate_count, 2, '0', STR_PAD_LEFT); // e.g., 01, 02, etc.

	//===> Create the new post data <===//
    $new_post_data = array(
        'post_title'    => $original_post->post_title . ' ' . $post_title_prefix . $prefix_number, // Add the prefix to the end of the title
        'post_content'  => $original_post->post_content,
        'post_status'   => 'publish', // New duplicated posts are published
        'post_type'     => $original_post->post_type,
        'post_author'   => get_current_user_id(),
        'post_excerpt' => $original_post->post_excerpt,
    );

	//===> Insert the new post <===//
    $new_post_id = wp_insert_post($new_post_data);

	//===> Check if the new post was created successfully <===//
    if (is_wp_error($new_post_id)) {
        wp_die('Failed to duplicate the post.');
    }

    //===> Copy metadata to the new post <===//
    $meta_keys = get_post_custom_keys($post_id);
    if (!empty($meta_keys)) {
        foreach ($meta_keys as $meta_key) {
            $meta_values = get_post_meta($post_id, $meta_key);
            foreach ($meta_values as $meta_value) {
                update_post_meta($new_post_id, $meta_key, $meta_value);
            }
        }
    }

    //===> Copy taxonomies to the new post <===//
    $taxonomies = get_object_taxonomies($original_post->post_type);
    foreach ($taxonomies as $taxonomy) {
        $post_terms = wp_get_object_terms($post_id, $taxonomy, array('fields' => 'slugs'));
        wp_set_object_terms($new_post_id, $post_terms, $taxonomy, false);
    }

    //===> Copy the featured image (thumbnail) to the new post <===//
    $thumbnail_id = get_post_thumbnail_id($post_id);
    if ($thumbnail_id) {
        set_post_thumbnail($new_post_id, $thumbnail_id);
    }

    //===> Save original post ID as metadata for tracking <===//
    update_post_meta($new_post_id, '_original_post_id', $post_id);

    //===> Redirect to the posts list page (edit.php) to refresh <===//
    wp_redirect(admin_url('edit.php?post_type=' . $original_post->post_type));

	//===> Exit <===//
    exit;
}