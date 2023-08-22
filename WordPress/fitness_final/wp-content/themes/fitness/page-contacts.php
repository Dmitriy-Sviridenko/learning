<?php
/*
Template Name: Шаблон "Контакты"
*/
?>

<?php get_header(); ?>
<section id="contact">
      <div class="container">
         <div class="row">
            <div class="col-sm-12">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A657f18d73d40980dd38bc2678974dd99b66f3378ae061ef96185d6d21cab8925&amp;source=constructor" 
               width="100%" height="602" frameborder="0">
            </iframe>
               <div class="contact-card">
                  <h2>Наши контакты</h2>
                  <div class="contact-item"><span>Адрес:</span><?php the_field("site_address", "options"); ?></div>
                  <div class="contact-item"><span>Телефон:</span> <a href="tel:<?php the_field("site_tel", "options"); ?>"><?php the_field("site_tel", "options"); ?></a></div>
                  <div class="contact-item"><span>Email:</span> <a href=<?php the_field("site_mail", "options"); ?>><?php the_field("site_mail", "options"); ?></a></div>
                  <div class="contact-item"><span>Часы роботы:</span><?php the_field("site_worktime", "options"); ?></div>
               </div>
            </div>
         </div>
      </div>
   </section>
<?php get_footer(); ?>

