---
name: phenix-coding-style
description: Coding style guide for the Phenix WordPress design system. Ensures all AI-generated code matches Abdullah's existing patterns, vocabulary, and architectural decisions.
triggers:
  - "whenever modifying phenix code"
  - "whenever writing PHP/SASS/JS for pds-blocks"
  - "whenever suggesting code changes to the phenix project"
  - "whenever creating new files for the plugin"
---

# Phenix Coding Style Guide

This skill governs how AI generates and modifies code for the Phenix project.

## Philosophy

- **Practical over theoretical.** Code must work for the Egyptian WordPress market, not win design awards.
- **Backward compatibility is sacred.** Do not break existing sites without a migration path.
- **WordPress is the ecosystem.** We extend it, not fight it.
- **Simplicity over cleverness.** If a solution requires a PhD to understand, it is wrong.
- **The builder owns the system.** Code must be readable by the person who maintains it alone.

## Comment Conventions

### Section Headers (Major divisions)
```php
/*==== Section Name ====*/
```
```scss
/*==== Section Name ====*/
```
```js
/*==== Section Name ====*/
```

### Inline Comments
```php
//===> What this does <===//
```
```scss
//===> What this does <===//
```
```js
//===> What this does <===//
```

### Comment Rules
- Comments explain the *intent*, not the mechanics. Bad: `// increment i`. Good: `// move to next breakpoint`.
- Section headers are uppercase. Inline comments are sentence case.
- No block comments (`/* */`) for inline notes. Only for section headers.

## PHP Conventions

### Naming
- Classes: `PDS_ClassName` (Phenix prefix, PascalCase)
- Static methods: `camelCase()`
- Variables: `snake_case`
- Properties: `snake_case`
- Constants: `UPPERCASE`

### Structure
- Prefer static methods inside classes over global functions.
- Use `self::` for internal references.
- Use `add_action()` and `add_filter()` at the bottom of the file, not inside class constructors.
- Use WordPress standard functions: `get_post_meta()`, `update_post_meta()`, `wp_head`, `save_post`.
- Use PHP 8 features only when they make the code simpler: `str_starts_with()`, `str_contains()`, `??` for defaults, nullsafe `?->`.
- Skip attributes, enums, and named arguments unless they genuinely improve readability.

### Function Style
```php
public static function method_name($arg, $default = '') {
    // logic
    return $result;
}
```
- No type hints unless required for clarity.
- No return type declarations unless the function always returns the same type.
- Keep functions under 30 lines. Break into smaller functions if longer.

## SASS Conventions

### Naming
- Variables: `$lowercase_with_underscore`
- Mixins: `make_mixin_name()` (prefix with `make_` for generators)
- Functions: `function_name()` or `REM()` for uppercase utilities
- Partials: `_name.scss`
- Files: `_padding.scss`, `_margin.scss`

### Structure
```scss
/*==== Imports ====*/
@import '../assets/mixin';

/*==== Variables ====*/
$space_range : 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100;

/*==== Mixin Definition ====*/
@mixin make_something($infix:'') {
    @each $size in $space_range {
        //===> Logic <===//
        .class#{$infix}-#{$size} { @include other-mixin(#{REM($size)}, 'start'); }
    }
}

/*==== Base Screen ====*/
@include make_something();

/*==== Medium Screen ====*/
@include medium(){
    @include make_something('-md');
};
```

### Rules
- Use `$direction-start` and `$direction-end` for RTL, not `left` and `right`.
- Use `REM()` for converting px to rem. Do not hardcode rem values.
- Use `$space_range` for spacing scales. Do not generate arbitrary values in SASS.
- Custom values go to the collector, not the SASS.
- Breakpoint infixes: `-md`, `-lg`, `-xl` (lowercase).
- Always import `../assets/mixin` at the top.

## JavaScript/TypeScript Conventions

### Naming
- Variables: `camelCase`
- Classes: `PascalCase`
- Methods: `camelCase`
- Constants: `UPPERCASE` or `camelCase` depending on context

