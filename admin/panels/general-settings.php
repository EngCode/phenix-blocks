<!-- Grid -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-md-4 border-reset border-end-1 border-alpha-10 border-solid">
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_admin_style" <?php if (get_option('pds_admin_style')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span>Admin UI Re-Style</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_gfonts" <?php if (get_option('pds_gfonts')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span>Support Google Fonts</span>
        </label>
        <!-- // Option Control -->
    </div>
    <!-- // Column -->
</div>
<!-- // Grid -->