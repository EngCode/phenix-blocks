<?php
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;
    //===> Define Elements <===//
    $images_folder = plugin_dir_url(__DIR__).'/assets/img';
    $media_folder = plugin_dir_url(__DIR__).'/assets/media';
?>
<!-- Dashboard Wrapper -->
<div class="pds-dashboard me-30 mgx-xl-auto pdy-50" style="max-width: 1100px; direction: ltr">
    <!-- Quick Guid -->
    <div class="bg-white radius-lg overflow-hidden pd-25">
        <!-- CTA Banners -->
        <div class="row gpy-30 gpx-20">
            <!-- Column -->
            <div class="col-12 col-md-6 col-lg-4">
                <div class="bg-grade-purple pd-25 pd-mg-30 tx-align-center radius-md bg-grade-180">
                    <a href="https://phenixthemes.com/wp-docs/" target="_blank" class="display-block">
                        <h3 class="color-white fs-18 tx-uppercase">User Guide-lines</h3>
                        <p class="color-white">Getting start with the User Guidelines for Content Editors and Marketers.</p>
                    </a>
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6 col-lg-4">
                <div class="bg-grade-primary pd-25 pd-mg-30 tx-align-center radius-md bg-grade-180">
                    <a href="https://phenixthemes.com/pds-docs/" target="_blank" class="display-block">
                        <h3 class="color-white fs-18 tx-uppercase">Developers Docs</h3>
                        <p class="color-white">the Developer Docs to learn more about the development tools in Phenix.</p>
                    </a>
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6 col-lg-4">
                <div class="bg-grade-secondary pd-25 pd-mg-30 tx-align-center radius-md bg-grade-180">
                    <a href="https://phenixthemes.com" target="_blank" class="display-block">
                        <h3 class="color-dark fs-18 tx-uppercase">More Themes!</h3>
                        <p class="color-dark">a new themes arrived on Phenix give us a visit to update your theme</p>
                    </a>
                </div>
            </div>
            <!-- // Column -->
        </div>
        <!-- // CTA Banners -->

        <!-- CTA Sections -->
        <div class="row gpy-30">
            <!-- Column -->
            <div class="col-12 col-md-6 col-lg-5">
                <div class="bg-white border-1 border-solid border-alpha-15 pd-25 radius-md h-min-100 tx-align-center">
                    <!-- PDB Logo -->
                    <img src="<?php echo $images_folder;?>/px-logo/px-blocks-icon.svg" alt="" width="100" class="mb-20" />
                    <!-- About -->
                    <p class="color-gray fs-14">With Phenix Blocks, Developers and Content Creators no longer have to start from scratch or spend excessive time crafting individual components. Instead, they can leverage the extensive library of Phenix Blocks to assemble their web pages effortlessly.</p>
                    <!-- AR Logo -->
                    <img src="<?php echo $images_folder;?>/dashboard/sig.svg" alt="" width="250" />
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6 col-lg-7">
                <a href="https://phenixthemes.com/wp-docs" target="_blank">
                    <img src="<?php echo $images_folder;?>/dashboard/video.png" alt="" class="fluid" />
                </a>
            </div>
            <!-- // Column -->
        </div>
        <!-- // CTA Sections -->

        <!-- CTA Links -->
        <div class="row">
            <!-- Column -->
            <div class="col-12 col-md-4">
                <div class="bg-white pd-25 radius-md border-1 border-solid border-alpha-15">
                    <!-- Title -->
                    <h3 class="fs-17 mb-15 lineheight-100 color-primary tx-uppercase">Quick Tutorials</h3>
                    <!-- List -->
                    <ul class="reset-list icons-list fs-13 links-inherit color-gray" data-icon="far fa-file-invoice">
                        <li><a href="#">How to Edit Themes Colors</a></li>
                        <li><a href="#">How to Edit Header and Footer</a></li>
                        <li><a href="#">How to Edit Menus and Links</a></li>
                        <li><a href="#">How to Edit Data-Types Templates</a></li>
                        <li><a href="#">How to Edit Contact & Orders Forms</a></li>
                        <li><a href="#">How to add New Data-Types</a></li>
                        <li><a href="#">How to Translate your Website</a></li>
                        <li><a href="#">How to Edit Fonts and Google Fonts</a></li>
                    </ul>
                    <!-- // List -->
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-4">
                <div class="bg-grade-purple bg-grade-180 pd-25 radius-md border-1 border-solid border-alpha-15">
                    <!-- Title -->
                    <h3 class="fs-17 mb-15 lineheight-100 color-white tx-uppercase">for Developers</h3>
                    <!-- List -->
                    <ul class="reset-list icons-list fs-13 links-inherit color-white" data-icon="far fa-file-invoice">
                        <li><a href="#">How to Add new Post-Types</a></li>
                        <li><a href="#">How to Use Theme Parts</a></li>
                        <li><a href="#">How to Use Logical Content</a></li>
                        <li><a href="#">How do Templates Meta Works</a></li>
                        <li><a href="#">How to Add Custom Taxonomies</a></li>
                        <li><a href="#">How to Create new Template Parts</a></li>
                        <li><a href="#">How to Use Phenix Blocks Data API</a></li>
                        <li><a href="#">How to Add Custom Meta-Tags</a></li>
                    </ul>
                    <!-- // List -->
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-4">
                <div class="bg-white pd-25 radius-md border-1 border-solid border-alpha-15">
                    <!-- Title -->
                    <h3 class="fs-17 mb-15 lineheight-100 color-primary tx-uppercase">Powerful Features</h3>
                    <!-- List -->
                    <ul class="reset-list icons-list fs-13 links-inherit color-gray" data-icon="far fa-file-invoice">
                        <li><a href="#">How to Use Phenix Blocks</a></li>
                        <li><a href="#">How to Use Editor Components</a></li>
                        <li><a href="#">How to Edit Cards Templates</a></li>
                        <li><a href="#">How to Use Patterns & Template Parts</a></li>
                        <li><a href="#">How to Add new Admin Pages</a></li>
                        <li><a href="#">Add Custom Post-Types & Taxonomies</a></li>
                        <li><a href="#">Add new Custom Fields for Any Data</a></li>
                        <li><a href="#">Create new Patterns & Template Parts</a></li>
                    </ul>
                    <!-- // List -->
                </div>
            </div>
            <!-- // Column -->
        </div>
        <!-- // CTA Links -->
    </div>

    <!-- Temporary -->
    <div class="bg-white radius-lg hidden">
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
                                        <?php echo __("جزء قالب هو قطعة تم بنائها من عدة مكونات على سبيل المثال الهيدر هو جزء قالب مكون من شعار, قائمة, وازرار وهو جزء تستخدمه بشكل عام فى عدة قوالب وصفحات او جميعها وجزء القالب مختلف عن النمط حيث عند تعديل جزء قالب فهذا التعديل سيتم تطبيقه فى كل القوالب التي يتواجد بها هذا الجزء.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li class="bg-alpha-05 col-12 col mx-15 pd-15 border-1 border-alpha-15 border-solid"><span class="fs-14 weight-bold mb-5 display-block"><?php echo __("ماهو القالب ؟","phenix"); ?></span>
                                        <?php echo __("القالب هو تصميم نوع من انواع البيانات او تصميم خاص لصفحة معينة تم بناءة من عدة مكونات واجزاء قوالب لتظهر بشكل معين على سبيل المثال الرئيسية وصفحة الاخبار قوالب مختلفة فى طريقة عرضهم للمحتوي فكل منهم يعرض المحتوي بشكل مختلف والقالب عادتا يتم تطبيقه على جميع صفحات نوع المحتوي الذي تم تحديده للقالب فعلي سبيل المثال صفحة تفاصيل جميع الاخبار تظهر بتصميم واحد ولكن محتوي مختلف.","phenix"); ?>
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
                                <p class="fs-14"><?php echo __("محرر الموقع هو المحرر الذي تسطيع من خلاله التحكم وبناء تصميم الموقع العام وقوالب البيانات على سبيل المثال الشكل العام للصفحة الرئيسية او الشكل العام لصفحات عرض الاخبار او الخدمات او الشكل العام لصفحة محتوي تفاصيل الخدمة او الخبر او اى نوع من البيانات يحتويه موقعك وأيضا لتعديل القطع العامة فى هذة القوالب مثل الهيدر والفوتر وشعار الموقع الماثل عادتا فى جزء الهيدر..","phenix"); ?></p>
                            </div>
                            <!-- Column -->
                            <div class="col-6">
                                <h4 class="fs-16 mb-15"><?php echo __("ماهو محرر المحتوي ؟","phenix"); ?></h4>
                                <p class="fs-14"><?php echo __("اما محرر المحتوي فهو المحرر الذي تستطيع من خلالة تعديل محتوي البيانات مثل اضافة اخبار جديدة تعديل الاخبار الحالية اضافة خدمات او تعديل محتوي الخدمات او اى نوع اخر من انواع البيانات الذي يحتويه موقعك.","phenix"); ?></p>
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
                                        <?php echo __("جزء قالب هو قطعة تم بنائها من عدة مكونات على سبيل المثال الهيدر هو جزء قالب مكون من شعار, قائمة, وازرار وهو جزء تستخدمه بشكل عام فى عدة قوالب وصفحات او جميعها وجزء القالب مختلف عن النمط حيث عند تعديل جزء قالب فهذا التعديل سيتم تطبيقه فى كل القوالب التي يتواجد بها هذا الجزء.","phenix"); ?>
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
                                <p class="fs-13 mb-20"><?php echo __("الانماط هية قطع من المحتوي مثل اجزاء القالب باختلاف انك تستطيع استخدامها بشكل متكرر وتغيير محتواها واعداداتها بدون التأثير على باقي المحتوي وستجد العديد من الانماط حسب تصميم موقعك عادتا يتم تجهيز بعض الانماط مثل السلايدر, قطعة عرض خدمات او شعارات عملائك لكي تستطيع اعادة استخدامها فى صفحات جديدة من محتوي موقعك واليك بعض الانماط الشائع استخدامها :","phenix"); ?></p>
                                
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
                                <img src="<?php echo $images_folder;?>/tuts/patterns-2.png" width="300" alt="screenshot" class="mb-20 display-block mgx-auto" />
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
                    <div class="tab-panel pdy-15 pdx-30" id="section-8">
                        <!-- Grid -->
                        <div class="row">
                            <!-- Column -->
                            <div class="col-12 tx-align-center mb-30">
                                <h4 class="fs-16 mb-5"><?php echo __("مكونات نظام التصميم","phenix"); ?></h4>
                                <p class="fs-14"><?php echo __("هنا ستجد قائمة بالمكونات المتوفرة ومفعلة بشكل افتراضي فى نظام تصميم فينكس بجانب المكونات الشائع استخدامها من نظام الووردبريس :","phenix"); ?></p>
                            </div>
                            <!-- Column -->
                            <div class="col-12">
                                <ul class="reset-list fs-13 flexbox">
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-5 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/site-logo.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Phenix Logo - شعار الموقع","phenix"); ?>
                                        </span>
                                        <?php echo __("بهذا المكون يمكنك تعيين شعار اساسي لموقعك وايقونة لشريط الموقع ويتم استخدامه عاده فى اجزاء القالب مثل الهيدر وبه وضع تجاوبي لتغيير الشعار بواحد مناسب لاجهزة الجوال.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/navigation.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Phenix Menu - عرض قائمة روابط","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون القائمة من فينكس يسمح لك بعرض قائمة تم انشاءها عن طريق نظام قوائم الووردبريس الكلاسيكي وايضا بها وضع تجاوبي لاخفاء القائمة فى اجهزة الجوال واظهارها عبر مكون الازرار. ","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/container.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Container - حاوية","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون الحاوية يسمح لك بانشاء عنصر خالي يستطيع ان يحتوي عدة مكونات اخري بداخلة مثل النظام الشبكي ويمتاز بخواصه التي تجعلك تستطيع ان تصمم به قوالب مقسمة لاقسام كل قسم يعرض نوع محتوي بشكل مختلف كما فى الرئيسية عاده.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/grid.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Grid Row - النظام الشبكي","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون النظام الشبكي يجب استخدامه بداخل مكون الحاوية ويسمح لك بتقسيم المكونات بداخلة الى اعمدة بجانب بعضها البعض او تحتها بعضها ويمكن استخدام وضع الشرائح (Slider Mode) لتحويل النظام الشبكي الي سلايدر والتمتع بخواص عارض الشرائح المتجاوب.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/columns.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Grid Column - اعمدة للنظام الشبكي","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون الاعمدة يتم استخدامه عادتا بداخل مكون النظام الشبكي لتحديد حجم للمحتوي داخل هذا المكون بشكل تجاوبي بحجم مختلف فى كل جهاز او حجم شاشة ويمكن الاستفادة منه خارج النظام الشبكي ايضاً لنفس الغرض.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/theme-part.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Theme Part - جزء قالب دينامكي","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون جزء القالب الديناميكي يسمح لك باستدعاء قالب تم بناءة بلغة PHP ويجب ان يكون ملف هذا القالب بداخل مجلد (template-parts) داخل مجلد الـ Theme الخاص بك ويمكن الاستفادة به لتشغيل خواص وقطع تصميم تم بنائها بلغة PHP.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/button.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("PDS Button - مكون ازرار","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون الازرار يسمح لك بانشاء عنصر زر يمكن استخدامه كرابط او زر لتفعيل شئ ما مثل ظهور نافذه مبوبه او اظهار قائمة متجاوبة والكثير من الامثلة التي يمكن استخدام عنصر الزر بها ويمكنك التحكم بكامل خواص الزر من الحجم والالوان بشكل متجاوب لكل جهاز او شاشه.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/group.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("PDS Group","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون المجموعات هو عنصر يمكن استخدام لتجميع مكونات وعناصر اخري بداخلة كمجموعة محتوي مرتبطة ببعضها ويمتاز بخواص النظام الشبكي والاعمدة التجاوبي.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/query-loop.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Query Loop - عارض المقالات","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون قائمة مقالات هو مكون لعرض قائمة لاى نوع محتوي على سبيل مثال عرض اخر الاخبار او جميع الخدمات ويجب ان يكون متوفر  بداخل Theme تصميم موقعك قالب PHP Template Part لنوع المحتوي ويمتاز ايضا بجميع خواص النظام الشبكي والسلايدر ويتم استخدامه عاده داخل مكون حاويه.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/page-head.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Page Head - رأس الصفحة","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون رأس الصفحة هو مكون تم اعداده برمجيا لعرض عنوان الصفحة الحالية و روابط تتبع بنية الصفحة Breadcrumb وهو مفيد ويجب ان يتواجد ف جميع الصفحات الداخلية لتوافق موقعك التام مع محركات البحث وارشفه المحتوي.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/latest-comments.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Popup/Modals - نافذه مبوبه","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون النافذه المبوبه يسمح لك بانشاء قطعة مخفية مبنية من عدة مكونات اخري داخلها و تظهر عند الضغط على زر ما له نفس المعرف ID الخاص بالنافذة المبوبة.","phenix"); ?>
                                    </li>
                                    <!-- // Item -->

                                    <!-- .. Core Blocks ... -->

                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/query-loop.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Taxonomies Loop - عارض الفئات","phenix"); ?>
                                        </span>
                                        <?php echo __("عارض الفئات هو مكون مثل مكون عارض المقالات باختلاف انه يسمح لك بعرض قائمة من الاقسام على سبيل المثال بتصميم خاص باستدعاء قالب Template Part من الـ Theme الخاص بك وهو ايضاً يحتوي على جميع مميزات مكون النظام الشبكي وعارض الشرائح Slider Mode التجاوبي.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/columns.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Inline elements - عناصر كتابية","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون العنصر الكتابي هو مكون يسمح لك بانشاء محتوي كتابي بداخل عناصر لتمييز النصوص مثل strong, italic, span ويمكن الاستفادة به وبخواصه لتمييز بعض النصوص داخل محتوي صفحتك.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/post-content.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Post Content - محتوي مقالة","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون محتوي مقالة هو عنصر لعرض محتوي المقالة لنوع محتوي القالب الحالي ويتم استخدامه فقط فى قوالب انواع البيانات والمحتوى وهو برمجيا ينفذ وظيفة the_content();.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/image.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Image - صورة","phenix"); ?>
                                        </span>
                                        <?php echo __("هو عنصر اساسي فى نظام الووردبريس ويسمح لك بوضع صور داخل محتوي صفحتك ويمكن استخدامه فى حالات لا حصر لها اثناء بناء التصميم او كتابه وتعديل المحتوي.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/paragraph.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Paragraph - فقرة","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون الفقرة هو عنصر أساسي في نظام الووردبريس ويسمح لك بانشاء فقرات نصية وتنسيقها كما تريد وهو أيضا من العناصر الحيوية والتي يتم استخدامه بشكل واسع فى بناء التصميم والمحتوي.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/headline.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Headline - عنوان","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون العنوان هو عنصر أساسي في نظام الووردبريس ويسمح لك بانشاء عناوين لفقراتك النصية وتنسيقها كما تريد وهو أيضا من العناصر الحيوية والتي يتم استخدامه بشكل واسع فى بناء التصميم والمحتوي.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/list.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("List - قائمة","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون القائمة النصية هو عنصر أساسي في نظام الووردبريس ويسمح لك بانشاء قوائم نصية لمحتواك وتنسيقها كما تريد وهو أيضا من العناصر الحيوية والتي يتم استخدامه بشكل واسع فى بناء التصميم والمحتوي.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/template-part.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Template Part - جزء قالب","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون جزء قالب هو عنصر أساسي في نظام الووردبريس ويسمح لك باستدعاء أجزاء القالب التي تم بنائها فى محرر تصميم الموقع مثل الهيدر والفوتر ورأس الصفحة","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/cf-7.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Contact Form - نماذج الاتصال","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون نماذج الاتصال هو عنصر يسمح لك باستدعاء نموذج تم بناء باضافة نماذج الاتصال مثل نموذج تواصل معنا او طلب الخدمة على سبيل المثال ويتواجد فقط عند استخدام اضافه Contact Form 7.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/table.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Table - جدول","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون الجدول هو عنصر أساسي في نظام الووردبريس ويسمح لك بانشاء جداول لمحتواك وتنسيقها كما تريد وهو أيضا من العناصر الحيوية والتي يتم استخدامه بشكل واسع فى بناء التصميم والمحتوي.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/video.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Video - فيديو","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون فيديو هو عنصر أساسي في نظام الووردبريس ويسمح لك بوضع فيديوهات لمحتواك كما تريد وهو أيضا من العناصر الحيوية والتي يتم استخدامه بشكل واسع فى بناء التصميم والمحتوي.","phenix"); ?>
                                    </li>
                                    <!-- Item -->
                                    <li style="width:calc(50% - 30px)" class="bg-offwhite-secondary mb-30 mx-15 pd-15 border-1 border-alpha-15 border-dashed">
                                        <span class="fs-14 weight-bold mb-10 display-block">
                                            <img src="<?php echo $images_folder;?>/blocks/core/audio.svg" alt="" class="me-5" width="20" />
                                            <?php echo __("Audio - صوت","phenix"); ?>
                                        </span>
                                        <?php echo __("مكون صوت هو عنصر أساسي في نظام الووردبريس ويسمح لك بوضع ملفات صوتية في محتواك كما تريد وهو أيضا من العناصر الحيوية والذي يتم استخدامه فى بناء التصميم والمحتوي.","phenix"); ?>
                                    </li>
                                </ul>
                            </div>
                            <!-- // Column -->
                        </div>
                        <!-- // Grid -->
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
</div>
<!-- JS Scripts -->
<?php include(dirname(__FILE__) . '/modules/scripts.php'); ?>