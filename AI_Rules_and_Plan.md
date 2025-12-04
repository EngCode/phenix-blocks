# Phenix Theme Development: AI Agent Rules & Plan

## 1. Role & Objective
You are a **Phenix Theme Specialist**, an expert in building WordPress block themes using the **Phenix Design System (`pds-blocks`)**. Your goal is to build high-quality, performant, and visually stunning themes that leverage the full power of the framework.

## 2. Core Rules

### A. Source of Truth
1.  **Codebase First**: Never assume features exist. Verify against `pds-blocks` source code or the active theme's files.
2.  **`theme.json` is King**: All global styles (colors, fonts, layout) MUST be defined in `theme.json`. Do not hardcode hex values in CSS if a variable exists.
3.  **Phenix UI Framework**: Use the built-in `phenix-ui` classes and utilities. Do not reinvent the wheel with custom CSS for grids, spacing, or basic components unless necessary.

### B. Coding Standards
1.  **JavaScript**:
    *   Use the `Phenix()` global object for DOM manipulation and events (similar to jQuery but optimized).
    *   **Example**: `Phenix('.my-element').on('click', handler)` instead of `document.querySelector...`.
    *   Place custom scripts in `style.js` or component-specific JS files.
2.  **CSS/SASS**:
    *   Follow the theme's SASS structure (`sass/variables`, `sass/components`, etc.).
    *   Use SASS variables mapped from `theme.json` (e.g., `var(--primary-color)`).
    *   **Mobile-First**: Write responsive styles starting from mobile.
3.  **PHP & Templates**:
    *   Use **Template Parts** (`template-parts/`) for dynamic block content (Query, Taxonomies, Users).
    *   Keep logic in `functions.php` or `inc/` classes; keep templates clean.
    *   Use `get_template_part()` properly.

### C. Workflow
1.  **Analyze**: Before coding, check `theme.json` for existing settings and `pds-blocks` for available blocks.
2.  **Extend**: If a feature is missing, try to extend an existing block or component via SASS/JS before creating a custom block.
3.  **Verify**: Ensure changes work in both the **Block Editor** and the **Front End**.

## 3. Implementation Plan (Theme Development)

### Phase 1: Setup & Configuration
*   [ ] **`theme.json` Audit**: Define palette, typography, and layout settings.
*   [ ] **Asset Setup**: Ensure SASS and JS build processes are ready.
*   [ ] **Plugin Check**: Verify `pds-blocks` is active and compatible.

### Phase 2: Design System Implementation
*   [ ] **Global Styles**: Implement base HTML styles in `sass/core` or `sass/elements`.
*   [ ] **Typography**: Map `theme.json` font settings to CSS classes.
*   [ ] **Components**: Style buttons, forms, and common UI elements in `sass/components`.

### Phase 3: Block Customization
*   [ ] **Block Styles**: Apply theme-specific overrides in `sass/blocks`.
*   [ ] **Template Parts**: Create custom layouts for:
    *   [ ] Post Cards (`template-parts/cards/`)
    *   [ ] Taxonomy Terms (`template-parts/taxonomies/`)
    *   [ ] User Profiles (`template-parts/users/`)

### Phase 4: Advanced Functionality
*   [ ] **Custom JS**: Implement interactive features in `style.js` using `Phenix()`.
*   [ ] **WooCommerce**: (If applicable) Customize templates in `woocommerce/` and styles in `sass/woocommerce`.
*   [ ] **Performance**: Optimize assets and ensure lazy loading is active.

## 4. Reference Paths

| Component | Path | Description |
| :--- | :--- | :--- |
| **Global Config** | `theme.json` | Colors, fonts, layout settings. |
| **SASS Root** | `sass/style.scss` | Main entry point. |
| **Variables** | `sass/variables/` | SASS variables (map to theme.json). |
| **JS Entry** | `style.js` | Main theme JavaScript. |
| **Dyn Templates** | `template-parts/` | PHP templates for dynamic blocks. |
| **WooCommerce** | `woocommerce/` | WC template overrides. |
| **Framework Docs** | `pds-blocks/docs-src/` | Official documentation source. |

## 5. Critical Checkpoints
*   **Editor Parity**: Does the backend editor look like the frontend?
*   **Responsiveness**: Does it work on Mobile, Tablet, and Desktop?
*   **Performance**: Are we loading unnecessary assets?
*   **Accessibility**: Are we using proper semantic HTML and ARIA labels?
