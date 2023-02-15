<!-- Phenix Admin -->
<div class="pds-10 pde-30 pde-lg-50 pds-lg-30 pdy-50">
    <!-- Page Title -->
    <h1 class="weight-bold h3 mb-0 tx-uppercase"><?php echo $page_title; ?></h1>
    <p class="fs-17 mb-30"><?php echo $page_description; ?></p>

    <!-- Setting Wrapper -->
    <form method="post" action="options.php" id="pds-form" class="pds-form pdb-20 radius-md bg-white px-tabs bx-shadow-dp-x" data-hash="1" data-active="0" data-navigation=".tabs-navigation">
        <?php
            //===> Hidden Inputs Handler for WP Options Register <===//
            settings_fields($form_page);
            do_settings_sections($form_page);
        ?>
        <!-- Tabs Navigation -->
        <ul class="tabs-navigation reset-list px-group fs-15 mb-15 divider-b radius-md radius-top-start bg-alpha-05">
            <?php
                foreach ($tabs_list as $tab) {
                    echo '<li data-tab="'.$tab['slug'].'" class="btn light btn-icon mb-0 fs-14 weight-bold '.$tab['icon'].'">'.$tab['title'].'</li>';
                }
            ?>
            <!-- Empty -->
            <li></li>
        </ul>
        <!-- Panels Group -->
        <div class="tabs-panels pdx-20 <?php if (isset($submit_button) && $submit_button) : ?>pdb-15 divider-b<?php endif; ?> mb-15">
            <!-- Panels -->
            <?php
                foreach ($tabs_list as $tab) {
                    $content = $tab['content'];
                    //===> Panel Start <===//
                    echo '<div class="tab-panel pdx-10" id="'.$tab['slug'].'">';
                    //===> Panel Description <===//
                    if (isset($tab['description'])) {
                        echo '<p class="mb-10 fs-15">'.$tab['description'].'</p>';
                    }
                    //===> Panel End <===//
                    echo $content().'</div>';
                }
            ?>
            <!-- // Panels -->
        </div>
        <!-- // Panels Group -->

        <!-- // Panels Group -->
        <?php if (isset($submit_button) && $submit_button) : ?>
            <input type="submit" name="submit" id="submit" class="ms-25 btn primary w-min-120 radius-sm fs-13 weight-medium tx-uppercase small" value="<?php echo __('Save Changes', 'phenix'); ?>">
        <?php endif; ?>
    </form>
    <!-- // Setting Wrapper -->
</div>
<!-- // Phenix Admin -->