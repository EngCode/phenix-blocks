# Grid Row Block

## Overview

The Grid Row Block is a core layout component in the Phenix Design System that creates a flexible row container for organizing content in columns. It implements a responsive flexbox-based grid system and can be transformed into a slider/carousel for dynamic content presentation. The Grid Row Block is designed to work inside Container Blocks and serves as a parent for Grid Column Blocks.

## Key Features

### Layout Capabilities

- **Flexbox Foundation**: Built on CSS flexbox for powerful layout control
- **Column Configuration**: Set the number of columns per row with breakpoint-specific controls
- **Alignment Options**: Control both horizontal and vertical alignment of columns
- **Distribution Settings**: Determine how space is distributed between columns
- **Responsive Controls**: Configure different layouts for mobile, tablet, laptop, and desktop
- **Order Control**: Optionally reverse the order of columns on specific screen sizes

### Slider Functionality

- **Carousel Conversion**: Transform any row into a slider with a simple toggle
- **Slider Types**: Choose between standard slider and continuous marquee
- **Navigation Options**: Enable/disable arrows, pagination, and scrollbar
- **Autoplay Controls**: Set autoplay with customizable speed and pause on hover
- **Slide Configuration**: Control slides per view, spacing, and transition effects
- **Loop and Rewind**: Options for infinite looping or rewind at ends

## How to Use

1. Add a Container Block to your page
2. Inside the Container, add a Grid Row Block
3. Configure the row's layout options in the toolbar:
   - Set column count for different screen sizes
   - Configure alignment and distribution
   - Enable slider mode if needed
4. Add Grid Column Blocks inside the row
5. Adjust additional settings in the sidebar panels as needed

## Block Settings

### Toolbar Controls

The Grid Row Block provides the following controls in the top toolbar:

| Control | Description |
|---------|-------------|
| Columns Number | Dropdown with number inputs to set column count for different screen sizes (mobile, tablet, laptop, desktop) |
| Flexbox Controls | Dropdown for configuring flexbox properties including:
  - Direction (row, column, reverse options)
  - Alignment (horizontal and vertical)
  - Distribution (start, center, end, space-between, space-around)
  - Wrap behavior (wrap, nowrap) |
| Slider Toggle | Button to convert the row into a carousel/slider |
| Margin Controls | Dropdown for setting outer spacing with responsive options |
| Padding Controls | Dropdown for setting inner spacing with responsive options |
| Position Controls | Dropdown for setting position type and coordinates |
| Border Controls | Dropdown for configuring border styles, widths, and colors |
| Effects Controls | Dropdown for adding shadows, opacity, and other visual effects |

### Sidebar Panels

#### Slider Options Panel

When slider mode is enabled, this panel appears with the following controls:

| Control | Description |
|---------|-------------|
| Slider Type | Select between standard slider or continuous marquee |
| Slides Per View | Number of slides visible at once (can be fractional for partial slides) |
| Space Between | Gap between slides in pixels |
| Center Slides | Option to center active slide in view |
| Navigation | Toggle for enabling/disabling navigation arrows |
| Pagination | Toggle for enabling/disabling pagination dots |
| Scrollbar | Toggle for enabling/disabling draggable scrollbar |
| Autoplay | Toggle and speed control for automatic sliding |
| Pause on Hover | Option to pause autoplay when cursor hovers over slider |
| Loop | Toggle for infinite looping of slides |
| Free Mode | Toggle for free-flowing slides without snap points |
| Effect | Transition effect (slide, fade, cube, etc.) |
| Speed | Transition speed in milliseconds |

#### Layout Options Panel

| Control | Description |
|---------|-------------|
| HTML ID | Text input for setting a custom ID (useful for anchors) |
| Flexbox Settings | Tabs for configuring flexbox properties per screen size (mobile, tablet, laptop, desktop) |
| Slider Toggle | Checkbox to enable/disable slider functionality |
| Style Support | Toggle to enable/disable style options |

#### General Options Panel

When style support is enabled:

| Control | Description |
|---------|-------------|
| Style Options | Enable/disable various styling features including animations, padding, margin, border, and effects |

### Technical Implementation

The Grid Row Block is implemented with the following key attributes:

```js
// Core attributes
id: { type: "string", default: "" },

// Style-related objects
flexbox: { type: "object", default: {} },
typography: { type: "object", default: {} },
style: { type: "object", default: {} },
responsive: { type: "object", default: {} },
slider: { type: "object", default: {} }
```

The block renders as a div with the "row" class, plus any additional classes generated by the options renderer:  

```jsx
<div {...blockProps}>
  <InnerBlocks.Content />
</div>
```

When slider mode is enabled, the row classes are modified to support the slider functionality.

## Common Use Cases

### Standard Grid Layout

The most common use of the Grid Row Block is to create a responsive grid layout:

1. Add a Container Block to your page
2. Add a Grid Row Block inside the container
3. Configure the number of columns for different screen sizes (e.g., 1 column on mobile, 2 on tablet, 3 on desktop)
4. Add Grid Column Blocks inside the row
5. Place your content inside each column

### Flexbox Alignment

To create a layout with specific alignment and distribution:

1. Add a Grid Row Block to your page
2. Open the Flexbox Controls dropdown in the toolbar
3. Configure alignment (start, center, end) and distribution options
4. Add Grid Column Blocks with your content

### Content Slider

To transform a row of content into a carousel:

1. Create a standard grid layout with columns and content
2. Enable the Slider toggle in the toolbar
3. Configure slider options in the sidebar panel
4. Test the slider functionality in preview mode

## Best Practices

### Layout Structure

- Use the Columns Number dropdown to set appropriate column counts for different screen sizes
- Start with the mobile view (default) and then configure tablet (MD), laptop (LG), and desktop (XL) layouts
- Keep your row structure clean and avoid unnecessary nesting
- Use the flexbox controls to create precise alignments rather than adding extra markup

### Slider Implementation

- Enable slider mode only when it adds value to the user experience
- Choose the appropriate slider type based on your content (standard for interactive content, marquee for continuous display)
- Configure navigation options based on your design requirements
- Test slider performance with actual content to ensure smooth operation

### Responsive Design

- Configure different column counts for each breakpoint to optimize the layout
- Test your layouts on actual devices or using the browser's device emulation
- Consider content readability and usability at each screen size
- Use the responsive tabs in the sidebar to fine-tune layouts for each device

### Style Management

- Enable style support only when you need to apply custom styling
- Use consistent spacing patterns throughout your design
- Apply styles purposefully to maintain visual hierarchy
- Keep style overrides minimal to ensure consistent design

### Performance Considerations

- Enable only the features you need to keep the editor interface focused
- Optimize slider settings for performance (especially when using autoplay or effects)
- Test interactive elements to ensure they work as expected
- Consider page load performance when using multiple sliders

## Related Blocks

- [Container Block](./container-block.md) - Recommended parent container for grid rows
- [Grid Column Block](./grid-column-block.md) - Used inside grid rows to create column-based layouts
- [Group Block](./group-block.md) - Alternative for flexible content grouping without grid structure
- [Dynamic Query Block](./dynamic-query-block.md) - Can be combined with grid rows for dynamic content layouts

