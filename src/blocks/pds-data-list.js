/*
 * Phenix Blocks
 * Version  : 1.0
 * License  : MIT
 * Copyright: 2022 Abdullah.Ramadan
*/

//===> Attach Data to Phenix Object <===//
window.PhenixBlocks.dataLists = {
    button : {
        types : [
            { label: __("Default", "pds-blocks"), value: 'btn' },
            { label: __("Text/Icon", "pds-blocks"), value: 'btn btn-icon' },
            { label: __("Icon Only", "pds-blocks"), value: 'btn square tooltip-bottom' },
        ],
    
        sizes : [
            { label: __("XS", "pds-blocks"), value: 'tiny' },
            { label: __("SM", "pds-blocks"), value: 'small' },
            { label: __("MD", "pds-blocks"), value: 'medium' },
            { label: __("LG", "pds-blocks"), value: 'large' },
            { label: __("XL", "pds-blocks"), value: 'xlarge' },
        ],
    },

    lightbox : {
        types : [
            { label: __("Image", "pds-blocks"),  value: 'image' },
            { label: __("Video", "pds-blocks"),  value: 'video' },
            { label: __("Embed", "pds-blocks"),  value: 'embed' },
        ],
    },

    container_tags : [
        { "label": "Div", "value": "div"},
        { "label": "Main", "value": "main"},
        { "label": "Aside", "value": "aside"},
        { "label": "Header", "value": "header"},
        { "label": "Footer", "value": "footer"},
        { "label": "Article", "value": "article"},
        { "label": "Section", "value": "section"},
    ],

    nav_tags : [
        { "label": "Div", "value": "div"},
        { "label": "Nav", "value": "nav"},
        { "label": "Main", "value": "main"},
        { "label": "Aside", "value": "aside"},
    ],

    html_tags : [
        { "label": "Div", "value": "div"},
        { "label": "Main", "value": "main"},
        { "label": "Aside", "value": "aside"},
        { "label": "Article", "value": "article"},
        { "label": "Section", "value": "section"},
        { "label": "List-(•)", "value": "ul"},
        { "label": "List-(#)", "value": "ol"},
    ],

    container_sizes : [
        { label: 'None',  value: '' },
        { label: 'SM',  value: 'container-sm' },
        { label: 'MD', value: 'container-md' },
        { label: 'LG', value: 'container' },
        { label: 'XL',  value: 'container-xl' },
        { label: 'Full',  value: 'container-fluid' },
    ],

    media_options: {
        types : [
            { "label": "Image", "value": "image"},
            { "label": "Video", "value": "embed"},
            { "label": "iFrame", "value": "iframe"},
        ],
    
        embeds : [
            { "label": "Video", "value": "video"},
            { "label": "YouTube", "value": "youtube"},
            { "label": "Vimeo", "value": "vimeo"},
            { "label": "Others", "value": "other"},
        ],
    
        size : [
            { "label": "Default", "value": ""},
            { "label": "R-None", "value": "none"},
            { "label": "R-1x1", "value": "1x1"},
            { "label": "R-4x3", "value": "4x3"},
            { "label": "R-16x9", "value": "16x9"},
            { "label": "R-21x9", "value": "21x9"},
            { "label": "Other", "value": "custom"},
        ],
    },

    queries : {
        orderBy : [
            { label: __('Default', 'pds-blocks'), value: '' },
            { label: __('Date', 'pds-blocks'), value: 'date' },
            { label: __('ID', 'pds-blocks'), value: 'ID' },
            { label: __('Author', 'pds-blocks'), value: 'author' },
            { label: __('Title', 'pds-blocks'), value: 'title' },
            { label: __('Modified', 'pds-blocks'), value: 'modified' },
            { label: __('Random', 'pds-blocks'), value: 'rand' },
            { label: __('Comment Count', 'pds-blocks'), value: 'comment_count' },
            { label: __('Menu Order', 'pds-blocks'), value: 'menu_order' },
            { label: __('Meta Value', 'pds-blocks'), value: 'meta_value' },
            { label: __('Meta Value Num', 'pds-blocks'), value: 'meta_value_num' },
            { label: __('Post__In', 'pds-blocks'), value: 'post__in' },
            { label: __('None', 'pds-blocks'), value: 'none' },
        ],

        taxOrderBy : [
            { label: __('Default', 'pds-blocks'), value: '' },
            { label: __('Name', 'pds-blocks'), value: 'name' },
            { label: __('ID', 'pds-blocks'), value: 'id' },
            { label: __('Count', 'pds-blocks'), value: 'count' },
            { label: __('Slug', 'pds-blocks'), value: 'slug' },
            { label: __('Term Group', 'pds-blocks'), value: 'term_group' },
            { label: __('Term Order', 'pds-blocks'), value: 'term_order' },
        ],

        usersOrderBy : [
            { label: __('Default', 'pds-blocks'), value: '' },
            { label: __('ID', 'pds-blocks'), value: 'ID' },
            { label: __('Login', 'pds-blocks'), value: 'login' },
            { label: __('Email', 'pds-blocks'), value: 'email' },
            { label: __('URL', 'pds-blocks'), value: 'url' },
            { label: __('Registered', 'pds-blocks'), value: 'registered' },
            { label: __('Display Name', 'pds-blocks'), value: 'display_name' },
        ]
    },

    textElements: {
        types: [
            { "label": "Headline", "value": "headline"},
            { "label": "Paragraph", "value": "paragraph"},
            { "label": "List Bullets", "value": "list"},
            { "label": "List Numbers", "value": "list-numbers"},
            { "label": "List Custom", "value": "list-custom"},
        ],

        headlines: [
            { "label": "H1", "value": "h1"},
            { "label": "H2", "value": "h2"},
            { "label": "H3", "value": "h3"},
            { "label": "H4", "value": "h4"},
            { "label": "H5", "value": "h5"},
            { "label": "H6", "value": "h6"},
        ],
    },

    palette: {
        colors : {
            main : [
                "fas fa-redo tx-align-center",
                "bg-inherit",
                "bg-transparent",
                "bg-primary",
                "bg-primary-dark",
                "bg-secondary",
                "bg-secondary-dark",
                "bg-gray",
                "bg-dark",
                "bg-white",
            ],

            status: [
                "bg-success",
                "bg-danger",
                "bg-warning",
                "bg-info",

                "bg-offwhite-primary",
                "bg-offwhite-secondary",
                "bg-offwhite-info",
                "bg-offwhite-success",
                "bg-offwhite-danger",
                "bg-offwhite-warning",
            ],

            offwhite: [
                "bg-offwhite-smoke",
                "bg-offwhite-gray",
                "bg-offwhite-snow",
                "bg-offwhite-honeydew",
                "bg-offwhite-aliceblue",
                "bg-offwhite-ghost",
                "bg-offwhite-seashell",
                "bg-offwhite-beige",
                "bg-offwhite-oldlace",
                "bg-offwhite-floral",
                "bg-offwhite-antique",
                "bg-offwhite-linen",
                "bg-offwhite-lavenderblush",
            ],
            
            brands: [
                "bg-facebook",
                "bg-twitter",
                "bg-youtube",
                "bg-instagram",
                "bg-snapchat",
                "bg-whatsapp",
                "bg-pinterest",
                "bg-linkedin",
                "bg-behance",
                "bg-dribbble",
                "bg-flicker",
            ],

            darkAlpha: [
                "bg-alpha-05",
                "bg-alpha-10",
                "bg-alpha-15",
                "bg-alpha-25",
                "bg-alpha-50",
                "bg-alpha-75",
            ],

            lightAlpha: [
                "bg-revert-05",
                "bg-revert-10",
                "bg-revert-15",
                "bg-revert-25",
                "bg-revert-50",
                "bg-revert-75",
            ],

            components: [
                "bg-component-lvl-1",
                "bg-component-lvl-2",
                "bg-component-lvl-3"
            ]
        },

        gradients: [
            "bg-grade-primary",
            "bg-grade-secondary",
            "bg-grade-warning",
            "bg-grade-danger",
            "bg-grade-success",
            "bg-grade-water",
            "bg-grade-ice",
            "bg-grade-fire",
            "bg-grade-purple",
            "bg-grade-primary-offwhite",
            "bg-grade-primary-dark",
            "bg-grade-secondary-offwhite",
            "bg-grade-secondary-dark",
            "bg-grade-primary-secondary",
            "bg-grade-primary-secondary-2nd",
            "bg-grade-danger-purple",
            "bg-grade-primary-purple",
            "bg-grade-silver",
            "bg-grade-silver-2nd",
            "bg-grade-offwhite-red",
            "bg-grade-offwhite-blue",
            "bg-grade-offwhite-green",
            "bg-grade-offwhite-yellow",
            "bg-grade-offwhite-silver",
            "bg-grade-offwhite-info",
            "bg-grade-offwhite-purple",
            "bg-grade-offwhite-danger",
            "bg-grade-offwhite-yellow-2nd",
            "bg-grade-offwhite-blue-2nd ",
            "bg-grade-offwhite-blue-3rd",
            "bg-grade-offwhite-blue-4th",
        ],

        rotation: [
            'bg-grade-0',
            'bg-grade-45',
            'bg-grade-90',
            'bg-grade-120',
            'bg-grade-120n',
            'bg-grade-90n',
            'bg-grade-45n',
            'bg-grade-180',
        ],
        
        variables: {
            main : [
                "fas fa-redo tx-align-center",
                "var(--white)",
                "var(--inherit)",
                "var(--transparent)",
                "var(--wp--preset--color--gray)",
                "var(--wp--preset--color--dark)",
                "var(--wp--preset--color--primary)",
                "var(--wp--preset--color--secondary)",
                "var(--wp--preset--color--primary-hvr)",
                "var(--wp--preset--color--primary-txt)",
                "var(--wp--preset--color--primary-dark)",
                "var(--wp--preset--color--secondary-hvr)",
                "var(--wp--preset--color--secondary-txt)",
                "var(--wp--preset--color--secondary-dark)",
                "var(--wp--preset--color--primary-offwhite)",
                "var(--wp--preset--color--secondary-offwhite)",
            ],

            status: [
                "var(--wp--preset--color--info)",
                "var(--wp--preset--color--success)",
                "var(--wp--preset--color--danger)",
                "var(--wp--preset--color--warning)",
                "var(--wp--preset--color--disable)",
                "var(--wp--preset--color--info-offwhite)",
                "var(--wp--preset--color--success-offwhite)",
                "var(--wp--preset--color--danger-offwhite)",
            ],

            brands: [
                "var(--facebook-color)",
                "var(--twitter-color)",
                "var(--youtube-color)",
                "var(--instagram-color)",
                "var(--whatsapp-color)",
                "var(--pinterest-color)",
                "var(--linkedin-color)",
                "var(--behance-color)",
                "var(--dribbble-color)",
                "var(--flicker-color)",
                "var(--snapchat-color)",
                "var(--google-red-color)",
            ],

            darkAlpha: [
                "var(--wp--preset--color--alpha-05)",
                "var(--wp--preset--color--alpha-10)",
                "var(--wp--preset--color--alpha-15)",
                "var(--wp--preset--color--alpha-25)",
                "var(--wp--preset--color--alpha-50)",
                "var(--wp--preset--color--alpha-75)"
            ],

            lightAlpha: [
                "var(--wp--preset--color--revert-05)",
                "var(--wp--preset--color--revert-10)",
                "var(--wp--preset--color--revert-15)",
                "var(--wp--preset--color--revert-25)",
                "var(--wp--preset--color--revert-50)",
                "var(--wp--preset--color--revert-75)"
            ],

            components: [
                "var(--wp--preset--color--component-bg-lvl-1)",
                "var(--wp--preset--color--component-tx-lvl-1)",
                "var(--wp--preset--color--component-bg-lvl-2)",
                "var(--wp--preset--color--component-tx-lvl-2)",
                "var(--wp--preset--color--component-bg-lvl-3)",
                "var(--wp--preset--color--component-tx-lvl-3)"
            ]
        },
        
        placeholder : "https://via.placeholder.com/480x200.webp?text=Example",
    },

    paletteText: {
        main: [
            "color-inherit",
            "color-transparent",
            "color-primary",
            "color-primary-dark",
            "color-secondary",
            "color-secondary-dark",
            "color-gray",
            "color-dark",
            "color-white",
            "fas fa-redo tx-align-center"
        ],

        status: [
            "color-success",
            "color-danger",
            "color-warning",
            "color-info",
        ],

        social: [
            "color-facebook",
            "color-twitter",
            "color-youtube",
            "color-instagram",
            "color-snapchat",
            "color-whatsapp",
            "color-pinterest",
            "color-linkedin",
            "color-behance",
            "color-dribbble",
            "color-flicker",
        ],

        components: [
            "color-component-lvl-1",
            "color-component-lvl-2",
            "color-component-lvl-3"
        ]
    },

    animations: {
        entrance: {
            "Fading Entrances" : [
                { "label": "None", "value": ""},
                { "label": "fadeIn", "value": "fadeIn"},
                { "label": "fadeInUp", "value": "fadeInUp"},
                { "label": "fadeInDown", "value": "fadeInDown"},
                { "label": "fadeInStart", "value": "fadeInStart"},
                { "label": "fadeInEnd", "value": "fadeInEnd"},
                { "label": "fadeInTopStart", "value": "fadeInTopStart"},
                { "label": "fadeInTopEnd", "value": "fadeInTopEnd"},
                { "label": "fadeInBottomStart", "value": "fadeInBottomStart"},
                { "label": "fadeInBottomEnd", "value": "fadeInBottomEnd"},
                { "label": "fadeInUpBig", "value": "fadeInUpBig"},
                { "label": "fadeInDownBig", "value": "fadeInDownBig"},
                { "label": "fadeInStartBig", "value": "fadeInStartBig"},
                { "label": "fadeInEndBig", "value": "fadeInEndBig"},
            ],

            "Back Entrances" : [
                { "label": "backInUp", "value": "backInUp"},
                { "label": "backInStart", "value": "backInStart"},
                { "label": "backInEnd", "value": "backInEnd"},
                { "label": "backInDown", "value": "backInDown"},
            ],
            
            "Bouncing Entrances" : [
                { "label": "bounceIn", "value": "bounceIn"},
                { "label": "bounceInUp", "value": "bounceInUp"},
                { "label": "bounceInStart", "value": "bounceInStart"},
                { "label": "bounceInEnd", "value": "bounceInEnd"},
                { "label": "bounceInDown", "value": "bounceInDown"},
            ],

            "Flippers Entrances" : [
                { "label": "flipInX", "value": "flipInX"},
                { "label": "flipInY", "value": "flipInY"},
            ],

            "Lightspeed Entrances" : [
                { "label": "lightSpeedInStart", "value": "lightSpeedInStart"},
                { "label": "lightSpeedInEnd", "value": "lightSpeedInEnd"},
            ],

            "Rotating Entrances" : [
                { "label": "rotateIn", "value": "rotateIn"},
                { "label": "rotateInDownStart", "value": "rotateInDownStart"},
                { "label": "rotateInDownEnd", "value": "rotateInDownEnd"},
                { "label": "rotateInUpStart", "value": "rotateInUpStart"},
                { "label": "rotateInUpEnd", "value": "rotateInUpEnd"},
            ],

            "Zooming Entrances" : [
                { "label": "zoomIn", "value": "zoomIn"},
                { "label": "zoomInDown", "value": "zoomInDown"},
                { "label": "zoomInStart", "value": "zoomInStart"},
                { "label": "zoomInEnd", "value": "zoomInEnd"},
                { "label": "zoomInUp", "value": "zoomInUp"},
            ],

            "Sliding Entrances" : [
                { "label": "slideInDown", "value": "slideInDown"},
                { "label": "slideInStart", "value": "slideInStart"},
                { "label": "slideInEnd", "value": "slideInEnd"},
                { "label": "slideInUp", "value": "slideInUp"},
            ],

            "Specials Entrances" : [
                { "label": "hinge", "value": "hinge"},
                { "label": "jackInTheBox", "value": "jackInTheBox"},
                { "label": "rollIn", "value": "rollIn"},
            ],

            "Attention seekers" : [
                { "label": "bounce", "value": "bounce"},
                { "label": "flash", "value": "flash"},
                { "label": "pulse", "value": "pulse"},
                { "label": "flip", "value": "flip"},
                { "label": "rubberBand", "value": "rubberBand"},
                { "label": "shakeX", "value": "shakeX"},
                { "label": "shakeY", "value": "shakeY"},
                { "label": "headShake", "value": "headShake"},
                { "label": "swing", "value": "swing"},
                { "label": "tada", "value": "tada"},
                { "label": "wobble", "value": "wobble"},
                { "label": "jello", "value": "jello"},
                { "label": "heartBeat", "value": "heartBeat"},
            ],
        },

        exit: {
            "Fading Exits" : [
                { "label": "fadeOut", "value": "fadeOut"},
                { "label": "fadeOutUp", "value": "fadeOutDown"},
                { "label": "fadeOutDown", "value": "fadeOutDown"},
                { "label": "fadeOutStart", "value": "fadeOutStart"},
                { "label": "fadeOutEnd", "value": "fadeOutEnd"},
                { "label": "fadeOutTopStart", "value": "fadeOutTopStart"},
                { "label": "fadeOutTopEnd", "value": "fadeOutTopEnd"},
                { "label": "fadeOutBottomStart", "value": "fadeOutBottomStart"},
                { "label": "fadeOutBottomEnd", "value": "fadeOutBottomEnd"},
                { "label": "fadeOutUpBig", "value": "fadeOutUpBig"},
                { "label": "fadeOutDownBig", "value": "fadeOutDownBig"},
                { "label": "fadeOutStartBig", "value": "fadeOutStartBig"},
                { "label": "fadeOutEndBig", "value": "fadeOutEndBig"},
            ],

            "Back Exits" : [
                { "label": "backOutUp", "value": "backOutUp"},
                { "label": "backOutStart", "value": "backOutStart"},
                { "label": "backOutEnd", "value": "backOutEnd"},
                { "label": "backOutDown", "value": "backOutDown"},
            ],

            "Bouncing Exits" : [
                { "label": "bounceOut", "value": "bounceOut"},
                { "label": "bounceOutUp", "value": "bounceOutUp"},
                { "label": "bounceOutStart", "value": "bounceOutStart"},
                { "label": "bounceOutEnd", "value": "bounceOutEnd"},
                { "label": "bounceOutDown", "value": "bounceOutDown"},
            ],

            "Flippers Exits" : [
                { "label": "flipOutX", "value": "flipOutX"},
                { "label": "flipOutY", "value": "flipOutY"},
            ],

            "Lightspeed Exits" : [
                { "label": "lightSpeedOutStart", "value": "lightSpeedOutStart"},
                { "label": "lightSpeedOutEnd", "value": "lightSpeedOutEnd"},
            ],

            "Rotating Exits" : [
                { "label": "rotateOut", "value": "rotateOut"},
                { "label": "rotateOutDownStart", "value": "rotateOutDownStart"},
                { "label": "rotateOutDownEnd", "value": "rotateOutDownEnd"},
                { "label": "rotateOutUpStart", "value": "rotateOutUpStart"},
                { "label": "rotateOutUpEnd", "value": "rotateOutUpEnd"},
            ],

            "Zooming Exits" : [
                { "label": "zoomOut", "value": "zoomOut"},
                { "label": "zoomOutDown", "value": "zoomOutDown"},
                { "label": "zoomOutStart", "value": "zoomOutStart"},
                { "label": "zoomOutEnd", "value": "zoomOutEnd"},
                { "label": "zoomOutUp", "value": "zoomOutUp"},
            ],

            "Sliding Exits" : [
                { "label": "slideOutDown", "value": "slideOutDown"},
                { "label": "slideOutStart", "value": "slideOutStart"},
                { "label": "slideOutEnd", "value": "slideOutEnd"},
                { "label": "slideOutUp", "value": "slideOutUp"},
            ],

            "Specials Exits" : [
                { "label": "rollOut", "value": "rollOut"},
            ],
        },
    },

    effects: {
        hover : {
            "Default": [{ "label": "None", "value": ""}],

            "Background" : [
                { "label": "Gradient-L", "value": "pds-hvr-gradient-move"},
                { "label": "Gradient-R", "value": "pds-hvr-gradient-move-revert"},
            ],

            "Scale Up" : [
                { "label": "Grow-05%", "value": "pds-hvr-scale-05"},
                { "label": "Grow-10%", "value": "pds-hvr-scale-10"},
                { "label": "Grow-15%", "value": "pds-hvr-scale-15"},
                { "label": "Grow-25%", "value": "pds-hvr-scale-25"},
            ],

            "Shrink Down" : [
                { "label": "Shrink-05%", "value": "pds-hvr-scale--05"},
                { "label": "Shrink-10%", "value": "pds-hvr-scale--10"},
                { "label": "Shrink-15%", "value": "pds-hvr-scale--15"},
                { "label": "Shrink-25%", "value": "pds-hvr-scale--25"},
            ],

            "Attention" : [
                { "label": "Highlight", "value": "pds-hvr-highlight"},
            ],

            "Animate CSS" : [
                { "label": "Floating", "value": "pds-hvr-floating"},
                { "label": "Shaking", "value": "pds-hvr-ringing"},
                { "label": "Bounce", "value": "pds-hvr-bounce"},
                { "label": "Flash", "value": "pds-hvr-flash"},
                { "label": "Pulse", "value": "pds-hvr-pulse"},
                { "label": "RubberBand", "value": "pds-hvr-rubberBand"},
                { "label": "ShakeX", "value": "pds-hvr-shakeX"},
                { "label": "ShakeY", "value": "pds-hvr-shakeY"},
                { "label": "Tada", "value": "pds-hvr-tada"},
                { "label": "Jello", "value": "pds-hvr-jello"},
            ],
        },

        animations : {
            "Default": [{ "label": "None", "value": ""}],

            "Moving" : [
                { "label": "Floating", "value": "pds-animate-floating"},
                { "label": "Ringing", "value": "pds-animate-ringing"},
            ],

            "Background" : [
                { "label": "Zooming", "value": "bg-animated-zoom"},
                { "label": "Animate-X", "value": "bg-animated-x"},
                { "label": "Animate-Y", "value": "bg-animated-y"},
            ],
        },

        shadows : {
            "Default": [{ "label": "None", "value": ""}],
            
            "Standard" : [
                { "label": "DP-1", "value": "bx-shadow-dp-1"},
                { "label": "DP-2", "value": "bx-shadow-dp-2"},
                { "label": "DP-3", "value": "bx-shadow-dp-3"},
                { "label": "DP-4", "value": "bx-shadow-dp-4"},
                { "label": "DP-5", "value": "bx-shadow-dp-5"},
                { "label": "DP-1Y", "value": "bx-shadow-dp-1y"},
                { "label": "DP-2Y", "value": "bx-shadow-dp-2y"},
            ],

            "Glass Effects" : [
                { "label": "Tiny", "value": "bx-shadow-gls-dp-1"},
                { "label": "Small", "value": "bx-shadow-gls-dp-2"},
                { "label": "Medium", "value": "bx-shadow-gls-dp-3"},
            ],

            "TailWind" : [
                { "label": "Standard", "value": "bx-shadow-tw"},
                { "label": "Small", "value": "bx-shadow-tw-sm"},
                { "label": "Medium", "value": "bx-shadow-tw-md"},
                { "label": "Large", "value": "bx-shadow-tw-lg"},
                { "label": "xLarge", "value": "bx-shadow-tw-xl"},
                { "label": "Huge", "value": "bx-shadow-tw-xxl"},
            ],
        },

        other_effects : {
            "Default": [{ "label": "None", "value": ""}],
            
            "Flexbox Effects" : [
                { "label": "ShrinkOn", "value": "flex-shrink-on"},
                { "label": "ShrinkOff", "value": "flex-shrink-off "},
                { "label": "GrowOn", "value": "flex-grow-on"},
                { "label": "GrowOff", "value": "flex-grow-off"},
            ],
            
            "Scroll Effects" : [
                { "label": "Marquee Slider", "value": "px-marquee"},
                { "label": "Marquee Reverse", "value": "px-marquee-reverse"},
                { "label": "Snap Scroll Y", "value": "px-section-snap"},
                { "label": "Snap Scroll X", "value": "px-section-snap-x"},
                { "label": "Snap Item", "value": "px-section-snap-item"},
                { "label": "Snap Disable", "value": "no-snap"},
            ],
        },
    },

    component_sizes : [
        { label: __("Default", "pds-blocks"), value: '' },
        { label: __("Tiny", "pds-blocks"), value: 'tiny' },
        { label: __("Small", "pds-blocks"), value: 'small' },
        { label: __("Normal", "pds-blocks"), value: 'medium' },
        { label: __("Large", "pds-blocks"), value: 'large' },
        { label: __("xLarge", "pds-blocks"), value: 'xlarge' },
    ],

    sizes_range : {
        //===> Define Width Sizes <===//
        width_range : [50, 75, 100, 125, 150, 200, 225, 250, 275, 300, 320, 360, 390, 768 ,570 ,480 ,420, "auto", "fluid"],
        max_width_range : [1920, 1600, 1400, 1366, 1200, 1100, 768, 640, 570, 480, 420, 390, 360, 320, 280, 260, 200, 180],
        //===> Define Height Sizes <===//
        height_range : ["auto", "25%", "50%", "75%", "100%", "120%", "150%", "175%", "200%", "25vh", "50vh", "75vh", "100vh"],
        max_height_range : ["auto", "25%", "50%", "75%", "100%", "25vh", "50vh", "75vh", "100vh"],
        //===> Define Font Sizes <===//
        font_sizes: [12 ,13 ,14 ,15 ,16 ,17 ,18 ,19 ,20 ,22 ,24 ,25 ,26 ,28 ,30, "h1", "h2", "h3", "h4", "h5", "h6"],
    },

    styles: {
        zindex_options : [
            { "label": "Default", "value": ""},
            { "label": "Level.1", "value": "z-index-1"},
            { "label": "Level.2", "value": "z-index-2"},
            { "label": "Level.3", "value": "z-index-3"},
            { "label": "Level.4", "value": "z-index-4"},
            { "label": "Level.5", "value": "z-index-5"},
            { "label": "Level.6", "value": "z-index-6"},
            { "label": "Level.7", "value": "z-index-7"},
            { "label": "Level.8", "value": "z-index-8"},
            { "label": "Level.9", "value": "z-index-9"},
            { "label": "Level.10", "value": "z-index-10"},
            { "label": "Lvl.Header", "value": "z-index-header"},
            { "label": "Lvl.Popups", "value": "z-index-modal"},
            { "label": "Lvl.Dropdowns", "value": "z-index-dropdown"},
        ],

        position_options: [
            { "label": "Default", "value": ""},
            { "label": "Fixed", "value": "position-fx"},
            { "label": "Static", "value": "position-none"},
            { "label": "Sticky", "value": "position-st"},
            { "label": "Absolute", "value": "position-ab"},
            { "label": "Relative", "value": "position-rv"},
            { "label": "Sticky(S)", "value": "sticky-absolute"},
        ],

        preset_positions: [
            { "label": "Default", "value": ""},
            { "label": "Fill Area", "value": "position-full"},
            { "label": "Centered", "value": "pos-center"},
            { "label": "Centered Y", "value": "pos-center-y"},
            { "label": "Centered X", "value": "pos-center-x"},
            { "label": "After Area Y ", "value": "pos-after-y"},
            { "label": "Before Area Y", "value": "pos-before-y"},
            { "label": "After Area X", "value": "pos-after-x"},
            { "label": "Before Area X", "value": "pos-before-x"},
        ],

        radius_sizes: [
            { label: __("None", "pds-blocks"), value: '' },
            { label: __("Tiny", "pds-blocks"), value: 'radius-sm' },
            { label: __("Small", "pds-blocks"), value: 'radius-md' },
            { label: __("Medium", "pds-blocks"), value: 'radius-lg' },
            { label: __("Large", "pds-blocks"), value: 'radius-xl' },
            { label: __("xLarge", "pds-blocks"), value: 'radius-xxl' },
            { label: __("Circle", "pds-blocks"), value: 'radius-circle' },
            { label: __("Rounded", "pds-blocks"), value: 'radius-height' },
        ],

        radius_directions: [
            { label: __("Default", "pds-blocks"), value: '' },
            { label: __("Top", "pds-blocks"), value: 'radius-top' },
            { label: __("Bottom", "pds-blocks"), value: 'radius-bottom' },
            { label: __("Start", "pds-blocks"), value: 'radius-start' },
            { label: __("End", "pds-blocks"), value: 'radius-end' },
            { label: __("Top/Start", "pds-blocks"), value: 'radius-top-start' },
            { label: __("Bottom/Start", "pds-blocks"), value: 'radius-bottom-start' },
            { label: __("Top/End", "pds-blocks"), value: 'radius-top-end' },
            { label: __("Bottom/End", "pds-blocks"), value: 'radius-bottom-end' },
        ],

        display_options: {
            "Mobile Screens" : [
                { "label": "Flex", "value": "display-flex"},
                { "label": "Grid", "value": "display-grid"},
                { "label": "Block", "value": "display-block"},
                { "label": "Flexbox", "value": "flexbox"},
                { "label": "Inline-Block", "value": "inline-block"},
                { "label": "Hidden SM <i class='fas fa-arrow-up'><i>", "value": "hidden"},
                { "label": "Hidden SM <i class='fas fa-arrow-down'><i>", "value": "hidden-sm-down"},
            ],
            "Tablet Screens" : [
                { "label": "Flex MD", "value": "display-md-flex"},
                { "label": "Grid MD", "value": "display-md-grid"},
                { "label": "Block MD", "value": "display-md-block"},
                { "label": "Hidden MD <i class='fas fa-arrow-up'><i>", "value": "hidden-md-up"},
                { "label": "Hidden MD <i class='fas fa-arrow-down'><i>", "value": "hidden-md-down"},
                { "label": "Inline-Block MD", "value": "inline-block-md"},
            ],
            "Laptop Screens" : [
                { "label": "Flex LG", "value": "display-lg-flex"},
                { "label": "Grid LG", "value": "display-lg-grid"},
                { "label": "Block LG", "value": "display-lg-block"},
                { "label": "Hidden LG <i class='fas fa-arrow-up'><i>", "value": "hidden-lg-up"},
                { "label": "Hidden LG <i class='fas fa-arrow-down'><i>", "value": "hidden-lg-down"},
                { "label": "Inline-Block LG", "value": "inline-block-lg"},
            ],
            "Desktop Screens" : [
                { "label": "Flex XL", "value": "display-xl-flex"},
                { "label": "Grid XL", "value": "display-xl-grid"},
                { "label": "Block XL", "value": "display-xl-block"},
                { "label": "Hidden XL <i class='fas fa-arrow-up'><i>", "value": "hidden-xl-up"},
                { "label": "Hidden XL <i class='fas fa-arrow-down'><i>", "value": "hidden-xl-down"},
                { "label": "Inline-Block XG", "value": "inline-block-xl"},
            ],
        },

        support_options: [
            { label: __("Margin", "pds-blocks"), value: 'enable-margin' },
            { label: __("Padding", "pds-blocks"), value: 'enable-padding' },
            { label: __("Border", "pds-blocks"), value: 'enable-border' },
            { label: __("Radius", "pds-blocks"), value: 'enable-radius' },
            { label: __("Display", "pds-blocks"), value: 'enable-display' },
            { label: __("Position", "pds-blocks"), value: 'enable-position' },
            { label: __("Animations", "pds-blocks"), value: 'enable-animations' },
            { label: __("Effects", "pds-blocks"), value: 'enable-effects' },
        ],

        background_options: {
            sizes : [
                { label:"all-100", value:"bgs-100" },
                { label:"all-auto", value:"bgs-auto"},
                { label:"width-25", value:"bgw-25"},
                { label:"width-50", value:"bgw-50"},
                { label:"width-75", value:"bgw-75"},
                { label:"width-90", value:"bgw-90"},
                { label:"width-100", value:"bgw-100"},
                { label:"height-25", value:"bgh-25"},
                { label:"height-50", value:"bgh-50"},
                { label:"height-75", value:"bgh-75"},
                { label:"height-90", value:"bgh-90"},
                { label:"height-100", value:"bgh-100"},
            ],
        
            repeat : [
                { label:"repeat", value: "bgr"},
                { label:"repeat-x", value: "bgr-x"},
                { label:"repeat-y", value: "bgr-y"},
                { label:"repeat-none", value: "bgr-n"},
            ],
        
            positions : [
                { label:"top-start", value: "bgp-ts"},
                { label:"top-center", value: "bgp-tc"},
                { label:"top-end", value: "bgp-te"},
                { label:"center-start", value: "bgp-cs"},
                { label:"center-center", value: "bgp-cc"},
                { label:"center-end", value: "bgp-ce"},
                { label:"bottom-start", value: "bgp-bs"},
                { label:"bottom-center", value: "bgp-bc"},
                { label:"bottom-end", value: "bgp-be"},
            ],
    
            animations : [
                { label:"Animated X", value: "bg-animated-x"},
                { label:"Animated Y", value: "bg-animated-y"},
                { label:"Zooming BG", value: "bg-animated-zoom"},
            ],

            overlay : [
                { label:"None", value: ""},
                { label:"Dark", value: "overlay-dark"},
                { label:"Light", value: "overlay-light"},
                { label:"Custom", value: "overlay-custom"},
            ],
        },

        border_styles: [
            { "label": "Default",  "value": ""},
            {"label": "Solid", "value": "border-solid"},
            {"label": "Dashed", "value": "border-dashed"},
            {"label": "Dotted", "value": "border-dotted "}
        ]
    },

    typography: {
        //===> Weights List <===//
        weights: [
            { "label": "Default",  "value": ""},
            { "label": "Thin",  "value": "weight-thin"},
            { "label": "Light",  "value": "weight-light"},
            { "label": "Extra Light",  "value": "weight-xlight"},
            { "label": "Normal",  "value": "weight-normal"},
            { "label": "Medium",  "value": "weight-medium"},
            { "label": "Semi-Bold",  "value": "weight-bold"},
            { "label": "Bold",  "value": "weight-strong"},
            { "label": "Heavy",  "value": "weight-xbold"},
            { "label": "Black",  "value": "weight-black"}
        ],

        //===> Lineheight List <===//
        lineheight: [
            { "label": "Default",  "value": ""},
            { "label": "100%",  "value": "lineheight-100"},
            { "label": "120%",  "value": "lineheight-120"},
            { "label": "130%",  "value": "lineheight-130"},
            { "label": "150%",  "value": "lineheight-150"},
            { "label": "160%",  "value": "lineheight-160"},
            { "label": "170%",  "value": "lineheight-170"},
            { "label": "180%",  "value": "lineheight-180"},
            { "label": "inherit",  "value": "lineheight-inherit"},
        ],

        shadows: {
            "Standard" : [
                { "label": "None",  "value": ""},
                { "label": "DP-1", "value": "tx-shadow-dp-1"},
                { "label": "DP-2", "value": "tx-shadow-dp-2"},
                { "label": "DP-3", "value": "tx-shadow-dp-3"},
                { "label": "DP-4", "value": "tx-shadow-dp-4"},
                { "label": "DP-5", "value": "tx-shadow-dp-5"},
                { "label": "DP-1Y", "value": "tx-shadow-dp-1y"},
            ],

            "TailWind" : [
                { "label": "Standard", "value": "tx-shadow-tw"},
                { "label": "Small", "value": "tx-shadow-tw-sm"},
                { "label": "Medium", "value": "tx-shadow-tw-md"},
                { "label": "Large", "value": "tx-shadow-tw-lg"},
                { "label": "xLarge", "value": "tx-shadow-tw-xl"},
                { "label": "TW-2XL", "value": "tx-shadow-tw-2xl"},
            ],
        },

        families: [
            { "label": "Default",  "value": ""},
            { "label": "Primary",  "value": "primary-font"},
            { "label": "Secondary",  "value": "secondary-font"},
        ],
    },
};