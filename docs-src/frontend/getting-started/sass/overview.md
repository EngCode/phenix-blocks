# SASS Overview

Phenix Design System uses SASS (Syntactically Awesome Style Sheets) as its CSS preprocessor. This provides powerful features like variables, mixins, functions, and nesting to create a more maintainable and scalable CSS architecture.

## What is SASS?

SASS extends CSS with features that make styling more efficient and organized:
- **Variables**: Store and reuse values (colors, sizes, etc.)
- **Nesting**: Write cleaner, hierarchical CSS
- **Mixins**: Reuse blocks of styles
- **Functions**: Perform calculations and manipulations
- **Partials**: Split code into modular files
- **Inheritance**: Share properties between selectors
- **Control Directives**: Use programming logic in your styles

## Framework Modularization

Phenix Design System uses a modular approach that separates core components from enhancement utilities. This provides significant structural clarity and customization benefits:

- **Core Components Files**: 
  - `phenix.scss` / `phenix-rtl.scss` - Core foundation with components for LTR/RTL
  - Provides the fundamental structure and grid layout
  - Establishes the basic component architecture
  - Sets up essential resets and baseline styles
  - **Primary use case**: Foundation for any Phenix Design System implementation

- **Enhancement Utilities Files**: 
  - `phenix-utils.scss` / `phenix-utils-rtl.scss` - Styling utilities for LTR/RTL
  - Adds styling capabilities to core components
  - Provides customization options for all design elements
  - Allows creation of new components based on utility classes
  - Used to enhance and extend the core foundation

## Correct Loading Approach

The Phenix Design System implements a structured loading approach:

1. **Load Components First**: Always load the core components stylesheet first
2. **Load Utilities Second**: Load the enhancement utilities stylesheet second

```html
<!-- Correct loading order -->
<link href="path/to/phenix.css" rel="stylesheet">
<link href="path/to/phenix-utils.css" rel="stylesheet">
```

This approach ensures proper structure and styling, providing several important benefits:

1. **Proper Structural Foundation**: Components establish the core architecture first
2. **Clear Separation of Concerns**: Structure (components) is separate from styling (utilities)
3. **Enhanced Flexibility**: Components can be styled and customized using utilities
4. **Consistent Base Structure**: Ensures consistent foundation across the design system
5. **Logical Style Application**: Style enhancements build upon established structure

## Architecture Benefits

This structuring of the framework provides significant advantages:

1. **Clear Separation of Concerns**: Structure (components) is separate from styling (utilities)
2. **Flexibility**: Easy to customize component appearance using utilities
3. **Maintainability**: Core structures remain stable while styling can evolve
4. **Extendability**: Build new components on top of the foundation using utilities
5. **Component Consistency**: Ensures consistent base structure across the design system

## Package-Specific Files

It's important to note that **WordPress-specific SASS files are only available in the `pds-blocks` package**, not in the standalone `phenix-ui` package. The WordPress-related files (such as admin styles and editor integrations) have been removed from the front-end repository to keep it lightweight.

## Phenix SASS Architecture

The Phenix Design System SASS architecture follows this structure:

