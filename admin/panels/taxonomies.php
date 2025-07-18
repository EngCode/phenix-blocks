<?php
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

    $args = array(
        'public'   => true,
        '_builtin' => false,
    );
    $post_types = get_post_types( $args, 'names', 'and'); 
?>

<!-- Layouts -->
<div class="flexbox align-between align-center-y mb-20">
    <!-- Area Head -->
    <div class="col">
        <h3 class="fs-16 mb-0 weight-medium"><?php echo esc_html__('Taxonomies List', "pds-blocks"); ?></h3>
        <p class="fs-14"><?php echo esc_html__('in here you can manage the taxonomies created by phenix-blocks.', "pds-blocks"); ?></p>
    </div>
    <!-- Buttons -->
    <div class="flexbox px-group radius-sm">
        <!-- Import File -->
        <label class="pds-data-importer-wrapper px-uploader fs-14 radius-md col-auto w-100 tx-align-center" data-btn="<?php echo esc_html__('Import', "pds-blocks"); ?>">
            <input type="file" class="hidden pds-data-importer" data-target="pds_taxonomies" />
        </label>
        <!-- Button -->
        <button data-target="pds_taxonomies" type="button" class="pds-data-exporter btn dark radius-sm"><?php echo esc_html__('Export', "pds-blocks"); ?></button>
        <!-- Button -->
        <button type="button" class="btn success radius-sm" data-modal="pds_taxonomies_form"><?php echo esc_html__('Add New', "pds-blocks"); ?></button>
    </div>
</div>
<!-- taxonomies List -->
<ul class="reset-list border-1 border-solid border-alpha-15 radius-sm fs-14 pds_taxonomies_list" data-type="pds_taxonomies">
    <li class="list-head flexbox divider-b align-center-y pdy-10 pds-15 pde-10 mb-0 weight-medium bg-offwhite-smoke radius-sm radius-top">
        <span class="col-4"><?php echo esc_html__('Label', "pds-blocks"); ?></span>
        <span class="col-3"><?php echo esc_html__('Name', "pds-blocks"); ?></span>
        <span class="col-2"><?php echo esc_html__('Types', "pds-blocks"); ?></span>
    </li>
</ul>
<!-- Pagination Buttons -->
<div class="flexbox align-between pdt-15 hidden data-pagination">
    <button type="button" data-page="next" class="btn small primary radius-sm border-1 border-solid border-alpha-15 next-btn">Next Page</button>
    <span class="pagination-info fs-14 weight-bold">1/1</span>
    <button type="button" data-page="previous" class="btn small gray radius-sm border-1 border-solid border-alpha-15 prev-btn">Previous Page</button>
</div>
<!-- /// Pagination Buttons -->

<!-- Modal Component -->
<div class="px-modal hidden align-center" id="pds_taxonomies_form">
    <!-- Container -->
    <div class="modal-content w-max-480 bg-white radius-sm collection-form" data-type="pds_taxonomies">
        <!-- Headline -->
        <h4 class="fs-15 pdx-20 pdy-10 divider-b"><?php echo esc_html__('Add New Taxonomy', "pds-blocks"); ?></h4>
        <!-- Close Button -->
        <button class="modal-close far fa-times btn square ms-15 bg-transparent color-danger position-ab pos-top-0 pos-end-0"></button>
        <!-- Modal Body -->
        <div class="pdx-20 pdt-10">
            <!-- Description -->
            <p class="fs-14"><?php echo esc_html__('you can add/edit taxonomies from the next form.', "pds-blocks"); ?></p>
            <!-- Grid -->
            <div class="row gpx-15 gpy-15">
                <!-- Column -->
                <div class="col-12 col-md-6">
                    <!-- Form Control -->
                    <div class="control-icon far fa-text">
                        <input type="text" name="label" class="form-control radius-sm fs-13" placeholder="<?php echo esc_html__('Label', "pds-blocks");?>">
                    </div>
                </div>
                <!-- Column -->
                <div class="col-12 col-md-6">
                    <!-- Form Control -->
                    <div class="control-icon far fa-link">
                        <input type="text" name="name" class="form-control radius-sm fs-13" placeholder="<?php echo esc_html__('Name', "pds-blocks");?>">
                    </div>
                </div>
                <!-- Column -->
                <div class="col-12 col-md-6">
                    <!-- Form Control -->
                    <div class="control-icon far fa-text">
                        <input type="text" name="label-singular" class="form-control radius-sm fs-13" placeholder="<?php echo esc_html__('singular Label', "pds-blocks");?>">
                    </div>
                </div>
                <!-- Column -->
                <div class="col-12 col-md-6">
                    <!-- Form Control -->
                    <div class="control-icon far fa-link">
                        <input type="text" name="singular" class="form-control radius-sm fs-13" placeholder="<?php echo esc_html__('Singular', "pds-blocks");?>">
                    </div>
                </div>
                <!-- Column -->
                <div class="col-12">
                    <!-- Form Control -->
                    <div class="control-icon far fa-cube mb-15">
                        <select name="post_types" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo esc_html__('Post Types', "pds-blocks");?>" multiple>
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
                    <!-- Elements Group -->
                    <div class="flexbox align-between align-center-y">
                        <!-- Form Control -->
                        <label class="small option-control align-center-y align-between fs-15 weight-medium" data-type="checkbox">
                            <input type="checkbox" name="hierarchical" checked />
                            <span class="fas fa-check radius-circle tx-icon"><?php echo esc_html__("Is Hierarchical ?", "pds-blocks"); ?></span>
                        </label>
                        <!-- Form Control -->
                        <label class="small option-control align-center-y align-between fs-15 weight-medium" data-type="checkbox">
                            <input type="checkbox" name="enable" checked />
                            <span class="fas fa-check radius-circle tx-icon"><?php echo esc_html__("Enable once added ?", "pds-blocks"); ?></span>
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
            <button class="add-item btn success small radius-sm"><?php echo esc_html__('Save', "pds-blocks"); ?></button>
            <button class="modal-close btn danger small radius-sm"><?php echo esc_html__('Cancel', "pds-blocks"); ?></button>
        </div>
        <!-- // Modal Footer -->
    </div>
    <!-- Container -->
</div>
<!-- // Modal Component -->