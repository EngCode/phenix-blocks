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
