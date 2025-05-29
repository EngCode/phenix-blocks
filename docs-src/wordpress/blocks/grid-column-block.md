# Grid Column Block


## Overview

The Grid Column Block is a crucial component of the Phenix Design System's layout system. It's designed to be used inside Grid Row Blocks to create responsive column-based layouts. Grid Column Blocks can be sized, ordered, and offset differently across various screen sizes, providing complete control over your layout's responsiveness.

## Key Features

- Creates responsive columns within Grid Row Blocks
- Supports different column sizes for each screen size (mobile, tablet, desktop)
- Allows column ordering and offsetting
- Includes options for alignment and distribution
- Can be styled with all standard Phenix block styling options
- Supports nesting of other blocks within columns

## How to Use

1. Add a Container Block to your page
2. Inside the Container, add a Grid Row Block
3. Within the Grid Row, add Grid Column Blocks
4. Set the size and responsive behavior of each column
5. Add content inside the columns

## Block Settings

### Toolbar Controls

| Control | Description |
|---------|-------------|
| Column Size | Quick selection for column width (1-12 in a 12-column grid) |
| Responsive Size | Set different column widths for each screen size via dropdown menus |
| Flexbox Toggle | Enable/disable flexbox layout for direct children |
| Alignment Controls | Set horizontal and vertical alignment of content |
| Margin & Padding | Quick access to spacing controls with responsive options |
| Position Settings | Configure position type and coordinates |
| Border Options | Configure border styles, widths, and colors |
| Effects Options | Add shadows, opacity, and other visual effects |

### Sidebar Controls

#### Column Options Panel

| Control | Description |
|---------|-------------|
| HTML ID | Set a custom ID for the column (useful for anchors) |
| Column Size | Set the column width (1-12 in a 12-column grid) |
| Size MD | Column width on medium screens (tablets) |
| Size LG | Column width on large screens (desktops) |
| Size XL | Column width on extra-large screens |

#### Position Options Panel

| Control | Description |
|---------|-------------|
| Order | Control the visual order of the column |
| Order MD | Column order on medium screens |
| Order LG | Column order on large screens |
| Order XL | Column order on extra-large screens |
| Offset | Add space before the column (1-11 in a 12-column grid) |
| Offset MD | Column offset on medium screens |
| Offset LG | Column offset on large screens |
| Offset XL | Column offset on extra-large screens |

#### Style Options Panel

| Control | Description |
|---------|-------------|
| Style Options | Enable/disable various styling features |
| Typography | Configure text styling options |
| Animation | Add entrance, hover, or scroll animations |

### Responsive Options

The Grid Column Block includes responsive controls for:

- Display (show/hide on different devices)
- Margin (spacing outside the column)
- Padding (spacing inside the column)
- Position (relative, absolute, fixed)

## Features

### Layout System

1. **Column Sizing**:
   - Responsive width controls
   - Automatic size calculation
   - Breakpoint-specific widths
   - Flexible sizing options

2. **Flexbox Integration**:
   - Optional flexbox mode
   - Alignment controls
   - Distribution settings
   - Order management

### Style Features

1. **Visual Controls**:
   - Background options
   - Border settings
   - Typography controls
   - Effects and animations

2. **Spacing System**:
   - Margin controls
   - Padding settings
   - Position options
   - Gap management

3. **Responsive Design**:
   - Mobile-first approach
   - Breakpoint controls
   - Visibility options
   - Layout adaptation

### Column Attributes

```json
{
    "size": {
        "type": "string",
        "default": "0"
    },
    "isFlexbox": {
        "type": "boolean",
        "default": false
    },
    "flexbox": {
        "type": "object",
        "default": {}
    },
    "typography": {
        "type": "object",
        "default": {}
    },
    "style": {
        "type": "object",
        "default": {}
    },
    "responsive": {
        "type": "object",
        "default": {}
    }
}
```

### Size Configuration

The column size is controlled through:
- Base size: `attributes.size`
- Responsive sizes: 
  - Tablet: `attributes.responsive['size-md']`
  - Laptop: `attributes.responsive['size-lg']`
  - Desktop: `attributes.responsive['size-xl']`

Each size value ranges from 0 to 13.

### Flexbox Mode

Flexbox mode is toggled via `attributes.isFlexbox`. When enabled:
- Layout options appear in toolbar
- Flexbox properties are controlled through `attributes.flexbox`
- Available options include:
  - flex-props
  - align (for MD/LG/XL breakpoints)

### Style Controls

Style options are managed through:
- `attributes.style` for general styles
- `attributes.typography` for text styling

Conditional controls (enabled via style.support):
- enable-animations
- enable-padding
- enable-margin
- enable-border
- enable-effects

### Column Sizing

```html
<!-- Basic column with responsive sizes -->
<div class="col-{size} col-md-{size} col-lg-{size} col-xl-{size}">
    <!-- Column content -->
</div>
```

