//===> Define Translation Function <===//
const __ = window.wp.i18n.__;

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
            { "label": "Embed", "value": "embed"},
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

        rotation : [
            'bg-grade-0',
            'bg-grade-45',
            'bg-grade-90',
            'bg-grade-120',
            'bg-grade-120n',
            'bg-grade-90n',
            'bg-grade-45n',
            'bg-grade-180',
        ],

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
    },
};
