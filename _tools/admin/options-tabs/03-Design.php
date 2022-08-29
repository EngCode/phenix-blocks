<?php
    /**
     * Tornado Theme - Options Tab
     * @package Tornado Wordpress
    */
    //======= Exit if Try to Access Directly =======//
    defined('ABSPATH') || exit;

    //====== Google Fonts API =======//
    $google_fonts_url = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyASxx2HUwsHJ0gXmEi5V1xJyBI6WeTq8Hk';
    //====== Fetch Google Fonts =======//
    $google_fonts_response = wp_remote_get($google_fonts_url, array(
        'timeout'     => 15,
        'redirection' => 10,
        'httpversion' => '1.0',
    ));
    
    //====== Get Fonts List as Json =======//
    if(!is_wp_error($google_fonts_response)) {
        $google_fonts_body = json_decode($google_fonts_response['body']);
        $font_list = $google_fonts_body->items;
    }
?>

<!-- Page Head -->
<div class="page-head">
    <h1><?php echo __('Design Options','tornado'); ?></h1>
</div>

<?php
    //=========== Google Fonts Error ===========//
    if (get_option('google_fonts') === '1' && is_wp_error($google_fonts_response)) :
        echo '<div class="alert danger">'.esc_html( $google_fonts_response->get_error_message()).'</div>';
    endif;
?>
<!-- Colors Palette -->
<div class="options-panel <?php if (get_option('colors_palette') != 1) : echo 'disabled'; endif;?>">
    <!-- Panel Title -->
    <h2 class="panel-title">
        <?php echo __('Color Palette','tornado'); ?>
        <label class="toggle-button">
            <input type="checkbox" name="colors_palette" class="panel-toggle" value="1" <?php checked(1, get_option('colors_palette'), true); ?>>
            <span></span>
        </label>
    </h2>
    <!-- // Panel Title -->

    <!-- Group -->
    <div class="row no-gutter">
        <!-- Control Item -->
        <div class="control-item box-3x1 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box align-between">
                <label for="primary_color">
                    <?php echo __('Primary Color','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Theme Design Primary Color','tornado'); ?>"></span>
                </label>
                <div class="color-picker">
                    <?php $color_val = get_option('primary_color'); ?>
                    <input type="text" name="primary_color" value="<?php echo $color_val; ?>" placeholder="<?php echo $color_val; ?>">
                    <div class="color-prev" style="background-color:<?php echo $color_val; ?>"></div>
                </div>
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item box-3x1 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box align-between">
                <label for="primary_color_hover">
                    <?php echo __('Primary Hover','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Theme Design Primary Hover Effect Color','tornado'); ?>"></span>
                </label>
                <div class="color-picker">
                    <?php $color_val = get_option('primary_hover'); ?>
                    <input type="text" name="primary_hover" value="<?php echo $color_val; ?>" placeholder="<?php echo $color_val; ?>">
                    <div class="color-prev" style="background-color:<?php echo $color_val; ?>"></div>
                </div>
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item box-3x1 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box align-between">
                <label for="primary_reverse">
                    <?php echo __('Primary Reverse','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Theme Design Primary Text Color','tornado'); ?>"></span>
                </label>
                <div class="color-picker">
                    <?php $color_val = get_option('primary_reverse'); ?>
                    <input type="text" name="primary_reverse" value="<?php echo $color_val; ?>" placeholder="<?php echo $color_val; ?>">
                    <div class="color-prev" style="background-color:<?php echo $color_val; ?>"></div>
                </div>
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item box-3x1 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box align-between">
                <label for="secondary_color">
                    <?php echo __('Secondary Color','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Theme Design Secondary Color','tornado'); ?>"></span>
                </label>
                <div class="color-picker">
                    <?php $color_val = get_option('secondary_color'); ?>
                    <input type="text" name="secondary_color" value="<?php echo $color_val; ?>" placeholder="<?php echo $color_val; ?>">
                    <div class="color-prev" style="background-color:<?php echo $color_val; ?>"></div>
                </div>
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item box-3x1 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box align-between">
                <label for="secondary_hover">
                    <?php echo __('Secondary Hover','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Theme Design Secondary Hover Effect Color','tornado'); ?>"></span>
                </label>
                <div class="color-picker">
                    <?php $color_val = get_option('secondary_hover'); ?>
                    <input type="text" name="secondary_hover" value="<?php echo $color_val; ?>" placeholder="<?php echo $color_val; ?>">
                    <div class="color-prev" style="background-color:<?php echo $color_val; ?>"></div>
                </div>
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item box-3x1 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box align-between">
                <label for="secondary_reverse">
                    <?php echo __('Secondary Reverse','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Theme Design Secondary Text Color','tornado'); ?>"></span>
                </label>
                <div class="color-picker">
                    <?php $color_val = get_option('secondary_reverse'); ?>
                    <input type="text" name="secondary_reverse" value="<?php echo $color_val; ?>" placeholder="<?php echo $color_val; ?>">
                    <div class="color-prev" style="background-color:<?php echo $color_val; ?>"></div>
                </div>
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item box-3x1 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box align-between">
                <label for="body_background">
                    <?php echo __('Body Background','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Theme Design Body Background Color','tornado'); ?>"></span>
                </label>
                <div class="color-picker">
                    <?php $color_val = get_option('body_background'); ?>
                    <input type="text" name="body_background" value="<?php echo $color_val; ?>" placeholder="<?php echo $color_val; ?>">
                    <div class="color-prev" style="background-color:<?php echo $color_val; ?>"></div>
                </div>
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item box-3x1 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box align-between">
                <label for="headlines_color">
                    <?php echo __('Headlines Text','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Theme Design Headlines Text Color','tornado'); ?>"></span>
                </label>
                <div class="color-picker">
                    <?php $color_val = get_option('headlines_color'); ?>
                    <input type="text" name="headlines_color" value="<?php echo $color_val; ?>" placeholder="<?php echo $color_val; ?>">
                    <div class="color-prev" style="background-color:<?php echo $color_val; ?>"></div>
                </div>
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item box-3x1 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box align-between">
                <label for="typography_color">
                    <?php echo __('Normal Text','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Theme Design Paragraphs Text Color','tornado'); ?>"></span>
                </label>
                <div class="color-picker">
                    <?php $color_val = get_option('typography_color'); ?>
                    <input type="text" name="typography_color" value="<?php echo $color_val; ?>" placeholder="<?php echo $color_val; ?>">
                    <div class="color-prev" style="background-color:<?php echo $color_val; ?>"></div>
                </div>
            </div>
        </div>
        <!-- // Control Item -->
    </div>
    <!-- // Group -->

    <!-- Control Item -->
    <div class="control-item col-12 <?php if (is_rtl()) { echo 'rtl'; }?>">
        <div class="content-box">
            <label for="dark_mode">
                <?php echo __('Dark Mode','tornado'); ?>
                <span class="ti-help-mark help-btn" data-txt="<?php echo __('Enable/Disable Dark Mode Colors Palette','tornado'); ?>"></span>
            </label>
            <label class="toggle-button">
                <input type="checkbox" name="dark_mode" id="dark-mode-status" value="1" <?php checked(1, get_option('dark_mode'), true); ?>>
                <span></span>
            </label>
        </div>
    </div>
    <!-- // Control Item -->
