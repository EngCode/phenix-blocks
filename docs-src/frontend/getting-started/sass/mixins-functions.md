# Mixins & Functions

Phenix Design System includes a comprehensive set of SASS mixins and functions that provide powerful utilities for common styling patterns, responsive design, RTL/LTR support, and mathematical calculations.

## Overview

Mixins and functions in Phenix are organized into logical categories:

1. **Logical Properties** - Directional mixins for RTL/LTR support
2. **Layout Utilities** - Grid gap and positioning helpers
3. **Responsive Breakpoints** - Media query mixins for different screen sizes
4. **Utility Functions** - Mathematical and string manipulation functions

These mixins and functions are imported via the main `_mixin.scss` file:

```scss
// From src/sass/assets/_mixin.scss
//====> Logical Properties <====//
@import './mixin/margin';
@import './mixin/padding';

//====> Other Mixin & Functions <====//
@import './mixin/other';
@import './mixin/grid-gap';

//====> Responsive Breakpoints [Always Last Line] <====//
@import './mixin/breakpoints';
```

## Logical Properties Mixins

These mixins handle logical properties for bidirectional support (RTL/LTR):

### Margin Mixins

```scss
// Margin Block (top/bottom)
@mixin margin_block($size, $flow:'both') {
    //====> Both <====//
    @if ($flow == 'both') {
        margin-top: $size;
        margin-bottom: $size;
    }

    //====> Start <====//
    @else if ($flow == 'start') {margin-top: $size;}

    //====> End <====//
    @else if ($flow == 'end') {margin-bottom: $size;}
}

// Margin Inline (left/right with RTL support)
@mixin margin_inline($size, $flow:'both') {
    //====> Both <====//
    @if ($flow == 'both') {
        margin-#{$direction-start}: $size;
        margin-#{$direction-end}: $size;
    }

    //====> Start <====//
    @else if ($flow == 'start') {margin-#{$direction-start}: $size;}

    //====> End <====//
    @else if ($flow == 'end') {margin-#{$direction-end}: $size;}
}
```

### Padding Mixins

```scss
// Padding Block (top/bottom)
@mixin padding_block($size, $flow:'both') {
    //====> Both <====//
    @if ($flow == 'both') {
        padding-top: $size;
        padding-bottom: $size;
    }

    //====> Start <====//
    @else if ($flow == 'start') {padding-top: $size;}

    //====> End <====//
    @else if ($flow == 'end') {padding-bottom: $size;}
}

// Padding Inline (left/right with RTL support)
@mixin padding_inline($size, $flow:'both') {
    //====> Both <====//
    @if ($flow == 'both') {
        padding-#{$direction-start}: $size;
        padding-#{$direction-end}: $size;
    }

    //====> Start <====//
    @else if ($flow == 'start') {padding-#{$direction-start}: $size;}

    //====> End <====//
    @else if ($flow == 'end') {padding-#{$direction-end}: $size;}
}
```

## Layout Utilities

### Grid Gap

The `grid_gap` mixin provides an easy way to create consistent spacing between grid elements:

```scss
@mixin grid_gap($size:0, $flow:'both') {
    //====> Vertical Space <====//
    @if ($flow == 'y' or $flow == 'both') {
        /*==== Columns ====*/
        > .col, > [class*="col-"], &[class*="row-cols"] > *, > .splide__slide { 
            @include margin_block(#{$size}, 'end'); 
        }
        /*==== Overflow Fix ====*/
        &.gpy-fix { @include margin_block(-#{$size}, 'end'); }
    }

    //====> Horizontal/Row <====//
    @if ($flow == 'x' or $flow == 'both') {
        /*==== Negative Margin ====*/
        @if($size != 0) {
            @include margin_inline(calc(-#{$size} / 2));
        }
        /*==== for Zero Fix ====*/
        @else {
            @include margin_inline($size);
        }

        /*==== Columns ====*/
        > .col, > [class*="col-"], &[class*="row-cols"] > *, > .splide__slide {
            /*==== Padding Space ====*/
            @if($size != 0) {
                @include padding_inline(calc(#{$size} / 2));
            }
            /*==== for Zero Fix ====*/
            @else {
                @include padding_inline($size);
            }
        }
    }
}
```

### Utility Functions

#### REM Calculator

The `REM` function converts pixel values to `rem` units for better scaling and accessibility:

```scss
@function REM($size, $base:16) {
    //====> Return REM Size <====//
    @return ($size / $base * 1)+rem;
}
```

#### Utilities Repeater

The `Repeater` mixin helps generate repeated utility classes with incrementing values:

```scss
@mixin Repeater($index, $cond, $name, $prop, $unite, $increase) {
    /*==== Repeater Loop ====*/
    @while $index <= $cond {
        .#{$name}-#{$index} {
            #{$prop} : #{$index+$unite};
        }
        /*==== Increase ====*/
        $index : ($index + $increase);
    }
}
```

## Responsive Breakpoints

Phenix defines media query mixins for different screen sizes, which makes it easy to write responsive styles:

### Breakpoint Variables

