<?php
    /**
     * Main Admin Page for Phenix Blocks
     * @since Phenix WP 1.0
     * @return void
    */
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

    //====> Default Options Data <====//
    if (!function_exists('pds_get_default_options')) :
        /**
         * Register Default Options for Phenix Blocks
         * @since Phenix Blocks 1.0
         * @return void
        */
        
        function pds_get_default_options() {
            //====> Define Options Data <====//
            $default_types = array(
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
                array(
                    'enable'=> true,
                    "name"  => "services",
                    "label" => "Services",
                    "singular" => "service",
                    "label_singular" => "Service",
                    "template" => "phenix/blog-example",
                    "menu_icon" => "megaphone",
                    "taxonomies" => array()
                ),
            );

            $default_patterns = array(
                array('name' => "table-of-content",
                    'title'  => "Table of Content",
                    'width'  => 1280,
                    'category' => array("single", "elements"),
                    'content'  => "<!-- wp:phenix/group {\"id\":\"table-of-content-list\",\"tagName\":\"ul\",\"className\":\"scrollspy-menu\"} -->\n<ul class=\"wp-block-phenix-group scrollspy-menu\" id=\"table-of-content-list\"><!-- wp:phenix/inline {\"content\":\"قائمة بعناوين محتوي الصفحة\\u003cbr\\u003e Table of Content List\"} -->\n<i class=\"wp-block-phenix-inline\">قائمة بعناوين محتوي الصفحة<br> Table of Content List</i>\n<!-- /wp:phenix/inline --></ul>\n<!-- /wp:phenix/group -->"
                ),
                array('name' => "dropdown-button",
                    'title'  => "Dropdown Button",
                    'width'  => 180,
                    'category' => array("elements", "elements"),
                    'content'  => "<!-- wp:phenix/group {\"className\":\"px-dropdown\"} -->\n<div class=\"wp-block-phenix-group px-dropdown\"><!-- wp:phenix/button {\"isLink\":true,\"inNewTab\":true,\"label\":\"Social Media\",\"url\":\"https://wa.me/01122974539\",\"type\":\"btn square tooltip-bottom\",\"icon\":\"fas fa-share-nodes\",\"size\":\"small\",\"typography\":{\"size\":\"fs-13\",\"color\":\"color-white\",\"weight\":\"weight-medium\"},\"style\":{\"background\":{\"type\":\"gradient\",\"rotate\":\"bg-grade-45n\",\"value\":\"bg-grade-success\"},\"support\":[\"enable-margin\"],\"me\":\"\",\"me-md\":\"\",\"mt\":\"\",\"ms\":\"\",\"mb\":\"\",\"mt-md\":\"\",\"ms-md\":\"\",\"mb-md\":\"\"},\"className\":\"icon-lg radius-md px-toggle\"} -->\n<a title=\"Social Media\" class=\"wp-block-phenix-button icon-lg radius-md px-toggle btn square tooltip-bottom fas fa-share-nodes small fs-13 color-white weight-medium bg-grade-success bg-grade-45n\" rel=\"noopener\" target=\"_blank\" href=\"https://wa.me/01122974539\"></a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/group {\"tagName\":\"ul\",\"typography\":{\"color\":\"color-white\"},\"style\":{\"support\":[\"enable-padding\",\"enable-radius\"],\"radius\":\"radius-md\",\"pdt\":\"15\",\"pds\":\"15\",\"pde\":\"15\",\"pdb\":\"15\",\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-secondary\"},\"min_size\":\"w-min-280\",\"pdt-md\":\"25\",\"pds-md\":\"25\",\"pde-md\":\"25\",\"pdb-md\":\"25\"},\"className\":\"px-dropdown-list\"} -->\n<ul class=\"wp-block-phenix-group px-dropdown-list color-white radius-md pdt-15 pds-15 pde-15 pdb-15 bg-secondary w-min-280 pdt-md-25 pds-md-25 pde-md-25 pdb-md-25\"><!-- wp:phenix/inline {\"tagName\":\"li\",\"content\":\"\\u003ca href=\\u0022https://facebook.com\\u0022 target=\\u0022_blank\\u0022 rel=\\u0022noreferrer noopener\\u0022\\u003eتابعنا على الفيسبوك\\u003c/a\\u003e\",\"style\":{\"hasIcon\":true,\"icon\":\"fab fa-facebook-f\"}} -->\n<li class=\"wp-block-phenix-inline tx-icon fab fa-facebook-f\"><a href=\"https://facebook.com\" target=\"_blank\" rel=\"noreferrer noopener\">تابعنا على الفيسبوك</a></li>\n<!-- /wp:phenix/inline -->\n\n<!-- wp:phenix/inline {\"tagName\":\"li\",\"content\":\"\\u003ca rel=\\u0022noreferrer noopener\\u0022 href=\\u0022https://facebook.com\\u0022 target=\\u0022_blank\\u0022\\u003eتابعنا علي\\u003c/a\\u003e \\u003ca href=\\u0022https://twitter.com\\u0022 target=\\u0022_blank\\u0022 rel=\\u0022noreferrer noopener\\u0022\\u003eتويتر\\u003c/a\\u003e\",\"style\":{\"hasIcon\":true,\"icon\":\"fab fa-twitter\"}} -->\n<li class=\"wp-block-phenix-inline tx-icon fab fa-twitter\"><a rel=\"noreferrer noopener\" href=\"https://facebook.com\" target=\"_blank\">تابعنا علي</a> <a href=\"https://twitter.com\" target=\"_blank\" rel=\"noreferrer noopener\">تويتر</a></li>\n<!-- /wp:phenix/inline -->\n\n<!-- wp:phenix/inline {\"tagName\":\"li\",\"content\":\"\\u003ca rel=\\u0022noreferrer noopener\\u0022 href=\\u0022https://facebook.com\\u0022 target=\\u0022_blank\\u0022\\u003eتابعنا علي\\u003c/a\\u003e \\u003ca rel=\\u0022noreferrer noopener\\u0022 href=\\u0022https://twitter.com\\u0022 target=\\u0022_blank\\u0022\\u003eانستاجرام\\u003c/a\\u003e\",\"style\":{\"hasIcon\":true,\"icon\":\"fab fa-instagram\"}} -->\n<li class=\"wp-block-phenix-inline tx-icon fab fa-instagram\"><a rel=\"noreferrer noopener\" href=\"https://facebook.com\" target=\"_blank\">تابعنا علي</a> <a rel=\"noreferrer noopener\" href=\"https://twitter.com\" target=\"_blank\">انستاجرام</a></li>\n<!-- /wp:phenix/inline -->\n\n<!-- wp:phenix/inline {\"tagName\":\"li\",\"content\":\"\\u003ca rel=\\u0022noreferrer noopener\\u0022 href=\\u0022https://facebook.com\\u0022 target=\\u0022_blank\\u0022\\u003eتابعنا علي\\u003c/a\\u003e \\u003ca rel=\\u0022noreferrer noopener\\u0022 href=\\u0022https://twitter.com\\u0022 target=\\u0022_blank\\u0022\\u003eلينكدإن\\u003c/a\\u003e\",\"style\":{\"hasIcon\":true,\"icon\":\"fab fa-linkedin-in\"}} -->\n<li class=\"wp-block-phenix-inline tx-icon fab fa-linkedin-in\"><a rel=\"noreferrer noopener\" href=\"https://facebook.com\" target=\"_blank\">تابعنا علي</a> <a rel=\"noreferrer noopener\" href=\"https://twitter.com\" target=\"_blank\">لينكدإن</a></li>\n<!-- /wp:phenix/inline --></ul>\n<!-- /wp:phenix/group --></div>\n<!-- /wp:phenix/group -->"
                ),
                array('name' => "social-icons",
                    'title'  => "Social Icons",
                    'width'  => 190,
                    'category' => array("elements", "elements"),
                    'content'  => "<!-- wp:phenix/group {\"className\":\"flexbox\"} -->\n<div class=\"wp-block-phenix-group flexbox\"><!-- wp:phenix/button {\"isLink\":true,\"inNewTab\":true,\"label\":\"Follow Me on Facebook\",\"url\":\"https://www.facebook.com/phenixthemes21\",\"type\":\"btn square\",\"icon\":\"fab fa-facebook-f\",\"size\":\"small\",\"typography\":{\"color\":\"color-gray\",\"size\":\"fs-18\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-transparent\"}},\"className\":\"radius-none\"} -->\n<a title=\"Follow Me on Facebook\" class=\"wp-block-phenix-button radius-none btn square fab fa-facebook-f small color-gray fs-18 bg-transparent\" rel=\"noopener\" target=\"_blank\" href=\"https://www.facebook.com/phenixthemes21\"></a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"inNewTab\":true,\"label\":\"Follow Me on Behance\",\"url\":\"https://www.behance.net/Eng-Abdallah\",\"type\":\"btn square\",\"icon\":\"fab fa-twitter\",\"size\":\"small\",\"typography\":{\"color\":\"color-gray\",\"size\":\"fs-18\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-transparent\"}},\"className\":\"radius-none\"} -->\n<a title=\"Follow Me on Behance\" class=\"wp-block-phenix-button radius-none btn square fab fa-twitter small color-gray fs-18 bg-transparent\" rel=\"noopener\" target=\"_blank\" href=\"https://www.behance.net/Eng-Abdallah\"></a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"inNewTab\":true,\"label\":\"Follow Me on Linked-In\",\"url\":\"https://www.linkedin.com/company/phenix-themes/\",\"type\":\"btn square\",\"icon\":\"fab fa-linkedin-in\",\"size\":\"small\",\"typography\":{\"color\":\"color-gray\",\"size\":\"fs-18\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-transparent\"}},\"className\":\"radius-none\"} -->\n<a title=\"Follow Me on Linked-In\" class=\"wp-block-phenix-button radius-none btn square fab fa-linkedin-in small color-gray fs-18 bg-transparent\" rel=\"noopener\" target=\"_blank\" href=\"https://www.linkedin.com/company/phenix-themes/\"></a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"inNewTab\":true,\"label\":\"Call Me on WhatsApp\",\"url\":\"https://wa.me/0201122974539\",\"type\":\"btn square\",\"icon\":\"fab fa-whatsapp\",\"size\":\"small\",\"typography\":{\"color\":\"color-gray\",\"size\":\"fs-18\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-transparent\"}},\"className\":\"radius-none\"} -->\n<a title=\"Call Me on WhatsApp\" class=\"wp-block-phenix-button radius-none btn square fab fa-whatsapp small color-gray fs-18 bg-transparent\" rel=\"noopener\" target=\"_blank\" href=\"https://wa.me/0201122974539\"></a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"inNewTab\":true,\"label\":\"Message Me on Facebook\",\"url\":\"https://m.me/phenixthemes21\",\"type\":\"btn square\",\"icon\":\"fab fa-instagram\",\"size\":\"small\",\"typography\":{\"color\":\"color-gray\",\"size\":\"fs-18\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-transparent\"}},\"className\":\"radius-none\"} -->\n<a title=\"Message Me on Facebook\" class=\"wp-block-phenix-button radius-none btn square fab fa-instagram small color-gray fs-18 bg-transparent\" rel=\"noopener\" target=\"_blank\" href=\"https://m.me/phenixthemes21\"></a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"inNewTab\":true,\"label\":\"Follow Me on Facebook\",\"url\":\"https://www.youtube.com/@engabdallah4186\",\"type\":\"btn square\",\"icon\":\"fab fa-youtube\",\"size\":\"small\",\"typography\":{\"color\":\"color-gray\",\"size\":\"fs-18\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-transparent\"}},\"className\":\"radius-none\"} -->\n<a title=\"Follow Me on Facebook\" class=\"wp-block-phenix-button radius-none btn square fab fa-youtube small color-gray fs-18 bg-transparent\" rel=\"noopener\" target=\"_blank\" href=\"https://www.youtube.com/@engabdallah4186\"></a>\n<!-- /wp:phenix/button --></div>\n<!-- /wp:phenix/group -->"
                ),
                // array('name' => "header-standard",
                //     'title'  => "Header Standard",
                //     'width'  => 1280,
                //     'category' => array("phenix", "headers"),
                //     'content'  => "<!-- wp:phenix/container {\"size\":\"container-xl\",\"isSection\":true,\"isFlexbox\":true,\"flexbox\":{\"flow\":\"\",\"align\":\"align-center-y align-between \",\"nowrap\":\"\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-white\"},\"support\":[\"enable-padding\"],\"pdt\":\"15\",\"pdb\":\"15\"},\"align\":\"full\",\"lock\":{\"move\":false,\"remove\":false},\"className\":\"main-header bx-shadow-dp-1\"} -->\n<div class=\"wp-block-phenix-container alignfull main-header bx-shadow-dp-1 bg-white pdt-15 pdb-15\"><div class=\" container-xl flexbox align-center-y align-between\"><!-- wp:phenix/logo {\"site_title\":\"Phenix Blocks\",\"logo\":\"https://phenixthemes.com/wp-content/plugins/pds-blocks/assets/img/px-blocks-x.svg\",\"size\":\"46\",\"width\":\"175\",\"logo_id\":17,\"favicon_id\":16,\"fevicon\":\"https://phenixthemes.com/wp-content/plugins/pds-blocks/assets/img/px-blocks-icon.svg\",\"responsive\":true,\"use_fevicon\":true,\"lock\":{\"move\":false,\"remove\":false}} -->\n<a class=\"wp-block-phenix-logo inline-block\" href=\"#none\" title=\"Phenix Blocks\"><img src=\"https://phenixthemes.com/wp-content/plugins/pds-blocks/assets/img/px-blocks-x.svg\" class=\"hidden-md-down\" alt=\"Phenix Blocks\" style=\"max-height:46px\" width=\"175\" height=\"46\"/><img src=\"https://phenixthemes.com/wp-content/plugins/pds-blocks/assets/img/px-blocks-icon.svg\" class=\"hidden-lg-up\" alt=\"Phenix Blocks\" width=\"46\" height=\"46\"/></a>\n<!-- /wp:phenix/logo -->\n\n<!-- wp:phenix/navigation {\"menu_id\":\"main-menu\",\"responsive\":true,\"mobile_mode\":\"custom\",\"effect\":\"fade\",\"direction\":\"flexbox\"} /-->\n\n<!-- wp:phenix/group {\"flexbox\":{\"stacked\":\"\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"\"}},\"lock\":{\"move\":false,\"remove\":false},\"className\":\"flexbox\"} -->\n<div class=\"wp-block-phenix-group flexbox\"><!-- wp:phenix/button {\"type\":\"btn square tooltip-bottom\",\"icon\":\"far fa-bars\",\"size\":\"small\",\"outline\":\"outline\",\"data_id\":\"main-menu\",\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-primary\"},\"support\":[\"enable-display\",\"enable-margin\"],\"radius\":\"radius-md\",\"display\":[\"hidden-lg-up\"],\"ms\":\"10\"},\"lock\":{\"move\":false,\"remove\":false}} -->\n<button title=\"Button\" class=\"wp-block-phenix-button btn square tooltip-bottom far fa-bars small outline menu-toggle primary radius-md ms-10\" data-id=\"main-menu\"></button>\n<!-- /wp:phenix/button --></div>\n<!-- /wp:phenix/group --></div></div>\n<!-- /wp:phenix/container -->"
                // ),
                array('name' => "page-head",
                    'title'  => "Page Head Standard",
                    'width'  => 1280,
                    'category' => array("phenix", "section"),
                    'content'  => "<!-- wp:phenix/container {\"size\":\"container\",\"isSection\":true,\"typography\":{\"color\":\"\",\"align\":\"on\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-alpha-15\"}},\"align\":\"full\",\"className\":\"pdy-30\"} -->\n<div class=\"wp-block-phenix-container alignfull pdy-30 on bg-alpha-15\"><div class=\" container\"><!-- wp:phenix/page-head /--></div></div>\n<!-- /wp:phenix/container -->"
                ),
                // array('name' => "footer-standard",
                //     'title'  => "Footer Standard",
                //     'width'  => 1400,
                //     'category' => array("phenix", "footers"),
                //     'content'  => "<!-- wp:phenix/container {\"size\":\"container-xl\",\"isSection\":true,\"typography\":{\"color\":\"color-white\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-primary-dark\"},\"support\":[\"enable-padding\"],\"pdt\":\"40\",\"pdt-lg\":\"50\"},\"align\":\"full\",\"className\":\"main-footer\"} -->\n<div class=\"wp-block-phenix-container alignfull main-footer color-white bg-primary-dark pdt-40 pdt-lg-50\"><div class=\" container-xl\"><!-- wp:phenix/row -->\n<div class=\"wp-block-phenix-row row\"><!-- wp:phenix/column {\"size\":\"12\",\"style\":{\"support\":[\"enable-margin\"],\"mb\":\"45\",\"mb-lg\":\"50\"},\"responsive\":{\"size-md\":\"6\",\"size-lg\":\"4\"}} -->\n<div class=\"wp-block-phenix-column col-12 mb-45 mb-lg-50 col-md-6 col-lg-4\"><!-- wp:phenix/text {\"type\":\"headline\",\"tagName\":\"h4\",\"content\":\"اشترك فى النشرة الاخبارية\",\"typography\":{\"size\":\"fs-19\"}} -->\n<h4 class=\"wp-block-phenix-text headline fs-19\">اشترك فى النشرة الاخبارية</h4>\n<!-- /wp:phenix/text -->\n\n<!-- wp:phenix/text {\"content\":\"اشترك في نشرتنا الإخبارية لتصلك آخر المستجدات والمعلومات الحصرية حول منتجاتنا وعروضنا الخاصة.\",\"typography\":{\"size\":\"fs-14\"}} -->\n<p class=\"wp-block-phenix-text paragraph fs-14\">اشترك في نشرتنا الإخبارية لتصلك آخر المستجدات والمعلومات الحصرية حول منتجاتنا وعروضنا الخاصة.</p>\n<!-- /wp:phenix/text -->\n\n<!-- wp:contact-form-7/contact-form-selector {\"id\":50,\"title\":\"النشرة البريدية\"} -->\n<div class=\"wp-block-contact-form-7-contact-form-selector\">[contact-form-7 id=\"50\" title=\"النشرة البريدية\"]</div>\n<!-- /wp:contact-form-7/contact-form-selector --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"12\",\"style\":{\"support\":[\"enable-margin\"],\"mb\":\"45\",\"mb-lg\":\"50\"},\"responsive\":{\"size-md\":\"3\",\"size-lg\":\"2\"}} -->\n<div class=\"wp-block-phenix-column col-12 mb-45 mb-lg-50 col-md-3 col-lg-2\"><!-- wp:phenix/text {\"type\":\"headline\",\"tagName\":\"h4\",\"content\":\"روابط سريعة\",\"typography\":{\"size\":\"fs-19\"},\"style\":{\"support\":[\"enable-margin\"],\"mb\":\"15\"}} -->\n<h4 class=\"wp-block-phenix-text headline fs-19 mb-15\">روابط سريعة</h4>\n<!-- /wp:phenix/text -->\n\n<!-- wp:phenix/navigation {\"menu_id\":\"quick-links\",\"items_icon_op\":true} /--></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"12\",\"style\":{\"support\":[\"enable-margin\"],\"mb\":\"45\",\"mb-lg\":\"50\"},\"responsive\":{\"size-md\":\"3\",\"size-lg\":\"2\"}} -->\n<div class=\"wp-block-phenix-column col-12 mb-45 mb-lg-50 col-md-3 col-lg-2\"><!-- wp:phenix/text {\"type\":\"headline\",\"tagName\":\"h4\",\"content\":\"أنشط القطاعات\",\"typography\":{\"size\":\"fs-19\"},\"style\":{\"support\":[\"enable-margin\"],\"mb\":\"15\"}} -->\n<h4 class=\"wp-block-phenix-text headline fs-19 mb-15\">أنشط القطاعات</h4>\n<!-- /wp:phenix/text -->\n\n<!-- wp:phenix/navigation {\"menu_type\":\"taxonomies\",\"menu_id\":\"sectors\",\"items_icon_op\":true,\"items_count\":\"5\",\"post_type\":\"studies\"} /--></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"12\",\"style\":{\"support\":[\"enable-margin\"],\"mb\":\"45\",\"mb-lg\":\"50\"},\"responsive\":{\"size-md\":\"13\",\"size-lg\":\"3\"}} -->\n<div class=\"wp-block-phenix-column col-12 mb-45 mb-lg-50 col-md col-lg-3\"><!-- wp:phenix/text {\"type\":\"headline\",\"tagName\":\"h4\",\"content\":\"تواصل معنا\",\"typography\":{\"size\":\"fs-19\"},\"style\":{\"support\":[\"enable-margin\"],\"mb\":\"15\"}} -->\n<h4 class=\"wp-block-phenix-text headline fs-19 mb-15\">تواصل معنا</h4>\n<!-- /wp:phenix/text -->\n\n<!-- wp:phenix/group {\"tagName\":\"ul\",\"className\":\"reset-list gpy-10\"} -->\n<ul class=\"wp-block-phenix-group reset-list gpy-10\"><!-- wp:phenix/inline {\"tagName\":\"li\",\"content\":\"020-11229-745-39\",\"style\":{\"hasIcon\":true,\"icon\":\"fas fa-phone\"}} -->\n<li class=\"wp-block-phenix-inline tx-icon fas fa-phone\">020-11229-745-39</li>\n<!-- /wp:phenix/inline -->\n\n<!-- wp:phenix/inline {\"tagName\":\"li\",\"content\":\"abdullah@phenixthemes.com\",\"style\":{\"hasIcon\":true,\"icon\":\"fas fa-envelope\"}} -->\n<li class=\"wp-block-phenix-inline tx-icon fas fa-envelope\">abdullah@phenixthemes.com</li>\n<!-- /wp:phenix/inline -->\n\n<!-- wp:phenix/inline {\"tagName\":\"li\",\"content\":\"support@phenixthemes.com\",\"style\":{\"hasIcon\":true,\"icon\":\"fas fa-comments\"}} -->\n<li class=\"wp-block-phenix-inline tx-icon fas fa-comments\">support@phenixthemes.com</li>\n<!-- /wp:phenix/inline -->\n\n<!-- wp:phenix/inline {\"tagName\":\"li\",\"content\":\"مصر,بني سويف,مدينة الواسطي\",\"style\":{\"hasIcon\":true,\"icon\":\"fas fa-location-dot\"}} -->\n<li class=\"wp-block-phenix-inline tx-icon fas fa-location-dot\">مصر,بني سويف,مدينة الواسطي</li>\n<!-- /wp:phenix/inline --></ul>\n<!-- /wp:phenix/group -->\n\n<!-- wp:phenix/navigation {\"menu_type\":\"taxonomies\",\"menu_id\":\"sectors\",\"items_icon_op\":true,\"post_type\":\"studies\"} /--></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row -->\n\n<!-- wp:phenix/column {\"isFlexbox\":true,\"flexbox\":{\"align\":\"align-center-y align-between\",\"align-md-md\":\"align-md-between\"},\"responsive\":{\"size-md\":0,\"size-lg\":0},\"className\":\"divider-t pdy-15 border-revert-15 col-12\"} -->\n<div class=\"wp-block-phenix-column divider-t pdy-15 border-revert-15 col-12 col-auto flexbox align-center-y align-between align-md-between\"><!-- wp:phenix/text {\"content\":\"جميع حقوق الطبع والنشر © 2023 محفوظة لـ شركة ذات\",\"typography\":{\"size\":\"fs-14\"},\"style\":{\"support\":[\"enable-margin\"],\"mb\":\"0\"}} -->\n<p class=\"wp-block-phenix-text paragraph fs-14 mb-0\">جميع حقوق الطبع والنشر © 2023 محفوظة لـ شركة ذات</p>\n<!-- /wp:phenix/text -->\n\n<!-- wp:image {\"id\":55,\"width\":160,\"height\":30,\"sizeSlug\":\"large\",\"linkDestination\":\"custom\",\"lock\":{\"move\":true,\"remove\":true}} -->\n<figure class=\"wp-block-image size-large is-resized\"><a href=\"https://phenixthemes.com\"><img src=\"https://localhost/that-consulting/wp-content/uploads/sites/17/2023/05/pxc-logo-revert.svg\" alt=\"\" class=\"wp-image-55\" width=\"160\" height=\"30\"/></a></figure>\n<!-- /wp:image --></div>\n<!-- /wp:phenix/column --></div></div>\n<!-- /wp:phenix/container -->"
                // ),
                // array('name' => "slide-hero",
                //     'title'  => "Hero Slide",
                //     'width'  => 1600,
                //     'category' => array("phenix", "single", "sections"),
                //     'content'  => "<!-- wp:phenix/container {\"size\":\"container\",\"isSection\":true,\"flexbox\":{\"align\":\"\",\"nowrap\":\"\",\"flowCols\":\"flow-columns\",\"stacked\":\"\"},\"typography\":{\"color\":\"color-secondary-dark\",\"align\":\"\"},\"style\":{\"background\":{\"type\":\"image\",\"rotate\":\"bg-grade-45\",\"value\":\"https://phenixthemes.com/wp-content/plugins/pds-blocks/assets/img/placeholder-21x9-1.svg\"},\"support\":[\"enable-padding\"],\"pdt\":\"50\",\"pdb\":\"50\"},\"align\":\"full\",\"lock\":{\"move\":false,\"remove\":false},\"className\":\"hero-slide no-zoom\"} -->\n<div class=\"wp-block-phenix-container alignfull hero-slide no-zoom px-media bg-grade-45 pdt-50 pdb-50\" data-src=\"https://phenixthemes.com/wp-content/plugins/pds-blocks/assets/img/placeholder-21x9-1.svg\"><div class=\" container color-secondary-dark\"><!-- wp:phenix/row {\"flexbox\":{\"align\":\" align-center-y align-between align-between\"},\"className\":\"full-screen-wide\"} -->\n<div class=\"wp-block-phenix-row full-screen-wide row align-center-y align-between align-between\"><!-- wp:phenix/column {\"size\":\"12\",\"responsive\":{\"size-md\":8,\"size-lg\":7}} -->\n<div class=\"wp-block-phenix-column col-12 col-md-8 col-lg-7\"><!-- wp:phenix/text {\"type\":\"headline\",\"tagName\":\"h2\",\"content\":\"Hero Slider Title Goes Here\",\"typography\":{\"weight\":\"weight-strong\"},\"style\":{\"support\":[\"enable-margin\"],\"mb\":\"30\"}} -->\n<h2 class=\"wp-block-phenix-text headline weight-strong mb-30\">Hero Slider Title Goes Here</h2>\n<!-- /wp:phenix/text -->\n\n<!-- wp:phenix/text {\"content\":\"In the ever-evolving world of web development, staying ahead of the curve is crucial for success. With the rapid advancements in technology and design, developers are constantly seeking innovative solutions to create seamless, user-friendly, and visually stunning web applications. Enter Phenix, the game-changing design system for web apps and front-end development that is set to revolutionize the way you approach WordPress development.\",\"typography\":{\"size-lg\":\"fs-lg-17\"},\"style\":{\"support\":[\"enable-margin\"],\"mb\":\"30\"}} -->\n<p class=\"wp-block-phenix-text paragraph fs-lg-17 mb-30\">In the ever-evolving world of web development, staying ahead of the curve is crucial for success. With the rapid advancements in technology and design, developers are constantly seeking innovative solutions to create seamless, user-friendly, and visually stunning web applications. Enter Phenix, the game-changing design system for web apps and front-end development that is set to revolutionize the way you approach WordPress development.</p>\n<!-- /wp:phenix/text -->\n\n<!-- wp:phenix/text {\"content\":\"Phenix is a comprehensive design system that combines the power of HTML, CSS, SASS, JavaScript, TypeScript, React, and Gutenberg to deliver an unparalleled development experience. With its cutting-edge tech stack, Phenix empowers developers to create visually stunning, high-performance web applications with ease.\",\"typography\":{\"size-lg\":\"fs-lg-17\"}} -->\n<p class=\"wp-block-phenix-text paragraph fs-lg-17\">Phenix is a comprehensive design system that combines the power of HTML, CSS, SASS, JavaScript, TypeScript, React, and Gutenberg to deliver an unparalleled development experience. With its cutting-edge tech stack, Phenix empowers developers to create visually stunning, high-performance web applications with ease.</p>\n<!-- /wp:phenix/text --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"style\":{\"support\":[\"enable-display\"],\"display\":[\"hidden-sm-down\"]},\"responsive\":{\"size-md\":5,\"size-lg\":0}} -->\n<div class=\"wp-block-phenix-column col-auto col-md-5\"><!-- wp:image {\"id\":42,\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https://phenixthemes.com/wp-content/plugins/pds-blocks/assets/img/placeholder-1x1-1.svg\" alt=\"\" class=\"wp-image-42\"/></figure>\n<!-- /wp:image --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row --></div></div>\n<!-- /wp:phenix/container -->"
                // ),
                array('name' => "section-head",
                    'title'  => "Section Head",
                    'width'  => 640,
                    'category' => array("phenix", "elements", "sections"),
                    'content'  => "<!-- wp:phenix/group {\"typography\":{\"align\":\"tx-align-center\"},\"style\":{\"support\":[\"enable-margin\"],\"mb\":\"40\"},\"className\":\"w-max-640 mgx-auto\"} -->\n<div class=\"wp-block-phenix-group w-max-640 mgx-auto tx-align-center mb-40\"><!-- wp:phenix/text {\"type\":\"headline\",\"tagName\":\"h2\",\"content\":\"Section Title Here\",\"typography\":{\"color\":\"color-primary\",\"tx-uppercase\":\"tx-uppercase\"},\"style\":{\"support\":[\"enable-margin\"],\"mb\":\"15\"}} -->\n<h2 class=\"wp-block-phenix-text headline color-primary tx-uppercase mb-15\">Section Title Here</h2>\n<!-- /wp:phenix/text -->\n\n<!-- wp:phenix/text {\"content\":\"Phenix leverages the power of SASS, a popular CSS preprocessor, to streamline your development workflow.\",\"typography\":{\"size\":\"fs-15\"}} -->\n<p class=\"wp-block-phenix-text paragraph fs-15\">Phenix leverages the power of SASS, a popular CSS preprocessor, to streamline your development workflow.</p>\n<!-- /wp:phenix/text --></div>\n<!-- /wp:phenix/group -->"
                ),
                array('name' => "logo-card",
                    'title'  => "Logo Card",
                    'width'  => 250,
                    'category' => array("phenix", "cards", "elements"),
                    'content'  => "<!-- wp:phenix/group {\"isFlexbox\":true,\"flexbox\":{\"align\":\" align-center-x align-center-y align-center-y\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-white\"},\"support\":[\"enable-padding\",\"enable-radius\"],\"pdt\":\"5\",\"pdb\":\"5\",\"pde\":\"10\",\"pds\":\"10\",\"radius\":\"radius-lg\"},\"className\":\"border-1 border-solid border-alpha-10\"} -->\n<div class=\"wp-block-phenix-group border-1 border-solid border-alpha-10 flexbox align-center-x align-center-y align-center-y bg-white pdt-5 pdb-5 pde-10 pds-10 radius-lg\"><!-- wp:image {\"id\":45,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"pd-5\"} -->\n<figure class=\"wp-block-image size-large pd-5\"><img src=\"https://phenixthemes.com/wp-content/plugins/pds-blocks/assets/img/placeholder-21x9-1.svg\" alt=\"\" class=\"wp-image-45\"/></figure>\n<!-- /wp:image --></div>\n<!-- /wp:phenix/group -->"
                ),
                array('name' => "lightbox-image",
                    'title'  => "Lightbox Image",
                    'width'  => 190,
                    'category' => array("phenix", "cards", "elements"),
                    'content'  => "<!-- wp:image {\"id\":45,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"lightbox-image tx-align-center\"} -->\n<figure class=\"wp-block-image size-large lightbox-image tx-align-center\"><img src=\"https://phenixthemes.com/wp-content/plugins/pds-blocks/assets/img/placeholder-21x9-1.svg\" alt=\"\" class=\"wp-image-45\"/><figcaption class=\"wp-element-caption\">ISO #95612</figcaption></figure>\n<!-- /wp:image -->"
                ),
                array('name' => "testimonial-card",
                    'title'  => "Testimonial Card",
                    'width'  => 320,
                    'category' => array("phenix", "cards", "elements"),
                    'content'  => "<!-- wp:phenix/group {\"flexbox\":{\"align\":\"\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-offwhite-secondary\"},\"support\":[\"enable-radius\",\"enable-padding\"],\"radius\":\"radius-lg\",\"pds\":\"25\",\"pde\":\"25\",\"pdt\":\"25\",\"pdb\":\"10\"},\"className\":\"h-min-100\"} -->\n<div class=\"wp-block-phenix-group h-min-100 bg-offwhite-secondary radius-lg pds-25 pde-25 pdt-25 pdb-10\"><!-- wp:phenix/text {\"content\":\"إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي\",\"typography\":{\"size\":\"fs-14\"},\"style\":{\"support\":[\"enable-margin\"],\"mb\":\"15\"}} -->\n<p class=\"wp-block-phenix-text paragraph fs-14 mb-15\">إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي</p>\n<!-- /wp:phenix/text -->\n\n<!-- wp:phenix/group {\"isFlexbox\":true,\"flexbox\":{\"align\":\" align-center-y\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"\"}},\"className\":\"flexbox align-center-y\"} -->\n<div class=\"wp-block-phenix-group flexbox align-center-y flexbox align-center-y\"><!-- wp:image {\"id\":42,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"avatar-image-sm radius-circle me-10\"} -->\n<figure class=\"wp-block-image size-large avatar-image-sm radius-circle me-10\"><img src=\"https://phenixthemes.com/wp-content/plugins/pds-blocks/assets/img/placeholder-1x1-1.svg\" alt=\"\" class=\"wp-image-42\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:heading {\"level\":6,\"className\":\"fs-14 mb-0\"} -->\n<h6 class=\"wp-block-heading fs-14 mb-0\">اسم العميل يقع هنا</h6>\n<!-- /wp:heading --></div>\n<!-- /wp:phenix/group --></div>\n<!-- /wp:phenix/group -->"
                ),
                // array('name' => "column-with-icon",
                //     'title'  => "Column with icon",
                //     'width'  => 320,
                //     'category' => array("phenix", "cards", "elements"),
                //     'content'  => "<!-- wp:phenix/column {\"size\":\"12\",\"responsive\":{\"size-md\":\"4\",\"size-lg\":\"3\"}} -->\n<div class=\"wp-block-phenix-column col-12 col-md-4 col-lg-3\"><!-- wp:phenix/icon-element {\"typography\":{\"size\":\"h1\"},\"style\":{\"icon\":\"far fa-balance-scale\",\"support\":[\"enable-margin\"],\"mb\":\"15\"}} -->\n<i class=\"wp-block-phenix-icon-element font h1 far fa-balance-scale mb-15 tx-align-center inline-block\"></i>\n<!-- /wp:phenix/icon-element -->\n\n<!-- wp:phenix/text {\"type\":\"headline\",\"tagName\":\"h3\",\"content\":\"Icon Block Title Goes Here\",\"typography\":{\"size\":\"fs-16\",\"weight\":\"weight-strong\"},\"style\":{\"support\":[\"enable-margin\"],\"mb\":\"10\"}} -->\n<h3 class=\"wp-block-phenix-text headline fs-16 weight-strong mb-10\">Icon Block Title Goes Here</h3>\n<!-- /wp:phenix/text -->\n\n<!-- wp:paragraph {\"style\":{\"typography\":{\"fontSize\":\"0.85rem\"}}} -->\n<p style=\"font-size:0.85rem\">Are you in need of a software developer who can bring innovative and efficient solutions to your business</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:phenix/column -->"
                // ),
                // array('name' => "contact-info-column",
                //     'title'  => "Contact info Column",
                //     'width'  => 320,
                //     'category' => array("phenix", "cards", "elements"),
                //     'content'  => "<!-- wp:phenix/column {\"responsive\":{\"size-md\":4},\"className\":\"col-12\"} -->\n<div class=\"wp-block-phenix-column col-12 col-auto col-md-4\"><!-- wp:phenix/group {\"isFlexbox\":true,\"flexbox\":{\"nowrap\":\"flow-nowrap\"},\"className\":\"flexbox flow-nowrap\"} -->\n<div class=\"wp-block-phenix-group flexbox flow-nowrap flexbox flow-nowrap\"><!-- wp:phenix/icon-element {\"typography\":{\"size\":\"h1\"},\"style\":{\"icon\":\"fas fa-phone-alt\",\"support\":[\"enable-margin\"],\"me\":\"15\"}} -->\n<i class=\"wp-block-phenix-icon-element font h1 fas fa-phone-alt me-15 tx-align-center inline-block\"></i>\n<!-- /wp:phenix/icon-element -->\n\n<!-- wp:phenix/group {\"className\":\"col\"} -->\n<div class=\"wp-block-phenix-group col\"><!-- wp:phenix/text {\"type\":\"headline\",\"tagName\":\"h3\",\"content\":\"Call Us On :\",\"typography\":{\"size\":\"fs-12\"}} -->\n<h3 class=\"wp-block-phenix-text headline fs-12\">Call Us On :</h3>\n<!-- /wp:phenix/text -->\n\n<!-- wp:phenix/text {\"content\":\"+002 - 1122 - 9745 - 39\"} -->\n<p class=\"wp-block-phenix-text paragraph\">+002 - 1122 - 9745 - 39</p>\n<!-- /wp:phenix/text --></div>\n<!-- /wp:phenix/group --></div>\n<!-- /wp:phenix/group --></div>\n<!-- /wp:phenix/column -->"
                // ),
                // array('name' => "blog-example",
                //     'title'  => "Standard Blog",
                //     'width'  => 950,
                //     'category' => array("phenix", "single"),
                //     'content'  => "<!-- wp:image {\"id\":84,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"mb-30\"} -->\n<figure class=\"wp-block-image size-large mb-30\"><img src=\"https://via.placeholder.com/960x420.webp\" alt=\"\" class=\"wp-image-84\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:phenix/text {\"type\":\"headline\",\"tagName\":\"h2\",\"content\":\"Introducing Phenix: The Game-Changing Design System for Web Apps and Front-End Development\",\"typography\":{\"weight\":\"weight-strong\"},\"style\":{\"support\":[\"enable-padding\"],\"pdb\":\"30\"}} -->\n<h2 class=\"wp-block-phenix-text headline weight-strong pdb-30\">Introducing Phenix: The Game-Changing Design System for Web Apps and Front-End Development</h2>\n<!-- /wp:phenix/text -->\n\n<!-- wp:phenix/theme-part {\"part_name\":\"post/info\",\"lock\":{\"move\":false,\"remove\":false}} /-->\n\n<!-- wp:phenix/text {\"content\":\"In the ever-evolving world of web development, staying ahead of the curve is crucial for success. With the rapid advancements in technology and design, developers are constantly seeking innovative solutions to create seamless, user-friendly, and visually stunning web applications. Enter Phenix, the game-changing design system for web apps and front-end development that is set to revolutionize the way you approach WordPress development.\\u003cbr\\u003e\",\"style\":{\"support\":[\"enable-margin\"],\"mb\":\"15\"}} -->\n<p class=\"wp-block-phenix-text paragraph mb-15\">In the ever-evolving world of web development, staying ahead of the curve is crucial for success. With the rapid advancements in technology and design, developers are constantly seeking innovative solutions to create seamless, user-friendly, and visually stunning web applications. Enter Phenix, the game-changing design system for web apps and front-end development that is set to revolutionize the way you approach WordPress development.<br></p>\n<!-- /wp:phenix/text -->\n\n<!-- wp:phenix/text {\"content\":\"Phenix is a comprehensive design system that combines the power of HTML, CSS, SASS, JavaScript, TypeScript, React, and Gutenberg to deliver an unparalleled development experience. With its cutting-edge tech stack, Phenix empowers developers to create visually stunning, high-performance web applications with ease.\\u003cbr\\u003e\",\"style\":{\"support\":[\"enable-margin\"],\"mb\":\"20\"}} -->\n<p class=\"wp-block-phenix-text paragraph mb-20\">Phenix is a comprehensive design system that combines the power of HTML, CSS, SASS, JavaScript, TypeScript, React, and Gutenberg to deliver an unparalleled development experience. With its cutting-edge tech stack, Phenix empowers developers to create visually stunning, high-performance web applications with ease.<br></p>\n<!-- /wp:phenix/text -->\n\n<!-- wp:phenix/row -->\n<div class=\"wp-block-phenix-row row\"><!-- wp:phenix/column {\"size\":\"12\",\"responsive\":{\"size-md\":\"6\"}} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:phenix/text {\"type\":\"list\",\"tagName\":\"ul\",\"content\":\"\\u003cli\\u003eEnhanced Interactivity with JavaScript and TypeScript\\u003c/li\\u003e\\u003cli\\u003eSeamless Integration with React\\u003c/li\\u003e\\u003cli\\u003eGutenberg-Ready for WordPress Development\\u003c/li\\u003e\\u003cli\\u003eA Comprehensive Design System for Web Apps and Front-End Development\\u003c/li\\u003e\"} -->\n<ul class=\"wp-block-phenix-text list\"><li>Enhanced Interactivity with JavaScript and TypeScript</li><li>Seamless Integration with React</li><li>Gutenberg-Ready for WordPress Development</li><li>A Comprehensive Design System for Web Apps and Front-End Development</li></ul>\n<!-- /wp:phenix/text --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"12\",\"responsive\":{\"size-md\":\"6\"}} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:phenix/text {\"content\":\"Phenix leverages the power of SASS, a popular CSS preprocessor, to streamline your development workflow. With SASS, you can write clean, maintainable, and scalable CSS code, making it easier to manage your project\'s stylesheets. Phenix\'s SASS-based architecture allows you to harness the full potential of variables, mixins, and nesting, resulting in a more efficient and organized development process.\"} -->\n<p class=\"wp-block-phenix-text paragraph\">Phenix leverages the power of SASS, a popular CSS preprocessor, to streamline your development workflow. With SASS, you can write clean, maintainable, and scalable CSS code, making it easier to manage your project\'s stylesheets. Phenix\'s SASS-based architecture allows you to harness the full potential of variables, mixins, and nesting, resulting in a more efficient and organized development process.</p>\n<!-- /wp:phenix/text --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row -->\n\n<!-- wp:phenix/text {\"type\":\"headline\",\"tagName\":\"h3\",\"content\":\"Why Choose Phenix Themes?\",\"style\":{\"support\":[\"enable-margin\"],\"mb\":\"15\"}} -->\n<h3 class=\"wp-block-phenix-text headline mb-15\">Why Choose Phenix Themes?</h3>\n<!-- /wp:phenix/text -->\n\n<!-- wp:phenix/text {\"content\":\"There are several reasons why you should choose Phenix Themes for your web design and development needs. First, the company offers high-quality solutions that are both affordable and effective. Second, Abdullah Ramadan and his team are highly skilled and experienced in creating visually appealing and user-friendly websites that are optimized for search engines.\",\"style\":{\"support\":[\"enable-margin\"],\"mb\":\"30\"}} -->\n<p class=\"wp-block-phenix-text paragraph mb-30\">There are several reasons why you should choose Phenix Themes for your web design and development needs. First, the company offers high-quality solutions that are both affordable and effective. Second, Abdullah Ramadan and his team are highly skilled and experienced in creating visually appealing and user-friendly websites that are optimized for search engines.</p>\n<!-- /wp:phenix/text -->\n\n<!-- wp:phenix/row -->\n<div class=\"wp-block-phenix-row row\"><!-- wp:phenix/column {\"className\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6 col-auto\"><!-- wp:image {\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https://via.placeholder.com/780x500.webp\" alt=\"\"/></figure>\n<!-- /wp:image --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"className\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6 col-auto\"><!-- wp:phenix/text {\"type\":\"headline\",\"tagName\":\"h3\",\"content\":\"Why Choose Phenix Themes?\",\"style\":{\"support\":[\"enable-margin\"],\"mb\":\"15\"}} -->\n<h3 class=\"wp-block-phenix-text headline mb-15\">Why Choose Phenix Themes?</h3>\n<!-- /wp:phenix/text -->\n\n<!-- wp:phenix/text {\"content\":\"There are several reasons why you should choose Phenix Themes for your web design and development needs. First, the company offers high-quality solutions that are both affordable and effective. Second, Abdullah Ramadan and his team are highly skilled and experienced in creating visually appealing and user-friendly websites that are optimized for search engines.\"} -->\n<p class=\"wp-block-phenix-text paragraph\">There are several reasons why you should choose Phenix Themes for your web design and development needs. First, the company offers high-quality solutions that are both affordable and effective. Second, Abdullah Ramadan and his team are highly skilled and experienced in creating visually appealing and user-friendly websites that are optimized for search engines.</p>\n<!-- /wp:phenix/text -->\n\n<!-- wp:phenix/text {\"type\":\"list\",\"tagName\":\"ul\",\"content\":\"\\u003cli\\u003eEnhanced Interactivity with JavaScript and TypeScript\\u003c/li\\u003e\\u003cli\\u003eSeamless Integration with React\\u003c/li\\u003e\\u003cli\\u003eGutenberg-Ready for WordPress Development\\u003c/li\\u003e\\u003cli\\u003eA Comprehensive Design System for Web Apps and Front-End Development\\u003c/li\\u003e\"} -->\n<ul class=\"wp-block-phenix-text list\"><li>Enhanced Interactivity with JavaScript and TypeScript</li><li>Seamless Integration with React</li><li>Gutenberg-Ready for WordPress Development</li><li>A Comprehensive Design System for Web Apps and Front-End Development</li></ul>\n<!-- /wp:phenix/text --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row -->"
                // )
            );

            $default_locations = array(
                'main-menu' => 'Main Menu',
                'quick-links' => "Quick Links",
                'secondary-menu' => 'Secondary Menu',
            );

            //====> Define Template Meta <====//
            $default_templates_meta = array(
                //===> Dynamic Search Bar <===//
                "dynamic/search-bar" => array(
                    //===> Features <===//
                    "features" => array("grid", "spacing", "typography"),

                    //===> Options <===//
                    "options" => array(
                        "search-type" => array("type" => "string", "default" => "post"),
                        "taxonomies" => array("type" => "options", "default" => array(
                            "enable" => array("type" => "boolean", "default" => false),
                            "fields" => array("type" => "string", "default" => "1"),
                            "value"  => array("type" => "array", "default" => array("category")),
                        )),
                    ),
                )
            );

            //====> Conditional Options <====//
            $other_options = array();

            //====> Add WooCommerce Option <====//
            if (class_exists("woocommerce")) {
            array_push($other_options, array('pds_core_woo' => ""));
            } else {
                array_push($other_options, array('pds_core_woo' => "on"));
            }

            //====> Add Default Pages <====//
            $default_pages = array(
                //===> CF7 Success <===//
                'success' => array(
                    'type'    => 'page',
                    'title'   => 'Forms Success', 
                    'content' => '<!-- wp:pattern {"slug":"phenix/header-standard"} /-->'
                ),
            );

            //====> for Each Page <====//
            foreach ($default_pages as $slug => $info) {
                //===> if the page doesn't exist, create it <===//
                if (!get_page_by_path($slug, OBJECT, $info['type'])) {
                    $new_page_id = wp_insert_post(array(
                        'post_name'   => $slug,
                        'post_type'   => $info['type'],
                        'post_title'  => $info['title'], 
                        'post_status' => 'publish',
                        'post_content'=> $info['content'],
                    ));
                };
            };

            //====> Return Options <====//
            return array_merge(array(
                "pds_types" => $default_types,
                "block_patterns" => $default_patterns,
                "menu_locations" => $default_locations,
                "pds_taxonomies" => array(),
                "templates_meta" => $default_templates_meta,

                //===> Blocks settings <===//
                'pds_admin_style' => "on",
                'container_block' => "on",
                'logo_block' => "on",
                'navigation_block' => "on",
                'button_block' => "on",
                'row_block' => "on",
                'column_block' => "on",
                'head_block' => "on",
                'query_block' => "on",
                'taxonomies_list_block' => "on",
                'taxonomies_block' => "on",
                'theme_part_block' => "on",
                'group_block' => "on",
                'inline_elements_block' => "on",
                'popups_block' => "on",
                'media_element_block' => "on",
                'icon_element_block' => "on",
                'custom_code_block' => "on",
                'pds_logical_block' => "on",
                'pds_users_query_block' => "on",
                'text_elements_block' => "on",
                
                // 'tabs_block' => "on",
                // 'pds_form_block' => "on",
                // 'dropdowns_block' => "on",
                // 'accordion_block' => "on",
                // 'pds_gmaps_block' => "on",
                // 'pds_timer_block' => "on",
                // 'pds_languages_block' => "on",
                // 'pds_progress_block' => "on",
                // 'search_query_block' => "on",

                //===> Optimization settings <===//
                'head_cleaner' => "on",
                'wpc7_cleaner' => "on",
                'adminbar_css' => "on",
                'comments_css' => "on",
                'jquery_remove' => "on",
                'wpc7_rm_styles' => "on",
                'wpc7_rm_scripts' => "on",
                'blocks_optimizer' => "on",

                //===> Multiple Fonts <===//
                'pds_fonts' => array(
                    "primary" => 'somar-rounded',
                    "secondary" => 'somar-rounded',
                    "primary_rtl" => 'somar-rounded',
                    "secondary_rtl" => 'somar-rounded',
                ),

                'pds_icon_font' => "fontawesome-6-free",
            ), $other_options);
        }
    endif;

    //====> Set Default Options <====//
    if (!function_exists('pds_blocks_default_values') && function_exists('pds_get_default_options')) :
        /**
         * Set Default Options for Phenix Blocks
         * @since Phenix Blocks 1.0
         * @return void
        */

        //===> Set default values here <===//
        function pds_blocks_default_values() {
            if (function_exists('phenix_support')) {
                //===> Get Default Options <===//
                $default_options = pds_get_default_options();
                $is_reset_mode = get_option('pds_reset');
        
                //===> Add Options if not Exist <===//
                foreach ($default_options as $key => $value) { add_option($key, $value); }
        
                //===> Reset Options <===//
                if (isset($is_reset_mode) && $is_reset_mode !== "off") {
                    //===> Reset Data <===//
                    update_option($is_reset_mode, $default_options[$is_reset_mode]);
                    //===> Turn Off Reset <===//
                    update_option("pds_reset", "off");
                }
        
                //===> Set Templates Parts <===//
                $current_theme_parts = pds_get_theme_parts(new DirectoryIterator(get_template_directory()."/template-parts"));
                update_option('theme_parts', $current_theme_parts);
            }
        }

        add_action('init', 'pds_blocks_default_values');
    endif;