<?php
    //====> Shared Options <====//
    $assets_url = plugin_dir_url(__FILE__);
    $icons_url = str_replace('admin/panels', 'assets/img/blocks/core/', $assets_url);
?>
<!-- Grid -->
<div class="row">
    <!-- Column -->
    <div class="col-12 col-md-3 divider-e">
        <?php
            echo pds_toggle_controls(array(
                array(
                    "name"  => 'pds_core_group',
                    "title" => 'Core/Group',
                    "icon"  => $icons_url.'group.svg',
                ),
                array(
                    "name"  => 'pds_core_columns',
                    "title" => 'Core/Columns',
                    "icon"  => $icons_url.'columns.svg',
                ),
                array(
                    "name"  => 'pds_core_preformatted',
                    "title" => 'Preformatted',
                    "icon"  => $icons_url.'preformatted.svg',
                ),
                array(
                    "name"  => 'pds_core_pullquote',
                    "title" => 'Core/Pullquote',
                    "icon"  => $icons_url.'pullquote.svg',
                ),
                array(
                    "name"  => 'pds_core_verse',
                    "title" => 'Core/Verse',
                    "icon"  => $icons_url.'verse.svg',
                ),
                array(
                    "name"  => 'pds_core_gallery',
                    "title" => 'Core/Gallery',
                    "icon"  => $icons_url.'gallery.svg',
                ),
                array(
                    "name"  => 'pds_core_file',
                    "title" => 'Core/File',
                    "icon"  => $icons_url.'file.svg',
                ),
            ));
        ?>
    </div>
    <!-- Column -->
    <div class="col-12 col-md-3 divider-e">
        <?php
            echo pds_toggle_controls(array(
                array(
                    "name"  => 'pds_core_mediatext',
                    "title" => 'Media-Text',
                    "icon"  => $icons_url.'media-text.svg',
                ),
                array(
                    "name"  => 'pds_core_cover',
                    "title" => 'Core/Cover',
                    "icon"  => $icons_url.'cover.svg',
                ),
                array(
                    "name"  => 'pds_core_buttons',
                    "title" => 'Core/Buttons',
                    "icon"  => $icons_url.'buttons.svg',
                ),
                array(
                    "name"  => 'pds_core_more',
                    "title" => 'Core/More',
                    "icon"  => $icons_url.'more.svg',
                ),
                array(
                    "name"  => 'pds_core_nextpage',
                    "title" => 'Page Break',
                    "icon"  => $icons_url.'page-break.svg',
                ),
                array(
                    "name"  => 'pds_core_quote',
                    "title" => 'Core/Quote',
                    "icon"  => $icons_url.'qoute.svg',
                ),
                array(
                    "name"  => 'pds_core_code',
                    "title" => 'Core/Code',
                    "icon"  => $icons_url.'code.svg',
                ),
            ));
        ?>
    </div>
    <!-- Column -->
    <div class="col-12 col-md-3 divider-e">
        <?php
            echo pds_toggle_controls(array(
                array(
                    "name"  => 'pds_core_separator',
                    "title" => 'Core/Separator',
                    "icon"  => $icons_url.'seperator.svg',
                ),
                array(
                    "name"  => 'pds_core_spacer',
                    "title" => 'Core/Spacer',
                    "icon"  => $icons_url.'spacer.svg',
                ),
                array(
                    "name"  => 'pds_core_embed',
                    "title" => 'Core/Embed',
                    "icon"  => $icons_url.'video-embed.svg',
                ),
                array(
                    "name"  => 'pds_core_logo',
                    "title" => 'Site Logo',
                    "icon"  => $icons_url.'site-logo.svg',
                ),
                array(
                    "name"  => 'pds_core_title',
                    "title" => 'Site Title',
                    "icon"  => $icons_url.'archive-title.svg',
                ),
                array(
                    "name"  => 'pds_core_tagline',
                    "title" => 'Site Tagline',
                    "icon"  => $icons_url.'site-tagline.svg',
                ),
                array(
                    "name"  => 'pds_core_query',
                    "title" => 'Query Loop',
                    "icon"  => $icons_url.'query-loop.svg',
                ),
            ));
        ?>
    </div>
    <!-- Column -->
    <div class="col-12 col-md-3">
        <?php
            echo pds_toggle_controls(array(
                array(
                    "name"  => 'pds_core_navigation',
                    "title" => 'Core/Navigation',
                    "icon"  => $icons_url.'navigation.svg',
                ),
                array(
                    "name"  => 'pds_core_avatar',
                    "title" => 'Core/Avatar',
                    "icon"  => $icons_url.'avatar.svg',
                ),
                array(
                    "name"  => 'pds_core_post_elements',
                    "title" => 'Post Elements',
                    "icon"  => $icons_url.'post-image.svg',
                ),
                array(
                    "name"  => 'pds_core_loginout',
                    "title" => 'Log-in-out',
                    "icon"  => $icons_url.'logout.svg',
                ),
                array(
                    "name"  => 'pds_core_tag_cloud',
                    "title" => 'Tags Cloud',
                    "icon"  => $icons_url.'tag.svg',
                ),
                array(
                    "name"  => 'pds_core_widgets_blocks',
                    "title" => 'Useless Widgets',
                    "icon"  => $icons_url.'latest-posts.svg',
                ),
            ));
        ?>
    </div>
    <!-- // Column -->
</div>
<!-- // Grid -->