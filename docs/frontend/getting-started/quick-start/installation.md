# Installation Guide

There are multiple ways to use the Phenix Design System, depending on your project needs:

## Github Installation (Recommended)

You can download the files directly and include them in your project or use the repository it self as the project base:

1. Download the latest release from [GitHub](https://github.com/EngCode/phenix-ui/releases)
2. Extract the files
3. Include the CSS and JavaScript files in your project:

```html
<!-- Core Components (loads FIRST) -->
<link rel="stylesheet" href="path/to/phenix.min.css">

<!-- Enhancement Utilities (loads SECOND) -->
<link rel="stylesheet" href="path/to/phenix-utils.min.css">

<!-- Phenix JS Core (required) -->
<script src="path/to/phenix.min.js"></script>
```

## CDN Installation

For quick prototyping or smaller projects, you can use the CDN links:

### Standalone Framework (phenix-ui)

```html
<!-- Core Components (loads FIRST) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/phenix-ui@latest/dist/css/phenix.min.css">

<!-- Enhancement Utilities (loads SECOND) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/phenix-ui@latest/dist/css/phenix-utils.min.css">

<!-- Phenix JS Core (required) -->
<script src="https://cdn.jsdelivr.net/npm/phenix-ui@latest/dist/js/phenix.min.js"></script>
```

## NPM Installation

For modern web applications, installing via NPM is recommended. This gives you access to all source files and provides the most flexibility.

### Standalone Framework (phenix-ui)

```bash
npm install phenix-ui --save
```

### WordPress Plugin (pds-blocks)

```bash
npm install pds-blocks --save
```

### WordPress Plugin (pds-blocks)

For WordPress, it's better to install the plugin through the WordPress plugin directory rather than using CDN links.

## WordPress Plugin Installation

If you're using WordPress, you can install the Phenix Design System through the WordPress plugin directory:

1. Go to **Plugins > Add New** in your WordPress admin panel
2. Search for "Phenix Design System"
3. Click "Install Now" and then "Activate"

Alternatively, you can download the plugin from [GitHub](https://github.com/EngCode/phenix-blocks/releases) and upload it manually.

## Modular Framework Structure

The Phenix Design System uses a modular approach that provides clear separation between core components and enhancement utilities:

### File Contents

| File | Purpose | Loading Order |
|------|---------|---------------|
| **phenix.css / phenix-rtl.css** | Core components and integrations providing the structural foundation | Load FIRST |
| **phenix-utils.css / phenix-utils-rtl.css** | Enhancement utilities for customization and styling | Load SECOND |

This separation gives you several advantages:

1. **Clear Separation of Concerns**: Structure (components) is separate from styling (utilities)
2. **Enhanced Maintainability**: Core structure remains stable while styling can be customized
3. **Logical Layer Organization**: Foundation components provide structure, utilities provide styling
4. **Component Consistency**: Ensures consistent foundation across your project

## Including CSS Files in Your Project

For proper implementation, **always load the core components first, followed by utilities**:

```html
<!-- Core Foundation Files (FIRST) -->
<link rel="stylesheet" href="path/to/phenix.min.css">

<!-- Enhancement Utilities (SECOND) -->
<link rel="stylesheet" href="path/to/phenix-utils.min.css">
```

This loading order ensures:

1. The core foundation and grid layout is established first
2. Utility classes are then applied for styling and customization
3. Components have the proper structure before being styled
4. Proper inheritance and specificity is maintained

## Package Differences

### Standalone Framework (phenix-ui)

- **Purpose**: For general web projects without WordPress
- **Includes**: Core CSS framework, JavaScript utilities, and documentation
- **Missing**: WordPress-specific blocks, editor integration, and admin components

### WordPress Plugin (pds-blocks)

- **Purpose**: For WordPress websites and theme development
- **Includes**: Everything in the standalone framework, plus WordPress blocks, editor integration, admin components, and theme support
- **Benefits**: Deeper integration with WordPress, block editor support, and theme customization options

## Starter Templates

For quicker project setup, consider using the starter templates:

### Vanilla JS Starter Example

The Phenix Design System provides example HTML templates to help you get started quickly. Below is a reference implementation you can use as a starting point:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Phenix Design System - Basic Template</title>
  
  <!-- Core Components (loads FIRST) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/phenix-ui@latest/dist/css/phenix.min.css">
  
  <!-- Enhancement Utilities (loads SECOND) -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/phenix-ui@latest/dist/css/phenix-utils.min.css">
</head>
<body>
  <!-- Header -->
  <header class="bg-primary-offwhite pd-20 mb-40">
    <div class="container">
      <div class="row align-center-y">
        <div class="col-6">
          <h1 class="fs-25 weight-bold color-primary">Your Website</h1>
        </div>
        <div class="col-6">
          <nav class="tx-align-end">
            <a href="#" class="btn btn-primary">Home</a>
            <a href="#" class="btn btn-transparent">About</a>
            <a href="#" class="btn btn-transparent">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="container">
    <div class="row">
      <div class="col-12 col-md-8">
        <div class="pd-25 radius-md border-1 border-solid border-alpha-10 mb-30">
          <h2 class="fs-20 weight-medium color-primary mb-20">Welcome to Phenix Design System</h2>
          <p>This is a basic starter template for your Phenix Design System project. You can use this as a reference for your own projects.</p>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="pd-25 radius-md bg-alpha-05 mb-30">
          <h3 class="fs-16 weight-medium mb-15">Sidebar</h3>
          <p>This is a sidebar component example using Phenix Design System utilities.</p>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-primary-dark pd-20 mt-40">
    <div class="container">
      <p class="color-white tx-align-center">© 2023 Your Website. All rights reserved.</p>
    </div>
  </footer>

  <!-- Phenix JS Core (at the end of body) -->
  <script src="https://cdn.jsdelivr.net/npm/phenix-ui@latest/dist/js/phenix.min.js"></script>
</body>
</html>
```

### WordPress Theme Starter

```bash
git clone https://github.com/EngCode/pds-starter-theme.git
```

Move the theme to your WordPress themes directory and activate it through the WordPress admin panel.

## Next Steps

Now that you've installed the Phenix Design System, learn how to:

1. [Customize using CSS Variables](/frontend/getting-started/quick-start/css-customize)
2. [Understand the Grid System](/frontend/design-tokens/layout/grid-system)
3. [Explore Utility Classes](/frontend/utilities/overview)
4. [Work with Components](/frontend/components/overview)