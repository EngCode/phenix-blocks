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

//===> Product Details Pattern <===//
if (!function_exists('product_details_pattern')) :
    /**
     * Phenix Blocks.
     * @since Phenix WP 1.0
     * @return void
    */
    function product_details_pattern() {
        register_block_pattern('phenix/product-details',
            array(
                'title'       => px__('Product Details'),
                'categories'  => array('featured', 'single'),
                'description' => px__('Product Details Block Pattern to use in the Product Post Type'),
                'content'     => "<!-- wp:cover {\"url\":\"https://via.placeholder.com/1200x600.webp\",\"id\":259,\"dimRatio\":50,\"lock\":{\"move\":true,\"remove\":true},\"className\":\"radius-md radius-top\"} -->\n<div class=\"wp-block-cover radius-md radius-top\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim\"></span><img class=\"wp-block-cover__image-background wp-image-259\" alt=\"\" src=\"https://via.placeholder.com/1200x600.webp\" data-object-fit=\"cover\"/><div class=\"wp-block-cover__inner-container\"><!-- wp:paragraph {\"align\":\"center\",\"placeholder\":\"Write title…\",\"style\":{\"typography\":{\"fontSize\":\"2rem\"}},\"className\":\"weight-medium\"} -->\n<p class=\"has-text-align-center weight-medium\" style=\"font-size:2rem\">ICUMSA 600 1200</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:cover -->\n\n<!-- wp:phenix/px-wrapper {\"lock\":{\"move\":true,\"remove\":true},\"className\":\"pd-20 pd-lg-30 bg-white radius-md radius-bottom rich-content\"} -->\n<div class=\"wp-block-design-px-wrapper pd-20 pd-lg-30 bg-white radius-md radius-bottom rich-content\"><!-- wp:group {\"className\":\"mb-15\"} -->\n<div class=\"wp-block-group mb-15\"><!-- wp:heading -->\n<h2>Main Featured Title and Paragraph Example</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:group -->\n\n<!-- wp:group {\"className\":\"mb-30\"} -->\n<div class=\"wp-block-group mb-30\"><!-- wp:heading {\"level\":3} -->\n<h3>Headline H3 for Standard Sized Text</h3>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"fontSize\":\"small\"} -->\n<p class=\"has-small-font-size\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:group -->\n\n<!-- wp:columns -->\n<div class=\"wp-block-columns\"><!-- wp:column {\"width\":\"40%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:40%\"><!-- wp:image {\"id\":286,\"sizeSlug\":\"full\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-full\"><img src=\"https://demo.phenixthemes.com/hanz-wp/wp-content/uploads/2022/08/media-single.jpg\" alt=\"\" class=\"wp-image-286\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:paragraph -->\n<p>Nosso açúcar ICUMSA 600 1200 é livre de: odores não naturais, químicas e insetos, sem radiação, sem vírus, sem matéria venenosa e não genética e é adequado para consumo humano.</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:column -->\n\n<!-- wp:column {\"width\":\"60%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:60%\"><!-- wp:heading -->\n<h2>Product Features Title Example</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"fontSize\":\"small\"} -->\n<p class=\"has-small-font-size\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list {\"className\":\"reset-list check-list fs-15\"} -->\n<ul class=\"reset-list check-list fs-15\"><li>Typography List item With font-icon checkmark</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</li><li>Nosso açúcar ICUMSA 600 1200 é livre</li></ul>\n<!-- /wp:list -->\n\n<!-- wp:table {\"style\":{\"border\":{\"width\":\"1px\"}},\"borderColor\":\"gray-offwhite\",\"className\":\"is-style-stripes\"} -->\n<figure class=\"wp-block-table is-style-stripes\"><table class=\"has-gray-offwhite-border-color has-border-color\" style=\"border-width:1px\"><tbody><tr><td>Feature Name</td><td>the feature value</td></tr><tr><td>Another One</td><td>and so is here</td></tr><tr><td>Maybe No.</td><td>869-10</td></tr><tr><td>Feature Name</td><td>the feature value</td></tr><tr><td>Another One</td><td>and so is here</td></tr></tbody></table></figure>\n<!-- /wp:table --></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns --></div>\n<!-- /wp:phenix/px-wrapper -->",
            )
        );
    }

    add_action('init', 'product_details_pattern');
endif;

//===> Slide Details Pattern <===//
if (!function_exists('slide_pattern')) :
    /**
     * Phenix Blocks.
     * @since Phenix WP 1.0
     * @return void
    */
    function slide_pattern() {
        register_block_pattern('phenix/slide',
            array(
                'title'       => px__('Hero Slide'),
                'categories'  => array('featured', 'single'),
                'description' => px__('Slide Block Pattern to use in the Slider Post Type'),
                'content'     => "<!-- wp:phenix/px-section {\"container_flex\":true,\"flex_align\":\"align-center-y undefined undefined undefined flow-reverse\",\"px_bg_type\":\"image\",\"px_bg\":\"https://via.placeholder.com/1600x650.webpg\",\"px_color\":\"color-white\",\"className\":\"pdy-50 px-media color-white full-height-flexbox\"} -->\n<div class=\"wp-block-design-px-section pdy-50 px-media color-white full-height-flexbox\" data-src=\"https://via.placeholder.com/1600x650.webpg\"><div class=\"container flexbox align-center-y undefined undefined undefined flow-reverse\"><!-- wp:phenix/px-wrapper {\"className\":\"col-12 col-md-6 col-lg-5 mb-30 mb-lg-0\"} -->\n<div class=\"wp-block-design-px-wrapper col-12 col-md-6 col-lg-5 mb-30 mb-lg-0\"><!-- wp:image {\"id\":36,\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https://demo.phenixthemes.com/hanz-wp/wp-content/uploads/2022/08/logo-white-red.svg\" alt=\"\" class=\"wp-image-36\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:heading {\"className\":\"colored-word weight-bold tx-uppercase display-lg-h4 lineheight-130\"} -->\n<h2 class=\"colored-word weight-bold tx-uppercase display-lg-h4 lineheight-130\">international trade import \&amp; export</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"className\":\"fs-14\"} -->\n<p class=\"fs-14\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:phenix/px-wrapper --></div></div>\n<!-- /wp:phenix/px-section -->",
            )
        );
    }

    add_action('init', 'slide_pattern');
endif;