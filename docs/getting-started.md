# Getting Started with Phenix Design System

This guide will help you set up and start using the Phenix Design System in your projects. Whether you're using it with WordPress or as a standalone framework for other web projects, you'll find everything you need to get started.

## What is Phenix Design System?

Phenix is a comprehensive design system that includes:

- A powerful SASS framework with utility classes and components
- TypeScript utilities for interactive features
- WordPress Gutenberg blocks for content creation
- PHP integration tools for WordPress themes and plugins

The system is designed to be modular, allowing you to use either the complete package or just the parts you need.

## Installation Options

Phenix Design System can be installed and used in several ways:

### 1. WordPress Plugin (Complete System)

For the full experience with WordPress integration:

1. Download the plugin from [GitHub](https://github.com/EngCode/phenix-blocks)
2. Upload the plugin files to the `/wp-content/plugins/pds-blocks` directory
3. Activate the plugin through the 'Plugins' menu in WordPress
4. For best results, use with a compatible theme like [PDS Starter Theme](https://github.com/EngCode/pds-starter-free)

### 2. SASS Framework Only (For Frontend Developers)

If you only need the SASS framework for your frontend projects:

#### Using npm

```bash
# This command assumes the package is published to npm
npm install phenix-design-system
```

#### Manual Installation

1. Download the SASS files from the [repository](https://github.com/EngCode/phenix-blocks/tree/main/src/sass)
2. Include them in your project's SASS build process

## System Requirements

### For WordPress Integration

- WordPress 6.0 or higher
- PHP 7.4 or higher
- Block-based theme (preferably a Phenix Design System theme)
- Modern browser support (Chrome, Firefox, Safari, Edge)

### For Frontend Development

- Node.js 14.x or higher and npm (if using npm)
- SASS compiler
- Modern browser support

## Quick Start

### Using with WordPress

After installing the plugin and a compatible theme:

1. Create a new page or post
2. Start using the Phenix blocks from the block inserter
3. Customize your content using the block controls and options

#### Example: Adding a Container Block

1. Click the '+' button to open the block inserter
2. Search for "Container" and add the Phenix Container block
3. Use the block settings panel to customize width, background, padding, etc.
4. Add inner blocks like text, buttons, or media elements

### Using the SASS Framework

1. Set up your project structure with SASS compilation:

```
project/
├── src/
│   ├── sass/
│   │   ├── phenix/  # Phenix SASS files go here
│   │   └── main.scss
│   └── ...
└── ...
```

2. Import the Phenix SASS files in your main.scss:

```scss
// Import the main Phenix SASS file
@import 'phenix/phenix';

// Or import specific components
@import 'phenix/components/buttons';
@import 'phenix/grid/main';
@import 'phenix/utilities/colors';
```

3. Start using the utility classes and components in your HTML:

```html
<div class="container pd-30">
  <div class="row">
    <div class="col-12 col-md-6">
      <div class="bg-white border-1 radius-md pd-20">
        <h3 class="tx-primary mb-15">Hello, Phenix!</h3>
        <p class="mb-15">A utility-first SASS framework for modern web development.</p>
        <button class="btn primary radius-sm">Get Started</button>
      </div>
    </div>
  </div>
</div>
```

## Core Concepts

### Responsive Design

Phenix follows a mobile-first approach. Classes without breakpoint prefixes apply to all screen sizes, while classes with breakpoint prefixes (`-sm`, `-md`, `-lg`, `-xl`) apply at that breakpoint and above:

```html
<!-- This element will be 100% width on mobile and 50% width on medium screens and up -->
<div class="width-100 width-md-50"></div>
```

### Utility-First Approach

Phenix provides utility classes for common CSS properties:

```html
<!-- Margin and padding -->
<div class="mt-20 mb-30 pdx-15">Content</div>

<!-- Colors and typography -->
<p class="color-primary fs-18 weight-bold">Important text</p>

<!-- Flexbox layouts -->
<div class="display-flex align-center-y justify-between">
  <div>Left content</div>
  <div>Right content</div>
</div>
```

### Components

Phenix includes pre-built components like buttons, navigation, tables, and more:

```html
<!-- Button component -->
<button class="btn primary">Primary Button</button>

<!-- Navigation component -->
<nav class="px-navigation">
  <ul>
    <li class="px-item-active"><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
  </ul>
</nav>
```

## File Structure Overview

The Phenix SASS framework is organized into several key directories:

```
src/sass/
├── assets/              # Core assets and mixins
├── components/          # UI components 
├── form/                # Form elements
├── grid/                # Grid system
├── integration/         # Third-party integration
├── utilities/           # Utility classes
├── _customize.scss      # Customization variables
└── phenix.scss          # Main entry file
```

## Customization

You can customize Phenix by overriding the CSS variables defined in `_customize.scss`:

```scss
:root {
  /* Primary Color */
  --primary-color: #0C97F9;
  --primary-hover: #1A69F4;
  
  /* Typography */
  --primary-font: "Your-Custom-Font";
  --bold-weight: 600;
  
  /* Other customizations */
}
```

## Next Steps

Now that you have Phenix Design System set up, explore the documentation to learn more about its features:

- [SASS Framework](/sass/) - Learn about the CSS utilities and components
- [Grid System](/sass/grid) - Explore the responsive grid system
- [Typography](/sass/typography) - Learn about text styling
- [Colors](/sass/colors) - Understand the color system
- [Components](/sass/components) - Discover UI components
- [Utilities](/sass/utilities) - Use utility classes
- [Forms](/sass/forms) - Style form elements

## Getting Help

If you need help or have questions, you can:

- [Check the GitHub repository](https://github.com/EngCode/phenix-blocks)
- [Report issues](https://github.com/EngCode/phenix-blocks/issues)
- [Visit the official website](https://phenixthemes.com/demo/) 