<?php
    //===> Define Elements <===//
    $images_folder = plugin_dir_url(__DIR__).'/assets/img';
    $media_folder = plugin_dir_url(__DIR__).'/assets/media';
?>
<!-- Intro Poster -->
<div class="pds-dashboard my-30 me-30 mgx-xl-auto radius-lg" style="max-width: 1100px">
    <!-- Cover Image -->
    <a href="#about"><img src="<?php echo $images_folder;?>/tuts/intro.jpg" width="900" alt="screenshot" class="fluid" /></a>
</div>

<!-- Dashboard Wrapper -->
<div class="pds-dashboard me-30 mgx-xl-auto bg-white radius-lg" style="max-width: 1100px">
    <!-- Headline -->
    <div class="flexbox align-center-y align-between pdx-20 pdy-10 divider-b">
        <h1 style="font-size: 1rem; margin-bottom: 0"><?php echo __("الدليل الارشادي السريع للاستخدام", "phenix"); ?></h1>
        <img src="<?php echo $images_folder;?>/px-logo/px-blocks-x.svg" width="170" alt="phenix-logo" />
    </div>
    <!-- // Headline -->

    <!-- Container -->
    <div class="container pdb-20">
        <!-- Grid Layout -->
        <div class="row divider-b pdx-5">
            <!-- Column -->
            <div class="col-12 col-md-4 divider-e pdy-25">
                <p class="weight-medium"><?php echo __("هذا دليل ارشادي سريع لتعلم كيفية التعديل على قالب ووردبريس مبني بنظام تصميم فينكس, في هذة الصفحة ستتعرف سريعا على ادوات التعديل المتاحة فى الووردبريس ومدمجة مع نظام تصميم فينكس لتعديل كامل التصميم ومحتوي الموقع.","phenix");?></p>
                <p class="weight-medium"><?php echo __("اهلا بكم فى الحقبة الجديدة من الووردبريس بواسطة <a href='https://phenixthemes.com/pds-docs/'>Abdullah.Ramadan</a> لمعرفة المزيد اضغط علي <a href='#about'>المزيد عن نظام فينكس.</a>.","phenix");?></p>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-8 pdb-10 pdt-20 align-self-center">
                <img src="<?php echo $images_folder;?>/tuts/01.png" width="900" alt="screenshot" class="mb-10" />
            </div>
            <!-- // Column -->
        </div>
        <!-- Note Text -->
        <p class="weight-medium fs-12 col-12 tx-align-center color-gray pdy-10 lineheight-100 mb-0">
            <?php echo __("اتبع التعليمات بالترتيب فى كل قسم من الصفحة فكل قسم يشرح كيفية تعديل جزء من النظام.","phenix");?>
        </p>
        <!-- Grid Layout -->
        <div class="px-tabs radius-md border-solid border-1 border-alpha-10">
            <!-- Custom Tabs Style -->
            <style>
                .tabs-navigation .active {
                    color: var(--primary-reverse);
                    background-color: var(--primary-color);
                }

                .tabs-navigation .btn:not(.active) {background-color: transparent;}
                .tabs-navigation .btn {--padding: 15px;}
                .tabs-navigation .btn.active {font-weight: var(--bold-weight);}
                .tabs-navigation .btn::before {font-size: 15px;}
            </style>
            <!-- Tabs Navigation -->
            <ul class="tabs-navigation reset-list flexbox overflow-hidden fs-15 mb-15 radius-md bg-alpha-05 radius-top divider-b">
                <li data-tab="section-1" class="col btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium fas fa-brush divider-e"><?php echo __("الوان الهوية","phenix");?></li>
                <li data-tab="section-2" class="col btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium fas fa-font divider-e"><?php echo __("الخطوط","phenix");?></li>
                <li data-tab="section-3" class="col btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium fas fa-link divider-e"><?php echo __("القوائم","phenix");?></li>
                <li data-tab="section-4" class="col btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium fas fa-cube divider-e"><?php echo __("القطع والقوالب","phenix");?></li>
                <li data-tab="section-5" class="col btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium fas fa-pen divider-e"><?php echo __("المحتوي","phenix");?></li>
                <li data-tab="section-6" class="col btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium fas fa-file divider-e"><?php echo __("الانماط","phenix");?></li>
                <li data-tab="section-7" class="col btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium far fa-globe-africa divider-e"><?php echo __("الترجمة","phenix");?></li>
                <li data-tab="section-8" class="col btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium fas fa-layer-group divider-e"><?php echo __("المكونات","phenix");?></li>
                <li data-tab="section-9" class="col btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium fas fa-database divider-e"><?php echo __("البيانات","phenix");?></li>
                <li data-tab="section-10" class="col btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium fas fa-cog"><?php echo __("الاعدادات","phenix");?></li>
            </ul>
            <!-- Tabs Wrapper -->
            <div class="tabs-panels">
                <!-- Panel -->
                <div class="tab-panel tx-align-center pdy-15 pdx-30" id="section-1">
                    <img src="<?php echo $images_folder;?>/tuts/colors.png" width="900" alt="screenshot" class="fluid" />
                </div>
                <!-- Panel -->
                <div class="tab-panel tx-align-center pdy-15 pdx-30" id="section-2">
                    <img src="<?php echo $images_folder;?>/tuts/fonts-options.png" width="900" alt="screenshot" class="fluid" />
                </div>
                <!-- Panel -->
                <div class="tab-panel tx-align-center pdy-15 pdx-30" id="section-3">
                    <img src="<?php echo $images_folder;?>/tuts/menus.png" width="900" alt="screenshot" class="fluid" />
                </div>
                <!-- Panel -->
                <div class="tab-panel pdy-15 pdx-30" id="section-4">
                    <img src="<?php echo $images_folder;?>/tuts/part-templates.png" width="900" alt="screenshot" class="fluid" />
                    <!-- Grid -->
                    <div class="row pdy-15 mt-15 divider-t">
                        <!-- Column -->
                        <div class="col-12 tx-align-center mb-30">
                            <h4 class="fs-16 mb-5"><?php echo __("المكونات والقوالب واجزاء القالب","phenix"); ?></h4>
                            <p class="fs-14"><?php echo __("اليك بعض المصطلحات التي ستتعرض لها اثناء بنائك لمحتوي موقعك وعند استخدامك اى من الاشياء المذكورة اعلاه.","phenix"); ?></p>
                        </div>
                        <!-- Column -->
                        <div class="col-12">
                            <ul class="reset-list fs-13 flexbox">
                                <!-- Item -->
                                <li style="width:calc(50% - 30px)" class="bg-alpha-05 mb-30 mx-15 pd-15 border-1 border-alpha-15 border-solid"><span class="fs-14 weight-bold mb-5 display-block"><?php echo __("ماهية المكونات ؟","phenix"); ?></span>
                                    <?php echo __("المكونات هية اجزاء صغيرة من العناصر يتم التجميع بينها لبناء جزء من قالب او قالب كامل لصفحة ما او نوع بيانات يحتويه موقعك مثل الخدمات اشياء يتم الاشارة اليها كـ مكون او Block على سبيل المثال (صورة, عنوان, زرار, قائمة) هذة الاشياء يتم اعتبارها مكونات صغيرة وعندما تبنيها مع بعضها يتم تكوين ما نسمية بالنمط او جزء قالب.","phenix"); ?>
                                </li>
                                <!-- Item -->
                                <li style="width:calc(50% - 30px)" class="bg-alpha-05 mb-30 mx-15 pd-15 border-1 border-alpha-15 border-solid"><span class="fs-14 weight-bold mb-5 display-block"><?php echo __("ماهو جزء القالب ؟","phenix"); ?></span>
                                    <?php echo __("جزء قالب هو قطعة تم بنائها من عدة مكونات على سبيل المثال الهيدر هو جزء قالب مكون من لوجو, قائمة, وازرار وهو جزء تستخدمه بشكل عام فى عدة قوالب وصفحات او جميعها وجزء القالب مختلف عن النمط حيث عند تعديل جزء قالب فهذا التعديل سيتم تطبيقه فى كل القوالب التي يتواجد بها هذا الجزء.","phenix"); ?>
                                </li>
                                <!-- Item -->
                                <li class="bg-alpha-05 col-12 col mx-15 pd-15 border-1 border-alpha-15 border-solid"><span class="fs-14 weight-bold mb-5 display-block"><?php echo __("ماهو القالب ؟","phenix"); ?></span>
                                    <?php echo __("القالب هو تصميم نوع من انواع البيانات او تصميم خاص لصفحة معينة تم بناءة من عدة مكونات واجزاء قوالب لتظهر بشكل معين على سبيل المثال الرئيسية وصفحة الاخبار قوالب مختلفة فى طريقة عرضهم للمحتوي فكل منهم يعرض المحتوي بشكل مختلف والقالب عادتا يتم تطبيقة على جميع صفحات نوع المحتوي التي تم تحديدة للقالب فعلي سبيل المثال صفحة تفاصيل جميع الاخبار تظهر بتصميم واحد ولكن محتوي مختلف.","phenix"); ?>
                                </li>
                            </ul>
                        </div>
                        <!-- // Column -->
                    </div>
                    <!-- // Grid -->
                </div>
                <!-- Panel -->
                <div class="tab-panel pdy-15 pdx-30" id="section-5">
                    <h3 class="fs-16 divider-b mb-20 pdb-10"><?php echo __("لوحة التحكم وشريط المحرر","phenix"); ?></h3>
                    <img src="<?php echo $images_folder;?>/tuts/content-1.png" width="900" alt="screenshot" class="mb-20 fluid" />
                    <!-- Grid -->
                    <div class="row pdt-25 pdb-30 pdx-15 bg-primary radius-md color-white" style="margin: 15px 0;">
                        <!-- Column -->
                        <div class="col-6">
                            <h4 class="fs-16 mb-15"><?php echo __("ماهو محرر الموقع ؟","phenix"); ?></h4>
                            <p class="fs-14"><?php echo __("محرر الموقع هو المحرر الذي تسطيع من خلاله التحكم وبناء تصميم الموقع العام وقوالب البيانات على سبيل المثال الشكل العام للصفحة الرئيسية او الشكل العام لصفحات عرض الاخبار او الخدمات او الشكل العام لصفحة محتوي تفاصيل الخدمة او الخبر او اى نوع من البيانات يحتويه موقعك وأيضا لتعديل القطع العامة فى هذة القوالب مثل الهيدر والفوتر ولوجو الموقع الماثل عادتا فى جزء الهيدر..","phenix"); ?></p>
                        </div>
                        <!-- Column -->
                        <div class="col-6">
                            <h4 class="fs-16 mb-15"><?php echo __("ماهو محرر المحتوي ؟","phenix"); ?></h4>
                            <p class="fs-14"><?php echo __("اما محرر المحتوي فهو المحرر الذي تستطيع من خلالة تعديل محتوي البيانات مثل اضافة اخبار جديدة تعديل الاخبار الحالية اضافة خدمات او تعديل محتوي الخدمات او اى نوع اخر من انواع البيانات الذي يحتوية موقعك.","phenix"); ?></p>
                        </div>
                        <!-- // Column -->
                    </div>
                    <!-- // Grid -->
                    
                    <!-- Grid -->
                    <div class="flexbox mt-30">
                        <!-- Column -->
                        <div class="col-4 w-max-260 pde-15">
                            <h4 class="fs-15 mb-5"><?php echo __("المكونات واجزاء القالب","phenix"); ?></h4>
                            <p class="fs-13 mb-20"><?php echo __("اليك بعض المصطلحات التي ستتعرض لها اثناء بنائك لمحتوي موقعك وعند استخدامك اى من الاشياء المذكورة اعلاه.","phenix"); ?></p>
                            <ul class="reset-list icons-list fs-12" data-icon="fas fa-star">
                                <!-- Item -->
                                <li class="mb-20"><span class="fs-13 weight-bold mb-5 display-block"><?php echo __("ماهية المكونات ؟","phenix"); ?></span>
                                    <?php echo __("المكونات هية اجزاء صغيرة من العناصر يتم التجميع بينها لبناء جزء من قالب او قالب كامل لصفحة ما او نوع بيانات يحتويه موقعك مثل الخدمات اشياء يتم الاشارة اليها كـ مكون او Block على سبيل المثال (صورة, عنوان, زرار, قائمة) هذة الاشياء يتم اعتبارها مكونات صغيرة وعندما تبنيها مع بعضها يتم تكوين ما نسمية بالنمط او جزء قالب.","phenix"); ?>
                                </li>
                                <!-- Item -->
                                <li class="mb-20"><span class="fs-13 weight-bold mb-5 display-block"><?php echo __("ماهو جزء القالب ؟","phenix"); ?></span>
                                    <?php echo __("جزء قالب هو قطعة تم بنائها من عدة مكونات على سبيل المثال الهيدر هو جزء قالب مكون من لوجو, قائمة, وازرار وهو جزء تستخدمه بشكل عام فى عدة قوالب وصفحات او جميعها وجزء القالب مختلف عن النمط حيث عند تعديل جزء قالب فهذا التعديل سيتم تطبيقة فى كل القوالب التي يتواجد بها هذا الجزء.","phenix"); ?>
                                </li>
                            </ul>
                        </div>
                        <!-- Column -->
                        <div class="col-8 col">
                            <img src="<?php echo $images_folder;?>/tuts/content-2.png" width="900" alt="screenshot" class="mb-20 fluid" />
                        </div>
                        <!-- // Column -->
                    </div>
                    <!-- // Grid -->

                    <!-- Area Title -->
                    <h4 class="pdt-15 pdb-20 pdx-15 mb-30 bg-primary radius-md color-white fs-16 tx-align-center"><?php echo __("بعد ان تعرفت على المكونات واجزاء القالب ولوحة اعداداتهم اليك بعض التلميحات عن كيفية تعديل بعض من العناصر الشائع استخدامها","phenix"); ?></h4>
                    <img src="<?php echo $images_folder;?>/tuts/content-3.png" width="900" alt="screenshot" class="mb-40 fluid" />
                    <img src="<?php echo $images_folder;?>/tuts/content-4.png" width="900" alt="screenshot" class="mb-20 fluid" />
                    <!-- // Grid -->
                </div>
                <!-- Panel -->
                <div class="tab-panel pdy-15 pdx-30" id="section-6">
                    <!-- Grid -->
                    <div class="flexbox align-center-x">
                        <!-- Column -->
                        <div class="col-5 pde-15">
                            <h4 class="fs-15 mb-5"><?php echo __("تعريف الانماط","phenix"); ?></h4>
                            <p class="fs-13 mb-20"><?php echo __("الانماط هية قطع من المحتوي مثل اجزاء القالب باختلاف انك تستطيع استخدامها بشكل متكرر وتغيير محتواها واعداداتها بدون التأثير على باقي المحتوي وستجد العديد من الانماط حسب تصميم موقعك عادتا يتم تجهيز بعض الانماط مثل السلايدر, قطعة عرض خدمات او لوجوهات عملائك لكي تستطيع اعادة استخدامها فى صفحات جديدة من محتوي موقعك واليك بعض الانماط الشائع استخدامها :","phenix"); ?></p>
                            
                            <ul class="reset-list icons-list fs-12" data-icon="fas fa-star">
                                <!-- Item -->
                                <li class="mb-20"><span class="fs-13 weight-bold mb-5 display-block"><?php echo __("الهيدر القياسي","phenix"); ?></span>
                                    <?php echo __("الهيدر القياسي عادتا يكون نسخة من الهيدر الخاص بتصميم موقعك ليمكنك من صناعة نسخ مختلفة منه لتستخدمها فى صفحات مختلفة حسب حاجتك.","phenix"); ?>
                                </li>
                                <!-- Item -->
                                <li class="mb-20"><span class="fs-13 weight-bold mb-5 display-block"><?php echo __("الفوتر القياسي","phenix"); ?></span>
                                    <?php echo __("الفوتر القياسي عادتا يكون نسخة من الفوتر الخاص بتصميم موقعك ليمكنك من صناعة نسخ مختلفة منه لتستخدمها فى صفحات مختلفة حسب حاجتك.","phenix"); ?>
                                </li>
                                <!-- Item -->
                                <li class="mb-20"><span class="fs-13 weight-bold mb-5 display-block"><?php echo __("السلايدر الرئيسي","phenix"); ?></span>
                                    <?php echo __("قطعة لعرض شرائح مكونات من نوع بيانات الشرائح او السلايدر الرئيسي.","phenix"); ?>
                                </li>
                                <!-- Item -->
                                <li class="mb-20"><span class="fs-13 weight-bold mb-5 display-block"><?php echo __("سلايدر للخدمات او الاخبار","phenix"); ?></span>
                                    <?php echo __("قطعة لعرض الخدمات او الاخبار حيث يمكنك تغيير مصدر البيانات المعروضة بسهولة من اعدادات المكون الخاص بالنظام الشبكي.","phenix"); ?>
                                </li>
                                <!-- Item -->
                                <li class="mb-20"><span class="fs-13 weight-bold mb-5 display-block"><?php echo __("محتوي مدونة افتراضي","phenix"); ?></span>
                                    <?php echo __("هو عادة نمط لمحتوي مدونة افتراضي كمثال لمحررين المحتوي يمكن اتباعه فى انشاء المحتوي او تعديل المحتوي ليحافظ على بنية محتوي متوافقة بنسبة اكبر فى محركات البحث.","phenix"); ?>
                                </li>
                                <!-- Item -->
                                <li class="mb-20"><span class="fs-13 weight-bold mb-5 display-block"><?php echo __("محتوي خدمة افتراضي","phenix"); ?></span>
                                    <?php echo __("نمط اخر مثل المدونة الافتراضية ولكن لنوع بيانات اخر مثل الخدمة.","phenix"); ?>
                                </li>
                            </ul>
                        </div>
                        <!-- Column -->
                        <div class="col-6 col">
                            <img src="<?php echo $images_folder;?>/tuts/use-patterns.png" width="900" alt="screenshot" class="mb-20 fluid" />
                        </div>
                        <!-- // Column -->
                    </div>
                    <!-- // Grid -->
                </div>
                <!-- Panel -->
                <div class="tab-panel tx-align-center pdy-15 pdx-30" id="section-7">
                    <img src="<?php echo $images_folder;?>/tuts/translation.png" width="900" alt="screenshot" class="fluid mb-10" />
                </div>
                <!-- Panel -->
                <div class="tab-panel tx-align-center pdy-15 pdx-30" id="section-8">
                    ماهية المكونات وكيفية استخدامها
                </div>
                <!-- Panel -->
                <div class="tab-panel tx-align-center pdy-15 pdx-30" id="section-9">
                    <!-- Alert -->
                    <p class="bg-offwhite-danger pdt-5 pdb-10 pdx-15 fs-13 tx-icon icon-lg fas fa-exclamation-triangle mb-15 weight-bold color-black radius-md">
                        <?php echo __("تنبية! ان لم تكن لديك دراية بكيفية تطوير الووردبريس و ادارة البيانات وانواعها ننصحك بعدم تغيير اى شئ فى ادوات مجموعة البيانات .","phenix"); ?>
                    </p>
                    <img src="<?php echo $images_folder;?>/tuts/data-collection.png" width="900" alt="screenshot" class="fluid pdx-15 mb-10" />
                </div>
                <!-- Panel -->
                <div class="tab-panel tx-align-center pdy-15 pdx-30" id="section-10">
                    <!-- Alert -->
                    <p class="bg-offwhite-danger pdt-5 pdb-10 pdx-15 fs-13 tx-icon icon-lg fas fa-exclamation-triangle mb-15 weight-bold color-black radius-md">
                        <?php echo __("تنبية! ان لم تكن لديك دراية بكيفية تطوير الووردبريس ننصحك بعدم تغيير اى من اعدادات الاضافة.","phenix"); ?>
                    </p>
                    <img src="<?php echo $images_folder;?>/tuts/settings.png" width="700" alt="screenshot" class="mb-10" />
                </div>
                <!-- // Panel -->
            </div>
            <!-- // Tabs Wrapper -->
        </div>
        <!-- // Grid Layout -->
    </div>
    <!-- // Container -->
