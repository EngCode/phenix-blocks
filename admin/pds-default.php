<?php
/**
 * Main Admin Page for Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

//====> Default Options <====//
if (!function_exists('pds_blocks_activation')) :
    /**
     * Register Default Options for Phenix Blocks
     * @since Phenix Blocks 1.0
     * @return void
    */

    //===> Activation <===//
    function pds_blocks_activation(){
        do_action( 'pds_blocks_default_options' );
    }

    register_activation_hook( __FILE__, 'pds_blocks_activation' );

    //===> Set default values here <===//
    function pds_blocks_default_values() {
        //===> Form settings <===//
        add_option('pds_container_block', true);
    }

    add_action('pds_blocks_default_options', 'name_plugin_default_values' );
endif;