```
src/sass/
├── assets/
│   ├── _mixin.scss         # Main mixins loader
│   ├── mixin/              # Individual mixins
│   │   ├── _breakpoints.scss  # Media query mixins
│   │   ├── _grid-gap.scss     # Grid gap mixins
│   │   ├── _margin.scss       # Margin mixins
│   │   ├── _padding.scss      # Padding mixins
│   │   └── _other.scss        # Other utility mixins
│   ├── _reset.scss         # CSS reset/normalize
│   └── _selectors.scss     # SASS selectors
├── components/             # Component styles
│   ├── _buttons.scss       # Button styles
│   ├── _navbar.scss        # Navigation components
│   ├── _breadcrumb.scss    # Breadcrumb component
│   ├── _dropdown.scss      # Dropdown menus
│   ├── _slider.scss        # Slider/carousel components
│   ├── _tables.scss        # Table styles
│   └── _tabs.scss          # Tab components
├── editor/                 # WordPress-specific (pds-blocks only)
│   ├── _admin-pages.scss   # Admin page styles
│   ├── _blocks-list.scss   # Blocks listing styles
│   ├── _core-elements.scss # Core editor elements
│   ├── _phenix-blocks.scss # Phenix blocks styles
│   └── _side-panel.scss    # Editor side panel
├── form/                   # Form components
│   ├── _form-controls.scss # Form control elements
│   ├── _tornado-form.scss  # Advanced form system
│   └── _uploader.scss      # File upload components
├── grid/                   # Grid system
│   ├── _main.scss          # Grid system main file
│   ├── _columns.scss       # Column definitions
│   └── _utilities.scss     # Grid utilities
├── integration/            # Third-party integrations
│   ├── _wordpress.scss     # WordPress integration
│   ├── _wp-themes.scss     # WordPress theme support
│   └── _splide.scss        # Third-party slider integration
├── utilities/              # Utility classes
│   ├── _main.scss          # Main utilities
│   ├── _colors.scss        # Color utilities
│   ├── _typography.scss    # Typography utilities
│   ├── _borders.scss       # Border utilities
│   ├── _margin.scss        # Margin utilities
│   ├── _padding.scss       # Padding utilities
│   ├── _position.scss      # Positioning utilities
│   ├── _sizes.scss         # Size utilities
│   ├── _visibility.scss    # Display/visibility utilities
│   ├── _effects.scss       # Visual effects
│   ├── _hovers.scss        # Hover interactions
│   └── _plugins.scss       # Plugin utilities
├── _theme.scss             # Primary CSS variables file with default theme options
├── admin.scss              # Admin styles (LTR)
├── admin-rtl.scss          # Admin styles (RTL)
├── phenix.scss             # Core foundation layer with components (LTR)
├── phenix-rtl.scss         # Core foundation layer with components (RTL)
├── phenix-utils.scss       # Enhancement layer with utilities (LTR)
└── phenix-utils-rtl.scss   # Enhancement layer with utilities (RTL)
```

## File Import Structure

One key aspect of the Phenix Design System architecture is how files are imported. Unlike many frameworks that import all modules in a single entry file, Phenix uses a two-layer approach:

### Primary Entry Files

1. **phenix.scss / phenix-rtl.scss** (Foundation Layer):
   - Import fundamental modules (mixin, selectors, reset, grid)
   - Import component modules directly
   - Import the `_theme.scss` file for default theme options
   - Provide the core structural foundation
   - Must be used as the primary foundation

2. **phenix-utils.scss / phenix-utils-rtl.scss** (Enhancement Layer):
   - Import fundamental modules (mixin, selectors)
   - Import utility modules directly
   - Provide styling and customization capabilities
   - Build on top of the core foundation
   - Used to enhance and extend components

### Theme Options with _theme.scss

The `_theme.scss` file has been streamlined to focus solely on providing default theme options through CSS variables:
- Defines primary CSS variables as default theme options
- Contains color definitions, typography settings, and component appearance options
- Serves as a central point for theme customization
- No longer handles component imports or serves as an import orchestrator

This change simplifies the customization process and provides a clearer separation of concerns:
- Theme variables are defined in `_theme.scss`
- Component imports are now handled directly in the main entry files
- Results in a more maintainable and focused theming system

## Main Entry Files

Here's a closer look at the entry files:

### phenix.scss / phenix-rtl.scss (Foundation Layer)

These files provide the core foundation with components:

```scss
// From phenix.scss
@charset "UTF-8";
/*!
 * Phenix UI v0.7-beta (https://design.phenixthemes.com)
 * Copyright 2012-2022 Abdullah.Ramadan
 * Copyright 2020-2022 Phenix Themes.
 * Licensed under MIT (https://github.com/EngCode/phenix-ui/blob/main/LICENSE)
*/

/*==== Direction Options ====*/
$direction: ltr;
$direction-reverse: rtl;
$direction-start: left;
$direction-end: right;

/*==== Font Options ====*/
:root {
    //==== Font Families ====//
    --primary-font: "Tajawal";
    --secondary-font: "Tajawal";

    //==== Font Weight ====//
    --thin-weight   : 100;
    --xlight-weight : 200;
    --light-weight  : 300;
    --normal-weight : 400;
    --medium-weight : 500;
    --bold-weight   : 600;
    --strong-weight : 700;
    --xbold-weight  : 800;
    --black-weight  : 900;

    /*==== Responsive REM:Base ====*/
    --rem-xl : 16px; //===> xLarge Screens and Up
    --rem-lg : 16px; //===> Large Screens and Up
    --rem-md : 16px; //===> Medium Screens and Up
    --rem-sm : 16px; //===> Small Screens and Up
    --rem-xs : 16px; //===> Extra Small Screens and Up

    //==== Standard Line-Height ====//
    --line-height: 1.625;
}

/*==== Required Modules ====*/
@import 'assets/mixin';     //===> SASS Mixin
@import 'assets/selectors'; //===> SASS Selectors
@import 'assets/reset';     //===> CSS RESET
@import 'grid/main';        //===> Layout Grid System

/*==== Theme Options ====*/
@import 'theme';

/*==== Integration ====*/
@import 'integration/wordpress'; //===> WordPress
@import 'integration/splide';    //===> Splide Slider

/*==== Components Modules ====*/
@import 'components/breadcrumb'; //===> Breadcrumb
@import 'components/buttons';    //===> Buttons & Badges
@import 'components/dropdown';   //===> Dropdown
@import 'components/navbar';     //===> Phenix Navbar
@import 'components/tables';     //===> Tables & Datatables
@import 'components/tabs';       //===> Panels & Tabs
@import 'components/slider';     //===> Phenix Sliders

/*==== Form Components ====*/
@import 'form/uploader';
@import 'form/form-controls';
```

