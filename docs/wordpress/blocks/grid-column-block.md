# Grid Column Block

## Overview

The Grid Column Block is a crucial component of the Phenix Design System's layout system. It's designed to be used inside Grid Row Blocks to create responsive column-based layouts. Grid Column Blocks can be sized, ordered, and offset differently across various screen sizes, providing complete control over your layout's responsiveness.

![Grid Column Block](../../../assets/images/wordpress/grid-column.png)

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

### Column Size Options

| Option | Description |
|--------|-------------|
| Size | Set the column width (1-12 in a 12-column grid) |
| Size MD | Column width on medium screens (tablets) |
| Size LG | Column width on large screens (desktops) |
| Size XL | Column width on extra-large screens |

### Column Position Options

| Option | Description |
|--------|-------------|
| Order | Control the visual order of the column |
| Order MD | Column order on medium screens |
| Order LG | Column order on large screens |
| Order XL | Column order on extra-large screens |
| Offset | Add space before the column (1-11 in a 12-column grid) |
| Offset MD | Column offset on medium screens |
| Offset LG | Column offset on large screens |
| Offset XL | Column offset on extra-large screens |

### Layout Options

| Option | Description |
|--------|-------------|
| Flexbox | Enable flexbox layout for direct children |
| Direction | Set the flex direction (row, column) |
| Alignment | Control horizontal and vertical alignment |
| Gap | Set spacing between flex items |

### Responsive Options

The Grid Column Block includes responsive controls for:

- Display (show/hide on different devices)
- Margin (spacing outside the column)
- Padding (spacing inside the column)
- Position (relative, absolute, fixed)

## Examples

### Basic Column

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

1. **12-Column System**: Remember that the grid is based on a 12-column system, so columns in a row should add up to 12 for a full-width layout

2. **Mobile-First Approach**: Start by setting the base size for mobile, then adjust for larger screens as needed

3. **Nesting**: You can nest Grid Row Blocks inside Grid Column Blocks to create complex layouts

4. **Responsive Testing**: Always test your column layouts across different screen sizes

5. **Consistent Spacing**: Use the padding and margin controls to maintain consistent spacing

## Related Blocks

- [Container Block](./container-block.md) - Parent container for the grid system
- [Grid Row Block](./grid-row-block.md) - Parent container for columns
- [Group Block](./group-block.md) - Alternative for non-grid layouts
