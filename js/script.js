
$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.tabs-triggers__item').click(function(e){
    e.preventDefault();

    $('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
    $('.tabs-content__item').removeClass('tabs-content__item--active');

    $(this).addClass('tabs-triggers__item--active');
    $($(this).attr('href')).addClass('tabs-content__item--active');
  });
});

new Swiper('.feedback-slider', {
  pagination: {
    el: '.swiper-pagination',
        // Буллеты
        clickable: true,
  },
  // Курсор перетаскивания
  grabCursor: true,
});
