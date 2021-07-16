import * as $ from 'jquery';
import 'ion-rangeslider';

$(document).ready(() => {
  const $values = $('.js-range-slider__values');
  const track = (data) => {
    $values.val(` ${data.from}₽ - ${data.to}₽`);
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
