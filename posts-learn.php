<section class="posts-grid p-wrap">
<?php
	$args = array( 'posts_per_page' => 10, 'category_name' => 'learn', 'order'=> 'ASC', 'orderby' => 'date' );
	$postslist = get_posts( $args );
	
	foreach ( $postslist as $post ) :
	  setup_postdata( $post ); ?> 

		<div class="post-list-item pad-t-b-30px clear">
			<div class="p-l blog-thumb">
			<a href="<?php the_permalink(); ?>">
			<?php 
				if ( has_post_thumbnail() ) { // check if the post has a Post Thumbnail assigned to it.
				the_post_thumbnail();
					} 
				else  { ?> 
				<img class="pad-20px" src="<?php echo get_template_directory_uri();?>/img/def-img.png" alt="Logo"> 
				<?php } ?>
			</a>
			</div>
			
			<div class="post-info">
				<a  href="<?php the_permalink(); ?>" class="txt-grey-7">
				<h2 class="title-2"><?php the_title(); ?></h2>
				</a>  
				<p class="txt-wht"><?php the_excerpt(); ?></p>
			</div>
		</div>
	<?php
	endforeach; 
	wp_reset_postdata();

?>
</section>