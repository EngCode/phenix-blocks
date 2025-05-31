import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Phenix Design System",
  description: "A powerful, modular design system for WordPress and beyond.",
  head: [
    // Favicon
    ['link', { rel: 'icon', href: '/phenix-blocks/logo.png' }],
    
    // Google Fonts preconnect
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    
    // Google Fonts
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap', rel: 'stylesheet' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap', rel: 'stylesheet' }],
    
    // Phenix CSS from CDN
    ['link', { href: 'https://cdn.jsdelivr.net/gh/EngCode/phenix-blocks/assets/css/phenix.css', rel: 'stylesheet' }],
    ['link', { href: 'https://cdn.jsdelivr.net/gh/EngCode/phenix-blocks/assets/css/phenix-utils.css', rel: 'stylesheet' }],
    
    // Phenix JS from CDN
    ['script', { src: 'https://cdn.jsdelivr.net/gh/EngCode/phenix-blocks/assets/js/phenix.js'}]
  ],
  base: '/phenix-blocks/', // Root path for GitHub Pages with custom domain
  ignoreDeadLinks: true, // Ignore dead links during build
  outDir: '../docs', // Output to docs folder for GitHub Pages classic deployment
  themeConfig: {
    logo: '/logo.png', // Make sure you have logo.png in docs/public/
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Front-End', link: '/frontend/' },
      { text: 'WordPress', link: '/wordpress/' },
      { text: 'GitHub', link: 'https://github.com/EngCode/phenix-blocks' }
    ],

    sidebar: {
      // Front-End section
      '/frontend/': [
        {
          text: 'Front-End',
          items: [
            { text: 'Overview', link: '/frontend/' }
          ]
        },
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            {
              text: 'Quick Start',
              collapsed: false,
              items: [
                { text: 'Installation', link: '/frontend/getting-started/quick-start/installation' },
                { text: 'RTL & LTR', link: '/frontend/getting-started/quick-start/rtl-ltr' },
                { text: 'Responsive', link: '/frontend/getting-started/quick-start/responsive' },
                { text: 'Compatibility', link: '/frontend/getting-started/quick-start/compatibility' },
                { text: 'CSS Customize', link: '/frontend/getting-started/quick-start/css-customize' }
              ]
            },
            {
              text: 'Working with SASS',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/frontend/getting-started/sass/overview' },
                { text: 'Build Tools', link: '/frontend/getting-started/sass/build-tools' },
                { text: 'Sass Modules', link: '/frontend/getting-started/sass/modules' },
                { text: 'Sass Integrations', link: '/frontend/getting-started/sass/integrations' },
                { text: 'Sass Variables', link: '/frontend/getting-started/sass/variables' },
                { text: 'Sass Selectors', link: '/frontend/getting-started/sass/selectors' },
                { text: 'Mixin & Functions', link: '/frontend/getting-started/sass/mixins-functions' }
              ]
            },
            {
              text: 'Working With TypeScript',
              collapsed: true,
              items: [
                { text: 'Overview', link: '/frontend/getting-started/typescript/overview' },
                { text: 'Build Tools', link: '/frontend/getting-started/typescript/build-tools' },
                { text: 'Modules', link: '/frontend/getting-started/typescript/modules' },
                { text: 'Integrations', link: '/frontend/getting-started/typescript/integrations' }
              ]
            }
          ]
        },
        {
          text: 'CSS Modules',
          collapsed: false,
          items: [
            {
              text: 'Grid System',
              collapsed: false,
              items: [
                { text: 'Containers', link: '/frontend/css/grid/containers' },
                { text: 'Flexbox Row', link: '/frontend/css/grid/flexbox-grid' },
                { text: 'Columns', link: '/frontend/css/grid/columns' },
                { text: 'Gutters', link: '/frontend/css/grid/gutters' },
                { text: 'Group Layout', link: '/frontend/css/grid/groups-layout' }
              ]
            },
            {
              text: 'Typography',
              collapsed: false,
              items: [
                { text: 'Default', link: '/frontend/css/typography/default-reset' },
                { text: 'Typography', link: '/frontend/css/typography/typography' },
                { text: 'Tables Style', link: '/frontend/css/typography/tables' },
                { text: 'List Components', link: '/frontend/css/typography/list-components' }
              ]
            },
            {
              text: 'CSS Utilities',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/frontend/css/utilities/' },
                { text: 'Sizing', link: '/frontend/css/utilities/sizing' },
                { text: 'Colors', link: '/frontend/css/utilities/colors' },
                { text: 'Spacing', link: '/frontend/css/utilities/spacing' },
                { text: 'Borders', link: '/frontend/css/utilities/borders' },
                { text: 'Shadows', link: '/frontend/css/utilities/shadows' },
                { text: 'Overlays', link: '/frontend/css/utilities/overlays' },
                { text: 'Tooltips', link: '/frontend/css/utilities/tooltips' },
                { text: 'Visibility', link: '/frontend/css/utilities/display-visibility' },
                { text: 'Typography', link: '/frontend/css/utilities/typography' },
                { text: 'Backgrounds', link: '/frontend/css/utilities/backgrounds' },
                { text: 'Positioning', link: '/frontend/css/utilities/positioning' },
                { text: 'Media Elements', link: '/frontend/css/utilities/media-utilities' },
                { text: 'Overflow & Float', link: '/frontend/css/utilities/overflow-float' },
                { text: 'Custom Scrollbar', link: '/frontend/css/utilities/custom-scrollbar' },
                {
                  text: 'Interactive Utilities',
                  collapsed: false,
                  items: [
                    { text: 'Overview', link: '/frontend/css/utilities/interactive/' },
                    { text: 'Effects', link: '/frontend/css/utilities/interactive/effects' },
                    { text: 'Transitions', link: '/frontend/css/utilities/interactive/transitions' },
                    { text: 'Scroll Snap', link: '/frontend/css/utilities/interactive/scroll-snap' },
                    { text: 'Mouse Interaction', link: '/frontend/css/utilities/interactive/mouse-interaction' },
                    { text: 'Loading Indicators', link: '/frontend/css/utilities/interactive/loading-indicators' },
                  ]
                }
              ]
            }
          ]
        },
        {
          text: 'JavaScript Modules',
          collapsed: false,
          items: [
            { text: 'DOM Manipulation', link: '/frontend/js/dom-manipulation/' },
            { text: 'DOM Traversing', link: '/frontend/js/dom-traversing' },
            { text: 'DOM Events', link: '/frontend/js/dom-events' },
            { text: 'UI Effects', link: '/frontend/js/ui-effects' },
            { text: 'Scroll Effects', link: '/frontend/js/scroll-effects' },
            {
              text: 'Animation System',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/frontend/js/animations' },
                { text: 'Viewport Animations', link: '/frontend/js/animations/viewport-animations' },
                { text: 'Scroll Animations', link: '/frontend/js/animations/scroll-animations' },
                { text: 'Animated Counter', link: '/frontend/js/animations/counter' }
              ]
            },
            { text: 'Time Counter', link: '/frontend/js/timer' },
            { text: 'Carousel Slider', link: '/frontend/js/carousel-slider' },
            {
              text: 'Multimedia System',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/frontend/js/multimedia' },
                { text: 'Background & Images', link: '/frontend/js/multimedia/background-images' },
                { text: 'Embed Media', link: '/frontend/js/multimedia/embed-media' },
                { text: 'Gradient & Mixed Backgrounds', link: '/frontend/js/multimedia/gradients' },
                { text: '3D Objects', link: '/frontend/js/multimedia/3d-objects' }
              ]
            },
            {
              text: 'Utilities',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/frontend/js/utilities/' },
                { text: 'Form Utilities', link: '/frontend/js/utilities/form-utilities' },
                { text: 'Item Remover', link: '/frontend/js/utilities/item-remover' },
                { text: 'Counter', link: '/frontend/js/utilities/counter' },
                { text: 'Dynamic Colors', link: '/frontend/js/utilities/dynamic-colors' },
                { text: 'Table of Content', link: '/frontend/js/utilities/table-of-content' },
                { text: 'Icons List', link: '/frontend/js/utilities/icons-list' },
                { text: 'SEO Utilities', link: '/frontend/js/utilities/seo-utilities' },
                { text: 'Copyright Protection', link: '/frontend/js/utilities/copyright-protection' }
              ]
            },
            { text: 'Collapse', link: '/frontend/js/collapse' },
            { text: 'Connect', link: '/frontend/js/connect' },
            {
              text: 'Third-Party Utilities',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/frontend/js/third-party/' },
                { text: 'Masonry Grid', link: '/frontend/js/third-party/masonry-grid' },
                { text: 'Typed Text', link: '/frontend/js/third-party/typed-text' },
                { text: 'Marquee Slider', link: '/frontend/js/third-party/marquee-slider' },
                { text: 'Range Slider', link: '/frontend/js/third-party/range-slider' }
              ]
            },
            { text: 'Page Loader', link: '/frontend/js/page-loader' }
          ]
        },
        {
          text: 'Form Controls',
          collapsed: false,
          items: [
            { text: 'Form Controls', link: '/frontend/forms/form-controls' },
            { text: 'Option Controls', link: '/frontend/forms/option-controls' },
            { text: 'Form Validation', link: '/frontend/forms/form-validation' },
            { text: 'Advanced Select', link: '/frontend/forms/advanced-select' },
            { text: 'Files Upload', link: '/frontend/forms/files-upload' },
            { text: 'Rating Controller', link: '/frontend/forms/rating-controller' },
            { text: 'Form Repeater', link: '/frontend/forms/form-repeater' },
            { text: 'Range Slider', link: '/frontend/forms/range-slider' },
          ]
        },
        {
          text: 'UI Components',
          collapsed: false,
          items: [
            { text: 'Alerts', link: '/frontend/components/alerts' },
            { text: 'Buttons', link: '/frontend/components/buttons' },
            { text: 'Progress', link: '/frontend/components/progress' },
            { text: 'Dropdown', link: '/frontend/components/dropdown' },
            { text: 'Pagination', link: '/frontend/components/pagination' },
            { text: 'Accordion', link: '/frontend/components/accordion' },
            { text: 'Breadcrumb', link: '/frontend/components/breadcrumb' },
            { text: 'Notifications', link: '/frontend/components/notifications' },
            { text: 'Tabs & Panels', link: '/frontend/components/tabs-panels' },
            { text: 'Building Cards', link: '/frontend/components/building-cards' },
            { text: 'Popup Modals', link: '/frontend/components/popup-modals' },
            { text: 'Navbars & Menus', link: '/frontend/components/navbars-and-menus' },
            { text: 'Tooltip & Popovers', link: '/frontend/components/tooltip-popovers' }
          ]
        }
      ],

      // WordPress section
      '/wordpress/': [
        {
          text: 'WordPress',
          items: [
            { text: 'Overview', link: '/wordpress/' }
          ]
        },
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Installation', link: '/wordpress/getting-started/installation' },
            { text: 'General Settings', link: '/wordpress/getting-started/general-settings' }
          ]
        },
        {
          text: 'Theme Customization',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/wordpress/theme-customization/index' },
            { text: 'Site Editor', link: '/wordpress/theme-customization/editor-customization' },
            { text: 'Theme.json Config', link: '/wordpress/theme-customization/theme-json-configuration' },
            { text: 'Dynamic Template Parts', link: '/wordpress/blocks/dynamic-theme-part' },
            { text: 'SASS/CSS Customization', link: '/wordpress/theme-customization/sass-customization' },
            { text: 'JavaScript Customization', link: '/wordpress/theme-customization/javascript-customization' },
          ]
        },
        {
          text: 'GB Blocks',
          collapsed: false,
          items: [
            { text: 'Logo', link: '/wordpress/blocks/logo-block' },
            { text: 'Button', link: '/wordpress/blocks/button-block' },
            { text: 'Group', link: '/wordpress/blocks/group-block' },
            { text: 'Container', link: '/wordpress/blocks/container-block' },
            { text: 'Grid Row', link: '/wordpress/blocks/grid-row-block' },
            { text: 'Column', link: '/wordpress/blocks/grid-column-block' },
            { text: 'Text Elements', link: '/wordpress/blocks/text-elements-block' },
            { text: 'Page Head', link: '/wordpress/blocks/page-head-block' },
            { text: 'Icon Element', link: '/wordpress/blocks/icon-element-block' },
            { text: 'Popup Modals', link: '/wordpress/blocks/popup-modals-block' },
            { text: 'Tabs and Panels', link: '/wordpress/blocks/tabs-block' },
            { text: 'Accordion', link: '/wordpress/blocks/accordion-block' },
            { text: 'Logical Content', link: '/wordpress/blocks/logical-content-block' },
            { text: 'Custom Code', link: '/wordpress/blocks/custom-code-block' },
            { text: 'Media Element', link: '/wordpress/blocks/media-element-block' },
            { text: 'Responsive Menu', link: '/wordpress/blocks/responsive-menu-block' },
            { text: 'Advanced Query', link: '/wordpress/blocks/dynamic-query-block' },
            { text: 'Taxonomies Query', link: '/wordpress/blocks/taxonomies-query-block' },
            { text: 'Theme Part', link: '/wordpress/blocks/dynamic-theme-part' },
            { text: 'Users Query', link: '/wordpress/blocks/users-query-block' }
          ]
        },
        {
          text: 'Blocks Components',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/wordpress/blocks-components/' },
            {
              text: 'Control Sets',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/wordpress/blocks-components/control-sets/' },
                { text: 'Style Controls', link: '/wordpress/blocks-components/control-sets/style-controls' },
                { text: 'Animation Controls', link: '/wordpress/blocks-components/control-sets/animations-set' },
                { text: 'Layout', link: '/wordpress/blocks-components/layout-options' },
                { text: 'Margin', link: '/wordpress/blocks-components/responsive-margin' },
                { text: 'Padding', link: '/wordpress/blocks-components/responsive-padding' },
                { text: 'Visibility', link: '/wordpress/blocks-components/responsive-display' },
                { text: 'Position', link: '/wordpress/blocks-components/responsive-position' },
                { text: 'Typography', link: '/wordpress/blocks-components/typography-options' },
                { text: 'Border Radius', link: '/wordpress/blocks-components/border-radius' },
                { text: 'Styles Options', link: '/wordpress/blocks-components/styles-options' },
                { text: 'Carousel Slider', link: '/wordpress/blocks-components/slider-options' },
                { text: 'CSS Properties', link: '/wordpress/blocks-components/styles-support' }
              ]
            },
            {
              text: 'Row Controls',
              collapsed: false,
              items: [
                { text: 'Input Controls', link: '/wordpress/blocks-components/core-controls/input-controls' },
                { text: 'Selection Controls', link: '/wordpress/blocks-components/core-controls/selection-controls' },
                { text: 'Toggle Controls', link: '/wordpress/blocks-components/core-controls/toggle-controls' },
                { text: 'Media Controls', link: '/wordpress/blocks-components/core-controls/media-controls' },
                { text: 'Navigation Controls', link: '/wordpress/blocks-components/core-controls/navigation-controls' },
                { text: 'Special Controls', link: '/wordpress/blocks-components/core-controls/special-controls' }
              ]
            },
            {
              text: 'Integration Helpers',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/wordpress/blocks-components/integration-helpers/' },
                { text: 'Attribute Helpers', link: '/wordpress/blocks-components/integration-helpers/attribute-helpers' },
                { text: 'Rendering Helpers', link: '/wordpress/blocks-components/integration-helpers/rendering-helpers' },
                { text: 'Data Helpers', link: '/wordpress/blocks-components/integration-helpers/data-helpers' },
                { text: 'Block Accessibility', link: '/wordpress/blocks-components/integration-helpers/block-accessibility' },
                { text: 'Responsive Controls', link: '/wordpress/blocks-components/integration-helpers/responsive-controls' },
                { text: 'Attribute Management', link: '/wordpress/blocks-components/integration-helpers/attribute-management' }
              ]
            }
          ]
        },
        {
          text: 'Dev Tools',
          collapsed: false,
          items: [
            { text: 'Menu Locations', link: '/wordpress/dev-tools/custom-menu-locations' },
            { text: 'Patterns Templates', link: '/wordpress/dev-tools/block-patterns-templates' },
            { text: 'Custom Post-Types', link: '/wordpress/dev-tools/custom-post-types' },
            { text: 'Custom Taxonomies', link: '/wordpress/dev-tools/custom-taxonomies' },
            { text: 'Custom Meta-Fields', link: '/wordpress/dev-tools/custom-meta-boxes' },
            { text: 'API Creator', link: '/wordpress/dev-tools/api-creator' },
            { text: 'Admin Page Creator', link: '/wordpress/dev-tools/admin-page-creator' }
          ]
        },
        {
          text: 'PHP Methods',
          collapsed: false,
          items: [
            { text: 'Admin Pages', link: '/wordpress/php-methods/admin-pages' },
            { text: 'API End-Point', link: '/wordpress/php-methods/api-endpoints' },
            { text: 'Custom Functions', link: '/wordpress/php-methods/custom-functions' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EngCode/phenix-blocks' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright 2023-present Phenix Design System'
    },

    // Optional: Add search functionality (requires setup)
    search: {
      provider: 'local' 
    }
  }
}) 