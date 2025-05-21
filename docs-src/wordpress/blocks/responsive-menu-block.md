# Responsive Menu Block

## Overview

The Responsive Menu Block is an essential navigation component in the Phenix Design System that allows you to create flexible, mobile-friendly menus. This block automatically adapts to different screen sizes, transforming from a horizontal navigation bar on desktop to a compact mobile menu on smaller devices. It supports various menu styles, dropdown functionality, and customization options.

<!-- Image placeholder for Responsive Menu Block -->

## Key Features

- Fully responsive navigation that adapts to all screen sizes
- Multiple menu styles (horizontal, vertical, dropdown, offcanvas)
- Support for multi-level dropdown menus
- Customizable colors, typography, and spacing
- Mobile menu toggle button with custom icons
- Integration with WordPress menu system
- Animation effects for menu transitions
- Sticky menu option for fixed positioning

## How to Use

1. In the WordPress editor, click the "+" button to add a new block
2. Search for "Responsive Menu" or find it in the "Phenix Blocks" category
3. Add the Responsive Menu Block to your page
4. Select a WordPress menu to display
5. Customize the menu settings in the block sidebar

## Block Settings

### Menu Source Options

| Option | Description |
|--------|-------------|
| Menu Location | Select a registered WordPress menu location |
| Menu | Choose a specific WordPress menu to display |
| Custom Menu | Create a custom menu structure within the block |

### Layout Options

| Option | Description |
|--------|-------------|
| Menu Style | Choose between horizontal, vertical, or other menu styles |
| Mobile Breakpoint | Set the screen width at which the menu switches to mobile view |
| Mobile Menu Type | Select the mobile menu style (dropdown, offcanvas, fullscreen) |
| Menu Alignment | Set the horizontal alignment of the menu items |
| Item Spacing | Control the space between menu items |

### Style Options

| Option | Description |
|--------|-------------|
| Menu Background | Set the background color or gradient for the menu |
| Text Color | Set the color of menu item text |
| Active Item | Style options for the currently active menu item |
| Hover Effects | Configure how menu items appear on hover |
| Border | Add borders with custom color, width, and style |
| Border Radius | Add rounded corners to the menu container |

### Dropdown Options

| Option | Description |
|--------|-------------|
| Dropdown Trigger | Choose how submenus are triggered (hover, click) |
| Dropdown Animation | Select animation effect for dropdown appearance |
| Dropdown Width | Set the width of dropdown menus |
| Dropdown Background | Set the background color for dropdown menus |
| Dropdown Position | Control how dropdowns are positioned relative to parent items |

### Mobile Menu Options

| Option | Description |
|--------|-------------|
| Toggle Button | Style options for the mobile menu toggle button |
| Toggle Icon | Select an icon for the toggle button |
| Mobile Animation | Choose animation effect for mobile menu appearance |
| Close Button | Show/hide a dedicated close button for mobile menu |
| Overlay | Add a background overlay when mobile menu is open |

### Advanced Options

| Option | Description |
|--------|-------------|
| Sticky Menu | Make the menu stick to the top of the screen when scrolling |
| Sticky Offset | Set the distance from the top for sticky positioning |
| Z-Index | Control the stacking order of the menu |
| Custom Classes | Add custom CSS classes to the menu container |

## Examples

### Basic Horizontal Menu

A standard horizontal navigation menu:

```html
<!-- wp:phenix/responsive-menu {"menuLocation":"primary","menuStyle":"horizontal"} -->
<nav class="wp-block-phenix-responsive-menu px-navigation horizontal" data-menu-location="primary">
  <button class="navbar-toggler" type="button" aria-label="Toggle Navigation">
    <span class="toggler-icon"></span>
  </button>
  <div class="navbar-menu">
    <ul class="reset-list main-menu">
      <li class="menu-item current-menu-item"><a href="/">Home</a></li>
      <li class="menu-item"><a href="/about">About</a></li>
      <li class="menu-item"><a href="/services">Services</a></li>
      <li class="menu-item"><a href="/contact">Contact</a></li>
    </ul>
  </div>
</nav>
<!-- /wp:phenix/responsive-menu -->
```

### Menu with Dropdowns

A menu with multi-level dropdown navigation:

```html
<!-- wp:phenix/responsive-menu {"menuLocation":"primary","menuStyle":"horizontal","dropdownTrigger":"hover"} -->
<nav class="wp-block-phenix-responsive-menu px-navigation horizontal" data-menu-location="primary" data-dropdown-trigger="hover">
  <button class="navbar-toggler" type="button" aria-label="Toggle Navigation">
    <span class="toggler-icon"></span>
  </button>
  <div class="navbar-menu">
    <ul class="reset-list main-menu">
      <li class="menu-item current-menu-item"><a href="/">Home</a></li>
      <li class="menu-item menu-item-has-children">
        <a href="/services">Services <i class="fas fa-angle-down"></i></a>
        <ul class="sub-menu">
          <li class="menu-item"><a href="/services/web-design">Web Design</a></li>
          <li class="menu-item"><a href="/services/development">Development</a></li>
          <li class="menu-item"><a href="/services/marketing">Marketing</a></li>
        </ul>
      </li>
      <li class="menu-item"><a href="/about">About</a></li>
      <li class="menu-item"><a href="/contact">Contact</a></li>
    </ul>
  </div>
</nav>
<!-- /wp:phenix/responsive-menu -->
```

