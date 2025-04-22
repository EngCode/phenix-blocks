---
title: "Sass Overview"
date: 2025-01-04
---

## Phenix SASS

Learn how to work around with Phenix Sass source code and control each piece of the framework build, customize, remove, or overwrite it.

## Build Sass

phenix uses node-sass to build the CSS files which uses Libsass which is built with C/C++ to compile sass files to valid CSS files you can run the build script by command line npm run phenix-sass and it will watch any changes you make to the sass files and compile them instantly to CSS files.

## Sass Main Files

in the sass directory phenix/src/sass, you will find two main files for including/excluding any module and customizing RTL/LTR options like fonts, the file named phenix.scss is for LTR version options, and the phenix-rtl.scss is for RTL version.

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
        📁-components
        📁-forms
```

## Custom Theme

after setting up your choices in phenix.scss, phenix-rtl.scss you will find one more file named \_customize.scss you can customize the design options and CSS variables to your brand theme it and is ready for your custom CSS.

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
        📁-components
        📁-forms
```

## Deeper into Phenix

after learning about phenix sass and how to build it and what the main files represent it’s time to learn about phenix modules that are imported into the main files \[ phenix.scss, phenix-rtl.scss \] just as assets modules and grid system and each module will be explained in its document when you need to use it.

## SASS Assets

assets directory holds a collection of functions and mixin and resets that build up everything else in PDS, we have the \_reset file which is built on [Normalize.css](https://necolas.github.io/normalize.css/) extended and modified for phenix,

and the \_selectors file you will find a collection of useful sass selectors to extend and use in your custom CSS you can learn more about these selectors and how to use them in the [SASS Selectors](https://phenixthemes.com/pds-docs/sass-selectors/) document.

```
💼-your-project[phenix]
    📂-src/sass
        📄...
        📁-assets
           📄_reset.scss
           📄_selectors.scss
           📄_mixin.scss
           📁-mixin
        📁-...
```

## SASS Mixin

mixin directory inside src/sass/\_assets contains a collection of helpers and functions like [responsive breakpoints](https://phenixthemes.com/pds-docs/responsive-break-points/), [logical properties](https://phenixthemes.com/pds-docs/rtl-ltr/#section-3) [utilities](https://phenixthemes.com/pds-docs/category/utilities/) PX to REM converter, and you can learn more about these mixin & functions in the [SASS Mixin](https://phenixthemes.com/pds-docs/sass-mixins/) section.

```
💼-your-project[phenix]
    📂-src/sass
        📄...
        📁-assets
           📁-mixin
           📄_reset.scss
           📄_selectors.scss
           📄_functions.scss
        📁-...
```

## Grid Modules

grid directory contains the grid system modules such as flexbox, the main properties for creating layout and columns, and the utilities that are related and affect layout you can learn more [about layouts and grid system](https://phenixthemes.com/pds-docs/category/grid-layout/) in its document.

```
💼-your-project[phenix]
    📂-src/sass
        📄...
        📁-grid
           📄_main.scss
           📄_columns.scss
           📄_utilities.scss
        📁-...
```

## Components Modules

components directory contains all [components](https://phenixthemes.com/pds-docs/category/utilities/) modules such as [buttons,](https://phenixthemes.com/pds-docs/buttons/) [Accordion](https://phenixthemes.com/pds-docs/accordion/), [Navbar](https://phenixthemes.com/pds-docs/navbar-and-header/), Tabs, [Popup](https://phenixthemes.com/pds-docs/popup-modals/), and more and each component is explained in its document.

```
💼-your-project[phenix]
    📂-src/sass
        📄...
        📁-components
        📁-...
```

## Form Controls

form controls directory contains all [components](https://phenixthemes.com/pds-docs/category/forms/) for controllers such as [inputs,](https://phenixthemes.com/pds-docs/form-controls/) [select](https://phenixthemes.com/pds-docs/advanced-select/), [uploader](https://phenixthemes.com/pds-docs/files-upload/), [repeater](https://phenixthemes.com/pds-docs/form-repeater/), [validation](https://phenixthemes.com/pds-docs/form-validation/), etc, and each controller is explained in its document.

```
💼-your-project[phenix]
    📂-src/sass
        📄...
        📁-form
        📁-...
```

## Utility Modules

utility directory contains all [helper properties modules such as margin, padding, width, height, colors,](https://phenixthemes.com/pds-docs/category/utilities/) etc, and each utility is explained in its document.

```
💼-your-project[phenix]
    📂-src/sass
        📄...
        📁-utilities
        📁-...
```

## Integration

integration directory holdout assets and integration with some plugins and CMS like [WordPress](https://phenixthemes.com/wp-docs) to make it work smoothly with Phenix Design System \[PDS\].

```
💼-your-project[phenix]
    📂-src/sass
        📄...
        📁-integration
        📁-...
```
