/*===================================
=                                   =
=  - !Hello There                   =
=  - this is Your working space     =
=  - here you can customize phenix  =
=  - to your app ui design needs    =
=  - Good Luck :)                   =
=                                   =
===================================*/

/*====> Import Phenix <====*/
import Phenix, { PhenixElements } from "..";

/*====> Custom Variables <====*/
declare var wc_add_to_cart_params: any;

/*====> Add to Cart Method <====*/
PhenixElements.prototype.pds_add_to_cart = function (button, product_ids) {
    //===> Get Quantity <===//
    let quantity = Phenix(button).ancestor('.single-product-content')?.querySelector('.quantity-input')?.value || parseInt(button.getAttribute('data-quantity')) || 1;
    let variation_id = button.getAttribute('data-variation');

    //===> Convert single ID to array <===//
    if (!Array.isArray(product_ids)) product_ids = [product_ids];

    //===> Remove Empty Items from Array <===//
    product_ids = product_ids.filter(id => id);

    //===> Collect Selected Attributes <===//
    // const attributes = {};
    // Phenix(button).ancestor('.single-product-content')?.querySelectorAll('.variation-control').forEach(control => {
    //     const attributeValue = control.value;
    //     const attributeName  = control.getAttribute('name');
    //     if (attributeValue) attributes[attributeName] = attributeValue;
    // });

    const addProductsSequentially = (index = 0) => {
        //===> Ensure valid index and stop when done <===//
        if (index >= product_ids.length) {
            //===> Disable loading mode <===//
            button.classList.remove('px-loading-inline');
            //===> Trigger WooCommerce's AJAX event to update the cart fragments <===//
            document.body.dispatchEvent(new CustomEvent('pds_cart_updated', {detail: {}}));
            //===> Close Func <===//
            return;
        }

        //===> Create Form Data Request <===//
        const formData = new URLSearchParams();
        formData.append('quantity', quantity);
        formData.append('action', 'woocommerce_add_to_cart');
        formData.append('product_id', product_ids[index]);

        //===> Add Variation ID if Existed <===//
        if (variation_id) formData.append('product_id', variation_id);

        //===> Append Collected Attributes <===//
        // for (const [key, value] of Object.entries(attributes)) {
        //     /*====> Custom Variables <====*/
        //     formData.append(key, value as any);
        // }

        console.log(formData);

        //===> Send the request to WooCommerce via Fetch API <===//
        fetch(wc_add_to_cart_params.wc_ajax_url.replace('%%endpoint%%', 'add_to_cart'), {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            body: formData.toString()
        })
        //===> Return the Response as JSON data <===//
        .then(response => response.json()).then(data => {
            //===> Check for Data and Error <===//
            if (data && data.error) {
                //====> Show Notifications <====//
                Phenix(document).notifications({
                    duration : 5000,
                    type     : "error",
                    position : ["center", "center"],
                    message  : 'Error adding to cart: ' + data.error,
                });
            } else {
                //====> Show Notifications <====//
                Phenix(document).notifications({
                    duration : 5000,
                    type     : "success",
                    position : ["center", "center"],
                    message  : "Product added to cart successfully.",
                });

                //===> Add next product in the list <===//
                addProductsSequentially(index + 1);
            }
        })
        //===> Catch any errors <===//
        .catch(error => console.error('Error:', error));
    };

    //===> Start Processing <===//
    addProductsSequentially();
};

/*====> Remove Product Method <====*/
PhenixElements.prototype.pds_remove_from_cart = function (formData, cartItemKey) {
    //===> Send the AJAX request via Fetch API <===//
    fetch(wc_add_to_cart_params.wc_ajax_url.replace('%%endpoint%%', 'remove_from_cart'), {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
        body: formData.toString()
    })
    //===> Return the Response as JSON data <===//
    .then(response => response.json()).then(data => {
        //===> Check for Data Fragments <===//
        if (data.fragments) { //===> Fragments {cart_count, cart_total} <===//
            //====> Remove the Item from the DOM <====//
            document.querySelectorAll(`.cart-item[data-cart_item_key="${cartItemKey}"]`).forEach(item => item.remove());

            //===> Trigger WooCommerce's AJAX event to update the cart fragments <===//
            document.body.dispatchEvent(new CustomEvent('pds_cart_updated', { detail: data }));

            //====> Show Notifications <====//
            Phenix(document).notifications({
                duration : 5000,
                type     : "success",
                position : ["center", "center"],
                message  : "Product removed from cart successfully.",
            });
        } 
        //===> Check for Error <===//
        else if (data.error) {
            //====> Show Notifications <====//
            Phenix(document).notifications({
                duration : 5000,
                type     : "error",
                position : ["bottom", "end"],
                message  : 'Error removing from cart: ' + data.message,
            });
        }
    })
    //===> Catch any errors <===//
    .catch(error => {
        console.error('Error removing item from cart:', error);
    });
};

