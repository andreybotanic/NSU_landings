$( document ).ready(function() {

  // Переключатель табов
  $('.discipline-tabpanel__link').on('click', function(e) {
    e.preventDefault();
    var target = $(this);
    var link = target.attr('href');

    $('.discipline-tabpanel__link').removeClass('discipline-tabpanel__link_active');
    target.addClass('discipline-tabpanel__link_active');

    $('.discipline-tab').removeClass('discipline-tab_active');
    $(link).addClass('discipline-tab_active');
	  jQuery(window).trigger('resize').trigger('scroll');
  });

});
