---
title: "Advanced Select"
date: 2025-01-04
---

## Advanced Select

Learn how to build and use the advanced select controller from phenix design system.

## Overview

because the standard select controller doesn't offer enough features to support a decent user experience in most cases, phenix `.select()` comes to cover that for you in the most simplistic way there is and gives you the freedom that you wish to `manipulate`, `add`, `remove` data as you need, and here is some tips to keep in mind :

- the **original select** is wrapped up with a new div with the same classes and it lives inside that wrapper.

- the **search** is not enabled by default you have to enable it with data-attribute or js options.

- the **new select** can be styled with `.form-control` and take your style as any other controller.

- the **callback events** always comes with all data and elements inside its `detail` object.

## Basic Usage

in the next example you can learn how to install and build the `select(options)` component from normal html select element, and with the `default` options you will just get a nice looking select controller.

[HTML](#tab-1)

[Javascript](#tab-2)

```
<!-- Form Control -->
<select name="px-select" class="form-control px-select" data-options...>
    <optgroup>Options Set 01</optgroup>
    <option value="option-1">Option #01</option>
    <option value="option-2">Option #02</option>
    <option value="option-3">Option #03</option>
    <option value="option-4">Option #04</option>
    <option value="option-5">Option #05</option>
    ...
</select>
<!-- // Form Controls -->
```

```
//====> Activate Select <====//
Phenix('.px-select').select(...options);
```

## Enable Search

in the next example you can learn how to enable the `search` through the options list to filter a long list for specific options and choose it which can be useful if you have a lot of data in your select this will make it easy for the user to filter their options and search for what they looking for faster.

[HTML](#tab-3)

[Javascript](#tab-4)

```
<!-- Form Control -->
<select class="form-control px-select" data-search="1">...</select>
<!-- // Form Controls -->
```

```
//====> Activate Select <====//
Phenix('.px-select').select({ search: true });
```

## Disabled, Placeholder

in the next example you can see how the disabled options look and act like, and how to set a placeholder for your select with `data-placeholder` attribute, and if the select element its self has a `disabled` attribute it will be **disabled** from any interactive actions.

```
<!-- Form Control [disabled select] -->
<select class="form-control px-select" disabled>...</select>

<!-- Form Control [disabled options] -->
<select class="form-control px-select"  data-placeholder="With Disabled Options">
    <option value="">...</option>
    <option value="" disabled>...</option>
    <option value="">...</option>
    <option value="" disabled>...</option>
</select>
```

## Options Customize

in the next example you will learn how to add `images` or `icons`, to your options items like adding flags to a list of countries or add font icon classes to your option, for the image you can set image url to `data-image` attribute for the `<option>` elements in your original select,

and if the `<option>` element has css classes on it it will be transferred to the items so you can use `font-icons` for the options `<li>` element as classes, you can learn more from the example below.

```
<!-- Form Control [font icons example] -->
<select class="form-control px-select" data-placeholder="With Disabled Options" data-holder-classes="Placeholder Classes">
    <option class="tx-icon far fa-folder" value="">...</option>
</select>

<!-- Form Control [images example] -->
<select class="form-control px-select" data-placeholder="With Disabled Options" data-image="Placeholder Image URL">
    <option data-image="URL" value="">...</option>
</select>
```

## Multiple Selection

in the next example you will learn how to enable **multiple selection** on your select with `multiple` option or attribute, when the multiple mode is enabled the returned value of the select will always be **array** of values, and you can set a limitation for the selected value with `data-max` attribute or `max` option from js.

and if the `<option>` element has css classes on it it will be transferred to the items so you can use `font-icons` for the options `<li>` element as classes, you can learn more from the example below.

[HTML](#tab-5)

[Javascript](#tab-6)

```
<!-- Form Control -->
<select class="form-control px-select" data-max="4" multiple>...</select>
```

```
//====> Activate Select <====//
Phenix('.px-select').select({
   min: 2,
   max: 4,
   multiple: true
});
```

## Callback Events

the select comes with a set of events to help you do stuff to the select and its elements when ever an event of them Fired on your select element and you can use them as any javascript events or with the `.on()` of [Phenix Javascript](http://phenix.localhost/test/dom-events/), and you can find a List of all available Events from the example below, and all events return to you the `select` and its `original`, `list`, `value` with `event.detail` method.

and if the `<option>` element has css classes on it it will be transferred to the items so you can use `font-icons` for the options `<li>` element as classes, you can learn more from the example below.

```
//===> Do Something When the Target value is changed <===//
Phenix('.px-select').select().on('change', select => {
    //... Returned Data ...//
    select.detail.select    //===> Get the Select Wrapper
    select.detail.original  //===> Get the Original Select Element
    select.detail.list      //===> Get the Options List Element
    select.detail.search    //===> Get the search input element
    select.detail.value     //===> Get the Current value of the Select
});

//===> Do Something When the Options is shown <===//
Phenix('.px-select').on('opened', event => {
    console.log("Hello There :) the Options is Visible");
});

//===> Do Something When the Options is Hidden <===//
Phenix('.px-select').on('closed', event => {
    console.log("Hello There :) the Options is hidden");
});

//===> Do Something While the user is typing in options search <===//
Phenix('.px-select').on('typing', event => { /*...*/ });

//===> Do Something while the user is focusing on the select <===//
Phenix('.px-select').on('focus', event => { /*...*/ });
```

## Options Table

in the next table you can find all `options` available for the select plugin of phenix, and all of the options are available through the `data-attributes` api.

| Options | Description | Data Type |
| --- | --- | --- |
| `` `search` `` | enable options search and filtering. | `boolean` |
| ``` `` `multiple` `` ``` | enable multiple options select. | `` `boolean` `` |
| ``` `` `placeholder` `` ``` | add placeholder to your select. | ````` ```` ``` `` `string` `` ``` ```` ````` |
| ``` `` `searchPlaceholder` `` ``` | change the placeholder of the search in options. | `````````` ````````` ```````` ``````` `````` ````` ```` ``` `` `string` `` ``` ```` ````` `````` ``````` ```````` ````````` `````````` |
| `` `min` `` | set minimum number of selection for multiple select. | ````` ```` ``` `` `number` `` ``` ```` ````` |
| `` `max` `` | set maximum number of selection for multiple select. | ````` ```` ``` `` `number` `` ``` ```` ````` |

## Data Attributes

<figure>

| Attributes | Description | Data Type |
| --- | --- | --- |
| `` `data-search` `` | enable options search and filtering. | `boolean` |
| ``` `` `multiple` `` ``` | enable multiple options select. | `` `boolean` `` |
| `data-placeholder` | add placeholder to your select. | ````` ```` ``` `` `string` `` ``` ```` ````` |
| ``` `` `data-search-placeholder` `` ``` | change the placeholder of the search in options. | `````````` ````````` ```````` ``````` `````` ````` ```` ``` `` `string` `` ``` ```` ````` `````` ``````` ```````` ````````` `````````` |
| ```` ``` `` `data-min` `` ``` ```` | set minimum number of selection for multiple select. | `````````` ````````` ```````` ``````` `````` ````` ```` ``` `` `number` `` ``` ```` ````` `````` ``````` ```````` ````````` `````````` |
| `` `data-max` `` | set maximum number of selection for multiple select. | ````` ```` ``` `` `number` `` ``` ```` ````` |

<figcaption>

Note : ( \------ ) refer to the same value as the column before.

</figcaption>

</figure>
