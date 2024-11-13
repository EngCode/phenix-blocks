<?php
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;
?>
<!-- Layouts -->
<div class="row pdb-15">
    <!-- Phenix Blocks Options -->
    <div class="col-12 col-lg-6">
        <!-- Area Head -->
        <div class="mb-15">
            <h3 class="fs-18 mb-10 weight-medium"><?php echo esc_html__('Import/Export Phenix Options', "pds-blocks"); ?></h3>
            <p class="fs-16"><?php echo esc_html__('from this two buttons you can import and export all phenix blocks options and data collection.', "pds-blocks"); ?></p>
        </div>
        <!-- Buttons -->
        <div class="flexbox px-group radius-sm fluid mb-30">
            <!-- Import File -->
            <label class="pds-data-importer-wrapper px-uploader fs-14 radius-sm col-6 tx-align-center" data-btn="<?php echo esc_html__('Import', "pds-blocks"); ?>">
                <input type="file" id="import-pds-data-uploader" class="hidden" />
            </label>
            <!-- Button -->
            <button id="export-pds-data-btn" type="button" class="btn dark radius-sm col-6"><?php echo esc_html__('Export', "pds-blocks"); ?></button>
        </div>

        <!-- Posts Extractor -->
        <div class="mb-15">
            <h3 class="fs-18 mb-10 weight-medium"><?php echo esc_html__('Post Exporter', "pds-blocks"); ?></h3>
            <p class="fs-16"><?php echo esc_html__('from the next options you can export the posts as json file, by default it only exports the ids and titles, you need to choose other things to export it alongside.', "pds-blocks"); ?></p>
        </div>

        <div class="row posts-exporter-wrapper">
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
                <button id="pds-posts-exporter" type="button" class="btn dark radius-sm fluid"><?php echo esc_html__('Export', "pds-blocks"); ?></button>
            </div>
        </div>
        <!-- // Posts Extractor -->
    </div>
    <!-- Posts Manager -->
    <div class="col-12 col-lg-6">
        <!-- Area Head -->
        <div class="col-12 mb-15">
            <h3 class="fs-18 mb-10 weight-medium"><?php echo esc_html__('Posts Manager', "pds-blocks"); ?></h3>
            <p class="fs-16"><?php echo esc_html__('in the next section you can import new content from a json file, or delete posts from any post-type or extract any posts informations.', "pds-blocks"); ?></p>
        </div>
        <!-- Post Importer -->
        <div class="col-12 mb-30">
            <!-- Import File -->
            <label class="pds-data-importer-wrapper px-uploader fs-14 radius-sm tx-align-center" data-btn="<?php echo esc_html__('Import Posts from Json File', "pds-blocks"); ?>">
                <input type="file" id="import-posts-uploader" class="hidden" />
            </label>
        </div>
        <!-- Posts Remover -->
        <h3 class="fs-16 mb-10 weight-medium mb-15"><?php echo esc_html__('Posts Remover', "pds-blocks"); ?></h3>
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
</div>
<!-- // Layouts -->

<!-- Demo Templates -->
<div class="pdy-10 hidden">
    <!-- Title -->
    <h3 class="fs-18 mb-0"><?php echo esc_html__("Import Theme Demo", "pds-blocks"); ?></h3>
    <p class="fs-14"><?php echo esc_html__('you can also choose one of the current Theme Demos to startup you website.', "pds-blocks"); ?></p>
    <!-- Grid -->
    <div class="row">
        <!-- Item -->
        <div class="col-12 col-md-6 col-lg-3">
            <a href="#" class="px-media radius-md radius-top" data-src="https://placehold.co/600x600" data-size="1x1"></a>
            <div class="pd-15 bg-alpha-05 radius-md radius-bottom tx-align-center">
                <h4 class="fs-14 mb-0 lineheight-100">Demo Title</h4>
            </div>
        </div>
        <!-- // Item -->
    </div>
    <!-- // Grid -->
</div>
<!-- // Demo Templates -->