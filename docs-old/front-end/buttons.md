---
title: "Buttons"
date: 2025-01-04
---

## Buttons

Documentation and examples for styles of button component of Phenix Design System.

## Overview

PDS buttons are **preset** style, Add the base class `.btn` to any `<element>`, then extend with our optional modifier classes or custom styles or via CSS variables that comes with it,

## Standard Buttons

in the example below you can find the normal size button with multiple colors and the CSS variables to customize it as you desire.

[HTML](#tab-1)

[CSS](#tab-2)

```
<!-- Button -->
<button class="btn border-alpha-10">Button</button>

<!-- Button -->
<button class="btn primary">Primary</button>

<!-- Button -->
<button class="btn secondary">Secondary</button>

<!-- Button -->
<button class="btn info">Informative</button>

<!-- Button -->
<button class="btn success">Success</button>

<!-- Button -->
<button class="btn dark">Dark</button>

<!-- Button -->
<button class="btn danger">Danger</button>

<!-- Button -->
<button class="btn warning">Warning</button>

<!-- Button -->
<button class="btn light">Light</button>

<!-- Button -->
<button class="btn disabled">Light</button>
```

```
/*==== CSS Options ====*/
.btn {
    /*==== Options ====*/
    --padding : 20px;
    --text-weight : var(--medium-weight);
    /*==== Size Options ====*/
    --height : 42px;
    --text-size : 15px;
    --border-size : 0;
    /*==== Colors Options ====*/
    --color : var(--dark-color);
    --background : var(--primary-offwhite);
    --border-color : transparent;
}
```

## Buttons Sizes

in the example below you can find and see 5 different sizes of the buttons sizing classes `.tiny`, `.small`, `.large`, .`xlarge`.

```
<!-- Tiny-->
<button class="btn primary tiny">tiny</button>

<!-- Small -->
<button class="btn primary small">small</button>

<!-- Normal -->
<button class="btn primary">Normal</button>

<!-- Large -->
<button class="btn primary large">Large Button</button>

<!-- xLarge -->
<button class="btn primary xlarge">xLarge Button</button>
```

## Buttons Outline

in the example below you can find and see the buttons with the `.outline` style class.

```
<!-- Button -->
<button class="btn outline">Button</button>

<!-- Button -->
<button class="btn outline primary">Primary</button>

<!-- Button -->
<button class="btn outline secondary">Secondary</button>

<!-- Button -->
<button class="btn outline info">Informative</button>
```

## Buttons with icons

in the example below you can find and see the buttons with icons style class `.btn-icon` and `.btn-icon-end` for reversing the icon position to the otherside.

```
<!-- Button -->
<button class="btn light btn-icon far fa-star">Button</button>

<!-- Button -->
<button class="btn primary btn-icon-end far fa-user">Primary</button>

<!-- Button -->
<button class="btn secondary outline btn-icon fas fa-cog">Button</button>

<!-- Button -->
<button class="btn outline primary btn-icon-end fas fa-star">Primary</button>
```

## Labeled icons

in this example you can use `.labeled` to make the icon of any button inside labeled box before or after the text of the button.

```
<!-- Button -->
<button class="btn primary btn-icon labeled far fa-user">Primary</button>

<!-- Button -->
<button class="btn primary btn-icon-end far fa-user labeled">Primary</button>
```

## Classes List

<figure>

| Cheat | Description | Markup |
| --- | --- | --- |
| `` `.btn` `` | main class name for buttons `op-in` style. | `<any>` |
| ``` `` `.outline` `` ``` | for buttons with outline style. | `` `.btn` `` |
| `` `.tiny` `` | resize the button to a tiny \[30px\] size. | ``` `` `.btn` `` ``` |
| `` `.small` `` | resize the button to a Small \[36px\] size. | `` `.btn` `` |
| `` `.large` `` | resize the button to a Large \[52px\] size. | `` `.btn` `` |
| `` `.xlarge` `` | resize the button to a xLarge \[62px\] size. | `` `.btn` `` |
| ``` `` `.square` `` ``` | making a fixed width equal to the button height. | ``````` `````` ````` ```` ``` `` `.btn` `` ``` ```` ````` `````` ``````` |
| ``` `` `.primary` `` ``` | primary colored button. | ``````` `````` ````` ```` ``` `` `.btn` `` ``` ```` ````` `````` ``````` |
| `` `.secondary` `` | secondary colored button. | ``````` `````` ````` ```` ``` `` `.btn` `` ``` ```` ````` `````` ``````` |
| `` `.dark` `` | button with dark colors. | `` `.btn` `` |
| `` `.light` `` | button with white colors. | `` `.btn` `` |
| `` `.success` `` | button with success/green colors. | `` `.btn` `` |
| `` `.danger` `` | button with danger/error colors. | `` `.btn` `` |
| `` `.warning` `` | button with warning colors. | `` `.btn` `` |
| `` `.info` `` | button with informative colors. | `` `.btn` `` |
| `` `.disabled` `` | button with disabled/gray colors. | `` `.btn` `` |
| `` `.btn-icon` `` | for buttons with icons before its text. | `` `.btn` `` |
| `` `.btn-icon-end` `` | for buttons with icons after its text. | `` `.btn` `` |
| `` `.labeled` `` | for buttons with labeled icons | `` `.btn-icon` `` |

<figcaption>

Note : ( \------ ) refer to the same value as the column before.

</figcaption>

</figure>
