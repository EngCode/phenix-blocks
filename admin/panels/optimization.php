<?php if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif; ?>
<!-- Grid -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-md-4 divider-e">
        <?php
            echo pds_toggle_controls(array(
                array(
                    "name"  => 'head_cleaner',
                    "title" => 'Header Optimizer',
                ),
                array(
                    "name"  => 'jquery_remove',
                    "title" => 'Remove jQuery',
                ),
                array(
                    "name"  => 'blocks_optimizer',
                    "title" => 'GB Blocks Optimizer',
                ),
                array(
                    "name"  => 'comments_css',
                    "title" => 'Clean Comments CSS',
                ),
                array(
                    "name"  => 'adminbar_css',
                    "title" => 'Clean Admin-Bar CSS',
                ),
                array(
                    "name"  => 'adminbar_disable',
                    "title" => 'Disable Admin-Bar for Users',
                ),
            ));
        ?>
    </div>
    <!-- Column -->
    <div class="col-12 col-md-4 divider-e">
        <?php
            echo pds_toggle_controls(array(
                array(
                    "name"  => 'wpc7_rm_scripts',
                    "title" => 'CF7 Remove JS',
                ),
                array(
                    "name"  => 'wpc7_rm_styles',
                    "title" => 'CF7 Remove CSS',
                ),
                array(
                    "name"  => 'wpc7_cleaner',
                    "title" => 'CF7 HTML Cleaner',
                ),
                array(
                    "name"  => 'newsletter_css',
                    "title" => 'Remove [Newsletter] CSS',
                ),
            ));
        ?>
    </div>
    <!-- // Column -->
</div>
<!-- // Grid -->