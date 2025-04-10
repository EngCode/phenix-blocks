# Components

Phenix Design System provides a set of ready-to-use UI components that help you build consistent interfaces quickly. These components are built with flexibility in mind, allowing you to customize them to match your design requirements.

## Table of Contents

- [Buttons](#buttons)
- [Navigation](#navigation)
- [Dropdown](#dropdown)
- [Tables](#tables)
- [Tabs](#tabs)
- [Breadcrumb](#breadcrumb)
- [Slider](#slider)

## Buttons

Buttons in Phenix are versatile components used for actions, navigation, and form submissions. They can be customized with different styles, sizes, colors, and variations.

### Basic Button

The standard button is created with the `.btn` class:

```html
<button class="btn">Default Button</button>
```

### Button Colors

Phenix includes several color variations for buttons:

```html
<button class="btn primary">Primary</button>
<button class="btn secondary">Secondary</button>
<button class="btn success">Success</button>
<button class="btn danger">Danger</button>
<button class="btn warning">Warning</button>
<button class="btn info">Info</button>
<button class="btn dark">Dark</button>
<button class="btn gray">Gray</button>
```

### Button Sizes

Control the size of buttons using these classes:

```html
<button class="btn primary xtiny">Extra Tiny</button>
<button class="btn primary tiny">Tiny</button>
<button class="btn primary small">Small</button>
<button class="btn primary">Default (Medium)</button>
<button class="btn primary large">Large</button>
<button class="btn primary xlarge">Extra Large</button>
```

### Outline Buttons

Create outlined buttons by adding the `.outline` class:

```html
<button class="btn outline">Default Outline</button>
<button class="btn primary outline">Primary Outline</button>
<button class="btn secondary outline">Secondary Outline</button>
<button class="btn success outline">Success Outline</button>
<button class="btn danger outline">Danger Outline</button>
```

### Icon Buttons

Add icons to buttons using the `.btn-icon` and `.btn-icon-end` classes:

```html
<!-- Icon at the start -->
<button class="btn primary btn-icon">
  <i class="icon fas fa-home"></i>
  Home
</button>

<!-- Icon at the end -->
<button class="btn primary btn-icon-end">
  Next
  <i class="icon fas fa-arrow-right"></i>
</button>
```

### Square Icon Buttons

Create square buttons with icons:

```html
<button class="btn primary square">
  <i class="icon fas fa-plus"></i>
</button>
```

### Labeled Icon Buttons

Add a labeled background to the icon section:

```html
<button class="btn primary btn-icon labeled">
  <i class="icon fas fa-download"></i>
  Download
</button>

<button class="btn primary btn-icon-end labeled">
  Upload
  <i class="icon fas fa-upload"></i>
</button>
```

### Disabled Buttons

Disable buttons using the `disabled` attribute or the `.disabled` class:

```html
<button class="btn primary" disabled>Disabled Button</button>
<button class="btn disabled">Disabled Button</button>
```

## Navigation

The Phenix navigation component provides a flexible and responsive navigation system.

### Basic Navigation

```html
<nav class="px-navigation">
  <ul>
    <li class="px-item-active"><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

### Navigation with Submenu

```html
<nav class="px-navigation" data-hover>
  <ul>
    <li><a href="#">Home</a></li>
    <li>
      <a href="#">Services</a>
      <ul class="submenu">
        <li><a href="#">Service 1</a></li>
        <li><a href="#">Service 2</a></li>
        <li><a href="#">Service 3</a></li>
      </ul>
    </li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

### Navigation with Icons

```html
<nav class="px-navigation">
  <ul>
    <li class="fa-home px-item-active"><a href="#">Home</a></li>
    <li class="fa-info-circle"><a href="#">About</a></li>
    <li class="fa-cogs"><a href="#">Services</a></li>
    <li class="fa-envelope"><a href="#">Contact</a></li>
  </ul>
</nav>
```

### Custom Menu

```html
<div class="px-custom-menu">
  <div class="menu-toggle"></div>
  <div class="menu-wrapper">
    <nav class="px-navigation">
      <!-- Navigation content -->
    </nav>
  </div>
</div>
```

## Dropdown

The dropdown component allows you to create toggleable, contextual overlays for displaying lists of links or other content.

### Basic Dropdown

```html
<div class="px-dropdown" data-hover>
  <button class="btn primary">Dropdown</button>
  <ul class="px-dropdown-list">
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
  </ul>
</div>
```

## Tables

Tables in Phenix are styled for better readability and can be enhanced with various classes.

### Basic Table

```html
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td>Admin</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jane Smith</td>
      <td>jane@example.com</td>
      <td>Editor</td>
    </tr>
  </tbody>
</table>
```

### Striped Table

```html
<table class="table striped">
  <!-- Table content -->
</table>
```

### Bordered Table

```html
<table class="table bordered">
  <!-- Table content -->
</table>
```

### Borderless Table

```html
<table class="table borderless">
  <!-- Table content -->
</table>
```

### Responsive Table

```html
<div class="table-responsive">
  <table class="table">
    <!-- Table content -->
  </table>
</div>
```

## Tabs

Tabs enable you to organize content into different panes where only one pane is visible at a time.

### Basic Tabs

```html
<div class="tabs-navigation">
  <ul>
    <li class="active"><a href="#tab1">Tab 1</a></li>
    <li><a href="#tab2">Tab 2</a></li>
    <li><a href="#tab3">Tab 3</a></li>
  </ul>
  <div class="tabs-content">
    <div id="tab1" class="tab-panel active">
      Content for Tab 1
    </div>
    <div id="tab2" class="tab-panel">
      Content for Tab 2
    </div>
    <div id="tab3" class="tab-panel">
      Content for Tab 3
    </div>
  </div>
</div>
```

## Breadcrumb

Breadcrumbs provide a navigation trail that helps users understand their location within the site hierarchy.

### Basic Breadcrumb

```html
<ul class="px-breadcrumb">
  <li><a href="#">Home</a></li>
  <li><a href="#">Products</a></li>
  <li>Product Name</li>
</ul>
```

### Breadcrumb with Custom Divider

```html
<ul class="px-breadcrumb" style="--divider-icon: '>';">
  <li><a href="#">Home</a></li>
  <li><a href="#">Products</a></li>
  <li>Product Name</li>
</ul>
```

### Breadcrumb with Font Icon Divider

```html
<ul class="px-breadcrumb" data-type="font-icon" style="--divider-icon: '\f105';">
  <li><a href="#">Home</a></li>
  <li><a href="#">Products</a></li>
  <li>Product Name</li>
</ul>
```

## Slider

The slider component allows you to create carousels or slideshows.

### Basic Slider

```html
<div class="px-slider">
  <div class="splide__list">
    <div>Slide 1</div>
    <div>Slide 2</div>
    <div>Slide 3</div>
  </div>
  <div class="px-slider-controls">
    <button class="px-prev"><svg><!-- Arrow SVG --></svg></button>
    <button class="px-next"><svg><!-- Arrow SVG --></svg></button>
  </div>
  <div class="px-slider-pagination"></div>
</div>
``` 