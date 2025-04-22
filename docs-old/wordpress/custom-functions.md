---
title: "Custom Functions"
date: 2025-01-04
---

## Posts Functions

a built-in functions to be set in the $post Query and Meta data and fields.

## Query Pagination

this function pagination($query, $options = array()) can be used to generate a pagination for any of your Custom Posts Query Items

```
pagination($query, $options = array(
    //===> List Wrapper Class Names <===//
    "container" => "flexbox align-center mb-30",
    //===> Buttons Classes <====//
    "buttons" => "btn small square border-1 border-solid border-alpha-10 me-10",
    //===> Normal Button Classes <===//
    "normal_btn" => "light",
    //===> Active Button Classes <===//
    "active_btn" => "primary active",
    //===> Next/Prev Icon Classes <===//
    "next_icon" => "fas fa-angle-right",
    "prev_icon" => "fas fa-angle-left",
));
```

## Get Post Views

a function to get how much views any post or page has.

```
$post_views = get_post_views($post_id);
```
