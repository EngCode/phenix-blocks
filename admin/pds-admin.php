<?php
    /**
     * Main Admin Page for Phenix Blocks
     * @since Phenix WP 1.0
     * @return void
    */

    //=====> Phenix Blocks Admin <=====//
    if (!function_exists('pds_admin_menu')) :
        /**
         * Create Admin Pages for Phenix Blocks
         * @since Phenix Blocks 1.0
         * @return void
        */

        function pds_admin_menu() {
            //===> Main Settings <===//
            add_menu_page(
                __('Phenix Blocks Settings', 'phenix'),
                __('Phenix Blocks', 'phenix'),
                'manage_options',
                'pds-admin',
                'pds_admin_page',
                plugin_dir_url(__DIR__).'assets/img/px-logo/px-dashicon.svg', 60
            );

            //===> Data Collection <===//
            add_submenu_page('pds-admin',
                __('Custom Data Collection', 'phenix'),
                __('Data Collection', 'phenix'),
                'manage_options',
                'pds-data-collection',
                'pds_data_collection'
            );

            //===> Reusable Blocks <===//
            add_submenu_page('pds-admin',
                __('Reusable Blocks', 'phenix'),
                __('Reusable Blocks', 'phenix'),
                'manage_options',
                'edit.php?post_type=wp_block',
            );

            //===> Remove Menu Items <===//
            $removable = [
                'flamingo',
                // 'tools.php',
                'upload.php',
                'plugins.php',
                'edit-comments.php',
            ];

            foreach ($removable as $item) { remove_menu_page($item); }

            //===> Remove Sub Menu Items <===//
            $removable_sub = [
                ['index.php', 'my-sites.php'],
                ['index.php', 'update-core.php'],
                ['wpcf7', 'wpcf7-integration'],
                ['tools.php', 'export-personal-data.php'],
                ['tools.php', 'erase-personal-data.php'],
                ['options-general.php', 'svg-support'],
                ['options-general.php', 'options-writing.php'],
                ['options-general.php', 'options-privacy.php'],
                ['options-general.php', 'options-discussion.php'],
            ];

            foreach ($removable_sub as $item) { remove_submenu_page(...$item); }

            //===> Organize Menu Items <===//
            $movable = [
                ['themes.php', null, __('Plugins', 'phenix'), 'manage_options', 'plugins.php'],
                ['users.php', null, __('Comments', 'phenix'), 'manage_options', 'edit-comments.php'],
                ['wpcf7', null, __('Address Book', 'phenix'), 'manage_options', 'admin.php?page=flamingo'],
                ['options-general.php', null, __('Media Uploads', 'phenix'), 'manage_options', 'upload.php'],
                ['options-general.php', null, __('Core Updates', 'phenix'), 'manage_options', 'update-core.php'],
                ['wpcf7', null, __('Inbox Messages', 'phenix'), 'manage_options', 'admin.php?page=flamingo_inbound'],
            ];

            foreach ($movable as $item) { add_submenu_page(...$item); }
        }

        add_action('admin_menu', 'pds_admin_menu', 11);
    endif;

    //====> Include Modules <====//
    include(dirname(__FILE__) . '/modules/api-creator.php');
    include(dirname(__FILE__) . '/modules/cpt-creator.php');
    include(dirname(__FILE__) . '/modules/tax-creator.php');
    include(dirname(__FILE__) . '/modules/page-creator.php');
    include(dirname(__FILE__) . '/modules/toggle-controls.php');
    include(dirname(__FILE__) . '/modules/pattern-creator.php');

    /**===> Options List { properties by order }
     *** option_name,
     *** option_page,
     *** show_in_rest
    <===*/
    $pds_options_list = array(
        //===> Data Collection <===//
        array('pds_types', 'pds-data-collection', true),
        array('pds_metabox', 'pds-data-collection', true),
        array('theme_parts', 'pds-data-collection', true),
        array('pds_taxonomies', 'pds-data-collection', true),
        array('menu_locations', 'pds-data-collection', true),
        array('block_patterns', 'pds-data-collection', true),
        array('theme_templates', 'pds-data-collection', true),

        //===> General Settings <===//
        array('pds_admin_style', 'pds-admin'),
        array('pds_gfonts', 'pds-admin'),
        array('pds_template_parts', 'pds-admin'),

        //===> Optimization <===//
        array('head_cleaner', 'pds-admin'),
        array('wpc7_cleaner', 'pds-admin'),
        array('wpc7_rm_styles', 'pds-admin'),
        array('wpc7_rm_scripts', 'pds-admin'),
        array('adminbar_css', 'pds-admin'),
        array('adminbar_disable', 'pds-admin'),
        array('comments_css', 'pds-admin'),
        array('newsletter_css', 'pds-admin'),
        array('jquery_remove', 'pds-admin'),
        array('blocks_optimizer', 'pds-admin'),

        //===> Phenix Blocks <===//
        array('container_block', 'pds-admin'),
        array('logo_block', 'pds-admin'),
        array('navigation_block', 'pds-admin'),
        array('button_block', 'pds-admin'),
        array('row_block', 'pds-admin'),
        array('column_block', 'pds-admin'),
        array('head_block', 'pds-admin'),
        array('query_block', 'pds-admin'),
        array('taxonomies_block', 'pds-admin'),
        array('taxonomies_list_block', 'pds-admin'),
        array('theme_part_block', 'pds-admin'),
        array('group_block', 'pds-admin'),
        array('inline_elements_block', 'pds-admin'),

        //===> Core Blocks <===//
        array('pds_core_quote', 'pds-admin'),
        array('pds_core_preformatted', 'pds-admin'),
        array('pds_core_code', 'pds-admin'),
        array('pds_core_pullquote', 'pds-admin'),
        array('pds_core_verse', 'pds-admin'),
        array('pds_core_gallery', 'pds-admin'),
        array('pds_core_file', 'pds-admin'),
        array('pds_core_mediatext', 'pds-admin'),
        array('pds_core_cover', 'pds-admin'),
        array('pds_core_buttons', 'pds-admin'),
        array('pds_core_columns', 'pds-admin'),
        array('pds_core_group', 'pds-admin'),
        array('pds_core_more', 'pds-admin'),
        array('pds_core_nextpage', 'pds-admin'),
        array('pds_core_separator', 'pds-admin'),
        array('pds_core_spacer', 'pds-admin'),
        array('pds_core_embed', 'pds-admin'),
        array('pds_core_logo', 'pds-admin'),
        array('pds_core_title', 'pds-admin'),
        array('pds_core_tagline', 'pds-admin'),
        array('pds_core_query', 'pds-admin'),
        array('pds_core_navigation', 'pds-admin'),
        array('pds_core_avatar', 'pds-admin'),
        array('pds_core_post_elements', 'pds-admin'),
        array('pds_core_tag_cloud', 'pds-admin'),
        array('pds_core_widgets_blocks', 'pds-admin'),
    );

    //====> Create Options <====//
    function create_pds_options() {
        //===> Grape Options List <===//
        global $pds_options_list;

        //===> Register Options <===//
        foreach ($pds_options_list as $option) {
            //===> Register the Option <===//
            register_setting($option[1], $option[0]);
        }
    }

    add_action('admin_init', 'create_pds_options');

    //====> Phenix Admin [General Settings] <====//
    if (!function_exists('pds_admin_page')) :
        /**
         * Create Admin Pages for Phenix Blocks
         * @since Phenix Blocks 1.0
         * @return void
        */

        function pds_admin_page () {
            include(dirname(__FILE__) . '/main.php');
        };
    endif;

    //====> Phenix Admin [Data Collection] <====//
    if (!function_exists('pds_data_collection')) :
        /**
         * Create Admin Pages for Phenix Blocks
         * @since Phenix Blocks 1.0
         * @return void
        */

        function pds_data_collection () {
            include(dirname(__FILE__) . '/data-collection.php');
        };
    endif;

    //====> API Endpoint for [All Options] <====//
    add_action('rest_api_init', function() {
        //====> Create PDS Endpoint ====//
        pds_add_api(array(
            "api_slug"   => '/options',
            //===> Data Parameters <===//
            "api_props"  => array('options' => [
				'validate_callback' => function( $param, $request, $key ) {
					return is_array($param);
				},
			]),
            //===> Reading Permission <===//
            "read_prem"  => function () {
                return is_user_logged_in();
            },
            //===> Editing Permission <===//
            "write_prem" => function () {
                return current_user_can('manage_options');
            },
            //===> Get Option Method <===//
            "get_method" => function($request) {
                global $pds_options_list;
                //===> Define Options List <===//
                $core_blocks = array();
                $current_options = array();

                //===> Get Option Value <===//
                foreach ($pds_options_list as $option) {
                    //===> Define Data <===//
                    $option_name = $option[0];
                    $option_api  = $option[2];

                    //===> Core Blocks <===//
                    if (strpos($option_name, "pds_core") !== false) {
                        $core_blocks[$option_name] = get_option($option_name);
                    }

                    //===> Options with API Enabled <===// 
                    if ($option_api) {
                        $current_options[$option_name] = get_option($option_name);
                    }
                }

                //===> add Core Blocks <===//
                $current_options["pds_core"] = $core_blocks;

                //===> Return Options <===//
                return $current_options;
            },
            //===> Set Option Method <===//
            "set_method" => function($request) {
                //===> Get Request Data <===//
                $params = $request->get_params();

                //===> Set Response Data <===//
                $response['data'] = $params;
                $response['response'] = 'Success Data has been Set.';

                //===> Update Options <===//
                foreach ($response['data'] as $option => $value) {
                    //===> for Core Blocks Options <===//
                    if ($option == "pds_core") {
                        foreach ($option as $block => $value) {
                            update_option($block, $value);
                        }
                    }
                    //===> for Other Options <===//
                    else {
                        update_option($option, $value);
                    } 
                }

                //===> Return Success <===//
                return $response;
            },
        ));
    });

    //====> Set Menu Locations <====//
    if (get_option('menu_locations')) :
        register_nav_menus( get_option('menu_locations') );
    endif;

    //===> Set Post-Types <===//
    if (get_option('pds_types')) :
        foreach(get_option('pds_types') as $post_type) {
            //===> if is Posts Disable Core <===//
            if ($post_type["name"] == "post") {
                add_action('admin_menu', function() {
                    remove_menu_page('edit.php'); 
                });
            }

            //===> if the Post-Type is Enabled <===//
            if(isset($post_type['enable']) && $post_type['enable'] == true) {
                pds_cpt_create($post_type);
            }
        }
    endif;

    //===> Set Taxonomies <===//
    if (get_option('pds_taxonomies')) :
        foreach(get_option('pds_taxonomies') as $taxonomy) {
            //===> if the Post-Type is Enabled <===//
            if(isset($taxonomy['enable']) && $taxonomy['enable'] == true) { pds_tax_create($taxonomy); }
        }
    endif;

    //===> Set Patterns <===//
    if (get_option('block_patterns')) :
        foreach(get_option('block_patterns') as $pattern) {
            //===> if the Post-Type is Enabled <===//
            pds_add_pattern($pattern['name'], array(
                'title'    => $pattern['title'],
                'category' => $pattern['category'],
                'content'  => $pattern['content']
            ));
        }
    endif;

    //===> [Pattern] Blog Single <===//
    pds_add_pattern("blog-example", array(
        'width'    => 300,
        'title'    => "Standard Blog",
        'category' => array("phenix", "single"),
        'content'  => "<!-- wp:image {\"id\":84,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"mb-30\"} -->\n<figure class=\"wp-block-image size-large mb-30\"><img src=\"https://via.placeholder.com/960x420.webp\" alt=\"\" class=\"wp-image-84\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:heading -->\n<h2>خدمات شاملة للشركات والأفراد الذين يبحثون عن مشورة الخبراء</h2>\n<!-- /wp:heading -->\n\n<!-- wp:phenix/theme-part {\"part_name\":\"post/info\",\"lock\":{\"move\":true,\"remove\":true}} /-->\n\n<!-- wp:paragraph -->\n<p>شركة رائدة تقدم خدمات شاملة للشركات والأفراد الذين يبحثون عن مشورة الخبراء في الأمور الاقتصادية. يتمتع فريقهم من المهنيين ذوي الخبرة بمعرفة عميقة بأحدث الاتجاهات الاقتصادية ويلتزمون بتقديم النتائج التي تلبي احتياجات عملائهم.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>تقدم ABC مجموعة من الخدمات، بما في ذلك التحليل المالي والتنبؤ وأبحاث السوق وإعداد الميزانية وإدارة المخاطر. كما أنها تساعد في تطوير نماذج واستراتيجيات الأعمال الجديدة، فضلا عن الامتثال التنظيمي. فريقهم على دراية جيدة بلوائح الصناعة ويمكنه المساعدة في ضمان التزام الشركات بالقوانين الحالية.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>تفخر الشركة بتقديم خدمات عالية الجودة ونصائح مصممة خصيصًا لكل عميل على حدة. تم تدريب فريقهم تدريباً عالياً في مختلف مجالات الاقتصاد، بما في ذلك الاقتصاد الكلي والاقتصاد الجزئي والتجارة الدولية والتمويل والتمويل العام والتنمية الاقتصادية والمزيد.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>تدرك ABC أهمية البقاء في طليعة الاتجاهات الاقتصادية، وهذا هو السبب في أنها تقوم بإطلاع عملائها بانتظام على أحدث التطورات في هذا المجال. إنهم يسعون جاهدين لتقديم خدمات استشارية من الدرجة الأولى من شأنها أن تساعد عملائهم على النجاح في اقتصاد اليوم المتغير باستمرار.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":4} -->\n<h4>توظف ABC Consulting فريقًا من المهنيين المؤهلين تأهيلا عاليا</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>تشير كلمة Stoic عادة إلى شخص غير مبال بالألم أو اللذة أو الحزن أو اللذة. الاستخدام الحديث هو \"الشخص الذي يقمع المشاعر أو يتحملها بصبر\" ، وقد استخدم لأول مرة كاسم في عام 1579 وكصفة في عام 1596. على عكس مصطلح Epicurean ، فإن إدخال موسوعة ستانفورد للفلسفة على الرواقية ينص على أن \"معنى الصفة الإنجليزية \"الرواقية\" ليست مضللة بالكامل في أصلها الفلسفي \"</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:phenix/row -->\n<div class=\"wp-block-phenix-row row\"><!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:list -->\n<ul><!-- wp:list-item -->\n<li>الرواقية فلسفة تؤكد على إنكار اللذة وقبول الألم</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>الرواقية تحاول تحقيق حالة من السلام والهدوء</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>تعلم الرواقية أنه يمكن للمرء أن يحقق السعادة من خلال الانفصال الداخلي عن الأشياء المادية</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>الرواقية فلسفة تؤكد على إنكار اللذة وقبول الألم</li>\n<!-- /wp:list-item --></ul>\n<!-- /wp:list --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:paragraph -->\n<p>الرواقية هي مدرسة فلسفية نشأت في أوائل القرن الثالث قبل الميلاد. من اليونان القديمة وروما. إنها فلسفة الحياة التي تعظم المشاعر الإيجابية ، وتقلل من المشاعر السلبية ، وتساعد الأفراد على تطوير فضائلهم الشخصية.</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row -->\n\n<!-- wp:heading {\"level\":4} -->\n<h4>تقدم ABC مجموعة من الخدمات، بما في ذلك التحلي</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>تشتهر الفلسفة الرواقية بمجموعة أدواتها الخاصة بـ \"الممارسات الروحية\" المصممة لمساعدتك على التأقلم مع الحياة. لكن توصياته للعلاقات تبدو محدودة. يعتقد إبيكتيتوس (50-135 بعد الميلاد) ، الفيلسوف الروماني الرواقي الشهير ، أنه من أجل أن يكون المرء سعيدًا ، يجب على المرء أن يتجاوز نفسه ...</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:phenix/row -->\n<div class=\"wp-block-phenix-row row\"><!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:image {\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https://via.placeholder.com/780x500.webp\" alt=\"\"/></figure>\n<!-- /wp:image --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:heading {\"level\":4} -->\n<h4>يمكن أن يكون الجولف وسيلة جيدة لممارسة الرياضة</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"fontSize\":\"small\"} -->\n<p class=\"has-small-font-size\">شركة خدمات الاستشارات الاقتصادية ABC هي شركة رائدة في تقديم خدمات الاستشارات الاقتصادية. إنهم يقدمون للعملاء مجموعة واسعة من الخدمات، من المشورة الإستراتيجية عالية المستوى إلى التحليل التفصيلي والدعم الفني.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list -->\n<ul><!-- wp:list-item -->\n<li>الرواقية فلسفة تؤكد على إنكار اللذة وقبول الألم</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>الرواقية تحاول تحقيق حالة من السلام والهدوء</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>تعلم الرواقية أنه يمكن للمرء أن يحقق السعادة من خلال الانفصال الداخلي عن الأشياء المادية</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>الرواقية فلسفة تؤكد على إنكار اللذة وقبول الألم</li>\n<!-- /wp:list-item --></ul>\n<!-- /wp:list --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row -->"
    ));

    //===> [Pattern] Footer <===//
    pds_add_pattern("header-standard", array(
        'width'    => 300,
        'title'    => "Header Standard",
        'category' => array("phenix"),
        'content'  => "<!-- wp:phenix/container {\"size\":\"container-xl\",\"isSection\":true,\"isFlexbox\":true,\"flexbox\":{\"flow\":\"\",\"align\":\"align-center-y align-between \",\"nowrap\":\"\"},\"lock\":{\"move\":true,\"remove\":true},\"className\":\"main-header bg-white pdy-15 bx-shadow-dp-1\"} -->\n<div class=\"wp-block-phenix-container main-header bg-white pdy-15 bx-shadow-dp-1\"><div class=\"flexbox container-xl align-center-y align-between \"><!-- wp:phenix/logo {\"site_title\":\"مميز\",\"logo\":\"http://localhost/px-demo/momez/wp-content/uploads/sites/7/2023/02/logo.svg\",\"size\":\"46px\",\"fevicon\":\"http://localhost/px-demo/momez/wp-content/uploads/sites/7/2023/02/favicon.svg\",\"responsive\":true,\"use_fevicon\":true,\"lock\":{\"move\":true,\"remove\":true}} -->\n<a class=\"wp-block-phenix-logo inline-block\" href=\"#none\" title=\"مميز\"><img src=\"http://localhost/px-demo/momez/wp-content/uploads/sites/7/2023/02/logo.svg\" class=\"hidden-md-down\" alt=\"مميز\" style=\"height:46px\"/><img src=\"http://localhost/px-demo/momez/wp-content/uploads/sites/7/2023/02/favicon.svg\" class=\"hidden-lg-up\" alt=\"مميز\" style=\"height:46px\"/></a>\n<!-- /wp:phenix/logo -->\n\n<!-- wp:phenix/group {\"flexbox\":{\"stacked\":\"\"},\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"\"}},\"lock\":{\"move\":true,\"remove\":true}} -->\n<div class=\"wp-block-phenix-group flexbox\"><!-- wp:phenix/navigation {\"menu_id\":\"main-menu\",\"responsive\":true,\"mobile_mode\":\"custom\",\"effect\":\"fade\",\"direction\":\"flexbox\",\"hover\":true,\"lock\":{\"move\":true,\"remove\":true}} /-->\n\n<!-- wp:phenix/button {\"type\":\"square\",\"size\":\"small\",\"radius\":\"radius-md\",\"outline\":true,\"data_id\":\"main-menu\",\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-primary\"}},\"lock\":{\"move\":true,\"remove\":true},\"className\":\"far fa-bars hidden-lg-up ms-10\"} -->\n<button class=\"wp-block-phenix-button far fa-bars hidden-lg-up ms-10 btn primary menu-toggle square small radius-md outline\" data-id=\"main-menu\"></button>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"label\":\"حساب جديد\",\"type\":\"btn-icon\",\"size\":\"small\",\"radius\":\"radius-sm\",\"outline\":true,\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-primary\"}},\"lock\":{\"move\":true,\"remove\":true},\"className\":\"fs-13 far fa-user-plus responsive-btn ms-10\"} -->\n<a class=\"wp-block-phenix-button fs-13 far fa-user-plus responsive-btn ms-10 btn primary btn-icon small radius-sm outline\" href=\"#none\" rel=\"noopener\">حساب جديد</a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"label\":\"تسجيل الدخول\",\"type\":\"btn-icon\",\"size\":\"small\",\"radius\":\"radius-sm\",\"style\":{\"background\":{\"type\":\"color\",\"rotate\":null,\"value\":\"bg-primary\"}},\"lock\":{\"move\":true,\"remove\":true},\"className\":\"fs-13 far fa-user ms-10\"} -->\n<a class=\"wp-block-phenix-button fs-13 far fa-user ms-10 btn primary btn-icon small radius-sm\" href=\"#none\" rel=\"noopener\">تسجيل الدخول</a>\n<!-- /wp:phenix/button --></div>\n<!-- /wp:phenix/group --></div></div>\n<!-- /wp:phenix/container -->"
    ));

    //===> [Pattern] Footer <===//
    pds_add_pattern("footer-standard", array(
        'width'    => 300,
        'title'    => "Footer Standard",
        'category' => array("phenix"),
        'content'  => "<!-- wp:phenix/container {\"size\":\"container\",\"isSection\":true,\"typography\":{\"color\":\"color-white\"},\"style\":{\"background\":{\"type\":\"image\",\"rotate\":null,\"value\":\"http://localhost/px-demo/momez/wp-content/uploads/sites/7/2023/02/footer.jpg\"}},\"className\":\"pdt-40\"} -->\n<div class=\"wp-block-phenix-container pdt-40 px-media\" data-src=\"http://localhost/px-demo/momez/wp-content/uploads/sites/7/2023/02/footer.jpg\"><div class=\"container color-white\"><!-- wp:phenix/row {\"className\":\"gpy-30 gpy-fix\"} -->\n<div class=\"wp-block-phenix-row gpy-30 gpy-fix row\"><!-- wp:phenix/column {\"size\":\"col-12 col-md-6 col-lg-4\",\"spacing_pd\":\"  pdb-30\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6 col-lg-4   pdb-30\"><!-- wp:heading {\"level\":5,\"className\":\"fs-17 mb-15\"} -->\n<h5 class=\"fs-17 mb-15\">من نحن</h5>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"fontSize\":\"small\"} -->\n<p class=\"has-small-font-size\">منصة تدريبية رقمية موحدة تـأسست بتاريخ 10 مايو 2022 تـقدم جـميع الخـدمـات التـدريبية التـأسيسية والتـأهيلية و التـطويـرية والـتخصصية من دورات وبـرامـج وورش عمـل وحـقائب تـدريبية عن طـريق ربـط الـراغبين بالـخدمـات التـدريـبية مـن طـلاب وخـريـجـيـن ومـوظفين بمقـدمي الـخدمات الـتدريبية المعتمدة في المملكة العربية السعودية وكذلك المدربين الاكفاء في شتى التخصصات</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"col-12 col-md-3 col-lg-2\",\"spacing_mg\":\"  mb-30\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-3 col-lg-2   mb-30\"><!-- wp:heading {\"level\":5,\"className\":\"fs-17 mb-15\"} -->\n<h5 class=\"fs-17 mb-15\">روابط سريعة</h5>\n<!-- /wp:heading -->\n\n<!-- wp:phenix/navigation {\"menu_id\":\"footer-links\",\"className\":\"links-list\"} /--></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"col-12 col-md-3 col-lg-2\",\"spacing_mg\":\"  mb-30\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-3 col-lg-2   mb-30\"><!-- wp:heading {\"level\":5,\"className\":\"fs-17 mb-15\"} -->\n<h5 class=\"fs-17 mb-15\">خدماتنا</h5>\n<!-- /wp:heading -->\n\n<!-- wp:phenix/navigation {\"menu_id\":\"footer-links-2\",\"className\":\"links-list mb-20\"} /--></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"col-12  col-lg-4\",\"spacing_pd\":\"  pdb-30\"} -->\n<div class=\"wp-block-phenix-column col-12  col-lg-4   pdb-30\"><!-- wp:heading {\"level\":5,\"className\":\"fs-17 mb-15\"} -->\n<h5 class=\"fs-17 mb-15\">النشرة الاخبارية</h5>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"className\":\"fs-13\"} -->\n<p class=\"fs-13\">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:contact-form-7/contact-form-selector {\"id\":188,\"title\":\"النشرة الاخبارية\"} -->\n<div class=\"wp-block-contact-form-7-contact-form-selector\">[contact-form-7 id=\"188\" title=\"النشرة الاخبارية\"]</div>\n<!-- /wp:contact-form-7/contact-form-selector -->\n\n<!-- wp:phenix/group -->\n<div class=\"wp-block-phenix-group flexbox flow-columns\"><!-- wp:phenix/button {\"isLink\":true,\"type\":\"square\",\"size\":\"small\",\"radius\":\"radius-sm\",\"background\":\"bg-dribbble\",\"color\":\"color-white\",\"className\":\"fs-16 fab fa-instagram me-10 bg-dribbble color-white\"} -->\n<a class=\"wp-block-phenix-button fs-16 fab fa-instagram me-10 bg-dribbble color-white btn square small radius-sm\" href=\"#none\" rel=\"noopener\"></a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"type\":\"square\",\"size\":\"small\",\"radius\":\"radius-sm\",\"background\":\"bg-flicker\",\"color\":\"color-white\",\"className\":\"fs-16 fab fa-linkedin-in me-10 bg-flicker color-white\"} -->\n<a class=\"wp-block-phenix-button fs-16 fab fa-linkedin-in me-10 bg-flicker color-white btn square small radius-sm\" href=\"#none\" rel=\"noopener\"></a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"type\":\"square\",\"size\":\"small\",\"radius\":\"radius-sm\",\"background\":\"bg-whatsapp\",\"color\":\"color-white\",\"className\":\"fs-18 fab fa-whatsapp ms-1 me-10 bg-whatsapp color-white\"} -->\n<a class=\"wp-block-phenix-button fs-18 fab fa-whatsapp ms-1 me-10 bg-whatsapp color-white btn square small radius-sm\" href=\"#none\" rel=\"noopener\"></a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"type\":\"square\",\"size\":\"small\",\"radius\":\"radius-sm\",\"background\":\"bg-twitter\",\"color\":\"color-white\",\"className\":\"fs-17 fab fa-twitter me-10 bg-twitter color-white\"} -->\n<a class=\"wp-block-phenix-button fs-17 fab fa-twitter me-10 bg-twitter color-white btn square small radius-sm\" href=\"#none\" rel=\"noopener\"></a>\n<!-- /wp:phenix/button -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"type\":\"square\",\"size\":\"small\",\"radius\":\"radius-sm\",\"background\":\"bg-facebook\",\"color\":\"color-white\",\"className\":\"fs-17 fab fa-facebook-f pde-10 bg-facebook color-white\"} -->\n<a class=\"wp-block-phenix-button fs-17 fab fa-facebook-f pde-10 bg-facebook color-white btn square small radius-sm\" href=\"#none\" rel=\"noopener\"></a>\n<!-- /wp:phenix/button --></div>\n<!-- /wp:phenix/group --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row -->\n\n<!-- wp:phenix/column {\"size\":\"col-12\",\"spacing_pd\":\" comb-sm-pd  pdy-15\",\"className\":\"divider-t\"} -->\n<div class=\"wp-block-phenix-column divider-t col-12  comb-sm-pd  pdy-15\"><!-- wp:paragraph {\"className\":\"tx-align-center fs-13 lineheight-130\"} -->\n<p class=\"tx-align-center fs-13 lineheight-130\">جميع الحقوق محفوظة لمنصة مميز © 2023</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:phenix/column --></div></div>\n<!-- /wp:phenix/container -->"
    ));
?>