# Layout Options

## Overview

Layout Options provide powerful controls for structuring and arranging content within blocks. These controls are available across many Phenix blocks and allow you to create sophisticated layouts without writing custom CSS. The Layout Options panel gives you precise control over how elements are positioned, aligned, and displayed.

## Key Features

- **Responsive layout controls** that adapt to different screen sizes
- **Flexbox-based alignment** for precise content positioning
- **Width and height controls** for exact sizing
- **Display type selection** for changing how elements behave in the layout flow
- **Z-index control** for managing element stacking order

## Available Controls

### Display Type

Controls how an element behaves in the layout flow.

| Option | Description |
|--------|-------------|
| Block | Element takes up the full width of its container and creates a new line |
| Inline | Element only takes up as much width as necessary and doesn't create a new line |
| Inline Block | Combination of inline and block; doesn't create a new line but can have width and height |
| Flex | Enables flexbox layout for the element's children |
| Grid | Enables CSS grid layout for the element's children |
| None | Removes the element from the normal document flow (often used with absolute positioning) |

### Width & Height

Controls the dimensions of an element.

| Option | Description |
|--------|-------------|
| Auto | Element sizes based on its content |
| 100% | Element takes full width/height of its parent |
| Custom | Set a specific width/height using px, %, vh/vw, or other CSS units |
| Min/Max | Set minimum or maximum constraints on width/height |

### Flex Layout Controls

When Display Type is set to "Flex", these additional controls become available:

| Control | Options | Description |
|---------|---------|-------------|
| Direction | Row, Row Reverse, Column, Column Reverse | Sets the direction of flex items |
| Wrap | Nowrap, Wrap, Wrap Reverse | Controls whether flex items wrap to new lines |
| Justify Content | Start, End, Center, Between, Around, Evenly | Aligns items along the main axis |
| Align Items | Start, End, Center, Baseline, Stretch | Aligns items along the cross axis |
| Align Content | Start, End, Center, Between, Around, Stretch | Aligns multiple lines of content |
| Gap | Custom spacing | Sets space between flex items |

### Position Controls

Controls how an element is positioned relative to its normal position in the document flow.

| Option | Description |
|--------|-------------|
| Static | Default positioning according to normal document flow |
| Relative | Positioned relative to its normal position |
| Absolute | Positioned relative to its nearest positioned ancestor |
| Fixed | Positioned relative to the viewport |
| Sticky | Positioned based on the user's scroll position |

### Z-Index

Controls the stacking order of elements that overlap. Higher values appear on top of elements with lower values.

## Responsive Controls

All layout options can be set differently for various screen sizes:

| Breakpoint | Description |
|------------|-------------|
| Default | Applied to all screen sizes unless overridden |
| Mobile | Applied to screens smaller than 768px |
| Tablet | Applied to screens 768px-991px |
| Desktop | Applied to screens 992px-1199px |
| Large Desktop | Applied to screens 1200px and larger |

To set responsive layout options:

1. Select the block you want to modify
2. Open the Layout Options panel in the sidebar
3. Click the responsive toggle button to switch between breakpoints
4. Set the desired layout options for each breakpoint

## Usage Examples

### Centering Content Vertically and Horizontally

1. Set Display Type to "Flex"
2. Set Justify Content to "Center"
3. Set Align Items to "Center"

### Creating a Sticky Header

1. Set Position to "Sticky"
2. Set Top to "0"
3. Set Z-Index to a high value (e.g., 100)

### Creating a Two-Column Layout on Desktop, Single Column on Mobile

**Default Settings:**
1. Set Display Type to "Block"

**Desktop Settings:**
1. Switch to Desktop breakpoint
2. Set Display Type to "Flex"
3. Set Direction to "Row"

## Best Practices

1. **Start with mobile layouts first**, then adjust for larger screens
2. **Use flexbox for one-dimensional layouts** (rows or columns)
3. **Use grid for two-dimensional layouts** (rows and columns together)
4. **Avoid fixed heights** when possible to maintain content flexibility
5. **Use percentage widths** for responsive designs rather than fixed pixel values
6. **Test your layouts** at different screen sizes using the WordPress preview mode

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Content not centering properly | Ensure both Justify Content and Align Items are set to "Center" |
| Elements overlapping unexpectedly | Check z-index values and positioning settings |
| Layout breaking on mobile | Set specific layout options for the Mobile breakpoint |
| Flex items not wrapping | Ensure Flex Wrap is set to "Wrap" |
| Element not taking full width | Check if Width is set to "100%" |

## Related Controls

- [Responsive Margin](./responsive-margin.md)
- [Responsive Padding](./responsive-padding.md)
- [Responsive Display](./responsive-display.md)
- [Responsive Position](./responsive-position.md)