### phenix-utils.scss / phenix-utils-rtl.scss (Enhancement Layer)

These files provide the enhancement layer with utilities:

```scss
// From phenix-utils.scss
@charset "UTF-8";
/*!
 * Phenix UI v0.7-beta (https://design.phenixthemes.com)
 * Copyright 2012-2022 Abdullah.Ramadan
 * Copyright 2020-2022 Phenix Themes.
 * Licensed under MIT (https://github.com/EngCode/phenix-ui/blob/main/LICENSE)
*/

/*==== Direction Options ====*/
$direction: ltr;
$direction-reverse: rtl;
$direction-start: left;
$direction-end: right;

/*==== Required Modules ====*/
@import 'assets/mixin';     //===> SASS Mixin
@import 'assets/selectors'; //===> SASS Selectors

/*==== Utilities Modules ====*/
@import 'utilities/main';       //===> Custom Utilities
@import 'utilities/position';   //===> Postion Utilites
@import 'utilities/typography'; //===> Typography Utilites
@import 'utilities/sizes';      //===> Sizing Utilities
@import 'utilities/margin';     //===> Margin Utilites
@import 'utilities/padding';    //===> Padding Utilites
@import 'utilities/colors';     //===> CSS Coloring System
@import 'utilities/borders';    //===> CSS Borders
@import 'utilities/visibility'; //===> Visibility Utilities
@import 'utilities/plugins';    //===> Phenix Plugins Assets
@import 'utilities/effects';    //===> Phenix Effects Assets
```

### _theme.scss (Theme Options)

The updated `_theme.scss` file is now focused solely on defining CSS variables for theme customization:

```scss
// From _theme.scss
:root {
  /*==== Global ====*/
  interpolate-size: allow-keywords;
  /*==== Global ====*/
  --body-bg : #f6f6f6;
  --icons-font: "Font Awesome 5";

  /*==== Primary Color ====*/
  --primary-color   : #0C97F9;
  --primary-hover   : #1A69F4;
  --primary-dark    : #040f27;
  --primary-reverse : #FFFFFF;
  --primary-offwhite: #e1eef7;
  
  /*==== Secondary Color ====*/
  --secondary-color   : #F8C25B;
  --secondary-hover   : #FB955D;
  --secondary-dark    : #b03513;
  --secondary-reverse : #000000;
  --secondary-offwhite: #fddfa8;
  
  /*==== Gradients ====*/
  --primary-gradient   : var(--primary-color), var(--primary-hover);
  --secondary-gradient : var(--secondary-color), var(--secondary-hover);
  --success-gradient   : #22B567, #00A186;
  --warning-gradient   : #FAD934, #F49D1A;
  --danger-gradient    : #FD875B, #F9515A, #F96AAC;
  
  /*==== Typography Colors ====*/
  --typography-color : #111111;
  --light-reverse    : #111111;
  --dark-reverse     : #F1F1F1;
  
  /*==== Component Appearance ====*/
  --component-bg-lvl-1 : #FFFFFF;
  --component-bg-lvl-2 : #F2F2F2;
  --component-bg-lvl-3 : #F5F5F5;
  --component-tx-lvl-1 : var(--dark-color);
  --component-tx-lvl-2 : var(--gray-color);
  --component-tx-lvl-3 : var(--dark-light);
}

/*===> Dark Theme <===*/
// @media (prefers-color-scheme: dark) {}
```

## File Contents Breakdown

