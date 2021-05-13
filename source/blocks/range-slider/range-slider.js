import 'ion-rangeslider';

jQuery(document).ready(($) => { 
  const $inputFrom = $('.js-values-from');
  const $inputTo = $('.js-values-to');
  const track = function (data) {
    $inputFrom.html(` ${data.from} ₽ -`);
    $inputTo.html(` ${data.to} ₽`);
  };
  $(".js-range-slider__body").ionRangeSlider({
    type: 'double',
    min: 0,
    max: 15000,
    from: 5000,
    to: 10000,
    step : 100,
    onStart: track,
    onChange: track,
    onFinish: track,
    onUpdate: track
  });
})