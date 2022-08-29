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
    <h1><?php echo __('Contact Info','tornado'); ?></h1>
</div>

<!-- Panel Block -->
<div class="options-panel">
    <!-- Panel Title -->
    <h2 class="panel-title"><?php echo __('Contact Information','tornado'); ?></h2>
    <div class="row no-gutter">
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="phone_number"><?php echo __('Phone Number','tornado'); ?></label>
                <input type="text" name="phone_number" placeholder="<?php echo 'xx-xxxx-xxx'; ?>" value="<?php echo get_option('phone_number'); ?>">
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="phone_number_2nd"><?php echo __('Phone Number 2nd','tornado'); ?></label>
                <input type="text" name="phone_number_2nd" placeholder="<?php echo 'xx-xxxx-xxx'; ?>" value="<?php echo get_option('phone_number_2nd'); ?>">
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="contact_email"><?php echo __('Email Address','tornado'); ?></label>
                <input type="text" name="contact_email" placeholder="<?php echo 'example@mail.com'; ?>" value="<?php echo get_option('contact_email'); ?>">
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="contact_email_2nd"><?php echo __('Email Address 2nd','tornado'); ?></label>
                <input type="text" name="contact_email_2nd" placeholder="<?php echo 'example@mail.com'; ?>" value="<?php echo get_option('contact_email_2nd'); ?>">
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="whatsapp_number"><?php echo __('Whatsapp Number','tornado'); ?></label>
                <input type="text" name="whatsapp_number" placeholder="<?php echo 'xx-xxxx-xxx'; ?>" value="<?php echo get_option('whatsapp_number'); ?>">
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="whatsapp_number_2nd"><?php echo __('Whatsapp Number 2nd','tornado'); ?></label>
                <input type="text" name="whatsapp_number_2nd" placeholder="<?php echo 'xx-xxxx-xxx'; ?>" value="<?php echo get_option('whatsapp_number_2nd'); ?>">
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-12 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="branch_address"><?php echo __('Branch Location','tornado'); ?></label>
                <input type="text" name="branch_address" placeholder="<?php echo pll__('egypt, beni-suef, al-wasta','tornado'); ?>" value="<?php echo pll__(get_option('branch_address'), 'tornado'); ?>">
            </div>
        </div>
        <!-- // Control Item -->
    </div>
</div>
<!-- // Panel Block -->

<!-- Panel Block -->
<div class="options-panel">
    <!-- Panel Title -->
    <h2 class="panel-title"><?php echo __('Social Media','tornado'); ?></h2>
    <div class="row no-gutter">
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="facebook_url"><?php echo __('Facebook url','tornado'); ?></label>
                <input type="text" name="facebook_url" placeholder="<?php echo 'https://fb.com/username'; ?>" value="<?php echo get_option('facebook_url'); ?>">
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="twitter_url"><?php echo __('Twitter url','tornado'); ?></label>
                <input type="text" name="twitter_url" placeholder="<?php echo 'https://twitter.com/@username'; ?>" value="<?php echo get_option('twitter_url'); ?>">
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="instagram_url"><?php echo __('Instagram url','tornado'); ?></label>
                <input type="text" name="instagram_url" placeholder="<?php echo 'https://instagram.com/username'; ?>" value="<?php echo get_option('instagram_url'); ?>">
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="linkedin_url"><?php echo __('Linked-in url','tornado'); ?></label>
                <input type="text" name="linkedin_url" placeholder="<?php echo 'https://linkedin.com/@username'; ?>" value="<?php echo get_option('linkedin_url'); ?>">
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="youtube_url"><?php echo __('Youtube url','tornado'); ?></label>
                <input type="text" name="youtube_url" placeholder="<?php echo 'https://youtube.com/username'; ?>" value="<?php echo get_option('instagram_url'); ?>">
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="snapchat_url"><?php echo __('Snapchat url','tornado'); ?></label>
                <input type="text" name="snapchat_url" placeholder="<?php echo 'https://snapchat.com/@username'; ?>" value="<?php echo get_option('linkedin_url'); ?>">
            </div>
        </div>
        <!-- // Control Item -->
    </div>
</div>
<!-- // Panel Block -->


<!-- Panel Block -->
<div class="options-panel">
    <!-- Panel Title -->
    <h2 class="panel-title"><?php echo __('Location Map','tornado'); ?></h2>
    <!-- Grid -->
    <div class="row no-gutter">
        <!-- Control Item -->
        <div class="control-item col-12 col-l-12 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="header_code">
                    <?php echo __('Map [iframe] Embed Code','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('you can put your google map embed code for the main address','tornado'); ?>"></span>
                </label>
                <div class="control-wraper">
                    <textarea name="map_embed" class="ltr h120" id="codemirror-4"><?php echo esc_html__(get_option('map_embed')); ?></textarea>
                </div>
            </div>
        </div>
        <!-- // Control Item -->
    </div>
    <!-- // Grid -->
</div>
<!-- // Panel Block -->

<!-- Code Mirror -->
<script>
    document.addEventListener('DOMContentLoaded', function () {
        'use strict';
        /*============ Select Code Mirror Elements ==============*/
        var editor_el4 = document.querySelector('#codemirror-4'),
            editors_options = {
                lineNumbers: true,
                theme: 'xq-light',
                styleActiveLine: true,
                htmlMode:true,
                mode:'htmlmixed',
                matchClosing:true,
                lineWrapping:true,
                autoCloseBrackets: true,
                autoCloseTags: true,
            }
        /*============ Init Code Editors ==============*/
        var editor_4 = CodeMirror.fromTextArea(editor_el4,editors_options);
    });
</script>