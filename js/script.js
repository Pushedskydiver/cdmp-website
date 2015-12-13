(function($) {
  "use strict";





//------------------------------------- START: Smooth scroll setup ------------------------------------------------//

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
      $('html,body').animate({
          scrollTop: target.offset().top
    -40}, 2000);
      return false;
       }
      }
   });
});

//------------------------------------- END: Smooth scroll setup ------------------------------------------------//





//------------------------------------- START: Navigation setup ------------------------------------------------//

$(function() {
    //caches a jQuery object containing the header element
    var header = $('header');
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var nav = $('.nav');

        if (scroll > 50) {
                nav.addClass('dark').fadeIn(1000);

            }
          else {
            if (scroll != 0) {
            nav.removeClass('dark').fadeIn(500);
          }
        }

    });
  });

//------------------------------------- END: Navigation setup ------------------------------------------------//





//------------------------------------- START: Mobile navigation setup ------------------------------------------------//

$(function() {

  $(window).resize(function(){

    if ($(window).width() > 700) {
      $('.trigger-nav').css('display', 'none');
      $('.main-nav').css('display', 'block');

      if ($('.trigger-nav').hasClass('open-nav')) {
        $('.trigger-nav').removeClass('open-nav');
      }
    } else if ($(window).width() < 700) {
      $('.trigger-nav').css('display', 'block');
      $('.main-nav').css('display', 'none');
    }

  });

  $('.trigger-nav').on('click', function() {

  	if (!$(this).hasClass('open-nav')) {
  		$(this).addClass('open-nav');
  		toggleNav(true);
  	} else {
  		$(this).removeClass('open-nav');
  		toggleNav(false);
  	}

  });

  $(window).bind('scroll', function() {

    if ($('.trigger-nav').hasClass('open-nav')) {
      $('.trigger-nav').removeClass('open-nav');
      toggleNav(false);
    }

  });

  function toggleNav(bool) {

  	if (bool === true) $('.main-nav').slideDown();
  	else $('.main-nav').slideUp();

  }

});

//------------------------------------- END: Mobile navigation setup ------------------------------------------------//




})(jQuery);
