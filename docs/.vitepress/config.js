export default {
  base: "/",
  title: "Phenix Design System",
  description: "A comprehensive, modular UI framework for WordPress",
  head: [
    ['link', { rel: 'stylesheet', href: '/assets/css/custom.css' }]
  ],
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "Phenix Design System",
    nav: [
      { text: "Home", link: "/" },
      { text: "SASS Framework", link: "/sass/" },
      { text: "TypeScript", link: "/typescript/" },
      { text: "WordPress Blocks", link: "/blocks/" },
      { text: "PHP Integration", link: "/php/" },
    ],
    sidebar: {
      "/sass/": [
        {
          text: "SASS Framework",
          items: [
            { text: "Overview", link: "/sass/" },
            { text: "Grid System", link: "/sass/grid" },
            { text: "Typography", link: "/sass/typography" },
            { text: "Colors", link: "/sass/colors" },
            { text: "Components", link: "/sass/components" },
            { text: "Utilities", link: "/sass/utilities" },
            { text: "Forms", link: "/sass/forms" },
          ],
        },
      ],
      "/typescript/": [
        {
          text: "TypeScript Utilities",
          items: [
            { text: "Overview", link: "/typescript/" },
            { text: "DOM Manipulation", link: "/typescript/dom" },
            { text: "Animations", link: "/typescript/animations" },
            { text: "UI Components", link: "/typescript/components" },
          ],
        },
      ],
      "/blocks/": [
        {
          text: "WordPress Blocks",
          items: [
            { text: "Overview", link: "/blocks/" },
            { text: "Layout Blocks", link: "/blocks/layout" },
            { text: "Content Blocks", link: "/blocks/content" },
            { text: "Media Blocks", link: "/blocks/media" },
            { text: "Interactive Blocks", link: "/blocks/interactive" },
            { text: "Dynamic Blocks", link: "/blocks/dynamic" },
            { text: "Utility Blocks", link: "/blocks/utility" },
          ],
        },
      ],
      "/php/": [
        {
          text: "PHP Integration",
          items: [
            { text: "Overview", link: "/php/" },
            { text: "WordPress Hooks", link: "/php/hooks" },
            { text: "Plugin API", link: "/php/api" },
            { text: "Theme Integration", link: "/php/theme" },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/EngCode/phenix-blocks" },
      { icon: "twitter", link: "https://twitter.com/phenixthemes" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Abdullah Ramadan",
    },
  },
}; 