<!-- Grid Layout -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-lg-6 w-max-480 pdy-10">
        <!-- Area Title -->
        <h3 class="fs-16 mb-0 weight-medium"><?php echo px__('Add New Post Type'); ?></h3>
        <p class="mb-20 fs-14"><?php echo px__('you can add custom post types from below form.'); ?></p>

        <!-- Grid -->
        <div class="row gpx-15 gpy-15 collection-form" data-type="post-types">
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-text">
                    <input type="text" name="type-label" class="form-control radius-sm fs-13" placeholder="<?php echo px__('Label');?>" required>
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-link">
                    <input type="text" name="type-name" class="form-control radius-sm fs-13" placeholder="<?php echo px__('Name');?>" required>
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-text">
                    <input type="text" name="type-label-singular" class="form-control radius-sm fs-13" placeholder="<?php echo px__('singular Label');?>">
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-link">
                    <input type="text" name="type-singular" class="form-control radius-sm fs-13" placeholder="<?php echo px__('Singular');?>">
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-image">
                    <input type="text" name="type-icon" class="form-control radius-sm fs-13" placeholder="<?php echo px__('Icon');?>" required>
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-file-alt">
                    <select name="type-template" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo px__('Pattern Template');?>">
                        <option value="slide-example"><?php echo px__("Slider Single"); ?></option>
                        <option value="blog-example"><?php echo px__("Blog Single"); ?></option>
                    </select>
                </div>
            </div>
            <!-- Column -->
            <div class="col-12">
                <!-- Form Control -->
                <div class="control-icon far fa-boxes mb-15">
                    <select name="type-taxonomies" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo px__('Taxonomies');?>" multiple>
                        <option value="category"><?php echo px__("Category"); ?></option>
                        <option value="tag"><?php echo px__("Tags"); ?></option>
                    </select>
                </div>
                <!-- Elements Group -->
                <div class="flexbox align-between align-center-y">
                    <!-- Form Control -->
                    <label class="small option-control align-center-y align-between fs-15 weight-medium" data-type="checkbox">
                        <input type="checkbox" name="type-enable" checked />
                        <span class="fas fa-check radius-circle tx-icon"><?php echo px__("Enable this Type once added ?"); ?></span>
                    </label>
                    <!-- Form Control -->
                    <button type="button" name="type-btn" class="btn primary radius-sm small ms-auto display-block"><?php echo px__('Add Type'); ?></button>
                </div>
                <!-- // Elements Group -->
            </div>
            <!-- // Column -->
        </div>
        <!-- // Grid -->
    </div>
    <!-- Column -->
    <div class="col col-lg-6 pdy-10">
        <!-- Layouts -->
        <div class="flexbox align-between align-center-y mb-20">
            <!-- Area Head -->
            <div class="col">
                <h3 class="fs-16 mb-0 weight-medium"><?php echo px__('Post Types'); ?></h3>
                <p class="fs-14"><?php echo px__('in here you can manage the  post types created by phenix-blocks.'); ?></p>
            </div>
        </div>
        <!-- Post Types List -->
        <ul class="reset-list border-1 border-solid border-alpha-15 radius-sm types-list fs-14">
            <li class="list-head flexbox divider-b align-center-y pdy-10 pds-15 pde-10 mb-0 weight-medium bg-offwhite-smoke radius-sm radius-top">
                <span class="col-3"><?php echo px__('Label'); ?></span>
                <span class="col-3"><?php echo px__('Name'); ?></span>
                <span class="col-3"><?php echo px__('Singular'); ?></span>
                <span class="col-2"><?php echo px__('Status'); ?></span>
            </li>
        </ul>
    </div>
</div>
<!-- // Grid Layout -->