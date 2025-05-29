# Responsive Menu Block

## Overview

The Responsive Menu Block (registered as "Dynamic Menu" in the block inserter) is a versatile navigation component in the Phenix Design System. It provides multiple menu types including classic WordPress menus, taxonomy-based menus, and post-based menus. The block features responsive behavior with configurable mobile display modes and supports customizable dropdown effects, icons, and styling options.

## Key Features

- **Multiple Menu Types**: Support for classic WordPress menus, taxonomy-based navigation, and post-based navigation
- **Responsive Design**: Configurable mobile display with dropdown or offcanvas modes
- **Interactive Options**: Dropdown menus with hover or click activation
- **Custom Icons**: Configurable icons for menu items and dropdown indicators
- **Animation Effects**: Various transition effects for dropdown menus (slide, fade, custom)
- **Direction Control**: Support for both horizontal and vertical menu layouts
- **Count Badges**: Optional display of post count badges for taxonomy and post menus
- **Server-Side Rendering**: Menus are rendered on the server for optimal performance and SEO

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Dynamic Menu" or find it in the "Phenix Blocks" category
3. Add the Dynamic Menu block to your page
4. From the toolbar, select the menu type (Classic, Taxonomy, or Posts)
5. For Classic menus, select an existing WordPress menu from the dropdown
6. For Taxonomy menus, select a taxonomy to display its terms as menu items
7. For Posts menus, select a post type and set the number of items to display
8. Configure additional options like responsive behavior, icons, and dropdown effects

## Block Settings

### General Options

| Option | Description |
|--------|-------------|
| HTML Tag | Select the HTML element to use for the menu wrapper (nav, div, main, aside) |
| Menu Type | Choose between Classic (WordPress menu), Taxonomy (terms), or Posts |
| Menu ID | For Classic type: select a WordPress menu; For Taxonomy: select a taxonomy; For Posts: select a post type |

### Menu Display Options

| Option | Description |
|--------|-------------|
| Direction | Choose between vertical or horizontal menu layout |
| Hover Mode | When enabled, dropdowns open on hover instead of click |
| Responsive | Enable responsive behavior for mobile devices |
| Items Icon | Enable and select icons to display before menu items |
| Count Badge | Show post/term count badges next to menu items |
| With Terms | For Post menus: include taxonomy terms in the menu structure |

### Dropdown Options

| Option | Description |
|--------|-------------|
| Arrow Icon | Select the icon to indicate dropdown menus |
| Items Count | For Post/Taxonomy menus: set the maximum number of items to display |

### Responsive Options

| Option | Description |
|--------|-------------|
| Mobile Mode | Select how the menu behaves on mobile (dropdown or offcanvas) |
| Effect | Choose the animation effect for mobile menu (slide, fade, custom) |
| Trigger | Enable a toggle button for the mobile menu |

### Style Options

| Option | Description |
|--------|-------------|
| Text Color | Set the color for menu item text |
| Hover Color | Set the color for menu items on hover |
| Background | Set the background color or gradient for the menu |
| Hover Background | Set the background for menu items on hover |
| Typography | Control font size, weight, and other text properties |

### Technical Implementation

The Responsive Menu block is implemented with server-side rendering for optimal performance and SEO. The PHP rendering function handles different menu types:

1. **Classic WordPress Menus**: Uses `wp_nav_menu()` to render standard WordPress menus

2. **Taxonomy Menus**: Dynamically generates menu items from taxonomy terms using `get_terms()`

3. **Post Menus**: Creates menu items from posts of a selected post type using `WP_Query`

## Implementation Examples

The Dynamic Menu block can be used in various ways based on the menu type and configuration. Below are descriptions of common implementations based on the actual block functionality.

### Classic WordPress Menu

This implementation uses an existing WordPress menu:

- **Configuration**: 
  - Menu Type: Classic
  - Menu ID: Select an existing WordPress menu
  - HTML Tag: nav
  - Arrow Icon: far fa-angle-down
  - Hover Mode: Enabled for dropdown on hover

### Taxonomy-Based Navigation

This implementation creates a menu from taxonomy terms:

- **Configuration**:
  - Menu Type: Taxonomy
  - Menu ID: Select a taxonomy (e.g., category, tag, custom taxonomy)
  - Direction: Horizontal or Vertical
  - Count Badge: Enabled to show post counts
  - With Terms: Enabled to show child terms as dropdown items

### Post-Based Navigation

This implementation creates a menu from posts:

- **Configuration**:
  - Menu Type: Posts
  - Post Type: Select a post type (e.g., post, page, custom post type)
  - Items Count: Set number of posts to display
  - Items Icon: Enabled with custom icon (e.g., far fa-file)

### Responsive Mobile Menu

This implementation focuses on mobile display options:

- **Configuration**:
  - Responsive: Enabled
  - Mobile Mode: Dropdown or Offcanvas
  - Effect: Slide or Fade
  - Trigger: Enabled to show toggle button

## Common Use Cases

### Main Site Navigation

A classic WordPress menu used for primary site navigation with responsive behavior:

- **Configuration**:
  - Menu Type: Classic
  - Menu ID: primary-menu
  - Responsive: Enabled
  - Mobile Mode: Dropdown
  - Direction: Horizontal
  - Arrow Icon: far fa-angle-down

### Category Navigation

A taxonomy-based menu showing blog categories with post counts:

- **Configuration**:
  - Menu Type: Taxonomy
  - Menu ID: category
  - Count Badge: Enabled
  - Items Icon: far fa-folder
  - Direction: Vertical

### Recent Posts Navigation

A post-based menu showing recent posts:

- **Configuration**:
  - Menu Type: Posts
  - Post Type: post
  - Items Count: 5
  - Items Icon: far fa-file-alt

## Best Practices

1. **Mobile-First Approach**: Design your menu with mobile users in mind first, then enhance for larger screens

2. **Clear Navigation**: Keep menu items clear and concise, avoiding overly complex nested structures

3. **Visual Feedback**: Provide clear visual cues for active items, hover states, and dropdown indicators

4. **Accessibility**: Ensure the menu is fully keyboard navigable and includes proper ARIA attributes

5. **Performance**: Be mindful of animation effects that might impact performance, especially on mobile devices

6. **Testing**: Test your menu thoroughly across different devices and screen sizes

7. **Consistency**: Maintain consistent styling and behavior with the rest of your site's design system

## Related Blocks

- [Container Block](./container-block.md) - For positioning the menu within layouts
- [Grid Row Block](./grid-row-block.md) - For creating header layouts with menus
- [Logo Block](./logo-block.md) - For adding a logo alongside the menu

