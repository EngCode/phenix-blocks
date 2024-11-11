<?php 
    if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;
    $loadingOptions = (array) get_option('pds_loading');
    if(!isset($loadingOptions["size"])) {$loadingOptions["size"] = "3.5rem";}
?>
<!-- Grid -->
<div class="row gpx-md-40 gpx-lg-50">
    <!-- Column -->
    <div class="col-12 col-md-4 w-max-320 divider-e">
        <h3 class="fs-16 mb-10"><?php echo esc_html__("Core Optimization", "pds-blocks");?></h3>
        <?php
            echo pds_toggle_controls(array(
                array(
                    "name"  => 'pds_cdn',
                    "title" => 'Phenix CDN',
                ),
                array(
                    "name"  => 'jquery_remove',
                    "title" => 'Remove jQuery',
                ),
                array(
                    "name"  => 'head_cleaner',
                    "title" => 'Header Optimizer',
                ),
                array(
                    "name"  => 'blocks_optimizer',
                    "title" => 'GB Blocks Optimizer',
                ),
                array(
                    "name"  => 'comments_css',
                    "title" => 'Clean Comments CSS',
                )
            ));
        ?>

        <h3 class="fs-16 mb-10 mt-30"><?php echo esc_html__("Plugins Optimization", "pds-blocks");?></h3>
        <?php
            echo pds_toggle_controls(array(
                array(
                    "name"  => 'wpc7_rm_scripts',
                    "title" => 'CF7 Remove JS',
                ),
                array(
                    "name"  => 'wpc7_rm_styles',
                    "title" => 'CF7 Remove CSS',
                ),
                array(
                    "name"  => 'wpc7_cleaner',
                    "title" => 'CF7 HTML Cleaner',
                ),
                array(
                    "name"  => 'newsletter_css',
                    "title" => 'Remove [Newsletter] CSS',
                ),
                array(
                    "name"  => 'pds_woo_css',
                    "title" => 'Remove WooCommerce CSS',
                ),
                array(
                    "name"  => 'pds_woo_js',
                    "title" => 'Remove WooCommerce JS',
                ),
            ));
        ?>
    </div>
    <!-- Column -->
    <div class="col col-12 col-md-8">
        <!-- Loading Screen -->
        <h3 class="fs-16 mb-10"><?php echo esc_html__("Loading Screen", "pds-blocks");?></h3>
        <div class="row gpy-30">
            <!-- Preview -->
            <div class="col-12 col-md-5 col-xl-6">
                <div class="loading-preview mb-5 position-rv tx-align-center border-1 border-solid border-alpha-15" style="padding-bottom: 60%; background: <?php echo esc_attr($loadingOptions["background"]); ?>;">
                    <div class="loading-content position-ab pos-center">
                        <!-- Image -->
                        <img class="loading-image <?php if ($loadingOptions["type"] == "code") { echo esc_attr("hidden"); } ?>" width="50" src="<?php echo esc_attr($loadingOptions["image"]); ?>" alt="<?php echo esc_html__('Loading', "pds-blocks");?>" />
                        <!-- Code -->
                        <div class="loading-code <?php if ($loadingOptions["type"] == "image") { echo esc_attr("hidden"); } ?>">
                            <?php echo $loadingOptions["code"]; ?>
                        </div>
                        <!-- Paragraph -->
                        <p class="loading-text <?php if(isset($loadingOptions["showText"]) && $loadingOptions["showText"] !== "on") { echo esc_attr("hidden"); } ?>" style="margin-bottom: 0; font-size: 13px; padding: 10px 5px;"><?php echo $loadingOptions["text"]; ?></p>
                    </div>
                </div>
                <!-- Note -->
                <p class="fs-12 color-gray"><?php echo esc_html__("Loading Screen Live Preview." ,"pds-blocks"); ?></p>
            </div>
            <!-- Controls -->
            <div class="col-12 col-md-7 col-xl-6">
                <div class="pd-25 radius-sm bg-alpha-05">
                    <!-- Type and Image -->
                    <label class="fs-14 weight-strong mb-5"><?php echo esc_html__("Type", "pds-blocks"); ?></label>
                    <div class="row gpx-10 flow-nowrap">
                        <!-- Loading Type -->
                        <div class="col">
                            <select id="pds_loading_type" name="pds_loading[type]" value="<?php echo esc_attr( $loadingOptions["type"] ); ?>" class="mb-20 px-select form-control small radius-sm">
                                <option value="image">Image</option>
                                <option value="code">Custom Code</option>
                            </select>
                        </div>
                        <!-- Image Uploader -->
                        <div class="col-auto px-custom-uploader">
                            <button type="button" class="uploader-btn btn <?php if ($loadingOptions["type"] == "image") {echo esc_attr( "primary");} else {echo esc_attr( "gray");} ?> small radius-sm"><?php echo esc_html__("Change Image", "pds-blocks"); ?></button>
                            <input id="pds_loading_image" type="hidden" name="pds_loading[image]" class="uploader-input" value="<?php echo esc_attr($loadingOptions["image"]); ?>" />
                        </div>
                    </div>

                    <!-- Text and Background -->
                    <div class="row gpx-10">
                        <!-- Loading Text -->
                        <div class="col-4">
                            <label class="fs-14 weight-strong mb-5"><?php echo esc_html__("Text", "pds-blocks"); ?></label>
                            <input id="pds_loading_text" name="pds_loading[text]" value="<?php echo esc_attr($loadingOptions["text"]); ?>" type="text" class="form-control small radius-sm mb-10" />
                        </div>
                        <!-- Loading Text -->
                        <div class="col-4">
                            <label class="fs-14 weight-strong mb-5"><?php echo esc_html__("Size", "pds-blocks"); ?></label>
                            <input id="pds_loading_size" name="pds_loading[size]" value="<?php echo esc_attr($loadingOptions["size"]); ?>" type="text" class="form-control small radius-sm mb-10" />
                        </div>
                        <!-- Loading Background -->
                        <div class="col-4" id="pds_loading_background">
                            <label class="fs-14 weight-strong mb-5"><?php echo esc_html__("Background", "pds-blocks"); ?></label>
                            <div class="px-group flexbox flow-nowrap mb-10">
                                <span class="btn square small border-1 border-solid border-alpha-15" style="background: <?php echo esc_attr($loadingOptions["background"]); ?>"></span>
                                <input name="pds_loading[background]" value="<?php echo esc_attr($loadingOptions["background"]); ?>" type="text" class="form-control small radius-sm col-8 col" />
                            </div>
                        </div>
                    </div>

                    <!-- Group -->
                    <div class="flexbox align-between">
                        <!-- Switch Button -->
                        <label class="mb-0 small fs-14 option-control flexbox align-center-y weight-medium pds-5" data-type="switch">
                            <input id="pds_loading_showText" type="checkbox" name="pds_loading[showText]" <?php if (isset($loadingOptions["showText"]) && $loadingOptions["showText"] == "on") {echo 'checked';} ?> />
                            <span class="switch"></span>
                            <span class="me-5"><?php echo esc_html__("Show Loading Text", "pds-blocks"); ?></span>
                        </label>
                        <!-- Switch Button -->
                        <label class="mb-0 small fs-14 option-control flexbox align-center-y weight-medium pds-5" data-type="switch">
                            <input id="pds_loading_theme" type="checkbox" name="pds_loading[theme]" <?php if (isset($loadingOptions["theme"]) && $loadingOptions["theme"] == "on") {echo 'checked';} ?> />
                            <span class="switch"></span>
                            <span class="me-5"><?php echo esc_html__("Custom Loading", "pds-blocks"); ?></span>
                        </label>
                    </div>
                    <!-- // Group -->

                    <!-- Loading Code -->
                    <div id="pds_loading_code" class="<?php if ($loadingOptions["type"] == "image") : ?>hidden<?php endif; ?>">
                        <label class="fs-14 weight-strong mb-5"><?php echo esc_html__("Custom Code", "pds-blocks"); ?></label>
                        <textarea name="pds_loading[code]" class="form-control radius-sm">
                            <?php echo $loadingOptions["code"]; ?>
                        </textarea>
                    </div>
                    <!-- Loading Code -->
                </div>
            </div>
            <!-- // Controls -->
        </div>

        <!-- Other Options -->
        <div class="pdt-20 divider-t">
            <h3 class="fs-16 mb-10"><?php echo esc_html__("Other Options", "pds-blocks");?></h3>
            <!-- Row -->
            <div class="row gpy-20">
                <!-- Column -->
                <div class="col-4">
                    <!-- Control Label -->
                    <label class="mb-10 weight-medium fs-14"><?php echo esc_html__("Post Excerpt Length", "phenix"); ?></label>
                    <!-- Form Control -->
                    <input type="number" class="form-control radius-sm fs-13" name="excerpt_length" value="<?php echo get_option("excerpt_length") ? esc_attr(get_option("excerpt_length")) : 175; ?>" />
                </div>
                <!-- // Column -->
            </div>
        </div>
    </div>
    <!-- // Column -->
