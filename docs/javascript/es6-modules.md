# ES6 Module Support in Phenix.js

Phenix.js now supports loading ES6 modules dynamically using the `import` method. This feature enables you to take advantage of modern JavaScript module systems while maintaining compatibility with the existing PhenixElements API.

## Using the ES6 Module Import

The `import` method has been enhanced to support ES6 modules with optional import map capabilities.

### Method Signature

```typescript
import = (
  id: string,
  tag: string,
  source: string,
  callback: any,
  options?: boolean | {
    integrated?: boolean;
    module?: boolean;
    importMap?: Record<string, string>;
  }
) => void
```

### Parameters

- **id**: Unique identifier for the resource
- **tag**: Resource type ('js' or 'css')
- **source**: Path or URL to the resource
- **callback**: Function to execute when the resource is loaded
- **options**: Either a boolean (legacy format) or an options object:
  - **integrated**: If true, prepends the library path to the source
  - **module**: If true, adds `type="module"` to the script tag
  - **importMap**: Object containing module name-to-URL mappings for the import map

## Basic Example

```javascript
// Load an ES6 module (new format)
Phenix(document).import(
  "my-module",     // Unique ID
  "script",        // Resource type
  "path/to/module.js", // Source path
  () => {
    console.log("Module loaded successfully");
  },
  {
    integrated: true,  // Use library path
    module: true       // Load as ES6 module
  }
);

// Legacy format (still supported)
Phenix(document).import(
  "legacy-module", 
  "script",
  "path/to/legacy.js",
  () => {
    console.log("Legacy format still works");
  },
  true  // isIntegrated boolean
);
```

## Using Import Maps

Import maps allow you to specify how module specifiers are resolved when importing modules. This is particularly useful for:

1. Creating aliases for module paths
2. Mapping bare module specifiers to CDN URLs
3. Managing dependencies without requiring a bundler

### Example with Import Map

```javascript
Phenix(document).import(
  "app-module",
  "script",
  "modules/app.js",
  () => {
    console.log("Module with import map loaded");
  },
  {
    integrated: true,  // Use library path
    module: true,      // Load as ES6 module
    importMap: {
      // Module mappings
      "lodash": "https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.min.js",
      "utils": "./modules/utils.js",
      "components/": "./modules/components/"
    }
  }
);
```

With this import map, your module can use imports like:

```javascript
// In your module.js file
import { debounce } from 'lodash';
import { formatDate } from 'utils';
import Button from 'components/Button.js';
```

## Import Map Behavior

When you provide a module map:

1. If no import map exists in the document, a new one is created
2. If an import map already exists, the new mappings are merged with the existing ones
3. Import maps are added to the document head

## Browser Compatibility

ES6 modules and import maps are supported in all modern browsers. However, some older browsers might not support these features. Consider using a fallback or transpiling your code for production if you need to support older browsers.

## Best Practices

1. Use the new options object format for clarity
2. Give each module a unique ID to prevent conflicts
3. Keep module dependencies minimal and focused
4. Use import maps for third-party libraries to avoid bundling them
5. Consider using a CDN for common libraries to leverage browser caching
6. Remember that ES6 modules are always deferred, so they don't block rendering

## Example: Creating a Modular Component

```javascript
// In your HTML
<div class="px-module-test" data-component="counter"></div>

// In your JavaScript
if(document.querySelector('.px-module-test')) {
  Phenix(document).import(
    "components",
    "script", 
    "modules/components.js",
    () => {},
    {
      integrated: true,
      module: true,
      importMap: {
        "components/": "./modules/",
        "utils": "./modules/utils.js"
      }
    }
  );
}
```

This documentation explains how to use the new ES6 module import feature in Phenix.js, including examples and best practices. 