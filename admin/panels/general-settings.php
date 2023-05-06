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
        // "biosans" => "Bio Sans [EN]",
    ];

    $fonts_list_icon = [
        "fontawesome-5-free" => "Font Awesome 5.14 Free",
        "fontawesome-5-pro" => "Font Awesome 5.14 Pro",
        "fontawesome-6-free" => "Font Awesome 6.3 Free",
        "fontawesome-6-pro" => "Font Awesome 6.3 Pro",
    ];

    $current_fonts = [
        "icon" => get_option("pds_icon_font"),
        "primary" => get_option("pds_primary_font"),
        "secondary" => get_option("pds_secondary_font"),
    ];

    $google_fonts = [];

    //===> Get Google Fonts <===//
    if (get_option("pds_gfonts") === "on") {
        //===> Get Json File <===//
        $json_data = file_get_contents($json_dir."gfonts.json", false, stream_context_create(array("ssl" => array("verify_peer" => false, "verify_peer_name" => false))));
        $json_array = json_decode($json_data, TRUE);

        //===> Convert to Array <===//
        foreach ($json_array as $key => $value) {
            array_push($google_fonts, $value["family"]);
        }
    }
?>
<!-- Grid -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-md-4 border-reset divider-s ms-10">
        <?php
            echo pds_toggle_controls(array(
                array(
                    "name"  => 'pds_admin_style',
                    "title" => 'Admin UI Re-Style',
                ),
                array(
                    "name"  => 'pds_gfonts',
                    "title" => 'Enable Google Fonts',
                ),
                array(
                    "name"  => 'pds_cdn',
                    "title" => 'Enable CDN Links',
                ),
                array(
                    "name"  => 'adminbar_disable',
                    "title" => 'Disable Admin-Bar for Users',
                ),
            ));
        ?>
    </div>
    <!-- // Column -->
</div>
<!-- // Grid -->