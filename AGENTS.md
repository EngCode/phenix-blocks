# AGENTS.md — Phenix Blocks Agent Handbook

> **Read this file before changing anything.** It is the map, the conventions, and the
> current state of the plugin. The detailed style guide lives in `info/SKILL.md`; this
> file is the short version an agent needs to start working safely.

- **Last updated:** 2026-11-26
- **Axiom project:** Phenix Blocks (`PB`)
- **Maintainer:** Abdullah Ramadan — https://phenixthemes.com

---

## 1. What this project is

Phenix Blocks is the WordPress plugin half of the **Phenix Design System**. It ships:

- a utility-first CSS framework (`pd-15`, `pdt-md-30`, `col-6`, `flexbox`, RTL support);
- a Gutenberg block library with a shared attribute → CSS class renderer;
- reusable block-editor controls (`src/blocks/px-controls/`);
- backend tools (CPT/taxonomy/meta-box/pattern/API/admin-page creators);
- optimisation features (`PDS_Optimizer`), a custom-spacing CSS collector, and
  WooCommerce integration;
- a TypeScript front-end runtime exposed as `window.Phenix`.

**Mental model:** the **plugin is the engine**, the theme is the paint. All logic, CSS,
JS and backend tools live here. The theme only supplies `theme.json`, template parts and
colour mappings. Blocks must remain portable when the theme changes.

### Identity

| Item | Value |
|---|---|
| Plugin file | `pds-blocks.php` |
| Text domain | `pds-blocks` |
| Main class prefix | `PDS_` |
| Function prefixes | `pds_`, `phenix_`, `px_` |
| JS global | `window.Phenix` |
| Block editor global | `window.PhenixBlocks` |
| License | GPL-2.0-or-later (headers are inconsistent — see §15) |
| Requires | WordPress 6.0+, PHP 7.4+ (see §15), Node 20+ for builds |

---

## 2. Repository map

```
pds-blocks/
├── pds-blocks.php              # Bootstrap: constants, textdomain, require_once list
├── admin/
│   ├── pds-admin.php           # Menu, option registration, /options REST endpoint
│   ├── pds-default.php         # Default options (remote JSON + transient cache)
│   ├── main.php                # “Design System” settings screen
│   ├── pds-dashboard.php       # Documentation dashboard screen
│   ├── data-collection.php     # Data Manager screen (CPT, tax, meta, patterns, import/export)
│   ├── panels/                 # Settings panels included by main/data-collection
│   ├── modules/                # Public helper APIs: pds_add_api(), pds_add_admin_page(), etc.
│   ├── scripts.js              # Admin UI behaviour (tabs, selects, validation)
│   └── data-collection.js      # Data Manager REST client
├── inc/
│   ├── pds-functions.php       # pagination(), patterns, theme parts, CF7 helpers
│   ├── pds-assets.php          # Front-end/admin asset registration, fonts, icons, defer
│   ├── pds-optimizer.php       # PDS_Optimizer class (head/script/style/SEO optimisations)
│   ├── pds-spacing-collector.php # PDS_Spacing_Collector (custom spacing → flat CSS)
│   ├── pds-woocommerce.php     # WooCommerce theme support
│   ├── woo-functions.php       # WooCommerce query/cart/attribute helpers
│   ├── import-export.php       # JSON import/export/removal endpoints
│   ├── posts-duplicator.php    # Duplicate post action
│   ├── loading.php             # Page loader markup (loaded on wp_body_open)
│   ├── lightbox.php            # Shared lightbox modal markup
│   └── login-overwrite.php     # Optional login screen styling
├── src/
│   ├── blocks/
│   │   ├── blocks.php          # Category, helpers, PHP renderer, editor enqueues, dynamic includes
│   │   ├── pds-helpers.js      # window.PhenixBlocks.OptionsRenderer + editor helpers
│   │   ├── pds-data-list.js    # window.PhenixBlocks.dataLists (button/menu/theme data)
│   │   ├── core-blocks-remover.js # Optional core-block removal (mostly commented out)
│   │   ├── px-controls/        # Reusable editor controls + option sets
│   │   ├── _new_block/         # Scaffold for a new block (not a shipped block)
│   │   └── <block>/            # One folder per block: block.json, index.js, edit.js, preview, optional index.php
│   ├── scripts/                # TypeScript front-end runtime (Phenix global)
│   │   ├── index.ts            # Core object, DOM helpers, features, integrations
│   │   ├── components/         # datatable, dropdown, media, menu, popup, progress, rating, select, tabs, timer, uploader
│   │   ├── features/           # animations, collapse, connect, counter, effects, notifications, scroll-spy, sticky, validation, viewport
│   │   ├── integration/        # slider, utilities, woocommerce, wordpress
│   │   └── custom-scripts.ts   # Site-specific custom script hook
│   ├── sass/                   # CSS framework source (phenix, phenix-utils, admin, RTL)
│   └── animations/             # Standalone animation CSS
├── assets/                     # Committed build output + fonts/icons/libs/images/json
│   ├── css/                    # Compiled CSS (do not hand-edit)
│   ├── js/                     # phenix.js, woocommerce.js, blocks/<slug>/index.js (do not hand-edit)
│   ├── webfonts/               # Icon fonts + Arabic/Latin font families
│   ├── json/                   # Icon lists, countries, default options
│   ├── lib/                    # three.js, GSAP, range-slider
│   └── img/                    # Admin/block images
├── docs-src/                   # VitePress documentation source (local, gitignored)
├── info/                       # Plans and style guide (mostly local, gitignored)
├── languages/                  # Arabic + English translations
└── build configs               # webpack.config.js, typescript.webpack.js, typescript.webpack.ext.js
```

