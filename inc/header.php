<?php
    /**
     * this template for displaying Head Tag
     * @package Phenix Wordpress
    */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <!-- Required Meta Tags -->
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <meta name="language" content="<?php echo bloginfo('language');?>">
    <meta http-equiv="x-ua-compatible" content="IE=edge"> <!-- charset="<?php echo bloginfo('charset');?>" -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <!-- Keywords in Home Page --> 
    <?php if ( is_home() || is_front_page() ) { ?>
        <meta name="keywords" content="<?php echo get_option('meta_keywords'); ?>" />
    <?php }?>
    <!-- Head Hook -->
    <?php wp_head(); ?>
    <!-- Include Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
</head>
<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>