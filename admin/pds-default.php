<?php
/**
 * Main Admin Page for Phenix Blocks
 * @since Phenix WP 1.0
 * @return void
*/

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
            array('name' => "header-standard",
                'title'  => "Header Standard",
                'width'  => 1200,
                'category' => array("phenix", "headers"),
                'content'  => "<!-- wp:phenix/container {\"size\":\"container-xl\",\"isSection\":true,\"isFlexbox\":true,\"flexbox\":{\"align\":\" align-between align-center-y align-center-y\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-alpha-15\"}},\"align\":\"full\",\"className\":\"pdy-10\"} -->\n<div class=\"wp-block-phenix-container alignfull pdy-10 bg-alpha-15\"><div class=\"flexbox container-xl  align-between align-center-y align-center-y\"><!-- wp:phenix/logo {\"site_title\":\"Phenix Themes\",\"logo\":\"http://localhost/wp-content/uploads/2023/03/phenix-themes-x-ar.svg\",\"size\":\"42\",\"width\":\"160\",\"logo_id\":250,\"favicon_id\":168,\"fevicon\":\"http://localhost/wp-content/uploads/2023/02/px-icon-1.svg\",\"responsive\":true,\"use_fevicon\":true} -->\n<a class=\"wp-block-phenix-logo inline-block\" href=\"#none\" title=\"Phenix Themes\"><img src=\"http://localhost/wp-content/uploads/2023/03/phenix-themes-x-ar.svg\" class=\"hidden-md-down\" alt=\"Phenix Themes\" style=\"max-height:42px\" width=\"160\" height=\"42\"/><img src=\"http://localhost/wp-content/uploads/2023/02/px-icon-1.svg\" class=\"hidden-lg-up\" alt=\"Phenix Themes\" width=\"42\" height=\"42\"/></a>\n<!-- /wp:phenix/logo -->\n\n<!-- wp:phenix/navigation {\"menu_id\":\"main-menu\",\"responsive\":true,\"mobile_mode\":\"custom\",\"effect\":\"fade\",\"direction\":\"flexbox\",\"hover\":true,\"typography\":{\"size\":\"14px\",\"color\":\"color-primary-dark\",\"color_hvr\":\"color-primary\"}} /-->\n\n<!-- wp:phenix/group -->\n<div class=\"wp-block-phenix-group flexbox\"><!-- wp:phenix/button {\"label\":\"هيا لنتحدث!\",\"type\":\"btn btn-icon\",\"icon\":\"fab fa-whatsapp\",\"size\":\"small\",\"radius\":\"radius-md\",\"typography\":{\"size\":\"fs-13\",\"color\":\"\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-whatsapp\"}},\"className\":\"icon-lg\"} -->\n<button class=\"wp-block-phenix-button icon-lg fs-13 bg-whatsapp btn btn-icon small radius-md fab fa-whatsapp\">هيا لنتحدث!</button>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"label\":\"\",\"type\":\"btn square\",\"icon\":\"far fa-bars\",\"size\":\"small\",\"radius\":\"radius-md\",\"data_id\":\"main-menu\",\"typography\":{\"color\":\"\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-primary\"}},\"className\":\"ms-10 hidden-lg-up\"} -->\n<button class=\"wp-block-phenix-button ms-10 hidden-lg-up primary menu-toggle btn square small radius-md far fa-bars\" data-id=\"main-menu\"></button>\n<!-- /wp:phenix/button --></div>\n<!-- /wp:phenix/group --></div></div>\n<!-- /wp:phenix/container -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"inNewTab\":true,\"iconLabel\":true,\"label\":\"تحدث معنا عبر الواتس اب\",\"url\":\"https://wa.me/01122974539\",\"type\":\"btn btn-icon\",\"icon\":\"fab fa-whatsapp\",\"radius\":\"radius-md\",\"background\":\"bg-whatsapp\",\"color\":\"color-white\",\"typography\":{\"color\":\"color-secondary-dark\",\"size\":\"fs-13\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-whatsapp\"}},\"className\":\"position-fx pos-bottom-30 pos-start-30 z-index-dropdown icon-lg\"} -->\n<a class=\"wp-block-phenix-button position-fx pos-bottom-30 pos-start-30 z-index-dropdown icon-lg fs-13 color-secondary-dark bg-whatsapp btn btn-icon normal radius-md fab fa-whatsapp\" href=\"https://wa.me/01122974539\" rel=\"noopener\" target=\"_blank\">تحدث معنا عبر الواتس اب</a>\n<!-- /wp:phenix/button -->"
            ),
            array('name' => "page-head",
                'title'  => "Page Head Standard",
                'width'  => 1200,
                'category' => array("phenix", "section"),
                'content'  => "<!-- wp:phenix/container {\"size\":\"container\",\"isSection\":true,\"typography\":{\"color\":\"\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-alpha-05\"}},\"className\":\"pdy-30\"} -->\n<div class=\"wp-block-phenix-container pdy-30 bg-alpha-05\"><div class=\"container\"><!-- wp:phenix/page-head /--></div></div>\n<!-- /wp:phenix/container -->"
            ),
            array('name' => "popup-standard",
                'title'  => "Popup/Modal Standard",
                'width'  => 900,
                'category' => array("phenix", "section", "headers", "footers"),
                'content'  => "<!-- wp:phenix/popup {\"id\":\"order-form\"} -->\n<div class=\"wp-block-phenix-popup alignfull px-modal hidden align-center\" id=\"order-form\"><!-- wp:phenix/container {\"size\":\"container-sm\",\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-white\"}},\"align\":\"full\",\"className\":\"pd-25 radius-md\"} -->\n<div class=\"wp-block-phenix-container alignfull pd-25 radius-md bg-white container-sm\"><!-- wp:heading {\"level\":3,\"textColor\":\"primary\",\"className\":\"pdb-10 divider-b fs-16 mb-15\"} -->\n<h3 class=\"pdb-10 divider-b fs-16 mb-15 has-primary-color has-text-color\">نموذج طلب استشارة</h3>\n<!-- /wp:heading -->\n\n<!-- wp:contact-form-7/contact-form-selector {\"id\":105,\"title\":\"طلب خدمة\"} -->\n<div class=\"wp-block-contact-form-7-contact-form-selector\">[contact-form-7 id=\"105\" title=\"طلب خدمة\"]</div>\n<!-- /wp:contact-form-7/contact-form-selector --></div>\n<!-- /wp:phenix/container --></div>\n<!-- /wp:phenix/popup -->"
            ),
            array('name' => "footer-standard",
                'title'  => "Footer Standard",
                'width'  => 1200,
                'category' => array("phenix", "footers"),
                'content'  => "<!-- wp:phenix/container {\"size\":\"container-xl\",\"isSection\":true,\"typography\":{\"color\":\"color-white\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-primary-dark\"}},\"align\":\"full\",\"className\":\"pdt-40 main-footer\"} -->\r\n<div class=\"wp-block-phenix-container alignfull pdt-40 main-footer bg-primary-dark\"><div class=\"container-xl color-white\"><!-- wp:phenix/row {\"className\":\"gpy-30 gpy-fix\"} -->\r\n<div class=\"wp-block-phenix-row gpy-30 gpy-fix row\"><!-- wp:phenix/column {\"size\":12,\"responsive\":{\"size-md\":6,\"size-lg\":4},\"className\":\"pdb-30\"} -->\r\n<div class=\"wp-block-phenix-column pdb-30 col-12 col-md-6 col-lg-4\"><!-- wp:heading {\"level\":4,\"className\":\"fs-17 mb-15\"} -->\r\n<h4 class=\"fs-17 mb-15\">نبذة عن فينكس</h4>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph {\"fontSize\":\"small\"} -->\r\n<p class=\"has-small-font-size\">هناك عدة طرق مختلفة يمكن من خلالها استخدام الذكاء الاصطناعي لكتابة البادئات. يتمثل أحد الأساليب في استخدام خوارزميات معالجة اللغة الطبيعية لتحليل مجموعة من المقالات الموجودة وتحديد الأنماط الشائعة. بمجرد تحديد هذه الأنماط، يمكن لنظام الذكاء الاصطناعي إنشاء بادئات جديدة وفقًا لذلك. هناك طريقة أخرى تتمثل في استخدام خوارزميات التعلم الآلي للتعلم من مجموعة من البيانات المصنفة يدويًا.</p>\r\n<!-- /wp:paragraph --></div>\r\n<!-- /wp:phenix/column -->\r\n\r\n<!-- wp:phenix/column {\"size\":12,\"responsive\":{\"size-md\":3,\"size-lg\":2},\"className\":\"mb-30\"} -->\r\n<div class=\"wp-block-phenix-column mb-30 col-12 col-md-3 col-lg-2\"><!-- wp:heading {\"level\":4,\"className\":\"fs-17 mb-15\"} -->\r\n<h4 class=\"fs-17 mb-15\">روابط سريعة</h4>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:phenix/navigation {\"menu_id\":\"footer-menu\",\"className\":\"links-list\"} /--></div>\r\n<!-- /wp:phenix/column -->\r\n\r\n<!-- wp:phenix/column {\"size\":12,\"responsive\":{\"size-md\":3,\"size-lg\":2},\"className\":\"mb-30\"} -->\r\n<div class=\"wp-block-phenix-column mb-30 col-12 col-md-3 col-lg-2\"><!-- wp:heading {\"level\":4,\"className\":\"fs-17 mb-15\"} -->\r\n<h4 class=\"fs-17 mb-15\">خدماتنا</h4>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:phenix/navigation {\"menu_id\":\"footer-menu-2\",\"className\":\"links-list mb-20\"} /--></div>\r\n<!-- /wp:phenix/column -->\r\n\r\n<!-- wp:phenix/column {\"size\":12,\"responsive\":{\"size-md\":0,\"size-lg\":4},\"className\":\"pdb-30\"} -->\r\n<div class=\"wp-block-phenix-column pdb-30 col-12 col-lg-4\"><!-- wp:heading {\"level\":4,\"className\":\"fs-17 mb-15\"} -->\r\n<h4 class=\"fs-17 mb-15\">النشرة الاخبارية</h4>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph {\"className\":\"fs-13\"} -->\r\n<p class=\"fs-13\">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى</p>\r\n<!-- /wp:paragraph -->\r\n\r\n<!-- wp:contact-form-7/contact-form-selector {\"id\":60,\"title\":\"النشرة الاخبارية\"} -->\r\n<div class=\"wp-block-contact-form-7-contact-form-selector\">[contact-form-7 id=\"60\" title=\"النشرة الاخبارية\"]</div>\r\n<!-- /wp:contact-form-7/contact-form-selector -->\r\n\r\n<!-- wp:phenix/group -->\r\n<div class=\"wp-block-phenix-group flexbox\"><!-- wp:phenix/button {\"isLink\":true,\"type\":\"btn square\",\"icon\":\"fab fa-instagram\",\"size\":\"small\",\"radius\":\"radius-sm\",\"background\":\"bg-dribbble\",\"color\":\"color-white\",\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-dribbble\"}},\"className\":\"me-10 fs-16 color-white\"} -->\r\n<a class=\"wp-block-phenix-button me-10 fs-16 color-white bg-dribbble btn square small radius-sm fab fa-instagram\" href=\"#none\" rel=\"noopener\"></a>\r\n<!-- /wp:phenix/button -->\r\n\r\n<!-- wp:phenix/button {\"isLink\":true,\"type\":\"btn square\",\"icon\":\"fab fa-linkedin-in\",\"size\":\"small\",\"radius\":\"radius-sm\",\"background\":\"bg-flicker\",\"color\":\"color-white\",\"typography\":{\"size\":\"fs-16\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-linkedin\"}},\"className\":\"me-10\"} -->\r\n<a class=\"wp-block-phenix-button me-10 fs-16 bg-linkedin btn square small radius-sm fab fa-linkedin-in\" href=\"#none\" rel=\"noopener\"></a>\r\n<!-- /wp:phenix/button -->\r\n\r\n<!-- wp:phenix/button {\"isLink\":true,\"type\":\"btn square\",\"icon\":\"fab fa-whatsapp\",\"size\":\"small\",\"radius\":\"radius-sm\",\"background\":\"bg-whatsapp\",\"color\":\"color-white\",\"typography\":{\"size\":\"fs-16\",\"color\":\"color-white\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-whatsapp\"}},\"className\":\"me-10\"} -->\r\n<a class=\"wp-block-phenix-button me-10 fs-16 color-white bg-whatsapp btn square small radius-sm fab fa-whatsapp\" href=\"#none\" rel=\"noopener\"></a>\r\n<!-- /wp:phenix/button -->\r\n\r\n<!-- wp:phenix/button {\"isLink\":true,\"type\":\"btn square\",\"icon\":\"fab fa-twitter\",\"size\":\"small\",\"radius\":\"radius-sm\",\"background\":\"bg-twitter\",\"color\":\"color-white\",\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-twitter\"}},\"className\":\"me-10 fs-16 color-white\"} -->\r\n<a class=\"wp-block-phenix-button me-10 fs-16 color-white bg-twitter btn square small radius-sm fab fa-twitter\" href=\"#none\" rel=\"noopener\"></a>\r\n<!-- /wp:phenix/button -->\r\n\r\n<!-- wp:phenix/button {\"isLink\":true,\"type\":\"btn square\",\"icon\":\"fab fa-facebook-f\",\"size\":\"small\",\"radius\":\"radius-sm\",\"background\":\"bg-facebook\",\"color\":\"color-white\",\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-facebook\"}},\"className\":\"me-10 fs-16 color-white\"} -->\r\n<a class=\"wp-block-phenix-button me-10 fs-16 color-white bg-facebook btn square small radius-sm fab fa-facebook-f\" href=\"#none\" rel=\"noopener\"></a>\r\n<!-- /wp:phenix/button --></div>\r\n<!-- /wp:phenix/group --></div>\r\n<!-- /wp:phenix/column --></div>\r\n<!-- /wp:phenix/row -->\r\n\r\n<!-- wp:phenix/column {\"size\":12,\"responsive\":{\"size-md\":0,\"size-lg\":0},\"className\":\"divider-t pdy-15\"} -->\r\n<div class=\"wp-block-phenix-column divider-t pdy-15 col-12\"><!-- wp:paragraph {\"className\":\"tx-align-center fs-13 lineheight-130\"} -->\r\n<p class=\"tx-align-center fs-13 lineheight-130\">جميع الحقوق محفوظة لموقع فينكس © 2023</p>\r\n<!-- /wp:paragraph --></div>\r\n<!-- /wp:phenix/column --></div></div>\r\n<!-- /wp:phenix/container -->"
            ),
            array('name' => "call-to-action",
                'title'  => "Call to Action",
                'width'  => 1200,
                'category' => array("phenix", "sections"),
                'content'  => "<!-- wp:phenix/container {\"size\":\"container\",\"isSection\":true,\"typography\":{\"align\":\"\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-offwhite-secondary\"}},\"className\":\"pdy-30 pdy-lg-40 px-animate\"} -->\n<div class=\"wp-block-phenix-container pdy-30 pdy-lg-40 px-animate bg-offwhite-secondary\"><div class=\"container\"><!-- wp:phenix/row {\"flexbox\":{\"align\":\" align-center-y align-between align-between\"},\"className\":\"gpy-20 gpy-fix\"} -->\n<div class=\"wp-block-phenix-row gpy-20 gpy-fix row  align-center-y align-between align-between\"><!-- wp:phenix/column {\"size\":12,\"responsive\":{\"size-md\":9,\"size-lg\":10}} -->\n<div class=\"wp-block-phenix-column col-12 col-md-9 col-lg-10\"><!-- wp:heading {\"level\":4,\"textColor\":\"primary\",\"className\":\"mb-10\"} -->\n<h4 class=\"mb-10 has-primary-color has-text-color\">تواصل معنا الان واحظي بافضل الصفقات والعروض على خدماتنا ومنتجاتنا</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>موهبتك نحو الأهداف الصحيحة ضروري للنجاح. كان جورج واشنطن قائدًا عسكريًا موهوبًا تحمل عبء قيادة الجيش القاري إلى النصر.</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":12,\"responsive\":{\"size-md\":3,\"size-lg\":2}} -->\n<div class=\"wp-block-phenix-column col-12 col-md-3 col-lg-2\"><!-- wp:phenix/button {\"label\":\"تحدث معنا الان\",\"radius\":\"radius-md\",\"data_modal\":\"contact-form\",\"typography\":{\"size\":\"fs-14\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-primary\"}},\"className\":\"fluid\"} -->\n<button class=\"wp-block-phenix-button fluid btn fs-14 primary normal normal radius-md\" data-modal=\"contact-form\">تحدث معنا الان</button>\n<!-- /wp:phenix/button --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row --></div></div>\n<!-- /wp:phenix/container -->"
            ),
            array('name' => "slide-hero",
                'title'  => "Hero Slide",
                'width'  => 1200,
                'category' => array("phenix", "single", "sections"),
                'content'  => "<!-- wp:phenix/container {\"isFlexbox\":true,\"flexbox\":{\"align\":\"align-start-y align-center-x align-center-y\",\"nowrap\":\"\",\"flowCols\":\"flow-columns\",\"stacked\":\"\"},\"typography\":{\"color\":\"color-white\",\"align\":\"tx-align-center\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":\"bg-grade-45\",\"value\":\"bg-alpha-05\"}},\"lock\":{\"move\":true,\"remove\":true},\"className\":\"full-screen-wide hero-slide pdy-50 fluid\"} -->\n<div class=\"wp-block-phenix-container full-screen-wide hero-slide pdy-50 fluid bg-alpha-05 bg-grade-45 flexbox  align-start-y align-center-x align-center-y color-white tx-align-center\"><!-- wp:phenix/group {\"isFlexbox\":false,\"className\":\"container\"} -->\n<div class=\"wp-block-phenix-group container\"><!-- wp:heading {\"className\":\"weight-medium mb-10\"} -->\n<h2 class=\"weight-medium mb-10\">الموقع الرائدة في صناعة أعمدة الصلب وخدمة الجلفنة</h2>\n<!-- /wp:heading -->\n\n<!-- wp:heading {\"className\":\"h1-md display-lg-h5  mb-30\"} -->\n<h2 class=\"h1-md display-lg-h5 mb-30\">تقدم منتجات وخدمات عالية الجودة لرضا العملاء التام منذ عام 1980</h2>\n<!-- /wp:heading -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"label\":\"خدماتنا\",\"url\":\"https://phenixthemes.com/galvanco/services\",\"radius\":\"radius-md\",\"typography\":{\"size\":\"fs-14\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-primary\"}},\"className\":\"w-min-150 me-15\"} -->\n<a class=\"wp-block-phenix-button w-min-150 me-15 btn fs-14 primary normal normal radius-md\" href=\"https://phenixthemes.com/galvanco/services\" rel=\"noopener\">خدماتنا</a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"label\":\"تواصل معنا\",\"url\":\"https://phenixthemes.com/galvanco/تواصل-معنا\",\"radius\":\"radius-md\",\"outline\":true,\"typography\":{\"size\":\"fs-14\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-secondary\"}},\"className\":\"w-min-150 me-15\"} -->\n<a class=\"wp-block-phenix-button w-min-150 me-15 btn fs-14 secondary normal normal radius-md outline\" href=\"https://phenixthemes.com/galvanco/تواصل-معنا\" rel=\"noopener\">تواصل معنا</a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"label\":\"منتجاتنا\",\"url\":\"https://phenixthemes.com/galvanco/services\",\"radius\":\"radius-md\",\"typography\":{\"size\":\"fs-14\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-white\"}},\"className\":\"w-min-150\"} -->\n<a class=\"wp-block-phenix-button w-min-150 btn fs-14 white normal normal radius-md\" href=\"https://phenixthemes.com/galvanco/services\" rel=\"noopener\">منتجاتنا</a>\n<!-- /wp:phenix/button --></div>\n<!-- /wp:phenix/group --></div>\n<!-- /wp:phenix/container -->"
            ),
            array('name' => "section-head",
                'title'  => "Section Head",
                'width'  => 640,
                'category' => array("phenix", "elements", "sections"),
                'content'  => "<!-- wp:phenix/group {\"isFlexbox\":false,\"typography\":{\"align\":\"tx-align-center\"},\"className\":\"mb-30 w-max-640 mgx-auto\"} -->\n<div class=\"wp-block-phenix-group mb-30 w-max-640 mgx-auto tx-align-center\"><!-- wp:heading {\"textColor\":\"primary\",\"className\":\"mb-10\"} -->\n<h2 class=\"mb-10 has-primary-color has-text-color\">عنوان المنطقة</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"className\":\"fs-15\"} -->\n<p class=\"fs-15\">إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:phenix/group -->"
            ),
            array('name' => "logo-card",
                'title'  => "Logo Card",
                'width'  => 250,
                'category' => array("phenix", "cards", "elements"),
                'content'  => "<!-- wp:phenix/column {\"className\":\"logo-block-lg col-12 col-md-3 col-lg-2\"} -->\r\n<div class=\"wp-block-phenix-column logo-block-lg col-12 col-md-3 col-lg-2\"><!-- wp:phenix/group {\"flexbox\":{\"align\":\" align-center-x align-center-y align-center-y\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-white\"}},\"className\":\"pdx-10 pdy-5 radius-md color-primary border-1 border-solid border-alpha-10\"} -->\r\n<div class=\"wp-block-phenix-group pdx-10 pdy-5 radius-md color-primary border-1 border-solid border-alpha-10 flexbox  align-center-x align-center-y align-center-y bg-white\"><!-- wp:image {\"id\":276,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"pd-5\"} -->\r\n<figure class=\"wp-block-image size-full pd-5\"><img src=\"https://localhost/galvanco/wp-content/uploads/sites/10/2023/02/STC-01.png\" alt=\"\" class=\"wp-image-276\"/></figure>\r\n<!-- /wp:image --></div>\r\n<!-- /wp:phenix/group --></div>\r\n<!-- /wp:phenix/column -->"
            ),
            array('name' => "lightbox-image",
                'title'  => "Lightbox Image",
                'width'  => 190,
                'category' => array("phenix", "cards", "elements"),
                'content'  => "<!-- wp:phenix/column -->\n<div class=\"wp-block-phenix-column\"><!-- wp:image {\"id\":428,\"sizeSlug\":\"full\",\"linkDestination\":\"none\",\"className\":\"lightbox-image tx-align-center\"} -->\n<figure class=\"wp-block-image size-full lightbox-image tx-align-center\"><img src=\"https://phenixthemes.com/galvanco/wp-content/uploads/sites/10/2023/02/placeholder-1.webp\" alt=\"\" class=\"wp-image-428\"/><figcaption class=\"wp-element-caption\">ISO #95612</figcaption></figure>\n<!-- /wp:image --></div>\n<!-- /wp:phenix/column -->"
            ),
            array('name' => "testimonial-card",
                'title'  => "Testimonial Card",
                'width'  => 320,
                'category' => array("phenix", "cards", "elements"),
                'content'  => "<!-- wp:phenix/column {\"size\":12,\"responsive\":{\"size-md\":6,\"size-lg\":4}} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6 col-lg-4\"><!-- wp:phenix/group {\"isFlexbox\":false,\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-offwhite-secondary\"}},\"className\":\"radius-md pdx-25 pdt-25 pdb-10 h-min-100\"} -->\n<div class=\"wp-block-phenix-group radius-md pdx-25 pdt-25 pdb-10 h-min-100 bg-offwhite-secondary\"><!-- wp:paragraph {\"className\":\"fs-13\"} -->\n<p class=\"fs-13\">إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:phenix/group {\"flexbox\":{\"align\":\" align-center-y\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"\"}}} -->\n<div class=\"wp-block-phenix-group flexbox  align-center-y\"><!-- wp:image {\"id\":165,\"width\":36,\"height\":36,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"avatar-image-sm radius-circle me-10\"} -->\n<figure class=\"wp-block-image size-large is-resized avatar-image-sm radius-circle me-10\"><img src=\"https://phenixthemes.com/asfco/wp-content/uploads/sites/8/2023/03/avatar.svg\" alt=\"\" class=\"wp-image-165\" width=\"36\" height=\"36\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:heading {\"level\":6,\"className\":\"fs-14 mb-0\"} -->\n<h6 class=\"fs-14 mb-0\">اسم العميل يقع هنا</h6>\n<!-- /wp:heading --></div>\n<!-- /wp:phenix/group --></div>\n<!-- /wp:phenix/group --></div>\n<!-- /wp:phenix/column -->"
            ),
            array('name' => "column-with-icon",
                'title'  => "Column with icon",
                'width'  => 320,
                'category' => array("phenix", "cards", "elements"),
                'content'  => "<!-- wp:phenix/column {\"className\":\"col-12 col-md-4 col-lg-3\"} -->\r\n<div class=\"wp-block-phenix-column col-12 col-md-4 col-lg-3\"><!-- wp:image {\"id\":260,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"w-75 inline-block mb-20\"} -->\r\n<figure class=\"wp-block-image size-large w-75 inline-block mb-20\"><img src=\"https://localhost/galvanco/wp-content/uploads/sites/10/2023/02/factory.svg\" alt=\"\" class=\"wp-image-260\"/></figure>\r\n<!-- /wp:image -->\r\n\r\n<!-- wp:heading {\"level\":3,\"className\":\"mb-10\",\"fontSize\":\"medium\"} -->\r\n<h3 class=\"mb-10 has-medium-font-size\">ميزة عن منتجات الشركة</h3>\r\n<!-- /wp:heading -->\r\n\r\n<!-- wp:paragraph {\"style\":{\"typography\":{\"fontSize\":\"0.85rem\"}}} -->\r\n<p style=\"font-size:0.85rem\">يحتوي النص المربّع على نمطين ، يشملان خلفية سوداء وخلفية بيضاء.هذا النوع من الحروف يحتوي على أحرف كبيرة فقط.</p>\r\n<!-- /wp:paragraph --></div>\r\n<!-- /wp:phenix/column -->"
            ),
            array('name' => "contact-info-column",
                'title'  => "Contact info Column",
                'width'  => 320,
                'category' => array("phenix", "cards", "elements"),
                'content'  => "<!-- wp:phenix/column {\"size\":12,\"responsive\":{\"size-md\":4}} -->\n<div class=\"wp-block-phenix-column col-12 col-md-4\"><!-- wp:phenix/group {\"flexbox\":{\"nowrap\":\"flow-nowrap\"}} -->\n<div class=\"wp-block-phenix-group flexbox flow-nowrap\"><!-- wp:image {\"id\":248,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"w-50\"} -->\n<figure class=\"wp-block-image size-large w-50\"><img src=\"https://phenixthemes.com/asfco/wp-content/uploads/sites/8/2023/03/fa-map-marker-alt.svg\" alt=\"\" class=\"wp-image-248\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:phenix/group {\"isFlexbox\":false,\"className\":\"col\"} -->\n<div class=\"wp-block-phenix-group col\"><!-- wp:heading {\"className\":\"fs-12\"} -->\n<h2 class=\"fs-12\">اعطينا زيارة!</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>جدة – المملكة العربية السعودية</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:phenix/group --></div>\n<!-- /wp:phenix/group --></div>\n<!-- /wp:phenix/column -->"
            ),
            array('name' => "divider-line",
                'title'  => "Divider Line",
                'width'  => 320,
                'category' => array("phenix", "elements"),
                'content'  => "<!-- wp:phenix/inline {\"content\":\"\",\"className\":\"my-30 divider-b container-md display-block\"} -->\n<span class=\"wp-block-phenix-inline my-30 divider-b container-md display-block\"></span>\n<!-- /wp:phenix/inline -->"
            ),
            array('name' => "error-404",
                'title'  => "Error 404 Standard",
                'width'  => 1200,
                'category' => array("phenix", "section", "single"),
                'content'  => "<!-- wp:phenix/container {\"size\":\"container-xl\",\"isSection\":true,\"typography\":{\"color\":\"\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-white\"}},\"lock\":{\"move\":false,\"remove\":false},\"className\":\"pdy-50 pdy-md-60\"} -->\n<div class=\"wp-block-phenix-container pdy-50 pdy-md-60 bg-white\"><div class=\"container-xl\"><!-- wp:phenix/row {\"flexbox\":{\"slider\":false,\"align\":\" align-center-y align-center-x align-center-x\"},\"className\":\"gpy-30 gpy-fix\"} -->\n<div class=\"wp-block-phenix-row gpy-30 gpy-fix row  align-center-y align-center-x align-center-x\"><!-- wp:phenix/column {\"className\":\"col-12 col-md-6 col-lg-5\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6 col-lg-5\"><!-- wp:image {\"id\":384,\"sizeSlug\":\"full\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-full\"><img src=\"https://via.placeholder.com/768x768\" alt=\"\" class=\"wp-image-384\"/></figure>\n<!-- /wp:image --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"className\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:heading {\"textColor\":\"danger\",\"className\":\"tx-uppercase color-success\"} -->\n<h2 class=\"tx-uppercase color-success has-danger-color has-text-color\">Error 404 Page not found</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>You have followed an incorrect link, or the page you are looking for may not be found.</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row --></div></div>\n<!-- /wp:phenix/container -->"
            ),
            array('name' => "success-standard",
                'title'  => "Success Standard",
                'width'  => 1200,
                'category' => array("phenix", "pages"),
                'content'  => "<!-- wp:phenix/container {\"size\":\"container-xl\",\"isSection\":true,\"typography\":{\"color\":\"\",\"align\":\"tx-align-center\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-offwhite-honeydew\"}},\"lock\":{\"move\":false,\"remove\":false},\"className\":\"pdy-50 pdy-md-60 px-animate\"} -->\n<div class=\"wp-block-phenix-container pdy-50 pdy-md-60 px-animate bg-offwhite-honeydew\"><div class=\"container-xl tx-align-center\"><!-- wp:image {\"id\":412,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"mb-20\"} -->\n<figure class=\"wp-block-image size-large mb-20\"><img src=\"https://via.placeholder.com/768x768\" alt=\"\" class=\"wp-image-412\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:heading {\"className\":\"tx-uppercase color-success lineheight-130\"} -->\n<h2 class=\"tx-uppercase color-success lineheight-130\">تم ارسال طلبك بنجاح</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>لقد تم ارسال طلبك بنجاح وسيتم الرد عليك خلال ال24 ساعة القادمة انتظرنا...</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:phenix/container -->"
            ),
            array('name' => "native-query",
                'title'  => "Native Query",
                'width'  => 1200,
                'category' => array("phenix", "pages", "single"),
                'content'  => "<!-- wp:phenix/container {\"size\":\"container\",\"isSection\":true,\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-white\"}},\"className\":\"pdy-50\"} -->\n<div class=\"wp-block-phenix-container pdy-50 bg-white\"><div class=\"container\"><!-- wp:phenix/query {\"template_part\":\"cards/blog\",\"pagination\":true,\"grid_mode\":true,\"grid\":{\"cols-md\":3,\"cols-lg\":4}} /--></div></div>\n<!-- /wp:phenix/container -->"
            ),
            array('name' => "blog-example",
                'title'  => "Standard Blog",
                'width'  => 950,
                'category' => array("phenix", "single"),
                'content'  => "<!-- wp:image {\"id\":84,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"mb-30\"} -->\n<figure class=\"wp-block-image size-large mb-30\"><img src=\"https://via.placeholder.com/960x420.webp\" alt=\"\" class=\"wp-image-84\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:heading -->\n<h2>خدمات شاملة للشركات والأفراد الذين يبحثون عن مشورة الخبراء</h2>\n<!-- /wp:heading -->\n\n<!-- wp:phenix/theme-part {\"part_name\":\"post/info\",\"lock\":{\"move\":true,\"remove\":true}} /-->\n\n<!-- wp:paragraph -->\n<p>شركة رائدة تقدم خدمات شاملة للشركات والأفراد الذين يبحثون عن مشورة الخبراء في الأمور الاقتصادية. يتمتع فريقهم من المهنيين ذوي الخبرة بمعرفة عميقة بأحدث الاتجاهات الاقتصادية ويلتزمون بتقديم النتائج التي تلبي احتياجات عملائهم.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>تقدم ABC مجموعة من الخدمات، بما في ذلك التحليل المالي والتنبؤ وأبحاث السوق وإعداد الميزانية وإدارة المخاطر. كما أنها تساعد في تطوير نماذج واستراتيجيات الأعمال الجديدة، فضلا عن الامتثال التنظيمي. فريقهم على دراية جيدة بلوائح الصناعة ويمكنه المساعدة في ضمان التزام الشركات بالقوانين الحالية.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>تفخر الموقع بتقديم خدمات عالية الجودة ونصائح مصممة خصيصًا لكل عميل على حدة. تم تدريب فريقهم تدريباً عالياً في مختلف مجالات الاقتصاد، بما في ذلك الاقتصاد الكلي والاقتصاد الجزئي والتجارة الدولية والتمويل والتمويل العام والتنمية الاقتصادية والمزيد.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>تدرك ABC أهمية البقاء في طليعة الاتجاهات الاقتصادية، وهذا هو السبب في أنها تقوم بإطلاع عملائها بانتظام على أحدث التطورات في هذا المجال. إنهم يسعون جاهدين لتقديم خدمات استشارية من الدرجة الأولى من شأنها أن تساعد عملائهم على النجاح في اقتصاد اليوم المتغير باستمرار.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":4} -->\n<h4>توظف ABC Consulting فريقًا من المهنيين المؤهلين تأهيلا عاليا</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>تشير كلمة Stoic عادة إلى شخص غير مبال بالألم أو اللذة أو الحزن أو اللذة. الاستخدام الحديث هو \"الشخص الذي يقمع المشاعر أو يتحملها بصبر\" ، وقد استخدم لأول مرة كاسم في عام 1579 وكصفة في عام 1596. على عكس مصطلح Epicurean ، فإن إدخال موسوعة ستانفورد للفلسفة على الرواقية ينص على أن \"معنى الصفة الإنجليزية \"الرواقية\" ليست مضللة بالكامل في أصلها الفلسفي \"</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:phenix/row -->\n<div class=\"wp-block-phenix-row row\"><!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:list -->\n<ul><!-- wp:list-item -->\n<li>الرواقية فلسفة تؤكد على إنكار اللذة وقبول الألم</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>الرواقية تحاول تحقيق حالة من السلام والهدوء</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>تعلم الرواقية أنه يمكن للمرء أن يحقق السعادة من خلال الانفصال الداخلي عن الأشياء المادية</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>الرواقية فلسفة تؤكد على إنكار اللذة وقبول الألم</li>\n<!-- /wp:list-item --></ul>\n<!-- /wp:list --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:paragraph -->\n<p>الرواقية هي مدرسة فلسفية نشأت في أوائل القرن الثالث قبل الميلاد. من اليونان القديمة وروما. إنها فلسفة الحياة التي تعظم المشاعر الإيجابية ، وتقلل من المشاعر السلبية ، وتساعد الأفراد على تطوير فضائلهم الشخصية.</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row -->\n\n<!-- wp:heading {\"level\":4} -->\n<h4>تقدم ABC مجموعة من الخدمات، بما في ذلك التحلي</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>تشتهر الفلسفة الرواقية بمجموعة أدواتها الخاصة بـ \"الممارسات الروحية\" المصممة لمساعدتك على التأقلم مع الحياة. لكن توصياته للعلاقات تبدو محدودة. يعتقد إبيكتيتوس (50-135 بعد الميلاد) ، الفيلسوف الروماني الرواقي الشهير ، أنه من أجل أن يكون المرء سعيدًا ، يجب على المرء أن يتجاوز نفسه ...</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:phenix/row -->\n<div class=\"wp-block-phenix-row row\"><!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:image {\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https://via.placeholder.com/780x500.webp\" alt=\"\"/></figure>\n<!-- /wp:image --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:heading {\"level\":4} -->\n<h4>يمكن أن يكون الجولف وسيلة جيدة لممارسة الرياضة</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"fontSize\":\"small\"} -->\n<p class=\"has-small-font-size\">شركة خدمات الاستشارات الاقتصادية ABC هي شركة رائدة في تقديم خدمات الاستشارات الاقتصادية. إنهم يقدمون للعملاء مجموعة واسعة من الخدمات، من المشورة الإستراتيجية عالية المستوى إلى التحليل التفصيلي والدعم الفني.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list -->\n<ul><!-- wp:list-item -->\n<li>الرواقية فلسفة تؤكد على إنكار اللذة وقبول الألم</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>الرواقية تحاول تحقيق حالة من السلام والهدوء</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>تعلم الرواقية أنه يمكن للمرء أن يحقق السعادة من خلال الانفصال الداخلي عن الأشياء المادية</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>الرواقية فلسفة تؤكد على إنكار اللذة وقبول الألم</li>\n<!-- /wp:list-item --></ul>\n<!-- /wp:list --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row -->"
            ),
            array('name' => "single-template",
                'title'  => "Single Template",
                'width'  => 950,
                'category' => array("phenix", "pages"),
                'content'  => "<!-- wp:phenix/container {\"size\":\"container\",\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-white\"}},\"className\":\"pd-20 pd-md-30 radius-lg border-1 border-solid border-alpha-15 my-30 my-md-50\"} -->\n<div class=\"wp-block-phenix-container pd-20 pd-md-30 radius-lg border-1 border-solid border-alpha-15 my-30 my-md-50 bg-white container\"><!-- wp:post-content {\"layout\":{\"inherit\":true}} /--></div>\n<!-- /wp:phenix/container -->"
            ),
            array('name' => "coming-soon",
                'title'  => "Coming Soon",
                'width'  => 1200,
                'category' => array("phenix", "pages"),
                'content'  => "<!-- wp:phenix/container {\"size\":\"container-sm\",\"isSection\":true,\"isFlexbox\":true,\"flexbox\":{\"align\":\" align-center-x align-center-y align-center-y\"},\"typography\":{\"align\":\"tx-align-center\",\"color\":\"color-white\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"\"}},\"align\":\"full\",\"className\":\"coming-soon pdy-50\"} -->\n<div class=\"wp-block-phenix-container alignfull coming-soon pdy-50\"><div class=\"flexbox container-sm  align-center-x align-center-y align-center-y color-white tx-align-center\"><!-- wp:phenix/column {\"className\":\"col-12\"} -->\n<div class=\"wp-block-phenix-column col-12\"><!-- wp:phenix/group {\"isFlexbox\":false,\"className\":\"px-logo mb-20 mgx-auto w-max-320\"} -->\n<div class=\"wp-block-phenix-group px-logo mb-20 mgx-auto w-max-320\"><!-- wp:phenix/column {\"className\":\"px-logo-icon position-rv mb-30 col-12\"} -->\n<div class=\"wp-block-phenix-column px-logo-icon position-rv mb-30 col-12\"><!-- wp:image {\"id\":169,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"outline\"} -->\n<figure class=\"wp-block-image size-large outline\"><img src=\"https://localhost/px-multisite/wp-content/uploads/2023/02/px-icon-outline-1.svg\" alt=\"\" class=\"wp-image-169\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:html -->\n<span class=\"px-media position-ab pos-start-0 pos-bottom-0 normal fluid\" data-src=\"https://localhost/px-multisite/wp-content/uploads/2023/02/px-icon.svg\"></span>\n<!-- /wp:html --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"className\":\"px-logo-text position-rv col-12\"} -->\n<div class=\"wp-block-phenix-column px-logo-text position-rv col-12\"><!-- wp:image {\"id\":171,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"outline\"} -->\n<figure class=\"wp-block-image size-large outline\"><img src=\"https://localhost/px-multisite/wp-content/uploads/2023/02/px-text-outline-1.svg\" alt=\"\" class=\"wp-image-171\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:html -->\n<span class=\"px-media position-ab pos-start-0 pos-top-0 normal h-100\" data-src=\"https://localhost/px-multisite/wp-content/uploads/2023/02/px-text.svg\"></span>\n<!-- /wp:html --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/group -->\n\n<!-- wp:heading {\"level\":1,\"className\":\"title-spaces lineheight-130 tx-uppercase display-md-h2 weight-normal mb-15\"} -->\n<h1 class=\"title-spaces lineheight-130 tx-uppercase display-md-h2 weight-normal mb-15\">Coming Soon</h1>\n<!-- /wp:heading -->\n\n<!-- wp:phenix/group {\"flexbox\":{\"align\":\" align-center-x align-center-y align-center-y\"},\"className\":\"mb-15\"} -->\n<div class=\"wp-block-phenix-group mb-15 flexbox  align-center-x align-center-y align-center-y\"><!-- wp:list {\"className\":\"reset-list flexbox align-center-y lineheight-180 links-inherit\"} -->\n<ul class=\"reset-list flexbox align-center-y lineheight-180 links-inherit\"><!-- wp:list-item {\"className\":\"pdx-10 tx-icon fab fa-whatsapp color-whatsapp\"} -->\n<li class=\"pdx-10 tx-icon fab fa-whatsapp color-whatsapp\"><a href=\"https://wa.me/01122974539\" target=\"_blank\" rel=\"noreferrer noopener\">+2011-2297-4539</a></li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item {\"className\":\"pdx-10 tx-icon far fa-envelope color-secondary\"} -->\n<li class=\"pdx-10 tx-icon far fa-envelope color-secondary\"><a href=\"mailto:abdallah@phenixthemes.com\" target=\"_blank\" rel=\"noreferrer noopener\">Send a Message</a></li>\n<!-- /wp:list-item --></ul>\n<!-- /wp:list -->\n\n<!-- wp:phenix/inline {\"content\":\"\",\"className\":\"w-50 hidden-sm-down border-reset border-bottom-1 mx-5 t border-white border-solid\"} -->\n<span class=\"wp-block-phenix-inline w-50 hidden-sm-down border-reset border-bottom-1 mx-5 t border-white border-solid\"></span>\n<!-- /wp:phenix/inline -->\n\n<!-- wp:phenix/group {\"className\":\"align-center-x\"} -->\n<div class=\"wp-block-phenix-group align-center-x flexbox\"><!-- wp:phenix/button {\"isLink\":true,\"inNewTab\":true,\"url\":\"https://m.me/Eng.AbdallahPS\",\"type\":\"btn square\",\"icon\":\"fab fa-facebook-messenger\",\"size\":\"small\",\"typography\":{\"color\":\"color-secondary\",\"size\":\"fs-16\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-transparent\"}}} -->\n<a class=\"wp-block-phenix-button fs-16 color-secondary bg-transparent btn square small radius-none fab fa-facebook-messenger\" href=\"https://m.me/Eng.AbdallahPS\" rel=\"noopener\" target=\"_blank\"></a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"inNewTab\":true,\"url\":\"https://twitter.com/EngAbdallahPS\",\"type\":\"btn square\",\"icon\":\"fab fa-twitter\",\"size\":\"small\",\"typography\":{\"color\":\"color-secondary\",\"size\":\"fs-16\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-transparent\"}}} -->\n<a class=\"wp-block-phenix-button fs-16 color-secondary bg-transparent btn square small radius-none fab fa-twitter\" href=\"https://twitter.com/EngAbdallahPS\" rel=\"noopener\" target=\"_blank\"></a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"inNewTab\":true,\"url\":\"https://www.behance.net/Eng-Abdallah\",\"type\":\"btn square\",\"icon\":\"fab fa-behance\",\"size\":\"small\",\"typography\":{\"color\":\"color-secondary\",\"size\":\"fs-16\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-transparent\"}}} -->\n<a class=\"wp-block-phenix-button fs-16 color-secondary bg-transparent btn square small radius-none fab fa-behance\" href=\"https://www.behance.net/Eng-Abdallah\" rel=\"noopener\" target=\"_blank\"></a>\n<!-- /wp:phenix/button --></div>\n<!-- /wp:phenix/group --></div>\n<!-- /wp:phenix/group -->\n\n<!-- wp:list {\"className\":\"inline-flex reset-list pdt-10 flexbox mgx-auto align-center-x fs-14 tx-uppercase color-white links-inherit divider-y border-white\"} -->\n<ul class=\"inline-flex reset-list pdt-10 flexbox mgx-auto align-center-x fs-14 tx-uppercase color-white links-inherit divider-y border-white\"><!-- wp:list-item {\"className\":\"pdb-10 pdx-10 color-gray\"} -->\n<li class=\"pdb-10 pdx-10 color-gray\"><a href=\"https://wa.me/01122974539\">WordPress Themes</a></li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item {\"className\":\"pdb-10 pdx-10\"} -->\n<li class=\"pdb-10 pdx-10\"><a href=\"https://localhost/pds-docs\">Design System</a></li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item {\"className\":\"pdb-10 pdx-10\"} -->\n<li class=\"pdb-10 pdx-10\"><a href=\"https://wa.me/01122974539\" target=\"_blank\" rel=\"noreferrer noopener\">Web Development</a></li>\n<!-- /wp:list-item --></ul>\n<!-- /wp:list --></div>\n<!-- /wp:phenix/column --></div></div>\n<!-- /wp:phenix/container -->"
            ),
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

            //===> Optimization settings <===//
            'head_cleaner' => "on",
            'wpc7_cleaner' => "on",
            'adminbar_css' => "on",
            'comments_css' => "on",
            'jquery_remove' => "on",
            'wpc7_rm_styles' => "on",
            'wpc7_rm_scripts' => "on",
            'blocks_optimizer' => "on",
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

    add_action('init', 'pds_blocks_default_values');
endif;