<?php
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;
    //===> Define Elements <===//
    $plugin_url = plugin_dir_url(__DIR__);
    $loading_opts = (array) get_option('pds_loading');
    $showLoadingText = $loading_opts["showText"];
    $background = $loading_opts["background"];
?>
<div class="px-page-loader" style="position: fixed; top:0; left:0; z-index: 999999999; width: 100vw; height: 100vh; background: <?php if($background) {echo $background;} else { echo 'var(--body-bg)'; } ?>; text-align: center;">
    <!-- Content Box -->
    <div class="content-box" style="position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%)">
        <!-- Spinner -->
        <?php if (isset($loading_opts["type"]) && $loading_opts["type"] == "image") : ?>
            <img class="spinner" width="42" height="42" src="<?php echo $loading_opts["image"]; ?>" alt="<?php echo __('Loading', "pds-blocks");?>" />
        <?php 
            elseif (isset($loading_opts["type"]) && $loading_opts["type"] == "code") :
                echo $loading_opts["code"]; 
            endif;
        ?>
        <!-- Paragraph -->
        <?php if ($showLoadingText && $showLoadingText == "on") : ?>
        <p style="margin-bottom: 0; font-size: 13px; padding: 10px 5px;"><?php echo $loading_opts["text"]; ?></p>
        <?php endif; ?>
    </div>
    <!-- Copyrights Links -->
    <div class="position-fx" style="bottom: 150%; left: 0; z-index: -1; opacity: 0;">
        <a href="https://phenixthemes.com" target="_blank" rel="external">Phenix Themes - فينكس ثيمز</a>
        <a href="https://phenixthemes.com/demo" target="_blank" rel="external">Phenix Design System - نظام تصميم فينكس</a>
        <a href="https://phenixthemes.com/services" target="_blank" rel="external">تصميم وتطوير المواقع وقوالب وتطبيقات الويب</a>
        <a href="https://phenixthemes.com/portfolio" target="_blank" rel="external">اعمال ابداعية</a>
    </div>
    <!-- Copyrights Links -->
</div>
<!-- Loading Script -->
<script defer>
    //===> When Loading is Complete <===//
    window.addEventListener('load', (loaded) => setTimeout(() => Phenix(".px-page-loader").fadeOut(500, 0), 1500));
    //===> When Leaving Page <===//
    window.addEventListener('beforeunload', (isLeaving) => Phenix(".px-page-loader").fadeIn(500, 0));
</script>