```scss
/*==== Small Points ====*/
$xs-end   : 499px; /*===> Max xSmall Screen Width */
$sm-start : 500px; /*===> Min Small Screen Width */
$sm-end   : 767px; /*===> Max Small Screen Width */

/*==== Medium Points ====*/
$md-start : 768px;  /*===> Min Medium Screen Width */
$md-end   : 1199px; /*===> Max Medium Screen Width */

/*==== Large Points ====*/
$lg-start : 1200px; /*===> Min Large Screen Width */
$lg-end   : 1399px; /*===> Max Large Screen Width */

/*==== xLarge Points ====*/
$xl-start : 1400px; /*===> Min xLarge Screen Width */
$xl-end   : 2560px; /*===> Max xLarge Screen Width */
```

### Breakpoint Mixins

```scss
/*====> Extra Small Screens <====*/
@mixin xSmall($flow:'') {
    //====> From End to Start <====//
    @if ($flow == 'down' or $flow ==  'max') {
        @media (max-width: $xs-end) { @content; }
    } 
    //====> From Start to End <====//
    @else {
        @media (min-width: 0) { @content; }
    };
}

/*====> Small Screens <====*/
@mixin small($flow:'') {
    //====> From End to Start <====//
    @if ($flow == 'down' or $flow ==  'max') {
        @media (max-width: $sm-end) { @content; }
    } 
    //====> From Start to End <====//
    @else {
        @media (min-width: $sm-start) { @content; }
    };
}

/*====> Medium Screens <====*/
@mixin medium($flow:'') {
    //====> From End to Start <====//
    @if ($flow == 'down' or $flow ==  'max') {
        @media (max-width: $md-end) { @content; }
    }
    //====> From Start to End <====//
    @else {
        @media (min-width: $md-start) { @content; }
    };
}

/*====> Large Screens <====*/
@mixin large($flow:'') {
    //====> From End to Start <====//
    @if ($flow == 'down' or $flow ==  'max') {
        @media (max-width: $lg-end) { @content; }
    }
    //====> From Start to End <====//
    @else {
        @media (min-width: $lg-start) { @content; }
    };
}

/*====> Extra Large Screens <====*/
@mixin xlarge($flow:'') {
    //====> From End to Start <====//
    @if ($flow == 'down' or $flow ==  'max') {
        @media (max-width: $xl-end) { @content; }
    }
    //====> From Start to End <====//
    @else {
        @media (min-width: $xl-start) { @content; }
    };
}
```

## CSS Properties

Phenix defines several custom CSS properties for animations and transitions:

```scss
/*==== Define CSS Properties ====*/
@property --gradient-rotation {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}

@property --rotation {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}

@property --alpha-present {
    syntax: '<number>';
    initial-value: 0;
    inherits: false;
}

@property --background {
    syntax: '<color>';
    initial-value: rgba(255,255,255, 0);
    inherits: false;
}

@property --border-color {
    syntax: '<color>';
    initial-value: rgba(255,255,255, 0);
    inherits: false;
}
```

## Usage Examples

### Logical Properties for RTL Support

```scss
.custom-component {
    // Apply margin to the start side (left in LTR, right in RTL)
    @include margin_inline(1rem, 'start');
    
    // Apply padding to both sides (left and right)
    @include padding_inline(1.5rem);
}
```

### Responsive Styles

```scss
.responsive-element {
    font-size: 1rem; // Default size for mobile
    
    @include medium() {
        font-size: 1.25rem; // Medium screens and up
    }
    
    @include large() {
        font-size: 1.5rem; // Large screens and up
    }
    
    @include small('down') {
        padding: 0.5rem; // Small screens and down
    }
}
```

### Grid Gaps

```scss
.custom-row {
    display: flex;
    flex-wrap: wrap;
    
    // Add 20px gap in both directions
    @include grid_gap(20px);
    
    // Add vertical gap only
    @include grid_gap(15px, 'y');
    
    // Add horizontal gap only
    @include grid_gap(10px, 'x');
}
```

### Using REM Calculator

```scss
.element {
    padding: REM(20); // Converts 20px to rem
    margin-bottom: REM(30); // Converts 30px to rem
    font-size: REM(18); // Converts 18px to rem
}
```

### Creating Utility Classes with Repeater

```scss
// Generate margin-top classes from 0 to 50 in increments of 5
@include Repeater(0, 50, 'mt', 'margin-top', 'px', 5);

// This would generate:
// .mt-0 { margin-top: 0px; }
// .mt-5 { margin-top: 5px; }
// .mt-10 { margin-top: 10px; }
// ... and so on up to 50px
```

## Best Practices

1. **Use Logical Properties**: Always use `margin_inline` and `padding_inline` instead of direct CSS properties to ensure proper RTL support
2. **Leverage Breakpoint Mixins**: Use the provided breakpoint mixins instead of writing media queries directly
3. **Use REM Function**: Convert pixel values to REM using the `REM()` function for better accessibility and scaling
4. **Combine Mixins**: Combine mixins for more complex styles, such as responsive logical properties
5. **Consider Direction**: Remember that `$direction-start` and `$direction-end` change based on RTL/LTR mode

## Notes on Browser Support

- The CSS `@property` rule has limited browser support. Phenix includes fallbacks for browsers that don't support this feature.
- For production use, consider using PostCSS plugins like `autoprefixer` to ensure cross-browser compatibility.
