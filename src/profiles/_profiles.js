$( document ).ready(function() {

  // Переключатель табов
  $('.profiles-tabpanel__link').on('click', function(e) {
    e.preventDefault();
    var target = $(this);
    var link = target.attr('href');

    $('.profiles-tabpanel__link').removeClass('profiles-tabpanel__link_active');
    target.addClass('profiles-tabpanel__link_active');

    $('.profiles-tab').removeClass('profiles-tab_active');
    $(link).addClass('profiles-tab_active');
  });

});
