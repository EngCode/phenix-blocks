---
title: "Navbars and Menus"
date: 2025-01-04
---

## Navbars and Menus

learn how to create and build a responsive menu and navbar/header with phenix css/js combined to make the creation of a responsive menu/navigation as easy as possible

## Core Concept

the concept and mechanism behind phenix menu javascript plugin is simple and has only the functionality that you need to build multi-level dropdown menu that you can style it as you wish or use the pre-designed phenix menu and customize it to fit your design concept, and here a few points to keep in mind while you working with the menu :

- the menu most have a `[data-id]` value for proper responsive show/hide behavior along side the \[menu-toggle\] button.

- the `mobile` option allows you to create a new `clone` of the menu to style it differently and freely out side the original menu and it goes directly before `</body>`.

- the menu mechanism supports infinite number of `nested menus` level and `mega-menu`.

- using the main style class `px-navigation` is highly recommended for proper and easy styling.

- the hover option adds support for showing the sub-menus on hover and it works only for desktop screens and phenix css `px-navigation` is required for it.

[HTML](#tab-1)

[Javascript](#tab-2)

```
<!-- Main Menu -->
<nav class="px-navigation hidden-md-down" data-id="main-menu" data-hover="true" data-mobile="custom" data-effect="fade">
    <ul>
        <li>....</li>
    </ul>
</nav>
<!-- // Main Menu -->

<!-- Toggle Button for Responsive -->
<a href="#" class="btn primary menu-toggle hidden-lg-up" data-id="main-menu">Main Menu</a>
```

```
//====> Basic Init <====//
Phenix('.px-navigation').menu();

//====> Custom Options <====//
Phenix('.px-navigation').menu({
    menu_id : 'main-menu', //===> Menu CSS ID
    hover  : true,         //===> Dropdown on Hover [Desktop only]
    mobile : 'dropdown',   //===> Responsive Mode [dropdown, custom]
    effect : 'slide',      //===> Dropdown Effect [slide, fade, custom]
    sub_active : 'px-submenu-active', //===> Submenus CSS Active Class [px-submenu-active]
    arrow : "fas fa-angle-down",  //===> Dropdown Arrow icon class names
});
```

## Options Table

<figure>

| Option | Description | Default | Data Type |
| --- | --- | --- | --- |
| `menu_id` | the id of the menu wrapper for responsive toggle show/hide. | none | string |
| `mobile` | the mobile responsive mode as toggle dropdown or custom build menu. | `dropdown` | string |
| `hover` | enable or disable show/hide on hover for desktop. | `false` | boolean |
| `effect` | show/hide effect \[fade, slide, custom\] | `slide` | string |
| `sub_active` | the active class name for the all sub-menu in primary menu. | `px-submenu-active` | string |
| `arrow` | dropdown arrow icon class names | none | string |

<figcaption>

Options Table.

</figcaption>

</figure>

## Navigation Menu

in the next example you can see a navigation menu built with phenix menu component and the Utilities css you can use it directly in your code and customize it with your own style.

[HTML](#tab-3)

[CSS](#tab-4)

[Javascript](#tab-5)

```
<!-- Main Menu -->
<nav class="px-navigation hidden-md-down pdx-20 pdy-10 bg-white mb-20" data-arrow="far fa-angle-down" data-id="main-menu" data-hover="true" data-mobile="custom" data-effect="fade">
    <ul class="flexbox reset-list fs-15">
        <li><a href="#">Custom Responsive Menu</a></li>
        <li><a href="#">Phenix Themes</a>
            <!-- Submenu [lvl-1] -->
            <ul>
                <li><a href="#">submenu item</a></li>
                <li><a href="#">Unlimited levels</a>
                    <!-- Submenu [lvl-2] -->
                    <ul>
                        <li><a href="#">the 3rd Level Menu</a></li>
                        <li><a href="#">Demo Link</a></li>
                        <li><a href="#">Get in Touch</a></li>
                        <li><a href="#">Learn About Us</a></li>
                    </ul>
                    <!-- // Submenu [lvl-2] -->
                </li>
                <li><a href="#">nested menu</a></li>
            </ul>
            <!-- // Submenu [lvl-1] -->
        </li>
        <li><a href="#">Menu Item</a></li>
        <li><a href="#">Another Link</a></li>
        <li><a href="#">Developers Guide</a>
            <!-- Submenu [lvl-1] -->
            <ul>
                <li><a href="#">the 1st Level Menu</a></li>
                <li><a href="#">Demo Link</a></li>
                <li><a href="#">Get in Touch</a></li>
                <li><a href="#">Learn About Us</a>
                    <!-- Submenu [lvl-2] -->
                    <ul>
                        <li><a href="#">the 2nd Level Menu</a></li>
                        <li><a href="#">Demo Link</a></li>
                        <li><a href="#">Get in Touch</a>
                            <!-- Submenu [lvl-3] -->
                            <ul>
                                <li><a href="#">the 3rd Level Menu</a></li>
                                <li><a href="#">Demo Link</a></li>
                                <li><a href="#">Get in Touch</a></li>
                                <li><a href="#">Learn About Us</a></li>
                            </ul>
                            <!-- Submenu [lvl-3] -->
                        </li>
                        <li><a href="#">Learn About Us</a></li>
                    </ul>
                    <!-- // Submenu [lvl-2] -->
                </li>
            </ul>
            <!-- // Submenu [lvl-1] -->
        </li>
    </ul>
</nav>
<!-- // Main Menu -->

<!-- Toggle Button for Responsive -->
<a href="#" class="btn light menu-toggle hidden-lg-up" data-id="main-menu">Toggle Menu</a>
```

```
/*==== Phenix Navigation ====*/
.px-navigation {
    /*==== CSS Options ====*/
    --font-size : 14px;
    --space-in  : 10px;
    --height : 34px;
    --color  : var(--gray-color);
    --color-hvr : var(--primary-color);
    --background : transparent;
    --background-hvr : var(--primary-offwhite);
    --font-weight : var(--bold-weight);
}

/*==== Submenu Theme ====*/
.submenu {
    /*==== CSS Options ====*/
    --height : 26px;
    --radius : 5px;
    --background : white;
    --space-in : 15px;
    --color : var(--gray-color);
    --color-hvr : var(--primary-color);
    --box-shadow : 3px 3px 8px 0 rgba(0,0,0, 0.05);
}
```

```
//====> Menu Activate <====//
Phenix('.px-navigation').menu();
```

## Nested Vertical Menu

in the examples below we will use the same menu with different style as vertical multi-level menu by using `.px-vertical` class-name added to the `.px-navigation` wrapper and of course using the css utilities to modify and customize the general design.

[Vertical](#tab-3)

[Dropdown](#tab-4)

```
<!-- Main Menu -->
<nav class="px-navigation px-vertical bg-white mb-20 border-1 border-alpha-10" data-hover="1" data-arrow="far fa-angle-right" data-id="demo-menu-3">
    <!-- Title -->
    <h4 class="fs-14 pdy-10 pdx-20 bg-alpha-05">Vertical Menu</h4>
    <!-- -->
    <ul class="reset-list fs-15 pdx-20">
        <li><a href="#">Responsive Menu</a></li>
        <li><a href="#">Phenix Themes</a>
            <!-- Submenu [lvl-1] -->
            <ul>
                <li><a href="#">submenu item</a></li>
                <li><a href="#">Unlimited levels</a>
                    <!-- Submenu [lvl-2] -->
                    <ul>
                        <li><a href="#">the 3rd Level Menu</a></li>
                        <li><a href="#">Demo Link</a></li>
                        <li><a href="#">Get in Touch</a></li>
                        <li><a href="#">Learn About Us</a></li>
                    </ul>
                    <!-- // Submenu [lvl-2] -->
                </li>
                <li><a href="#">nested menu</a></li>
            </ul>
            <!-- // Submenu [lvl-1] -->
        </li>
        <li><a href="#">Menu Item</a></li>
        <li><a href="#">Another Link</a></li>
        <li><a href="#">Developers Guide</a>
            <!-- Submenu [lvl-1] -->
            <ul>
                <li><a href="#">the 1st Level Menu</a></li>
                <li><a href="#">Demo Link</a></li>
                <li><a href="#">Get in Touch</a></li>
                <li><a href="#">Learn About Us</a>
                    <!-- Submenu [lvl-2] -->
                    <ul>
                        <li><a href="#">the 2nd Level Menu</a></li>
                        <li><a href="#">Demo Link</a></li>
                        <li><a href="#">Get in Touch</a>
                            <!-- Submenu [lvl-3] -->
                            <ul>
                                <li><a href="#">the 3rd Level Menu</a></li>
                                <li><a href="#">Demo Link</a></li>
                                <li><a href="#">Get in Touch</a></li>
                                <li><a href="#">Learn About Us</a></li>
                            </ul>
                            <!-- Submenu [lvl-3] -->
                        </li>
                        <li><a href="#">Learn About Us</a></li>
                    </ul>
                    <!-- // Submenu [lvl-2] -->
                </li>
            </ul>
            <!-- // Submenu [lvl-1] -->
        </li>
    </ul>
</nav>
<!-- // Main Menu -->
```

```
<!-- Main Menu -->
<nav class="px-navigation px-vertical bg-white mb-20 border-1 border-alpha-10" data-arrow="far fa-angle-down">
    <!-- Title -->
    <h4 class="fs-14 pdy-10 pdx-20 bg-alpha-05">Vertical Nested Menu</h4>
    <!-- -->
    <ul class="reset-list fs-15 pdx-20">
        <li><a href="#">Responsive Menu</a></li>
        <li><a href="#">Phenix Themes</a>
            <!-- Submenu [lvl-1] -->
            <ul>
                <li><a href="#">submenu item</a></li>
                <li><a href="#">Unlimited levels</a>
                    <!-- Submenu [lvl-2] -->
                    <ul>
                        <li><a href="#">the 3rd Level Menu</a></li>
                        <li><a href="#">Demo Link</a></li>
                        <li><a href="#">Get in Touch</a></li>
                        <li><a href="#">Learn About Us</a></li>
                    </ul>
                    <!-- // Submenu [lvl-2] -->
                </li>
                <li><a href="#">nested menu</a></li>
            </ul>
            <!-- // Submenu [lvl-1] -->
        </li>
        <li><a href="#">Menu Item</a></li>
        <li><a href="#">Another Link</a></li>
        <li><a href="#">Developers Guide</a>
            <!-- Submenu [lvl-1] -->
            <ul>
                <li><a href="#">the 1st Level Menu</a></li>
                <li><a href="#">Demo Link</a></li>
                <li><a href="#">Get in Touch</a></li>
                <li><a href="#">Learn About Us</a>
                    <!-- Submenu [lvl-2] -->
                    <ul>
                        <li><a href="#">the 2nd Level Menu</a></li>
                        <li><a href="#">Demo Link</a></li>
                        <li><a href="#">Get in Touch</a>
                            <!-- Submenu [lvl-3] -->
                            <ul>
                                <li><a href="#">the 3rd Level Menu</a></li>
                                <li><a href="#">Demo Link</a></li>
                                <li><a href="#">Get in Touch</a></li>
                                <li><a href="#">Learn About Us</a></li>
                            </ul>
                            <!-- Submenu [lvl-3] -->
                        </li>
                        <li><a href="#">Learn About Us</a></li>
                    </ul>
                    <!-- // Submenu [lvl-2] -->
                </li>
            </ul>
            <!-- // Submenu [lvl-1] -->
        </li>
    </ul>
</nav>
<!-- // Main Menu -->
```

## Responsive Menu

in the examples below we will use the same menu with different style as vertical multi-level menu by using `.px-vertical` class-name added to the `.px-navigation` wrapper and of course using the css utilities to modify and customize the general design.

```
<!-- Custom Responsive Menu -->
<nav id="${menu_id}" class="px-custom-menu">
    <!-- Menu Wrapper -->
    <div class="menu-wrapper">${menu.clone}</div>
    <!-- Close Trigger -->
    <a href="#${menu_id}" class="menu-toggle"></a>
</nav>
<!-- // Custom Responsive Menu -->
```

## Mega Menu

in the example below you can find the code to build a dropdown Mega-Menu.

```
<!-- Main Menu -->
<nav class="px-navigation position-rv hidden-md-down pdx-20 bg-white mb-20" data-arrow="far fa-angle-down" data-id="demo-menu" data-hover="true">
    <ul class="flexbox reset-list fs-15">
        <li><a href="#">Mega Menu</a>
            <!-- Megamenu -->
            <div class="megamenu fluid pd-20">
                <!-- Grid -->
                <div class="row gpx-15">
                    <!-- Column -->
                    <div class="col-12 col-md-4 col-lg-3">
                        <!-- Title -->
                        <h4 class="fs-14 divider-b">Quick Links</h4>
                        <!-- Menu -->
                        <ul class="reset-list">
                            <li><a href="#">Megamenu Link</a></li>
                            <li><a href="#">Contact US</a></li>
                            <li><a href="#">Another Link</a></li>
                            <li><a href="#">Phenix Themes</a></li>
                            <li><a href="#">Phenix Design</a></li>
                        </ul>
                        <!-- Divider -->
                        <span class="divider-t pdt-5 mt-10 display-block"></span>
                        <!-- Contact -->
                        <ul class="reset-list">
                            <li class="tx-icon far fa-phone">002-01122974539</li>
                            <li class="tx-icon far fa-envelope">mail@example.com</li>
                        </ul>
                    </div>
                    <!-- Column -->
                    <div class="col-12 col-md-4 col-lg-3">
                        <a href="#"><img src="http://placehold.co/300x400" alt="" class="fluid"></a>
                    </div>
                    <!-- Column -->
                    <div class="col-12 col-md-4 col-lg-3">
                        <!-- Title -->
                        <h4 class="fs-14 divider-b">Another Links</h4>
                        <!-- Menu -->
                        <ul class="reset-list">
                            <li><a href="#">Megamenu Link</a></li>
                            <li><a href="#">Contact US</a></li>
                            <li><a href="#">Phenix Design</a></li>
                        </ul>
                        <!-- Divider -->
                        <span class="divider-t mt-10 display-block"></span>
                        <!-- Title -->
                        <h4 class="fs-14 divider-b">Another Links</h4>
                        <!-- Menu -->
                        <ul class="reset-list">
                            <li><a href="#">Another Link</a></li>
                            <li><a href="#">Phenix Themes</a></li>
                            <li><a href="#">Phenix Design</a></li>
                        </ul>
                    </div>
                    <!-- Column -->
                    <div class="col-12 col-md-4 col-lg-3">
                        <a href="#"><img src="http://placehold.co/300x190" alt="" class="fluid mb-20"></a>
                        <a href="#"><img src="http://placehold.co/300x190" alt="" class="fluid mb-10"></a>
                    </div>
                    <!-- // Column -->
                </div>
                <!-- // Grid -->
            </div>
            <!-- // Megamenu -->
        </li>
        <li><a href="#">Menu Item</a></li>
        <li><a href="#">Another Link</a></li>
        <li><a href="#">Multilevel Dropdown</a>
            <!-- Submenu [lvl-1] -->
            <ul>
                <li><a href="#">submenu item</a></li>
                <li><a href="#">checkboxes list</a>
                    <ul>
                        <li>
                            <!-- Option Control [checkbox] -->
                            <label class="option-control small" data-type="checkbox">
                                <input type="checkbox" name="check-1">
                                <span class="fas fa-check">Checkbox Example</span>
                            </label>
                            <!-- Option Control [checkbox] -->
                        </li>
                        <li>
                            <!-- Option Control [checkbox] -->
                            <label class="option-control small" data-type="checkbox">
                                <input type="checkbox" name="check-1">
                                <span class="fas fa-check">Checkbox Example</span>
                            </label>
                            <!-- Option Control [checkbox] -->
                        </li>
                        <li>
                            <!-- Option Control [checkbox] -->
                            <label class="option-control small" data-type="checkbox">
                                <input type="checkbox" name="check-1">
                                <span class="fas fa-check">Checkbox Example</span>
                            </label>
                            <!-- Option Control [checkbox] -->
                        </li>
                    </ul>
                </li>
                <li><a href="#">nested menu</a></li>
                <li><a href="#">Unlimited levels</a>
                    <ul>
                        <li><a href="#">the 2nd Level Menu</a></li>
                        <li><a href="#">Demo Link</a></li>
                        <li><a href="#">Get in Touch</a>
                            <ul>
                                <li><a href="#">the 3rd Level Menu</a></li>
                                <li><a href="#">Demo Link</a></li>
                                <li><a href="#">Get in Touch</a></li>
                                <li><a href="#">Learn About Us</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Learn About Us</a></li>
                    </ul>
                </li>
            </ul>
            <!-- // Submenu [lvl-1] -->
        </li>
        <li><a href="#">Developers Guide</a></li>
    </ul>
</nav>
<!-- // Main Menu -->
```

## Classes and Attributes

in the next table you can find a list of classes and attributes that related with phenix js menu stylesheet.

<figure>

| Cheat | Description | Default |
| --- | --- | --- |
| `` `.px-navigation` `` | phenix menu style component as menu wrapper. | `none` |
| `` `.px-vertical` `` | for vertical mode of the menu | `none` |
| `` `.megamenu` `` | for megamenu wrapper. | `none` |
| `data-mobile` | the mobile responsive mode as toggle dropdown or custom build menu. | `` `dropdown` `` |
| `` `data-hover` `` | enable or disable show/hide on hover for desktop. | `` `false` `` |
| `` `data-effect` `` | show/hide effect \[fade, slide, custom\]. | `` `slide` `` |
| `` `data-sub-active` `` | the active class name for the first level of the menu. | `` `px-submenu-active` `` |
| `` `data-arrow` `` | dropdown arrow icon class names | `` `none` `` |

<figcaption>

Note : ( \------ ) refer to the same value as the column before.

</figcaption>

</figure>
