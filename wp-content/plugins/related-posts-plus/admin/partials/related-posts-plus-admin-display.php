<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       http://thebrauxelcode.com/
 * @since      1.0.0
 *
 * @package    Related_Posts_Plus
 * @subpackage Related_Posts_Plus/admin/partials
 */
?>

<!-- This file should primarily consist of HTML with a little bit of PHP. -->
<div class="related-post-wrap">
	<div class="related-posts-listed">
		<ul id="listed-posts">
		<?php 
			foreach( $custom_posts as $custom_postkey => $custom_post ):
		?>
			<li id="<?php echo $custom_postkey; ?>">
				<a href="#" class="post"><?php echo $custom_post; ?></a>				
			</li>
		<?php endforeach; ?>
		</ul>
	</div>
	
	<div class="related-posts-selected">
		<div id="selected-posts">
		</div>
	</div>
</div>