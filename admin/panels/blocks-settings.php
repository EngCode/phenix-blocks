<?php
    //====> Shared Options <====//
    $assets_url = plugin_dir_url(__FILE__);
    $icons_url = str_replace('admin/panels', 'assets/img/blocks/core/', $assets_url);
?>
<!-- Grid -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-md-3 border-reset border-end-1 border-alpha-10 border-solid">
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="container_block" <?php if (get_option('container_block')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>container.svg" class="icon x2"> Phenix/Container</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="logo_block" <?php if (get_option('logo_block')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>site-logo.svg" class="icon x2"> Phenix/Logo</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="navigation_block" <?php if (get_option('navigation_block')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>navigation.svg" class="icon x2"> Navigation Menu</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="button_block" <?php if (get_option('button_block')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>button.svg" class="icon x2"> PDS Button</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="row_block" <?php if (get_option('row_block')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>grid.svg" class="icon x2"> Grid/Row</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="column_block" <?php if (get_option('column_block')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>columns.svg" class="icon x2"> Grid/Column</span>
        </label>
    </div>
    <!-- Column -->
    <div class="col-12 col-md-3 border-reset border-end-1 border-alpha-10 border-solid">
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="head_block" <?php if (get_option('head_block')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>header.svg" class="icon x2"> Page Head</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="query_block" <?php if (get_option('query_block')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>query-loop.svg" class="icon x2"> Phenix/Query</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="taxonomies_list_block" <?php if (get_option('taxonomies_list_block')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>latest-posts.svg" class="icon x2"> Taxonomies List</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="theme_part_block" <?php if (get_option('theme_part_block')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>theme-part.svg" class="icon x2"> Theme Part</span>
        </label>
        <!-- // Option Control -->
    </div>
    <!-- // Column -->
</div>
<!-- // Grid -->