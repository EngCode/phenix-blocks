<?php
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;
    //====> Shared Options <====//
    $current_dir = plugin_dir_url(__FILE__);
    $json_dir = str_replace('admin/panels', 'assets/json', $current_dir);

    //===> Phenix Main Fonts <===//
    $fonts_list = [
        "somar-rounded" => "Somar Rounded",
        "somar-sans" => "Somar Sans",
        "neo-sans-w23" => "Neo Sans W23",
        "din-next-lt-arabic" => "DIN Next LT Arabic",
        "tarek-v" => "Tarek V",
        "biosans" => "Bio Sans [EN]",
    ];

    //===> Icon Fonts <===//
    $fonts_list_icon = [
        "fontawesome-5-free" => "Font Awesome 5.14 Free",
        "fontawesome-5-pro" => "Font Awesome 5.14 Pro",
        "fontawesome-6-free" => "Font Awesome 6.3 Free",
        "fontawesome-6-pro" => "Font Awesome 6.3 Pro",
    ];

    //===> Get Current Fonts <===//
    $current_fonts = get_option("pds_fonts");
    $current_fonts['icon'] = get_option("pds_icon_font");

    //===> Google Fonts <===//
    $google_fonts = [];

    //===> Get Google Fonts <===//
    if (get_option("pds_gfonts") === "on") {
        //===> Get Json File <===//
        $json_data = file_get_contents("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyC3GNi2OCpFOJnJfeJZvzHjISPg__fqlUI", false, stream_context_create(array("ssl" => array("verify_peer" => false, "verify_peer_name" => false))));
        $json_array = json_decode($json_data, TRUE);

        //===> Convert to Array <===//
        foreach ($json_array["items"] as $key => $value) {
            array_push($google_fonts, $value["family"]);
        }
    }
?>
<!-- Grid -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-md-4 border-reset divider-s">
        <div class="pd-20 border-1 border-alpha-15 border-dashed bg-offwhite-primary radius-sm">
            <!-- Control Label -->
            <label class="mb-10 weight-medium fs-14"><?php echo __("Primary Font", "phenix"); ?> (LTR)</label>
            <!-- Form Control -->
            <div class="control-icon far fa-text mb-5">
                <select name="pds_fonts[primary]" value="<?php echo $current_fonts["primary"];?>" class="px-select form-control radius-sm fs-13" data-search="1" data-placeholder="<?php echo __('Primary Font' ,'phenix'); ?>">
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
                                if ($current_fonts["primary"] === $value) { $is_selected = "selected"; }
                                echo '<option value="'.$value.'" '. $is_selected .'>' . $value . '</option>';
                            }
                        }
                    ?>
                </select>
            </div>
            <p class="control-hint mb-20 color-gray fs-12"><?php echo __("Select a Primary Font for all Headlines and Titles.","phenix");?></p>
    
            <!-- Control Label -->
            <label class="mb-10 weight-medium fs-14"><?php echo __("Secondary Font", "phenix"); ?> (LTR)</label>
            <!-- Form Control -->
            <div class="control-icon far fa-font mb-5">
                <select name="pds_fonts[secondary]" value="<?php echo $current_fonts["secondary"];?>" class="px-select form-control radius-sm fs-13" data-search="1" data-placeholder="<?php echo __('Secondary Font' ,'phenix'); ?>">
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
            <p class="control-hint color-gray fs-12"><?php echo __("Select a Secondary Font for all other text on the website.","phenix");?></p>
        </div>
    </div>
    <!-- Column -->
    <div class="col-12 col-md-4 border-reset divider-s">
        <div class="pd-20 border-1 border-alpha-15 border-dashed bg-offwhite-primary radius-sm">
            <!-- Control Label -->
            <label class="mb-10 weight-medium fs-14"><?php echo __("Primary Font", "phenix"); ?> (RTL)</label>
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
            <p class="control-hint mb-20 color-gray fs-12"><?php echo __("Select a Primary Font for all Headlines and Titles.","phenix");?></p>
    
            <!-- Control Label -->
            <label class="mb-10 weight-medium fs-14"><?php echo __("Secondary Font", "phenix"); ?> (RTL)</label>
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
            <p class="control-hint color-gray fs-12"><?php echo __("Select a Secondary Font for all other text on the website.","phenix");?></p>
        </div>
    </div>
    <!-- Column -->
    <div class="col-12 col-md-4 border-reset divider-s">
        <!-- Control Label -->
        <label class="mb-10 weight-medium fs-14"><?php echo __("Post Excerpt Length", "phenix"); ?></label>
        <!-- Form Control -->
        <input type="number" class="form-control radius-sm fs-13 mb-20" name="excerpt_length" value="<?php echo get_option("excerpt_length") ? get_option("excerpt_length") : 175; ?>" />
        <!-- Control Label -->
        <label class="mb-10 weight-medium fs-14"><?php echo __("Icons Font", "phenix"); ?></label>
        <!-- Form Control -->
        <div class="control-icon far fa-star-half-alt mb-15">
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
        <!-- Divider -->
        <div class="pdt-10 mb-10 divider-b"></div>
        <?php
            echo pds_toggle_controls(array(
                array(
                    "name"  => 'pds_admin_style',
                    "title" => 'Admin UI Re-Style',
                ),
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