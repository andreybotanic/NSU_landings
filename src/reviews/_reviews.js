$( document ).ready(function() {

  // Развернуть/свернуть отзыв
  $('.review__button_open').on('click', function(e) {
    e.preventDefault();

    var link = $(this).parents('.review');

    if (link.hasClass('review_open')) {
      link.removeClass('review_open');
    } else {
      link.addClass('review_open');
    }
  });

  $('.review__text-close').on('click', function(e) {
    e.preventDefault();

    $(this).parents('.review').removeClass('review_open');
  });


  // Слайдер отзывов
  $('.reviews').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true
  });

});
