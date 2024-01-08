<?php
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;
?>

<!-- Layouts -->
<div class="flexbox align-between align-center-y mb-20">
    <!-- Area Head -->
    <div class="col">
        <h3 class="fs-16 mb-0 weight-medium"><?php echo __('Metaboxes List', "pds-blocks"); ?></h3>
        <p class="fs-14"><?php echo __('in here you can manage the metaboxes created by phenix-blocks.', "pds-blocks"); ?></p>
    </div>
    <!-- Button -->
    <button type="button" class="btn success radius-sm" data-modal="pds_metabox_form"><?php echo __('Add New', "pds-blocks"); ?></button>
</div>
<!-- metabox List -->
<ul class="reset-list border-1 border-solid border-alpha-15 radius-sm fs-14 pds_metabox_list" data-type="pds_metabox">
    <li class="list-head flexbox divider-b align-center-y pdy-10 pds-15 pde-10 mb-0 weight-medium bg-offwhite-smoke radius-sm radius-top">
        <span class="col-3"><?php echo __('Label', "pds-blocks"); ?></span>
        <span class="col-3 w-max-200"><?php echo __('Name', "pds-blocks"); ?></span>
        <span class="w-100 pds-15"><?php echo __('Fields', "pds-blocks"); ?></span>
        <span class="w-150"><?php echo __('Data', "pds-blocks"); ?></span>
        <span class="col col-3"><?php echo __('Locations', "pds-blocks"); ?></span>
    </li>
</ul>
<!-- Pagination Buttons -->
<div class="flexbox align-between pdt-15">
    <button type="button" class="btn small gray radius-sm border-1 border-solid border-alpha-15 prev-btn">Previous Page</button>
    <button type="button" class="btn small primary radius-sm border-1 border-solid border-alpha-15 next-btn">Next Page</button>
</div>
<!-- /// Pagination Buttons -->

