# Navbars and Menus

## Overview

Learn how to create and build responsive menus and navbars/headers with Phenix CSS/JS combined to make the creation of a responsive menu/navigation as easy as possible.

## Core Concept

The concept and mechanism behind the Phenix menu JavaScript plugin is simple and provides only the functionality you need to build multi-level dropdown menus. You can style these menus as you wish or use the pre-designed Phenix menu and customize it to fit your design concept.

Here are a few key points to keep in mind while working with the menu:

- The menu must have a `[data-id]` value for proper responsive show/hide behavior with the menu-toggle button
- The `mobile` option allows you to create a new `clone` of the menu to style it differently outside the original menu (placed before `</body>`)
- The menu mechanism supports an infinite number of nested menu levels and mega-menus
- Using the main style class `px-navigation` is highly recommended for proper and easy styling
- The hover option adds support for showing sub-menus on hover (desktop screens only) and requires the `px-navigation` CSS

## Basic Usage

### HTML

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
<a href="#" class="btn primary menu-toggle hidden-lg-up" data-id="main-menu">Main Menu</a>
```

### JavaScript

```javascript
//====> Basic Initialization <====//
Phenix('.px-navigation').menu();

//====> Custom Options <====//
Phenix('.px-navigation').menu({
    menu_id : 'main-menu',    //====> Menu CSS ID
    hover  : true,            //====> Dropdown on Hover [Desktop only]
    mobile : 'dropdown',      //====> Responsive Mode [dropdown, custom]
    effect : 'slide',         //====> Dropdown Effect [slide, fade, custom]
    sub_active : 'px-submenu-active', //====> Submenus CSS Active Class
    arrow : "fas fa-angle-down",      //====> Dropdown Arrow icon class names
});
```

## Options Reference

<figure>

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `menu_id` | string | `null` | Menu CSS ID for responsive toggle |
| `hover` | boolean | `false` | Enable hover behavior for dropdowns |
| `mobile` | string | `dropdown` | Mobile mode: `dropdown` or `custom` |
| `effect` | string | `slide` | Animation effect: `slide`, `fade`, or `custom` |
| `sub_active` | string | `px-submenu-active` | CSS class for active submenu items |
| `arrow` | string | `null` | CSS class names for dropdown arrow icon |

<figcaption>
Menu Component Options
</figcaption>

</figure>

## Navigation Menu

In the next example, you can see a navigation menu built with the Phenix menu component and utility CSS classes. You can use it directly in your code and customize it with your own style.

### HTML

```html
<!-- Main Menu -->
<nav class="px-navigation hidden-md-down pdx-20 pdy-10 bg-white mb-20" 
     data-arrow="far fa-angle-down" 
     data-id="main-menu" 
     data-hover="true" 
     data-mobile="custom" 
     data-effect="fade">
    <ul class="flexbox reset-list fs-15">
        <!-- Regular Menu Item -->
        <li><a href="#">Home</a></li>
        
        <!-- Menu Item with Submenu -->
        <li><a href="#">Products</a>
            <!-- Submenu [level-1] -->
            <ul>
                <li><a href="#">Category 1</a></li>
                <li><a href="#">Category 2</a>
                    <!-- Submenu [level-2] -->
                    <ul>
                        <li><a href="#">Subcategory 1</a></li>
                        <li><a href="#">Subcategory 2</a></li>
                        <li><a href="#">Subcategory 3</a></li>
                    </ul>
                    <!-- // Submenu [level-2] -->
                </li>
                <li><a href="#">Category 3</a></li>
            </ul>
            <!-- // Submenu [level-1] -->
        </li>
        
        <!-- Regular Menu Items -->
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
<!-- // Main Menu -->