/*====> Toggle Wishlist Method <====*/
PhenixElements.prototype.pds_toggle_wishlist = function (isClicked, action_url, add_url, remove_url) {
    //====> Send the Data to the Server <====//
    fetch(action_url, {
        method: "GET",
        headers: {"X-Requested-With": "XMLHttpRequest"},
    }).then(response => {
        //====> Success Data <====//
        if (response.ok) {
            //====> Show Notifications <====//
            Phenix(document).notifications({
                duration : 5000,
                type     : "success",
                position : ["bottom", "end"],
                message  : "Wishlist Updated successfully.",
            });
            //====> Replace Icon Style <====//
            if (action_url.includes('add_to_wishlist')) {
                isClicked.target.classList.add("fas");
                isClicked.target.classList.remove("far");
                isClicked.target.setAttribute("href", remove_url);
            } else {
                isClicked.target.classList.add("far");
                isClicked.target.classList.remove("fas");
                isClicked.target.setAttribute("href", add_url);
            }
            //====> Remove Loading Mode <====//
            isClicked.target.classList.remove("px-loading-inline");
        }
        //====> Error Status <====//
        else {
            //====> Show Notifications <====//
            Phenix(document).notifications({
                duration : 5000,
                type     : "error",
                position : ["bottom", "end"],
                message  : "Failed to update wishlist",
            });
        }
    });
}

//===> Mini Cart Updater <===//
document.body.addEventListener('pds_cart_updated', function() {
    //===> Fetch the updated cart fragments using Fetch API <===//
    fetch(wc_add_to_cart_params.wc_ajax_url.replace('%%endpoint%%', 'get_refreshed_fragments'), {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
    })
    //===> Return the Response as JSON data <===//
    .then(response => response.json()).then(data => {
        //===> Check for the Cart Fragments <===//
        //===* data {div.widget_shopping_cart_content, .cart-table, cart_count, cart_total} <===//
        if (data && data.fragments) {   
            //===> Cart Content Fragment <===//
            const newCartContent = data.fragments["div.widget_shopping_cart_content"];

            //===> Temporary Container for the Content <===//
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = newCartContent;
            tempDiv.innerHTML += data.fragments['.cart-table'];

            //===> Update The Mini Cart Items <===//
            Phenix(".pds-cart-fragment .woocommerce-mini-cart").forEach(cart => cart.innerHTML = tempDiv.querySelector('.widget_shopping_cart_content').innerHTML);

            //===> Update Cart Table <===//
            Phenix(".woocommerce-cart-form").forEach(table => table.innerHTML = data.fragments['.cart-table']);

            //====> Update Cart Count <====//
            Phenix(".cart-count").forEach(item => item.textContent = data.fragments['cart_count']);

            //===> Update Cart Item Remover <===//
            Phenix(".cart-item .cart-item-remover").on("click", (isClicked) => {
                //===> Prevent link navigation <===//
                isClicked.preventDefault();
                const button = isClicked.target;

                //===> Get the Item Key <===//
                const cartItemKey = button.getAttribute('data-cart_item_key');

                //===> Activate Loading Mode <===//
                Phenix(button).ancestor('.cart-item').classList.add('px-loading-inline');

                //===> Create Form Data Request <===//
                const formData = new URLSearchParams();
                formData.append('cart_item_key', cartItemKey);
                formData.append('action', 'woocommerce_remove_cart_item');

                //===> Remove the Item from the Cart <===//
                Phenix(document).pds_remove_from_cart(formData, cartItemKey);
            }, true);
        }
    })
    //===> Catch any errors <===//
    .catch(error => console.error('Error:', error));
});

