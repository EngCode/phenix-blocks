//===> Core Blocks Remover <===//
document.addEventListener('DOMContentLoaded', () => {
    //===> Get Current Options <===//
    let pds_core_options;
    async function get_core_options() {
        //===> Connect to the API <===//
        const response = await fetch(`${PDS_WP_KEY.root}options`, {
            method : 'GET', //===> [GET, POST, PUT, DELETE].
            headers: {      //===> WP Cookies Auth
                "Content-Type": "application/json",
                "X-WP-Nonce": PDS_WP_KEY.nonce
            },
            credentials: "same-origin",
        });

        //===> Return Data <===//
        return response.json();
    }

    //===> Get Location from Rest-API <===//
    get_core_options().then(responde => {
        //===> Get Data <===//
        pds_core_options = responde["pds_core"];

        //===> Blocks List [Option, Name] <===//    
        let pds_core_blocks = [
            ["pds_core_quote", "core/quote"],
            ["pds_core_preformatted", "core/preformatted"],
            ["pds_core_code", "core/code"],
            ["pds_core_pullquote", "core/pullquote"],
            ["pds_core_verse", "core/verse"],
            ["pds_core_gallery", "core/gallery"],
            ["pds_core_file", "core/file"],
            ["pds_core_mediatext", "core/media-text"],
            ["pds_core_cover", "core/cover"],
            ["pds_core_buttons", "core/buttons"],
            ["pds_core_columns", "core/columns"],
            ["pds_core_group", "core/group"],
            ["pds_core_more", "core/more"],
            ["pds_core_nextpage", "core/nextpage"],
            ["pds_core_separator", "core/separator"],
            ["pds_core_spacer", "core/spacer"],
            ["pds_core_embed", "core/embed"],
            ["pds_core_logo", "core/site-logo"],
            ["pds_core_title", "core/site-title"],
            ["pds_core_tagline", "core/site-tagline"],
            ["pds_core_query", "core/query"],
            ["pds_core_navigation", "core/navigation"],
            ["pds_core_avatar", "core/avatar"],
            ["pds_core_loginout", "core/loginout"],
            ["pds_core_tag_cloud", "core/tag-cloud"],
            //===> Remove Post Elements  <===//
            ["pds_core_post_elements", [
                "core/post-title",
                "core/post-excerpt",
                "core/post-author",
                "core/post-featured-image",
                "core/post-date",
                "core/post-terms",
                "core/post-navigation-link",
                "core/read-more",
                "core/post-comments-form",
                "core/term-description",
                "core/query-title",
                "core/post-author-biography",
            ]],
            //===> Widgets Blocks <===//
            ["pds_core_widgets_blocks", [
                "core/rss",
                "core/search",
                "core/latest-posts",
                "core/social-links",
                "core/latest-comments",
                "core/archives",
                "core/page-list",
            ]]
        ];

        //===> for Each Block <===//
        pds_core_blocks.forEach(block_item => {
            let option_name = block_item[0];
            //===> Check for the Block Option <===//
            if (pds_core_options[option_name] !== "on") {
                //===> for Core Blocks <===//
                if (typeof(block_item[1]) !== "object") {
                    wp.blocks.unregisterBlockType(`${block_item[1]}`);
                }
                //===> for Multiple Blocks <===//
                else {
                    block_item[1].forEach(item => wp.blocks.unregisterBlockType(`${item}`));
                }
            }
        });
    }).catch(error => {error.message});
});