<?php
/*=====> Phenix Custom Spacing Collector <=====//
 * Generates flat CSS classes for custom padding/margin values
 * Replaces the old CSS variable cascade that killed performance
 * Version: 2.0.0
 */

//=====> Exit if accessed directly <=====//
if (!defined('ABSPATH')) : die('You are not allowed to call this page directly.'); endif;

/*=====> Spacing Collector Class <=====//
 * Collects custom spacing values from block attributes and generates
 * flat CSS classes on save_post. Outputs them in wp_head.
 */
class PDS_Spacing_Collector {
    //===> Collected Rules <===//
    private static $rules = [];

    //===> Breakpoints Map <===//
    private static $breakpoints = [
        'sm' => '576px',
        'md' => '768px',
        'lg' => '992px',
        'xl' => '1200px',
    ];

    //===> Predefined Range <===//
    private static $utilities_range = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

    //=====> Register a Custom Spacing Rule <=====//
    public static function add($property, $direction, $value, $breakpoint = '') {
        //===> Skip if in predefined range <===//
        if (in_array((int)$value, self::$utilities_range)) {
            return null;
        }

        //===> Build the Class Name <===//
        $class = self::build_class($property, $direction, $value, $breakpoint);

        //===> Store if New <===//
        if (!isset(self::$rules[$class])) {
            self::$rules[$class] = [
                'property'   => $property,
                'direction'  => $direction,
                'value'      => (int) $value,
                'breakpoint' => $breakpoint,
                'class'      => $class,
            ];
        }

        return $class;
    }

    //=====> Build CSS Class Name <=====//
    private static function build_class($property, $direction, $value, $breakpoint) {
        //===> Prefix <===//
        $prefix = $property === 'padding' ? 'pd' : 'mg';

        //===> Direction <===//
        $dir = 't';
        if ($direction === 'bottom')  $dir = 'b';
        if ($direction === 'start')   $dir = 's';
        if ($direction === 'end')     $dir = 'e';
        if ($direction === 'inline')  $dir = 'x';
        if ($direction === 'block')   $dir = 'y';

        //===> Breakpoint Suffix <===//
        $suffix = $breakpoint ? "-{$breakpoint}" : "";

        return $prefix . $dir . $suffix . '-' . $value;
    }

    //=====> Output CSS in wp_head <=====//
    public static function output() {
        //===> Get Cached CSS <===//
        if (!is_singular()) return;
        $post_id = get_queried_object_id();
        $css = get_post_meta($post_id, '_pds_custom_spacing', true);

        //===> Print if Exists <===//
        if (!empty($css)) {
            echo '<style id="pds-custom-spacing">' . wp_strip_all_tags($css) . '</style>';
        }
    }

    //=====> Generate and Cache CSS <=====//
    public static function generate($post_id, $post) {
        //===> Skip Autosaves <===//
        if (wp_is_post_autosave($post_id) || wp_is_post_revision($post_id)) return;

        //===> Reset Rules <===//
        self::$rules = [];

        //===> Parse Blocks <===//
        $blocks = parse_blocks($post->post_content);
        self::walk_blocks($blocks);

        //===> Build CSS String <===//
        $css = self::build_css();

        //===> Save or Delete <===//
        if (!empty($css)) {
            update_post_meta($post_id, '_pds_custom_spacing', $css);
        } else {
            delete_post_meta($post_id, '_pds_custom_spacing');
        }
    }

    //=====> Walk Blocks Recursively <=====//
    private static function walk_blocks($blocks) {
        foreach ($blocks as $block) {
            //===> Skip Non-Phenix <===//
            if (!isset($block['blockName']) || strpos($block['blockName'], 'phenix/') !== 0) {
                if (!empty($block['innerBlocks'])) {
                    self::walk_blocks($block['innerBlocks']);
                }
                continue;
            }

            //===> Extract Attributes <===//
            $attrs = $block['attrs'] ?? [];
            self::extract_spacing($attrs);

            //===> Inner Blocks <===//
            if (!empty($block['innerBlocks'])) {
                self::walk_blocks($block['innerBlocks']);
            }
        }
    }

