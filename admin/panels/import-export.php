<?php
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;
?>
<!-- Layouts -->
<div class="row pdb-15">
    <!-- Phenix Blocks Options -->
    <div class="col-12 col-lg-6">
        <!-- Widget -->
        <div class="pd-25 bg-offwhite-primary radius-lg mb-30">
            <!-- Area Head -->
            <div class="mb-15">
                <h3 class="fs-18 mb-10 weight-medium"><?php echo esc_html__('Import/Export Phenix Options', "pds-blocks"); ?></h3>
                <p class="fs-16"><?php echo esc_html__('import and export phenix blocks options and data collection.', "pds-blocks"); ?></p>
            </div>
            <!-- Buttons -->
            <div class="flexbox px-group radius-sm fluid">
                <!-- Import File -->
                <label class="pds-data-importer-wrapper px-uploader fs-14 radius-sm col-6 tx-align-center" data-btn="<?php echo esc_html__('Import', "pds-blocks"); ?>">
                    <input type="file" id="import-pds-data-uploader" class="hidden" />
                </label>
                <!-- Button -->
                <button id="export-pds-data-btn" type="button" class="btn dark radius-sm col-6"><?php echo esc_html__('Export', "pds-blocks"); ?></button>
            </div>
        </div>
        <!-- // Widget -->
    </div>
    <!-- Column -->
    <div class="col-12 col-lg-6">
        <!-- Widget -->
        <div class="pd-25 bg-offwhite-primary radius-lg mb-30">
            <!-- Area Head -->
            <div class="mb-15">
                <h3 class="fs-18 mb-10 weight-medium"><?php echo esc_html__('Post Exporter', "pds-blocks"); ?></h3>
                <p class="fs-16"><?php echo esc_html__('export posts from any specific post-type or all of them as json file.', "pds-blocks"); ?></p>
            </div>
            <!-- Posts Exporter -->
            <div class="row posts-exporter-wrapper">
                <!-- Form Control -->
                <div class="col-12 col-md-7">
                    <div class="control-icon fas fa-files">
                        <select name="post_type" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo esc_html__('Post Type', "pds-blocks");?>">
                            <option value="all"><?php echo esc_html__('All Post Types', "pds-blocks"); ?></option>
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
                <!-- Button -->
                <div class="col-12 col-md-5">
                    <button id="pds-posts-exporter" type="button" class="btn dark radius-sm fluid"><?php echo esc_html__('Export', "pds-blocks"); ?></button>
                </div>
            </div>
            <!-- // Posts Extractor -->
        </div>
        <!-- // Widget -->
    </div>
    <!-- Posts Manager -->
    <div class="col-12 col-lg-6">
        <!-- Widget -->
        <div class="pd-25 bg-offwhite-primary radius-lg mb-30">
            <!-- Area Head -->
            <div class="col-12 mb-15">
                <h3 class="fs-18 mb-10 weight-medium"><?php echo esc_html__('Posts Import', "pds-blocks"); ?></h3>
                <p class="fs-16"><?php echo esc_html__('import new content from a json file.', "pds-blocks"); ?></p>
            </div>
            <!-- Post Importer -->
            <div class="col-12">
                <!-- Import File -->
                <label class="pds-data-importer-wrapper px-uploader fs-14 radius-sm tx-align-center" data-btn="<?php echo esc_html__('Import Posts from Json File', "pds-blocks"); ?>">
                    <input type="file" id="import-posts-uploader" class="hidden" />
                </label>
            </div>
            <!-- // Post Importer -->
        </div>
        <!-- // Widget -->
    </div>
    <!-- Column -->
    <div class="col-12 col-lg-6">
        <!-- Widget -->
        <div class="pd-25 bg-offwhite-primary radius-lg mb-30">
            <!-- Area Head -->
            <h3 class="fs-16 mb-10 weight-medium mb-15"><?php echo esc_html__('Posts Remover', "pds-blocks"); ?></h3>
            <p class="fs-16"><?php echo esc_html__('you can remove all posts from a specific post type.', "pds-blocks"); ?></p>
            <!-- Posts Remover -->
            <div class="row posts-remover-wrapper">
                <!-- Form Control -->
                <div class="col-12 col-md-7">
                    <div class="control-icon fas fa-files">
                        <select name="post_type" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo esc_html__('Post Type', "pds-blocks");?>">
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
                <!-- Button -->
                <div class="col-12 col-md-5">
                    <button id="pds-posts-remover" type="button" class="btn dark radius-sm fluid"><?php echo esc_html__('Remove All Posts', "pds-blocks"); ?></button>
                </div>
            </div>
            <!-- // Posts Remover -->
        </div>
        <!-- // Widget -->
    </div>
    <!-- Column -->
</div>
<!-- // Layouts -->