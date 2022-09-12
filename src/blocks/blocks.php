<?php
/**
 * Setting Gutenberg for Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

//====> GB Core Blocks Remover <====//
if (!function_exists('pds_core_blocks')) :
    /**
     * Remove Core Blocks to Replace it from 
     * @since Phenix WP 1.0
     * @return void
    */

    function pds_core_blocks() {
        if (is_admin()) :
            include(dirname(__FILE__) . '/core-blocks.php');
        endif;
    }

    add_action('enqueue_block_editor_assets', 'pds_core_blocks');
endif;

//=====> Enqueue Phenix Blocks <=====//
if (!function_exists('phenix_blocks')) :
    function phenix_blocks() {
        //====> Shared Options <====//
        $blocksPath = plugin_dir_url(__FILE__);
        $blocksDependencies = array('wp-blocks', 'wp-element', 'wp-editor');
        $blocksPath = str_replace('src/', 'assets/js/', $blocksPath);

        //====> Phenix Section <====//
        if (get_option('pds_container_block')) {
            wp_enqueue_script('section', $blocksPath.'container/index.js', $blocksDependencies, NULL , true);
        }

        //====> Phenix Logo <====//
        wp_enqueue_script('px-logo', $blocksPath.'logo/index.js', $blocksDependencies, NULL , true);

        //====> Phenix Menu <====//
        wp_enqueue_script('px-navigation', $blocksPath.'navigation/index.js', $blocksDependencies, NULL , true);

        //====> Phenix Button <====//
        wp_enqueue_script('px-button', $blocksPath.'button/index.js', $blocksDependencies, NULL , true);

        //====> Phenix Row <====//
        wp_enqueue_script('px-row', $blocksPath.'grid-row/index.js', $blocksDependencies, NULL , true);

        //====> Phenix Row <====//
        wp_enqueue_script('grid-column', $blocksPath.'grid-column/index.js', $blocksDependencies, NULL , true);
    }

    add_action('enqueue_block_editor_assets', 'phenix_blocks');
endif;

//====> Phenix Navigation <====//
include(dirname(__FILE__) . '/navigation/index.php');
