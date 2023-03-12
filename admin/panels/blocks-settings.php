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
                    "name"  => 'container_block',
                    "title" => 'Phenix/Container',
                    "icon"  => $icons_url.'container.svg',
                ),
                array(
                    "name"  => 'group_block',
                    "title" => 'Phenix/Group',
                    "icon"  => $icons_url.'group.svg',
                ),
                array(
                    "name"  => 'logo_block',
                    "title" => 'Phenix/Logo',
                    "icon"  => $icons_url.'site-logo.svg',
                ),
                array(
                    "name"  => 'navigation_block',
                    "title" => 'Navigation Menu',
                    "icon"  => $icons_url.'navigation.svg',
                ),
                array(
                    "name"  => 'button_block',
                    "title" => 'PDS Button',
                    "icon"  => $icons_url.'button.svg',
                ),
                array(
                    "name"  => 'row_block',
                    "title" => 'Grid/Row',
                    "icon"  => $icons_url.'grid.svg',
                ),
                array(
                    "name"  => 'column_block',
                    "title" => 'Grid/Column',
                    "icon"  => $icons_url.'columns.svg',
                ),
                array(
                    "name"  => 'inline_elements_block',
                    "title" => 'Inline Elements',
                    "icon"  => $icons_url.'columns.svg',
                ),
                array(
                    "name"  => 'popups_block',
                    "title" => 'Popups Block',
                    "icon"  => $icons_url.'latest-comments.svg',
                ),
            ));
        ?>
    </div>
    <!-- Column -->
    <div class="col-12 col-md-3 divider-e">
        <?php
            echo pds_toggle_controls(array(
                array(
                    "name"  => 'head_block',
                    "title" => 'Page Head',
                    "icon"  => $icons_url.'header.svg',
                ),
                array(
                    "name"  => 'query_block',
                    "title" => 'Phenix/Query',
                    "icon"  => $icons_url.'query-loop.svg',
                ),
                array(
                    "name"  => 'taxonomies_list_block',
                    "title" => 'Taxonomies List',
                    "icon"  => $icons_url.'latest-posts.svg',
                ),
                array(
                    "name"  => 'taxonomies_block',
                    "title" => 'Taxonomies Query',
                    "icon"  => $icons_url.'latest-posts.svg',
                ),
                array(
                    "name"  => 'theme_part_block',
                    "title" => 'Theme Part',
                    "icon"  => $icons_url.'theme-part.svg',
                ),
            ));
        ?>
    </div>
    <!-- // Column -->
</div>
<!-- // Grid -->