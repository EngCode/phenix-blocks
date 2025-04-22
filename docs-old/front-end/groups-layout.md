---
title: "Groups Layout"
date: 2025-01-04
---

## Groups Layout

Documentation and examples on how to group a series of elements together to build a panel of [buttons](http://phenix.localhost/test/buttons/) and [form-controls](http://phenix.localhost/test/form-controls/) on a single line or stack them in a vertical column.

## Overview

in this documentation we will use `.px-group` **opt-in** style class name and `.radius-{size}` to group a [form-controls](http://phenix.localhost/test/form-controls/) with each other attached like on panel or [buttons](http://phenix.localhost/test/buttons/) to create a tabs panel and extend with our modifiers classes and [CSS Variables](http://phenix.localhost/test/css-customize/) to make different style out of it

## Buttons Group

in the next example we will use `.px-group` to make the group of buttons stacked to each other.

```
<!-- Buttons Group -->
<div class="px-group radius-md">
    <button class="btn fs-14 primary">Primary</button>
    <button class="btn fs-14 secondary">Secondary</button>
    <button class="btn fs-14 dark">Dark button</button>
    <button class="btn fs-14 info">Informative</button>
    <button class="btn fs-14 success">Success button</button>
</div>
<!-- // Buttons Group -->
```

## Vertical Stack

in the next example we will use `.px-group-v` to make the group layout a columns above each other.

```
<!-- Buttons Group -->
<div class="px-group px-group-v radius-md mb-30 w-max-120">
    <button class="btn large fs-14 primary">Primary</button>
    <button class="btn large fs-14 secondary">Secondary</button>
    <button class="btn large fs-14 dark">Dark button</button>
    <button class="btn large fs-14 info">Informative</button>
    <button class="btn large fs-14 success">Success button</button>
</div>
<!-- // Buttons Group -->
```

## Form Controls

in the next example we will use `.px-group` and `.px-group-v` to make the group of controllers stacked to each other.

```
<!-- Controllers Group -->
<div class="px-group radius-md mb-30">
    <!-- input -->
    <input type="text" placeholder="input controller example" class="form-control col-4">
    <!-- input -->
    <select class="form-control col-4">
        <option value="">-- Select Example --></option>
    </select>
    <!-- input -->
    <input type="number" placeholder="Numbers" class="form-control col-2">
    <!-- input -->
    <button class="btn info col-2">BooM</button>
</div>
<!-- // Controllers Group -->
```

## Classes List

in the table below you can learn all class name available to extend and customize groups.

<figure>

| Cheat | Description | Markup |
| --- | --- | --- |
| `` `.px-group` `` |  | `<any>` |
| ``` `` `.px-group-v` `` ``` |  | `<any>` |

<figcaption>

Note : ( \------ ) refer to the same value as the column before.

</figcaption>

</figure>
