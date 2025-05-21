# Table of Content

## Overview

The Phenix Table of Content feature automatically generates a navigation menu from the headings (h2, h3, h4) in your content. This creates a structured table of contents that helps users navigate through long content pages by providing quick links to each section.

## Implementation

To use the Table of Content feature, you need to:

1. Add a container with the ID `table-of-content-list` to your page
2. Have content with headings (h2, h3, h4) inside an element with the class `.entry-content`
3. Initialize the utilities with the 'seo' type

```html
<!-- Table of Contents Container -->
<ul id="table-of-content-list"></ul>

<!-- Content with headings -->
<div class="entry-content">
  <h2>First Section</h2>
  <p>Content goes here...</p>
  
  <h3>Subsection</h3>
  <p>More content...</p>
  
  <h2>Second Section</h2>
  <p>Additional content...</p>
</div>
```

```js
// Initialize Table of Content
Phenix(document).utilities({
  type: 'seo'
});

// Or initialize all utilities including Table of Content
Phenix(document).utilities();
```

## How It Works

Once initialized, the Table of Content functionality:

1. Scans your content for headings (h2, h3, h4)
2. Automatically assigns IDs to each heading (section-0, section-1, etc.)
3. Creates a hierarchical navigation menu based on heading levels
4. Adds smooth scrolling links to each section

## Hierarchical Structure

The Table of Content respects the hierarchy of your headings:

- `h2` elements become top-level items in the menu
- `h3` and `h4` elements become nested items under the preceding `h2`

For example, this content structure:

```html
<h2>Main Topic</h2>
<h3>Subtopic 1</h3>
<h4>Detailed Point</h4>
<h3>Subtopic 2</h3>
<h2>Another Main Topic</h2>
```

Will generate this navigation structure:

```
- Main Topic
  - Subtopic 1
    - Detailed Point
  - Subtopic 2
- Another Main Topic
```

## Generated HTML Structure

The Table of Content generates a hierarchical navigation menu with the following HTML structure:

```html
<ul id="table-of-content-list">
  <li class="tx-nowrap">
    <a href="#section-0" class="smoth-scroller">Main Topic</a>
    <ul class="table-of-content-menu pdx-15">
      <li class="tx-nowrap">
        <a href="#section-1" class="smoth-scroller">Subtopic</a>
      </li>
    </ul>
  </li>
  <li class="tx-nowrap">
    <a href="#section-2" class="smoth-scroller">Another Topic</a>
  </li>
</ul>
```

The following CSS classes are used:

- `#table-of-content-list` - The main container
- `.table-of-content-menu` - Nested menus for subtopics
- `.tx-nowrap` - Prevents text wrapping in menu items
- `.smoth-scroller` - Enables smooth scrolling to sections
- `.pdx-15` - Adds padding to nested menus

## Example Usage

### Basic Table of Contents

```html
<!-- Table of Contents Container -->
<div class="card mb-20">
  <div class="card-header">
    <h3>Table of Contents</h3>
  </div>
  <div class="card-body pdx-15">
    <ul id="table-of-content-list"></ul>
  </div>
</div>

<!-- Content with headings -->
<div class="entry-content">
  <h2>Introduction</h2>
  <p>Content goes here...</p>
  
  <h3>Background</h3>
  <p>More content...</p>
  
  <h2>Getting Started</h2>
  <p>Additional content...</p>
</div>
```

### Sidebar Table of Contents

```html
<div class="flexbox">
  <div class="col-3">
    <div class="position-sticky" style="top: 20px;">
      <h4>On This Page</h4>
      <ul id="table-of-content-list"></ul>
    </div>
  </div>
  <div class="col-9 entry-content">
    <h2>Introduction</h2>
    <p>Content goes here...</p>
    
    <h3>Background</h3>
    <p>More content...</p>
    
    <h2>Getting Started</h2>
    <p>Additional content...</p>
  </div>
</div>
```

### Horizontal Table of Contents

```html
<div class="mb-30">
  <ul id="table-of-content-list" class="flexbox reset-list"></ul>
</div>

<div class="entry-content">
  <h2>Section 1</h2>
  <p>Content for section 1...</p>
  
  <h2>Section 2</h2>
  <p>Content for section 2...</p>
  
  <h2>Section 3</h2>
  <p>Content for section 3...</p>
</div>
```

## Styling the Table of Contents

You can customize the appearance of your Table of Contents using CSS:

```css
/* Main container */
#table-of-content-list {
  list-style: none;
  padding-left: 0;
}

/* Links */
#table-of-content-list a {
  display: block;
  padding: 5px 0;
  color: var(--primary-color);
  text-decoration: none;
}

/* Nested lists */
#table-of-content-list ul {
  list-style: none;
  margin-left: 15px;
}

/* Hover effect */
#table-of-content-list a:hover {
  text-decoration: underline;
}
```

## Integration with Smooth Scroll

The Table of Content automatically integrates with Phenix's Smooth Scroll functionality, creating a seamless navigation experience. The links generated in the table of contents include the `smoth-scroller` class, which enables smooth scrolling to the target sections.

## Best Practices

- Use meaningful and descriptive headings in your content
- Maintain a logical hierarchy of headings (h2 → h3 → h4)
- For long pages, use a sticky position for the table of contents
- Consider adding a title above the table of contents for clarity
- Place the table of contents near the top of the page for easy access
- For mobile devices, consider making the table of contents collapsible

## Browser Compatibility

The Table of Content functionality is compatible with all modern browsers and uses standard DOM manipulation techniques for generating the navigation menu.
