# Phenix Design System - Front-End Framework

The Phenix Design System front-end framework is a lightweight, modern CSS and JavaScript library designed for creating responsive, accessible, and beautiful web interfaces. This framework serves as the foundation for the Phenix WordPress plugin but can also be used independently for any web project.

## Overview

The Phenix front-end framework provides a comprehensive set of tools and components for building modern websites, with a focus on performance, flexibility, and ease of use.

## Key Features

- **Lightweight**: Core CSS is only 140KB (32KB gzipped), JavaScript is 80KB (30KB gzipped)
- **Modern Development**: Built with SASS and TypeScript for modern workflows
- **Advanced Animation System**: Scroll-driven animations with progress tracking and exit animations
- **3D Interactive Media**: Support for embedding and controlling interactive 3D models with Three.js
- **Integrated Third-Party Controls**: Slider, typewriter, parallax effects, and more specialized components
- **Flexible Grid System**: Includes both Flexbox and Masonry grid modes
- **Responsive Design**: Optimized for all device sizes with 5 breakpoints
- **RTL & LTR Support**: Full bidirectional text support for international websites
- **Performance Focused**: Fast loading and execution times

## Core Modules

### CSS Framework

#### Grid System
- **Flexbox Grid**: 12-column responsive grid system with gap control
- **Masonry Grid**: Dynamic grid layout for varied content sizes
- **Container System**: Boxed and fluid containers with responsive control
- **Spacing Utilities**: Comprehensive margin and padding utilities

#### Typography
- **Responsive Typography**: Font sizes that adapt to screen size
- **Text Utilities**: Alignment, decoration, transformation, and more
- **Font System**: Custom font integration with fallbacks
- **Vertical Rhythm**: Consistent spacing between text elements

#### Utilities
- **Display Properties**: Control element visibility across breakpoints
- **Positioning**: Static, relative, absolute, fixed, and sticky positioning
- **Colors & Backgrounds**: Extensive color system with light/dark modes
- **Borders & Shadows**: Customizable border and shadow utilities
- **Size Controls**: Width and height utilities with responsive options

### JavaScript Utilities

#### DOM Manipulation
- **Element Selection**: Simplified element selection and traversal
- **Attribute Management**: Get, set, and toggle element attributes
- **Class Management**: Add, remove, and toggle CSS classes
- **Events**: Attach, detach, and trigger event handlers

#### UI Effects
- **Scroll-Driven Animations**: Create advanced animations triggered by scroll position
  - **Progress Tracking**: Control animation progress based on scroll position
  - **Viewport Detection**: Trigger animations when elements enter or exit the viewport
  - **Exit Animations**: Define separate animations when elements leave the viewport
  - **Animation Delay**: Set staggered timing for groups of animated elements
- **3D Interactive Media**: Embed and control interactive 3D models with Three.js
  - **Model Viewer**: Display 3D models with pan, zoom, and rotate controls
  - **Multiple Format Support**: Support for GLTF, GLB, OBJ, and FBX formats
  - **Responsive Sizing**: Automatically adapt 3D content to different screen sizes
- **Transitions**: Create smooth transitions between element states
- **Viewport Detection**: Track when elements enter or exit the viewport
- **Lazy Loading**: Load images and other content only when needed

#### Integrated Third-Party Controls
- **Swiper Slider**: Advanced touch-enabled slider with multiple configuration options
  - **Responsive Breakpoints**: Configure different settings for various screen sizes
  - **Navigation Controls**: Customizable arrows, pagination, and scrollbar
  - **Effect Transitions**: Fade, cube, flip, and other transition effects
- **Typewriter Effect**: Create dynamic typing animations with customizable speed and text
- **Parallax Effects**: Create depth with elements that move at different speeds while scrolling
- **Masonry Layout**: Dynamic grid layouts for varied content sizes with no gaps
- **Lightbox Gallery**: Interactive image and video galleries with zoom and navigation

## UI Components

### Navigation
- **Navbar**: Responsive navigation bar with dropdown support
- **Sidebar**: Collapsible sidebar navigation
- **Breadcrumbs**: Path-based navigation indicators
- **Pagination**: Page navigation with various styles

### Content
- **Cards**: Flexible content containers with multiple variants
- **Lists**: Ordered, unordered, and description lists with styling options
- **Tables**: Responsive tables with sorting and filtering capabilities
- **Typography**: Headings, paragraphs, and text formatting

### Interactive Elements
- **Buttons**: Various styles, sizes, and states
- **Dropdowns**: Toggle dropdown menus and content
- **Tooltips**: Display informational tooltips on hover
- **Modals**: Create dialog boxes and popups
- **Tabs**: Organize content into tabbed interfaces
- **Accordions**: Collapsible content sections

### Forms
- **Inputs**: Text fields, textareas, and select menus
- **Checkboxes & Radios**: Custom styled selection controls
- **Switches**: Toggle switches for boolean options
- **File Uploads**: Custom file upload components
- **Validation**: Client-side form validation

## Installation

### NPM
```bash
npm install phenix-ui
```

### CDN
```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/phenix-ui@latest/dist/css/phenix.min.css" rel="stylesheet">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/phenix-ui@latest/dist/js/phenix.min.js"></script>
```

### Download
Download the latest release from the [GitHub repository](https://github.com/EngCode/phenix-ui).

## WordPress Integration

The Phenix front-end framework is also available as a WordPress plugin with additional features:

- **Gutenberg Blocks**: Custom blocks built on the framework
- **Theme Integration**: Seamless integration with WordPress themes
- **Admin Customization**: Style the WordPress admin interface

For the WordPress version, see the [Phenix Blocks plugin](https://github.com/EngCode/phenix-blocks).

## Changelog

### v1.3.0
- Added scroll-driven animations with progress tracking
- Integrated Three.js for 3D model display
- Improved responsive behavior for all components
- Added new utility classes for advanced layouts
- Fixed RTL support issues in grid system

### v1.2.0
- Added support for dark mode with automatic detection
- Improved accessibility for all components
- Added new animation effects and transitions
- Enhanced form validation with custom messages
- Fixed bugs in responsive grid system

### v1.1.0
- Updated CSS layout groups for better flexibility
- Rebuilt advanced select with React compatibility and multiple mode
- Improved lazy loading for counters and timers

## License

Copyright (c) 2016-present, [Abdullah Ramadan](https://phenixthemes.com/abdullah-ramadan).  
Licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Browser Support

| Firefox | Chrome | Safari | Opera | Edge | Internet Explorer |
|:-------:|:------:|:------:|:-----:|:----:|:-----------------:|
| v63+    | v84+   | v12+   | v64+  | v84+ | Not supported     |

## Credits

This project was created in 2016 under the code-name **Tornado UI** and was renamed to **Phenix Design System** in 2022.

- [Abdullah Ramadan](https://phenixthemes.com/abdullah-ramadan) - Phenix Founder
- [Phenix Themes](https://phenixthemes.com/) - Official website
