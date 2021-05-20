import 'ion-rangeslider';

jQuery(document).ready(($) => {
  const $inputFrom = $('.js-range-slider__values_from');
  const $inputTo = $('.js-range-slider__values_to');
  const track = function (data) {
    $inputFrom.html(` ${data.from} ₽ - `);
    $inputTo.html(` ${data.to} ₽`);
  };
  $('.js-range-slider__body').ionRangeSlider({
    type: 'double',
    min: 0,
    max: 15000,
    from: 5000,
    to: 10000,
    step: 100,
    onStart: track,
    onChange: track,
    onFinish: track,
    onUpdate: track,
  });
});