<!-- Modal Component -->
<div class="px-modal hidden align-center" id="pds_metabox_form">
    <!-- Container -->
    <div class="modal-content w-max-640 bg-white radius-sm collection-form" data-type="pds_metabox">
        <!-- Headline -->
        <h4 class="fs-15 pdx-20 pdy-10 divider-b"><?php echo __('Add New Metabox', "pds-blocks"); ?></h4>
        <!-- Close Button -->
        <button class="modal-close far fa-times btn square ms-15 bg-transparent color-danger position-ab pos-top-0 pos-end-0"></button>
        <!-- Modal Body -->
        <div class="pdx-20 pdt-10">
            <!-- Description -->
            <p class="fs-14"><?php echo __('you can add/edit metaboxes from the next form.', "pds-blocks"); ?></p>
            <!-- Grid -->
            <div class="row gpx-15 gpy-15">
                <!-- Column -->
                <div class="col-12 col-md-6">
                    <label class="fs-13 mb-5 weight-bold"><?php echo __("Group Title", "pds-blocks"); ?></label>
                    <!-- Form Control -->
                    <div class="control-icon far fa-text">
                        <input type="text" name="label" class="form-control radius-sm fs-13" placeholder="<?php echo __('Label', "pds-blocks");?>" required>
                    </div>
                </div>
                <!-- Column -->
                <div class="col-12 col-md-6">
                    <label class="fs-13 mb-5 weight-bold"><?php echo __("Group Name/Key", "pds-blocks"); ?></label>
                    <!-- Form Control -->
                    <div class="control-icon far fa-link">
                        <input type="text" name="name" class="form-control radius-sm fs-13" placeholder="<?php echo __('Name', "pds-blocks");?>">
                    </div>
                </div>
                <!-- Column -->
                <div class="col-12">
                    <label class="fs-13 mb-5 weight-bold"><?php echo __("Data Types", "pds-blocks"); ?></label>
                    <!-- Form Control -->
                    <div class="control-icon far fa-cube">
                        <select name="datatype" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo __('Data Location', "pds-blocks");?>" multiple>
                            <option value="post_types" selected>Post Type</option>
                            <option value="taxonomies">Taxonomy</option>
                        </select>
                    </div>
                </div>
                <!-- Column -->
                <div class="col post-types-select">
                    <!-- Form Control -->
                    <div class="control-icon fas fa-map-marker-alt">
                        <select name="post_types" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo __('Post Types', "pds-blocks");?>" multiple>
                            <?php
                                $post_types = get_post_types(array('public'=> true), 'objects');
                                foreach ($post_types as $post_type) {
                                    if ($post_type->name !== "attachment") {
                                        echo '<option value="'.$post_type->name.'">' . $post_type->labels->name . '</option>';
                                    }
                                };
                            ?>
                        </select>
                    </div>
                </div>
                <!-- Column -->
                <div class="col taxonomies-select">
                    <!-- Form Control -->
                    <div class="control-icon far fa-map-marker-alt">
                        <select name="taxonomies" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo __('Taxonomies', "pds-blocks");?>" multiple>
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
                    <!-- // Form Control -->
                </div>
                <!-- // Column -->

                <!-- Column -->
                <div class="col-12 px-form-repeater" data-fields-key="fields">
                    <!-- Headline -->
                    <h5 class="fs-13 mb-10 weight-bold flexbox align-center-y align-between bg-offwhite-primary border-1 border-alpha-05 pd-10 pds-20 radius-sm">
                        <?php echo __("Custom Fields List", "pds-blocks"); ?>
                        <button type="button" class="btn tiny primary square radius-sm px-repeater-add fas fa-plus"></button>
                    </h5>
                    <!-- Repeater Items -->
                    <div class="px-repeater-items gpy-15">
                        <!-- Repeater Row -->
                        <div class="px-form-repeater-fields px-group flow-nowrap" data-item-key="0">
                            <!-- Form Control -->
                            <div class="col-4 control-icon far fa-text">
                                <input type="text" name="label" class="form-control radius-sm fs-13" placeholder="<?php echo __('Label', "pds-blocks");?>" required>
                            </div>
                            <!-- Form Control -->
                            <div class="col-4 control-icon far fa-link">
                                <input type="text" name="name" class="form-control radius-sm fs-13" placeholder="<?php echo __('Name', "pds-blocks");?>">
                            </div>
                            <!-- Form Control -->
                            <div class="col-4 control-icon far fa-pen-field">
                                <select name="type" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo __('Data Type', "pds-blocks");?>">
                                    <option value="text">Text</option>
                                    <option value="date">Date</option>
                                    <option value="time">Time</option>
                                    <option value="email">Email</option>
                                    <option value="number">Numbers</option>
                                    <option value="textarea">Textarea</option>
                                    <!-- <option value="select">Select</option> -->
                                    <!-- <option value="media-file">Media File</option> -->
                                    <!-- <option value="multi-select">Multi-Select</option> -->
                                    <!-- <option value="option-radio">Radio button</option> -->
                                    <option value="option-checkbox">Checkbox</option>
                                    <option value="option-switch">Switch button</option>
                                </select>
                            </div>
                            <!-- // Form Control -->
                        </div>
                        <!-- // Repeater Row -->
                    </div>
                    <!-- // Repeater Items -->
                </div>
                <!-- // Column -->
            </div>
            <!-- // Grid -->
        </div>
        <!-- Modal Footer -->
        <div class="pdx-20 pdy-10 divider-t flexbox align-between">
            <button class="add-item btn success small radius-sm"><?php echo __('Save', "pds-blocks"); ?></button>
            <button class="modal-close btn danger small radius-sm"><?php echo __('Cancel', "pds-blocks"); ?></button>
        </div>
        <!-- // Modal Footer -->
    </div>
    <!-- Container -->
</div>
<!-- // Modal Component -->