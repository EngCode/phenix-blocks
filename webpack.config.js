/*jslint es6 */
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require('path');

module.exports = {
    ...defaultConfig,
    mode: "development",
    entry: {
        'px-section': './src/blocks/px-section/index.js',
        'px-wrapper': './src/blocks/px-wrapper/index.js',
        'px-button': './src/blocks/px-button/index.js',
        'px-logo': './src/blocks/px-logo/index.js',
        'px-navigation': './src/blocks/px-navigation/index.js',
        'px-head': './src/blocks/px-head/index.js',
        'px-taxonomies': './src/blocks/px-taxonomies/index.js',
        'px-query': './src/blocks/px-query/index.js',
        'px-categories': './src/blocks/px-categories/index.js',
        'px-languages': './src/blocks/px-languages/index.js'
    },
    output: {
        path: path.join(__dirname, './assets/js/'),
        filename: 'blocks/[name]/index.js'
    }
};