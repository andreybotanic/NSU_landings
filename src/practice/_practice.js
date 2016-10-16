$( document ).ready(function() {

  // Переключатель табов
  $('.practice-tabpanel__link').on('click', function(e) {
    e.preventDefault();
    var target = $(this);
    var link = target.attr('href');

    $('.practice-tabpanel__link').removeClass('practice-tabpanel__link_active');
    target.addClass('practice-tabpanel__link_active');

    $('.practice-tab').removeClass('practice-tab_active');
    $(link).addClass('practice-tab_active');
  });

});

$( document ).ready(function() {

  // Слайдер позиций
  $('.practice-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5
  });

});
