---
title: "Typescript Overview"
date: 2025-01-04
---

## Phenix Query

Learn how to work around Phenix Query JS/TypeScript source code to build fancy and interactive components.

## Typescript Modules

you can import and use the TypeScript modules into your project typescript by import Phenix from './node\_modules/phenix-ts' which will import Phenix plugins for you to use it in your project,

or you can use it as a JavaScript module by import Phenix from "./node\_modules/phenix-js"

inside your script file or even with HTML script in the example below, for more information about how to use [P.D.S TypeScript/JavaScript click here](https://phenixthemes.com/pds-docs/category/typescript-js/)

```
<script type="module">
    import Phenix from  "./node_modules/phenix-js" || "CDN URL";
</script>
```

## Build TypeScript

phenix uses webpack to compile the typescript files to valid JavaScript files and you can run the build script by command linenpm run phenix-ts and it will watch any changes you make to the typescripts files and compile it instantly to js files,

```
💼-your-project[phenix]
    📂-src
        📁-...
        📁-scripts
    📂-dist
        📁-...
        📁-js
```

## Custom Scripts

in the typescript directory phenix/src/typescript you will find a custom-scripts.ts file for your design script you can use and extend the phenix query object and its modules there.

```
💼-your-project[phenix]
    📂-src/scripts
        📄index.ts || Phenix Query
        📄custom-scripts.ts⠀|| Custom Script
        📁-components
        📁-features
        📁-integration
```
