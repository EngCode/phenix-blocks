# Grid Row Block

## Overview

The Grid Row Block implements the Phenix Design System's flexbox grid system in the WordPress editor. It provides a flexible container for organizing columns with responsive controls and advanced layout options.

## Editor Interface

### Quick Settings Toolbar

1. **Column Controls**:
   - Appears when equal columns or slider mode is active
   - Per-breakpoint column count settings
   - Mobile, Tablet, Laptop, and Desktop options

2. **Size Options**:
   - Width/height controls
   - Min/max dimensions
   - Responsive size settings

3. **Style Controls** (when enabled):
   - Text and background colors
   - Typography settings with breakpoints
   - Visual style configuration

4. **Additional Controls** (conditional):
   - Animations panel
   - Padding settings
   - Margin controls
   - Position options
   - Border customization
   - Effects configuration

### Sidebar Panels

1. **Slider Options** (when enabled):
   - Slider type configuration
   - Navigation controls
   - Autoplay settings
   - Transition effects

2. **Layout Options**:
   - Flexbox properties
   - Grid settings
   - Enable/disable slider mode
   - Toggle style support
   - Responsive controls

3. **General Options**:
   - HTML ID for anchors
   - Additional settings

## Overview

The Grid Row Block implements the Phenix Design System's flexbox grid system in the WordPress editor. It provides a flexible container for organizing columns with responsive controls and advanced layout options.

## Editor Interface

### Quick Settings Toolbar

1. **Column Controls**:
   - Appears when equal columns or slider mode is active
   - Per-breakpoint column count settings:
     - Mobile (0-13 columns)
     - Tablet (0-13 columns)
     - Laptop (0-13 columns)
     - Desktop (0-13 columns)

2. **Size Options**:
   - Width/height controls
   - Min/max dimensions
   - Responsive size settings

3. **Style Controls** (when enabled):
   - Text and background colors
   - Typography settings with breakpoints
   - Visual style configuration

4. **Additional Controls** (conditional):
   - Animations panel
   - Padding settings
   - Margin controls
   - Position options
   - Border customization
   - Effects configuration

### Sidebar Panels

1. **Slider Options** (when enabled):
   - Slider type configuration
   - Navigation controls
   - Autoplay settings
   - Transition effects

2. **Layout Options**:
   - Flexbox properties
   - Grid settings
   - Enable/disable slider mode
   - Toggle style support
   - Responsive controls for all breakpoints

3. **General Options**:
   - HTML ID for anchors
   - Additional settings

## Overview

The Grid Row Block is a fundamental layout component in the Phenix Design System. It serves as the main block for creating grid system layouts and is designed to work inside Container Blocks. Grid Row Blocks can contain Grid Column Blocks to create responsive column layouts, and they can also be transformed into carousels or sliders for dynamic content presentation.

<!-- Image placeholder for Grid Row Block -->

## Key Features

- Creates a responsive grid row for column-based layouts
- Can be converted into a carousel/slider with multiple options
- Supports custom gap settings between columns
- Offers various alignment and distribution options
- Includes responsive controls for different screen sizes
- Can be set to reverse order on specific devices

## How to Use

1. Add a Container Block to your page
2. Inside the Container, add a Grid Row Block
3. Within the Grid Row, add Grid Column Blocks to create your layout
4. Customize the row settings in the block sidebar

## Block Settings

### Toolbar Controls

| Control | Description |
|---------|-------------|
| Columns Gap | Quick selection for spacing between columns (none, small, normal, large) |
| Equal Height Toggle | Make all columns in the row the same height |
| Slider Toggle | Convert the row to a carousel/slider |
| Alignment Controls | Set horizontal and vertical alignment of columns |
| Flexbox Controls | Configure flexbox properties like wrap and direction |
| Margin & Padding | Quick access to spacing controls with responsive options |
| Position Settings | Configure position type and coordinates |

### Sidebar Controls

#### Grid Options Panel

| Control | Description |
|---------|-------------|
| HTML ID | Set a custom ID for the row (useful for anchors) |
| Reverse Order | Reverse the order of columns on specific devices |
| Style Options | Enable/disable various styling features |

#### Carousel Options Panel

When converted to a carousel/slider:

