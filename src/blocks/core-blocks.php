<!-- Core Blocks Remover -->
<script type="text/javascript">
window.addEventListener('load', () => {
    //===> Remove Quote Block <===//
    <?php if (!get_option('pds_core_quote')) :?>
        wp.blocks.unregisterBlockType('core/quote');
    <?php endif; ?>

    //===> Remove Preformatted <===//
    <?php if (!get_option('pds_core_preformatted')) : ?>
        wp.blocks.unregisterBlockType('core/preformatted');
    <?php endif; ?>

    //===> Remove Code <===//
    <?php if (!get_option('pds_core_code')) : ?>
        wp.blocks.unregisterBlockType('core/code');
    <?php endif; ?>

    //===> Remove Pull-Quote <===//
    <?php if (!get_option('pds_core_pullquote')) : ?>
        wp.blocks.unregisterBlockType('core/pullquote');
    <?php endif; ?>

    //===> Remove Verse <===//
    <?php if (!get_option('pds_core_verse')) : ?>
        wp.blocks.unregisterBlockType('core/verse');
    <?php endif; ?>

    //===> Remove Gallery <===//
    <?php if (!get_option('pds_core_gallery')) : ?>
        wp.blocks.unregisterBlockType('core/gallery');
    <?php endif; ?>

    //===> Remove File Block <===//
    <?php if (!get_option('pds_core_file')) : ?>
        wp.blocks.unregisterBlockType('core/file');
    <?php endif; ?>

    //===> Remove Media & Text <===//
    <?php if (!get_option('pds_core_mediatext')) : ?>
        wp.blocks.unregisterBlockType('core/media-text');
    <?php endif; ?>

    //===> Remove Cover <===//
    <?php if (!get_option('pds_core_cover')) : ?>
        wp.blocks.unregisterBlockType('core/cover');
    <?php endif; ?>

    //===> Remove Buttons <===//
    <?php if (!get_option('pds_core_buttons')) : ?>
        wp.blocks.unregisterBlockType('core/buttons');
    <?php endif; ?>

    //===> Remove Columns <===//
    <?php if (!get_option('pds_core_columns')) : ?>
        wp.blocks.unregisterBlockType('core/columns');
    <?php endif; ?>

    //===> Remove Row,Stack,Group <===//
    <?php if (!get_option('pds_core_group')) : ?>
        wp.blocks.unregisterBlockType('core/group');
    <?php endif; ?>

    //===> Remove More <===//
    <?php if (!get_option('pds_core_more')) : ?>
        wp.blocks.unregisterBlockType('core/more');
    <?php endif; ?>

    //===> Remove Page-Break <===//
    <?php if (!get_option('pds_core_nextpage')) : ?>
        wp.blocks.unregisterBlockType('core/nextpage');
    <?php endif; ?>

    //===> Remove Separator <===//
    <?php if (!get_option('pds_core_separator')) : ?>
        wp.blocks.unregisterBlockType('core/separator');
    <?php endif; ?>

    //===> Remove Spacer <===//
    <?php if (!get_option('pds_core_spacer')) : ?>
        wp.blocks.unregisterBlockType('core/spacer');
    <?php endif; ?>

    //===> Remove Embed <===//
    <?php if (!get_option('pds_core_embed')) : ?>
        wp.blocks.unregisterBlockType('core/embed');
    <?php endif; ?>

    //===> Remove Site Logo <===//
    <?php if (!get_option('pds_core_logo')) : ?>
        wp.blocks.unregisterBlockType('core/site-logo');
    <?php endif; ?>

    //===> Remove Site Title <===//
    <?php if (!get_option('pds_core_title')) : ?>
        wp.blocks.unregisterBlockType('core/site-title');
    <?php endif; ?>

    //===> Remove Site Tagline <===//
    <?php if (!get_option('pds_core_tagline')) : ?>
        wp.blocks.unregisterBlockType('core/site-tagline');
    <?php endif; ?>

    //===> Remove Query <===//
    <?php if (!get_option('pds_core_query')) : ?>
        wp.blocks.unregisterBlockType('core/query');
    <?php endif; ?>

    //===> Remove Navigation <===//
    <?php if (!get_option('pds_core_navigation')) : ?>
        wp.blocks.unregisterBlockType('core/navigation');
    <?php endif; ?>

    //===> Remove Avatar <===//
    <?php if (!get_option('pds_core_avatar')) : ?>
        wp.blocks.unregisterBlockType('core/avatar');
    <?php endif; ?>

    //===> Remove Post Elements [titel, excerpt, author, thumbnail, etc..] <===//
    <?php if (!get_option('pds_core_post_elements')) : ?>
        wp.blocks.unregisterBlockType('core/post-title');
        wp.blocks.unregisterBlockType('core/post-excerpt');
        wp.blocks.unregisterBlockType('core/post-author');
        wp.blocks.unregisterBlockType('core/post-featured-image');
        wp.blocks.unregisterBlockType('core/post-date');
        wp.blocks.unregisterBlockType('core/post-terms');
        wp.blocks.unregisterBlockType('core/post-navigation-link');
        wp.blocks.unregisterBlockType('core/read-more');
        wp.blocks.unregisterBlockType('core/comments-query-loop');
        wp.blocks.unregisterBlockType('core/post-comments-form');
        wp.blocks.unregisterBlockType('core/term-description');
        wp.blocks.unregisterBlockType('core/query-title');
        wp.blocks.unregisterBlockType('core/post-author-biography');
    <?php endif; ?>

    //===> Remove Log-in/out <===//
    <?php if (!get_option('pds_core_loginout')) : ?>
        wp.blocks.unregisterBlockType('core/loginout');
    <?php endif; ?>

    //===> Remove Tags Cloud <===//
    <?php if (!get_option('pds_core_tag_cloud')) : ?>
        wp.blocks.unregisterBlockType('core/tag-cloud');
    <?php endif; ?>

    //===> Remove Widgets <===//
    <?php if (!get_option('pds_core_widgets_blocks')) : ?>
        wp.blocks.unregisterBlockType('core/rss');
        wp.blocks.unregisterBlockType('core/search');
        wp.blocks.unregisterBlockType('core/latest-posts');
        wp.blocks.unregisterBlockType('core/social-links');
        wp.blocks.unregisterBlockType('core/latest-comments');
        wp.blocks.unregisterBlockType('core/archives');
        wp.blocks.unregisterBlockType('core/page-list');
    <?php endif; ?>
});
</script>