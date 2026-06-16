const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require('path');
const glob = require('glob');

// Auto-discover all blocks with index.js
const blockEntries = {};
glob.sync('./src/blocks/*/index.js').forEach(file => {
    const name = path.basename(path.dirname(file));
    blockEntries[name] = './' + file;
});

module.exports = {
    ...defaultConfig,
    mode: "production",
    entry: blockEntries,
    output: {
        path: path.join(__dirname, './assets/js/'),
        filename: 'blocks/[name]/index.js'
    }
};