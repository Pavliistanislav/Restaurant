$(document).ready(function () {
  $('.hamburger-menu').on('click', function () {
    $('.toggle').toggleClass('open');
    $('.nav-list').toggleClass('open');
  });

  $('.nav-link').on('click', function () {
    $('.toggle').removeClass('open');
    $('.nav-list').removeClass('open');
  });

  $('nav a[href*="#"]').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top - 100,
      },
      2000,
    );
  });

  AOS.init({
    easing: 'ease',
    duration: 1000,
    once: true
  });
});
