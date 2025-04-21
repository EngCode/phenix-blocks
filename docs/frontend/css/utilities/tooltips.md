# Tooltips

Tooltip utilities in the Phenix Design System allow you to add simple informational popups to elements when users hover over them, without requiring JavaScript.

## Overview

Tooltips provide context or additional information for UI elements.

## Usage

Add the `.tooltip` class for a tooltip that appears above the element, or `.tooltip-bottom` for one that appears below. The tooltip content is taken from the `data-title` attribute, falling back to the `title` attribute if `data-title` is not present.

```html
<!-- Default tooltip (appears on top) -->
<span class="tooltip" data-title="This is a tooltip that appears above.">Hover me (Top)</span>

<!-- Bottom tooltip -->
<span class="tooltip-bottom" data-title="This tooltip appears below the element.">Hover me (Bottom)</span>

<!-- Tooltip using the title attribute as fallback -->
<span class="tooltip" title="This content comes from the title attribute.">Hover me (Title Fallback)</span>
```

## How It Works

The tooltip classes use CSS pseudo-elements (`::before` and `::after`) to display the tooltip content. The content is styled with default padding, background, and text color.

## Customization

Tooltip appearance (background, text color, border-radius) can be customized using CSS variables, if defined in the theme (check SCSS source for specifics).

## Use Cases

-   Providing definitions for icons or abbreviations.
-   Giving brief instructions for form fields.
-   Displaying full text for truncated elements.

```html
<!-- Tooltip for an icon button -->
<button class="btn icon tooltip" data-title="Save your changes">
  <i class="fas fa-save"></i>
</button>

<!-- Tooltip for an abbreviation -->
<p>Learn about <abbr class="tooltip" data-title="Cascading Style Sheets">CSS</abbr>.</p>
```

## Best Practices

1.  **Keep it brief**: Tooltips should contain short, concise information.
2.  **Don't rely on tooltips for critical info**: Information essential for task completion should be visible directly in the UI.
3.  **Use sparingly**: Overuse of tooltips can clutter the interface.

## Accessibility Considerations

-   **Keyboard Access**: Pure CSS tooltips triggered by hover are generally not accessible via keyboard navigation.
-   **Screen Readers**: Screen readers may not announce tooltip content reliably. The `title` attribute offers better accessibility support but might not be announced consistently either.
-   For accessible tooltips, especially those containing important information or interactive elements, consider using a JavaScript-based solution that handles focus management and ARIA attributes correctly. 