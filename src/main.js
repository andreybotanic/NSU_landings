/* Vendor deps */
//= ~/jquery/dist/jquery.min.js
//= ~/slick-carousel/slick/slick.min.js
//= ~/jquery.scrollTo/jquery.scrollTo.min.js
//= ~/filament-fixed/fixedfixed.js
//= ~/filament-sticky/fixedsticky.js
//= ~/wow/dist/wow.min.js
//= ~/parallax.js/parallax.min.js
//= ~/magnific-popup/dist/jquery.magnific-popup.min.js

/* Authored deps */

/* Common Blocks */

/* Blocks */
//= header/_header.js
//= profiles/_profiles.js
//= study/_study.js
//= discipline/_discipline.js
//= practice/_practice.js
//= olymp/_olymp.js
//= partners/_partners.js
//= reviews/_reviews.js
//= wow/_wow.js


$( document ).ready(function() {

  // Smooth scroll onclick for href=#id
  $('a.nav__link[href^="#"], a.first__scrolldown[href^="#"]').click(function(e) {
    // Prevent the jump and the #hash from appearing on the address bar
    e.preventDefault();
    // Scroll the window, stop any previous animation, stop on user manual scroll
    // Check https://github.com/flesler/jquery.scrollTo for more customizability
    $(window).stop(true).scrollTo(this.hash, {
      duration: 1000,
      // interrupt: true,   // Отключаем, иначе на айфоне не работает скроллинг
      offset: -122
    });
  });


  // Video popup
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


  // Images popup
  $('.popup-image').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    image: {
      verticalFit: true
    }
  });


});
