# Phenix Design System

## The Ultimate WordPress Block Editor Enhancement

Phenix Design System is a comprehensive solution that transforms WordPress into a powerful website builder with advanced blocks, styling controls, and developer tools. Version 1.3.0 brings enhanced performance, new features, and improved stability.

[📚 Documentation](https://engcode.github.io/phenix-blocks/) | [💻 GitHub Repository](https://github.com/EngCode/phenix-blocks) | [🎨 Starter Theme](https://github.com/EngCode/pds-starter-free)

## What is Phenix Design System?

Phenix Design System (`pds-blocks`) is a complete ecosystem for WordPress that combines a robust front-end framework with seamless WordPress integration. It enhances the block editor with everything needed to build modern, responsive websites without writing code.

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

## Installation

### Plugin Installation

1. Download the plugin from [GitHub](https://github.com/EngCode/phenix-blocks)
2. Upload the plugin files to the `/wp-content/plugins/pds-blocks` directory
3. Activate the plugin through the 'Plugins' menu in WordPress

### Theme Installation

1. Download the [PDS Starter Theme](https://github.com/EngCode/pds-starter-free)
2. Upload the theme to the `/wp-content/themes/` directory
3. Activate the theme through the 'Appearance' menu in WordPress

### Requirements

- WordPress 6.0 or higher
- PHP 7.4 or higher
- Block-based theme (preferably the PDS Starter Theme)

### Important Note

This plugin works best with the PDS Starter Theme. At minimum, you should use the `theme.json` file from the starter theme to ensure proper color controls and block styling integration.

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

## Changelog

### Version 1.2.0 Revamped

**Performance & Optimization**
- Improve assets loading and disable the JS hack
- Refactoring Core Counter Function
- Replace SplideJS with Swiper Slider
- Refactor Phenix Core Class Methods
- Improving Colors Panel Performance
- Improving Select Elements Performance in Editor
- Improving Select Data Performance in Editor
- Refactoring icons Panel and improve Performance in Editor

**New Features**
- Add New Style Font Option
- Upgrade taxonomies query and support sub terms
- Add Support Terms as Dropdowns for Taxonomies in Dynamic Menu
- Add Posts Managers Tools
- Add post duplicating method
- Add Show Columns in the Admin Posts Table Functions
- Add Posts JSON Exporter Simple Tool

**Bug Fixes**
- Fix Icon Block Free Width
- Lightbox Slider Fix
- Fix Background not Rendering in Editor
- Fix Grid Flow Reverse not Wrapping
- Media Uploader Fix for Metaboxes
- Fix Metaboxes Repeater
- Fix Media Uploader in Editor
- Fix Core Animations Effects Bouncing
- Fix Fading Slider in RTL
- Fix Taxonomies ID and Link Controller Bugs
- Fix Media Uploader in Optimization Tab
- Fixing Dropdown Menus in the Toolbar

**System Changes**
- Disable Cron Jobs Scheduler
- Cleanup the Plugin for Public
- Disable Custom Login
- Disable core blocks remover
- SEO Useless methods removed
- Remove Position, Padding, Margin Limits
- Import Posts from a Json File
- Remove Posts from any Type Tool
- Improving component builders, and view scripts

### Version 1.1.1

**New Features**
- Add custom loading page from theme option
- Add Poster/Cover image for video background
- Add Auto Width option for sliders

**Bug Fixes**
- Reset Form Elements when submit is complete
- Custom Code Font Improve
- Fix Multimedia URL input
- Fix Multimedia not showing on insert
- Fix embed media from youtube short link
- New workaround for Editor assets loading while switching between templates

### Version 1.1.0

**Performance & Optimization**
- Improve SEO fixers and speed up the process
- Improve performance and loading process for the main JS
- Divide core phenix CSS into smaller parts [Core / Utilities]
- Add and activate Phenix Core from CDN
- Improve Editor assets loader

**New Features**
- Switch CF7 Form Posting to JS Fetching for custom validation
- Add new Animations
- Improve Audio Trigger Buttons

**Bug Fixes**
- Remove old CF7 Success redirect method
- Improve Media Uploader, and add placeholder for none images
- Fix Sliders Drag Bug, Gallery Slider Support
- Fix icons options position, label mode
- Fix Background video z-index
- Fix Animated Number Counting
- Improve validation when controls are wrapped

[View all previous versions in the complete changelog](https://github.com/EngCode/phenix-blocks/blob/main/readme.txt)

## Get Involved

Phenix Design System is an open-source project, and we welcome contributions from the community:

- **[Report Issues](https://github.com/EngCode/phenix-blocks/issues)**: Help us identify and fix bugs
- **[Suggest Features](https://github.com/EngCode/phenix-blocks/discussions)**: Share your ideas for new features
- **[Contribute Code](https://github.com/EngCode/phenix-blocks/pulls)**: Submit pull requests to improve the system
- **[Documentation](https://github.com/EngCode/phenix-blocks/tree/main/docs-src)**: Help improve our documentation

## License

Copyright (c) 2016-present, [Abdullah Ramadan](https://phenixthemes.com/abdullah-ramadan).  
Licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT).

### Version 1.2.0 Revamped
1. Disable Cron Jobs Scheduler
2. Cleanup the Plugin for Public
3. Disable Custom Login
4. improve assets loading, and disable the JS hack
5. Fix Icon Block Free Width
6. Refactoring Core Counter Function
7. Lightbox Slider Fix
8. Fix Background not Rendering in Editor
9. Fix Grid Flow Reverse not Wrapping
10. Media Uploader Fix for Metaboxes
11. Fix Metaboxes Repeater
12. Fix Media Uploader in Editor
13. Add New Style Font Option
14. Disable core blocks remover
15. Upgrade taxonomies query and support sub terms
16. Add Support Terms as Dropdowns for Taxonomies in Dynamic Menu
17. Fix Core Animations Effects Bouncing
18. Fix Fading Slider in RTL
19. Add Posts Managers Tools
20. Remove Posts from any Type Tool
21. Import Posts from a Json File
22. Add Show Columns in the Admin Posts Table Functions
23. Add Posts JSON Exporter Simple Tool
24. Add post duplicating method
25. Improving component builders, and view scripts
26. Fixing Dropdown Menus in the Toolbar
27. Fix Media Uploader in Optimization Tab
28. Replace SplideJS with Swiper Slider
29. Refactor Phenix Core Class Methods
30. Fix Taxonomies ID and Link Controller Bugs
31. SEO Useless methods removed
32. Improving Colors Panel Performance
33. Improving Select Elements Performance in Editor
34. Improving Select Data Performance in Editor
35. Refactoring icons Panel and improve Performance in Editor
36. Remove Position, Padding, Margin Limits

### Version 1.1.1
1. Reset Form Elements when submit is complete
2. Custom Code Font Improve
3. Add custom loading page from theme option
4. New workaround for Editor assets loading while switching between templates
5. Fix Multimedia URL input
6. Fix Multimedia not showing on insert
7. Fix embed media from youtube short link
8. Add Poster/Cover image for video background
9. Add Auto Width option for sliders

### Version 1.1.0
1. Switch CF7 Form Posting to JS Fetching for custom validation
2. Improve SEO fixers and speed up the process
3. Remove old CF7 Success redirect method
4. Improve Media Uploader, and add placeholder for none images
5. Improve performance and loading process for the main JS
6. Divide core phenix CSS into smaller parts [Core / Utilities]
7. Add and activate Phenix Core from CDN
8. Improve Editor assets loader
9. Improve Audio Trigger Buttons
10. Fix Sliders Drag Bug, Gallery Slider Support
11. Fix icons options position, label mode
12. Fix Background video z-index
13. Fix Animated Number Counting
14. Add new Animations
15. Improve validation when controls are wrapped

[View all previous versions in the complete changelog](https://github.com/EngCode/phenix-blocks/blob/main/readme.txt)