---

## 3. Runtime flow

1. `pds-blocks.php` defines `PDS_BLOCKS_VERSION`, `PDS_BLOCKS_URL`, `PDS_BLOCKS_PATH`.
2. It `require_once`s the admin files, `inc/` helpers, assets, WooCommerce and
   `src/blocks/blocks.php`.
3. `phenix_core()` registers/enqueues `phenix.css`, `phenix-utils.css`, `phenix.js` and
   localises `PDS_WP_KEY` (site URL, REST root, JSON URL, nonce, assets path).
4. `phenix_assets()` resolves the selected text/icon fonts and `pds_optimized_asset()`
   enqueues them.
5. `src/blocks/blocks.php` adds the **Phenix Blocks** category, provides the PHP renderer
   and editor helpers, enqueues block editor scripts per option, and includes the PHP
   renderer for each enabled dynamic block.
6. Each block's `index.js` calls `registerBlockType(metadata, …)`; static blocks save
   markup, dynamic blocks render through `index.php` on the server.
7. `PDS_Optimizer::init()` and `PDS_Spacing_Collector` hooks run from their own files.

**Important:** the plugin has two parallel “registration” paths. Most blocks are
registered client-side only; dynamic blocks additionally call `register_block_type()` in
`index.php`. Editor script handles are declared in `blocks.php`, in `block.json`
(`editorScript`), and sometimes in `index.php`. They do not always agree — see §15 and
`PB-100`.

---

## 4. Build and development

```bash
npm install
npm run watch     # SASS + TS + extension + blocks watchers in parallel
npm run build     # one-shot: TS + extension + SASS + animations (does NOT build blocks today — PB-121)
```

| Command | What it does | Output |
|---|---|---|
| `npm run sass` | Watch `src/sass` | `assets/css/phenix.css`, `phenix-utils.css`, `admin.css`, RTL variants + maps |
| `npm run ts` | Watch `src/scripts/index.ts` | `assets/js/phenix.js` + map |
| `npm run ext` | Watch `src/scripts/integration/woocommerce.ts` | `assets/js/woocommerce.js` + map |
| `npm run blocks` | `wp-scripts start` | `assets/js/blocks/<slug>/index.js` + `index.asset.php` + copied `block.json` |
| `npm run animate` | Watch `src/animations` | `assets/css/animations/*.css` |
| `npm run build` | One-shot TS + ext + SASS + animations | Same as above, but **no block build** |

