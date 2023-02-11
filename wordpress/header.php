<?php wp_enqueue_style('style', get_stylesheet_uri()); ?>
<div class="custom-header">
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const navbarBurger = document.getElementById('navbar-burger')
      navbarBurger.addEventListener('click', () => {
        const target = navbarBurger.dataset.target;
        const $target = document.getElementById(target);
        navbarBurger.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      })
    });
  </script>

  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item is-size-4 has-text-weight-bold" href="<?php bloginfo('url'); ?>">
        <?php bloginfo('name'); ?>
      </a>

      <a role="button" class="navbar-burger" id="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="<?php echo get_option("home"); ?>">
          Home
        </a>
        <a class="navbar-item" href="<?php echo get_permalink(1); ?>">
          Post
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-link">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
</div>
</nav>