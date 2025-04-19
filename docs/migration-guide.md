# Content Migration Guide

This guide outlines the process for migrating and creating content for the Phenix Design System documentation.

## Sources of Content

The main sources for documentation content are:

1. **Existing Phenix Website**: Content from the current website documentation
2. **Structure.md Links**: URLs provided in `structure.md` pointing to existing documentation
3. **Source Code**: Comments and documentation from the codebase itself
4. **Developer Knowledge**: Information provided by the development team

## Migration Process

### Step 1: Set Up Placeholder Files

Run the provided script to create placeholder files for all documentation pages:

```bash
cd docs
node scripts/create-placeholders.js
```

This will create the full directory structure with placeholder files for all pages.

### Step 2: Identify Content Sources

For each placeholder file:
1. Locate the matching URL in `structure.md`
2. Visit the URL to view the existing documentation
3. Determine which portions of the existing content should be migrated

### Step 3: Content Migration

When migrating content:

1. **Follow the Template**: Use the structure from `template.md` as a guide
2. **Update Content**: Replace the placeholder content with actual documentation
3. **Add Code Examples**: Include practical, working examples
4. **Include Diagrams/Images**: Add visual aids where appropriate
5. **Cross-Reference**: Link to related pages within the documentation

### Step 4: Content Enhancement

Once the basic content is in place:

1. **Add More Examples**: Expand with additional usage examples
2. **Include Edge Cases**: Document limitations and special cases
3. **Add Best Practices**: Include recommendations for optimal usage
4. **Improve Accessibility Info**: Add details about accessibility features

### Step 5: Review and Publishing

Before publishing:

1. **Technical Review**: Ensure accuracy of all technical details
2. **Consistency Check**: Verify consistent terminology and formatting
3. **Link Verification**: Test all internal and external links
4. **Build and Test**: Verify the documentation builds correctly with VitePress

## Document Structure Guidelines

### Standard Document Sections

1. **Title**: Clear, descriptive title (`# Title`)
2. **Overview**: Brief description of the feature/component
3. **Basic Usage**: Simple example of how to use the feature
4. **Options and Properties**: Detailed specs in table format
5. **Examples**: Multiple real-world usage examples
6. **Advanced Usage**: More complex implementation scenarios
7. **API Reference**: Detailed API documentation if applicable
8. **Related Content**: Links to related documentation pages

### Formatting Guidelines

- Use **bold** for emphasis of important points
- Use `code blocks` for code examples
- Use tables for properties and options
- Use blockquotes for notes and warnings
- Use numbered lists for sequential steps
- Use bullet lists for non-sequential items

## Example Migration

**Original Website Content:**
```
The Button Component
A versatile button component with multiple styles and sizes.

Usage:
<button class="px-btn">Default Button</button>
<button class="px-btn primary">Primary Button</button>
```

**Migrated Documentation:**
```markdown
# Button Component

The Button component provides a versatile, customizable button with various styles, sizes, and states.

## Basic Usage

```html
<button class="px-btn">Default Button</button>
<button class="px-btn primary">Primary Button</button>
```

## Options

| Class | Description |
|-------|-------------|
| `px-btn` | Base button class |
| `primary` | Primary style |
| `large` | Large size |
| `small` | Small size |

... etc.
```

## Timeline

Aim to migrate high-priority documentation first:
1. Core components and utilities
2. Getting started guides
3. WordPress integration
4. Advanced features 