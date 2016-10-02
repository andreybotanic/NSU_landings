$( document ).ready(function() {

  // Переключатель табов
  $('.olymp-tabpanel__link').on('click', function(e) {
    e.preventDefault();
    var target = $(this);
    var link = target.attr('href');

    $('.olymp-tabpanel__link').removeClass('olymp-tabpanel__link_active');
    target.addClass('olymp-tabpanel__link_active');

    $('.olymp-tab').removeClass('olymp-tab_active');
    $(link).addClass('olymp-tab_active');
  });
    
    $('.olympics-collapse').on('click', function(e) {
        e.preventDefault();
        var target = $(this);
        var link = target.attr('href');
        
        target.toggleClass('olympics-collapse_active');
        $(link).toggleClass('in');
    });

});
