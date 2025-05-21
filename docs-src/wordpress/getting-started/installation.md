# Installation

## Phenix Blocks

Phenix Blocks is a comprehensive WordPress plugin that transforms the standard WordPress editor into a powerful design system. It provides a variety of pre-made blocks, styling controls, and optimization features that enable users to build custom websites quickly and easily without writing code.

## Download Plugin

You can download Phenix directly as source code or compiled files to use it or include it with your favorite package managers.

- [Starter Theme](https://github.com/EngCode/pds-starter-free)
- [WordPress Plugin](https://github.com/EngCode/phenix-blocks)

The current version is 1.3.0, which is compatible with WordPress 6.0+ and block-based themes.

## How to Install

To get started with Phenix Design System in WordPress, you can download the plugin and its starter theme from GitHub and upload them to your WordPress installation. Here's the recommended installation process:

1. **Login to your WordPress Dashboard** from `https://yourwebsite.com/wp-admin`

2. **Configure your Permalinks** - Go to `Settings → Permalinks` and set them to `Post name` for optimal SEO and functionality
   <!-- Image placeholder for Permalinks Settings -->

3. **Install the Plugin** - Go to `Plugins → Add New → Upload Plugin` and select the `phenix-blocks.zip` file that you downloaded
   <!-- Image placeholder for Upload Plugin -->

4. **Install the Theme** - Go to `Appearance → Themes → Add new Theme → Upload Theme` and select the Phenix starter theme zip file
   <!-- Image placeholder for Upload Theme -->

5. **Activate Both** - Activate both the plugin and theme

6. **Follow the Theme Setup Wizard** - If available, follow the theme setup wizard instructions to complete the installation

## Import Demo Data

If you have downloaded a theme from Phenix Themes or a similar platform store and you have demo data, you can import it using All-In-One-WP-Migration which comes with the theme's plugins. Follow these steps to import your design and theme data:

1. **Go to Dashboard ⇒ All-in-One WP Migration ⇒ Import**

2. **Click on the Button called ⇒ Import From ⇒ File**

3. **Select Your Demo Data File**, `Your_Theme/Data.wpress` and continue with importing

4. **After you have imported the Demo Data**, make sure to Re-Save the Permalink from `Settings ⇒ Permalinks`
   <!-- Image placeholder for All-in-One WP Migration -->

## Developer Installation

If you're a developer looking to contribute to Phenix Blocks or customize it extensively, follow these steps to set up a development environment:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/EngCode/phenix-blocks.git
   ```

2. **Install dependencies**:
   ```bash
   cd phenix-blocks
   npm install
   ```

3. **For development with hot reloading**:
   ```bash
   npm run phenix-start
   ```

4. **Build for production**:
   ```bash
   npm run phenix-build
   ```

The plugin uses a modern development stack with SASS for styling and TypeScript for JavaScript functionality.

## System Requirements

- WordPress 6.0 or higher (recommended for full block editor support)
- PHP 7.4 or higher
- MySQL 5.6 or higher
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Block-based theme support

## Troubleshooting

If you encounter any issues during installation:

1. **Check your server requirements** - Make sure your hosting meets the minimum requirements
2. **Verify plugin compatibility** - Ensure there are no conflicts with other plugins
3. **Clear cache** - Clear your browser cache and any caching plugins
4. **Check error logs** - Review WordPress and server error logs for specific issues
5. **Deactivate other block plugins** - Temporarily deactivate other block-related plugins to check for conflicts
6. **Verify theme compatibility** - Ensure your theme is compatible with block-based editing

For additional help, visit the [Phenix Design System GitHub repository](https://github.com/EngCode/phenix-blocks) and create an issue or contact support at [Phenix Themes](https://phenixthemes.com).