### Rules
- Use `let` and `const`, not `var`.
- Use `forEach` for iteration, not `for` loops unless performance-critical.
- Use template literals: `` `${value}` ``.
- Use `Phenix(document).method()` for chaining, not jQuery.
- Keep functions under 30 lines.
- Do not use `async/await` unless necessary. Prefer callbacks for simple cases.
- Do not use classes unless necessary. Prefer objects and functions.
- If extending a prototype, document why: `//===> Adding Method to Elements <===//`.

## Block Editor (Gutenberg) Rules

### API Version & iframe Context
- All blocks must use `"apiVersion": 3` in `block.json`. API v2 is deprecated from WordPress 6.9+.
- In API v3, the block editor renders inside an iframe. The block's `document` is the iframe's document, not the admin page document.
- **Never** use `document.querySelector('.block-editor-list-view-tree ...')` or any selector targeting the admin DOM from inside a block's `edit.js`. It will return `null` in the iframe context.
- For block list-view naming, rely on `supports.renaming` + `metadata.name` (WordPress 6.5+ native behavior) instead of manual DOM manipulation.
- For `viewScript` scripts that need to interact with the editor canvas, use `document` directly (it is already the iframe document in API v3). Do not query `iframe[name="editor-canvas"]`.

### Block JSON
- Keep `block.json` as the single source of truth for block metadata.
- Use `supports.__experimentalMetadata` for custom naming, not DOM hacks.

## Architecture Rules

### Plugin vs. Theme
- The plugin is the engine. The theme is the paint.
- All logic, CSS, JS, and backend tools live in the plugin.
- The theme only provides `theme.json`, template parts, and color mappings.
- Blocks are portable because the plugin is the unit, not the block.

### Block System
- All blocks share `OptionsRenderer`. Do not duplicate logic.
- Block attributes are grouped into objects: `style`, `responsive`, `flexbox`, `typography`.
- The renderer pattern-matches attribute names and routes to CSS classes.
- Custom values are handled by the collector, not inline styles.

### CSS/JS Output
- CSS is compiled to static files. No runtime CSS generation in the browser.
- JavaScript is compiled to a single bundle. Extensions are separate files.
- The output must survive WordPress optimization plugins (combine, minify, cache).
- No `this` references in the UMD wrapper. Use `window` global.

### Icon Font Architecture
- All icon fonts use `::before` pseudo-elements for `font-family`, `font-weight`, and smoothing. Text inside the element is unaffected.
- **Admin + block editor internal UI** uses a dedicated icon font (Font Awesome solid) loaded independently of the user's frontend icon font choice. Hardcoded toolbar icons, checkboxes, and dropdown triggers should use `fas` classes.
- **User-facing block icons** (icon-element, button icons, etc.) use the user's selected icon font via attributes.
- Generate per-weight JSON files from actual font files (SVG/TTF), not full metadata.
- Store JSON in `assets/json/` with naming: `fa{ver}-solid.json`, `fa{ver}-regular.json`, `fa{ver}-brands.json`, `ui-icons.json`.
- Default icon font for frontend is `ui-icons-rounded`. Pro versions removed for WordPress.org compliance.
- `pds-assets.php` must default to `ui-icons-rounded` and migrate old values (`fontawesome-5` → `fontawesome-5-free`, `ui-icons` → `ui-icons-straight`).
- Provide a `none` option to disable the icon font entirely.

## What to Avoid

- Do not add "advanced", "enhanced", "extensive" to descriptions. Just say what it does.
- Do not create abstract classes or interfaces unless they solve a real problem.
- Do not use design patterns for their own sake. Use the simplest solution.
- Do not break the existing API without a migration path.
- Do not add dependencies that require Node version pinning. `engine-strict=false` in `.npmrc`.
- Do not use `npm audit fix --force`. Evaluate each vulnerability manually.
- Do not write code that only works on one OS. Use `path.join()` and cross-platform logic.
- Do not delegate large batch tasks to subagents; do the work directly.

## How to Present Code

1. Show the exact diff, not abstract descriptions.
2. Explain *why* the change is needed, not *what* the code does.
3. If suggesting a new file, show the full file content.
4. If modifying an existing file, show the `old_string` and `new_string` for `Edit`.
5. Never suggest `Write` for incremental changes. Use `Edit` only.
6. After any code change, verify the file is still syntactically valid.
7. State what was done, what failed, and what is next — no excessive preamble.
8. Avoid excessive tables, matrices, or appendices unless explicitly requested.

