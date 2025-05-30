<?php
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

    //===> Phenix Main Fonts <===//
    $fonts_list = [
        "tarek-v" => "Tarek V",
        "bio-sans" => "Bio Sans [EN]",
        "somar-sans" => "Somar Sans",
        "somar-rounded" => "Somar Rounded",
        "ara-hamah-al-horra" => "Ara Hamah AlHorra",
        "tactic-sans" => "Tactic Sans",
        "howdy-party" => "Howdy Party",
        "dubai" => "Dubai",
        "ge-ss-two" => "GE SS Two",
        "palsam-arabic" => "Palsam Arabic",
        "palsam-arabic-cursive" => "Palsam Arabic Cursive",
    ];

    //===> Icon Fonts <===//
    $fonts_list_icon = [
        "ui-icons" => "UI Icons",
        "fontawesome-5" => "Font Awesome v5",
        "fontawesome-6" => "Font Awesome v6",
    ];

    //===> Get Current Fonts <===//
    $current_fonts = (array) get_option("pds_fonts");
    $current_fonts['icon'] = (array) get_option("pds_icon_font");

    //===> Get Google Fonts <===//
    if (get_option("pds_gfonts") === "on") {
        //===> Get Google Fonts Json File <===//
        $json_data = wp_remote_get("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC3GNi2OCpFOJnJfeJZvzHjISPg__fqlUI");
        $json_array = json_decode(wp_remote_retrieve_body($json_data));
        //===> Convert to Array <===//
        if($json_array) {
            foreach ($json_array->items as $key => $value) {
                $fonts_list[$value->family] = $value->family;
            }
        }
    }
