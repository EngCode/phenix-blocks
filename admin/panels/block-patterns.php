<?php
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
<!-- Grid Layout -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-lg-5 pdy-10 me-lg-20">
        <!-- Area Title -->
        <h3 class="fs-16 mb-0 weight-medium"><?php echo __('Add New Pattern', 'phenix'); ?></h3>
        <p class="mb-20 fs-14"><?php echo __('you can add/edit gutenberg block patterns from the next form.', 'phenix'); ?></p>

        <!-- Grid -->
        <div class="row gpx-15 gpy-15 collection-form" data-type="block-pattern">
            <!-- Column -->
            <div class="col-12 col-md-6">
                <!-- Form Control -->
                <div class="control-icon far fa-text">
                    <input type="text" name="title" class="form-control radius-sm fs-13" placeholder="<?php echo __('Label', 'phenix');?>" required>
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
            <div class="col-12">
                <!-- Form Control -->
                <div class="control-icon far fa-folder mb-15">
                    <select name="category" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo __('Categories' ,'phenix'); ?>" multiple>
                        <option value="phenix"><?php echo __("Phenix", 'phenix'); ?></option>
                        <option value="headers"><?php echo __("Headers", 'phenix'); ?></option>
                        <option value="footers"><?php echo __("Footers", 'phenix'); ?></option>
                        <option value="elements"><?php echo __("Elements", 'phenix'); ?></option>
                        <option value="sections"><?php echo __("Sections", 'phenix'); ?></option>
                        <option value="pages"><?php echo __("General Pages", 'phenix'); ?></option>
                        <option value="single"><?php echo __("Single Pages", 'phenix'); ?></option>
                    </select>
                </div>
                <!-- Form Control -->
                <div class="control-icon far fa-file large">
                    <textarea name="content" class="form-control large radius-sm fs-13 mb-15" placeholder="<?php echo __('Content', 'phenix');?>" required></textarea>
                </div>
                <!-- Form Button -->
                <button type="button" class="add-item btn primary radius-sm small ms-auto display-block"><?php echo __('Add Pattern', 'phenix'); ?></button>
            </div>
        </div>
        <!-- // Grid -->
    </div>
    <!-- Column -->
    <div class="col col-lg-6 pdy-10">
        <!-- Layouts -->
        <div class="flexbox align-between align-center-y mb-20">
            <!-- Area Head -->
            <div class="col">
                <h3 class="fs-16 mb-0 weight-medium"><?php echo __('Patterns List', 'phenix'); ?></h3>
                <p class="fs-14"><?php echo __('in here you can manage the patterns created by phenix-blocks.', 'phenix'); ?></p>
            </div>
        </div>
        <!-- metabox List -->
        <ul class="reset-list border-1 border-solid border-alpha-15 radius-sm fs-14 patterns-list">
            <li class="list-head flexbox divider-b align-center-y pdy-10 pds-15 pde-10 mb-0 weight-medium bg-offwhite-smoke radius-sm radius-top">
                <span class="col-4"><?php echo __('Label', 'phenix'); ?></span>
                <span class="col-3"><?php echo __('Name', 'phenix'); ?></span>
            </li>
        </ul>
    </div>
</div>
<!-- // Grid Layout -->