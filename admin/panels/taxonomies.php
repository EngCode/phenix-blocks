<?php
    $args = array(
        'public'   => true,
        '_builtin' => false,
    );
    $post_types = get_post_types( $args, 'names', 'and'); 
?>
<!-- Grid Layout -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-lg-5 pdy-10 me-lg-20">
        <!-- Area Title -->
        <h3 class="fs-16 mb-0 weight-medium"><?php echo __('Add New Taxonomy', 'phenix'); ?></h3>
        <p class="mb-20 fs-14"><?php echo __('you can add/edit taxonomies from the next form.', 'phenix'); ?></p>
        
        <!-- Grid -->
        <div class="row gpx-15 gpy-15 collection-form" data-type="taxonomies">
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
            <div class="col-12">
                <!-- Form Control -->
                <div class="control-icon far fa-cube mb-15">
                    <select name="post_types[]" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo __('Post Types', 'phenix');?>" multiple>
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
                        <input type="checkbox" name="enable" checked />
                        <span class="fas fa-check radius-circle tx-icon"><?php echo __("Enable this Taxonomy once added ?", 'phenix'); ?></span>
                    </label>
                    <!-- Form Control -->
                    <button type="button" class="add-item btn primary radius-sm small ms-auto display-block"><?php echo __('Add Taxonomy', 'phenix'); ?></button>
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
                <h3 class="fs-16 mb-0 weight-medium"><?php echo __('Taxonomies List', 'phenix'); ?></h3>
                <p class="fs-14"><?php echo __('in here you can manage the taxonomies created by phenix-blocks.', 'phenix'); ?></p>
            </div>
        </div>
        <!-- taxonomies List -->
        <ul class="reset-list border-1 border-solid border-alpha-15 radius-sm fs-14 taxonomies-list">
            <li class="list-head flexbox divider-b align-center-y pdy-10 pds-15 pde-10 mb-0 weight-medium bg-offwhite-smoke radius-sm radius-top">
                <span class="col-4"><?php echo __('Label', 'phenix'); ?></span>
                <span class="col-3"><?php echo __('Name', 'phenix'); ?></span>
                <span class="col-2"><?php echo __('Types', 'phenix'); ?></span>
            </li>
        </ul>
    </div>
</div>
<!-- // Grid Layout -->