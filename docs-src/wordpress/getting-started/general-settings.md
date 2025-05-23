# General Settings

After installing the Phenix Blocks plugin, the next step is to configure the design system settings to match your project requirements. This page explains how to access and configure the Phenix Blocks General Settings from the WordPress Dashboard.

## Accessing Settings

To access the Phenix Blocks settings, navigate to the WordPress Dashboard and click on **Design System** in the main menu. This will take you to the Phenix Blocks settings page with three main tabs: Design Fonts, Phenix Blocks, and Optimization.

<!-- Image placeholder for Phenix Blocks Menu -->

## Design Fonts

The Design Fonts tab allows you to customize the typography of your website:

- **Primary Font (LTR)**: Set the main font for headings and important text elements in left-to-right languages
- **Secondary Font (LTR)**: Set the font for body text and general content in left-to-right languages
- **Style Font (LTR)**: Additional font for special design cases in left-to-right languages
- **Primary Font (RTL)**: Set the main font for headings in right-to-left languages
- **Secondary Font (RTL)**: Set the font for body text in right-to-left languages
- **Style Font (RTL)**: Additional font for special design cases in right-to-left languages
- **Icons Font**: Choose between UI Icons, Font Awesome v5, or Font Awesome v6
- **Google Fonts Integration**: Toggle to enable or disable Google Fonts integration

<!-- Image placeholder for Design Fonts Settings -->

## Phenix Blocks

The Phenix Blocks tab provides granular control over which blocks are available in the editor:

- **Block Management**: Enable or disable specific Phenix blocks to streamline the editor experience
- **Performance Optimization**: Disable unused blocks to improve editor performance

The blocks are organized into four categories for easier management:

1. **Layout Blocks**: Container, Group, Logo, Navigation Menu, Button, Grid/Row, Grid/Column
2. **Content Blocks**: Query, Taxonomies Query, Theme Part, Multimedia Element, Icon Block, Text Elements, Text List Item
3. **Interactive Blocks**: Design Code, Logical Content, Users Query, Popups Block, Tabs Block, Accordion Block, Dropdown Block
4. **Special Blocks**: Page Head, Progress Block, Google Maps, Countdown Timer, PDS Form, Language Switcher

<!-- Image placeholder for Blocks List Settings -->

## Optimizations

The Optimizations tab provides powerful performance enhancement options:

- **Core Optimization**:
  - **Phenix CDN**: Toggle to use CDN for Phenix assets
  - **Admin UI Style**: Toggle custom styling for the WordPress admin area
  - **Remove jQuery**: Option to remove jQuery from the front-end
  - **Header Optimizer**: Clean up unnecessary code in the header
  - **GB Blocks Optimizer**: Optimize Gutenberg blocks loading
  - **Clean Comments CSS**: Remove unnecessary CSS for comments

- **Plugins Optimization**:
  - **Contact Form 7**: Optimize Contact Form 7 plugin if installed
  - **Newsletter CSS**: Optimize Newsletter plugin CSS if installed
  - **Enable WooCommerce**: Toggle WooCommerce support
  - **WooCommerce JS**: Optimize WooCommerce JavaScript
  - **WooCommerce CSS**: Optimize WooCommerce CSS

- **Loading Screen**:
  - **Type**: Choose between image or custom code for loading screen
  - **Loading Text**: Customize the text shown during loading
  - **Background**: Set the background color for the loading screen
  - **Custom Loading**: Toggle to enable custom loading screen
  - **Custom Code**: Add custom HTML/CSS for the loading animation

- **Other Options**:
  - **Post Excerpt Length**: Set the default length for post excerpts

<!-- Image placeholder for Optimization Settings -->

## Theme Customization

Phenix Blocks is designed to work with the WordPress block editor and Full Site Editor:

### Site Editor

1. Go to **Appearance → Editor**
2. Use the Site Editor to customize your entire site's appearance
3. Edit templates, template parts, and styles
4. Create and modify global styles that apply across your site

### Global Styles

Customize site-wide design elements:

1. In the Site Editor, click the **Styles** icon (paintbrush) in the top-right corner
2. Customize global settings for:
   - Colors (text, background, links)
   - Typography (font family, size, line height)
   - Layout (content width, spacing)
   - Borders and effects
3. Changes made here will apply across your entire site

### Theme.json Configuration

For developers, you can customize the theme through the theme.json file:

1. The theme.json file controls the available options in the Site Editor
2. You can define custom color palettes, font sizes, and other theme settings
3. This provides a consistent design system across your site
4. Changes to theme.json will affect what options are available to users in the editor

## Data Manager

Phenix Blocks includes a powerful Data Manager that helps you create and manage custom content types:

1. Go to **Design System → Data Manager**
2. From here you can create and manage:
   - Custom Post Types
   - Custom Taxonomies
   - Custom Fields (Meta Boxes)
   - Block Patterns
   - Template Parts
   - Menu Locations

This feature is particularly useful for developers creating complex websites with custom content structures.

## Documentation

For comprehensive documentation on using Phenix Blocks:

1. Go to **Design System → Documentation**
2. Browse through the available documentation sections
3. Find tutorials, examples, and reference materials

The documentation includes both user guides for content creators and technical documentation for developers.

