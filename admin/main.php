<!-- Phenix Admin -->
<div class="pdx-30 pdy-50 w-max-1100">
    <!-- Page Title -->
    <h1 class="weight-light h3 mb-30 tx-uppercase" style="opacity:0.25;color:black;">Phenix Blocks Settings</h1>

    <!-- Setting Wrapper -->
    <form method="post" action="options.php" id="pds-form" class="pdx-30 pdt-10 pdb-30 radius-md bg-white px-tabs bx-shadow-dp-x" data-active="0" data-navigation=".tabs-navigation">
        <?php
            //===> Hidden Inputs Handler for WP Options Register <===//
            settings_fields('pds-admin');
            do_settings_sections('pds-admin');
        ?>
        <!-- Tabs Navigation -->
        <ul class="tabs-navigation reset-list flexbox fs-15 mb-15 border-reset border-bottom-1 border-solid border-alpha-10">
            <li data-tab="pds-optimization" class="pdy-10 lineheight-100 me-30 tx-icon far fa-rocket">Optimization</li>
            <li data-tab="pds-guten-blocks" class="pdy-10 lineheight-100 me-30 tx-icon far fa-layer-group">Default Blocks</li>
            <li data-tab="pds-blocks" class="pdy-10 lineheight-100 me-30 tx-icon fas fa-layer-group">Phenix Blocks</li>
        </ul>
        <!-- Panels Group -->
        <div class="tabs-panels pdb-15">
            <!-- Panel -->
            <div class="tab-panel" id="pds-optimization">
                <!-- Grid -->
                <div class="row">
                    <!-- Column -->
                    <div class="col-12 col-md-6 w-max-480 border-reset border-end-1 border-alpha-10 border-solid">
                        <!-- Option Control -->
                        <label class="small pds-10 option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
                            <input type="checkbox" name="pds_admin_style" <?php if (get_option('pds_admin_style')) { echo 'checked'; } ?>>
                            <span class="switch"></span>
                            <span>Phenix Admin Style</span>
                        </label>
                        <!-- Option Control -->
                        <label class="small pds-10 option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
                            <input type="checkbox" name="jquery_remove" <?php if (get_option('jquery_remove')) { echo 'checked'; } ?>>
                            <span class="switch"></span>
                            <span>Remove jQuery</span>
                        </label>
                        <!-- Option Control -->
                        <label class="small pds-10 option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
                            <input type="checkbox" name="head_cleaner" <?php if (get_option('head_cleaner')) { echo 'checked'; } ?>>
                            <span class="switch"></span>
                            <span>Header Optimizer</span>
                        </label>
                        <!-- Option Control -->
                        <label class="small pds-10 option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
                            <input type="checkbox" name="adminbar_disable" <?php if (get_option('adminbar_disable')) { echo 'checked'; } ?>>
                            <span class="switch"></span>
                            <span>Remove Admin-Bar for Users</span>
                        </label>
                        <!-- Option Control -->
                        <label class="small pds-10 option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
                            <input type="checkbox" name="adminbar_css" <?php if (get_option('adminbar_css')) { echo 'checked'; } ?>>
                            <span class="switch"></span>
                            <span>Remove Admin-Bar CSS</span>
                        </label>
                        <!-- Option Control -->
                        <label class="small pds-10 option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
                            <input type="checkbox" name="comments_css" <?php if (get_option('comments_css')) { echo 'checked'; } ?>>
                            <span class="switch"></span>
                            <span>Remove Comments CSS</span>
                        </label>
                        <!-- Option Control -->
                        <label class="small pds-10 option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
                            <input type="checkbox" name="newsletter_css" <?php if (get_option('newsletter_css')) { echo 'checked'; } ?>>
                            <span class="switch"></span>
                            <span>Remove [Newsletter] CSS</span>
                        </label>
                        <!-- // Option Control -->
                    </div>
                    <!-- // Column -->
                </div>
                <!-- // Grid -->
            </div>
            <!-- Panel -->
            <div class="tab-panel" id="pds-guten-blocks">This Tab Number 2 with ID of #tab-2</div>
            <!-- // Panel -->
        </div>
        <!-- // Panels Group -->
        <input type="submit" name="submit" id="submit" class="btn primary w-min-120 radius-sm fs-13 weight-medium tx-uppercase small" value="Save Changes">
    </form>
    <!-- // Setting Wrapper -->
</div>
<!-- // Phenix Admin -->

<script defer>
    document.addEventListener('DOMContentLoaded', ready => {
        //====> Tabs <====//
        Phenix('.px-tabs').tabs();
    });
</script>
