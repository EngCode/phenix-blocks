<?php
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;
    //===> Define Elements <===//
    $loading_opts = (array) get_option('pds_loading');
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
        <?php if (isset($loading_opts["showText"]) && $loading_opts["showText"] == "on") : ?>
        <p style="margin-bottom: 0; font-size: 1rem; padding: 0.625rem 0.313rem;"><?php echo $loading_opts["text"]; ?></p>
        <?php endif; ?>
        <!-- Progress Bar -->
        <?php if (isset($loading_opts["showProgressBar"]) && $loading_opts["showProgressBar"] == "on") : ?>
        <div class="progress" data-value="0"></div>
        <?php endif; ?>
    </div>
</div>
<!-- Loading Styles -->
<style>
    /*====> Loader <====*/
    .px-page-loader {clip-path: circle(150% at 50% 50%); transition: clip-path 0.8s cubic-bezier(.77,0,.18,1), opacity 0.3s;}
    .px-page-loader.hide {clip-path: circle(0% at 50% 50%);}
    /*====> Progress Bar <====*/
    .px-page-loader .progress {width: 100%; height: 5px; background: rgba(0,0,0,0.15); border-radius: 5px; position: relative; margin-top: 1rem;}
    .px-page-loader .progress::before {content: ''; width: var(--width, 0%); display: block; height: 100%; background: var(--primary-color); transition: width 0.3s;}
    /*====> Progress Bar Percentage <====*/
    .px-page-loader .progress::after {content: attr(data-value); position: absolute; top: 0; left: 0; padding: 0.313rem; font-size: 1rem; width: 100%; text-align: center;}
</style>
<!-- Loading Script -->
<script defer>
    /*====> Unblock Phenix <====*/
    const phenixJsScript = document.querySelector('#phenix-js') || document.querySelector("script[src*='p`henix.js']");
    if(phenixJsScript) phenixJsScript.removeAttribute('async');

    //===> Progress Bar Percentage <===//
    <?php if (isset($loading_opts["showProgressBar"]) && $loading_opts["showProgressBar"] == "on") : ?>
    const progressBar = document.querySelector('.px-page-loader .progress');
    const progressPercentage = document.querySelector('.px-page-loader .progress::after');
    let progressWidth = 0;
    <?php endif; ?>

    //===> Defer Images <===//
    document.querySelectorAll('img:not([loading])').forEach(image => image.setAttribute('loading', 'lazy'));

    //===> When Loading is Complete <===//
    window.addEventListener('load', (loaded) => {
        //===> WP7 Hacks <===//
        const isFormProcessing = window.location.hash.substr(1).includes('wpcf7-');
        const theForm = document.querySelector(`#${window.location.hash.substr(1) || 'xx'}`);

        //===> Keep Loading for Forms Submit <====//
        if (isFormProcessing && theForm && !theForm.classList.contains('failed')) {
            Phenix('.px-page-loader p')[0].innerHTML = "please wait your data is being processed.";
        } else {    
            //===> Add the Last 10% of progress before hiding the loader <===//
            <?php if (isset($loading_opts["showProgressBar"]) && $loading_opts["showProgressBar"] == "on") : ?>
            progressBar.style.setProperty('--width', `100%`);
            progressBar.setAttribute('data-value', `100%`);
            <?php endif; ?>

            //===> Hide Loader with Circular Effect <===//
            const pxLoader = document.querySelector('.px-page-loader');
            //===> Add Hide Effect <===//
            pxLoader.classList.add('hide');

            //===> Remove Loader <===//
            pxLoader.addEventListener('transitionend', function pxHideHandler(e) {
                //===> Remove Loader <===//
                if (e.propertyName === 'clip-path') {
                    //===> Hide Loader <===//
                    pxLoader.style.display = 'none';
                    //===> Remove Transition <===//
                    pxLoader.removeEventListener('transitionend', pxHideHandler);
                }
            });
        }
    });
        
    //===> Page Transition: Before Leaving the Page <===//
    window.addEventListener('beforeunload', (isLeaving) => {
        //===> WP7 Hacks for Contact Form 7 <===//
        const isFormProcessing = window.location.hash.substr(1).includes('wpcf7-');
        const theForm = document.querySelector(`#${window.location.hash.substr(1) || 'xx'}`);

        //===> Cancel Loading Showup <===//
        if (isFormProcessing && theForm && !theForm.classList.contains('failed')) return;
        //===> Show Loader with Circular Effect <===//
        const pxLoader = document.querySelector('.px-page-loader');
        //===> Show Loader <===//
        pxLoader.style.display = '';
        //===> Add Show Effect <===//
        void pxLoader.offsetWidth;
        //===> Remove Hide Effect <===//
        pxLoader.classList.remove('hide');
        //===> Add Show Effect <===//
        pxLoader.addEventListener('transitionend', function pxShowHandler(ev) {
            //===> Check for Clip Path <===//
            if (ev.propertyName === 'clip-path') {
                //===> Remove Show Effect <===//
                pxLoader.removeEventListener('transitionend', pxShowHandler);
            }
        });
    });

    //===> Progress Bar Timeloop <===//
    <?php if (isset($loading_opts["showProgressBar"]) && $loading_opts["showProgressBar"] == "on") : ?>
    const interval = setInterval(() => {
        //===> Increase Progress Width <===//
        progressWidth += 1;
        //===> Update Progress Bar <===//
        progressBar.style.setProperty('--width', `${progressWidth}%`);
        progressBar.setAttribute('data-value', `${progressWidth}%`);
        //===> Stop Timeloop After 90% <===//
        if (progressWidth >= 90) clearInterval(interval);
    }, 10);
    <?php endif; ?>
</script>