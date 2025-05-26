<?php
/**
 * Phenix WP Optimization Functions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Phenix_WP
 * @since Phenix WP 1.0
 * 
 * ========> Reference by Comments <=======
 ** - WooCommerce Optimizer
 ** - Get Full Price
 ** - Custom Sorting
 ** - Cart Fragment
 ** - Custom Mini Cart Content
 ** - 
 ** - 
*/

if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

//====> . Check IF WooCommerce not Enabled . <=====//
if (!get_option('pds_woo_status') || get_option('pds_woo_status') == "off") {return;}

//====> WooCommerce Optimizer <====//
if (!function_exists('woo_scripts_optimize')) :
    function woo_scripts_optimize() {
        //===> Define Scripts <===//
        $woo_scripts = array(
            "zoom",
            "select2",
            "photoswipe",
            "flexslider",
            "woocommerce",
            "sourcebuster-js",
            "wc-single-product",
            "wc-product-image-gallery-block",
        );

        //===> Define Styles <===//
        $woo_style = array(
            "photoswipe",
            "wc-block-style",
            "jquery-selectBox",
            "woocommerce-inline",
            "woocommerce-layout",
            "woocommerce-general",
            "yith-wcwl-main-inline",
            "woocommerce-blocktheme",
            "wc-block-vendors-style",
            "photoswipe-default-skin",
            "woocommerce-smallscreen",
            "woocommerce_prettyPhoto",
            "yith-wcwl-add-to-wishlist",
            "wc-product-gallery-lightbox",
        );

        
        //===> Remove Scripts <===//
        if (get_option('pds_woo_js') == "on") {
            foreach ($woo_scripts as $script) {
                wp_deregister_script($script);
            };

            //===> Generator Disable <===//
            remove_action('wp_head', array($GLOBALS['woocommerce'], 'generator'));
        }

        //===> Remove Styles <===//
        if (get_option('pds_woo_css') == "on") {
            foreach ($woo_style as $style) {
                wp_dequeue_style($style);
            };
            remove_theme_support('wc-product-gallery-lightbox');
        }
    }

    add_action('wp_enqueue_scripts', 'woo_scripts_optimize', 99);
endif;

//===> Get Full Price <===//
if (!function_exists('get_product_price_data')):
    function get_product_price_data($product) {
        //===> Check for Product <===//
        if (!$product) return;

        //===> Initialize Prices <===//
        $regular_price = 0;
        $sale_price = 0;

        //===> Get Price from Variable Products <===//
        if ($product->is_type('variable')) {
            $prices = $product->get_variation_prices();
            $regular_price = !empty($prices['regular_price']) ? min($prices['regular_price']) : 0;
            $sale_price = !empty($prices['sale_price']) ? min($prices['sale_price']) : 0;
        } 
        //===> Get Price from Simple Products <===//
        else {
            $regular_price = $product->get_regular_price(); // Ensure correct price retrieval
            $sale_price = $product->get_sale_price(); // Get sale price
        }

        //====> Ensure Prices are Numeric Before Formatting <====//
        if (is_numeric($regular_price)) {
            $regular_price = wc_format_decimal($regular_price, 2); // Format to 2 decimal places
        }

        if (is_numeric($sale_price)) {
            $sale_price = wc_format_decimal($sale_price, 2); // Format to 2 decimal places
        }

        //====> Get Discount Percentage <====//
        $discount_percentage = 0;
        if ($sale_price && $regular_price && $sale_price < $regular_price) {
            $discount_percentage = round((($regular_price - $sale_price) / $regular_price) * 100);
        }

        //====> Return Data <====//
        return [
            'sale_price' => $sale_price,
            'regular_price' => $regular_price,
            'discount_percentage' => $discount_percentage,
            'currency' => get_woocommerce_currency(),
        ];
    }
endif;

//===> Custom Sorting <===//
if (!function_exists('pds_woo_products_sorting')):
    function pds_woo_products_sorting($query) {
        //===> Get Current Post Type <===//
        if (isset($post) && $post->ID) {
            $post_type = get_post_type($post->ID);
        } else {
            $post_type = get_post_type();
        }

        //====> Check if the URL has a Sorting Value and it is a Products Post Type <====//
        if (isset($_GET['orderby']) && $post_type === "product") {
            //===> Get the Current Sorting Type <===//
            $orderby = sanitize_text_field($_GET['orderby']);

            //===> Adjust the Query Based on the Value <===//
            switch ($orderby) {
                //===> Poplar First <===//
                case 'popularity':
                    $query->set('meta_key', 'total_sales');
                    $query->set('orderby', 'meta_value_num');
                    break;
                //===> Highest Rating First <===//
                case 'rating':
                    $query->set('meta_key', '_wc_average_rating');
                    $query->set('orderby', 'meta_value_num');
                    break;
                //===> Newest First <===//
                case 'date':
                    $query->set('orderby', 'date');
                    break;
                //===> Highest Price First <===//
                case 'price':
                    $query->set('meta_key', '_price');
                    $query->set('orderby', 'meta_value_num');
                    $query->set('order', 'ASC');
                    break;
                //===> Lowest Price First <===//
                case 'price-desc':
                    $query->set('meta_key', '_price');
                    $query->set('orderby', 'meta_value_num');
                    $query->set('order', 'DESC');
                    break;
                //===> Default <===//
                default:
                    $query->set('orderby', 'menu_order');
                break;
            }
        }
    }

    add_action('pre_get_posts', 'pds_woo_products_sorting');
