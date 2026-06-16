const path = require('path');

module.exports = {
    mode: "production",
    entry: './src/scripts/index.ts',
    devtool: "source-map",
    output: {
        filename: 'js/phenix.js',
        path: path.join(__dirname, '/assets/'),
        globalObject: 'window',
        library: {
            type: 'window',
            name: 'Phenix',
        },
        chunkLoadingGlobal: 'phenixWebpackJsonp',
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
        extensions: [".ts", ".js"]
    },
};