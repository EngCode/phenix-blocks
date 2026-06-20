# Changelog

All notable changes to Phenix Blocks will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] — 2025-06-17

### Added
- Extension build system: `typescript.webpack.ext.js` for compiling add-on JS (WooCommerce, etc.) as separate files
- WooCommerce integration as an extension: `assets/js/woocommerce.js` auto-enqueued when WooCommerce is active
- `phenix-stub.ts` for extensions to read `Phenix` and `PhenixElements` from `window` instead of bundling the core
- Script defer auto-propagation: any script that declares `phenix` as a dependency is automatically deferred
- `npm run build` one-shot production build command
- `npm run sass-debug` verbose SASS watch for debugging
- `PDS_Spacing_Collector` PHP class for generating flat CSS classes on `save_post` instead of nested CSS variables
- `wp_strip_all_tags()` sanitization on CSS collector output in `wp_head`

### Changed
- **Build scripts cleaned up:**
  - `npm run watch` replaces `npm run phenix-start` (runs all 4 watchers)
  - `npm run sass` replaces `npm run phenix-sass` (watch mode, `--poll` on Windows)
  - `npm run ts` replaces `npm run phenix-ts` (watch mode)
  - `npm run ext` replaces `npm run phenix-ext` (watch mode)
  - `npm run blocks` replaces `npm run phenix-blocks`
  - `npm run animate` replaces `npm run animate-sass`
- `typescript.webpack.js`: `library.type` changed to `umd` with `export: 'default'` to fix internal module resolution and make `window.Phenix` available to extensions
- `src/scripts/tsconfig.json`: `"module": "commonjs"` to remove ES module helper pollution from compiled output
- `src/scripts/index.ts`: `PhenixElements` now attached to `window.Phenix.PhenixElements` for external access
- All `get_option() == "on"` changed to strict `=== "on"` across all PHP files (`pds-assets.php`, `pds-optimizer.php`, `pds-woocommerce.php`, `woo-functions.php`, `admin/panels/optimization.php`)
- All critical `include()` calls changed to `require_once()` in `pds-blocks.php` and `inc/pds-assets.php`

### Security
- REST API write endpoint (`/options`) now verifies `X-WP-Nonce` with `wp_verify_nonce()` before allowing `update_option()` calls
- `pagination()` in `inc/pds-functions.php` now escapes class names with `esc_attr()` and link output with `wp_kses_post()`
- Admin panel rendering now escapes all dynamic output:
  - `page-creator.php`, `page-layout.php`: `esc_attr()` on tab slugs, `esc_html()` on descriptions
  - `toggle-controls.php`: `esc_attr()` on checkbox names, `esc_html()` on titles
  - `metabox-creator.php`: `esc_html()` on labels
  - `loading.php`: `esc_attr()` on background, `esc_url()` on image, `wp_kses_post()` on custom code, `esc_html()` on text
  - `pds-functions.php` template select: `esc_attr()` on option values, `esc_html()` on labels
  - `woo-functions.php`: `esc_attr()` on all form attributes, `esc_url()` on variation images, `esc_html()` on labels
  - All panels (`fonts-settings`, `post-types`, `metabox`, `taxonomies`, `import-export`): `esc_attr()` on option values, `esc_html()` on labels
- Constant typo fixed: `PDS_BLOCKS_VERSTION` → `PDS_BLOCKS_VERSION` across all 4 files

### Font Awesome & Icon Fonts
- **REMOVED Font Awesome Pro** — all pro font files (duotone, light, thin, sharp variants) removed from `assets/webfonts/` for WordPress.org compliance
- **ADDED Font Awesome Free** — legitimate free versions v5, v6, v7 with `all.min.css` and `woff2`-only webfonts
- **ADDED UI Icons (Flaticons)** — flaticons.com UI font with 2 styles (straight/rounded) and 3 weights (regular/bold/solid)
- **Restructured Font Awesome assets:**
  - `assets/webfonts/fontawesome-{5,6,7}-free.css` — minified CSS entry files
  - `assets/webfonts/font-awesome-{5,6,7}-free/` — `woff2`-only font directories
