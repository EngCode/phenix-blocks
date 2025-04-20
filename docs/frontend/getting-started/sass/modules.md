# SASS Modules

The Phenix Design System's SASS architecture is organized into distinct module categories to provide a clean, maintainable structure. This page documents  SASS modules present in the framework.

## Module Categories

Phenix's SASS modules are organized into several categories:

### 1. Assets

Base SASS files that provide foundational tools:

| File | Description |
|------|-------------|
| `_mixin.scss` | Imports all mixins from the mixin directory |
| `_reset.scss` | CSS reset and base styles |
| `_selectors.scss` | SASS placeholder selectors for inheritance |

### 2. Grid System

Files that build the responsive grid layout:

| File | Description |
|------|-------------|
| `grid/_main.scss` | Main grid container and row classes |
| `grid/_columns.scss` | Column classes and responsive variations |
| `grid/_utilities.scss` | Grid helper classes |

### 3. Utilities

Files that provide utility classes for styling:

| File | Description |
|------|-------------|
| `utilities/_main.scss` | Core utility classes |
| `utilities/_position.scss` | Positioning utilities |
| `utilities/_typography.scss` | Text styling utilities |
| `utilities/_sizes.scss` | Width, height, and sizing utilities |
| `utilities/_margin.scss` | Margin utilities |
| `utilities/_padding.scss` | Padding utilities |
| `utilities/_colors.scss` | Color utilities |
| `utilities/_borders.scss` | Border utilities |
| `utilities/_visibility.scss` | Display and visibility utilities |
| `utilities/_plugins.scss` | Utilities for plugins |
| `utilities/_effects.scss` | Effects and animation utilities |
| `utilities/_hovers.scss` | Hover state utilities |

### 4. Components

UI component styles:

| File | Description |
|------|-------------|
| `components/_breadcrumb.scss` | Breadcrumb navigation |
| `components/_buttons.scss` | Buttons and badges |
| `components/_dropdown.scss` | Dropdown menus |
| `components/_navbar.scss` | Navigation bars |
| `components/_tables.scss` | Tables and data tables |
| `components/_tabs.scss` | Tabs and panels |
| `components/_slider.scss` | Slider components |

### 5. Form Components

Form-related component styles:

| File | Description |
|------|-------------|
| `form/_uploader.scss` | File upload components |
| `form/_form-controls.scss` | Form input controls |
| `form/_tornado-form.scss` | Advanced form styling |

### 6. Theme Configuration

Theme-related variables and settings:

| File | Description |
|------|-------------|
| `_theme.scss` | CSS variables for theming |
| `_customize.scss` | Customization variables |

## How Modules Are Used

### Loading Order

The modular approach allows for selective loading of features. The order of imports is important:

1. **Direction Variables**: Set first to determine LTR/RTL support
2. **Core Assets**: Mixins, selectors, and reset styles
3. **Grid System**: For layout structure
4. **Theme Variables**: For consistent styling
5. **Components**: UI elements
6. **Forms**: Form-specific components
7. **Utilities**: Additional styling helpers

### Separate Files vs. Combined Files

- **phenix.css**: Contains only components, grid, and integrations - use when you need the structural foundation
- **phenix-utils.css**: Contains only utility classes - use when you need styling utilities

When to use which file:

- Use both files together for a complete framework experience
- Use only phenix.css when you need just components without utility classes
- Use only phenix-utils.css when you need just utility classes without components

## Customizing Modules

There are several ways to customize how modules are loaded:

### 1. Use the Provided Files As-Is

Simply import the CSS files in the correct order:

```html
<!-- Core Components (loads FIRST) -->
<link rel="stylesheet" href="path/to/phenix.min.css">

<!-- Enhancement Utilities (loads SECOND) -->
<link rel="stylesheet" href="path/to/phenix-utils.min.css">
```

### 2. Create Custom SASS Imports

For more control, create your own SASS file that imports only the modules you need:

```scss
// Set direction variables
$direction: ltr;
$direction-start: left;
$direction-end: right;

// Required modules
@import 'path/to/phenix/sass/assets/mixin';
@import 'path/to/phenix/sass/assets/selectors';

// Just import what you need
@import 'path/to/phenix/sass/grid/main';
@import 'path/to/phenix/sass/components/buttons';
@import 'path/to/phenix/sass/utilities/colors';
```

### 3. Override Variables Before Import

For theme customization, override variables before importing Phenix:

```scss
// Theme customization
$primary-color: #e91e63;
$secondary-color: #2196f3;

// Import Phenix
@import 'path/to/phenix/sass/phenix';
```

## Best Practices

1. **Load in Correct Order**: Always load phenix.css before phenix-utils.css
2. **Choose the Right Files**: Use just what you need for your project
3. **Understand the Module Structure**: Know which files contain which features
4. **Selectively Override**: Customize only what you need to change
5. **Respect the Directory Structure**: Maintain the same structure when customizing

## Example: Custom SASS Implementation

```scss
// Create a custom build with only what you need

// Direction settings
$direction: ltr;
$direction-start: left;
$direction-end: right;

// Required modules
@import 'path/to/phenix/sass/assets/mixin';
@import 'path/to/phenix/sass/assets/selectors';

// Only include grid and buttons from components
@import 'path/to/phenix/sass/grid/main';
@import 'path/to/phenix/sass/components/buttons';

// Only include specific utilities
@import 'path/to/phenix/sass/utilities/colors';
@import 'path/to/phenix/sass/utilities/typography';
```

This approach lets you create a minimal build with only the features you need.