</div>

<!-- Temporary Music Player -->
<div class="pds-dashboard me-30 mgx-xl-auto radius-lg" style="max-width: 1100px">
    <!-- Music Player -->
    <h3 class="color-gray tx-align-center pdy-10 flexbox align-center mouse-pointer" style="font-size: 14px; margin-bottom: 0" id="play-music-man">
        <i class="me-5 fas fa-mp3-player fs-18"></i>
        <?php echo __("هل تريد الاستماع الى شئ ممتع ؟ اضغط هنا", "phenix"); ?>
        <i class="ms-5 fas fa-mp3-player fs-18"></i>
    </h3>  
</div>

<!-- Note Text -->
<div class="pds-dashboard me-30 mgx-xl-auto bg-white radius-lg" style="max-width: 1100px" id="about">
    <!-- Headline -->
    <div class="flexbox align-center-y align-between pdx-20 pdy-10 divider-b">
        <h2 style="font-size: 1rem; margin-bottom: 0"><?php echo __("نبذة عن نظام فينكس", "phenix"); ?></h2>
        <img src="<?php echo $images_folder;?>/px-logo/px-blocks-x.svg" width="170" alt="phenix-logo" />
    </div>
    <!-- // Headline -->
    
    <!-- Layout Group -->
    <div class="flexbox">
        <!-- Column -->
        <div class="col-7 w-max-570 pd-30">
            <p class="fs-14"><?php echo __('فينكس هو نظام تصميم وتطوير لـ واجهات المستخدم (UI/UX/Front-End) لبناء وتصميم تطبيقات الويب بمختلف انواعها وقد تم بناءة بمنطق بسيط لبناء تطبيقات ويب عالية الاداء والسرعة ولديه اكبر نسبة توافق ودعم لمحركات البحث وبه الكثير من المميزات التي تتيح لك بناء اى شئ بدون الحاجة الى اضافات اخري.',"phenix");?></p>
            <p class="fs-14"><?php echo __('و منذ مطلع عام 2018 وقد اتخذ الووردبريس طريق جديد فى كيفية إدارة وانشاء المحتوي عبر تبنى المحرر "Gutenberg" فى الإصدار الخامس بشكل رسمي والان فى عام 2023 بعد صدور الإصدار السادس من الووردبريس قد اكتمل هذا المحرر ليقدم تجربة مستخدم عظيمة واصبح ينتهج الووردبريس نهج بناء الموقع عبر المكونات',"phenix");?></p>
            <p class="fs-14"><?php echo __('وهو أيضا نفس النهج والمفهوم الذي تم بناء نظام تصميم “Phenix” علية واصبح من الممكن نقل تجربة نظام التصميم الى الووردبريس بتكامل تام مما يضيف لموقعك جميع مميزات وقوة نظام التصميم من السرعة والأداء الى دعم وتجهيز موقعك لمحركات البحث',"phenix");?></p>
            <p class="fs-14"><?php echo __('وليس على مستوي التحكم وبناء التصميم ومحتوي الموقع فقط بل أيضا على مستوي توسع وتطوير موقعك واضافة أنواع محتوي جديدة بسهولة عن طريق ادوات مجموعة البيانات من فينكس, ومع المكونات المجهزة خصيصا لنظام فينكس داخل محرر الووردبريس ستجد ان لديك تحكم كامل فى كل تفاصيل التصميم والمحتوي لبناء موقعك كما تشاء بحرية كاملة.',"phenix");?></p>
            <p class="fs-14"><?php echo __('تم بناء وتطوير نظام فينكس بواسطة <a href="mailto:abdullah@phenixthemes.com" class="weight-medium color-danger">عبدالله.رمضان</a>.',"phenix");?></p>
        </div>
        <!-- Column -->
        <div class="fs-13 col col-5 pde-30 pdy-25 align-self-end">
            <img src="<?php echo $images_folder;?>/tuts/about.svg" width="900" alt="screenshot" class="fluid" />
        </div>
    </div>
    <!-- // Layout Group -->
