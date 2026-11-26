# Phenix Blocks

The WordPress plugin half of the **Phenix Design System**: a utility-first CSS framework, a Gutenberg block library, a TypeScript front-end runtime, and backend tools for building WordPress and WooCommerce sites with one consistent design language.

> **Mental model:** the plugin is the engine, the theme is the paint. All logic, CSS, JavaScript and backend tools live in the plugin. A theme only supplies `theme.json`, template parts and colour mappings, so blocks keep working when you switch themes.

- **Plugin file:** `pds-blocks.php` | **Text domain:** `pds-blocks`
- **License:** GPL-2.0-or-later
- **Author:** Abdullah Ramadan, [phenixthemes.com](https://phenixthemes.com)
- **Companion theme:** [PDS Starter Theme](https://github.com/EngCode/pds-starter-free)

---

## What it includes

| Part | What it is |
| --- | --- |
| **CSS framework** | Utility classes (`pd-15`, `pdt-md-30`, `col-6`, `flexbox`) on a 0-100 spacing scale (steps of 5), per-breakpoint infixes (`-sm`, `-md`, `-lg`, `-xl`), and RTL support built in. |
| **Block library** | 19 Gutenberg blocks that share one attribute-to-CSS-class renderer. |
| **Editor controls** | Reusable controls (`src/blocks/px-controls/`): spacing, colours, typography, responsive, animations, effects, flexbox, grid, position, sizes, borders and more. |
| **Front-end runtime** | A TypeScript library exposed as `window.Phenix` with chainable DOM helpers, components, features and integrations. |
| **Backend tools** | Creators for custom post types, taxonomies, meta boxes, block patterns, REST endpoints and admin pages, available as PHP helpers and through the Data Manager screen. Also import/export (JSON), post duplication and custom admin columns. |
| **Optimisation** | `PDS_Optimizer` groups head, script, style, SEO, image and other optimisations behind options. `PDS_Spacing_Collector` turns custom spacing values into flat CSS on `save_post`. |
| **WooCommerce** | Theme support, query/cart/attribute helpers and a separate `woocommerce.js` extension. |

Bundled libraries live in `assets/lib/` (three.js, GSAP, range-slider).

---

## Requirements

| | Declared | Notes |
| --- | --- | --- |
| WordPress | 6.0+ | Blocks use `apiVersion: 3` (iframe editor), which needs a more recent WordPress than 6.0. Use a current release. See [Known issues](#known-issues). |
| PHP | 7.4+ | The code uses `str_contains()`, which is PHP 8.0+. Use PHP 8.0 or newer until this is resolved. |
| Node | 20+ | Only needed to build from source. |

---

## Installation

### Plugin (from a release ZIP)

Built CSS and JS are committed, so the plugin works straight from a ZIP.

1. Download the plugin from [GitHub](https://github.com/EngCode/phenix-blocks).
2. Upload it to `/wp-content/plugins/pds-blocks`.
3. Activate it from the WordPress Plugins screen.

### Theme

1. Download the [PDS Starter Theme](https://github.com/EngCode/pds-starter-free).
2. Upload it to `/wp-content/themes/` and activate it.

### From source (development)

```bash
git clone https://github.com/EngCode/phenix-blocks.git pds-blocks
cd pds-blocks
npm install
npm run watch
```

---

## Build commands

| Command | What it does | Output |
| --- | --- | --- |
| `npm run watch` | Runs the SASS, TypeScript, extension and block watchers in parallel | all of the below |
| `npm run sass` | Watches `src/sass` | `assets/css/phenix.css`, `phenix-utils.css`, `admin.css`, RTL variants and maps |
| `npm run ts` | Watches `src/scripts/index.ts` | `assets/js/phenix.js` |
| `npm run ext` | Watches the WooCommerce extension | `assets/js/woocommerce.js` |
| `npm run blocks` | Runs `wp-scripts start` for the blocks | `assets/js/blocks/<slug>/` |
| `npm run animate` | Watches `src/animations` | `assets/css/animations/*.css` |
| `npm run build` | One-shot TS, extension, SASS and animations build | same as above, **but no blocks** |

**Heads up:** `npm run build` does not compile blocks yet. For a one-shot block build, run `npx wp-scripts build`.

Never hand-edit `assets/css/` or `assets/js/`. They are generated. Edit `src/` and rebuild.

---

## Architecture

```
pds-blocks/
├── pds-blocks.php        # Bootstrap: constants, textdomain, require_once list
├── admin/                # Settings screens, Data Manager, REST options, public helper APIs
├── inc/                  # Assets, optimizer, spacing collector, WooCommerce, import/export
├── src/
│   ├── blocks/           # One folder per block, plus px-controls and the renderers
│   ├── scripts/          # TypeScript runtime (window.Phenix)
│   ├── sass/             # CSS framework source
│   └── animations/       # Standalone animation CSS
├── assets/               # Committed build output, fonts, icons, libs, JSON data
└── languages/            # Arabic and English translations
```

### Blocks and the shared renderer

Block attributes are grouped into objects (`typography`, `style`, `responsive`, `flexbox`, `slider`). A generic renderer walks them and outputs utility classes and `data-*` attributes, so every block speaks the same vocabulary.

| Context | Renderer |
| --- | --- |
| Editor and static save | `window.PhenixBlocks.OptionsRenderer()` in `src/blocks/pds-helpers.js` |
| Server-rendered (dynamic) blocks | `pds_blocks_options_render()` in `src/blocks/blocks.php` |

These are two separate implementations of the same idea. A change to one must be mirrored in the other, or editor and front-end output will differ.

### Block library

**Static blocks** (markup saved in the post): Container, Grid Row, Grid Column, Group, Button, Text, Text List Item, Icon Element, Media Element, Logo, Popup.

**Dynamic blocks** (rendered on the server): Page Head, Navigation, Query, Taxonomies, Users Query, Theme Part, Logical Block, Custom Code.

Every block shares the same control groups: layout (alignment, dimensions, spacing, position, display), style (colours, typography, borders, effects, animations) and responsive (per-device values and visibility).

### Front-end runtime (`window.Phenix`)

- **Components:** datatable, dropdown, media, menu, popup, progress, rating, select, tabs, timer, uploader
- **Features:** animations, collapse, connect, counter, effects, notifications, scroll-spy, sticky, validation, viewport
- **Integrations:** slider, utilities, WooCommerce, WordPress

`Phenix(selector)` returns a chainable array-like (`addClass`, `on`, `style`, `attr`, `insert` and more). Extension builds reuse the core global instead of bundling a second copy.

### Theme customisation

The starter theme uses a modular SASS structure and stores template parts for dynamic blocks (`cards/`, `cards-taxonomies/`, `dynamic/`) under `template-parts/`. JavaScript customisations go in `style.js` and run alongside the Phenix library.

---

## Developer APIs

| Function | Purpose |
| --- | --- |
| `pds_add_api()` | Register a REST endpoint (writes need a capability check and a nonce) |
| `pds_add_admin_page()` | Add an admin page |
| `pds_cpt_create()` / `pds_tax_create()` | Create custom post types / taxonomies |
| `pds_metabox_create()` | Add meta boxes |
| `pds_add_pattern()` | Register a block pattern |
| `pds_toggle_controls()` | Toggle block controls |

Plugin options are read with `get_option()` and compared strictly (`=== 'on'`).

---

## Known issues

This project is under active maintenance. These are the known gaps, so you don't have to discover them yourself.

- **Versions disagree:** the plugin header, the version constant and `package.json` don't match yet, and the license headers are inconsistent.
- **Icon fonts:** the default font in code and the planned default differ, and the icon stylesheet currently loads only on very wide screens (`min-width: 2500px`), which looks like a bug.
- **Block registration:** dynamic blocks use `api_version => 2` while `block.json` uses `apiVersion: 3`, and some editor script handles are declared in more than one place.
- **Renderer drift risk:** the JS and PHP renderers must be kept in step by hand.
- **Build:** `npm run build` does not compile blocks.
- **PHP compatibility:** PHP 7.4 is advertised, but `str_contains()` requires PHP 8.0+.
- **Spacing CSS on archives:** custom spacing CSS is only printed on singular views.
- **Not yet shipped:** Tabs/Accordion/Dropdown blocks, Form Builder, Progress/Timer/Languages/Maps blocks, and a Search Query block.

---

## Contributing

Read [`AGENTS.md`](AGENTS.md) before changing anything. It is the project handbook: repository map, conventions, security rules, verification checklist and current debt. When code and docs disagree, the code is the source of truth, so fix the docs.

Please open an issue before changing:

- the SASS spacing scale or breakpoint names
- existing class, method, option or block names
- the `OptionsRenderer` pattern-matching logic
- backward compatibility or the PHP/WordPress support floor
- any security measure (nonces, escaping, capability checks)
- the icon-font default or how icon fonts load

Before sending a change:

- run `php -l` on every changed PHP file
- build what you touched (`npm run ts`, `npm run sass`, `npm run blocks`)
- test in the block editor iframe, in RTL, and with WooCommerce active if relevant
- don't hand-edit generated files

Security rules (non-negotiable): escape all output, verify nonces on every write, check `current_user_can()` before privileged actions, and sanitise all input.

---

## Documentation

- [Getting Started](https://engcode.github.io/phenix-blocks/wordpress/getting-started/)
- [Block Library](https://engcode.github.io/phenix-blocks/wordpress/blocks/)
- [Theme Customizing](https://engcode.github.io/phenix-blocks/wordpress/getting-started/theme-customizing.html)
- [Front-End Framework](https://engcode.github.io/phenix-blocks/frontend/)
- [Developer Tools](https://engcode.github.io/phenix-blocks/wordpress/tools/)

See [`changelog.md`](changelog.md) for release history.

---

## License

GPL-2.0-or-later