### Rules

- **Never hand-edit `assets/css/` or `assets/js/`.** They are generated. Edit `src/` and
  rebuild.
- `assets/js/blocks/` and `assets/css/` are committed so the plugin works from a ZIP.
  Keep them in sync when a release is cut.
- `npm run build` is currently incomplete; use `npm run blocks` (watch) or
  `npx wp-scripts build` for a one-shot block build until `PB-121` is fixed.
- README/readme.txt still mention removed commands (`npm run phenix-start`,
  `npm run sass-debug`). Trust `package.json`, not the README, until `PB-98` is fixed.

---

## 5. Block system

### 5.1 Anatomy of a block

```
src/blocks/<slug>/
├── block.json      # metadata + attributes + supports (source of truth)
├── index.js        # registerBlockType(metadata, { icon, edit, save })
├── edit.js         # React editor UI (InspectorControls, controls, preview)
├── preview.jpg/png # block inserter preview
└── index.php       # optional: server render + register_block_type() for dynamic blocks
```

### 5.2 Attribute model

Attributes are grouped into objects so the renderer can walk them generically:

```json
{
  "id": "string",
  "className": "string",
  "preview": "boolean",
  "typography": { "type": "object", "default": {} },
  "style": { "type": "object", "default": {} },
  "responsive": { "type": "object", "default": {} },
  "flexbox": { "type": "object", "default": {} },
  "slider": { "type": "object", "default": {} }
}
```

The renderer pattern-matches attribute names:

- normal string/number → class names (`pd-15`, `flexbox`, `col-6`);
- booleans → classes or data attributes (`isFlexbox` → `flexbox`, `inNewTab` → `target`);
- objects → recurse; known sub-keys map to utility classes or `data-*` attributes;
- `id` → element `id`; `className` → passthrough; `preview` → editor-only flag.

### 5.3 The two renderers

| Context | Function | File |
|---|---|---|
| Editor save / static output | `window.PhenixBlocks.OptionsRenderer({ attributes, blockProps, isSave, hasColors, isColumn, isGrid })` | `src/blocks/pds-helpers.js` |
| Server-rendered dynamic blocks | `pds_blocks_options_render($block_attributes, $slider_attrs, $grid_classes)` | `src/blocks/blocks.php` |

They implement the same idea but are **separate implementations**. A change to one must
be mirrored in the other, or output differs between editor and front end. This is tracked
in `PB-103`; do not add new attribute behaviour to only one side.

Typical static `save`:

```js
save: ({ attributes }) => {
  const renderProps = window.PhenixBlocks.OptionsRenderer({
    hasColors: true,
    attributes,
    blockProps: useBlockProps.save(),
    isSave: true,
  });
  return <TagName {...renderProps.blockProps} className={`${renderProps.blockProps.className} ${renderProps.container.className}`} />;
}
```

Typical dynamic renderer:

```php
$rendered = pds_blocks_options_render($block_attributes, $slider_attrs, $grid_classes);
$grid_classes = $rendered['grid_classes'];
$slider_attrs = $rendered['slider_attrs'];
```

### 5.4 Adding a block

1. Copy `src/blocks/_new_block/` to `src/blocks/<slug>/`.
2. Change `block.json`: `name` (`phenix/<slug>`), `title`, `description`, attributes,
   `apiVersion: 3`, `supports`, `editorScript`.
3. Build `edit.js` with `px-controls` and the option sets (`sets/padding`, `sets/margin`,
   `sets/styles`, `sets/typography`, `sets/responsive`, `sets/animations`, `sets/effects`).
4. Build `index.js` with `registerBlockType(metadata, { icon, edit, save })`.
5. If it needs PHP rendering, add `index.php` with a `render_callback` and include it from
   `src/blocks/blocks.php` behind an option check.
