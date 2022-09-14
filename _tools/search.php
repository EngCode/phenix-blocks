<?php
	/**
	 * this template for displaying Search Resault
	 * @package Tornado Wordpress
	*/
?>

<!-- Head Tag -->
<?php get_header(); ?>
<!-- Header -->
<?php get_template_part('inc/template-parts/components/header'); ?>
<!-- Page Head -->
<?php get_template_part('inc/template-parts/components/breadcumb'); ?>

<!-- Page Content -->
<div class="section-small">
    <div class="container clear-after">
		<!-- Page Content -->
		<?php //==== Loop Start ====// 
			if (have_posts() && strlen(trim(get_search_query())) != 0) :
				echo '<div class="alert"><b>"'. __('Search Resault for ','tornado') . $s .'"</b></div>';
				echo '<div class="row">';
					while (have_posts()) : the_post(); 
					//=== Get the Design Part ===//
					get_template_part('inc/template-parts/cards/product','block');
					//==== End Loop =====//
					endwhile;
				echo '</div>';
			else :
		?>
		<div class="alert danger"><b><?php echo __('No results found for ','tornado') . $s . __('Try Another Keywords ','tornado'); ?>"</b></div>
		<?php get_search_form(); ?>
		<?php endif; ?>
	</div>
</div>
<!-- // Page Content -->

<!-- Custom Footer --> 
<?php get_template_part('inc/template-parts/components/footer'); ?>
<!-- Footer -->
<?php get_footer(); ?>