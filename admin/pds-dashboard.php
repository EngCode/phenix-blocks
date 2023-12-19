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
                    <a href="https://phenixthemes.notion.site/Phenix-Blocks-Developers-b7ae033ce7484e8f98209d7587a94792" target="_blank" class="display-block">
                        <h3 class="color-white fs-18 tx-uppercase">Editors Guide-lines</h3>
                        <p class="color-white">Getting start with the User Guidelines for Content Editors and Marketers.</p>
                    </a>
                </div>
            </div>
            <!-- Column -->
            <div class="col-12 col-md-6 col-lg-4">
                <div class="bg-grade-primary pd-25 pd-mg-30 tx-align-center radius-md bg-grade-180">
                    <a href="https://phenixthemes.notion.site/Phenix-Design-System-efcfa4d3839946989a4f94ee5e0480c3" target="_blank" class="display-block">
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
        <div class="row gpy-30 gpy-fix">
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
        <div class="row hidden">
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
</div>
<!-- JS Scripts -->
<?php include(dirname(__FILE__) . '/modules/scripts.php'); ?>