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
            //===> Start Data <===//
            $template_markup = '';
            ob_start();
            //===> Get the File <===//
            include(dirname(__FILE__) . '/core-blocks.php');
            //===> Stop Data <===//
            $template_output = ob_get_clean();
            $template_markup .= $template_output;
            return "{$template_markup}";
        endif;

        add_filter('extendify_load_library', '__return_false');
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
        if (get_option('container_block')) {
            wp_enqueue_script('section', $blocksPath.'container/index.js', $blocksDependencies, NULL , true);
        }

        //====> Phenix Logo <====//
        if (get_option('logo_block')) {
            wp_enqueue_script('px-logo', $blocksPath.'logo/index.js', $blocksDependencies, NULL , true);
        }

        //====> Phenix Menu <====//
        if (get_option('navigation_block')) {
            wp_enqueue_script('px-navigation', $blocksPath.'navigation/index.js', $blocksDependencies, NULL , true);
        }

        //====> Phenix Button <====//
        if (get_option('button_block')) {
            wp_enqueue_script('px-button', $blocksPath.'button/index.js', $blocksDependencies, NULL , true);
        }

        //====> Phenix Row <====//
        if (get_option('row_block')) {
            wp_enqueue_script('px-row', $blocksPath.'grid-row/index.js', $blocksDependencies, NULL , true);
        }

        //====> Phenix Column <====//
        if (get_option('column_block')) {
            wp_enqueue_script('grid-column', $blocksPath.'grid-column/index.js', $blocksDependencies, NULL , true);
        }

        //====> Phenix Head <====//
        if (get_option('head_block')) {
            wp_enqueue_script('page-head', $blocksPath.'page-head/index.js', $blocksDependencies, NULL , true);
        }

        //====> Phenix Query <====//
        if (get_option('query_block')) {
            wp_enqueue_script('px-query', $blocksPath.'query/index.js', $blocksDependencies, NULL , true);
        }

        //====> Taxonomies List <====//
        if (get_option('taxonomies_list_block')) {
            wp_enqueue_script('taxonomies-list', $blocksPath.'taxonomies-list/index.js', $blocksDependencies, NULL , true);
        }
        
        //====> Theme Part <====//
        if (get_option('theme_part_block')) {
            wp_enqueue_script('theme-part', $blocksPath.'theme-part/index.js', $blocksDependencies, NULL , true);
        }
    }

    add_action('enqueue_block_editor_assets', 'phenix_blocks');
endif;

//====> Phenix Navigation <====//
if (get_option('navigation_block')) {
    include(dirname(__FILE__) . '/navigation/index.php');
}

//====> Phenix Pahe-Head <====//
if (get_option('head_block')) {
    include(dirname(__FILE__) . '/page-head/index.php');
}

//====> Phenix Query <====//
if (get_option('query_block')) {
    include(dirname(__FILE__) . '/query/index.php');
}

//====> Taxonomies List <====//
if (get_option('taxonomies_list_block')) {
    include(dirname(__FILE__) . '/taxonomies-list/index.php');
}

//====> Theme Part <====//
if (get_option('theme_part_block')) {
    include(dirname(__FILE__) . '/theme-part/index.php');
}
