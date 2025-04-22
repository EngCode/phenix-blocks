---
title: "Build Tools"
date: 2025-01-04
---

## Phenix Build Tools

Phenix uses npm scripts for its build system. Our package.json includes convenient methods for working with the framework, and compiling code.

## Install Node-JS

after you [download the source code](https://phenixthemes.com/pds-docs/installation/) and before using the Phenix build system you will need to Install the latest stable [NodeJS](https://nodejs.org/en/download/) version then you can install dependencies by running the command line npm install inside your phenix directory in the same path as the package.json file.

```
💼-your-project[phenix]
    📂-dist
    📂-src
    📄package.json
    📄etc...
```

## Build Sass

phenix uses node-sass to build the CSS files which uses Libsass which is made with C/C++ to compile sass files to valid CSS files you can run the build script by command line npm run phenix-sass and it will watch any changes you make to the sass files and compile them instantly to CSS files,

```
💼-your-project[phenix]
    📂-src
        📁-sass
        📁-...
    📂-dist
        📁-css
        📁-...
```

## Sass Main Files

in the sass directory phenix/src/sass you will find two main files for including/excluding any module and customizing RTL/LTR options like fonts, the file named phenix.scss is for LTR version options, and the phenix-rtl.scss is for RTL version,

```
💼-your-project[phenix]
    📂-src/sass
        📄phenix.scss || LTR Options
        📄phenix-rtl.scss⠀|| RTL Options
        📄_customize.scss
        📁-assets
        📁-grid
        📁-integration
        📁-utilities
```

## Custom Theme

after setting up your choices in phenix.scss, phenix-rtl.scss you will find one more file named \_customize.scss you can customize the design options and [CSS variables](https://phenixthemes.com/pds-docs/css-customize/) to your brand theme in it and it’s ready for your custom CSS.

```
💼-your-project[phenix]
    📂-src/sass
        📄phenix.scss
        📄phenix-rtl.scss
        📄_customize.scss⠀|| Custom CSS
        📁-assets
        📁-grid
        📁-integration
        📁-utilities
```

## Build TypeScript

phenix uses webpack to compile the typescript files to valid JavaScript files and you can run the build script by command line npm run phenix-ts and it will watch any changes you make to the typescripts files and compile it instantly to JS files,

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

## Build CSS/JavaScript

to build and compile both the SASS/CSS and typescript/JavaScript you can use the command line `npm run phenix-start`and it will watch both `sass` and `typescript` files for any changes and instantly compile them.

```
💼-your-project[phenix]
    📂-src
        📁-sass
        📁-scripts
    📂-dist
        📁-css
        📁-js
```
