Explaining the files structure of phenix blocks - WordPress plugin the plugin has 4 types of source code :

1. **Design System Framework**
2. **Admin Back-End Modules**
3. **Gutenberg Editor Blocks**
4. **Gutenberg Editor Components**

### 📁 Source Files List

inside the “pds-blocks” folder you will find this list

1. 📂 inc
    1. in this folder you can find the global functions and helpers to optimize the CMS
2. 📂 src
    1. in this folder you can find all the development source files for the Design System and its Blocks
3. 📂 admin
    1. in this folder you can find all admin back-end modules files
4. 📂 assets
    1. in this folder lives all the production files for the framework and the js blocks
5. 📄 pds-blocks.php

### 👨‍💻 Admin Modules

a list of the Phenix Blocks Admin back-end modules files you can find the source code in **“📁admin”** folder

```jsx
🗒️ **Plugin Options** `[pds-admin.php]`

the admin modules starts in this file [admin/pds-admin.php], you can add new options to register by using `$pds_options_list` each option requires `name`, `page` and optional `rest-api` support

```

```jsx
🗒️ **Default Options** `[pds-default.php]`

if you used `$pds_options_list` to create new plugin options make sure to register a default value for those options you have created in `admin/pds-default.php` file.

```

```jsx
🗒️ **API End-Point Creator** `[modules/api-creator.php]`

with this module `pds_add_api(array)` you can easily create custom end-point to your options and data in `yoursite.com/wp-json/pds-blocks/v2` and it take up to 6 parameters `api_slug` the path in the api url,  `read_prem`,`write_prem` to define and set `Permission` for Reading or Writing Data,

and `api_props` to define and validate the end-point data type, `get_method` the function to run when you send a GET request to the end-point, `set_method` the function to run when you send a SET request to the end-point.

```

```jsx
🗒️ **Switch Buttons** `[modules/toggle-controls.php]`

with this `pds_toggle_controls($controls_list)` module you can create a list of boolean options as switch buttons and it take an array of options each have and array with with 3 parameters `name`, the option slug name as registered in options, `title` for the option and svg `icon` image.

```

```jsx
🗒️ **JS Scripts** `[modules/scripts.php]`

in this file you can run custom javascript code in the admin pages you create with the plugin modules, which can be used to run phenix design system components and use them to build custom option controls.

```

```jsx
🗒️ **Page Creator** `[modules/page-creator.php]`, `[page-layout.php]`

with this module `pds_add_admin_page($params)` you can create custom admin pages for settings and options it create an admin page like the pre build ones in the plugin and it takes up to 5 parameters `title` and `description` for the page, form action `slug`,

`panels` array to create tabs and panels to organize your options, and each panel is an array of `title`, `description` slug `id`, and `icon` class names, `content` for the panel callback function that build the panels elements ,

and the last parameter in the page options is enable or disable the default submit button with a `boolean` true of false.

```

```jsx
🗒️ **Options Panels** `[admin/main.php]`, `[admin/panels]`

in the panel folder you can find all the options created in the plugin using the above modules to create `[blocks-settings.php]`, `[core-blocks.php]`, `[general-settings.php]`, `[optimization.php]` panels for enabling and disabling the plugin features.

```

```jsx
🗒️ **Menu Locations** `[admin/menu-locations.php]`, `[panels/locations.php]`

the menu locations generator is a page created with combining all the above modules to create a dynamic menu locations generator.

```

### ⚡ Global Functions

a list of Phenix Blocks global functions and helpers to optimize the CMS,
you can find the source code in **“📁inc”** folder

```jsx
🗒️ **Assets** `[pds-assets.php]`

in this file you can find all the loaded css and js assets for the front-end and the back-end and it includes : [ **phenix design system, fonts, admin new styles** ]

```

```jsx
🗒️ **Optimizations** `[pds-optimizer.php]`

in this file you can find all the optimization functions and options and almost all of it has options to enable/disable them from the wp-admin

```

```jsx
🗒️ **Functions** `[pds-functions.php]`

in this file you can find all the functions that help create some stuff in the theme like pagination structure, cleaning suffix, prefix strings, excerpt limitation etc.

```

### 🧩 Gutenberg Blocks List

a list of the Phenix Blocks for Gutenberg Editor, which is build for Phenix Design System and you can find the source code in **“📁src”** folder, and to **add new block follow this steps :**

1. create a new block source code following any of the existing blocks in `src/blocks`
2. after creating the block source files register your block in `webpack.config.js`
3. include your block assets in `src/blocks/blocks.php`
4. create a Switch option for the block in `admin/pds-admin.php -> $pds_options_list`
5. set a default value for the switch button in `admin/pds-default.php` to enable your block by default.

```jsx
🗒️ **Grid Container** [blocks/container]

the container block is very important block and can be used as the zero base wrapper for any layout structure you need to build using it with the grid row and columns.

```

```jsx
🗒️ **Row Block** [blocks/row]

create a grid system row to contain responsive columns that change size on each screen from 5 responsive breakpoints with all the Flex-Box Grid properties and features and you can use to create sliders or list a dynamic data from the query loop.

```

```jsx
🗒️ **Column Block** [blocks/column]

to create responsive columns for the grid system Row and Container and can be used to group and wrap any other elements and blocks.

```

```jsx
🗒️ **Query Loop** [blocks/query]

the query block let you fetch dynamic data from any post types with various options to set the loop card template, items count, pagination and sorting and its better to use it inside container and grid system blocks.

```

```jsx
🗒️ **Navigation Menu** [blocks/navigation]

the navigation menu block let you create dynamic responsive menus, from the menu post type and assign a unique location for it with the help of the PDS Locations Creator.

```

```jsx
🗒️ **Responsive Logo** [blocks/logo]

creating responsive and dynamic logo for your website with this small block component, it works just like the core "site-logo" block with extra feature to make it change in the mobile screen to the favicon or custom small icon.

```

### ⚙ PDS Editor Components

a list of the Phenix Blocks for Gutenberg Editor, which is build for Phenix Design System in you can find the source code in **“📁src/blocks/px-controls/”** folder

```jsx
🗒️ **Phenix Number Counter** [form/num-counter]

a component to create a number counter input with nice ui design and can take 6 attributes as options a `label`, `value`, `minimum` value, `maximum` value, and the `steps` of how match to increase or decrease the value and here is example for it :

`<PhenixNumber label="Label" value="0" onChange={(new_value) => {}} min={3} max={36} steps={1} />`

```

```jsx
🗒️ **Phenix Color Picker** [typography/px-color]

a text color picker from the design system colors schema for the current theme.

```

```jsx
🗒️ **Phenix Background** [elements/px-background]

a component that make you change the background of an element to a color or gradient from the design system or custom images

```