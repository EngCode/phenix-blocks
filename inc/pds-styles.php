<?php
defined('ABSPATH') || exit;

if (get_option('pds_gfonts')) :
    echo '<link rel="preconnect" href="https://fonts.googleapis.com">';
    echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
endif;