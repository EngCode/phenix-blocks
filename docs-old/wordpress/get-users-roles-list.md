---
title: "Get Users Roles"
date: 2025-01-04
---

## Get Users Roles List

a shortcut function to get the registered user's rules, if you’re running a membership system in your theme.

```
<?php
//===> Get List of the Registered Rules <===//
$users_roles = get_option("pds_users");

//===> Output Example <===//
array {
  ["administrator"] => array {
    ["name"]=>string
    ["capabilities"]=>array
  }
}
```
