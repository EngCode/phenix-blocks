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
		if ( is_category() ) {
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

	function pagination($query, $options = array()) {
		//===> Options and  Styles <===//
		$list_style = $options["container"] ? $options["container"] : "flexbox align-center mb-30";
		$main_style = $options["buttons"] ? $options["buttons"] : "border-1 border-solid border-alpha-10 me-10";
		$normal_btn = $options["normal_btn"] ? $options["normal_btn"] : "light";
		$active_btn = $options["active_btn"] ? $options["active_btn"] : "primary active";
		$icon_right = $options["next_icon"] ? $options["next_icon"] :"fas fa-angle-right";
		$icon_left  = $options["prev_icon"] ? $options["prev_icon"] :"fas fa-angle-left";

		//===> Create Next and Prev Buttons <===//
		$next_btn = !is_rtl() ? sprintf('%1$s<i class="'.$icon_right.'"></i>', "") : sprintf('<i class="'.$icon_left.'"></i>%1$s', "");
		$prev_btn = is_rtl() ? sprintf('%1$s<i class="'.$icon_left.'"></i>', "") : sprintf('<i class="'.$icon_right.'"></i>%1$s', "");

		//===> Configuration <===//
		$pages = paginate_links( array(
			'end_size'     => 2,
			'mid_size'     => 2,
			'prev_next'    => true,
			'show_all'     => false,
			'type'         => 'array',
			'format'       => '?page=%#%',
			'total'        => $query->max_num_pages,
			'current'      => max(1, get_query_var('paged')),
			'prev_text'    => $prev_btn,
			'next_text'    => $next_btn,
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
function px_excerpt_length($length) {return 18;}
add_filter('excerpt_length', 'px_excerpt_length', 175);

//====> Excerpt More <====//
function wpdocs_excerpt_more($more) {return '...';}
add_filter('excerpt_more', 'wpdocs_excerpt_more');

//===> Get Patterns Function <===//
if (!function_exists('pds_get_patterns')) :
	/**
	 * @since Phenix WP 1.0
	 * @return void
	*/

	function pds_get_patterns() {
		//===> Get Registered Block Patterns <===//
		$get_patterns  = WP_Block_Patterns_Registry::get_instance()->get_all_registered();

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

//===> Get Templates Parts Select <===//
if (!function_exists('pds_limit_login_attempts')) :
	/**
	 * @since Phenix WP 1.0
	 * @return void
	*/

	function pds_limit_login_attempts() {
		//===> Max Attempts <===//
		$login_attempts = 3;

		//===> Lockout Duration <===//
		$lockout_duration = 300;

		//===> Check if the Cookie is Set <===//
		if (isset($_COOKIE['login_attempts']) && $_COOKIE['login_attempts'] >= $login_attempts) {
			//===> Check if the Lockout Duration is Over <===//
			header('HTTP/1.1 403 Forbidden');
			//===> Display the Error Message <===//
			echo 'Forbidden';
			//===> Exit <===//
			exit;
		}

		//===> Check if the Login Form is Submitted <===//
		if (isset($_POST['log'])) {
			//===> Check if the Cookie is Set <===//
			if (!isset($_COOKIE['login_attempts'])) {
				//===> Set the Cookie <===//
				setcookie('login_attempts', 1, time() + $lockout_duration, '/');
			} else {
				//===> Increase the Cookie Value <===//
				setcookie('login_attempts', $_COOKIE['login_attempts'] + 1, time() + $lockout_duration, '/');
			}
		}
	}

	add_action('wp_login_failed', 'pds_limit_login_attempts');
endif;
