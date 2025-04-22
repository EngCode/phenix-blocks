---
title: "Countries API"
date: 2025-01-04
---

## Countries List API

Phenix Blocks comes with a countries api with their flags and information's for Developers to use in Theme Development and you can use it like this:

```
<?php
//===> Register the Countries in Options (One Time Only) <====//
if (!get_option("countries_list") && function_exist("pds_countries_register")) {
    pds_countries_register();
}

//===> Get Countires List <===//
$countris_list = get_option("countries_list");

//===> Output Example <====//
array(
    ["CountryCode"] => array {
        ["iso"]  => boolean
        ["name"] => string
        ["code"] => string
        ["dial_code"] => string
        ["capital"] => string
        ["flag"] => string(URL)
        ["flag_1x1"] => string(URL)
    }
);
```
