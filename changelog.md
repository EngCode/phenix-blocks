## Version history

### v1.5.0 — Build system cleanup
- Replaced deprecated `node-sass` with Dart `sass`
- Upgraded `ts-loader`, `webpack`, `typescript` for Node 20+ compatibility
- Removed babel packages that `@wordpress/scripts` already bundles
- Removed `@wordpress/server-side-render` and `@wordpress/blocks` from explicit dependencies (WordPress provides them at runtime)
- Added `.npmrc` so `npm install` works without flags on modern Node versions
- Block build auto-discovers blocks from `src/blocks/` instead of using a manual entry list

### v2.0.0 — Core fixes
- **CSS variable trap removed:** Replaced nested CSS variable fallbacks (`var(--pdt-md, var(--pdt-lg, var(--pdt)))`) with flat generated classes. A PHP collector generates the exact CSS needed on `save_post` and outputs it in `wp_head`. No inline style bloat. Better browser performance on complex pages.
- **JavaScript core opened:** Added `Phenix.register()`, `Phenix.extend()`, and `Phenix.PhenixElements` access so external code can add methods without modifying the source. Added `.init()` and `.destroy()` lifecycle hooks for SPA framework integration.
- **SASS cleanup:** Removed `.pdt-custom`, `.pdb-custom`, `.pds-custom`, `.pde-custom` and margin equivalents. Custom spacing values are handled by the collector, not CSS variables.
- **Extension build support:** Multiple webpack entry points for compiling add-on files (e.g., `woocommerce.js`, `select.js`) as separate files that share the core global without duplicating it.

### Change Log v1.2.0 Revamped
1. Disable Cron Jobs Scheduler
2. Cleanup the Plugin for Public
3. Disable Custom Login
4. improve assets loading, and disable the JS hack.
5. Fix Icon Block Free Width.
6. Refactoring Core Counter Function.
7. Lightbox Slider Fix.
8. Fix Background not Rendering in Editor.
9. Fix Grid Flow Reverse not Wrapping.
10. Media Uploader Fix for Metaboxes.
11. Fix Metaboxes Repeater.
12. Fix Media Uploader in Editor.
13. Add New Style Font Option.
14. Disable core blocks remover
15. Upgrade taxonomies query and support sub terms.
16. Add Support  Terms as Dropdowns for Taxonomies in Dynamic Menu.
17. Fix Core Animations Effects Bouncing.
18. Fix Fading Slider in RTL.
19. Add Posts Managers Tools
20. Remove Posts from any Type Tool
21. Import Posts from a Json File
22. Add Show Columns in the Admin Posts Table Functions
23. Add Posts JSON Exporter Simple Tool
24. Add post duplicating method.
25. Improving component builders, and view scripts.
26. Fixing Dropdown Menus in the Toolbar.
27. Fix Media Uploader in Optimization Tab.
28. Replace SplideJS with Swiper Slider.
29. Refactor Phenix Core Class Methods
30. Fix Taxonomies ID and Link Controller Bugs.
31. SEO Useless methods removed.
32. Improving Colors Panel Performance.
33. Improving Select Elements Performance in Editor.
34. Improving Select Data Performance in Editor.
35. Refactoring icons Panel and improve Performance in Editor.

### Minor-fixes v1.0.9:
1. Add Support for iPhone autoplay videos
2. Add new Ratio Sizes for Multi-Media
3. Fixing Multimedia inner block position editor mode.
4. Fix None-Ratio hidden images.
5. Fix Logical-block already exist.
6. Add navbar icons style support
7. Add Transition for Sticky Header.
8. Fix Sticky Offset in PDS Core.
9. Fix custom overlay rendering.
10. Add loading logo size option.
11. fix empty option in advanced select.
12. upgrade wordpress breadcrumb flow.
13. improve auto-generated thumbnails remover.
14. fixing editor dark styles inhihretes.


### Hot-fixes v1.0.7 and v1.0.8:

1. Improve Responsive UHD Scaler.
4. Add New Effects and Animations.
2. Gradient Text Coloring Editing Style Fix.
3. Media Uploader Control Multiple Popups Fix.
4. Fix Select Re-render Options unexpectedly.
5. Media Type Image Cover Size Fix
6. Disable Scaled Thumbnail Generation.
7. Defer Any Images with Lazyloading Attribute.
8. Add new copyText() method for Phenix Core.
9. Admin Style Fixes.
10. Fix loading duplicates when custom template are present.

### Hot-fixes v1.0.6:

1. Template Parts Block Listing Fix.
2. Logo REM Function fix.
3. Taxonomies Creator Labels translation remove.
4. Remove Pro Fonts for Official Release.
5. Fix Loading Media Uploader opens multiple times.
6. RM... deprecated emoji style remover
7. Convert to CDN Assets and WebFonts.
8. Upgrade Query Block to get posts by taxonomies.
9. adding FHD to the scaling responsive 2k/4k.
11. Update CPT Creator, and Query Block to get posts by taxonomies.
12. WP 6.5 Update Fixes.
13. fix loading spinner size.
14. icons sizes to rem.
