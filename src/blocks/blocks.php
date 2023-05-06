<?php
/**
 * Setting Gutenberg for Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//=====> Enqueue Phenix Blocks <=====//
if (!function_exists('phenix_blocks')) :
    function phenix_blocks() {
        //====> Shared Options <====//
        $blocksPath = plugin_dir_url(__FILE__);
        $blocksDependencies = array('wp-blocks', 'wp-element', 'wp-editor', 'wp-edit-site', 'wp-plugins');
        $blocksPath = str_replace('src/', 'assets/js/', $blocksPath);

        //====> GB Core Blocks Remover <====//
        if (is_admin() && !get_option("pds_core_post_elements")) :
            add_filter('extendify_load_library', '__return_false');
            wp_enqueue_script('core-block-remover', plugin_dir_url(__FILE__).'core-blocks-remover.js', $blocksDependencies, NULL , true);
        endif;

        //====> Phenix Section <====//
        if (get_option('container_block')) {
            wp_enqueue_script('section', $blocksPath.'container/index.js', $blocksDependencies, NULL , true);
        }

        //====> Phenix Group <====//
        if (get_option('group_block')) {
            wp_enqueue_script('px-group', $blocksPath.'group/index.js', $blocksDependencies, NULL , true);
        }

        //====> Phenix Logo <====//
        if (get_option('logo_block')) {
            wp_enqueue_script('px-logo', $blocksPath.'logo/index.js', $blocksDependencies, NULL , true);
        }

        //====> Phenix Menu <====//
        if (get_option('navigation_block')) {
            wp_enqueue_script('px-navigation', $blocksPath.'navigation/index.js', $blocksDependencies, NULL , true);
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
        if (get_option('taxonomies_block')) {
            wp_enqueue_script('pds-taxonomies', $blocksPath.'taxonomies/index.js', $blocksDependencies, NULL , true);
        }
        
        //====> Theme Part <====//
        if (get_option('theme_part_block')) {
            wp_enqueue_script('theme-part', $blocksPath.'theme-part/index.js', $blocksDependencies, NULL , true);
        }
        
        //====> Popups <====//
        if (get_option('popups_block')) {
            wp_enqueue_script('popup', $blocksPath.'popup/index.js', $blocksDependencies, NULL , true);
        }
        
        //====> Phenix Button <====//
        if (get_option('button_block')) {
            wp_enqueue_script('px-button', $blocksPath.'button/index.js', $blocksDependencies, NULL , true);
        }
        
        //====> Inline Elements <====//
        if (get_option('inline_elements_block')) {
            wp_enqueue_script('inline-elements', $blocksPath.'inline-elements/index.js', $blocksDependencies, NULL , true);
        }
        
        //====> Languages <====//
        if (get_option('pds_languages_block')) {
            wp_enqueue_script('pds-languages', $blocksPath.'pds-languages/index.js', $blocksDependencies, NULL , true);
        }
        
        //====> Media Element <====//
        if (get_option('media_element_block')) {
            wp_enqueue_script('media-element', $blocksPath.'media-element/index.js', $blocksDependencies, NULL , true);
        }
        
        //====> Icon Element <====//
        if (get_option('icon_element_block')) {
            wp_enqueue_script('icon-element', $blocksPath.'icon-element/index.js', $blocksDependencies, NULL , true);
        }
        
        //====> Custom Code <====//
        if (get_option('custom_code_block')) {
            wp_enqueue_script('custom-code', $blocksPath.'custom-code/index.js', $blocksDependencies, NULL , true);
        }
        
        //====> PDS Form <====//
        if (get_option('pds_form_block')) {
            wp_enqueue_script('pds-form', $blocksPath.'pds-form/index.js', $blocksDependencies, NULL , true);
        }

        //====> Logical Block <====//
        if (get_option('pds_logical_block')) {
            wp_enqueue_script('logical-block', $blocksPath.'logical-block/index.js', $blocksDependencies, NULL , true);
        }

        //====> Users Query <====//
        if (get_option('pds_users_query_block')) {
            wp_enqueue_script('users-query', $blocksPath.'users-query/index.js', $blocksDependencies, NULL , true);
        }

        //====> Sidebar Options <====//
        wp_enqueue_script('pds-se-option', $blocksPath.'pds-se-option/index.js', array('wp-blocks', 'wp-element', 'wp-edit-site', 'wp-plugins'), NULL , true);
        wp_enqueue_script('pds-pe-options', $blocksPath.'pds-pe-options/index.js', array('wp-blocks', 'wp-element', 'wp-editor', 'wp-plugins'), NULL , true);
    }

    add_action('enqueue_block_editor_assets', 'phenix_blocks');
endif;

//====> Phenix Navigation <====//
if (get_option('navigation_block')) {
    include(dirname(__FILE__) . '/navigation/index.php');
}

//====> Phenix Page-Head <====//
if (get_option('head_block')) {
    include(dirname(__FILE__) . '/page-head/index.php');
}

//====> Phenix Query <====//
if (get_option('query_block')) {
    include(dirname(__FILE__) . '/query/index.php');
}

//====> Taxonomies List <====//
if (get_option('taxonomies_block')) {
    include(dirname(__FILE__) . '/taxonomies/index.php');
}

//====> Theme Part <====//
if (get_option('theme_part_block')) {
    include(dirname(__FILE__) . '/theme-part/index.php');
}

//====> Logical Block <====//
if (get_option('pds_logical_block')) {
    include(dirname(__FILE__) . '/logical-block/index.php');
}

//====> Users Query <====//
if (get_option('pds_users_query_block')) {
    include(dirname(__FILE__) . '/users-query/index.php');
}

//====> Custom Code <====//
if (get_option('custom_code_block')) {
    include(dirname(__FILE__) . '/custom-code/index.php');
}

//====> Helper Functions <====//
if (!function_exists("isObjectVal")) :
    function isObjectVal($option_value) {
        return is_object($option_value) || is_array($option_value) && count($option_value) > 0;
    }
endif;

if (!function_exists("isBooleanVal")) :
    function isBooleanVal($option_value) {
        return is_bool($option_value);
    }
endif;

if (!function_exists("isNormalValue")) :
    function isNormalValue($option_value) {
        return is_string($option_value) || is_numeric($option_value);
    }
endif;

if (!function_exists("colsRender")) :
    function colsRender($size) {
        if (intval($size) === 0) {
            return "-auto";
        } elseif (intval($size) === 13) {
            return "";
        } else {
            return "-" . $size;
        }
    }
endif;