6. Add the editor enqueue to `src/blocks/blocks.php` if it is not self-registered by
   `block.json`.
7. Add the option key to `get_pds_options_list()` in `admin/pds-admin.php` and to
   `assets/json/default-options.json` (default off until the block ships).
8. Add a preview image and run the block build.
9. Test in the iframe editor (API v3), RTL, and the Site Editor.

### 5.5 Block inventory (shipped)

| Slug | Block name | Type |
|---|---|---|
| `container` | `phenix/container` | static |
| `grid-row` | `phenix/row` | static |
| `grid-column` | `phenix/column` | static |
| `group` | `phenix/group` | static |
| `button` | `phenix/button` | static |
| `text` | `phenix/text` | static |
| `text-list-item` | `phenix/text-list-item` | static |
| `icon-element` | `phenix/icon-element` | static |
| `media-element` | `phenix/media-element` | static |
| `logo` | `phenix/logo` | static |
| `popup` | `phenix/popup` | static |
| `page-head` | `phenix/page-head` | dynamic |
| `navigation` | `phenix/navigation` | dynamic |
| `query` | `phenix/query` | dynamic |
| `taxonomies` | `phenix/taxonomies` | dynamic |
| `users-query` | `phenix/users-query` | dynamic |
| `theme-part` | `phenix/theme-part` | dynamic |
| `logical-block` | `phenix/logical-block` | dynamic |
| `custom-code` | `phenix/custom-code` | dynamic |
| `_new_block` | `phenix/newBlockName` | scaffold — never enqueue or ship as a real block |

### 5.6 Gutenberg / API v3 rules

- Every block must use `"apiVersion": 3` in `block.json`.
- In API v3 the editor renders inside an iframe. A block's `document` **is** the iframe
  document. Never query the admin DOM from `edit.js`
  (`document.querySelector('.block-editor-list-view-tree …')` will be `null`).
- For list-view naming use `supports.renaming` + `metadata.name`, not DOM hacks.
- `viewScript` code can use `document` directly; do not query
  `iframe[name="editor-canvas"]`.
- The plugin advertises WordPress 6.0+ while using API v3 (introduced later). Reconcile
  this in `PB-100`.

---

## 6. Editor controls (`src/blocks/px-controls/`)

Reusable React controls live here. Use them instead of raw `TextControl` etc. when a
Phenix-styled control exists.

| File | Control |
|---|---|
| `input.js` | Text input |
| `number.js` | Number input / counter |
| `textarea.js` | Textarea |
| `select.js` | Styled select |
| `select-data.js` | Data-driven select (posts, taxonomies, menus, etc.) |
| `dropdown.js` | Dropdown panel/trigger |
| `switch.js` | Toggle / checkbox |
| `uploader.js` | Media uploader |
| `tabs.js` | Tabbed inspector panels |
| `icons.js` | Icon picker (loads per-weight JSON from `assets/json/`) |
| `dynamic-url.js` | URL / link control |
| `alignment.js` | Alignment control |
| `templates-meta.js` | Theme-part meta controls |
| `colors/text.js`, `colors/background.js` | Colour controls |
| `sets/*.js` | Grouped option sets: padding, margin, styles, typography, responsive, animations, effects, flexbox, grid, position, sizes, border, slider, template-meta |

`px-controls` has no `index.js` and is not a block. It is imported directly by blocks.

---

## 7. Styling system (`src/sass/`)

- Entry points: `phenix.scss` (components/layout), `phenix-utils.scss` (utilities),
  `admin.scss` (editor/admin UI), plus RTL variants.
- `assets/mixin/_breakpoints.scss` provides `small()`, `medium()`, `large()`, `xlarge()`.
- `$space_range` (0–100 in steps of 5) is the canonical spacing scale.
- Use `REM()` to convert px; do not hardcode rem values.
- Use `$direction-start` / `$direction-end` for RTL, never `left` / `right`.
- Breakpoint infixes: `-sm`, `-md`, `-lg`, `-xl`.
- Custom spacing values outside the scale are generated by `PDS_Spacing_Collector`, not
  by SASS. Do not add `.pdt-custom`-style rules.