- **Restructured UI Icons assets (Font Awesome-style):**
  - `assets/webfonts/ui-icons-straight.css` — common font-family `uicons-straight`, 3 `@font-face` with font-weight mapping (400/700/900), weight classes (`.fi-regular`, `.fi-bold`, `.fi-solid`), style class (`.fi-straight`), unprefixed icon content classes (`.fi-add:before`)
  - `assets/webfonts/ui-icons-rounded.css` — same structure for `uicons-rounded`
  - `assets/webfonts/ui-icons/` — flat directory with 6 `woff2` files only (no `.woff`, `.eot`, `.ttf`)
- **Admin panel (`fonts-settings.php`)** — now offers 6 options: None, UI Icons Straight, UI Icons Rounded, Font Awesome v5/v6/v7 Free
- **Default icon font** changed from `fontawesome-6` to `fontawesome-7-free`
- **Added Disable option** (`none`) — when selected, no icon font CSS is enqueued
- **Backward compatibility:**
  - Old values `fontawesome-5`, `fontawesome-6`, `fontawesome-*-pro` automatically migrated to free equivalents
  - Old value `ui-icons` automatically migrated to `ui-icons-straight`
- **PHP (`pds-assets.php`)** — handles `ui-icons-straight`/`ui-icons-rounded` display names and paths, supports disable option, migrates old pro values
- **Icon Picker (`icons.js`)** — fully refactored:
  - Removed pro icon types (fat, fal, fad, fast, fasl, fass, fasr)
  - Added UI Icons support with 6 combined style+weight options (e.g., `fi-straight fi-regular`)
  - Dynamic type switching, single JSON file for all UI icons
  - FA7 brands included in free JSON (no separate brands file needed)
- **Generated JSON from CSS** — new `assets/json/` files:
  - `fa5-free.json` (1458 icons), `fa6-free.json` (1895 icons), `fa7-free.json` (1970 icons)
  - `ui-icons.json` (355 icons) — single file for all UI icon names
  - Removed old `fa5-pro.json`, `fa6-pro.json`, `ui-icons-{style}-{weight}.json` (6 files)
- **Old pro directories removed** — `font-awesome-5/` (pro), `font-awesome-6/` (pro), old CSS files `fontawesome-5.css`, `fontawesome-6.css`, combined `ui-icons.css`

### Removed
- `.pdt-custom`, `.pdb-custom`, `.pds-custom`, `.pde-custom` and margin equivalents from SASS source
- Nested CSS variable fallback cascade (`var(--pdt-md, var(--pdt-lg, var(--pdt)))`) from SASS utilities
- Inline style bloat from custom padding/margin values — now handled by the PHP collector
- `node-sass`, babel packages, `webpack-dev-server`, `eslint-plugin-react` from dev dependencies

## [1.5.0] — 2025-06-15

### Added
- `.npmrc` with `engine-strict=false` for Node 20+ compatibility
- Block auto-discovery via `glob` in `webpack.config.js`

### Changed
- Replaced `node-sass` with Dart `sass` (v1.80)
- Upgraded `webpack` to 5.95, `ts-loader` to 9.5.1, `typescript` to 5.6
- Upgraded `@wordpress/scripts` to v30
- Removed explicit babel packages (bundled by `@wordpress/scripts`)
- Removed `@wordpress/server-side-render` and `@wordpress/blocks` from explicit dependencies
- Removed `webpack-dev-server` and `eslint-plugin-react`

## [1.3.0] — 2025-06-10

### Added
- Initial release of Phenix 2.0 architecture
- CSS variable-based spacing system (now replaced in 2.0.0)
- JavaScript core with `Phenix` selector and `PhenixElements` class
- 20+ custom Gutenberg blocks
- WooCommerce integration (now split to extension in 2.0.0)
- Three.js 3D Viewer block
- Animation system with scroll-driven progress
- Admin tools: CPT creator, taxonomy creator, meta boxes, import/export
- RTL-first design system

