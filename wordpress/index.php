<?php get_header(); ?>

<?php
if (have_posts()) :
  while (have_posts()) :
    the_post();
?>
    <section class="hero is-link is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <h1 class="title"><?php the_title() ?></h1>
          <p class="subtitle"><?php the_content() ?></p>
        </div>
      </div>
    </section>
<?php
  endwhile;
endif;
?>

<?php get_footer(); ?>