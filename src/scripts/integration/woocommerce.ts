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
declare var PDS_WP_KEY: any;
declare var window: any;

/*====> Add to Cart Method <====*/
PhenixElements.prototype.pds_add_to_cart = function (button, quantity, product_id) {
    //===> Check if the product_id is empty <===//
    if (!product_id) { return; }

    //===> Create Form Data Request <===//
    const formURL = decodeURIComponent(wc_add_to_cart_params.wc_ajax_url.replace('%%endpoint%%', 'add_to_cart'));
    const formData = new URLSearchParams();
    formData.append('quantity', quantity.toString());
    formData.append('action', 'woocommerce_add_to_cart');
    formData.append('product_id', product_id.toString());

    //===> Send the request to WooCommerce via Fetch API <===//
    fetch(formURL, {
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
                type     : "custom",
                position : ["center", "center"],
                message  : `<div class="w-max-320 z-index-modal position-rv bg-white color-dark hidden radius-xxl pd-20 tx-align-center bx-shadow-dp-3" style="pointer-events: all">
                        <i class="fas fa-x-mark color-gray h1"></i>
                        <p>${data.error}</p>
                </div>`,
            });
        } else {
            //===> Disable loading mode <===//
            button.classList.remove('px-loading-inline');

            //===> Trigger WooCommerce's AJAX event to update the cart fragments <===//
            document.body.dispatchEvent(new CustomEvent('pds_cart_updated', {detail: {}}));

            //===> Force Update Cart Quantity <===//
            Phenix(".cart-count").forEach(item => item.innerHTML = data.cart_count);

            //===> Show Cart Popup <===//
            const cartPopup:any = document.querySelector('#cart-popup');
            if (cartPopup) {
                cartPopup.classList.add('active');
                cartPopup.style.display = 'flex';
            }
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
PhenixElements.prototype.pds_toggle_wishlist = function (button, action_url, add_url, remove_url) {
    //===> Define Button <===//
    const ButtonProcess = (action_url) => {
        //====> Replace Icon Style <====//
        if (action_url.includes('add_to_wishlist')) {
            button.classList.add("fas");
            button.classList.remove("far");
            button.setAttribute("href", remove_url);
        } else {
            button.classList.add("far");
            button.classList.remove("fas");
            button.setAttribute("href", add_url);
        }
    }

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
                type     : "custom",
                position : ["center", "center"],
                message  : `<div class="w-max-320 z-index-modal position-rv bg-white color-dark hidden radius-xxl pd-20 tx-align-center bx-shadow-dp-3" style="pointer-events: all">
                        <i class="fas fa-check-circle color-success h1"></i>
                        <p>Wishlist Updated successfully.</p>
                </div>`,
            });

            ButtonProcess(action_url);
        }
        //====> Error Status <====//
        else {
            //====> Show Notifications <====//
            Phenix(document).notifications({
                duration : 5000,
                type     : "custom",
                position : ["center", "center"],
                message  : `<div class="w-max-320 z-index-modal position-rv bg-white color-dark hidden radius-xxl pd-20 tx-align-center bx-shadow-dp-3" style="pointer-events: all">
                        <i class="fas fa-x-mark color-gray h1"></i>
                        <p>Something Went Wrong, Please Try Again.</p>
                </div>`,
            });
        }

        //====> Remove Loading Mode <====//
        button.classList.remove("px-loading-inline");
    });
}

/*====> Fetch Product by ID and Render Template <====*/
PhenixElements.prototype.pds_get_product = function (productId, containerSelector) {
    //===> Check Product ID <===//
    if (!productId) return;

    //===> Create Form Data Request <===//
    const formData = new URLSearchParams();
    formData.append('action', 'pds_get_product');
    formData.append('product_id', productId.toString());

    //===> Create Loading Mode in Target Container <===//
    const container = document.querySelector(containerSelector);
    if (container) {
        container.classList.add('px-loading');
        container.innerHTML = '<div style="min-height: 200px;"></div>';
    }

    //===> Send the request to WooCommerce via Fetch API <===//
    fetch(PDS_WP_KEY.site + '/wp-admin/admin-ajax.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body: formData.toString()
    })
    //===> Return the Response as HTML <===//
    .then(response => response.text())
    //===> Insert HTML into target container <===//
    .then((html:string) => {
        //===> Get target container <===//
        const container = document.querySelector(containerSelector);
        //===> Insert HTML into target container <===//
        if (container) container.innerHTML = html;
        
        //===> Variation Price Change Initial Trigger <===//
        container.querySelectorAll(".variation-control").forEach(control => {
            control.dispatchEvent(new Event('change'));
        });

        //===> Remove Loading <===//
        container.classList.remove('px-loading');
    })
    .catch(err => console.error('Error fetching product:', err));
};