| Control | Description |
|---------|-------------|
| Slider Type | Choose between standard or marquee slider |
| Slides Per View | Number of slides visible at once |
| Space Between | Gap between slides |
| Navigation | Enable/disable navigation arrows |
| Pagination | Enable/disable pagination dots |
| Autoplay | Enable/disable automatic sliding |
| Loop | Enable/disable infinite loop |
| Speed | Transition speed in milliseconds |

### Responsive Options

The Grid Row Block includes responsive controls for:

- Display (show/hide on different devices)
- Column count per device size
- Alignment adjustments per device size
- Reverse order on specific devices

## Examples

### Basic Grid Row

A standard grid row with three equal columns:

```html
<!-- wp:phenix/container -->
<div class="px-container">
  <!-- wp:phenix/grid-row -->
  <div class="px-row">
    <!-- wp:phenix/grid-column {"size":4} -->
    <div class="px-col col-4">Column 1</div>
    <!-- /wp:phenix/grid-column -->
    
    <!-- wp:phenix/grid-column {"size":4} -->
    <div class="px-col col-4">Column 2</div>
    <!-- /wp:phenix/grid-column -->
    
    <!-- wp:phenix/grid-column {"size":4} -->
    <div class="px-col col-4">Column 3</div>
    <!-- /wp:phenix/grid-column -->
  </div>
  <!-- /wp:phenix/grid-row -->
</div>
<!-- /wp:phenix/container -->
```

### Grid Row with Custom Gap

A grid row with a large gap between columns:

```html
<!-- wp:phenix/grid-row {"gap":"lg"} -->
<div class="px-row row-lg">
  <!-- Column blocks go here -->
</div>
<!-- /wp:phenix/grid-row -->
```

### Centered Grid Row

A grid row with columns centered both horizontally and vertically:

```html
<!-- wp:phenix/grid-row {"alignH":"center","alignV":"center"} -->
<div class="px-row justify-center align-items-center">
  <!-- Column blocks go here -->
</div>
<!-- /wp:phenix/grid-row -->
```

### Grid Row as Carousel

A grid row converted to a carousel slider:

```html
<!-- wp:phenix/grid-row {"isSlider":true,"slidesView":3,"sliderNav":true,"sliderDots":true} -->
<div class="px-row px-slider" data-slides-view="3" data-slider-nav="true" data-slider-dots="true">
  <!-- Column blocks go here as slides -->
</div>
<!-- /wp:phenix/grid-row -->
```

## Best Practices

1. **Layout Structure**:
   - Plan column organization
   - Use appropriate breakpoints
   - Consider content flow
   - Maintain consistency

2. **Responsive Strategy**:
   - Start with mobile layout
   - Configure tablet views
   - Adjust for larger screens
   - Test all breakpoints

3. **Style Management**:
   - Apply styles purposefully
   - Use consistent spacing
   - Maintain visual hierarchy
   - Consider accessibility

4. **Performance**:
   - Enable needed features only
   - Optimize slider usage
   - Minimize style overrides
   - Test interactions

5. **Content Organization**:
   - Group related content
   - Balance column widths
   - Consider readability
   - Maintain structure

1. **Layout Structure**:
   - Use appropriate column counts for content
   - Configure responsive behavior early
   - Enable slider mode only when needed
   - Keep row structure simple

2. **Style Management**:
   - Enable style support purposefully
   - Use consistent spacing patterns
   - Configure breakpoint-specific styles
   - Maintain visual hierarchy

3. **Responsive Strategy**:
   - Start with mobile column count
   - Adjust for larger breakpoints
   - Test all screen transitions
   - Verify content alignment

4. **Performance Tips**:
   - Use slider mode efficiently
   - Keep style overrides minimal
   - Enable only needed features
   - Test interactive elements

5. **Content Organization**:
   - Group related columns
   - Maintain consistent spacing
   - Use semantic structure
   - Consider content flow

1. **Always Use with Container**: Place Grid Row Blocks inside Container Blocks for proper alignment and spacing

2. **Column Structure**: Use Grid Column Blocks inside Grid Rows to create your layout structure

3. **Mind the Gap**: Choose appropriate gap sizes based on your content and design needs

4. **Responsive Design**: Configure different column layouts for different screen sizes

5. **Carousel Conversion**: When converting to a carousel, test on various screen sizes to ensure proper display

## Related Blocks

- [Container Block](./container-block.md) - Parent container for grid rows
- [Grid Column Block](./grid-column-block.md) - Used inside grid rows to create column layouts
- [Group Block](./group-block.md) - Alternative for non-grid layouts

