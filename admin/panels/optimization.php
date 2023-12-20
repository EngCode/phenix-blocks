<?php if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif; ?>
<?php 
    $showLoadingText = get_option('pds_loading')["showText"];
?>
<!-- Grid -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-md-4 w-max-320 divider-e">
        <h3 class="fs-16 mb-10"><?php echo __("Core Optimization", "pds-blocks");?></h3>
        <?php
            echo pds_toggle_controls(array(
                array(
                    "name"  => 'head_cleaner',
                    "title" => 'Header Optimizer',
                ),
                array(
                    "name"  => 'jquery_remove',
                    "title" => 'Remove jQuery',
                ),
                array(
                    "name"  => 'blocks_optimizer',
                    "title" => 'GB Blocks Optimizer',
                ),
                array(
                    "name"  => 'comments_css',
                    "title" => 'Clean Comments CSS',
                ),
                array(
                    "name"  => 'adminbar_css',
                    "title" => 'Clean Admin-Bar CSS',
                ),
                array(
                    "name"  => 'adminbar_disable',
                    "title" => 'Disable Admin-Bar for Users',
                ),
            ));
        ?>

        <h3 class="fs-16 mb-10 mt-30"><?php echo __("Plugins Optimization", "pds-blocks");?></h3>
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
            ));
        ?>
    </div>
    <!-- Column -->
    <div class="col col-12 col-md-8">
        <h3 class="fs-16 mb-10"><?php echo __("Loading Screen", "pds-blocks");?></h3>
        <div class="row">
            <!-- Preview -->
            <div class="col-6">
                <div class="loading-preview position-rv tx-align-center border-1 border-solid border-alpha-15" style="padding-bottom: 60%; background: <?php echo get_option('pds_loading')["background"]; ?>;">
                    <div class="loading-content position-ab pos-center">
                        <!-- Image -->
                        <img class="loading-image <?php if (get_option("pds_loading")["type"] == "code") { echo "hidden"; } ?>" style="opacity: 0.5" width="32" src="<?php echo get_option('pds_loading')["image"]; ?>" alt="<?php echo __('Loading', "pds-blocks");?>" />
                        <!-- Code -->
                        <div class="loading-code <?php if (get_option("pds_loading")["type"] == "image") { echo "hidden"; } ?>">
                            <?php echo get_option('pds_loading')["code"]; ?>
                        </div>
                        <!-- Paragraph -->
                        <p class="loading-text <?php if($showLoadingText !== "on") { echo "hidden"; } ?>" style="margin-bottom: 0; font-size: 13px; padding: 10px 5px;">---<?php echo get_option('pds_loading')["text"]; ?>---</p>
                    </div>
                </div>
            </div>
            <!-- Controls -->
            <div class="col-6">
                <div class="pd-25 radius-sm bg-alpha-05">
                    <!-- Type and Image -->
                    <label class="fs-14 weight-strong mb-5"><?php echo __("Type", "pds-blocks"); ?></label>
                    <div class="row gpx-10 flow-nowrap">
                        <!-- Loading Type -->
                        <div class="col">
                            <select id="pds_loading_type" name="pds_loading[type]" value="<?php echo get_option('pds_loading')["type"]; ?>" class="mb-20 px-select form-control small radius-sm">
                                <option value="image">Image</option>
                                <option value="code">Custom Code</option>
                            </select>
                        </div>
                        <!-- Image Uploader -->
                        <div class="col-auto px-custom-uploader">
                            <button type="button" class="uploader-btn btn <?php if (get_option("pds_loading")["type"] == "image") {echo "primary";} else {echo "gray";} ?> small radius-sm"><?php echo __("Change Image", "pds-blocks"); ?></button>
                            <input id="pds_loading_image" type="hidden" name="pds_loading[image]" class="uploader-input" value="<?php echo get_option('pds_loading')["image"]; ?>" />
                        </div>
                    </div>

                    <!-- Text and Background -->
                    <div class="row gpx-10 flow-nowrap">
                        <!-- Loading Text -->
                        <div class="col-6">
                            <label class="fs-14 weight-strong mb-5"><?php echo __("Text", "pds-blocks"); ?></label>
                            <input id="pds_loading_text" name="pds_loading[text]" value="<?php echo get_option('pds_loading')["text"]; ?>" type="text" class="form-control small radius-sm mb-10" />
                        </div>
                        <!-- Loading Background -->
                        <div class="col-6" id="pds_loading_background">
                            <label class="fs-14 weight-strong mb-5"><?php echo __("Background", "pds-blocks"); ?></label>
                            <div class="px-group flexbox flow-nowrap mb-10">
                                <span class="btn square small border-1 border-solid border-alpha-15" style="background: <?php echo get_option('pds_loading')["background"]; ?>"></span>
                                <input name="pds_loading[background]" value="<?php echo get_option('pds_loading')["background"]; ?>" type="text" class="form-control small radius-sm col-8 col" />
                            </div>
                        </div>
                    </div>

                    <!-- Switch Button -->
                    <label class="mb-20 small fs-14 option-control flexbox align-center-y weight-medium pds-5" data-type="switch">
                        <input id="pds_loading_showText" type="checkbox" name="pds_loading[showText]" <?php if ($showLoadingText == "on") {echo 'checked';} ?> />
                        <span class="switch"></span>
                        <span class="me-5"><?php echo __("Show Loading Text", "pds-blocks"); ?></span>
                    </label>

                    <!-- Loading Code -->
                    <div id="pds_loading_code" class="<?php if (get_option("pds_loading")["type"] == "image") : ?>hidden<?php endif; ?>">
                        <label class="fs-14 weight-strong mb-5"><?php echo __("Custom Code", "pds-blocks"); ?></label>
                        <textarea name="pds_loading[code]" class="form-control radius-sm">
                            <?php echo get_option('pds_loading')["code"]; ?>
                        </textarea>
                    </div>
                    <!-- Loading Code -->
                </div>
            </div>
            <!-- // Controls -->
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

        Phenix('#pds_loading_image').on("change", isChanged => {
            //===> Get the Value <===//
            let value = isChanged.target.value;
            //===> Change the Preview <===//
            document.querySelector(".loading-preview .loading-image").setAttribute("src", value);
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