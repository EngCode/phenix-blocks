<?php
    //====> Shared Options <====//
    $assets_url = plugin_dir_url(__FILE__);
    $icons_url  = str_replace('admin/panels', 'assets/img/blocks/core/', $assets_url);
?>
<!-- Grid Layout -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-lg-5 pdy-10 me-lg-20 collection-form" data-type="menu-locations">
        <!-- Area Title -->
        <h3 class="fs-16 mb-0 weight-medium"><?php echo px__('Add New Location'); ?></h3>
        <p class="mb-20 fs-14"><?php echo px__('you can add new menu locations from below form.'); ?></p>
        <!-- Form Control -->
        <div class="control-icon far fa-list mb-15">
            <input type="text" name="location-title" class="form-control radius-md border-alpha-10" placeholder="<?php echo px__('Location Title');?>" required>
        </div>
        <!-- Form Control -->
        <div class="control-icon far fa-location mb-15">
            <input type="text" name="location-name" class="form-control radius-md border-alpha-10" placeholder="<?php echo px__('location-name');?>">
        </div>
        <!-- Form Control -->
        <button type="button" class="add-item btn primary radius-sm small ms-auto display-block"><?php echo px__('Add Location'); ?></button>
    </div>
    <!-- Column -->
    <div class="col col-lg-6 pdy-10">
        <!-- Layouts -->
        <div class="flexbox align-between align-center-y mb-20">
            <!-- Area Head -->
            <div class="col">
                <h3 class="fs-16 mb-0 weight-medium"><?php echo px__('Menu Locations'); ?></h3>
                <p class="fs-14"><?php echo px__('in here you can manage the menu locations created by phenix-blocks.'); ?></p>
            </div>
        </div>
        <!-- Locations List -->
        <ul class="reset-list border-1 border-solid border-alpha-15 radius-sm locations-list fs-14">
            <li class="list-head flexbox divider-b align-center-y pdy-10 pds-15 pde-10 mb-0 weight-medium bg-offwhite-smoke radius-sm radius-top">
                <span class="col-5"><?php echo px__('Location Title'); ?></span>
                <span class="col-5"><?php echo px__('Location Name'); ?></span>
            </li>
        </ul>
    </div>
</div>
<!-- // Grid Layout -->