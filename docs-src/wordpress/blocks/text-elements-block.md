# Text Elements Block

## Overview

The Text Elements Block is a foundational content component in the Phenix Design System that provides multiple options for creating and styling text content. It offers a comprehensive set of controls for creating semantically correct text elements including headlines (h1-h6), paragraphs, span elements, and various list types. The block supports rich text editing with extensive typography controls, icon integration, and advanced styling options, making it ideal for creating structured, accessible, and visually appealing content throughout your WordPress site.

## Key Features

### Element Types

- **Headlines**: Create heading elements (h1-h6) with proper semantic structure
- **Paragraphs**: Standard text blocks with rich formatting options
- **Span Elements**: Inline text elements for specific styling needs
- **List Types**:
  - Bulleted lists (ul/li) with automatic bullet styling
  - Numbered lists (ol/li) with automatic numbering
  - Custom lists with advanced formatting options

### Typography Controls

- **Font Settings**: Complete control over font family, weight, and size
- **Text Styling**: Options for line height, letter spacing, and text transformation
- **Text Alignment**: Control text alignment with responsive options for different screen sizes
- **Text Colors**: Access to the complete Phenix Design System color palette
- **Text Decoration**: Options for underline, strike-through, and other decorative elements

### Interactive Features

- **URL Linking**: Convert text to links with customizable URL and new tab option
- **Dynamic URL Support**: Built-in page/post selection with search functionality
- **Icon Integration**: Add icons from the icon library with size and position controls

### Advanced Styling

- **Background Options**: Apply colors, gradients, and other background styles
- **Spacing Control**: Precise padding and margin settings with responsive options
- **Border Settings**: Customizable border style, width, color, and radius
- **Position Control**: Configure element positioning with coordinates and z-index
- **Visual Effects**: Apply shadows, opacity changes, and other visual enhancements

### Responsive Design

- **Breakpoint Controls**: Configure different styles for mobile, tablet, laptop, and desktop
- **Adaptive Typography**: Adjust text properties per screen size
- **Responsive Spacing**: Control margins and padding across breakpoints

## How to Use

1. Add the Text Elements Block to your page:
   - In the WordPress editor, click the "+" button to add a new block
   - Search for "Text Element" or find it in the "Phenix Blocks" category

2. Select the text element type:
   - Use the dropdown in the toolbar to choose from Headline, Paragraph, Span, or List types
   - For headlines, select the appropriate heading level (H1-H6) from the second dropdown

3. Enter your content:
   - Click on the block to edit the text directly in the editor
   - Use the rich text formatting options in the WordPress editor for basic formatting

4. Style your text:
   - Use the Style Options dropdown in the toolbar to set colors and backgrounds
   - Configure typography settings using the Typography dropdown
   - Adjust spacing, borders, and other styling as needed

5. Add interactivity (optional):
   - Click the link icon to convert the text to a link
   - Click the icon button to add an icon to your text

6. Configure responsive behavior:
   - Use the responsive tabs in the dropdowns to set different styles for each breakpoint
   - Adjust typography, spacing, and alignment for different screen sizes

## Block Settings

### Toolbar Controls

The Text Elements Block provides the following controls in the top toolbar:

| Control | Description |
|---------|-------------|
| Text Type | Dropdown to select the type of text element (Headline, Paragraph, Span, List Bullets, List Numbers, List Custom) |
| HTML Tag | For headlines, dropdown to select the heading level (H1-H6) |
| Style Options | Dropdown for colors, backgrounds, and gradients with access to the Phenix Design System color palette |
| Typography Options | Dropdown for font family, weight, size, alignment, and other text styling options with responsive controls |
| Size Options | Dropdown for width/height settings with responsive options |
| URL Options | When link is enabled, provides URL input, page selection, and new tab toggle |
| Icon Options | When icon is enabled, provides icon selection, size options, and position control |
| Animation Options | When animations are enabled, provides settings for motion effects |
| Padding Options | When padding is enabled, provides controls for inner spacing with responsive options |
| Margin Options | When margin is enabled, provides controls for outer spacing with responsive options |
| Position Options | When position is enabled, provides controls for layout positioning with responsive options |
| Border Options | When border is enabled, provides controls for border style, width, color, and radius |
| Effects Options | When effects are enabled, provides controls for shadows, opacity, and other visual enhancements |

