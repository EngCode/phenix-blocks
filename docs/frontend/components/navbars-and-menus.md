# Navbars and Menus

## Overview

The Phenix Design System provides a flexible approach to creating responsive navigation menus. The menu component combines CSS utilities with JavaScript functionality to create multi-level dropdown menus that can be easily customized to fit your design needs.

## Core Concept

The menu component in Phenix is designed with simplicity and flexibility in mind. Here are the key concepts to understand:

- Each menu requires a unique `data-id` attribute for proper responsive behavior with the menu toggle button
- The component supports infinite levels of nested submenus
- The `mobile` option allows you to create a separate mobile menu with different styling
- The `hover` option enables dropdown menus on hover for desktop screens
- The `px-navigation` class provides pre-styled menu components that can be customized

## Basic Usage

### HTML Structure

```html
<!-- Main Menu -->
<nav class="px-navigation hidden-md-down" data-id="main-menu" data-hover="true" data-mobile="custom" data-effect="fade">
    <ul class="reset-list flexbox fs-15">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a>
            <!-- Submenu [level-1] -->
            <ul>
                <li><a href="#">Product Category 1</a></li>
                <li><a href="#">Product Category 2</a></li>
                <li><a href="#">Product Category 3</a></li>
            </ul>
            <!-- // Submenu [level-1] -->
        </li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
<!-- // Main Menu -->

<!-- Toggle Button for Responsive -->
<a href="#" class="btn primary menu-toggle hidden-lg-up" data-id="main-menu">Menu</a>
```

### JavaScript Initialization

```javascript
// Basic initialization
Phenix('.px-navigation').menu();

// With custom options
Phenix('.px-navigation').menu({
    menu_id: 'main-menu',     // Menu CSS ID
    hover: true,              // Dropdown on hover (desktop only)
    mobile: 'dropdown',       // Responsive mode: 'dropdown' or 'custom'
    effect: 'slide',          // Dropdown effect: 'slide', 'fade', or 'custom'
    sub_active: 'px-submenu-active', // Submenu active class
    arrow: "fas fa-angle-down"      // Dropdown arrow icon class
});
```

## Options Reference

| Option | Description | Default | Type |
|--------|-------------|---------|------|
| `menu_id` | The ID of the menu wrapper for responsive toggle | `null` | String |
| `hover` | Enable/disable dropdown on hover for desktop | `false` | Boolean |
| `mobile` | Mobile responsive mode: 'dropdown' or 'custom' | `'dropdown'` | String |
| `effect` | Dropdown animation effect: 'slide', 'fade', or 'custom' | `'slide'` | String |
| `sub_active` | CSS class for active submenus | `'px-submenu-active'` | String |
| `arrow` | Dropdown arrow icon class names | `null` | String |

## Menu Types

### Horizontal Navigation Menu

A standard horizontal navigation menu with dropdowns:

```html
<nav class="px-navigation hidden-md-down pdx-20 pdy-10 bg-white" 
     data-id="main-menu" 
     data-hover="true" 
     data-arrow="far fa-angle-down" 
     data-effect="fade">
    <ul class="flexbox reset-list fs-15">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a>
            <!-- Submenu -->
            <ul>
                <li><a href="#">Category 1</a></li>
                <li><a href="#">Category 2</a></li>
                <li><a href="#">Category 3</a></li>
            </ul>
        </li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>

<!-- Toggle Button for Responsive -->
<a href="#" class="btn primary menu-toggle hidden-lg-up" data-id="main-menu">Menu</a>
```

### Vertical Navigation Menu

A vertical navigation menu with nested dropdowns:

```html
<nav class="px-navigation px-vertical bg-white border-1 border-alpha-10" 
     data-id="side-menu" 
     data-hover="true" 
     data-arrow="far fa-angle-right">
    <!-- Title -->
    <h4 class="fs-14 pdy-10 pdx-20 bg-alpha-05">Vertical Menu</h4>
    <!-- Menu Items -->
    <ul class="reset-list fs-15 pdx-20">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a>
            <!-- Submenu -->
            <ul>
                <li><a href="#">Category 1</a></li>
                <li><a href="#">Category 2</a>
                    <!-- Nested Submenu -->
                    <ul>
                        <li><a href="#">Subcategory 1</a></li>
                        <li><a href="#">Subcategory 2</a></li>
                    </ul>
                </li>
                <li><a href="#">Category 3</a></li>
            </ul>
        </li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

### Mega Menu

Create a mega menu with multiple columns and rich content:

```html
<nav class="px-navigation hidden-md-down pdx-20 pdy-10 bg-white" 
     data-id="main-menu" 
     data-hover="true" 
     data-arrow="far fa-angle-down">
    <ul class="flexbox reset-list fs-15">
        <li><a href="#">Home</a></li>
        <li><a href="#">Mega Menu</a>
            <!-- Mega Menu -->
            <div class="megamenu">
                <!-- Grid -->
                <div class="grid-system">
                    <!-- Column -->
                    <div class="col-12 col-md-4">
                        <h4 class="fs-15 weight-medium">Column 1</h4>
                        <ul class="reset-list">
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            <li><a href="#">Link 3</a></li>
                        </ul>
                    </div>
                    <!-- Column -->
                    <div class="col-12 col-md-4">
                        <h4 class="fs-15 weight-medium">Column 2</h4>
                        <ul class="reset-list">
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            <li><a href="#">Link 3</a></li>
                        </ul>
                    </div>
                    <!-- Column -->
                    <div class="col-12 col-md-4">
                        <h4 class="fs-15 weight-medium">Featured</h4>
                        <a href="#"><img src="image.jpg" alt="" class="fluid mb-10"></a>
                    </div>
                </div>
            </div>
        </li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

## Responsive Behavior

The menu component provides two responsive modes:

### Dropdown Mode

In `dropdown` mode, the menu structure remains the same but is toggled on/off for mobile:

```html
<nav class="px-navigation" data-id="main-menu" data-mobile="dropdown">
    <!-- Menu content -->
</nav>
<a href="#" class="menu-toggle" data-id="main-menu">Menu</a>
```

### Custom Mode

In `custom` mode, a separate mobile menu is created with different styling:

```html
<nav class="px-navigation" data-id="main-menu" data-mobile="custom">
    <!-- Menu content -->
</nav>
<a href="#" class="menu-toggle" data-id="main-menu">Menu</a>
```

## CSS Classes Reference

| Class | Description |
|-------|-------------|
| `.px-navigation` | Main class for the menu component |
| `.px-vertical` | Creates a vertical menu |
| `.px-submenu-active` | Applied to active submenu items |
| `.submenu` | Applied to submenu elements |
| `.submenu-item` | Applied to parent items with submenus |
| `.megamenu` | Applied to mega menu containers |
| `.px-custom-menu` | Applied to custom mobile menus |
| `.px-menu-active` | Applied to active menus |

## Data Attributes Reference

| Attribute | Description | Default |
|-----------|-------------|--------|
| `data-id` | Menu ID for responsive toggle | `null` |
| `data-hover` | Enable hover behavior | `false` |
| `data-mobile` | Mobile mode | `dropdown` |
| `data-effect` | Animation effect | `slide` |
| `data-arrow` | Arrow icon classes | `null` |
| `data-sub-active` | Active submenu class | `px-submenu-active` |

## Styling Customization

You can customize the menu appearance using CSS. Here's an example of custom styling:

```css
/* Basic menu styling */
.px-navigation {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Menu items */
.px-navigation > ul > li > a {
    padding: 15px;
    color: #333;
    transition: color 0.3s ease;
}

/* Hover state */
.px-navigation > ul > li > a:hover {
    color: #007bff;
}

/* Submenu styling */
.px-navigation .submenu {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    min-width: 200px;
}

/* Arrow icon */
.px-navigation .arrow-icon::after {
    margin-left: 5px;
}
```

## Accessibility Considerations

For better accessibility, consider the following practices:

1. Use semantic HTML elements (`nav`, `ul`, `li`, `a`)
2. Add appropriate ARIA attributes for dropdown menus
3. Ensure keyboard navigation works properly
4. Provide sufficient color contrast
5. Include focus states for interactive elements

## Best Practices

1. **Keep the menu structure simple** - avoid too many nested levels
2. **Use clear, descriptive labels** for menu items
3. **Maintain consistent styling** across menu components
4. **Test thoroughly on mobile devices** to ensure responsive behavior works correctly
5. **Consider touch interactions** for mobile users
6. **Use appropriate icons** to indicate dropdown functionality