    //=====> Extract Spacing from Attributes <=====//
    private static function extract_spacing($attrs) {
        //===> Padding Keys <===//
        $is_padding = ['pdt', 'pds', 'pde', 'pdb'];
        //===> Margin Keys <===//
        $is_margin  = ['mt', 'mb', 'ms', 'me'];
        //===> Direction Map <===//
        $directions = [
            'pdt' => 'top',    'mt' => 'top',
            'pdb' => 'bottom', 'mb' => 'bottom',
            'pds' => 'start',  'ms' => 'start',
            'pde' => 'end',    'me' => 'end',
        ];

        //===> Walk Attribute Groups <===//
        foreach ($attrs as $group_name => $group_values) {
            if (!is_array($group_values)) continue;

            foreach ($group_values as $key => $value) {
                //===> Validate Value <===//
                if (!is_numeric($value) || $value < 0) continue;

                //===> Check if Padding or Margin <===//
                $is_pad = false;
                $is_mar = false;
                $clean_key = $key;

                foreach ($is_padding as $prefix) {
                    if (strpos($key, $prefix) === 0) {
                        $is_pad = true;
                        $clean_key = $prefix;
                        break;
                    }
                }

                foreach ($is_margin as $prefix) {
                    if (strpos($key, $prefix) === 0) {
                        $is_mar = true;
                        $clean_key = $prefix;
                        break;
                    }
                }

                if (!$is_pad && !$is_mar) continue;

                //===> Extract Breakpoint <===//
                $breakpoint = '';
                if (preg_match('/-(md|lg|xl|sm)$/', $key, $matches)) {
                    $breakpoint = $matches[1];
                }

                //===> Determine Property and Direction <===//
                $property = $is_pad ? 'padding' : 'margin';
                $direction = $directions[$clean_key] ?? 'top';

                //===> Register <===//
                self::add($property, $direction, $value, $breakpoint);
            }
        }
    }

    //=====> Build CSS from Rules <=====//
    private static function build_css() {
        if (empty(self::$rules)) return '';

        $base = [];
        $responsive = [];

        foreach (self::$rules as $rule) {
            //===> Convert to REM <===//
            $rem = ($rule['value'] / 16) . 'rem';

            //===> Property Name <===//
            $prop = $rule['property'];

            //===> Direction <===//
            $dir = 'top';
            if ($rule['direction'] === 'bottom')  $dir = 'bottom';
            if ($rule['direction'] === 'start')    $dir = $prop . '-inline-start';
            if ($rule['direction'] === 'end')      $dir = $prop . '-inline-end';
            if ($rule['direction'] === 'inline')   $dir = $prop . '-inline';
            if ($rule['direction'] === 'block')    $dir = $prop . '-block';

            //===> Build Rule <===//
            $css = ".{$rule['class']} {{$dir}: {$rem};}\n";

            if (empty($rule['breakpoint'])) {
                $base[] = $css;
            } else {
                $responsive[$rule['breakpoint']][] = $css;
            }
        }

        //===> Assemble Output <===//
        $output = '';
        foreach ($base as $rule) {
            $output .= $rule;
        }

        foreach ($responsive as $bp => $rules) {
            $width = self::$breakpoints[$bp] ?? '768px';
            $output .= "@media (min-width: {$width}) {\n";
            foreach ($rules as $rule) {
                $output .= $rule;
            }
            $output .= "}\n";
        }

        return $output;
    }
}

//=====> Hooks <=====//
add_action('save_post', function($post_id, $post, $update) {
    PDS_Spacing_Collector::generate($post_id, $post);
}, 10, 3);

add_action('wp_head', function() {
    PDS_Spacing_Collector::output();
}, 20);
