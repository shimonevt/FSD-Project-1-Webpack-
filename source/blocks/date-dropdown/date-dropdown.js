import 'air-datepicker';

jQuery(($) => {
  const $start = $('.js-first-date');
  const $end = $('.js-second-date');

  const RangeDatePicker = $($start).datepicker({
    language: 'my-lang',
    range: true,
    clearButton: true,
    todayButton: true,
    monthsField: 'monthsShort',
    classes: 'date-range-picker js-date-range-picker',
    prevHtml: '<i class="material-icons md-24">arrow_back</i>',
    nextHtml: '<i class="material-icons md-24">arrow_forward</i>',
    navTitles: {
      days: '<p class="nav-title-text">MM yyyy</p>',
      months: 'yyyy',
      years: 'yyyy1 - yyyy2',
    },
    onSelect(fd, date, ins) {
      function CheckIfStartsWithZero(num) {
        num = num.toString();
        return num.length === 1 ? `0${num}` : num;
      }
      function getDateForInput(i) {
        if (date[i] !== undefined) {
          const day = CheckIfStartsWithZero(date[i].getDate());
          const month = CheckIfStartsWithZero(date[i].getMonth() + 1);
          return `${day}.${month}.${date[i].getFullYear()}`;
        }
      }
      $start.val(getDateForInput(0));
      $end.val(getDateForInput(1));
    },
  }).data('datepicker');
  $('.js-date-range-picker .datepicker--button[data-action="today"]').click(() => {
    RangeDatePicker.hide();
  });
  $end.click((ev) => {
    const dateBar = ev.target.closest('.js-date__bar');
    $(dateBar).find($start).focus();
    RangeDatePicker('show');
  });
});
