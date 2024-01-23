<?php
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;
?>
<!-- Layouts -->
<div class="flexbox align-between align-center-y mb-20 divider-b pdb-15">
    <!-- Area Head -->
    <div class="col">
        <h3 class="fs-16 mb-0 weight-medium"><?php echo __('Import/Export Phenix Options', "pds-blocks"); ?></h3>
        <p class="fs-14"><?php echo __('in this simple page you can Import and Export Phenix Design System Data', "pds-blocks"); ?></p>
    </div>
    <!-- Buttons -->
    <div class="flexbox px-group radius-sm">
        <!-- Import File -->
        <label class="px-uploader fs-14 radius-md col-auto w-100 tx-align-center" data-btn="<?php echo __('Import Options', "pds-blocks"); ?>">
            <input type="file" id="import-pds-data-uploader" class="hidden" />
        </label>
        <!-- Button -->
        <button id="export-pds-data-btn" type="button" class="btn success radius-sm"><?php echo __('Export', "pds-blocks"); ?></button>
    </div>
</div>
<!-- // Layouts -->

<!-- Button Uploader -->
<style>
    #pds-import-export .px-group .px-uploader {--text-size: inherit;}
    #pds-import-export .px-group .px-uploader::before {display: none;}
    #pds-import-export .px-group .px-uploader::after {text-align: center; }
</style>

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