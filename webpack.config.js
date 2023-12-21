/*jslint es6 */
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require('path');

module.exports = {
    ...defaultConfig,
    mode: "production",
    entry: {
        'text': './src/blocks/text/index.js',
        'logo': './src/blocks/logo/index.js',
        'group': './src/blocks/group/index.js',
        'query': './src/blocks/query/index.js',
        'popup': './src/blocks/popup/index.js',
        'button': './src/blocks/button/index.js',
        'grid-row': './src/blocks/grid-row/index.js',
        'container': './src/blocks/container/index.js',
        'page-head': './src/blocks/page-head/index.js',
        // 'pds-tabs': './src/blocks/pds-tabs/index.js',
        // 'pds-form': './src/blocks/pds-form/index.js',
        'navigation': './src/blocks/navigation/index.js',
        'theme-part': './src/blocks/theme-part/index.js',
        'taxonomies': './src/blocks/taxonomies/index.js',
        // 'pds-timer': './src/blocks/pds-timer/index.js',
        'users-query': './src/blocks/users-query/index.js',
        'grid-column': './src/blocks/grid-column/index.js',
        'custom-code': './src/blocks/custom-code/index.js',
        'icon-element': './src/blocks/icon-element/index.js',
        'logical-block': './src/blocks/logical-block/index.js',
        'media-element': './src/blocks/media-element/index.js',
        // 'pds-progress': './src/blocks/pds-progress/index.js',
        // 'pds-accordion': './src/blocks/pds-accordion/index.js',
        // 'pds-dropdowns': './src/blocks/pds-dropdowns/index.js',
        // 'pds-languages': './src/blocks/pds-languages/index.js',
        // 'inline-elements': './src/blocks/inline-elements/index.js',
        // 'pds-se-option': './src/blocks/pds-options/site-editor.js',
        // 'pds-google-maps': './src/blocks/pds-google-maps/index.js',
        // 'pds-pe-options': './src/blocks/pds-options/post-editor.js',
        // 'pds-search-query': './src/blocks/pds-search-query/index.js',
    },

    output: {
        path: path.join(__dirname, './assets/js/'),
        filename: 'blocks/[name]/index.js'
    }
};