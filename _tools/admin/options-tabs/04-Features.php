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
    <h1><?php echo __('Features Options','tornado'); ?></h1>
</div>

<!-- Blog Features -->
<div class="options-panel">
    <!-- Panel Title -->
    <h2 class="panel-title">
        <?php echo __('Blog Post-Type','tornado'); ?>
        <label class="toggle-button">
            <input type="checkbox" name="blog_type" class="panel-toggle" value="1" <?php checked(1, get_option('blog_type'), true); ?>>
            <span></span>
        </label>
    </h2>
    <!-- // Panel Title -->

    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Gutenberg Editor','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="blog_gutenberg" value="1" <?php checked(1, get_option('blog_gutenberg'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Sidebar Widgets','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="blog_sidebar" value="1" <?php checked(1, get_option('blog_sidebar'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- /// Control Item -->
</div>
<!-- // Blog Features-->

<!-- Slider Features -->
<div class="options-panel">
    <!-- Panel Title -->
    <h2 class="panel-title">
        <?php echo __('Slider Post-Type','tornado'); ?>
        <label class="toggle-button">
            <input type="checkbox" name="slider_type" class="panel-toggle" value="1" <?php checked(1, get_option('slider_type'), true); ?>>
            <span></span>
        </label>
    </h2>
    <!-- // Panel Title -->

    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Gutenberg Editor','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="slider_gutenberg" value="1" <?php checked(1, get_option('slider_gutenberg'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- /// Control Item -->
</div>
<!-- // Slider Features-->

<!-- Services Features -->
<div class="options-panel">
    <!-- Panel Title -->
    <h2 class="panel-title">
        <?php echo __('Services Post-Type','tornado'); ?>
        <label class="toggle-button">
            <input type="checkbox" name="services_type" class="panel-toggle" value="1" <?php checked(1, get_option('services_type'), true); ?>>
            <span></span>
        </label>
    </h2>
    <!-- // Panel Title -->

    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Gutenberg Editor','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="services_gutenberg" value="1" <?php checked(1, get_option('services_gutenberg'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Sidebar Widgets','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="services_sidebar" value="1" <?php checked(1, get_option('services_sidebar'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- /// Control Item -->
</div>
<!-- // Services Features-->

<!-- Projects Features -->
<div class="options-panel">
    <!-- Panel Title -->
    <h2 class="panel-title">
        <?php echo __('Projects Post-Type','tornado'); ?>
        <label class="toggle-button">
            <input type="checkbox" name="projects_type" class="panel-toggle" value="1" <?php checked(1, get_option('projects_type'), true); ?>>
            <span></span>
        </label>
    </h2>
    <!-- // Panel Title -->

    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Gutenberg Editor','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="projects_gutenberg" value="1" <?php checked(1, get_option('projects_gutenberg'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Sidebar Widgets','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="projects_sidebar" value="1" <?php checked(1, get_option('projects_sidebar'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- /// Control Item -->
</div>
<!-- // Projects Features-->

<!-- Portfolio Features -->
<div class="options-panel">
    <!-- Panel Title -->
    <h2 class="panel-title">
        <?php echo __('Portfolio Post-Type','tornado'); ?>
        <label class="toggle-button">
            <input type="checkbox" name="portfolio_type" class="panel-toggle" value="1" <?php checked(1, get_option('portfolio_type'), true); ?>>
            <span></span>
        </label>
    </h2>
    <!-- // Panel Title -->

    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Gutenberg Editor','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="portfolio_gutenberg" value="1" <?php checked(1, get_option('portfolio_gutenberg'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Sidebar Widgets','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="portfolio_sidebar" value="1" <?php checked(1, get_option('portfolio_sidebar'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- /// Control Item -->
</div>
<!-- // Portfolio Features-->

<!-- Products Features -->
<div class="options-panel">
    <!-- Panel Title -->
    <h2 class="panel-title">
        <?php echo __('Products Post-Type','tornado'); ?>
        <label class="toggle-button">
            <input type="checkbox" name="products_type" class="panel-toggle" value="1" <?php checked(1, get_option('products_type'), true); ?>>
            <span></span>
        </label>
    </h2>
    <!-- // Panel Title -->

    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Gutenberg Editor','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="products_gutenberg" value="1" <?php checked(1, get_option('products_gutenberg'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Sidebar Widgets','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="products_sidebar" value="1" <?php checked(1, get_option('products_sidebar'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- /// Control Item -->
</div>
<!-- // Products Features-->

<!-- Multimedia Features -->
<div class="options-panel">
    <!-- Panel Title -->
    <h2 class="panel-title">
        <?php echo __('Multimedia Post-Type','tornado'); ?>
        <label class="toggle-button">
            <input type="checkbox" name="multimedia_type" class="panel-toggle" value="1" <?php checked(1, get_option('multimedia_type'), true); ?>>
            <span></span>
        </label>
    </h2>
    <!-- // Panel Title -->

    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Gutenberg Editor','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="multimedia_gutenberg" value="1" <?php checked(1, get_option('multimedia_gutenberg'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Sidebar Widgets','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="multimedia_sidebar" value="1" <?php checked(1, get_option('multimedia_sidebar'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- /// Control Item -->
</div>
<!-- // Multimedia Features-->

<!-- Testimonials Features -->
<div class="options-panel">
    <!-- Panel Title -->
    <h2 class="panel-title">
        <?php echo __('Testimonials Post-Type','tornado'); ?>
        <label class="toggle-button">
            <input type="checkbox" name="testimonials_type" class="panel-toggle" value="1" <?php checked(1, get_option('testimonials_type'), true); ?>>
            <span></span>
        </label>
    </h2>
    <!-- // Panel Title -->

    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Gutenberg Editor','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="testimonials_gutenberg" value="1" <?php checked(1, get_option('testimonials_gutenberg'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- /// Control Item -->
</div>
<!-- // Testimonials Features-->

<!-- Partners Features -->
<div class="options-panel">
    <!-- Panel Title -->
    <h2 class="panel-title">
        <?php echo __('Partners Post-Type','tornado'); ?>
        <label class="toggle-button">
            <input type="checkbox" name="partners_type" class="panel-toggle" value="1" <?php checked(1, get_option('partners_type'), true); ?>>
            <span></span>
        </label>
    </h2>
    <!-- // Panel Title -->

    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Gutenberg Editor','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="partners_gutenberg" value="1" <?php checked(1, get_option('partners_gutenberg'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- /// Control Item -->
</div>
<!-- // Partners Features-->

<!-- F.A.Q Features -->
<div class="options-panel">
    <!-- Panel Title -->
    <h2 class="panel-title">
        <?php echo __('F.A.Q Post-Type','tornado'); ?>
        <label class="toggle-button">
            <input type="checkbox" name="faq_type" class="panel-toggle" value="1" <?php checked(1, get_option('faq_type'), true); ?>>
            <span></span>
        </label>
    </h2>
    <!-- // Panel Title -->

    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Gutenberg Editor','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="faq_gutenberg" value="1" <?php checked(1, get_option('faq_gutenberg'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- /// Control Item -->
</div>
<!-- // F.A.Q Features-->

<!-- Team Features -->
<div class="options-panel">
    <!-- Panel Title -->
    <h2 class="panel-title">
        <?php echo __('Team Post-Type','tornado'); ?>
        <label class="toggle-button">
            <input type="checkbox" name="team_type" class="panel-toggle" value="1" <?php checked(1, get_option('team_type'), true); ?>>
            <span></span>
        </label>
    </h2>
    <!-- // Panel Title -->

    <!-- Control Item -->
    <div class="control-item <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box align-between align-center-y">
            <label><?php echo __('Gutenberg Editor','tornado'); ?></label>
            <label class="toggle-button">
                <input type="checkbox" name="team_gutenberg" value="1" <?php checked(1, get_option('team_gutenberg'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- /// Control Item -->
</div>
<!-- // Team Features-->