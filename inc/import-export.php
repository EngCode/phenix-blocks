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
 ** - Create Posts from a Json File
 ** - Remove Posts
 ** - Extract Posts as JSON
*/

//====> Create Posts from a Json File <====//
if (!function_exists('pds_import_posts')) :
    function pds_import_posts() {
        //====> Clear output buffer to prevent unexpected output <====//
        ob_clean();

        //====> Verify nonce <====//
        check_ajax_referer('wp_rest', '_ajax_nonce');

        //====> Check if data exists <====//
        if (!isset($_POST['posts_data'])) {
            wp_send_json_error(['message' => 'No data provided.']);
            return;
        }

        //====> Decode JSON data <====//
        $posts_data = json_decode(stripslashes($_POST['posts_data']), true);

        //====> Check if JSON decoding was successful <====//
        if (!$posts_data) {
            wp_send_json_error(['message' => 'Invalid JSON data.']);
            return;
        }

        //====> Initialize counter for imported posts <====//
        $imported_posts = 0;

		//====> Check the Post Data Schema <====//
		if (empty($posts_data) || !is_array($posts_data)) {
			error_log("posts_data is unexpectedly empty or not an array before foreach.");
			wp_send_json_error(['message' => 'posts_data is unexpectedly empty or invalid.']);
			return;
		}

        //====> Import posts into WordPress <====//
        foreach ($posts_data as $post_data) {
            //====> Create Post Data Schema <====//
            $post_args = [
                'post_status'   => 'publish',
                'post_type'     => $post_data['post_type'],
                'post_title'    => wp_strip_all_tags($post_data['post_title']),
				//===> Content Template Pattern <===//
                'post_content'  => $post_data['post_content'] ?? '',
            ];

            //====> Insert the post into WordPress and get the post ID <====//
			$post_id = wp_insert_post($post_args);

            //====> Add custom meta fields <====//
            if (!is_wp_error($post_id)) {
                $imported_posts++;

                if (is_array($post_data['meta'])) {
					//===> Add Meta Data <====//
                    foreach ($post_data['meta'] as $key => $value) {
                        update_post_meta($post_id, $key, $value);
                    }
                }
            }
        }

        //====> Send success response with imported count <====//
        wp_send_json_success(['message' => 'Posts imported successfully.', 'imported' => $imported_posts]);
    }

    add_action('wp_ajax_pds_import_posts', 'pds_import_posts');
endif;

//====> Remove Posts <====//
if (!function_exists('pds_posts_remover')) :
    //====> Remove Posts <====//
	function pds_posts_remover($post_type) {
		//====> Clear output buffer to prevent unexpected output <====//
        ob_clean();

        //====> Verify nonce <====//
        check_ajax_referer('wp_rest', '_ajax_nonce');

        //====> Check if data exists <====//
        if (!isset($_POST['data'])) {
            wp_send_json_error(['message' => 'No data provided.']);
            return;
        }

        //====> Decode JSON data <====//
        $response_data = json_decode(stripslashes($_POST['data']), true);

        //====> Check if JSON decoding was successful <====//
        if (!$response_data) {
            wp_send_json_error(['message' => 'Invalid JSON data.']);
            return;
        }

		//===> Get All Posts <===//
		$query = new WP_Query([
			'post_type'      => $response_data["post_type"],
			'posts_per_page' => -1, // Retrieve all posts
			'fields'         => 'ids' // Only get post IDs
		]);

		//===> Loop through each post and delete it <===//
		if ($query->have_posts()) {
			foreach ($query->posts as $post_id) {
				wp_delete_post($post_id, true);
			}
			
			//===> Success Message <===//
			wp_send_json_success(['message' => "All posts of type '{$response_data["post_type"]}' have been deleted."]);
		}
	}

    add_action('wp_ajax_pds_posts_remover', 'pds_posts_remover');
endif;

//====> Extract Posts as JSON <====//
if (!function_exists('pds_posts_exporter')) :
    function pds_posts_exporter($post_type = "post", $metaboxes = array(), $content = false) {
        //====> Clear output buffer to prevent unexpected output <====//
        ob_clean();

        //====> Verify nonce <====//
        check_ajax_referer('wp_rest', '_ajax_nonce');

        //====> Check if data exists <====//
        if (!isset($_POST['data'])) {
            wp_send_json_error(['message' => 'No data provided.']);
            return;
        }

        //====> Decode JSON data <====//
        $response_data = json_decode(stripslashes($_POST['data']), true);

        //====> Check if JSON decoding was successful <====//
        if (!$response_data) {
            wp_send_json_error(['message' => 'Invalid JSON data.']);
            return;
        }

        //===> Get Options <===//
        $options = array(
            'posts_per_page' => -1,
            'post_type' => $response_data["post_type"], 
        );

        //===> Get Posts <===//
        $posts = get_posts($options);

        //===> Create Data Array <===//
        $export_data = array();

        //===> Loop through Posts <===//
        foreach ($posts as $post) {
            //===> Set up Post Data <===//
            $post_data = $post;

            //===> Add Featured Image URL <===//
            $post_data->post_thumbnail = get_the_post_thumbnail_url($post->ID, 'full');
            $post_data->post_excerpt = strip_tags(get_the_excerpt($post->ID));
            $post_data->post_meta = get_post_meta($post->ID);

            //===> Add Post the Extractor <===//
            $export_data[] = $post_data;
        }

        //===> Success Message <===//
        wp_send_json_success($export_data);
    }

    //===> Export Posts <===//
    add_action('wp_ajax_pds_posts_exporter', 'pds_posts_exporter');
endif;