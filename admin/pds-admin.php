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
                'tools.php',
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
                ['options-general.php', null, __('Media Uploads', 'phenix'), 'manage_options', 'update-core.php'],
                ['options-general.php', null, __('Core Updates', 'phenix'), 'manage_options', 'upload.php'],
                ['wpcf7', null, __('Inbox Messages', 'phenix'), 'manage_options', 'admin.php?page=flamingo_inbound'],
            ];

            foreach ($movable as $item) { add_submenu_page(...$item); }
        }

        add_action('admin_menu', 'pds_admin_menu');
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
                    if (strpos($option_name, "pds_core") == true) {
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
            if($post_type['enable']) {
                pds_cpt_create($post_type);
            }
        }
    endif;

    //===> [Pattern] Blog Single <===//
    pds_add_pattern("blog-example", array(
        'width'    => 300,
        'title'    => "Standard Blog",
        'category' => array("phenix", "single"),
        'content'  => "<!-- wp:image {\"id\":84,\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"mb-30\"} -->\n<figure class=\"wp-block-image size-large mb-30\"><img src=\"https://via.placeholder.com/960x420.webp\" alt=\"\" class=\"wp-image-84\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:heading -->\n<h2>خدمات شاملة للشركات والأفراد الذين يبحثون عن مشورة الخبراء</h2>\n<!-- /wp:heading -->\n\n<!-- wp:phenix/theme-part {\"part_name\":\"post/info\",\"lock\":{\"move\":true,\"remove\":true}} /-->\n\n<!-- wp:paragraph -->\n<p>شركة رائدة تقدم خدمات شاملة للشركات والأفراد الذين يبحثون عن مشورة الخبراء في الأمور الاقتصادية. يتمتع فريقهم من المهنيين ذوي الخبرة بمعرفة عميقة بأحدث الاتجاهات الاقتصادية ويلتزمون بتقديم النتائج التي تلبي احتياجات عملائهم.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>تقدم ABC مجموعة من الخدمات، بما في ذلك التحليل المالي والتنبؤ وأبحاث السوق وإعداد الميزانية وإدارة المخاطر. كما أنها تساعد في تطوير نماذج واستراتيجيات الأعمال الجديدة، فضلا عن الامتثال التنظيمي. فريقهم على دراية جيدة بلوائح الصناعة ويمكنه المساعدة في ضمان التزام الشركات بالقوانين الحالية.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>تفخر الشركة بتقديم خدمات عالية الجودة ونصائح مصممة خصيصًا لكل عميل على حدة. تم تدريب فريقهم تدريباً عالياً في مختلف مجالات الاقتصاد، بما في ذلك الاقتصاد الكلي والاقتصاد الجزئي والتجارة الدولية والتمويل والتمويل العام والتنمية الاقتصادية والمزيد.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>تدرك ABC أهمية البقاء في طليعة الاتجاهات الاقتصادية، وهذا هو السبب في أنها تقوم بإطلاع عملائها بانتظام على أحدث التطورات في هذا المجال. إنهم يسعون جاهدين لتقديم خدمات استشارية من الدرجة الأولى من شأنها أن تساعد عملائهم على النجاح في اقتصاد اليوم المتغير باستمرار.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading {\"level\":4} -->\n<h4>توظف ABC Consulting فريقًا من المهنيين المؤهلين تأهيلا عاليا</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>تشير كلمة Stoic عادة إلى شخص غير مبال بالألم أو اللذة أو الحزن أو اللذة. الاستخدام الحديث هو \"الشخص الذي يقمع المشاعر أو يتحملها بصبر\" ، وقد استخدم لأول مرة كاسم في عام 1579 وكصفة في عام 1596. على عكس مصطلح Epicurean ، فإن إدخال موسوعة ستانفورد للفلسفة على الرواقية ينص على أن \"معنى الصفة الإنجليزية \"الرواقية\" ليست مضللة بالكامل في أصلها الفلسفي \"</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:phenix/row -->\n<div class=\"wp-block-phenix-row row\"><!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:list -->\n<ul><!-- wp:list-item -->\n<li>الرواقية فلسفة تؤكد على إنكار اللذة وقبول الألم</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>الرواقية تحاول تحقيق حالة من السلام والهدوء</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>تعلم الرواقية أنه يمكن للمرء أن يحقق السعادة من خلال الانفصال الداخلي عن الأشياء المادية</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>الرواقية فلسفة تؤكد على إنكار اللذة وقبول الألم</li>\n<!-- /wp:list-item --></ul>\n<!-- /wp:list --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:paragraph -->\n<p>الرواقية هي مدرسة فلسفية نشأت في أوائل القرن الثالث قبل الميلاد. من اليونان القديمة وروما. إنها فلسفة الحياة التي تعظم المشاعر الإيجابية ، وتقلل من المشاعر السلبية ، وتساعد الأفراد على تطوير فضائلهم الشخصية.</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row -->\n\n<!-- wp:heading {\"level\":4} -->\n<h4>تقدم ABC مجموعة من الخدمات، بما في ذلك التحلي</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>تشتهر الفلسفة الرواقية بمجموعة أدواتها الخاصة بـ \"الممارسات الروحية\" المصممة لمساعدتك على التأقلم مع الحياة. لكن توصياته للعلاقات تبدو محدودة. يعتقد إبيكتيتوس (50-135 بعد الميلاد) ، الفيلسوف الروماني الرواقي الشهير ، أنه من أجل أن يكون المرء سعيدًا ، يجب على المرء أن يتجاوز نفسه ...</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:phenix/row -->\n<div class=\"wp-block-phenix-row row\"><!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:image {\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https://via.placeholder.com/780x500.webp\" alt=\"\"/></figure>\n<!-- /wp:image --></div>\n<!-- /wp:phenix/column -->\n\n<!-- wp:phenix/column {\"size\":\"col-12 col-md-6\"} -->\n<div class=\"wp-block-phenix-column col-12 col-md-6\"><!-- wp:heading {\"level\":4} -->\n<h4>يمكن أن يكون الجولف وسيلة جيدة لممارسة الرياضة</h4>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"fontSize\":\"small\"} -->\n<p class=\"has-small-font-size\">شركة خدمات الاستشارات الاقتصادية ABC هي شركة رائدة في تقديم خدمات الاستشارات الاقتصادية. إنهم يقدمون للعملاء مجموعة واسعة من الخدمات، من المشورة الإستراتيجية عالية المستوى إلى التحليل التفصيلي والدعم الفني.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list -->\n<ul><!-- wp:list-item -->\n<li>الرواقية فلسفة تؤكد على إنكار اللذة وقبول الألم</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>الرواقية تحاول تحقيق حالة من السلام والهدوء</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>تعلم الرواقية أنه يمكن للمرء أن يحقق السعادة من خلال الانفصال الداخلي عن الأشياء المادية</li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li>الرواقية فلسفة تؤكد على إنكار اللذة وقبول الألم</li>\n<!-- /wp:list-item --></ul>\n<!-- /wp:list --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row -->"
    ));

    //===> [Pattern] Hero Slide <===//
    pds_add_pattern("slide-hero", array(
        'width'    => 300,
        'title'    => "Hero Slide",
        'category' => array("phenix", "single"),
        'content'  => "<!-- wp:phenix/container {\"isSection\":true,\"size\":\"container-fluid\",\"bg_type\":\"image\",\"background\":\"http://localhost/px-demo/bedaya/wp-content/uploads/sites/3/2023/01/slide.jpg\",\"spacing_pd\":\" comb-sm-pd  pdy-50\",\"className\":\"tx-align-center\"} -->\n<div class=\"wp-block-phenix-container tx-align-center px-media  comb-sm-pd  pdy-50\" data-src=\"http://localhost/px-demo/bedaya/wp-content/uploads/sites/3/2023/01/slide.jpg\"><div class=\"container-fluid\"><!-- wp:phenix/row {\"flex_align\":\"align-center-x align-center-y\",\"className\":\"h-min-50vh\"} -->\n<div class=\"wp-block-phenix-row h-min-50vh row align-center-x align-center-y\"><!-- wp:phenix/column {\"size\":\"col-12 col-lg-9\",\"className\":\"w-max-768\"} -->\n<div class=\"wp-block-phenix-column w-max-768 col-12 col-lg-9\"><!-- wp:heading {\"textColor\":\"primary-txt\",\"className\":\"h1-lg mb-10\"} -->\n<h2 class=\"h1-lg mb-10 has-primary-txt-color has-text-color\">القطاعات الاقتصادية لدراسات الجدوي والابحاث</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"textColor\":\"primary-txt\",\"className\":\"mb-30 fs-lg-18\"} -->\n<p class=\"mb-30 fs-lg-18 has-primary-txt-color has-text-color\">بداية هى شركة رائدة في الإستشارات الاستثمارية و الإدارية للشركات والمؤسسات المحلية و الدولية.. نخطط و نرشد و نقدم كافة المعلومات و الإحصاءات.. و ندعمك في كافة عناصر تنفيذ مشروعك</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:phenix/button {\"isLink\":true,\"label\":\"عرض القطاعات\",\"url\":\"http://localhost/px-demo/bedaya/%d8%a7%d9%84%d9%82%d8%b7%d8%a7%d8%b9%d8%a7%d8%aa-%d8%a7%d9%84%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%d9%8a%d8%a9/\",\"radius\":\"radius-sm\",\"background\":\"bg-transparent\",\"color\":\"color-transparent\",\"className\":\"position-ab pos-top-0 pos-start-0 z-index-5 h-100 fluid\"} -->\n<a class=\"wp-block-phenix-button position-ab pos-top-0 pos-start-0 z-index-5 h-100 fluid btn bg-transparent color-transparent normal normal radius-sm\" href=\"http://localhost/px-demo/bedaya/%d8%a7%d9%84%d9%82%d8%b7%d8%a7%d8%b9%d8%a7%d8%aa-%d8%a7%d9%84%d8%a7%d9%82%d8%aa%d8%b5%d8%a7%d8%af%d9%8a%d8%a9/\" rel=\"noopener\">عرض القطاعات</a>\n<!-- /wp:phenix/button --></div>\n<!-- /wp:phenix/column --></div>\n<!-- /wp:phenix/row --></div></div>\n<!-- /wp:phenix/container -->"
    ));
?>