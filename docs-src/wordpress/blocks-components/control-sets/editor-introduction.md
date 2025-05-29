# WordPress Editor Introduction

## Overview

The WordPress editing experience has evolved significantly with the introduction of block-based editing. The Phenix Design System integrates seamlessly with WordPress's modern editors, providing a comprehensive set of blocks and controls that enhance your content creation capabilities. This guide introduces the different WordPress editors you'll encounter when working with the Phenix Design System.

## Block Editor (Gutenberg)

The Block Editor, introduced in WordPress 5.0, is the primary interface for creating and editing content. When working with the Phenix Design System, you'll find all Phenix blocks in the "Design" category of the block inserter.

<!-- Image placeholder for Block Editor Interface -->

### Key Areas of the Block Editor

1. **Content Area**: The main canvas where you create and arrange your content using blocks.

2. **Top Toolbar**: Contains contextual controls that change based on the currently selected block. This toolbar provides quick access to common formatting options and block-specific settings.

3. **Block Inserter**: The "+" button that opens a panel of available blocks, organized by categories. Phenix blocks are found in the "Design" category.

4. **Settings Sidebar**: Houses additional block settings and document settings. Toggle between block and document settings using the tabs at the top of the sidebar.
   - **Block Settings**: Shows options specific to the currently selected block
   - **Document Settings**: Shows options for the entire page or post

5. **Block Navigation**: Located at the bottom of the editor, this shows your current position in the block hierarchy and allows you to navigate between nested blocks and their parent containers.

### Working with Phenix Blocks

Phenix blocks follow a consistent pattern for settings and controls that are divided between two main areas:

1. **Toolbar Controls** (BlockControls):
   - HTML tag selection (div, section, article, etc.)
   - Container size options
   - Section/container toggle
   - Layout controls (via dropdown menus)
   - Flexbox alignment options
   - Margin and padding controls
   - Position settings
   - Border options
   - Effects options

2. **Sidebar Controls** (InspectorControls):
   - HTML ID and anchor settings
   - General style options and support toggles
   - Typography settings
   - Animation controls
   - Block-specific special settings
   - Advanced configuration options

## Site Editor (Full Site Editing)

The Site Editor, introduced in WordPress 5.8, extends the block paradigm to the entire site. It allows you to edit templates, template parts, and create global styles. The Phenix Design System is fully compatible with Full Site Editing, providing blocks and controls that work seamlessly in this environment.

<!-- Image placeholder for Site Editor Interface -->

### Key Features of the Site Editor

1. **Template Editing**: Edit existing templates or create new ones for different parts of your site (single posts, archives, etc.)

2. **Template Parts**: Edit reusable sections like headers, footers, and sidebars

3. **Global Styles**: Define site-wide typography, colors, and layout settings

4. **Pattern Library**: Access and insert pre-designed block patterns

### Navigating the Site Editor

- Use the site navigation panel to switch between different templates and template parts
- The block inserter and settings sidebar work the same way as in the Block Editor
- Changes made in the Site Editor affect the entire site, not just individual pages or posts

## Classic Editor

While the Phenix Design System is optimized for the Block Editor, you may occasionally encounter the Classic Editor in specific contexts, particularly with plugins that haven't fully adopted the block paradigm.

<!-- Image placeholder for Classic Editor Interface -->

The Classic Editor provides a more traditional word processor-like interface with a single editing area and a toolbar at the top. When working with the Classic Editor:

- Follow the form fields and input areas provided
- Use the toolbar for basic formatting options
- Look for metaboxes below or beside the main content area for additional settings

## Block Controls Overview

The Phenix Design System extends WordPress's native block controls with a comprehensive set of additional options that provide fine-grained control over your content's appearance and behavior. These controls are organized into several categories and distributed between the toolbar and sidebar:

1. **Layout Controls**: Options for controlling the structure and arrangement of content
2. **Spacing Controls**: Margin and padding settings with responsive options
3. **Typography Controls**: Text styling options including font, size, weight, and more
4. **Visibility Controls**: Options to show or hide content based on screen size
5. **Position Controls**: Controls for positioning elements within their containers
6. **Style Controls**: Visual styling options including colors, borders, and backgrounds
7. **Interactive Controls**: Settings for animations, transitions, and interactive behaviors

Each of these control categories is covered in detail in the following sections of the documentation.

## Best Practices

1. **Start with Structure**: Begin by setting up your layout structure using Container, Grid Row, and Grid Column blocks before adding content blocks

2. **Use Global Styles**: Leverage WordPress's global styles for consistent typography and colors across your site

3. **Mobile-First Approach**: Design for mobile first, then adjust for larger screens using responsive controls

4. **Group Related Blocks**: Use the Group block to organize related content blocks, making them easier to manage and style together

5. **Save Reusable Blocks**: Create reusable blocks for components you use frequently across your site

6. **Leverage Block Patterns**: Use and create block patterns for complex layouts that you need to repeat

7. **Preview Responsively**: Regularly preview your content at different screen sizes using the preview button in the editor

## Next Steps

Now that you're familiar with the WordPress editors, explore the specific block controls provided by the Phenix Design System:

- [Layout Options](./layout-options.md)
- [Responsive Margin](./responsive-margin.md)
- [Responsive Padding](./responsive-padding.md)
- [Typography Options](./typography-options.md)
- [And more in the sidebar navigation...](./responsive-display.md)

