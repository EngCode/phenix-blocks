# Block Patterns & Templates

## Overview

The Block Patterns & Templates feature in the Phenix Design System enhances WordPress's native pattern functionality, allowing you to create, manage, and organize reusable block patterns with precise control over their appearance and preview. Unlike standard WordPress patterns, Phenix patterns offer additional customization options, including the ability to define fixed widths for pattern previews, resulting in more accurate and visually appealing pattern displays in the editor.

## Key Features

- **Enhanced pattern creation** with improved preview capabilities
- **Fixed-width previews** for more accurate representation
- **Pattern categorization** for better organization
- **Copy/paste pattern creation** directly from the block editor
- **Pattern management interface** in the Phenix admin area
- **Full compatibility** with WordPress core pattern functionality

## Understanding Block Patterns

Block patterns are predefined arrangements of blocks that can be inserted into your content as a group. They help you quickly create complex layouts without having to build them from scratch each time. Patterns can include any combination of blocks with their respective settings and content.

## Accessing Block Patterns & Templates

To access the Block Patterns management interface:

1. In your WordPress admin, navigate to **Phenix Design System**
2. Select the **Data Collection** tab
3. Click on the **Block Patterns** sub-tab

<!-- Image placeholder for Block Patterns Interface -->

## Creating a New Block Pattern

To create a new block pattern:

1. Access the Block Patterns interface as described above
2. Click the **Add New Pattern** button
3. Fill in the following information:
   - **Pattern Title**: A descriptive name for your pattern
   - **Pattern Category**: Select an existing category or create a new one
   - **Pattern Content**: Paste the block code from the editor
   - **Preview Width**: Set a fixed width for the pattern preview (in pixels)
4. Click **Save Pattern**

### Getting Block Content for Patterns

To get the block content for your pattern:

1. Build your desired layout in the WordPress block editor
2. Select all blocks you want to include in your pattern
3. Click the three dots menu and select **Copy**
4. Paste this content into the Pattern Content field in the Phenix Block Patterns interface

<!-- Image placeholder for Adding a New Pattern -->

## Managing Block Patterns

The Block Patterns interface displays all your custom patterns with the following options:

| Option | Description |
|--------|-------------|
| Edit | Modify the pattern title, category, content, or preview width |
| Delete | Remove the pattern from your site |

## Using Block Patterns in the Editor

Once created, your custom patterns will be available in the WordPress block editor:

1. In the editor, click the **+** button to add a new block
2. Select the **Patterns** tab
3. Browse or search for your pattern by name or category
4. Click on the pattern to insert it into your content

<!-- Image placeholder for Using Patterns in the Editor -->

## Pattern Categories

Organizing patterns into categories helps you find them more easily in the editor. When creating or editing a pattern, you can:

1. Select an existing category from the dropdown
2. Enter a new category name to create it on the fly

Common pattern categories include:

- Headers
- Footers
- Hero Sections
- Call to Action
- Testimonials
- Pricing Tables
- Team Members
- Contact Forms

## Block Templates

In addition to patterns, the Phenix Design System supports block templates. Templates are similar to patterns but are used for entire page layouts rather than sections. They can be applied when creating new pages or posts.

### Creating Block Templates

Block templates are created in a similar way to patterns:

1. Design your complete page layout in the block editor
2. Copy all blocks
3. Create a new pattern as described above
4. Assign it to a "Templates" category

### Using Block Templates

To use a block template when creating a new page or post:

1. Go to **Pages** or **Posts** in your WordPress admin
2. Click **Add New**
3. In the new page/post screen, look for the template selector
4. Choose your custom template from the list
5. The template content will be pre-populated in the editor

## Best Practices

1. **Create patterns for repeating elements** to maintain consistency across your site

2. **Use descriptive names** that clearly indicate the pattern's purpose and content

3. **Organize patterns into logical categories** for easier discovery

4. **Set appropriate preview widths** that match how the pattern will be used

5. **Test patterns** in different contexts before making them widely available

6. **Update patterns centrally** when you need to make changes to repeating elements

7. **Document your patterns** for team members or clients who will be using them

## Common Pattern Use Cases

| Pattern Type | Description | Recommended Preview Width |
|--------------|-------------|---------------------------|
| Full-width Header | Site header with navigation | 1200px |
| Content Section | Standard content area with sidebar | 800px |
| Call to Action | Promotional section with button | 600px |
| Card Grid | Multiple card items in a grid layout | 900px |
| Testimonial Slider | Carousel of customer quotes | 700px |
| Footer | Site footer with multiple columns | 1200px |

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Pattern not appearing in editor | Refresh the page or clear your browser cache |
| Pattern preview looks different from actual insertion | Adjust the preview width to better match your theme's content width |
| Pattern content not pasting correctly | Ensure you're copying directly from the block editor, not the code editor |
| Categories not showing in editor | Verify category names are consistent and refresh the editor |

## Related Features

- [Custom Post Types](./custom-post-types.md)
- [Custom Taxonomies](./custom-taxonomies.md)
- [Responsive Menu Block](../blocks/responsive-menu-block.md)

