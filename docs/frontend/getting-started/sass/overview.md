# SASS Overview

Phenix Design System uses SASS (Syntactically Awesome Style Sheets) as its CSS preprocessor. This provides powerful features like variables, mixins, functions, and nesting to create a more maintainable and scalable CSS architecture.

## What is SASS?

SASS extends CSS with features that make styling more efficient and organized:
- **Variables**: Store and reuse values (colors, sizes, etc.)
- **Nesting**: Write cleaner, hierarchical CSS
- **Mixins**: Reuse blocks of styles
- **Functions**: Perform calculations and manipulations
- **Partials**: Split code into modular files
- **Inheritance**: Share properties between selectors
- **Control Directives**: Use programming logic in your styles

## Phenix SASS Architecture

The Phenix SASS architecture follows a modular approach:

```
scss/
├── abstracts/
│   ├── _variables.scss      # Core variables
│   ├── _functions.scss      # Utility functions
│   ├── _mixins.scss         # Reusable mixins
│   └── _placeholders.scss   # Shared placeholders
├── base/
│   ├── _reset.scss          # CSS reset/normalize
│   ├── _typography.scss     # Typography rules
│   └── _utilities.scss      # Utility classes
├── components/
│   ├── _buttons.scss        # Button styles
│   ├── _cards.scss          # Card styles
│   ├── _forms.scss          # Form styles
│   └── ...                  # Other components
├── layout/
│   ├── _grid.scss           # Grid system
│   ├── _containers.scss     # Container styles
│   └── _spacing.scss        # Spacing utilities
└── phenix.scss              # Main file importing all partials
```

## Getting Started with Phenix SASS

### Including SASS in Your Project

There are several ways to use Phenix SASS:

#### 1. Import from NPM

If you installed Phenix via NPM:

```scss
// Import the entire library
@import 'node_modules/phenix-design-system/scss/phenix';

// Or import specific modules
@import 'node_modules/phenix-design-system/scss/abstracts/variables';
@import 'node_modules/phenix-design-system/scss/components/buttons';
```

#### 2. Import from Local Files

If you downloaded Phenix source files:

```scss
// Import the entire library
@import 'path/to/phenix/scss/phenix';
```

### Customizing with SASS

One of the main benefits of using SASS is easy customization:

```scss
// custom.scss

// 1. Override variables before importing Phenix
$primary-color: #ff5722;
$border-radius: 8px;
$heading-font: 'Poppins', sans-serif;

// 2. Import Phenix SASS
@import 'path/to/phenix/scss/phenix';

// 3. Add custom styles
.custom-component {
  background-color: lighten($primary-color, 40%);
  padding: $spacing-md;
  
  &:hover {
    background-color: lighten($primary-color, 35%);
  }
  
  .title {
    font-family: $heading-font;
    color: $primary-color;
  }
}
```

## Core SASS Features Used in Phenix

### Variables

Phenix uses a comprehensive set of variables for consistent styling:

```scss
// Color variables
$primary-color: #0070f3;
$secondary-color: #ff4081;
$success-color: #28a745;

// Typography variables
$body-font: 'Segoe UI', system-ui, sans-serif;
$heading-font: $body-font;
$base-font-size: 16px;
$line-height: 1.5;

// Spacing variables
$spacing-unit: 1rem;
$spacing-xs: $spacing-unit * 0.25;  // 0.25rem
$spacing-sm: $spacing-unit * 0.5;   // 0.5rem
$spacing-md: $spacing-unit;         // 1rem
$spacing-lg: $spacing-unit * 1.5;   // 1.5rem
$spacing-xl: $spacing-unit * 3;     // 3rem
```

### Mixins

Phenix provides powerful mixins for common patterns:

```scss
// Example of a mixin for media queries
@mixin media-breakpoint-up($breakpoint) {
  @if $breakpoint == sm {
    @media (min-width: 576px) { @content; }
  } @else if $breakpoint == md {
    @media (min-width: 768px) { @content; }
  } @else if $breakpoint == lg {
    @media (min-width: 992px) { @content; }
  } @else if $breakpoint == xl {
    @media (min-width: 1200px) { @content; }
  }
}

// Usage
.responsive-element {
  width: 100%;
  
  @include media-breakpoint-up(md) {
    width: 50%;
  }
  
  @include media-breakpoint-up(lg) {
    width: 33.333%;
  }
}
```

### Functions

Phenix includes various utility functions:

```scss
// Color manipulation function example
@function color-contrast($color) {
  $luminance: (red($color) * 0.299 + green($color) * 0.587 + blue($color) * 0.114) / 255;
  @return if($luminance > 0.55, #000, #fff);
}

// Usage
.button {
  background-color: $primary-color;
  color: color-contrast($primary-color);
}
```

## Compiling SASS

To use Phenix SASS, you'll need to compile it to CSS. There are several methods:

### Using Node.js

```bash
# Install SASS
npm install -g sass

# Compile once
sass input.scss output.css

# Watch for changes
sass --watch input.scss:output.css

# Compile with compression
sass --style=compressed input.scss output.min.css
```

### Using Build Tools

#### Webpack

```js
// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};
```

#### Gulp

```js
// gulpfile.js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
});
```

## Best Practices

1. **Follow the Architecture**: Adhere to Phenix's modular structure
2. **Override Variables**: Customize by overriding variables, not by modifying source files
3. **Use Mixins**: Leverage existing mixins for consistent patterns
4. **Comment Your Code**: Document custom styles and overrides
5. **Avoid Deep Nesting**: Keep nesting to 3 levels or less for maintainability
6. **Use Partials**: Split custom styles into logical partials

## Related
- [SASS Variables](/frontend/getting-started/sass/variables)
- [Build Tools](/frontend/getting-started/sass/build-tools)
- [CSS Customization](/frontend/getting-started/quick-start/css-customize)
