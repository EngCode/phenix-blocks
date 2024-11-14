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
 ** 01 - Delete "Archive" Prefix
 ** 02 - Pagination Creator
 ** 03 - Excerpt Striper
 ** 04 - Limited Excerpt 
 ** 05 - Excerpt More
 ** 06 - Get Patterns
 ** 07 - Get Templates Part
 ** 08 - Get Templates Parts Select
 ** 09 - Debug Variables
 ** 10 - Get Post Views
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//====> Delete "Archive" Prefix <====//
if (!function_exists('refactor_archive_title')) :
	/**
	 * WP Filters.
	 * @since Phenix WP 1.0
	 * @return void
	 * 
	 ** 01 - Excerpt Strip
	 ** 02 - CF7 Customize
	*/
	function refactor_archive_title( $title ) {
		if (is_category()) {
			$title = single_cat_title('', false);
			
		} elseif ( is_tag() ) {
			$title = single_tag_title('', false);
		} elseif ( is_post_type_archive() ) {
			$title = post_type_archive_title('', false);
		} elseif ( is_tax() ) {
			$title = single_term_title('', false);
		}
		return $title;
	}

	add_filter( 'get_the_archive_title', 'refactor_archive_title' );
endif;

/*====> Pagination <====*/
if (!function_exists('pagination')) :
	/**
	 * WP Filters.
	 * @since Phenix WP 1.0
	 * @return void
	 * 
	 ** 01 - Excerpt Strip
	 ** 02 - CF7 Customize
	*/

	function pagination($query, $options = array(
		"container"  => "flexbox align-center mb-30",
		"buttons"    => "btn small square border-1 border-solid border-alpha-10 me-10",
		"normal_btn" => "light",
		"active_btn" => "primary active",
		"next_icon"  => "fas fa-angle-right",
		"prev_icon"  => "fas fa-angle-left",
	)) {
		//===> Options and  Styles <===//
		$list_style = $options["container"];
		$main_style = $options["buttons"];
		$normal_btn = $options["normal_btn"];
		$active_btn = $options["active_btn"];
		$icon_right = $options["next_icon"];
		$icon_left  = $options["prev_icon"];

		//===> Create Next and Prev Buttons <===//
		$next_btn = sprintf('%1$s<i class="'.$icon_right.'"></i>', "");
		$prev_btn = sprintf('%1$s<i class="'.$icon_left.'"></i>', "");
		
		if(is_rtl()) {
			$prev_btn = sprintf('%1$s<i class="'.$icon_right.'"></i>', "");
			$next_btn = sprintf('%1$s<i class="'.$icon_left.'"></i>', "");
		}

		//===> Configuration <===//
		$pages = paginate_links( array(
			'mid_size'     => 2,
			'end_size'     => 2,
			'prev_next'    => true,
			'show_all'     => false,
			'type'         => 'array',
			'format'       => '?page=%#%',
			'total'        => $query->max_num_pages,
			'prev_text'    => $prev_btn,
			'next_text'    => $next_btn,
			'current'      => max(1, get_query_var('paged')),
			'base'         => str_replace(999999999, '%#%', esc_url(get_pagenum_link(999999999))),
		));
	
		//===> Generate <===//
		if(is_array($pages)) {
			//===> List <===//
			echo '<ul class="reset-list pagination '.$list_style.'">';
			//===> Pages Start <===//
			foreach ($pages as $page) {
				//===> if its the Current Page <===//
				if (strpos($page, 'current') !== false) {
					$page = str_replace("span", "a", $page);
					echo "<li class='".$main_style." ".$active_btn."'>$page</li>";
				}
				//===> else other pages <===//
				else {
					echo "<li class='".$main_style." ".$normal_btn."'>$page</li>";
				}
			}
			//===> Pages End <===//
			echo '</ul>';
			//===> List <===//
		}
	}
endif;

//====> Excerpt Striper <====//
remove_filter('the_excerpt', 'wpautop');

//====> Limited Excerpt <====//
function px_excerpt_length($length) {return $length;}
add_filter('excerpt_length', 'px_excerpt_length', get_option("excerpt_length") ? get_option("excerpt_length") : 175);

//====> Excerpt More <====//
function wpdocs_excerpt_more($more) {return '...';}
add_filter('excerpt_more', 'wpdocs_excerpt_more');

//===> Get Patterns <===//
if (!function_exists('pds_get_patterns')) :
	/**
	 * @since Phenix WP 1.0
	 * @return void
	*/

	function pds_get_patterns() {
		if (class_exists('WP_Block_Patterns_Registry')) {
			//===> Get Registered Block Patterns <===//
			$get_patterns = WP_Block_Patterns_Registry::get_instance()->get_all_registered();

			//===> Create a new List of Patterns <===//
			$patterns_list = array_map(
				function (array $pattern) {
					return $pattern;
				},
				$get_patterns
			);
	
			//===> Return the Patterns <===//
			return $patterns_list;
		}
	}
endif;

