
<?php
/**
 * Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

//==== Block Render ====//
function px_languages_render($block_attributes, $content) {
    //===> Start Collecting Data <===//
    $markup = ''; ob_start();
    $the_languages = pll_the_languages(array('dropdown' => 1,'raw' => 1));
    $current_language = pll_current_language();
?>
<!-- Phenix Dropdown -->
<div class="px-dropdown header-language-btn" data-effect="fade" data-position="bottom, end">
    <?php if ($the_languages) : ?>
    <!-- button -->
    <?php foreach ($the_languages as $language) : ?>
        <?php if ($language['slug'] == $current_language) : ?>
        <button class="btn fs-13 pdx-10 pdx-md-20 bg-secondary-dark color-white radius-height px-toggle tx-uppercase">
            <img src="<?php echo $language['flag']; ?>" alt="" width="16px">
            <span class="hidden-sm-down"><?php echo $language['slug']; ?></span>
        </button>
        <?php endif; ?>
    <?php endforeach; ?>
    <!-- List -->
    <ul class="px-dropdown-list reset-list bg-white fs-14 w-125 bx-shadow-dp-1 radius-md primary-font">
        <?php foreach ($the_languages as $language) : ?>
        <li class="item pdx-15 pdy-5">
            <a href="<?php echo $language['url']; ?>"><img src="<?php echo $language['flag']; ?>" alt="" width="16px" class="me-5"> <?php echo $language['name']; ?></a>
        </li>
        <?php endforeach; ?>
    </ul>
    <?php endif; ?>
    <!-- // List -->
</div>
<!-- // Phenix Dropdown -->
<?php
    //===> Stop Collecting Data <===//
    $blockOutput = ob_get_clean();
    $markup  .= $blockOutput;
    return "{$markup}";
}

//===> Register Phenix Block <===//
function px_languages_block () {
    //===> Define [JSON] Assets  <===//
    $assets_path = get_template_directory().'/assets/js/blocks/px-languages/';
    $assets_uri  = get_template_directory_uri().'/assets/js/blocks/px-languages/';
    $px_assets = include($assets_path.'index.asset.php');

    //===> Add the Block JS <===//
    wp_register_script('px-languages',
        $assets_uri.'index.js',
        $px_assets['dependencies'],
        $px_assets['version']
    );
    

    //==== Register Block ====//
    register_block_type($assets_path.'block.json', array(
        'api_version'  => 2,
        'editor_script'   => 'px-languages',
        'render_callback' => 'px_languages_render'
    ));
}

add_action( 'init', 'px_languages_block' );