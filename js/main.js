
/* 
   Touch Owl Carousel
   ========================================================================== */
    $(".touch-slider").owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        items: 1,
        itemsDesktopSmall: [1024, 1],
        itemsTablet: [600, 1],
        itemsMobile: [479, 1]
    });
    $('.touch-slider').find('.owl-prev').html('<i class="fa fa-chevron-left"></i>');
    $('.touch-slider').find('.owl-next').html('<i class="fa fa-chevron-right"></i>');

/* 
   Sticky Nav
   ========================================================================== */
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });

/*   Back Top Link 
========================================================================== */
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });
    $('.back-to-top').click(function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    })

/* 
   One Page Navigation & wow js
   ========================================================================== */
  jQuery(document).ready(function() {
     
      $('body').scrollspy({
          target: '.navbar-collapse',
          offset: 195
      });

      $(window).on('scroll', function() {
          if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
      });

  });

/* 
   Show Medium Blog Section
========================================================================== */
  var $window = $(window);
  var $slideAd = $('#popup-box');
  var endZone = $('footer').offset().top - $window.height() - 500;

  $window.on('scroll', function() {
    if ($window.scrollTop() > 2184) {
      $slideAd.animate({ 'right': '0px' }, 250);
    } else {
      $slideAd.stop(true).animate({ 'right': '-360px' }, 150);
    }

  });