endif;

//===> Cart Fragment <===//
if (!function_exists('pds_cart_table_fragment')):
    function pds_cart_table_fragment($fragments) {
        //===> Start Clean Data <===//
        ob_start();

        //===> Get the Template Part <===//
        get_template_part("template-parts/woo/cart-table");

        //===> Get the cart table HTML <===//
        $cart_table_html = ob_get_clean();

        //===> Add the Cart Table to the Fragments <===//
        $fragments['.cart-table'] = $cart_table_html;

        //===> Add Cart Count <===//
        $fragments['cart_count'] = WC()->cart->get_cart_contents_count();

        //===> Add Cart Total Price <===//
        $fragments['cart_total'] = WC()->cart->get_cart_total();

        //===> Return the Fragments <===//
        return $fragments;

        //====> End Connection <====//
        wp_die();
    }

    add_filter('woocommerce_add_to_cart_fragments', 'pds_cart_table_fragment');
endif;

//====> Cart Table Updater <====//
if (!function_exists('pds_woocommerce_update_cart')):
    function pds_woocommerce_update_cart() {
        //====> Check for Cart <====//
        if (WC()->cart) {
            //===> Recalculate totals <===//
            WC()->cart->calculate_totals();

            //===> Return Calculated Cart <===//
            wp_send_json_success(array(
                'message' => 'Cart updated successfully',
                'cart_total' => WC()->cart->get_cart_total(),
            ));
        } else {
            wp_send_json_error(array('message' => 'Cart not found'));
        }

        //====> End Connection <====//
        wp_die();
    }

    add_action('wp_ajax_update_cart', 'pds_woocommerce_update_cart'); 
    add_action('wp_ajax_nopriv_update_cart', 'pds_woocommerce_update_cart');
endif;

//===> Products Variation Attributes Select Creator <====//
if (!function_exists("pds_woo_attributes_select")):
    function pds_woo_attributes_select($attributes, $selected_attributes, $available_variations, $style = "radius-sm") {
        //===> Check the Selected Attribute <===//
        if (!$selected_attributes || !isset($selected_attributes)) { $selected_attributes = array(); }

        //====> for Each Attribute <====//
        foreach ($attributes as $attribute_name => $options) {
            //===> Correct the Name for Languages like Arabic <===//
            $option_name = strtolower(urlencode($attribute_name));
            $selected_attr = isset($selected_attributes[$option_name]) ? $selected_attributes[$option_name] : '';

            //===> Create Select Field <===//
            echo '<div class="w-150 me-15">';
                echo '<select name="attribute_'.$option_name.'" value="'.$selected_attr.'" id="'.$option_name.'" class="variation-control px-select form-control '.$style.'"  data-placeholder="'.__($attribute_name, 'woocommerce').'">';
                //===> Create Options <===//
                foreach ($options as $option) {
                    //===> Create Variation ID Holder <===//
                    $variation_id = 0;
                    $variation_price = null;

                    //===> Loop on Variations <===//
                    foreach ($available_variations as $variation) {
                        //===> Check if the Attribute in the Variation matches the current option <===//
                        if ($variation['attributes']['attribute_' . $option_name] == $option) {
                            //===> Assign the Correct ID <===//
                            $variation_id = $variation['variation_id'];
                            //===> Assign Price <===//
                            $variation_price = $variation['display_price'];
                        }
                    }

                    //===> Ensure Price is a Valid Number <===//
                    $variation_price = is_numeric($variation_price) ? $variation_price : 0.0;

                    //===> Check if the Option is Selected <===//
                    $selected = selected($selected_attributes[$option_name] ?? '', $option, false);

                    //===> Default Select the First Option if not selected <===//
                    if (!$selected) {
                        $selected = $available_variations[0]['attributes']['attribute_' . $option_name] == $option ? 'selected' : '';
                    }

                    //===> Create the Option <===//
                    echo '<option data-price="'.esc_attr(number_format($variation_price, 2, '.', '')).'" value="'.esc_attr($variation_id).'"'.$selected.'>'.esc_html($option).'</option>';
                }
                //====> End Select Field <====//
                echo '</select>';
            echo '</div>';
        }
    }
endif;