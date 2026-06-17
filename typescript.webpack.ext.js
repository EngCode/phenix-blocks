const path = require('path');

//=====> Extension Build Config <=====//
// Builds add-on files that depend on the core being loaded first.
// The core provides window.Phenix. This config replaces imports
// from the core with a stub that reads from window.Phenix.

module.exports = {
    mode: 'production',
    entry: {
        woocommerce: './src/scripts/integration/woocommerce.ts',
    },
    devtool: 'source-map',
    output: {
        filename: 'js/[name].js',
        path: path.join(__dirname, '/assets/'),
        globalObject: 'window',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        alias: {
            '..': path.resolve(__dirname, 'src/scripts/phenix-stub.ts'),
            '../..': path.resolve(__dirname, 'src/scripts/phenix-stub.ts'),
        },
        extensions: ['.ts', '.js']
    },
};