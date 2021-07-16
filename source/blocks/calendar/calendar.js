import * as $ from 'jquery';
import 'air-datepicker';

$(document).ready(() => {
  const $calendar = document.querySelector('.js-calendar');
  $.fn.datepicker.language['my-lang'] = {

    days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    daysShort: ['Вос', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
    today: 'Применить',
    clear: 'Очистить',
    dateFormat: 'dd.mm.yyyy',
    timeFormat: 'hh:ii',
    firstDay: 1,

  };
  $($calendar).datepicker({
    language: 'my-lang',
    autoClose: false,
    range: true,
    inline: true,
    clearButton: true,
    todayButton: true,
    monthsField: 'monthsShort',
    classes: 'calendar-date-range-picker',
    prevHtml: '<i class="material-icons md-24">arrow_back</i>',
    nextHtml: '<i class="material-icons md-24">arrow_forward</i>',
    navTitles: {
      days: '<p class="nav-title-text">MM yyyy</p>',
      months: 'yyyy',
      years: 'yyyy1 - yyyy2',
    },
  }).data('datepicker');
});
