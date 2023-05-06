<?php
/**
 * Phenix Blocks Admin Controls
 * @since Phenix WP 1.0
 * @return void
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

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
            $content = $options["content"];
            $categories = isset($options['category']) ? $options["category"] : array('phenix');
            $width = isset($options['width']) ? intval($options["width"]) : 300;

            //===> Register the Pattern <===//
            register_block_pattern('phenix/'.$name,
                array(
                    'title'       => $title,
                    'categories'  => $categories,
                    'content'     => $content,
                    "viewportWidth" => $width,
                )
            );
        });
    }
endif;