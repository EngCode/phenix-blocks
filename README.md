# Phenix Blocks - WordPress Design System Plugin

![Phenix Blocks Banner](https://phenixthemes.com/px-plugins/pdb-01.png)

## Overview

Phenix Blocks is a comprehensive WordPress plugin that provides a complete design system for creating modern, responsive websites using the WordPress block editor (Gutenberg). The plugin enhances the WordPress editor with custom blocks, components, and developer tools to accelerate website development.

## Key Features

- **Complete Block Collection** - 20+ custom blocks including containers, grid systems, media elements, buttons, icons, navigation, and more
- **Advanced Animation System** - Built-in animation library with customizable effects, timing, and trigger options
- **Responsive Design Controls** - Fine-tune your layouts for any device with responsive controls for all blocks
- **Dynamic Data Integration** - Query and display content from posts, users, and custom taxonomies
- **Developer Tools** - Utilities for post management, data import/export, and site optimization
- **Performance Focused** - Lightweight core with optimized asset loading

## Documentation & Resources

| Resource | Link |
|---|---|
| Plugin Repository | [GitHub](https://github.com/EngCode/phenix-blocks) |
| Starter Theme | [PDS Starter Theme](https://github.com/EngCode/pds-starter-free) |
| Editor Handbook | [Blocks Documentation](https://phenixthemes.notion.site/Phenix-Blocks-Documentation-b7ae033ce7484e8f98209d7587a94792?pvs=74) |
| Design System Docs | [Code Handbook](https://phenixthemes.notion.site/Phenix-Design-System-efcfa4d3839946989a4f94ee5e0480c3?pvs=74) |
| Official Website | [Phenix Themes](https://phenixthemes.com/demo/) |

## Block Library

The plugin includes the following blocks:

- **Layout Blocks**: Container, Group, Grid Row, Grid Column
- **Content Blocks**: Text, Text List Item, Custom Code, Page Head
- **Media Blocks**: Media Element, Icon Element, Logo
- **Interactive Blocks**: Button, Navigation, Popup
- **Dynamic Blocks**: Query, Users Query, Taxonomies, Theme Part
- **Utility Blocks**: Logical Block, PX Controls

![Block List](https://phenixthemes.com/px-plugins/block-list.png)

## Core System Features

- **Responsive Framework** - Mobile-first design with breakpoint controls
- **Animation System** - Customizable animation effects with scroll triggers
- **Dynamic Data** - Query and display content from various sources
- **Theme Integration** - Works seamlessly with compatible themes
- **Developer API** - Extend and customize with developer hooks and filters

![Core Features](https://phenixthemes.com/px-plugins/features-1.png)
![Design Features](https://phenixthemes.com/px-plugins/features-2.png)

## Developer and Data Tools

The plugin includes advanced tools for developers:

- **Asset Optimization** - Optimize CSS and JavaScript loading
- **Post Management** - Bulk manage posts, import/export content
- **Data Tools** - JSON import/export for posts and settings
- **Admin Enhancements** - Custom admin columns, post duplication

![Developer Tools](https://phenixthemes.com/px-plugins/pdb-09.png)
![Data Tools](https://phenixthemes.com/px-plugins/pdb-15.png)

## Requirements

- WordPress 6.0 or higher
- Block-based theme (preferably a Phenix Design System theme)
- PHP 7.4 or higher

## Installation

1. Download the plugin from [GitHub](https://github.com/EngCode/phenix-blocks)
2. Upload the plugin files to the `/wp-content/plugins/pds-blocks` directory
3. Activate the plugin through the 'Plugins' menu in WordPress
4. For best results, use with a compatible theme like [PDS Starter Theme](https://github.com/EngCode/pds-starter-free)

## Important Notes

![Warning](https://phenixthemes.com/px-plugins/pdb-07.jpeg)

This plugin works best with a Phenix Design System compatible theme. At minimum, you should use the `theme.json` file from the starter theme to ensure proper color controls and block styling integration.

## Recent Updates

### Version 1.3.0 Performance & Stability
1. Standardized viewport-based loading patterns across components
2. Fixed inconsistent inView usage in timer component
3. Improved progress component loading states
4. Enhanced slider and swiper integration with proper loading states
5. Added proper cleanup of observers and event listeners
6. Fixed animation timing and trigger issues
7. Improved media loading in sliders and galleries
8. Enhanced error handling and loading states
9. Optimized performance for viewport detection
10. Added consistent loading state handling
11. Fixed media component lazy loading implementation
12. Improved slider navigation and controls
13. Enhanced accessibility for interactive components
14. Fixed memory leaks from uncleaned observers
15. Standardized loading state classes and behavior
16. Refactored animation handling with improved viewport visibility checks
17. Added exit animation support for smoother transitions
18. Enhanced scroll-driven animation logic and performance
19. Improved animation sequencing with stagger options
20. Streamlined animation configuration and cleanup
21. Optimized IntersectionObserver usage for better performance
22. Enhanced animation control with refined CSS properties
23. Added scroll-driven animations support
24. Improved animation order tracking and delay handling
25. Removed legacy code and unused options for better maintainability

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

## License

Copyright (c) 2016-present, [Abdullah Ramadan](https://phenixthemes.com/abdullah-ramadan).  
Licensed under the terms of the [MIT License](https://opensource.org/licenses/MIT).

---

## <a name="changelog"></a>Changelog

### Version 1.3.0 Performance & Stability
1. Standardized viewport-based loading patterns across components
2. Fixed inconsistent inView usage in timer component
3. Improved progress component loading states
4. Enhanced slider and swiper integration with proper loading states
5. Added proper cleanup of observers and event listeners
6. Fixed animation timing and trigger issues
7. Improved media loading in sliders and galleries
8. Enhanced error handling and loading states
9. Optimized performance for viewport detection
10. Added consistent loading state handling
11. Fixed media component lazy loading implementation
12. Improved slider navigation and controls
13. Enhanced accessibility for interactive components
14. Fixed memory leaks from uncleaned observers
15. Standardized loading state classes and behavior

Recent Development Updates:
16. Refactored animation handling with improved viewport visibility checks
17. Added exit animation support for smoother transitions
18. Enhanced scroll-driven animation logic and performance
19. Improved animation sequencing with stagger options
20. Streamlined animation configuration and cleanup
21. Optimized IntersectionObserver usage for better performance
22. Enhanced animation control with refined CSS properties
23. Added scroll-driven animations support
24. Improved animation order tracking and delay handling
25. Removed legacy code and unused options for better maintainability

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