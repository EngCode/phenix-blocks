
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
    $currentNames = $block_attributes['className'];
?>
<!-- Phenix Navigation -->
<?php if ($block_attributes['responsive'] !== true) : 
    echo wp_nav_menu(array(
        'menu' => $block_attributes['menu_id'],
        'menu_class' => 'reset-list '.$currentNames,
        'theme_location' => $block_attributes['menu_id'],
        'container' => false,
        'container_class' => false,
    ));
else : ?>
    <nav class="px-navigation hidden-md-down <?php echo $currentNames; ?>" data-id="<?php echo $block_attributes['menu_id']; ?>" data-arrow="far fa-angle-down" data-hover="true" data-mobile="custom" data-effect="fade">
        <?php echo wp_nav_menu(array(
            'menu' => $block_attributes['menu_id'],
            'menu_class' => 'reset-list flexbox tx-uppercase',
            'theme_location' => $block_attributes['menu_id'],
            'container' => false,
            'container_class' => false,
        ));?>
    </nav>
<?php endif; ?>
<!-- // Phenix Navigation -->
<?php
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