- `_theme.scss` is the live theme-variable workspace.
- Comment style: section headers `/*==== Name ====*/`, inline `//===> What it does <===//`.

---

## 8. JavaScript system (`src/scripts/`)

- `index.ts` builds the UMD bundle exposed as `window.Phenix`.
- `Phenix(selector)` returns a `PhenixElements` array-like with chainable methods
  (`addClass`, `removeClass`, `toggleClass`, `on`, `style`, `attr`, `insert`, …).
- Components live in `components/`, features in `features/`, integrations in
  `integration/`.
- `custom-scripts.ts` is the site-specific hook; keep it small.
- Extension builds (`typescript.webpack.ext.js`) replace core imports with
  `phenix-stub.ts`, which reads `window.Phenix` instead of bundling a second copy.
- Use `let`/`const`, `forEach`, template literals, and `Phenix(document).method()`.
- No `var`; no `this` in the UMD wrapper; use `window`.

---

## 9. PHP backend and admin tools

- **Bootstrap:** `pds-blocks.php` uses `require_once` for plugin files.
- **Admin menu:** `pds_admin_menu()` in `admin/pds-admin.php` creates “Design System”,
  “Data Manager” and “Documentation”.
- **Options:** `get_pds_options_list()` is the master list; `create_pds_options()` calls
  `register_setting()` on every `admin_init` (performance debt — see `PB-119`).
- **Default options:** `pds_get_default_options()` fetches a remote JSON and caches it in
  the `pds_default_options` transient for one day.
- **REST:** `/wp-json/pds-blocks/v2/options` is registered with `pds_add_api()`; writes
  require `manage_options` and a valid `X-WP-Nonce`.
- **Data Manager:** `admin/data-collection.php` includes the panels for post types,
  taxonomies, menu locations, meta boxes, block patterns and import/export.
- **Public helper APIs:** `pds_add_api()`, `pds_add_admin_page()`,
  `pds_toggle_controls()`, `pds_cpt_create()`, `pds_tax_create()`,
  `pds_metabox_create()`, `pds_add_pattern()`.
- **Optimizer:** `PDS_Optimizer::init()` groups head/script/style/comment/admin-bar/CF7/
  Gutenberg/layout/image/thumbnail/CDN/SEO/archive/excerpt/SVG optimisations behind
  options.
- **Spacing collector:** `PDS_Spacing_Collector::generate()` runs on `save_post` and stores
  flat CSS in `_pds_custom_spacing`; `output()` prints it in `wp_head` for singular views.

---

## 10. Coding conventions (condensed from `info/SKILL.md`)

### PHP

- Classes `PDS_ClassName`; static methods `camelCase()`; variables/properties
  `snake_case`; constants `UPPERCASE`.
- Prefer static methods in classes over many globals.
- Keep functions under ~30 lines.
- Wrap global functions in `if (!function_exists('pds_name')) : … endif;`.
- File header: `ABSPATH` guard + minimal docblock (`@since`, `@return`, one description).
- Add hooks at the bottom of the file, not inside constructors.
- No type hints/return types unless they improve clarity.
- Use `require_once`, never `include`, for plugin files.
- Use WordPress APIs (`get_post_meta`, `wp_head`, `save_post`), not raw SQL.
- Strict comparison (`===`, `!==`) for option strings/booleans.

### Security (non-negotiable)

- Escape all output: `esc_html()`, `esc_attr()`, `esc_url()`, `wp_kses_post()`.
- Verify `wp_verify_nonce()` on every form/REST write.
- Check `current_user_can()` before privileged actions.
- Sanitise every `$_GET`/`$_POST` value (`sanitize_text_field`, `absint`,
  `rest_sanitize_boolean`, `sanitize_hex_color`, `esc_url_raw`, …).
- Use `$wpdb->prepare()` for SQL.
- Cache expensive I/O with transients.

