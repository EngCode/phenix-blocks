<?php
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;
?>
<!-- Layouts -->
<div class="flexbox align-center align-center-y pdb-15">
    <!-- Area Head -->
    <div class="col-12 tx-align-center mb-15">
        <h3 class="fs-18 mb-10 weight-medium"><?php echo __('Import/Export Phenix Options', "pds-blocks"); ?></h3>
        <p class="fs-16"><?php echo __('from this two buttons you can import and export all phenix blocks options and data collection.', "pds-blocks"); ?></p>
    </div>
    <!-- Buttons -->
    <div class="flexbox px-group radius-sm w-250">
        <!-- Import File -->
        <label class="pds-data-importer-wrapper px-uploader fs-14 radius-md col-6 tx-align-center" data-btn="<?php echo __('Import', "pds-blocks"); ?>">
            <input type="file" id="import-pds-data-uploader" class="hidden" />
        </label>
        <!-- Button -->
        <button id="export-pds-data-btn" type="button" class="btn dark radius-sm col-6"><?php echo __('Export', "pds-blocks"); ?></button>
    </div>
</div>
<!-- // Layouts -->

<!-- Demo Templates -->
<div class="pdy-10">
    <!-- Title -->
    <h3 class="fs-18 mb-0"><?php echo __("Import Theme Demo", "pds-blocks"); ?></h3>
    <p class="fs-14"><?php echo __('you can also choose one of the current Theme Demos to startup you website.', "pds-blocks"); ?></p>
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