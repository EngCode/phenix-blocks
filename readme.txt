=== Phenix Blocks ===
Contributors: abdullah.ramadan, abdullahramadan, EngCode
Tags: phenix, phenix themes, phenix blocks, block, blocks, gutenberg blocks, gutenberg, block editor, metaboxes, post-types, taxonomies, optimizing, admin style, design system
Version: 2.0.0
Author: Abdullah.Ramadan
Author URI:https://phenixthemes.com/en/abdullah-ramadan
Requires at least: 6.0
Tested up to: 6.7.1
Requires PHP: 7.4
Stable tag: 2.0.0
License: GPLv2 or later

Unleash Creativity with Ease and Transform Your Web Design Experience

== Description ==
Phenix Blocks is a WordPress plugin that allows users to easily build custom websites. This plugin represents a comprehensive design system that includes a variety of pre-made blocks and different settings that can be used to quickly and easily create web pages.

# Phenix

A UI framework for building WordPress sites with a unified design language.

## What it does

- **Front-end framework:** Utility-based CSS (padding, margin, grid, flexbox) with built-in RTL support. JavaScript components for animations, popups, sliders, and 3D viewers.
- **Block system:** Custom Gutenberg blocks that share a single rendering engine. One vocabulary (`pd-15`, `flexbox`, `col-6`) across all blocks.
- **Backend tools:** CPT creator, taxonomy creator, meta boxes, import/export, admin columns. Reduces the need for multiple plugins.
- **Design system:** Consistent class naming and spacing scale that works across themes.

## Requirements

- WordPress 6.0+
- PHP 7.4+
- Node 20+ (for building from source)

## Install from source

```bash
git clone https://gitlab.com/EngCode/pds-blocks-pro.git
cd pds-blocks-pro
npm install
npm run phenix-start
```

## Build commands

| Command | What it does |
|---------|-------------|
| `npm run phenix-start` | Runs SASS, TypeScript, and blocks watcher in parallel |
| `npm run phenix-ts` | Compiles the front-end JavaScript (`assets/js/phenix.js`) |
| `npm run phenix-sass` | Compiles the CSS framework (`assets/css/phenix.css`) |
| `npm run phenix-blocks` | Compiles the Gutenberg blocks |
| `npm run animate-sass` | Compiles the animation CSS separately |

### Plugin Installation

