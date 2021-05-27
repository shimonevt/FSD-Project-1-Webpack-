import 'slick-carousel';

jQuery(function ($) {
  const imageSlider = this.querySelectorAll('.js-card-hotel-room__image-slider');
  function sliderInit(index, elem) {
    $(elem).slick({
      prevArrow: '<div class="slick-prev"><i class="material-icons">expand_more</i></div>',
      nextArrow: '<div class="slick-next"><i class="material-icons">expand_more</i></div>',
      dots: true,
      dotsClass: 'slick-dots',
      customPaging(slider, i) {
        return '<div class="slick-dot custom"></div>';
      },
    });
  }

  $(imageSlider).each(sliderInit);
});
