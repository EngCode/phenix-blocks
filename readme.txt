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
2. Upload to `/wp-content/plugins/pds-blocks`
3. Activate through the WordPress Plugins menu

### Theme Installation

1. Download the [PDS Starter Theme](https://github.com/EngCode/pds-starter-free)
2. Upload to `/wp-content/themes/`
3. Activate through the WordPress Appearance menu

## Architecture

The plugin contains all blocks, CSS, JavaScript, and backend tools. The theme provides `theme.json` colors and optional template parts. Switching themes does not break the blocks because the design system lives in the plugin.

Blocks use a shared renderer (`OptionsRenderer`) that reads block attributes and outputs CSS classes. This keeps the logic centralized rather than duplicated across 20+ block files.

## Key Features

- **Custom Gutenberg Blocks:** 20+ blocks for layout, content, dynamic queries, and interactive components
- **Animation System:** Scroll-driven animations with progress tracking and exit animations
- **3D Media Viewer:** Three.js integration for embedding interactive 3D models
- **Third-Party Controls:** Slider, typewriter, parallax, and other JavaScript components
- **Block Controls:** Per-device styling, spacing, colors, typography, borders, and positioning
- **Theme Customization:** Modular SASS, JavaScript hooks, and dynamic template parts
- **Developer Tools:** APIs for custom post types, taxonomies, meta boxes, and admin columns
- **WooCommerce Integration:** Blocks and controls for e-commerce sites
- **RTL Support:** Right-to-left layouts built into the framework, not added as an afterthought
- **Translation Ready:** WordPress standard `.pot` file for localization

## Documentation

- [Getting Started](https://engcode.github.io/phenix-blocks/wordpress/getting-started/)
- [Block Library](https://engcode.github.io/phenix-blocks/wordpress/blocks/)
- [Theme Customizing](https://engcode.github.io/phenix-blocks/wordpress/getting-started/theme-customizing.html)
- [Front-End Framework](https://engcode.github.io/phenix-blocks/frontend/)
- [Developer Tools](https://engcode.github.io/phenix-blocks/wordpress/tools/)

## Developer Tools

### Post Management
- **Bulk Operations:** Edit or delete multiple posts at once
- **Post Duplication:** Clone a post with one click
- **Import/Export:** Transfer posts between sites as JSON

### Custom Post Types & Taxonomies
- **CPT Creator:** Build custom post types with UI, no code required
- **Taxonomy Creator:** Build custom taxonomies, including hierarchical types
- **Meta Boxes:** Add custom fields to any post type

### Admin Enhancements
- **Custom Admin Columns:** Add columns to the post list in the WordPress admin
- **Asset Management:** Control which CSS and JavaScript files load on each page
- **Developer Utilities:** Helper functions for common WordPress tasks

## Block Library

### Layout
- **Container:** Boxed or full-width content areas
- **Grid Row:** Rows with responsive gap and alignment controls
- **Grid Column:** Columns with per-device width controls
- **Group:** Content grouping with background, border, and spacing options
- **Theme Part:** Reusable template parts inside the block editor

### Content
- **Text:** Typography controls (font, size, weight, color, line height)
- **Media Element:** Images and video with responsive sizing and lazy loading
- **Icon Element:** SVG icons from multiple libraries with color and size controls
- **Button:** Styled links with hover states, icons, and sizing
- **Logo:** Site logo with responsive width controls
- **Page Head:** Page title and breadcrumb display

### Interactive
- **Popup:** Modal overlays with custom triggers, animations, and positioning
- **Navigation:** Responsive menus with mobile toggle and dropdown support
- **Custom Code:** HTML, CSS, and JavaScript injection inside the editor
- **3D Viewer:** Interactive 3D models with camera controls and lighting

### Dynamic
- **Query:** Post lists with filtering, sorting, and pagination
- **Taxonomies:** Category and tag lists with custom styling
- **Users Query:** User lists with filtering and avatar display

### Utility
- **Logical Content:** Conditional display based on user role, device, or language
- **PX Controls:** Form elements and interactive components for custom layouts

## Block Controls

Every block includes the same set of controls, organized by category:

### Layout
- Alignment (horizontal and vertical)
- Dimensions (width, height, max-width, max-height)
- Spacing (margin and padding with per-device values)
- Position (static, relative, absolute, fixed)
- Display (block, flex, grid, inline, none)

### Style
- Colors (text, background, border, overlay)
- Typography (font family, size, weight, style, line height, letter spacing)
- Borders (width, style, color, radius)
- Effects (shadows, opacity, blur, transform)
- Animations (entrance, hover, scroll-driven)

### Responsive
- Per-device settings (mobile, tablet, desktop)
- Visibility toggles (hide on specific screen sizes)
- Adaptive spacing and sizing per breakpoint

## Theme Customization

The PDS Starter Theme uses a modular SASS structure:

```
sass/
├── _theme-info.scss     # Theme metadata
├── _theme-style.scss    # Main styles
├── assets/              # Fonts, icons
├── elements/            # Component overrides
└── patches/             # Fixes and overrides
```

Template parts for dynamic blocks are stored in `template-parts/`:

```
template-parts/
├── cards/             # Post card layouts for Query Block
├── cards-taxonomies/  # Layouts for Taxonomies Block
└── dynamic/           # Custom layouts for dynamic content
```

JavaScript customizations go in `style.js`, which runs alongside the Phenix front-end library.

## Version History

### v1.5.0 — Build System Cleanup
- Replaced deprecated `node-sass` with Dart `sass`
- Upgraded `ts-loader`, `webpack`, `typescript` for Node 20+ compatibility
- Removed babel packages that `@wordpress/scripts` already bundles
- Removed `@wordpress/server-side-render` and `@wordpress/blocks` from explicit dependencies (WordPress provides them at runtime)
- Added `.npmrc` so `npm install` works without flags on modern Node versions
- Block build auto-discovers blocks from `src/blocks/` instead of using a manual entry list

### v2.0.0 — Core Fixes
- **CSS variable trap removed:** Replaced nested CSS variable fallbacks (`var(--pdt-md, var(--pdt-lg, var(--pdt)))`) with flat generated classes. A PHP collector generates the exact CSS needed on `save_post` and outputs it in `wp_head`. No inline style bloat. Better browser performance on complex pages.
- **JavaScript core opened:** Added `Phenix.register()`, `Phenix.extend()`, and `Phenix.PhenixElements` access so external code can add methods without modifying the source. Added `.init()` and `.destroy()` lifecycle hooks for SPA framework integration.
- **SASS cleanup:** Removed `.pdt-custom`, `.pdb-custom`, `.pds-custom`, `.pde-custom` and margin equivalents. Custom spacing values are handled by the collector, not CSS variables.
- **Extension build support:** Multiple webpack entry points for compiling add-on files (e.g., `woocommerce.js`, `select.js`) as separate files that share the core global without duplicating it.

## License

GPL-2.0-or-later

## Author

Abdullah Ramadan — https://phenixthemes.com
