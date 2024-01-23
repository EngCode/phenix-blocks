<?php
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;
    //====> Shared Options <====//
    $args = array(
        'public'   => true,
        '_builtin' => false,
    );
 
    $output = 'names'; // names or objects, note names is the default
    $operator = 'and'; // 'and' or 'or'
 
    $post_types = get_post_types( $args, $output, $operator ); 
    $args2 = array('post_type' => 'page');
    $pages = get_pages($args2); 
?>
<!-- Layouts -->
<div class="flexbox align-between align-center-y mb-20">
    <!-- Area Head -->
    <div class="col">
        <h3 class="fs-16 mb-0 weight-medium"><?php echo __('Patterns List', "pds-blocks"); ?></h3>
        <p class="fs-14"><?php echo __('in here you can manage the patterns created by phenix-blocks.', "pds-blocks"); ?></p>
    </div>
    <!-- Buttons -->
    <div class="flexbox px-group radius-sm">
        <!-- Import File -->
        <label class="px-uploader fs-14 radius-md col-auto w-100 tx-align-center" data-btn="<?php echo __('Import', "pds-blocks"); ?>">
            <input type="file" id="import-pds-patterns-uploader" class="hidden" />
        </label>
        <!-- Button -->
        <button id="export-pds-patterns-btn" type="button" class="btn dark radius-sm"><?php echo __('Export', "pds-blocks"); ?></button>
        <!-- Button -->
        <button type="button" class="btn success radius-sm" data-modal="block_patterns_form"><?php echo __('Add New', "pds-blocks"); ?></button>
    </div>
</div>

<!-- Button Uploader -->
<style>
    #pds-patterns .px-group .px-uploader {--text-size: inherit; border: 0 none;}
    #pds-patterns .px-group .px-uploader::before {display: none;}
    #pds-patterns .px-group .px-uploader::after {text-align: center; width: 100%; }
</style>

<!-- metabox List -->
<ul class="reset-list border-1 border-solid border-alpha-15 radius-sm fs-14 block_patterns_list" data-type="block_patterns">
    <li class="list-head flexbox divider-b align-center-y pdy-10 pds-15 pde-10 mb-0 weight-medium bg-offwhite-smoke radius-sm radius-top">
        <span class="col w-max-260"><?php echo __('Label', "pds-blocks"); ?></span>
        <span class="col w-max-260"><?php echo __('Name', "pds-blocks"); ?></span>
        <span class="col w-max-260"><?php echo __('Categories', "pds-blocks"); ?></span>
    </li>
</ul>
<!-- Pagination Buttons -->
<div class="flexbox align-between pdt-15 hidden data-pagination">
    <button type="button" data-page="next" class="btn small primary radius-sm border-1 border-solid border-alpha-15 next-btn">Next Page</button>
    <button type="button" data-page="previous" class="btn small gray radius-sm border-1 border-solid border-alpha-15 prev-btn">Previous Page</button>
</div>
<!-- /// Pagination Buttons -->

<!-- Modal Component -->
<div class="px-modal hidden align-center" id="block_patterns_form">
    <!-- Container -->
    <div class="modal-content w-max-480 bg-white radius-sm collection-form" data-type="block_patterns">
        <!-- Headline -->
        <h4 class="fs-15 pdx-20 pdy-10 divider-b"><?php echo __('Add New Pattern', "pds-blocks"); ?></h4>
        <!-- Close Button -->
        <button class="modal-close far fa-times btn square ms-15 bg-transparent color-danger position-ab pos-top-0 pos-end-0"></button>
        <!-- Modal Body -->
        <div class="pdx-20 pdt-10">
            <!-- Description -->
            <p class="fs-14"><?php echo __('you can add/edit gutenberg block patterns from the next form.', "pds-blocks"); ?></p>
            <!-- Grid -->
            <div class="row gpx-15 gpy-15">
                <!-- Column -->
                <div class="col-12 col-md-6">
                    <!-- Form Control -->
                    <div class="control-icon far fa-text">
                        <input type="text" name="title" class="form-control radius-sm fs-13" placeholder="<?php echo __('Label', "pds-blocks");?>">
                    </div>
                </div>
                <!-- Column -->
                <div class="col-12 col-md-6">
                    <!-- Form Control -->
                    <div class="control-icon far fa-link">
                        <input type="text" name="name" class="form-control radius-sm fs-13" placeholder="<?php echo __('Name', "pds-blocks");?>">
                    </div>
                </div>
                <!-- Column -->
                <div class="col-12">
                    <!-- Form Control -->
                    <div class="control-icon far fa-arrows-alt-h mb-15">
                        <input type="number" name="width" class="form-control radius-sm fs-13" placeholder="<?php echo __('Width', "pds-blocks");?>">
                    </div>
                    <!-- Form Control -->
                    <div class="control-icon far fa-folder mb-15">
                        <select name="category" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo __('Categories' ,'phenix'); ?>" multiple>
                            <option value="phenix"><?php echo __("Phenix", "pds-blocks"); ?></option>
                            <option value="elements"><?php echo __("Elements", "pds-blocks"); ?></option>
                            <option value="cards"><?php echo __("Cards", "pds-blocks"); ?></option>
                            <option value="sections"><?php echo __("Sections", "pds-blocks"); ?></option>
                            <option value="footers"><?php echo __("Footers", "pds-blocks"); ?></option>
                            <option value="headers"><?php echo __("Headers", "pds-blocks"); ?></option>
                            <option value="pages"><?php echo __("General Pages", "pds-blocks"); ?></option>
                            <option value="single"><?php echo __("Single Pages", "pds-blocks"); ?></option>
                        </select>
                    </div>
                    <!-- Form Control -->
                    <div class="control-icon far fa-file large">
                        <textarea name="content" class="form-control large radius-sm fs-13 mb-15" placeholder="<?php echo __('Content', "pds-blocks");?>"></textarea>
                    </div>
                </div>
            </div>
            <!-- // Grid -->
        </div>
        <!-- Modal Footer -->
        <div class="pdx-20 pdy-10 divider-t flexbox align-between">
            <button class="add-item btn primary small radius-sm"><?php echo __('Save', "pds-blocks"); ?></button>
            <button class="modal-close btn danger small radius-sm"><?php echo __('Cancel', "pds-blocks"); ?></button>
        </div>
        <!-- // Modal Footer -->
    </div>
    <!-- Container -->
</div>
<!-- // Modal Component -->