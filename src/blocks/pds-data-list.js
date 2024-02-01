//===> Define Translation Function <===//
const __ = window.wp.i18n.__;

//===> Options Lists Data <===//
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

    html_tags : [
        { "label": "Div", "value": "div"},
        { "label": "Main", "value": "main"},
        { "label": "Aside", "value": "aside"},
        { "label": "Header", "value": "header"},
        { "label": "Footer", "value": "footer"},
        { "label": "Article", "value": "article"},
        { "label": "Section", "value": "section"},
    ],

    container_sizes : [
        { label: 'None',  value: '' },
        { label: 'SM',  value: 'container-sm' },
        { label: 'MD', value: 'container-md' },
        { label: 'LG', value: 'container' },
        { label: 'XL',  value: 'container-xl' },
        { label: 'Fluid',  value: 'container-fluid' },
    ]
};