</div>
<!-- // Grid -->

<!-- Scripts -->
<script defer>
    document.addEventListener('DOMContentLoaded', ready => {
        //===> Loading Live Preview <===//
        Phenix('#pds_loading_type').on("change", isChanged => {
            //===> Get the Value <===//
            let value = isChanged.target.value;

            //===> Check if the Value is "image" <===//
            if(value == "image") {
                //===> Show the Image Controls <===//
                Phenix(".loading-preview .loading-image").removeClass("hidden");
                Phenix(".loading-preview .loading-code, #pds_loading_code").addClass("hidden");
            } else {
                //===> Show the Code Controls <===//
                Phenix(".loading-preview .loading-image").addClass("hidden");
                Phenix(".loading-preview .loading-code, #pds_loading_code").removeClass("hidden");
            }
        });

        Phenix('#pds_loading_text').on("change", isChanged => {
            //===> Get the Value <===//
            let value = isChanged.target.value;
            //===> Change the Preview <===//
            document.querySelector(".loading-preview .loading-text").innerHTML = value;
        });

        Phenix('#pds_loading_code textarea').on("change", isChanged => {
            //===> Get the Value <===//
            let value = isChanged.target.value;
            //===> Change the Preview <===//
            document.querySelector(".loading-preview .loading-code").innerHTML = value;
        });

        Phenix('#pds_loading_background input').on("change", isChanged => {
            //===> Get the Value <===//
            let value = isChanged.target.value;
            //===> Change the Preview <===//
            document.querySelector(".loading-preview").style.background = value;
            document.querySelector("#pds_loading_background .btn").style.background = value;
        });

        Phenix('#pds_loading_showText').on("change", isChanged => {
            //===> Get the Value <===//
            let checked = isChanged.target.checked;
            //===> Change the Preview <===//
            if (checked === false) {
                document.querySelector(".loading-preview .loading-text").classList.add("hidden");
            } else {
                document.querySelector(".loading-preview .loading-text").classList.remove("hidden");
            }
        });
    });
</script>