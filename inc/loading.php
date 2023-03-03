<?php
    //===> Define Elements <===//
    $plugin_url = plugin_dir_url(__DIR__);
?>
<div class="px-page-loader" style="position: fixed; top:0; left:0; z-index: 999999999; width: 100vw; height: 100vh; background-color: #FFF; text-align: center;">
    <!-- Content Box -->
    <div class="content-box" style="position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%)">
        <!-- Spinner -->
        <img class="spinner" style="opacity: 0.5" width="42" height="42" src="<?php echo $plugin_url; ?>assets/img/loading.svg" alt="<?php echo __('Loading', 'phenix');?>" />
        <!-- Paragraph -->
        <p style="margin-bottom: 0; font-size: 13px; padding: 10px 5px;">---<?php echo __('Loading', 'phenix');?>---</p>
    </div>
    <!-- // Content Box -->
</div>