## Bug Fixes — 2025-06-17

### Security Fixes
- **Custom Code block:** HTML output now uses `wp_kses_post()`, CSS uses `wp_strip_all_tags()`, JavaScript uses `wp_strip_all_tags()` to prevent injection
- **Metabox fields:** Regular fields now sanitize by type (`sanitize_text_field`, `sanitize_textarea_field`, `sanitize_email`, `sanitize_hex_color`, `esc_url_raw`, `is_numeric`) instead of saving raw `$_POST`
- **Import/Export AJAX:** All three endpoints (`pds_import_posts`, `pds_posts_remover`, `pds_posts_exporter`) now verify `current_user_can()` before executing. Also sanitizes imported meta keys and values, and post content with `wp_kses_post()`
- **Query block search:** Removed broken nonce verification that used the search string itself as a nonce. Search is now read-only with `sanitize_text_field()` on all `$_GET` inputs
- **Google Fonts API:** List of fonts is now cached in a transient (`pds_google_fonts_list`) for 7 days instead of fetching from the Google Fonts API on every admin page load. The hardcoded API key is also moved to `get_option('pds_gfonts_api_key')` with the old key as fallback.
- **Over-enqueueing:** Removed redundant `enqueue_block_editor_assets` hook for `phenix_core`. `enqueue_block_assets` already covers the editor. Prevents double-loading the core JS in the block editor
- **Thumbnail sizes:** Disabled-by-default thumbnail removal now requires `pds_disable_thumbnails === 'on'` option. Previously ran unconditionally on every `init`
- **Remote HTTP requests:** `pds_get_default_options()` now caches the fetched JSON in a transient (`pds_default_options`) for 24 hours instead of fetching on every `init`. Countries JSON fetch also uses a transient lock to prevent concurrent requests on slow connections

## Block API v3 Migration — 2025-06-18

### Breaking Change: WordPress 6.9+ / 7.0+ iframe enforcement
WordPress is moving the block editor inside an iframe. Blocks that rely on the shared-DOM model (API v2) will break. All Phenix blocks have been migrated to `apiVersion: 3` for iframe compatibility.

### Changes
- **All 20+ `block.json` files:** Changed `"apiVersion": 2` to `"apiVersion": 3`
- **6 `edit.js` files:** Removed the "List View Naming" pattern that used `document.querySelector('.block-editor-list-view-tree')` to update the sidebar list view. This pattern breaks in the iframe because the iframe has a different `document` than the admin page. WordPress 6.5+ handles block naming natively via `metadata.name` and `supports.renaming`.
  - `page-head/edit.js`
  - `navigation/edit.js`
  - `taxonomies/edit.js`
  - `users-query/edit.js`
  - `theme-part/edit.js`
  - `query/edit.js`
- **`pds-helpers.js` `viewScript`:** Removed the old iframe detection logic (`document.querySelector('iframe[name="editor-canvas"]')`) which returned `null` in the iframe context. Replaced with direct `document` usage, since in the iframe editor `document` is already the iframe's document.

### What was NOT changed (already iframe-safe)
- Utility CSS classes (`pdt-15`, `flexbox`, `col-6`) — no admin-specific selectors
- `useBlockProps()` — WordPress handles this in iframe context
- `apiFetch()` — WordPress API works in iframe
- `window.PhenixBlocks` — loaded via block assets, available in iframe context

### Verification
- Blocks tested in Site Editor (already uses iframe)
- Blocks tested in Post Editor with `apiVersion: 3` (renders in iframe when all blocks are v3)
- No console errors about `document` or `window` in iframe context

### Documentation
- `docs/block-api-v3-migration.md` — full migration guide with audit results, file-by-file changes, and verification checklist
