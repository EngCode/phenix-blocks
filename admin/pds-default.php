<?php
/**
 * Main Admin Page for Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

//====> Default Options <====//
if (!function_exists('pds_blocks_default_values')) :
    /**
     * Register Default Options for Phenix Blocks
     * @since Phenix Blocks 1.0
     * @return void
    */

    //===> Set default values here <===//
    function pds_blocks_default_values() {
        //===> Post Types <===//
        add_option('pds_types', array(
            array(
                'enable'=> true,
                "name"  => "post",
                "label" => "Blog Posts",
                "label_singular" => "Posts",
                "template" => "phenix/blog-example",
                "menu_icon" => "welcome-widgets-menus",
                "taxonomies" => array('post_tag','category')
            ),
            array(
                'enable'=> true,
                "name"  => "sliders",
                "label" => "Block Sliders",
                "singular" => "slider",
                "label_singular" => "Slider",
                "template" => "phenix/slide-hero",
                "menu_icon" => "cover-image",
                "taxonomies" => array()
            ),
        ));

        //===> Menu Locations <===//
        add_option('menu_locations', array('main-menu' => 'Main Menu'));

        //===> Taxonomies <===//
        add_option('pds_taxonomies', array());

        //===> Patterns <===//
        update_option('block_patterns', array(
            array(
                'name'    => "slide-hero",
                'title'    => "Hero Slide",
                'category' => array("phenix", "single"),
                'content'  => "<!-- wp:phenix/container {\"isFlexbox\":true,\"flexbox\":{\"align\":\"align-start-y align-center-x align-center-y\",\"nowrap\":\"\",\"flowCols\":\"flow-columns\",\"stacked\":\"\"},\"typography\":{\"color\":\"color-white\",\"align\":\"tx-align-center\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":\"bg-grade-45\",\"value\":\"bg-alpha-05\"}},\"lock\":{\"move\":true,\"remove\":true},\"className\":\"full-screen-wide hero-slide pdy-50 fluid\"} -->\n<div class=\"wp-block-phenix-container full-screen-wide hero-slide pdy-50 fluid bg-alpha-05 bg-grade-45 flexbox  align-start-y align-center-x align-center-y color-white tx-align-center\"><!-- wp:phenix/group {\"isFlexbox\":false,\"className\":\"container\"} -->\n<div class=\"wp-block-phenix-group container\"><!-- wp:heading {\"className\":\"weight-medium mb-10\"} -->\n<h2 class=\"weight-medium mb-10\">الشركة الرائدة في صناعة أعمدة الصلب وخدمة الجلفنة</h2>\n<!-- /wp:heading -->\n\n<!-- wp:heading {\"className\":\"h1-md display-lg-h5  mb-30\"} -->\n<h2 class=\"h1-md display-lg-h5 mb-30\">تقدم منتجات وخدمات عالية الجودة لرضا العملاء التام منذ عام 1980</h2>\n<!-- /wp:heading -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"label\":\"خدماتنا\",\"url\":\"https://localhost/galvanco/services\",\"radius\":\"radius-md\",\"typography\":{\"size\":\"fs-14\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-primary\"}},\"className\":\"w-min-150 me-15\"} -->\n<a class=\"wp-block-phenix-button w-min-150 me-15 btn fs-14 primary normal normal radius-md\" href=\"https://localhost/galvanco/services\" rel=\"noopener\">خدماتنا</a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"label\":\"تواصل معنا\",\"url\":\"https://localhost/galvanco/تواصل-معنا\",\"radius\":\"radius-md\",\"outline\":true,\"typography\":{\"size\":\"fs-14\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-secondary\"}},\"className\":\"w-min-150 me-15\"} -->\n<a class=\"wp-block-phenix-button w-min-150 me-15 btn fs-14 secondary normal normal radius-md outline\" href=\"https://localhost/galvanco/تواصل-معنا\" rel=\"noopener\">تواصل معنا</a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"label\":\"منتجاتنا\",\"url\":\"https://localhost/galvanco/services\",\"radius\":\"radius-md\",\"typography\":{\"size\":\"fs-14\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-white\"}},\"className\":\"w-min-150\"} -->\n<a class=\"wp-block-phenix-button w-min-150 btn fs-14 white normal normal radius-md\" href=\"https://localhost/galvanco/services\" rel=\"noopener\">منتجاتنا</a>\n<!-- /wp:phenix/button --></div>\n<!-- /wp:phenix/group --></div>\n<!-- /wp:phenix/container -->"
            )
        ));

        //===> Blocks settings <===//
        add_option('pds_admin_style', true);
        add_option('container_block', true);
        add_option('logo_block', true);
        add_option('navigation_block', true);
        add_option('button_block', true);
        add_option('row_block', true);
        add_option('column_block', true);
        add_option('head_block', true);
        add_option('query_block', true);
        add_option('taxonomies_list_block', true);
        add_option('taxonomies_block', true);
        add_option('theme_part_block', true);
        add_option('group_block', true);
        add_option('inline_elements_block', true);
        
        //===> Optimization settings <===//
        add_option('pds_gfonts', true);
        add_option('head_cleaner', true);
        add_option('wpc7_cleaner', true);
        add_option('adminbar_css', true);
        add_option('comments_css', true);
        add_option('wpc7_rm_styles', true);
        add_option('wpc7_rm_scripts', true);
        add_option('blocks_optimizer', true);
    }

    add_action('init', 'pds_blocks_default_values');
endif;