<!-- Toggle Button for Responsive -->
<a href="#" class="btn primary menu-toggle hidden-lg-up" data-id="main-menu">Menu</a>
```

### CSS

```css
/*====> Custom Navigation Styling <====*/
.px-navigation {
    /* Basic menu styling */
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
```

### JavaScript

```javascript
//====> Initialize Menu <====//
Phenix('.px-navigation').menu();
```

## Vertical Menu

This example demonstrates a vertical navigation menu with nested dropdowns, which is perfect for sidebars.

### HTML

```html
<!-- Vertical Menu -->
<nav class="px-navigation px-vertical bg-white border-1 border-alpha-10" 
     data-id="side-menu" 
     data-hover="true" 
     data-arrow="far fa-angle-right">
    <!-- Title -->
    <h4 class="fs-14 pdy-10 pdx-20 bg-alpha-05">Vertical Menu</h4>
    
    <!-- Menu Items -->
    <ul class="reset-list fs-15 pdx-20">
        <!-- Regular Menu Item -->
        <li><a href="#">Home</a></li>
        
        <!-- Menu Item with Submenu -->
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
        
        <!-- Regular Menu Items -->
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
<!-- // Vertical Menu -->
```

### JavaScript

```javascript
//====> Initialize Vertical Menu <====//
Phenix('.px-vertical').menu({
    effect: 'slide',
    arrow: "far fa-angle-right"
});
```

## Mega Menu

Create a mega menu with multiple columns and rich content for complex navigation needs.

### HTML

```html
<!-- Main Menu with Mega Menu -->
<nav class="px-navigation hidden-md-down pdx-20 pdy-10 bg-white" 
     data-id="main-menu" 
     data-hover="true" 
     data-arrow="far fa-angle-down">
    <ul class="flexbox reset-list fs-15">
        <!-- Regular Menu Item -->
        <li><a href="#">Home</a></li>
        
        <!-- Mega Menu Item -->
        <li><a href="#">Mega Menu</a>
            <!-- Mega Menu Container -->
            <div class="megamenu">
                <!-- Grid System for Columns -->
                <div class="grid-system">
                    <!-- Column 1 -->
                    <div class="col-12 col-md-4">
                        <h4 class="fs-15 weight-medium">Column 1</h4>
                        <ul class="reset-list">
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            <li><a href="#">Link 3</a></li>
                        </ul>
                    </div>
                    
                    <!-- Column 2 -->
                    <div class="col-12 col-md-4">
                        <h4 class="fs-15 weight-medium">Column 2</h4>
                        <ul class="reset-list">
                            <li><a href="#">Link 1</a></li>
                            <li><a href="#">Link 2</a></li>
                            <li><a href="#">Link 3</a></li>
                        </ul>
                    </div>
                    
                    <!-- Column 3 - Featured Content -->
                    <div class="col-12 col-md-4">
                        <h4 class="fs-15 weight-medium">Featured</h4>
                        <a href="#"><img src="https://placehold.co/300x190" alt="" class="fluid mb-10"></a>
                    </div>
                </div>
                <!-- // Grid System -->
            </div>
            <!-- // Mega Menu Container -->
        </li>
        
        <!-- Regular Menu Items -->
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
<!-- // Main Menu with Mega Menu -->

<!-- Toggle Button for Responsive -->
<a href="#" class="btn primary menu-toggle hidden-lg-up" data-id="main-menu">Menu</a>
```

### JavaScript

```javascript
//====> Initialize Menu with Mega Menu <====//
Phenix('.px-navigation').menu({
    hover: true,
    effect: 'fade'
});
```

## Responsive Behavior

The menu component provides two responsive modes to handle mobile displays:

### Dropdown Mode

In `dropdown` mode, the menu structure remains the same but is toggled on/off for mobile devices:

### HTML

```html
<!-- Menu with Dropdown Mobile Mode -->
<nav class="px-navigation" data-id="main-menu" data-mobile="dropdown">
    <!-- Menu content -->
    <ul class="reset-list">
        <li><a href="#">Menu Item 1</a></li>
        <li><a href="#">Menu Item 2</a></li>
        <li><a href="#">Menu Item 3</a></li>
    </ul>
</nav>

<!-- Toggle Button for Responsive -->
<a href="#" class="menu-toggle" data-id="main-menu">Menu</a>
```

### Custom Mode

In `custom` mode, a separate mobile menu is created with different styling, which is automatically appended to the body:

### HTML

```html
<!-- Menu with Custom Mobile Mode -->
<nav class="px-navigation" data-id="main-menu" data-mobile="custom">
    <!-- Menu content -->
    <ul class="reset-list">
        <li><a href="#">Menu Item 1</a></li>
        <li><a href="#">Menu Item 2</a></li>
        <li><a href="#">Menu Item 3</a></li>
    </ul>
</nav>

<!-- Toggle Button for Responsive -->
<a href="#" class="menu-toggle" data-id="main-menu">Menu</a>
```

## Classes and Attributes Reference

<figure>

| Class/Attribute | Description | Default |
|----------------|-------------|--------|
| `.px-navigation` | Main class for the menu component | - |
| `.px-vertical` | Creates a vertical menu | - |
| `.megamenu` | Container for mega menu content | - |
| `.px-submenu-active` | Applied to active submenu items | - |
| `.submenu` | Applied to submenu elements | - |
| `.submenu-item` | Applied to parent items with submenus | - |
| `.px-custom-menu` | Applied to custom mobile menus | - |
| `.px-menu-active` | Applied to active menus | - |
| `data-id` | Menu ID for responsive toggle | `null` |
| `data-hover` | Enable hover behavior | `false` |
| `data-mobile` | Mobile mode [dropdown, custom] | `dropdown` |
| `data-effect` | Animation effect [slide, fade, custom] | `slide` |
| `data-arrow` | Arrow icon classes | `null` |
| `data-sub-active` | Active submenu class | `px-submenu-active` |

<figcaption>
Classes and Attributes for Navigation Menus
</figcaption>

</figure>

## Accessibility Considerations

For better accessibility, consider the following practices:

1. Use semantic HTML elements like `<nav>`, `<ul>`, and `<li>` for menus
2. Add `aria-expanded` attributes to indicate dropdown state
3. Include `aria-haspopup` for menu items with submenus
4. Ensure keyboard navigation works properly
5. Add appropriate focus states for all interactive elements
