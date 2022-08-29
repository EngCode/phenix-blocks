<?php
    /**
     * Tornado Theme - Options Tab
     * @package Tornado Wordpress
    */
    //======= Exit if Try to Access Directly =======//
    defined('ABSPATH') || exit;
?>

<!-- Page Head -->
<div class="page-head">
    <h1><?php echo __('Header Options','tornado'); ?></h1>
</div>

<!-- Header Options -->
<div class="options-panel">
    <!-- Panel Title -->
    <h2 class="panel-title"><?php echo __('Header Layouts','tornado'); ?></h2>
    <!-- // Panel Title -->

    <!-- Grid -->
    <div class="row no-gutter">
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box align-between align-center-y">
                <label for="theme_logo"><?php echo __('Normal Logo','tornado'); ?></label>
                <!-- Image Uploader -->  
                <div class="media-uploader-control iconic">
                    <?php 
                        if (!get_option('theme_logo')) {
                            $logo_value = 'https://via.placeholder.com/320x50?text=PLACEHOLDER';
                        } else {
                            $logo_value = get_option('theme_logo');
                        }
                    ?>
                    <!-- Image Input -->
                    <input type="hidden" name="theme_logo" class="uploader-input" value="<?php echo $logo_value; ?>">
                    <!-- Image Preview and Button -->
                    <img src="<?php echo $logo_value; ?>" alt="" class="image-prev">
                    <button type="button" class="uploader-btn button button-primary ti-play-work-up"></button>
                </div>
                <!-- // Image Uploader -->  
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box align-between align-center-y">
                <label for="theme_logo"><?php echo __('White Logo','tornado'); ?></label>
                <!-- Image Uploader -->  
                <div class="media-uploader-control iconic">
                    <?php 
                        if (!get_option('theme_logo_white')) {
                            $logo_value = 'https://via.placeholder.com/320x50?text=PLACEHOLDER';
                        } else {
                            $logo_value = get_option('theme_logo_white');
                        }
                    ?>
                    <!-- Image Input -->
                    <input type="hidden" name="theme_logo_white" class="uploader-input" value="<?php echo $logo_value; ?>">
                    <!-- Image Preview and Button -->
                    <img src="<?php echo $logo_value; ?>" alt="" class="image-prev">
                    <button type="button" class="uploader-btn button button-primary ti-play-work-up"></button>
                </div>
                <!-- // Image Uploader -->  
            </div>
        </div>
        <!-- // Control Item -->
    </div>
    <!-- // Grid -->
</div>
<!-- // Header Options-->

<!-- Top Navigation -->
<div class="options-panel hidden">
    <!-- Panel Title -->
    <h2 class="panel-title">
        <?php echo __('Top Navigation','tornado'); ?>
        <label class="toggle-button">
            <input type="checkbox" name="top_nav" class="panel-toggle" value="1" <?php checked(1, get_option('top_nav'), true); ?>>
            <span></span>
        </label>
    </h2>
    <!-- // Panel Title -->
    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Contacts Info','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="top_nav_contacts" value="1" <?php checked(1, get_option('top_nav_contacts'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Users Links','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="top_nav_links" value="1" <?php checked(1, get_option('top_nav_links'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Social Media','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="top_nav_social" value="1" <?php checked(1, get_option('top_nav_social'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Links Menu','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="top_nav_menu" value="1" <?php checked(1, get_option('top_nav_menu'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- /// Control Item -->
</div>
<!-- // Top Navigation -->

