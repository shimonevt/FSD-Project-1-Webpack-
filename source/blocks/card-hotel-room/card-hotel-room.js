import * as $ from 'jquery';
import 'slick-carousel';

$(document).ready(() => {
  const imageSlider = document.querySelectorAll('.js-card-hotel-room__image-slider');
  function sliderInit(index, elem) {
    $(elem).slick({
      prevArrow: '<div class="slick-prev"><i class="material-icons">expand_more</i></div>',
      nextArrow: '<div class="slick-next"><i class="material-icons">expand_more</i></div>',
      dots: true,
      dotsClass: 'slick-dots',
      customPaging() {
        return '<div class="slick-dot custom"></div>';
      },
    });
  }
  if (imageSlider) {
    $(imageSlider).each(sliderInit);
  }
});