1. **Size Configuration**:
   - Click Column Size in toolbar
   - Set width for each breakpoint:
     - Base size for mobile
     - MD size for tablets
     - LG size for laptops
     - XL size for desktops

2. **Flexbox Mode**:
   ```html
   <!-- Column with flexbox enabled -->
   <div class="col-{size} flex-container">
     <!-- Flexbox content -->
   </div>
   ```
   - Enable flexbox mode
   - Configure layout properties:
     - Direction (row/column)
     - Alignment (start/center/end)
     - Distribution
     - Wrap behavior

3. **Style Configuration**:
   - Enable required style features
   - Set visual properties:
     - Colors and backgrounds
     - Typography settings
     - Border styles
     - Effects and animations

### Basic Column

The block renders as a div by default, configurable through the `tagName` attribute. Available HTML tags are provided by `PhenixBlocks.dataLists.html_tags`.

Column size is set through the toolbar using:
```js
<PhenixNumber name="size" min={0} max={13} value={attributes.size} />
```

Responsive sizes use:
```js
<PhenixNumber name="size-md" value={attributes.responsive['size-md']} />
<PhenixNumber name="size-lg" value={attributes.responsive['size-lg']} />
<PhenixNumber name="size-xl" value={attributes.responsive['size-xl']} />
```

A standard column that takes up 4 out of 12 grid units:

```html
<!-- wp:phenix/grid-column {"size":4} -->
<div class="px-col col-4">Column content goes here</div>
<!-- /wp:phenix/grid-column -->
```

### Responsive Column

A column that adapts its size across different screen sizes:

```html
<!-- wp:phenix/grid-column {"size":12,"sizeMD":6,"sizeLG":4} -->
<div class="px-col col-12 col-md-6 col-lg-4">Responsive column content</div>
<!-- /wp:phenix/grid-column -->
```

### Column with Offset

A column with space added before it:

```html
<!-- wp:phenix/grid-column {"size":6,"offset":3} -->
<div class="px-col col-6 offset-3">Centered column content</div>
<!-- /wp:phenix/grid-column -->
```

### Ordered Column

A column with custom ordering:

```html
<!-- wp:phenix/grid-column {"size":4,"order":2} -->
<div class="px-col col-4 order-2">This appears second</div>
<!-- /wp:phenix/grid-column -->
```

### Column with Flexbox Layout

A column using flexbox to arrange its children:

```html
<!-- wp:phenix/grid-column {"size":6,"flexbox":true,"flexDirection":"column","alignItems":"center","justifyContent":"center"} -->
<div class="px-col col-6 flexbox column align-items-center justify-center">Centered flex content</div>
<!-- /wp:phenix/grid-column -->
```

## Best Practices

1. **Column Structure**:
   - Use appropriate sizes
   - Configure all breakpoints
   - Keep content organized
   - Enable flexbox when needed

2. **Responsive Design**:
   - Start with mobile size
   - Set tablet breakpoints
   - Configure desktop views
   - Test all transitions

3. **Layout Efficiency**:
   - Use semantic HTML
   - Keep nesting minimal
   - Enable needed features
   - Maintain structure

4. **Style Management**:
   - Apply consistent styling
   - Configure per breakpoint
   - Use spacing system
   - Keep overrides minimal

5. **Performance Tips**:
   - Minimize style layers
   - Use built-in controls
   - Optimize content flow
   - Test interactions

1. **Column Structure**:
   - Use appropriate column sizes
   - Configure all breakpoints
   - Keep content hierarchy logical
   - Enable flexbox when needed

2. **Responsive Design**:
   - Start with mobile size
   - Set tablet breakpoint (MD)
   - Configure desktop views (LG/XL)
   - Test all transitions

3. **Layout Efficiency**:
   - Use semantic HTML tags
   - Keep nesting minimal
   - Enable only needed features
   - Maintain clean structure

4. **Style Management**:
   - Use consistent styling
   - Configure per-breakpoint
   - Apply spacing systematically
   - Keep overrides minimal

5. **Performance Tips**:
   - Minimize style layers
   - Use built-in controls
   - Optimize content flow
   - Test interactive elements

1. **12-Column System**: Remember that the grid is based on a 12-column system, so columns in a row should add up to 12 for a full-width layout

2. **Mobile-First Approach**: Start by setting the base size for mobile, then adjust for larger screens as needed

3. **Nesting**: You can nest Grid Row Blocks inside Grid Column Blocks to create complex layouts

4. **Responsive Testing**: Always test your column layouts across different screen sizes

5. **Consistent Spacing**: Use the padding and margin controls to maintain consistent spacing

## Related Blocks

- [Container Block](./container-block.md) - Parent container for the grid system
- [Grid Row Block](./grid-row-block.md) - Parent container for columns
- [Group Block](./group-block.md) - Alternative for non-grid layouts

