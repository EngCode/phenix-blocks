<?php
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;
    //===> Define Elements <===//
    $plugin_url = plugin_dir_url(__DIR__);
    $showLoadingText = get_option('pds_loading')["showText"];
    $background = get_option("pds_loading")["background"];
?>
<div class="px-page-loader" style="position: fixed; top:0; left:0; z-index: 999999999; width: 100vw; height: 100vh; background: <?php if($background) {echo $background;} else { echo 'var(--body-bg)'; } ?>; text-align: center;">
    <!-- Content Box -->
    <div class="content-box" style="position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%)">
        <!-- Spinner -->
        <?php if (get_option("pds_loading")["type"] == "image") : ?>
            <img class="spinner" width="42" height="42" src="<?php echo get_option('pds_loading')["image"]; ?>" alt="<?php echo __('Loading', "pds-blocks");?>" />
        <?php 
            elseif (get_option("pds_loading")["type"] == "code") :
                echo get_option('pds_loading')["code"]; 
            endif;
        ?>
        <!-- Paragraph -->
        <?php if ($showLoadingText == "on") : ?>
        <p style="margin-bottom: 0; font-size: 13px; padding: 10px 5px;">---<?php echo get_option('pds_loading')["text"]; ?>---</p>
        <?php endif; ?>
    </div>
    <!-- // Content Box -->
</div>
<!-- Loading Script -->
<script defer>
    //===> When Loading is Complete <===//
    window.addEventListener('load', (loaded) => setTimeout(() => Phenix(".px-page-loader").fadeOut(500, 0), 1500));
    //===> When Leaving Page <===//
    window.addEventListener('beforeunload', (isLeaving) => Phenix(".px-page-loader").fadeIn(500, 0));
</script>