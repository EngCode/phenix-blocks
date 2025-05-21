# SASS Variables

This guide documents the primary SASS variables used in the Phenix Design System that you can customize to modify the appearance of your project.

## Core Variables

The Phenix Design System uses several core SASS variables to control global aspects such as direction, paths, and basic settings.

### Direction Variables

These variables control the text direction and are crucial for RTL support:

```scss
// For LTR mode (phenix.scss, phenix-utils.scss)
$direction: ltr;
$direction-reverse: rtl;
$direction-start: left;
$direction-end: right;

// For RTL mode (phenix-rtl.scss, phenix-utils-rtl.scss)
$direction: rtl;
$direction-reverse: ltr;
$direction-start: right;
$direction-end: left;
```

### Spacing Variables

The spacing range used for margin and padding utilities:

```scss
$space_range: 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100;
```

## CSS Variables via SASS

Many of Phenix's customization options are defined as CSS custom properties (variables) within SASS files. These are set in the `_theme.scss` file, which holds the primary CSS variables as default theme options:

```scss
:root {
  /* Primary Colors */
  --primary-color: #0C97F9;
  --primary-hover: #1A69F4;
  --primary-dark: #040f27;
  --primary-reverse: #FFFFFF;
  --primary-offwhite: #e1eef7;
  
  /* Secondary Colors */
  --secondary-color: #F8C25B;
  --secondary-hover: #FB955D;
  --secondary-dark: #b03513;
  --secondary-reverse: #000000;
  --secondary-offwhite: #fddfa8;
  
  /* Typography */
  --primary-font: "Somar Rounded";
  --secondary-font: "Somar Rounded";
  --typography-color: #111111;
  --line-height: 1.625;
  
  /* Font Weights */
  --thin-weight: 100;
  --xlight-weight: 200;
  --light-weight: 300;
  --normal-weight: 400;
  --medium-weight: 500;
  --bold-weight: 600;
  --strong-weight: 700;
  --xbold-weight: 800;
  --black-weight: 900;
}
```

## Component Variables

### Button Variables

Variables that control the appearance of buttons:

```scss
// In components/_buttons.scss
.btn {
  --text-weight: var(--medium-weight);
  --height: #{REM(38)};
  --fs: 0.938rem;
  
  // Additional button variables
  font-size: var(--fs);
  font-weight: var(--text-weight);
  height: var(--height);
  line-height: calc(var(--height) - #{REM(2)});
}
```

### Form Control Variables

Variables for form elements:

```scss
// In form/_form-controls.scss
:root {
  --forms-height: #{REM(42)};
  --forms-radius: #{REM(4)};
  --forms-border: #{REM(1)};
}
```

## Customizing Variables

### Method 1: Override CSS Variables

The simplest approach is to override the CSS variables in your own stylesheet:

```css
:root {
  --primary-color: #e91e63;
  --primary-hover: #c2185b;
  --typography-color: #212121;
}
```

### Method 2: Override SASS Variables Before Import

For more comprehensive customization, override the SASS variables before importing Phenix:

```scss
// Set direction variables
$direction: ltr;
$direction-start: left;
$direction-end: right;

// Import Phenix
@import 'path/to/phenix/scss/phenix';

// Add your own styles after
```

### Method 3: Modify Source Files

For full control, you can directly modify the `_theme.scss` file in the source code:

```scss
// In _theme.scss
:root {
  --primary-color: #e91e63;
  --primary-hover: #c2185b;
  --typography-color: #212121;
}
```

## Variable Naming Conventions

Phenix follows these conventions for variable naming:

1. **CSS Variables**: Use kebab-case with double dashes prefix (`--primary-color`)
2. **SASS Variables**: Use snake_case for general variables (`$space_range`)
3. **Direction Variables**: Use descriptive names (`$direction-start` instead of `$left`)

## Responsive Variables

For responsive design, Phenix includes variables that change based on screen size:

```scss
:root {
  /* Responsive Font Sizes */
  --rem-xl: 16px; /* xLarge Screens and Up */
  --rem-lg: 16px; /* Large Screens and Up */
  --rem-md: 15px; /* Medium Screens and Up */
  --rem-sm: 15px; /* Small Screens and Up */
  --rem-xs: 15px; /* Extra Small Screens and Up */
}
```

## Color System Variables

The color system includes both primary brand colors and utility colors:

```scss
:root {
  /* Utility Colors */
  --success-color: #22B567;
  --danger-color: #DE3131;
  --warning-color: #FAD934;
  --info-color: #816CF3;
  --gray-color: #868e96;
  --dark-color: #14171a;
  
  /* Gradient Colors */
  --primary-gradient: var(--primary-color), var(--primary-hover);
  --secondary-gradient: var(--secondary-color), var(--secondary-hover);
  --success-gradient: #22B567, #00A186;
  --warning-gradient: #FAD934, #F49D1A;
  --danger-gradient: #FD875B, #F9515A, #F96AAC;
}
```

## Component Appearance Variables

Variables for controlling component backgrounds and text colors:

```scss
:root {
  /* Component Appearance */
  --component-bg-lvl-1: #FFFFFF;
  --component-bg-lvl-2: #F2F2F2;
  --component-bg-lvl-3: #F5F5F5;
  --component-tx-lvl-1: var(--dark-color);
  --component-tx-lvl-2: var(--gray-color);
  --component-tx-lvl-3: var(--dark-light);
}
```

## Function Variables

Some variables are used with functions to calculate values:

```scss
// REM function with variable base
@function REM($pixels) {
  @return $pixels / 16 + rem;
}
```

## Best Practices

1. **Customize Early**: Override variables before importing Phenix
2. **Maintain Consistency**: Use the same variable names for overrides
3. **Use CSS Variables**: Prefer CSS variables for runtime changes
4. **Document Changes**: Keep track of the variables you modify
5. **Respect Direction**: Use `$direction-start` and `$direction-end` instead of `left` and `right`
6. **Layer Customizations**: Create a separate customization file
