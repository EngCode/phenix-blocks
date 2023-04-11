<!-- Column -->
<div class="col-12 col-md-6" style="max-width: 420px">
    <!-- Control Label -->
    <label class="mb-5 weight-medium"><?php echo __("Primary Font", "phenix"); ?></label>
    <!-- Form Control -->
    <div class="control-icon far fa-text mb-5">
        <select name="pds_primary_font" value="<?php echo get_option("pds_primary_font");?>" class="px-select form-control radius-sm fs-13" data-search="1" data-placeholder="<?php echo __('Primary Font' ,'phenix'); ?>">
            <?php 
                foreach ($fonts_list as $key => $value) {
                    $is_selected = "";
                    if ($current_fonts["primary"] === $key) { $is_selected = "selected"; }
                    echo '<option value="'.$key.'" '. $is_selected .'>' . $value . '</option>';
                }
                //===> for Google Fonts <===//
                if (get_option("pds_gfonts") === "on") {
                    foreach ($google_fonts as $value) {
                        $is_selected = "";
                        if ($current_fonts["secondary"] === $value) { $is_selected = "selected"; }
                        echo '<option value="'.$value.'" '. $is_selected .'>' . $value . '</option>';
                    }
                }
            ?>
        </select>
    </div>
    <p class="control-hint"><?php echo __("Select a Primary Font for all Headlines and Titles.","phenix");?></p>

    <!-- Control Label -->
    <label class="mb-5 weight-medium"><?php echo __("Secondary Font", "phenix"); ?></label>
    <!-- Form Control -->
    <div class="control-icon far fa-font mb-5">
        <select name="pds_secondary_font" value="<?php echo get_option("pds_secondary_font");?>" class="px-select form-control radius-sm fs-13" data-search="1" data-placeholder="<?php echo __('Secondary Font' ,'phenix'); ?>">
            <?php 
                foreach ($fonts_list as $key => $value) {
                    $is_selected = "";
                    if ($current_fonts["secondary"] === $key) { $is_selected = "selected"; }
                    echo '<option value="'.$key.'" '. $is_selected .'>' . $value . '</option>';
                }
                //===> for Google Fonts <===//
                if (get_option("pds_gfonts") === "on") {
                    foreach ($google_fonts as $value) {
                        $is_selected = "";
                        if ($current_fonts["secondary"] === $value) { $is_selected = "selected"; }
                        echo '<option value="'.$value.'" '. $is_selected .'>' . $value . '</option>';
                    }
                }
            ?>
        </select>
    </div>
    <p class="control-hint"><?php echo __("Select a Secondary Font for all other text on the website.","phenix");?></p>

    <!-- Control Label -->
    <label class="mb-5 weight-medium"><?php echo __("Icons Font", "phenix"); ?></label>
    <!-- Form Control -->
    <div class="control-icon far fa-star-half-alt mb-5">
        <select name="pds_icon_font" value="<?php echo get_option("pds_icon_font");?>" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo __('Icons Font' ,'phenix'); ?>">
            <?php 
                foreach ($fonts_list_icon as $key => $value) {
                    $is_selected = "";
                    if ($current_fonts["icon"] === $key) { $is_selected = "selected"; }
                    echo '<option value="'.$key.'" '. $is_selected .'>' . $value . '</option>';
                }
            ?>
        </select>
    </div>
    <p class="control-hint"><?php echo __("Select a Icons Font for all icons for the design system", "phenix"). "<br /><span class='fs-12 color-danger'>" .__("Note: you need a license to run the (PRO) version.","phenix"). "</span>";?></p>

    <?php if (str_contains($current_fonts['icon'], "-pro")) : ?>
        <!-- Control Label -->
        <label class="mb-5 weight-medium"><?php echo __("Icons Font License", "phenix"); ?></label>
        <!-- Form Control -->
        <div class="control-icon far fa-lock mb-5">
            <input type="text" name="pds_icon_font_key" class="form-control radius-sm fs-13" placeholder="<?php echo __('license key', 'phenix');?>">
        </div>
        <p class="control-hint"><?php echo __("please enter the license key for the (PRO) version.", "phenix");?></p>
    <?php endif; ?>
</div>