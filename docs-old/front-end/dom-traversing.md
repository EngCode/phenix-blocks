---
title: "DOM Traversing"
date: 2025-01-04
---

## DOM Traversing

Learn how to work around with Phenix Query DOM Traversing to move from one element to another related as siblings, parents, ancestors, etc.

## Get Ancestor

with Phenix .ancestor(target) you can select the current element parent or any of its ancestor that matches your target selector, it will loop through the element ancestors tree and check for each item when it matches your target will return it, you can learn how to use in the example below.

```
//====> Get The Direct Parent of Element <====//
Phenix(element).ancestor();

//====> Get The Ancestor starting with Parent Until it Matches the selector <====//
Phenix(element).ancestor('.target-name');
```

## Get Siblings

with Phenix .siblings(target) you can select the current element siblings that match your target selector, it will loop through the element siblings and check all of them for a matched element, and it returns an Array of HTML Elements, you can learn how to use it in the example below.

```
//====> Get All Siblings of Element <====//
Phenix(element).siblings();

//====> Get All Siblings of Element that matches .target-name <====//
Phenix(element).siblings('.target-name');
```

## Get Next Siblings

with Phenix .next(target, all) you can select the current element, and the next siblings that match your target selector, it will loop through the element’s next siblings and check all of them for a matched element, and you can learn how to use it in the example below.

```
//====> Get the Next Sibling of Element <====//
Phenix(element).next();

//====> Get All the Next Sibling of Element <====//
Phenix(element).next('all');

//====> Get the Next Sibling of Element that matches .target-name <====//
Phenix(element).next('.target-name');

//====> Get All the Next Sibling of Element that matches .target-name <====//
Phenix(element).next('.target-name', true);
```

## Get Previous Siblings

with Phenix .prev(target, all) you can select the current element siblings that match your target selector, it will loop through the element siblings and check all of them for a matched element, and it returns an Array of HTML Elements, you can learn how to use it in the example below.

```
//====> Get the Previous Sibling of Element <====//
Phenix(element).prev();

//====> Get All the Previous Sibling of Element <====//
Phenix(element).prev('all');

//====> Get the Previous Sibling of Element that matches .target-name <====//
Phenix(element).prev('.target-name');

//====> Get All the Previous Sibling of Element that matches .target-name <====//
Phenix(element).prev('.target-name', true);
```

## Get Children’s

with Phenix .child(target) you can select the current element direct children that matches your target selector, it will loop through the element children’s and check all of them for a matched element, and it returns an Array of HTML Elements, you can learn how to use it in the example below.

```
//====> Get the Direct Children's of Element <====//
Phenix(element).child();

//====> Get the Direct Children's of Element that matches .target-name <====//
Phenix(element).child('.target-name');
```
