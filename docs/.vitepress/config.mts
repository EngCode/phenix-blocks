import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Phenix Design System",
  description: "A powerful, modular design system for WordPress and beyond.",
  // base: '/phenix-docs/', // uncomment and set if deploying to a subdirectory like github pages

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
              collapsed: true,
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
          collapsed: true,
          items: [
            {
              text: 'Grid System',
              collapsed: true,
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
              collapsed: true,
              items: [
                { text: 'Default', link: '/frontend/css/typography/default-reset' },
                { text: 'Typography', link: '/frontend/css/typography/typography' },
                { text: 'Tables Style', link: '/frontend/css/typography/tables' },
                { text: 'List Components', link: '/frontend/css/typography/list-components' }
              ]
            },
            {
              text: 'CSS Utilities',
              collapsed: true,
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
                  collapsed: true,
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
          collapsed: true,
          items: [
            { text: 'DOM Manipulation', link: '/frontend/js/dom-manipulation/' },
            { text: 'DOM Traversing', link: '/frontend/js/dom-traversing' },
            { text: 'DOM Events', link: '/frontend/js/dom-events' },
            {
              text: 'UI Effects',
              collapsed: true,
              items: [
                { text: 'ScrollSpy', link: '/frontend/js/ui-effects/scrollspy' }
              ]
            },
            { text: 'Scroll Effects', link: '/frontend/js/scroll-effects' },
            {
              text: 'Animation System',
              collapsed: true,
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
              collapsed: true,
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
              collapsed: true,
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
            {
              text: 'Third-Party Utilities',
              collapsed: true,
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
          collapsed: true,
          items: [
            { text: 'Form Controls', link: '/frontend/forms/form-controls' },
            { text: 'Form Validation', link: '/frontend/forms/form-validation' },
            { text: 'Advanced Select', link: '/frontend/forms/advanced-select' },
            { text: 'Files Upload', link: '/frontend/forms/files-upload' },
            { text: 'Rating Controller', link: '/frontend/forms/rating-controller' },
            { text: 'Form Repeater', link: '/frontend/forms/form-repeater' },
            { text: 'Range Slider', link: '/frontend/forms/range-slider' }
          ]
        },
        {
          text: 'UI Components',
          collapsed: true,
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
        },
        {
          text: 'Helpers/Tools',
          collapsed: true,
          items: [
            { text: 'Icons Libraries', link: '/frontend/helpers/icons-libraries' },
            { text: 'Data Generator', link: '/frontend/helpers/data-generator' },
            { text: 'Performance Optimize', link: '/frontend/helpers/performance-optimize' }
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
            { text: 'General Settings', link: '/wordpress/getting-started/general-settings' },
            { text: 'Theme Customizing', link: '/wordpress/getting-started/theme-customizing' }
          ]
        },
        {
          text: 'GB Blocks',
          collapsed: true,
          items: [
            { text: 'Logo', link: '/wordpress/blocks/logo-block' },
            { text: 'Button', link: '/wordpress/blocks/button-block' },
            { text: 'Group', link: '/wordpress/blocks/group-block' },
            { text: 'Container', link: '/wordpress/blocks/container-block' },
            { text: 'Grid Row', link: '/wordpress/blocks/grid-row-block' },
            { text: 'Column', link: '/wordpress/blocks/grid-column-block' },
            { text: 'Text Elements', link: '/wordpress/blocks/text-elements-block' },
            { text: 'Breadcrumb', link: '/wordpress/blocks/breadcrumb-block' },
            { text: 'Icon Element', link: '/wordpress/blocks/icon-element-block' },
            { text: 'Popup Modals', link: '/wordpress/blocks/popup-modals-block' },
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
          text: 'Blocks Controls',
          collapsed: true,
          items: [
            { text: 'Intro', link: '/wordpress/controls/editor-introduction' },
            { text: 'Layout', link: '/wordpress/controls/layout-options' },
            { text: 'Margin', link: '/wordpress/controls/responsive-margin' },
            { text: 'Padding', link: '/wordpress/controls/responsive-padding' },
            { text: 'Visibility', link: '/wordpress/controls/responsive-display' },
            { text: 'Position', link: '/wordpress/controls/responsive-position' },
            { text: 'Typography', link: '/wordpress/controls/typography-options' },
            { text: 'Border Radius', link: '/wordpress/controls/border-radius' },
            { text: 'Styles Options', link: '/wordpress/controls/styles-options' },
            { text: 'Carousel Slider', link: '/wordpress/controls/swiper-slider' },
            { text: 'CSS Properties', link: '/wordpress/controls/styles-support' }
          ]
        },
        {
          text: 'Dev Tools',
          collapsed: true,
          items: [
            { text: 'Menu Locations', link: '/wordpress/dev-tools/custom-menu-locations' },
            { text: 'Patterns Templates', link: '/wordpress/dev-tools/block-patterns-templates' },
            { text: 'Custom Post-Types', link: '/wordpress/dev-tools/custom-post-types' },
            { text: 'Custom Taxonomies', link: '/wordpress/dev-tools/custom-taxonomies' },
            { text: 'Custom Meta-Fields', link: '/wordpress/dev-tools/custom-meta-boxes' }
          ]
        },
        {
          text: 'PHP Methods',
          collapsed: true,
          items: [
            { text: 'Admin Pages', link: '/wordpress/php/admin-pages' },
            { text: 'API End-Point', link: '/wordpress/php/api-end-point-creator' },
            { text: 'Countries API', link: '/wordpress/php/countries-list-api' },
            { text: 'Get Users Roles', link: '/wordpress/php/get-users-roles-list' },
            { text: 'Custom Functions', link: '/wordpress/php/custom-functions' }
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