</div>

<?php include(dirname(__FILE__) . '/modules/scripts.php'); ?>

<!-- Temporary Music Script and Style -->
<script defer>
    document.querySelector("#play-music-man").addEventListener("click", clicked => {
        
        //===> .... <===//
        let element = clicked.target,
        musicTrigger = Phenix(element).ancestor(".pds-dashboard")?.querySelector("#play-music-man");
        
        //===> .... <====//
        if (musicTrigger.classList.contains('is-playing')) {
            let thePlayer = document.querySelector("#music-player");

            thePlayer?.pause();
            musicTrigger.classList.remove('is-playing');
            musicTrigger.classList.remove('music-effect');
            return;
        }

        //===> .Create Audio. <===//
        let audio_player = document.querySelector("#music-player");

        if (!document.querySelector("#music-player")) {
            let audio_temp = `<audio src="<?php echo $media_folder; ?>/1.mp3" data-playing="1" preload="none" class="hidden" id="music-player"></audio>`;
            Phenix(musicTrigger).insert("after", audio_temp);
            audio_player = document.querySelector("#music-player");
            audio_player.play();
            musicTrigger.classList.add("music-effect");
        } else {
            audio_player.play();
            musicTrigger.classList.add("music-effect");
        }

        //===> .Playlist. <===//
        audio_player.onended = () => {
            let source = parseInt(audio_player.getAttribute('data-playing')),
                maxNum = 2;

            if (source < maxNum+1) {
                audio_player.setAttribute("src", `<?php echo $media_folder; ?>/${source+1}.mp3`);
                audio_player.setAttribute("data-playing", source+1);
            } else {
                audio_player.setAttribute("src", `<?php echo $media_folder; ?>/1.mp3`);
                audio_player.setAttribute("data-playing", 1);
            }

            audio_player.play();
        };

        //===> Toggle <===//
        musicTrigger.classList.add('is-playing');
    });
</script>

<style>
   .music-effect {
       -webkit-animation: musicEffect 0.7s infinite; 
            animation: musicEffect 0.7s infinite; 
   }

   .music-effect i {
       -webkit-animation: musicEffectIcons 0.7s infinite; 
            animation: musicEffectIcons 0.7s infinite; 
   }

    @-webkit-keyframes musicEffect {
        50% {color: var(--primary-color);}
        100% {color: var(--secondary-color);}
    }

    @keyframes musicEffect {
        50% {color: var(--primary-color);}
        100% {color: var(--secondary-color);}
    }

    @-webkit-keyframes musicEffectIcons {
        from {color: var(--primary-color);}
        50% {color: var(--secondary-color);}
        1000% {color: var(--dark-color);}
    }

    @keyframes musicEffectIcons {
        from {color: var(--primary-color);}
        50% {color: var(--secondary-color);}
        1000% {color: var(--dark-color);}
    }
</style>