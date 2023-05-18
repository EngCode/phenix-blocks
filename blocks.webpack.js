/*jslint es6 */
const path = require('path');

module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: path.join(__dirname, './src/blocks/blocks.js'),
    output: {
        path: path.join(__dirname, './assets/js/'),
        filename: 'phenix-blocks.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {loader: 'babel-loader'}
        }]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "@wordpress": "@wordpress",
        "@wordpress/blocks": "@wordpress/blocks",
        "@wordpress/block-editor": "@wordpress/block-editor",
        "@wordpress/components": "@wordpress/components",
        "@wordpress/server-side-render": "@wordpress/server-side-render"
    }
};