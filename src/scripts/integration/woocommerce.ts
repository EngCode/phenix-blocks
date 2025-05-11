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
PhenixElements.prototype.pds_add_to_cart = function (button, quantity, product_id) {
    //===> Check if the product_id is empty <===//
    if (!product_id) { return; }

    //===> Create Form Data Request <===//
    const formData = new URLSearchParams();
    formData.append('quantity', quantity.toString());
    formData.append('action', 'woocommerce_add_to_cart');
    formData.append('product_id', product_id.toString());

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
            //===> Disable loading mode <===//
            button.classList.remove('px-loading-inline');

            //===> Trigger WooCommerce's AJAX event to update the cart fragments <===//
            document.body.dispatchEvent(new CustomEvent('pds_cart_updated', {detail: {}}));
    
            //====> Show Notifications <====//
            Phenix(document).notifications({
                duration : 5000,
                type     : "success",
                position : ["center", "center"],
                message  : "Product added to cart successfully.",
            });
        }
    })
    //===> Catch any errors <===//
    .catch(error => console.error('Error:', error));
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

/*====> D.O.M is Ready ? <====*/
Phenix(document).on("DOMContentLoaded", (loaded) => {
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
 
    //===> WooCommerce Add to Cart <===//
    Phenix(".pds-add-to-cart").on("click", (isClicked) => {
        //===> Prevent link navigation <===//
        isClicked.preventDefault();
        
        //===> Define Item Data <===//
        const button = isClicked.target;

        //===> Get Product ID <===//
        const productId = button.getAttribute('data-variation') || button.getAttribute('data-product');

        //===> Get Quantity <===//
        const ancestor = Phenix(button).ancestor('.single-product-content') || Phenix(button).ancestor('.product-var-item');
        const quantity = ancestor?.querySelector('.quantity-input')?.value || parseInt(button.getAttribute('data-quantity')) || 1;

        //===> Activate Loading Mode <===//
        button.classList.add('px-loading-inline');
 
        //===> Add the Item to the Cart <===//
        Phenix(document).pds_add_to_cart(button, quantity, productId);
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
    Phenix(".pds-add-products-form .add-products-btn").on("click", (isClicked) => {
        //===> Prevent link navigation <===//
        isClicked.preventDefault();

        //===> Define Item Data <===//
        const button = isClicked.target;
        const products = Phenix(button).ancestor('.pds-add-products-form').querySelector(".px-select").getAttribute("data-value").split(",");
        //===> Get Quantity <===//
        const quantity = Phenix(button).ancestor('.pds-add-products-form')?.querySelector('.quantity-input')?.value || parseInt(button.getAttribute('data-quantity')) || 1;

        //===> Activate Loading Mode <===//
        button.classList.add('px-loading-inline');

        //===> Add the Items to the Cart <===//
        products.forEach(product => {
            Phenix(product).pds_add_to_cart(button, quantity, product);
        });
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