//===> Get Templates Parts <===//
if (!function_exists('pds_get_theme_parts')) :
	/**
	 * @since Phenix WP 1.0
	 * @return void
	*/

	function pds_get_theme_parts(DirectoryIterator $base_path) {
		//===> Define Files List <===//
		$result = array();

		//===> For Each File in the Givin Path <===//
		if (isset($base_path)) {
			foreach ($base_path as $key => $child) {
				//===> If its a File <===//
				if ($child->isDot()) { continue; }
				
				//===> Get its Base Base <===//
				$name = $child->getBasename();
	
				//===> if its a Directory <===//
				if ($child->isDir()) {
					//===> Get its Files List <===//
					$sub_directory = new DirectoryIterator($child->getPathname());
	
					//===> add the Files List to the Result <===//
					$result[$name] = pds_get_theme_parts($sub_directory);
				}
				//===> if its Normal File <===//
				else {
					//===> Add the File to the Result <===//
					$result[] = $name;
				}
			}
		}

		//===> Return the Files Tree <===//
		return $result;
	}
endif;

//===> Get Templates Parts Select <===//
if (!function_exists('pds_get_theme_parts_select')) :
	/**
	 * @since Phenix WP 1.0
	 * @return void
	*/

	function pds_get_theme_parts_select() {
		//===> Define Files List <===//
        $Files_List = get_option("theme_parts");

        //===> Create Select Control <===//
        echo '<select class="form-control tx-capitalize" name="theme-part" title="Template Part" style="max-width:unset;">';
            foreach (array_reverse($Files_List) as $key => $value) {
                if (is_array($value)) {
                    echo '<optgroup label="'.$key.'">';
                        foreach ($value as $key2 => $value2) {
                            $value2 = str_replace(".php", "",$value2);
                            echo '<option value="'.$key.'/'.$value2.'">'.str_replace("-", " ",$value2).'</option>';
                        }
                    echo '</optgroup>';
                } else {
                    $value = str_replace(".php", "",$value);
                    $value = str_replace("_", "", $value);
                    echo '<option value="'.$value.'">'.str_replace("-", " ",$value).'</option>';
                }
            }
        echo '</select>';
	}
endif;

//===> Debug Variables <===//
if (!function_exists('pds_var_dump')) :
	function pds_var_dump($variable) {
		echo '<pre>';
			highlight_string("<?php\n" . var_export($variable, true));
		echo '</pre>';
	}
endif;

//===> Get Post Views <===//
if (!function_exists('get_post_views')) :
	function get_post_views($post_id) {
		//===> Define Counter <====//
		$count_key = 'post_views_count';
		$count = get_post_meta( $post_id, $count_key, true );
		//===> if Count is Empty <===//
		if ($count == '') {
			//===> delete the meta data <====//
			delete_post_meta($post_id, $count_key);
			//===> set the count to 0 <====//
			add_post_meta( $post_id, $count_key, '0' );
			//===> Return Zero <===//
			return "0";
		}
		//===> Return counting <===//
		return $count;
	}
endif;

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

        //====> Import posts into WordPress <====//
        foreach ($posts_data as $post_data) {
            //====> Create Post Data Schema <====//
            $post_args = [
                'post_status'   => 'publish',
                'post_type'     => $post_data['post_type'],
                'post_title'    => wp_strip_all_tags($post_data['post_title']),
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

					//===> Default Language <====//
					// update_post_meta($post_id, 'language', "ar");
                }
            }
        }

        //====> Send success response with imported count <====//
        wp_send_json_success(['message' => 'Posts imported successfully.', 'imported' => $imported_posts]);
    }

    add_action('wp_ajax_pds_import_posts', 'pds_import_posts');
endif;

//====> Create Posts from a Json File <====//
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

//====> Extract Post Titles/ID's into wp-content <====//
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
		$options = array('post_type' => $response_data["post_type"], 'posts_per_page' => -1, 'fields' => 'ids');

		//===> Get Posts <===//
		$posts = get_posts($options);

		//===> Create Data Array <===//
		$export_data = array();

		//===> Loop through Posts <===//
		foreach ($posts as $post_id) {
			//===> Add Post ID and Title <===//
			$export_data[] = array(
				'id' => $post_id,
				'title' => get_the_title($post_id),
				'post_type' => $response_data["post_type"],
			);

			//===> Add Meta Data <===//
			if (!empty($response_data["metaboxes"])) {
				foreach ($response_data["metaboxes"] as $metabox) {
					$export_data["meta"][$metabox] = get_post_meta($post_id, $metabox, true);
				}
			}
		}

		//===> Success Message <===//
		wp_send_json_success(json_encode($export_data, JSON_PRETTY_PRINT));
	}

	//===> Export Posts <===//
	add_action('wp_ajax_pds_posts_exporter', 'pds_posts_exporter');
endif;

//===> Add a Columns to Posts Table <===//
function pds_add_admin_columns($columns) {
	//===> Define Columns <===//
    $columns['post_id'] = 'Post ID';

	//===> Return Columns <===//
    return $columns;
}

//===> Assign Data to the Columns <===//
function pds_add_admin_columns_data($column, $post_id) {
	//====> Show Post ID <===//
    if ($column === 'post_id') {
        echo $post_id;
    }
}

// add_filter('manage_posts_columns', 'pds_add_admin_columns');
// add_action('manage_posts_custom_column', 'pds_add_admin_columns_data', 10, 2);