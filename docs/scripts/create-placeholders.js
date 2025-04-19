const fs = require('fs');
const path = require('path');

// Placeholder template
const placeholderTemplate = (title) => `# ${title}

::: warning
This page is a placeholder and needs to be populated with content.
:::

## Overview

Brief description of ${title} goes here.

## Usage

Example usage goes here.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| property1 | String | 'default' | Description of property1 |

## Examples

Code examples go here.
`;

// Frontend pages
const frontendPages = [
  // Getting Started - Quick Start
  { path: 'frontend/getting-started/quick-start/installation.md', title: 'Installation' },
  { path: 'frontend/getting-started/quick-start/rtl-ltr.md', title: 'RTL & LTR' },
  { path: 'frontend/getting-started/quick-start/responsive.md', title: 'Responsive' },
  { path: 'frontend/getting-started/quick-start/compatibility.md', title: 'Compatibility' },
  { path: 'frontend/getting-started/quick-start/css-customize.md', title: 'CSS Customize' },
  
  // Getting Started - SASS
  { path: 'frontend/getting-started/sass/overview.md', title: 'SASS Overview' },
  { path: 'frontend/getting-started/sass/build-tools.md', title: 'Build Tools' },
  { path: 'frontend/getting-started/sass/variables.md', title: 'SASS Variables' },
  { path: 'frontend/getting-started/sass/selectors.md', title: 'SASS Selectors' },
  { path: 'frontend/getting-started/sass/mixins-functions.md', title: 'Mixins & Functions' },
  
  // Getting Started - TypeScript
  { path: 'frontend/getting-started/typescript/overview.md', title: 'TypeScript Overview' },
  { path: 'frontend/getting-started/typescript/build-tools.md', title: 'Build Tools' },
  
  // CSS Modules - Grid System
  { path: 'frontend/css/grid/containers.md', title: 'Containers' },
  { path: 'frontend/css/grid/flexbox-grid.md', title: 'Flexbox Row' },
  { path: 'frontend/css/grid/columns.md', title: 'Columns' },
  { path: 'frontend/css/grid/gutters.md', title: 'Gutters' },
  { path: 'frontend/css/grid/groups-layout.md', title: 'Group Layout' },
  
  // CSS Modules - Typography
  { path: 'frontend/css/typography/default-reset.md', title: 'Default Reset' },
  { path: 'frontend/css/typography/typography.md', title: 'Typography' },
  { path: 'frontend/css/typography/tables.md', title: 'Tables Style' },
  { path: 'frontend/css/typography/list-components.md', title: 'List Components' },
  
  // CSS Modules - Utilities
  { path: 'frontend/css/utilities/sizing.md', title: 'Sizing' },
  { path: 'frontend/css/utilities/colors.md', title: 'Colors' },
  { path: 'frontend/css/utilities/spacing.md', title: 'Spacing' },
  { path: 'frontend/css/utilities/display-visibility.md', title: 'Display & Visibility' },
  { path: 'frontend/css/utilities/borders.md', title: 'Borders' },
  { path: 'frontend/css/utilities/backgrounds.md', title: 'Backgrounds' },
  { path: 'frontend/css/utilities/other-utilities.md', title: 'Other Utilities' },
  
  // JavaScript Modules
  { path: 'frontend/js/dom-manipulation/index.md', title: 'DOM Manipulation' },
  { path: 'frontend/js/element-remover.md', title: 'Element Remover' },
  { path: 'frontend/js/dom-traversing.md', title: 'DOM Traversing' },
  { path: 'frontend/js/dom-events.md', title: 'DOM Events' },
  { path: 'frontend/js/ui-effects.md', title: 'DOM UI Effects' },
  { path: 'frontend/js/animations.md', title: 'Animation System' },
  { path: 'frontend/js/carousel-slider.md', title: 'Carousel Slider' },
  { path: 'frontend/js/time-counter.md', title: 'Time Counter' },
  { path: 'frontend/js/multimedia.md', title: 'Multimedia System' },
  { path: 'frontend/js/table-of-content.md', title: 'Table of Content' },
  { path: 'frontend/js/js-utilities.md', title: 'Components Utilities' },
  { path: 'frontend/js/page-loader.md', title: 'Page Loader' },
  
  // UI Components
  { path: 'frontend/components/alerts.md', title: 'Alerts' },
  { path: 'frontend/components/buttons.md', title: 'Buttons' },
  { path: 'frontend/components/progress.md', title: 'Progress' },
  { path: 'frontend/components/dropdown.md', title: 'Dropdown' },
  { path: 'frontend/components/pagination.md', title: 'Pagination' },
  { path: 'frontend/components/accordion.md', title: 'Accordion' },
  { path: 'frontend/components/breadcrumb.md', title: 'Breadcrumb' },
  { path: 'frontend/components/notifications.md', title: 'Notifications' },
  { path: 'frontend/components/tabs-panels.md', title: 'Tabs & Panels' },
  { path: 'frontend/components/building-cards.md', title: 'Building Cards' },
  { path: 'frontend/components/popup-modals.md', title: 'Popup Modals' },
  { path: 'frontend/components/navbars-and-menus.md', title: 'Navbars & Menus' },
  { path: 'frontend/components/tooltip-popovers.md', title: 'Tooltip & Popovers' },
  
  // Form Controls
  { path: 'frontend/forms/form-controls.md', title: 'Form Controls' },
  { path: 'frontend/forms/form-validation.md', title: 'Form Validation' },
  { path: 'frontend/forms/advanced-select.md', title: 'Advanced Select' },
  { path: 'frontend/forms/files-upload.md', title: 'Files Upload' },
  { path: 'frontend/forms/rating-controller.md', title: 'Rating Controller' },
  { path: 'frontend/forms/form-repeater.md', title: 'Form Repeater' },
  { path: 'frontend/forms/range-slider.md', title: 'Range Slider' },
  
  // Helpers/Tools
  { path: 'frontend/helpers/hover-effects.md', title: 'Hover Effects' },
  { path: 'frontend/helpers/icons-libraries.md', title: 'Icons Libraries' },
  { path: 'frontend/helpers/data-generator.md', title: 'Data Generator' },
  { path: 'frontend/helpers/performance-optimize.md', title: 'Performance Optimize' },
];