### Sidebar Panels

#### General Settings Panel

| Control | Description |
|---------|-------------|
| HTML ID | Text input for setting a custom ID (useful for anchors and JavaScript targeting) |
| Style Support | Toggle switches to enable/disable various styling features including animations, padding, margin, border, and effects |

## Common Use Cases

### Headline Element

To create a styled heading with proper semantic structure:

1. Add the Text Elements Block to your page
2. Select "Headline" from the Text Type dropdown
3. Choose the appropriate heading level (H1-H6)
4. Enter your heading text
5. Configure typography and styling as needed

### Paragraph with Icon

To create a paragraph with an icon for visual emphasis:

1. Add the Text Elements Block to your page
2. Select "Paragraph" from the Text Type dropdown
3. Enter your paragraph text
4. Click the icon button in the toolbar
5. Select an icon from the icon library
6. Configure icon size and text styling

### Linked Text

To create text that links to another page or external site:

1. Add the Text Elements Block to your page
2. Enter your text content
3. Click the link icon in the toolbar
4. Use the URL picker to select a page/post or enter a URL
5. Enable "Open in New Tab" if needed

### Bulleted List

To create a list with bullet points:

1. Add the Text Elements Block to your page
2. Select "List Bullets" from the Text Type dropdown
3. Enter your list items (press Enter to create new items)
4. Format individual list items as needed
5. Configure list styling through the Style Options

### Numbered List

To create a numbered list:

1. Add the Text Elements Block to your page
2. Select "List Numbers" from the Text Type dropdown
3. Enter your list items (press Enter to create new items)
4. Format individual list items as needed
5. Configure list styling through the Style Options

### Custom List

To create a list with custom formatting:

1. Add the Text Elements Block to your page
2. Select "List Custom" from the Text Type dropdown
3. Add Text List Item blocks inside the custom list
4. Configure each list item individually
5. Style the overall list container as needed

## Technical Implementation

The Text Elements Block is implemented with the following key attributes:

```js
// Core attributes
id: { type: "string", default: "" },
type: { type: "string", default: "paragraph" },
tagName: { type: "string", default: "p" },
content: { type: "string", default: "" },

// Style-related objects
setting: { type: "object", default: {} },
typography: { type: "object", default: {} },
style: { type: "object", default: {} },
responsive: { type: "object", default: {} }
```

The block renders different HTML elements based on the selected type:

```jsx
// In save function
return (
  <>
    {attributes.type === "list" ? (
      <RichText.Content {...blockProps} multiline="li" tagName={"ul"} value={attributes.content} />
    ) : attributes.type === "list-numbers" ? (
      <RichText.Content {...blockProps} multiline="li" tagName={"ol"} value={attributes.content} />
    ) : attributes.type === "list-custom" ? (
      <ul {...blockProps}>
        <InnerBlocks.Content />
      </ul>
    ) : (
      <RichText.Content {...blockProps} tagName={TagName} value={attributes.content} />
    )}
  </>
);
```

## Best Practices

### Content Structure

- Use the appropriate element type for your content (headline for titles, paragraph for body text, etc.)
- Follow heading hierarchy (H1 for main title, H2 for sections, H3 for subsections, etc.)
- Use semantic HTML tags to improve accessibility and SEO
- Keep content concise and well-structured

### Typography

- Maintain consistent font usage across your site
- Use appropriate font sizes for readability (minimum 16px for body text)
- Set line heights that enhance readability (typically 1.5-1.8 for body text)
- Ensure sufficient contrast between text and background colors
- Use text alignment purposefully (left-aligned for most Western language content)

### Styling Approach

- Enable only the style features you need to keep the editor interface focused
- Apply consistent spacing using the padding and margin controls
- Use the typography controls to maintain text styling consistency
- Configure responsive settings starting from mobile and working up to larger screens

### Accessibility

- Use proper heading structure for document outline
- Maintain sufficient color contrast (minimum 4.5:1 for normal text)
- Avoid using color alone to convey meaning
- Test content with screen readers to ensure proper reading flow

## Related Blocks

- [Button Block](./button-block.md) - For call-to-action elements
- [Group Block](./group-block.md) - For grouping text elements together
- [Container Block](./container-block.md) - For creating structured layouts containing text
- [Media Element Block](./media-element-block.md) - For combining text with media
