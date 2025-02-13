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
include_once(ABSPATH . 'wp-admin/includes/plugin.php');
if (!is_plugin_active('woocommerce/woocommerce.php')) return;

//====> WooCommerce Optimizer <====//
if (!function_exists('woo_scripts_optimize')) :
    function woo_scripts_optimize() {
        //===> Define Scripts <===//
        $woo_scripts = array(
            "zoom",
            "photoswipe",
            "flexslider",
            "woocommerce",
            // "wc-add-to-cart",
            "sourcebuster-js",
            "wc-single-product",
            "wc-product-image-gallery-block",
        );

        //===> Define Styles <===//
        $woo_style = array(
            "wc-block-style",
            "woocommerce-inline",
            "woocommerce-layout",
            "woocommerce-general",
            "woocommerce-blocktheme",
            "wc-block-vendors-style",
            "woocommerce-smallscreen",
        );

        remove_action('wp_head', array($GLOBALS['woocommerce'], 'generator'));

        //===> Remove Scripts <===//
        foreach ($woo_scripts as $script) {
            wp_deregister_script($script);
        };

        //===> Remove Styles <===//
        foreach ($woo_style as $style) {
            wp_dequeue_style($style);
        };
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