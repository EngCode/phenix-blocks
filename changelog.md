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
