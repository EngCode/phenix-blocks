# Theme Customizing

This guide will help you effectively customize your website using the Phenix Design System. Understanding the key WordPress concepts and tools available in the Phenix Blocks plugin will enable you to create beautiful, responsive websites without writing code.

## Site Editor

The Site Editor is a powerful interface introduced in WordPress v5.8 that allows you to customize your entire site using blocks. With Phenix Blocks, you can create and modify:

- **Templates**: Design layouts for different content types (posts, pages, archives)
- **Template Parts**: Create reusable components like headers and footers
- **Global Styles**: Set site-wide design elements like colors and typography

To access the Site Editor:

1. Go to **Appearance → Editor** in your WordPress dashboard
2. Use the navigation panel to switch between templates and template parts
3. Find all Phenix Blocks in the **Design** category of the block inserter

<!-- Image placeholder for Site Editor -->

### Block Categories

Phenix Blocks are organized into logical categories in the block inserter:

- **Layout Blocks**: Container, Grid Row, Grid Column, Group
- **Content Blocks**: Text, Media, Icon, Button, Logo
- **Interactive Blocks**: Popup, Navigation, Custom Code
- **Dynamic Blocks**: Query, Taxonomies, Users

<!-- Image placeholder for Blocks List in Editor -->

## Global Styles

Phenix Blocks provides powerful global styling options that allow you to create a consistent design across your entire site.

### Color Schema

To customize your site's color palette:

1. In the Site Editor, click the **Styles** icon (paintbrush) in the top-right corner
2. Select **Colors** from the sidebar menu
3. Customize the following color options:
   - **Text**: Set default text colors
   - **Background**: Define site-wide background colors
   - **Links**: Set colors for links and hover states
   - **Accent**: Define primary and secondary brand colors

Changes made here will apply across your entire site, ensuring design consistency.

### Typography

To customize your site's typography:

1. In the Site Editor, click the **Styles** icon
2. Select **Typography** from the sidebar menu
3. Customize font families, sizes, weights, and line heights

<!-- Image placeholder for Style Colors -->

## Site Templates

Templates in the Site Editor allow you to customize the layout and design of different page types across your site.

### Working with Templates

1. In the Site Editor, click on **Templates** in the navigation panel
2. You'll see a list of available templates for different content types:
   - **Single**: Templates for individual posts, pages, or custom post types
   - **Archive**: Templates for category, tag, or custom taxonomy archives
   - **Index**: The default template used when no specific template exists
   - **404**: The template shown when a page is not found
   - **Search**: The template for search results

3. Select a template to edit or click **Add New** to create a custom template
4. Use Phenix Blocks to build your template layout
5. Save your changes to apply the template across your site

<!-- Image placeholder for Site Templates -->

## Patterns and Template Parts

Phenix Blocks provides powerful tools for creating reusable components that help maintain consistency across your site.

### Block Patterns

Block Patterns are pre-designed sections that you can insert into your content and customize:

1. In the editor, click the **+** icon to open the block inserter
2. Select the **Patterns** tab
3. Browse patterns by category (Sections, Headers, Cards, etc.)
4. Click on a pattern to insert it into your content
5. Customize the pattern to match your design needs

Phenix includes patterns for common design elements like hero sections, feature grids, testimonials, and more.

### Synced Patterns

Synced Patterns are reusable blocks that update everywhere they're used:

1. Create a block or section you want to reuse
2. Select it and click the **⋮** menu
3. Choose **Create Synced Pattern**
4. Give it a name and save
5. Now you can insert this pattern anywhere, and changes will sync across all instances

### Template Parts

Template Parts are reusable components for site-wide elements:

1. In the Site Editor, click on **Template Parts** in the navigation panel
2. You'll see default parts like Header and Footer
3. Click **Add New** to create custom template parts
4. Build your template part using Phenix Blocks
5. Save and use it across multiple templates

<!-- Image placeholder for Patterns and Template Parts -->

## Multi-Language Support

Phenix Blocks is compatible with popular translation plugins like WPML and Polylang:

1. Install and configure your preferred translation plugin
2. Ensure Template Parts and Synced Patterns are translated for each language
3. Use the Logical Content block to display different content based on language
4. For RTL languages, Phenix automatically adjusts layouts and typography

## Block Editor

The Block Editor is the primary interface for creating and editing content in WordPress. Phenix Blocks enhances this editor with powerful design components and controls.

### Block Editor Interface

The Block Editor has three main areas:

1. **Content Area**: The central canvas where you build your content
2. **Top Toolbar**: Contains formatting options and block-specific controls
3. **Settings Sidebar**: Shows block settings and page/post options
4. **Block Navigation**: At the bottom, shows your current position in the block hierarchy

### Working with Phenix Blocks

1. Click the **+** icon to open the block inserter
2. Find Phenix Blocks in the **Design** category
3. Select a block to add it to your content
4. Use the settings sidebar to customize the block's appearance and functionality

### Advanced Block Controls

Phenix Blocks provides enhanced controls for each block:

- **Layout Controls**: Adjust width, height, alignment, and positioning
- **Style Controls**: Set colors, backgrounds, borders, and effects
- **Typography Controls**: Customize text appearance and formatting
- **Responsive Controls**: Set different styles for mobile, tablet, and desktop
- **Animation Controls**: Add entrance animations and hover effects

<!-- Image placeholder for Block Editing -->

## Classic Editor Compatibility

While Phenix Blocks is designed primarily for the Block Editor, it maintains compatibility with the Classic Editor for specific use cases.

### When You Might Use Classic Editor

- **WooCommerce Products**: Managing product data and variations
- **Custom Post Types**: Working with specialized data entry forms
- **Legacy Plugins**: Using plugins that haven't been updated for the Block Editor

### Phenix Features in Classic Editor

Even when using the Classic Editor, you'll still benefit from Phenix features like:

- Typography and styling enhancements
- Performance optimizations
- Custom fields and meta boxes
- Frontend design system consistency

## Advanced Customization

### Custom CSS

Phenix Blocks uses a utility-first approach that minimizes the need for custom CSS, but for advanced customization:

1. Go to **Appearance → Customize → Additional CSS** (for classic themes)
2. Or use the Custom Code block to add CSS directly to a page
3. Use Phenix's CSS utility classes as a foundation for your custom styles
4. Follow the naming conventions of Phenix utilities for consistency

### Custom Block Variations

Phenix blocks offer extensive customization options:

1. Select any block to view its settings in the sidebar
2. Explore the tabs for different customization categories:
   - **General**: Basic block settings
   - **Style**: Visual appearance options
   - **Advanced**: CSS classes and custom attributes
   - **Responsive**: Device-specific settings

### Creating Custom Templates

For specific content types or page layouts:

1. In the Site Editor, navigate to **Templates**
2. Click **Add New** to create a custom template
3. Select the template type and name it
4. Build your template using Phenix Blocks
5. Assign the template to specific content or make it the default

### Developer Extensions

Developers can extend Phenix Blocks with:

1. Custom block variations using the WordPress Block API
2. Custom block patterns and categories
3. Custom template parts and templates
4. PHP filters to modify block behavior
5. JavaScript extensions for advanced functionality

