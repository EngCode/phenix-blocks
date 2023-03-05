<?php
    //===> Phenix Main Fonts <===//
    $fonts_list = [
        "somar-rounded" => "Somar Rounded",
        "somar-sans" => "Somar Sans",
        "somar-sans" => "Somar Sans",
        "neo-sans-w23" => "Neo Sans W23",
        "din-next-lt-arabic" => "DIN Next LT Arabic",
        "tarek-v" => "Tarek V",
        // "biosans" => "Bio Sans [EN]",
    ];

    $current_fonts = [
        "icon" => get_option("pds_icon_font"),
        "primary" => get_option("pds_primary_font"),
        "secondary" => get_option("pds_secondary_font"),
    ]
?>
<!-- Grid -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-md-6 divider-e" style="max-width: 420px">
        <!-- Control Label -->
        <label class="mb-5 weight-medium"><?php echo __("Primary Font", "phenix"); ?></label>
        <!-- Form Control -->
        <div class="control-icon far fa-font mb-5">
            <select name="pds_primary_font" value="<?php echo get_option("pds_primary_font");?>" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo __('Primary Font' ,'phenix'); ?>">
                <option value=""><?php echo __("Default", 'phenix'); ?></option>
                <?php 
                    foreach ($fonts_list as $key => $value) {
                        $is_selected = "";
                        if ($current_fonts["primary"] === "key") { $is_selected = "selected"; }
                        echo '<option value="'.$key.'" '. $is_selected .'>' . $value . '</option>';
                    }
                ?>
            </select>
        </div>
        <p class="control-hint mb-30"><?php echo __("Select a Primary Font for all Headlines and Titles.","phenix");?></p>
        
        <!-- Control Label -->
        <label class="mb-5 weight-medium"><?php echo __("Secondary Font", "phenix"); ?></label>
        <!-- Form Control -->
        <div class="control-icon far fa-font mb-5">
            <select name="pds_secondary_font" value="<?php echo get_option("pds_secondary_font");?>" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo __('Secondary Font' ,'phenix'); ?>">
                <option value="default"><?php echo __("Default", 'phenix'); ?></option>
                <?php 
                    foreach ($fonts_list as $key => $value) {
                        $is_selected = "";
                        if ($current_fonts["primary"] === "key") { $is_selected = "selected"; }
                        echo '<option value="'.$key.'" '. $is_selected .'>' . $value . '</option>';
                    }
                ?>
            </select>
        </div>
        <p class="control-hint"><?php echo __("Select a Secondary Font for all other text on the website.","phenix");?></p>

        <!-- Control Label -->
        <label class="mb-5 weight-medium"><?php echo __("Icons Font", "phenix"); ?></label>
        <!-- Form Control -->
        <div class="control-icon far fa-font mb-5">
            <select name="pds_icon_font" value="<?php echo get_option("pds_icon_font");?>" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo __('Icons Font' ,'phenix'); ?>">
                <option value="fontawesome-5-free"><?php echo __("Font Awesome 5.14 Free", 'phenix'); ?></option>
                <option value="fontawesome-5-pro"><?php echo __("Font Awesome 5.14 Pro", 'phenix'); ?></option>
                <option value="fontawesome-6-free"><?php echo __("Font Awesome 6.3 Free", 'phenix'); ?></option>
                <option value="fontawesome-6-pro"><?php echo __("Font Awesome 6.3 Pro", 'phenix'); ?></option>
            </select>
        </div>
        <p class="control-hint"><?php echo __("Select a Icons Font for all icons for the design system", "phenix"). "<span class='color-danger'>" .__(" you need a license to run the (PRO) version of the supported fonts..","phenix"). "</span>";?></p>

        <?php if (get_option("pds_icon_font") === "fontawesome-5-pro" || get_option("pds_icon_font") === "fontawesome-6-pro") : ?>
        <!-- Control Label -->
        <label class="mb-5 weight-medium"><?php echo __("Icons Font License", "phenix"); ?></label>
        <!-- Form Control -->
        <div class="control-icon far fa-lock mb-5">
            <input type="text" name="pds_icon_font_key" class="form-control radius-sm fs-13" placeholder="<?php echo __('license key', 'phenix');?>" required>
        </div>
        <p class="control-hint"><?php echo __("please enter the license key for the (PRO) version of the selected icon font.", "phenix");?></p>
        <?php endif; ?>
    </div>
    <!-- Column -->
    <div class="col-12 col-md-4 border-reset">
        <?php
            echo pds_toggle_controls(array(
                array(
                    "name"  => 'pds_admin_style',
                    "title" => 'Admin UI Re-Style',
                ),
                array(
                    "name"  => 'adminbar_disable',
                    "title" => 'Disable Admin-Bar for Users',
                ),
                array(
                    "name"  => 'pds_gfonts',
                    "title" => 'Enable Google Fonts',
                ),
            ));
        ?>
    </div>
    <!-- // Column -->
</div>
<!-- // Grid -->