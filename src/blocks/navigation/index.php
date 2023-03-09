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
    $font_size = isset($options['typography']['size']) ? $options['typography']['size'] : "14px";
    $font_weight = isset($options['typography']['weight']) ? $options['typography']['weight'] : "var(--bold-weight)";
    $text_align = isset($options['typography']['align']) ? $options['typography']['align'] : "";
    $text_color = isset($options['typography']['color']) ? $options['typography']['color'] : "var(--dark-color)";
    $text_color_hvr = isset($options['typography']['color_hvr']) ? $options['typography']['color_hvr'] : "var(--primary-color)";
    $background_color = isset($options['style']['background']['value']) ? $options['style']['background']['value'] : "transparent";
    $background_color_hvr = isset($options['style']['background_hvr']['value']) ? $options['style']['background_hvr']['value'] : "transparent";

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

    //===> Start Navigation Wrapper <===//
    echo "<{$options['tagName']} class='{$classNames}' {$text_align} {$menu_id} {$mobile_mode} {$effect_type} {$hover_mode} {$arrow_icon} {$nav_style}>";

    //===> Custom CSS Style <===//
    echo '<style>
        /*==== Navigation Theme ====*/
        .px-navigation {
            --space-in  : 12px;
            --height : 34px;
            --font-size : '.$font_size.';
            --font-weight : '.$font_weight.';
            --color  : '.str_replace("color-", "var(--wp--preset--color--", $text_color).');
            --color-hvr : '.str_replace("color-", "var(--wp--preset--color--", $text_color_hvr).');
            --background : '.str_replace("bg-", "var(--wp--preset--color--", $background_color).');
            --background-hvr : '.str_replace("bg-", "var(--wp--preset--color--", $background_color_hvr).');
        }
        /*==== Submenu Theme ====*/
        .px-navigation .submenu {
            --height : 26px;
            --radius : 5px;
            --background : white;
            --space-in : 15px;
            --color : var(--gray-color);
            --color-hvr : var(--primary-color);
            --box-shadow : 3px 3px 8px 0 rgba(0,0,0, 0.05);
        }
    </style>';

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