### SASS

- Variables `$lowercase_with_underscore`; mixins `make_*`; partials `_name.scss`.
- Use `$space_range`, `REM()`, `$direction-start/end`.
- Custom values belong to the collector, not SASS.

### JavaScript

- Variables/functions `camelCase`; classes `PascalCase`; constants `UPPERCASE` or
  `camelCase` as appropriate.
- Prefer functions/objects over classes unless a class is genuinely useful.
- Document prototype extensions with `//===> Adding Method to Elements <===//`.

### What to avoid

- Abstract classes/interfaces for their own sake.
- Design patterns for their own sake.
- Breaking an existing API without a migration path.
- Dependencies that require a pinned Node version (`engine-strict=false`).
- `npm audit fix --force`.
- OS-specific paths; use `path.join()`.
- Large batch delegation to subagents; do the work directly.
- “advanced/enhanced/extensive” marketing language in descriptions.

---

## 11. Icon font architecture (critical)

- All icon fonts use **`::before`** for `font-family`, `font-weight`, smoothing and
  `content`. Text inside the element is unaffected.
- **Front-end/user-facing icons** use the font selected in Design System → Fonts:
  `ui-icons-rounded` (default in the migration plan), `ui-icons-straight`,
  `fontawesome-5/6/7-free`, or `none`.
- **Admin/editor internal UI** uses a dedicated Font Awesome solid font (`fas`) loaded
  independently of the user’s front-end choice.
- UI Icons classes: `fi fi-rounded fi-bold fi-add` (style + weight + name).
- Font Awesome classes: `fas fa-*`, `far fa-*`, `fab fa-*`.
- Per-weight icon JSON lives in `assets/json/` (`fa5-solid.json`, `fa6-regular.json`,
  `fa7-brands.json`, `ui-icons.json`, …).
- `src/blocks/px-controls/icons.js` loads the correct JSON per weight.
- `inc/pds-assets.php` must migrate old values:
  `fontawesome-5` → `fontawesome-5-free`, `ui-icons` → `ui-icons-straight`, and all
  `*-pro` → `*-free`.
- Provide the `none` option to disable the icon font.
- The current code defaults to `fontawesome-7-free` while the plan/report expect
  `ui-icons-rounded`; this is tracked in `PB-99`.

---

## 12. Common recipes

### Add a settings option

1. Add the key to `get_pds_options_list()` in `admin/pds-admin.php`.
2. Add a control to the relevant panel in `admin/panels/`.
3. Add the default to `assets/json/default-options.json`.
4. Read it with `get_option('key')` and strict comparison.

### Add an admin page

Use `pds_add_admin_page($params)` from `admin/modules/page-creator.php`; see
`docs-src/wordpress/dev-tools/admin-page-creator.md` for the shape.

### Add a REST endpoint

Use `pds_add_api($params)` from `admin/modules/api-creator.php`; include `read_prem` /
`write_prem` and verify a nonce on writes.

### Add a CPT/taxonomy/meta box/pattern

Use `pds_cpt_create()`, `pds_tax_create()`, `pds_metabox_create()`, or
`pds_add_pattern()` from `admin/modules/`. These are also exposed through the Data
Manager UI.

### Add a front-end JS feature

1. Add a module under `src/scripts/features/` or `src/scripts/components/`.
2. Attach it to `PhenixElements.prototype` in `index.ts` (or the appropriate feature file).
3. Import it from `index.ts`.
4. Run `npm run ts`.
5. Document it in `docs-src/frontend/js/`.

### Add a SASS utility

1. Add/extend a partial under `src/sass/utilities/`.
2. Use `$space_range`, `REM()`, `$direction-start/end`.
3. Import it from `phenix-utils.scss` (or `phenix.scss` for components).
4. Run `npm run sass`.

---

## 13. Verification checklist

Before saying a change is done:

