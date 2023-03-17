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
<!-- Note : -->
<p class="pd-15 bg-offwhite-danger"><?php echo __("This is a new Feature still under Development please use it carefully.", "phenix");?></p>

<!-- Grid Layout -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-lg-5 pdy-10 me-lg-20">
        <!-- Area Title -->
        <h3 class="fs-16 mb-0 weight-medium"><?php echo __('Add New Meta', 'phenix'); ?></h3>
        <p class="mb-20 fs-14"><?php echo __('you can add/edit dynamic php theme-part block metaboxes for each template so you can customize that theme part.', 'phenix'); ?></p>

        <!-- Grid -->
        <div class="row gpx-15 gpy-15 collection-form" data-type="templates-meta">
            <!-- Column -->
            <div class="col-12">
                <!-- Form Control -->
                <label class="mb-5 fs-13"><?php echo __('Theme Part', 'phenix'); ?></label>
                <div class="control-icon far fa-link mb-15">
                    <?php if (function_exists("pds_get_theme_parts_select")) :
                        pds_get_theme_parts_select();
                    endif; ?>
                </div>
                <!-- Form Control -->
                <label class="mb-5 fs-13"><?php echo __('Support Features', 'phenix'); ?></label>
                <div class="control-icon far fa-puzzle-piece mb-15">
                    <select name="features" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo __('Add Feature' ,'phenix'); ?>" multiple>
                        <option value="style"><?php echo __("Styles", 'phenix'); ?></option>
                        <option value="spacing"><?php echo __("Spacing", 'phenix'); ?></option>
                        <option value="typography"><?php echo __("Typography", 'phenix'); ?></option>
                    </select>
                </div>
                <!-- Form Control -->
                <label class="mb-5 fs-13"><?php echo __('Custom Options', 'phenix'); ?></label>
                <div class="control-icon far fa-file large">
                    <textarea name="options" class="form-control large radius-sm fs-13 mb-15" placeholder="<?php echo __('option:type', 'phenix');?>"></textarea>
                </div>
                <!-- Form Button -->
                <button type="button" class="add-item btn primary radius-sm small ms-auto display-block"><?php echo __('Add Meta', 'phenix'); ?></button>
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
                <h3 class="fs-16 mb-0 weight-medium"><?php echo __('Meta List', 'phenix'); ?></h3>
                <p class="fs-14"><?php echo __('in here you can manage the meta created by phenix-blocks for each theme-part you have in your theme.', 'phenix'); ?></p>
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