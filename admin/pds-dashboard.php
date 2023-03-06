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
                <div class="tab-panel tx-align-center pdy-15 pdx-30" id="section-4">
                    <img src="<?php echo $images_folder;?>/tuts/part-templates.png" width="900" alt="screenshot" class="fluid" />
                </div>
                <!-- Panel -->
                <div class="tab-panel tx-align-center pdy-15 pdx-30" id="section-5">
                    تعديل المحتوي
                </div>
                <!-- Panel -->
                <div class="tab-panel tx-align-center pdy-15 pdx-30" id="section-6">
                    كيفية استخدام الانماط
                </div>
                <!-- Panel -->
                <div class="tab-panel tx-align-center pdy-15 pdx-30" id="section-7">
                    كيفية ترجمة الموقع والمحتوي
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
                    <span>ماهية مجموعة البيانات وكيفية استخدامها</span>
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
<!-- // Dashboard Wrapper -->

<div class="pds-dashboard me-30 mgx-xl-auto radius-lg" style="max-width: 1100px">
    <!-- Music Player -->
    <h3 class="color-dark tx-align-center pdy-10 flexbox align-center mouse-pointer" style="font-size: 14px; margin-bottom: 0" id="play-music-man">
        <i class="me-5 fas fa-mp3-player fs-18 color-primary"></i>
        <?php echo __("هل تريد الاستماع الى شئ ممتع ؟ اضغط هنا", "phenix"); ?>
        <i class="ms-5 fas fa-mp3-player fs-18 color-primary"></i>
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
        let audio_temp = `<audio src="<?php echo $media_folder; ?>/1.mp3" data-playing="1" preload="none" class="hidden" id="music-player"></audio>`;
        Phenix(musicTrigger).insert("after", audio_temp);

        let audio_player = document.querySelector("#music-player");
        if (audio_player) {
            audio_player.play();
            musicTrigger.classList.add("music-effect")
        }

        //===> .Playlist. <===//
        audio_player.onended = () => {
            let source = parseInt(audio_player.getAttribute('data-playing')),
                maxNum = 2;

            if (source <= maxNum) {
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