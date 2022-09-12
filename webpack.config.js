/*jslint es6 */
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require('path');

module.exports = {
    ...defaultConfig,
    mode: "development",
    entry: {
        'logo': './src/blocks/logo/index.js',
        'head': './src/blocks/head/index.js',
        'button': './src/blocks/button/index.js',
        'container': './src/blocks/container/index.js',
        'navigation': './src/blocks/navigation/index.js',
        'grid-row': './src/blocks/grid-row/index.js',
        // 'query': './src/blocks/query/index.js',
        // 'languages': './src/blocks/languages/index.js',
        // 'categories': './src/blocks/categories/index.js',
        // 'taxonomies': './src/blocks/taxonomies/index.js',
        // 'template-part': './src/blocks/template-part/index.js',
    },
    output: {
        path: path.join(__dirname, './assets/js/'),
        filename: 'blocks/[name]/index.js'
    }
};