- [ ] `php -l` every changed PHP file.
- [ ] `npx tsc --noEmit -p src/scripts/tsconfig.json` (or at least `npm run ts`) for TS.
- [ ] Build the affected block (`npm run blocks` or `npx wp-scripts build`).
- [ ] Rebuild SASS if styles changed (`npm run sass` once or `npm run build`).
- [ ] Test in the block editor iframe (API v3), not just the front end.
- [ ] Test RTL if the change touches layout, spacing, or icons.
- [ ] Test with WooCommerce active if the change touches `inc/woo-*` or the extension.
- [ ] Confirm no generated file was hand-edited.
- [ ] Confirm no new PHP 8-only syntax if the plugin still claims PHP 7.4.
- [ ] Update the relevant Axiom task with what changed.

---

## 14. Documentation sources

- `docs-src/` — VitePress docs (frontend CSS/JS, WordPress blocks, dev tools). It is
  gitignored and has some duplication (`wordpress/php` vs `wordpress/php-methods`).
- `info/SKILL.md` — the detailed coding-style guide (local, gitignored).
- `info/Legacy Plan.md` — the tracked feature/progress plan.
- `info/phenix-history-report.md` — migration history and pending icon work.
- `README.md` / `readme.txt` — user-facing docs; currently inconsistent with the code
  (`PB-98`).

When code and docs disagree, **the code is the source of truth**; fix the docs.

---

## 15. Current known debt and gotchas

These are verified as of 2026-11-26. Each maps to an Axiom task. The dead
enqueues/includes and legacy file cleanup (`PB-97`, `PB-101`) are complete.

| Area | Issue | Task |
|---|---|---|
| Versions | Header 1.5.7, constant 1.5.6, package/readme 2.0.0; licence headers disagree | `PB-98` |
| Icons | Code default `fontawesome-7-free` vs plan `ui-icons-rounded`; icon stylesheet media query is `min-width: 2500px`; admin uses FA6 while front end may use UI Icons | `PB-99` |
| Registration | `api_version => 2` in dynamic `index.php` vs `apiVersion: 3`; `page-head`/`px-head`, `users-query`/`px-users-query`/`px-query` handle mismatches; duplicate enqueues | `PB-100` |
| Repo hygiene | `docs-src/` and `info/` ignored but present; `.vscode`/`dev.code-workspace` local; built assets committed; docs duplicated | `PB-102` |
| Renderer drift | JS `OptionsRenderer` and PHP `pds_blocks_options_render()` are separate implementations | `PB-103` |
| Icons (work) | ~30 admin PHP, ~50 block JS, ~20 TS/admin JS occurrences still use Font Awesome | `PB-104`–`PB-106` |
| Missing blocks | Tabs/Accordion/Dropdown, Form Builder, Progress/Timer/Languages/Maps, Search Query | `PB-107`–`PB-110` |
| Feature polish | Theme Part/Query/Menu/Slider, Meta Boxes/Templates Meta, Site Editor, general polish | `PB-111`–`PB-114` |
| Docs | Developer docs and user docs incomplete | `PB-116`, `PB-117` |
| QA | API v3 smoke tests not systematised; security/perf audit pending | `PB-118`, `PB-119` |
| Bugs | `excerpt_length` filter uses the option as priority and returns unchanged; `gpy` `&&` precedence; duplicate `pds-loader` body class; block category uses `text-domain` | `PB-120` |
| Build | `npm run build` does not compile blocks | `PB-121` |
| PHP compat | `str_contains()` is used but PHP 7.4 is advertised | `PB-122` |

### Other gotchas

- `src/blocks/_new_block/` is auto-discovered by `webpack.config.js` and built into
  `assets/js/blocks/_new_block/`. It is not enqueued, but do not mistake it for a real
  block.
- `PDS_Spacing_Collector::output()` only runs on singular views; archives with custom
  spacing may not receive the generated CSS.
- `pds_admin_style()` calls `get_current_screen()` without a null check.
- `pds_block_editor_icons()` enqueues the same `font-awesome-solid` handle as
  `pds_admin_style()`; WordPress deduplicates, but the duplication is noise.
