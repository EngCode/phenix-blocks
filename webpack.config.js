/*jslint es6 */
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require('path');

module.exports = {
    ...defaultConfig,
    mode: "development",
    entry: {
        'container': './src/blocks/container/index.js',
        'logo': './src/blocks/logo/index.js',
        'navigation': './src/blocks/navigation/index.js',
        // 'wrapper': './src/blocks/wrapper/index.js',
        // 'button': './src/blocks/button/index.js',
        // 'head': './src/blocks/head/index.js',
        // 'taxonomies': './src/blocks/taxonomies/index.js',
        // 'query': './src/blocks/query/index.js',
        // 'categories': './src/blocks/categories/index.js',
        // 'languages': './src/blocks/languages/index.js'
    },
    output: {
        path: path.join(__dirname, './assets/js/'),
        filename: 'blocks/[name]/index.js'
    }
};