1. Download the plugin from [GitHub](https://github.com/EngCode/phenix-blocks)
2. Upload the plugin files to the `/wp-content/plugins/pds-blocks` directory
3. Activate the plugin through the 'Plugins' menu in WordPress

### Theme Installation

1. Download the [PDS Starter Theme](https://github.com/EngCode/pds-starter-free)
2. Upload the theme to the `/wp-content/themes/` directory
3. Activate the theme through the 'Appearance' menu in WordPress

## Architecture

The plugin contains all blocks, CSS, JavaScript, and backend tools. The theme provides `theme.json` colors and optional template parts. Switching themes does not break the blocks because the design system lives in the plugin.

Blocks use a shared renderer (`OptionsRenderer`) that reads block attributes and outputs CSS classes. This keeps the logic centralized rather than duplicated across 20+ block files.

### Key Features

- **Custom Gutenberg Blocks**: 20+ specialized blocks for creating complex layouts and dynamic content
- **Advanced Animation System**: Scroll-driven animations with progress tracking and exit animations
- **3D Interactive Media**: Embed and control interactive 3D models with Three.js integration
- **Integrated Third-Party Controls**: Slider, typewriter, parallax effects, and more specialized components
- **Advanced Block Controls**: Extensive styling options with responsive capabilities for all device sizes
- **Theme Customization**: Modular SASS structure, JavaScript integration, and dynamic template parts
- **Developer Tools**: APIs for custom post types, taxonomies, meta boxes, and more
- **Performance Optimization**: Tools to enhance site speed and user experience
- **WooCommerce Integration**: Special features for e-commerce websites
- **Multi-language Support**: Full RTL compatibility and translation readiness


## Documentation

Comprehensive documentation is available on our [GitHub Pages site](https://engcode.github.io/phenix-blocks/), organized into the following sections:

- **[Getting Started](https://engcode.github.io/phenix-blocks/wordpress/getting-started/)**: Installation, setup, and basic configuration
- **[Block Library](https://engcode.github.io/phenix-blocks/wordpress/blocks/)**: Detailed guides for each custom block
- **[Theme Customizing](https://engcode.github.io/phenix-blocks/wordpress/getting-started/theme-customizing.html)**: SASS customization, JavaScript integration, and template parts
- **[Front-End Framework](https://engcode.github.io/phenix-blocks/frontend/)**: CSS utilities, components, and JavaScript helpers
- **[Developer Tools](https://engcode.github.io/phenix-blocks/wordpress/tools/)**: APIs and utilities for extending the system

## Developer Tools

Phenix Design System includes powerful tools for developers to extend and customize WordPress:

### Post Management
- **Bulk Operations**: Manage multiple posts at once
- **Post Duplication**: Clone existing posts with a single click
- **Import/Export**: Transfer posts between sites using JSON format

### Custom Post Types & Taxonomies
- **CPT Creator**: Create custom post types with advanced options
- **Taxonomy Creator**: Build custom taxonomies with hierarchical support
- **Meta Boxes**: Add custom fields to any post type

### Performance Optimization
- **Asset Management**: Optimize CSS and JavaScript loading
- **Image Optimization**: Automatic image optimization and lazy loading
- **Caching Controls**: Fine-tune caching for better performance

### Admin Enhancements
- **Custom Admin Columns**: Add useful information to admin list views
- **Admin UI Improvements**: Enhanced interface for better usability
- **Developer Utilities**: Helper functions for common development tasks

## Block Library

Phenix Design System includes a comprehensive set of custom blocks organized into logical categories:

### Layout Blocks
- **Container**: Create boxed or full-width content areas with advanced styling options
- **Grid Row**: Flexible row layouts with responsive controls and gap settings
- **Grid Column**: Responsive columns with width controls for all device sizes
- **Group**: Group content with advanced styling and positioning options
- **Theme Part**: Include reusable template parts within your content

### Content Blocks
- **Text**: Enhanced text elements with advanced typography controls
- **Media Element**: Advanced image and video handling with responsive controls
- **Icon Element**: Insert and customize icons from multiple icon libraries
- **Button**: Create buttons with extensive styling and interaction options
- **Logo**: Insert and customize your site logo with sizing controls
- **Page Head**: Create dynamic page headers with title and breadcrumb support

### Interactive Blocks
- **Popup**: Create modal popups with custom triggers and animations
- **Navigation**: Build responsive menus with mobile support and custom styling
- **Custom Code**: Insert custom HTML, CSS, and JavaScript
- **3D Viewer**: Display interactive 3D models with customizable controls

### Dynamic Blocks
- **Query**: Display posts with advanced filtering and pagination options
- **Taxonomies**: Show categories, tags, or custom taxonomies with styling options
- **Users Query**: Display user information with filtering and styling controls

### Utility Blocks
- **Logical Content**: Display conditional content based on user roles, devices, or languages
- **PX Controls**: Advanced control elements for forms and interactive components

## Advanced Block Controls

Every block includes a comprehensive set of styling and layout controls:

### Layout Controls
- **Alignment**: Control horizontal and vertical alignment
- **Dimensions**: Set width, height, and max-width/height
- **Spacing**: Control margin and padding with responsive options
- **Position**: Set position type and coordinates (absolute, relative, etc.)
- **Display**: Control how elements display on different devices

### Style Controls
- **Colors**: Set text, background, and border colors
- **Typography**: Control font family, size, weight, and style
- **Borders**: Add and style borders with width, style, and radius options
- **Effects**: Add shadows, opacity, and other visual effects
- **Animations**: Add entrance animations and hover effects

### Responsive Controls
- **Device-specific settings**: Customize layouts for mobile, tablet, and desktop
- **Visibility controls**: Show or hide elements on different devices
- **Adaptive layouts**: Change column widths and spacing based on screen size

## Theme Customization

The Phenix Starter Theme provides a solid foundation for building custom websites:

### SASS Customization
The theme uses a modular SASS structure that makes it easy to customize:

```
sass/
├── _theme-info.scss     # Theme information
├── _theme-style.scss    # Main theme styles
├── assets/              # Additional assets
├── elements/            # Element-specific styles
└── patches/             # Style overrides and fixes
```

### JavaScript Integration
The `style.js` file allows you to add custom JavaScript functionality to your theme, with access to the Phenix JavaScript library for DOM manipulation, animations, and more.

### Template Parts for Dynamic Blocks
Customize how content is displayed in dynamic blocks by creating custom template parts:

```
template-parts/
├── cards/             # Post card templates for Query Block
├── cards-taxonomies/  # Templates for Taxonomies Block
└── dynamic/           # Custom templates for dynamic content
```

## Version history

### v1.5.0 — Build system cleanup
- Replaced deprecated `node-sass` with Dart `sass`
- Upgraded `ts-loader`, `webpack`, `typescript` for Node 20+ compatibility
- Removed babel packages that `@wordpress/scripts` already bundles
- Removed `@wordpress/server-side-render` and `@wordpress/blocks` from explicit dependencies (WordPress provides them at runtime)
- Added `.npmrc` so `npm install` works without flags on modern Node versions
- Block build auto-discovers blocks from `src/blocks/` instead of using a manual entry list

### v2.0.0 — Core fixes
- **CSS variable trap removed:** Replaced nested CSS variable fallbacks (`var(--pdt-md, var(--pdt-lg, var(--pdt)))`) with flat generated classes. A PHP collector generates the exact CSS needed on `save_post` and outputs it in `wp_head`. No inline style bloat. Better browser performance on complex pages.
- **JavaScript core opened:** Added `Phenix.register()`, `Phenix.extend()`, and `Phenix.PhenixElements` access so external code can add methods without modifying the source. Added `.init()` and `.destroy()` lifecycle hooks for SPA framework integration.
- **SASS cleanup:** Removed `.pdt-custom`, `.pdb-custom`, `.pds-custom`, `.pde-custom` and margin equivalents. Custom spacing values are handled by the collector, not CSS variables.
- **Extension build support:** Multiple webpack entry points for compiling add-on files (e.g., `woocommerce.js`, `select.js`) as separate files that share the core global without duplicating it.

## License

GPL-2.0-or-later

## Author

Abdullah Ramadan — https://phenixthemes.com
