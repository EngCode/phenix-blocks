<?php
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;
    //====> Shared Options <====//
    $assets_url = plugin_dir_url(__FILE__);
    $icons_url  = str_replace('admin/panels', 'assets/img/blocks/core/', $assets_url);
?>
<!-- Grid Layout -->
<div class="row" id="menu_locations_form">
    <!-- Column -->
    <div class="col-12 col-lg-5 me-lg-20 collection-form" data-type="menu_locations">
        <!-- Area Title -->
        <h3 class="fs-16 mb-0 weight-medium"><?php echo esc_html__('Add New Location', "pds-blocks"); ?></h3>
        <p class="mb-20 fs-14"><?php echo esc_html__('you can add new menu locations from below form.', "pds-blocks"); ?></p>
        <!-- Form Control -->
        <div class="control-icon far fa-list mb-15">
            <input type="text" name="title" class="form-control radius-md border-alpha-10" placeholder="<?php echo esc_html__('Location Title', "pds-blocks");?>">
        </div>
        <!-- Form Control -->
        <div class="control-icon far fa-location mb-15">
            <input type="text" name="name" class="form-control radius-md border-alpha-10" placeholder="<?php echo esc_html__('location-name', "pds-blocks");?>">
        </div>
        <!-- Form Control -->
        <button type="button" class="add-item btn primary radius-sm small ms-auto display-block"><?php echo esc_html__('Add Location', "pds-blocks"); ?></button>
    </div>
    <!-- Column -->
    <div class="col col-lg-6">
        <!-- Layouts -->
        <div class="flexbox align-between align-center-y mb-20">
            <!-- Area Head -->
            <div class="col">
                <h3 class="fs-16 mb-0 weight-medium"><?php echo esc_html__('Menu Locations', "pds-blocks"); ?></h3>
                <p class="fs-14"><?php echo esc_html__('in here you can manage the menu locations created by phenix-blocks.', "pds-blocks"); ?></p>
            </div>
        </div>
        <!-- Locations List -->
        <ul class="reset-list border-1 border-solid border-alpha-15 radius-sm menu_locations_list fs-14" data-type="menu_locations">
            <li class="list-head flexbox divider-b align-center-y pdy-10 pds-15 pde-10 mb-0 weight-medium bg-offwhite-smoke radius-sm radius-top">
                <span class="col-5"><?php echo esc_html__('Location Title', "pds-blocks"); ?></span>
                <span class="col-5"><?php echo esc_html__('Location Name', "pds-blocks"); ?></span>
            </li>
        </ul>
    </div>
</div>
<!-- // Grid Layout -->