// WordPress pages
const wordpressPages = [
  // Getting Started
  { path: 'wordpress/getting-started/installation.md', title: 'Installation' },
  { path: 'wordpress/getting-started/general-settings.md', title: 'General Settings' },
  { path: 'wordpress/getting-started/theme-customizing.md', title: 'Theme Customizing' },
  
  // GB Blocks
  { path: 'wordpress/blocks/logo-block.md', title: 'Logo Block' },
  // Not duplicating button-block as we already created it
  { path: 'wordpress/blocks/group-block.md', title: 'Group Block' },
  { path: 'wordpress/blocks/container-block.md', title: 'Container Block' },
  { path: 'wordpress/blocks/grid-row-block.md', title: 'Grid Row Block' },
  { path: 'wordpress/blocks/grid-column-block.md', title: 'Column Block' },
  { path: 'wordpress/blocks/text-elements-block.md', title: 'Text Elements Block' },
  { path: 'wordpress/blocks/breadcrumb-block.md', title: 'Breadcrumb Block' },
  { path: 'wordpress/blocks/icon-element-block.md', title: 'Icon Element Block' },
  { path: 'wordpress/blocks/popup-modals-block.md', title: 'Popup Modals Block' },
  { path: 'wordpress/blocks/logical-content-block.md', title: 'Logical Content Block' },
  { path: 'wordpress/blocks/custom-code-block.md', title: 'Custom Code Block' },
  { path: 'wordpress/blocks/media-element-block.md', title: 'Media Element Block' },
  { path: 'wordpress/blocks/responsive-menu-block.md', title: 'Responsive Menu Block' },
  { path: 'wordpress/blocks/dynamic-query-block.md', title: 'Advanced Query Block' },
  { path: 'wordpress/blocks/taxonomies-query-block.md', title: 'Taxonomies Query Block' },
  { path: 'wordpress/blocks/dynamic-theme-part.md', title: 'Theme Part Block' },
  { path: 'wordpress/blocks/users-query-block.md', title: 'Users Query Block' },
  
  // Blocks Controls
  { path: 'wordpress/controls/editor-introduction.md', title: 'Editor Introduction' },
  { path: 'wordpress/controls/layout-options.md', title: 'Layout Options' },
  { path: 'wordpress/controls/responsive-margin.md', title: 'Responsive Margin' },
  { path: 'wordpress/controls/responsive-padding.md', title: 'Responsive Padding' },
  { path: 'wordpress/controls/responsive-display.md', title: 'Responsive Display' },
  { path: 'wordpress/controls/responsive-position.md', title: 'Responsive Position' },
  { path: 'wordpress/controls/typography-options.md', title: 'Typography Options' },
  { path: 'wordpress/controls/border-radius.md', title: 'Border Radius' },
  { path: 'wordpress/controls/styles-options.md', title: 'Styles Options' },
  { path: 'wordpress/controls/swiper-slider.md', title: 'Carousel Slider' },
  { path: 'wordpress/controls/styles-support.md', title: 'CSS Properties' },
  
  // Dev Tools
  { path: 'wordpress/dev-tools/custom-menu-locations.md', title: 'Menu Locations' },
  { path: 'wordpress/dev-tools/block-patterns-templates.md', title: 'Patterns Templates' },
  { path: 'wordpress/dev-tools/custom-post-types.md', title: 'Custom Post-Types' },
  { path: 'wordpress/dev-tools/custom-taxonomies.md', title: 'Custom Taxonomies' },
  { path: 'wordpress/dev-tools/custom-meta-boxes.md', title: 'Custom Meta-Fields' },
  
  // PHP Methods
  { path: 'wordpress/php/admin-pages.md', title: 'Admin Pages' },
  { path: 'wordpress/php/api-end-point-creator.md', title: 'API End-Point' },
  { path: 'wordpress/php/countries-list-api.md', title: 'Countries API' },
  { path: 'wordpress/php/get-users-roles-list.md', title: 'Get Users Roles' },
  { path: 'wordpress/php/custom-functions.md', title: 'Custom Functions' },
];

// Create directories and files
function createFileWithPath(filePath, content) {
  const dirname = path.dirname(filePath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
    console.log(`Created directory: ${dirname}`);
  }
  
  // Skip if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`File already exists: ${filePath}`);
    return;
  }
  
  // Write file
  fs.writeFileSync(filePath, content);
  console.log(`Created file: ${filePath}`);
}

// Process all pages
function processPages(basePath, pages) {
  pages.forEach(page => {
    const fullPath = path.join(basePath, page.path);
    createFileWithPath(fullPath, placeholderTemplate(page.title));
  });
}

// Execute
console.log('Creating placeholder files...');
processPages('.', [...frontendPages, ...wordpressPages]);
console.log('Done!'); 