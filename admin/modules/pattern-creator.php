<?php
/**
 * Phenix Blocks Admin Controls
 * @since Phenix WP 1.0
 * @return void
*/

//===> Add Pattern Method <===//
if (!function_exists('pds_add_pattern')) :
    /**
     * Phenix Blocks.
     * @since Phenix WP 1.0
     * @return void
    */

    function pds_add_pattern($name, $options) {
        add_action('init', function () use ($name, $options) {
            //==== Get Options ====//
            $title   = $options["title"];
            $content = "<!-- wp:image {\"id\":84,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"mb-30\"} -->\n<figure class=\"wp-block-image size-large mb-30\"><img src=\"https://via.placeholder.com/960x420.webp\" alt=\"\" class=\"wp-image-84\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:heading -->\n<h2>Blog Main Title Goes Here</h2>\n<!-- /wp:heading -->\n\n<!-- wp:phenix/theme-part {\"part_name\":\"post-info\"} /-->\n\n<!-- wp:paragraph -->\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":4} -->\n<h4>Headline Example Level H4</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:phenix/row -->\n<div class=\"wp-block-phenix-row row\"><!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:list -->\n<ul><li>Nemo enim ipsam voluptatem quia</li><li>Adipisci velit, sed quia non numquam eius modi tempora</li><li>Eaque ipsa quae ab illo inventore veritatis et quasi architecto</li><li>Qui dolorem ipsum quia dolor sit amet</li></ul>\n<!-- /wp:list --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:paragraph -->\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row -->\n\n<!-- wp:heading {\"level\":4} -->\n<h4>Headline Example Level H4</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:phenix/row -->\n<div class=\"wp-block-phenix-row row\"><!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:image {\"id\":84,\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https://via.placeholder.com/960x420.webp\" alt=\"\" class=\"wp-image-84\"/></figure>\n<!-- /wp:image --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:heading {\"level\":4} -->\n<h4>Headline Example Level H4</h4>\n<!-- /wp:heading -->\n\n<!-- wp:list -->\n<ul><li>Nemo enim ipsam voluptatem quia</li><li>Adipisci velit, sed quia non numquam eius modi tempora</li><li>Eaque ipsa quae ab illo inventore veritatis et quasi architecto</li><li>Qui dolorem ipsum quia dolor sit amet</li></ul>\n<!-- /wp:list --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row -->";
            $categories = isset($options['categories']) ? $options["categories"] : array('phenix');

            //===> Register the Pattern <===//
            register_block_pattern('phenix/'.$name,
                array(
                    'title'       => $title,
                    'categories'  => $categories,
                    'description' => "",
                    'content'     => $content
                )
            );
        });
    }
endif;