<?php
    //===> Define Elements <===//
    $images_folder = plugin_dir_url(__DIR__).'/assets/img';
?>
<!-- Dashboard Wrapper -->
<div class="pds-dashboard my-30 me-30 mgx-xl-auto bg-white radius-lg" style="max-width: 1100px">
    <!-- Headline -->
    <div class="flexbox align-center-y align-between pdx-20 pdy-10 divider-b">
        <h1 style="font-size: 1rem; margin-bottom: 0"><?php echo __("الدليل الارشادي السريع للاستخدام", "phenix"); ?></h1>
        <img src="<?php echo $images_folder;?>/px-logo/px-blocks-x.svg" width="150" alt="phenix-logo" />
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
                <p class="fs-12 weight-bold tx-align-end">By <a href="https://phenixthemes.com/pds-docs/">Abdullah.Ramadan</a></p>
            </div>
            <!-- // Column -->
        </div>
        <!-- Note Text -->
        <p class="weight-medium fs-12 col-12 tx-align-center color-gray pdy-10 lineheight-100 mb-0"><?php echo __("اتبع التعليمات بالترتيب فى كل قسم من الصفحة فكل قسم يشرح كيفية تعديل جزء من النظام.","phenix");?></p>
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
                <li data-tab="section-1" class="btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium fas fa-brush divider-e"><?php echo __("الوان الهوية","phenix");?></li>
                <li data-tab="section-2" class="btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium fas fa-cube divider-e"><?php echo __("القطع والقوالب","phenix");?></li>
                <li data-tab="section-3" class="btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium fas fa-font divider-e"><?php echo __("الخطوط","phenix");?></li>
                <li data-tab="section-4" class="btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium fas fa-link divider-e"><?php echo __("القوائم","phenix");?></li>
                <li data-tab="section-5" class="btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium fas fa-pen divider-e"><?php echo __("المحتوي","phenix");?></li>
                <li data-tab="section-6" class="btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium fas fa-file divider-e"><?php echo __("الانماط","phenix");?></li>
                <li data-tab="section-7" class="btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium fas fa-layer-group divider-e"><?php echo __("المكونات","phenix");?></li>
                <li data-tab="section-8" class="btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium fas fa-database divider-e"><?php echo __("الترجمة","phenix");?></li>
                <li data-tab="section-9" class="btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium fas fa-database divider-e"><?php echo __("البيانات","phenix");?></li>
                <li data-tab="section-10" class="btn light btn-icon mb-0 fs-12 fs-xl-13 weight-medium fas fa-cog"><?php echo __("الاعدادات","phenix");?></li>
            </ul>
            <!-- Tabs Wrapper -->
            <div class="tabs-panels">
                <!-- Panel -->
                <div class="tab-panel tx-align-center pdy-15 pdx-30" id="section-1">
                    <img src="<?php echo $images_folder;?>/tuts/colors.png" width="900" alt="screenshot" class="fluid" />
                </div>
                <!-- Panel -->
                <div class="tab-panel tx-align-center pdy-15 pdx-30" id="section-2">
                    <img src="<?php echo $images_folder;?>/tuts/part-templates.png" width="900" alt="screenshot" class="fluid" />
                </div>
                <!-- Panel -->
                <div class="tab-panel tx-align-center pdy-15 pdx-30" id="section-4">
                    <img src="<?php echo $images_folder;?>/tuts/menus.png" width="900" alt="screenshot" class="fluid" />
                </div>
                <!-- // Panel -->
            </div>
            <!-- // Tabs Wrapper -->
        </div>
        <!-- // Grid Layout -->
    </div>
    <!-- // Container -->
</div>
<!-- // Dashboard Wrapper -->
<?php include(dirname(__FILE__) . '/modules/scripts.php'); ?>