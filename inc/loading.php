<?php
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;
    //===> Define Elements <===//
    $loading_opts = (array) get_option('pds_loading');
    $showLoadingText = $loading_opts["showText"];
    $background = $loading_opts["background"];
    if(!isset($loading_opts["size"])) { $loading_opts["size"] = "3.5rem"; };
?>
<div class="px-page-loader" style="position: fixed; top:0; left:0; z-index: 999999999; width: 100vw; height: 100vh; background: <?php if($background) {echo $background;} else { echo 'var(--body-bg)'; } ?>; text-align: center;">
    <!-- Content Box -->
    <div class="content-box" style="position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%)">
        <!-- Spinner -->
        <?php if (isset($loading_opts["type"]) && $loading_opts["type"] == "image") : ?>
            <img class="spinner" src="<?php echo $loading_opts["image"]; ?>" alt="<?php echo __('Loading', "pds-blocks");?>" style="width:<?php echo $loading_opts["size"]; ?>; height: auto!important" />
        <?php 
            elseif (isset($loading_opts["type"]) && $loading_opts["type"] == "code") :
                echo $loading_opts["code"]; 
            endif;
        ?>
        <!-- Paragraph -->
        <?php if ($showLoadingText && $showLoadingText == "on") : ?>
        <p style="margin-bottom: 0; font-size: 1rem; padding: 0.625rem 0.313rem;"><?php echo $loading_opts["text"]; ?></p>
        <?php endif; ?>
    </div>
</div>
<!-- Loading Script -->
<script defer>
    //===> When Loading is Complete <===//
    window.addEventListener('load', (loaded) => {
        //===> WP7 Hacks <===//
        const isFormProcessing = window.location.hash.substr(1).includes('wpcf7-');
        const theForm = document.querySelector(`#${window.location.hash.substr(1) || 'xx'}`);

        //===> Keep Loading for Forms Submit <====//
        if (isFormProcessing && theForm && !theForm.classList.contains('failed')) {
            Phenix('.px-page-loader p')[0].innerHTML = "please wait your data is being processed.";
        } else {
            //===> Hide the Loader <===//
            Phenix(".px-page-loader").fadeOut(500, 0);
            //===> Leaving Fallback <===//
            window.addEventListener('pageshow', (event) => Phenix(".px-page-loader").fadeOut(500, 0));
        }
    });
    //===> When Leaving Page <===//
    window.addEventListener('beforeunload', (isLeaving) => {
        //===> WP7 Hacks <===//
        const isFormProcessing = window.location.hash.substr(1).includes('wpcf7-');
        const theForm = document.querySelector(`#${window.location.hash.substr(1) || 'xx'}`);
        //====> Cancel Loading Showup <=====//
        if (isFormProcessing && theForm && !theForm.classList.contains('failed')) return;
        Phenix(".px-page-loader").fadeIn(100, 0);
    });
    //===> Defer Images <===//
    document.querySelectorAll('img:not([loading])').forEach(image => image.setAttribute('loading', 'lazy'));
</script>