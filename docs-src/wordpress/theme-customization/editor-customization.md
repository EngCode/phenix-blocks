# Editor Customization

The Phenix Starter Theme fully supports the WordPress Full Site Editor, allowing you to customize your site's appearance without writing code. This guide explains how to use the editor interface to customize your theme.

## Accessing the Site Editor

1. In your WordPress admin, go to **Appearance → Editor**
2. This opens the Full Site Editor where you can customize your entire site

## Editing Templates

1. In the Site Editor, click on the **WordPress logo** in the top left corner
2. Select **Templates** to see a list of all available templates (Home, Single Post, Archive, etc.)
3. Click on any template to edit its layout and content
4. Use the block inserter (+ button) to add new blocks to your templates
5. Save your changes when finished

## Customizing Template Parts

1. From the Site Editor, click the **WordPress logo** and select **Template Parts**
2. Choose a template part to edit (Header, Footer, Sidebar, etc.)
3. Modify the existing blocks or add new ones
4. Template parts are reused across multiple templates for consistent design

## Using Global Styles

1. In the Site Editor, click the **Styles icon** (paintbrush) in the top-right corner
2. This opens the Global Styles panel with limited options:
   - **Colors**: Customize text, background, and link colors

**Important Note**: In Phenix theme, several global settings are controlled differently:
   - **Typography**: Font settings are managed through the **Design System → General Settings → Design Fonts** panel, not in the Global Styles
   - **Layout**: Layout settings are controlled on a per-block basis through the Phenix Controls panel
   - **Blocks**: WordPress core blocks can be enabled/disabled in the **Design System → General Settings → Phenix Blocks** panel

## Customizing Individual Blocks

1. Select any block in the editor
2. Block controls are available in two locations:
   - **Block Toolbar** (appears above the selected block):
     - HTML tag selection (div, section, article, etc.)
     - Container size options
     - Section/container toggle
     - Layout controls (via dropdown menus)
     - Flexbox alignment options
     - Margin and padding controls
     - Position settings
     - Border options
     - Effects options
   - **Block Settings Sidebar** (right side of the screen):
     - HTML ID and anchor settings
     - General style options and support toggles
     - Typography settings
     - Animation controls
     - Block-specific special settings
     - Advanced configuration options
3. Toggle between **Settings** and **Styles** tabs in the sidebar for different customization options

## Using Phenix Design System Controls

Phenix Blocks adds powerful design controls to the editor:

1. Select any block to access Phenix controls in two locations:
   - **Extended Toolbar Controls** (BlockControls): 
     - HTML tag selection dropdowns
     - Container size options
     - Section/container toggles
     - Dropdown menus for layout settings
     - Flexbox alignment buttons
     - Margin and padding controls with responsive options
     - Position settings with responsive options
     - Border controls with responsive options
     - Effects options
   - **Phenix Controls Panel** in the sidebar (InspectorControls):
     - HTML ID and anchor settings
     - General style options and support toggles
     - Typography settings with responsive options
     - Animation controls (entrance, hover, scroll)
     - Block-specific special settings
     - Advanced configuration options

## Creating and Using Block Patterns

1. Create a block arrangement you want to reuse
2. Select all the blocks and click the **three dots** menu
3. Choose **Create pattern** and give it a name and category
4. Your pattern will now be available in the block inserter under the Patterns tab

## Using the Block Editor with Your Customized Theme

After customizing your theme, you can use the WordPress block editor to build pages and posts with your custom styles and templates.

1. Go to **Pages** or **Posts** and edit or create a new item
2. Use the block editor to add content blocks
3. Find Phenix Blocks in the **Design** category of the block inserter
4. For dynamic content, use the Query, Taxonomies, Users Query, or Theme Part blocks
5. Select your custom templates in the block settings

The block editor will automatically apply your theme's styles and use your custom template parts for dynamic blocks, creating a seamless and consistent design across your website.
