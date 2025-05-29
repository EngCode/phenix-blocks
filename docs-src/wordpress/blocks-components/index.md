# Shared Components System

The Phenix Blocks plugin features a powerful shared components system that provides a consistent and reusable set of UI controls for block editing. This system is the foundation that enables the rich editing experience across all Phenix blocks.

## Overview

The shared components system consists of modular, reusable React components that handle common UI patterns and functionality across different blocks. These components are designed to:

1. **Maintain consistency** across the block editing experience
2. **Reduce code duplication** by centralizing common UI patterns
3. **Simplify block development** by providing ready-to-use controls
4. **Enable responsive editing** through consistent responsive controls
5. **Provide a framework-aligned experience** by matching the front-end capabilities

## Component Architecture

The shared components system is organized into several categories:

### Core Controls

Basic UI controls that handle fundamental user interactions:

- **Input Controls**: Text inputs, number inputs, and textareas
- **Selection Controls**: Dropdowns, select menus, and data-driven selects
- **Toggle Controls**: Switches and checkboxes
- **Media Controls**: Media uploaders and selectors
- **Navigation Controls**: Tabs and navigation interfaces
- **Special Controls**: Icon selectors, URL controls, and other specialized inputs

### Control Sets

Grouped controls that manage related properties:

- **Layout Sets**: Controls for flexbox, grid, positioning, and sizing
- **Styling Sets**: Controls for typography, colors, borders, and effects
- **Spacing Sets**: Controls for margin and padding
- **Interactive Sets**: Controls for animations and sliders

### Integration Helpers

Utility functions and components that help integrate the controls with the WordPress block editor:

- **Options Renderer**: Processes block attributes and generates appropriate classes
- **Block Accessibility**: Ensures blocks meet accessibility standards
- **Responsive Controls**: Manages responsive property editing across breakpoints
- **Attribute Management**: Handles setting and updating block attributes

## Integration with Blocks

Blocks use the shared components in their `edit.js` files to create their editing interfaces. The components are distributed between two main areas of the block editor:

### Toolbar Controls (BlockControls)

Components that appear in the top toolbar when a block is selected. These controls provide quick access to frequently used settings and are designed for efficiency and immediate visual feedback.

#### Common Toolbar Controls

| Control Type | Description | Example Usage |
|--------------|-------------|---------------|
| HTML Tag Selection | Dropdown for selecting semantic HTML elements | Changing a container from `div` to `section` |
| Container Type | Toggle between fixed-width and fluid containers | Switching a container to full-width |
| Section Toggle | Convert between regular container and section | Making a container into a full section |
| Layout Controls | Dropdown menus for layout configuration | Accessing flexbox, margin, padding settings |
| Alignment Controls | Buttons for content alignment | Setting horizontal/vertical alignment |
| Spacing Controls | Quick access to margin and padding | Adjusting spacing with visual feedback |
| Position Settings | Controls for element positioning | Setting relative/absolute positioning |
| Border Options | Controls for border styling | Adding borders with custom styles |
| Effects Options | Controls for visual effects | Adding shadows, opacity effects |

### Sidebar Controls (InspectorControls)

Components that appear in the right sidebar when a block is selected. These controls provide more detailed configuration options organized into panels for comprehensive block customization.

#### Common Sidebar Panels

| Panel Type | Description | Example Controls |
|------------|-------------|------------------|
| General Options | Basic block configuration | HTML ID, anchor settings, block-specific toggles |
| Style Options | Visual styling properties | Background, color, border, effects settings |
| Typography | Text styling controls | Font family, size, weight, line height, spacing |
| Layout | Structural arrangement | Flexbox, grid, positioning, sizing options |
| Spacing | Margin and padding | Detailed spacing controls with responsive options |
| Animation | Motion and transition | Animation type, duration, delay, trigger settings |
| Advanced | Special functionality | Block-specific advanced features |

### Integration Pattern

The typical integration pattern is:

1. Import required components from the `px-controls` directory
2. Set up attribute management methods
3. Add toolbar components to the `BlockControls` component
4. Add sidebar components to the `InspectorControls` component
5. Connect all components to the block's attributes

For example, a button block might use the `StylesSet` in the sidebar and alignment controls in the toolbar to manage its appearance.

## Development Workflow

When developing with the shared components system:

1. **Identify needed controls**: Determine which UI controls your block needs
2. **Import components**: Import the necessary components from `px-controls`
3. **Set up attribute handlers**: Create methods to update block attributes
4. **Implement the UI**: Add the components to your block's edit function
5. **Connect to attributes**: Ensure components read from and write to the correct attributes

## Next Steps

Explore the detailed documentation for each component category:

- [Core Controls](./core-controls/): Basic UI controls for fundamental interactions
- [Control Sets](./control-sets/): Grouped controls for related properties
- [Integration Helpers](./integration-helpers/): Utilities for block integration

Or dive into specific components:

- [Input Controls](./core-controls/input-controls.md): Text, number, and textarea inputs
- [Flexbox Set](./control-sets/flexbox-set.md): Controls for flexbox layouts
- [Typography Set](./control-sets/typography-set.md): Controls for text styling
