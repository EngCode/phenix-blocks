# SASS Integrations

The Phenix Design System integrates SASS with various systems including WordPress and third-party tools. This page documents  structure and organization of the SASS files, with particular focus on the entry point files and their integrations.

## Entry Point Files

Phenix Design System has several main SASS entry point files, each serving a distinct purpose:

| Entry File | Purpose | Output File |
|------------|---------|------------|
| `phenix.scss` | Core components and integrations (LTR) | `phenix.css` |
| `phenix-rtl.scss` | Core components and integrations (RTL) | `phenix-rtl.css` |
| `phenix-utils.scss` | Utility classes only (LTR) | `phenix-utils.css` |
| `phenix-utils-rtl.scss` | Utility classes only (RTL) | `phenix-utils-rtl.css` |
| `admin.scss` | WordPress admin panel styles (LTR) | `admin.css` |
| `admin-rtl.scss` | WordPress admin panel styles (RTL) | `admin-rtl.css` |

## Core Components (`phenix.scss` / `phenix-rtl.scss`)

The core component files include structural elements, components, and integrations but do not include utility classes. Here is  structure of these files:

```scss
/*==== Direction Options ====*/
$direction: ltr; // 'rtl' in phenix-rtl.scss
$direction-reverse: rtl; // 'ltr' in phenix-rtl.scss
$direction-start: left; // 'right' in phenix-rtl.scss
$direction-end: right; // 'left' in phenix-rtl.scss

/*==== Font Options ====*/
:root {
    //==== Font Families ====//
    --primary-font: "Tajawal"; // "Somar Rounded" in phenix-rtl.scss
    --secondary-font: "Tajawal"; // "Somar Rounded" in phenix-rtl.scss

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
    --rem-xl : 16px; // xLarge Screens and Up
    --rem-lg : 16px; // Large Screens and Up
    --rem-md : 16px; // Medium Screens and Up
    --rem-sm : 16px; // Small Screens and Up
    --rem-xs : 16px; // Extra Small Screens and Up

    //==== Standard Line-Height ====//
    --line-height: 1.625; // 1.65 in phenix-rtl.scss
}

/*==== Required Modules ====*/
@import 'assets/mixin';     //===> SASS Mixin
@import 'assets/selectors'; //===> SASS Selectors
@import 'assets/reset';     //===> CSS RESET
@import 'grid/main';        //===> Layout Grid System

/*==== CSS Variables for Themeing ====*/
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

## Utilities-Only Files (`phenix-utils.scss` / `phenix-utils-rtl.scss`)

The utilities-only files include styling utilities but do not include components or integrations. Here is  structure:

```scss
/*==== Direction Options ====*/
$direction: ltr; // 'rtl' in phenix-utils-rtl.scss
$direction-reverse: rtl; // 'ltr' in phenix-utils-rtl.scss
$direction-start: left; // 'right' in phenix-utils-rtl.scss
$direction-end: right; // 'left' in phenix-utils-rtl.scss

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

## WordPress Admin Files (`admin.scss` / `admin-rtl.scss`)

These files include styles specific to the WordPress admin panel and block editor:

```scss
/*==== Direction Options ====*/
$direction: ltr; // 'rtl' in admin-rtl.scss
$direction-reverse: ltr; // 'ltr' in admin-rtl.scss (seems this may be a typo in the original)
$direction-start: left; // 'right' in admin-rtl.scss
$direction-end: right; // 'left' in admin-rtl.scss

/*==== Required Modules ====*/
@import 'assets/mixin';     //===> SASS Mixin
@import 'assets/selectors'; //===> SASS Selectors

/*==== Core Elements ====*/
@import "editor/core-elements";

/*==== Admin Pages ====*/
@import "editor/admin-pages";

/*==== GB Editor ====*/
@import "editor/side-panel";
@import "editor/blocks-list";

/*==== Phenix Blocks ====*/
@import "editor/phenix-blocks";
```

## Third-Party Integrations

Phenix includes integration files for various third-party systems:

### WordPress Integration

Files related to WordPress integration:

| File | Description |
|------|-------------|
| `integration/_wordpress.scss` | Core WordPress styles and compatibility |
| `integration/_wp-themes.scss` | WordPress theme variables |
| `editor/_core-elements.scss` | Styles for WordPress core elements |
| `editor/_blocks-list.scss` | Styles for Gutenberg blocks list |
| `editor/_side-panel.scss` | Styles for WordPress editor sidebars |
| `editor/_phenix-blocks.scss` | Styles for custom Phenix blocks |

### Splide Slider Integration

Phenix integrates with the Splide slider:

| File | Description |
|------|-------------|
| `integration/_splide.scss` | Styles for the Splide slider library |

## Implementing Integrations

### Basic HTML Implementation

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <!-- Core Foundation (FIRST) -->
  <link rel="stylesheet" href="path/to/phenix.min.css">
  
  <!-- Enhancement Utilities (SECOND) -->
  <link rel="stylesheet" href="path/to/phenix-utils.min.css">
</head>
<body>
  <!-- Your content here -->
  
  <!-- JavaScript -->
  <script src="path/to/phenix.min.js"></script>
</body>
</html>
```

### WordPress Implementation

When using Phenix with WordPress, the plugin automatically handles the loading of the appropriate stylesheets based on the site's direction setting.

The stylesheets are loaded in the following order:

1. Admin styles (`admin.css` or `admin-rtl.css`) in the WordPress admin area
2. Core components (`phenix.css` or `phenix-rtl.css`) in the frontend
3. Utility styles (`phenix-utils.css` or `phenix-utils-rtl.css`) in the frontend

## Using Integrations in Custom Projects

To use Phenix integrations in a custom project, make sure to:

1. Include the appropriate entry point files based on your needs
2. Respect the loading order (components first, utilities second)
3. Set the HTML `dir` attribute to match your language direction (`ltr` or `rtl`)
4. Include any required JavaScript files for interactive components