## PHP Security Rules (Non-Negotiable)

- **Escaping:** Always escape output with `esc_html()`, `esc_attr()`, `esc_url()`, or `wp_kses_post()`.
- **Nonces:** Verify `wp_verify_nonce()` on every form submission and REST endpoint.
- **Type hints:** Add `array`, `string`, `int`, `bool` type hints to function parameters where the type is known.
- **No raw SQL:** Use `$wpdb->prepare()` for all database queries.
- **No `echo` without escaping:** Never output user-provided or variable content directly.
- **Use `require_once`:** Never use `include()` for plugin files. Use `require_once` to prevent redeclaration crashes.
- **Cache expensive operations:** Use `set_transient()` and `get_transient()` for disk I/O and repeated calculations.
- **Strict comparison:** Use `===` and `!==` instead of `==` and `!=` when comparing strings and booleans from `get_option()`.
- **No `$_GET`/`$_POST` without sanitization:** Use `sanitize_text_field()`, `sanitize_email()`, `absint()`, `rest_sanitize_boolean()` as appropriate.

## PHP Performance Rules

- **Do not call `register_setting()` on every `admin_init`:** Register once on plugin activation. Unregister on deactivation.
- **Cache `DirectoryIterator` results:** `pds_get_theme_parts()` should cache in a transient, not scan disk on every call.
- **Cache `is_rtl()`:** The result does not change per request. Store it once.
- **Avoid `get_option()` in inner loops:** WordPress caches options, but repeated calls in loops add up. Use a static variable or local variable.
- **Use `require_once` not `include()`:** `include()` silently fails. `require_once` crashes and tells you what is missing.

## PHP Style Rules

- **Function wrappers:** `if (!function_exists('pds_function_name')) :` is the standard. Keep it.
- **File headers:** Include the `ABSPATH` guard and a docblock with `@since` and `@return`.
- **Prefix everything:** `pds_` for general functions, `phenix_` for core functions, `PDS_` for classes.
- **No global variables:** Use static class properties or `get_option()` instead of `$GLOBALS`.
- **Group related functions into classes:** When a file has 10+ related functions, wrap them in a class with static methods. Example: `PDS_Optimizer`, `PDS_Assets`, `PDS_Admin`.
- **Docblocks:** Keep them minimal. One `@since`, one `@return`, one description line. No essays.

## Key Vocabulary

| Concept | Term |
|---------|------|
| Design system | Phenix |
| Block attribute object | `style`, `responsive`, `flexbox` |
| Attribute renderer | `OptionsRenderer` |
| CSS utility class | `pd-15`, `pdt-md-30`, `col-6` |
| Custom value class | `pdt-120`, `pdt-md-150` (no "custom" suffix) |
| RTL direction | `$direction-start`, `$direction-end` |
| Spacing scale | `$space_range` |
| Breakpoint | `sm`, `md`, `lg`, `xl` |
| PHP class prefix | `PDS_` |
| JavaScript global | `window.Phenix` |
| Icon font base (UI Icons) | `fi` |
| Icon font style | `fi-straight`, `fi-rounded` |
| Icon font weight | `fi-regular`, `fi-bold`, `fi-solid` |
| Frontend icon default | `ui-icons-rounded` |
| Admin/block editor icon font | `fas` (Font Awesome solid) |

## When to Ask

If the request involves:
- Changing the SASS scale (0–100)
- Adding new breakpoint names
- Renaming existing classes or methods
- Changing the `OptionsRenderer` pattern-matching logic
- Removing backward compatibility
- Adding a new PHP 8 feature that breaks PHP 7.4 compatibility
- Changing the database schema or adding custom tables
- Removing a security measure (nonces, escaping, capability checks)
- Changing the icon font default or adding a new icon font family
- Removing or modifying the `::before` icon approach
- Changing the JSON generation logic for icon weights
- Changing which icon font loads for admin/block editor internal UI

Then ask for confirmation before implementing. These are architectural decisions, not implementation details.
