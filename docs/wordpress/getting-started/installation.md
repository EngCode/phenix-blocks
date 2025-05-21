# Installation

## Phenix Blocks

Phenix Blocks is a WordPress plugin that allows users to easily build custom websites. This plugin represents a comprehensive design system that includes a variety of pre-made blocks and different settings that can be used to quickly and easily create web pages.

## Download Plugin

You can download Phenix directly as source code or compiled files to use it or include it with your favorite package managers.

- [Starter Theme](https://github.com/EngCode/pds-starter-free)
- [WordPress Plugin](https://github.com/EngCode/phenix-blocks)

## How to Install

To get started with Phenix Design System in WordPress, you can simply download the plugin and its starter theme from GitHub and upload them to your WordPress installation. Begin by uploading the plugin, then the theme, and continue with the theme Setup Wizard.

1. **Login to your WordPress Dashboard** from `https://yourwebsite.com/wp-admin`

2. **Make Sure your Permalinks is Set to `Post-name`** from `Settings ⇒ Permalinks`
   ![Permalinks Settings](../../../assets/images/wordpress/01-permalinks.png)

3. **Go to Plugins ⇒ Add New ⇒ Upload Plugin** (select the plugin.zip file that you downloaded). You can also skip this step as the plugin will be installed from the Theme Setup Wizard.
   ![Upload Plugin](../../../assets/images/wordpress/03-plugin.png)

4. **Go to Appearance ⇒ Themes ⇒ Add new Theme ⇒ Upload Theme** (select the theme.zip file).
   ![Upload Theme](../../../assets/images/wordpress/02-theme.png)

5. **Follow the Theme Installation Wizard Instructions**

## Import Demo Data

If you have downloaded a theme from Phenix Themes or a similar platform store and you have demo data, you can import it using All-In-One-WP-Migration which comes with the theme's plugins. Follow these steps to import your design and theme data:

1. **Go to Dashboard ⇒ All-in-One WP Migration ⇒ Import**

2. **Click on the Button called ⇒ Import From ⇒ File**

3. **Select Your Demo Data File**, `Your_Theme/Data.wpress` and continue with importing

4. **After you have imported the Demo Data**, make sure to Re-Save the Permalink from `Settings ⇒ Permalinks`
   ![All-in-One WP Migration](../../../assets/images/wordpress/aiowp.png)

## Developer Installation

If you're a developer looking to contribute to Phenix Blocks or customize it extensively, you may want to set up a development environment:

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

## System Requirements

- WordPress 5.9 or higher
- PHP 7.4 or higher
- MySQL 5.6 or higher
- Modern web browser (Chrome, Firefox, Safari, Edge)

## Troubleshooting

If you encounter any issues during installation:

1. **Check your server requirements** - Make sure your hosting meets the minimum requirements
2. **Verify plugin compatibility** - Ensure there are no conflicts with other plugins
3. **Clear cache** - Clear your browser cache and any caching plugins
4. **Check error logs** - Review WordPress and server error logs for specific issues

For additional help, visit the [Phenix Design System GitHub repository](https://github.com/EngCode/phenix-blocks) and create an issue.
