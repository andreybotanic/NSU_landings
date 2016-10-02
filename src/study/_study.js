$( document ).ready(function() {

  // Переключатель табов
  $('.study-tabpanel__link').on('click', function(e) {
    e.preventDefault();
    var target = $(this);
    var link = target.attr('href');

    $('.study-tabpanel__link').removeClass('study-tabpanel__link_active');
    target.addClass('study-tabpanel__link_active');

    $('.study-tab').removeClass('study-tab_active');
    $(link).addClass('study-tab_active');
  });

});
