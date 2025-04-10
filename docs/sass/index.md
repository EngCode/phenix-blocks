# Phenix SASS Framework

The Phenix SASS Framework is a comprehensive, utility-first CSS framework that provides a solid foundation for building modern, responsive web interfaces. It includes a flexible grid system, a rich set of utilities, and pre-built components that can be customized to match your design requirements.

## Framework Structure

The Phenix SASS Framework is organized into several key directories and files:

```
src/sass/
├── assets/              # Core assets and mixins
├── components/          # UI components (buttons, navbar, etc.)
├── form/                # Form elements and controls
├── grid/                # Grid system
├── integration/         # Integration with other libraries
├── utilities/           # Utility classes
├── _customize.scss      # Customization variables
├── phenix.scss          # Main entry file (LTR)
└── phenix-rtl.scss      # Right-to-left support
```

## Key Features

### Utility-First Approach

The framework provides a rich set of utility classes for:

- Typography
- Colors and backgrounds
- Spacing (margin and padding)
- Positioning
- Borders and border-radius
- Visibility and display
- Effects (shadows, opacity, etc.)

### Responsive Grid System

A flexible, mobile-first grid system with:

- 12-column layout
- Responsive breakpoints
- Grid utilities for alignment and spacing
- Flex-based layout options

### Customizable Components

Pre-built UI components including:

- Buttons and badges
- Navigation bars
- Dropdown menus
- Tabs and panels
- Tables
- Breadcrumbs
- Sliders

### Form Components

Styled form elements with consistent design:

- Input fields
- Selects and dropdowns
- Checkboxes and radio buttons
- File uploaders

### RTL Support

Built-in right-to-left (RTL) support for multilingual websites.

## Quick Example

Here's a simple example of using Phenix SASS classes:

```html
<div class="container py-30">
  <div class="row">
    <div class="col-12 col-md-6 tx-center">
      <div class="card border-1 radius-md bg-white pd-20">
        <h3 class="tx-primary mb-10">Welcome to Phenix</h3>
        <p class="mb-15">A utility-first SASS framework for modern web development.</p>
        <button class="btn btn-primary radius-sm">Get Started</button>
      </div>
    </div>
  </div>
</div>
```

## Customization

You can customize the framework by editing the `_customize.scss` file, which includes variables for:

- Colors and gradients
- Typography
- Spacing values
- Border-radius
- Component styling
- And more

## Framework Files

Let's explore the key files in the framework:

### Main Entry Files

- **phenix.scss**: The main entry file that imports all components for LTR layouts
- **phenix-rtl.scss**: The RTL version of the framework
- **phenix-utils.scss**: A slimmer version with only utilities (no components)
- **_customize.scss**: Global customization variables

### Core Assets

- **_mixin.scss**: SASS mixins for common patterns
- **_reset.scss**: CSS reset and base styles
- **_selectors.scss**: Common selector patterns

Explore the documentation sections to learn more about each aspect of the framework:

- [Grid System](/sass/grid) - Layout and responsive grid
- [Typography](/sass/typography) - Text styling and utilities
- [Colors](/sass/colors) - Color system and utilities
- [Components](/sass/components) - UI components
- [Utilities](/sass/utilities) - Utility classes
- [Forms](/sass/forms) - Form elements and controls 