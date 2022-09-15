<!-- Phenix Admin -->
<div class="pds-10 pde-30 pde-lg-50 pds-lg-30 pdy-50">
    <!-- Page Title -->
    <h1 class="weight-bold h3 mb-10 tx-uppercase"><?php echo $page_title; ?></h1>
    <p class="mb-30"><?php echo $page_description; ?></p>

    <!-- Setting Wrapper -->
    <form method="post" action="options.php" id="pds-form" class="pdx-20 pdt-10 pdb-20 radius-md bg-white px-tabs bx-shadow-dp-x" data-hash="1" data-active="0" data-navigation=".tabs-navigation">
        <?php
            //===> Hidden Inputs Handler for WP Options Register <===//
            settings_fields('pds-admin');
            do_settings_sections('pds-admin');
        ?>
        <!-- Tabs Navigation -->
        <ul class="tabs-navigation reset-list flexbox fs-15 mb-15 border-reset border-bottom-1 border-solid border-alpha-10">
            <?php
                foreach ($tabs_list as $tab) {
                    echo '<li data-tab="'.$tab['slug'].'" class="pdy-10 lineheight-100 me-30 tx-icon '.$tab['icon'].'">'.$tab['title'].'</li>';
                }
            ?>
        </ul>
        <!-- Panels Group -->
        <div class="tabs-panels pdb-15 divider-b mb-15">
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
        <input type="submit" name="submit" id="submit" class="btn primary w-min-120 radius-sm fs-13 weight-medium tx-uppercase small" value="Save Changes">
    </form>
    <!-- // Setting Wrapper -->
</div>
<!-- // Phenix Admin -->