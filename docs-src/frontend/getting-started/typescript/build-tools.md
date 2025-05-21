# TypeScript Build Tools

This guide documents the build tools and processes used in the Phenix Design System to compile TypeScript files into optimized JavaScript.

## Overview

The Phenix Design System uses a streamlined build process to convert TypeScript source files into production-ready JavaScript. The process includes:

- TypeScript compilation with type checking
- Module bundling with dependency resolution
- Source map generation for debugging
- UMD module format output for broad compatibility
- Production optimization

## Build Environment

### Node.js and NPM

The build process requires:

- **Node.js**: v14.0.0 or higher
- **NPM**: v6.0.0 or higher

### Primary Build Tools

| Tool | Purpose |
|------|---------|
| **Webpack** | Module bundling and asset management |
| **ts-loader** | TypeScript compilation |
| **concurrently** | Run multiple build processes simultaneously |

## Webpack Configuration

The TypeScript build process uses a dedicated webpack configuration file (`typescript.webpack.js`), which defines how TypeScript files are processed:

```javascript
/*jslint es6 */
const path = require('path');

module.exports = {
    mode: "production",
    entry: path.join(__dirname, '/src/scripts/index.ts'),
    devtool: "source-map",
    output: {
        filename: 'js/phenix.js',
        path: path.join(__dirname, '/assets/'),
        globalObject: 'this',
        library: {
            type: 'umd',
            name: 'Phenix',
        }
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
```

Key features of this configuration:

1. **Entry Point**: The main file `src/scripts/index.ts` serves as the starting point
2. **Source Maps**: Enabled with the `devtool` option for debugging
3. **Output Format**: UMD (Universal Module Definition) for maximum compatibility
4. **Global Object**: Library exposed as `Phenix` in browser environments
5. **TypeScript Processing**: All `.ts` and `.tsx` files processed through ts-loader

## TypeScript Configuration

The TypeScript compiler options are defined in `tsconfig.json`:

```json
{
    "compilerOptions": {
        "strict": false,
        "forceConsistentCasingInFileNames": true,
        "module": "commonjs",
        "target": "es2017",
        "sourceMap": true,
        "esModuleInterop": true,
    }
}
```

This configuration:

- Sets ES2017 as the JavaScript target version
- Uses CommonJS for module format
- Generates source maps for debugging
- Enables compatibility between CommonJS and ES modules
- Disables strict type checking for flexibility

## Build Scripts

The build process is controlled through NPM scripts defined in `package.json`:

```json
"scripts": {
    "phenix-start": "concurrently --kill-others \"npm run phenix-sass\" \"npm run phenix-ts\" \"npm run phenix-blocks\"",
    "phenix-ts": "npx webpack --config typescript.webpack.js --watch",
    "phenix-sass": "npx node-sass --watch src/sass -o assets/css --output-style compressed --source-map true",
    "phenix-blocks": "wp-scripts start"
}
```

The `phenix-ts` script:
- Runs webpack using the TypeScript configuration
- Enables watch mode for automatic recompilation during development
- Outputs compiled JavaScript to the assets directory

## Build Process Flow

When you run the TypeScript build process, the following sequence occurs:

1. **Entry Point Resolution**: Webpack starts with `src/scripts/index.ts`
2. **Dependency Graph Creation**: Webpack analyzes imports to build a module dependency graph
3. **TypeScript Compilation**: ts-loader transpiles TypeScript to JavaScript
4. **Module Bundling**: Webpack combines all modules into a single output file
5. **UMD Wrapping**: Code is wrapped in UMD format for cross-platform compatibility
6. **Source Map Generation**: Source maps are created for debugging
7. **Output Generation**: Compiled bundle is written to `assets/js/phenix.js`

## Output Files

The build process generates two primary files:

- `assets/js/phenix.js` - The compiled JavaScript bundle
- `assets/js/phenix.js.map` - Source map for development debugging

## Development Workflow

### Starting the Development Environment

To start the complete development environment with file watching:

```bash
npm run phenix-start
```

This runs all build processes in parallel:
- TypeScript compilation (with auto-recompilation)
- SASS compilation (with auto-recompilation)
- WordPress block development

### TypeScript-Only Development

If you only need to work on TypeScript files:

```bash
npm run phenix-ts
```

## Extending the Framework

### Custom Component Development

To create your own components or extensions to the framework:

1. Create a component file in the appropriate directory:

```typescript
// src/scripts/components/custom-component.ts

/**
 * Custom Component Implementation
 * @param {Object} options - Configuration options
 * @returns {PhenixElements} - Returns this for chaining
 */
Phenix.prototype.customComponent = function(options = {}) {
    return this.forEach((element) => {
        // Component implementation logic
    });
};
```

2. Import your component in `index.ts` or a custom entry file:

```typescript
// Add to the index.ts imports
import './components/custom-component';
```

3. Run the build process to incorporate your component

### Creating a Custom Build

For specialized builds with a subset of components:

1. Create a custom entry file:

```typescript
// src/scripts/custom-build.ts
import './index'; // Import core functionality

// Only import needed components
import './components/dropdown';
import './components/tabs';

// Add custom code
Phenix.prototype.customFeature = function() {
    // Implementation
};
```

2. Update the webpack entry point:

```javascript
// In typescript.webpack.js
entry: path.join(__dirname, '/src/scripts/custom-build.ts'),
```

3. Run the build process:

```bash
npx webpack --config typescript.webpack.js
```

## Troubleshooting

### Common Issues

1. **Type Errors**
   - Problem: `TS2339: Property does not exist on type`
   - Solution: Verify property names or adjust TypeScript configuration

2. **Module Resolution**
   - Problem: `Cannot find module`
   - Solution: Check import paths and file existence

3. **Webpack Configuration**
   - Problem: `Configuration file not found`
   - Solution: Ensure you're in the correct directory

## Best Practices

1. **Use TypeScript Features**: Embrace type annotations for better code quality
2. **Module Organization**: Follow the existing directory structure
3. **Documentation**: Add JSDoc comments to your components and methods
4. **Progressive Enhancement**: Ensure basic functionality works without JavaScript
5. **Testing**: Test components across different browsers
