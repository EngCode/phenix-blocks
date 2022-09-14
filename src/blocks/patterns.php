<?php 
/**
 * Setting Gutenberg for Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

//===> Blocks Patterns Categories <===//
if (!function_exists('phenix_patterns')) :
	function phenix_patterns () {
		register_block_pattern_category('single', array('label' => 'Details Pages'));
		register_block_pattern_category('phenix', array('label' => 'Phenix Elements'));
	}

	add_action('init', 'phenix_patterns');
endif;

//===> Blog Details <===//
if (!function_exists('blog_details_patt')) :
    /**
     * Phenix Blocks.
     * @since Phenix WP 1.0
     * @return void
    */
    function blog_details_patt() {
        register_block_pattern('phenix/blog-details',
            array(
                'title'       => px__('Blog Details'),
                'categories'  => array('featured', 'single'),
                'description' => px__('Blog Details Block Pattern to use in the Blog Post Type'),
                'content'     => "<!-- wp:image {\"id\":84,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"mb-30\"} -->\n<figure class=\"wp-block-image size-large mb-30\"><img src=\"https://via.placeholder.com/960x420.webp\" alt=\"\" class=\"wp-image-84\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:heading -->\n<h2>Blog Main Title Goes Here</h2>\n<!-- /wp:heading -->\n\n<!-- wp:phenix/theme-part {\"part_name\":\"post-info\"} /-->\n\n<!-- wp:paragraph -->\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":4} -->\n<h4>Headline Example Level H4</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:phenix/row -->\n<div class=\"wp-block-phenix-row row\"><!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:list -->\n<ul><li>Nemo enim ipsam voluptatem quia</li><li>Adipisci velit, sed quia non numquam eius modi tempora</li><li>Eaque ipsa quae ab illo inventore veritatis et quasi architecto</li><li>Qui dolorem ipsum quia dolor sit amet</li></ul>\n<!-- /wp:list --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:paragraph -->\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row -->\n\n<!-- wp:heading {\"level\":4} -->\n<h4>Headline Example Level H4</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:phenix/row -->\n<div class=\"wp-block-phenix-row row\"><!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:image {\"id\":84,\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https://via.placeholder.com/960x420.webp\" alt=\"\" class=\"wp-image-84\"/></figure>\n<!-- /wp:image --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:heading {\"level\":4} -->\n<h4>Headline Example Level H4</h4>\n<!-- /wp:heading -->\n\n<!-- wp:list -->\n<ul><li>Nemo enim ipsam voluptatem quia</li><li>Adipisci velit, sed quia non numquam eius modi tempora</li><li>Eaque ipsa quae ab illo inventore veritatis et quasi architecto</li><li>Qui dolorem ipsum quia dolor sit amet</li></ul>\n<!-- /wp:list --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row -->",
            )
        );
    }

    add_action('init', 'blog_details_patt');
endif;