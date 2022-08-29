<?php
    /**
     * Setting Gutenberg for Phenix Blocks
     * @since Phenix WP 1.0
     * @return void
    */

    //=====> Enqueue Phenix Blocks <=====//
    if (!function_exists('phenix_blocks')) :
        function phenix_blocks() {
            //====> Shared Options <====//
            $blocksPath = plugin_dir_url(__DIR__).'assets/js/blocks/';
            $blocksDependencies = array('wp-blocks', 'wp-element', 'wp-editor');

            //====> Phenix Section <====//
            wp_enqueue_script('px-section', $blocksPath.'px-section/index.js', $blocksDependencies, NULL , true);

            //====> Phenix Wrapper <====//
            wp_enqueue_script('px-wrapper', $blocksPath.'px-wrapper/index.js', $blocksDependencies, NULL , true);

            //====> Phenix Button <====//
            wp_enqueue_script('px-button', $blocksPath.'px-button/index.js', $blocksDependencies, NULL , true);
            
            //====> Phenix Logo <====//
            wp_enqueue_script('px-logo', $blocksPath.'px-logo/index.js', $blocksDependencies, NULL , true);
            
            //====> Phenix Menu <====//
            // wp_enqueue_script('px-menu', $blocksPath.'px-menu/index.js', $blocksDependencies, NULL , true);
        }

        add_action('enqueue_block_editor_assets', 'phenix_blocks');
    endif;

    //====> Phenix Navigation <====//
    // include(dirname(__FILE__) . '/px-navigation/index.php');

    //====> Language Switcher <====//
    // include(dirname(__FILE__) . '/px-languages/index.php');

    //====> Page Head <====//
    // include(dirname(__FILE__) . '/px-head/index.php');

    //====> Taxonomies Block <====//
    // include(dirname(__FILE__) . '/px-taxonomies/index.php');

    //====> Query Block <====//
    // include(dirname(__FILE__) . '/px-query/index.php');

    //====> Widget Block <====//
    // include(dirname(__FILE__) . '/px-categories/index.php');