### Styled Menu with Custom Colors

A menu with custom styling:

```html
<!-- wp:phenix/responsive-menu {"menuLocation":"primary","menuStyle":"horizontal","menuBackground":"#2c3e50","textColor":"#ffffff","activeItemColor":"#3498db","itemSpacing":"md","borderRadius":"sm"} -->
<nav class="wp-block-phenix-responsive-menu px-navigation horizontal radius-sm" data-menu-location="primary" style="--menu-bg:#2c3e50;--text-color:#ffffff;--active-color:#3498db;--item-gap:15px">
  <button class="navbar-toggler" type="button" aria-label="Toggle Navigation">
    <span class="toggler-icon"></span>
  </button>
  <div class="navbar-menu">
    <ul class="reset-list main-menu">
      <li class="menu-item current-menu-item"><a href="/">Home</a></li>
      <li class="menu-item"><a href="/about">About</a></li>
      <li class="menu-item"><a href="/services">Services</a></li>
      <li class="menu-item"><a href="/contact">Contact</a></li>
    </ul>
  </div>
</nav>
<!-- /wp:phenix/responsive-menu -->
```

### Sticky Menu

A menu that sticks to the top of the screen when scrolling:

```html
<!-- wp:phenix/responsive-menu {"menuLocation":"primary","menuStyle":"horizontal","isSticky":true,"stickyOffset":"0"} -->
<nav class="wp-block-phenix-responsive-menu px-navigation horizontal sticky-top" data-menu-location="primary" data-sticky-offset="0">
  <button class="navbar-toggler" type="button" aria-label="Toggle Navigation">
    <span class="toggler-icon"></span>
  </button>
  <div class="navbar-menu">
    <ul class="reset-list main-menu">
      <li class="menu-item current-menu-item"><a href="/">Home</a></li>
      <li class="menu-item"><a href="/about">About</a></li>
      <li class="menu-item"><a href="/services">Services</a></li>
      <li class="menu-item"><a href="/contact">Contact</a></li>
    </ul>
  </div>
</nav>
<!-- /wp:phenix/responsive-menu -->
```

## Common Use Cases

### Header Navigation

A responsive menu in a site header with logo:

```html
<!-- wp:phenix/container -->
<div class="px-container">
  <!-- wp:phenix/grid-row {"alignV":"center"} -->
  <div class="px-row align-items-center">
    <!-- wp:phenix/grid-column {"size":3} -->
    <div class="px-col col-3">
      <!-- wp:phenix/logo {"logoID":123,"logoURL":"https://example.com/logo.png"} -->
      <div class="wp-block-phenix-logo">
        <a href="/" class="site-logo">
          <img src="https://example.com/logo.png" alt="" class="img-fluid">
        </a>
      </div>
      <!-- /wp:phenix/logo -->
    </div>
    <!-- /wp:phenix/grid-column -->
    
    <!-- wp:phenix/grid-column {"size":9} -->
    <div class="px-col col-9">
      <!-- wp:phenix/responsive-menu {"menuLocation":"primary","menuStyle":"horizontal","menuAlignment":"end"} -->
      <nav class="wp-block-phenix-responsive-menu px-navigation horizontal justify-end" data-menu-location="primary">
        <button class="navbar-toggler" type="button" aria-label="Toggle Navigation">
          <span class="toggler-icon"></span>
        </button>
        <div class="navbar-menu">
          <ul class="reset-list main-menu">
            <li class="menu-item current-menu-item"><a href="/">Home</a></li>
            <li class="menu-item"><a href="/about">About</a></li>
            <li class="menu-item"><a href="/services">Services</a></li>
            <li class="menu-item"><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <!-- /wp:phenix/responsive-menu -->
    </div>
    <!-- /wp:phenix/grid-column -->
  </div>
  <!-- /wp:phenix/grid-row -->
</div>
<!-- /wp:phenix/container -->
```

### Vertical Sidebar Menu

A vertical menu for a sidebar:

```html
<!-- wp:phenix/responsive-menu {"menuLocation":"sidebar","menuStyle":"vertical"} -->
<nav class="wp-block-phenix-responsive-menu px-navigation vertical" data-menu-location="sidebar">
  <button class="navbar-toggler" type="button" aria-label="Toggle Navigation">
    <span class="toggler-icon"></span>
  </button>
  <div class="navbar-menu">
    <ul class="reset-list main-menu">
      <li class="menu-item current-menu-item"><a href="/">Dashboard</a></li>
      <li class="menu-item"><a href="/profile">Profile</a></li>
      <li class="menu-item"><a href="/settings">Settings</a></li>
      <li class="menu-item"><a href="/logout">Logout</a></li>
    </ul>
  </div>
</nav>
<!-- /wp:phenix/responsive-menu -->
```

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

