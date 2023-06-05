<?php if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif; ?>
<!-- Control Label -->
<label class="mb-5 weight-medium"><?php echo __("Primary Font", "phenix"); ?> (RTL)</label>
<!-- Form Control -->
<div class="control-icon far fa-text mb-5">
    <select name="pds_fonts[primary_rtl]" value="<?php echo $current_fonts["primary_rtl"];?>" class="px-select form-control radius-sm fs-13" data-search="1" data-placeholder="<?php echo __('Primary Font' ,'phenix'); ?>">
        <?php 
            foreach ($fonts_list as $key => $value) {
                $is_selected = "";
                if ($current_fonts["primary_rtl"] === $key) { $is_selected = "selected"; }
                echo '<option value="'.$key.'" '. $is_selected .'>' . $value . '</option>';
            }
            //===> for Google Fonts <===//
            if (get_option("pds_gfonts") === "on") {
                foreach ($google_fonts as $value) {
                    $is_selected = "";
                    if ($current_fonts["primary_rtl"] === $value) { $is_selected = "selected"; }
                    echo '<option value="'.$value.'" '. $is_selected .'>' . $value . '</option>';
                }
            }
        ?>
    </select>
</div>
<p class="control-hint"><?php echo __("Select a Primary Font for all Headlines and Titles.","phenix");?></p>

<!-- Control Label -->
<label class="mb-5 weight-medium"><?php echo __("Secondary Font", "phenix"); ?> (RTL)</label>
<!-- Form Control -->
<div class="control-icon far fa-font mb-5">
    <select name="pds_fonts[secondary_rtl]" value="<?php echo $current_fonts["secondary_rtl"];?>" class="px-select form-control radius-sm fs-13" data-search="1" data-placeholder="<?php echo __('Secondary Font' ,'phenix'); ?>">
        <?php 
            foreach ($fonts_list as $key => $value) {
                $is_selected = "";
                if ($current_fonts["secondary_rtl"] === $key) { $is_selected = "selected"; }
                echo '<option value="'.$key.'" '. $is_selected .'>' . $value . '</option>';
            }
            //===> for Google Fonts <===//
            if (get_option("pds_gfonts") === "on") {
                foreach ($google_fonts as $value) {
                    $is_selected = "";
                    if ($current_fonts["secondary_rtl"] === $value) { $is_selected = "selected"; }
                    echo '<option value="'.$value.'" '. $is_selected .'>' . $value . '</option>';
                }
            }
        ?>
    </select>
</div>
<p class="control-hint"><?php echo __("Select a Secondary Font for all other text on the website.","phenix");?></p>