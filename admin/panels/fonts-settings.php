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
        "ping-ar" => "Ping AR + LT",
    ];

    //===> Icon Fonts <===//
    $fonts_list_icon = [
        "none" => "None (Disable Icon Font)",
        "ui-icons" => "UI Icons (Phenix Default)",
        "fontawesome-5-free" => "Font Awesome v5 Free",
        "fontawesome-5-pro" => "Font Awesome v5 Pro",
        "fontawesome-6-free" => "Font Awesome v6 Free",
        "fontawesome-6-pro" => "Font Awesome v6 Pro",
        "fontawesome-7-free" => "Font Awesome v7 Free",
        "fontawesome-7-pro" => "Font Awesome v7 Pro",
    ];

    //===> Get Current Fonts <===//
    $current_fonts = (array) get_option("pds_fonts");
    $current_fonts['icon'] = (array) get_option("pds_icon_font");

    //===> Get Google Fonts <===//
    if (get_option("pds_gfonts") === "on") {
        //===> Check Cache <===//
        $cached_fonts = get_transient('pds_google_fonts_list');
        
        if (false !== $cached_fonts && is_array($cached_fonts)) {
            //===> Use Cached Fonts <===//
            $fonts_list = array_merge($fonts_list, $cached_fonts);
        } else {
            //===> Get Google Fonts API Key <===//
            $api_key = get_option('pds_gfonts_api_key') ?: 'AIzaSyC3GNi2OCpFOJnJfeJZvzHjISPg__fqlUI';
            //===> Fetch from Google Fonts API <===//
            $json_data = wp_remote_get("https://www.googleapis.com/webfonts/v1/webfonts?key=" . urlencode($api_key));
            
            if (!is_wp_error($json_data)) {
                $json_array = json_decode(wp_remote_retrieve_body($json_data));
                //===> Convert to Array and Cache <===//
                if ($json_array && isset($json_array->items)) {
                    $google_fonts = array();
                    foreach ($json_array->items as $key => $value) {
                        $google_fonts[$value->family] = $value->family;
                    }
                    //===> Cache for 7 Days <===//
                    set_transient('pds_google_fonts_list', $google_fonts, 7 * DAY_IN_SECONDS);
                    //===> Merge with Local Fonts <===//
                    $fonts_list = array_merge($fonts_list, $google_fonts);
                }
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
            <label class="mb-10 weight-medium fs-14"><?php echo esc_html__("Primary Font","pds-blocks"); ?> (LTR)</label>
            <!-- Form Control -->
            <div class="control-icon fas fa-text mb-5">
                <select name="pds_fonts[primary]" value="<?php echo esc_attr($current_fonts["primary"]);?>" class="px-select form-control radius-sm fs-13" data-search="1" data-placeholder="<?php echo esc_html__('Primary Font' ,'phenix'); ?>">
                    <?php 
                        foreach ($fonts_list as $key => $value) {
                            $is_selected = "";
                            if ($current_fonts["primary"] === $key) { $is_selected = "selected"; }
                            echo '<option value="' . esc_attr($key) . '" ' . $is_selected . '>' . esc_html($value) . '</option>';
                        }
                    ?>
                </select>
            </div>
            <p class="control-hint mb-20 color-gray fs-12"><?php echo esc_html__("Select a Primary Font for all Headlines and Titles.","pds-blocks");?></p>
    
            <!-- Control Label -->
            <label class="mb-10 weight-medium fs-14"><?php echo esc_html__("Secondary Font","pds-blocks"); ?> (LTR)</label>
            <!-- Form Control -->
            <div class="control-icon fas fa-font mb-5">
                <select name="pds_fonts[secondary]" value="<?php echo esc_attr($current_fonts["secondary"]);?>" class="px-select form-control radius-sm fs-13" data-search="1" data-placeholder="<?php echo esc_html__('Secondary Font' ,'phenix'); ?>">
                    <?php 
                        foreach ($fonts_list as $key => $value) {
                            $is_selected = "";
                            if ($current_fonts["secondary"] === $key) { $is_selected = "selected"; }
                            echo '<option value="' . esc_attr($key) . '" ' . $is_selected . '>' . esc_html($value) . '</option>';
                        }
                    ?>
                </select>
            </div>
            <p class="control-hint color-gray fs-12"><?php echo esc_html__("Select a Secondary Font for all other text on the website.","pds-blocks");?></p>
    
            <!-- Control Label -->
            <label class="mb-10 weight-medium fs-14"><?php echo esc_html__("Style Font","pds-blocks"); ?> (LTR)</label>
            <!-- Form Control -->
            <div class="control-icon fas fa-font mb-5">
                <select name="pds_fonts[style]" class="px-select form-control radius-sm fs-13" data-search="1" data-placeholder="<?php echo esc_html__('Style Font' ,'phenix'); ?>">
                    <?php 
                        foreach ($fonts_list as $key => $value) {
                            $is_selected = "";
                            if (isset($current_fonts["style"]) && $current_fonts["style"] === $key || $current_fonts["primary"] === $key) { $is_selected = "selected"; }
                            echo '<option value="' . esc_attr($key) . '" ' . $is_selected . '>' . esc_html($value) . '</option>';
                        }
                    ?>
                </select>
            </div>
            <p class="control-hint color-gray fs-12"><?php echo esc_html__("Select a Style Font for special cases.","pds-blocks");?></p>
        </div>
    </div>
    <!-- Column -->
    <div class="col-12 col-md-4 border-reset divider-s">
        <div class="pd-20 border-1 border-alpha-15 border-dashed bg-offwhite-primary radius-sm">
            <!-- Control Label -->
            <label class="mb-10 weight-medium fs-14"><?php echo esc_html__("Primary Font","pds-blocks"); ?> (RTL)</label>
            <!-- Form Control -->
            <div class="control-icon fas fa-text mb-5">
                <select name="pds_fonts[primary_rtl]" value="<?php echo esc_attr($current_fonts["primary_rtl"]);?>" class="px-select form-control radius-sm fs-13" data-search="1" data-placeholder="<?php echo esc_html__('Primary Font' ,'phenix'); ?>">
                    <?php 
                        foreach ($fonts_list as $key => $value) {
                            $is_selected = "";
                            if ($current_fonts["primary_rtl"] === $key) { $is_selected = "selected"; }
                            echo '<option value="' . esc_attr($key) . '" ' . $is_selected . '>' . esc_html($value) . '</option>';
                        }
                    ?>
                </select>
            </div>
            <p class="control-hint mb-20 color-gray fs-12"><?php echo esc_html__("Select a Primary Font for all Headlines and Titles.","pds-blocks");?></p>
    
            <!-- Control Label -->
            <label class="mb-10 weight-medium fs-14"><?php echo esc_html__("Secondary Font","pds-blocks"); ?> (RTL)</label>
            <!-- Form Control -->
            <div class="control-icon fas fa-font mb-5">
                <select name="pds_fonts[secondary_rtl]" value="<?php echo esc_attr($current_fonts["secondary_rtl"]);?>" class="px-select form-control radius-sm fs-13" data-search="1" data-placeholder="<?php echo esc_html__('Secondary Font' ,'phenix'); ?>">
                    <?php 
                        foreach ($fonts_list as $key => $value) {
                            $is_selected = "";
                            if ($current_fonts["secondary_rtl"] === $key) { $is_selected = "selected"; }
                            echo '<option value="' . esc_attr($key) . '" ' . $is_selected . '>' . esc_html($value) . '</option>';
                        }
                    ?>
                </select>
            </div>
            <p class="control-hint color-gray fs-12"><?php echo esc_html__("Select a Secondary Font for all other text on the website.","pds-blocks");?></p>
            
            <!-- Control Label -->
            <label class="mb-10 weight-medium fs-14"><?php echo esc_html__("Style Font","pds-blocks"); ?> (RTL)</label>
            <!-- Form Control -->
            <div class="control-icon fas fa-font mb-5">
                <select name="pds_fonts[style_rtl]" class="px-select form-control radius-sm fs-13" data-search="1" data-placeholder="<?php echo esc_html__('Style Font' ,'phenix'); ?>">
                    <?php 
                        foreach ($fonts_list as $key => $value) {
                            $is_selected = "";
                            if (isset($current_fonts["style_rtl"]) && $current_fonts["style_rtl"] === $key || $current_fonts["primary_rtl"] === $key) { $is_selected = "selected"; }
                            echo '<option value="' . esc_attr($key) . '" ' . $is_selected . '>' . esc_html($value) . '</option>';
                        }
                    ?>
                </select>
            </div>
            <p class="control-hint color-gray fs-12"><?php echo esc_html__("Select a Style Font for special cases.","pds-blocks");?></p>
        </div>
    </div>
    <!-- Column -->
    <div class="col-12 col-md-4 border-reset divider-s">
        <!-- Control Label -->
        <label class="mb-10 weight-medium fs-14"><?php echo esc_html__("Icons Font","pds-blocks"); ?></label>
        <!-- Form Control -->
        <div class="control-icon fas fa-star-half-alt mb-15">
            <select name="pds_icon_font" value="<?php echo esc_attr(get_option("pds_icon_font"));?>" class="px-select form-control radius-sm fs-13" data-placeholder="<?php echo esc_html__('Icons Font' ,'phenix'); ?>">
                <?php 
                    foreach ($fonts_list_icon as $key => $value) {
                        $is_selected = "";
                        if ($key == "fontawesome-7-free") { $is_selected = "selected"; }
                        echo '<option value="' . esc_attr($key) . '" ' . $is_selected . '>' . esc_html($value) . '</option>';
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