/*====> D.O.M is Ready ? <====*/
Phenix(document).on("DOMContentLoaded", (loaded) => {
    //===> WooCommerce Sorting <===//
    Phenix('.woocommerce-ordering select').on('change', (select) => {
        //====> Get the Current Value <====//
        const sortValue = select.target.value;
        //====> Create new URL Params <====//
        const urlParams = new URLSearchParams(window.location.search);
        //====> Set URL Params <====//
        urlParams.set('orderby', sortValue);
        //====> Reload page with selected sorting <====//
        window.location.search = urlParams.toString();
    });

    //===> Custom Number Input <===//
    Phenix(".px-counter-input").forEach(counter => {
        //===> Get Elements <===//
        const input = counter.querySelector('input[type="number"]');
        const decrease = counter.querySelector('.decrease-btn');
        const increase = counter.querySelector('.increase-btn');
        const minValue = parseInt(input.getAttribute('min')) || 0;
        const maxValue = parseInt(input.getAttribute('max')) || 99999;
        const inputSteps = parseInt(input.getAttribute('data-step')) || 1;

        //===> Increase Number <===//
        const IncreaseNum = (clicked) => {
            //===> Get Input Element <===//
            let newVal = parseInt(input.value) + inputSteps;
            //===> Set Data <===//
            input.value = newVal < maxValue || newVal === maxValue ? newVal : maxValue;
        };
    
        //===> Decrease Number <===//
        const DecreaseNum = (clicked) => {
            //===> Get Input Element <===//
            let newVal = parseFloat(input.value) - inputSteps;
            //===> Set Data <===//
            input.value = newVal > minValue || newVal === minValue ? newVal : minValue;
        };

        Phenix(decrease).on('click', DecreaseNum);
        Phenix(increase).on('click', IncreaseNum);
    });
 
    //===> WooCommerce Add to Cart <===//
    Phenix(".pds-add-to-cart").on("click", isClicked => {
         //===> Prevent link navigation <===//
         isClicked.preventDefault();
         //===> Define Item Data <===//
         const button = isClicked.target;
         const productId = button.getAttribute('data-product');
 
         //===> Activate Loading Mode <===//
         button.classList.add('px-loading-inline');
 
         //===> Add the Item to the Cart <===//
         Phenix(document).pds_add_to_cart(button, productId);
    }, true);
 
    //===> WooCommerce Cart Item Remover <===//
    Phenix(".cart-item .cart-item-remover").on("click", (isClicked) => {
         //===> Prevent link navigation <===//
         isClicked.preventDefault();
         const button = isClicked.target;
 
         //===> Get the Item Key <===//
         const cartItemKey = button.getAttribute('data-cart_item_key');
 
         //===> Activate Loading Mode <===//
         Phenix(button).ancestor('.cart-item').classList.add('px-loading-inline');
 
         //===> Create Form Data Request <===//
         const formData = new URLSearchParams();
         formData.append('cart_item_key', cartItemKey);
         formData.append('action', 'woocommerce_remove_cart_item');
         
         //===> Remove the Item from the Cart <===//
         Phenix(document).pds_remove_from_cart(formData, cartItemKey);
    }, true);

    //===> Wishlist Toggle <===//
    Phenix(".pds-wishlist-btn").on("click", (isClicked) => {
        //===> Prevent Default <===//
        isClicked.preventDefault();
        //===> Define Data <===//
        let action_url = isClicked.target.getAttribute('href'),
            add_url = isClicked.target.setAttribute("href", isClicked.target.getAttribute("data-rm-url")),
            remove_url = isClicked.target.setAttribute("href", isClicked.target.getAttribute("data-add-url"));

        //====> Add Loading Mode <====//
        isClicked.target.classList.add("px-loading-inline");

        Phenix(document).pds_toggle_wishlist(isClicked, action_url, add_url, remove_url);
    }, true);

    //===> Add Multiple Products from Cart Page <===//
    Phenix(".add-products .add-products-btn").on("click", (isClicked) => {
        //===> Prevent link navigation <===//
        isClicked.preventDefault();
        //===> Define Item Data <===//
        const button = isClicked.target;
        const products = Phenix(button).ancestor('.add-products').querySelector(".px-select").getAttribute("data-value").split(",");
        //===> Activate Loading Mode <===//
        button.classList.add('px-loading-inline');
        //===> Add the Items to the Cart <===//
        Phenix(document).pds_add_to_cart(button, products);
    });

    //===> Variation Price Change <===//
    Phenix(".variation-control").on("change", isChanged => {
        //===> Make sure it is a valid controller <===//
        if (!isChanged.target.value) return;

        //===> Capture Select Element <===//
        let element = isChanged.target;
        let option = element.querySelector(`option[value="${element.value}"]`);

        //===> Get Data <===//
        let variation = element.value;
        let price = option?.getAttribute('data-price');

        //===> Update the Prices <===//
        Phenix(".single-product-content .price .price-num").forEach(element => element.textContent = price);

        //===> Set Variation ID to Add to Cart Button <===//
        if (variation) Phenix(".single-product-content .pds-add-to-cart").setAttributes({ "data-variation": element.value });
    });
});

