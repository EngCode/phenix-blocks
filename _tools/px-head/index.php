
<?php
/**
 * Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

//==== Block Render ====//
function px_head_render($block_attributes, $content) {
    //===> Start Collecting Data <===//
    $markup = ''; ob_start();
?>
<!-- Page Title -->
<h1 class="fs-16 fs-md-20 h3-lg color-inherit lineheight-100 mb-10">
    <?php
        if (is_archive() || is_category()) {
            echo get_the_archive_title();
        }
        //===> Get Single Title <===//
        if (is_single() || is_page()) {
            echo get_the_title();
        }
    ?>
</h1>

<!-- Breadcrumb -->
<?php if (!is_front_page()) : ?>
    <ul class="px-breadcrumb reset-list flexbox custom-icon links-inherit align-center-y" data-type="font-icon">
        <?php
            //===> Create Home Page <===//
            echo '<li><a href="'.get_option('home').'">'.get_bloginfo('name').'</a></li>';

            //===> Get Category Title <===//
            if (is_category() || is_archive()) {
                echo '<li>'.get_the_archive_title('', false ).'</li>';
            }
            //===> Get Single Title <===//
            if (is_single() || is_page()) {
                echo '<li>'.get_the_title().'</li>';
            }
        ?>
    </ul>
<?php endif; ?>
<!-- // Breadcrumb -->

<?php
    //===> Stop Collecting Data <===//
    $blockOutput = ob_get_clean();
    $markup  .= $blockOutput;
    return "{$markup}";
}

//===> Register Phenix Block <===//
function px_head_block () {
    //===> Define [JSON] Assets  <===//
    $assets_path = plugin_dir_path(__DIR__).'px-head\\';
    $assets_uri  = plugin_dir_url(__DIR__).'px-head/';
    
    //===> Fix File Paths <===//
    $assets_path = str_replace('src', 'assets\js', $assets_path);
    $assets_uri  = str_replace('src', 'assets/js', $assets_uri);
    $px_assets   = include($assets_path.'index.asset.php');

    //===> Add the Block JS <===//
    wp_register_script('px-head',
        $assets_uri.'index.js',
        $px_assets['dependencies'],
        $px_assets['version']
    );

    //==== Register Block ====//
    register_block_type($assets_path.'block.json', array(
        'api_version'  => 2,
        'editor_script'   => 'px-head',
        'render_callback' => 'px_head_render'
    ));
}

add_action( 'init', 'px_head_block' );