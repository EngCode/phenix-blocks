<?php
/**
 * Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//==== Block Render ====//
function px_navigation_render($block_attributes, $content) {
    //===> Start Collecting Data <===//
    $markup = ''; ob_start();

    //===> Define Options Data <===//
    $menuClasses = " reset-list"; $hover_mode = ""; $nav_style = ""; $menu_id = ""; $menu_attrs = ""; $count_badge = "";
    $effect_type = ""; $classNames = "px-navigation"; $mobile_mode = ""; $arrow_icon = ""; $text_align = "";

    //===> Dynamic Data Setter <===//
    foreach ($block_attributes as $option_name => $option_value) {
        //===> Exclude Options <===//
        $excluded = ["preview"];
        if (in_array($option_name, $excluded) || !isset($block_attributes[$option_name])) { continue; }
    
        //===> if its a Normal Values that should be string <===//
        elseif (isNormalValue($option_value)) {
            //===> Menu ID <===//
            if ($option_name === "menu_id") { $menu_id = "data-id='{$option_value}'"; }
            //===> Wrapper Classes <===//
            elseif ($option_name === "className") { $classNames .= " {$option_value}"; }
            //===> Dropdown icon <===//
            elseif ($option_name === "arrow_icon") { $arrow_icon = "data-arrow='{$option_value}'"; }
            //===> Direction <===//
            elseif ($option_name === "direction") { 
                if ($block_attributes['direction'] == 'px-vertical') { $classNames .= ' '.$option_value; } 
                else { $menuClasses .= ' '.$option_value; }
             }
             //===> Icons Mode <===//
             elseif ($option_name === "items_icon" && $block_attributes['items_icon_op'] === true) {
                 $classNames .= " icons-list";
                 $menu_attrs = " data-icon='{$option_value}'";
            };
            //===> Responsive Mode <===//
            if ($block_attributes['responsive'] === true) {
                //===> Mode <===//
                if ($option_name === "mobile_mode") { $mobile_mode = "data-mobile='{$option_value}'"; }
                //===> Effect <===//
                elseif ($option_name === "effect") { $effect_type = "data-effect='{$option_value}'"; };
            }
        }

        //===> for Boolean Options <===//
        elseif (isBooleanVal($option_value) && $block_attributes[$option_name]) {
            //===> Dropdown Hover <===//
            if ($option_name === "hover") { $hover_mode = "data-hover='{$option_value}'"; }
            elseif ($option_name === "responsive") { $classNames = $classNames . " hidden-md-down"; }
        }

        //===> if its object[group] Option like [style, typography, responsive] <===//
        elseif (isObjectVal($option_value)) {
            //===> loop on the Object Options <===//
            foreach ($option_value as $sub_option => $sub_value) {
                //===> Check if the attribute is Set <===//
                if (!isset($block_attributes[$option_name][$sub_option])) { continue; }

                //===> Normal strings and Arrays <===//
                elseif (isNormalValue($sub_value)) {
                    //===> Typography <===//
                    if ($option_name === "typography") {
                        //===> Collect Style Data <===//
                        if($sub_option === "size") { $font_size = $sub_value; } 
                        elseif($sub_option === "height") { $font_height = $sub_value; } 
                        elseif($sub_option === "color") { $text_color = $sub_value; } 
                        elseif($sub_option === "color_hvr") { $text_color_hvr = $sub_value; }
                        //====> Other Classes <===//
                        else {
                            $sub_value = str_replace(',', ' ', (string) $sub_value);
                            $sub_value = trim($sub_value);
                            $menuClasses .= " " . $sub_value;
                        }
                    }
                    //====> Style <===//
                    elseif ($option_name === "style") {
                        if($sub_option === "padding") { $style_padding = $sub_value; }
                    }
                }

                //===> for Object Options <===//
                elseif (isObjectVal($sub_value) && $option_name === "style") {
                    if ($sub_option === "background") { $background_color = $sub_value['value']; }
                    elseif ($sub_option === "background_hvr") { $background_color_hvr = $sub_value['value']; }
                };
            }
        };
    }

    //===> Custom CSS Style <===//
    if (isset($font_size) && $font_size) { $nav_style .= "--font-size:".str_replace("fs-", "", $font_size)."px;"; }
    // if (isset($font_weight) && $font_weight) { $nav_style .= "--font-weight: {$font_weight};"; }
    if (isset($font_height) && $font_height) { $nav_style .= "--height: {$font_height}px;"; }
    if (isset($text_color) && $text_color) { $nav_style .= "--color:".str_replace('color-', 'var(--wp--preset--color--',$text_color).");"; }
    if (isset($text_color_hvr) && $text_color_hvr) { $nav_style .= "--color-hvr:".str_replace('color-', 'var(--wp--preset--color--',$text_color_hvr).");"; }
    if (isset($background_color) && $background_color) { $nav_style .= "--background:".str_replace('bg-', 'var(--wp--preset--color--',$background_color).");"; }
    if (isset($background_color_hvr) && $background_color_hvr) { $nav_style .= "--background-hvr:".str_replace('bg-', 'var(--wp--preset--color--',$background_color_hvr).");"; }
    if (isset($style_padding) && $style_padding) {
        if ($block_attributes['items_icon_op'] === true) {
            $nav_style .= "--space-in: 0px; padding-right:". $style_padding."px; padding-left:". $style_padding."px;";
        } else {
            $nav_style .= "--space-in:{$style_padding}px;";
        }
    };

    //===> Start Navigation Wrapper <===//
    echo "<{$block_attributes['tagName']} class='{$classNames} {$text_align}' style='{$nav_style}' {$menu_attrs} {$menu_id} {$mobile_mode} {$effect_type} {$hover_mode} {$arrow_icon}>";
        //===> Get Taxonomies Menu <===//
        if ($block_attributes['menu_type'] === "taxonomies") {
            //===> Create Menu <===//
            echo '<ul class="'.$menuClasses.'" id="'.$block_attributes['menu_id'].'">';
                //===> Get Categories List <===//
                $categories = get_categories(array(
                    'hide_empty' => false,
                    'taxonomy'   => $block_attributes['menu_id'],
                    'number'     => $block_attributes['items_count'],
                    'post_type'  => $block_attributes['post_type'],
                ));

                //===> Create Categories <===//
                foreach ($categories as $category) :
                    //===> Add Badge <===//
                    if ($block_attributes["count_badge"]) {
                        $count_badge = ' <span class="posts-count float-end">'.$category->count.'</span>';
                    };
                    //===> Create Item <===//
                    echo '<li><a href="'.get_category_link($category->cat_ID).'">'.$category->name.$count_badge.'</a></li>';
                endforeach;
            echo '</ul>';
        }
        //===> Get Posts List Menu <===//
        elseif ($block_attributes['menu_type'] === "posts") {
            //===> Create New Query <===//
            $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

            $menu_query = new WP_Query(array(
                'paged' => $paged,
                'post_type' => $block_attributes['menu_id'],
                'per_page'  => $block_attributes['items_count'],
            ));
            
            //===> Create Menu <===//
            echo '<ul class="'.$menuClasses.'" id="'.$block_attributes['menu_id'].'">';
                //==== Start Query =====//
                if ($menu_query->have_posts()) :
                    //==== Loop Start ====//
                    foreach ($menu_query->posts as $post) {
                        //===> Add Badge <===//
                        if ($block_attributes["count_badge"]) {
                            $count_badge = '<span class="posts-count float-end">'.get_post_views($post->ID).'</span>';
                        };
                        //===> Create Item <===//
                        echo '<li><a href="'.get_permalink($post->ID).'">'.get_the_title($post->ID).$count_badge.'</a></li>';
                    }
                    //=== Reset Query Data ===//
                    wp_reset_postdata();
                endif;
                //==== End Query =====//
            echo '</ul>';
        } 
        //===> Get Classic Menu <===//
        else {
            echo wp_nav_menu(array(
                'menu' => $block_attributes['menu_id'],
                'menu_class' => $menuClasses,
                'theme_location' => $block_attributes['menu_id'],
                'container' => false,
                'container_class' => false,
            ));
        }
    echo "</{$block_attributes['tagName']}>";
    //===> End Navigation Wrapper <===//

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