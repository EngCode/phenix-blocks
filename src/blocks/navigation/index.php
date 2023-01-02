<?php
/**
 * Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

//==== Block Render ====//
function px_navigation_render($block_attributes, $content) {
    //===> Start Collecting Data <===//
    $markup = ''; ob_start();
    $props  = $block_attributes;

    //===> Create Options Data <===//
    $menuClasses = "reset-list";
    $menu_id = "data-id='{$props['menu_id']}'";
    $effect_type = "data-effect='{$props['effect']}'";
    $classNames  = "px-navigation {$props['className']}";
    $mobile_mode = "data-mobile='{$props['mobile_mode']}'";
    $arrow_icon  = "data-arrow='{$props['arrow_icon']}'";
    $hover_mode  = "";

    //===> Direction Mode <===//
    if ($props['direction'] == 'px-vertical') {
        $classNames = $classNames.' '.$props['direction'];
    } else {
        $menuClasses = $menuClasses.' '.$props['direction'];
    }

    //===> Responsive Classes <===//
    if ($props['responsive'] == true) {
        $classNames = $classNames . " hidden-md-down";
    }

    //===> Hover Mode <===//
    if ($props['hover'] === true) {
        $hover_mode = "data-hover='{$hover_mode}'";
    }

    //===> Start Navigation Wrapper <===//
    echo "<{$props['tagName']} class='{$classNames}' {$menu_id} {$mobile_mode} {$effect_type} {$hover_mode} ${arrow_icon}>";

    //===> Get the Dynamic Menu <===//
    echo wp_nav_menu(array(
        'menu' => $props['menu_id'],
        'menu_class' => $menuClasses,
        'theme_location' => $props['menu_id'],
        'container' => false,
        'container_class' => false,
    ));

    //===> End Navigation Wrapper <===//
    echo "</{$props['tagName']}>";

    //===> Stop Collecting Data <===//
    $blockOutput = ob_get_clean();
    $markup  .= $blockOutput;
    return "{$markup}";
}

//===> Register Phenix Block <===//
function px_navigation_block () {
    //===> Define [JSON] Assets  <===//
    $assets_path = plugin_dir_path(__DIR__).'navigation/';
    $assets_uri  = plugin_dir_url(__DIR__).'navigation/';
    
    //===> Fix File Paths <===//
    $assets_path = str_replace('src', 'assets/js', $assets_path);
    $assets_uri  = str_replace('src', 'assets/js', $assets_uri);
    $px_assets   = include($assets_path.'index.asset.php');

    //===> Add the Block JS <===//
    wp_register_script('px-navigation',
        $assets_uri.'index.js',
        $px_assets['dependencies'],
        $px_assets['version']
    );

    //==== Register Block ====//
    register_block_type($assets_path.'block.json', array(
        'api_version'  => 2,
        'editor_script'   => 'px-navigation',
        'render_callback' => 'px_navigation_render'
    ));
}

add_action( 'init', 'px_navigation_block' );