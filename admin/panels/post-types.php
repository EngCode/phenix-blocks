<!-- Grid Layout -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-lg-6 w-max-480 pdy-10">
        <!-- Area Title -->
        <h3 class="fs-16 mb-0 weight-medium"><?php echo __('Add New Post Type', 'phenix'); ?></h3>
        <p class="mb-20 fs-14"><?php echo __('you can add custom post types from below form.', 'phenix'); ?></p>

        <!-- Grid -->
        <div class="row gpx-15 gpy-15 collection-form" data-type="post-types">
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-text">
                    <input type="text" name="type-label" class="form-control radius-sm fs-13" placeholder="<?php echo __('Label', 'phenix');?>" required>
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-link">
                    <input type="text" name="type-name" class="form-control radius-sm fs-13" placeholder="<?php echo __('Name', 'phenix');?>">
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-text">
                    <input type="text" name="type-label-singular" class="form-control radius-sm fs-13" placeholder="<?php echo __('singular Label', 'phenix');?>">
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-link">
                    <input type="text" name="type-singular" class="form-control radius-sm fs-13" placeholder="<?php echo __('Singular', 'phenix');?>">
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-image">
                    <input type="text" name="type-icon" class="form-control radius-sm fs-13" placeholder="<?php echo __('Icon', 'phenix');?>" required>
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-file-alt">
                    <select name="type-template" class="px-select form-control radius-sm fs-13">
                        <option value=""><?php echo __("Pattern Template", 'phenix'); ?></option>
                        <option value="slide-example"><?php echo __("Slider Single", 'phenix'); ?></option>
                        <option value="blog-example"><?php echo __("Blog Single", 'phenix'); ?></option>
                    </select>
                </div>
            </div>
            <!-- Column -->
            <div class="col-12">
                <!-- Form Control -->
                <div class="control-icon far fa-boxes mb-15">
                    <select name="type-taxonomies" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo __('Taxonomies', 'phenix');?>" multiple>
                        <?php
                            $taxonomies = get_taxonomies(array('public'=> true), 'objects');
                            foreach ($taxonomies as $taxonomy) {
                                if ($taxonomy->name !== "post_format") {
                                    echo '<option value="'.$taxonomy->name.'">' . $taxonomy->labels->name . '</option>';
                                }
                            };
                        ?>
                    </select>
                </div>
                <!-- Elements Group -->
                <div class="flexbox align-between align-center-y">
                    <!-- Form Control -->
                    <label class="small option-control align-center-y align-between fs-15 weight-medium" data-type="checkbox">
                        <input type="checkbox" name="type-enable" checked />
                        <span class="fas fa-check radius-circle tx-icon"><?php echo __("Enable this Type once added ?", 'phenix'); ?></span>
                    </label>
                    <!-- Form Control -->
                    <button type="button" class="add-item btn primary radius-sm small ms-auto display-block"><?php echo __('Add Type', 'phenix'); ?></button>
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
                <h3 class="fs-16 mb-0 weight-medium"><?php echo __('Post Types', 'phenix'); ?></h3>
                <p class="fs-14"><?php echo __('in here you can manage the  post types created by phenix-blocks.', 'phenix'); ?></p>
            </div>
        </div>
        <!-- Post Types List -->
        <ul class="reset-list border-1 border-solid border-alpha-15 radius-sm types-list fs-14">
            <li class="list-head flexbox divider-b align-center-y pdy-10 pds-15 pde-10 mb-0 weight-medium bg-offwhite-smoke radius-sm radius-top">
                <span class="col-4"><?php echo __('Label', 'phenix'); ?></span>
                <span class="col-3"><?php echo __('Name', 'phenix'); ?></span>
                <span class="col-2"><?php echo __('Singular', 'phenix'); ?></span>
            </li>
        </ul>
    </div>
</div>
<!-- // Grid Layout -->