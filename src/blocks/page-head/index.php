<?php
/**
 * Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//==== Block Render ====//
function px_head_render($block_attributes, $content) {
    //===> Start Collecting Data <===//
    $markup = ''; ob_start();

    //===> Define Attributes <===//
    $class_names = "";
    if (isset($block_attributes['className'])) { $class_names .= $block_attributes['className'].' '; }

    //===> Dynamic Data Setter <===//
    foreach ($block_attributes as $option_name => $option_value) {
        //===> Exclude Options <===//
        $excluded = ["preview"];
        if (in_array($option_name, $excluded) || !isset($block_attributes[$option_name])) { continue; }
        //===> if its a Normal Values that should be string <===//
        elseif (isNormalValue($option_value)) {
            //===> Classes Options <===//
            $class_names .= ' ' . str_replace(',', ' ', $block_attributes[$option_name]);
        }
        //===> if its object[group] Option like [style, typography, slider...] <===//
        elseif (isObjectVal($option_value)) {
            //===> loop on the Object Options <===//
            foreach ($option_value as $sub_option => $sub_value) {
                //===> Check if the attribute is Set <===//
                if (!isset($block_attributes[$option_name][$sub_option])) { continue; }
                //===> Other Options <===//
                elseif ($option_name === "style" || $option_name === "typography") {
                    //===> Postion Absolute Sticky <===//
                    if ($sub_option === "position" && $sub_value === "sticky-absolute") {$block_attributes["data-sticky"] = $sub_value;} 
                    //===> Positions Values <===//
                    elseif (strpos($sub_option, 'pos-') !== false) {$class_names .= " $sub_option-$sub_value";}
                    //====> Other Classes <===//
                    else {
                        if (!is_array($sub_value)) {
                            $sub_value = str_replace(',', ' ', (string) $sub_value);
                            $sub_value = trim($sub_value);
                            $class_names .= " " . $sub_value;
                        } else {
                            foreach ($sub_value as $sub_value_item) {
                                $sub_value_item = str_replace(',', ' ', (string) $sub_value_item);
                                $sub_value_item = trim($sub_value_item);
                                $class_names.= " " . $sub_value_item;
                            }
                        }
                    }
                };
            }
        };
    }    
?>
<div class="<?php echo $class_names; ?> pds-page-head">
    <?php if (strpos($block_attributes['mode'], 'title') !== false) : ?>
    <!-- Page Title -->
    <h1 class="color-inherit">
        <?php
            if (is_archive() || is_category()) {
                echo get_the_archive_title();
            }
            //===> Get Single Title <===//
            elseif (is_single() || is_page()) {
                echo get_the_title();
            } else {
                echo wp_get_document_title();
            }
        ?>
    </h1>
    <?php endif; ?>
    <!-- Breadcrumb -->
    <?php 
        if (!is_front_page() && strpos($block_attributes['mode'], 'breadcrumb') !== false) :
            if (function_exists('yoast_breadcrumb')): yoast_breadcrumb('<div class="px-breadcrumb flexbox custom-icon links-inherit" data-type="font-icon" itemprop="breadcrumb">', '</div>'); else:
    ?>
        <ul class="px-breadcrumb reset-list flexbox custom-icon links-inherit" data-type="font-icon" itemprop="breadcrumb">
            <?php
                //===> Create Home Page <===//
                echo '<li class="far fa-home tx-icon"><a href="'.get_option('home').'">'.get_bloginfo('name').'</a></li>';
                //===> Get Category Title <===//
                if (is_category() || is_archive() || is_single()) {
                    if (is_single()) {
                        echo '<li><a href="'.get_post_type_archive_link(get_post_type()).'">'.get_post_type_object(get_post_type())->labels->name.'</a></li>';
                    } else {
                        echo '<li>'.get_the_archive_title('', false ).'</li>';
                    }
                }
                //===> Get Single Title <===//
                if (is_single() || is_page()) {
                    if (is_page()) {
                        echo '<li>'.get_post_type_object(get_post_type())->labels->name.'</li>';
                    }
                    echo '<li>'.get_the_title().'</li>';
                }
            ?>
        </ul>
        <?php endif; ?>
    <?php endif; ?>
    <!-- // Breadcrumb -->
</div>
<?php
    //===> Stop Collecting Data <===//
    $blockOutput = ob_get_clean();
    $markup  .= $blockOutput;
    return "{$markup}";
}

//===> Register Phenix Block <===//
function px_head_block () {
    //===> Define [JSON] Assets  <===//
    $assets_path = plugin_dir_path(__DIR__).'page-head/';
    $assets_uri  = plugin_dir_url(__DIR__).'page-head/';
    
    //===> Fix File Paths <===//
    $assets_path = str_replace('src', 'assets/js', $assets_path);
    $assets_uri  = str_replace('src', 'assets/js', $assets_uri);
    $px_assets   = include($assets_path.'index.asset.php');

    //===> Add the Block JS <===//
    wp_register_script('page-head',
        $assets_uri.'index.js',
        $px_assets['dependencies'],
        $px_assets['version'],true
    );

    //==== Register Block ====//
    register_block_type($assets_path.'block.json', array(
        'api_version'  => 2,
        'editor_script'   => 'page-head',
        'render_callback' => 'px_head_render'
    ));
}

add_action( 'init', 'px_head_block' );