</div>
<!-- // Colors Palette -->

<!-- Google Fonts -->
<div class="options-panel <?php if (get_option('google_fonts') != 1) : echo 'disabled'; endif;?>">
    <!-- Panel Title -->
    <h2 class="panel-title">
        <?php echo __('Google Fonts','tornado'); ?>
        <label class="toggle-button">
            <input type="checkbox" name="google_fonts" id="google-fonts-status" class="panel-toggle" value="1" <?php checked(1, get_option('google_fonts'), true); ?>>
            <span></span>
        </label>
    </h2>
    <!-- // Panel Title -->

    <!-- Group -->
    <div class="row no-gutter">
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 google-fonts-controler <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="primary_font">
                    <?php echo __('Headers Font','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Headers and Titles Font Family','tornado'); ?>"></span>
                </label>
                <select name="primary_font" class="advanced-select" data-value="<?php echo get_option('primary_font'); ?>">
                    <?php
                        if(!is_wp_error($google_fonts_response)) {
                            foreach ($font_list as $font ) :
                                //====== Check if Selected ======//
                                if ($font->family == get_option('primary_font')) {$is_selected = 'selected';} 
                                else {$is_selected = '';}
                                //====== Print Font Item ======//
                                echo '<option value="'.esc_attr($font->family).'">'.esc_html( $font->family).'</option>';
                            endforeach;
                        }
                    ?>
                </select>
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 google-fonts-controler <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="secondary_font">
                    <?php echo __('Normal Font','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Normal Text Font Family','tornado'); ?>"></span>
                </label>
                <select name="secondary_font" class="advanced-select" data-value="<?php echo get_option('secondary_font'); ?>">
                    <?php
                        if(!is_wp_error($google_fonts_response)) {
                            foreach ($font_list as $font ) :
                                //====== Check if Selected ======//
                                if ($font->family == get_option('secondary_font')) {$is_selected = 'selected';} 
                                else {$is_selected = '';}
                                //====== Print Font Item ======//
                                echo '<option value="'.esc_attr($font->family).'">'.esc_html( $font->family).'</option>';
                            endforeach;
                        }
                    ?>
                </select>
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 google-fonts-controler <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="primary_font_rtl">
                    <?php echo __('Headers Font RTL','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Headers and Titles Font Family','tornado'); ?>"></span>
                </label>
                <select name="primary_font_rtl" class="advanced-select" data-value="<?php echo get_option('primary_font_rtl'); ?>">
                    <?php
                        if(!is_wp_error($google_fonts_response)) {
                            foreach ($font_list as $font ) :
                                //====== Check if Selected ======//
                                if ($font->family == get_option('primary_font_rtl')) {$is_selected = 'selected';} 
                                else {$is_selected = '';}
                                //====== Print Font Item ======//
                                echo '<option value="'.esc_attr($font->family).'">'.esc_html( $font->family).'</option>';
                            endforeach;
                        }
                    ?>
                </select>
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 google-fonts-controler <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="secondary_font_rtl">
                    <?php echo __('Normal Font RTL','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Normal Text Font Family','tornado'); ?>"></span>
                </label>
                <select name="secondary_font_rtl" class="advanced-select" data-value="<?php echo get_option('secondary_font_rtl'); ?>">
                    <?php
                        if(!is_wp_error($google_fonts_response)) {
                            foreach ($font_list as $font ) :
                                //====== Print Font Item ======//
                                echo '<option value="'.esc_attr($font->family).'">'.esc_html( $font->family).'</option>';
                            endforeach;
                        }
                    ?>
                </select>
            </div>
        </div>
        <!-- // Control Item -->
    </div>
    <!-- // Group -->

    <!-- Panel Title -->
    <h2 class="panel-title mdtxt"><?php echo __('Font Weights','tornado'); ?></h2>
    <!-- // Panel Title -->

    <!-- Group -->
    <div class="row no-gutter">
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="normal_weight">
                    <?php echo __('Normal Weight','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Font Normal/Regular Weight.','tornado'); ?>"></span>
                </label>
                <select class="chevron-select" name="normal_weight" data-value="<?php echo get_option('normal_weight');?>">
                    <option value="100">Ultra light</option>
                    <option value="200">Light</option>
                    <option value="300">Book</option>
                    <option value="400">Regular</option>
                    <option value="500">Medium</option>
                    <option value="600">Semi-bold</option>
                    <option value="700">Bold</option>
                    <option value="800">Heavy</option>
                    <option value="900">Heavy-black</option>
                </select>
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="medium_weight">
                    <?php echo __('Medium Weight','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Font Medium/Semi-Bold Weight.','tornado'); ?>"></span>
                </label>
                <select class="chevron-select" name="medium_weight" data-value="<?php echo get_option('medium_weight');?>">
                    <option value="100">Ultra light</option>
                    <option value="200">Light</option>
                    <option value="300">Book</option>
                    <option value="400">Regular</option>
                    <option value="500">Medium</option>
                    <option value="600">Semi-bold</option>
                    <option value="700">Bold</option>
                    <option value="800">Heavy</option>
                    <option value="900">Heavy-black</option>
                </select>
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="strong_weight">
                    <?php echo __('Bold Weight','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Font Bold Weight.','tornado'); ?>"></span>
                </label>
                <select class="chevron-select" name="strong_weight" data-value="<?php echo get_option('strong_weight');?>">
                    <option value="100">Ultra light</option>
                    <option value="200">Light</option>
                    <option value="300">Book</option>
                    <option value="400">Regular</option>
                    <option value="500">Medium</option>
                    <option value="600">Semi-bold</option>
                    <option value="700">Bold</option>
                    <option value="800">Heavy</option>
                    <option value="900">Heavy-black</option>
                </select>
            </div>
        </div>
        <!-- // Control Item -->
    </div>
    <!-- // Group -->

    <!-- Panel Title -->
    <h2 class="panel-title mdtxt"><?php echo __('Responsive Font Sizes','tornado'); ?></h2>
    <!-- // Panel Title -->

    <!-- Group -->
    <div class="row no-gutter">
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="base_l_size">
                    <?php echo __('Font Size','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Desktop Base Font Size in px','tornado'); ?>"></span>
                </label>
                <input type="text" name="base_l_size" placeholder="<?php echo '16px'; ?>" value="<?php echo get_option('base_l_size'); ?>">
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="base_m_size">
                    <?php echo __('Tablet Font Size','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Tablet Base Font Size in px','tornado'); ?>"></span>
                </label>
                <input type="text" name="base_m_size" placeholder="<?php echo '16px'; ?>" value="<?php echo get_option('base_m_size'); ?>">
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="base_s_size">
                    <?php echo __('Mobile Font Size','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Mobile Base Font Size in px','tornado'); ?>"></span>
                </label>
                <input type="text" name="base_s_size" placeholder="<?php echo '16px'; ?>" value="<?php echo get_option('base_s_size'); ?>">
            </div>
        </div>
        <!-- Control Item -->
        <div class="control-item col-12 col-l-6 <?php if (is_rtl()) { echo 'rtl'; }?>">
            <div class="content-box">
                <label for="base_line_height">
                    <?php echo __('Font Line-Height','tornado'); ?>
                    <span class="ti-help-mark help-btn" data-txt="<?php echo __('Font Base Line Hight in points or precentage','tornado'); ?>"></span>
                </label>
                <input type="text" name="base_line_height" placeholder="<?php echo '1.658'; ?>" value="<?php echo get_option('base_line_height'); ?>">
            </div>
        </div>
        <!-- // Control Item -->
    </div>
    <!-- // Group -->
</div>
<!-- // Google Fonts -->
