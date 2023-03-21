/*jslint es6 */
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require('path');

module.exports = {
    ...defaultConfig,
    mode: "production",
    entry: {
        'logo': './src/blocks/logo/index.js',
        'query': './src/blocks/query/index.js',
        'group': './src/blocks/group/index.js',
        'button': './src/blocks/button/index.js',
        'popup': './src/blocks/popup/index.js',
        'grid-row': './src/blocks/grid-row/index.js',
        'page-head': './src/blocks/page-head/index.js',
        'container': './src/blocks/container/index.js',
        'theme-part': './src/blocks/theme-part/index.js',
        'navigation': './src/blocks/navigation/index.js',
        'grid-column': './src/blocks/grid-column/index.js',
        'taxonomies': './src/blocks/taxonomies/index.js',
        'inline-elements': './src/blocks/inline-elements/index.js',
        // 'pds-form': './src/blocks/pds-form/index.js',
        // 'custom-code': './src/blocks/custom-code/index.js',
        // 'icon-element': './src/blocks/icon-element/index.js',
        // 'media-element': './src/blocks/media-element/index.js',
        // 'language-switcher': './src/blocks/language-switcher/index.js',
    },
    output: {
        path: path.join(__dirname, './assets/js/'),
        filename: 'blocks/[name]/index.js'
    }
};