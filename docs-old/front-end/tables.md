---
title: "Tables Style"
date: 2025-01-04
---

## Tables

Documentation and examples for opt-in styling of table component of Phenix Design System.

## Overview

Due to the widespread use of <table> elements across third-party widgets like calendars and date pickers, PDS tables are opt-in, Add the base class .table to any <table>, then extend with our optional modifier classes or custom styles. All table styles are not inherited, meaning any nested tables can be styled independently from the parent.

[HTML](#tab-1)

[CSS](#tab-2)

```
<!-- Table -->
<table class="table">
    <!-- Headlines -->
    <thead>
        <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone No.</th>
            <th>Rule</th>
        </tr>
    </thead>
    <!-- Body -->
    <tbody>
        <!-- Row -->
        <tr>
            <td>01</td>
            <td>Abdullah</td>
            <td>Ramadan</td>
            <td>02-01122974539</td>
            <td>PDS Creator</td>
        </tr>
        <!-- // Row -->
    </tbody>
    <!-- // Body -->
</table>
<!-- // Table -->
```

```
/*==== Tables CSS ====*/
.table {
    /*==== Options ====*/
    --table-background : inherit;
    --table-head-bg    : inherit;
    --table-striped    : #f4f4f4;
    --table-border     : 1px solid rgba(0,0,0, 0.1);
    --table-padding    : 15px;
    --table-radius     : 5px;
}
```

## Striped rows[](https://getbootstrap.com/docs/5.0/content/tables/#striped-rows)

Use `.striped` to add zebra-striping to any table row within the `<tbody>`.

[HTML](#tab-3)

[CSS](#tab-4)

```
<!-- Table -->
<table class="table striped">
    ...
</table>
<!-- // Table -->
```

```
/*==== Tables CSS ====*/
.table {
    /*==== Options ====*/
    --table-background : inherit;
    --table-head-bg    : inherit;
    --table-striped    : #f4f4f4;
    --table-border     : 1px solid rgba(0,0,0, 0.1);
    --table-padding    : 15px;
    --table-radius     : 5px;
}
```

## Bordered Table

Use `.bordered` for borders on all sides of the table and cells.

[HTML](#tab-5)

[CSS](#tab-6)

```
<!-- Table -->
<table class="table bordered">
    ...
</table>
<!-- // Table -->
```

```
/*==== Tables CSS ====*/
.table {
    /*==== Options ====*/
    --table-background : inherit;
    --table-head-bg    : inherit;
    --table-striped    : #f4f4f4;
    --table-border     : 1px solid rgba(0,0,0, 0.1);
    --table-padding    : 15px;
    --table-radius     : 5px;
}
```

## Tables borderless

Use `` .`borderless` `` for a table without borders.

[HTML](#tab-7)

[CSS](#tab-8)

```
<!-- Table -->
<table class="table borderless">
    ...
</table>
<!-- // Table -->
```

```
/*==== Tables CSS ====*/
.table {
    /*==== Options ====*/
    --table-background : inherit;
    --table-head-bg    : inherit;
    --table-striped    : #f4f4f4;
    --table-border     : 1px solid rgba(0,0,0, 0.1);
    --table-padding    : 15px;
    --table-radius     : 5px;
}
```

## Responsive Tables

Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive across all viewports by wrapping a .table with .table-responsive. or, pick a maximum breakpoint with which to have a responsive table by using .table-responsive{-sm|-md|-lg|-xl} From that breakpoint and up, the table will behave normally and not scroll horizontally.

```
<!-- Table Wrapper -->
<div class="table-responsive">
    <table class="table">
        ...
    </table>
</div>
<!-- Table Wrapper -->
```

## Utilities and Helpers

the table and all tr, td, th inside of it can benefit from [PDS utilities](https://phenixthemes.com/pds-docs/category/utilities/) like [Colors](https://phenixthemes.com/pds-docs/colors/), [Backgrounds](https://phenixthemes.com/pds-docs/backgrounds/), [Borders](https://phenixthemes.com/pds-docs/borders/), and [Alignment](https://phenixthemes.com/pds-docs/typography/) classes provided by phenix and you can see a list of the related helpers to the .table listed below.

<figure>

| Cheat | Description | Markup |
| --- | --- | --- |
| `.table` | adding phenix table style to any table. | `<table>` |
| `.striped` | add zebra-striping to any table row within the `<tbody>`. | `.table` |
| `.bordered` | add borders on all sides of the table and cells. | `.table` |
| `.borderless` | for a table without borders. | `.table` |
| `.table-responsive` | allow tables to be responsive and scrolled horizontally with ease. | `<table-wrapper>` |

<figcaption>

Note : ( \------ ) refer to the same value as the column before.

</figcaption>

</figure>
