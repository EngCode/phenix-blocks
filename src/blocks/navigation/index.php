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
    $options  = $block_attributes;

    //===> Collect Options Data <===//
    $menuClasses = "reset-list";
    $menu_id = "data-id='{$options['menu_id']}'";
    $effect_type = "data-effect='{$options['effect']}'";
    $classNames  = "px-navigation {$options['className']}";
    $mobile_mode = "data-mobile='{$options['mobile_mode']}'";
    $arrow_icon  = "data-arrow='{$options['arrow_icon']}'";
    $hover_mode  = "";
    $nav_style   = "";

    //===> Collect Style Data <===//
    $font_size = isset($options['typography']['size']) ? $options['typography']['size'] : false;
    $font_weight = isset($options['typography']['weight']) ? $options['typography']['weight'] : false;
    $font_height = isset($options['typography']['height']) ? $options['typography']['height'] : false;
    $text_align = isset($options['typography']['align']) ? $options['typography']['align'] : "";
    $text_color = isset($options['typography']['color']) ? $options['typography']['color'] : false;
    $text_color_hvr = isset($options['typography']['color_hvr']) ? $options['typography']['color_hvr'] : false;
    $background_color = isset($options['style']['background']) ? $options['style']['background']['value'] : false;
    $background_color_hvr = isset($options['style']['background_hvr']) ? $options['style']['background_hvr']['value'] : false;
    $style_padding = isset($options['style']['padding']) ? $options['style']['padding'] : false;

    //===> Direction Mode <===//
    if ($options['direction'] == 'px-vertical') {
        $classNames = $classNames.' '.$options['direction'];
    } else {
        $menuClasses = $menuClasses.' '.$options['direction'];
    }

    //===> Responsive Classes <===//
    if ($options['responsive'] == true) {
        $classNames = $classNames . " hidden-md-down";
    }

    //===> Hover Mode <===//
    if ($options['hover'] === true) {
        $hover_mode = "data-hover='{$hover_mode}'";
    }

    //===> Custom CSS Style <===//
    if (isset($font_size) && $font_size) { $nav_style .= "--font-size:'{$font_size}';"; }
    if (isset($font_weight) && $font_weight) { $nav_style .= "--font-weight: {$font_weight};"; }
    if (isset($font_height) && $font_height) { $nav_style .= "--height: {$font_height}px;"; }
    if (isset($text_color) && $text_color) { $nav_style .= "--color:".str_replace('color-', 'var(--wp--preset--color--',$text_color).");"; }
    if (isset($text_color_hvr) && $text_color_hvr) { $nav_style .= "--color-hvr:".str_replace('color-', 'var(--wp--preset--color--',$text_color_hvr).");"; }
    if (isset($background_color) && $background_color) { $nav_style .= "--background:".str_replace('bg-', 'var(--wp--preset--color--',$background_color).");"; }
    if (isset($background_color_hvr) && $background_color_hvr) { $nav_style .= "--background-hvr:".str_replace('bg-', 'var(--wp--preset--color--',$background_color_hvr).");"; }
    if (isset($style_padding) && $style_padding) { $nav_style .= "--space-in :'{$style_padding}'px;"; }

    //===> Start Navigation Wrapper <===//
    echo "<{$options['tagName']} class='{$classNames} {$text_align}' style='{$nav_style}' {$menu_id} {$mobile_mode} {$effect_type} {$hover_mode} {$arrow_icon}>";

    //===> Get the Dynamic Menu <===//
    echo wp_nav_menu(array(
        'menu' => $options['menu_id'],
        'menu_class' => $menuClasses,
        'theme_location' => $options['menu_id'],
        'container' => false,
        'container_class' => false,
    ));

    //===> End Navigation Wrapper <===//
    echo "</{$options['tagName']}>";

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