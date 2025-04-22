---
title: "Admin Pages"
date: 2025-01-04
---

## Admin Pages

to create admin pages with the same design as Phenix Blocks admin pages you can use the pds\_add\_admin\_page function to implement the same design layouts.

```
<?php
//===> Syntax <====//
pds_add_admin_page($page_title, $page_description, $form_page, $tabs_list, $show_submit_button);

//===> Example <====//
$example_page = pds_add_admin_page(
    //==> Page Title <==//
    'Custom Page Example',

    //==> Page Description <==//
    'here you can add and remove Dynamic Custom Data like Post Types.....',

    //==> Options Form Slug <==//
    'pds-page-example',

    //==> Tabs List <==//
    array(
        //==> Locations Panel <==//
        array(
            "title" => "Tabe Example",
            "slug"  => "pds-tab-example",
            "icon"  => "far fa-list",
            "content" => 'custom_callback_function', //===> Content Function
        ),
    ),

    //==> Hide Submit Button <==//
    false
);

//===> Add the Page to Dashboard Menu <===//
add_menu_page('$page_title', '$menu_title','$capability','$menu_slug', $example_page, '$icon', $position);
```
