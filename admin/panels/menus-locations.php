<?php
    //====> Shared Options <====//
    $assets_url = plugin_dir_url(__FILE__);
    $icons_url = str_replace('admin/panels', 'assets/img/blocks/core/', $assets_url);
?>
<!-- Grid Layout -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-lg-5">
        <!-- Area Title -->
        <h3 class="fs-16 mb-5 weight-medium"><?php echo px__('Add New Location'); ?></h3>
        <p class="mb-20 fs-14">you can add new menu locations from below form.</p>

        <!-- Form Control -->
        <div class="control-icon far fa-windsock mb-15">
            <input type="text" class="form-control radius-md border-alpha-10" placeholder="Location Title">
        </div>
        <!-- Form Control -->
        <div class="control-icon far fa-location mb-15">
            <input type="text" class="form-control radius-md border-alpha-10" placeholder="location-name">
        </div>
        <!-- Form Control -->
        <button type="button" name="add-location" class="btn primary radius-sm small ms-auto display-block"><?php echo px__('Add Location'); ?></button>
    </div>
    <!-- Column -->
    <div class="col-12 col-lg-7">
        <!-- Area Title -->
        <h3 class="fs-16 mb-5 weight-medium"><?php echo px__('All Locations'); ?></h3>
        <p class="mb-20 fs-14">in here you can manage the menu locations created by phenix-blocks.</p>
    </div>
</div>
<!-- // Grid Layout -->