- The icon font is enqueued with media `screen and (min-width: 2500px)`, which prevents
  it from loading on normal screens. Treat this as a bug until `PB-99` confirms intent.

---

## 16. Axiom work queue

The live plan is in Axiom under **Phenix Blocks (PB)**. Current open tasks:

- **Stabilise:** `PB-98` versions, `PB-99` icon default, `PB-100` registration,
  `PB-120` functional bugs, `PB-121` build pipeline, `PB-122` PHP 7.4 compatibility.
- **Architecture:** `PB-102` repo hygiene, `PB-103` renderer parity.
- **Icons:** `PB-104` admin PHP, `PB-105` block JS, `PB-106` TS/admin JS.
- **Features:** `PB-107` interactive blocks, `PB-108` form builder, `PB-109` utility
  blocks, `PB-110` search, `PB-111` polish, `PB-112` meta boxes, `PB-113` site editor,
  `PB-114` general polish, `PB-115` ideas.
- **Docs:** `PB-116` developer, `PB-117` user.
- **QA:** `PB-118` API v3 smoke tests, `PB-119` security/performance.

Run the helper from the skill directory:

```powershell
$axiom = "$HOME/.config/opencode/skills/axiom-tasks/scripts/axiom.mjs"
node $axiom issues --project PB
node $axiom start PB-98
node $axiom done PB-98 --note "Synced version metadata across plugin header, constant, package.json and readme."
```

---

## 17. Key files quick reference

| Need to change… | Edit |
|---|---|
| Plugin bootstrap / requires / constants | `pds-blocks.php` |
| Editor enqueues / block category / PHP renderer | `src/blocks/blocks.php` |
| JS attribute renderer / editor helpers | `src/blocks/pds-helpers.js` |
| Data lists for controls | `src/blocks/pds-data-list.js` |
| A block | `src/blocks/<slug>/` |
| A reusable editor control | `src/blocks/px-controls/` |
| Front-end CSS | `src/sass/` |
| Front-end JS | `src/scripts/` |
| Animations CSS | `src/animations/` |
| Asset registration / fonts / icons / defer | `inc/pds-assets.php` |
| Optimisations | `inc/pds-optimizer.php` |
| Custom spacing CSS | `inc/pds-spacing-collector.php` |
| Admin menu / options / REST | `admin/pds-admin.php` |
| Default options | `admin/pds-default.php` + `assets/json/default-options.json` |
| Settings panels | `admin/panels/` |
| Public creator APIs | `admin/modules/` |
| WooCommerce | `inc/pds-woocommerce.php`, `inc/woo-functions.php`, `src/scripts/integration/woocommerce.ts` |
| Docs | `docs-src/` |
| Plan / style guide | `info/` |

---

## 18. When to ask the maintainer first

Ask before:

- changing the SASS scale (0–100) or adding breakpoint names;
- renaming existing classes, methods, options, or block names;
- changing `OptionsRenderer` pattern-matching logic;
- removing backward compatibility or a migration path;
- adding a PHP 8 feature that breaks PHP 7.4 (or deciding to drop 7.4);
- changing the database schema or adding custom tables;
- removing a security measure (nonce, escaping, capability check);
- changing the icon-font default, adding a new icon family, or changing the `::before`
  approach;
- changing the JSON generation logic for icon weights;
- changing which icon font loads for admin/editor UI.

These are architectural decisions, not implementation details.

---

## 19. Working style expected by the maintainer

- Be direct: state what was done, what failed, and what is next.
- Do not stall silently; if something is blocked, say so and move on.
- Do not delegate large batches to subagents; do the work directly or flag it as
  deferred.
- Prefer exact file paths and real diffs over abstract descriptions.
- Verify syntax after every change.
- Keep changes consistent with the surrounding code; do not introduce a new pattern when
  an existing one fits.
- Respect the plugin/theme boundary: the plugin is the engine.
- Phenix is a long-term, personal project; reliability matters more than speed.

---

*End of handbook.*
