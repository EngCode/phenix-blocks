<!-- Grid -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-md-4 border-reset border-end-1 border-alpha-10 border-solid">
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="head_cleaner" <?php if (get_option('head_cleaner')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span>Header Optimizer</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="jquery_remove" <?php if (get_option('jquery_remove')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span>Remove jQuery</span>
        </label>
        <!-- Divider -->
        <hr />
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="comments_css" <?php if (get_option('comments_css')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span>Clean Comments CSS</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="adminbar_css" <?php if (get_option('adminbar_css')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span>Clean Admin-Bar CSS</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="adminbar_disable" <?php if (get_option('adminbar_disable')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span>Disable Admin-Bar for Users</span>
        </label>
        <!-- // Option Control -->
    </div>
    <!-- Column -->
    <div class="col-12 col-md-4 border-reset border-end-1 border-alpha-10 border-solid">
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="wpc7_rm_scripts" <?php if (get_option('wpc7_rm_scripts')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span>CF7 Remove JS</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="wpc7_rm_styles" <?php if (get_option('wpc7_rm_styles')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span>CF7 Remove CSS</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="wpc7_cleaner" <?php if (get_option('wpc7_cleaner')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span>CF7 HTML Cleaner</span>
        </label>
        <!-- Divider -->
        <hr />
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="newsletter_css" <?php if (get_option('newsletter_css')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span>Remove [Newsletter] CSS</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="blocks_optimizer" <?php if (get_option('blocks_optimizer')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span>GB Blocks Optimizer</span>
        </label>
        <!-- // Option Control -->
    </div>
    <!-- // Column -->
</div>
<!-- // Grid -->