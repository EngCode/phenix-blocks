<?php
/**
 * Phenix Blocks Admin Controls
 * @since Phenix WP 1.0
 * @return void
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//====> Default Options <====//
if (!function_exists('pds_add_admin_page')) :
    /**
     * Register Default Options for Phenix Blocks
     * @since Phenix Blocks 1.0
     * @return void
    */

    function pds_add_admin_page($page_title, $page_description, $form_page, $tabs_list, $submit_button) {
        //===> Start Data <===//
        $template_markup = '';
        ob_start();

        //===> Get the File <===//
?>
<!-- Phenix Admin -->
<div class="bg-white pds-admin-page px-tabs" data-hash="1" data-active="0" data-navigation=".tabs-navigation">
    <!-- Setting Wrapper -->

    <?php if (isset($submit_button) && $submit_button) : ?> <form method="post" action="options.php" id="pds-form" class="pds-form"> <?php else:?> <div> <?php endif; ?>
        <?php
            //===> Hidden Inputs Handler for WP Options Register <===//
            settings_fields($form_page);
            do_settings_sections($form_page);
        ?>
        <!-- Tabs Navigation -->
        <ul class="tabs-navigation reset-list fs-15 divider-b flexbox bg-alpha-05">
            <?php foreach ($tabs_list as $tab) { ?>
                <!-- Tab Button -->
                <li data-tab="<?php echo esc_attr($tab['slug']);?>" class="pdy-10 pdx-25 bg-white mb-0 fs-14 weight-bold tx-align-center divider-e">
                    <i class="display-block fs-22 <?php echo esc_attr($tab['icon']);?>"></i>
                    <?php echo esc_html($tab['title']); ?>
                </li>
            <?php }; ?>
            <!-- Empty -->
            <li></li>
        </ul>
        <!-- Panels Group -->
        <div class="container-fluid tabs-panels pd-30 pd-xl-50">
            <!-- Panels -->
            <?php
                foreach ($tabs_list as $tab) {
                    $content = $tab['content'];
                    //===> Panel Start <===//
                    echo '<div class="tab-panel mb-15" id="'.$tab['slug'].'">';
                    //===> Panel Description <===//
                    if (isset($tab['description'])) {
                        echo '<p class="mb-10 fs-15">'.$tab['description'].'</p>';
                    }
                    //===> Panel End <===//
                    echo $content().'</div>';
                }
            ?>
            <!-- // Panels -->

            <!-- // Panels Group -->
            <?php if (isset($submit_button) && $submit_button) : ?>
                <input type="submit" name="submit" id="submit" class="btn primary w-min-120 radius-sm fs-13 weight-medium tx-uppercase" value="<?php echo esc_attr(__('Save Changes', 'phenix')); ?>">
            <?php endif; ?>
        </div>
        <!-- // Panels Group -->
        <?php if (isset($submit_button) && $submit_button) : ?>
        </form>
        <?php else:?>
            </div>
        <?php endif; ?>
    <!-- // Setting Wrapper -->
</div>
<!-- // Phenix Admin -->
<?php

        //===> Stop Data <===//
        $template_output = ob_get_clean();
        $template_markup .= $template_output;
        return "{$template_markup}";
    }
endif;