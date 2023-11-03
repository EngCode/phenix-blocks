<?php
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;
    //===> Define Elements <===//
    $plugin_url = plugin_dir_url(__DIR__);
?>
<div class="px-page-loader" style="position: fixed; top:0; left:0; z-index: 999999999; width: 100vw; height: 100vh; background-color: <?php if(get_option('pds-loading-bg')) { echo get_option('pds-loading-bg'); } else { echo 'var(--body-bg)'; }; ?>; text-align: center;">
    <!-- Content Box -->
    <div class="content-box" style="position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%)">
        <!-- Spinner -->
        <img class="spinner" style="opacity: 0.5" width="42" height="42" src="<?php if(get_option('pds-loading-image')) { echo get_option('pds-loading-image'); } else { echo $plugin_url.'assets/img/loading.svg'; }; ?>" alt="<?php echo __('Loading', 'phenix');?>" />
        <!-- Paragraph -->
        <p style="margin-bottom: 0; font-size: 13px; padding: 10px 5px;">---<?php echo __('Loading', 'phenix');?>---</p>
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