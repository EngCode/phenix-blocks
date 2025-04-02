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
 ** - Delete "Archive" Prefix
 ** - Pagination Creator
 ** - Excerpt Striper
 ** - Limited Excerpt 
 ** - Excerpt More
 ** - Get Patterns
 ** - Get Templates Part
 ** - Get Templates Parts Select
 ** - Debug Variables
 ** - Get Post Views
 ** - Add Dynamic Options to CF7 Dropdowns
 ** - Add a Duplicate link
 ** - Handle the duplication logic
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
	 * Get a list of files and directories from a given path
	 * @since Phenix WP 1.0
	 * @param string|DirectoryIterator $path Path to scan or DirectoryIterator instance
	 * @return array List of files and directories
	*/

	function pds_get_theme_parts($path) {
		//===> Define Files List <===//
		$result = array();

		//===> Handle string path input <===//
		if (is_string($path)) {
			//===> Check if path exists and is a directory <===//
			if (!file_exists($path) || !is_dir($path)) {
				return $result;
			}

			//===> Create a new DirectoryIterator instance <===//   
			try {
				$path = new DirectoryIterator($path);
			} catch (Exception $e) {
				error_log("Error creating DirectoryIterator: " . $e->getMessage());
				return $result;
			}
		}

		//===> Check if path is valid DirectoryIterator <===//
		if (!($path instanceof DirectoryIterator)) {
			return $result;
		}

		//===> For Each File in the Given Path <===//
		try {
			foreach ($path as $key => $child) {
				//===> If its a File <===//
				if ($child->isDot()) { continue; }
				
				//===> Get its Base Name <===//
				$name = $child->getBasename();
	
				//===> if its a Directory <===//
				if ($child->isDir()) {
					try {
						//===> Get its Files List <===//
						$sub_directory = new DirectoryIterator($child->getPathname());
		
						//===> add the Files List to the Result <===//
						$result[$name] = pds_get_theme_parts($sub_directory);
					} catch (UnexpectedValueException $e) {
						// Log error but continue execution
						error_log("Error accessing subdirectory {$name}: " . $e->getMessage());
						continue;
					}
				}
				//===> if its Normal File <===//
				else {
					//===> Add the File to the Result <===//
					$result[] = $name;
				}
			}
		} catch (Exception $e) {
			error_log("Error scanning directory: " . $e->getMessage());
			return $result;
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
                'post_content'  => generate_post_content($post_data),
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

//====> Generate Post Content with Tabs <====//
if (!function_exists('generate_post_content')) :
    function generate_post_content($post_data) {
        // Retrieve the template content
        $pattern_content = get_option('block_patterns')[6]["content"];

        // Replace placeholders for the main post title and description with HTML-encoded content
        $pattern_content = str_replace(
            [
                "post_title",        // Placeholder for the post title
                "post_description"   // Placeholder for the post description
            ],
            [
                esc_html($post_data['post_title']),            // Replaces with title
                wp_kses_post($post_data['description'])        // Replaces with description as HTML
            ],
            $pattern_content
        );

        // Replace placeholders for each tab title and content
        $tabs = [
            "project_rationale" => ["title" => "project_rationale_title", "content" => "project_rationale_content"],
            "demand_analysis" => ["title" => "demand_analysis_title", "content" => "demand_analysis_content"],
            "financial_indicators" => ["title" => "financial_indicators_title", "content" => "financial_indicators_content"],
            "study_services" => ["title" => "study_services_title", "content" => "study_services_content"],
            "features" => ["title" => "features_title", "content" => "features_content"]
        ];

        foreach ($post_data['tabs'] as $key => $tab_info) {
            if (isset($tabs[$key])) {
                $pattern_content = str_replace(
                    [
                        $tabs[$key]['title'],
                        $tabs[$key]['content']
                    ],
                    [
                        esc_html($tab_info['title']),         // Tab title as plain text
                        wp_kses_post($tab_info['content'])    // Tab content as HTML
                    ],
                    $pattern_content
                );
            }
        }

        return $pattern_content;
    }
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
        $options = array(
            'post_type' => $response_data["post_type"], 
            'posts_per_page' => -1, 
            'fields' => 'ids'
        );

        //===> Get Posts <===//
        $posts = get_posts($options);

        //===> Create Data Array <===//
        $export_data = array();

        //===> Loop through Posts <===//
        foreach ($posts as $post_id) {
            //===> Add Post ID and Title <===//
            $export_data[] = array(
                'id' => $post_id,
                'title' => html_entity_decode(get_the_title($post_id), ENT_QUOTES | ENT_XML1, 'UTF-8'),
                'post_type' => $response_data["post_type"],
            );

            //===> Add Meta Data <===//
            if (!empty($response_data["metaboxes"])) {
                $meta_data = array();
                foreach ($response_data["metaboxes"] as $metabox) {
                    $meta_data[$metabox] = get_post_meta($post_id, $metabox, true);
                }
                $export_data[count($export_data) - 1]['meta'] = $meta_data;
            }
        }

        //===> Success Message <===//
        wp_send_json_success($export_data);
    }

    //===> Export Posts <===//
    add_action('wp_ajax_pds_posts_exporter', 'pds_posts_exporter');
endif;

//===> Add Dynamic Options to CF7 Dropdowns <===//
if (!function_exists('pds_cf7_dd_options')):
    function pds_cf7_dd_options($form_control, $unused ) {
        //===> Check if its Post Type or Taxonomy Field <===//
        $cpt_cpt = str_contains($form_control['name'], "cpt-");
        $tax_cpt = str_contains($form_control['name'], "tax-");
        $custom_ops = str_contains($form_control['name'], "pds-");

        //===> Check if the name matches custom or dynamic options <===//
        if ($cpt_cpt ||  $tax_cpt || $custom_ops) {
            //===> Add a Post Type Options <===//
            if (str_contains($form_control['name'], "cpt-")) {
                //===> Get the Current Post Type Within a Post <===//
                $post_type = str_replace("cpt-", "", $form_control['name']);
    
                //===> Get Current Post Type <===//
                if ($form_control['name'] === "cpt-current") {
                    if (isset($post) && $post->ID) {
                        $post_type = get_post_type($post->ID);
                    } else {
                        $post_type = get_post_type();
                    }
                }
    
                /*==== Query Data =====*/
                $the_query = new WP_Query(array('post_type' => $post_type, 'posts_per_page' => -1));
                //==== Start Query =====//
                if ($the_query->have_posts()) :
                    //===> Get the First Post <===//
                    while ($the_query->have_posts()): $the_query->the_post();
                        $form_control['raw_values'][] = get_the_title();
                        $form_control['labels'][] = get_the_title();
                    endwhile;
                    //==== RESET Query =====//
                    wp_reset_postdata();
                endif;
            }
    
            //===> Add the Options to the "pickup-location" <===//
            else if (str_contains($form_control['name'], "taxonomy-")) {
                //===> Add the Locations to the Options <===//
                $taxonomies_terms = get_categories(array('taxonomy' => str_replace("taxonomy-", "", $form_control['name']), 'hide_empty' => false));
    
                if (!empty($taxonomies_terms)) {
                    //===> Loop Through Categories <===//
                    foreach ($taxonomies_terms as $term) :
                        $form_control['labels'][] = $term->label;
                        $form_control['raw_values'][] = $term->name;
                    endforeach;
                }
            }
    
            //===> Create Countries Select <===//
            else if ($form_control['name'] === "pds-country") {
                //====> Get Countries JSON <====//
                $countries_list = get_option("countries_list");
    
                //====> Loop through the JSON Object <====//
                foreach ($countries_list as $country) {
                    $form_control['raw_values'][] = $country['code'];
                    $form_control['labels'][] = $country['name'];
                }
            }
    
            //===> Pass the Options to CF7 <===//
            $pipes = new WPCF7_Pipes($form_control['raw_values']);
            $form_control['values'] = $pipes->collect_befores();
            $form_control['pipes'] = $pipes;
        }

        //===> Return the Field <===//
        return $form_control;
    }

    add_filter('wpcf7_form_tag', 'pds_cf7_dd_options', 10, 2);
endif;

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
        'post_author'   => get_current_user_id()
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