Here's what each main SASS file includes and its intended purpose:

| File | Purpose | Dependencies | Usage |
|------|---------|--------------|-------|
| phenix.scss | **Foundation Layer** - Provides core components and structure | None | Must be used as primary foundation |
| phenix-rtl.scss | RTL version of the Foundation Layer | None | Must be used as primary foundation (RTL sites) |
| phenix-utils.scss | **Enhancement Layer** - Provides styling utilities | Requires components | Must be used with components |
| phenix-utils-rtl.scss | RTL version of the Enhancement Layer | Requires components | Must be used with components (RTL sites) |
| _theme.scss | **Theme Options** - Provides default CSS variables | None | Imported by phenix.scss/phenix-rtl.scss |

## Implementation in HTML

### Recommended Implementation

For **optimal structure and styling**, always load components first, then utilities:

```html
<!-- Foundation Layer (loads first) -->
<link href="path/to/phenix.css" rel="stylesheet">

<!-- Enhancement Layer (loads second) -->
<link href="path/to/phenix-utils.css" rel="stylesheet">
```

This approach:
- Establishes the structural foundation before applying styling
- Ensures proper inheritance and style application
- Maintains the logical separation of structure and style
- Components contain the essential grid system and layout structures
- Utilities provide the customization options on top of the foundation

### Components-Only Implementation (Limited)

You can use just the components layer for basic functionality, but with limited styling options:

```html
<!-- Components-only implementation has limited styling capabilities -->
<link href="path/to/phenix.css" rel="stylesheet">
```

### Incorrect Implementation (Avoid)

Never load the utilities layer without the components foundation:

```html
<!-- AVOID: Utilities without components foundation will not work properly -->
<link href="path/to/phenix-utils.css" rel="stylesheet">
```

This implementation is not supported and will result in incomplete styling.

## Including SASS in Your Project

There are several ways to use Phenix SASS:

### 1. Import from NPM

If you installed Phenix via NPM:

```scss
// Import the foundation layer (required)
@import 'node_modules/phenix-ui/src/sass/phenix';

// Import the enhancement layer (adds utilities)
@import 'node_modules/phenix-ui/src/sass/phenix-utils';
```

::: warning Note
Remember that utilities are meant to be used on top of components, not independently.
:::

### 2. Import from Local Files

If you downloaded Phenix source files:

```scss
// Import the foundation components
@import 'path/to/phenix/src/sass/phenix';

// Import the enhancement utilities
@import 'path/to/phenix/src/sass/phenix-utils';
```

## Customizing with SASS

The most effective way to customize Phenix is by creating your own SASS file that imports and extends the framework:

```scss
// custom.scss

// 1. Set direction variables
$direction: ltr;
$direction-reverse: rtl;
$direction-start: left;
$direction-end: right;

// 2. Override variables before importing Phenix
// Your custom variable overrides here...

// 3. Import Phenix components (foundation layer)
@import 'path/to/phenix/src/sass/phenix';

// 4. Import Phenix utilities (enhancement layer)
@import 'path/to/phenix/src/sass/phenix-utils';

// 5. Add your custom styles
.custom-component {
  background-color: var(--component-bg-lvl-1);
  border-radius: 0.5rem;
  
  &:hover {
    background-color: var(--component-bg-lvl-2);
  }
}
```

::: tip Customization Best Practice
For theme customization, you can create your own version of the _theme.scss file with your preferred variables. Since _theme.scss now focuses solely on CSS variables, it's easier to maintain and override for custom themes.
:::

## Best Practices

1. **Always load components first**: 
   - Ensures proper structure and style inheritance
   - Establishes the foundation for utilities to enhance
2. **Components provide structure**:
   - The components layer gives you the structural foundation
   - Components include grid system and basic layouts
3. **Utilities provide styling**:
   - Use utilities to customize and style components
   - Utilities allow you to build new elements on the foundation
4. **Leverage CSS variables**: 
   - Modify CSS variables for runtime customization
5. **Override variables before import**: 
   - Set custom values before importing Phenix
6. **Use logical properties**: 
   - Work with `$direction-start` and `$direction-end` for RTL support
7. **Create a custom theme.scss**:
   - For deep customization, create your own theme variables file

## Build Process

For information on compiling SASS files, please refer to the [Build Tools](/frontend/getting-started/sass/build-tools) documentation.

## SASS Variables

For a complete list of available variables, please refer to the [SASS Variables](/frontend/getting-started/sass/variables) documentation.
