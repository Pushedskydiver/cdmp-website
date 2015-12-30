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
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var header = $('header');

        if (scroll > 50) {
                header.addClass('dark').fadeIn(1000);

            }
          else {
            if (scroll != 0) {
            header.removeClass('dark').fadeIn(500);
          }
        }

    });
  });

//------------------------------------- END: Navigation setup ------------------------------------------------//





//------------------------------------- START: Mobile navigation setup ------------------------------------------------//

$(function() {

  $(window).resize(function(){

    if ($(window).width() >= 980) {
      $('.trigger-nav').css('display', 'none');
      $('.main-nav').css('display', 'block');

      if ($('.trigger-nav').hasClass('open-nav')) {
        $('.trigger-nav').removeClass('open-nav');
      }
    } else if ($(window).width() < 980) {
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

  $(window).bind('resize', function() {

				if ($(window).width() >= 980) {
					$('.trigger-nav').css('display', 'none');
					$('.main-nav').css('display', 'block');

					if ($('.trigger-nav').hasClass('open-nav')) {
						$('.trigger-nav').removeClass('open-nav');
					}
				} else {
					$('.trigger-nav').css('display', 'block');
					$('.main-nav').css('display', 'none');
				}

			});

			$(window).bind('scroll', function() {

				if ($('.trigger-nav').hasClass('open-nav')) {
					$('.main-nav').css('display', 'block');
				}

			});

  function toggleNav(bool) {

  	if (bool === true) $('.main-nav').slideDown();
  	else $('.main-nav').slideUp();

  }

});

//------------------------------------- END: Mobile navigation setup ------------------------------------------------//





//------------------------------------- START: Footer Twitter setup ------------------------------------------------//

$(window).load(function()
{
// Define the style variables
var $text_color = "#9a9a9a";
var $name_color = "#9a9a9a";

// Apply the styles
$("iframe").contents().find('head').append('<style>.html, body, h1, h2, h3, blockquote, p, ol, ul, li, img, iframe, button, .thm-dark .retweet-credit,.h-feed, .stats strong{color:' + $text_color + ' !important; font-size: 1em !important; font-weight: 200 !important; font-family: "Kanit", sans-serif !important;}.var-borderless, .var-borderless .customisable-border{padding-left: 0 !important; padding-top: 0 !important;}.header .avatar{display:none !important;}span.p-nickname, .p-nickname b{font-size: 1.1em !important; font-weight: 600 !important; color: #b3b3b3 !important;}.var-chromeless .permalink, .footer, .env-narrow .header .p-name{display: none !important;}.env-narrow .tweet .header{padding-left: 0 !important;}.env-narrow .var-chromeless .tweet, .env-narrow.var-chromeless .tweet{padding-bottom: 0 !important;}.env-narrow .header .p-nickname{line-height: normal !important;}.p-name{color:'+$name_color+' !important; font-family: "Kanit", sans-serif !important; display: none;}</style>');
});

//------------------------------------- END: Footer Twitter setup ------------------------------------------------//



})(jQuery);
