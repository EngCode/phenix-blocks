---
title: "Notifications"
date: 2025-01-04
---

## Notifications

Learn how to create notifications components with phenix javascript and css utilities

## Overview

the Notifications javascript plugin of phenix is quite simple and you can see an example of how to use below its a javascript function that you fire when ever you need to show-up a message to the user with a timeout to disappear and it comes with a few options :

- `type` which define the type of the message for colorful notifications like errors or success

- `message` which represents your message to the user at the moment of action

- `duration` for defining how much time it have to wait before it removes the message

- `position` defining where the message should show-up

and you can customize the notifications style by targeting the `.px-notfications` for the main wrapper and `.px-item` for each notification you put in their.

[Example 01](#tab-1)

[Example 02](#tab-2)

```
//=====> When Click on Button <=====//
Phenix('.notification-demo').on('click', isClicked => {
    //====> Get Data <====//
    let type = isClicked.target.getAttribute('data-type'),
        message = isClicked.target.getAttribute('data-messge'),
        position = isClicked.target.getAttribute('data-position');
    //====> Show Notifications <====//
    Phenix(document).notifications({
        type     : type, //=== Message Type [normal, error, success, warning]
        message  : message, //=== Message Content
        position : position,  //=== Message Position [top,center,bottom] [start,center,end]
    });
});
```

```
//=====> When Click on Button <=====//
Phenix('.action-button').on('click', isClicked => {
    //====> Show Notifications <====//
    Phenix(document).notifications({
        type     : string, //=== Message Type [normal, error, success, warning]
        message  : string, //=== Message Content
        duration : number, //=== Message Timeout
        position : [y,x],  //=== Message Position [top,center,bottom] [start,center,end]
    });
});
```
