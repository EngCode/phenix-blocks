<?php if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif; ?>

<!-- Layouts -->
<div class="flexbox align-between align-center-y mb-20">
    <!-- Area Head -->
    <div class="col">
        <h3 class="fs-16 mb-0 weight-medium"><?php echo __('Post Types', 'phenix'); ?></h3>
        <p class="fs-14"><?php echo __('in here you can manage the  post types created by phenix-blocks.', 'phenix'); ?></p>
    </div>
    <!-- Button -->
    <button type="button" class="btn success radius-sm" data-modal="pds_types_form"><?php echo __('Add New', 'phenix'); ?></button>
</div>

<!-- Post Types List -->
<ul class="reset-list border-1 border-solid border-alpha-15 radius-sm pds_types_list fs-14" data-type="pds_types">
    <li class="list-head flexbox divider-b align-center-y pdy-10 pds-15 pde-10 mb-0 weight-medium bg-offwhite-smoke radius-sm radius-top">
        <span class="col w-max-260"><?php echo __('Label', 'phenix'); ?></span>
        <span class="col w-max-200"><?php echo __('Name', 'phenix'); ?></span>
        <span class="col w-max-200"><?php echo __('Singular', 'phenix'); ?></span>
        <span class="col"><?php echo __('Taxonomies', 'phenix'); ?></span>
    </li>
</ul>

<!-- Pagination Buttons -->
<div class="flexbox align-between pdt-15">
    <button type="button" class="btn small gray radius-sm border-1 border-solid border-alpha-15 prev-btn">Previous Page</button>
    <button type="button" class="btn small primary radius-sm border-1 border-solid border-alpha-15 next-btn">Next Page</button>
</div>
<!-- /// Pagination Buttons -->

<!-- Modal Component -->
<div class="px-modal hidden align-center" id="pds_types_form">
    <!-- Container -->
    <div class="modal-content w-max-480 bg-white radius-sm collection-form" data-type="pds_types">
        <!-- Headline -->
        <h4 class="fs-15 pdx-20 pdy-10 divider-b"><?php echo __('Add New Post Type', 'phenix'); ?></h4>
        <!-- Close Button -->
        <button class="modal-close far fa-times btn square ms-15 bg-transparent color-danger position-ab pos-top-0 pos-end-0"></button>
        <!-- Modal Body -->
        <div class="pdx-20 pdt-10">
            <!-- Description -->
            <p class="fs-14"><?php echo __('you can add/edit custom post types from the next form.', 'phenix'); ?></p>
            <!-- Grid -->
            <div class="row gpx-15 gpy-15">
                <!-- Column -->
                <div class="col-12 col-md-6">
                    <!-- Form Control -->
                    <div class="control-icon far fa-text">
                        <input type="text" name="label" class="form-control radius-sm fs-13" placeholder="<?php echo __('Label', 'phenix');?>" required>
                    </div>
                </div>
                <!-- Column -->
                <div class="col-12 col-md-6">
                    <!-- Form Control -->
                    <div class="control-icon far fa-link">
                        <input type="text" name="name" class="form-control radius-sm fs-13" placeholder="<?php echo __('Name', 'phenix');?>">
                    </div>
                </div>
                <!-- Column -->
                <div class="col-12 col-md-6">
                    <!-- Form Control -->
                    <div class="control-icon far fa-text">
                        <input type="text" name="label-singular" class="form-control radius-sm fs-13" placeholder="<?php echo __('singular Label', 'phenix');?>">
                    </div>
                </div>
                <!-- Column -->
                <div class="col-12 col-md-6">
                    <!-- Form Control -->
                    <div class="control-icon far fa-link">
                        <input type="text" name="singular" class="form-control radius-sm fs-13" placeholder="<?php echo __('Singular', 'phenix');?>">
                    </div>
                </div>
                <!-- Column -->
                <div class="col-12 col-md-6">
                    <!-- Form Control -->
                    <div class="control-icon far fa-image">
                        <input type="text" name="menu_icon" class="form-control radius-sm fs-13" placeholder="<?php echo __('Icon', 'phenix');?>" required>
                    </div>
                </div>
                <!-- Column -->
                <div class="col-12 col-md-6">
                    <!-- Form Control -->
                    <div class="control-icon far fa-file-alt">
                        <select name="template" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo __('Pattern Template' ,'phenix'); ?>">
                            <option value=""><?php echo __("Default", 'phenix'); ?></option>
                            <?php 
                                $block_patterns = pds_get_patterns();
                                foreach ($block_patterns as $pattern) {
                                    echo '<option value="'.$pattern['name'].'">' . $pattern['title'] . '</option>';
                                }
                            ?>
                        </select>
                    </div>
                </div>
                <!-- Column -->
                <div class="col-12">
                    <!-- Form Control -->
                    <div class="control-icon far fa-boxes mb-15">
                        <select name="taxonomies" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo __('Taxonomies', 'phenix');?>" multiple>
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
                        <label class="col-4 small option-control align-center-y align-between fs-15 weight-medium" data-type="checkbox">
                            <input type="checkbox" name="hierarchical" />
                            <span class="fas fa-check radius-circle tx-icon"><?php echo __("is Hierarchical", 'phenix'); ?></span>
                        </label>
                        <!-- Form Control -->
                        <label class="col-4 small option-control align-center-y align-between fs-15 weight-medium" data-type="checkbox">
                            <input type="checkbox" name="enable" checked />
                            <span class="fas fa-check radius-circle tx-icon"><?php echo __("Enable Type ?", 'phenix'); ?></span>
                        </label>
                    </div>
                    <!-- // Elements Group -->
                </div>
                <!-- // Column -->
            </div>
            <!-- // Grid -->
        </div>
        <!-- Modal Footer -->
        <div class="pdx-20 pdy-10 divider-t flexbox align-between">
            <button class="add-item btn success small radius-sm"><?php echo __('Save', 'phenix'); ?></button>
            <button class="modal-close btn danger small radius-sm"><?php echo __('Cancel', 'phenix'); ?></button>
        </div>
        <!-- // Modal Footer -->
    </div>
    <!-- Container -->
</div>
<!-- // Modal Component -->