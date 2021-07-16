import $ from 'jquery';
import '../calendar/calendar';

$(document).ready(() => {
  const $start = $('.js-date-dropdown__first-date');
  const $end = $('.js-date-dropdown__second-date');
  function secondDateClick(ev) {
    const dateBar = ev.target.closest('.js-date-dropdown');
    $(dateBar).find($start).focus();
  }
  function datePickerInit(index, $elem) {
    $($elem).datepicker({
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
      onShow(dp, animationCompleted) {
        if (animationCompleted) {
          dp.$datepicker.find('.datepicker--button[data-action="today"]').click(() => {
            $start.trigger('change');
            dp.hide();
          });
        }
      },
      onSelect(fd, date) {
        function CheckIfStartsWithZero(num) {
          const newNum = num.toString();
          return newNum.length === 1 ? `0${newNum}` : newNum;
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
  }
  $end.click(secondDateClick);
  $start.each(datePickerInit);
});
