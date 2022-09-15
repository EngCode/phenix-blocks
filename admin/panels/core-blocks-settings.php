<?php
    //====> Shared Options <====//
    $assets_url = plugin_dir_url(__FILE__);
    $icons_url = str_replace('admin/panels', 'assets/img/blocks/core/', $assets_url);
?>
<!-- Grid -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-md-3 border-reset border-end-1 border-alpha-10 border-solid">
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_group" <?php if (get_option('pds_core_group')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>group.svg" class="icon"> Core/Group</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_columns" <?php if (get_option('pds_core_columns')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>columns.svg" class="icon"> Core/Columns</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_preformatted" <?php if (get_option('pds_core_preformatted')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>preformatted.svg" class="icon"> Preformatted</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_pullquote" <?php if (get_option('pds_core_pullquote')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>pullquote.svg" class="icon"> Core/Pullquote</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_verse" <?php if (get_option('pds_core_verse')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>verse.svg" class="icon"> Core/Verse</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_gallery" <?php if (get_option('pds_core_gallery')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>gallery.svg" class="icon"> Core/Gallery</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_file" <?php if (get_option('pds_core_file')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>file.svg" class="icon"> Core/File</span>
        </label>
        <!-- // Option Control -->
    </div>
    <!-- Column -->
    <div class="col-12 col-md-3 border-reset border-end-1 border-alpha-10 border-solid">
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_mediatext" <?php if (get_option('pds_core_mediatext')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>media-text.svg" class="icon"> Media-Text</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_cover" <?php if (get_option('pds_core_cover')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>cover.svg" class="icon"> Core/Cover</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_buttons" <?php if (get_option('pds_core_buttons')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>buttons.svg" class="icon"> Core/Buttons</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_more" <?php if (get_option('pds_core_more')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>more.svg" class="icon"> Core/More</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_nextpage" <?php if (get_option('pds_core_nextpage')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>page-break.svg" class="icon">Page Break</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_quote" <?php if (get_option('pds_core_quote')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>qoute.svg" class="icon"> Core/Quote</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_code" <?php if (get_option('pds_core_code')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>code.svg" class="icon"> Core/Code</span>
        </label>
        <!-- // Option Control -->
    </div>
    <!-- Column -->
    <div class="col-12 col-md-3 border-reset border-end-1 border-alpha-10 border-solid">
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_separator" <?php if (get_option('pds_core_separator')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>seperator.svg" class="icon"> Separator</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_spacer" <?php if (get_option('pds_core_spacer')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>spacer.svg" class="icon"> Core/Spacer</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_embed" <?php if (get_option('pds_core_embed')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>video-embed.svg" class="icon"> Core/Embed</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_logo" <?php if (get_option('pds_core_logo')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>site-logo.svg" class="icon"> Site Logo</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_title" <?php if (get_option('pds_core_title')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>archive-title.svg" class="icon"> Site Title</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_tagline" <?php if (get_option('pds_core_tagline')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>site-tagline.svg" class="icon"> Site Tagline</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_query" <?php if (get_option('pds_core_query')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>query-loop.svg" class="icon"> Query Loop</span>
        </label>
        <!-- // Option Control -->
    </div>
    <!-- Column -->
    <div class="col-12 col-md-3">
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_navigation" <?php if (get_option('pds_core_navigation')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>navigation.svg" class="icon"> Navigation</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_avatar" <?php if (get_option('pds_core_avatar')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>avatar.svg" class="icon"> Avatar</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_post_elements" <?php if (get_option('pds_core_post_elements')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>post-image.svg" class="icon"> Post Elements</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_loginout" <?php if (get_option('pds_core_loginout')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>logout.svg" class="icon"> Log-in-out</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_tag_cloud" <?php if (get_option('pds_core_tag_cloud')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>tag.svg" class="icon"> Tags Cloud</span>
        </label>
        <!-- Option Control -->
        <label class="small option-control flexbox flow-reverse align-center-y align-between fs-15 weight-medium" data-type="switch">
            <input type="checkbox" name="pds_core_widgets_blocks" <?php if (get_option('pds_core_widgets_blocks')) { echo 'checked'; } ?>>
            <span class="switch"></span>
            <span><img src="<?php echo $icons_url; ?>latest-posts.svg" class="icon"> Useless Widgets</span>
        </label>
        <!-- // Option Control -->
    </div>
    <!-- // Column -->
</div>
<!-- // Grid -->