?>
<!-- Grid -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-md-4 border-reset divider-s">
        <div class="pd-20 border-1 border-alpha-15 border-dashed bg-offwhite-primary radius-sm">
            <!-- Control Label -->
            <label class="mb-10 weight-medium fs-14"><?php echo esc_html__("Primary Font", "phenix"); ?> (LTR)</label>
            <!-- Form Control -->
            <div class="control-icon far fa-text mb-5">
                <select name="pds_fonts[primary]" value="<?php echo esc_attr($current_fonts["primary"]);?>" class="px-select form-control radius-sm fs-13" data-search="1" data-placeholder="<?php echo esc_html__('Primary Font' ,'phenix'); ?>">
                    <?php 
                        foreach ($fonts_list as $key => $value) {
                            $is_selected = "";
                            if ($current_fonts["primary"] === $key) { $is_selected = "selected"; }
                            echo '<option value="'.$key.'" '. $is_selected .'>' . $value . '</option>';
                        }
                    ?>
                </select>
            </div>
            <p class="control-hint mb-20 color-gray fs-12"><?php echo esc_html__("Select a Primary Font for all Headlines and Titles.","phenix");?></p>
    
            <!-- Control Label -->
            <label class="mb-10 weight-medium fs-14"><?php echo esc_html__("Secondary Font", "phenix"); ?> (LTR)</label>
            <!-- Form Control -->
            <div class="control-icon far fa-font mb-5">
                <select name="pds_fonts[secondary]" value="<?php echo esc_attr($current_fonts["secondary"]);?>" class="px-select form-control radius-sm fs-13" data-search="1" data-placeholder="<?php echo esc_html__('Secondary Font' ,'phenix'); ?>">
                    <?php 
                        foreach ($fonts_list as $key => $value) {
                            $is_selected = "";
                            if ($current_fonts["secondary"] === $key) { $is_selected = "selected"; }
                            echo '<option value="'.$key.'" '. $is_selected .'>' . $value . '</option>';
                        }
                    ?>
                </select>
            </div>
            <p class="control-hint color-gray fs-12"><?php echo esc_html__("Select a Secondary Font for all other text on the website.","phenix");?></p>
    
            <!-- Control Label -->
            <label class="mb-10 weight-medium fs-14"><?php echo esc_html__("Style Font", "phenix"); ?> (LTR)</label>
            <!-- Form Control -->
            <div class="control-icon far fa-font mb-5">
                <select name="pds_fonts[style]" class="px-select form-control radius-sm fs-13" data-search="1" data-placeholder="<?php echo esc_html__('Style Font' ,'phenix'); ?>">
                    <?php 
                        foreach ($fonts_list as $key => $value) {
                            $is_selected = "";
                            if (isset($current_fonts["style"]) && $current_fonts["style"] === $key || $current_fonts["primary"] === $key) { $is_selected = "selected"; }
                            echo '<option value="'.$key.'" '. $is_selected .'>' . $value . '</option>';
                        }
                    ?>
                </select>
            </div>
            <p class="control-hint color-gray fs-12"><?php echo esc_html__("Select a Style Font for special cases.","phenix");?></p>
        </div>
    </div>
    <!-- Column -->
    <div class="col-12 col-md-4 border-reset divider-s">
        <div class="pd-20 border-1 border-alpha-15 border-dashed bg-offwhite-primary radius-sm">
            <!-- Control Label -->
            <label class="mb-10 weight-medium fs-14"><?php echo esc_html__("Primary Font", "phenix"); ?> (RTL)</label>
            <!-- Form Control -->
            <div class="control-icon far fa-text mb-5">
                <select name="pds_fonts[primary_rtl]" value="<?php echo esc_attr($current_fonts["primary_rtl"]);?>" class="px-select form-control radius-sm fs-13" data-search="1" data-placeholder="<?php echo esc_html__('Primary Font' ,'phenix'); ?>">
                    <?php 
                        foreach ($fonts_list as $key => $value) {
                            $is_selected = "";
                            if ($current_fonts["primary_rtl"] === $key) { $is_selected = "selected"; }
                            echo '<option value="'.$key.'" '. $is_selected .'>' . $value . '</option>';
                        }
                    ?>
                </select>
            </div>
            <p class="control-hint mb-20 color-gray fs-12"><?php echo esc_html__("Select a Primary Font for all Headlines and Titles.","phenix");?></p>
    
            <!-- Control Label -->
            <label class="mb-10 weight-medium fs-14"><?php echo esc_html__("Secondary Font", "phenix"); ?> (RTL)</label>
            <!-- Form Control -->
            <div class="control-icon far fa-font mb-5">
                <select name="pds_fonts[secondary_rtl]" value="<?php echo esc_attr($current_fonts["secondary_rtl"]);?>" class="px-select form-control radius-sm fs-13" data-search="1" data-placeholder="<?php echo esc_html__('Secondary Font' ,'phenix'); ?>">
                    <?php 
                        foreach ($fonts_list as $key => $value) {
                            $is_selected = "";
                            if ($current_fonts["secondary_rtl"] === $key) { $is_selected = "selected"; }
                            echo '<option value="'.$key.'" '. $is_selected .'>' . $value . '</option>';
                        }
                    ?>
                </select>
            </div>
            <p class="control-hint color-gray fs-12"><?php echo esc_html__("Select a Secondary Font for all other text on the website.","phenix");?></p>
            
            <!-- Control Label -->
            <label class="mb-10 weight-medium fs-14"><?php echo esc_html__("Style Font", "phenix"); ?> (RTL)</label>
            <!-- Form Control -->
            <div class="control-icon far fa-font mb-5">
                <select name="pds_fonts[style_rtl]" class="px-select form-control radius-sm fs-13" data-search="1" data-placeholder="<?php echo esc_html__('Style Font' ,'phenix'); ?>">
                    <?php 
                        foreach ($fonts_list as $key => $value) {
                            $is_selected = "";
                            if (isset($current_fonts["style_rtl"]) && $current_fonts["style_rtl"] === $key || $current_fonts["primary_rtl"] === $key) { $is_selected = "selected"; }
                            echo '<option value="'.$key.'" '. $is_selected .'>' . $value . '</option>';
                        }
                    ?>
                </select>
            </div>
            <p class="control-hint color-gray fs-12"><?php echo esc_html__("Select a Style Font for special cases.","phenix");?></p>
        </div>
    </div>
    <!-- Column -->
    <div class="col-12 col-md-4 border-reset divider-s">
        <!-- Control Label -->
        <label class="mb-10 weight-medium fs-14"><?php echo esc_html__("Icons Font", "phenix"); ?></label>
        <!-- Form Control -->
        <div class="control-icon far fa-star-half-alt mb-15">
            <select name="pds_icon_font" value="<?php echo esc_attr(get_option("pds_icon_font"));?>" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo esc_html__('Icons Font' ,'phenix'); ?>">
                <?php 
                    foreach ($fonts_list_icon as $key => $value) {
                        $is_selected = "";
                        if ($key == "fontawesome-6") { $is_selected = "selected"; }
                        echo '<option value="'.$key.'" '. $is_selected .'>' . $value . '</option>';
                    }
                ?>
            </select>
        </div>
        <!-- Divider -->
        <div class="pdt-10 mb-10 divider-b"></div>
        <?php
            echo pds_toggle_controls(array(
                array(
                    "name"  => 'pds_gfonts',
                    "title" => 'Enable Google Fonts',
                )
            ));
        ?>
    </div>
    <!-- // Column -->
</div>
<!-- // Grid -->