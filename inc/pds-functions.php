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
 ** - Query Pagination
 ** - Get Design Patterns
 ** - Get Templates Part
 ** - Get Templates Parts Select
 ** - Get Post Views
 ** - Add Dynamic Options to CF7 Dropdowns
 ** - Add a Duplicate link
 ** - Handle the duplication logic
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

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
