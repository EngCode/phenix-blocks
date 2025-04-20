# Build Tools for SASS

This guide covers the build tools and processes used to compile Phenix Design System's SASS files into CSS.

## Overview

The Phenix Design System uses a modern build process to compile SASS files into optimized CSS. This process includes:

- Compiling SASS to CSS
- CSS minification
- Source maps generation
- Support for both LTR and RTL versions

## Build Tools Used

### 1. Node.js and NPM

Phenix uses Node.js as its JavaScript runtime environment and NPM for package management. The build process requires:

- Node.js v14.0.0 or higher
- NPM v6.0.0 or higher

### 2. node-sass

The [node-sass](https://www.npmjs.com/package/node-sass) package is used to directly compile SASS to CSS. It provides:

- Fast compilation of SASS files
- Source map generation
- Various output options (compressed, expanded, etc.)
- Direct CLI usage without additional build tools

### 3. Concurrently

[Concurrently](https://www.npmjs.com/package/concurrently) is used to run multiple build processes simultaneously, improving the development workflow.

## Build Configuration

### Package.json Scripts

The build process is defined in the package.json scripts section. Here are the actual scripts used:

```json
"scripts": {
  "phenix-start": "concurrently --kill-others \"npm run phenix-sass\" \"npm run phenix-ts\" \"npm run phenix-blocks\"",
  "phenix-ts": "npx webpack --config typescript.webpack.js --watch",
  "phenix-sass": "npx node-sass --watch src/sass -o assets/css --output-style compressed --source-map true",
  "phenix-blocks": "wp-scripts start",
  "animate-sass": "npx node-sass --watch src/animations/ -o assets/css/animations/ --output-style compressed"
}
```

These scripts demonstrate the direct use of node-sass without intermediate build tools like Gulp.

## Key Scripts Explained

### phenix-sass

```bash
npx node-sass --watch src/sass -o assets/css --output-style compressed --source-map true
```

This script:
- Uses node-sass directly
- Watches the src/sass directory for changes
- Outputs compiled CSS to assets/css
- Compresses the output CSS (minification)
- Generates source maps for debugging

### animate-sass

```bash
npx node-sass --watch src/animations/ -o assets/css/animations/ --output-style compressed
```

This script handles animation-specific SASS files, compiling them separately from the main stylesheets.

### phenix-start

```bash
concurrently --kill-others "npm run phenix-sass" "npm run phenix-ts" "npm run phenix-blocks"
```

This script runs multiple processes in parallel:
- SASS compilation
- TypeScript compilation
- WordPress blocks development

## Running the Build Process

### Development Mode

For development, use the phenix-start script to start all development processes:

```bash
npm run phenix-start
```

Or if you only need to compile SASS:

```bash
npm run phenix-sass
```

These commands start watch processes that automatically recompile files when changes are detected.

### Working with Animations

To work with animation files separately:

```bash
npm run animate-sass
```

## Output Files

The build process generates the following files in the assets/css directory:

- `phenix.css` - Main LTR stylesheet
- `phenix-rtl.css` - RTL version of the main stylesheet
- `phenix-utils.css` - Utilities-only LTR stylesheet
- `phenix-utils-rtl.css` - Utilities-only RTL stylesheet
- `admin.css` - Admin-specific LTR styles
- `admin-rtl.css` - Admin-specific RTL styles
- Source maps for all CSS files

## node-sass Options Explained

The build process uses several node-sass options:

- `--watch`: Watches for file changes and recompiles automatically
- `-o, --output`: Specifies the output directory
- `--output-style`: Determines CSS formatting (compressed, expanded, etc.)
- `--source-map`: Generates source maps for debugging

## Customizing the Build Process

### Creating Your Own Build Script

You can create custom build scripts for specific needs by adding to the scripts section in package.json:

```json
"scripts": {
  "custom-theme": "npx node-sass src/themes/custom -o dist/themes/custom --output-style compressed"
}
```

### Additional node-sass Options

node-sass provides many options for customization:

- `--include-path`: Add directories to the SASS import resolution path
- `--precision`: Set decimal precision for output
- `--importer`: Provide custom importers for handling imports
- `--functions`: Define custom SASS functions

Example:
```bash
npx node-sass --include-path=node_modules/foundation-sites/scss src/custom -o dist/css
```

## RTL Support

The Phenix Design System generates RTL stylesheets by using separate SASS entry files:

- `phenix.scss` - For LTR
- `phenix-rtl.scss` - For RTL

These files set different direction variables that control directional properties throughout the framework.

## Troubleshooting

### Common Build Issues

1. **Node SASS compatibility issues**:
   - Error: `Node Sass version 6.0.0 is incompatible with ^4.0.0`
   - Solution: Run `npm rebuild node-sass` or update node-sass version in package.json

2. **Missing dependencies**:
   - Error: `Cannot find module 'node-sass'`
   - Solution: Run `npm install` to install all dependencies

3. **Permission issues**:
   - Error: `EACCES: permission denied, open 'assets/css/phenix.css'`
   - Solution: Check file permissions and ensure write access to the output directory

4. **Path issues**:
   - Error: `no such file or directory`
   - Solution: Make sure your paths are correct and all referenced directories exist

### Getting Help

If you encounter issues with the build process, you can:

1. Check the [GitHub issues](https://github.com/EngCode/phenix-ui/issues) for similar problems
2. Join the community Discord channel 
3. Contact support via email at support@phenixthemes.com