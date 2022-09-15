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
 ** 01 - Head Optimizer
 ** 02 - Scripts Optimizer
 ** 03 - Styles Optimizer
*/

defined('ABSPATH') || exit;

//====> Delete "Archive" Prefix <====//
if (!function_exists('refactor_archive_title')) :
	/**
	 * WP Filters.
	 * @since Phenix WP 1.0
	 * @return void
	 * 
	 ** 01 - Excrept Strip
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
	 ** 01 - Excrept Strip
	 ** 02 - CF7 Customize
	*/

	function pagination($query) {
		//===> Configration <===//
		$pages = paginate_links( array(
			'end_size'     => 2,
			'mid_size'     => 1,
			'prev_next'    => true,
			'show_all'     => false,
			'type'         => 'array',
			'format'       => '?page=%#%',
			'total'        => $query->max_num_pages,
			'current'      => max(1, get_query_var('paged')),
			'prev_text'    => sprintf('<i class="fas fa-angle-left"></i>%1$s', px__( '' )),
			'next_text'    => sprintf('%1$s<i class="fas fa-angle-right"></i>', px__( '' )),
			'base'         => str_replace(999999999, '%#%', esc_url(get_pagenum_link(999999999))),
		));
	
		//===> Generate <===//
		if(is_array($pages)) {
			//===> List <===//
			echo '<ul class="reset-list pagination flexbox align-center col-12 mb-30">';
			//===> Pages Start <===//
			foreach ($pages as $page) {
				//===> if its the Current Page <===//
				if (strpos($page, 'current') !== false) {
					$page = str_replace("span", "a", $page);
					echo "<li class='btn square small weight-medium radius-sm primary active me-10'>$page</li>";
				}
				//===> else other pages <===//
				else {
					echo "<li class='btn square light small weight-medium radius-sm me-10 border-1 border-solid border-alpha-10'>$page</li>";
				}
			}
			//===> Pages End <===//
			echo '</ul>';
			//===> List <===//
		}
	}
endif;

//====> Excrept Strip <====//
remove_filter('the_excerpt', 'wpautop');

//====> Limited Excerpt <====//
function px_excerpt_length($length) {return 18;}
add_filter('excerpt_length', 'px_excerpt_length', 175);

//====> Excerpt More <====//
function wpdocs_excerpt_more($more) {return '...';}
add_filter('excerpt_more', 'wpdocs_excerpt_more');