/*====> WooCommerce Quick View Product in Popup Modal <====*/
PhenixElements.prototype.pds_quick_view = function () {
    //===> Loop through Quick View Buttons <===//
    this.forEach((button:HTMLElement) => {
        //===> Capture Click Event <===//
        button.addEventListener("click", (isClicked) => {
            //===> Prevent Default <===//
            isClicked.preventDefault();
            //===> Get Product ID <===//
            const productId = button.getAttribute('data-id') || button.getAttribute('data-product');
            //===> Fetch Product Data and Render into Modal Body <===//
            Phenix(document).pds_get_product(productId, "#quick-view-modal .product-template-wrapper");
        });
    });
}

/*====> D.O.M is Ready ? <====*/
Phenix(document).on("DOMContentLoaded", (loaded) => {
    //===> Global Event Delegation <===//
    Phenix(document).on("click", (isClicked) => {
        //===> Define Target <===//
        const target = isClicked.target;

        //====> Case 1: Wishlist Toggle <====//
        if (target.closest(".pds-wishlist-btn")) {
            //===> Prevent Default <===//
            isClicked.preventDefault();
            //===> Define Button <===//
            const button = target.closest(".pds-wishlist-btn");
            //===> Define Data <===//
            let action_url = button.getAttribute('href'),
                add_url = button.getAttribute("data-add-url"),
                remove_url = button.getAttribute("data-rm-url");

            //====> Add Loading Mode <====//
            button.classList.add("px-loading-inline");

            Phenix(document).pds_toggle_wishlist(button, action_url, add_url, remove_url);
        }

        //====> Case 2: Add to Cart <====//
        if (target.closest(".pds-add-to-cart")) {
            //===> Prevent link navigation <===//
            isClicked.preventDefault();
            //===> Define Button <===//
            const button = target.closest(".pds-add-to-cart");
            //===> Get Product ID <===//
            const productId = button.getAttribute('data-variation') || button.getAttribute('data-product');
            //===> Get Quantity <===//
            const ancestor = Phenix(button).ancestor('.single-product-content') || Phenix(button).ancestor('.product-card') || Phenix(button).ancestor('.product-card-v2') || Phenix(button).ancestor('.product-var-item');
            const quantity = ancestor?.querySelector('.quantity-input')?.value || parseInt(button.getAttribute('data-quantity')) || 1;

            //===> Activate Loading Mode <===//
            button.classList.add('px-loading-inline');
    
            //===> Add the Item to the Cart <===//
            Phenix(document).pds_add_to_cart(button, quantity, productId);
        }

        //====> Case 3: Remove from Cart <====//
        if (target.closest(".cart-item-remover")) {
            //===> Prevent link navigation <===//
            isClicked.preventDefault();
            //===> Define Button <===//
            const button = target.closest(".cart-item-remover");
            //===> Get the Item Key <===//
            const cartItemKey = button.getAttribute('data-cart_item_key');
            //===> Activate Loading Mode <===//
            let cartItem = Phenix(button).ancestor('.cart-item');
            if (!cartItem) {
                cartItem = Phenix(button).ancestor('.item-info-bar');
                cartItem = Phenix(cartItem).prev('.cart-item');
            }
            
            cartItem.classList.add('px-loading-inline');
            //===> Create Form Data Request <===//
            const formData = new URLSearchParams();
            formData.append('cart_item_key', cartItemKey);
            formData.append('action', 'woocommerce_remove_cart_item');
            //===> Remove the Item from the Cart <===//
            Phenix(document).pds_remove_from_cart(formData, cartItemKey);
        }

        //====> Case 4: Add Multiple Products <====//
        if (target.closest(".pds-add-products-form .add-products-btn")) {
            //===> Prevent Default <===//
            isClicked.preventDefault();
            //===> Define Button <===//
            const button = target.closest(".add-products-btn");
            const products = Phenix(button).ancestor('.pds-add-products-form').querySelector(".px-select")?.getAttribute("data-value")?.split(",");
            //===> Get Quantity <===//
            const quantity = Phenix(button).ancestor('.pds-add-products-form')?.querySelector('.quantity-input')?.value || parseInt(button.getAttribute('data-quantity')) || 1;

            if (products) {
                //===> Activate Loading Mode <===//
                button.classList.add('px-loading-inline');
                //===> Add the Items to the Cart <===//
                products.forEach(product => {
                    Phenix(product).pds_add_to_cart(button, quantity, product);
                });
            }
        }
    });

    //===> Variation Price/Image Change (Using Delegation) <===//
    Phenix(document).on("change", (isChanged) => {
        //===> Capture Select Element <===//
        const element = isChanged.target;
        
        if (element.classList.contains("variation-control")) {
            //===> Make sure it is a valid controller <===//
            if (!element.value) return;

            const option = element.querySelector(`option[value="${element.value}"]`);

            //===> Get Data <===//
            let variation = element.getAttribute('data-variation');
            let option_name = element.name;
            const price = option?.getAttribute('data-price') || element.getAttribute('data-price');
            const image = option?.getAttribute('data-product-image') || element.getAttribute('data-product-image');

            //===> Update the Image <===//
            if (image) {
                Phenix(".single-product-image").setAttributes({ "src": image });
                //===> Update the Slider if Exists <===//
                const imageIndex = option?.getAttribute('data-slide-index') || element.getAttribute('data-slide-index');
                window.sliders?.forEach((sliderInstance:any) => {
                    if (sliderInstance?.root?.id === "gallery-slider" && imageIndex) {
                        sliderInstance.Components.Controller.go(parseInt(imageIndex));
                    }
                });
            }
 
            //===> Update the Prices <===//
            if (price) {
                Phenix(".single-product-content .price .price-num").forEach(el => el.textContent = price);
                Phenix(".single-product-content .price .woocommerce-Price-amount").forEach(el => el.innerHTML = price);
            }

            //===> Get the Actualt Variation that matches all selected options <===//
            if (option_name === "attribute_pa_color") {
                //===> Get the selected variation option <===//
                let currentVar:any = document.querySelector(".single-product-content .variation-control[data-variation][checked]");
                let selectedColor = element.value;
                let selectedVarValue = currentVar.value;
                let selectedName = currentVar.name;
                //===> Get the item and value if/when changed <===//
                document.querySelectorAll(`.variation-control[name="${currentVar.name}"]`).forEach((item:any) => {
                    if (item.checked) {
                        currentVar = item;
                        selectedVarValue = item.value;
                    }
                });
                //=== Get the variation that matches both the option and color ===//
                Object.keys(window.variations).forEach(item => {
                    //===> if the selected one skip it <===//
                        if (variation !== item) {
                            //===> Get the variation that matches the selected color <===//
                            if (selectedColor === window.variations[item]["attribute_pa_color"]) {
                                if (window.variations[item][selectedName] === selectedVarValue) variation = item;
                            }
                        };
                });
            } else {
                //===> Get Variation Data for Aligning and Compare <====//
                let selected_color;
                let selectedVar = window.variations[variation];
                let option_value = window.variations[variation][option_name];
                //===> If has Colors <===//
                if (selectedVar["attribute_pa_color"]) {
                    Object.keys(window.variations).forEach(item => {
                        //===> Get the Selected Color <===//
                        document.querySelectorAll(`.single-product-content .variation-control[name="attribute_pa_color"]`).forEach((color:any) => {
                            if (color.checked) selected_color = color.value;
                        });
                        //===> if the selected one skip it <===//
                        if (variation !== item) {
                            //===> Get the variation that matches the selected color <===//
                            if (option_value === window.variations[item][option_name]) {
                                if (window.variations[item]["attribute_pa_color"] === selected_color) variation = item;
                            }
                        };
                    });
                }
            }

            //===> Set the Currect Variation <===//
            if (variation) Phenix(".single-product-content .pds-add-to-cart").setAttributes({ "data-variation": variation });
        }
    });

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
                Phenix(".cart-count").forEach(item => item.innerHTML = data.fragments['cart_count']);
            }
        })
        .catch(error => console.error('Error refreshing cart:', error));
    });

    //===> WooCommerce Sorting <===//
    Phenix('.woocommerce-ordering select').on('change', (select) => {
        const sortValue = select.target.value;
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('orderby', sortValue);
        window.location.search = urlParams.toString();
    });

    //===> Quick View Popup Initializer <===//
    Phenix(".px-product-quick-view[data-modal='quick-view-modal']").pds_quick_view();
});